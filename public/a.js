!(function () {
  const t = function (t, e, n) {
    const a = t[e];
    return function () {
      for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i];
      return n.apply(null, e), a.apply(t, e);
    };
  };
  const e = function () {
    const t = window.doNotTrack;
    const e = window.navigator;
    const n = window.external;
    const a =
      t ||
      e.doNotTrack ||
      e.msDoNotTrack ||
      (n && typeof n.msTrackingProtectionEnabled === "function" && n.msTrackingProtectionEnabled());
    return !0 === a || a === 1 || a === "yes" || a === "1";
  };
  !(function (n) {
    const a = n.screen;
    const i = a.width;
    const r = a.height;
    const o = n.navigator.language;
    const c = n.location;
    const s = c.hostname;
    const u = c.pathname;
    const l = c.search;
    const d = n.localStorage;
    const f = n.sessionStorage;
    const v = n.document;
    const p = n.history;
    const m = v.querySelector("script[data-website-id]");
    if (m) {
      let h;
      const g = function (t) {
        return m && m.getAttribute(t);
      };
      const w = g("data-website-id");
      const y = g("data-host-url");
      const S = g("data-auto-track") !== "false";
      const E = g("data-do-not-track");
      const k = g("data-cache");
      const b = g("data-domains");
      const T =
        d.getItem("umami.disabled") ||
        (E && e()) ||
        (b &&
          !b
            .split(",")
            .map((t) => {
              return t.trim();
            })
            .includes(s));
      const N = y
        ? (h = y) && h.length > 1 && h.endsWith("/")
          ? h.slice(0, -1)
          : h
        : m.src.split("/").slice(0, -1).join("/");
      const j = `${i}x${r}`;
      const q = [];
      let I = `${u}${l}`;
      let L = v.referrer;
      const O = function (t, e, n) {
        if (!T) {
          const a = "umami.cache";
          const i = { website: n, hostname: s, screen: j, language: o, cache: k && f.getItem(a) };
          e &&
            Object.keys(e).forEach((t) => {
              i[t] = e[t];
            }),
            (function (t, e, n) {
              const a = new XMLHttpRequest();
              a.open("POST", t, !0),
                a.setRequestHeader("Content-Type", "application/json"),
                (a.onreadystatechange = function () {
                  a.readyState === 4 && n && n(a.response);
                }),
                a.send(JSON.stringify(e));
            })(`${N}/api/collect`, { type: t, payload: i }, (t) => {
              return k && f.setItem(a, t);
            });
        }
      };
      const P = function (t, e, n) {
        return (
          void 0 === t && (t = I),
          void 0 === e && (e = L),
          void 0 === n && (n = w),
          O("pageview", { url: t, referrer: e }, n)
        );
      };
      const x = function (t, e, n, a) {
        return (
          void 0 === e && (e = "custom"),
          void 0 === n && (n = I),
          void 0 === a && (a = w),
          O("event", { event_type: e, event_value: t, url: n }, a)
        );
      };
      const A = function () {
        v.querySelectorAll("[class*='umami--']").forEach((t) => {
          t.className.split(" ").forEach((e) => {
            if (/^umami--([a-z]+)--([\w]+[\w-]*)$/.test(e)) {
              const n = e.split("--");
              const a = n[1];
              const i = n[2];
              const r = function () {
                return x(i, a);
              };
              q.push([t, a, r]), t.addEventListener(a, r, !0);
            }
          });
        });
      };
      const H = function () {
        q.forEach((t) => {
          const e = t[0];
          const n = t[1];
          const a = t[2];
          e && e.removeEventListener(n, a, !0);
        }),
          (q.length = 0);
      };
      const R = function (t, e, n) {
        if (n) {
          H(), (L = I);
          const a = n.toString();
          (I = a.substring(0, 4) === "http" ? `/${a.split("/").splice(3).join("/")}` : a) !== L && P(I, L),
            setTimeout(A, 300);
        }
      };
      if (!n.umami) {
        const _ = function (t) {
          return x(t);
        };
        (_.trackView = P), (_.trackEvent = x), (_.addEvents = A), (_.removeEvents = H), (n.umami = _);
      }
      S &&
        !T &&
        ((p.pushState = t(p, "pushState", R)), (p.replaceState = t(p, "replaceState", R)), P(I, L), A());
    }
  })(window);
})();
