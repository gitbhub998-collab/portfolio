/* The logo video is optional: every exit path returns to the unchanged site. */
(() => {
  const intro = document.getElementById('logoIntro');
  const video = document.getElementById('introVideo');
  if (!intro || !video) { document.body.classList.add('ready'); return; }
  let finished = false;
  let startupTimer, stallTimer, deadline;
  const page = [...document.body.children].filter(el => el !== intro && !['SCRIPT', 'NOSCRIPT'].includes(el.tagName));
  const previousFocus = document.activeElement;
  const preventScroll = event => event.preventDefault();
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(startupTimer); clearTimeout(stallTimer); clearTimeout(deadline);
    const hadFocus = intro.contains(document.activeElement);
    video.pause();
    page.forEach(el => { el.inert = false; });
    document.documentElement.classList.remove('intro-active');
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', onKey);
    document.body.classList.add('ready');
    intro.classList.add('is-hidden');
    if (hadFocus) {
      const target = previousFocus && previousFocus !== document.body ? previousFocus : document.querySelector('.brand');
      target?.focus({ preventScroll: true });
    }
    setTimeout(() => { video.removeAttribute('src'); video.load(); intro.remove(); }, 500);
  }
  function onKey(event) {
    if (event.key === 'Escape') finish();
    if (event.key === 'Tab') event.preventDefault();
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.connection?.saveData) { finish(); return; }
  document.body.classList.add('js-anim');
  intro.classList.add('is-active');
  document.documentElement.classList.add('intro-active');
  page.forEach(el => { el.inert = true; });
  intro.tabIndex = -1;
  intro.focus({ preventScroll: true });
  document.addEventListener('keydown', onKey);
  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
  video.addEventListener('ended', finish, { once: true });
  video.addEventListener('error', finish, { once: true });
  video.addEventListener('playing', () => { clearTimeout(startupTimer); clearTimeout(stallTimer); });
  const stalled = () => { clearTimeout(stallTimer); stallTimer = setTimeout(finish, 4000); };
  video.addEventListener('waiting', stalled);
  video.addEventListener('stalled', stalled);
  startupTimer = setTimeout(finish, 5000);
  deadline = setTimeout(finish, 18000);
  video.muted = true;
  video.src = '/logo-intro-sparkle.mp4';
  const playback = video.play();
  if (playback?.catch) playback.catch(finish);
})();
