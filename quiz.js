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

// Adjustable delays (persisted)
let feedbackDelayMs = parseInt(localStorage.getItem('feedbackDelayMs') || '1500', 10);
let summaryDelayMs = parseInt(localStorage.getItem('summaryDelayMs') || '4000', 10);
const feedbackDelayInput = document.getElementById('feedbackDelayMs');
const summaryDelayInput = document.getElementById('summaryDelayMs');
if (feedbackDelayInput) {
  feedbackDelayInput.value = String(feedbackDelayMs);
  feedbackDelayInput.addEventListener('input', () => {
    const v = parseInt(feedbackDelayInput.value || '0', 10);
    if (!Number.isNaN(v) && v >= 0) {
      feedbackDelayMs = v;
      localStorage.setItem('feedbackDelayMs', String(v));
    }
  });
}
if (summaryDelayInput) {
  summaryDelayInput.value = String(summaryDelayMs);
  summaryDelayInput.addEventListener('input', () => {
    const v = parseInt(summaryDelayInput.value || '0', 10);
    if (!Number.isNaN(v) && v >= 0) {
      summaryDelayMs = v;
      localStorage.setItem('summaryDelayMs', String(v));
    }
  });
}

// Question type checkboxes
const documentCheck = document.getElementById('documentCheck');
const locationCheck = document.getElementById('locationCheck');
const contentCheck = document.getElementById('contentCheck');

// Add event listeners for question type checkboxes
documentCheck.addEventListener('change', () => {
  selectedQuestionTypes.document = documentCheck.checked;
  // If document is unchecked, uncheck location and content only if they depend on it
  if (!documentCheck.checked) {
    // Only uncheck location if content is not checked (since content can be independent)
    if (!contentCheck.checked) {
      locationCheck.checked = false;
      selectedQuestionTypes.location = false;
    }
    // Don't automatically uncheck content - it can be independent
  }
});

locationCheck.addEventListener('change', () => {
  selectedQuestionTypes.location = locationCheck.checked;
  // If location is checked, ensure document is checked (unless content is also checked)
  if (locationCheck.checked && !documentCheck.checked && !contentCheck.checked) {
    documentCheck.checked = true;
    selectedQuestionTypes.document = true;
  }
});

contentCheck.addEventListener('change', () => {
  selectedQuestionTypes.content = contentCheck.checked;
  // Content can be selected independently - no forced dependencies
  // Only ensure document is checked if location is also checked
  if (contentCheck.checked && locationCheck.checked && !documentCheck.checked) {
    documentCheck.checked = true;
    selectedQuestionTypes.document = true;
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
    // If data_2.js is also loaded, combine both datasets
    if (data2Loaded && typeof defaultQuizData2 !== 'undefined' && defaultQuizData2.length > 0) {
      quizData = [...defaultQuizData, ...defaultQuizData2];
      const statusIndicator = document.getElementById('status-indicator');
      if (statusIndicator) {
        statusIndicator.style.display = 'block';
        statusIndicator.innerHTML = `✅ Using combined question sets: data.js (${defaultQuizData.length}) + data_2.js (${defaultQuizData2.length}) = ${quizData.length} total questions`;
      }
    } else {
      // Just use data.js
      quizData = defaultQuizData;
      const statusIndicator = document.getElementById('status-indicator');
      if (statusIndicator) {
        statusIndicator.style.display = 'block';
        statusIndicator.innerHTML = `✅ Default questions loaded (${defaultQuizData.length} questions available)`;
      }
    }
    allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
    
    // Clear file inputs
    fileInput.value = '';
    dirInput.value = '';
    
    startQuiz();
  } else {
    alert('Default questions not available. Please load a quiz file.');
  }
});

// Handle loading data_2.js as a second question set
const loadData2Btn = document.getElementById('loadData2Btn');
let data2Loaded = false;

