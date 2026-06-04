(() => {
  const DATA = window.UGEAC_DATA || {};
  const { INFO = {}, META = [], CUTS = [], BS = {}, TIER = {}, CAT_COLORS = {} } = DATA;

  const fmt = (n) => (n != null ? Math.round(n).toLocaleString("en-IN") : "—");
  const fmtR = (n) => (n != null ? "UR-" + Math.round(n).toLocaleString("en-IN") : "—");
  const sh = (b) => BS[b] || b;
  const getTier = (r) => (r <= 5 ? 1 : r <= 15 ? 2 : r <= 28 ? 3 : 4);
  const cColor = (c) => CAT_COLORS[c] || "#6b7280";

  const ALL_CATS = [...new Set(CUTS.map((r) => r.c))].sort();
  const ALL_BRANCHES = [...new Set(CUTS.map((r) => r.b))].sort();

  const CUT_IDX = {};
  for (const r of CUTS) (CUT_IDX[r.i] ||= []).push(r);

  const escapeHtml = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  // Parse rank typed as: "45000", "UR-45000", "ur 45000", etc.
  const parseRank = (rankStr) => {
    const digits = String(rankStr ?? "").match(/\d+/g);
    if (!digits) return null;
    const r = parseInt(digits.join(""), 10);
    return Number.isFinite(r) && r > 0 ? r : null;
  };

  // Resolve base path for assets when pages live in subfolders (e.g. /colleges/*).
  function resolveBase() {
    if (typeof window.CG_BASE === "string") return window.CG_BASE;
    const p = String(location?.pathname || "");
    // If served from a subfolder, point back to root.
    if (p.includes("/colleges/")) return "../";
    return "";
  }

  // Reusable navbar/footer (kept consistent with the uploaded homepage)
  function renderNav(active) {
    const base = resolveBase();
    return `
      <nav>
        <a href="${base}index.html" class="nav-logo">
          <div class="nav-logo-icon">
            <img src="${base}assets/brand/logo.png" alt="College Geek logo" />
          </div>
          College Geek
        </a>
        <ul class="nav-links">
          <li><a class="nav-link ${active === "colleges" ? "active" : ""}" href="${base}colleges.html">Colleges</a></li>
          <li><a class="nav-link ${active === "predictor" ? "active" : ""}" href="${base}predictor.html">College Predictor</a></li>
          <li><a class="nav-link ${active === "counselling" ? "active" : ""}" href="${base}ugeac-counselling.html">UGEAC Counselling</a></li>
          <li><a class="nav-link ${active === "downloads" ? "active" : ""}" href="${base}download-center.html">Download Center</a></li>
          <li><a class="nav-link ${active === "contact" ? "active" : ""}" href="${base}contact.html">Contact Us</a></li>
          <li><a class="nav-link ${active === "about" ? "active" : ""}" href="${base}about.html">About Us</a></li>
          <li><a class="nav-link ${active === "disclaimer" ? "active" : ""}" href="${base}disclaimer.html">Disclaimer</a></li>
        </ul>
        <button class="nav-menu-btn" type="button" aria-label="Menu" aria-expanded="false">
          <svg class="nav-menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </nav>
    `;
  }

  function renderFooter() {
    const base = resolveBase();
    return `
      <footer>
        <div class="footer-top">
          <div class="footer-brand">
            <h3>
              <img class="brand-logo" src="${base}assets/brand/logo.png" alt="College Geek logo" />
              <span>College Geek</span>
            </h3>
            <p>Bihar's most trusted platform for college admissions, UGEAC counseling guidance, and student community support.</p>
          </div>
          <div class="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="${base}predictor.html">College Predictor</a></li>
              <li><a href="${base}colleges.html">College Explorer</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="${base}ugeac-counselling.html">UGEAC Guide</a></li>
              <li><a href="${base}about.html">About Us</a></li>
              <li><a href="${base}disclaimer.html">Disclaimer</a></li>
              <li><a href="${base}privacy-policy.html">Privacy Policy</a></li>
              <li><a href="${base}terms-and-conditions.html">Terms &amp; Conditions</a></li>
              <li><a href="${base}editorial-policy.html">Editorial Policy</a></li>
              <li><a href="${base}download-center.html">Download Center</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="${base}contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr class="footer-divider" />
        <div class="footer-bottom">
          <span>© 2027 College Geek. All rights reserved.</span>
          <span>Made with ❤️ for Bihar students</span>
        </div>
      </footer>
    `;
  }

  // Try to resolve a local college logo based on city name.
  // Expected filenames (examples): katihar.jpg / katihar.png / katihar.webp
  // Preferred location: assets/college-logo/<filename>
  // Backward-compatible locations: logo/<filename>, project root, assets/logos/.
  function slugifyFileBase(s) {
    const str = String(s || "").trim().toLowerCase();
    if (!str) return "";
    const hyphen = str.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-+/g, "-");
    const nospace = str.replace(/[^a-z0-9]+/g, "");
    const underscore = str.replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").replace(/_+/g, "_");
    const spaced = str
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return { hyphen, nospace, underscore, spaced };
  }

  function logoCandidatesByCity(city) {
    const base = resolveBase();
    const { hyphen, nospace, underscore, spaced } = slugifyFileBase(city);

    // Special-case aliases for filenames that are commonly abbreviated or misspelled.
    const key = String(city || "").trim().toLowerCase();
    const aliasMap = {
      "w.champaran": ["wc", "west champaran", "westchamparan", "west-champaran", "west_champaran"],
      "sheikhpura": ["seikhpura"],
      "saharsa": ["saharsha"],
      "sheohar": ["seohar"],
      "bhagalpur": ["bgp"],
    };
    const aliases = aliasMap[key] || [];

    const names = [...new Set([nospace, hyphen, underscore, spaced, ...aliases].filter(Boolean))];
    const exts = ["png", "jpg", "jpeg", "webp"];
    const paths = [];
    for (const n of names) {
      for (const ext of exts) {
        // Preferred: assets/college-logo/
        paths.push(`${base}assets/college-logo/${n}.${ext}`);
        // Backward-compatible:
        paths.push(`${base}logo/${n}.${ext}`);
        paths.push(`${base}${n}.${ext}`);
        paths.push(`${base}assets/logos/${n}.${ext}`);
      }
    }
    return paths;
  }

  // Try to resolve a local college photo based on city name.
  // Expected filenames (examples): katihar.webp (user-provided), optionally jpg/png.
  // Preferred location: assets/college-photo/<filename>
  function photoCandidatesByCity(city) {
    const base = resolveBase();
    const { hyphen, nospace, underscore, spaced } = slugifyFileBase(city);

    const key = String(city || "").trim().toLowerCase();
    const aliasMap = {
      "w.champaran": ["west champaran", "westchamparan", "west-champaran", "west_champaran"],
      "bhagalpur": ["bgp"],
    };
    const aliases = aliasMap[key] || [];

    const names = [...new Set([spaced, hyphen, underscore, nospace, ...aliases].filter(Boolean))];
    const exts = ["webp", "png", "jpg", "jpeg"];
    const paths = [];
    for (const n of names) {
      for (const ext of exts) {
        paths.push(`${base}assets/college-photo/${n}.${ext}`);
      }
    }
    return paths;
  }

  // Loads the first working URL from a candidate list.
  function pickFirstWorkingUrl(urls, cb) {
    let i = 0;
    const img = new Image();
    const tryNext = () => {
      if (i >= urls.length) return cb(null);
      const u = urls[i++];
      img.onload = () => cb(u);
      img.onerror = tryNext;
      img.src = u;
    };
    tryNext();
  }

  // Overlay a local logo (by city filename) on top of an element.
  // If no local logo exists, the element stays unchanged.
  function applyCollegeLogoOverlay(el, city) {
    const urls = logoCandidatesByCity(city);
    if (!urls.length) return;
    pickFirstWorkingUrl(urls, (u) => {
      if (!u) return;
      // remove old overlay (if re-rendered)
      const old = el.querySelector(".college-logo");
      if (old) old.remove();

      el.classList.add("has-logo");
      const im = document.createElement("img");
      im.className = "college-logo";
      im.alt = "College logo";
      im.loading = "lazy";
      im.src = u;
      el.appendChild(im);
    });
  }

  // Apply a city-based photo as the background image for an element (card or hero).
  function applyCollegePhotoBackground(el, city) {
    const urls = photoCandidatesByCity(city);
    if (!urls.length) return;
    pickFirstWorkingUrl(urls, (u) => {
      if (!u) return;
      el.classList.add("has-photo");
      el.style.backgroundImage = `url('${u}')`;
    });
  }

  window.CG = {
    DATA: { INFO, META, CUTS, BS, TIER, CAT_COLORS, ALL_CATS, ALL_BRANCHES, CUT_IDX },
    fmt,
    fmtR,
    sh,
    getTier,
    cColor,
    escapeHtml,
    parseRank,
    renderNav,
    renderFooter,
    applyCollegeLogoOverlay,
    applyCollegePhotoBackground,
  };

  // Mobile nav toggle (works even when nav is injected via innerHTML)
  let navToggleBound = false;
  function bindNavToggle() {
    if (navToggleBound) return;
    navToggleBound = true;

    document.addEventListener("click", (e) => {
      const btn = e.target.closest?.(".nav-menu-btn");
      if (btn) {
        const nav = btn.closest("nav");
        if (!nav) return;
        const isOpen = nav.classList.toggle("nav-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        return;
      }

      const navLink = e.target.closest?.("nav.nav-open .nav-links a");
      if (navLink) {
        const nav = navLink.closest("nav");
        if (!nav) return;
        nav.classList.remove("nav-open");
        const b = nav.querySelector(".nav-menu-btn");
        if (b) b.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const nav = document.querySelector("nav.nav-open");
      if (!nav) return;
      nav.classList.remove("nav-open");
      const b = nav.querySelector(".nav-menu-btn");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }

  bindNavToggle();
})();
