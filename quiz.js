// Main quiz state
let quizData = [];
let selectedQuestions = [];
let currentIndex = 0;
const incorrect = [];

// Add global state for score and review
let score = 0;
let userAnswers = [];

// Separate score tracking for each question type
let documentScore = 0;
let locationScore = 0;
let contentScore = 0;
let documentTotal = 0;
let locationTotal = 0;
let contentTotal = 0;

// Timer tracking
let questionStartTime = null;
let questionTimes = [];

// Store the set of all document names for document selection
let allDocumentNames = [];

// Question type selection
let selectedQuestionTypes = {
  document: true,
  location: true,
  content: true
};

const fileInput = document.getElementById('fileInput');
const questionCountInput = document.getElementById('questionCount');
const startBtn = document.getElementById('startBtn');
const container = document.getElementById('quiz-container');
const progressIndicator = document.getElementById('progress-indicator');
const reviewContainer = document.getElementById('review-container');
const darkModeToggle = document.getElementById('darkModeToggle');

// Question type checkboxes
const documentCheck = document.getElementById('documentCheck');
const locationCheck = document.getElementById('locationCheck');
const contentCheck = document.getElementById('contentCheck');

// Add event listeners for question type checkboxes
documentCheck.addEventListener('change', () => {
  selectedQuestionTypes.document = documentCheck.checked;
  // If document is unchecked, uncheck location and content
  if (!documentCheck.checked) {
    locationCheck.checked = false;
    contentCheck.checked = false;
    selectedQuestionTypes.location = false;
    selectedQuestionTypes.content = false;
  }
});

locationCheck.addEventListener('change', () => {
  selectedQuestionTypes.location = locationCheck.checked;
  // If location is checked, ensure document is checked
  if (locationCheck.checked && !documentCheck.checked) {
    documentCheck.checked = true;
    selectedQuestionTypes.document = true;
  }
});

contentCheck.addEventListener('change', () => {
  selectedQuestionTypes.content = contentCheck.checked;
  // If content is checked, ensure document and location are checked
  if (contentCheck.checked) {
    if (!documentCheck.checked) {
      documentCheck.checked = true;
      selectedQuestionTypes.document = true;
    }
    if (!locationCheck.checked) {
      locationCheck.checked = true;
      selectedQuestionTypes.location = true;
    }
  }
});

// Directory input support (for Chrome/Edge/Opera)
let isDirectoryMode = false;
const dirInput = document.createElement('input');
dirInput.type = 'file';
dirInput.webkitdirectory = true;
dirInput.style.display = 'none';

// Add event listener to debug directory selection
dirInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    console.log('Directory selected, files detected:', e.target.files.length);
    console.log('Sample file paths:', Array.from(e.target.files).slice(0, 3).map(f => f.webkitRelativePath || f.name));
  }
});

document.body.appendChild(dirInput);

const modeToggle = document.createElement('button');
modeToggle.textContent = 'Switch to Directory Mode';
modeToggle.style.marginLeft = '1em';
fileInput.parentNode.insertBefore(modeToggle, fileInput.nextSibling);

modeToggle.addEventListener('click', () => {
  isDirectoryMode = !isDirectoryMode;
  if (isDirectoryMode) {
    fileInput.style.display = 'none';
    dirInput.style.display = '';
    modeToggle.textContent = 'Switch to File Mode';
    console.log('Switched to Directory Mode');
  } else {
    fileInput.style.display = '';
    dirInput.style.display = 'none';
    modeToggle.textContent = 'Switch to Directory Mode';
    console.log('Switched to File Mode');
  }
});

// Add "Load Default Questions" button
const loadDefaultBtn = document.createElement('button');
loadDefaultBtn.textContent = 'Load Default Questions';
loadDefaultBtn.style.marginLeft = '1em';
fileInput.parentNode.insertBefore(loadDefaultBtn, fileInput.nextSibling);

loadDefaultBtn.addEventListener('click', () => {
  if (typeof defaultQuizData !== 'undefined' && defaultQuizData.length > 0) {
    // Clear any previously loaded file data and use default questions
    quizData = defaultQuizData;
    allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
    
    // Update status indicator to show default questions are loaded
    const statusIndicator = document.getElementById('status-indicator');
    if (statusIndicator) {
      statusIndicator.innerHTML = `✅ Default questions loaded (${defaultQuizData.length} questions available)`;
    }
    
    // Clear file inputs
    fileInput.value = '';
    dirInput.value = '';
    
    startQuiz();
  } else {
    alert('Default questions not available. Please load a quiz file.');
  }
});

