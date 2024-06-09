import { IoAddCircleOutline } from "react-icons/io5";


export const icons = [
  { AddOutline: <IoAddCircleOutline /> }
];


export const Benifits = [
  {
    title: "Don't Need To Go On Browsing"
  },
  {
    title: "Updated PYQ'S & Questions"
  }, {
    title: "We Suggest Popular Video for You to Learn"
  },

  {
    title: "We Cover All Topics"
  },
  {
    title: "We Give Updates Of About Your Portion"
  },


]
export const Motive = [
  {
    title: "Enhance Your Productivity and Time Management"
  },
  {
    title: "Streamline Your Study Process and Optimize Learning"
  },
  {
    title: "Boost Your Confidence and Exam Preparation"
  },
  {
    title: "Personalize Your Learning Experience for Better Results"
  },
  {
    title: "Achieve Your Academic Goals with Increased Focus"
  },
  {
    title: "Eliminate Distractions and Stay on Track with Your Studies"
  },

]
export const Reasons = [
  {
    title: "We Bring Papers from All Ed-Tech Institutions",
  },
  {
    title: "We Have More Than 500+ Paper PDFs",
  },
  {
    title: "We Offer Detailed Solutions for Each Paper",
  },
  {
    title: "Our Papers are Categorized by Subject and Year",
  },
  {
    title: "Regularly Updated with the Latest Papers and Trends",
  },
  {
    title: "Accessible Anytime, Anywhere, on Any Device",
  },
  {
    title: "Browse Papers by Difficulty Level for Customized Practice",
  },
  {
    title: "Personalized Study Recommendations Based on Performance",
  },
  {
    title: "Interactive Practice Tests with Timed Sessions",
  },

];
export const Source = [
  {
    name: "Offical Websites",
  },
  {
    name: "Physics Wallah",
  },
  {
    name: "Esarl",
  }, {
    name: "MathonGo",
  }, {
    name: "Youtube",
  }, {
    name: "Social Media",
  },

]
export const NavLinks = [
  {
    name: 'Home',
    link: 'home',
  },
  {
    name: 'Features',
    link: 'features',
  },
  {
    name: 'FAQ',
    link: 'faq',
  },
  {
    name: 'About',
    link: '/pages/About',
  },
];

export const formFields = [
  { id: "videoName", label: "Video Name", type: "input", placeholder: "Name of your Video" },
  { id: "videoURL", label: "Video URL", type: "input", placeholder: "URL of your Video" },
  {
      id: "course", label: "Course", type: "select", options: [
          "IIT-JEE", "NEET", "TS IPE", "OTHERS"
      ]
  },
  {
      id: "institution", label: "Institution", type: "select", options: [
          "OFFICIAL JEE", "OFFICIAL NEET", "MathonGo", "Physics Wallah", "Aakash", "Vedantu",
          "Unacademy", "Infinity Learn", "Narayana", "Others"
      ]
  },
  {
      id: "subject", label: "Subject", type: "select", options: [
          "JEE MAINS", "MAINS + ADVANCED", "JEE ADVANCED", "NEET", "MATH", "PHYSICS", "CHEMISTRY",
          "ZOOLOGY", "BOTANY", "BIOLOGY"
      ]
  },
  { id: "videoYear", label: "Video Year", type: "input", placeholder: "Year of the Video" },

];

