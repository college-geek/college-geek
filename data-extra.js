/* Extra (manual) data additions on top of extracted data.js */
(function () {
  if (!window.UGEAC_DATA) return;
  const D = window.UGEAC_DATA;

  const KEY = "GOVT. ENGG. COLLEGE, VAISHALI";
  if (D.INFO && !D.INFO[KEY]) {
    D.INFO[KEY] = {
      fullName: "Government Engineering College, Vaishali",
      estd: null,
      type: "Government",
      affiliation: "Bihar Engineering University, Patna",
      address: "Vaishali, Bihar",
      city: "Vaishali",
      district: "Vaishali",
      lat: null,
      lng: null,
      website: null,
      email: null,
      phone: null,
      about:
        "Government Engineering College, Vaishali is a government engineering institute in Bihar. (Details like branches, cutoffs and contact can be added once available.)",
      naac: null,
      hostel: null,
      fees: null,
      transport: null,
      image: null,
      gallery: [],
    };
  }

  if (Array.isArray(D.META) && !D.META.some((m) => m.name === KEY)) {
    D.META.push({
      name: KEY,
      rank: 9,
      avg_air: null,
      branches: [
        "CIVIL ENGINEERING",
        "COMPUTER SC. & ENGINEERING",
        "ELECTRICAL & ELECTRONICS ENGINEERING",
        "ELECTRO  & COMMUNICATION ENGINEERING",
        "MECHANICAL ENGINEERING",
      ],
    });
  }

  // Display name correction
  const BCE_BAKHTIYARPUR = "B.C.E. BAKHTIYARPUR";
  if (D.INFO) {
    if (!D.INFO[BCE_BAKHTIYARPUR]) D.INFO[BCE_BAKHTIYARPUR] = {};
    D.INFO[BCE_BAKHTIYARPUR].fullName = "Bakhtiyarpur College of Engineering, Bakhtiyarpur";
  }

  // Updates sourced from Bihar_Engineering_Colleges_Directory.xlsx
  const EXCEL_UPDATES = [
    {
      key: "B.C.E. BHAGALPUR",
      fullName: "Bhagalpur College of Engineering",
      estd: 1960,
      website: "https://www.bcebhagalpur.ac.in",
      about: `Bhagalpur College of Engineering (BCE Bhagalpur) is one of the best State Government Technical Institutions and was established in 1960 in Bhagalpur, Bihar, India. This institute offers full-time Bachelor of Technology (B.Tech.) degree programs. It is administered by the Department of Science and Technology, Bihar. The college is affiliated with Bihar Engineering University. Earlier affiliation was under Tilkamanjhi Bhagalpur University; in 2008, it was transferred to Aryabhatta Knowledge University, and after 15 March 2023, to Bihar Engineering University.`,
    },
    {
      key: "M.I.T. MUZAFFARPUR",
      fullName: "Muzaffarpur Institute of Technology",
      estd: 1954,
      website: "https://www.mitmuzaffarpur.org",
      about: `Muzaffarpur Institute of Technology (MIT, Muzaffarpur) is a public, coeducational engineering college in Muzaffarpur, Bihar, India. It is administered by the Department of Science and Technology, Bihar, and funded by the Government of Bihar. It was founded in 1954, just after India's independence. The foundation stone was laid by the first Prime Minister of India, Jawaharlal Nehru. MIT was established on 25 September 1954, initially as the College of Civil Engineering, Muzaffarpur, with an inaugural batch of 45 students. It is affiliated to Bihar Engineering University.`,
    },
    {
      key: "G.C.E. GAYA",
      fullName: "Gaya College of Engineering",
      estd: 1981,
      website: "https://www.gcegaya.ac.in",
      about: `Gaya College of Engineering (GCE), Gaya, is a public technical institute in Gaya, Bihar, India. The institute operates under the administrative control of the Department of Science and Technology, Government of Bihar. It is affiliated with Bihar Engineering University (BEU), Patna, and is approved by the All India Council for Technical Education. Formerly known as Magadh Engineering College, it was established in 1958/1981 and re-inaugurated by CM Nitish Kumar on 19 November 2008. Campus area: 87 acres, situated 82 km south of Patna.`,
    },
    {
      key: "M..C.E. MOTIHARI",
      fullName: "Motihari College of Engineering",
      estd: 1980,
      website: "https://www.mcemotihari.ac.in",
      about: `Motihari College of Engineering, Motihari is a Government Engineering College fully funded by the Government of Bihar, India. It is managed by the Department of Science and Technology (Bihar) and Technical Education. The college is affiliated to Bihar Engineering University, Patna, and approved by AICTE, Delhi. Previously known as Indian College of Engineering–Motihari, it was established in 1980. In 1994, all staff and students were transferred to other colleges due to political reasons. Later in November 2008, the Government reopened the institute and renamed it Motihari College of Engineering. Campus: 48 acres at Bairiya Fursatpur, East Champaran.`,
    },
    {
      key: "D.C.E. DARBHANGA",
      fullName: "Darbhanga College of Engineering",
      estd: 2008,
      website: "https://www.dcedarbhanga.ac.in/",
      about: `Darbhanga College of Engineering (DCE Darbhanga) is a government-owned engineering (B.Tech.) college in Bihar, India. It was inaugurated by the Chief Minister of Bihar, Nitish Kumar, in 2008. It is affiliated with Bihar Engineering University (BEU), Patna, and approved by AICTE. The college is administered by the Department of Science and Technology, Bihar. It was previously known as Jagannath Mishra Institute of Technology (JMIT). In 2008, it reopened as Darbhanga College of Engineering under Lalit Narayan Mithila University; in 2011, it became a member of AKU; and from 15 March 2023, it joined Bihar Engineering University.`,
    },
    {
      key: "NALANDA COLLEGE. OF ENGG,CHANDI",
      fullName: "Nalanda College of Engineering",
      estd: 2008,
      website: "https://www.ncechandi.ac.in",
      about: `Nalanda College of Engineering (NCE) is a government engineering college situated at Chandi town, near Nalanda city in Bihar, India. It was inaugurated on 19 November 2008 by the Chief Minister of Bihar, Nitish Kumar. It is affiliated to Bihar Engineering University. The college is managed by the Department of Science and Technology, Bihar. It is situated on the holy land where Lord Buddha experienced enlightenment and Lord Vardhaman Mahavir embraced Nirvana — the land of the ancient Nalanda University. Campus: 51.64 acres. Mentor Institute: Indian Institute of Technology Bombay.`,
    },
    {
      key: "L.N.J.P.I.T. TECHNOLOGY. CHAPRA",
      fullName: "Loknayak Jai Prakash Institute of Technology",
      estd: 2012,
      website: "https://www.lnjpitchapra.ac.in",
      about: `Loknayak Jai Prakash Institute of Technology (LNJPIT) is a government engineering college in Bihar. It is managed by the Department of Science and Technology, Bihar. It is approved and recognized by AICTE, is a TEQIP-III college funded directly by the Central Government, and is affiliated to Bihar Engineering University. It is named after independence activist and political leader Jayprakash Narayan. Established on 8 September 2012, it spread over 45 acres on the banks of river Ganga. Mentor Institute: Indian Institute of Technology Patna.`,
    },
    {
      key: "B.C.E. BAKHTIYARPUR",
      fullName: "Bakhtiyarpur College of Engineering",
      estd: 2016,
      website: "https://bcebakhtiyarpur.ac.in",
      about: `Bakhtiyarpur College of Engineering (BCE Patna) is a public institute in Bakhtiyarpur (Patna) run under the Department of Science and Technology, Bihar. BCE Patna was established in 2016 by the Government of Bihar. It is recognized by AICTE and is affiliated to Bihar Engineering University (BEU). Its first academic session was started in 2016 on the old university grounds of the Indian Institute of Technology Patna in the Pataliputra Housing Colony. The institute offers full-time Bachelor of Technology (B.Tech.) degree programs in six engineering branches.`,
    },
    {
      key: "S.I.T. SITAMARHI",
      fullName: "Sitamarhi Institute of Technology",
      estd: 2016,
      website: "https://www.sitsitamarhi.ac.in",
      about: `Sitamarhi Institute of Technology is a fully Government-funded engineering college established in 2016. Its motto is विद्या ददाति विनयम् (With knowledge comes modesty). The institute is affiliated with Bihar Engineering University and is approved by AICTE. It is wholly funded and administered by the Government of Bihar under the Department of Science, Technology and Technical Education. It offers B.Tech courses in Civil, Mechanical, Electrical and Electronics, and Computer Science Engineering.`,
    },
    {
      key: "R.R.S.D.C.E, BEGUSARAI",
      fullName: "Rashtrakavi Ramdhari Singh Dinkar College of Engineering",
      estd: 2016,
      website: "https://www.rrsdcebgs.ac.in",
      about: `Rashtrakavi Ramdhari Singh Dinkar College of Engineering (RRSDCE) is a government engineering college under the Department of Science and Technology, Bihar, that opened in 2016. The college is named after the legendary poet Ramdhari Singh Dinkar. It is located in Begusarai, Bihar, and is affiliated with Bihar Engineering University, Patna, and approved by AICTE. Spread across 31 acres, it offers B.Tech in CSE, CSE (Data Science), Mechanical, Electrical & Electronics, Civil, and Chemical Engineering. Its motto is 'Work is worship'.`,
    },
    {
      key: "S.C.E SASARAM",
      fullName: "Shershah Engineering College",
      estd: 2016,
      website: "https://www.scesasaram.in",
      about: `Shershah Engineering College Sasaram (SEC) is a government engineering college managed by the Department of Science and Technology, Bihar. It is approved and recognized by AICTE and is affiliated with Bihar Engineering University in Patna. The college was established in 2016 and is named after the historical figure Shershah Suri. Its motto is 'From darkness, lead me to light.' SCE offers undergraduate courses in Mechanical Engineering, Computer Science and Engineering, Electrical and Electronics Engineering, Civil Engineering, and VLSI.`,
    },
    {
      key: "B.P.M.C.E. MADHEPURA",
      fullName: "B.P. Mandal College of Engineering",
      estd: 2016,
      website: "https://www.bpmcemadhepura.org",
      about: `BP Mandal College of Engineering, Madhepura is a government engineering college in Madhepura district of Bihar, India. It was established in the year 2016 under the Department of Science and Technology, Bihar. The college is named after BP Mandal, the 7th Chief Minister of Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission to the four-year B.Tech course is made through UGEAC conducted by Bihar Combined Entrance Competitive Examination Board.`,
    },
    {
      key: "K.C.E., KATIHAR",
      fullName: "Katihar Engineering College",
      estd: 2016,
      website: "https://keck.ac.in",
      about: `Katihar Engineering College is a government engineering college affiliated with Bihar Engineering University, Patna, India. It is managed by the Department of Science and Technology, Government of Bihar. The college was established in 2016 and is situated in Katihar district. Admission to the Bachelor's in Technology course is made through UGEAC, conducted by the Bihar Combined Entrance Competitive Examination Board. It offers B.Tech in Civil, Mechanical, Electrical and Electronics, and Computer Science Engineering.`,
    },
    {
      key: "PURNEA COLLEGE OF ENGG.",
      fullName: "Purnea College of Engineering",
      estd: 2017,
      website: "https://www.pcepurnia.org",
      about: `Purnea College of Engineering (PCE) is a Government engineering college established in 2017 under the Department of Science and Technology, Government of Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. The campus is situated on the western side of NH-31 road, spread over an area of 10 acres. The college was inaugurated on 17 February 2019 by CM Nitish Kumar. It offers B.Tech in Civil, Mechanical, Electrical, ECE and other specialised branches.`,
    },
    {
      key: "SAHARSA COLLEGE OF ENGG.",
      fullName: "Saharsa College of Engineering",
      estd: 2017,
      website: "https://www.scesaharsa.org",
      about: `Saharsa College of Engineering is a government engineering college managed by the Department of Science, Technology and Technical Education, Bihar. It is affiliated with Bihar Engineering University, Patna, and approved by the All India Council for Technical Education. The college was established in the year 2017 at Saharsa district of Bihar. Campus area: 10 acres at Hatiya Gachhi, Saharsa. Admission is made through UGEAC based on JEE Main merit list.`,
    },
    {
      key: "SUPAUL ENGG. COLLEGE, SUPAUL",
      fullName: "Supaul College of Engineering",
      estd: 2017,
      website: "https://scesupaul.org",
      about: `Supaul College of Engineering (सुपौल अभियंत्रण महाविद्यालय) is a government technical institution under the Department of Science and Technology, Bihar. The college is affiliated to Bihar Engineering University. It was established in 2017 at Supaul, Bihar. Admission is based on Joint Entrance Examination (JEE Main) or BCECE exam merit list. It offers B.Tech programs in engineering disciplines.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, BANKA",
      fullName: "Government Engineering College Banka",
      estd: 2018,
      website: "https://www.gecbanka.org",
      about: `Government Engineering College, Banka is a government engineering college in Banka district of Bihar. It was established in the year 2018 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission to the four-year B.Tech course is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board, requiring a valid JEE Main rank.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, VAISHALI",
      fullName: "Government Engineering College Vaishali",
      estd: 2018,
      website: "https://www.gecvaishali.ac.in",
      about: `Government Engineering College, Vaishali (GECV) is a technical institute established in 2018 by the Government of Bihar under the Department of Science and Technology, Bihar. It is approved by AICTE and is affiliated with Bihar Engineering University. The institute started its first academic session (2018–19) in a temporary campus at Government Polytechnic College, Vaishali. It offers B.Tech in Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering, and Civil Engineering (60 seats each).`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, JAMUI",
      fullName: "Government Engineering College Jamui",
      estd: 2018,
      website: "https://www.gecjamui.org",
      about: `Government Engineering College, Jamui is a government engineering college in Jamui district of Bihar. It was established in the year 2018 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission to the four-year B.Tech course is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board, requiring a valid JEE Main rank.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, NAWADA",
      fullName: "Government Engineering College Nawada",
      estd: 2019,
      website: "https://www.gecnawada.org.in",
      about: `Government Engineering College, Nawada is a government engineering college in Nawada district of Bihar. It was established in the year 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission to the four-year B.Tech course is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board, requiring a valid JEE Main rank.`,
    },
    {
      key: "GOVT.ENGG. COLLEGE KISHANGANJ",
      fullName: "Government Engineering College Kishanganj",
      estd: 2019,
      website: "https://www.geckishanganj.org/",
      about: `Government Engineering College, Kishanganj is a government engineering college in Kishanganj district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "SHRI PHANISHWAR NATH RENU ENGG. COLLEGE, ARARIA",
      fullName: "Shri Phanishwar Nath Renu Engineering College",
      estd: 2019,
      website: "https://spnrecararia.ac.in",
      about: `Shri Phanishwar Nath Renu Engineering College, formerly known as Government Engineering College, Araria, is a government engineering college in Araria district of Bihar. It was established in the year 2019 under the Department of Science and Technology, Bihar, and was named after the celebrated writer Phanishwar Nath Renu. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board.`,
    },
    {
      key: "GOVT. ENGG.COLLEGE MUNGER",
      fullName: "Government Engineering College Munger",
      estd: 2019,
      website: "https://gecmunger.org",
      about: `Government Engineering College Munger is an engineering college in Munger district of Bihar. It was established in the year 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Chief Minister Nitish Kumar laid the foundation stone and inaugurated the institution. It was established as part of the 'Saat Nichshay Yojana' of the Bihar Government to provide quality higher education in engineering. It offers B.Tech in Civil (120 seats), ME, CSE (AI), CSE (Data Science), and Electrical Engineering.`,
    },
    {
      key: "GOVT ENGG. COLLEGE SHEOHAR",
      fullName: "Government Engineering College Sheohar",
      estd: 2019,
      website: "https://www.gecsheohar.ac.in/",
      about: `Government Engineering College, Sheohar is a government engineering college in Sheohar district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT ENGG COLLEGE W. CHAMPARAN",
      fullName: "Government Engineering College West Champaran",
      estd: 2019,
      website: "https://www.gecwc.ac.in/",
      about: `Government Engineering College, West Champaran is a government engineering college in West Champaran district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, AURANGABAD",
      fullName: "Government Engineering College Aurangabad",
      estd: 2019,
      website: "https://www.gecaurangabad.ac.in/",
      about: `Government Engineering College, Aurangabad is a government engineering college in Aurangabad district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, KAIMUR",
      fullName: "Government Engineering College Kaimur",
      estd: 2019,
      website: "https://www.geckaimur.ac.in/",
      about: `Government Engineering College, Kaimur is a government engineering college in Kaimur district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, GOPALGANJ",
      fullName: "Government Engineering College Gopalganj",
      estd: 2019,
      website: "https://www.gecgopalganj.org/",
      about: `Government Engineering College, Gopalganj is a government engineering college in Gopalganj district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, MADHUBANI",
      fullName: "Government Engineering College Madhubani",
      estd: 2019,
      website: "https://www.gecmadhubani.ac.in/",
      about: `Government Engineering College, Madhubani is a government engineering college in Madhubani district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, SIWAN",
      fullName: "Government Engineering College Siwan",
      estd: 2019,
      website: "https://www.gecsiwan.org/",
      about: `Government Engineering College, Siwan is a government engineering college in Siwan district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, JEHANABAD",
      fullName: "Government Engineering College Jehanabad",
      estd: 2019,
      website: "https://www.gecjehanabad.ac.in/",
      about: `Government Engineering College, Jehanabad is a government engineering college in Jehanabad district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. It offers B.Tech in Civil Engineering (120 seats), Electrical Engineering (60 seats), and Mechanical Engineering (60 seats). Admission is via UGEAC based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, ARWAL",
      fullName: "Government Engineering College Arwal",
      estd: 2018,
      website: "https://www.gecarwal.ac.in/",
      about: `Government Engineering College, Arwal is a government engineering college in Arwal district of Bihar. It was established in 2018 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. It offers B.Tech in Civil Engineering (60 seats), Mechanical Engineering (60 seats), and Electrical Engineering (120 seats). Admission is via UGEAC based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, KHAGARIA",
      fullName: "Government Engineering College Khagaria",
      estd: 2019,
      website: "https://www.geckhagaria.org.in/",
      about: `Government Engineering College, Khagaria is a government engineering college in Khagaria district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. It offers B.Tech in Civil Engineering (120 seats), Mechanical Engineering (60 seats), and Electrical Engineering (60 seats). Admission is via UGEAC based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, BUXAR",
      fullName: "Government Engineering College Buxar",
      estd: 2019,
      website: "https://www.gecbuxar.ac.in/",
      about: `Government Engineering College, Buxar is a government engineering college in Buxar district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. It offers B.Tech in Civil, Mechanical, Electrical, and Electronics & Communication Engineering (60 seats each). Admission is via UGEAC based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, BHOJPUR",
      fullName: "Government Engineering College Bhojpur",
      estd: 2019,
      website: "https://www.gecbhojpur.org/",
      about: `Government Engineering College, Bhojpur is a government engineering college in Bhojpur district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. It offers B.Tech in Civil, Mechanical, Electrical, and Instrumentation Engineering (60 seats each). Admission is via UGEAC based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE, SHEIKHPURA",
      fullName: "Government Engineering College Sheikhpura",
      estd: 2019,
      website: "https://www.gecsheikhpura.org.in/",
      about: `Government Engineering College, Sheikhpura is a government engineering college in Sheikhpura district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE OF LAKHISARAI",
      fullName: "Government Engineering College Lakhisarai",
      estd: 2019,
      website: "https://www.geclakhisarai.ac.in/",
      about: `Government Engineering College, Lakhisarai is a government engineering college in Lakhisarai district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
    {
      key: "GOVT. ENGG. COLLEGE OF SAMASTIPUR",
      fullName: "Government Engineering College Samastipur",
      estd: 2019,
      website: "https://www.gecsamastipur.ac.in/",
      about: `Government Engineering College, Samastipur is a government engineering college in Samastipur district of Bihar. It was established in 2019 under the Department of Science and Technology, Bihar. It is affiliated with Bihar Engineering University and approved by AICTE. Admission is made through UGEAC conducted by the Bihar Combined Entrance Competitive Examination Board based on JEE Main merit.`,
    },
  ];

  for (const u of EXCEL_UPDATES) {
    if (!D.INFO) D.INFO = {};
    if (!D.INFO[u.key]) D.INFO[u.key] = {};
    D.INFO[u.key].fullName = u.fullName;
    D.INFO[u.key].estd = u.estd;
    D.INFO[u.key].website = u.website;
    D.INFO[u.key].about = u.about;
  }


  // College ordering (without changing names)
  const ORDER = [
    "B.C.E. BHAGALPUR",
    "M.I.T. MUZAFFARPUR",
    "G.C.E. GAYA",
    "M..C.E. MOTIHARI",
    "D.C.E. DARBHANGA",
    "NALANDA COLLEGE. OF ENGG,CHANDI",
    "L.N.J.P.I.T. TECHNOLOGY. CHAPRA",
    "B.C.E. BAKHTIYARPUR",
    "S.I.T. SITAMARHI",
    "R.R.S.D.C.E. BEGUSARAI",
    "S.C.E SASARAM",
    "B.P.M.C.E. MADHEPURA",
    "K.C.E., KATIHAR",
    "PURNEA COLLEGE OF ENGG.",
    "SAHARSA COLLEGE OF ENGG.",
    "SUPAUL COLLEGE OF ENGG.",
    "GOVT. ENGG. COLLEGE, BANKA",
    "GOVT. ENGG. COLLEGE, VAISHALI",
    "GOVT. ENGG. COLLEGE, JAMUI",
    "GOVT. ENGG. COLLEGE, NAWADA",
    "GOVT.ENGG. COLLEGE KISHANGANJ",
    "SHRI PHANISHWAR NATH RENU ENGG COLLEGE, ARARIA",
    "GOVT. ENGG.COLLEGE MUNGER",
    "GOVT ENGG. COLLEGE SHEOHAR",
    "GOVT ENGG COLLEGE W. CHAMPARAN",
    "GOVT. ENGG. COLLEGE, AURANGABAD",
    "GOVT. ENGG. COLLEGE, KAIMUR",
    "GOVT. ENGG. COLLEGE, GOPALGANJ",
    "GOVT. ENGG. COLLEGE, MADHUBANI",
    "GOVT. ENGG. COLLEGE, SIWAN",
    "GOVT. ENGG. COLLEGE, JEHANABAD",
    "GOVT. ENGG. COLLEGE, ARWAL",
    "GOVT. ENGG. COLLEGE, KHAGARIA",
    "GOVT. ENGG. COLLEGE, BUXAR",
    "GOVT. ENGG. COLLEGE, BHOJPUR",
    "GOVT. ENGG. COLLEGE, SHEIKHPURA",
    "GOVT. ENGG. COLLEGE OF LAKHISARAI",
    "GOVT. ENGG. COLLEGE OF SAMASTIPUR",
  ];

  const norm = (s) => String(s || "").toUpperCase().replace(/[^A-Z0-9]+/g, "");
  const orderMap = new Map(ORDER.map((name, i) => [norm(name), i]));

  if (Array.isArray(D.META)) {
    const originalIndex = new Map(D.META.map((m, i) => [m, i]));
    D.META.sort((a, b) => {
      const ia = orderMap.get(norm(a.name));
      const ib = orderMap.get(norm(b.name));
      const ha = ia != null;
      const hb = ib != null;
      if (ha && hb) return ia - ib;
      if (ha) return -1;
      if (hb) return 1;
      return (originalIndex.get(a) ?? 0) - (originalIndex.get(b) ?? 0);
    });
  }
})();