// Add test button for debugging directory loading
const testDirBtn = document.createElement('button');
testDirBtn.textContent = 'Test Directory';
testDirBtn.style.marginLeft = '1em';
testDirBtn.style.fontSize = '0.8em';
testDirBtn.style.padding = '0.3em 0.6em';
fileInput.parentNode.insertBefore(testDirBtn, fileInput.nextSibling);

testDirBtn.addEventListener('click', () => {
  console.log('=== Directory Input Test ===');
  console.log('isDirectoryMode:', isDirectoryMode);
  console.log('dirInput.webkitdirectory:', dirInput.webkitdirectory);
  console.log('dirInput.files.length:', dirInput.files.length);
  
  if (dirInput.files.length > 0) {
    console.log('Files in directory input:');
    Array.from(dirInput.files).forEach((file, index) => {
      console.log(`  ${index + 1}. ${file.name} (${file.webkitRelativePath || 'no relative path'})`);
    });
  } else {
    console.log('No files selected in directory input');
  }
  
  // Test the filter
  const testFiles = Array.from(dirInput.files).filter(f => f.name.endsWith('.json'));
  console.log('Files matching .json pattern:', testFiles.length);
  testFiles.forEach(f => console.log(`  - ${f.name}`));
  
  console.log('=== End Test ===');
});

// Auto-load default questions on page load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof defaultQuizData !== 'undefined' && defaultQuizData.length > 0) {
    quizData = defaultQuizData;
    allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
    // Set default question count to 10 if not specified
    if (!questionCountInput.value) {
      questionCountInput.value = '10';
    }
    
    // Add status indicator
    const statusDiv = document.createElement('div');
    statusDiv.id = 'status-indicator';
    statusDiv.style.marginTop = '0.5em';
    statusDiv.style.fontSize = '0.9em';
    statusDiv.style.color = '#666';
    statusDiv.innerHTML = `✅ Default questions loaded (${defaultQuizData.length} questions available)`;
    fileInput.parentNode.appendChild(statusDiv);
  }
});

// Dark mode toggle
function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  localStorage.setItem('quizDarkMode', on ? '1' : '0');
}
darkModeToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});
// Load dark mode preference
if (localStorage.getItem('quizDarkMode') === '1') setDarkMode(true);

// Responsive CSS and card style
const style = document.createElement('style');
style.textContent = `
  .question-pair {
    background: var(--card-bg, #fff);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    padding: 1.5em;
    margin-bottom: 2em;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    transition: background 0.3s;
  }
  .section-heading {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
  }
  button.option {
    width: 100%;
    text-align: left;
    margin: 0.3em 0;
    padding: 1em 1.2em;
    border-radius: 6px;
    border: 1px solid #ddd;
    background: var(--btn-bg, #f9f9f9);
    font-size: 1.1em;
    transition: background 0.2s, color 0.2s;
    cursor: pointer;
  }
  button.option:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  button.option.correct {
    background: #d4f8e8 !important;
    color: #1a7f37;
    border-color: #1a7f37;
    animation: pop 0.3s;
  }
  button.option.incorrect {
    background: #ffeaea !important;
    color: #b30000;
    border-color: #b30000;
    animation: shake 0.3s;
  }
  @keyframes pop { 0% { transform: scale(1); } 60% { transform: scale(1.08); } 100% { transform: scale(1); } }
  @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }
  .feedback {
    font-weight: bold;
    margin-top: 0.7em;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
  @keyframes fadeIn { to { opacity: 1; } }
  .score {
    font-size: 1.2em;
    margin: 1em 0;
    text-align: center;
  }
  @media (max-width: 700px) {
    .question-pair { padding: 1em; max-width: 98vw; }
    button.option { font-size: 1em; padding: 0.8em 0.7em; }
  }
  body.dark-mode {
    background: #181c1f;
    color: #e6e6e6;
  }
  body.dark-mode .question-pair {
    background: #23272b;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  }
  body.dark-mode button.option {
    background: #23272b;
    color: #e6e6e6;
    border-color: #444;
  }
  body.dark-mode button.option.correct {
    background: #1a7f37 !important;
    color: #fff;
    border-color: #1a7f37;
  }
  body.dark-mode button.option.incorrect {
    background: #b30000 !important;
    color: #fff;
    border-color: #b30000;
  }
  body.dark-mode {
    --border-color: #444;
  }
  body:not(.dark-mode) {
    --border-color: #ddd;
  }
`;
document.head.appendChild(style);

