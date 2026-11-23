const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

/* ---------------- i18n ---------------- */
const I18N={
en:{
 'loader.brand':'Belal Mohamed Yousry','loader.label':'LOADING',
 'brand.home':'Belal Mohamed home','brand.word':'BELAL<br>MOHAMED YOUSRY','top.role':'RAILWAY TECHNOLOGY Engineer',
 'lang.switch':'Switch to Arabic','menu.open':'Open navigation menu','menu.close':'CLOSE','menu.closeAria':'Close navigation menu','menu.tag':'BM / NAVIGATION',
 'menu.email':'EMAIL','menu.social':'SOCIAL','menu.linkedin':'LINKEDIN',
 'nav.home':'HOME','nav.services':'SERVICES','nav.about':'ABOUT','nav.experience':'EXPERIENCE','nav.work':'WORK','nav.education':'EDUCATION','nav.contact':'CONTACT',
 'hero.eyebrow':'RAILWAY TECHNOLOGY STUDENT / 2026','hero.name1':'BELAL','hero.name2':'MOHAMED YOUSRY',
 'hero.sub':'TURNING TECHNICAL KNOWLEDGE INTO PRACTICAL RAILWAY SOLUTIONS.','hero.tag':'PROFILE / ENGINEERING',
 'hero.watermark':'RAILWAY<br>TECHNOLOGY','hero.note':'BASED IN QALYUB, EGYPT<br>AVAILABLE FOR OPPORTUNITIES','hero.scroll':'SCROLL TO EXPLORE',
 'services.kicker':'CAPABILITIES','services.title':'SERVICES',
 'services.marquee':'RAILWAY MAINTENANCE — ROLLING STOCK — LOCOMOTIVES — TRACK & SIGNALING — INDUSTRIAL OPERATIONS — RAILWAY MAINTENANCE — ROLLING STOCK — LOCOMOTIVES — TRACK & SIGNALING — INDUSTRIAL OPERATIONS — ',
 'services.intro1':'RAILWAY TECHNOLOGY,','services.intro2':'BUILDING PRACTICAL RAILWAY-FOCUSED TECHNICAL CAPABILITY WITH REAL-WORLD EXPOSURE.',
 'services.s1':'Railway Maintenance','services.s1b':'Practical understanding of locomotive maintenance, overhaul procedures, workshop practices, inspection routines and railway equipment.',
 'services.s2':'Rolling Stock & Locomotives','services.s2b':'Training exposure to coach inspection, locomotive fundamentals, diesel engines, traction systems and wheel-lathe operations.',
 'services.s3':'Track & Signaling','services.s3b':'Foundational knowledge of railway track components, rail welding, maintenance, signals and interlocking systems.',
 'services.s4':'Industrial & Technical Operations','services.s4b':'Hands-on industrial exposure including robotic welding, 2D/3D fiber laser cutting, production quality and workplace safety.',
 'about.kicker':'PROFILE','about.title':'ABOUT','about.tag':'PROFILE / 2026',
 'about.lead':'I am Belal Mohamed, a fourth-year Railway Technology student at 6th of October Technological University.',
 'about.p2':'My practical experience includes railway workshops, field training and industrial environments, building a foundation in railway maintenance, rolling stock, traction, signaling, track systems and industrial safety.',
 'about.p3':'I am focused on developing my technical skills and building a career in railway transportation through continuous learning and real-world experience.',
 'about.f1k':'EDUCATION','about.f1v':'B.TECH — RAILWAY TECHNOLOGY','about.f2k':'LANGUAGES','about.f2v':'ARABIC / ENGLISH','about.f3k':'LOCATION','about.f3v':'QALYUB, EGYPT',
 'exp.kicker':'EXPERIENCE','exp.title':'EXPERIENCE',
 'exp.e1t':'Egyptian National Railways','exp.e1d':'Railway workshops and field training in signaling, track engineering, locomotives, coaches, wheel lathe and traction.',
 'exp.e2t':'ENIT / Siemens — Egypt High-Speed Rail','exp.e2d':'Specialized rolling stock project training.',
 'exp.e3t':'ENIT — Railway Project Appraisal','exp.e3d':'Training in railway project appraisal and evaluation fundamentals.',
 'exp.e4t':'The Arab Contractors','exp.e4d':'Summer practical training · Final evaluation: Excellent.',
 'exp.e5t':'ERMAS','exp.e5d':'Locomotive maintenance and overhaul training.',
 'exp.e6t':'Akhbar El Youm Academy','exp.e6d':'Industrial workshop fundamentals and engineering practices.',
 'exp.e7d0':'11/2022 — PRESENT','exp.e7t':'Sales & Logistics Associate','exp.e7d':'El-Zahraa for Electrical Tools · Technical customer support, inventory, invoicing and logistics.',
 'exp.e8t':'Machine Operator — CNC & Robotics','exp.e8d':'Abou Hawa Manufacturing · Robotic welding and 2D/3D fiber laser cutting.',
 'skills.kicker':'EXPERTISE','skills.title':'TECHNICAL PROFILE',
 'skills.r1t':'Railway Systems','skills.r1d':'Maintenance · Rolling Stock · Locomotives',
 'skills.r2t':'Field Experience','skills.r2d':'Workshops · Inspection · Industrial Training',
 'skills.r3t':'Technical Knowledge','skills.r3d':'Traction · Signaling · Track Systems · Welding',
 'skills.r4t':'Industrial Skills','skills.r4d':'CNC · Robotic Welding · Fiber Laser Cutting',
 'skills.r5t':'Professional','skills.r5d':'Safety · Teamwork · Communication · Organization',
 'work.kicker':'DEVELOPMENT & UNIVERSITY PROJECTS','work.title':'PROJECTS',
 'work.w1d':'WEB APPLICATION','work.w2d':'PORTFOLIO WEBSITE','work.w3d':'PORTFOLIO WEBSITE',
 'work.w4d':'Download videos directly from a link. Fast, simple, and easy to use.','work.w5d':'UNIVERSITY PROJECT',
 'work.placeholder':'SELECT<br>PROJECT','work.open':'OPEN PROJECT',
 'edu.kicker':'EDUCATION','edu.title':'EDUCATION','edu.e1d0':'10/2023 — PRESENT',
 'edu.e1t':'Bachelor of Technology — Railway Technology','edu.e1d':'6th of October Technological University · Railway Technology and Maintenance.',
 'contact.kicker1':"LET'S CONNECT",'contact.kicker2':'CONTACT','contact.title':'CONTACT','contact.name':'BELAL MOHAMED','contact.city':'QALYUB, EGYPT',
 'contact.email':'EMAIL','contact.phone':'PHONE','contact.whatsapp':'WHATSAPP','contact.linkedin':'VIEW PROFILE','contact.github':'VIEW REPOSITORIES',
 'contact.cv':'DOWNLOAD CV','contact.cvsub':'PDF · ENGLISH','contact.location':'LOCATION','contact.locationv':'QALYUB, QALYUBIA, EGYPT',
 'form.eyebrow':'HAVE A PROJECT OR AN OPPORTUNITY?','form.title':'SEND A REQUEST','form.intro':'Share a few details and I will get back to you as soon as possible.',
 'form.name':'NAME','form.phone':'PHONE','form.phoneph':'+20 1...','form.email':'EMAIL','form.message':'HOW CAN I HELP?','form.submit':'SEND REQUEST',
 'form.sending':'SENDING YOUR REQUEST...','form.connError':'Unable to connect. Please try again in a moment.','form.processError':'The request could not be processed. Please try again later.',
 'form.success':'Your request was sent successfully. Thank you!','form.sent':'SENT',
 'footer.name':'Belal Mohamed','footer.role':'RAILWAY TECHNOLOGY STUDENT','skills.title':'TECHNICAL SKILLS','skills.s1':'Rolling Stock','skills.s2':'Locomotive Maintenance','skills.s3':'Railway Signaling','skills.s4':'Track Engineering','skills.s5':'Traction Systems','skills.s6':'Project Appraisal','rail.home':'HOME','rail.services':'SERVICES','rail.about':'ABOUT','rail.experience':'EXPERIENCE','rail.work':'WORK','rail.journey':'EDUCATION','rail.contact':'CONTACT','rail.next':'NEXT STOP','rail.final':'FINAL STOP'
},
ar:{
 'loader.brand':'بلال محمد يسري','loader.label':'جارٍ التحميل',
 'brand.home':'الصفحة الرئيسية لبلال محمد','brand.word':'بلال<br>محمد يسري','top.role':'مهندس تكنولوجيا سكك حديدية',
 'lang.switch':'التبديل إلى الإنجليزية','menu.open':'فتح قائمة التنقل','menu.close':'إغلاق','menu.closeAria':'إغلاق قائمة التنقل','menu.tag':'بلال محمد / التنقل',
 'menu.email':'البريد الإلكتروني','menu.social':'حساباتي','menu.linkedin':'لينكدإن',
 'nav.home':'الرئيسية','nav.services':'خدماتي','nav.about':'نبذة عني','nav.experience':'خبراتي','nav.work':'أعمالي','nav.education':'تعليمي','nav.contact':'تواصل معي',
 'hero.eyebrow':'طالب تكنولوجيا سكك حديدية / 2026','hero.name1':'بلال','hero.name2':'محمد يسري',
 'hero.sub':'أحوّل المعرفة التقنية إلى حلول عملية للسكك الحديدية.','hero.tag':'الملف الشخصي / الهندسة',
 'hero.watermark':'تكنولوجيا<br>السكك الحديدية','hero.note':'مقيم في قليوب، مصر<br>ومتاح لفرص العمل','hero.scroll':'مرر للاستكشاف',
 'services.kicker':'قدراتي','services.title':'خدماتي',
 'services.marquee':'صيانة السكك الحديدية — الوحدات المتحركة — القاطرات — القضبان والإشارات — العمليات الصناعية — صيانة السكك الحديدية — الوحدات المتحركة — القاطرات — القضبان والإشارات — العمليات الصناعية — ',
 'services.intro1':'تكنولوجيا السكك الحديدية،','services.intro2':'بناء قدرات تقنية عملية في مجال السكك الحديدية مدعومة بخبرة ميدانية حقيقية.',
 'services.s1':'صيانة السكك الحديدية','services.s1b':'فهم عملي لصيانة القاطرات وإجراءات العمرة وممارسات الورش وروتين الفحص ومعدات السكك الحديدية.',
 'services.s2':'الوحدات المتحركة والقاطرات','services.s2b':'تدريب على فحص العربات وأساسيات القاطرات ومحركات الديزل وأنظمة الجر وعمليات مخرطة العجلات.',
 'services.s3':'القضبان وأنظمة الإشارات','services.s3b':'معرفة أساسية بمكونات قضبان السكك الحديدية ولحام القضبان والصيانة والإشارات وأنظمة التعشيق.',
 'services.s4':'العمليات الصناعية والتقنية','services.s4b':'خبرة صناعية عملية تشمل اللحام الروبوتي والقطع بليزر الألياف ثنائي وثلاثي الأبعاد وجودة الإنتاج وسلامة بيئة العمل.',
 'about.kicker':'الملف الشخصي','about.title':'نبذة عني','about.tag':'الملف الشخصي / 2026',
 'about.lead':'أنا بلال محمد، طالب في السنة الرابعة بقسم تكنولوجيا السكك الحديدية بجامعة 6 أكتوبر التكنولوجية.',
 'about.p2':'تشمل خبرتي العملية ورش السكك الحديدية والتدريب الميداني والبيئات الصناعية، مع بناء أساس قوي في صيانة السكك الحديدية والوحدات المتحركة والجر والإشارات وأنظمة القضبان والسلامة الصناعية.',
 'about.p3':'أركز على تطوير مهاراتي التقنية وبناء مسيرة مهنية في النقل بالسكك الحديدية من خلال التعلم المستمر والخبرة الواقعية.',
 'about.f1k':'التعليم','about.f1v':'بكالوريوس تكنولوجيا — سكك حديدية','about.f2k':'اللغات','about.f2v':'العربية / الإنجليزية','about.f3k':'الموقع','about.f3v':'قليوب، مصر',
 'exp.kicker':'خبراتي','exp.title':'الخبرات العملية',
 'exp.e1t':'الهيئة القومية لسكك حديد مصر','exp.e1d':'تدريب في ورش السكك الحديدية وتدريب ميداني في الإشارات وهندسة القضبان والقاطرات والعربات ومخرطة العجلات والجر.',
 'exp.e2t':'إنيت / سيمنس — القطار الكهربائي السريع','exp.e2d':'تدريب متخصص في مشروع الوحدات المتحركة.',
 'exp.e3t':'إنيت — تقييم مشاريع السكك الحديدية','exp.e3d':'تدريب في أساسيات تقييم وتقدير مشاريع السكك الحديدية.',
 'exp.e4t':'المقاولون العرب','exp.e4d':'تدريب عملي صيفي · التقدير النهائي: ممتاز.',
 'exp.e5t':'إرماس (ERMAS)','exp.e5d':'تدريب على صيانة وعمرة القاطرات.',
 'exp.e6t':'أكاديمية أخبار اليوم','exp.e6d':'أساسيات الورش الصناعية والممارسات الهندسية.',
 'exp.e7d0':'11/2022 — حتى الآن','exp.e7t':'أخصائي مبيعات ولوجستيات','exp.e7d':'الزهراء للأدوات الكهربائية · دعم فني للعملاء وإدارة المخزون والفواتير واللوجستيات.',
 'exp.e8t':'مشغل ماكينات — CNC وروبوتات','exp.e8d':'أبو حوة للتصنيع · لحام روبوتي وقطع بليزر الألياف ثنائي وثلاثي الأبعاد.',
 'skills.kicker':'التخصص','skills.title':'الملف التقني',
 'skills.r1t':'أنظمة السكك الحديدية','skills.r1d':'صيانة · وحدات متحركة · قاطرات',
 'skills.r2t':'الخبرة الميدانية','skills.r2d':'ورش · فحص · تدريب صناعي',
 'skills.r3t':'المعرفة التقنية','skills.r3d':'جر · إشارات · أنظمة قضبان · لحام',
 'skills.r4t':'مهارات صناعية','skills.r4d':'CNC · لحام روبوتي · قطع بليزر ألياف',
 'skills.r5t':'مهارات مهنية','skills.r5d':'سلامة · عمل جماعي · تواصل · تنظيم',
 'work.kicker':'مشاريع تطوير ومشاريع جامعية','work.title':'المشاريع',
 'work.w1d':'تطبيق ويب','work.w2d':'موقع بورتفوليو','work.w3d':'موقع بورتفوليو',
 'work.w4d':'تحميل الفيديوهات مباشرة من الرابط. سريع وبسيط وسهل الاستخدام.','work.w5d':'مشروع جامعي',
 'work.placeholder':'اختر<br>مشروعاً','work.open':'افتح المشروع',
 'edu.kicker':'التعليم','edu.title':'التعليم','edu.e1d0':'10/2023 — حتى الآن',
 'edu.e1t':'بكالوريوس التكنولوجيا — تكنولوجيا السكك الحديدية','edu.e1d':'جامعة 6 أكتوبر التكنولوجية · تكنولوجيا وصيانة السكك الحديدية.',
 'contact.kicker1':'لنتواصل','contact.kicker2':'التواصل','contact.title':'تواصل معي','contact.name':'بلال محمد','contact.city':'قليوب، مصر',
 'contact.email':'البريد الإلكتروني','contact.phone':'الهاتف','contact.whatsapp':'واتساب','contact.linkedin':'عرض الملف الشخصي','contact.github':'عرض المشاريع',
 'contact.cv':'تحميل السيرة الذاتية','contact.cvsub':'PDF · بالإنجليزية','contact.location':'الموقع','contact.locationv':'قليوب، القليوبية، مصر',
 'form.eyebrow':'عندك مشروع أو فرصة عمل؟','form.title':'أرسل طلبك','form.intro':'شارك بعض التفاصيل وسأعود إليك في أقرب وقت ممكن.',
 'form.name':'الاسم','form.phone':'رقم الهاتف','form.phoneph':'+20 1...','form.email':'البريد الإلكتروني','form.message':'كيف يمكنني مساعدتك؟','form.submit':'إرسال الطلب',
 'form.sending':'جارٍ إرسال طلبك...','form.connError':'تعذر الاتصال. حاول مرة أخرى بعد قليل.','form.processError':'تعذر معالجة الطلب. حاول مرة أخرى لاحقاً.',
 'form.success':'تم إرسال طلبك بنجاح. شكراً لك!','form.sent':'تم الإرسال',
 'footer.name':'بلال محمد','footer.role':'طالب تكنولوجيا سكك حديدية','skills.title':'المهارات التقنية','skills.s1':'الوحدات المتحركة','skills.s2':'صيانة الجرارات','skills.s3':'إشارات السكك الحديدية','skills.s4':'هندسة القضبان','skills.s5':'أنظمة الجر','skills.s6':'تقييم المشروعات','rail.home':'الرئيسية','rail.services':'الخدمات','rail.about':'نبذة','rail.experience':'الخبرة','rail.work':'الأعمال','rail.journey':'التعليم','rail.contact':'التواصل','rail.next':'المحطة التالية','rail.final':'المحطة الأخيرة'
}};