// Function to switch to data_2.js questions only (not combined)
function updateQuizDataWithData2() {
  if (typeof defaultQuizData2 !== 'undefined' && defaultQuizData2.length > 0) {
    // Use only data_2.js questions, not combined with data.js
    quizData = defaultQuizData2;
    allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
    
    const statusIndicator = document.getElementById('status-indicator');
    if (statusIndicator) {
      statusIndicator.style.display = 'block';
      statusIndicator.innerHTML = `✅ Switched to data_2.js (${defaultQuizData2.length} questions available)`;
    }
    
    fileInput.value = '';
    dirInput.value = '';
    return true;
  }
  return false;
}

loadData2Btn.addEventListener('click', () => {
  // Check if data_2.js is already loaded
  if (data2Loaded) {
    // If already loaded, just use the existing data
    if (!updateQuizDataWithData2()) {
      alert('data_2.js was loaded but no quiz data found. Ensure it defines defaultQuizData2.');
    }
    return;
  }

  // Check if script already exists in DOM
  const existingScript = document.querySelector('script[src*="data_2.js"]');
  if (existingScript) {
    // Script tag exists, check if data is available
    if (updateQuizDataWithData2()) {
      data2Loaded = true;
      return;
    }
    // If script exists but data not available, try loading again
    existingScript.remove();
  }

  // Try loading via fetch first (more reliable for web)
  fetch('data_2.js?' + new Date().getTime())
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(scriptText => {
      // Execute the script text
      try {
        // Create a new script element and execute it
        const script = document.createElement('script');
        script.textContent = scriptText;
        document.head.appendChild(script);
        
        // Wait a moment for the script to execute
        setTimeout(() => {
          data2Loaded = true;
          if (updateQuizDataWithData2()) {
            console.log('Successfully loaded data_2.js via fetch');
          } else {
            alert('data_2.js loaded but no quiz data found. Ensure it defines defaultQuizData2.');
          }
        }, 100);
      } catch (err) {
        console.error('Error executing data_2.js:', err);
        alert('Error executing data_2.js: ' + err.message);
      }
    })
    .catch(err => {
      console.error('Error loading data_2.js via fetch:', err);
      // Fallback to script tag method
      const script = document.createElement('script');
      script.src = 'data_2.js?' + new Date().getTime(); // Cache-busting
      script.onload = () => {
        data2Loaded = true;
        setTimeout(() => {
          if (updateQuizDataWithData2()) {
            console.log('Successfully loaded data_2.js via script tag');
          } else {
            alert('data_2.js loaded but no quiz data found. Ensure it defines defaultQuizData2.');
          }
        }, 100);
      };
      script.onerror = () => {
        alert('Error loading data_2.js. Make sure the file exists in the same directory. Check the browser console for details.');
        console.error('Failed to load data_2.js');
      };
      document.head.appendChild(script);
    });
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
  // Wait a bit to ensure data.js has loaded (it's loaded synchronously, but just to be safe)
  setTimeout(() => {
    if (typeof defaultQuizData !== 'undefined' && defaultQuizData.length > 0) {
      // Only set quizData if it hasn't been set yet (preserve if data_2.js was loaded first somehow)
      if (quizData.length === 0 || (typeof defaultQuizData2 === 'undefined' || defaultQuizData2.length === 0)) {
        quizData = defaultQuizData;
        allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
      } else {
        // If data_2.js was already loaded, combine them
        quizData = [...defaultQuizData, ...defaultQuizData2];
        allDocumentNames = Array.from(new Set(quizData.map(q => q.document_answer)));
      }
      
      // Set default question count to 10 if not specified
      if (!questionCountInput.value) {
        questionCountInput.value = '10';
      }
      
      // Add status indicator
      const statusIndicator = document.getElementById('status-indicator');
      if (statusIndicator) {
        if (typeof defaultQuizData2 !== 'undefined' && defaultQuizData2.length > 0) {
          statusIndicator.style.display = 'block';
          statusIndicator.innerHTML = `✅ Loaded: data.js (${defaultQuizData.length}) + data_2.js (${defaultQuizData2.length}) = ${quizData.length} total questions`;
        } else {
          statusIndicator.style.display = 'block';
          statusIndicator.innerHTML = `✅ Default questions loaded (${defaultQuizData.length} questions available). Click "Load data_2.js" to add more questions.`;
        }
      }
    } else {
      console.warn('defaultQuizData not found on page load. Make sure data.js is loaded.');
    }
  }, 50);
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
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--border-color, #e2e8f0);
    transition: all 0.3s ease;
  }

  .question-pair:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  .section-heading {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 0;
    color: var(--heading-color, #1e293b);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .section-heading::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    border-radius: 2px;
  }

  .question {
    margin-bottom: 1rem;
  }

  .question p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-color, #374151);
    margin-bottom: 1rem;
    padding: 1rem;
    background: var(--question-bg, #f8fafc);
    border-radius: 8px;
    border-left: 4px solid #4f46e5;
  }

  .options-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  button.option {
    width: 100%;
    text-align: left;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    border: 2px solid var(--option-border, #e2e8f0);
    background: var(--option-bg, #fff);
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  button.option:hover:not(:disabled) {
    border-color: #4f46e5;
    background: var(--option-hover-bg, #f8fafc);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
  }

  button.option:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  button.option.correct {
    background: #ecfdf5 !important;
    color: #065f46;
    border-color: #10b981;
    animation: correctAnswer 0.4s ease;
  }

  button.option.incorrect {
    background: #fef2f2 !important;
    color: #991b1b;
    border-color: #ef4444;
    animation: incorrectAnswer 0.4s ease;
  }

  @keyframes correctAnswer {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }

  @keyframes incorrectAnswer {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-4px); }
    40%, 80% { transform: translateX(4px); }
  }

  .feedback {
    font-weight: 600;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .feedback.correct {
    background: #ecfdf5;
    color: #065f46;
    border: 1px solid #a7f3d0;
  }

  .feedback.incorrect {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  .score {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2rem 0;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    color: white;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);
  }

  .detailed-score {
    background: var(--card-bg, #fff);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border: 1px solid var(--border-color, #e2e8f0);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .detailed-score h3 {
    margin-bottom: 1rem;
    color: var(--heading-color, #1e293b);
    font-size: 1.25rem;
  }

  .score-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color, #e2e8f0);
  }

  .score-item:last-child {
    border-bottom: none;
  }

  .score-label {
    font-weight: 500;
    color: var(--text-color, #374151);
  }

  .score-value {
    font-weight: 600;
    color: var(--heading-color, #1e293b);
  }

  .timing-stats {
    background: var(--card-bg, #fff);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border: 1px solid var(--border-color, #e2e8f0);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .timing-stats h3 {
    margin-bottom: 1rem;
    color: var(--heading-color, #1e293b);
    font-size: 1.25rem;
  }

  .timing-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }

  .completion-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .completion-actions .btn {
    min-width: 150px;
  }

  /* Dark mode styles */
  body.dark-mode .question-pair {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }

  body.dark-mode .question p {
    background: #334155;
    color: #e2e8f0;
  }

  body.dark-mode button.option {
    background: #334155;
    color: #e2e8f0;
    border-color: #475569;
  }

  body.dark-mode button.option:hover:not(:disabled) {
    background: #475569;
  }

  body.dark-mode .detailed-score,
  body.dark-mode .timing-stats {
    background: #1e293b;
    border-color: #334155;
  }

  body.dark-mode .score-label,
  body.dark-mode .score-value {
    color: #e2e8f0;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .question-pair {
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .question p {
      font-size: 1rem;
      padding: 0.75rem;
    }

    button.option {
      padding: 0.875rem 1rem;
      font-size: 0.95rem;
    }

    .score {
      font-size: 1.25rem;
      padding: 1.5rem;
    }

    .completion-actions {
      flex-direction: column;
      align-items: center;
    }

    .completion-actions .btn {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .question-pair {
      padding: 0.75rem;
    }

    .section-heading {
      font-size: 1rem;
    }

    .question p {
      font-size: 0.95rem;
      padding: 0.5rem;
    }

    button.option {
      padding: 0.75rem;
      font-size: 0.9rem;
    }

    .score {
      font-size: 1.1rem;
      padding: 1rem;
    }
  }

  /* Animation for answers summary */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Dark mode styles for answers summary */
  body.dark-mode .answers-summary {
    background: #1e293b;
    border-color: #334155;
  }

  body.dark-mode .answers-summary h3 {
    color: #e2e8f0;
  }

  body.dark-mode .answers-summary .correct-answer {
    background: #334155;
    border-color: #4f46e5;
  }

  body.dark-mode .answers-summary .correct-answer .type-label {
    color: #e2e8f0;
  }

  /* Dark mode styles for review context */
  body.dark-mode .review-container .question-pair > div:last-child {
    background: #334155;
    color: #cbd5e1;
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
          statusIndicator.style.display = 'block';
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
            statusIndicator.style.display = 'block';
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
    statusIndicator.style.display = 'block';
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
  
  // Hide progress bar initially
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.style.display = 'none';
  }
  
  showDocumentQuestion();
  updateProgress();
}

function updateProgress() {
  const progressIndicator = document.getElementById('progress-indicator');
  const progressBar = document.querySelector('.progress-bar');
  const progressFill = document.querySelector('.progress-fill');
  
  if (currentIndex < selectedQuestions.length) {
    const progress = ((currentIndex + 1) / selectedQuestions.length) * 100;
    
    // Calculate questions per quiz set
    const questionsPerQuiz = (selectedQuestionTypes.document ? 1 : 0) + 
                            (selectedQuestionTypes.location ? 1 : 0) + 
                            (selectedQuestionTypes.content ? 1 : 0);
    
    // Calculate score information
    let progressText = `Question ${currentIndex + 1} of ${selectedQuestions.length}`;
    
    if (currentIndex > 0 && questionsPerQuiz > 0) {
      // Number of questions answered so far (completed question sets)
      const questionsAnswered = currentIndex;
      // Total possible points so far
      const totalPossible = questionsAnswered * questionsPerQuiz;
      // Current score (number of correct sub-questions)
      const currentScore = score;
      // Calculate percentage
      const percentage = totalPossible > 0 ? Math.round((currentScore / totalPossible) * 100) : 0;
      
      progressText = `Question ${currentIndex + 1} (${currentScore} - ${percentage}%) of ${selectedQuestions.length}`;
    }
    
    progressIndicator.textContent = progressText;
    
    if (progressBar && progressFill) {
      progressBar.style.display = 'block';
      progressFill.style.width = `${progress}%`;
    }
  } else {
    progressIndicator.textContent = '';
    if (progressBar) {
      progressBar.style.display = 'none';
    }
  }
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
  
  // If document question is not selected, check if we should show content directly
  if (!selectedQuestionTypes.document) {
    if (selectedQuestionTypes.content) {
      // Skip to content question directly
      showContentQuestion(pairWrapper, q, false, null, false, null);
      container.appendChild(pairWrapper);
      return;
    } else {
      // Skip to next question if no question types are selected
      currentIndex += 1;
      showDocumentQuestion();
      return;
    }
  }
  
  // Section heading
  const docHeading = document.createElement('div');
  docHeading.className = 'section-heading';
  docHeading.textContent = 'Step 1: Select the Document';
  pairWrapper.appendChild(docHeading);
  // Render document selection
  // Use allDocumentNames as options, sort alphabetically for this question
  const docOptions = allDocumentNames.slice().sort();
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
  // Update heading based on whether this is shown directly or as part of a sequence
  if (!selectedQuestionTypes.document && !selectedQuestionTypes.location) {
    contHeading.textContent = 'Answer the Question';
  } else if (!selectedQuestionTypes.document) {
    contHeading.textContent = 'Step 2: Answer the Question';
  } else if (!selectedQuestionTypes.location) {
    contHeading.textContent = 'Step 2: Answer the Question';
  } else {
    contHeading.textContent = 'Step 3: Answer the Question';
  }
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
  
  // Hide progress bar
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.style.display = 'none';
  }
  
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
  detailedScoreDiv.className = 'detailed-score';
  detailedScoreDiv.innerHTML = `
    <h3>Detailed Scores</h3>
    ${selectedQuestionTypes.document ? `<p class="score-item"><span class="score-label">Document Questions:</span> <span class="score-value">${documentScore} / ${documentTotal}</span></p>` : ''}
    ${selectedQuestionTypes.location ? `<p class="score-item"><span class="score-label">Location Questions:</span> <span class="score-value">${locationScore} / ${locationTotal}</span></p>` : ''}
    ${selectedQuestionTypes.content ? `<p class="score-item"><span class="score-label">Content Questions:</span> <span class="score-value">${contentScore} / ${contentTotal}</span></p>` : ''}
  `;
  container.appendChild(detailedScoreDiv);
  
  // Display timing statistics
  if (questionTimes.length > 0) {
    const timingDiv = document.createElement('div');
    timingDiv.className = 'timing-stats';
    timingDiv.innerHTML = `
      <h3>Timing Statistics</h3>
      <div class="timing-item"><span>Shortest time:</span><span>${formatTime(Math.min(...questionTimes))}</span></div>
      <div class="timing-item"><span>Longest time:</span><span>${formatTime(Math.max(...questionTimes))}</span></div>
      <div class="timing-item"><span>Average time:</span><span>${formatTime(questionTimes.reduce((sum, time) => sum + time, 0) / questionTimes.length)}</span></div>
      <div class="timing-item"><span>Total questions:</span><span>${questionTimes.length}</span></div>
    `;
    container.appendChild(timingDiv);
  }
  
  const done = document.createElement('h2');
  done.textContent = 'Quiz complete!';
  done.style.textAlign = 'center';
  done.style.margin = '2rem 0 1rem 0';
  done.style.color = 'var(--heading-color, #1e293b)';
  container.appendChild(done);
  
  const completionActions = document.createElement('div');
  completionActions.className = 'completion-actions';
  
  const reviewBtn = document.createElement('button');
  reviewBtn.textContent = '📋 Review Answers';
  reviewBtn.className = 'btn btn-primary';
  reviewBtn.onclick = showReview;
  completionActions.appendChild(reviewBtn);
  
  const newBtn = document.createElement('button');
  newBtn.textContent = '🔄 New Quiz';
  newBtn.className = 'btn btn-secondary';
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
      statusIndicator.style.display = 'block';
      statusIndicator.innerHTML = `✅ Default questions loaded (${defaultQuizData.length} questions available)`;
    }
    
    location.reload();
  };
  completionActions.appendChild(newBtn);
  
  container.appendChild(completionActions);
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
    
    // Add document and location context for reference
    const contextDiv = document.createElement('div');
    contextDiv.style.cssText = `
      margin-top: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 8px;
      border-left: 4px solid #4f46e5;
      font-size: 0.9rem;
      color: #64748b;
    `;
    contextDiv.innerHTML = `
      <strong>📚 Document:</strong> ${item.document_answer}<br>
      <strong>📍 Location:</strong> ${item.location_answer}
    `;
    pair.appendChild(contextDiv);
    
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
  
  // Show answers summary after content question is answered
  showAnswersSummary(q, docCorrect, docUserAnswer, locCorrect, locUserAnswer, contentCorrect, contentUserAnswer);
  
  setTimeout(() => {
    currentIndex += 1;
    showDocumentQuestion();
    updateProgress();
  }, summaryDelayMs); // Adjustable summary delay
}

// Show answers summary for the current question set
function showAnswersSummary(q, docCorrect, docUserAnswer, locCorrect, locUserAnswer, contentCorrect, contentUserAnswer) {
  const answersContainer = document.createElement('div');
  answersContainer.className = 'answers-summary';
  answersContainer.style.cssText = `
    background: var(--card-bg, #fff);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border: 1px solid var(--border-color, #e2e8f0);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    animation: slideIn 0.5s ease;
  `;
  
  const summaryHeading = document.createElement('h3');
  summaryHeading.textContent = '📋 All Correct Answers';
  summaryHeading.style.cssText = `
    margin-bottom: 1rem;
    color: var(--heading-color, #1e293b);
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `;
  answersContainer.appendChild(summaryHeading);
  
  // Always show Document answer (even if not selected for quiz)
  const docAnswer = createCorrectAnswerDisplay('📄 Document', q.document_answer);
  answersContainer.appendChild(docAnswer);
  
  // Always show Location answer (even if not selected for quiz)
  const locAnswer = createCorrectAnswerDisplay('📍 Location', q.location_answer);
  answersContainer.appendChild(locAnswer);
  
  // Always show Content answer (even if not selected for quiz)
  const contAnswer = createCorrectAnswerDisplay('❓ Content', q.content_answer);
  answersContainer.appendChild(contAnswer);
  
  // Add to the current question container
  const currentQuestionContainer = document.querySelector('.question-pair');
  if (currentQuestionContainer) {
    currentQuestionContainer.appendChild(answersContainer);
  }
}

// Create individual correct answer display
function createCorrectAnswerDisplay(type, correctAnswer) {
  const answerDiv = document.createElement('div');
  answerDiv.style.cssText = `
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #4f46e5;
    background: #f8fafc;
  `;
  
  const typeSpan = document.createElement('div');
  typeSpan.textContent = type;
  typeSpan.style.cssText = `
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1e293b;
  `;
  
  const correctAnswerDiv = document.createElement('div');
  correctAnswerDiv.innerHTML = `<strong>Correct answer:</strong> ${correctAnswer}`;
  correctAnswerDiv.style.cssText = `
    color: var(--text-color, #374151);
    font-size: 1.1rem;
  `;
  
  answerDiv.appendChild(typeSpan);
  answerDiv.appendChild(correctAnswerDiv);
  
  return answerDiv;
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
  p.innerHTML = text;
  wrapper.appendChild(p);
  
  // Trigger MathJax rendering if available
  if (typeof MathJax !== 'undefined') {
    MathJax.typesetPromise([p]).catch((err) => console.log('MathJax error:', err));
  }
  
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  
  let userAnswer = null;
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerHTML = opt;
    btn.className = 'option';
    
    // Trigger MathJax rendering for options if available
    if (typeof MathJax !== 'undefined') {
      MathJax.typesetPromise([btn]).catch((err) => console.log('MathJax error in option:', err));
    }
    btn.addEventListener('click', () => {
      // Disable all options
      wrapper.querySelectorAll('button.option').forEach(b => b.disabled = true);
      userAnswer = opt;
      
      // Show feedback
      const isCorrect = opt === answer;
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
      
      const feedback = document.createElement('div');
      feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      
      if (isCorrect) {
        feedback.innerHTML = '✅ <span>Correct!</span>';
      } else {
        feedback.innerHTML = `❌ <span>Incorrect. Correct answer: ${answer}</span>`;
      }
      
      wrapper.appendChild(feedback);
      
      setTimeout(() => {
        onDone(isCorrect, userAnswer);
      }, feedbackDelayMs);
    }, { once: true });
    
    optionsContainer.appendChild(btn);
  });
  
  wrapper.appendChild(optionsContainer);
  return wrapper;
}