// Start quiz: load file(s), parse, select questions, begin
startBtn.addEventListener('click', () => {
  // If no file is selected and we have default data, use that
  if (!fileInput.files.length && !dirInput.files.length && quizData.length > 0) {
    startQuiz();
    return;
  }
  
  if (!isDirectoryMode) {
    if (!fileInput.files.length) {
      alert('Please choose a quiz JSON file or click "Load Default Questions".');
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const newData = JSON.parse(e.target.result);
        // Replace existing data with new data
        quizData = newData;
        // Clear any existing status indicator
        const statusIndicator = document.getElementById('status-indicator');
        if (statusIndicator) {
          statusIndicator.innerHTML = `📁 Loaded ${newData.length} questions from file`;
        }
      } catch (err) {
        alert('Could not parse quiz file as JSON.');
        return;
      }
      // Build document name set
      allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
      startQuiz();
    };
    reader.readAsText(fileInput.files[0]);
  } else {
    if (!dirInput.files.length) {
      alert('Please choose a directory with question JSON files or click "Load Default Questions".');
      return;
    }
    
    // Debug: Log what files were detected
    console.log('Directory input files:', Array.from(dirInput.files).map(f => f.name));
    
    // Only load *_questions.json files
    const files = Array.from(dirInput.files).filter(f => f.name.endsWith('.json'));
    
    console.log('Filtered question files:', files.map(f => f.name));
    
    if (!files.length) {
      // Show more detailed error message
      const allFiles = Array.from(dirInput.files).map(f => f.name);
      console.log('All files in directory:', allFiles);
      
      alert('No JSON files found in directory. Please ensure your question files have a .json extension');
      return;
    }
    
    let loaded = 0;
    let allQuestions = [];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const data = JSON.parse(e.target.result);
          if (Array.isArray(data)) {
            allQuestions = allQuestions.concat(data);
            console.log(`Loaded ${data.length} questions from ${file.name}`);
          } else {
            console.warn(`${file.name}: Not a list, skipping`);
          }
        } catch (err) {
          console.error(`Error parsing ${file.name}:`, err);
        }
        loaded++;
        if (loaded === files.length) {
          // Replace existing data with new data
          quizData = allQuestions;
          // Clear any existing status indicator
          const statusIndicator = document.getElementById('status-indicator');
          if (statusIndicator) {
            statusIndicator.innerHTML = `📁 Loaded ${allQuestions.length} questions from ${files.length} files`;
          }
          // Build document name set
          allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
          startQuiz();
        }
      };
      reader.readAsText(file);
    });
  }
});

function startQuiz() {
  const count = parseInt(questionCountInput.value, 10) || quizData.length;
  selectedQuestions = shuffleArray(quizData).slice(0, Math.min(count, quizData.length));
  currentIndex = 0;
  score = 0;
  userAnswers = [];
  
  // Reset separate score tracking
  documentScore = 0;
  locationScore = 0;
  contentScore = 0;
  documentTotal = 0;
  locationTotal = 0;
  contentTotal = 0;
  
  // Reset timer variables
  questionStartTime = null;
  questionTimes = [];
  
  // Update selected question types from checkboxes
  selectedQuestionTypes.document = documentCheck.checked;
  selectedQuestionTypes.location = locationCheck.checked;
  selectedQuestionTypes.content = contentCheck.checked;
  
  // Update status indicator
  const statusIndicator = document.getElementById('status-indicator');
  if (statusIndicator) {
    statusIndicator.innerHTML = `📝 Quiz started with ${selectedQuestions.length} questions from ${quizData.length} total questions`;
  }
  
  // Clear file inputs to show they've been processed
  fileInput.value = '';
  dirInput.value = '';
  
  fileInput.disabled = true;
  dirInput.disabled = true;
  questionCountInput.disabled = true;
  startBtn.disabled = true;
  documentCheck.disabled = true;
  locationCheck.disabled = true;
  contentCheck.disabled = true;
  container.innerHTML = '';
  reviewContainer.style.display = 'none';
  showDocumentQuestion();
  updateProgress();
}

function updateProgress() {
  progressIndicator.textContent =
    currentIndex < selectedQuestions.length
      ? `Question ${currentIndex + 1} of ${selectedQuestions.length}`
      : '';
}

