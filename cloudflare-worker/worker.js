const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Mr Matt Plumbing — The plumber restaurants trust</title>
<meta name="description" content="Whitstable-based plumber serving London & Kent. Domestic & commercial. Specialist in restaurants and bars. Free estimates, no call-out charge." />
<meta property="og:title" content="Mr Matt Plumbing — The plumber restaurants trust" />
<meta property="og:description" content="Domestic & commercial plumbing across London and Kent. Specialist in restaurants and bars." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<style>
  :root {
    --bg: #0D0F14;
    --bg-alt: #111318;
    --brass: #C9A96E;
    --off: #F0EBE0;
    --muted: #8A8070;
    --card-bg: rgba(255,255,255,0.03);
    --card-border: rgba(201,169,110,0.15);
    --glow: 0 0 24px rgba(201,169,110,0.12);
    --font-display: "Playfair Display", serif;
    --font-body: "Inter", system-ui, sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: var(--bg); color: var(--off); font-family: var(--font-body); -webkit-font-smoothing: antialiased; }
  a { color: inherit; text-decoration: none; }
  a[href*="lovable.dev"] { display: none !important; }
  .eyebrow { text-transform: uppercase; letter-spacing: 0.12em; font-size: 11px; color: var(--brass); font-weight: 500; display: inline-flex; align-items: center; gap: 8px; }
  .eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brass); box-shadow: 0 0 10px rgba(201,169,110,0.8); display: inline-block; }
  .rule { height: 1px; width: 48px; background: var(--brass); box-shadow: var(--glow); margin: 28px auto; border: 0; }
  h1, h2, h3 { font-family: var(--font-display); font-weight: 500; color: var(--off); }
  .hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 6rem 1.5rem; overflow: hidden; background: var(--bg); }
  .hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 600px 400px at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%); pointer-events: none; }
  .hero-pipe-tr { position: absolute; top: -80px; right: -120px; width: 520px; height: 520px; pointer-events: none; }
  .hero-pipe-bl { position: absolute; bottom: -100px; left: -140px; width: 380px; height: 380px; pointer-events: none; transform: rotate(180deg); }
  .hero-inner { position: relative; z-index: 2; max-width: 760px; text-align: center; }
  .hero h1 { font-family: var(--font-display); font-style: italic; font-weight: 500; font-size: clamp(36px, 6vw, 64px); line-height: 1.05; margin-top: 28px; color: var(--off); }
  .hero .sub { color: var(--muted); margin-top: 24px; font-size: 17px; letter-spacing: 0.02em; }
  .pill { display: inline-flex; align-items: center; justify-content: center; background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.25); border-radius: 999px; padding: 12px 28px; font-size: 28px; font-weight: 600; color: var(--brass); transition: box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease; font-family: var(--font-body); }
  .pill:hover { box-shadow: 0 0 32px rgba(201,169,110,0.35); background: rgba(201,169,110,0.12); border-color: rgba(201,169,110,0.5); }
  .pill-lg { font-size: clamp(28px, 5vw, 42px); padding: 16px 36px; }
  .micro { color: var(--muted); margin-top: 22px; font-size: 13px; letter-spacing: 0.04em; }
  .micro-brass { color: var(--brass); text-transform: uppercase; letter-spacing: 0.28em; font-size: 11px; }
  section { padding: 7rem 1.5rem; position: relative; }
  .container { max-width: 1080px; margin: 0 auto; }
  .section-head { text-align: center; margin-bottom: 4rem; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 16px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); padding: 36px 28px; text-align: center; transition: border-color 0.25s ease, box-shadow 0.25s ease; }
  .card:hover { border-color: rgba(201,169,110,0.4); box-shadow: 0 0 24px rgba(201,169,110,0.1); }
  .card svg { color: var(--brass); }
  .card h3 { font-size: 20px; margin-top: 20px; }
  .card p { color: var(--muted); margin-top: 12px; font-size: 14px; line-height: 1.7; }
  .speciality { background: var(--bg-alt); text-align: center; overflow: hidden; }
  .speciality::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 700px 360px at 50% 50%, rgba(201,169,110,0.08), transparent 70%); pointer-events: none; }
  .speciality .inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
  .speciality p.body { color: var(--muted); max-width: 560px; margin: 32px auto 0; font-size: 17px; line-height: 1.75; }
  .quote { font-family: var(--font-display); font-style: italic; font-size: clamp(28px, 4vw, 36px); color: var(--brass); margin-top: 56px; line-height: 1.3; }
  .about-panel { max-width: 720px; margin: 0 auto; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 16px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); padding: 56px 48px; }
  .about-panel p { color: var(--muted); line-height: 1.9; max-width: 640px; margin: 0 auto; font-size: 15px; }
  .about-panel p + p { margin-top: 24px; }
  .about h2 { font-size: clamp(36px, 5vw, 48px); text-align: center; }
  .reassurances { background: var(--bg-alt); overflow: hidden; padding: 5rem 1.5rem; }
  .reassurances::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse 600px 240px at 50% 50%, rgba(201,169,110,0.08), transparent 70%); pointer-events: none; }
  .reassure-row { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; max-width: 1000px; margin: 0 auto; flex-wrap: wrap; }
  .reassure-row > div { flex: 1; min-width: 220px; padding: 16px 32px; text-align: center; font-family: var(--font-display); font-style: italic; font-size: 22px; color: var(--brass); position: relative; }
  .reassure-row > div + div::before { content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 1px; height: 36px; background: rgba(201,169,110,0.3); }
  footer.call { text-align: center; padding: 8rem 1.5rem; }
  footer.call h2 { font-size: clamp(36px, 5vw, 56px); }
  footer.call .pill { margin-top: 36px; }
  .copyright { margin-top: 56px; color: var(--muted); font-size: 12px; opacity: 0.7; }
  .al-badge { position: fixed; right: 16px; bottom: 16px; z-index: 999; display: flex; align-items: center; gap: 8px; background: rgba(61,68,102,0.85); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1); border-radius: 999px; padding: 8px 14px; transition: background 0.2s ease; }
  .al-badge:hover { background: rgba(74,82,120,0.9); }
  .al-badge img { width: 20px; height: 20px; border-radius: 4px; display: block; }
  .al-badge span { font-family: var(--font-body); font-size: 12px; color: var(--off); }
  .fade { opacity: 0; transform: translateY(16px); transition: opacity 0.8s ease, transform 0.8s ease; }
  .fade.in { opacity: 1; transform: none; }
  .fade.d1 { transition-delay: 0.1s; }
  .fade.d2 { transition-delay: 0.25s; }
  .fade.d3 { transition-delay: 0.4s; }
  .fade.d4 { transition-delay: 0.55s; }
  .fade.d5 { transition-delay: 0.7s; }
  @media (max-width: 760px) {
    .cards { grid-template-columns: 1fr; }
    .reassure-row > div + div::before { display: none; }
    .about-panel { padding: 40px 24px; }
    section { padding: 5rem 1.25rem; }
    .hero-pipe-tr { width: 320px; height: 320px; top: -40px; right: -80px; }
    .hero-pipe-bl { width: 240px; height: 240px; bottom: -60px; left: -80px; }
  }