export const subjects = [
  {
      subject: "Mathematics",
      desc: "Select Your Chapter From Mathematics",
      chapters: [
          { name: "Sets, Relations, and Functions", link: "sets-relations-functions", weightage: 5 },
          { name: "Complex Numbers and Quadratic Equations", link: "complex-numbers-quadratic-equations", weightage: 4 },
          { name: "Matrices and Determinants", link: "matrices-determinants", weightage: 4 },
          { name: "Permutations and Combinations", link: "permutations-combinations", weightage: 3 },
          { name: "Mathematical Induction", link: "mathematical-induction", weightage: 3 },
          { name: "Binomial Theorem and its Simple Applications", link: "binomial-theorem", weightage: 4 },
          { name: "Sequences and Series", link: "sequences-series", weightage: 3 },
          { name: "Limit, Continuity, and Differentiability", link: "limit-continuity-differentiability", weightage: 5 },
          { name: "Integral Calculus", link: "integral-calculus", weightage: 5 },
          { name: "Differential Equations", link: "differential-equations", weightage: 4 },
          { name: "Coordinate Geometry", link: "coordinate-geometry", weightage: 5 },
          { name: "Three-Dimensional Geometry", link: "three-dimensional-geometry", weightage: 4 },
          { name: "Vector Algebra", link: "vector-algebra", weightage: 4 },
          { name: "Statistics and Probability", link: "statistics-probability", weightage: 3 },
          { name: "Trigonometry", link: "trigonometry", weightage: 3 },
          { name: "Mathematical Reasoning", link: "mathematical-reasoning", weightage: 2 }, // Only JEE Mains
          { name: "Elementary Number Theory", link: "elementary-number-theory", weightage: 3 } // Only JEE Advanced
      ]
  },
  {
      subject: "Physics",
      desc: "Select Your Chapter From Physics",
      chapters: [
          { name: "Units and Measurements", link: "units-measurements", weightage: 3 },
          { name: "Kinematics", link: "kinematics", weightage: 4 },
          { name: "Laws of Motion", link: "laws-of-motion", weightage: 4 },
          { name: "Work, Energy, and Power", link: "work-energy-power", weightage: 4 },
          { name: "Rotational Motion", link: "rotational-motion", weightage: 5 },
          { name: "Gravitation", link: "gravitation", weightage: 4 },
          { name: "Properties of Solids and Liquids", link: "properties-solids-liquids", weightage: 3 },
          { name: "Thermodynamics", link: "thermodynamics", weightage: 4 },
          { name: "Kinetic Theory of Gases", link: "kinetic-theory-gases", weightage: 3 },
          { name: "Oscillations and Waves", link: "oscillations-waves", weightage: 4 },
          { name: "Electrostatics", link: "electrostatics", weightage: 5 },
          { name: "Current Electricity", link: "current-electricity", weightage: 5 },
          { name: "Magnetic Effects of Current and Magnetism", link: "magnetic-effects-current-magnetism", weightage: 5 },
          { name: "Electromagnetic Induction and Alternating Currents", link: "electromagnetic-induction-alternating-currents", weightage: 4 },
          { name: "Electromagnetic Waves", link: "electromagnetic-waves", weightage: 3 },
          { name: "Optics", link: "optics", weightage: 5 },
          { name: "Dual Nature of Matter and Radiation", link: "dual-nature-matter-radiation", weightage: 4 },
          { name: "Atoms and Nuclei", link: "atoms-nuclei", weightage: 3 },
          { name: "Electronic Devices", link: "electronic-devices", weightage: 3 },
          { name: "Communication Systems", link: "communication-systems", weightage: 2 }, // Only JEE Mains
          { name: "Experimental Physics", link: "experimental-physics", weightage: 3 } // Only JEE Advanced
      ]
  },
  {
      subject: "Chemistry",
      desc: "Select Your Chapter From Chemistry",
      chapters: [
          { name: "Some Basic Concepts in Chemistry", link: "basic-concepts", weightage: 3 },
          { name: "States of Matter", link: "states-of-matter", weightage: 3 },
          { name: "Atomic Structure", link: "atomic-structure", weightage: 4 },
          { name: "Chemical Bonding and Molecular Structure", link: "chemical-bonding", weightage: 5 },
          { name: "Chemical Thermodynamics", link: "chemical-thermodynamics", weightage: 4 },
          { name: "Solutions", link: "solutions", weightage: 3 },
          { name: "Equilibrium", link: "equilibrium", weightage: 4 },
          { name: "Redox Reactions and Electrochemistry", link: "redox-reactions-electrochemistry", weightage: 4 },
          { name: "Chemical Kinetics", link: "chemical-kinetics", weightage: 4 },
          { name: "Surface Chemistry", link: "surface-chemistry", weightage: 3 },
          { name: "Classification of Elements and Periodicity in Properties", link: "classification-elements-periodicity", weightage: 3 },
          { name: "General Principles and Processes of Isolation of Metals", link: "general-principles-isolation-metals", weightage: 3 },
          { name: "Hydrogen", link: "hydrogen", weightage: 3 },
          { name: "s-Block Element (Alkali and Alkaline Earth metals)", link: "s-block-elements", weightage: 3 },
          { name: "p-Block Elements", link: "p-block-elements", weightage: 4 },
          { name: "d- and f-Block Elements", link: "d-f-block-elements", weightage: 4 },
          { name: "Coordination Compounds", link: "coordination-compounds", weightage: 4 },
          { name: "Environmental Chemistry", link: "environmental-chemistry", weightage: 2 }, // Only JEE Mains
          { name: "Some Basic Principles and Techniques", link: "basic-principles-techniques", weightage: 4 },
          { name: "Hydrocarbons", link: "hydrocarbons", weightage: 3 },
          { name: "Organic Compounds Containing Halogens", link: "organic-compounds-halogens", weightage: 4 },
          { name: "Organic Compounds Containing Oxygen", link: "organic-compounds-oxygen", weightage: 4 },
          { name: "Organic Compounds Containing Nitrogen", link: "organic-compounds-nitrogen", weightage: 3 },
          { name: "Polymers", link: "polymers", weightage: 3 },
          { name: "Biomolecules", link: "biomolecules", weightage: 3 },
          { name: "Chemistry in Everyday Life", link: "chemistry-everyday-life", weightage: 2 }, // Only JEE Mains
          { name: "Principles Related to Practical Chemistry", link: "practical-chemistry", weightage: 3 }
      ]
  }
];


