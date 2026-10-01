const fs = require('fs');

const teachersData = [
  {
    name: 'Gopal Ji',
    hindiName: 'गोपाल जी',
    subj: 'Sanskrit',
    category: 'languages',
    qual: 'Acharya (Sangit Jyotish)<br>M.A. (Maths, Sanskrit, Education, Sociology), B.Ed.<br>Secondary Sanskrit Teacher',
    photo: 'images/teachers/gopal-ji.jpg',
    mob: '9771675729'
  },
  {
    name: 'Kumari Akeshwari',
    hindiName: 'कुमारी आकेश्वरी',
    subj: 'Botany',
    category: 'science',
    qual: 'M.Sc. (Botany), B.Ed. (11–12)<br>Higher Secondary Teacher TRE-01',
    photo: 'images/teachers/kumari-akeshwari.jpg',
    mob: '8839105463'
  },
  {
    name: 'Mukesh Kumar',
    hindiName: 'मुकेश कुमार',
    subj: 'Assistant Teacher',
    category: 'social',
    qual: 'B.A. — Assistant Teacher<br>Secondary Department',
    photo: 'images/teachers/mukesh-kumar.jpg',
    mob: '9430807804'
  },
  {
    name: 'Ruchi Kumari',
    hindiName: 'रूची कुमारी',
    subj: 'Mathematics',
    category: 'science',
    qual: 'B.Sc. Maths (Hons), B.Ed.<br>M.A. Geography (Hons) — BPSC TRE-1 (9–10)',
    photo: 'images/teachers/ruchi-kumari.jpg',
    mob: '8340726900'
  },
  {
    name: 'Soni Kumari',
    hindiName: 'सोनी कुमारी',
    subj: 'Zoology',
    category: 'science',
    qual: 'B.Sc. (Zoology), M.Ed.<br>Secondary Science Teacher (9–10)',
    photo: 'images/teachers/soni-kumari.jpg',
    mob: '8400128135'
  },
  {
    name: 'Pratibha Kumari',
    hindiName: 'प्रतिभा कुमारी',
    subj: 'Hindi',
    category: 'languages',
    qual: 'B.A. Hindi, B.Ed.<br>Secondary Hindi Teacher (9–10)',
    photo: 'images/teachers/pratibha-kumari.jpg',
    mob: '9262277054'
  },
  {
    name: 'Pooja Kumari',
    hindiName: 'पूजा कुमारी',
    subj: 'Mathematics',
    category: 'science',
    qual: 'M.Sc. (Mathematics), B.Ed. (11–12)<br>Higher Secondary Mathematics Teacher',
    photo: 'images/teachers/pooja-kumari.jpg',
    mob: '9122785739'
  },
  {
    name: 'Neetu Kumari',
    hindiName: 'नीतू कुमारी',
    subj: 'Chemistry',
    category: 'science',
    qual: 'B.Sc. (Chemistry), B.Ed.<br>Secondary Science Teacher (9–10)',
    photo: 'images/teachers/neetu-kumari.jpg',
    mob: '9708282309'
  },
  {
    name: 'Dr. Sukhendu Kumar',
    hindiName: 'डॉ॰ सुखेन्दु कुमार',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A. (History), Ph.D.<br>Grad. (Journalism & Mass Comm.)<br>Secondary Social Science Teacher',
    photo: 'images/teachers/dr-sukhendu-kumar.jpg',
    mob: '9334800933'
  },
  {
    name: 'Lovely Kumari',
    hindiName: 'लवली कुमारी',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A. (History), B.Ed.<br>Secondary Social Science Teacher (9–10)',
    photo: 'images/teachers/lovely-kumari.jpg',
    mob: '9123420095'
  },
  {
    name: 'Neha Kumari',
    hindiName: 'नेहा कुमारी',
    subj: 'Computer Science',
    category: 'commerce_comp',
    qual: 'M.C.A. (Master of Computer Applications)<br>Higher Secondary Computer Science (11–12)',
    photo: 'images/teachers/neha-kumari.jpg',
    mob: '7836815275'
  },
  {
    name: 'Dr. Praveen Kumar',
    hindiName: 'डॉ॰ प्रवीण कुमार',
    subj: 'Accountancy',
    category: 'commerce_comp',
    qual: 'M.Com (Accountancy), Ph.D., B.Ed.<br>Higher Secondary Commerce Teacher (11–12)',
    photo: 'images/teachers/dr-praveen-kumar.jpg',
    mob: '7004638428'
  },
  {
    name: 'Babita Kumari',
    hindiName: 'बबीता कुमारी',
    subj: 'Political Science',
    category: 'social',
    qual: 'M.A. (Political Science), B.Ed. (11–12)<br>Higher Secondary Political Science Teacher',
    photo: 'images/teachers/babita-kumari.jpg',
    mob: '6299714117'
  },
  {
    name: 'Anjali Kumari',
    hindiName: 'अंजली कुमारी',
    subj: 'English',
    category: 'languages',
    qual: 'M.A. (English), B.Ed. (English)<br>Higher Secondary English Teacher (11–12)',
    photo: 'images/teachers/anjali-kumari.jpg',
    mob: null
  },
  {
    name: 'Amarendra Prasad',
    hindiName: 'अमरेन्द्र प्रसाद',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A. (History), B.Ed.<br>Secondary Social Science Teacher (9–10)',
    photo: 'images/teachers/amarendra-prasad.jpg',
    mob: '9905385190'
  },
  {
    name: 'Sushmita Pathak',
    hindiName: 'सुष्मिता पाठक',
    subj: 'Chemistry',
    category: 'science',
    qual: 'M.Sc. (Chemistry), B.Ed. (11–12)<br>Higher Secondary Chemistry Teacher',
    photo: 'images/teachers/sushmita-pathak.jpg',
    mob: '9004249654'
  },
  {
    name: 'Prabhat Kumar',
    hindiName: 'प्रभात कुमार',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A. (History), B.Ed.<br>Secondary Social Science Teacher (9–10)',
    photo: 'images/teachers/prabhat-kumar.jpg',
    mob: '6299972575'
  },
  {
    name: 'Rajeev Kumar',
    hindiName: 'राजीव कुमार',
    subj: 'English',
    category: 'languages',
    qual: 'M.A. (English, History), M.Ed., LLB<br>Secondary English Teacher (9–10)',
    photo: 'images/teachers/rajeev-kumar.jpg',
    mob: '9572044505'
  },
  {
    name: 'Raman Prasad Singh',
    hindiName: 'रमन प्रसाद सिंह',
    subj: 'Library Science',
    category: 'library',
    qual: 'M.Sc. (Mathematics), B.Lib.<br>Secondary Head Librarian',
    photo: 'images/teachers/raman-prasad-singh.jpg',
    mob: '7631626828'
  }
];

