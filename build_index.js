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

// Succession List of 23 Headmasters & Principals (1933 to Present)
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

// Official Campus Facilities & Student Clubs from School Brochure
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

// +2 Stream Capacities from Brochure Page 1
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
  },
  {
    className: 'Class 12 (+2)',
    classKey: 'class12',
    streamBadge: 'BSEB +2 English',
    streamKey: 'languages',
    icon: '📜',
    title: 'Rainbow Part-2 (English) — Class 12 (+2)',
    desc: 'Bihar Board +2 Intermediate English core textbook with seminal works by Mahatma Gandhi, Dr. Zakir Hussain, Martin Luther King Jr., Bertrand Russell, and modern English poets.',
    chapters: ['Prose 1: Indian Civilization and Culture (M.K. Gandhi)', 'Prose 2: Bharat is My Home (Dr. Zakir Hussain)', 'Prose 3: A Pinch of Snuff (Manohar Malgaonkar)', 'Prose 4: I Have a Dream (Martin Luther King Jr.)', 'Prose 5: Ideas that have Helped Mankind (Bertrand Russell)', 'Poetry 1: Sweetest Love I Do Not Goe (John Donne)', 'Poetry 2: Song of Myself (Walt Whitman)', 'Poetry 3: Now the Leaves are Falling Fast'],
    link: 'http://bstbpc.gov.in/'
  }
];

// Generate Teachers HTML
const teachersHtml = teachersData.map(t => `
    <div class="tcard rv" data-category="${t.category}" data-name="${t.name.toLowerCase()} ${t.subj.toLowerCase()}">
      <div class="tpwrap">
        <img class="tphoto" src="${t.photo}" alt="${t.name} - ${t.subj}" loading="lazy">
        <span class="tsubj-badge">${t.subj}</span>
      </div>
      <div class="tinfo">
        <div class="tname">${t.name}</div>
        <div class="ten-sub">${t.hindiName}</div>
        <div class="tqual">${t.qual}</div>
        ${t.mob ? `<a class="tphone" href="tel:${t.mob}">📞 ${t.mob}</a>` : '<div class="tphone-empty">School Campus Faculty</div>'}
      </div>
    </div>
`).join('\n');

// Generate Staff HTML
const staffHtml = staffData.map(s => `
    <div class="scard rv">
      <div class="spwrap">
        <img class="sphoto" src="${s.photo}" alt="${s.name}" loading="lazy">
      </div>
      <div class="sinfo">
        <div class="sname">${s.name}</div>
        <div class="ten-sub">${s.hindiName}</div>
        <span class="srole">${s.role}</span>
        <div class="squal">${s.desc}</div>
        ${s.mob ? `<a class="sphone" href="tel:${s.mob}">📞 ${s.mob}</a>` : ''}
      </div>
    </div>
`).join('\n');