export const chapters = [
  {
    subject: "MATH",
    chapters: [
      "Sets, Relations, and Functions",
      "Complex Numbers and Quadratic Equations",
      "Matrices and Determinants",
      "Permutations and Combinations",
      "Mathematical Induction",
      "Binomial Theorem and its Simple Applications",
      "Sequences and Series",
      "Limit, Continuity, and Differentiability",
      "Integral Calculus",
      "Differential Equations",
      "Coordinate Geometry",
      "Three-Dimensional Geometry",
      "Vector Algebra",
      "Statistics and Probability",
      "Trigonometry",
      "Mathematical Reasoning",
      "Elementary Number Theory"
    ]
  },
  {
    subject: "PHYSICS",
    chapters: [
      "Units and Measurements",
      "Kinematics",
      "Laws of Motion",
      "Work, Energy, and Power",
      "Rotational Motion",
      "Gravitation",
      "Properties of Solids and Liquids",
      "Thermodynamics",
      "Kinetic Theory of Gases",
      "Oscillations and Waves",
      "Electrostatics",
      "Current Electricity",
      "Magnetic Effects of Current and Magnetism",
      "Electromagnetic Induction and Alternating Currents",
      "Electromagnetic Waves",
      "Optics",
      "Dual Nature of Matter and Radiation",
      "Atoms and Nuclei",
      "Electronic Devices",
      "Communication Systems",
      "Experimental Physics"
    ]
  },
  {
    subject: "CHEMISTRY",
    chapters: [
      "Some Basic Concepts in Chemistry",
      "States of Matter",
      "Atomic Structure",
      "Chemical Bonding and Molecular Structure",
      "Chemical Thermodynamics",
      "Solutions",
      "Equilibrium",
      "Redox Reactions and Electrochemistry",
      "Chemical Kinetics",
      "Surface Chemistry",
      "Classification of Elements and Periodicity in Properties",
      "General Principles and Processes of Isolation of Metals",
      "Hydrogen",
      "s-Block Element (Alkali and Alkaline Earth metals)",
      "p-Block Elements",
      "d- and f-Block Elements",
      "Coordination Compounds",
      "Environmental Chemistry",
      "Some Basic Principles and Techniques",
      "Hydrocarbons",
      "Organic Compounds Containing Halogens",
      "Organic Compounds Containing Oxygen",
      "Organic Compounds Containing Nitrogen",
      "Polymers",
      "Biomolecules",
      "Chemistry in Everyday Life",
      "Principles Related to Practical Chemistry"
    ]
  }
];