let lang=localStorage.getItem('bm-lang')||'en';
const tr=k=>(I18N[lang]&&I18N[lang][k])||I18N.en[k]||k;

function applyLang(next){
  lang=next;
  localStorage.setItem('bm-lang',lang);
  const ar=lang==='ar';
  document.documentElement.lang=ar?'ar':'en';
  document.documentElement.dir=ar?'rtl':'ltr';
  document.title=ar?'بلال محمد — مهندس تكنولوجيا سكك حديدية':'Belal Mohamed — Railway Technology Engineer';
  $$('[data-i18n]').forEach(el=>{el.textContent=tr(el.dataset.i18n)});
  $$('[data-i18n-html]').forEach(el=>{el.innerHTML=tr(el.dataset.i18nHtml)});
  $$('[data-i18n-aria]').forEach(el=>{el.setAttribute('aria-label',tr(el.dataset.i18nAria))});
  $$('[data-i18n-ph]').forEach(el=>{el.setAttribute('placeholder',tr(el.dataset.i18nPh))});
  const lt=$('#langToggle');
  if(lt) lt.textContent=ar?'EN':'عربي';
  document.body.classList.toggle('ar',ar);
  splitTitles();
}

/* ---------------- split-text display titles ---------------- */
function splitTitles(){
  $$('.display-title').forEach(title=>{
    const text=(title.dataset.i18n?tr(title.dataset.i18n):title.textContent).trim();
    title.classList.add('split');
    title.setAttribute('aria-label',text);
    title.innerHTML=text.split(/\s+/).map((w,i)=>
      `<span class="st-w" aria-hidden="true"><span class="st-i" style="--i:${i}">${w}</span></span>`
    ).join(' ');
  });
}