</style>
</head>
<body>

<section class="hero">
  <svg class="hero-pipe-tr" viewBox="0 0 400 400" fill="none" stroke="rgba(201,169,110,0.18)" stroke-width="40" stroke-linecap="round">
    <path d="M400 140 L200 140 Q140 140 140 200 L140 400" />
    <circle cx="200" cy="140" r="58" stroke-width="6" />
    <circle cx="140" cy="340" r="58" stroke-width="6" />
    <circle cx="200" cy="140" r="30" stroke-width="4" />
    <circle cx="140" cy="340" r="30" stroke-width="4" />
  </svg>
  <svg class="hero-pipe-bl" viewBox="0 0 400 400" fill="none" stroke="rgba(201,169,110,0.18)" stroke-width="40" stroke-linecap="round">
    <path d="M400 140 L200 140 Q140 140 140 200 L140 400" />
    <circle cx="200" cy="140" r="58" stroke-width="6" />
    <circle cx="140" cy="340" r="58" stroke-width="6" />
  </svg>
  <div class="hero-inner">
    <p class="eyebrow fade in d1"><span class="dot"></span>Mr Matt Plumbing · Whitstable</p>
    <h1 class="fade d2">The plumber restaurants trust.</h1>
    <p class="sub fade d3">Domestic &amp; commercial — London and Kent.</p>
    <hr class="rule fade d3" />
    <a class="pill fade d4" href="tel:+447957184478">07957 184 478</a>
    <p class="micro fade d5">Free estimates · No call-out charge</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head fade">
      <p class="eyebrow"><span class="dot"></span>What Matt does</p>
      <hr class="rule" />
    </div>
    <div class="cards">
      <div class="card fade d1">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8l6 6-10 10-6-6z" />
          <path d="M24 14l16 16" />
          <path d="M30 32l8 8-4 4-8-8z" />
        </svg>
        <h3>General Plumbing</h3>
        <p>Leaks, taps, boilers, bathrooms, blockages — all domestic and commercial work undertaken.</p>
      </div>
      <div class="card fade d2">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 28a14 14 0 0 1 28 0" />
          <path d="M6 32h36" />
          <path d="M24 14V8" />
          <circle cx="24" cy="7" r="1.5" fill="currentColor" />
        </svg>
        <h3>Restaurants &amp; Bars</h3>
        <p>Kitchens, bar pipework, cellar cooling lines — Matt knows how hospitality venues work and schedules around your service.</p>
      </div>
      <div class="card fade d3">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <path d="M24 42s14-12 14-23a14 14 0 0 0-28 0c0 11 14 23 14 23z" />
          <circle cx="24" cy="19" r="4.5" />
        </svg>
        <h3>London &amp; Kent</h3>
        <p>Based in Whitstable, serving private clients and venues across Kent and central London.</p>
      </div>
    </div>
  </div>
