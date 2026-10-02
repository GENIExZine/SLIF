const fs = require('fs');
const path = require('path');

// ── 1. DATA DEFINITIONS ──
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
    subj: 'Mathematics (+2)',
    category: 'science',
    qual: 'M.Sc. (Maths), B.Ed. (11–12)<br>Higher Secondary Teacher TRE-01',
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
    hindiName: 'डॉ. सुखेंदु कुमार',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A., Ph.D.<br>Secondary Social Science Teacher',
    photo: 'images/teachers/dr-sukhendu-kumar.jpg',
    mob: '9334800933'
  },
  {
    name: 'Lovely Kumari',
    hindiName: 'लवली कुमारी',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A. History, B.Ed. (9–10)<br>Secondary Social Science Teacher TRE-01',
    photo: 'images/teachers/lovely-kumari.jpg',
    mob: '9123420095'
  },
  {
    name: 'Neha Kumari',
    hindiName: 'नेहा कुमारी',
    subj: 'Computer Science',
    category: 'commerce_comp',
    qual: 'M.C.A. (11–12)<br>Higher Secondary Teacher TRE-01',
    photo: 'images/teachers/neha-kumari.jpg',
    mob: '7836815275'
  },
  {
    name: 'Dr. Praveen Kumar',
    hindiName: 'डॉ. प्रवीण कुमार',
    subj: 'Accountancy (+2)',
    category: 'commerce_comp',
    qual: 'M.Com, Ph.D., B.Ed. (11–12)<br>Higher Secondary Teacher TRE-01',
    photo: 'images/teachers/dr-praveen-kumar.jpg',
    mob: '7004638428'
  },
  {
    name: 'Babita Kumari',
    hindiName: 'बबिता कुमारी',
    subj: 'Political Science (+2)',
    category: 'social',
    qual: 'M.A. Political Science, B.Ed. (11–12)<br>Higher Secondary Teacher TRE-01',
    photo: 'images/teachers/babita-kumari.jpg',
    mob: '6299714117'
  },
  {
    name: 'Anjali Kumari',
    hindiName: 'अंजली कुमारी',
    subj: 'English (+2)',
    category: 'languages',
    qual: 'M.A. English, B.Ed. (11–12)<br>Higher Secondary Teacher TRE-01',
    photo: 'images/teachers/anjali-kumari.jpg',
    mob: ''
  },
  {
    name: 'Amarendra Prasad',
    hindiName: 'अमरेन्द्र प्रसाद',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A., B.Ed. (9–10)<br>Secondary Social Science Teacher',
    photo: 'images/teachers/amarendra-prasad.jpg',
    mob: '9905385190'
  },
  {
    name: 'Sushmita Pathak',
    hindiName: 'सुष्मिता पाठक',
    subj: 'Chemistry (+2)',
    category: 'science',
    qual: 'M.Sc. Chemistry, B.Ed. (11–12)<br>Higher Secondary Teacher TRE-01',
    photo: 'images/teachers/sushmita-pathak.jpg',
    mob: '9004249654'
  },
  {
    name: 'Prabhat Kumar',
    hindiName: 'प्रभात कुमार',
    subj: 'Social Science',
    category: 'social',
    qual: 'M.A., B.Ed. (9–10)<br>Secondary Social Science Teacher',
    photo: 'images/teachers/prabhat-kumar.jpg',
    mob: '6299972575'
  },
  {
    name: 'Rajeev Kumar',
    hindiName: 'राजीव कुमार',
    subj: 'English',
    category: 'languages',
    qual: 'M.A. English, M.Ed., LLB (9–10)<br>Secondary English Teacher',
    photo: 'images/teachers/rajeev-kumar.jpg',
    mob: '9572044505'
  },
  {
    name: 'Raman Prasad Singh',
    hindiName: 'रमण प्रसाद सिंह',
    subj: 'Head Librarian',
    category: 'library',
    qual: 'M.Sc., B.Lib.<br>Central Library In-Charge',
    photo: 'images/teachers/raman-prasad-singh.jpg',
    mob: '7631626828'
  }
];

const staffData = [
  {
    name: 'Diwakar Kumar Pandey',
    hindiName: 'दिवाकर कु. पाण्डेय',
    role: 'Head Clerk',
    roleHi: 'कार्यालय लिपिक (Head Clerk)',
    desc: 'Administrative Office and Records In-charge',
    photo: 'images/staff/diwakar-kumar-pandey.jpg',
    mob: ''
  },
  {
    name: 'Roona Devi',
    hindiName: 'रुना देवी',
    role: 'Attendant',
    roleHi: 'परिचारी (Attendant)',
    desc: 'Campus and Office Support Staff',
    photo: 'images/staff/roona-devi.jpg',
    mob: '7256877417'
  },
  {
    name: 'Prabhat Kumar Singh',
    hindiName: 'प्रभात कुमार सिंह',
    role: 'Attendant',
    roleHi: 'परिचारी (Attendant)',
    desc: 'Classrooms and Facilities Support',
    photo: 'images/staff/prabhat-kumar-singh.jpg',
    mob: '9102719273'
  },
  {
    name: 'Vijay Kumar',
    hindiName: 'विजय कुमार',
    role: 'Night Guard',
    roleHi: 'रात्रि प्रहरी (Night Guard)',
    desc: 'Campus Security and Safety In-charge',
    photo: 'images/staff/vijay-kumar.jpg',
    mob: '9006443427'
  },
  {
    name: 'Ramanand Singh',
    hindiName: 'रामानंद सिंह',
    role: 'Attendant',
    roleHi: 'परिचारी (Attendant)',
    desc: 'Science Laboratories Assistant (B.Sc. Physics)',
    photo: 'images/staff/ramanand-singh.jpg',
    mob: '9955548138'
  }
];