const currentYear=$('#currentYear');
if(currentYear) currentYear.textContent=new Date().getFullYear();

/* ---------------- Lenis smooth scroll ---------------- */
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis=null;
const headerScrollOffset=()=>Math.ceil(document.querySelector(".topbar").getBoundingClientRect().height)+16;
if(window.Lenis&&!reducedMotion){
  lenis=new Lenis({duration:1.15,smoothWheel:true});
  window.__lenis=lenis;
  document.documentElement.classList.add('lenis-on');
  const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};
  requestAnimationFrame(raf);
}
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length<2) return;
    const target=document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    if(window.__wipeNav) return;
    if(lenis) lenis.scrollTo(target,{offset:-headerScrollOffset()});
    else target.scrollIntoView({behavior:reducedMotion?'auto':'smooth'});
  });
});

/* ---------------- menu ---------------- */
const menu=$('#menuPanel'), open=$('#menuButton'), close=$('#closeMenu'), backdrop=$('.menu-backdrop');
const setMenuState=isOpen=>{
  menu.classList.toggle('open',isOpen);
  document.body.classList.toggle('menu-open',isOpen);
  menu.setAttribute('aria-hidden',String(!isOpen));
  open.setAttribute('aria-expanded',String(isOpen));
  open.setAttribute('aria-label',isOpen?tr('menu.closeAria'):tr('menu.open'));
  menu.toggleAttribute('inert',!isOpen);
  if(lenis){isOpen?lenis.stop():lenis.start()}
  if(isOpen) setTimeout(()=>close.focus(),350);
  else open.focus();
};
open.addEventListener('click',()=>setMenuState(!menu.classList.contains('open')));
close.addEventListener('click',()=>setMenuState(false));
backdrop.addEventListener('click',()=>setMenuState(false));
$$('[data-close]').forEach(a=>a.addEventListener('click',()=>setMenuState(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))setMenuState(false)});
$$('.menu-panel nav a').forEach((a,i)=>a.style.setProperty('--mi',i));

