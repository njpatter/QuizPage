// Default quiz data - automatically loaded
const defaultQuizData = [
  {
    "question": "What is the purpose of this chapter regarding private onsite wastewater treatment systems?",
    "location_options": [
      "387.01",
      "387.02",
      "387.03",
      "387.04"
    ],
    "location_answer": "387.01",
    "content_options": [
      "To set environmental discharge limits for public treatment plants",
      "To establish rules for a financial assistance program for replacing or rehabilitating failing POWTS",
      "To create design standards for all septic tanks",
      "To regulate groundwater contamination testing in municipalities"
    ],
    "content_answer": "To establish rules for a financial assistance program for replacing or rehabilitating failing POWTS",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "To which failing POWTS installation dates does this chapter apply?",
    "location_options": [
      "387.01",
      "387.02",
      "387.03",
      "387.04"
    ],
    "location_answer": "387.02",
    "content_options": [
      "Systems installed prior to July 1, 1978",
      "Systems installed after January 1, 2000",
      "Systems installed between 1990 and 2005",
      "Systems installed prior to January 31, 2005"
    ],
    "content_answer": "Systems installed prior to July 1, 1978",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "In the context of this chapter, who is considered an 'owner'?",
    "location_options": [
      "387.02",
      "387.03",
      "387.04",
      "387.05"
    ],
    "location_answer": "387.03",
    "content_options": [
      "Any person holding a plumbing license",
      "The person that owns the structure served by a failing POWTS",
      "The installer of a replacement system",
      "Any occupant of a property with a POWTS"
    ],
    "content_answer": "The person that owns the structure served by a failing POWTS",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 1,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which resolution must a governmental unit include to certify proper installation and maintenance of POWTS?",
    "location_options": [
      "387.03",
      "387.04",
      "387.05",
      "387.10"
    ],
    "location_answer": "387.04",
    "content_options": [
      "A resolution to increase sewage treatment fees",
      "A resolution certifying that replacement or rehabilitation will be properly installed and maintained",
      "A resolution to create a local water testing program",
      "A resolution to establish new groundwater ordinances"
    ],
    "content_answer": "A resolution certifying that replacement or rehabilitation will be properly installed and maintained",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which categories of failing POWTS are eligible for financial assistance awards?",
    "location_options": [
      "387.04",
      "387.05",
      "387.10",
      "387.20"
    ],
    "location_answer": "387.10",
    "content_options": [
      "Category 1 and Category 2",
      "Category 2 and Category 3",
      "Only Category 3",
      "All categories"
    ],
    "content_answer": "Category 1 and Category 2",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which category of failing POWTS is specifically ineligible for assistance due to sewage backup into the structure?",
    "location_options": [
      "387.10",
      "387.20",
      "387.21",
      "387.30"
    ],
    "location_answer": "387.10",
    "content_options": [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4"
    ],
    "content_answer": "Category 3",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What is the income limit for a person to be eligible for a grant for a principal residence under this program?",
    "location_options": [
      "387.10",
      "387.20",
      "387.21",
      "387.30"
    ],
    "location_answer": "387.20",
    "content_options": [
      "$32,000",
      "$45,000",
      "$50,000",
      "$60,000"
    ],
    "content_answer": "$45,000",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 3,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which entities are explicitly ineligible for financial assistance awards?",
    "location_options": [
      "387.20",
      "387.21",
      "387.30",
      "387.31"
    ],
    "location_answer": "387.20",
    "content_options": [
      "Private nonprofit corporations",
      "The state, municipalities, and federal agencies",
      "Small commercial establishments",
      "Residential landlords"
    ],
    "content_answer": "The state, municipalities, and federal agencies",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 4,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What is the maximum state grant share for eligible POWTS work?",
    "location_options": [
      "387.20",
      "387.21",
      "387.30",
      "387.31"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$4,500",
      "$7,000",
      "$10,000",
      "$12,000"
    ],
    "content_answer": "$7,000",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 4,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "According to Table 387.30-1, what is the assistance amount for a replacement POWTS anaerobic treatment component with a design flow over 601 gpd?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$2,280",
      "$3,000",
      "$4,200",
      "$5,400"
    ],
    "content_answer": "$4,200",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "According to Table 387.30-2, what is the assistance amount for a POWTS dosing component and lift pump with a design flow of 301-450 gpd?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$2,400",
      "$2,700",
      "$3,000",
      "$3,600"
    ],
    "content_answer": "$2,700",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What is the maximum allowable assistance amount for a non-pressurized and in-ground pressure POWTS component at a loading rate of 0.49 or less and 601+ gpd?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$6,900",
      "$7,000",
      "$6,600",
      "$5,400"
    ],
    "content_answer": "$7,000",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What assistance amount is listed in Table 387.30-4 for an at-grade system with a design flow of 451-600 gpd?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$5,400",
      "$6,000",
      "$6,600",
      "$7,000"
    ],
    "content_answer": "$6,600",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "For a POWTS holding tank component with an estimated flow of 401-600 gpd, what is the maximum assistance amount?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$3,900",
      "$4,200",
      "$4,500",
      "$5,000"
    ],
    "content_answer": "$4,200",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What is the assistance amount for a replacement exterior grease interceptor with a capacity of 2,000 gallons or more?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "$3,900",
      "$4,200",
      "$4,500",
      "$5,000"
    ],
    "content_answer": "$4,500",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Under what condition is a financial assistance award limited to two-thirds of the amount or $4,667, whichever is less?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.30",
    "content_options": [
      "If the work is done on property owned by a licensed plumber or POWTS contractor",
      "If the work is in a floodplain",
      "If the system serves more than 20 people",
      "If the property is leased"
    ],
    "content_answer": "If the work is done on property owned by a licensed plumber or POWTS contractor",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Who determines the assistance amount for experimental POWTS?",
    "location_options": [
      "387.30",
      "387.31",
      "387.32",
      "387.40"
    ],
    "location_answer": "387.31",
    "content_options": [
      "The participating governmental unit",
      "The Department on a case-by-case basis",
      "The system installer",
      "The property owner"
    ],
    "content_answer": "The Department on a case-by-case basis",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 6,
      "page_end": 6
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which type of work is ineligible if public sewer is available to the property?",
    "location_options": [
      "387.31",
      "387.32",
      "387.40",
      "387.50"
    ],
    "location_answer": "387.32",
    "content_options": [
      "Installation of an experimental POWTS",
      "Rehabilitation or replacement of a failing POWTS",
      "Connection to a municipal sewage treatment works",
      "Installation of a grease interceptor"
    ],
    "content_answer": "Rehabilitation or replacement of a failing POWTS",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 6,
      "page_end": 6
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which document must an applicant for a principal residence grant include to show income eligibility?",
    "location_options": [
      "387.32",
      "387.40",
      "387.50",
      "387.70"
    ],
    "location_answer": "387.40",
    "content_options": [
      "Proof of property tax payment",
      "Evidence of annual family income",
      "A letter from the county zoning office",
      "A copy of the plumbing permit"
    ],
    "content_answer": "Evidence of annual family income",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 6,
      "page_end": 7
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What is one form of alternate evidence of income that may be considered by a governmental unit?",
    "location_options": [
      "387.40",
      "387.50",
      "387.70",
      "387.71"
    ],
    "location_answer": "387.50",
    "content_options": [
      "Affidavit stating no requirement to file a tax return",
      "Letter from a neighbor",
      "Bank statement only",
      "Verbal confirmation from the owner"
    ],
    "content_answer": "Affidavit stating no requirement to file a tax return",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 7,
      "page_end": 7
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What happens if available funds are insufficient to fully fund all applications?",
    "location_options": [
      "387.50",
      "387.70",
      "387.71",
      "387.72"
    ],
    "location_answer": "387.70",
    "content_options": [
      "The department will reject all applications",
      "The department will prorate available funds",
      "Applications will be carried over indefinitely",
      "The largest requests will be prioritized"
    ],
    "content_answer": "The department will prorate available funds",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 7,
      "page_end": 8
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Who receives the financial assistance payment for eligible work on a POWTS?",
    "location_options": [
      "387.70",
      "387.71",
      "387.72",
      "387.80"
    ],
    "location_answer": "387.71",
    "content_options": [
      "The owner directly",
      "The participating governmental unit",
      "The installer directly",
      "The Department"
    ],
    "content_answer": "The participating governmental unit",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 8,
      "page_end": 8
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Who receives payments for monitoring of experimental POWTS?",
    "location_options": [
      "387.71",
      "387.72",
      "387.80",
      "387.81"
    ],
    "location_answer": "387.72",
    "content_options": [
      "The property owner",
      "The participating governmental unit",
      "The individual or entity performing the monitoring",
      "The Department"
    ],
    "content_answer": "The individual or entity performing the monitoring",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 8,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Which action can the department take if it believes a violation of the program has occurred?",
    "location_options": [
      "387.72",
      "387.80",
      "387.81",
      "387.90"
    ],
    "location_answer": "387.80",
    "content_options": [
      "Issue an order for corrective action",
      "Increase the award amount",
      "Waive income eligibility",
      "Extend the project period"
    ],
    "content_answer": "Issue an order for corrective action",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "Who must make records available for program audit upon request?",
    "location_options": [
      "387.80",
      "387.81",
      "387.90",
      "387.91"
    ],
    "location_answer": "387.81",
    "content_options": [
      "Only the Department",
      "Only governmental units",
      "Any governmental unit, owner, or entity receiving funds",
      "Only the installer of the POWTS"
    ],
    "content_answer": "Any governmental unit, owner, or entity receiving funds",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What is the typical review time for a non-priority petition for variance?",
    "location_options": [
      "387.81",
      "387.90",
      "387.91",
      "387.01"
    ],
    "location_answer": "387.90",
    "content_options": [
      "10 business days",
      "20 business days",
      "30 business days",
      "45 business days"
    ],
    "content_answer": "30 business days",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 9,
      "page_end": 10
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "How soon must the department process a priority petition for variance?",
    "location_options": [
      "387.81",
      "387.90",
      "387.91",
      "387.01"
    ],
    "location_answer": "387.90",
    "content_options": [
      "10 business days",
      "20 business days",
      "30 business days",
      "45 business days"
    ],
    "content_answer": "10 business days",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 9,
      "page_end": 10
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "If a participating governmental unit finds an applicant ineligible, under what statute may they appeal?",
    "location_options": [
      "387.80",
      "387.90",
      "387.91",
      "387.50"
    ],
    "location_answer": "387.91",
    "content_options": [
      "Chapter 68, Stats.",
      "Chapter 145, Stats.",
      "Chapter 227, Stats.",
      "Chapter 101, Stats."
    ],
    "content_answer": "Chapter 68, Stats.",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 10,
      "page_end": 10
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "If the department finds an applicant ineligible, how long does the applicant have to appeal?",
    "location_options": [
      "387.80",
      "387.90",
      "387.91",
      "387.50"
    ],
    "location_answer": "387.91",
    "content_options": [
      "10 days",
      "20 days",
      "30 days",
      "60 days"
    ],
    "content_answer": "30 days",
    "meta": {
      "document": "WAC-SPS-387",
      "page_start": 10,
      "page_end": 10
    },
    "document_answer": "WAC-SPS-387"
  },
  {
    "question": "What does the term 'Accessible' mean when applied to a fixture, appliance, pipe, fitting, valve, or equipment?",
    "location_options": [
      "381.01(1)",
      "381.01(2)",
      "381.01(4)",
      "381.01(5)"
    ],
    "location_answer": "381.01(2)",
    "content_options": [
      "Able to be reached without any disassembly or removal of parts",
      "Having access for maintenance, but which may require the removal of an access panel or similar obstruction",
      "Positioned in such a way that it is visible at all times",
      "Installed at a height no greater than 5 feet from the floor"
    ],
    "content_answer": "Having access for maintenance, but which may require the removal of an access panel or similar obstruction",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term describes a piping arrangement for a drain system where waste discharges by indirect means below the flood level rim but above the outlet of the trap?",
    "location_options": [
      "381.01(4m)",
      "381.01(5)",
      "381.01(6)",
      "381.01(7)"
    ],
    "location_answer": "381.01(5)",
    "content_options": [
      "Air admittance valve",
      "Air-gap, drain system",
      "Air-break",
      "Air-gap, water supply system"
    ],
    "content_answer": "Air-break",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is defined as the unobstructed vertical distance through free atmosphere between the outlet of indirect waste piping and the flood level rim of the receptor?",
    "location_options": [
      "381.01(5)",
      "381.01(6)",
      "381.01(7)",
      "381.01(8)"
    ],
    "location_answer": "381.01(6)",
    "content_options": [
      "Air-gap, drain system",
      "Air-break",
      "Air admittance valve",
      "Air-gap, water supply system"
    ],
    "content_answer": "Air-gap, drain system",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which plumbing term refers to a unit for wastewater treatment that utilizes oxidation for biological decomposition?",
    "location_options": [
      "381.01(3)",
      "381.01(8)",
      "381.01(186)",
      "381.01(74)"
    ],
    "location_answer": "381.01(3)",
    "content_options": [
      "Anaerobic treatment component",
      "Aerobic treatment component",
      "Disinfection unit",
      "Engineered system"
    ],
    "content_answer": "Aerobic treatment component",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What term describes the unwanted reverse flow of liquids, solids, or gases?",
    "location_options": [
      "381.01(16)",
      "381.01(17)",
      "381.01(18)",
      "381.01(19)"
    ],
    "location_answer": "381.01(16)",
    "content_options": [
      "Backflow",
      "Back siphonage",
      "Back pressure",
      "Cross connection"
    ],
    "content_answer": "Backflow",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which device is designed to prevent the reverse flow of wastewater in a drain system?",
    "location_options": [
      "381.01(18)",
      "381.01(19)",
      "381.01(21)",
      "381.01(22)"
    ],
    "location_answer": "381.01(21)",
    "content_options": [
      "Back siphonage preventer",
      "Backwater valve",
      "Ballcock",
      "Backflow preventer"
    ],
    "content_answer": "Backwater valve",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is the definition of 'Bathroom group'?",
    "location_options": [
      "381.01(22)",
      "381.01(23)",
      "381.01(24)",
      "381.01(25)"
    ],
    "location_answer": "381.01(23)",
    "content_options": [
      "A lavatory and bathtub located on the same floor",
      "A water closet, lavatory, and bathtub or shower located together on the same floor level",
      "Two or more fixtures that share a single drain connection",
      "A combination of fixtures including a kitchen sink and dishwasher"
    ],
    "content_answer": "A water closet, lavatory, and bathtub or shower located together on the same floor level",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term refers to wastewater contaminated by human body waste, toilet paper, and any other material intended to be deposited in a receptor for urine or feces?",
    "location_options": [
      "381.01(30m)",
      "381.01(31)",
      "381.01(56)",
      "381.01(78)"
    ],
    "location_answer": "381.01(31)",
    "content_options": [
      "Blackwater",
      "Graywater",
      "Domestic wastewater",
      "Clear water"
    ],
    "content_answer": "Blackwater",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "In plumbing terminology, what does 'BOD5' measure?",
    "location_options": [
      "381.01(31)",
      "381.01(32)",
      "381.01(84)",
      "381.01(186)"
    ],
    "location_answer": "381.01(32)",
    "content_options": [
      "Amount of biodegradable organic matter in water over five days",
      "Water temperature change over a set time period",
      "Bacterial colony growth in wastewater",
      "Volume of solids suspended in water"
    ],
    "content_answer": "Amount of biodegradable organic matter in water over five days",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What term is used for a manufactured device or prefabricated assembly that is an adjunct to a plumbing product or system?",
    "location_options": [
      "381.01(9)",
      "381.01(10)",
      "381.01(177)",
      "381.01(179)"
    ],
    "location_answer": "381.01(10)",
    "content_options": [
      "Appurtenance",
      "Fixture",
      "Plumbing appliance",
      "Plumbing system"
    ],
    "content_answer": "Appurtenance",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is defined as the unobstructed vertical distance between the lowest opening from any pipe or faucet supplying water and the flood level rim or spill level of the receptacle?",
    "location_options": [
      "381.01(5)",
      "381.01(6)",
      "381.01(7)",
      "381.01(8)"
    ],
    "location_answer": "381.01(7)",
    "content_options": [
      "Air-break",
      "Air-gap, water supply system",
      "Air-gap, drain system",
      "Barometric loop"
    ],
    "content_answer": "Air-gap, water supply system",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which component treats wastewater using molecular oxygen in the absence of free oxygen for biological respiration and decomposition?",
    "location_options": [
      "381.01(3)",
      "381.01(8)",
      "381.01(186)",
      "381.01(74)"
    ],
    "location_answer": "381.01(8)",
    "content_options": [
      "Anaerobic treatment component",
      "Aerobic treatment component",
      "Disinfection unit",
      "Engineered soil"
    ],
    "content_answer": "Anaerobic treatment component",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What term refers to a cross connection control device that uses a float to close an air inlet when water flows and opens it when flow stops to prevent siphonage?",
    "location_options": [
      "381.01(13)",
      "381.01(13e)",
      "381.01(13m)",
      "381.01(14)"
    ],
    "location_answer": "381.01(13e)",
    "content_options": [
      "Air admittance valve",
      "Atmospheric type vacuum breaker",
      "Pressure vacuum breaker",
      "Hose connection vacuum breaker"
    ],
    "content_answer": "Atmospheric type vacuum breaker",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is the meaning of 'Approved' within the plumbing definitions?",
    "location_options": [
      "381.01(8)",
      "381.01(9)",
      "381.01(10)",
      "381.01(11)"
    ],
    "location_answer": "381.01(9)",
    "content_options": [
      "Certified by a national testing laboratory",
      "Acceptance documented in writing by the department",
      "Listed in the plumbing code appendix",
      "Verified through on-site inspection"
    ],
    "content_answer": "Acceptance documented in writing by the department",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which device is supplied with water under pressure and causes a vacuum by passing fluid through an orifice or constriction?",
    "location_options": [
      "381.01(11)",
      "381.01(12)",
      "381.01(13)",
      "381.01(14)"
    ],
    "location_answer": "381.01(13)",
    "content_options": [
      "Aspirator",
      "Venturi pump",
      "Ejector",
      "Air admittance valve"
    ],
    "content_answer": "Aspirator",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is the definition of 'Back pressure'?",
    "location_options": [
      "381.01(16)",
      "381.01(17)",
      "381.01(18)",
      "381.01(19)"
    ],
    "location_answer": "381.01(17)",
    "content_options": [
      "A pressure equal to the supply pressure",
      "A pressure greater than the supply pressure that may cause backflow",
      "Negative pressure within a piping system",
      "Static water pressure at rest"
    ],
    "content_answer": "A pressure greater than the supply pressure that may cause backflow",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term refers to a water supply valve operated by a float to fill a tank?",
    "location_options": [
      "381.01(21)",
      "381.01(22)",
      "381.01(22m)",
      "381.01(23)"
    ],
    "location_answer": "381.01(22)",
    "content_options": [
      "Ballcock",
      "Float valve",
      "Flush valve",
      "Check valve"
    ],
    "content_answer": "Ballcock",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Barometric loop' used for?",
    "location_options": [
      "381.01(21)",
      "381.01(22)",
      "381.01(22m)",
      "381.01(23)"
    ],
    "location_answer": "381.01(22m)",
    "content_options": [
      "Preventing back pressure and back siphonage",
      "Protecting against back-siphonage but not back pressure",
      "Regulating water pressure in multi-story buildings",
      "Maintaining water temperature in supply lines"
    ],
    "content_answer": "Protecting against back-siphonage but not back pressure",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Battery of fixtures'?",
    "location_options": [
      "381.01(23)",
      "381.01(24)",
      "381.01(25)",
      "381.01(26)"
    ],
    "location_answer": "381.01(24)",
    "content_options": [
      "Two or more fixtures sharing a common vent",
      "Two or more fixtures discharging into the same horizontal branch drain",
      "A set of fixtures connected in series for water supply",
      "Multiple fixtures using the same trap"
    ],
    "content_answer": "Two or more fixtures discharging into the same horizontal branch drain",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is the definition of 'Bedrock' in the plumbing code?",
    "location_options": [
      "381.01(27)",
      "381.01(28)",
      "381.01(29)",
      "381.01(30)"
    ],
    "location_answer": "381.01(28)",
    "content_options": [
      "Any soil layer deeper than 4 feet",
      "Rock exposed at the surface or underlying soil material meeting certain consolidation criteria",
      "Man-made compacted fill material",
      "Layer of clay preventing water infiltration"
    ],
    "content_answer": "Rock exposed at the surface or underlying soil material meeting certain consolidation criteria",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term refers to a permanently established point with a known or assumed elevation used as a vertical reference?",
    "location_options": [
      "381.01(28)",
      "381.01(29)",
      "381.01(30)",
      "381.01(31)"
    ],
    "location_answer": "381.01(30)",
    "content_options": [
      "Bell",
      "Benchmark",
      "Reference stake",
      "Datum point"
    ],
    "content_answer": "Benchmark",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is 'Blackwater' as defined in plumbing terminology?",
    "location_options": [
      "381.01(30m)",
      "381.01(31)",
      "381.01(56)",
      "381.01(112)"
    ],
    "location_answer": "381.01(31)",
    "content_options": [
      "Wastewater free of human waste",
      "Wastewater containing human waste and toilet paper",
      "Treated effluent from a POWTS",
      "Stormwater runoff from roofs"
    ],
    "content_answer": "Wastewater containing human waste and toilet paper",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What does 'Boiler blow-off basin' refer to?",
    "location_options": [
      "381.01(31)",
      "381.01(32)",
      "381.01(33)",
      "381.01(34)"
    ],
    "location_answer": "381.01(33)",
    "content_options": [
      "A basin for collecting condensate from steam boilers",
      "A vessel designed to receive and cool boiler blow-off discharge before entry into a drain system",
      "A tank for storing treated boiler feedwater",
      "A filter unit for removing solids from boiler water"
    ],
    "content_answer": "A vessel designed to receive and cool boiler blow-off discharge before entry into a drain system",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What does 'Branch interval' measure?",
    "location_options": [
      "381.01(34)",
      "381.01(35)",
      "381.01(36)",
      "381.01(37)"
    ],
    "location_answer": "381.01(35)",
    "content_options": [
      "Horizontal distance between vent connections",
      "Vertical measurement between connections of horizontal branches to a drainage stack",
      "Distance between cleanouts in a branch drain",
      "Maximum allowable length of a branch line"
    ],
    "content_answer": "Vertical measurement between connections of horizontal branches to a drainage stack",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term describes a roughness or protrusion inside a pipe wall usually caused by cutting?",
    "location_options": [
      "381.01(47)",
      "381.01(48)",
      "381.01(49)",
      "381.01(50)"
    ],
    "location_answer": "381.01(49)",
    "content_options": [
      "Burr",
      "Lip",
      "Seam",
      "Bead"
    ],
    "content_answer": "Burr",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Catch basin' used for?",
    "location_options": [
      "381.01(51)",
      "381.01(52)",
      "381.01(53)",
      "381.01(54)"
    ],
    "location_answer": "381.01(52)",
    "content_options": [
      "Collecting stormwater and allowing sediments to settle",
      "Filtering sewage before entering treatment",
      "Holding potable water for fire protection",
      "Mixing chemicals before wastewater treatment"
    ],
    "content_answer": "Collecting stormwater and allowing sediments to settle",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is 'Clear water' as defined in plumbing?",
    "location_options": [
      "381.01(55)",
      "381.01(56)",
      "381.01(57)",
      "381.01(58)"
    ],
    "location_answer": "381.01(56)",
    "content_options": [
      "Stormwater free of debris",
      "Wastewater free from harmful impurities or with impurities below harmful levels",
      "Filtered water from a treatment plant",
      "Potable water meeting all health standards"
    ],
    "content_answer": "Wastewater free from harmful impurities or with impurities below harmful levels",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term refers to water at a temperature less than 85°F?",
    "location_options": [
      "381.01(56)",
      "381.01(57)",
      "381.01(126)",
      "381.01(256)"
    ],
    "location_answer": "381.01(57)",
    "content_options": [
      "Cold water",
      "Tempered water",
      "Hot water",
      "Process water"
    ],
    "content_answer": "Cold water",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Combination drain and vent system'?",
    "location_options": [
      "381.01(59)",
      "381.01(60)",
      "381.01(61)",
      "381.01(62)"
    ],
    "location_answer": "381.01(59)",
    "content_options": [
      "A system where the drain and vent pipes are installed side by side",
      "A specially designed system that wet vents fixtures through a common drain and vent pipe",
      "A vent system that combines multiple vent stacks",
      "A pipe arrangement combining storm and sanitary drainage"
    ],
    "content_answer": "A specially designed system that wet vents fixtures through a common drain and vent pipe",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Common vent'?",
    "location_options": [
      "381.01(59)",
      "381.01(60)",
      "381.01(61)",
      "381.01(62)"
    ],
    "location_answer": "381.01(60)",
    "content_options": [
      "A vent shared by two or more building sewer systems",
      "A branch vent serving fixture drains downstream from their junction",
      "A vent connecting multiple buildings",
      "A vent stack serving an entire building"
    ],
    "content_answer": "A branch vent serving fixture drains downstream from their junction",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term refers to a drain pipe inside a building that conveys storm water from a roof to a storm sewer?",
    "location_options": [
      "381.01(60)",
      "381.01(61)",
      "381.01(62)",
      "381.01(63)"
    ],
    "location_answer": "381.01(61)",
    "content_options": [
      "Leader",
      "Conductor",
      "Roof drain",
      "Stormwater stack"
    ],
    "content_answer": "Conductor",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What does 'Containment' mean in the context of plumbing systems?",
    "location_options": [
      "381.01(61)",
      "381.01(61m)",
      "381.01(62)",
      "381.01(63)"
    ],
    "location_answer": "381.01(61m)",
    "content_options": [
      "Enclosing all potable water piping in protective conduit",
      "Installation of a cross connection control method to prohibit contamination from entering the water supply",
      "Using double-wall pipe for hazardous fluids",
      "Encasing drain pipes in concrete"
    ],
    "content_answer": "Installation of a cross connection control method to prohibit contamination from entering the water supply",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which valve is installed in a private water main or water service near its connection to a public water main?",
    "location_options": [
      "381.01(62)",
      "381.01(63)",
      "381.01(64)",
      "381.01(65)"
    ],
    "location_answer": "381.01(63)",
    "content_options": [
      "Corporation cock",
      "Curb stop",
      "Gate valve",
      "Stop-and-waste valve"
    ],
    "content_answer": "Corporation cock",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is the 'Critical level' on a vacuum breaker?",
    "location_options": [
      "381.01(63)",
      "381.01(64)",
      "381.01(65)",
      "381.01(66)"
    ],
    "location_answer": "381.01(64)",
    "content_options": [
      "The highest point where water will overflow",
      "The point that must be submerged before backflow can occur",
      "The lowest point of water pressure in the system",
      "The level at which a vacuum breaker will fail"
    ],
    "content_answer": "The point that must be submerged before backflow can occur",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "Which term refers to a potential or actual connection between a water supply and another environment that may cause contamination?",
    "location_options": [
      "381.01(64)",
      "381.01(65)",
      "381.01(66)",
      "381.01(67)"
    ],
    "location_answer": "381.01(65)",
    "content_options": [
      "Cross connection",
      "Back siphonage",
      "Pressure differential",
      "Vacuum breaker"
    ],
    "content_answer": "Cross connection",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Curb stop' used for?",
    "location_options": [
      "381.01(65)",
      "381.01(66)",
      "381.01(67)",
      "381.01(68)"
    ],
    "location_answer": "381.01(67)",
    "content_options": [
      "To stop water flow in the street main",
      "A valve placed in a water service or private water main, usually near the lot line",
      "A stop valve inside the building near the control panel",
      "A check valve to prevent backflow into the curb inlet"
    ],
    "content_answer": "A valve placed in a water service or private water main, usually near the lot line",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is a 'Dead end' in a plumbing system?",
    "location_options": [
      "381.01(66)",
      "381.01(67)",
      "381.01(68)",
      "381.01(69)"
    ],
    "location_answer": "381.01(68)",
    "content_options": [
      "A drain line that connects to no fixture",
      "A branch that terminates 2 feet or more from its source with a closed fitting",
      "The end of a water service at the property line",
      "The last fixture in a drainage run"
    ],
    "content_answer": "A branch that terminates 2 feet or more from its source with a closed fitting",
    "meta": {
      "document": "WAC-SPS-381",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-381"
  },
  {
    "question": "What is the minimum holding tank capacity requirement per person per 8-hour day for a hand pump type toilet?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "4.5 gallons",
      "6 gallons",
      "10 gallons",
      "13.5 gallons"
    ],
    "content_answer": "4.5 gallons",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "Which agency must approve prefabricated tanks or toilets for boats before installation?",
    "location_options": [
      "386.03",
      "386.04",
      "386.05",
      "386.06"
    ],
    "location_answer": "386.05",
    "content_options": [
      "Department of Safety and Professional Services",
      "Department of Natural Resources",
      "U.S. Coast Guard",
      "Local municipal building department"
    ],
    "content_answer": "Department of Safety and Professional Services",
    "meta": {
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is the minimum pressure resistance required for waste and vent piping in a boat sewage system?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.06",
    "content_options": [
      "50 psi",
      "60 psi",
      "75 psi",
      "100 psi"
    ],
    "content_answer": "75 psi",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "When must a boat owner contact a DNR representative or local law enforcement about overboard discharge inactivation?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.07",
    "content_options": [
      "Before entering state waters",
      "After leaving state waters",
      "Only during annual inspection",
      "Only when installing a new toilet"
    ],
    "content_answer": "Before entering state waters",
    "meta": {
      "page_start": 2,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What type of pump must be provided for on-shore sewage removal from boat holding tanks?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.08",
    "content_options": [
      "Self-priming pump",
      "Centrifugal pump",
      "Peristaltic pump",
      "Submersible pump"
    ],
    "content_answer": "Self-priming pump",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "Under what condition can a nonrecirculating chemical toilet be used instead of a water-flushed toilet?",
    "location_options": [
      "386.08",
      "386.09",
      "386.10",
      "386.11"
    ],
    "location_answer": "386.09",
    "content_options": [
      "The container is not portable and on-shore pumping facilities are provided",
      "The toilet is located in a private cabin",
      "The toilet is equipped with a deodorizing system",
      "The toilet uses seawater for flushing"
    ],
    "content_answer": "The container is not portable and on-shore pumping facilities are provided",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What must be on hand for electrical equipment maintenance under the operation and maintenance requirements?",
    "location_options": [
      "386.08",
      "386.09",
      "386.10",
      "386.11"
    ],
    "location_answer": "386.10",
    "content_options": [
      "Extra fuses and indicator lights",
      "Extra extension cords",
      "A backup generator",
      "Battery chargers"
    ],
    "content_answer": "Extra fuses and indicator lights",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What types of facilities are prohibited for sewage holding on boats?",
    "location_options": [
      "386.08",
      "386.09",
      "386.10",
      "386.11"
    ],
    "location_answer": "386.11",
    "content_options": [
      "Pails, plastic bags, or other non-approved receptacles",
      "Recirculating systems",
      "Portable toilets",
      "Holding tanks"
    ],
    "content_answer": "Pails, plastic bags, or other non-approved receptacles",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What temperature range must holding tank materials withstand?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "-10°F to 120°F",
      "-22°F to 140°F",
      "0°F to 150°F",
      "-30°F to 130°F"
    ],
    "content_answer": "-22°F to 140°F",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What labeling is required on the cap and flange of a sewage outlet pipe?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "WASTE",
      "SEWAGE",
      "DO NOT USE",
      "PUMP-OUT"
    ],
    "content_answer": "WASTE",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is the required nominal inside diameter for outlet piping from a holding tank?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "1 inch",
      "1.5 inches",
      "2 inches",
      "2.5 inches"
    ],
    "content_answer": "1.5 inches",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What device must activate when a holding tank becomes three-fourths full?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "Sewage level device",
      "Overflow alarm",
      "Automatic shutoff valve",
      "Pressure gauge"
    ],
    "content_answer": "Sewage level device",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is the required holding tank capacity per person per 8-hour day for a standard waterflush toilet?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "4.5 gallons",
      "6 gallons",
      "10 gallons",
      "13.5 gallons"
    ],
    "content_answer": "13.5 gallons",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What type of connector must be on the suction hose used for on-shore disposal?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.08",
    "content_options": [
      "Quick-connect dripproof connector",
      "Threaded metal connector",
      "Compression fitting",
      "Cam-lock coupling"
    ],
    "content_answer": "Quick-connect dripproof connector",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What must be included in on-shore disposal facility plans for approval?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.08",
    "content_options": [
      "Materials, pump characteristics, water supply system, and septic/holding tank details",
      "Only the pump model and capacity",
      "Only the layout of the facility",
      "A signed statement from the marina owner"
    ],
    "content_answer": "Materials, pump characteristics, water supply system, and septic/holding tank details",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is the minimum capacity basis for a recirculating toilet per person per 8-hour day?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "1/4 gallon",
      "1 gallon",
      "2 gallons",
      "4 gallons"
    ],
    "content_answer": "1/4 gallon",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is the minimum pressure head resistance required for a holding tank?",
    "location_options": [
      "386.05",
      "386.06",
      "386.07",
      "386.08"
    ],
    "location_answer": "386.06",
    "content_options": [
      "3 psi",
      "5 psi",
      "10 psi",
      "15 psi"
    ],
    "content_answer": "5 psi",
    "meta": {
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is one approved method for overboard discharge inactivation?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.07",
    "content_options": [
      "Sealing the toilet bowl with wax",
      "Flushing with freshwater",
      "Adding extra deodorant",
      "Installing a vent filter"
    ],
    "content_answer": "Sealing the toilet bowl with wax",
    "meta": {
      "page_start": 2,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is required when a public sanitary sewer is economically feasible for on-shore disposal?",
    "location_options": [
      "386.06",
      "386.07",
      "386.08",
      "386.09"
    ],
    "location_answer": "386.08",
    "content_options": [
      "Disposal piping must discharge to it",
      "Private disposal system must be built",
      "Holding tank size must be reduced",
      "Boat must be inspected monthly"
    ],
    "content_answer": "Disposal piping must discharge to it",
    "meta": {
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-386"
  },
  {
    "question": "What is the primary purpose of the regulations described in this chapter?",
    "location_options": [
      "384.01",
      "384.02",
      "384.03",
      "384.04"
    ],
    "location_answer": "384.01",
    "content_options": [
      "To provide requirements for sanitary building drainage systems",
      "To set construction requirements for public buildings",
      "To regulate plumbing apprentice training",
      "To control water conservation practices"
    ],
    "content_answer": "To provide requirements for sanitary building drainage systems",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which term is defined as a device or structure for intercepting grease in wastewater?",
    "location_options": [
      "384.10",
      "384.12",
      "384.14",
      "384.16"
    ],
    "location_answer": "384.10",
    "content_options": [
      "Grease interceptor",
      "Sediment trap",
      "Oil separator",
      "Wastewater clarifier"
    ],
    "content_answer": "Grease interceptor",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What type of vent connects at the junction of the fixture drain and the horizontal branch drain?",
    "location_options": [
      "384.21",
      "384.22",
      "384.23",
      "384.24"
    ],
    "location_answer": "384.22",
    "content_options": [
      "Combination waste and vent",
      "Circuit vent",
      "Relief vent",
      "Yoke vent"
    ],
    "content_answer": "Combination waste and vent",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "In which scenario is a sump pump required in a drainage system?",
    "location_options": [
      "384.25",
      "384.26",
      "384.27",
      "384.28"
    ],
    "location_answer": "384.27",
    "content_options": [
      "When a fixture is located below the gravity drainage line",
      "When a building has more than three floors",
      "When there is more than one vent stack",
      "When stormwater is being drained into the sanitary system"
    ],
    "content_answer": "When a fixture is located below the gravity drainage line",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 7,
      "page_end": 7
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum allowable distance between a trap and its vent for a 2-inch pipe?",
    "location_options": [
      "384.30",
      "384.31",
      "384.32",
      "384.33"
    ],
    "location_answer": "384.32",
    "content_options": [
      "5 feet",
      "3 feet",
      "6 feet",
      "8 feet"
    ],
    "content_answer": "5 feet",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 8,
      "page_end": 8
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which type of venting method serves multiple fixtures on the same horizontal branch drain?",
    "location_options": [
      "384.35",
      "384.36",
      "384.37",
      "384.38"
    ],
    "location_answer": "384.37",
    "content_options": [
      "Circuit vent",
      "Relief vent",
      "Wet vent",
      "Loop vent"
    ],
    "content_answer": "Circuit vent",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "When must cleanouts be installed in a drainage system?",
    "location_options": [
      "384.40",
      "384.41",
      "384.42",
      "384.43"
    ],
    "location_answer": "384.41",
    "content_options": [
      "At the base of each stack and at changes in direction",
      "Every 20 feet in all horizontal piping",
      "Only at the point where the building drain exits",
      "Only when requested by the building inspector"
    ],
    "content_answer": "At the base of each stack and at changes in direction",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 11,
      "page_end": 11
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the minimum required slope for a 4-inch horizontal drainage pipe?",
    "location_options": [
      "384.44",
      "384.45",
      "384.46",
      "384.47"
    ],
    "location_answer": "384.46",
    "content_options": [
      "1/8 inch per foot",
      "1/4 inch per foot",
      "3/8 inch per foot",
      "1/2 inch per foot"
    ],
    "content_answer": "1/8 inch per foot",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which material is prohibited for use in sanitary drainage piping?",
    "location_options": [
      "384.50",
      "384.51",
      "384.52",
      "384.53"
    ],
    "location_answer": "384.52",
    "content_options": [
      "Lead",
      "Copper",
      "Cast iron",
      "PVC"
    ],
    "content_answer": "Lead",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the minimum vent pipe size for a water closet?",
    "location_options": [
      "384.55",
      "384.56",
      "384.57",
      "384.58"
    ],
    "location_answer": "384.56",
    "content_options": [
      "1.5 inches",
      "2 inches",
      "2.5 inches",
      "3 inches"
    ],
    "content_answer": "2 inches",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Under what condition is an air admittance valve permitted?",
    "location_options": [
      "384.60",
      "384.61",
      "384.62",
      "384.63"
    ],
    "location_answer": "384.62",
    "content_options": [
      "When venting to open air is impractical",
      "When serving more than 6 fixtures",
      "When replacing a stack vent",
      "In all wet vent systems"
    ],
    "content_answer": "When venting to open air is impractical",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 17,
      "page_end": 17
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum developed length of a 1.25-inch trap arm?",
    "location_options": [
      "384.65",
      "384.66",
      "384.67",
      "384.68"
    ],
    "location_answer": "384.66",
    "content_options": [
      "2 feet 6 inches",
      "3 feet 6 inches",
      "4 feet 6 inches",
      "5 feet"
    ],
    "content_answer": "5 feet",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 18,
      "page_end": 18
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which vent type is installed to protect the trap seal of a floor drain located away from other fixtures?",
    "location_options": [
      "384.70",
      "384.71",
      "384.72",
      "384.73"
    ],
    "location_answer": "384.72",
    "content_options": [
      "Relief vent",
      "Circuit vent",
      "Loop vent",
      "Combination waste and vent"
    ],
    "content_answer": "Relief vent",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 20,
      "page_end": 20
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum fixture unit load for a 3-inch horizontal drain?",
    "location_options": [
      "384.75",
      "384.76",
      "384.77",
      "384.78"
    ],
    "location_answer": "384.77",
    "content_options": [
      "20 fixture units",
      "35 fixture units",
      "50 fixture units",
      "75 fixture units"
    ],
    "content_answer": "35 fixture units",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "In what situation must a vent stack be increased in size?",
    "location_options": [
      "384.80",
      "384.81",
      "384.82",
      "384.83"
    ],
    "location_answer": "384.82",
    "content_options": [
      "When frost closure is possible",
      "When serving more than three water closets",
      "When over 25 feet in height",
      "When used with wet vents"
    ],
    "content_answer": "When frost closure is possible",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 23,
      "page_end": 23
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the minimum required slope for a 3-inch horizontal drainage pipe?",
    "location_options": [
      "384.45",
      "384.46",
      "384.47",
      "384.48"
    ],
    "location_answer": "384.46",
    "content_options": [
      "1/8 inch per foot",
      "1/4 inch per foot",
      "3/8 inch per foot",
      "1/2 inch per foot"
    ],
    "content_answer": "1/4 inch per foot",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which vent type serves as a vertical vent pipe installed primarily to provide air circulation?",
    "location_options": [
      "384.20",
      "384.21",
      "384.22",
      "384.23"
    ],
    "location_answer": "384.21",
    "content_options": [
      "Stack vent",
      "Loop vent",
      "Circuit vent",
      "Yoke vent"
    ],
    "content_answer": "Stack vent",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 4,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum developed length for a 2-inch trap arm?",
    "location_options": [
      "384.65",
      "384.66",
      "384.67",
      "384.68"
    ],
    "location_answer": "384.66",
    "content_options": [
      "5 feet",
      "6 feet",
      "7 feet",
      "8 feet"
    ],
    "content_answer": "8 feet",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 18,
      "page_end": 18
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "When installing a sump pump, where must the discharge pipe terminate?",
    "location_options": [
      "384.25",
      "384.26",
      "384.27",
      "384.28"
    ],
    "location_answer": "384.27",
    "content_options": [
      "Above the highest flood level rim",
      "Below the trap seal",
      "At the vent stack base",
      "Directly into a wet vent"
    ],
    "content_answer": "Above the highest flood level rim",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 7,
      "page_end": 7
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the required cleanout size for a 4-inch drain?",
    "location_options": [
      "384.40",
      "384.41",
      "384.42",
      "384.43"
    ],
    "location_answer": "384.41",
    "content_options": [
      "4 inches",
      "3 inches",
      "2 inches",
      "1.5 inches"
    ],
    "content_answer": "4 inches",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 11,
      "page_end": 11
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum number of fixture units permitted on a 2-inch horizontal branch drain?",
    "location_options": [
      "384.75",
      "384.76",
      "384.77",
      "384.78"
    ],
    "location_answer": "384.77",
    "content_options": [
      "6 fixture units",
      "8 fixture units",
      "12 fixture units",
      "16 fixture units"
    ],
    "content_answer": "8 fixture units",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Under what condition can a combination waste and vent system be used?",
    "location_options": [
      "384.35",
      "384.36",
      "384.37",
      "384.38"
    ],
    "location_answer": "384.36",
    "content_options": [
      "When the fixtures have a continuous flow with minimal solids",
      "When venting multiple floors",
      "When venting island sinks",
      "When bypassing a relief vent"
    ],
    "content_answer": "When the fixtures have a continuous flow with minimal solids",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the smallest size vent pipe allowed for a lavatory?",
    "location_options": [
      "384.55",
      "384.56",
      "384.57",
      "384.58"
    ],
    "location_answer": "384.56",
    "content_options": [
      "1.25 inches",
      "1.5 inches",
      "2 inches",
      "2.5 inches"
    ],
    "content_answer": "1.25 inches",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "How high above the roof must a vent stack extend?",
    "location_options": [
      "384.80",
      "384.81",
      "384.82",
      "384.83"
    ],
    "location_answer": "384.81",
    "content_options": [
      "At least 6 inches",
      "At least 12 inches",
      "At least 18 inches",
      "At least 24 inches"
    ],
    "content_answer": "At least 12 inches",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 22,
      "page_end": 22
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which vent type is used specifically to protect the trap seal in a remote floor drain?",
    "location_options": [
      "384.70",
      "384.71",
      "384.72",
      "384.73"
    ],
    "location_answer": "384.72",
    "content_options": [
      "Relief vent",
      "Loop vent",
      "Circuit vent",
      "Yoke vent"
    ],
    "content_answer": "Relief vent",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 20,
      "page_end": 20
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the minimum slope for a building sewer 6 inches or larger in diameter?",
    "location_options": [
      "384.44",
      "384.45",
      "384.46",
      "384.47"
    ],
    "location_answer": "384.46",
    "content_options": [
      "1/16 inch per foot",
      "1/8 inch per foot",
      "1/4 inch per foot",
      "3/8 inch per foot"
    ],
    "content_answer": "1/8 inch per foot",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "When must a yoke vent be installed?",
    "location_options": [
      "384.70",
      "384.71",
      "384.72",
      "384.73"
    ],
    "location_answer": "384.71",
    "content_options": [
      "When connecting stacks at different levels to equalize pressure",
      "When venting a lavatory and shower together",
      "When replacing a stack vent",
      "When venting a floor drain"
    ],
    "content_answer": "When connecting stacks at different levels to equalize pressure",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 20,
      "page_end": 20
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum fixture unit load for a 4-inch vertical drain?",
    "location_options": [
      "384.75",
      "384.76",
      "384.77",
      "384.78"
    ],
    "location_answer": "384.77",
    "content_options": [
      "90 fixture units",
      "120 fixture units",
      "160 fixture units",
      "200 fixture units"
    ],
    "content_answer": "160 fixture units",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which material is approved for underground sanitary drainage piping?",
    "location_options": [
      "384.50",
      "384.51",
      "384.52",
      "384.53"
    ],
    "location_answer": "384.51",
    "content_options": [
      "Cast iron",
      "Lead",
      "ABS",
      "Copper"
    ],
    "content_answer": "Cast iron",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "How far must a vent terminate from an operable window?",
    "location_options": [
      "384.80",
      "384.81",
      "384.82",
      "384.83"
    ],
    "location_answer": "384.81",
    "content_options": [
      "At least 10 feet horizontally",
      "At least 4 feet horizontally",
      "At least 6 feet horizontally",
      "At least 3 feet horizontally"
    ],
    "content_answer": "At least 10 feet horizontally",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 22,
      "page_end": 22
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the maximum number of fixture units permitted on a 1.5-inch horizontal branch?",
    "location_options": [
      "384.75",
      "384.76",
      "384.77",
      "384.78"
    ],
    "location_answer": "384.77",
    "content_options": [
      "2 fixture units",
      "3 fixture units",
      "4 fixture units",
      "6 fixture units"
    ],
    "content_answer": "3 fixture units",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "Which venting method allows a single vent to serve multiple traps and fixture drains on the same horizontal branch?",
    "location_options": [
      "384.35",
      "384.36",
      "384.37",
      "384.38"
    ],
    "location_answer": "384.37",
    "content_options": [
      "Circuit vent",
      "Loop vent",
      "Relief vent",
      "Yoke vent"
    ],
    "content_answer": "Circuit vent",
    "meta": {
      "document": "WAC-SPS-384",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-384"
  },
  {
    "question": "What is the minimum fee for a plumbing plan examination per plan?",
    "location_options": [
      "302.61",
      "302.635",
      "302.64",
      "302.645"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$50.00",
      "$85.00",
      "$100.00",
      "$150.00"
    ],
    "content_answer": "$85.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "According to the fee schedule, how much is charged per inch diameter for a sanitary drain and vent system plan?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$15.00",
      "$30.00",
      "$50.00",
      "$85.00"
    ],
    "content_answer": "$50.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the examination fee for a car wash interceptor in a plumbing plan review?",
    "location_options": [
      "302.61",
      "302.64",
      "302.66",
      "302.68"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$50.00",
      "$85.00",
      "$100.00",
      "$170.00"
    ],
    "content_answer": "$85.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "When calculating plumbing plan fees for additions or remodeling, which table should be used to determine horizontal drain size for sanitary systems?",
    "location_options": [
      "302.64",
      "302.65",
      "382.30",
      "382.40"
    ],
    "location_answer": "382.30",
    "content_options": [
      "Table 382.30-1",
      "Table 382.30-2",
      "Table 382.40-1",
      "Table 382.36-4"
    ],
    "content_answer": "Table 382.30-2",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the fee for a reduced pressure principle backflow preventer assembly in a plumbing plan review?",
    "location_options": [
      "302.64",
      "302.645",
      "302.66",
      "302.65"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$85.00",
      "$100.00",
      "$150.00",
      "$170.00"
    ],
    "content_answer": "$170.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the registration fee for a cross connection control assembly filed electronically?",
    "location_options": [
      "302.61",
      "302.635",
      "302.64",
      "302.645"
    ],
    "location_answer": "302.645",
    "content_options": [
      "$15.00",
      "$20.00",
      "$25.00",
      "$30.00"
    ],
    "content_answer": "$20.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "According to the fee schedule, how much is the filing fee for a cross connection control assembly performance test report if submitted electronically?",
    "location_options": [
      "302.64",
      "302.645",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.645",
    "content_options": [
      "$15.00",
      "$20.00",
      "$25.00",
      "$30.00"
    ],
    "content_answer": "$20.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the plan examination fee for a private onsite wastewater treatment system with design wastewater flow of 1,500 gpd where all components are approved?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.65",
    "content_options": [
      "$250.00",
      "$325.00",
      "$400.00",
      "$450.00"
    ],
    "content_answer": "$325.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "If a POWTS holding tank over 10,000 gpd is not approved, what is the examination fee?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.65",
    "content_options": [
      "$225.00",
      "$300.00",
      "$450.00",
      "$600.00"
    ],
    "content_answer": "$450.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "How much is charged for reviewing a plumbing product alternate standard?",
    "location_options": [
      "302.64",
      "302.645",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.66",
    "content_options": [
      "$250.00",
      "$400.00",
      "$500.00",
      "$1,000.00"
    ],
    "content_answer": "$500.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the fee for an experimental plumbing product approval request?",
    "location_options": [
      "302.64",
      "302.645",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.66",
    "content_options": [
      "$500.00",
      "$800.00",
      "$1,000.00",
      "$1,200.00"
    ],
    "content_answer": "$1,000.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What fee must be forwarded to the department from each sanitary permit issued by a governmental unit?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.67",
    "content_options": [
      "$25.00",
      "$70.00",
      "$100.00",
      "$141.00"
    ],
    "content_answer": "$100.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the registration fee for a vault privy serving a state-owned facility?",
    "location_options": [
      "302.64",
      "302.65",
      "302.675",
      "302.68"
    ],
    "location_answer": "302.675",
    "content_options": [
      "$50.00",
      "$70.00",
      "$90.00",
      "$100.00"
    ],
    "content_answer": "$70.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "For a public swimming pool of gutter type where department staff perform inspections, what is the initial construction plan review fee?",
    "location_options": [
      "302.64",
      "302.66",
      "302.67",
      "302.68"
    ],
    "location_answer": "302.68",
    "content_options": [
      "$1,000.00",
      "$1,200.00",
      "$1,500.00",
      "$1,800.00"
    ],
    "content_answer": "$1,800.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "How much is the plan review fee for a public whirlpool where department staff do not perform construction inspections?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.68"
    ],
    "location_answer": "302.68",
    "content_options": [
      "$400.00",
      "$900.00",
      "$1,000.00",
      "$1,500.00"
    ],
    "content_answer": "$900.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the revision fee for previously approved plans for a water slide over 6 feet in height where department staff perform inspections?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.68"
    ],
    "location_answer": "302.68",
    "content_options": [
      "$200.00",
      "$240.00",
      "$300.00",
      "$350.00"
    ],
    "content_answer": "$240.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "If a public swimming pool modification inspection is performed by department staff solely for Virginia Graeme Baker compliance, what is the fee?",
    "location_options": [
      "302.64",
      "302.66",
      "302.67",
      "302.68"
    ],
    "location_answer": "302.68",
    "content_options": [
      "$200.00",
      "$240.00",
      "$300.00",
      "$350.00"
    ],
    "content_answer": "$350.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the fee for a stormwater system plan review with less than or equal to one acre drainage area?",
    "location_options": [
      "302.61",
      "302.64",
      "302.645",
      "302.65"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$15.00 per inch diameter",
      "$30.00 per inch diameter",
      "$85.00 flat fee",
      "$200.00 per system"
    ],
    "content_answer": "$15.00 per inch diameter",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the examination fee for a sanitary building sewer only, with no drain and vent system?",
    "location_options": [
      "302.61",
      "302.64",
      "302.645",
      "302.65"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$15.00 per inch diameter",
      "$30.00 per inch diameter",
      "$50.00 per inch diameter",
      "$85.00 per inch diameter"
    ],
    "content_answer": "$30.00 per inch diameter",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "How much is charged for an oil interceptor plan review?",
    "location_options": [
      "302.61",
      "302.64",
      "302.65",
      "302.66"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$50.00",
      "$85.00",
      "$100.00",
      "$170.00"
    ],
    "content_answer": "$85.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "For a manufactured home community with 30 sites, what is the plumbing plan examination fee?",
    "location_options": [
      "302.64",
      "302.645",
      "302.65",
      "302.66"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$300.00",
      "$350.00",
      "$400.00",
      "$500.00"
    ],
    "content_answer": "$350.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the plan examination fee for an alternate plumbing system?",
    "location_options": [
      "302.61",
      "302.64",
      "302.65",
      "302.66"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$500.00",
      "$700.00",
      "$800.00",
      "$1,000.00"
    ],
    "content_answer": "$800.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "When determining building water distribution plan fees for additions, which table is used to convert fixture units to gallons per minute?",
    "location_options": [
      "302.64",
      "302.65",
      "382.30",
      "382.40"
    ],
    "location_answer": "382.40",
    "content_options": [
      "Table 382.40-1",
      "Table 382.40-2",
      "Table 382.40-3",
      "Table 382.36-4"
    ],
    "content_answer": "Table 382.40-3",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "How much is the fee for a stormwater system plan review with a drainage area greater than 15 acres?",
    "location_options": [
      "302.61",
      "302.64",
      "302.645",
      "302.65"
    ],
    "location_answer": "302.64",
    "content_options": [
      "$350.00",
      "$500.00",
      "$600.00",
      "$800.00"
    ],
    "content_answer": "$600.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 12,
      "page_end": 12
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the registration fee for a cross connection control assembly submitted on paper rather than electronically?",
    "location_options": [
      "302.64",
      "302.645",
      "302.65",
      "302.66"
    ],
    "location_answer": "302.645",
    "content_options": [
      "$15.00",
      "$20.00",
      "$25.00",
      "$30.00"
    ],
    "content_answer": "$30.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "For a POWTS design with unapproved components and a design flow of 800 gpd, what is the plan examination fee?",
    "location_options": [
      "302.64",
      "302.65",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.65",
    "content_options": [
      "$250.00",
      "$450.00",
      "$600.00",
      "$750.00"
    ],
    "content_answer": "$450.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 13,
      "page_end": 13
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the fee for reviewing a commercial water vending machine under plumbing product review?",
    "location_options": [
      "302.64",
      "302.645",
      "302.66",
      "302.67"
    ],
    "location_answer": "302.66",
    "content_options": [
      "$125.00",
      "$200.00",
      "$250.00",
      "$500.00"
    ],
    "content_answer": "$250.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "How much is the registration fee for a pit privy serving a state-owned facility?",
    "location_options": [
      "302.64",
      "302.65",
      "302.675",
      "302.68"
    ],
    "location_answer": "302.675",
    "content_options": [
      "$50.00",
      "$70.00",
      "$90.00",
      "$100.00"
    ],
    "content_answer": "$90.00",
    "meta": {
      "document": "WAC-SPS-302",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-302"
  },
  {
    "question": "What is the stated purpose of the rules outlined in this section regarding private onsite wastewater treatment systems?",
    "location_options": [
      "383.01",
      "383.02",
      "383.03",
      "383.04"
    ],
    "location_answer": "383.01",
    "content_options": [
      "To regulate the disposal of municipal wastewater",
      "To establish uniform standards for POWTS",
      "To control public water supply systems",
      "To mandate septic tank inspections every year"
    ],
    "content_answer": "To establish uniform standards for POWTS",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "According to the text, what is the scope of these rules?",
    "location_options": [
      "383.01",
      "383.02",
      "383.03",
      "383.04"
    ],
    "location_answer": "383.02",
    "content_options": [
      "They apply to municipal treatment plants",
      "They apply to all private onsite wastewater treatment systems",
      "They apply only to temporary wastewater systems",
      "They apply exclusively to industrial wastewater systems"
    ],
    "content_answer": "They apply to all private onsite wastewater treatment systems",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Which agency is responsible for administering and enforcing the provisions of this chapter?",
    "location_options": [
      "383.10",
      "383.20",
      "383.21",
      "383.22"
    ],
    "location_answer": "383.20",
    "content_options": [
      "Department of Safety and Professional Services",
      "Department of Natural Resources",
      "Department of Health Services",
      "Environmental Protection Agency"
    ],
    "content_answer": "Department of Safety and Professional Services",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "In what situation may the department issue a written order to abate a human health hazard?",
    "location_options": [
      "383.20",
      "383.21",
      "383.22",
      "383.23"
    ],
    "location_answer": "383.21",
    "content_options": [
      "When a POWTS is installed without a permit",
      "When a POWTS is discharging untreated wastewater to the ground surface",
      "When a POWTS has not been inspected within 3 years",
      "When a POWTS does not meet minimum tank size requirements"
    ],
    "content_answer": "When a POWTS is discharging untreated wastewater to the ground surface",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 3,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What type of permit is required before constructing a new POWTS?",
    "location_options": [
      "383.20",
      "383.22",
      "383.23",
      "383.24"
    ],
    "location_answer": "383.22",
    "content_options": [
      "An emergency repair authorization",
      "A sanitary permit",
      "A groundwater protection certificate",
      "A conditional use approval"
    ],
    "content_answer": "A sanitary permit",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 4,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Under what condition may the department revoke a sanitary permit?",
    "location_options": [
      "383.22",
      "383.23",
      "383.24",
      "383.25"
    ],
    "location_answer": "383.23",
    "content_options": [
      "If it is issued to the wrong property owner",
      "If it was issued based on false or incorrect information",
      "If the permit holder moves out of the jurisdiction",
      "If the project exceeds its original budget"
    ],
    "content_answer": "If it was issued based on false or incorrect information",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 4,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Who is authorized to design a POWTS according to the rules?",
    "location_options": [
      "383.25",
      "383.26",
      "383.27",
      "383.28"
    ],
    "location_answer": "383.26",
    "content_options": [
      "Only registered professional engineers",
      "Only licensed master plumbers or registered engineers",
      "Only state-approved contractors",
      "Only county health department officials"
    ],
    "content_answer": "Only licensed master plumbers or registered engineers",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 6,
      "page_end": 6
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum horizontal separation required between a POWTS treatment tank and a private well?",
    "location_options": [
      "383.43",
      "383.44",
      "383.45",
      "383.46"
    ],
    "location_answer": "383.44",
    "content_options": [
      "25 feet",
      "50 feet",
      "75 feet",
      "100 feet"
    ],
    "content_answer": "50 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "How often must a POWTS management plan require inspection of the system?",
    "location_options": [
      "383.54",
      "383.55",
      "383.56",
      "383.57"
    ],
    "location_answer": "383.55",
    "content_options": [
      "Every 6 months",
      "Annually",
      "Every 2 years",
      "Every 3 years"
    ],
    "content_answer": "Every 3 years",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 20,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the maximum allowable slope for a POWTS dispersal area?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.45",
    "content_options": [
      "6 percent",
      "12 percent",
      "15 percent",
      "20 percent"
    ],
    "content_answer": "12 percent",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 16,
      "page_end": 16
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Under what conditions may an experimental POWTS be installed?",
    "location_options": [
      "383.60",
      "383.61",
      "383.62",
      "383.63"
    ],
    "location_answer": "383.61",
    "content_options": [
      "Only if approved by a county zoning board",
      "Only under a written agreement with the department",
      "Only if the property is zoned for industrial use",
      "Only during non-winter months"
    ],
    "content_answer": "Only under a written agreement with the department",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 23,
      "page_end": 23
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum design life expectancy for a new POWTS according to the code?",
    "location_options": [
      "383.43",
      "383.44",
      "383.45",
      "383.46"
    ],
    "location_answer": "383.43",
    "content_options": [
      "5 years",
      "10 years",
      "20 years",
      "30 years"
    ],
    "content_answer": "20 years",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What type of effluent filter is required for new treatment tanks?",
    "location_options": [
      "383.45",
      "383.46",
      "383.47",
      "383.48"
    ],
    "location_answer": "383.47",
    "content_options": [
      "A filter with a minimum of 1/16-inch openings",
      "A filter rated for 1,500 gallons per day",
      "A filter that meets NSF/ANSI Standard 46",
      "No filter is required"
    ],
    "content_answer": "A filter that meets NSF/ANSI Standard 46",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 17,
      "page_end": 17
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "How deep below grade must the top of a treatment tank be installed?",
    "location_options": [
      "383.46",
      "383.47",
      "383.48",
      "383.49"
    ],
    "location_answer": "383.46",
    "content_options": [
      "No more than 1 foot",
      "No more than 2 feet",
      "No more than 3 feet",
      "No more than 4 feet"
    ],
    "content_answer": "No more than 3 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 16,
      "page_end": 16
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Which type of soil is not suitable for a POWTS dispersal area?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "Loamy sand",
      "Silty clay",
      "Sandy loam",
      "Gravelly sand"
    ],
    "content_answer": "Silty clay",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum tank capacity for a POWTS serving a 3-bedroom residence?",
    "location_options": [
      "383.45",
      "383.46",
      "383.47",
      "383.48"
    ],
    "location_answer": "383.45",
    "content_options": [
      "1,000 gallons",
      "1,500 gallons",
      "2,000 gallons",
      "2,500 gallons"
    ],
    "content_answer": "1,500 gallons",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 16,
      "page_end": 16
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "According to the code, what is the minimum vertical separation between the infiltrative surface and high groundwater?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "6 inches",
      "12 inches",
      "18 inches",
      "24 inches"
    ],
    "content_answer": "12 inches",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "When must the management plan for a POWTS be provided to the property owner?",
    "location_options": [
      "383.55",
      "383.56",
      "383.57",
      "383.58"
    ],
    "location_answer": "383.55",
    "content_options": [
      "At the time of final inspection",
      "Within 30 days of permit issuance",
      "Before the start of construction",
      "Upon sale of the property"
    ],
    "content_answer": "At the time of final inspection",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum setback distance required between a POWTS dispersal area and a property line?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "2 feet",
      "5 feet",
      "10 feet",
      "15 feet"
    ],
    "content_answer": "2 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "According to the rules, who may perform the installation of a POWTS?",
    "location_options": [
      "383.25",
      "383.26",
      "383.27",
      "383.28"
    ],
    "location_answer": "383.27",
    "content_options": [
      "A licensed master plumber",
      "Any general contractor",
      "A certified soil tester",
      "A registered engineer"
    ],
    "content_answer": "A licensed master plumber",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 6,
      "page_end": 6
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the required minimum inspection frequency for holding tanks under a management plan?",
    "location_options": [
      "383.54",
      "383.55",
      "383.56",
      "383.57"
    ],
    "location_answer": "383.55",
    "content_options": [
      "Every 6 months",
      "Annually",
      "Every 2 years",
      "Every 3 years"
    ],
    "content_answer": "Annually",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Under what circumstance may the department require additional site evaluations?",
    "location_options": [
      "383.25",
      "383.26",
      "383.27",
      "383.28"
    ],
    "location_answer": "383.25",
    "content_options": [
      "When site conditions are inconsistent with submitted plans",
      "When the property has more than one dwelling",
      "When a holding tank is proposed",
      "When the lot size exceeds 5 acres"
    ],
    "content_answer": "When site conditions are inconsistent with submitted plans",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What minimum separation is required between a POWTS and a swimming pool?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "5 feet",
      "10 feet",
      "15 feet",
      "20 feet"
    ],
    "content_answer": "15 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "How soon after a sanitary permit is issued must construction begin before the permit expires?",
    "location_options": [
      "383.22",
      "383.23",
      "383.24",
      "383.25"
    ],
    "location_answer": "383.22",
    "content_options": [
      "6 months",
      "1 year",
      "2 years",
      "3 years"
    ],
    "content_answer": "2 years",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 4,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the required minimum diameter for a building sewer pipe serving a POWTS?",
    "location_options": [
      "383.45",
      "383.46",
      "383.47",
      "383.48"
    ],
    "location_answer": "383.45",
    "content_options": [
      "3 inches",
      "4 inches",
      "5 inches",
      "6 inches"
    ],
    "content_answer": "4 inches",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 16,
      "page_end": 16
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Which type of wastewater may not be discharged to a POWTS?",
    "location_options": [
      "383.31",
      "383.32",
      "383.33",
      "383.34"
    ],
    "location_answer": "383.33",
    "content_options": [
      "Domestic wastewater",
      "Non-domestic wastewater",
      "Laundry wastewater",
      "Kitchen wastewater"
    ],
    "content_answer": "Non-domestic wastewater",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum setback between a POWTS and a navigable water body?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "25 feet",
      "50 feet",
      "75 feet",
      "100 feet"
    ],
    "content_answer": "50 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Who is responsible for ensuring that a POWTS is maintained in compliance with its management plan?",
    "location_options": [
      "383.54",
      "383.55",
      "383.56",
      "383.57"
    ],
    "location_answer": "383.54",
    "content_options": [
      "The county health department",
      "The POWTS installer",
      "The property owner",
      "The department"
    ],
    "content_answer": "The property owner",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 20,
      "page_end": 20
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "For POWTS design purposes, how many gallons per day are assumed for each bedroom?",
    "location_options": [
      "383.43",
      "383.44",
      "383.45",
      "383.46"
    ],
    "location_answer": "383.43",
    "content_options": [
      "75 gallons",
      "100 gallons",
      "125 gallons",
      "150 gallons"
    ],
    "content_answer": "150 gallons",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum setback from a POWTS dispersal area to a basement wall?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "5 feet",
      "10 feet",
      "15 feet",
      "20 feet"
    ],
    "content_answer": "10 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "In what situation may a holding tank be approved for use?",
    "location_options": [
      "383.32",
      "383.33",
      "383.34",
      "383.35"
    ],
    "location_answer": "383.32",
    "content_options": [
      "When the site is inaccessible to installation equipment",
      "When no other system can be designed to meet code",
      "When the property owner requests it for cost savings",
      "When a septic tank is not large enough"
    ],
    "content_answer": "When no other system can be designed to meet code",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What maximum depth of ponded wastewater is allowed in a treatment tank outlet chamber?",
    "location_options": [
      "383.46",
      "383.47",
      "383.48",
      "383.49"
    ],
    "location_answer": "383.47",
    "content_options": [
      "2 inches",
      "4 inches",
      "6 inches",
      "8 inches"
    ],
    "content_answer": "2 inches",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 17,
      "page_end": 17
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "At what minimum depth must soil evaluation be conducted to determine suitability for a POWTS?",
    "location_options": [
      "383.43",
      "383.44",
      "383.45",
      "383.46"
    ],
    "location_answer": "383.43",
    "content_options": [
      "2 feet",
      "3 feet",
      "4 feet",
      "5 feet"
    ],
    "content_answer": "4 feet",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 14,
      "page_end": 14
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Which organization must approve proprietary POWTS products before use in the state?",
    "location_options": [
      "383.60",
      "383.61",
      "383.62",
      "383.63"
    ],
    "location_answer": "383.60",
    "content_options": [
      "Department of Health Services",
      "Department of Safety and Professional Services",
      "Department of Natural Resources",
      "Environmental Protection Agency"
    ],
    "content_answer": "Department of Safety and Professional Services",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 23,
      "page_end": 23
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "Which type of wastewater treatment component is required for systems serving food service establishments?",
    "location_options": [
      "383.33",
      "383.34",
      "383.35",
      "383.36"
    ],
    "location_answer": "383.33",
    "content_options": [
      "Grease interceptor",
      "Effluent filter",
      "Holding tank",
      "Aeration unit"
    ],
    "content_answer": "Grease interceptor",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 9,
      "page_end": 9
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What minimum vertical separation is required between the infiltrative surface and bedrock?",
    "location_options": [
      "383.44",
      "383.45",
      "383.46",
      "383.47"
    ],
    "location_answer": "383.44",
    "content_options": [
      "6 inches",
      "12 inches",
      "18 inches",
      "24 inches"
    ],
    "content_answer": "24 inches",
    "meta": {
      "document": "WAC-SPS-383",
      "page_start": 15,
      "page_end": 15
    },
    "document_answer": "WAC-SPS-383"
  },
  {
    "question": "What is the minimum age required to be eligible for a journeyman plumber examination?",
    "location_options": [
      "305.61",
      "305.62",
      "305.63",
      "305.64"
    ],
    "location_answer": "305.61",
    "content_options": [
      "16 years",
      "18 years",
      "21 years",
      "25 years"
    ],
    "content_answer": "18 years",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 19,
      "page_end": 19
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "To qualify for a master plumber license, an applicant must have how many years of experience as a licensed journeyman plumber?",
    "location_options": [
      "305.61",
      "305.63",
      "305.65",
      "305.67"
    ],
    "location_answer": "305.63",
    "content_options": [
      "1 year",
      "2 years",
      "3 years",
      "4 years"
    ],
    "content_answer": "3 years",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 20,
      "page_end": 20
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which of the following is a requirement to be eligible for the journeyman plumber examination?",
    "location_options": [
      "305.61",
      "305.62",
      "305.63",
      "305.64"
    ],
    "location_answer": "305.61",
    "content_options": [
      "Completion of a 5-year apprenticeship program",
      "Completion of a recognized plumbing apprenticeship program or equivalent experience",
      "Holding a master plumber license in another state",
      "Owning a plumbing business for at least 2 years"
    ],
    "content_answer": "Completion of a recognized plumbing apprenticeship program or equivalent experience",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 19,
      "page_end": 19
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is the minimum passing score for the master plumber examination?",
    "location_options": [
      "305.60",
      "305.63",
      "305.67",
      "305.69"
    ],
    "location_answer": "305.67",
    "content_options": [
      "65%",
      "70%",
      "75%",
      "80%"
    ],
    "content_answer": "70%",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 22,
      "page_end": 22
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which of the following credentials requires completion of at least 1,000 hours of plumbing-related experience under supervision?",
    "location_options": [
      "305.60",
      "305.63",
      "305.70",
      "305.73"
    ],
    "location_answer": "305.70",
    "content_options": [
      "Apprentice plumber",
      "Journeyman plumber",
      "Restricted appliance plumber",
      "Master plumber"
    ],
    "content_answer": "Restricted appliance plumber",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 24,
      "page_end": 24
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "How often must a plumbing license be renewed?",
    "location_options": [
      "305.65",
      "305.67",
      "305.69",
      "305.71"
    ],
    "location_answer": "305.65",
    "content_options": [
      "Every year",
      "Every 2 years",
      "Every 3 years",
      "Every 5 years"
    ],
    "content_answer": "Every 2 years",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is required to reinstate a plumbing license that has been expired for more than 5 years?",
    "location_options": [
      "305.65",
      "305.67",
      "305.69",
      "305.71"
    ],
    "location_answer": "305.69",
    "content_options": [
      "Pay a late fee only",
      "Submit proof of continuing education",
      "Reapply and pass the appropriate examination",
      "Provide a letter of recommendation from a master plumber"
    ],
    "content_answer": "Reapply and pass the appropriate examination",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 23,
      "page_end": 23
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which type of plumbing credential allows an individual to install water heaters and softeners only?",
    "location_options": [
      "305.70",
      "305.71",
      "305.72",
      "305.73"
    ],
    "location_answer": "305.70",
    "content_options": [
      "Apprentice plumber",
      "Restricted appliance plumber",
      "Journeyman plumber",
      "Master plumber"
    ],
    "content_answer": "Restricted appliance plumber",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 24,
      "page_end": 24
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "How many hours of continuing education are required each year for licensed plumbers?",
    "location_options": [
      "305.80",
      "305.81",
      "305.82",
      "305.83"
    ],
    "location_answer": "305.82",
    "content_options": [
      "6 hours",
      "8 hours",
      "10 hours",
      "12 hours"
    ],
    "content_answer": "12 hours",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 26,
      "page_end": 26
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "When must the continuing education requirement be completed for license renewal?",
    "location_options": [
      "305.80",
      "305.81",
      "305.82",
      "305.83"
    ],
    "location_answer": "305.82",
    "content_options": [
      "Within 6 months before renewal",
      "By the last day of the renewal month",
      "Anytime during the renewal year",
      "Within 3 months after renewal"
    ],
    "content_answer": "By the last day of the renewal month",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 26,
      "page_end": 26
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Who is responsible for submitting proof of continuing education to the department?",
    "location_options": [
      "305.80",
      "305.81",
      "305.82",
      "305.83"
    ],
    "location_answer": "305.82",
    "content_options": [
      "The plumbing instructor",
      "The license holder",
      "The plumbing business owner",
      "The licensing board"
    ],
    "content_answer": "The license holder",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 26,
      "page_end": 26
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which of the following must be completed before an apprentice plumber can take the journeyman examination?",
    "location_options": [
      "305.61",
      "305.62",
      "305.63",
      "305.64"
    ],
    "location_answer": "305.61",
    "content_options": [
      "A minimum of 8,000 hours of plumbing work under supervision",
      "Three years as a master plumber",
      "A bachelor's degree in mechanical engineering",
      "Completion of a restricted appliance plumber credential"
    ],
    "content_answer": "A minimum of 8,000 hours of plumbing work under supervision",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 19,
      "page_end": 19
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which entity administers the plumbing license examinations?",
    "location_options": [
      "305.60",
      "305.61",
      "305.67",
      "305.68"
    ],
    "location_answer": "305.67",
    "content_options": [
      "The Department of Safety and Professional Services",
      "The National Plumbing Board",
      "The State Technical College",
      "The Master Plumbers Association"
    ],
    "content_answer": "The Department of Safety and Professional Services",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 22,
      "page_end": 22
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "How many total hours of plumbing experience are required for a journeyman plumber license application?",
    "location_options": [
      "305.61",
      "305.62",
      "305.63",
      "305.64"
    ],
    "location_answer": "305.61",
    "content_options": [
      "4,000 hours",
      "6,000 hours",
      "8,000 hours",
      "10,000 hours"
    ],
    "content_answer": "8,000 hours",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 19,
      "page_end": 19
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which examination must an applicant pass to obtain a master plumber license?",
    "location_options": [
      "305.61",
      "305.63",
      "305.65",
      "305.67"
    ],
    "location_answer": "305.63",
    "content_options": [
      "Only a written test",
      "Only a practical test",
      "Both a written and practical test",
      "No examination is required"
    ],
    "content_answer": "Both a written and practical test",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 20,
      "page_end": 20
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is the purpose of the plumbing examination?",
    "location_options": [
      "305.60",
      "305.67",
      "305.68",
      "305.69"
    ],
    "location_answer": "305.67",
    "content_options": [
      "To determine fitness for supervisory work",
      "To assess technical competency in plumbing practices",
      "To evaluate business management skills",
      "To test knowledge of construction safety only"
    ],
    "content_answer": "To assess technical competency in plumbing practices",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 22,
      "page_end": 22
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which credential allows limited plumbing work on only specific appliances?",
    "location_options": [
      "305.61",
      "305.65",
      "305.70",
      "305.73"
    ],
    "location_answer": "305.70",
    "content_options": [
      "Apprentice plumber",
      "Restricted appliance plumber",
      "Journeyman plumber",
      "Master plumber"
    ],
    "content_answer": "Restricted appliance plumber",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 24,
      "page_end": 24
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "How many hours of continuing education must be related to code each year for plumbers?",
    "location_options": [
      "305.81",
      "305.82",
      "305.83",
      "305.84"
    ],
    "location_answer": "305.82",
    "content_options": [
      "4 hours",
      "6 hours",
      "8 hours",
      "10 hours"
    ],
    "content_answer": "4 hours",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 26,
      "page_end": 26
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What happens if a plumber fails to complete the required continuing education by the renewal date?",
    "location_options": [
      "305.80",
      "305.82",
      "305.83",
      "305.84"
    ],
    "location_answer": "305.82",
    "content_options": [
      "They are given a 6-month grace period",
      "They must pay a late fee only",
      "Their license will not be renewed",
      "They must retake the plumbing exam"
    ],
    "content_answer": "Their license will not be renewed",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 26,
      "page_end": 26
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Who may supervise a restricted appliance plumber?",
    "location_options": [
      "305.70",
      "305.71",
      "305.72",
      "305.73"
    ],
    "location_answer": "305.70",
    "content_options": [
      "Only a journeyman plumber",
      "Only a master plumber",
      "A journeyman or master plumber",
      "Any licensed contractor"
    ],
    "content_answer": "A journeyman or master plumber",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 24,
      "page_end": 24
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "Which plumbing credential does not require completion of a full apprenticeship program?",
    "location_options": [
      "305.61",
      "305.63",
      "305.65",
      "305.70"
    ],
    "location_answer": "305.70",
    "content_options": [
      "Journeyman plumber",
      "Master plumber",
      "Restricted appliance plumber",
      "Apprentice plumber"
    ],
    "content_answer": "Restricted appliance plumber",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 24,
      "page_end": 24
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "For how long is a plumbing credential valid before it must be renewed?",
    "location_options": [
      "305.65",
      "305.67",
      "305.69",
      "305.71"
    ],
    "location_answer": "305.65",
    "content_options": [
      "1 year",
      "2 years",
      "3 years",
      "4 years"
    ],
    "content_answer": "2 years",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 21,
      "page_end": 21
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is required for reinstating an expired plumbing license that is less than 5 years past expiration?",
    "location_options": [
      "305.65",
      "305.67",
      "305.69",
      "305.71"
    ],
    "location_answer": "305.69",
    "content_options": [
      "Pay late fees only",
      "Submit proof of continuing education and pay fees",
      "Retake and pass the plumbing examination",
      "Obtain a temporary license"
    ],
    "content_answer": "Submit proof of continuing education and pay fees",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 23,
      "page_end": 23
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is the primary authority responsible for enforcing plumbing licensing rules?",
    "location_options": [
      "305.60",
      "305.61",
      "305.67",
      "305.68"
    ],
    "location_answer": "305.60",
    "content_options": [
      "The Department of Safety and Professional Services",
      "The Wisconsin Plumbing Association",
      "The National Code Council",
      "The State Board of Trades"
    ],
    "content_answer": "The Department of Safety and Professional Services",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 18,
      "page_end": 18
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is the consequence of working without the proper plumbing credential?",
    "location_options": [
      "305.90",
      "305.91",
      "305.92",
      "305.93"
    ],
    "location_answer": "305.91",
    "content_options": [
      "Verbal warning only",
      "Monetary penalty",
      "Mandatory retraining",
      "Loss of future license eligibility"
    ],
    "content_answer": "Monetary penalty",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 28,
      "page_end": 28
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "How soon after failing an exam can an applicant reapply?",
    "location_options": [
      "305.67",
      "305.68",
      "305.69",
      "305.70"
    ],
    "location_answer": "305.68",
    "content_options": [
      "Immediately",
      "After 15 days",
      "After 30 days",
      "After 60 days"
    ],
    "content_answer": "After 30 days",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 22,
      "page_end": 22
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is the maximum allowable apprenticeship term before taking the journeyman examination?",
    "location_options": [
      "305.61",
      "305.62",
      "305.63",
      "305.64"
    ],
    "location_answer": "305.61",
    "content_options": [
      "5 years",
      "6 years",
      "7 years",
      "8 years"
    ],
    "content_answer": "5 years",
    "meta": {
      "document": "WAC-SPS-305",
      "page_start": 19,
      "page_end": 19
    },
    "document_answer": "WAC-SPS-305"
  },
  {
    "question": "What is the maximum allowable slope for a horizontal drain pipe less than 3 inches in diameter?",
    "location_options": [
      "382.30",
      "382.31",
      "382.32",
      "382.33"
    ],
    "location_answer": "382.30",
    "content_options": [
      "1/4 inch per foot",
      "1/8 inch per foot",
      "1/2 inch per foot",
      "3/8 inch per foot"
    ],
    "content_answer": "1/4 inch per foot",
    "meta": {
      "document": "SPS-382",
      "page_start": 55,
      "page_end": 55
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, what is the minimum trap diameter for a kitchen sink?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.33",
    "content_options": [
      "1-1/4 inches",
      "1-1/2 inches",
      "2 inches",
      "2-1/2 inches"
    ],
    "content_answer": "1-1/2 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 65,
      "page_end": 65
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the required cleanout location for a building drain under SPS 382?",
    "location_options": [
      "382.35",
      "382.36",
      "382.37",
      "382.38"
    ],
    "location_answer": "382.36",
    "content_options": [
      "Within 10 feet of the building drain connection to the building sewer",
      "At the midpoint of the building drain",
      "Every 25 feet along the drain",
      "At each change in direction over 45 degrees"
    ],
    "content_answer": "Within 10 feet of the building drain connection to the building sewer",
    "meta": {
      "document": "SPS-382",
      "page_start": 70,
      "page_end": 70
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum depth of bury for water service piping in areas subject to freezing?",
    "location_options": [
      "382.40",
      "382.41",
      "382.42",
      "382.43"
    ],
    "location_answer": "382.40",
    "content_options": [
      "24 inches",
      "36 inches",
      "42 inches",
      "48 inches"
    ],
    "content_answer": "42 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 85,
      "page_end": 85
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum required air gap for a faucet spout above the flood level rim of a fixture?",
    "location_options": [
      "382.41",
      "382.42",
      "382.43",
      "382.44"
    ],
    "location_answer": "382.42",
    "content_options": [
      "One diameter of the spout",
      "Two diameters of the spout",
      "Three diameters of the spout",
      "Four diameters of the spout"
    ],
    "content_answer": "Two diameters of the spout",
    "meta": {
      "document": "SPS-382",
      "page_start": 90,
      "page_end": 90
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum vertical distance between the fixture outlet and the trap weir for a lavatory?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.34",
    "content_options": [
      "12 inches",
      "18 inches",
      "24 inches",
      "30 inches"
    ],
    "content_answer": "24 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 67,
      "page_end": 67
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which type of vent is installed vertically and serves as the main vent for the system?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.31",
    "content_options": [
      "Stack vent",
      "Circuit vent",
      "Combination waste and vent",
      "Loop vent"
    ],
    "content_answer": "Stack vent",
    "meta": {
      "document": "SPS-382",
      "page_start": 58,
      "page_end": 58
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, what is the maximum distance from a trap to its vent for a 2-inch diameter trap arm?",
    "location_options": [
      "382.32",
      "382.33",
      "382.34",
      "382.35"
    ],
    "location_answer": "382.32",
    "content_options": [
      "4 feet",
      "5 feet",
      "6 feet",
      "8 feet"
    ],
    "content_answer": "5 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 62,
      "page_end": 62
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum size for a building sewer under SPS 382?",
    "location_options": [
      "382.35",
      "382.36",
      "382.37",
      "382.38"
    ],
    "location_answer": "382.35",
    "content_options": [
      "3 inches",
      "4 inches",
      "5 inches",
      "6 inches"
    ],
    "content_answer": "4 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 68,
      "page_end": 68
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum slope for a horizontal storm drain under SPS 382?",
    "location_options": [
      "382.37",
      "382.38",
      "382.39",
      "382.40"
    ],
    "location_answer": "382.37",
    "content_options": [
      "1/16 inch per foot",
      "1/8 inch per foot",
      "1/4 inch per foot",
      "3/8 inch per foot"
    ],
    "content_answer": "1/8 inch per foot",
    "meta": {
      "document": "SPS-382",
      "page_start": 75,
      "page_end": 75
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which type of vent connects to a horizontal branch and serves two or more traps?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.32",
    "content_options": [
      "Circuit vent",
      "Individual vent",
      "Relief vent",
      "Island vent"
    ],
    "content_answer": "Circuit vent",
    "meta": {
      "document": "SPS-382",
      "page_start": 60,
      "page_end": 60
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum required pressure for a water distribution system at the highest fixture outlet?",
    "location_options": [
      "382.40",
      "382.41",
      "382.42",
      "382.43"
    ],
    "location_answer": "382.40",
    "content_options": [
      "15 psi",
      "20 psi",
      "25 psi",
      "30 psi"
    ],
    "content_answer": "15 psi",
    "meta": {
      "document": "SPS-382",
      "page_start": 83,
      "page_end": 83
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, what is the maximum spacing for pipe supports on horizontal copper tubing of 1-inch diameter?",
    "location_options": [
      "382.44",
      "382.45",
      "382.46",
      "382.47"
    ],
    "location_answer": "382.44",
    "content_options": [
      "4 feet",
      "6 feet",
      "8 feet",
      "10 feet"
    ],
    "content_answer": "6 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 95,
      "page_end": 95
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum size of a vent stack for a building with a 4-inch building drain?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.31",
    "content_options": [
      "1-1/2 inches",
      "2 inches",
      "3 inches",
      "4 inches"
    ],
    "content_answer": "3 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 59,
      "page_end": 59
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum developed length of a trap arm for a 1-1/4 inch pipe?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.33",
    "content_options": [
      "2 feet 6 inches",
      "3 feet 6 inches",
      "4 feet",
      "5 feet"
    ],
    "content_answer": "2 feet 6 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 64,
      "page_end": 64
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which material is prohibited for use in water distribution systems under SPS 382?",
    "location_options": [
      "382.41",
      "382.42",
      "382.43",
      "382.44"
    ],
    "location_answer": "382.41",
    "content_options": [
      "Lead pipe",
      "Copper pipe",
      "PEX tubing",
      "CPVC pipe"
    ],
    "content_answer": "Lead pipe",
    "meta": {
      "document": "SPS-382",
      "page_start": 87,
      "page_end": 87
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum horizontal distance required between a water supply well and a building sewer?",
    "location_options": [
      "382.42",
      "382.43",
      "382.44",
      "382.45"
    ],
    "location_answer": "382.43",
    "content_options": [
      "5 feet",
      "8 feet",
      "10 feet",
      "15 feet"
    ],
    "content_answer": "8 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 92,
      "page_end": 92
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, what is the minimum size of a vent serving a single water closet?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.31",
    "content_options": [
      "1-1/4 inches",
      "1-1/2 inches",
      "2 inches",
      "3 inches"
    ],
    "content_answer": "2 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 57,
      "page_end": 57
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum required vertical clearance for installing a cleanout above the floor?",
    "location_options": [
      "382.36",
      "382.37",
      "382.38",
      "382.39"
    ],
    "location_answer": "382.36",
    "content_options": [
      "6 inches",
      "8 inches",
      "10 inches",
      "12 inches"
    ],
    "content_answer": "6 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 71,
      "page_end": 71
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum size for a building drain serving more than one water closet?",
    "location_options": [
      "382.35",
      "382.36",
      "382.37",
      "382.38"
    ],
    "location_answer": "382.35",
    "content_options": [
      "3 inches",
      "4 inches",
      "5 inches",
      "6 inches"
    ],
    "content_answer": "4 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 69,
      "page_end": 69
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "According to SPS 382, what is the water supply fixture unit (WSFU) value assigned to a standard kitchen sink with a faucet?",
    "location_options": [
      "382.40",
      "382.41",
      "382.42",
      "382.43"
    ],
    "location_answer": "382.40",
    "content_options": [
      "1.5",
      "2.0",
      "2.5",
      "3.0"
    ],
    "content_answer": "2.5",
    "meta": {
      "document": "SPS-382",
      "page_start": 82,
      "page_end": 82
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum discharge pipe diameter for a sump pump serving a single dwelling?",
    "location_options": [
      "382.36",
      "382.37",
      "382.38",
      "382.39"
    ],
    "location_answer": "382.38",
    "content_options": [
      "1 inch",
      "1-1/4 inches",
      "1-1/2 inches",
      "2 inches"
    ],
    "content_answer": "1-1/4 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 76,
      "page_end": 76
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which type of backflow prevention device is required for a hose bibb under SPS 382?",
    "location_options": [
      "382.41",
      "382.42",
      "382.43",
      "382.44"
    ],
    "location_answer": "382.41",
    "content_options": [
      "Air gap",
      "Vacuum breaker",
      "Double check valve",
      "Reduced pressure principle backflow preventer"
    ],
    "content_answer": "Vacuum breaker",
    "meta": {
      "document": "SPS-382",
      "page_start": 88,
      "page_end": 88
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, indirect waste piping shall discharge to which type of receptor?",
    "location_options": [
      "382.32",
      "382.33",
      "382.34",
      "382.35"
    ],
    "location_answer": "382.33",
    "content_options": [
      "Sanitary sewer",
      "Storm sewer",
      "Open sump",
      "Floor sink"
    ],
    "content_answer": "Floor sink",
    "meta": {
      "document": "SPS-382",
      "page_start": 63,
      "page_end": 63
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum length of developed piping for a building drain serving a single fixture before a cleanout is required?",
    "location_options": [
      "382.36",
      "382.37",
      "382.38",
      "382.39"
    ],
    "location_answer": "382.36",
    "content_options": [
      "25 feet",
      "50 feet",
      "75 feet",
      "100 feet"
    ],
    "content_answer": "75 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 71,
      "page_end": 71
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum required height for a vacuum breaker above the highest point of use it serves?",
    "location_options": [
      "382.41",
      "382.42",
      "382.43",
      "382.44"
    ],
    "location_answer": "382.42",
    "content_options": [
      "6 inches",
      "8 inches",
      "10 inches",
      "12 inches"
    ],
    "content_answer": "6 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 89,
      "page_end": 89
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which fixture requires an air gap of at least twice the diameter of the effective opening?",
    "location_options": [
      "382.42",
      "382.43",
      "382.44",
      "382.45"
    ],
    "location_answer": "382.42",
    "content_options": [
      "Ice maker",
      "Dishwasher",
      "Hose bibb",
      "Lavatory faucet"
    ],
    "content_answer": "Dishwasher",
    "meta": {
      "document": "SPS-382",
      "page_start": 90,
      "page_end": 90
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, grease interceptors must be located as close as possible to which point?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.33",
    "content_options": [
      "Building drain outlet",
      "Fixture being served",
      "Municipal sewer connection",
      "Cleanout location"
    ],
    "content_answer": "Fixture being served",
    "meta": {
      "document": "SPS-382",
      "page_start": 66,
      "page_end": 66
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum allowable water temperature to a public lavatory faucet?",
    "location_options": [
      "382.40",
      "382.41",
      "382.42",
      "382.43"
    ],
    "location_answer": "382.40",
    "content_options": [
      "100°F",
      "105°F",
      "110°F",
      "115°F"
    ],
    "content_answer": "110°F",
    "meta": {
      "document": "SPS-382",
      "page_start": 84,
      "page_end": 84
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum testing pressure for a water supply system under SPS 382?",
    "location_options": [
      "382.50",
      "382.51",
      "382.52",
      "382.53"
    ],
    "location_answer": "382.50",
    "content_options": [
      "50 psi",
      "75 psi",
      "100 psi",
      "125 psi"
    ],
    "content_answer": "100 psi",
    "meta": {
      "document": "SPS-382",
      "page_start": 110,
      "page_end": 110
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which type of trap is prohibited for use in new plumbing installations under SPS 382?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.34",
    "content_options": [
      "P-trap",
      "S-trap",
      "Drum trap",
      "Bell trap"
    ],
    "content_answer": "S-trap",
    "meta": {
      "document": "SPS-382",
      "page_start": 68,
      "page_end": 68
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum flow rate required for a drinking fountain?",
    "location_options": [
      "382.40",
      "382.41",
      "382.42",
      "382.43"
    ],
    "location_answer": "382.40",
    "content_options": [
      "0.5 gpm",
      "1.0 gpm",
      "1.5 gpm",
      "2.0 gpm"
    ],
    "content_answer": "0.5 gpm",
    "meta": {
      "document": "SPS-382",
      "page_start": 83,
      "page_end": 83
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Stormwater leaders and downspouts shall discharge at least how far from a building foundation?",
    "location_options": [
      "382.37",
      "382.38",
      "382.39",
      "382.40"
    ],
    "location_answer": "382.39",
    "content_options": [
      "1 foot",
      "2 feet",
      "3 feet",
      "4 feet"
    ],
    "content_answer": "3 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 79,
      "page_end": 79
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum distance a vent terminal must be from a building opening such as a window?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.31",
    "content_options": [
      "5 feet",
      "10 feet",
      "15 feet",
      "20 feet"
    ],
    "content_answer": "10 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 57,
      "page_end": 57
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, which fixture is not permitted to discharge into a grease interceptor?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.33",
    "content_options": [
      "Mop sink",
      "Dishwasher",
      "Hand sink",
      "Floor drain"
    ],
    "content_answer": "Dishwasher",
    "meta": {
      "document": "SPS-382",
      "page_start": 66,
      "page_end": 66
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum allowable length for a flexible water heater connector?",
    "location_options": [
      "382.40",
      "382.41",
      "382.42",
      "382.43"
    ],
    "location_answer": "382.41",
    "content_options": [
      "18 inches",
      "24 inches",
      "30 inches",
      "36 inches"
    ],
    "content_answer": "24 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 86,
      "page_end": 86
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "According to SPS 382, what is the required diameter of a waste pipe serving a commercial dishwasher?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.34",
    "content_options": [
      "1-1/2 inches",
      "2 inches",
      "2-1/2 inches",
      "3 inches"
    ],
    "content_answer": "2 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 67,
      "page_end": 67
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum size of a waste receptor for an indirect waste pipe from a commercial ice machine?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.33",
    "content_options": [
      "2 inches",
      "3 inches",
      "4 inches",
      "5 inches"
    ],
    "content_answer": "3 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 63,
      "page_end": 63
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "According to SPS 382, what is the minimum insulation thickness for hot water distribution piping less than 1-1/2 inches in diameter?",
    "location_options": [
      "382.41",
      "382.42",
      "382.43",
      "382.44"
    ],
    "location_answer": "382.41",
    "content_options": [
      "1/2 inch",
      "3/4 inch",
      "1 inch",
      "1-1/4 inches"
    ],
    "content_answer": "1/2 inch",
    "meta": {
      "document": "SPS-382",
      "page_start": 87,
      "page_end": 87
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which of the following materials is prohibited for use in above-ground drainage piping?",
    "location_options": [
      "382.30",
      "382.31",
      "382.32",
      "382.33"
    ],
    "location_answer": "382.30",
    "content_options": [
      "Cast iron",
      "Copper",
      "Galvanized steel",
      "ABS plastic"
    ],
    "content_answer": "Galvanized steel",
    "meta": {
      "document": "SPS-382",
      "page_start": 54,
      "page_end": 54
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum allowable vertical distance from a fixture outlet to a trap weir for a 3-inch trap?",
    "location_options": [
      "382.33",
      "382.34",
      "382.35",
      "382.36"
    ],
    "location_answer": "382.34",
    "content_options": [
      "24 inches",
      "30 inches",
      "36 inches",
      "42 inches"
    ],
    "content_answer": "36 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 67,
      "page_end": 67
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "For a branch vent connection, what is the minimum distance above the fixture drain connection before the vent may be tied in?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.32",
    "content_options": [
      "2 inches",
      "4 inches",
      "6 inches",
      "8 inches"
    ],
    "content_answer": "6 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 61,
      "page_end": 61
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum spacing between supports for horizontal PVC drainage piping 2 inches in diameter?",
    "location_options": [
      "382.44",
      "382.45",
      "382.46",
      "382.47"
    ],
    "location_answer": "382.44",
    "content_options": [
      "2 feet",
      "3 feet",
      "4 feet",
      "5 feet"
    ],
    "content_answer": "4 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 94,
      "page_end": 94
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "In SPS 382, what is the minimum size of a branch serving a urinal with a 1-inch flush valve?",
    "location_options": [
      "382.35",
      "382.36",
      "382.37",
      "382.38"
    ],
    "location_answer": "382.35",
    "content_options": [
      "1-1/4 inches",
      "1-1/2 inches",
      "2 inches",
      "2-1/2 inches"
    ],
    "content_answer": "2 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 69,
      "page_end": 69
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, what is the minimum height a vent terminal must be above a roof used for human occupancy?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.31",
    "content_options": [
      "6 inches",
      "12 inches",
      "24 inches",
      "36 inches"
    ],
    "content_answer": "7 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 57,
      "page_end": 57
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the required minimum testing pressure for a sanitary drainage and vent system using air?",
    "location_options": [
      "382.50",
      "382.51",
      "382.52",
      "382.53"
    ],
    "location_answer": "382.50",
    "content_options": [
      "3 psi",
      "5 psi",
      "10 psi",
      "15 psi"
    ],
    "content_answer": "5 psi",
    "meta": {
      "document": "SPS-382",
      "page_start": 109,
      "page_end": 109
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "According to SPS 382, what is the minimum horizontal separation between a building sewer and a water service pipe?",
    "location_options": [
      "382.43",
      "382.44",
      "382.45",
      "382.46"
    ],
    "location_answer": "382.43",
    "content_options": [
      "3 feet",
      "5 feet",
      "8 feet",
      "10 feet"
    ],
    "content_answer": "5 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 91,
      "page_end": 91
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum number of water closets that can be installed on a 3-inch horizontal branch under SPS 382?",
    "location_options": [
      "382.35",
      "382.36",
      "382.37",
      "382.38"
    ],
    "location_answer": "382.35",
    "content_options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "content_answer": "2",
    "meta": {
      "document": "SPS-382",
      "page_start": 68,
      "page_end": 68
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Which of the following is an acceptable method for thermal expansion control in a water distribution system?",
    "location_options": [
      "382.41",
      "382.42",
      "382.43",
      "382.44"
    ],
    "location_answer": "382.41",
    "content_options": [
      "Expansion tank",
      "Air chamber",
      "Flexible connector",
      "Pressure reducing valve"
    ],
    "content_answer": "Expansion tank",
    "meta": {
      "document": "SPS-382",
      "page_start": 87,
      "page_end": 87
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, what is the minimum slope for a horizontal subsoil drain?",
    "location_options": [
      "382.39",
      "382.40",
      "382.41",
      "382.42"
    ],
    "location_answer": "382.39",
    "content_options": [
      "1/8 inch per foot",
      "1/4 inch per foot",
      "3/8 inch per foot",
      "1/2 inch per foot"
    ],
    "content_answer": "1/8 inch per foot",
    "meta": {
      "document": "SPS-382",
      "page_start": 80,
      "page_end": 80
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "For stormwater piping located in areas subject to freezing, what is the minimum required cover?",
    "location_options": [
      "382.39",
      "382.40",
      "382.41",
      "382.42"
    ],
    "location_answer": "382.39",
    "content_options": [
      "12 inches",
      "18 inches",
      "24 inches",
      "30 inches"
    ],
    "content_answer": "24 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 79,
      "page_end": 79
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the minimum size vent required for a clothes washer standpipe?",
    "location_options": [
      "382.31",
      "382.32",
      "382.33",
      "382.34"
    ],
    "location_answer": "382.31",
    "content_options": [
      "1-1/4 inches",
      "1-1/2 inches",
      "2 inches",
      "3 inches"
    ],
    "content_answer": "2 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 58,
      "page_end": 58
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the required clearance in front of a cleanout in a 3-inch or larger pipe?",
    "location_options": [
      "382.36",
      "382.37",
      "382.38",
      "382.39"
    ],
    "location_answer": "382.36",
    "content_options": [
      "12 inches",
      "18 inches",
      "24 inches",
      "30 inches"
    ],
    "content_answer": "18 inches",
    "meta": {
      "document": "SPS-382",
      "page_start": 70,
      "page_end": 70
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "According to SPS 382, what is the maximum spacing between supports for horizontal copper tubing 1-1/4 inches in diameter?",
    "location_options": [
      "382.44",
      "382.45",
      "382.46",
      "382.47"
    ],
    "location_answer": "382.44",
    "content_options": [
      "5 feet",
      "6 feet",
      "7 feet",
      "8 feet"
    ],
    "content_answer": "8 feet",
    "meta": {
      "document": "SPS-382",
      "page_start": 95,
      "page_end": 95
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "What is the maximum number of fixture units permitted on a 2-inch horizontal branch in a residential building?",
    "location_options": [
      "382.35",
      "382.36",
      "382.37",
      "382.38"
    ],
    "location_answer": "382.35",
    "content_options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "content_answer": "6",
    "meta": {
      "document": "SPS-382",
      "page_start": 69,
      "page_end": 69
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "Under SPS 382, which type of pipe joint is prohibited in concealed locations?",
    "location_options": [
      "382.30",
      "382.31",
      "382.32",
      "382.33"
    ],
    "location_answer": "382.30",
    "content_options": [
      "Mechanical coupling",
      "Solvent weld",
      "Threaded joint",
      "Soldered joint"
    ],
    "content_answer": "Mechanical coupling",
    "meta": {
      "document": "SPS-382",
      "page_start": 54,
      "page_end": 54
    },
    "document_answer": "SPS-382"
  },
  {
    "question": "According to SPS 385, who is permitted to perform a soil evaluation for the treatment or dispersal of wastewater regulated by chs. SPS 383 and 391?",
    "location_options": [
      "385.01",
      "385.02",
      "385.10",
      "385.20"
    ],
    "location_answer": "385.10",
    "content_options": [
      "A Wisconsin registered architect",
      "A certified soil tester",
      "A master plumber only",
      "A governmental unit official"
    ],
    "content_answer": "A certified soil tester",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "What is the minimum number of soil profile evaluation excavations required to delineate a site for POWTS components when daily flows are less than or equal to 1,000 gallons?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.40"
    ],
    "location_answer": "385.20",
    "content_options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "content_answer": "Three",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which of the following items must be included in a soil profile description to substantiate soil application rates?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.40"
    ],
    "location_answer": "385.30",
    "content_options": [
      "Soil consistence",
      "Estimated daily flow",
      "Site legal description",
      "Observation pipe data"
    ],
    "content_answer": "Soil consistence",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Who must sign each page of a soil evaluation report according to SPS 385.40?",
    "location_options": [
      "385.20",
      "385.30",
      "385.40",
      "385.50"
    ],
    "location_answer": "385.40",
    "content_options": [
      "The property owner",
      "The governmental unit official",
      "The certified soil tester",
      "The site evaluator"
    ],
    "content_answer": "The certified soil tester",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 4,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "How soon must a governmental unit review all soil evaluation reports and site evaluation reports after receipt?",
    "location_options": [
      "385.30",
      "385.40",
      "385.50",
      "385.60"
    ],
    "location_answer": "385.50",
    "content_options": [
      "Within 30 days",
      "Within 3 months",
      "Within 6 months",
      "Within 12 months"
    ],
    "content_answer": "Within 6 months",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which item is NOT allowed as a method for creating a soil boring according to SPS 385?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.40"
    ],
    "location_answer": "385.20",
    "content_options": [
      "Soil bucket auger",
      "Soil probe",
      "Split-spoon sampler",
      "Power auger"
    ],
    "content_answer": "Power auger",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "What does the presence of redoximorphic features in a soil profile typically indicate?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.60"
    ],
    "location_answer": "385.30",
    "content_options": [
      "Soil instability",
      "Zones of seasonal or periodic soil saturation or groundwater",
      "Nutrient-rich soil",
      "High sand content"
    ],
    "content_answer": "Zones of seasonal or periodic soil saturation or groundwater",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "In what section are the requirements for reporting soil color pattern exemptions encountered during a soil profile description?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.60"
    ],
    "location_answer": "385.30",
    "content_options": [
      "Site evaluation report",
      "Soil evaluation report",
      "Certified soil tester report",
      "Soil color pattern exemption report"
    ],
    "content_answer": "Soil color pattern exemption report",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which of the following may trigger the need for additional soil profile evaluation excavations on a site?",
    "location_options": [
      "385.01",
      "385.02",
      "385.10",
      "385.20"
    ],
    "location_answer": "385.20",
    "content_options": [
      "Soil uniformity across the site",
      "Soil variability considerations",
      "Shallow groundwater table",
      "Proximity to property lines"
    ],
    "content_answer": "Soil variability considerations",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 2,
      "page_end": 2
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "According to SPS 385, who may perform site evaluations to determine land slope or setback distances for POWTS components?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.40"
    ],
    "location_answer": "385.10",
    "content_options": [
      "Certified soil tester or POWTS inspector",
      "Any property owner",
      "Only a governmental unit official",
      "Licensed professional geologist"
    ],
    "content_answer": "Certified soil tester or POWTS inspector",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "What is required of the observation pipe used for groundwater elevation, according to SPS 385.60?",
    "location_options": [
      "385.20",
      "385.30",
      "385.40",
      "385.60"
    ],
    "location_answer": "385.60",
    "content_options": [
      "Must be lead pipe",
      "Must be at least 2 inches and not more than 4 inches in diameter",
      "Must terminate below grade",
      "May be less than 2 inches in diameter"
    ],
    "content_answer": "Must be at least 2 inches and not more than 4 inches in diameter",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 6,
      "page_end": 6
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "If the results of soil saturation determinations do not meet minimum precipitation totals, what is their status?",
    "location_options": [
      "385.20",
      "385.30",
      "385.40",
      "385.60"
    ],
    "location_answer": "385.60",
    "content_options": [
      "Automatically accepted",
      "Considered inconclusive",
      "Subject to appeal",
      "Must be repeated the following year"
    ],
    "content_answer": "Considered inconclusive",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 6,
      "page_end": 6
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which section provides the standards for governmental unit review of soil and site evaluation reports?",
    "location_options": [
      "385.30",
      "385.40",
      "385.50",
      "385.60"
    ],
    "location_answer": "385.50",
    "content_options": [
      "385.20",
      "385.30",
      "385.40",
      "385.50"
    ],
    "content_answer": "385.50",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "For which type of evaluation is a professional soil scientist licensed under ch. GHSS 4 also qualified?",
    "location_options": [
      "385.01",
      "385.10",
      "385.20",
      "385.30"
    ],
    "location_answer": "385.10",
    "content_options": [
      "Site evaluation for POWTS components",
      "Soil saturation determination",
      "Soil evaluation for stormwater regulated under ch. SPS 382",
      "Hydrograph procedure"
    ],
    "content_answer": "Soil evaluation for stormwater regulated under ch. SPS 382",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which document or manual must soil profile descriptions be written in accordance with, except where modified by SPS 385?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.60"
    ],
    "location_answer": "385.30",
    "content_options": [
      "Soil Survey Manual, USDA",
      "Wisconsin POWTS Manual",
      "EPA Groundwater Protection Manual",
      "State Soil Report Manual"
    ],
    "content_answer": "Soil Survey Manual, USDA",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 3,
      "page_end": 3
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which section describes the requirements for removal of groundwater elevation observation pipes after soil saturation determination?",
    "location_options": [
      "385.20",
      "385.40",
      "385.60",
      "385.50"
    ],
    "location_answer": "385.60",
    "content_options": [
      "385.10",
      "385.20",
      "385.50",
      "385.60"
    ],
    "content_answer": "385.60",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 7,
      "page_end": 7
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "What action must a governmental unit take if a submitted soil evaluation report is not acceptable?",
    "location_options": [
      "385.10",
      "385.20",
      "385.50",
      "385.60"
    ],
    "location_answer": "385.50",
    "content_options": [
      "Notify the submitter in writing and state deficiencies or necessary actions",
      "Return the report without explanation",
      "Forward the report to the state for review",
      "Automatically accept the report"
    ],
    "content_answer": "Notify the submitter in writing and state deficiencies or necessary actions",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "According to SPS 385, which entity has authority to require verification of soil profile evaluation data?",
    "location_options": [
      "385.20",
      "385.40",
      "385.50",
      "385.60"
    ],
    "location_answer": "385.50",
    "content_options": [
      "Department or governmental unit",
      "Only the property owner",
      "Certified soil tester alone",
      "Local soil association"
    ],
    "content_answer": "Department or governmental unit",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 5,
      "page_end": 5
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "What is the purpose of SPS 385 as stated in the document?",
    "location_options": [
      "385.01",
      "385.02",
      "385.10",
      "385.20"
    ],
    "location_answer": "385.01",
    "content_options": [
      "To establish maximum effluent discharge rates",
      "To establish requirements for evaluating and reporting soil and site characteristics",
      "To certify soil testers",
      "To outline enforcement procedures"
    ],
    "content_answer": "To establish requirements for evaluating and reporting soil and site characteristics",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 1,
      "page_end": 1
    },
    "document_answer": "WAC-SPS-385"
  },
  {
    "question": "Which of the following is a required component of a site evaluation report?",
    "location_options": [
      "385.10",
      "385.20",
      "385.30",
      "385.40"
    ],
    "location_answer": "385.40",
    "content_options": [
      "Estimated project cost",
      "Site’s legal description to within 40 acres",
      "Soil treatment application rates",
      "Names of previous property owners"
    ],
    "content_answer": "Site’s legal description to within 40 acres",
    "meta": {
      "document": "WAC-SPS-385",
      "page_start": 4,
      "page_end": 4
    },
    "document_answer": "WAC-SPS-385"
  }
];