const principalsData = [
  { sNo: '01', name: "श्री रामधारी सिंह 'दिनकर'", role: 'प्र० अ० (Headmaster)', period: '03.01.1933 – 21.07.1934', note: 'संस्थापक प्रधानाध्यापक (Founder Headmaster)' },
  { sNo: '02', name: 'श्री हरि प्रसाद तिवारी', role: 'प्र० अ० (Headmaster)', period: '22.07.1934 – 12.03.1935' },
  { sNo: '03', name: 'श्री ईश्वरी शरण', role: 'प्र० अ० (Headmaster)', period: '13.03.1935 – 07.06.1936' },
  { sNo: '04', name: 'श्री नागेन्द्र नाथ मिश्रा', role: 'प्र० अ० (Headmaster)', period: '08.06.1936 – 19.04.1945' },
  { sNo: '05', name: 'श्री दामोदर मिश्रा', role: 'प्र० अ० (Headmaster)', period: '20.04.1945 – 27.08.1945' },
  { sNo: '06', name: 'श्री जगदीश शर्मा', role: 'प्र० अ० (Headmaster)', period: '28.08.1945 – 31.03.1954', note: 'अध्यक्ष, वि० मा० शि० संघ / पूर्व MLC' },
  { sNo: '07', name: 'श्री देवनन्दन शर्मा', role: 'प्र० अ० (Headmaster)', period: '01.04.1954 – 31.03.1972' },
  { sNo: '08', name: 'श्री अर्जुन सिंह', role: 'प्र० अ० (Headmaster)', period: '01.04.1972 – 31.12.1985' },
  { sNo: '09', name: 'श्री चन्द्रशेखर झा', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.01.1986 – 31.01.1987' },
  { sNo: '10', name: 'श्री रामाश्रय सिंह (हिन्दी)', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.02.1987 – 31.01.1993' },
  { sNo: '11', name: 'श्री सुरेशचन्द्र सिंह', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.02.1993 – 03.10.1993' },
  { sNo: '12', name: 'श्री विश्वनाथ दिवाकर', role: 'प्र० अ० (Headmaster)', period: '04.10.1993 – 02.11.1995' },
  { sNo: '13', name: 'श्री दिवाकर ठाकुर', role: 'प्र० अ० (Headmaster)', period: '03.11.1995 – 24.04.1997' },
  { sNo: '14', name: 'श्री विश्वनाथ ठाकुर', role: 'प्र० अ० (Headmaster)', period: '25.04.1997 – 31.01.1999' },
  { sNo: '15', name: 'श्री सच्चिदानन्द पाण्डेय', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.02.1999 – 31.08.2003' },
  { sNo: '16', name: 'श्री रामाश्रय सिंह (जैविक)', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.09.2003 – 31.07.2010' },
  { sNo: '17', name: 'डॉ० लाखपति शर्मा', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.08.2010 – 07.12.2010' },
  { sNo: '18', name: 'डॉ० लाखपति शर्मा', role: 'प्र० अ० (Headmaster)', period: '08.12.2010 – 31.05.2013' },
  { sNo: '19', name: 'डॉ० कमलेश्वर प्र० श्रीवास्तव', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.06.2013 – 05.07.2013' },
  { sNo: '20', name: 'श्री राजनीति कुमार', role: 'प्र० अ० (Headmaster)', period: '06.07.2013 – 31.11.2015' },
  { sNo: '21', name: 'डॉ० कमलेश्वर प्र० श्रीवास्तव', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.12.2015 – 31.03.2018' },
  { sNo: '22', name: 'सैयद जुनैद हसन वारसी', role: 'प्र० प्र० अ० (Acting Headmaster)', period: '01.04.2018 – 31.01.2020' },
  { sNo: '23', name: 'संजय कुमार', role: 'प्र० प्र० अ० (Acting Principal)', period: '01.02.2020 – अब तक (Present)', note: 'वर्तमान प्रभारी प्रधानाचार्य (Current Principal)' }
];

const officialFacilities = [
  {
    icon: '🔬',
    title: 'Integrated Science and Geography Labs',
    titleHi: 'एकीकृत विज्ञान एवं भूगोल प्रयोगशालाएँ',
    desc: 'Fully equipped experimental facilities for Physics, Chemistry, Botany, Zoology, Mathematics, and Geography for practical training and scientific inquiry.'
  },
  {
    icon: '💻',
    title: 'Unnayan Bihar Smart Classes and Computer Lab',
    titleHi: 'उन्नयन बिहार स्मार्ट क्लास एवं कंप्यूटर लैब',
    desc: 'Regular smart classes under the Bihar Education Department\'s Unnayan Program, complemented by a fully equipped ICT computer lab led by MCA faculty.'
  },
  {
    icon: '📚',
    title: 'Central Library and Student Book Bank',
    titleHi: 'केंद्रीय पुस्तकालय एवं छात्र बुक बैंक',
    desc: 'Open 10:00 AM to 4:00 PM on all working days, featuring a dedicated Book Bank providing curriculum textbooks for needy and meritorious students throughout the session.'
  },
  {
    icon: '🤾',
    title: 'District Handball Training Camp and Gym',
    titleHi: 'जिला हैंडबॉल प्रशिक्षण शिविर एवं व्यायामशाला',
    desc: 'Official district and state handball training venue for Sheikhpura youth, accompanied by a well-equipped gymnasium (व्यायामशाला) for physical fitness.'
  },
  {
    icon: '🎖️',
    title: 'Junior Division N.C.C. (2 Platoons)',
    titleHi: 'एन.सी.सी. (NCC) प्रशिक्षण - 2 पलटन',
    desc: 'Officially approved training facility with two platoons under the Junior Division Troops, instilling patriotism, leadership, and discipline in students.'
  },
  {
    icon: '🎵',
    title: 'Music Department and Brass School Band',
    titleHi: 'संगीत कक्ष एवं सुसज्जित स्कूल बैंड',
    desc: 'Guided by dedicated music faculty, offering classical and patriotic music training along with an equipped marching brass band for assemblies and ceremonies.'
  },
  {
    icon: '🌿',
    title: 'Eco Club and Botanical Eco Park',
    titleHi: 'इको क्लब एवं परिसर इको पार्क',
    desc: 'Active student Eco Club maintaining an on-campus Eco Park, environmental data collection, tree conservation, and botanical record-keeping.'
  },
  {
    icon: '⚖️',
    title: 'Legal Literacy Club (Est. 27.03.2018)',
    titleHi: 'लीगल लिट्रेसी क्लब (स्थापना 27.03.2018)',
    desc: 'Established by the Sheikhpura Bar Association on 27 March 2018 to educate students on institutional constitutional rights, civic law, and social justice.'
  }
];

const seatCapacities = [
  { stream: 'Science (विज्ञान / I.Sc.)', seats: 333, icon: '🔬', desc: 'Physics, Chemistry, Mathematics, Biology (Botany and Zoology), Hindi and English.' },
  { stream: 'Arts (कला / I.A.)', seats: 120, icon: '🎨', desc: 'History, Political Science, Geography, Economics, Psychology, Languages.' },
  { stream: 'Commerce (वाणिज्य / I.Com.)', seats: 120, icon: '📊', desc: 'Accountancy, Business Studies, Entrepreneurship, Economics, Languages.' }
];

const ebooksData = [
  {
    className: 'Class 9',
    classKey: 'class9',
    streamBadge: 'BSEB Science',
    streamKey: 'science',
    icon: '🔬',
    title: 'Science (विज्ञान) — Class 9',
    desc: 'Matter in Our Surroundings, Is Matter Around Us Pure, Atoms and Molecules, Structure of the Atom, The Fundamental Unit of Life, Tissues, Motion, Force and Laws of Motion, Gravitation, Work and Energy, Sound, Improvement in Food Resources.',
    chapters: ['1. Matter in Our Surroundings', '2. Is Matter Around Us Pure', '3. Atoms and Molecules', '4. Structure of the Atom', '5. The Fundamental Unit of Life', '6. Tissues', '7. Motion', '8. Force and Laws of Motion', '9. Gravitation', '10. Work and Energy', '11. Sound', '12. Improvement in Food Resources'],
    link: 'https://ncert.nic.in/textbook.php?iesc1=0-12'
  },
  {
    className: 'Class 9',
    classKey: 'class9',
    streamBadge: 'BSEB Mathematics',
    streamKey: 'maths',
    icon: '📐',
    title: 'Mathematics (गणित) — Class 9',
    desc: 'Number Systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Lines and Angles, Triangles, Quadrilaterals, Circles, Heron\'s Formula, Statistics.',
    chapters: ['1. Number Systems', '2. Polynomials', '3. Coordinate Geometry', '4. Linear Equations in Two Variables', '5. Introduction to Euclid\'s Geometry', '6. Lines and Angles', '7. Triangles', '8. Quadrilaterals', '9. Circles', '10. Heron\'s Formula', '12. Statistics'],
    link: 'https://ncert.nic.in/textbook.php?iemh1=0-12'
  },
  {
    className: 'Class 10',
    classKey: 'class10',
    streamBadge: 'BSEB Science',
    streamKey: 'science',
    icon: '⚡',
    title: 'Science (विज्ञान) — Class 10',
    desc: 'Chemical Reactions and Equations, Acids Bases and Salts, Metals and Non-metals, Carbon and its Compounds, Life Processes, Control and Coordination, How do Organisms Reproduce?, Heredity, Light – Reflection and Refraction, Human Eye, Electricity, Magnetic Effects, Our Environment.',
    chapters: ['1. Chemical Reactions and Equations', '2. Acids, Bases and Salts', '3. Metals and Non-metals', '4. Carbon and its Compounds', '5. Life Processes', '6. Control and Coordination', '7. How do Organisms Reproduce?', '8. Heredity', '9. Light – Reflection and Refraction', '10. The Human Eye', '11. Electricity', '12. Magnetic Effects of Electric Current', '13. Our Environment'],
    link: 'https://ncert.nic.in/textbook.php?jesc1=0-13'
  },
  {
    className: 'Class 10',
    classKey: 'class10',
    streamBadge: 'BSEB Mathematics',
    streamKey: 'maths',
    icon: '📊',
    title: 'Mathematics (गणित) — Class 10',
    desc: 'Real Numbers, Polynomials, Pair of Linear Equations in Two Variables, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Trigonometry, Circles, Areas Related to Circles, Surface Areas and Volumes, Statistics, Probability.',
    chapters: ['1. Real Numbers', '2. Polynomials', '3. Linear Equations in Two Variables', '4. Quadratic Equations', '5. Arithmetic Progressions', '6. Triangles', '7. Coordinate Geometry', '8. Introduction to Trigonometry', '9. Applications of Trigonometry', '10. Circles', '11. Areas Related to Circles', '12. Surface Areas and Volumes', '13. Statistics', '14. Probability'],
    link: 'https://ncert.nic.in/textbook.php?jemh1=0-14'
  },
  {
    className: 'Class 11 (+2)',
    classKey: 'class11',
    streamBadge: '+2 Science I.Sc.',
    streamKey: 'science',
    icon: '⚛️',
    title: 'Physics Part-1 and 2 — Class 11 (+2)',
    desc: 'Units and Measurements, Motion in a Straight Line, Motion in a Plane, Laws of Motion, Work Energy and Power, System of Particles and Rotational Motion, Gravitation, Mechanical Properties of Solids and Fluids, Thermal Properties, Thermodynamics, Kinetic Theory, Oscillations, Waves.',
    chapters: ['1. Units and Measurements', '2. Motion in a Straight Line', '3. Motion in a Plane', '4. Laws of Motion', '5. Work, Energy and Power', '6. System of Particles and Rotational Motion', '7. Gravitation', '8. Mechanical Properties of Solids', '9. Mechanical Properties of Fluids', '10. Thermal Properties of Matter', '11. Thermodynamics', '12. Kinetic Theory', '13. Oscillations', '14. Waves'],
    link: 'https://ncert.nic.in/textbook.php?keph1=0-8'
  },
  {
    className: 'Class 11 (+2)',
    classKey: 'class11',
    streamBadge: '+2 Science I.Sc.',
    streamKey: 'science',
    icon: '🧪',
    title: 'Chemistry Part-1 and 2 — Class 11 (+2)',
    desc: 'Some Basic Concepts of Chemistry, Structure of Atom, Classification of Elements and Periodicity, Chemical Bonding and Molecular Structure, Chemical Thermodynamics, Equilibrium, Redox Reactions, Organic Chemistry: Basic Principles, Hydrocarbons.',
    chapters: ['1. Some Basic Concepts of Chemistry', '2. Structure of Atom', '3. Classification of Elements and Periodicity', '4. Chemical Bonding and Molecular Structure', '5. Chemical Thermodynamics', '6. Equilibrium', '7. Redox Reactions', '8. Organic Chemistry: Basic Principles and Techniques', '9. Hydrocarbons'],
    link: 'https://ncert.nic.in/textbook.php?kech1=0-6'
  },
  {
    className: 'Class 12 (+2)',
    classKey: 'class12',
    streamBadge: '+2 Science I.Sc.',
    streamKey: 'science',
    icon: '🧬',
    title: 'Biology — Class 12 (+2 Science)',
    desc: 'Sexual Reproduction in Flowering Plants, Human Reproduction, Reproductive Health, Principles of Inheritance and Variation, Molecular Basis of Inheritance, Evolution, Human Health and Disease, Microbes in Human Welfare, Biotechnology: Principles and Processes, Biotechnology and its Applications, Organisms and Populations, Ecosystem, Biodiversity and Conservation.',
    chapters: ['1. Sexual Reproduction in Flowering Plants', '2. Human Reproduction', '3. Reproductive Health', '4. Principles of Inheritance and Variation', '5. Molecular Basis of Inheritance', '6. Evolution', '7. Human Health and Disease', '8. Microbes in Human Welfare', '9. Biotechnology: Principles and Processes', '10. Biotechnology and its Applications', '11. Organisms and Populations', '12. Ecosystem', '13. Biodiversity and Conservation'],
    link: 'https://ncert.nic.in/textbook.php?lebo1=0-13'
  },
  {
    className: 'Class 12 (+2)',
    classKey: 'class12',
    streamBadge: '+2 Science I.Sc.',
    streamKey: 'science',
    icon: '📐',
    title: 'Mathematics Part-1 and 2 — Class 12 (+2)',
    desc: 'Relations and Functions, Inverse Trigonometric Functions, Matrices, Determinants, Continuity and Differentiability, Application of Derivatives, Integrals, Differential Equations, Vector Algebra, Three Dimensional Geometry, Linear Programming, Probability.',
    chapters: ['1. Relations and Functions', '2. Inverse Trigonometric Functions', '3. Matrices', '4. Determinants', '5. Continuity and Differentiability', '6. Application of Derivatives', '7. Integrals', '8. Application of Integrals', '9. Differential Equations', '10. Vector Algebra', '11. Three Dimensional Geometry', '12. Linear Programming', '13. Probability'],
    link: 'https://ncert.nic.in/textbook.php?lemh1=0-6'
  },
  {
    className: 'Class 12 (+2)',
    classKey: 'class12',
    streamBadge: '+2 Commerce I.Com.',
    streamKey: 'commerce',
    icon: '📑',
    title: 'Accountancy: Partnership and Companies — Class 12 (+2)',
    desc: 'Accounting for Partnership: Basic Concepts, Reconstitution of a Partnership Firm (Admission, Retirement/Death of a Partner), Dissolution of Partnership Firm, Accounting for Share Capital, Issue and Redemption of Debentures, Financial Statements of a Company, Analysis of Financial Statements, Accounting Ratios, Cash Flow Statement.',
    chapters: ['1. Accounting for Partnership: Basic Concepts', '2. Reconstitution of a Partnership Firm – Admission of a Partner', '3. Reconstitution – Retirement/Death of a Partner', '4. Dissolution of Partnership Firm', '5. Accounting for Share Capital', '6. Issue and Redemption of Debentures', '7. Financial Statements of a Company', '8. Analysis of Financial Statements', '9. Accounting Ratios', '10. Cash Flow Statement'],
    link: 'https://ncert.nic.in/textbook.php?leac1=0-5'
  },
  {
    className: 'Class 12 (+2)',
    classKey: 'class12',
    streamBadge: '+2 ICT / Comp. Sci.',
    streamKey: 'commerce',
    icon: '💻',
    title: 'Computer Science with Python — Class 11 and 12',
    desc: 'Python Programming, Functions, Data Structures (Stacks and Queues), File Handling (Text, Binary, CSV), Computer Networks, Relational Database and SQL, Python-SQL Interface, Cyber Safety and Ethics.',
    chapters: ['1. Python Review and Object-Oriented Principles', '2. Functions and Modules in Python', '3. File Handling in Python', '4. Data Structures: Stacks and Queues', '5. Computer Networks and Protocols', '6. Database Concepts and Structured Query Language (SQL)', '7. Interfacing Python with SQL Database', '8. Society, Law and Cyber Ethics'],
    link: 'https://ncert.nic.in/textbook.php?lecs1=0-8'
  },
  {
    className: 'Class 12 (+2)',
    classKey: 'class12',
    streamBadge: '+2 Arts I.A.',
    streamKey: 'arts',
    icon: '🗳️',
    title: 'Political Science — Class 12 (+2 Arts)',
    desc: 'Contemporary World Politics (Cold War Era, End of Bipolarity, South Asia, International Organisations) and Politics in India since Independence (Nation-building, Planned Development, India\'s External Relations).',
    chapters: ['1. The Cold War Era', '2. The End of Bipolarity', '3. US Hegemony in World Politics', '4. Alternative Centres of Power', '5. Contemporary South Asia', '6. International Organisations', '7. Challenges of Nation-Building', '8. Era of One-Party Dominance', '9. Politics of Planned Development', '10. India\'s External Relations'],
    link: 'https://ncert.nic.in/textbook.php?leps1=0-9'
  }
];

// ── 2. SHARED LAYOUT COMPONENTS ──

function renderHead(pageTitle, pageDesc) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#8B0000">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="format-detection" content="telephone=no">
  <title>${pageTitle} | P.M. Shri +2 High School, Barbigha</title>
  <meta name="description" content="${pageDesc}">
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
        <button class="lang-toggle-btn" onclick="toggleLanguage()" id="langSwitchBtn" aria-label="Toggle Language Hindi / English">
          🌐 <span id="langSwitchLabel">हिन्दी (Hindi)</span>
        </button>
      </div>
    </div>
  </div>

  <!-- HEADER -->
  <header>
    <div class="header-container">
      <div class="hlogo-wrapper">
        <a href="index.html" class="hlogo" title="P.M. Shri +2 High School Barbigha - Home">
          <img src="images/school-logo.png" alt="Founder Headmaster Rashtrakavi Ramdhari Singh Dinkar Statue">
        </a>
      </div>
      <h1 class="hname" id="hdrTitle">P.M. Shri +2 High School</h1>
      <div class="hname-en" id="hdrSub">Barbigha, District Sheikhpura (Bihar)</div>
      <div class="hsub" id="hdrPin">P.O. and P.S. Barbigha, PIN: 811101 — Affiliated to BSEB Patna</div>
      <div class="hbadges">
        <span class="hbadge" id="hbPin">📌 PIN: 811101</span>
        <span class="hbadge" id="hbEst">🏛️ Est. 1933 (90+ Years)</span>
        <span class="hbadge" id="hbPm">🏅 PM-SHRI Exemplary School</span>
        <span class="hbadge" id="hbBseb">🎓 Bihar School Examination Board</span>
      </div>
    </div>
  </header>

  <!-- 8 OPTIONS NAVIGATION -->
  <nav id="mainNav">
    <div class="nav-container">
      <span class="nav-brand-mobile">🏫 Barbigha High School</span>
      <button class="nav-toggle-btn" id="navToggle" aria-label="Toggle Navigation Menu">
        <span>☰</span> <span>Menu</span>
      </button>
      <div class="nav-links" id="navLinks">
        <a class="nav-item ${activeNav === 'home' ? 'active' : ''}" href="index.html">Home</a>
        <a class="nav-item ${activeNav === 'about' ? 'active' : ''}" href="about.html">About</a>
        <a class="nav-item ${activeNav === 'campus' ? 'active' : ''}" href="campus.html">Campus</a>
        <a class="nav-item ${activeNav === 'principal' ? 'active' : ''}" href="principal.html">Principal</a>
        <a class="nav-item ${activeNav === 'teachers' ? 'active' : ''}" href="teachers.html">Teachers</a>
        <a class="nav-item ${activeNav === 'staff' ? 'active' : ''}" href="staff.html">Staff</a>
        <a class="nav-item ${activeNav === 'contact' ? 'active' : ''}" href="contact.html">Contact</a>
        <a class="nav-item ${activeNav === 'ebooks' ? 'active' : ''}" href="ebooks.html">eBooks</a>
        <a class="nav-item ${activeNav === 'gallery' ? 'active' : ''}" href="gallery.html">Classroom Gallery</a>
      </div>
    </div>
  </nav>

  <!-- HERO MOTTO STRIP -->
  <div class="hero" id="heroMotto">
    "ज्ञान ही शक्ति है — Knowledge is Power"
  </div>
`;
}

function renderBreadcrumb(activeTitle) {
  if (!activeTitle) return '';
  return `
  <!-- BREADCRUMB -->
  <div class="breadcrumb-wrap">
    <div class="breadcrumb-container">
      <a href="index.html">🏠 Home</a>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">${activeTitle}</span>
    </div>
  </div>
`;
}

function renderFooter() {
  return `
  <!-- FOOTER -->
  <footer>
    <div class="footer-container">
      <div class="footer-grid">
        <div class="fcol">
          <div class="fbrand">P.M. Shri +2 High School</div>
          <div class="fbrand-sub">Barbigha, Sheikhpura (Bihar) - PIN: 811101</div>
          <p>The premier government educational institution of Barbigha, serving excellence in education since 3 January 1933 under Bihar School Examination Board (BSEB, Patna).</p>
          <div style="margin-top: 12px; font-size: 0.8rem; color: #ffcc80;">
            UDISE Code: 10262907004 | Affiliation: BSEB Patna
          </div>
        </div>
        <div class="fcol">
          <h4>+2 Academic Streams</h4>
          <ul>
            <li><a href="about.html#seats">🔬 I.Sc. Science (333 Seats)</a></li>
            <li><a href="about.html#seats">🎨 I.A. Arts (120 Seats)</a></li>
            <li><a href="about.html#seats">📊 I.Com. Commerce (120 Seats)</a></li>
            <li><a href="contact.html">📋 OFSS Bihar Online Admission</a></li>
            <li><a href="ebooks.html">📖 State and NCERT Textbooks</a></li>
            <li><a href="about.html#uniform">👔 Official School Uniform</a></li>
          </ul>
        </div>
        <div class="fcol">
          <h4>Institutional Contact</h4>
          <p>
            📍 Near Sri Babu Chowk / NH-82, Barbigha<br>
            District Sheikhpura, Bihar - 811101<br><br>
            📞 Helpline: <a href="tel:06341295000" style="color:var(--gold-light);">06341-295000</a><br>
            ✉️ Email: <a href="mailto:highschoolbarbigha@gmail.com" style="color:var(--gold-light);">highschoolbarbigha@gmail.com</a><br>
            ⏰ Office Hours: 9:30 AM – 4:00 PM (Mon–Sat)
          </p>
        </div>
      </div>
      <div class="fbottom">
        &copy; 1933–2026 P.M. Shri +2 High School, Barbigha, District Sheikhpura (Bihar). UDISE: 10262907004.<br>
        All Rights Reserved. Affiliated to Bihar School Examination Board (BSEB, Patna).
      </div>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
`;
}

// ── 3. SECTION BUILDERS ──

function buildAboutSection() {
  const seatsCardsHtml = seatCapacities.map(c => `
  <div class="seat-card rv">
    <div class="seat-icon">${c.icon}</div>
    <div class="seat-stream">${c.stream}</div>
    <div class="seat-count">${c.seats}</div>
    <div class="seat-sub">Approved Seats (स्वीकृत सीटें)</div>
    <p class="seat-desc">${c.desc}</p>
  </div>
`).join('\n');

  return `
  <section id="about">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleAbout">About Our School <span id="secSubAbout">Nine Decades of Academic Excellence</span></h2>
      <p class="sec-subtitle" id="secDescAbout">Founded on 3 January 1933, P.M. Shri +2 High School Barbigha is the premier government educational institution of Sheikhpura district, fostering intellectual rigor, scientific temper, and holistic character building.</p>

      <div class="about-stats rv">
        <div class="astat-item">
          <div class="astat-num">1933</div>
          <div class="astat-lbl" id="asEst">Est. 3 January 1933</div>
        </div>
        <div class="astat-item">
          <div class="astat-num">1937</div>
          <div class="astat-lbl" id="asRec">Govt Recognized Jan 1937</div>
        </div>
        <div class="astat-item">
          <div class="astat-num">2010</div>
          <div class="astat-lbl" id="asUpg">+2 Upgraded (Code 2011)</div>
        </div>
        <div class="astat-item">
          <div class="astat-num">573</div>
          <div class="astat-lbl" id="asCap">+2 Approved Capacity</div>
        </div>
        <div class="astat-item">
          <div class="astat-num">25+</div>
          <div class="astat-lbl" id="asFac">Qualified Faculty Members</div>
        </div>
      </div>

      <!-- 4 Overview Cards -->
      <div class="agrid">
        <div class="acard rv">
          <div class="acard-header">
            <h3 id="acardTitle1">🏫 School Heritage, Founders and Background</h3>
          </div>
          <div class="acard-body" id="acardBody1">
            <p>
              Originally founded in 1933 as a Higher English (H.E.) School by British Education Officer <strong>F.J. Fokes (एफ० जे० फोकस)</strong>. Rashtrakavi Shri <strong>Ramdhari Singh 'Dinkar'</strong> served as its illustrious Founder Headmaster from 3 January 1933 to 21 July 1934, laying the moral, cultural, and intellectual foundation of the institution.
            </p>
            <p style="margin-top: 10px;">
              Visionary leaders including Founder Secretary <strong>Babu Ram Krishna Singh</strong> (elder brother of Bihar's first Chief Minister Bihar Kesari Dr. Shri Krishna Singh), <strong>Shri Shivnandan Babu</strong> (Khetalpura), and renowned freedom fighter and Jan-Nayak <strong>Shri Krishna Mohan Pyare Singh alias 'Lala Babu'</strong> (regarded as the father of university education in Bihar) steered its growth. Former Headmaster <strong>Shri Jagdish Sharma</strong> served twice as Member of the Bihar Legislative Council (MLC) and President of the Secondary Teachers Association.
            </p>
          </div>
        </div>

        <div class="acard rv">
          <div class="acard-header">
            <h3 id="acardTitle2">📊 Institutional Overview and Upgradation</h3>
          </div>
          <div class="acard-body" id="acardBody2">
            <ul class="acard-list">
              <li><strong>Original Name:</strong> H.E. School Barbigha (Higher English School)</li>
              <li><strong>Recognition Date:</strong> January 1937 (Bihar Education Department)</li>
              <li><strong>+2 Upgrade and BSEB Code:</strong> Upgraded 2010 | BSEB Code Allotted 2011</li>
              <li><strong>Curriculum:</strong> Secondary (Class 9–10) and Higher Secondary (+2 I.Sc., I.A., I.Com.)</li>
              <li><strong>Medium of Instruction:</strong> Hindi and English (Bilingual)</li>
              <li><strong>Total +2 Approved Capacity:</strong> 573 Seats (Science, Arts and Commerce)</li>
              <li><strong>PM-SHRI Designation:</strong> Selected as Exemplary Central Model School</li>
            </ul>
          </div>
        </div>

        <div class="acard rv">
          <div class="acard-header">
            <h3 id="acardTitle3">🎯 Mission, Vision and Student Achievements</h3>
          </div>
          <div class="acard-body" id="acardBody3">
            <p>
              To provide equitable, inclusive, and joyful education empowering rural youth from all socioeconomic backgrounds. We foster scientific curiosity, ethical citizenship, bilingual proficiency, and technological readiness to excel in competitive board examinations and national entrance tests.
            </p>
            <ul class="acard-list" style="margin-top: 10px;">
              <li>Distinction results consistently achieved in BSEB Matriculation and Intermediate Examinations.</li>
              <li>District and State Handball champions representing Sheikhpura at state tournaments.</li>
            </ul>
          </div>
        </div>

        <div class="acard rv">
          <div class="acard-header">
            <h3 id="acardTitle4">🏆 Co-Curricular and Institutional Specialities</h3>
          </div>
          <div class="acard-body" id="acardBody4">
            <ul class="acard-list">
              <li><strong>Junior Division NCC:</strong> 2 Platoons providing drill, leadership, and adventure training.</li>
              <li><strong>Handball Training Center:</strong> State-level district coaching camp and fitness gymnasium.</li>
              <li><strong>Central Library and Book Bank:</strong> Free session textbook lending for needy and meritorious students.</li>
              <li><strong>Music and School Brass Band:</strong> Professional instruments and ceremonial choir training.</li>
              <li><strong>Legal Literacy Club and Eco Club:</strong> Constitutional literacy and campus eco park conservation.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- +2 Stream Capacities from Brochure Page 1 -->
      <div id="seats" style="margin-top: 48px;" class="rv">
        <h3 style="font-family: 'Playfair Display', 'Tiro Devanagari Hindi', serif; color: var(--red); font-size: 1.35rem; text-align: center; margin-bottom: 6px;">
          🎓 Approved +2 Intermediate Stream Capacities (स्वीकृत सीटें)
        </h3>
        <p style="text-align: center; color: var(--gray); font-size: 0.9rem; max-width: 720px; margin: 0 auto 24px;">
          Official sanctioned intake for Class 11 and 12 under Bihar School Examination Board (BSEB, Patna).
        </p>
        <div class="seats-grid">
          ${seatsCardsHtml}
        </div>
      </div>

      <!-- Official School Uniform (विद्यालय पोशाक) -->
      <div id="uniform" style="margin-top: 48px;" class="rv">
        <h3 style="font-family: 'Playfair Display', 'Tiro Devanagari Hindi', serif; color: var(--red); font-size: 1.35rem; text-align: center; margin-bottom: 6px;">
          👔 Official School Uniform (विद्यालय पोशाक)
        </h3>
        <p style="text-align: center; color: var(--gray); font-size: 0.9rem; max-width: 720px; margin: 0 auto 20px;">
          All students must attend school in prescribed clean and proper institutional uniform as detailed in the official handbook.
        </p>

        <div class="uniform-container">
          <div class="uniform-card summer">
            <div class="uniform-season-title">☀️ Summer Season (गर्मी का मौसम)</div>
            <div class="uniform-group">
              <span class="uniform-badge">छात्र (Boys)</span>
              <p>आसमानी रंग की कमीज, नेवी ब्लू पैंट, उजला जूता एवं उजला मोजा।<br>(Sky blue shirt, Navy blue trousers, White shoes and white socks).</p>
            </div>
            <div class="uniform-group">
              <span class="uniform-badge">छात्रा (Girls)</span>
              <p>समीज, कमीज, नेवी ब्लू सलवार, नेवी ब्लू दुपट्टा / आसमानी कमीज, नेवी ब्लू स्कर्ट, उजला जूता, उजला मोजा एवं सफेद रिबन / हेयर बैंड।<br>(Sky blue shirt/salwar-kameez, Navy blue salwar/skirt, Navy dupatta, White shoes and socks, White ribbon/hairband).</p>
            </div>
          </div>

          <div class="uniform-card winter">
            <div class="uniform-season-title">❄️ Winter Season (जाड़े का मौसम)</div>
            <div class="uniform-group">
              <span class="uniform-badge">छात्र (Boys)</span>
              <p>आसमानी रंग की कमीज, नेवी ब्लू पैंट, उजला जूता एवं उजला मोजा, मैरून स्वेटर एवं मफलर।<br>(Sky blue shirt, Navy blue trousers, White shoes and socks, Maroon sweater and muffler).</p>
            </div>
            <div class="uniform-group">
              <span class="uniform-badge">छात्रा (Girls)</span>
              <p>आसमानी समीज/कमीज, नेवी ब्लू सलवार/स्कर्ट, नेवी ब्लू दुपट्टा, उजला जूता एवं उजला मोजा, सफेद रिबन/हेयर बैंड एवं मैरून स्वेटर एवं मफलर।<br>(Sky blue salwar-kameez/skirt, Navy dupatta, White shoes and socks, White ribbon/hairband, Maroon sweater and muffler).</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Student Code of Conduct & Parent Advisory -->
      <div style="margin-top: 48px;" class="rv">
        <div class="rules-grid">
          <div class="rules-card">
            <h4>📜 Student Code of Conduct (छात्र आचार संहिता)</h4>
            <ul>
              <li><strong>Identity Card:</strong> Every student must carry the official laminated Identity Card signed by the Principal daily.</li>
              <li><strong>75% Mandatory Attendance:</strong> As per BSEB regulations, minimum 75% attendance is compulsory to appear in Board and Sent-up exams.</li>
              <li><strong>School Timings:</strong> Classes run from <strong>9:30 AM to 4:00 PM</strong>. Students must assemble before the morning prayer at 9:30 AM.</li>
              <li><strong>Campus Decorum:</strong> Students must maintain quiet, respect teachers and staff, and refrain from damaging school property or using mobile phones during class hours.</li>
            </ul>
          </div>

          <div class="rules-card">
            <h4>🤝 Advice for Parents and Guardians (अभिभावकों के लिए निर्देश)</h4>
            <ul>
              <li><strong>Parent-Teacher Interaction:</strong> Parents are advised to meet teachers and the Principal regularly to review their ward's academic and behavioral progress.</li>
              <li><strong>Notebooks and Test Monitoring:</strong> Regularly examine and countersign teachers' remarks, homework, and monthly class test copies.</li>
              <li><strong>Punctuality and Uniform:</strong> Ensure students arrive on time (9:30 AM) in proper clean uniform and with daily timetable books.</li>
              <li><strong>Office Inquiries:</strong> Any grievances or fee inquiries must be addressed during administrative hours (10:00 AM – 3:00 PM).</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
`;
}

function buildCampusSection() {
  return `
  <section id="campus">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleCampus">School Campus <span id="secSubCampus">Infrastructure and Academic Environment</span></h2>
      <p class="sec-subtitle" id="secDescCampus">A sprawling, green, and secure academic campus situated near Sri Babu Chowk in Barbigha, Sheikhpura, offering state-of-the-art labs, sports grounds, and historic memorials.</p>

      <!-- Dinkar Smriti Manch Banner Card -->
      <div class="campus-highlight-card rv">
        <div class="ch-img-wrap">
          <img src="images/campus-main.jpg" onerror="this.src='images/campus/campus-main.jpg'" alt="Rashtrakavi Ramdhari Singh Dinkar Smriti Manch at Barbigha High School" class="ch-img">
          <div class="ch-caption">
            🏛️ राष्ट्रकवि रामधारी सिंह दिनकर स्मृति मंच — बरबीघा, शेखपुरा, बिहार
          </div>
        </div>
        <div class="ch-body">
          <div class="ch-tag" id="chTag">HISTORIC LANDMARK AND CULTURAL HERITAGE</div>
          <h3 class="ch-title" id="chTitle">Rashtrakavi Ramdhari Singh 'Dinkar' Smriti Manch</h3>
          <p class="ch-desc" id="chDesc">
            Erected in sacred memory of our illustrious <strong>Founder Headmaster</strong> (03.01.1933 – 21.07.1934), the towering national poet of India, <em>Rashtrakavi Ramdhari Singh 'Dinkar'</em>. This open-air amphitheatre and memorial stage is the cultural heart of Barbigha, hosting annual Dinkar Jayanti literary celebrations, national day parades, debates, musical recitals, and district cultural meets.
          </p>
          <div class="ch-stats">
            <div class="ch-stat">
              <div class="ch-stat-num">1933</div>
              <div class="ch-stat-lbl">Founder Headmaster Year</div>
            </div>
            <div class="ch-stat">
              <div class="ch-stat-num">500+</div>
              <div class="ch-stat-lbl">Seating Capacity Amphitheatre</div>
            </div>
            <div class="ch-stat">
              <div class="ch-stat-num">Annual</div>
              <div class="ch-stat-lbl">Dinkar Jayanti Celebrations</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
`;
}

function buildPrincipalSection() {
  const table1Rows = principalsData.slice(0, 12).map(p => `
  <tr>
    <td class="succ-sno">${p.sNo}</td>
    <td class="succ-name">
      ${p.name}
      ${p.sNo === '01' ? '<br><span class="badge-dinkar">संस्थापक प्रधानाध्यापक</span>' : ''}
      ${p.note && p.sNo !== '01' ? `<br><small style="color:var(--red);font-size:0.75rem;">${p.note}</small>` : ''}
    </td>
    <td class="succ-role">${p.role}</td>
    <td class="succ-period">${p.period}</td>
  </tr>
`).join('');

  const table2Rows = principalsData.slice(12).map(p => `
  <tr>
    <td class="succ-sno">${p.sNo}</td>
    <td class="succ-name">
      ${p.name}
      ${p.sNo === '23' ? '<br><span class="badge-current">वर्तमान प्रभारी प्रधानाचार्य</span>' : ''}
      ${p.note && p.sNo !== '23' ? `<br><small style="color:var(--red);font-size:0.75rem;">${p.note}</small>` : ''}
    </td>
    <td class="succ-role">${p.role}</td>
    <td class="succ-period">${p.period}</td>
  </tr>
`).join('');

  return `
  <section id="principal">
    <div class="section-container">
      <h2 class="sec-title" id="secTitlePrincipal">Principal's Desk <span id="secSubPrincipal">Leadership and Vision</span></h2>
      <p class="sec-subtitle" id="secDescPrincipal">A visionary message from the head of the institution on shaping character, academic excellence, and civic responsibility.</p>

      <div class="principal-section-layout">
        <!-- Principal Profile Card -->
        <div class="pcard rv">
          <div class="pcard-img-wrap">
            <img src="images/principal/sanjay-kumar.jpg" onerror="this.src='images/principal-sanjay-kumar.jpg'" alt="Sanjay Kumar - In-Charge Principal, P.M. Shri +2 High School Barbigha" class="pcard-img">
            <div class="pcard-badge">Current Head of Institution</div>
          </div>
          <div class="pcard-body">
            <h3 class="pcard-name">Sanjay Kumar</h3>
            <div class="pcard-hi-name">संजय कुमार</div>
            <div class="pcard-title">In-Charge Principal (प्रभारी प्रधानाचार्य)</div>
            <div class="pcard-sub">Secondary Mathematics Teacher (माध्यमिक गणित शिक्षक)</div>
            <div class="pcard-meta">
              <div class="pcard-meta-row">
                <span class="pm-lbl">Qualification:</span>
                <span class="pm-val">M.Sc. (Mathematics), B.Ed.</span>
              </div>
              <div class="pcard-meta-row">
                <span class="pm-lbl">योग्यता:</span>
                <span class="pm-val">एम० एस० सी० ( गणित ), बी०एड०</span>
              </div>
              <div class="pcard-meta-row">
                <span class="pm-lbl">In-Charge Since:</span>
                <span class="pm-val">01 February 2020 – Present</span>
              </div>
              <div class="pcard-meta-row">
                <span class="pm-lbl">Direct Mobile:</span>
                <span class="pm-val"><a href="tel:9835017555" style="color:var(--red); font-weight:700;">9835017555</a></span>
              </div>
              <div class="pcard-meta-row">
                <span class="pm-lbl">Office:</span>
                <span class="pm-val">Administrative Block, Ground Floor</span>
              </div>
            </div>
            <div style="margin-top: 18px;">
              <a class="pphone" href="tel:9835017555">📞 Direct Call: 9835017555</a>
            </div>
          </div>
        </div>

        <!-- Principal's Authentic Welcome Message -->
        <div class="pmessage rv">
          <div class="pmessage-quote-mark">“</div>
          
          <div class="pmessage-header">
            <div class="pm-eyebrow">HEAD OF INSTITUTION’S ADDRESS</div>
            <h3 class="pmessage-title">
              <span class="pm-title-hi">संदेश</span>
              <span class="pm-title-sep">|</span>
              <span class="pm-title-en">Principal's Official Welcome Message</span>
            </h3>
          </div>

          <div class="pmessage-lead">
            <span class="pm-shloka-icon">🏛️</span>
            <blockquote>
              <strong class="pm-shloka-text">"सा विद्या या विमुक्तये"</strong>
              <span class="pm-shloka-meaning">— ज्ञान वही है जो मुक्ति और सशक्तीकरण प्रदान करे। (True knowledge is that which liberates and empowers.)</span>
            </blockquote>
          </div>

          <div class="pmessage-body">
            <p class="pm-lead-para">
              It is a matter of profound honor and privilege to welcome all esteemed parents, guardians, dedicated teachers, and promising students to the official portal of <strong>P.M. Shri +2 High School Barbigha</strong>. Our historic institution was sanctified at its inception on <strong>3 January 1933</strong> by none other than Rashtrakavi Shri <strong>Ramdhari Singh 'Dinkar'</strong>, whose indelible legacy of fearlessness, truth, and love for knowledge continues to inspire our campus daily.
            </p>
            <p>
              As a recognized <strong>PM-SHRI Exemplary Model School</strong>, our fundamental commitment extends beyond mere syllabus completion. We strive to provide experiential, technology-enabled, and values-centered education that develops rational thinking, constitutional values, physical robustness, and compassionate character in every student entrusted to our care.
            </p>
            <p>
              Under the Bihar School Examination Board and the Department of Education, our classrooms are equipped with modern <strong>Smart Boards under the Unnayan Bihar scheme</strong>, active science and computer laboratories, a rich central book bank, NCC wings, and a state-level handball training facility. We invite parents and guardians to work collaboratively with us to help every boy and girl fulfill their highest academic and human potential.
            </p>
          </div>

          <div class="pmessage-sign">
            <div class="pm-sign-details">
              <div class="pm-sign-name">संजय कुमार <span class="pm-sign-en">(Sanjay Kumar)</span></div>
              <div class="pm-sign-desig">प्रभारी प्रधानाचार्य (In-Charge Principal)</div>
              <div class="pm-sign-role">माध्यमिक गणित शिक्षक (Secondary Mathematics Teacher)</div>
              <div class="pm-sign-school">पी.एम. श्री +2 उच्च विद्यालय, बरबीघा (शेखपुरा, बिहार)</div>
            </div>
            <div class="pm-seal-badge">
              <div class="pm-seal-icon">🏛️</div>
              <div class="pm-seal-title">PM-SHRI</div>
              <div class="pm-seal-sub">BARBIGHA</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Succession List of 23 Principals (उत्तराधिकारी पद) from Brochure Page 2 -->
      <div class="succession-wrapper rv">
        <div class="succession-header">
          <h3>🏛️ Roll of Honor: Succession List of Principals (उत्तराधिकारी पद)</h3>
          <p>
            The historic lineage of 23 distinguished educators who have steered P.M. Shri +2 High School Barbigha since 3 January 1933, starting with Founder Headmaster Rashtrakavi Ramdhari Singh 'Dinkar'.
          </p>
        </div>

        <div class="succ-dual-grid">
          <!-- Column 1: S.No. 01 to 12 -->
          <div class="succ-table-wrap">
            <table class="succ-table">
              <thead>
                <tr>
                  <th class="succ-sno">क्रं.</th>
                  <th>नाम (Name)</th>
                  <th>पदनाम (Designation)</th>
                  <th>कार्यावधि (Tenure)</th>
                </tr>
              </thead>
              <tbody>
                ${table1Rows}
              </tbody>
            </table>
          </div>

          <!-- Column 2: S.No. 13 to 23 -->
          <div class="succ-table-wrap">
            <table class="succ-table">
              <thead>
                <tr>
                  <th class="succ-sno">क्रं.</th>
                  <th>नाम (Name)</th>
                  <th>पदनाम (Designation)</th>
                  <th>कार्यावधि (Tenure)</th>
                </tr>
              </thead>
              <tbody>
                ${table2Rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </section>
`;
}

function buildTeachersSection() {
  const teacherCardsHtml = teachersData.map((t, i) => `
  <div class="tcard rv" data-category="${t.category}" data-name="${t.name.toLowerCase()} ${t.subj.toLowerCase()}">
    <div class="tcard-img-wrap">
      <img src="${t.photo}" alt="${t.name} - ${t.subj} Teacher" class="tcard-img" loading="lazy"
           onerror="this.onerror=null; this.src='images/teacher-placeholder.svg'">
      <div class="tcard-num">#${String(i + 1).padStart(2, '0')}</div>
    </div>
    <div class="tcard-body">
      <h3 class="tcard-name">${t.name}</h3>
      <div class="tcard-hi-name">${t.hindiName}</div>
      <div class="tcard-subj">${t.subj}</div>
      <div class="tcard-qual">${t.qual}</div>
      ${t.mob ? `
      <div class="tcard-contact">
        <a href="tel:${t.mob}" class="tcontact-link tphone" title="Call ${t.name}">📞 ${t.mob}</a>
        <a href="https://wa.me/91${t.mob}" target="_blank" rel="noopener" class="tcontact-link twhatsapp" title="WhatsApp ${t.name}">💬 WhatsApp</a>
      </div>` : ''}
    </div>
  </div>
`).join('\n');

  return `
  <section id="teachers">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleTeachers">Our Teaching Faculty <span id="secSubTeachers">Dedicated Educators and Mentors</span></h2>
      <p class="sec-subtitle" id="secDescTeachers">Meet our team of ${teachersData.length} qualified and compassionate teachers appointed by Bihar Public Service Commission (BPSC TRE) and Secondary Education Department.</p>

      <!-- Teacher Filters & Search -->
      <div class="filter-controls rv">
        <div class="filter-tabs">
          <button class="filter-btn t-filter-btn active" data-filter="all">All Teachers <span class="badge" id="teacherCountBadge">(${teachersData.length})</span></button>
          <button class="filter-btn t-filter-btn" data-filter="science">Science and Maths</button>
          <button class="filter-btn t-filter-btn" data-filter="social">Social Sciences</button>
          <button class="filter-btn t-filter-btn" data-filter="languages">Languages</button>
          <button class="filter-btn t-filter-btn" data-filter="commerce_comp">Computer and Commerce</button>
          <button class="filter-btn t-filter-btn" data-filter="arts">Arts and Music</button>
          <button class="filter-btn t-filter-btn" data-filter="library">Library</button>
        </div>
        <div class="search-box">
          <input type="text" id="teacherSearch" placeholder="🔍 Search teacher by name or subject..." aria-label="Search teachers">
        </div>
      </div>

      <!-- Teachers Grid -->
      <div class="tgrid" id="teachersGrid">
        ${teacherCardsHtml}
      </div>
    </div>
  </section>
`;
}

function buildStaffSection() {
  const staffCardsHtml = staffData.map((s, i) => `
  <div class="scard rv">
    <div class="scard-img-wrap">
      <img src="${s.photo}" alt="${s.name} - ${s.role}" class="scard-img" loading="lazy"
           onerror="this.onerror=null; this.src='images/teacher-placeholder.svg'">
      <div class="scard-num">#${String(i + 1).padStart(2, '0')}</div>
    </div>
    <div class="scard-body">
      <h3 class="scard-name">${s.name}</h3>
      <div class="scard-hi-name">${s.hindiName}</div>
      <div class="scard-role">${s.role}</div>
      <div class="srole-hi">${s.roleHi}</div>
      <div class="squal">${s.desc}</div>
      ${s.mob ? `
      <div class="scontact">
        <a href="tel:${s.mob}" class="scontact-link sphone">📞 ${s.mob}</a>
        <a href="https://wa.me/91${s.mob}" target="_blank" rel="noopener" class="scontact-link swhatsapp">💬 WhatsApp</a>
      </div>` : ''}
    </div>
  </div>
`).join('\n');

  return `
  <section id="staff">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleStaff">Support and Administrative Staff <span id="secSubStaff">The Backbone of Institutional Operations</span></h2>
      <p class="sec-subtitle" id="secDescStaff">Our dedicated office, security, laboratory, and sanitation personnel who keep our school running smoothly and safely each day.</p>

      <div class="sgrid">
        ${staffCardsHtml}
      </div>
    </div>
  </section>
`;
}

function buildContactSection() {
  return `
  <section id="contact">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleContact">Contact Us and Admissions <span id="secSubContact">We are Here to Assist Students and Parents</span></h2>
      <p class="sec-subtitle" id="secDescContact">Get in touch with the school administration for admissions, transfers, certificates, and academic inquiries.</p>

      <div class="contact-layout">
        <!-- Contact Information Cards -->
        <div class="cinfo-col rv">
          <div class="cinfo-card">
            <div class="cinfo-icon">📍</div>
            <div class="cinfo-text">
              <h4 id="ciTitle1">School Postal Address</h4>
              <p id="ciDesc1">
                <strong>P.M. Shri +2 High School, Barbigha</strong><br>
                Near Sri Babu Chowk / NH-82<br>
                Post Office: Barbigha, Police Station: Barbigha<br>
                District: Sheikhpura, Bihar — PIN: <strong>811101</strong><br>
                <em>UDISE Code: 10262907004</em>
              </p>
            </div>
          </div>

          <div class="cinfo-card">
            <div class="cinfo-icon">📞</div>
            <div class="cinfo-text">
              <h4 id="ciTitle2">Principal and Office Helpline</h4>
              <p>Principal In-Charge: <strong><a href="tel:9835017555">9835017555</a></strong></p>
              <p>Office Landline: <strong><a href="tel:06341295000">06341-295000</a></strong></p>
            </div>
          </div>

          <div class="cinfo-card">
            <div class="cinfo-icon">⏰</div>
            <div class="cinfo-text">
              <h4 id="ciTitle4">Affiliation and Timings</h4>
              <p>Classes and Office: <strong>9:30 AM – 4:00 PM</strong><br>Library and Book Bank: <strong>10:00 AM – 4:00 PM</strong><br>Working Days: Monday to Saturday</p>
              <p>Board: <strong>Bihar School Examination Board (BSEB, Patna)</strong></p>
            </div>
          </div>

          <!-- OFSS Admission Guidelines & Document Checklist from Brochure -->
          <div class="docs-list-box" style="margin-top: 24px;">
            <h4>📋 +2 OFSS Admission Guidelines and Document Checklist</h4>
            <p style="font-size: 0.85rem; color: #555; margin-bottom: 12px; line-height: 1.45;">
              Admission to Class 11 (Intermediate Science, Arts and Commerce) is conducted exclusively through Bihar School Examination Board's <strong>OFSS (Online Facilitation System for Students)</strong>. Prospectus and Annexure-1 form are available at the school office on working days.
            </p>
            <div style="font-weight: 700; color: var(--red); font-size: 0.88rem; margin-bottom: 8px;">
              Essential Documents to Submit with Annexure-1 (OFSS):
            </div>
            <div class="docs-list">
              <div class="doc-item">Original School/College Leaving Certificate (SLC/CLC)</div>
              <div class="doc-item">Self-attested photocopy of Matric (10th) Marksheet</div>
              <div class="doc-item">Photocopy of Matric (10th) Admit Card</div>
              <div class="doc-item">Photocopy of Matric Provisional Certificate</div>
              <div class="doc-item">Photocopy of Matric Registration Card</div>
              <div class="doc-item">Caste Certificate (for BC, EBC, SC, ST, EWS candidates)</div>
              <div class="doc-item">Photocopy of Student's Bank Account Passbook</div>
              <div class="doc-item">Photocopy of Student's Aadhaar Card</div>
              <div class="doc-item">Disability Certificate (for Divyang candidates)</div>
              <div class="doc-item">Original Migration Certificate (for students outside BSEB)</div>
              <div class="doc-item">3 to 5 Passport size photographs (name and address on back)</div>
            </div>
          </div>
        </div>

        <!-- Contact & Admission Form -->
        <div class="cform-col rv">
          <form class="contact-form" id="contactForm" onsubmit="event.preventDefault(); alert('धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। विद्यालय प्रशासन आपसे शीघ्र संपर्क करेगा।'); this.reset();">
            <h3 id="cfTitle">✉️ Online Admission and General Enquiry</h3>
            <p class="cform-desc" id="cfDesc">Fill in the details below for admission assistance or official inquiry. The school office will respond promptly.</p>

            <div class="form-group">
              <label for="cName">Student / Parent Name *</label>
              <input type="text" id="cName" required placeholder="Full Name">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="cMobile">Mobile Number *</label>
                <input type="tel" id="cMobile" required placeholder="10-digit mobile number">
              </div>
              <div class="form-group">
                <label for="cClass">Class and Stream *</label>
                <select id="cClass">
                  <option value="9">Class 9 (Secondary)</option>
                  <option value="10">Class 10 (Matric)</option>
                  <option value="11_sci">Class 11 (+2 Science I.Sc.)</option>
                  <option value="11_arts">Class 11 (+2 Arts I.A.)</option>
                  <option value="11_comm">Class 11 (+2 Commerce I.Com.)</option>
                  <option value="12_sci">Class 12 (+2 Science)</option>
                  <option value="12_arts">Class 12 (+2 Arts)</option>
                  <option value="12_comm">Class 12 (+2 Commerce)</option>
                  <option value="other">General Inquiry / Other</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="cMsg">Your Message / Query *</label>
              <textarea id="cMsg" rows="4" required placeholder="State your inquiry regarding admission, certificates, or school activities..."></textarea>
            </div>

            <button type="submit" class="submit-btn" id="btnSubmitEnquiry">🚀 Send Message (संदेश भेजें)</button>
          </form>

          <!-- Interactive Google Map -->
          <div class="map-wrapper" style="margin-top: 24px;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.467472491187!2d85.710777!3d25.207865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f28711e5927ad9%3A0xb35a3a78f2ec612a!2sBarbigha%2C%20Bihar%20811101!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="240" style="border:0; border-radius: var(--radius); display:block;"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              title="Google Map showing location of P.M. Shri +2 High School Barbigha">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
}

function buildEbooksSection() {
  const ebooksCardsHtml = ebooksData.map(b => `
  <div class="ebook-card rv" data-class="${b.classKey}" data-stream="${b.streamKey}">
    <div class="ebook-card-top">
      <div class="ebook-icon">${b.icon}</div>
      <div class="ebook-stream-badge">${b.streamBadge}</div>
    </div>
    <div class="ebook-body">
      <div class="ebook-class">${b.className}</div>
      <div class="ebook-title">${b.title}</div>
      <div class="ebook-desc">${b.desc}</div>
      <div class="ebook-actions">
        <button class="ebook-btn-read" onclick='openEbookModal(${JSON.stringify(b.title)}, ${JSON.stringify(b.className)}, ${JSON.stringify(b.streamBadge)}, ${JSON.stringify(b.desc)}, ${JSON.stringify(b.chapters)}, ${JSON.stringify(b.link)})'>
          📖 Read Chapters
        </button>
        <a href="${b.link}" target="_blank" rel="noopener" class="ebook-btn-dl" title="Download official textbook PDF from NCERT/BSTBPC portal">
          ⬇️ Official PDF
        </a>
      </div>
    </div>
  </div>
`).join('\n');

  return `
  <section id="ebooks">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleEbooks">Digital Library and eBooks <span id="secSubEbooks">Government Curriculum and Online Study Material</span></h2>
      <p class="sec-subtitle" id="secDescEbooks">Access official digitized curriculum textbooks for Class 9, 10, 11, and 12 (+2 Science, Arts, Commerce) free of cost under PM-SHRI digital initiative.</p>

      <!-- Digital Library Info Banner -->
      <div class="ebook-banner rv">
        <div class="ebook-banner-icon">📚</div>
        <div class="ebook-banner-text">
          <h3>Government Digital Curriculum and Student Book Bank</h3>
          <p>Read full chapters online or download official state textbooks (BSTBPC Patna and NCERT New Delhi) directly for free.</p>
        </div>
      </div>

      <!-- Class & Stream Filters -->
      <div class="ebook-filters rv">
        <button class="filter-btn ebook-filter-btn active" data-class="all">All Textbooks (${ebooksData.length})</button>
        <button class="filter-btn ebook-filter-btn" data-class="class9">Class 9 (BSEB)</button>
        <button class="filter-btn ebook-filter-btn" data-class="class10">Class 10 (Matric)</button>
        <button class="filter-btn ebook-filter-btn" data-class="class11">Class 11 (+2)</button>
        <button class="filter-btn ebook-filter-btn" data-class="class12">Class 12 (+2)</button>
        <button class="filter-btn ebook-filter-btn" data-class="science">Science Stream</button>
        <button class="filter-btn ebook-filter-btn" data-class="commerce">Commerce and Computer</button>
        <button class="filter-btn ebook-filter-btn" data-class="arts">Arts Stream</button>
      </div>

      <!-- eBooks Grid -->
      <div class="ebooks-grid" id="ebooksGrid">
        ${ebooksCardsHtml}
      </div>
    </div>
  </section>

  <!-- eBook Interactive Chapter Reader Modal -->
  <div id="ebookModal" class="ebook-modal" role="dialog" aria-modal="true" aria-labelledby="modalBookTitle">
    <div class="ebook-modal-content">
      <div class="ebook-modal-header">
        <div>
          <span id="modalBookBadge" class="ebook-stream-badge">NCERT / BSEB</span>
          <h3 id="modalBookTitle" style="font-family: 'Playfair Display', serif; color: var(--navy); margin-top: 6px; font-size: 1.25rem;">Book Title</h3>
          <div id="modalBookClass" style="font-size: 0.85rem; color: var(--gray);">Class Details</div>
        </div>
        <button class="ebook-modal-close" onclick="closeEbookModal()" aria-label="Close Book Details">✕</button>
      </div>
      <div class="ebook-modal-body">
        <p id="modalBookDesc" style="font-size: 0.9rem; color: #444; line-height: 1.6; margin-bottom: 16px;">Description</p>
        <h4 style="font-size: 0.92rem; color: var(--red); margin-bottom: 12px; font-weight: 700;">Key Chapters and Syllabi Covered:</h4>
        <ul id="modalChaptersList" class="modal-chapters-list"></ul>
      </div>
      <div class="ebook-modal-footer">
        <a id="modalDownloadBtn" href="#" target="_blank" rel="noopener" class="submit-btn" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
          ⬇️ Open Official NCERT/BSEB Text Portal
        </a>
      </div>
    </div>
  </div>
`;
}

function buildGallerySection() {
  return `
  <section id="gallery">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleGallery">Classroom Gallery <span id="secSubGallery">Campus Life and Learning Spaces</span></h2>
      <p class="sec-subtitle" id="secDescGallery">Visual glimpses of our academic classrooms, laboratories, sports meets, and ceremonial events.</p>

      <div class="gallery-empty-state rv">
        <div class="ges-icon">🖼️</div>
        <h3 class="ges-title">Classroom Gallery</h3>
        <p class="ges-desc">
          All photos have been removed from the classroom gallery as requested. New classroom and academic photographs will be updated here soon.
        </p>
        <div style="font-size: 0.82rem; color: var(--gray); margin-top: 10px;">
          (Photos of newly inaugurated PM-SHRI smart labs, library sessions, and science exhibitions will be uploaded following the upcoming academic semester).
        </div>
      </div>
    </div>
  </section>
`;
}

function buildHomeIndexSection() {
  return `
  <!-- HOME OVERVIEW HERO -->
  <section class="portal-section" style="padding-top: 36px;">
    <div class="section-container">
      
      <!-- Welcome Intro Box -->
      <div class="campus-highlight-card rv" style="margin-bottom: 36px;">
        <div class="ch-img-wrap">
          <img src="images/campus-main.jpg" onerror="this.src='images/campus/campus-main.jpg'" alt="Rashtrakavi Ramdhari Singh Dinkar Smriti Manch" class="ch-img">
          <div class="ch-caption">
            🏛️ राष्ट्रकवि रामधारी सिंह दिनकर स्मृति मंच — बरबीघा, शेखपुरा, बिहार
          </div>
        </div>
        <div class="ch-body">
          <div class="ch-tag">WELCOME TO OUR INSTITUTION</div>
          <h2 style="font-family: 'Playfair Display', serif; color: var(--navy); font-size: 1.6rem; margin-bottom: 10px;">
            P.M. Shri +2 High School, Barbigha
          </h2>
          <p style="color: var(--gray); line-height: 1.6; font-size: 0.92rem; margin-bottom: 16px;">
            Founded on <strong>3 January 1933</strong> by British Education Officer F.J. Fokes, with Rashtrakavi <strong>Ramdhari Singh 'Dinkar'</strong> as its legendary Founder Headmaster. Upgraded to Higher Secondary (+2) in 2010 with 573 approved seats across Science, Arts, and Commerce under BSEB Patna.
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="about.html" class="submit-btn" style="text-decoration:none; padding: 10px 18px; font-size: 0.88rem;">🏛️ Explore School Heritage</a>
            <a href="contact.html" class="filter-btn" style="text-decoration:none; padding: 10px 18px; font-size: 0.88rem;">📋 Admission Info</a>
          </div>
        </div>
      </div>

      <!-- Quick Stats Strip -->
      <div class="quick-stats-strip rv" style="border-radius: var(--radius); margin-bottom: 40px;">
        <div class="quick-stats-container">
          <div class="qstat-item">
            <div class="qstat-num">1933</div>
            <div class="qstat-lbl">Established Year</div>
          </div>
          <div class="qstat-item">
            <div class="qstat-num">573</div>
            <div class="qstat-lbl">+2 Approved Seats</div>
          </div>
          <div class="qstat-item">
            <div class="qstat-num">25+</div>
            <div class="qstat-lbl">BPSC TRE Faculty</div>
          </div>
          <div class="qstat-item">
            <div class="qstat-num">23</div>
            <div class="qstat-lbl">Principals Lineage</div>
          </div>
          <div class="qstat-item">
            <div class="qstat-num">PM-SHRI</div>
            <div class="qstat-lbl">Central Model School</div>
          </div>
        </div>
      </div>

      <!-- 8 NAVIGATION PORTAL CARDS -->
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 class="sec-title">Explore School Options <span>हमारे विद्यालय के मुख्य अनुभाग</span></h2>
        <p class="sec-subtitle">Choose any of the 8 dedicated sections below to view complete details, guidelines, faculty, and resources.</p>
      </div>

      <div class="portal-grid">
        <!-- 1. ABOUT -->
        <a href="about.html" class="portal-card rv">
          <div class="portal-icon">🏛️</div>
          <div class="portal-title">
            About Our School
            <span class="portal-hi">विद्यालय परिचय एवं इतिहास</span>
          </div>
          <div class="portal-desc">
            90+ years of academic excellence, founders (F.J. Fokes, Dinkar Ji, Lala Babu), 573 +2 stream capacities, official school uniform, code of conduct, and timings.
          </div>
          <div class="portal-btn">Open About Page ➔</div>
        </a>

        <!-- 2. CAMPUS -->
        <a href="campus.html" class="portal-card rv">
          <div class="portal-icon">🏫</div>
          <div class="portal-title">
            School Campus
            <span class="portal-hi">परिसर एवं सुविधाएं</span>
          </div>
          <div class="portal-desc">
            Dinkar Smriti Manch, 8 official facilities: Science and Geography Labs, Unnayan Smart Classes, Central Library, Handball Camp and Gym, NCC Platoons, and Eco Park.
          </div>
          <div class="portal-btn">Open Campus Page ➔</div>
        </a>

        <!-- 3. PRINCIPAL -->
        <a href="principal.html" class="portal-card rv">
          <div class="portal-icon">🎓</div>
          <div class="portal-title">
            Principal's Desk
            <span class="portal-hi">प्रधानाचार्य कक्ष एवं संदेश</span>
          </div>
          <div class="portal-desc">
            Principal Sanjay Kumar's welcome message (*संदेश*), official credentials, contact numbers, and the historic Roll of Honor (उत्तराधिकारी पद) of 23 Principals.
          </div>
          <div class="portal-btn">Open Principal Page ➔</div>
        </a>

        <!-- 4. TEACHERS -->
        <a href="teachers.html" class="portal-card rv">
          <div class="portal-icon">👨‍🏫</div>
          <div class="portal-title">
            Teaching Faculty
            <span class="portal-hi">शिक्षक संकाय (25 शिक्षक)</span>
          </div>
          <div class="portal-desc">
            Complete directory of 25 qualified teachers appointed by BPSC TRE with degrees, subject specializations, live search, filters, and direct contact numbers.
          </div>
          <div class="portal-btn">Open Teachers Page ➔</div>
        </a>

        <!-- 5. STAFF -->
        <a href="staff.html" class="portal-card rv">
          <div class="portal-icon">👥</div>
          <div class="portal-title">
            Support Staff
            <span class="portal-hi">सहायक एवं कार्यालय कर्मचारी</span>
          </div>
          <div class="portal-desc">
            Dedicated administrative team, Head Clerk Diwakar Kumar Pandey, laboratory assistants, attendants, and night security guard profiles and contacts.
          </div>
          <div class="portal-btn">Open Staff Page ➔</div>
        </a>

        <!-- 6. CONTACT & ADMISSIONS -->
        <a href="contact.html" class="portal-card rv">
          <div class="portal-icon">📞</div>
          <div class="portal-title">
            Contact and Admissions
            <span class="portal-hi">संपर्क एवं +2 नामांकन</span>
          </div>
          <div class="portal-desc">
            BSEB OFSS +2 Admission guidelines, 11-point essential document checklist, daily timings, interactive enquiry form, helplines, and Google Map.
          </div>
          <div class="portal-btn">Open Contact Page ➔</div>
        </a>

        <!-- 7. EBOOKS -->
        <a href="ebooks.html" class="portal-card rv">
          <div class="portal-icon">📚</div>
          <div class="portal-title">
            Digital Library and eBooks
            <span class="portal-hi">ई-बुक्स एवं डिजिटल पुस्तकें</span>
          </div>
          <div class="portal-desc">
            Free state curriculum textbooks for Class 9, 10, 11, and 12 (+2 Science, Arts, Commerce), chapter syllabus breakdowns, and NCERT / BSTBPC downloads.
          </div>
          <div class="portal-btn">Open eBooks Page ➔</div>
        </a>

        <!-- 8. CLASSROOM GALLERY -->
        <a href="gallery.html" class="portal-card rv">
          <div class="portal-icon">🖼️</div>
          <div class="portal-title">
            Classroom Gallery
            <span class="portal-hi">कक्षा दीर्घा एवं फोटो संग्रह</span>
          </div>
          <div class="portal-desc">
            Clean gallery section reflecting the current status, awaiting fresh academic and laboratory photographs for the upcoming session.
          </div>
          <div class="portal-btn">Open Gallery Page ➔</div>
        </a>
      </div>

    </div>
  </section>
`;
}

// ── 4. COMPILE AND WRITE ALL 9 PAGES ──

const pages = [
  {
    fileName: 'index.html',
    activeNav: 'home',
    title: 'P.M. Shri +2 High School, Barbigha | Official Portal',
    desc: 'Official website of P.M. Shri +2 High School, Barbigha, District Sheikhpura, Bihar - UDISE: 10262907004. Established 1933. Browse About, Campus, Principal, Teachers, Staff, Contact, eBooks, and Classroom Gallery.',
    breadcrumb: '',
    content: buildHomeIndexSection()
  },
  {
    fileName: 'about.html',
    activeNav: 'about',
    title: 'About Our School',
    desc: 'Heritage, founding history by F.J. Fokes and Dinkar Ji, approved stream capacities, official school uniforms, and code of conduct at P.M. Shri +2 High School Barbigha.',
    breadcrumb: 'About Our School',
    content: buildAboutSection()
  },
  {
    fileName: 'campus.html',
    activeNav: 'campus',
    title: 'School Campus and Facilities',
    desc: 'Explore the historic Ramdhari Singh Dinkar Smriti Manch, integrated science and geography labs, Unnayan smart classes, library book bank, handball camp, and NCC wings.',
    breadcrumb: 'School Campus',
    content: buildCampusSection()
  },
  {
    fileName: 'principal.html',
    activeNav: 'principal',
    title: "Principal's Desk and Succession Roll of Honor",
    desc: 'Official message from In-Charge Principal Sanjay Kumar and the complete succession list of 23 Principals of Barbigha High School since 1933.',
    breadcrumb: "Principal's Desk",
    content: buildPrincipalSection()
  },
  {
    fileName: 'teachers.html',
    activeNav: 'teachers',
    title: 'Teaching Faculty Directory',
    desc: 'Complete list of 25 qualified teachers appointed by BPSC TRE and Education Department at P.M. Shri +2 High School Barbigha with qualifications and contact info.',
    breadcrumb: 'Teaching Faculty',
    content: buildTeachersSection()
  },
  {
    fileName: 'staff.html',
    activeNav: 'staff',
    title: 'Support and Administrative Staff',
    desc: 'Meet our office head clerk, laboratory assistants, campus attendants, and security personnel supporting P.M. Shri +2 High School Barbigha.',
    breadcrumb: 'Support Staff',
    content: buildStaffSection()
  },
  {
    fileName: 'contact.html',
    activeNav: 'contact',
    title: 'Contact Us and OFSS Admissions',
    desc: 'OFSS Bihar Class 11 admission rules, 11-point required documents checklist, school office timings, helplines, online inquiry form, and location map.',
    breadcrumb: 'Contact and Admissions',
    content: buildContactSection()
  },
  {
    fileName: 'ebooks.html',
    activeNav: 'ebooks',
    title: 'Digital Library and eBooks',
    desc: 'Read online and download free state and NCERT digital curriculum textbooks for Class 9, 10, 11, and 12 (+2 Science, Arts, Commerce).',
    breadcrumb: 'Digital Library and eBooks',
    content: buildEbooksSection()
  },
  {
    fileName: 'gallery.html',
    activeNav: 'gallery',
    title: 'Classroom Gallery',
    desc: 'Classroom gallery of P.M. Shri +2 High School Barbigha.',
    breadcrumb: 'Classroom Gallery',
    content: buildGallerySection()
  }
];

const targetDir = 'd:\\high2.0';

pages.forEach(p => {
  activeNav = p.activeNav;
  const fullHtml = renderHead(p.title, p.desc) + renderBreadcrumb(p.breadcrumb) + p.content + renderFooter();
  const filePath = path.join(targetDir, p.fileName);
  fs.writeFileSync(filePath, fullHtml, 'utf8');
  console.log(`Generated: ${p.fileName} (${fullHtml.length} bytes)`);
});

console.log('\nAll 9 website pages successfully generated!');