const staffData = [
  {
    name: 'Diwakar Kumar Pandey',
    hindiName: 'दिवाकर कु. पाण्डेय',
    role: 'Head Clerk',
    qual: 'Administrative Office & Records In-charge',
    photo: 'images/staff/diwakar-kumar-pandey.jpg',
    mob: null
  },
  {
    name: 'Roona Devi',
    hindiName: 'रूणा देवी',
    role: 'Attendant',
    qual: 'Intermediate',
    photo: 'images/staff/roona-devi.jpg',
    mob: '7256877417'
  },
  {
    name: 'Prabhat Kumar Singh',
    hindiName: 'प्रभात कुमार सिंह',
    role: 'Attendant',
    qual: 'Intermediate',
    photo: 'images/staff/prabhat-kumar-singh.jpg',
    mob: '9102719273'
  },
  {
    name: 'Vijay Kumar',
    hindiName: 'विजय कुमार',
    role: 'Night Guard',
    qual: 'Matriculation',
    photo: 'images/staff/vijay-kumar.jpg',
    mob: '9006443427'
  },
  {
    name: 'Ramanand Singh',
    hindiName: 'रामानंद सिंह',
    role: 'Attendant',
    qual: 'B.Sc. (Physics)',
    photo: 'images/staff/ramanand-singh.jpg',
    mob: '9955548138'
  }
];