/* ---------------- language toggle ---------------- */
const langToggle=$('#langToggle');
if(langToggle) langToggle.addEventListener('click',()=>applyLang(lang==='ar'?'en':'ar'));

/* ---------------- services accordion ---------------- */
$$('.service-head').forEach(btn=>btn.addEventListener('click',()=>{
  const isExpanded=btn.closest('.service-item').classList.toggle('active');
  btn.setAttribute('aria-expanded',String(isExpanded));
  document.getElementById(btn.getAttribute('aria-controls')).setAttribute('aria-hidden',String(!isExpanded));
}));

/* ---------------- work preview (click/tap) ---------------- */
const preview=$('#previewImage');
const previewLink=$('#previewLink');
const previewPlaceholder=$('.preview-placeholder');
const selectProject=row=>{
  const {image,link,imageFallback}=row.dataset;
  if(!image) return;
  const previewCard=preview.closest('.work-preview');
  previewCard.classList.remove('has-image');
  preview.classList.remove('show');
  previewLink.hidden=!link;
  if(link) previewLink.href=link; else previewLink.removeAttribute('href');
  previewPlaceholder.hidden=false;
  preview.alt=`Preview of ${row.querySelector('h3').textContent}`;
  preview.onload=()=>{
    previewCard.classList.add('has-image');
    preview.classList.add('show');
    previewPlaceholder.hidden=true;
  };
  preview.onerror=()=>{
    if(imageFallback&&preview.src.indexOf(imageFallback)===-1){preview.src=imageFallback;return;}
    previewCard.classList.remove('has-image');
    preview.classList.remove('show');
    previewLink.hidden=!link;
    previewPlaceholder.hidden=false;
  };
  preview.src=image;
};
$$('.work-row').forEach(row=>{
  row.addEventListener('click',event=>{
    event.preventDefault();
    selectProject(row);
    if(window.innerWidth<=1000){
      document.querySelector('.work-preview')?.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'nearest'});
    }
  });
});

