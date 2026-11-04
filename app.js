/* HONEST MISTAKE — survey logic. No framework, no build step. */
(function () {
  const D = window.HM;
  const N = D.pieces.length;
  const app = document.getElementById("app");
  const STORE = "hm-survey-v1";

  /* ---------- brand marks ---------- */
  const LOGO = '<svg viewBox="0 0 47.886 47.345" aria-hidden="true"><path d="M26.91 10.61c.4-.08 1.41-.07 1.42.51.01.48-1.36 2.08-1.6 2.84-.5 1.55 1.36.63 2.05.38 1.91-.7 3.82-.91 5.71.01.7.34 1.61.89 1.04 1.42-.47.43-1.51.62-2.13.97-2.22 1.25-2.39 2.65-3.32 4.73-.68 1.52-3.12 2.86-3.41 3.93-.17.63.54.95.53 1.58-.03 1.17-1.72 3.25-1.31 4.5s2.72.46 2.98.97c.15.3-.97.98-1.2 1.13-1.06.67-2.69 1.42-3.95 1.48-1.13.05-2.27-.49-3.39-.49-2.53 0-4.27 1.6-7.14-1.27-1.1-1.1.21-.93.92-.99 1.45-.13 2.43-.29 3.05-1.74.56-1.32.56-2.84 1.53-3.97.37-.42 1.19-.86 1.24-1.45.06-.67-.49-1.44-.69-2.06-.51-1.58.45-3.09-.19-4.82-.55-1.47-1.59-1.5-2.86-1.87-.9-.26-.23-1.05.22-1.41 1.2-.95 2.56-1.58 4.89-1.23.88.13 3.08 1.08 3.77.79.43-.18.7-1.7.86-2.2.09-.28.46-1.38.62-1.56.14-.15.27-.17.35-.19"/><path d="M40.11 23.31l0 .04c-.47 5.43-2.56 10.32-7.04 13.23-1.99 1.29-4.34 2.1-6.67 2.81-2.64.79-5.53.61-8.34-.4C12.18 37.04 8.03 30.28 8 24.55c-.07-3.81.89-7.58 3.07-10.44 2.02-2.37 4.59-4.51 7.53-5.65 2.64-.9 5.63-1.24 8.56-.64 3.73.93 7.66 2.84 10 6.15 1.96 2.8 3.26 6.13 2.95 9.35m2.54-1.72l-.01-.04c-.41-2.31-1.01-4.66-2.27-6.76-1.42-2.25-3.11-4.54-5.21-6.2-4.51-3.24-10.39-4.1-15.36-3.31-2.56.44-4.62 1.94-6.61 3.4-1.1.81-2.16 1.69-3.06 2.72-1.6 1.93-3.15 3.95-4.1 6.32-1.27 3.45-1.4 7.68-.24 11.37.88 2.84 2.66 5.38 4.73 7.63 1.85 2.12 4.23 3.5 6.85 4.38 3.41 1.28 7.13 1.61 10.48.85 2.68-.74 5.3-1.85 7.44-3.49 1.56-1.26 2.96-2.75 4.04-4.45.72-1.16 1.31-2.41 1.87-3.67 1.3-2.81 2.1-5.41 1.45-8.74"/></svg>';
  const BURST_D = "M165.49 53.53c-6.56 3.02-16 13.72-23.67 8.85-2.4-1.52-4.23-10.35-5.77-13.98-3.33-7.85-6.4-16.11-10.64-23.41-3.42-.82-8.78 15.03-10.57 17.96-.82 1.33-4.08 6.23-4.88 7.2-2.44 2.96-7.34 2.52-10.77 2.16-5.07-.53-25.85-9.64-31.34-12.58-1.04-.55-4.01-4.27-4.46-3.76.82 6.66 13.45 13.24 11.62 19.77-3.44 12.28-15.07 1.69-22.29 6.27-4.32 2.74-.18 1.83 1.31 2.43 3.64 1.47 7.94 4 11.46 5.09 4.35 1.34 10.11-.57 13.13 4.44 4.27 7.09-8.04 10.77-12.56 13.57-1.38.86-.67 1.37-3.73 2.96C51.38 96.2 42.34 103 31.51 110.09c-1.29.84-2.83-.27-2.18 2.71 6.85.49 13.65-2.8 20.24-3.82 6.21-.96 27.46-3.68 31.77-.67.49.34 4.32 9.4 4.82 10.87 1.6 4.73 2.65 15.24 5.24 18.84 3.14 4.37 7.17-5.34 9.52-8.03 2.95-3.38 6.88-6.37 9.68-10.04 1.48-1.93 1.49-4.66 3.24-6.64 2.92-3.32 8.95-5.14 11.92-.85 2.01 2.9 4.84 13.76 6.95 18.3 1.32 2.85 8.64 17.91 10.4 18.21 9.69-7.55 20.11-16.17 24.51-28 8.76-8.79 21.99 16.93 26.91 15.97 5.18-1.02-.84-8.35-1.31-9.59-2.9-7.61-11.99-30.37-11.28-37.06.97-9.18 11.22-4.57 15.4-12.6-6.63-2.06-32 3.67-36.27.45-4.91-3.7 4.7-18.81 4.41-24.61m-14.64-7.01c3.4-2.39 11.35-10.93 14.69-14.38 5.35-5.52 10.35-12.55 15.79-18.19 8.54-3.82 6.74 3.19 8.93 6.59.91 1.41 3.61 1.81 4.38 3.33 2.95 5.91-9.22 25.06-12.05 30.82-1.52 3.09-.51 6.83-4.99 9.26.73 1.11 1.25 1.21 2.43 1.43 1.43.27 12.97.18 15.56.14 7.36-.12 14.39-.95 22.27-.3 6 .49 10.17-1.21 9.2 8.64-.52 5.25-1.99 2.43-4.43 3.28-9.86 3.44-19.94 9.78-26.45 17.56.12 7.88 4.85 14.49 7.5 21.15 3.68 9.28 6.91 19.93 11.48 30.17 2.48 5.57 10.06 11.13 5.27 17.54-7.01 9.38-9.79-.61-12.77-1.13-1.62-.28-3.26 1.38-5.67.57-1.08-.36-13.14-14.54-15.56-16.77-.97-.9-10.45-8.42-11.1-8.68-6.24-2.49-4.68.79-7.05 2.66-2.11 1.66-4.85 3.06-6.78 4.8-4.84 4.35-15.27 18.09-20.98 19.15-8.83 1.64-7.29-8.29-9.61-14.05-1.33-3.3-10.73-20.1-13.35-20.65-1.23-.26-2.95.66-3.72 1.7-5.62 5.73-11 22.11-15.93 26.57-2.71 2.46-9.99 3.39-12.01.04-1.15-1.91-2.08-9.93-3.31-13.15-1.67-4.39-4.72-9.29-5.95-12.92-1.19-3.49-.82-8.02-4.41-10.66-4.3 1.82-12.52.24-15.97 1.08-15.55 3.81-21.94 3.09-37.34 3.78-2.45.11-4.92 1.84-6.62 1.8-4.28-.11-13.41-10.61-12.19-14.94 1.56-5.53 6.54-4.72 9.85-6.71 5.94-3.58 11.52-8.63 17.32-12.33 2.87-1.83 20.41-11 20.72-12.26-.79-4.31-6.09-5.66-8.35-7.53-1.41-1.17-3.39-4.38-4.54-5.08-4.91-3.01-9.97-1.35-10.23-10.45-.25-8.39 8.97-5.36 14.77-6.1 2.7-.34 5.21-1.55 7.92-1.95 2.59-.39 6.57 1.96 9.19-1.77-3.94-6.18-8.91-11.69-13.01-17.74-.91-1.34-.78-3.22-1.58-4.44-.66-1.01-3.04-1.21-4.35-3.96-1.4-2.92.09-7.41 3.3-8.28 1.45-.39 17.8 5.58 20.56 6.78.64.28.69 1.38 1.46 1.71 11.59 4.99 23.06 10.33 34.65 15.29 4.45-.24 15.68-20.2 17.98-24.81 1.78-3.58 2.83-14.59 9.12-12.99 5.84 1.48 6.02 10.83 7.89 15.28 3.52 8.34 8.32 17.09 11.89 25.44 1.59 3.72.39 9.72 6.18 5.65";
  const BURST = '<svg viewBox="0 0 227.214 167.588" aria-hidden="true"><path d="' + BURST_D + '"/></svg>';
  const STAR = '<svg class="star" viewBox="0 0 227.214 167.588" aria-hidden="true"><path d="' + BURST_D + '"/></svg>';
  const BACK = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M8 1 3 6l5 5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
  const BR_L = '<svg viewBox="0 0 9.417 64.242" aria-hidden="true"><path d="M7.14 64.24C2.58 55.3 0 43.82 0 32.12S2.58 9.01 7.14 0L9.42 2.47C6.18 11.7 4.15 19.98 4.15 32.12c0 12.06 2.03 20.42 5.27 29.58Z"/></svg>';
  const BR_R = '<svg viewBox="0 0 9.417 64.242" aria-hidden="true"><path d="M0 61.7c3.24-9.16 5.27-17.51 5.27-29.58C5.27 19.98 3.24 11.7 0 2.47L2.28 0C6.83 9.01 9.42 20.42 9.42 32.12S6.83 55.3 2.28 64.24Z"/></svg>';

  /* ---------- state ---------- */
  let S = load() || { answers: {}, history: ["welcome"], done: false };
  function save() { try { localStorage.setItem(STORE, JSON.stringify(S)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(STORE)); } catch (e) { return null; } }
  const A = (k, v) => { if (v === undefined) return S.answers[k]; S.answers[k] = v; save(); };
  const cur = () => S.history[S.history.length - 1];

  function go(step) { S.history.push(step); save(); render(); window.scrollTo(0, 0); }
  function back() { if (S.history.length > 1) { S.history.pop(); save(); render(); window.scrollTo(0, 0); } }

  /* step ids: welcome | age | gender | p:<i>:react|why|mat|silver|plated | favs | access | thanks */
  const nextPiece = (i) => (i + 1 < N ? "p:" + (i + 1) + ":react" : "favs");

  /* ---------- helpers ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const img = (f) => f;
  function progress(step) {
    const total = 3 + N; // age, gender, 12 pieces, favs/access
    let p = 0;
    if (step === "age") p = 0.5;
    else if (step === "gender") p = 1;
    else if (step.startsWith("p:")) {
      const [, i, sub] = step.split(":");
      p = 2 + Number(i) + ({ react: 0, why: 0.5, mat: 0.33, silver: 0.66, plated: 0.66 }[sub] || 0);
    } else if (step === "favs") p = 2 + N + 0.3;
    else if (step === "access") p = 2 + N + 0.85;
    return Math.min(1, p / total);
  }
  function label(step) {
    if (step === "age") return "2.0";
    if (step === "gender") return "2.1";
    if (step.startsWith("p:")) {
      const [, i, sub] = step.split(":");
      return (Number(i) + 3) + "." + ({ react: 0, why: 1, mat: 2, silver: 3, plated: 4 }[sub]);
    }
    return { favs: "15.0", access: "16.0", thanks: "17.0", welcome: "1.0", gate: "0.0" }[step];
  }
  function header(step, meta, opts = {}) {
    const showBack = S.history.length > 1 && step !== "thanks" && step !== "gate";
    return `<div class="hdr">
      <div class="label">${showBack ? `<button class="back" data-act="back" aria-label="Back">${BACK}</button>` : ""}${label(step)}</div>
      <div class="logo">${LOGO}</div>
      ${opts.noBar ? "" : `<div class="bar"><i style="width:${(progress(step) * 100).toFixed(1)}%"></i></div>`}
      ${meta ? `<div class="meta">${meta}</div>` : ""}
    </div>`;
  }
  function mini(p) {
    return `<div class="mini"><img src="${img(p.images[0])}" alt=""><span class="name">${esc(p.name)}</span></div>`;
  }

  /* ---------- screens ---------- */
  const V = {};

  /* access-code screen: shown first when data.js has an accessCode */
  V.gate = () => `
    <section class="screen red gate">
      ${header("gate", "", { noBar: true })}
      <img class="wm" src="${img("wordmark.jpg")}" alt="Honest Mistake">
      <div class="body">
        <h1 class="q">This one's invite only.</h1>
        <p class="sub cream">Enter the code that came with your link.</p>
        <input type="text" data-gate placeholder="Access code" autocomplete="off" autocapitalize="characters" spellcheck="false">
        <p class="err" data-err hidden></p>
      </div>
      <div class="btns" style="margin-top:28px"><button class="btn dark tall" data-act="unlock">Enter</button></div>
    </section>`;

  V.welcome = () => `
    <section class="screen red welcome">
      <div class="ghostimg" style="background-image:url(${img("necklace-2-1.jpg")})"></div>
      ${header("welcome", "", { noBar: true })}
      <img class="wm" src="${img("wordmark.jpg")}" alt="Honest Mistake">
      <div class="brackets">${BR_L}<ol><li>01 Honest Mistake</li><li>02 First look</li><li>03 We wanna know<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;what u think</li></ol>${BR_R}</div>
      <p class="intro"><em>We've</em> been working on these <em>designs</em> for a while, and we want the <em>final collection</em> to be shaped by <em>real opinions.</em><br><br>We'd really appreciate your <em>honest thoughts</em>.<br>Takes about 3 minutes.</p>
      <p class="tagline">BE HONEST. WE CAN TAKE IT.</p>
      <button class="burst" data-act="start">${BURST}<span>Start</span></button>
    </section>`;

  function choiceScreen(step, title, sub, list, key, next, solid) {
    const v = A(key);
    return `<section class="screen about">
      ${header(step, "About you")}
      <div class="body">
        <h1 class="q">${title}</h1>
        <p class="sub ${solid ? "red" : ""}">${sub}</p>
        <div class="opts">${list.map((o) =>
          `<button class="opt ${solid ? "solid" : ""} ${v === o ? "picked" : ""}" data-act="pick" data-key="${key}" data-val="${esc(o)}" data-next="${next}">${esc(o)}</button>`).join("")}
        </div>
      </div>
      <p class="foot">Tapping an answer moves to the next screen</p>
    </section>`;
  }
  V.age = () => choiceScreen("age", "How old are you?", "Just so we know who's answering.", D.ages, "age", "gender", true);
  V.gender = () => choiceScreen("gender", "You are…", "Our pieces are made for everyone. This helps us see who likes what.", D.genders, "gender", "p:0:react", true);

  V.react = (i) => {
    const p = D.pieces[i], k = p.id + "_reaction", v = A(k);
    const fit = (f) => (D.fitWhole && D.fitWhole[f]) ? `class="slide contain" style="background:${D.fitWhole[f]}"` : `class="slide"`;
    return `<section class="screen product">
      ${header("p:" + i + ":react", `Piece ${i + 1} of ${N}`)}
      <div class="carousel" data-carousel>${p.images.map((f, n) =>
        `<div ${fit(f)}><img src="${img(f)}" alt="${esc(p.name)} — image ${n + 1}" ${n ? 'loading="lazy"' : ""}></div>`).join("")}</div>
      <div class="dots">${p.images.map((_, n) => `<i class="${n ? "" : "on"}"></i>`).join("")}</div>
      <div class="pinfo"><div class="name">${esc(p.name)}</div><p class="desc">${esc(p.desc)}</p></div>
      <p class="ask">Would you wear this?</p>
      <div class="btns">
        <button class="btn dark ${v === "like_would_wear" ? "picked" : ""}" data-act="react" data-i="${i}" data-val="like_would_wear">Like it, would wear it&nbsp;&nbsp;✓</button>
        <button class="btn" data-act="react" data-i="${i}" data-val="like_wouldnt_wear">Like it, wouldn't wear it</button>
        <button class="btn" data-act="react" data-i="${i}" data-val="dont_like">✕&nbsp;&nbsp;Don't like it</button>
      </div>
    </section>`;
  };

  V.why = (i) => {
    const p = D.pieces[i], picked = (A(p.id + "_whynot") || "").split("|").filter(Boolean);
    const note = A(p.id + "_whynot_note") || "";
    return `<section class="screen">
      ${header("p:" + i + ":why", `Piece ${i + 1} of ${N}`)}
      <div class="body">
        ${mini(p)}
        <h1 class="q" style="margin-top:24px">Why not?</h1>
        <p class="sub">Pick any that fit.</p>
        <div class="chips">${D.whyNot.map((o) =>
          `<button class="chip ${picked.includes(o) ? "picked" : ""}" data-act="chip" data-i="${i}" data-val="${esc(o)}">${esc(o)}</button>`).join("")}</div>
        <p class="lbl">Tell us more (optional)</p>
        <textarea data-note="${i}" placeholder="What would make you wear it?">${esc(note)}</textarea>
      </div>
      <div class="btns" style="margin-top:28px">
        <button class="btn dark tall" data-act="whynext" data-i="${i}" ${picked.length || note.trim() ? "" : "disabled"}>${i + 1 < N ? "Next piece" : "Next"}</button>
      </div>
    </section>`;
  };

  V.mat = (i) => {
    const p = D.pieces[i], v = A(p.id + "_material");
    const o = (val, t, s) => `<button class="opt tall ${v === val ? "picked" : ""}" data-act="mat" data-i="${i}" data-val="${val}"><span>${t}<span class="s">${s}</span></span>${STAR}</button>`;
    return `<section class="screen">
      ${header("p:" + i + ":mat", `Piece ${i + 1} of ${N}`)}
      <div class="body">
        ${mini(p)}
        <h1 class="q" style="margin-top:24px">Which material would you prefer?</h1>
        <p class="sub">Be real with us.</p>
        <div class="opts">${o("silver", "In solid silver", "More expensive option")}${o("plated", "Plated is fine", "Cheaper option")}</div>
        <p class="foot">Tapping an answer moves to the next screen</p>
      </div>
    </section>`;
  };

  function priceScreen(i, kind) {
    const p = D.pieces[i], key = p.id + "_price_" + kind, v = A(key);
    const ranges = (p.prices && p.prices[kind]) || D.defaultPrices[kind];
    return `<section class="screen">
      ${header("p:" + i + ":" + kind, `Piece ${i + 1} of ${N}`)}
      <div class="body">
        ${mini(p)}
        <h1 class="q" style="margin-top:24px">What would you pay for it ${kind === "silver" ? "in silver" : "plated"}?</h1>
        <p class="sub">First instinct.</p>
        <div class="opts">${ranges.map((r, n) => {
          const stored = "Range " + (n + 1) + ": " + r; // keeps answers distinct even if two ranges read the same
          return `<button class="opt ${v === stored ? "picked" : ""}" data-act="price" data-i="${i}" data-kind="${kind}" data-val="${esc(stored)}">${esc(r)}</button>`;
        }).join("")}</div>
        <p class="foot">Tapping an answer moves to the next screen</p>
      </div>
    </section>`;
  }
  V.silver = (i) => priceScreen(i, "silver");
  V.plated = (i) => priceScreen(i, "plated");

  V.favs = () => {
    const f = (A("favourites") || "").split("|").filter(Boolean);
    return `<section class="screen">
      ${header("favs", "Almost done")}
      <div class="body">
        <h1 class="q">Your favourites from the collection?</h1>
        <p class="sub count">Pick 2 or 3.&nbsp;&nbsp;<b>${f.length} / 3 selected</b></p>
        <div class="grid">${D.pieces.map((p) =>
          `<button class="tile ${f.includes(p.name) ? "picked" : ""}" data-act="fav" data-val="${esc(p.name)}"><div class="ph"><img src="${img(p.images[0])}" alt="" loading="lazy"></div><span>${esc(p.name)}</span></button>`).join("")}</div>
        <p class="foot">Next unlocks after 2 picks · max 3</p>
      </div>
      <div class="btns" style="margin-top:12px"><button class="btn dark tall" data-act="go" data-next="access" ${f.length >= 2 ? "" : "disabled"}>Next</button></div>
    </section>`;
  };

  V.access = () => `
    <section class="screen red">
      ${header("access")}
      <div class="body">
        <h1 class="q">Want first access when we launch?</h1>
        <p class="sub cream">Leave your Instagram or email. No spam, just the drop.</p>
        <p class="lbl">Instagram</p>
        <input type="text" data-field="instagram" placeholder="@yourhandle" autocomplete="off" value="${esc(A("instagram") || "")}">
        <p class="lbl">Email</p>
        <input type="email" data-field="email" placeholder="you@email.com" autocomplete="email" value="${esc(A("email") || "")}">
        <p class="err" data-err hidden></p>
      </div>
      <div class="btns" style="margin-top:28px">
        <button class="btn dark tall" data-act="submit">Submit</button>
        <button class="btn ghost" data-act="skip">Skip &amp; Submit</button>
      </div>
    </section>`;

  V.thanks = () => `
    <section class="screen red thanks">
      ${header("thanks", "", { noBar: true })}
      <div class="spacer"></div>
      <h2>Thank you for being honest.</h2>
      <p>Your answers shape what we make. See you at the launch.</p>
      ${D.instagramUrl ? `<div class="btns" style="margin-top:auto;padding-top:28px"><a class="btn tall" href="${esc(D.instagramUrl)}" target="_blank" rel="noopener">Follow us on Instagram</a></div>` : ""}
    </section>`;

  /* ---------- render ---------- */
  function render() {
    const step = (D.accessCode && !S.unlocked) ? "gate" : cur();
    let html;
    if (step.startsWith("p:")) { const [, i, sub] = step.split(":"); html = V[sub](Number(i)); }
    else html = V[step]();
    app.innerHTML = html;
    const c = app.querySelector("[data-carousel]");
    if (c) {
      const dots = app.querySelectorAll(".dots i");
      c.addEventListener("scroll", () => {
        const n = Math.round(c.scrollLeft / (c.firstElementChild.offsetWidth + 8));
        dots.forEach((d, k) => d.classList.toggle("on", k === n));
      }, { passive: true });
    }
  }

  /* ---------- events ---------- */
  app.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || b.disabled) return;
    const act = b.dataset.act, i = Number(b.dataset.i), p = D.pieces[i], val = b.dataset.val;
    switch (act) {
      case "back": back(); break;
      case "unlock": unlock(); break;
      case "start": go("age"); break;
      case "go": go(b.dataset.next); break;
      case "pick": A(b.dataset.key, val); go(b.dataset.next); break;
      case "react":
        if (A(p.id + "_reaction") !== val) clearPiece(p); // changed answer: drop the old branch
        A(p.id + "_reaction", val);
        go(val === "like_would_wear" ? "p:" + i + ":mat" : "p:" + i + ":why"); break;
      case "chip": {
        const k = p.id + "_whynot", arr = (A(k) || "").split("|").filter(Boolean);
        const at = arr.indexOf(val); at > -1 ? arr.splice(at, 1) : arr.push(val);
        A(k, arr.join("|")); b.classList.toggle("picked");
        syncWhy(i); break;
      }
      case "whynext": go(nextPiece(i)); break;
      case "mat":
        if (A(p.id + "_material") !== val) { A(p.id + "_price_silver", ""); A(p.id + "_price_plated", ""); }
        A(p.id + "_material", val); go("p:" + i + ":" + val); break;
      case "price": A(p.id + "_price_" + b.dataset.kind, val); go(nextPiece(i)); break;
      case "fav": {
        const arr = (A("favourites") || "").split("|").filter(Boolean);
        const at = arr.indexOf(val);
        if (at > -1) arr.splice(at, 1); else if (arr.length < 3) arr.push(val); else return;
        A("favourites", arr.join("|")); render(); break;
      }
      case "submit": case "skip": submit(act === "skip", b); break;
    }
  });
  app.addEventListener("input", (e) => {
    const t = e.target;
    if (t.dataset.note !== undefined) { const i = Number(t.dataset.note); A(D.pieces[i].id + "_whynot_note", t.value); syncWhy(i); }
    if (t.dataset.field) A(t.dataset.field, t.value);
  });
  app.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.dataset.gate !== undefined) unlock(); });
  function unlock() {
    const inp = app.querySelector("[data-gate]"), err = app.querySelector("[data-err]");
    const code = (inp.value || "").replace(/\s+/g, "").toUpperCase();
    if (code === String(D.accessCode).replace(/\s+/g, "").toUpperCase()) { S.unlocked = true; save(); render(); window.scrollTo(0, 0); }
    else { err.textContent = "That code isn't right. Check the message you got with the link."; err.hidden = false; inp.select(); }
  }
  function clearPiece(p) {
    ["whynot", "whynot_note", "material", "price_silver", "price_plated"].forEach((f) => A(p.id + "_" + f, ""));
  }
  function syncWhy(i) {
    const p = D.pieces[i], has = (A(p.id + "_whynot") || "").length || (A(p.id + "_whynot_note") || "").trim();
    const btn = app.querySelector('[data-act="whynext"]'); if (btn) btn.disabled = !has;
  }

  /* ---------- submit to Netlify Forms ---------- */
  function payload(skip) {
    const out = { "form-name": "hm-survey", age: A("age") || "", gender: A("gender") || "" };
    D.pieces.forEach((p) => {
      ["reaction", "whynot", "whynot_note", "material", "price_silver", "price_plated"].forEach((f) => {
        out[p.id + "_" + f] = (A(p.id + "_" + f) || "").replace(/\|/g, ", ");
      });
    });
    out.favourites = (A("favourites") || "").replace(/\|/g, ", ");
    out.instagram = skip ? "" : (A("instagram") || "").trim();
    out.email = skip ? "" : (A("email") || "").trim();
    out.completed_at = new Date().toISOString();
    return out;
  }
  /* one readable cell per piece for the Google Sheet */
  const REACT = { like_would_wear: "Would wear it", like_wouldnt_wear: "Likes it, wouldn't wear it", dont_like: "Doesn't like it" };
  function pieceSummary(p) {
    const r = A(p.id + "_reaction");
    if (!r) return "";
    const out = [REACT[r] || r];
    if (r === "like_would_wear") {
      const m = A(p.id + "_material");
      if (m) out.push(m === "silver" ? "Silver" : "Plated");
      const pr = A(p.id + "_price_" + m);
      if (pr) out.push(pr.replace(/^Range \d+: /, ""));
    } else {
      const why = (A(p.id + "_whynot") || "").split("|").filter(Boolean).join(", ");
      if (why) out.push("Why: " + why);
      const note = (A(p.id + "_whynot_note") || "").trim();
      if (note) out.push("Note: " + note);
    }
    return out.join(" · ");
  }
  function googlePayload(skip, E) {
    const out = {};
    const put = (k, v) => { if (E[k]) out[E[k]] = v || ""; };
    put("age", A("age")); put("gender", A("gender"));
    D.pieces.forEach((p) => put(p.id, pieceSummary(p)));
    put("favourites", (A("favourites") || "").replace(/\|/g, ", "));
    put("instagram", skip ? "" : (A("instagram") || "").trim());
    put("email", skip ? "" : (A("email") || "").trim());
    return out;
  }
  async function submit(skip, btn) {
    const err = app.querySelector("[data-err]");
    if (!skip) {
      const ig = (A("instagram") || "").trim(), em = (A("email") || "").trim();
      if (!ig && !em) { err.textContent = "Add your Instagram or email — or tap Skip & Submit."; err.hidden = false; return; }
      if (em && !/^\S+@\S+\.\S+$/.test(em)) { err.textContent = "That email doesn't look right."; err.hidden = false; return; }
    }
    btn.disabled = true; btn.textContent = "Sending…";
    try {
      const G = D.googleForm || {};
      if (G.action) {
        // answers go to a Google Form, which writes each one as a row in the linked Google Sheet
        await fetch(G.action, {
          method: "POST", mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(googlePayload(skip, G.entries)).toString()
        });
      } else {
        const r = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload(skip)).toString()
        });
        if (!r.ok) throw new Error(r.status);
      }
      S.done = true; S.history = ["thanks"]; save(); render(); window.scrollTo(0, 0);
    } catch (e) {
      btn.disabled = false; btn.textContent = skip ? "Skip & Submit" : "Submit";
      err.textContent = "Couldn't send — check your connection and try again."; err.hidden = false;
    }
  }

  render();
})();
