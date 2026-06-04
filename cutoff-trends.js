(() => {
  const { DATA, fmt, fmtR, sh, escapeHtml, renderNav, renderFooter } = window.CG;
  const { INFO, META, CUT_IDX, ALL_CATS, ALL_BRANCHES } = DATA;

  const nav = document.getElementById("nav");
  const footer = document.getElementById("footer");
  nav.innerHTML = renderNav("trends");
  footer.innerHTML = renderFooter();

  const tmU = document.getElementById("tm-ugeac");
  const tmJ = document.getElementById("tm-jee");
  const collegeEl = document.getElementById("tcollege");
  const branchEl = document.getElementById("tbranch");
  const catEl = document.getElementById("tcat");
  const summaryEl = document.getElementById("summary");
  const out = document.getElementById("out");

  const EXCLUDED_COLLEGES = new Set([
    "S.G.I.D.T. PATNA",
    "CIPET:IPT, BIHTA, PATNA",
    "DR. APJ ABDUL KALAM WOMENS INST. OF TECH.",
  ]);

  const state = {
    mode: "ugeac",
    college: "",
    branch: "__CSE__",
    cat: "UR",
  };

  function setMode(m) {
    state.mode = m;
    tmU.classList.toggle("active", m === "ugeac");
    tmJ.classList.toggle("active", m === "jee");
    render();
  }

  function slugify(name) {
    return String(name || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/\./g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-+/g, "-");
  }

  const normalizeBranch = (b) => {
    const s = String(b || "").toUpperCase();
    if (s.includes("COMPUTER") || s.includes("I.T.") || s === "IT") return "__CSE__";
    return b;
  };

  function buildColleges() {
    const list = META.filter((m) => !EXCLUDED_COLLEGES.has(m.name));
    collegeEl.innerHTML = [
      `<option value="">All colleges (comparison)</option>`,
      ...list.map((m) => {
        const full = (INFO[m.name] || {}).fullName || m.name;
        return `<option value="${escapeHtml(m.name)}">${escapeHtml(full)}</option>`;
      }),
    ].join("");
  }

  function buildBranches() {
    const groups = new Map();
    for (const b of ALL_BRANCHES || []) {
      const key = normalizeBranch(b);
      if (key === "__CSE__") continue;
      groups.set(b, sh(b));
    }
    const opts = [
      { value: "", label: "All branches" },
      { value: "__CSE__", label: "Computer Science (all/specializations)" },
      ...[...groups.entries()]
        .sort((a, b) => String(a[1]).localeCompare(String(b[1])))
        .map(([value, label]) => ({ value, label })),
    ];
    branchEl.innerHTML = opts
      .map((o) => `<option value="${escapeHtml(o.value)}" ${o.value === state.branch ? "selected" : ""}>${escapeHtml(o.label)}</option>`)
      .join("");
  }

  function buildCats() {
    const cats = (ALL_CATS || []).slice();
    if (!cats.includes("UR")) cats.unshift("UR");
    catEl.innerHTML = cats
      .map((c) => `<option value="${escapeHtml(c)}" ${c === state.cat ? "selected" : ""}>${escapeHtml(c)}</option>`)
      .join("");
  }

  function resolveBranchForCollege(collegeKey) {
    const cuts = CUT_IDX[collegeKey] || [];
    if (!state.branch) return null;
    if (state.branch !== "__CSE__") return state.branch;
    const b = cuts.map((r) => r.b).find((x) => normalizeBranch(x) === "__CSE__");
    return b || null;
  }

  function renderCollegeTable(collegeKey) {
    const inf = INFO[collegeKey] || {};
    const full = inf.fullName || collegeKey;
    const branch = resolveBranchForCollege(collegeKey);

    if (!branch) {
      summaryEl.innerHTML = `<div class="section-header"><div><h2 class="section-title" style="font-size:1.2rem">Cutoff Trends</h2><p style="color:var(--text-secondary);font-size:.85rem;margin-top:4px;line-height:1.6">No cutoff rows found for the selected branch in this college.</p></div></div>`;
      out.innerHTML = "";
      return;
    }

    const cuts = (CUT_IDX[collegeKey] || []).filter((r) => r.b === branch);
    const rows = cuts
      .slice()
      .sort((a, b) => String(a.c).localeCompare(String(b.c)))
      .map((r) => ({
        cat: r.c,
        open: state.mode === "ugeac" ? r.uo : r.jo,
        close: state.mode === "ugeac" ? r.uc : r.jc,
      }));

    summaryEl.innerHTML = `
      <div class="section-header" style="margin-bottom:14px">
        <div>
          <h2 class="section-title" style="font-size:1.2rem">${escapeHtml(full)}</h2>
          <p style="color:var(--text-secondary);font-size:.85rem;margin-top:4px;line-height:1.6">
            Branch: <b>${escapeHtml(sh(branch))}</b> · Mode: <b>${escapeHtml(state.mode === "ugeac" ? "UGEAC" : "JEE AIR")}</b>
          </p>
        </div>
        <a class="view-all" href="colleges/${escapeHtml(slugify(collegeKey))}.html?mode=${escapeHtml(state.mode)}">Open Details →</a>
      </div>
    `;

    out.innerHTML = `
      <div class="cutoff-accordion">
        <button class="cutoff-head" type="button">
          <div>
            <div class="cutoff-title">Category-wise Cutoffs</div>
            <div class="cutoff-sub">Opening & closing ranks for the selected branch</div>
          </div>
          <div style="font-weight:900;color:var(--blue)">Table ▾</div>
        </button>
        <div class="cutoff-table show">
          <table>
            <thead>
              <tr>
                <th style="width: 35%">Category</th>
                <th class="num">Opening</th>
                <th class="num">Closing</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (x) => `
                <tr>
                  <td><span class="cat-dot" style="background: var(--blue)"></span>${escapeHtml(x.cat)}</td>
                  <td class="num">${escapeHtml(state.mode === "ugeac" ? fmtR(x.open) : fmt(x.open))}</td>
                  <td class="num"><b>${escapeHtml(state.mode === "ugeac" ? fmtR(x.close) : fmt(x.close))}</b></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderComparison() {
    const wantCat = state.cat;
    const list = META.filter((m) => !EXCLUDED_COLLEGES.has(m.name));

    const rows = [];
    for (const m of list) {
      const cuts = (CUT_IDX[m.name] || []).filter((x) => x.c === wantCat);
      if (cuts.length === 0) continue;

      // If branch is "All branches": use the best (lowest) closing rank among all branches for that college.
      // Else: use the chosen branch (or best-matching CSE group) for that college.
      let pick = null;
      if (!state.branch) {
        for (const r of cuts) {
          const close = state.mode === "ugeac" ? r.uc : r.jc;
          if (close == null) continue;
          if (!pick || close < pick.close) pick = { branch: r.b, close };
        }
      } else {
        const b = resolveBranchForCollege(m.name);
        if (!b) continue;
        const r = cuts.find((x) => x.b === b);
        if (!r) continue;
        const close = state.mode === "ugeac" ? r.uc : r.jc;
        if (close == null) continue;
        pick = { branch: b, close };
      }

      if (!pick) continue;
      rows.push({
        college: m.name,
        full: (INFO[m.name] || {}).fullName || m.name,
        branch: pick.branch,
        close: pick.close,
      });
    }

    rows.sort((a, b) => (a.close ?? 1e18) - (b.close ?? 1e18));

    summaryEl.innerHTML = `
      <div class="section-header" style="margin-bottom:14px">
        <div>
          <h2 class="section-title" style="font-size:1.2rem">College Comparison</h2>
          <p style="color:var(--text-secondary);font-size:.85rem;margin-top:4px;line-height:1.6">
            ${rows.length} colleges · Category <b>${escapeHtml(wantCat)}</b> · Branch <b>${escapeHtml(state.branch ? sh(state.branch) : "All branches")}</b> · ${
      state.mode === "ugeac" ? "UGEAC" : "JEE AIR"
    }
          </p>
        </div>
      </div>
    `;

    if (rows.length === 0) {
      out.innerHTML = `<div style="color:var(--text-secondary);padding:16px">No cutoff data found for this branch/category.</div>`;
      return;
    }

    out.innerHTML = `
      <div class="result-grid">
        ${rows
          .map((x) => {
            const url = `colleges/${escapeHtml(slugify(x.college))}.html?mode=${escapeHtml(state.mode)}`;
            return `
              <div class="result-card" onclick="location.href='${url}'">
                <div class="result-top">
                  <div style="min-width:0">
                    <div class="result-title">${escapeHtml(x.full)}</div>
                    <div class="result-sub">${escapeHtml(sh(x.branch))}</div>
                  </div>
                  <div class="rank-pill">Close: <b>${escapeHtml(state.mode === "ugeac" ? fmtR(x.close) : fmt(x.close))}</b></div>
                </div>
                <div class="result-bottom">
                  <div class="kvpill">Category: <b>${escapeHtml(wantCat)}</b></div>
                  <div class="kvpill" style="background:var(--blue-light)">Mode: <b style="color:var(--blue-dark)">${escapeHtml(
                    state.mode === "ugeac" ? "UGEAC" : "JEE AIR"
                  )}</b></div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function render() {
    if (state.college) renderCollegeTable(state.college);
    else renderComparison();
  }

  // Events
  tmU.addEventListener("click", () => setMode("ugeac"));
  tmJ.addEventListener("click", () => setMode("jee"));
  collegeEl.addEventListener("change", () => {
    state.college = collegeEl.value;
    render();
  });
  branchEl.addEventListener("change", () => {
    state.branch = branchEl.value;
    render();
  });
  catEl.addEventListener("change", () => {
    state.cat = catEl.value;
    render();
  });

  // Init
  buildColleges();
  buildBranches();
  buildCats();
  render();
})();