// Generate eBooks HTML
const ebooksHtml = ebooksData.map(b => {
  const chaptersJson = JSON.stringify(b.chapters).replace(/"/g, '&quot;');
  return `
    <div class="ebook-card rv" data-class="${b.classKey}" data-stream="${b.streamKey}">
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

// Generate Succession Tables (Left 1–12, Right 13–23)
const principalsTableLeft = principalsData.slice(0, 12).map(p => `
  <tr>
    <td class="succ-sno">${p.sNo}</td>
    <td class="succ-name">
      ${p.name}
      ${p.note ? `<br><span class="badge-dinkar">${p.note}</span>` : ''}
    </td>
    <td>${p.role}</td>
    <td class="succ-tenure">${p.period}</td>
  </tr>
`).join('\n');

const principalsTableRight = principalsData.slice(12).map(p => `
  <tr>
    <td class="succ-sno">${p.sNo}</td>
    <td class="succ-name">
      ${p.name}
      ${p.sNo === '23' ? `<br><span class="badge-current">${p.note}</span>` : (p.note ? `<br><span class="badge-dinkar">${p.note}</span>` : '')}
    </td>
    <td>${p.role}</td>
    <td class="succ-tenure">${p.period}</td>
  </tr>
`).join('\n');

// Generate Official Facilities HTML
const facilitiesHtml = officialFacilities.map(f => `
  <div class="facility-box rv">
    <div class="facility-head">
      <div class="facility-icon-wrap">${f.icon}</div>
      <div class="facility-titles">
        <h4>${f.title}</h4>
        <span class="facility-hi">${f.titleHi}</span>
      </div>
    </div>
    <p class="facility-desc">${f.desc}</p>
  </div>
`).join('\n');

// Generate Seat Capacities HTML
const seatsHtml = seatCapacities.map(s => `
  <div class="seat-card rv">
    <div class="seat-icon">${s.icon}</div>
    <div class="seat-stream">${s.stream}</div>
    <div class="seat-count">${s.seats}</div>
    <div class="seat-sub">Approved Seats (स्वीकृत सीटें)</div>
    <p class="seat-desc">${s.desc}</p>
  </div>
`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#8B0000">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="format-detection" content="telephone=no">
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
      <div class="hsub" id="hdrPin">P.O. and P.S. Barbigha, PIN: 811101 — Affiliated to BSEB Patna</div>
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
      <span class="nav-brand-mobile">🏫 Barbigha High School</span>
      <button class="nav-toggle-btn" id="navToggle" aria-label="Toggle Navigation Menu">
        <span>☰</span> <span>Menu</span>
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
          <h3 id="acardTitle1">🏫 School Heritage, Founders and Background</h3>
          <p id="acardDesc1">
            P.M. Shri +2 High School, Barbigha was established in <strong>1933</strong> by British Education Officer <strong>F.J. Fokes (एफ० जे० फोकस)</strong>. The institution's illustrious Founder Headmaster was revered national poet <strong>Rashtrakavi Shri Ramdhari Singh 'Dinkar'</strong>, whose dedication laid a world-class academic foundation.
          </p>
          <p style="margin-top: 10px; font-size: 0.9rem; color: #444;">
            Visionary leaders including Founder Secretary <strong>Babu Ram Krishna Singh</strong> (elder brother of Bihar's first Chief Minister Bihar Kesari Dr. Shri Krishna Singh), <strong>Shri Shivnandan Babu</strong> (Khetalpura), and renowned freedom fighter and Jan-Nayak <strong>Shri Krishna Mohan Pyare Singh alias 'Lala Babu'</strong> (regarded as the father of university education in Bihar) steered its growth. Former Headmaster <strong>Shri Jagdish Sharma</strong> served twice as Member of the Bihar Legislative Council (MLC) and President of the Secondary Teachers Association.
          </p>
        </div>

        <div class="acard">
          <h3 id="acardTitle2">📊 Institutional Overview and Upgradation</h3>
          <ul id="acardList2">
            <li><strong>Date of Foundation:</strong> 3 January 1933 (Inaugurated by F.J. Fokes)</li>
            <li><strong>Founder Headmaster:</strong> Rashtrakavi Ramdhari Singh 'Dinkar' (1933–1934)</li>
            <li><strong>State Government Approval:</strong> January 1937</li>
            <li><strong>+2 Upgrade and BSEB Code:</strong> Upgraded 2010 | BSEB Code Allotted 2011</li>
            <li><strong>UDISE Registration:</strong> 10262907004</li>
            <li><strong>Co-educational Status:</strong> Full Co-education from Class 9 to 12</li>
            <li><strong>Total +2 Approved Capacity:</strong> 573 Seats (Science, Arts and Commerce)</li>
            <li><strong>School Timings:</strong> 9:30 AM to 4:00 PM (Monday to Saturday)</li>
          </ul>
        </div>

        <div class="acard">
          <h3 id="acardTitle3">🎯 Mission, Vision and Student Achievements</h3>
          <p id="acardDesc3">
            To provide equitable, modern, and value-based education utilizing contemporary pedagogical techniques that empower youth from all socio-economic backgrounds.
          </p>
          <p style="margin-top: 10px; font-size: 0.9rem; color: #444;">
            Students of this institution consistently achieve <strong>Top 10 State Board rankings</strong> every year. Alumni have distinguished themselves in the Indian Administrative Service (IAS), Indian Police Service (IPS), medical sciences, engineering, and represented the state and nation at national and international sports and cultural convocations.
          </p>
        </div>

        <div class="acard">
          <h3 id="acardTitle4">🏆 Co-Curricular and Institutional Specialities</h3>
          <ul id="acardList4">
            <li><strong>Rashtrakavi Dinkar Smriti Manch:</strong> Open-air memorial stage honoring the Founder Headmaster.</li>
            <li><strong>District Handball Training Camp:</strong> Official district training center and equipped gymnasium.</li>
            <li><strong>Junior Division N.C.C.:</strong> Two approved platoons for student cadet training.</li>
            <li><strong>Central Library and Book Bank:</strong> Free session textbook lending for needy and meritorious students.</li>
            <li><strong>Unnayan Bihar Smart Classes:</strong> Digital smart interactive classroom modules.</li>
            <li><strong>Legal Literacy Club and Eco Club:</strong> Constitutional literacy and campus eco park conservation.</li>
          </ul>
        </div>
      </div>

      <!-- +2 Stream Seat Capacities -->
      <div style="margin-top: 40px;" class="rv">
        <h3 style="font-family: 'Playfair Display', 'Tiro Devanagari Hindi', serif; color: var(--red); font-size: 1.35rem; text-align: center; margin-bottom: 6px;">
          📚 Approved Intermediate (+2) Stream Capacities (सीटों का विवरण)
        </h3>
        <p style="text-align: center; color: var(--gray); font-size: 0.9rem; max-width: 720px; margin: 0 auto 20px;">
          Official approved enrollment seats for Class 11 and 12 under Bihar School Examination Board (BSEB, Patna).
        </p>
        <div class="seats-grid">
          ${seatsHtml}
        </div>
      </div>

      <!-- Official School Uniform (विद्यालय पोशाक) -->
      <div style="margin-top: 40px;" class="rv">
        <h3 style="font-family: 'Playfair Display', 'Tiro Devanagari Hindi', serif; color: var(--red); font-size: 1.35rem; text-align: center; margin-bottom: 6px;">
          👔 Official School Uniform (विद्यालय पोशाक)
        </h3>
        <p style="text-align: center; color: var(--gray); font-size: 0.9rem; max-width: 720px; margin: 0 auto 16px;">
          All students must attend school in prescribed clean and proper institutional uniform as detailed in the official handbook.
        </p>

        <div class="uniform-container">
          <div class="uniform-card summer">
            <div class="uniform-season-title">☀️ Summer Season (गर्मी का मौसम)</div>
            <div class="uniform-group">
              <strong>👦 For Boys (छात्रों के लिए):</strong>
              <p>आसमानी रंग की कमीज, नेवी ब्लू पैंट, उजला जूता एवं उजला मोजा।<br>(Sky blue shirt, Navy blue trousers, White shoes and white socks).</p>
            </div>
            <div class="uniform-group">
              <strong>👧 For Girls (छात्राओं के लिए):</strong>
              <p>समीज, कमीज, नेवी ब्लू सलवार, नेवी ब्लू दुपट्टा / आसमानी कमीज, नेवी ब्लू स्कर्ट, उजला जूता, उजला मोजा एवं सफेद रिबन / हेयर बैंड।<br>(Sky blue shirt/salwar-kameez, Navy blue salwar/skirt, Navy dupatta, White shoes and socks, White ribbon/hairband).</p>
            </div>
          </div>

          <div class="uniform-card winter">
            <div class="uniform-season-title">❄️ Winter Season (ठंड का मौसम)</div>
            <div class="uniform-group">
              <strong>👦 For Boys (छात्रों के लिए):</strong>
              <p>आसमानी रंग की कमीज, नेवी ब्लू पैंट, उजला जूता एवं उजला मोजा, मैरून स्वेटर एवं मफलर।<br>(Sky blue shirt, Navy blue trousers, White shoes and socks, Maroon sweater and muffler).</p>
            </div>
            <div class="uniform-group">
              <strong>👧 For Girls (छात्राओं के लिए):</strong>
              <p>आसमानी समीज/कमीज, नेवी ब्लू सलवार/स्कर्ट, नेवी ब्लू दुपट्टा, उजला जूता एवं उजला मोजा, सफेद रिबन/हेयर बैंड एवं मैरून स्वेटर एवं मफलर।<br>(Sky blue salwar-kameez/skirt, Navy dupatta, White shoes and socks, White ribbon/hairband, Maroon sweater and muffler).</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Student Code of Conduct & Parent Advisory -->
      <div class="rules-grid rv">
        <div class="rules-card">
          <h4>📜 Key Rules for Students (विद्यार्थियों के नियम)</h4>
          <ul>
            <li><strong>75% Mandatory Attendance:</strong> 75% attendance in lectures is compulsory to be eligible for Sent-up and Board examinations.</li>
            <li><strong>Identity Card:</strong> Every student must carry the official Principal-signed Identity Card inside the school campus at all times.</li>
            <li><strong>Morning Assembly (चेतना सत्र):</strong> Active and orderly participation in daily morning assembly is mandatory for all students.</li>
            <li><strong>Campus Discipline:</strong> Leaving campus without written permission during school hours or causing disturbance is strictly prohibited.</li>
            <li><strong>Zero Substance Abuse:</strong> Absolute zero tolerance for intoxicants or disruptive behavior within institutional premises.</li>
          </ul>
        </div>

        <div class="rules-card">
          <h4>🤝 Advice for Parents and Guardians (अभिभावकों के लिए निर्देश)</h4>
          <ul>
            <li><strong>PTA Meetings:</strong> Parents are requested to regularly attend Teacher-Parent Convocations to review academic progress.</li>
            <li><strong>Notebooks and Test Monitoring:</strong> Regularly examine and countersign teachers' remarks, homework, and monthly class test copies.</li>
            <li><strong>Punctuality and Uniform:</strong> Ensure students arrive on time (9:30 AM) in proper clean uniform and with daily timetable books.</li>
            <li><strong>Timely Updates:</strong> Immediately notify the school office regarding any change of residential address or contact mobile number.</li>
            <li><strong>Campus Protocol:</strong> Parents and visitors are not permitted to enter classrooms directly during class teaching hours.</li>
          </ul>
        </div>
      </div>

      <!-- About Statistics -->
      <div class="about-stats rv" style="margin-top: 40px;">
        <div class="stat-box">
          <div class="stat-num">1933</div>
          <div class="stat-label" id="statLbl1">Foundation Year (F.J. Fokes)</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">90+</div>
          <div class="stat-label" id="statLbl2">Years of Academic Service</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">573</div>
          <div class="stat-label">Total +2 Approved Seats</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">23</div>
          <div class="stat-label">Succession of Principals</div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 2: CAMPUS
  ═════════════════════════════════════════════════════════════════ -->
  <section id="campus">
    <div class="section-container">
      <h2 class="sec-title" id="secTitleCampus">School Campus <span id="secSubCampus">Infrastructure and Academic Environment</span></h2>
      <p class="sec-subtitle" id="secDescCampus">
        A sprawling, green, and historically significant campus situated along NH-82 in Barbigha, equipped with modern learning infrastructure, athletic facilities, and specialized student training councils.
      </p>

      <div class="campus-hero-box rv">
        <img src="images/campus/campus-main.jpg" alt="Rashtrakavi Ramdhari Singh Dinkar Smriti Manch, Barbigha High School Campus">
        <div class="campus-cap" id="campusCap">
          🏛️ राष्ट्रकवि रामधारी सिंह दिनकर स्मृति मंच — बरबीघा, शेखपुरा, बिहार
        </div>
      </div>

      <!-- Official Campus Facilities & Student Councils from Brochure -->
      <div style="margin-top: 44px;" class="rv">
        <h3 style="font-family: 'Playfair Display', 'Tiro Devanagari Hindi', serif; color: var(--gold-light); font-size: 1.45rem; text-align: center; margin-bottom: 8px;">
          🏛️ Official Campus Facilities and Student Councils (विद्यालय सुविधाएं एवं परिषद)
        </h3>
        <p style="text-align: center; color: #aeb9c7; font-size: 0.92rem; max-width: 760px; margin: 0 auto 24px;">
          Documented facilities supporting academic excellence, scientific experimentation, sports, leadership, and cultural enrichment.
        </p>

        <div class="facilities-grid">
          ${facilitiesHtml}
        </div>
      </div>

    </div>
  </section>

  <!-- ═════════════════════════════════════════════════════════════════
       OPTION 3: PRINCIPAL
  ═════════════════════════════════════════════════════════════════ -->
  <section id="principal">
    <div class="section-container">
      <h2 class="sec-title" id="secTitlePrincipal">Principal's Desk <span id="secSubPrincipal">Leadership and Vision</span></h2>
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

        <!-- Principal's Desk Message (Authentic text from School Brochure) -->
        <div class="principal-message-box">
          <h3 id="prMsgTitle">📜 Welcome Message from the Principal (प्रधानाचार्य का संदेश)</h3>
          <p id="prMsgP1">
            Dear Students, Parents, and Respected Citizens of Barbigha,<br>
            +2 उच्च विद्यालय, बरबीघा की स्थापना 1933 ई० में अंग्रेज शिक्षाधिकारी <strong>एफ० जे० फोकस</strong> के द्वारा की गयी और इस विद्यालय के संस्थापक प्रधानाध्यापक के तौर पर <strong>राष्ट्रकवि श्री रामधारी सिंह 'दिनकर'</strong> की नियुक्ति की गई। अपने स्थापना के समय से ही, सीमित संसाधनों के होते हुए भी, इस विद्यालय ने माध्यमिक एवं उच्च माध्यमिक स्तर के अध्ययन एवं अध्यापन की उत्कृष्ट व्यवस्था की है।
          </p>
          <div class="principal-quote" id="prQuote">
            "हम शिक्षण की आधुनिक तकनीकों के प्रयोग से विद्यार्थियों के सर्वांगीण विकास के साथ-साथ गुणवत्तापूर्ण शिक्षा प्रदान करने का वादा करते हैं, ताकि आपका बच्चा देश का समर्थ एवं मूल्यवान धरोहर बन सके।"
          </div>
          <p id="prMsgP2">
            2010 ई० में इस विद्यालय का उत्क्रमण उच्चतर माध्यमिक विद्यालय के रूप में हुआ तथा 2011 ई० में बिहार विद्यालय परीक्षा समिति, पटना द्वारा कोड आवंटित किया गया। आज भारत सरकार की महत्वाकांक्षी <strong>PM-SHRI (PM Schools for Rising India)</strong> योजना के अंतर्गत यह विद्यालय आधुनिक स्मार्ट क्लास, कम्प्यूटर एवं एकीकृत विज्ञान प्रयोगशालाओं, सुसज्जित समृद्ध पुस्तकालय (बुक बैंक), एन.सी.सी. एवं जिला हैंडबॉल प्रशिक्षण शिविर से सुसज्जित है।
          </p>
          <p id="prMsgP3">
            अपने अतीत से प्रेरणा लेते हुए +2 उच्च विद्यालय, बरबीघा नई ऊँचाइयों को छूना चाहता है। अतः इस विद्यालय के कार्यक्रमों को सफल बनाने में हम इस क्षेत्र के सभी प्रबुद्ध नागरिकों एवं बुद्धिजीवियों के सक्रिय सहयोग की अपेक्षा करते हैं।
          </p>
          <div style="margin-top: 24px; font-weight: 700; color: var(--red);">
            — संजय कुमार (Sanjay Kumar)<br>
            <span style="font-weight: normal; font-size: 0.88rem; color: var(--gray);">प्रभारी प्रधानाचार्य (Acting Principal), P.M. Shri +2 High School, Barbigha, Sheikhpura (Bihar)</span>
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
          <!-- Left Table (01 to 12) -->
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
                ${principalsTableLeft}
              </tbody>
            </table>
          </div>

          <!-- Right Table (13 to 23) -->
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
                ${principalsTableRight}
              </tbody>
            </table>
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
      <h2 class="sec-title" id="secTitleTeachers">Our Teaching Faculty <span id="secSubTeachers">Dedicated Educators and Mentors</span></h2>
      <p class="sec-subtitle" id="secDescTeachers">
        Meet our qualified faculty members holding postgraduate, doctoral, and professional teaching credentials (Ph.D., M.Sc., M.A., B.Ed., M.Ed., M.C.A., BPSC TRE-1).
      </p>

      <!-- Teacher Filters & Search -->
      <div class="filter-controls rv">
        <div class="filter-tabs" id="teacherFilterTabs">
          <button class="filter-btn t-filter-btn active" data-filter="all">All Teachers</button>
          <button class="filter-btn t-filter-btn" data-filter="science">Science and Maths</button>
          <button class="filter-btn t-filter-btn" data-filter="social">Social Sciences</button>
          <button class="filter-btn t-filter-btn" data-filter="languages">Languages</button>
          <button class="filter-btn t-filter-btn" data-filter="commerce_comp">Computer and Commerce</button>
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
        <!-- Contact Information Cards -->
        <div class="contact-info-cards">
          <div class="cgrid">
            <div class="ci-card">
              <div class="ci-icon">📍</div>
              <h4 id="ciTitle1">Official Address</h4>
              <p>P.M. Shri +2 High School<br>NH-82, Barbigha, District Sheikhpura<br>Bihar, PIN: 811101</p>
            </div>
            <div class="ci-card">
              <div class="ci-icon">📞</div>
              <h4 id="ciTitle2">Principal and Office Helpline</h4>
              <p><a href="tel:9835017555">9835017555</a><br>Acting Principal: Sanjay Kumar<br>Mon–Sat: 9:30 AM – 4:00 PM</p>
            </div>
            <div class="ci-card">
              <div class="ci-icon">📋</div>
              <h4 id="ciTitle3">UDISE Registration</h4>
              <p>UDISE Code: <strong>10262907004</strong><br>BSEB Patna Affiliated<br>PM-SHRI Recognized School</p>
            </div>
            <div class="ci-card">
              <div class="ci-icon">⏰</div>
              <h4 id="ciTitle4">School Working Hours</h4>
              <p>Classes and Office: <strong>9:30 AM – 4:00 PM</strong><br>Library and Book Bank: <strong>10:00 AM – 4:00 PM</strong><br>Working Days: Monday to Saturday</p>
            </div>
          </div>

          <!-- OFSS Admission Guidelines & Document Checklist from Brochure -->
          <div style="margin-top: 24px; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(212, 160, 23, 0.35); border-radius: var(--radius-md); padding: 22px 20px;">
            <h4 style="color: var(--gold-light); font-size: 1.15rem; margin-bottom: 8px; font-family: 'Playfair Display', 'Tiro Devanagari Hindi', serif;">
              📋 +2 Senior Secondary Admission Guidelines (OFSS Bihar)
            </h4>
            <p style="color: #cbd5e1; font-size: 0.86rem; line-height: 1.6; margin-bottom: 14px;">
              Admission to Class 11 (Intermediate Science, Arts and Commerce) is conducted exclusively through Bihar School Examination Board's <strong>OFSS (Online Facilitation System for Students)</strong>. Prospectus and Annexure-1 form are available at the school office on working days.
            </p>
            <h5 style="color: var(--saffron-light); font-size: 0.88rem; margin-bottom: 8px; font-weight: 700;">
              Required Documents for Admission (नामांकन हेतु आवश्यक कागजात):
            </h5>
            <div class="docs-list">
              <div class="doc-item">School/College Leaving Certificate (Original SLC/CLC)</div>
              <div class="doc-item">Matric Marksheet (Self-attested copy)</div>
              <div class="doc-item">Matric Admit Card (Self-attested copy)</div>
              <div class="doc-item">Matric Provisional Certificate (Self-attested copy)</div>
              <div class="doc-item">Matric Registration Slip (Self-attested copy)</div>
              <div class="doc-item">Caste Certificate (BC/EBC/SC/ST/EWS, if applicable)</div>
              <div class="doc-item">Student Bank Passbook photocopy</div>
              <div class="doc-item">Student Aadhaar Card photocopy</div>
              <div class="doc-item">Disability Certificate (for PwD candidates)</div>
              <div class="doc-item">Migration Certificate (Original, for non-BSEB students)</div>
              <div class="doc-item">3 to 5 Passport size photographs (name and address on back)</div>
            </div>
          </div>
        </div>

        <!-- Contact Enquiry Form -->
        <div class="contact-form-card">
          <h3 id="cfTitle">✉️ Online Admission and General Enquiry</h3>
          <p id="cfDesc">Please fill out your details below. The school administration will respond promptly.</p>
          <form id="contactForm" onsubmit="handleContactSubmit(event)">
            <div class="form-group">
              <label for="cName">Student / Parent Name *</label>
              <input type="text" id="cName" required placeholder="Enter full name">
            </div>
            <div class="form-group">
              <label for="cPhone">Mobile Contact Number *</label>
              <input type="tel" id="cPhone" required placeholder="Enter 10-digit mobile number">
            </div>
            <div class="form-group">
              <label for="cClass">Class and Stream *</label>
              <select id="cClass" required>
                <option value="">-- Select Class / Stream --</option>
                <option value="Class 9">Class 9 (Secondary)</option>
                <option value="Class 10">Class 10 (Secondary)</option>
                <option value="+2 Science">+2 Science (I.Sc. - 333 Seats)</option>
                <option value="+2 Arts">+2 Arts (I.A. - 120 Seats)</option>
                <option value="+2 Commerce">+2 Commerce (I.Com. - 120 Seats)</option>
                <option value="General Information">General Institutional Information</option>
              </select>
            </div>
            <div class="form-group">
              <label for="cMsg">Your Query / Message *</label>
              <textarea id="cMsg" rows="4" required placeholder="Write your question, admission inquiry, or certificate request..."></textarea>
            </div>
            <button type="submit" class="btn-submit" id="btnSubmitEnquiry">
              🚀 Submit Enquiry
            </button>
            <div id="formFeedback" class="form-feedback"></div>
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
        <div class="ebooks-header-icon">📖</div>
        <div class="ebooks-header-text">
          <h3>Government Digital Curriculum and Student Book Bank</h3>
          <p>Read full chapters online or download official state textbooks (BSTBPC Patna and NCERT New Delhi) directly for free.</p>
        </div>
      </div>

      <!-- eBooks Filters -->
      <div class="filter-controls rv" style="margin-bottom: 28px;">
        <div class="filter-tabs" id="ebookFilterTabs">
          <button class="filter-btn ebook-filter-btn active" data-class="all">All Textbooks</button>
          <button class="filter-btn ebook-filter-btn" data-class="class9">Class 9</button>
          <button class="filter-btn ebook-filter-btn" data-class="class10">Class 10</button>
          <button class="filter-btn ebook-filter-btn" data-class="class11">Class 11 (+2)</button>
          <button class="filter-btn ebook-filter-btn" data-class="class12">Class 12 (+2)</button>
          <button class="filter-btn ebook-filter-btn" data-class="science">Science</button>
          <button class="filter-btn ebook-filter-btn" data-class="commerce">Commerce and Computer</button>
          <button class="filter-btn ebook-filter-btn" data-class="arts">Arts</button>
          <button class="filter-btn ebook-filter-btn" data-class="languages">Languages</button>
        </div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="ebookSearch" placeholder="Search textbook title, author, subject...">
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
      <div class="footer-copy">
        &copy; 1933–2026 P.M. Shri +2 High School, Barbigha, District Sheikhpura (Bihar). UDISE: 10262907004.<br>
        All Rights Reserved. Affiliated to Bihar School Examination Board (BSEB, Patna).
      </div>
    </div>
  </footer>

  <!-- eBOOK PREVIEW MODAL -->
  <div class="ebook-modal" id="ebookModal" onclick="closeEbookModal(event)">
    <div class="ebook-modal-content">
      <button class="ebook-modal-close" onclick="closeEbookModalBtn()" aria-label="Close Preview Modal">✕</button>
      <div class="ebook-modal-header">
        <span class="ebook-modal-badge" id="modalClassBadge">Class</span>
        <span class="ebook-modal-stream-badge" id="modalStreamBadge">Stream</span>
        <h3 id="modalBookTitle">Book Title</h3>
        <p id="modalBookDesc" style="color: var(--gray); font-size: 0.88rem; margin-top: 6px;">Description</p>
      </div>
      <div class="ebook-modal-body">
        <h4 style="font-size: 0.92rem; color: var(--red); margin-bottom: 12px; font-weight: 700;">Key Chapters and Syllabi Covered:</h4>
        <ul class="ebook-chapters-list" id="modalChaptersList"></ul>
      </div>
      <div class="ebook-modal-footer">
        <a class="ebook-modal-dl-btn" id="modalDlBtn" href="#" target="_blank" rel="noopener noreferrer">
          📥 Download Official PDF (BSTBPC / NCERT)
        </a>
      </div>
    </div>
  </div>

  <!-- LIGHTBOX MODAL -->
  <div class="lightbox-modal" id="lightboxModal" onclick="closeLightbox(event)">
    <div class="lightbox-content">
      <button class="lightbox-close" onclick="closeLightboxBtn()" aria-label="Close Lightbox">✕</button>
      <button class="lightbox-nav-btn lightbox-prev" onclick="prevLightbox(event)" aria-label="Previous Image">‹</button>
      <button class="lightbox-nav-btn lightbox-next" onclick="nextLightbox(event)" aria-label="Next Image">›</button>
      <div class="lightbox-img-box">
        <img class="lightbox-img" id="lightboxImg" src="" alt="Barbigha High School Photo">
      </div>
      <div class="lightbox-caption" id="lightboxCaption"></div>
      <div class="lightbox-sub" id="lightboxSub"></div>
    </div>
  </div>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
`;

fs.writeFileSync('d:\\high2.0\\index.html', fullHtml, 'utf8');
console.log('Successfully generated English index.html with language switcher! File size:', fullHtml.length);