const ebooksData = [
  {
    title: 'Mathematics — Class 10',
    className: 'Class 10 (Matric)',
    classKey: 'class10',
    stream: 'General',
    streamBadge: 'BSEB / NCERT',
    icon: '📐',
    desc: 'Real Numbers, Polynomials, Linear Equations in Two Variables, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Trigonometry, Statistics & Probability.',
    chapters: ['1. Real Numbers', '2. Polynomials', '3. Pair of Linear Equations in Two Variables', '4. Quadratic Equations', '5. Arithmetic Progressions', '6. Triangles', '7. Coordinate Geometry', '8. Introduction to Trigonometry', '9. Some Applications of Trigonometry', '10. Circles', '12. Surface Areas and Volumes', '13. Statistics & Probability'],
    link: 'https://ncert.nic.in/textbook.php?jemh1=0-15'
  },
  {
    title: 'Science — Class 10',
    className: 'Class 10 (Matric)',
    classKey: 'class10',
    stream: 'General',
    streamBadge: 'BSEB / NCERT',
    icon: '🔬',
    desc: 'Chemical Reactions and Equations, Acids, Bases and Salts, Metals and Non-metals, Carbon and its Compounds, Life Processes, Control and Coordination, Reproduction, Heredity, Light & Electricity.',
    chapters: ['1. Chemical Reactions and Equations', '2. Acids, Bases and Salts', '3. Metals and Non-metals', '4. Carbon and its Compounds', '5. Life Processes', '6. Control and Coordination', '7. How do Organisms Reproduce?', '8. Heredity', '9. Light – Reflection and Refraction', '10. The Human Eye and the Colourful World', '11. Electricity & Magnetic Effects', '13. Our Environment'],
    link: 'https://ncert.nic.in/textbook.php?jesc1=0-16'
  },
  {
    title: 'Panorama Part-2 (English) — Class 10',
    className: 'Class 10 (Matric)',
    classKey: 'class10',
    stream: 'Languages',
    streamBadge: 'BSEB Patna',
    icon: '📚',
    desc: 'Official Bihar School Examination Board English textbook featuring curated prose, poetry, reading comprehension, vocabulary exercises, and communicative grammar.',
    chapters: ['Prose 1: The Pace for Living', 'Prose 2: Me and the Ecology Bit', 'Prose 3: Gillu', 'Prose 4: What is Wrong with Indian Films', 'Prose 5: Acceptance Speech', 'Poetry 1: God Made the Country', 'Poetry 2: Ode on Solitude', 'Poetry 3: Polythene Bag'],
    link: 'http://bstbpc.gov.in/'
  },
  {
    title: 'Godhuli Part-2 (Hindi) — Class 10',
    className: 'Class 10 (Matric)',
    classKey: 'class10',
    stream: 'Languages',
    streamBadge: 'BSTBPC Bihar Board',
    icon: '📖',
    desc: 'Standard Hindi Literature textbook for BSEB Class 10, containing foundational prose essays by Dr. B.R. Ambedkar, Nalin Vilochan Sharma, and classical poetry of Guru Nanak and Raskhan.',
    chapters: ['Prose 1: Shram Vibhajan aur Jati Pratha (Dr. B.R. Ambedkar)', 'Prose 2: Vish Ke Dant (Nalin Vilochan Sharma)', 'Prose 3: Bharat Se Hum Kya Seekhein (Max Mueller)', 'Prose 4: Nakhun Kyon Badhte Hain (Hazari Prasad Dwivedi)', 'Poetry 1: Ram Naam Binu Birathe Jagi Janma (Guru Nanak)', 'Poetry 2: Prem Ayani Shri Radhika (Raskhan)'],
    link: 'http://bstbpc.gov.in/'
  },
  {
    title: 'Social Science — History — Class 10',
    className: 'Class 10 (Matric)',
    classKey: 'class10',
    stream: 'Social Science',
    streamBadge: 'BSEB / NCERT',
    icon: '🏛️',
    desc: 'India and the Contemporary World: Rise of Nationalism in Europe, Socialism and Communism, Nationalism in Indo-China, Nationalism in India, Economy & Livelihood, and Urbanisation.',
    chapters: ['1. The Rise of Nationalism in Europe', '2. Socialism in Europe and the Russian Revolution', '3. Nationalist Movement in Indo-China', '4. Nationalism in India', '5. The Making of a Global World', '6. Age of Industrialisation', '7. Print Culture and the Modern World'],
    link: 'https://ncert.nic.in/textbook.php?jess3=0-8'
  },
  {
    title: 'Mathematics — Class 9',
    className: 'Class 9',
    classKey: 'class9',
    stream: 'General',
    streamBadge: 'BSEB / NCERT',
    icon: '📊',
    desc: 'Number Systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Lines and Angles, Triangles, Quadrilaterals, Circles, Heron\'s Formula, Statistics.',
    chapters: ['1. Number Systems', '2. Polynomials', '3. Coordinate Geometry', '4. Linear Equations in Two Variables', '5. Introduction to Euclid’s Geometry', '6. Lines and Angles', '7. Triangles', '8. Quadrilaterals', '9. Circles', '10. Heron’s Formula', '12. Statistics'],
    link: 'https://ncert.nic.in/textbook.php?iemh1=0-15'
  },
  {
    title: 'Science — Class 9',
    className: 'Class 9',
    classKey: 'class9',
    stream: 'General',
    streamBadge: 'BSEB / NCERT',
    icon: '🧪',
    desc: 'Matter in Our Surroundings, Is Matter Around Us Pure, Atoms and Molecules, Structure of the Atom, Fundamental Unit of Life (Cell), Tissues, Motion, Force, Gravitation, Work & Energy, Sound.',
    chapters: ['1. Matter in Our Surroundings', '2. Is Matter Around Us Pure?', '3. Atoms and Molecules', '4. Structure of the Atom', '5. The Fundamental Unit of Life', '6. Tissues', '7. Motion', '8. Force and Laws of Motion', '9. Gravitation', '10. Work and Energy', '11. Sound'],
    link: 'https://ncert.nic.in/textbook.php?iesc1=0-15'
  },
  {
    title: 'Physics Vol. 1 & 2 — Class 12 (+2)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Science',
    streamBadge: '+2 Science I.Sc.',
    icon: '⚡',
    desc: 'Electric Charges and Fields, Electrostatic Potential, Current Electricity, Moving Charges and Magnetism, Electromagnetic Induction, Optics, Dual Nature of Radiation, Atoms, Nuclei, Semiconductor Electronics.',
    chapters: ['1. Electric Charges and Fields', '2. Electrostatic Potential and Capacitance', '3. Current Electricity', '4. Moving Charges and Magnetism', '6. Electromagnetic Induction', '7. Alternating Current', '9. Ray Optics and Optical Instruments', '10. Wave Optics', '11. Dual Nature of Radiation and Matter', '14. Semiconductor Electronics'],
    link: 'https://ncert.nic.in/textbook.php?leph1=0-8'
  },
  {
    title: 'Chemistry Vol. 1 & 2 — Class 12 (+2)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Science',
    streamBadge: '+2 Science I.Sc.',
    icon: '⚗️',
    desc: 'Solutions, Electrochemistry, Chemical Kinetics, d- and f-Block Elements, Coordination Compounds, Haloalkanes and Haloarenes, Alcohols, Phenols and Ethers, Aldehydes and Ketones, Amines, Biomolecules.',
    chapters: ['1. Solutions', '2. Electrochemistry', '3. Chemical Kinetics', '4. The d- and f-Block Elements', '5. Coordination Compounds', '6. Haloalkanes and Haloarenes', '7. Alcohols, Phenols and Ethers', '8. Aldehydes, Ketones and Carboxylic Acids', '9. Amines', '10. Biomolecules'],
    link: 'https://ncert.nic.in/textbook.php?lech1=0-5'
  },
  {
    title: 'Biology — Class 12 (+2)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Science',
    streamBadge: '+2 Science I.Sc.',
    icon: '🧬',
    desc: 'Sexual Reproduction in Flowering Plants, Human Reproduction, Reproductive Health, Principles of Inheritance and Variation, Molecular Basis of Inheritance, Evolution, Biotechnology, Ecology.',
    chapters: ['1. Sexual Reproduction in Flowering Plants', '2. Human Reproduction', '3. Reproductive Health', '4. Principles of Inheritance and Variation', '5. Molecular Basis of Inheritance', '6. Evolution', '7. Human Health and Disease', '8. Microbes in Human Welfare', '9. Biotechnology: Principles and Processes', '11. Organisms and Populations', '13. Biodiversity and Conservation'],
    link: 'https://ncert.nic.in/textbook.php?lebo1=0-16'
  },
  {
    title: 'Mathematics Vol. 1 & 2 — Class 12 (+2)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Science',
    streamBadge: '+2 Science I.Sc.',
    icon: '📐',
    desc: 'Relations and Functions, Inverse Trigonometric Functions, Matrices, Determinants, Continuity and Differentiability, Application of Derivatives, Integrals, Differential Equations, Vector Algebra, Linear Programming.',
    chapters: ['1. Relations and Functions', '2. Inverse Trigonometric Functions', '3. Matrices', '4. Determinants', '5. Continuity and Differentiability', '6. Application of Derivatives', '7. Integrals', '8. Application of Integrals', '9. Differential Equations', '10. Vector Algebra', '11. Three Dimensional Geometry', '12. Linear Programming', '13. Probability'],
    link: 'https://ncert.nic.in/textbook.php?lemh1=0-6'
  },
  {
    title: 'Accountancy Vol. 1 & 2 — Class 12 (+2)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Commerce',
    streamBadge: '+2 Commerce I.Com.',
    icon: '📈',
    desc: 'Accounting for Partnership: Basic Concepts, Admission of a Partner, Retirement/Death of a Partner, Dissolution of Partnership Firm, Accounting for Share Capital, Issue of Debentures, Cash Flow Statement.',
    chapters: ['1. Accounting for Partnership: Basic Concepts', '2. Reconstitution of a Partnership Firm – Admission of a Partner', '3. Reconstitution of a Partnership Firm – Retirement/Death of a Partner', '4. Dissolution of Partnership Firm', '5. Accounting for Share Capital', '6. Issue and Redemption of Debentures', '7. Financial Statements of a Company', '8. Analysis of Financial Statements & Cash Flow'],
    link: 'https://ncert.nic.in/textbook.php?leac1=0-5'
  },
  {
    title: 'Computer Science with Python — Class 11 & 12',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Commerce',
    streamBadge: '+2 ICT / Comp. Sci.',
    icon: '💻',
    desc: 'Python Programming, Functions, Data Structures (Stacks & Queues), File Handling (Text, Binary, CSV), Computer Networks, Relational Database & SQL, Python-SQL Interface, Cyber Safety & Ethics.',
    chapters: ['1. Python Review & Object-Oriented Principles', '2. Functions & Modules in Python', '3. File Handling in Python', '4. Data Structures: Stacks and Queues', '5. Computer Networks and Protocols', '6. Database Concepts & Structured Query Language (SQL)', '7. Interfacing Python with SQL Database', '8. Society, Law and Cyber Ethics'],
    link: 'https://ncert.nic.in/textbook.php?lecs1=0-8'
  },
  {
    title: 'Political Science — Class 12 (+2 Arts)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Arts',
    streamBadge: '+2 Arts I.A.',
    icon: '🗳️',
    desc: 'Contemporary World Politics (Cold War Era, End of Bipolarity, South Asia, International Organisations) and Politics in India since Independence (Nation-building, Planned Development, India\'s External Relations).',
    chapters: ['1. The Cold War Era', '2. The End of Bipolarity', '3. US Hegemony in World Politics', '4. Alternative Centres of Power', '5. Contemporary South Asia', '6. International Organisations', '7. Challenges of Nation-Building', '8. Era of One-Party Dominance', '9. Politics of Planned Development', '10. India\'s External Relations'],
    link: 'https://ncert.nic.in/textbook.php?leps1=0-9'
  },
  {
    title: 'Rainbow Part-2 (English) — Class 12 (+2)',
    className: 'Class 12 (+2)',
    classKey: 'class12',
    stream: 'Languages',
    streamBadge: 'BSEB +2 English',
    icon: '📜',
    desc: 'Bihar Board +2 Intermediate English core textbook with seminal works by Mahatma Gandhi, Dr. Zakir Hussain, Martin Luther King Jr., Bertrand Russell, and modern English poets.',
    chapters: ['Prose 1: Indian Civilization and Culture (M.K. Gandhi)', 'Prose 2: Bharat is My Home (Dr. Zakir Hussain)', 'Prose 3: A Pinch of Snuff (Manohar Malgaonkar)', 'Prose 4: I Have a Dream (Martin Luther King Jr.)', 'Prose 5: Ideas that have Helped Mankind (Bertrand Russell)', 'Poetry 1: Sweetest Love I Do Not Goe (John Donne)', 'Poetry 2: Song of Myself (Walt Whitman)', 'Poetry 3: Now the Leaves are Falling Fast'],
    link: 'http://bstbpc.gov.in/'
  }
];