</section>

<section class="speciality">
  <div class="inner fade">
    <p class="eyebrow"><span class="dot"></span>Speciality</p>
    <hr class="rule" />
    <p class="body">Matt specialises in hospitality plumbing — fast, discreet work that respects your kitchen and your service times.</p>
    <p class="quote">&ldquo;Back of house before service starts.&rdquo;</p>
  </div>
</section>

<section class="about">
  <div class="container">
    <div class="section-head fade">
      <p class="eyebrow"><span class="dot"></span>The man</p>
      <h2 style="margin-top:24px;">About Matt.</h2>
      <hr class="rule" />
    </div>
    <div class="about-panel fade d1">
      <p>Matt has been working as a plumber across London and Kent for over two decades. Based in Whitstable, he's built a reputation among restaurant owners, bar managers, and private clients who want the job done properly — on time, on budget, and without the fuss. He works alone, which means the person who answers the phone is the person who turns up. No subcontractors, no surprises.</p>
      <p>Restaurants and bars are a particular speciality. Matt understands that a plumbing problem in a working kitchen isn't just an inconvenience — it's lost covers and lost revenue. He works around your service times, arrives when he says he will, and leaves the place as he found it.</p>
      <p>All general plumbing work undertaken — domestic and commercial. Competitive rates, free estimates, and no call-out charge.</p>
    </div>
  </div>
</section>

<section class="reassurances">
  <div class="reassure-row">
    <div class="fade d1">Competitive rates</div>
    <div class="fade d2">Free estimates</div>
    <div class="fade d3">No call-out charge</div>
  </div>
</section>

<footer class="call">
  <div class="fade">
    <p class="eyebrow"><span class="dot"></span>Get in touch</p>
    <h2 style="margin-top:24px;">Call Matt.</h2>
    <hr class="rule" />
    <a class="pill pill-lg" href="tel:+447957184478">07957 184 478</a>
    <p class="micro-brass" style="margin-top:28px;">Serving London &amp; Kent</p>
    <p class="copyright">© Mr Matt Plumbing. All rights reserved.</p>
  </div>
</footer>

<a class="al-badge" href="https://astrolabs.com" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AstroLabs-UK/gentleman-plumber-kent/blob/73f220b25c557f2b7344b40a993e51a6890b076b/src/components/ui/AL.png?raw=true" alt="AstroLabs" />
  <span>Made by AstroLabs</span>
</a>

<script>
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade').forEach((el) => io.observe(el));
  document.querySelectorAll('.hero .fade').forEach((el) => requestAnimationFrame(() => el.classList.add('in')));
</script>
</body>
</html>`;

export default {
  async fetch() {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
};