// Show the document selection step for the current question
function showDocumentQuestion() {
  container.innerHTML = '';
  updateProgress();
  if (currentIndex >= selectedQuestions.length) {
    showCompletion();
    return;
  }
  
  // Start timer for this question set
  questionStartTime = Date.now();
  
  const q = selectedQuestions[currentIndex];
  const pairWrapper = document.createElement('div');
  pairWrapper.className = 'question-pair';
  
  // If document question is not selected, skip to next question
  if (!selectedQuestionTypes.document) {
    currentIndex += 1;
    showDocumentQuestion();
    return;
  }
  
  // Section heading
  const docHeading = document.createElement('div');
  docHeading.className = 'section-heading';
  docHeading.textContent = 'Step 1: Select the Document';
  pairWrapper.appendChild(docHeading);
  // Render document selection
  // Use allDocumentNames as options, shuffle for this question
  const docOptions = shuffleArray(allDocumentNames.slice());
  const docDiv = createQuestion(
    q.question,
    docOptions,
    q.document_answer,
    (isCorrect, userDocAnswer) => {
      if (selectedQuestionTypes.location) {
        showLocationQuestion(pairWrapper, q, isCorrect, userDocAnswer);
      } else if (selectedQuestionTypes.content) {
        // Skip location, go directly to content
        showContentQuestion(pairWrapper, q, isCorrect, userDocAnswer, false, null);
      } else {
        // Only document question selected
        handleQuestionComplete(q, isCorrect, userDocAnswer, false, null, false, null);
      }
    },
    'document',
    q.document_answer
  );
  pairWrapper.appendChild(docDiv);
  container.appendChild(pairWrapper);
}

// Show the location question below the document question
function showLocationQuestion(pairWrapper, q, docCorrect, docUserAnswer) {
  const locHeading = document.createElement('div');
  locHeading.className = 'section-heading';
  locHeading.textContent = 'Step 2: Find the Location';
  pairWrapper.appendChild(locHeading);
  const locationDiv = createQuestion(
    q.question,
    shuffleArray(q.location_options.slice()),
    q.location_answer,
    (isCorrect, userLocAnswer) => {
      if (selectedQuestionTypes.content) {
        showContentQuestion(pairWrapper, q, docCorrect, docUserAnswer, isCorrect, userLocAnswer);
      } else {
        // Skip content question
        handleQuestionComplete(q, docCorrect, docUserAnswer, isCorrect, userLocAnswer, false, null);
      }
    },
    'location',
    q.location_answer
  );
  pairWrapper.appendChild(locationDiv);
}

// Show the content question below the location question
function showContentQuestion(pairWrapper, q, docCorrect, docUserAnswer, locCorrect, locUserAnswer) {
  const contHeading = document.createElement('div');
  contHeading.className = 'section-heading';
  contHeading.textContent = 'Step 3: Answer the Question';
  pairWrapper.appendChild(contHeading);
  const contentDiv = createQuestion(
    q.question,
    shuffleArray(q.content_options.slice()),
    q.content_answer,
    (isCorrect, userContentAnswer) => {
      handleQuestionComplete(q, docCorrect, docUserAnswer, locCorrect, locUserAnswer, isCorrect, userContentAnswer);
    },
    'content',
    q.content_answer
  );
  pairWrapper.appendChild(contentDiv);
}