console.log('Generating English index.html with language switcher...');

// Render Teachers Cards HTML
const teachersHtml = teachersData.map((t) => `
    <div class="tcard rv" data-category="${t.category}">
      <div class="tpwrap">
        <img class="tphoto" src="${t.photo}" alt="${t.name}" loading="lazy">
      </div>
      <div class="tinfo">
        <div class="tname">${t.name}</div>
        <div class="ten-sub">${t.hindiName}</div>
        <span class="tsubj">${t.subj}</span>
        <div class="tqual">${t.qual}</div>
        ${t.mob ? `<div class="tmob"><a href="tel:${t.mob}">📞 ${t.mob}</a></div>` : ''}
      </div>
    </div>
`).join('\n');

// Render Staff Cards HTML
const staffHtml = staffData.map((s) => `
    <div class="scard rv">
      <div class="spwrap">
        <img class="sphoto" src="${s.photo}" alt="${s.name}" loading="lazy">
      </div>
      <div class="sinfo">
        <div class="sname">${s.name}</div>
        <div class="ten-sub">${s.hindiName}</div>
        <span class="srole">${s.role}</span>
        <div class="squal">${s.qual}</div>
        ${s.mob ? `<div class="smob"><a href="tel:${s.mob}">📞 ${s.mob}</a></div>` : ''}
      </div>
    </div>
`).join('\n');