/* ---------------- cursor-follow preview (desktop) ---------------- */
const workFloat=$('#workFloat'), workFloatImg=$('#workFloatImg');
const fine=window.matchMedia('(pointer: fine)').matches;
if(workFloat&&fine&&!reducedMotion){
  let fx=0,fy=0,tx=0,ty=0,rafId=null;
  const follow=()=>{
    fx+=(tx-fx)*.16;fy+=(ty-fy)*.16;
    workFloat.style.transform=`translate3d(${fx+18}px,${fy-70}px,0) scale(${workFloat.classList.contains('on')?1:.94})`;
    if(Math.abs(tx-fx)>.3||Math.abs(ty-fy)>.3) rafId=requestAnimationFrame(follow);
    else rafId=null;
  };
  const kick=()=>{if(!rafId)rafId=requestAnimationFrame(follow)};
  $$('.work-row').forEach(row=>{
    row.addEventListener('mouseenter',()=>{
      const img=row.dataset.image;if(!img)return;
      workFloatImg.src=img;
      workFloat.classList.add('on');kick();
    });
  });
  $('.work-list').addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;kick()});
  $('.work-list').addEventListener('mouseleave',()=>workFloat.classList.remove('on'));
}

/* ---------------- reveals ---------------- */
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min((i%5)*55,220)+'ms';io.observe(el)});