// Show completion summary
function showCompletion() {
  container.innerHTML = '';
  progressIndicator.textContent = '';
  
  // Calculate total possible score based on selected question types
  const questionsPerQuiz = (selectedQuestionTypes.document ? 1 : 0) + 
                          (selectedQuestionTypes.location ? 1 : 0) + 
                          (selectedQuestionTypes.content ? 1 : 0);
  const totalPossibleScore = selectedQuestions.length * questionsPerQuiz;
  
  const scoreDiv = document.createElement('div');
  scoreDiv.className = 'score';
  scoreDiv.textContent = `Total Score: ${score} / ${totalPossibleScore}`;
  container.appendChild(scoreDiv);
  
  // Display separate scores for each question type
  const detailedScoreDiv = document.createElement('div');
  detailedScoreDiv.style.textAlign = 'center';
  detailedScoreDiv.style.margin = '1em 0';
  detailedScoreDiv.style.padding = '1em';
  detailedScoreDiv.style.backgroundColor = 'var(--card-bg, #f5f5f5)';
  detailedScoreDiv.style.borderRadius = '8px';
  detailedScoreDiv.style.border = '1px solid var(--border-color, #ddd)';
  
  let detailedScoreHTML = '<h3>Detailed Scores</h3>';
  
  if (selectedQuestionTypes.document) {
    const docPercentage = documentTotal > 0 ? Math.round((documentScore / documentTotal) * 100) : 0;
    detailedScoreHTML += `<p><strong>Document Questions:</strong> ${documentScore} / ${documentTotal} (${docPercentage}%)</p>`;
  }
  
  if (selectedQuestionTypes.location) {
    const locPercentage = locationTotal > 0 ? Math.round((locationScore / locationTotal) * 100) : 0;
    detailedScoreHTML += `<p><strong>Location Questions:</strong> ${locationScore} / ${locationTotal} (${locPercentage}%)</p>`;
  }
  
  if (selectedQuestionTypes.content) {
    const contPercentage = contentTotal > 0 ? Math.round((contentScore / contentTotal) * 100) : 0;
    detailedScoreHTML += `<p><strong>Content Questions:</strong> ${contentScore} / ${contentTotal} (${contPercentage}%)</p>`;
  }
  
  detailedScoreDiv.innerHTML = detailedScoreHTML;
  container.appendChild(detailedScoreDiv);
  
  // Display timing statistics
  if (questionTimes.length > 0) {
    const timingDiv = document.createElement('div');
    timingDiv.style.textAlign = 'center';
    timingDiv.style.margin = '1em 0';
    timingDiv.style.padding = '1em';
    timingDiv.style.backgroundColor = 'var(--card-bg, #f5f5f5)';
    timingDiv.style.borderRadius = '8px';
    timingDiv.style.border = '1px solid var(--border-color, #ddd)';
    
    const shortest = Math.min(...questionTimes);
    const longest = Math.max(...questionTimes);
    const average = questionTimes.reduce((sum, time) => sum + time, 0) / questionTimes.length;
    
    timingDiv.innerHTML = `
      <h3>Timing Statistics</h3>
      <p><strong>Shortest time:</strong> ${formatTime(shortest)}</p>
      <p><strong>Longest time:</strong> ${formatTime(longest)}</p>
      <p><strong>Average time:</strong> ${formatTime(average)}</p>
      <p><strong>Total questions:</strong> ${questionTimes.length}</p>
    `;
    
    container.appendChild(timingDiv);
  }
  
  const done = document.createElement('h2');
  done.textContent = 'Quiz complete!';
  container.appendChild(done);
  const reviewBtn = document.createElement('button');
  reviewBtn.textContent = 'Review Answers';
  reviewBtn.style.marginRight = '1em';
  reviewBtn.onclick = showReview;
  container.appendChild(reviewBtn);
  const newBtn = document.createElement('button');
  newBtn.textContent = 'New Quiz';
  newBtn.onclick = () => {
    // Reset controls
    fileInput.disabled = false;
    dirInput.disabled = false;
    questionCountInput.disabled = false;
    startBtn.disabled = false;
    documentCheck.disabled = false;
    locationCheck.disabled = false;
    contentCheck.disabled = false;
    
    // Reset status indicator
    const statusIndicator = document.getElementById('status-indicator');
    if (statusIndicator && typeof defaultQuizData !== 'undefined' && defaultQuizData.length > 0) {
      statusIndicator.innerHTML = `✅ Default questions loaded (${defaultQuizData.length} questions available)`;
    }
    
    location.reload();
  };
  container.appendChild(newBtn);
}