// Render eBooks Cards HTML
const ebooksHtml = ebooksData.map((b) => {
  const chaptersJson = JSON.stringify(b.chapters).replace(/"/g, '&quot;');
  return `
    <div class="ebook-card rv" data-class="${b.classKey}" data-stream="${b.stream.toLowerCase()}">
      <div class="ebook-top">
        <div class="ebook-icon">${b.icon}</div>
        <div class="ebook-meta">
          <span class="ebook-class-badge">${b.className}</span>
          <span class="ebook-stream-badge">${b.streamBadge}</span>
          <div class="ebook-title">${b.title}</div>
        </div>
      </div>
      <div class="ebook-desc">${b.desc}</div>
      <div class="ebook-actions">
        <button class="ebook-btn-read" onclick='openEbookModal("${b.title}", "${b.className}", "${b.streamBadge}", "${b.desc}", ${chaptersJson}, "${b.link}")'>
          📖 Read Online
        </button>
        <a class="ebook-btn-dl" href="${b.link}" target="_blank" rel="noopener noreferrer">
          📥 Download PDF
        </a>
      </div>
    </div>
  `;
}).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>P.M. Shri +2 High School, Barbigha | Official School Website</title>
  <meta name="description" content="P.M. Shri +2 High School, Barbigha, District Sheikhpura, Bihar - UDISE: 10262907004. Established 1933. Complete information on About, Campus, Principal, Teachers, Staff, Contact, eBooks, and Classroom Gallery.">
  <meta name="keywords" content="P.M. Shri +2 High School Barbigha, Barbigha High School, Sheikhpura School, Ramdhari Singh Dinkar Smriti Manch, PM SHRI School Bihar, BSEB Patna">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="images/school-logo.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- TOP BAR -->
  <div class="topbar">
    <div class="topbar-container">
      <div class="topbar-left" id="topbarLeft">
        <span class="topbar-item" id="tbEst">🏛️ स्थापित: 3 जनवरी 1933</span>
        <span class="topbar-sep">|</span>
        <span class="topbar-item" id="tbApp">📜 प्रस्वीकृति: जनवरी 1937</span>
        <span class="topbar-sep">|</span>
        <span class="topbar-item" id="tbUpg">🎓 +2 उत्क्रमण: 2010</span>
        <span class="topbar-sep">|</span>
        <span class="topbar-item" id="tbUdise">📋 UDISE Code: 10262907004</span>
      </div>
      <div class="topbar-right">
        <span class="topbar-item" id="tbLoc">📍 Barbigha, Sheikhpura (Bihar) - PIN: 811101</span>
        <span class="topbar-sep">|</span>
        <a class="topbar-phone" href="tel:9835017555">📞 9835017555</a>
        <span class="topbar-sep">|</span>
        <button class="lang-toggle-btn" id="langSwitchBtn" onclick="toggleLanguage()" title="Switch Language / भाषा बदलें">
          <span class="lang-icon">🌐</span> <span id="langSwitchLabel">हिन्दी (Hindi)</span>
        </button>
      </div>
    </div>
  </div>

  <!-- HEADER -->
  <header>
    <div class="header-container">
      <div class="hlogo-wrapper">
        <div class="hlogo">
          <img src="images/school-logo.png" alt="P.M. Shri +2 High School Barbigha Official Crest">
        </div>
      </div>
      <h1 class="hname" id="hdrTitle">P.M. Shri +2 High School</h1>
      <div class="hname-en" id="hdrSub">Barbigha, District Sheikhpura (Bihar)</div>
      <div class="hsub" id="hdrPin">P.O. &amp; P.S. Barbigha, PIN: 811101 — Affiliated to BSEB Patna</div>
      <div class="hbadges">
        <span class="hbadge">📋 UDISE: 10262907004</span>
        <span class="hbadge" id="hbPin">📌 PIN: 811101</span>
        <span class="hbadge">📞 Helpline: 9835017555</span>
        <span class="hbadge" id="hbEst">🏛️ Est. 1933 (90+ Years Legacy)</span>
        <span class="hbadge" id="hbPm">🏅 PM-SHRI Exemplary School</span>
        <span class="hbadge" id="hbBseb">🎓 Bihar School Examination Board</span>
      </div>
    </div>
  </header>

  <!-- 8 OPTIONS NAVIGATION -->
  <nav id="mainNav">
    <div class="nav-container">
      <button class="nav-toggle-btn" id="navToggle" aria-label="Toggle Navigation Menu">
        ☰
      </button>
      <div class="nav-links" id="navLinks">
        <a class="nav-item active" href="#about">About</a>
        <a class="nav-item" href="#campus">Campus</a>
        <a class="nav-item" href="#principal">Principal</a>
        <a class="nav-item" href="#teachers">Teachers</a>
        <a class="nav-item" href="#staff">Staff</a>
        <a class="nav-item" href="#contact">Contact</a>
        <a class="nav-item" href="#ebooks">eBooks</a>
        <a class="nav-item" href="#gallery">Classroom Gallery</a>
      </div>
    </div>
  </nav>

  <!-- HERO MOTTO STRIP -->
  <div class="hero" id="heroMotto">
    "ज्ञान ही शक्ति है — Knowledge is Power"
  </div>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 1: ABOUT
  ═════════════════════════════════════════════════════════════════ -->
  <section id="about">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleAbout">About Our School <span id="secSubAbout">Nine Decades of Academic Excellence</span></h2>
      <p class="sec-subtitle" id="secDescAbout">
        Founded in 1933, P.M. Shri +2 High School Barbigha is the premier government educational institution of Sheikhpura district, fostering intellectual rigor, scientific temper, and holistic character building.
      </p>

      <div class="agrid rv">
        <div class="acard">
          <h3 id="acardTitle1">🏫 School Heritage &amp; Background</h3>
          <p id="acardDesc1">
            P.M. Shri +2 High School, Barbigha was established on <strong>3 January 1933</strong>. It received formal state government recognition in <strong>January 1937</strong> and was upgraded to the <strong>+2 (Senior Secondary / Intermediate)</strong> level in <strong>2010</strong>. Selected under the prestigious Government of India <strong>PM-SHRI (PM Schools for Rising India)</strong> initiative, the school provides quality education from Classes 9 to 12 across Science, Arts, and Commerce streams.
          </p>
        </div>

        <div class="acard">
          <h3 id="acardTitle2">📊 Key Institutional Information</h3>
          <ul id="acardList2">
            <li><strong>Date of Establishment:</strong> 3 January 1933</li>
            <li><strong>State Government Approval:</strong> January 1937</li>
            <li><strong>+2 Upgrade:</strong> Year 2010</li>
            <li><strong>UDISE Code:</strong> 10262907004</li>
            <li><strong>Classes Offered:</strong> Classes 9 to 12 (Science, Arts, Commerce)</li>
            <li><strong>Affiliation:</strong> Bihar School Examination Board (BSEB, Patna)</li>
            <li><strong>Location &amp; District:</strong> NH-82, Barbigha, Sheikhpura, Bihar (PIN 811101)</li>
          </ul>
        </div>

        <div class="acard">
          <h3 id="acardTitle3">🎯 Our Mission &amp; Educational Vision</h3>
          <p id="acardDesc3">
            To impart inclusive, equitable, and modern education that empowers youth from diverse socio-economic backgrounds. We cultivate academic excellence, critical inquiry, digital literacy, and civic responsibility to prepare students for higher university studies, competitive careers, and nation-building.
          </p>
        </div>

        <div class="acard">
          <h3 id="acardTitle4">🏆 Key Facilities &amp; Highlights</h3>
          <ul id="acardList4">
            <li><strong>Rashtrakavi Ramdhari Singh Dinkar Smriti Manch:</strong> Historic memorial open-air stage for literature, drama, and regional cultural assemblies.</li>
            <li><strong>Highly Qualified Faculty:</strong> Ph.D., M.Sc., M.A., B.Ed., M.Ed., and BPSC TRE-1 credentialed teachers.</li>
            <li><strong>Full +2 Streams:</strong> Science (I.Sc.), Arts (I.A.), and Commerce (I.Com.).</li>
            <li><strong>Computer Science &amp; ICT Center:</strong> Led by MCA specialist faculty with hands-on coding and digital literacy.</li>
            <li><strong>Modern Science Labs:</strong> Fully equipped Physics, Chemistry, and Biology/Botany/Zoology experimental facilities.</li>
          </ul>
        </div>
      </div>

      <!-- About Statistics -->
      <div class="about-stats rv">
        <div class="stat-box">
          <div class="stat-num">1933</div>
          <div class="stat-label" id="statLbl1">Foundation Year</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">90+</div>
          <div class="stat-label" id="statLbl2">Years of Educational Service</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">24+</div>
          <div class="stat-label" id="statLbl3">Faculty &amp; Dedicated Staff</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">100%</div>
          <div class="stat-label" id="statLbl4">Holistic Student Development</div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 2: CAMPUS
  ═════════════════════════════════════════════════════════════════ -->
  <section id="campus">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleCampus">School Campus <span id="secSubCampus">Infrastructure &amp; Academic Environment</span></h2>
      <p class="sec-subtitle" id="secDescCampus">
        A sprawling, green, and historically significant campus situated along NH-82 in Barbigha, equipped with modern learning infrastructure.
      </p>

      <div class="campus-hero-box rv">
        <img src="images/campus/campus-main.jpg" alt="Rashtrakavi Ramdhari Singh Dinkar Smriti Manch, Barbigha High School Campus">
        <div class="campus-cap" id="campusCap">
          🏛️ राष्ट्रकवि रामधारी सिंह दिनकर स्मृति मंच — बरबीघा, शेखपुरा, बिहार
        </div>
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 3: PRINCIPAL
  ═════════════════════════════════════════════════════════════════ -->
  <section id="principal">
    <div class="section-container">
      <h2 class="sec-title" id="secTitlePrincipal">Principal's Desk <span id="secSubPrincipal">Leadership &amp; Vision</span></h2>
      <p class="sec-subtitle" id="secDescPrincipal">
        Guiding P.M. Shri +2 High School Barbigha with administrative rigor, pedagogical innovation, and commitment to student welfare.
      </p>

      <div class="principal-section-layout rv">
        <!-- Principal Profile Card -->
        <div class="pcard">
          <div class="pphoto-wrapper">
            <img class="pphoto" src="images/principal-sanjay-kumar.jpg" alt="Sanjay Kumar - Acting Principal">
          </div>
          <div class="pbody">
            <div class="pname">Sanjay Kumar</div>
            <div class="ten-sub" style="font-size: 1.05rem; color: #7f8c8d; margin-bottom: 4px;">संजय कुमार</div>
            <div class="prole" id="prRole">🏅 Prabhari Pradhanaacharya (Acting Principal)</div>
            <div class="pqual" id="prQual">
              <strong>M.Sc. (Mathematics), B.Ed.</strong><br>
              Secondary Mathematics Teacher (माध्यमिक गणित शिक्षक)
            </div>
            <a class="pphone" href="tel:9835017555">
              📞 Direct Call: 9835017555
            </a>
          </div>
        </div>

        <!-- Principal's Desk Message -->
        <div class="principal-message-box">
          <h3 id="prMsgTitle">📜 Welcome Message from the Principal</h3>
          <p id="prMsgP1">
            Dear Students, Parents, and Respected Citizens of Barbigha,<br>
            It gives me immense honor to welcome you to <strong>P.M. Shri +2 High School, Barbigha</strong>. For over nine decades since 3 January 1933, this institution has stood as a beacon of academic enlightenment, social empowerment, and moral leadership in Sheikhpura district.
          </p>
          <div class="principal-quote" id="prQuote">
            "Education is not merely the transmission of information; it is the ignition of character, discipline, and scientific inquiry. Our mission is to prepare every young learner to walk with confidence, self-reliance, and integrity in an evolving global world."
          </div>
          <p id="prMsgP2">
            Under the Government of India's <strong>PM-SHRI (PM Schools for Rising India)</strong> initiative, our school has integrated smart digital classrooms, advanced science and ICT laboratories, modern pedagogical tools, and environmental consciousness aligned with the National Education Policy (NEP).
          </p>
          <p id="prMsgP3">
            Together with our dedicated team of experienced teachers and staff, we are committed to providing every student with individual mentorship, strong academic foundations in Science, Arts, and Commerce, and vibrant co-curricular opportunities. I invite all students to embrace learning with dedication and bring glory to their families, school, and nation.
          </p>
          <div style="margin-top: 24px; font-weight: 700; color: var(--red);">
            — Sanjay Kumar, Acting Principal<br>
            <span style="font-weight: normal; font-size: 0.88rem; color: var(--gray);">P.M. Shri +2 High School, Barbigha, Sheikhpura (Bihar)</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 4: TEACHERS
  ═════════════════════════════════════════════════════════════════ -->
  <section id="teachers">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleTeachers">Our Teaching Faculty <span id="secSubTeachers">Dedicated Educators &amp; Mentors</span></h2>
      <p class="sec-subtitle" id="secDescTeachers">
        Meet our qualified faculty members holding postgraduate, doctoral, and professional teaching credentials (Ph.D., M.Sc., M.A., B.Ed., M.Ed., M.C.A., BPSC TRE-1).
      </p>

      <!-- Teacher Filters & Search -->
      <div class="filter-controls rv">
        <div class="filter-tabs" id="teacherFilterTabs">
          <button class="filter-btn t-filter-btn active" data-filter="all">All Teachers</button>
          <button class="filter-btn t-filter-btn" data-filter="science">Science &amp; Maths</button>
          <button class="filter-btn t-filter-btn" data-filter="social">Social Sciences</button>
          <button class="filter-btn t-filter-btn" data-filter="languages">Languages</button>
          <button class="filter-btn t-filter-btn" data-filter="commerce_comp">Computer &amp; Commerce</button>
          <button class="filter-btn t-filter-btn" data-filter="library">Library</button>
        </div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="teacherSearch" placeholder="Search teacher by name or subject...">
        </div>
      </div>

      <div style="margin-bottom: 20px; font-weight: 700; color: var(--red); font-size: 0.95rem;">
        Total Faculty: <span id="teacherCountBadge">(19 Displayed)</span>
      </div>

      <!-- Teachers Cards Grid -->
      <div class="tgrid" id="teachersGrid">
        ${teachersHtml}
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 5: STAFF
  ═════════════════════════════════════════════════════════════════ -->
  <section id="staff">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleStaff">Support and Administrative Staff <span id="secSubStaff">Our Dedicated Team</span></h2>
      <p class="sec-subtitle" id="secDescStaff">
        Recognizing the vital contributions of our administrative and support personnel who maintain seamless school operations, student services, and campus discipline.
      </p>

      <div class="sgrid rv">
        ${staffHtml}
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 6: CONTACT
  ═════════════════════════════════════════════════════════════════ -->
  <section id="contact">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleContact">Contact Us <span id="secSubContact">Get in Touch with School Office</span></h2>
      <p class="sec-subtitle" id="secDescContact">
        Reach out for admissions, transfer certificates, board examination enquiries, or general institutional information.
      </p>

      <div class="contact-layout rv">
        
        <!-- Contact Info Grid -->
        <div class="cgrid">
          <div class="citem">
            <div class="ci">📍</div>
            <h4 id="ciTitle1">Official Address</h4>
            <p id="ciDesc1">
              <strong>P.M. Shri +2 High School</strong><br>
              NH-82, P.O. + P.S. Barbigha<br>
              District: Sheikhpura, Bihar<br>
              Postal Code: <strong>811101</strong>
            </p>
          </div>

          <div class="citem">
            <div class="ci">📞</div>
            <h4 id="ciTitle2">Principal &amp; Office Helpline</h4>
            <p id="ciDesc2">
              <a href="tel:9835017555">📲 9835017555</a><br>
              Office Hours: Monday – Saturday<br>
              9:00 AM – 4:00 PM IST
            </p>
          </div>

          <div class="citem">
            <div class="ci">🆔</div>
            <h4 id="ciTitle3">UDISE Registration</h4>
            <p class="udise">10262907004</p>
            <p style="font-size: 0.8rem; color: #a0aec0; margin-top: 4px;" id="ciDesc3">Registered with Ministry of Education, Govt. of India</p>
          </div>

          <div class="citem">
            <div class="ci">🕐</div>
            <h4 id="ciTitle4">Affiliation &amp; Timings</h4>
            <p id="ciDesc4">
              <strong>BSEB Patna Affiliated</strong><br>
              Classes: 9:00 AM – 4:00 PM<br>
              Medium: English / Hindi
            </p>
          </div>
        </div>

        <!-- Contact Form Box -->
        <div class="contact-form-box">
          <h3 id="cfTitle">✉️ Online Admission &amp; General Enquiry</h3>
          <p id="cfDesc">Please fill out your details below. The school administration will respond promptly.</p>

          <form id="schoolContactForm">
            <div class="form-group">
              <label for="cf_name" id="lblCfName">Full Name *</label>
              <input type="text" id="cf_name" required placeholder="e.g. Rahul Kumar">
            </div>
            <div class="form-group">
              <label for="cf_phone" id="lblCfPhone">Mobile Number *</label>
              <input type="tel" id="cf_phone" required placeholder="e.g. 98350XXXXX">
            </div>
            <div class="form-group">
              <label for="cf_stream" id="lblCfStream">Class / Academic Stream</label>
              <select id="cf_stream">
                <option value="Class 9">Class 9 (Secondary)</option>
                <option value="Class 10">Class 10 (Matriculation)</option>
                <option value="+2 Science (I.Sc.)">+2 Science Stream (Physics, Chemistry, Maths/Bio)</option>
                <option value="+2 Arts (I.A.)">+2 Arts Stream (History, Pol. Science, Geography, Economics)</option>
                <option value="+2 Commerce (I.Com.)">+2 Commerce Stream (Accountancy, Business Studies)</option>
                <option value="General Enquiry">General Information / Certificates</option>
              </select>
            </div>
            <div class="form-group">
              <label for="cf_message" id="lblCfMsg">Your Message / Enquiry *</label>
              <textarea id="cf_message" rows="3" required placeholder="Type your message or enquiry here..."></textarea>
            </div>
            <button type="submit" class="form-submit-btn" id="btnSubmitEnquiry">
              🚀 Submit Enquiry
            </button>
          </form>
        </div>

      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 7: eBOOKS
  ═════════════════════════════════════════════════════════════════ -->
  <section id="ebooks">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleEbooks">Digital Library and eBooks <span id="secSubEbooks">Curriculum Textbooks and Study Materials</span></h2>
      <p class="sec-subtitle" id="secDescEbooks">
        Access official digital textbooks and study syllabi for Classes 9 to 12 across Science, Arts, and Commerce streams (NCERT and Bihar State Text Book Publishing Corporation).
      </p>

      <!-- eBooks Header Banner -->
      <div class="ebooks-header-banner rv">
        <div class="ebooks-header-text">
          <h3 id="ebPortalTitle">📚 PM-SHRI Digital Learning Resource Portal</h3>
          <p id="ebPortalDesc">Read online chapter-wise or download official PDF versions free of cost for self-paced study.</p>
        </div>
        <div>
          <span style="background: var(--red); color: #fff; padding: 7px 16px; border-radius: 20px; font-size: 0.82rem; font-weight: 700;" id="ebBadge">
            100% Free Open Access Curriculum
          </span>
        </div>
      </div>

      <!-- eBooks Filter Controls -->
      <div class="filter-controls rv">
        <div class="filter-tabs" id="ebookFilterTabs">
          <button class="filter-btn ebook-filter-btn active" data-class="all">All Books</button>
          <button class="filter-btn ebook-filter-btn" data-class="class9">Class 9</button>
          <button class="filter-btn ebook-filter-btn" data-class="class10">Class 10 (Matric)</button>
          <button class="filter-btn ebook-filter-btn" data-class="class12">Class 12 (+2)</button>
          <button class="filter-btn ebook-filter-btn" data-class="science">Science Stream</button>
          <button class="filter-btn ebook-filter-btn" data-class="commerce">Commerce &amp; Computer</button>
          <button class="filter-btn ebook-filter-btn" data-class="arts">Arts Stream</button>
        </div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="ebookSearch" placeholder="Search book by subject or title...">
        </div>
      </div>

      <!-- eBooks Grid -->
      <div class="ebooks-grid" id="ebooksGrid">
        ${ebooksHtml}
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 8: CLASSROOM GALLERY
  ═════════════════════════════════════════════════════════════════ -->
  <section id="gallery">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleGallery">Classroom Gallery <span id="secSubGallery">Visual Tour of Academic Life</span></h2>
      <p class="sec-subtitle" id="secDescGallery">
        Photographs of classroom activities, smart classes, laboratories, and school events.
      </p>

      <!-- Empty Gallery State -->
      <div class="gallery-empty-state rv">
        <div class="empty-icon">📷</div>
        <h3 id="egTitle">No Photos in Gallery</h3>
        <p id="egDesc">All photos have been removed from the classroom gallery as requested. New classroom and academic photographs will be updated here soon.</p>
      </div>

    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-container">
      <div class="footer-nav">
        <a href="#about">About</a>
        <a href="#campus">Campus</a>
        <a href="#principal">Principal</a>
        <a href="#teachers">Teachers</a>
        <a href="#staff">Staff</a>
        <a href="#contact">Contact</a>
        <a href="#ebooks">eBooks</a>
        <a href="#gallery">Classroom Gallery</a>
      </div>

      <p id="ftrInfo">
        <strong>P.M. Shri +2 High School, Barbigha, District Sheikhpura, Bihar</strong><br>
        NH-82, Barbigha, Dist. Sheikhpura, PIN-811101, Bihar &nbsp;|&nbsp; UDISE: 10262907004 &nbsp;|&nbsp; Est. 1933 &nbsp;|&nbsp; Helpline: 📞 9835017555
      </p>

      <p class="fsub" id="ftrCopy">
        © 2026 P.M. Shri +2 High School, Barbigha. All rights reserved. Affiliated to BSEB Patna.
      </p>
    </div>
  </footer>

  <!-- ═════════════════════════════════════════════════════════════════
       MODALS: LIGHTBOX & eBOOK PREVIEW
  ═════════════════════════════════════════════════════════════════ -->

  <!-- Fullscreen Gallery Lightbox -->
  <div class="lightbox-modal" id="lightboxModal">
    <div class="lightbox-content">
      <button class="lightbox-close" id="lightboxClose" aria-label="Close Lightbox">✕</button>
      <button class="lightbox-nav-btn lightbox-prev" id="lightboxPrev" aria-label="Previous Image">❮</button>
      <button class="lightbox-nav-btn lightbox-next" id="lightboxNext" aria-label="Next Image">❯</button>
      <div class="lightbox-img-box">
        <img class="lightbox-img" id="lightboxImg" src="" alt="Gallery Preview">
      </div>
      <div class="lightbox-caption" id="lightboxTitle"></div>
      <div class="lightbox-sub" id="lightboxSub"></div>
    </div>
  </div>

  <!-- eBook Details & Chapter Preview Modal -->
  <div class="ebook-modal" id="ebookModal">
    <div class="ebook-modal-content">
      <button class="ebook-modal-close" id="ebookModalClose" aria-label="Close eBook Modal">✕</button>
      <div id="ebookModalBody"></div>
    </div>
  </div>

  <!-- ═════════════════════════════════════════════════════════════════
       TELEGRAM LIVE CHAT WIDGET
  ═════════════════════════════════════════════════════════════════ -->
  <div id="tgw">
    <!-- Floating Button -->
    <button id="tg-btn" onclick="TG.toggle()" title="Live Chat / School Support">
      <span id="tg-icon-chat">
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.012 9.286c-.152.658-.547.818-1.107.51l-3.064-2.205-1.478 1.388c-.164.16-.302.294-.618.294l.22-3.02 5.674-4.988c.247-.214-.055-.333-.38-.12L7.87 14.498l-3.023-.921c-.657-.203-.671-.657.138-.972l11.816-4.424c.547-.197 1.026.131.76.967v.1z"/>
        </svg>
      </span>
      <span id="tg-icon-close" style="display:none">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" width="24" height="24">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
      <span id="tg-notif" class="tg-hidden">0</span>
    </button>

    <!-- Chat Panel -->
    <div id="tg-panel" class="tg-closed">
      <!-- Header -->
      <div id="tg-head">
        <div id="tg-head-left">
          <div id="tg-avatar">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.012 9.286c-.152.658-.547.818-1.107.51l-3.064-2.205-1.478 1.388c-.164.16-.302.294-.618.294l.22-3.02 5.674-4.988c.247-.214-.055-.333-.38-.12L7.87 14.498l-3.023-.921c-.657-.203-.671-.657.138-.972l11.816-4.424c.547-.197 1.026.131.76.967v.1z"/>
            </svg>
          </div>
          <div id="tg-head-info">
            <div id="tg-agent-name">School Support Desk</div>
            <div id="tg-status-line">
              <span class="tg-online-dot"></span>
              <span id="tg-status-txt">Connecting…</span>
            </div>
          </div>
        </div>
        <button class="tg-close-x" onclick="TG.toggle()" aria-label="Close Chat">✕</button>
      </div>

      <!-- Messages Body -->
      <div id="tg-msgs"></div>

      <!-- Typing Indicator -->
      <div id="tg-typing" class="tg-hidden">
        <div class="tg-typing-bub"><span></span><span></span><span></span></div>
      </div>

      <!-- Quick Replies -->
      <div id="tg-quick">
        <button class="tg-qbtn" onclick="TG.quickSend('📋 Admission Enquiry')">📋 Admission</button>
        <button class="tg-qbtn" onclick="TG.quickSend('📅 School Timings')">📅 Timings</button>
        <button class="tg-qbtn" onclick="TG.quickSend('📚 Streams & Courses (+2 Science, Arts, Commerce)')">📚 Streams</button>
        <button class="tg-qbtn" onclick="TG.quickSend('📞 Principal Contact')">📞 Principal</button>
        <button class="tg-qbtn" onclick="TG.quickSend('📖 eBooks & Digital Library')">📖 eBooks</button>
        <button class="tg-qbtn" onclick="TG.quickSend('🏫 Facilities & Labs')">🏫 Facilities</button>
      </div>

      <!-- Chat Footer Input -->
      <div id="tg-footer">
        <input id="tg-inp" type="text" placeholder="Type your message here..." autocomplete="off"
               onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();TG.send()}">
        <button id="tg-send-btn" onclick="TG.send()" aria-label="Send Message">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
`;

fs.writeFileSync('d:\\high2.0\\index.html', fullHtml, 'utf8');
console.log('Successfully generated English index.html with language switcher! File size:', fullHtml.length);
