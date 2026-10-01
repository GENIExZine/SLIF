/* ════════════════════════════════════════════════════════════════════
   P.M. SHRI +2 HIGH SCHOOL, BARBIGHA (SHEIKHPURA, BIHAR)
   Interactive Features & App Logic (Bilingual English / Hindi)
════════════════════════════════════════════════════════════════════ */

let currentLang = 'en';

const langDict = {
  en: {
    tbEst: '🏛️ स्थापित: 3 जनवरी 1933',
    tbApp: '📜 प्रस्वीकृति: जनवरी 1937',
    tbUpg: '🎓 +2 उत्क्रमण: 2010',
    tbUdise: '📋 UDISE Code: 10262907004',
    tbLoc: '📍 Barbigha, Sheikhpura (Bihar) - PIN: 811101',
    langSwitchLabel: 'हिन्दी (Hindi)',
    hdrTitle: 'P.M. Shri +2 High School',
    hdrSub: 'Barbigha, District Sheikhpura (Bihar)',
    hdrPin: 'P.O. & P.S. Barbigha, PIN: 811101 — Affiliated to BSEB Patna',
    hbPin: '📌 PIN: 811101',
    hbEst: '🏛️ Est. 1933 (90+ Years Legacy)',
    hbPm: '🏅 PM-SHRI Exemplary School',
    hbBseb: '🎓 Bihar School Examination Board',
    heroMotto: '"ज्ञान ही शक्ति है — Knowledge is Power"',
    secTitleAbout: 'About Our School <span>Nine Decades of Academic Excellence</span>',
    secDescAbout: 'Founded in 1933, P.M. Shri +2 High School Barbigha is the premier government educational institution of Sheikhpura district, fostering intellectual rigor, scientific temper, and holistic character building.',
    secTitleCampus: 'School Campus <span>Infrastructure & Academic Environment</span>',
    secDescCampus: 'A sprawling, green, and historically significant campus situated along NH-82 in Barbigha, equipped with modern learning infrastructure.',
    campusCap: '🏛️ राष्ट्रकवि रामधारी सिंह दिनकर स्मृति मंच — बरबीघा, शेखपुरा, बिहार',
    secTitlePrincipal: "Principal's Desk <span>Leadership & Vision</span>",
    secDescPrincipal: 'Guiding P.M. Shri +2 High School Barbigha with administrative rigor, pedagogical innovation, and commitment to student welfare.',
    secTitleTeachers: 'Our Teaching Faculty <span>Dedicated Educators & Mentors</span>',
    secDescTeachers: 'Meet our qualified faculty members holding postgraduate, doctoral, and professional teaching credentials (Ph.D., M.Sc., M.A., B.Ed., M.Ed., M.C.A., BPSC TRE-1).',
    secTitleStaff: 'Support and Administrative Staff <span>Our Dedicated Team</span>',
    secDescStaff: 'Recognizing the vital contributions of our administrative and support personnel who maintain seamless school operations, student services, and campus discipline.',
    secTitleContact: 'Contact Us <span>Get in Touch with School Office</span>',
    secDescContact: 'Reach out for admissions, transfer certificates, board examination enquiries, or general institutional information.',
    secTitleEbooks: 'Digital Library and eBooks <span>Curriculum Textbooks and Study Materials</span>',
    secDescEbooks: 'Access official digital textbooks and study syllabi for Classes 9 to 12 across Science, Arts, and Commerce streams (NCERT and Bihar State Text Book Publishing Corporation).',
    secTitleGallery: 'Classroom Gallery <span>Visual Tour of Academic Life</span>',
    secDescGallery: 'Photographs of classroom activities, smart classes, laboratories, and school events.',
    egTitle: 'No Photos in Gallery',
    egDesc: 'All photos have been removed from the classroom gallery as requested. New classroom and academic photographs will be updated here soon.',
    ciTitle1: 'Official Address',
    ciTitle2: 'Principal & Office Helpline',
    ciTitle3: 'UDISE Registration',
    ciTitle4: 'Affiliation & Timings',
    cfTitle: '✉️ Online Admission & General Enquiry',
    cfDesc: 'Please fill out your details below. The school administration will respond promptly.',
    btnSubmitEnquiry: '🚀 Submit Enquiry'
  },
  hi: {
    tbEst: '🏛️ स्थापित: 3 जनवरी 1933',
    tbApp: '📜 प्रस्वीकृति: जनवरी 1937',
    tbUpg: '🎓 +2 उत्क्रमण: 2010',
    tbUdise: '📋 UDISE कोड: 10262907004',
    tbLoc: '📍 बरबीघा, शेखपुरा (बिहार) - पिन: 811101',
    langSwitchLabel: 'English',
    hdrTitle: 'पी.एम.श्री +2 उच्च विद्यालय',
    hdrSub: 'P.M. Shri +2 High School, Barbigha',
    hdrPin: 'बरबीघा, शेखपुरा (बिहार) — पिन: 811101 | बिहार बोर्ड संबद्ध',
    hbPin: '📌 पिन: 811101',
    hbEst: '🏛️ स्थापना: 1933 (90+ वर्ष)',
    hbPm: '🏅 पीएम-श्री विद्यालय',
    hbBseb: '🎓 बिहार विद्यालय परीक्षा समिति',
    heroMotto: '"ज्ञान ही शक्ति है — Knowledge is Power"',
    secTitleAbout: 'About Our School <span>हमारे विद्यालय के बारे में</span>',
    secDescAbout: '3 जनवरी 1933 से स्थापित, शेखपुरा जिले का अग्रणी ऐतिहासिक राजकीय शिक्षण संस्थान, जो गुणवत्तापूर्ण, संस्कारयुक्त एवं आधुनिक शिक्षा प्रदान करता है।',
    secTitleCampus: 'School Campus <span>विद्यालय परिसर</span>',
    secDescCampus: 'बरबीघा में NH-82 के समीप स्थित विशाल, हरित एवं ऐतिहासिक परिसर, जहां अध्ययन, शोध और खेलकूद का संगम है।',
    campusCap: '🏛️ राष्ट्र कवि रामधारी सिंह दिनकर स्मृति मंच — बरबीघा, शेखपुरा, बिहार',
    secTitlePrincipal: 'Principal / प्रधानाचार्य <span>विद्यालय प्रमुख</span>',
    secDescPrincipal: 'कुशल प्रशासनिक नेतृत्व, शैक्षणिक दूरदर्शिता और नैतिक अनुशासन के साथ विद्यालय को निरंतर नई उपलब्धियों की ओर अग्रसर करते हुए।',
    secTitleTeachers: 'Our Teachers / हमारे शिक्षक <span>शिक्षक मण्डल</span>',
    secDescTeachers: 'उच्च योग्यताधारी (Ph.D., M.Sc., M.A., B.Ed., M.Ed., M.C.A., BPSC TRE-1) एवं समर्पित शिक्षकों की अनुभवी टीम।',
    secTitleStaff: 'Support Staff / सहायक कर्मचारी <span>विद्यालय परिवार</span>',
    secDescStaff: 'विद्यालय के सुचारू संचालन, कार्यालय प्रबंधन, अनुशासन और सुरक्षा में अनवरत सेवारत हमारे कर्मठ सहयोगी।',
    secTitleContact: 'Contact Us <span>संपर्क करें</span>',
    secDescContact: 'नामांकन, प्रमाणपत्र, परीक्षा अथवा सामान्य जानकारी हेतु विद्यालय कार्यालय से संपर्क करें।',
    secTitleEbooks: 'Digital Library & eBooks <span>ई-बुक्स व डिजिटल शिक्षण सामग्री</span>',
    secDescEbooks: 'कक्षा 9 से 12 तक के विद्यार्थियों हेतु बिहार स्टेट टेक्स्ट बुक (BSTBPC) एवं एनसीईआरटी (NCERT) की आधिकारिक डिजिटल पाठ्यपुस्तकें।',
    secTitleGallery: 'Classroom Gallery <span>कक्षा व गतिविधि गैलरी</span>',
    secDescGallery: 'स्मार्ट क्लासरूम, आधुनिक विज्ञान प्रयोगशाला, कंप्यूटर लैब, वाचनालय तथा सांस्कृतिक गतिविधियों का दृश्य संकलन।',
    egTitle: 'गैलरी में कोई फोटो नहीं है',
    egDesc: 'कक्षा गैलरी से सभी फोटो हटा दिए गए हैं। नए शैक्षणिक एवं गतिविधि चित्र शीघ्र ही यहाँ अपलोड किए जाएंगे।',
    ciTitle1: 'Address / पता',
    ciTitle2: 'Phone / हेल्पलाइन',
    ciTitle3: 'UDISE कोड',
    ciTitle4: 'संबद्धता एवं समय',
    cfTitle: '✉️ ऑनलाइन संदेश / पूछताछ प्रपत्र',
    cfDesc: 'नामांकन या किसी भी सहायता हेतु नीचे विवरण भरें, विद्यालय आपसे शीघ्र संपर्क करेगा।',
    btnSubmitEnquiry: '🚀 संदेश भेजें (Send Message)'
  }
};