/* ---------------- hero entrance delays ---------------- */
$$('.hero .anim').forEach(el=>{/* delays set via nth CSS */});


/* ---------------- page wipe transitions (menu navigation) ---------------- */
const pageWipe=$('#pageWipe');
document.addEventListener('click',e=>{
  const a=e.target&&e.target.closest?e.target.closest('.menu-panel nav a'):null;
  if(!a) return;
  const id=a.getAttribute('href');
  const target=id&&id.length>1?document.querySelector(id):null;
  if(!target) return;
  e.preventDefault();
  if(reducedMotion||!pageWipe) return;
  window.__wipeNav=true;
  setMenuState(false);
  pageWipe.classList.add('active','in');
  setTimeout(()=>{
    if(lenis) lenis.scrollTo(target,{offset:-headerScrollOffset(),immediate:true});
    else{
      const de=document.documentElement, prevB=de.style.scrollBehavior;
      de.style.scrollBehavior='auto';
      window.scrollTo(0,target.getBoundingClientRect().top+window.scrollY-headerScrollOffset());
      de.style.scrollBehavior=prevB;
    }
    pageWipe.classList.remove('in');
    pageWipe.classList.add('out');
    setTimeout(()=>{pageWipe.classList.remove('active','out');window.__wipeNav=false;},640);
  },520);
},true);