// Review mode: show all questions and user's answers
function showReview() {
  container.innerHTML = '';
  reviewContainer.innerHTML = '';
  reviewContainer.style.display = '';
  const title = document.createElement('h2');
  title.textContent = 'Review Your Answers';
  reviewContainer.appendChild(title);
  userAnswers.forEach((item, idx) => {
    const pair = document.createElement('div');
    pair.className = 'question-pair';
    
    // Document part
    if (selectedQuestionTypes.document) {
      const docHead = document.createElement('div');
      docHead.className = 'section-heading';
      docHead.textContent = `Step 1: Select the Document`;
      pair.appendChild(docHead);
      const docQ = document.createElement('div');
      docQ.textContent = item.question;
      pair.appendChild(docQ);
      const docA = document.createElement('div');
      docA.innerHTML = `<b>Your answer:</b> ${item.document_user || '<i>No answer</i>'} <br> <b>Correct answer:</b> ${item.document_answer}`;
      docA.style.color = item.document_correct ? '#1a7f37' : '#b30000';
      pair.appendChild(docA);
    }
    
    // Location part
    if (selectedQuestionTypes.location) {
      const locHead = document.createElement('div');
      locHead.className = 'section-heading';
      locHead.textContent = `Step 2: Find the Location`;
      pair.appendChild(locHead);
      const locQ = document.createElement('div');
      locQ.textContent = item.question;
      pair.appendChild(locQ);
      const locA = document.createElement('div');
      locA.innerHTML = `<b>Your answer:</b> ${item.location_user || '<i>No answer</i>'} <br> <b>Correct answer:</b> ${item.location_answer}`;
      locA.style.color = item.location_correct ? '#1a7f37' : '#b30000';
      pair.appendChild(locA);
    }
    
    // Content part
    if (selectedQuestionTypes.content) {
      const contHead = document.createElement('div');
      contHead.className = 'section-heading';
      contHead.textContent = `Step 3: Answer the Question`;
      pair.appendChild(contHead);
      const contQ = document.createElement('div');
      contQ.textContent = item.question;
      pair.appendChild(contQ);
      const contA = document.createElement('div');
      contA.innerHTML = `<b>Your answer:</b> ${item.content_user || '<i>No answer</i>'} <br> <b>Correct answer:</b> ${item.content_answer}`;
      contA.style.color = item.content_correct ? '#1a7f37' : '#b30000';
      pair.appendChild(contA);
    }
    
    reviewContainer.appendChild(pair);
  });
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back to Results';
  backBtn.onclick = () => {
    reviewContainer.style.display = 'none';
    showCompletion();
  };
  reviewContainer.appendChild(backBtn);
}

// Handle question completion based on selected question types
function handleQuestionComplete(q, docCorrect, docUserAnswer, locCorrect, locUserAnswer, contentCorrect, contentUserAnswer) {
  // Calculate time taken for this question set
  if (questionStartTime) {
    const timeTaken = Date.now() - questionStartTime;
    questionTimes.push(timeTaken);
  }
  
  // Save user answers for review
  userAnswers.push({
    question: q.question,
    document_options: q.document_options,
    document_answer: q.document_answer,
    document_user: docUserAnswer,
    document_correct: docCorrect,
    location_options: q.location_options,
    location_answer: q.location_answer,
    location_user: locUserAnswer,
    location_correct: locCorrect,
    content_options: q.content_options,
    content_answer: q.content_answer,
    content_user: contentUserAnswer,
    content_correct: contentCorrect
  });
  
  // Calculate score based on selected question types
  if (selectedQuestionTypes.document) {
    documentTotal++;
    if (docCorrect) {
      score++;
      documentScore++;
    }
  }
  if (selectedQuestionTypes.location) {
    locationTotal++;
    if (locCorrect) {
      score++;
      locationScore++;
    }
  }
  if (selectedQuestionTypes.content) {
    contentTotal++;
    if (contentCorrect) {
      score++;
      contentScore++;
    }
  }
  
  setTimeout(() => {
    currentIndex += 1;
    showDocumentQuestion();
    updateProgress();
  }, 2000);
}

// Format time in seconds and milliseconds
function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const ms = milliseconds % 1000;
  return `${seconds}.${ms.toString().padStart(3, '0')}s`;
}

// Fisher-Yates shuffle
function shuffleArray(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Create a question UI, handle answer, show feedback, then call onDone after delay
function createQuestion(text, options, answer, onDone, part, correctAnswer) {
  const wrapper = document.createElement('div');
  wrapper.className = 'question';
  const p = document.createElement('p');
  p.textContent = text;
  wrapper.appendChild(p);
  let userAnswer = null;
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option';
    btn.addEventListener('click', () => {
      // Disable all options
      wrapper.querySelectorAll('button.option').forEach(b => b.disabled = true);
      userAnswer = opt;
      // Show feedback
      const isCorrect = opt === answer;
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
      const feedback = document.createElement('div');
      feedback.className = 'feedback';
      if (isCorrect) {
        feedback.innerHTML = '<span style="color:#1a7f37;">✔️ Correct!</span>';
      } else {
        feedback.innerHTML = `<span style="color:#b30000;">❌ Incorrect. Correct answer: ${answer}</span>`;
      }
      wrapper.appendChild(feedback);
      setTimeout(() => {
        onDone(isCorrect, userAnswer);
      }, 1200);
    }, { once: true });
    wrapper.appendChild(btn);
  });
  return wrapper;
}