window.toggleLanguage = function() {
  currentLang = (currentLang === 'en') ? 'hi' : 'en';
  applyLanguage(currentLang);
};

function applyLanguage(lang) {
  const d = langDict[lang];
  if (!d) return;

  document.documentElement.lang = lang;

  Object.keys(d).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (d[id].includes('<') && d[id].includes('>')) {
        el.innerHTML = d[id];
      } else {
        el.textContent = d[id];
      }
    }
  });

  const btnLbl = document.getElementById('langSwitchLabel');
  if (btnLbl) {
    btnLbl.textContent = (lang === 'en') ? 'हिन्दी (Hindi)' : 'English';
  }

  // Update teacher count badge
  const tBadge = document.getElementById('teacherCountBadge');
  if (tBadge) {
    const visibleCount = document.querySelectorAll('.tcard[style*="display: flex"], .tcard:not([style*="display: none"])').length;
    tBadge.textContent = (lang === 'en') ? `(${visibleCount} Displayed)` : `(${visibleCount} प्रदर्शित)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Apply English by default
  applyLanguage('en');

  /* ── 1. REVEAL ANIMATIONS ON SCROLL ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('on'), i * 40);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  /* ── 2. MOBILE NAVIGATION TOGGLE ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── 3. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  /* ── 4. TEACHERS FILTER & LIVE SEARCH ── */
  const teacherCards = document.querySelectorAll('.tcard');
  const teacherFilterBtns = document.querySelectorAll('.t-filter-btn');
  const teacherSearch = document.getElementById('teacherSearch');
  const teacherCountBadge = document.getElementById('teacherCountBadge');

  function filterTeachers() {
    const activeTab = document.querySelector('.t-filter-btn.active')?.dataset.filter || 'all';
    const query = (teacherSearch?.value || '').trim().toLowerCase();

    let visibleCount = 0;

    teacherCards.forEach(card => {
      const category = card.dataset.category || '';
      const text = card.textContent.toLowerCase();

      const matchesCat = (activeTab === 'all' || category.includes(activeTab));
      const matchesQuery = !query || text.includes(query);

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (teacherCountBadge) {
      teacherCountBadge.textContent = (currentLang === 'en') ? `(${visibleCount} Displayed)` : `(${visibleCount} प्रदर्शित)`;
    }
  }

  teacherFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      teacherFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTeachers();
    });
  });

  if (teacherSearch) {
    teacherSearch.addEventListener('input', filterTeachers);
  }

  /* ── 5. eBOOKS DATA & DYNAMIC FILTERING ── */
  const ebookCards = document.querySelectorAll('.ebook-card');
  const ebookClassBtns = document.querySelectorAll('.ebook-filter-btn');
  const ebookSearch = document.getElementById('ebookSearch');

  function filterEbooks() {
    const activeClass = document.querySelector('.ebook-filter-btn.active')?.dataset.class || 'all';
    const query = (ebookSearch?.value || '').trim().toLowerCase();

    ebookCards.forEach(card => {
      const cardClass = card.dataset.class || '';
      const cardStream = card.dataset.stream || '';
      const text = card.textContent.toLowerCase();

      const matchesClass = (activeClass === 'all' || cardClass === activeClass || cardStream === activeClass);
      const matchesQuery = !query || text.includes(query);

      if (matchesClass && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  ebookClassBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ebookClassBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterEbooks();
    });
  });

  if (ebookSearch) {
    ebookSearch.addEventListener('input', filterEbooks);
  }

  /* ── 6. eBOOK PREVIEW MODAL ── */
  const ebookModal = document.getElementById('ebookModal');
  const ebookModalClose = document.getElementById('ebookModalClose');
  const ebookModalBody = document.getElementById('ebookModalBody');

  window.openEbookModal = function(title, className, stream, desc, chaptersList, officialLink) {
    if (!ebookModal || !ebookModalBody) return;
    
    let chaptersHtml = '';
    if (chaptersList && chaptersList.length > 0) {
      chaptersHtml = `
        <h4 style="margin: 16px 0 8px; color: var(--red); font-family: 'Playfair Display', serif;">Curriculum Syllabus &amp; Key Chapters:</h4>
        <ul style="padding-left: 20px; line-height: 1.8; color: #444; font-size: 0.9rem;">
          ${chaptersList.map(ch => `<li style="margin-bottom: 4px;">📖 ${ch}</li>`).join('')}
        </ul>
      `;
    }

    ebookModalBody.innerHTML = `
      <div style="border-bottom: 2px solid var(--gold); padding-bottom: 12px; margin-bottom: 14px;">
        <span style="background: rgba(139,0,0,0.1); color: var(--red); font-size: 0.75rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">${className}</span>
        <span style="background: rgba(255,107,0,0.12); color: var(--saffron); font-size: 0.75rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-left: 4px;">${stream}</span>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.45rem; color: var(--navy); margin-top: 8px;">${title}</h3>
      </div>
      <p style="color: #555; font-size: 0.94rem; line-height: 1.7; margin-bottom: 14px;">${desc}</p>
      ${chaptersHtml}
      <div style="margin-top: 24px; padding-top: 14px; border-top: 1px dashed #ddd; display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="${officialLink}" target="_blank" rel="noopener noreferrer" style="background: var(--red); color: #fff; padding: 10px 22px; border-radius: 24px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
          🌐 Read on Official Portal
        </a>
        <a href="${officialLink}" target="_blank" rel="noopener noreferrer" style="background: var(--lb); color: var(--red); border: 1px solid var(--red); padding: 10px 20px; border-radius: 24px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
          📥 Download PDF Book
        </a>
      </div>
    `;

    ebookModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  if (ebookModalClose) {
    ebookModalClose.addEventListener('click', () => {
      ebookModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (ebookModal) {
    ebookModal.addEventListener('click', (e) => {
      if (e.target === ebookModal) {
        ebookModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── 7. CONTACT FORM SUBMISSION ── */
  const contactForm = document.getElementById('schoolContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf_name')?.value || '';
      const phone = document.getElementById('cf_phone')?.value || '';
      const stream = document.getElementById('cf_stream')?.value || '';
      const message = document.getElementById('cf_message')?.value || '';

      const submitBtn = contactForm.querySelector('.form-submit-btn');
      if (submitBtn) {
        const origText = submitBtn.textContent;
        submitBtn.textContent = (currentLang === 'en') ? 'Enquiry Sent Successfully!' : 'सफलतापूर्वक प्रेषित!';
        submitBtn.style.background = '#28a745';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = origText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 4000);
      }

      if (window.TG && window.TG.injectMessage) {
        window.TG.injectMessage(`[Website Enquiry] Name: ${name}, Phone: ${phone}, Stream: ${stream}, Msg: ${message}`);
      }

      const alertMsg = (currentLang === 'en')
        ? `Thank you, ${name}! Your enquiry has been received. The school administration will contact you shortly.\n(Office Helpline: 9835017555)`
        : `धन्यवाद ${name} जी! आपका संदेश प्राप्त हो गया है। विद्यालय प्रशासन आपसे शीघ्र ही संपर्क करेगा।\n(कार्यालय हेल्पलाइन: 9835017555)`;

      alert(alertMsg);
    });
  }

});

/* ════════════════════════════════════════════════════════════════════
   TELEGRAM LIVE CHAT ENGINE
   Two-way visitor <-> school admin via Telegram Bot
════════════════════════════════════════════════════════════════════ */
const TG = (() => {

  const TOKEN = '8767575036:AAGq621oBhhVw8lQCUdir2DkR-1gDPHcJNA';
  const API = `https://api.telegram.org/bot${TOKEN}`;
  const SESSION = (() => {
    let s = sessionStorage.getItem('tg_sid');
    if (!s) {
      s = 'WEB' + Date.now();
      sessionStorage.setItem('tg_sid', s);
    }
    return s;
  })();

  let open = false;
  let adminChatId = null;
  let lastUpd = 0;
  let pollTimer = null;
  let unread = 0;
  let connected = false;
  let sentMsgIds = new Set();

  const $ = id => document.getElementById(id);
  const panel = () => $('tg-panel');
  const msgBox = () => $('tg-msgs');
  const inp = () => $('tg-inp');
  const notif = () => $('tg-notif');
  const statusTxt = () => $('tg-status-txt');

  function fmtTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function appendMsg(text, type, time = fmtTime()) {
    const box = msgBox();
    if (!box) return;
    const div = document.createElement('div');
    div.className = `tg-msg tg-msg-${type}`;
    div.innerHTML = `${escapeHtml(text)}<div class="tg-msg-time">${time}</div>`;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  }

  function setStatus(online, txt) {
    if (!statusTxt()) return;
    statusTxt().textContent = txt;
    const dot = document.querySelector('.tg-online-dot');
    if (dot) dot.style.background = online ? '#2ecc71' : '#e74c3c';
  }

  async function init() {
    try {
      const res = await fetch(`${API}/getMe`);
      const data = await res.json();
      if (data.ok) {
        connected = true;
        setStatus(true, 'Online');
      } else {
        setStatus(false, 'Offline');
      }
    } catch {
      setStatus(false, 'Offline');
    }

    appendMsg('Hello! Welcome to the official support desk of P.M. Shri +2 High School, Barbigha. How may we assist you today?', 'in');
  }

  function toggle() {
    open = !open;
    const p = panel();
    const chatIco = $('tg-icon-chat');
    const closeIco = $('tg-icon-close');

    if (!p) return;

    if (open) {
      p.classList.remove('tg-closed');
      if (chatIco) chatIco.style.display = 'none';
      if (closeIco) closeIco.style.display = 'block';
      unread = 0;
      updateNotif();
      if (inp()) inp().focus();
      startPolling();
    } else {
      p.classList.add('tg-closed');
      if (chatIco) chatIco.style.display = 'block';
      if (closeIco) closeIco.style.display = 'none';
      stopPolling();
    }
  }

  function updateNotif() {
    const n = notif();
    if (!n) return;
    if (unread > 0) {
      n.textContent = unread;
      n.classList.remove('tg-hidden');
    } else {
      n.classList.add('tg-hidden');
    }
  }

  async function send() {
    const input = inp();
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    appendMsg(text, 'out');

    const formatted = `🏫 [P.M. Shri High School Barbigha Website]\n👤 Visitor [${SESSION}]:\n💬 ${text}`;
    await sendToTelegram(formatted);
  }

  function quickSend(txt) {
    appendMsg(txt, 'out');
    const formatted = `🏫 [P.M. Shri High School Barbigha Website]\n👤 Visitor [${SESSION}] (Quick Enquiry):\n📌 ${txt}`;
    sendToTelegram(formatted);
  }

  function injectMessage(msg) {
    sendToTelegram(msg);
  }

  async function sendToTelegram(text) {
    try {
      let targetId = adminChatId;
      if (!targetId) {
        const ures = await fetch(`${API}/getUpdates?offset=-1`);
        const udata = await ures.json();
        if (udata.ok && udata.result.length > 0) {
          const last = udata.result[udata.result.length - 1];
          targetId = (last.message || last.channel_post)?.chat?.id;
          if (targetId) adminChatId = targetId;
        }
      }

      if (targetId) {
        const res = await fetch(`${API}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: targetId, text })
        });
        const d = await res.json();
        if (d.ok && d.result) sentMsgIds.add(d.result.message_id);
      }
    } catch (e) {
      console.warn('TG send error:', e);
    }
  }

  function startPolling() {
    if (pollTimer) return;
    pollTimer = setInterval(poll, 3500);
  }

  function stopPolling() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  async function poll() {
    try {
      const res = await fetch(`${API}/getUpdates?offset=${lastUpd + 1}&timeout=0`);
      const data = await res.json();
      if (!data.ok || !data.result) return;

      for (const u of data.result) {
        lastUpd = u.update_id;
        const msg = u.message;
        if (!msg || !msg.text) continue;
        if (sentMsgIds.has(msg.message_id)) continue;

        if (!adminChatId) adminChatId = msg.chat.id;

        const text = msg.text;
        appendMsg(text, 'in');

        if (!open) {
          unread++;
          updateNotif();
        }
      }
    } catch {
      // quiet poll error
    }
  }

  init();

  return {
    toggle,
    send,
    quickSend,
    injectMessage
  };

})();