/* ---------------- skills matrix fill ---------------- */
const skillsEl=$('.skills');
if(skillsEl){
  const so=new IntersectionObserver(es=>{
    es.forEach(en=>{if(en.isIntersecting){skillsEl.classList.add('in');so.disconnect();}});
  },{threshold:.3});
  so.observe(skillsEl);
}

/* ---------------- scroll effects: topbar, progress, parallax, timeline ---------------- */
const heroVideo=$('.hero-video'), heroPortraitWrap=$('.hero-portrait-wrap');
const timelineList=$('.experience-list'), timelineProgress=$('#timelineProgress');
let ticking=false;
const onScroll=()=>{
  if(ticking) return;
  ticking=true;
  requestAnimationFrame(()=>{
    ticking=false;
    const now=window.scrollY;
    document.body.classList.toggle('scrolled',now>30);
    const scrollableHeight=document.documentElement.scrollHeight-window.innerHeight;
    document.documentElement.style.setProperty('--scroll-progress',`${scrollableHeight>0?now/scrollableHeight*100:0}%`);
    if(!reducedMotion){
      const heroH=innerHeight;
      if(now<heroH*1.2){
        if(heroVideo) heroVideo.style.transform=`translate3d(0,${now*.22}px,0)`;
        if(heroPortraitWrap) heroPortraitWrap.style.transform=`translate3d(0,${now*-.07}px,0)`;
      }
      if(timelineList&&timelineProgress){
        const r=timelineList.getBoundingClientRect();
        const passed=Math.min(Math.max((innerHeight*.65-r.top)/r.height,0),1);
        timelineProgress.style.height=`${passed*100}%`;
      }
    }
  });
};
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();

/* ---------------- active section in menu ---------------- */
const sectionLinks=new Map(Array.from($$('.menu-panel nav a'),link=>[link.hash,link]));
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    sectionLinks.forEach(link=>{
      const isCurrent=link.hash===`#${entry.target.id}`;
      link.classList.toggle('is-current',isCurrent);
      if(isCurrent) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  });
},{rootMargin:'-25% 0px -60% 0px'});
$$('main > section[id]').forEach(section=>sectionObserver.observe(section));

/* ---------------- request form ---------------- */
const requestForm=$('#requestForm');
if(requestForm){
  const requestSubmit=requestForm.querySelector('.request-submit');
  const requestStatus=$('#requestStatus');
  const submitLabel=requestSubmit.querySelector('span');
  requestForm.addEventListener('submit',async event=>{
    event.preventDefault();
    requestSubmit.disabled=true;
    requestStatus.dataset.state='';
    requestStatus.textContent=tr('form.sending');
    let response;
    try{
      response=await fetch('/api/request',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(Object.fromEntries(new FormData(requestForm)))
      });
    }catch{
      requestStatus.dataset.state='error';
      requestStatus.textContent=tr('form.connError');
      requestSubmit.disabled=false;
      return;
    }
    let result;
    try{result=await response.json()}catch{
      requestStatus.dataset.state='error';
      requestStatus.textContent=tr('form.processError');
      requestSubmit.disabled=false;
      return;
    }
    if(!response.ok){
      requestStatus.dataset.state='error';
      requestStatus.textContent=result.error||tr('form.processError');
      requestSubmit.disabled=false;
      return;
    }
    requestForm.reset();
    requestStatus.dataset.state='success';
    requestStatus.textContent=tr('form.success');
    requestSubmit.classList.add('sent');
    submitLabel.textContent='✓ '+tr('form.sent');
    setTimeout(()=>{
      requestSubmit.classList.remove('sent');
      submitLabel.textContent=tr('form.submit');
      requestSubmit.disabled=false;
    },3500);
  });
}

/* ---------------- init language ---------------- */
applyLang(lang);
