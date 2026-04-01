(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2982],
  {
    60667: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.bind(n, 64360)),
        Promise.resolve().then(n.t.bind(n, 88973, 23)),
        Promise.resolve().then(n.bind(n, 56461)),
        Promise.resolve().then(n.bind(n, 79554)),
        Promise.resolve().then(n.bind(n, 85580)),
        Promise.resolve().then(n.bind(n, 70499)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.bind(n, 43615)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.bind(n, 45419)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.t.bind(n, 5735, 23)),
        Promise.resolve().then(n.t.bind(n, 18803, 23)),
        Promise.resolve().then(n.t.bind(n, 59747, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    56461: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return h;
        },
      });
      var i = n(57437),
        r = n(32913),
        s = n(95918),
        l = n.n(s),
        o = n(42625),
        c = n(21360),
        d = n(87580),
        a = n(81079),
        u = n(47984);
      function h(e) {
        let {} = e,
          t = [
            {
              title: (0, i.jsx)(i.Fragment, { children: "Project Grants" }),
              icon: "/icons/project-grants.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "Financial assistance to help launch projects from the ground up.",
              }),
            },
            {
              title: (0, i.jsx)(i.Fragment, { children: "Marketing Support" }),
              icon: "/icons/marketing-support.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "Assisting projects in reaching their target audience and building market visibility.",
              }),
            },
            {
              title: (0, i.jsx)(i.Fragment, { children: "Partner Vouchers" }),
              icon: "/icons/partner-voucher.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "Connecting projects with key resources and services through our network of partners.",
              }),
            },
            {
              title: (0, i.jsx)(i.Fragment, {
                children: "Investor Connections",
              }),
              icon: "/icons/investor-connections.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "Enabling access to potential investors to support further growth and expansion.",
              }),
            },
            {
              title: (0, i.jsx)(i.Fragment, {
                children: "Technical Assistance",
              }),
              icon: "/icons/technical-assistance.svg",
              desc: (0, i.jsx)(i.Fragment, {
                children:
                  "Providing guidance to overcome technical challenges and enhance development.",
              }),
            },
          ];
        return (0, i.jsx)(r.Z, {
          color: "dark",
          className: l().features,
          children: (0, i.jsx)(o.Z, {
            className: l().container,
            children: (0, i.jsxs)("div", {
              className: l().content,
              children: [
                (0, i.jsxs)("div", {
                  className: l().top,
                  children: [
                    (0, i.jsx)(d.default, {
                      animate: !0,
                      direction: "right",
                      className: l().title,
                      children: "Startup Hub",
                    }),
                    (0, i.jsx)(c.default, {
                      size: "md",
                      className: l().desc,
                      children:
                        "Our mission is to foster an environment where projects can flourish. Through our comprehensive support ecosystem, we provide a variety of resources tailored to the unique needs of each project, including:",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: l().grid,
                  children: t.map((e, t) =>
                    (0, i.jsxs)(
                      a.default,
                      {
                        direction:
                          0 == t
                            ? "right"
                            : 1 == t
                            ? "bottom"
                            : 2 == t
                            ? "left"
                            : 3 == t
                            ? "right"
                            : 4 == t
                            ? "top"
                            : "left",
                        directionMobile: "left",
                        ease: "sine.out",
                        className: l().gridItem,
                        children: [
                          (0, i.jsx)("div", {
                            className: l().gridIcon,
                            children: (0, i.jsx)(u.default, {
                              src: e.icon,
                              alt: "icon",
                              width: 48,
                              height: 48,
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: l().texts,
                            children: [
                              (0, i.jsx)(c.default, {
                                size: "lg",
                                className: l().gridTitle,
                                children: e.title,
                              }),
                              (0, i.jsx)(c.default, {
                                size: "md",
                                className: l().gridDesc,
                                children: e.desc,
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
    81079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n(57437),
        r = n(2265),
        s = n(44839),
        l = n(16609),
        o = n(49582),
        c = n(78002),
        d = n(16463);
      function a(e) {
        let {
            children: t,
            component: n = "div",
            className: a,
            direction: u,
            directionMobile: h = u,
            translateY: m = 0,
            translateX: _ = 0,
            duration: g = 0.8,
            rotateX: f = 0,
            rotateY: v = 0,
            ease: p = "back.out",
            opacity: b = 0,
            animate: x = !0,
            start: j = 80,
            end: y = 60,
            ...w
          } = e,
          k = (0, r.useRef)(null),
          { useGSAP: N, activatedGsap: P } = (0, l.Z)(),
          F = (0, c.Z)(),
          Z = (0, d.usePathname)();
        return (
          N(() => {
            if (
              "/" == Z &&
              P &&
              x &&
              k.current &&
              (null == F ? void 0 : F.width)
            ) {
              let e, t;
              (null == F ? void 0 : F.width) < 992
                ? ((_ = "right" == h ? -200 : "left" == h ? 200 : _),
                  (m = "top" == h ? 200 : "bottom" == h ? -200 : m))
                : ((m = "top" == u ? 200 : "bottom" == u ? -200 : m),
                  (_ = "right" == u ? -200 : "left" == u ? 200 : _));
              let n = o.ZP.timeline({
                scrollTrigger: {
                  trigger: k.current,
                  start: "top ".concat(
                    (null == F ? void 0 : F.width) < 992 ? j - 10 : j,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == F ? void 0 : F.width) < 992 ? y - 15 : y - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == F ? void 0 : F.width) > 1440
                    ? _
                    : (null == F ? void 0 : F.width) < 992
                    ? ((null == F ? void 0 : F.width) / 500) * _
                    : ((null == F ? void 0 : F.width) / 1440) * _),
                (t =
                  (null == F ? void 0 : F.width) > 1440
                    ? m
                    : (null == F ? void 0 : F.width) < 992
                    ? ((null == F ? void 0 : F.width) / 500) * m
                    : ((null == F ? void 0 : F.width) / 1440) * m),
                n
                  .from(k.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: f,
                    rotateY: v,
                    opacity: b,
                    duration: g,
                    ease: p,
                  })
                  .to(k.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [P, Z]),
          (0, i.jsx)(n, { ...w, ref: k, className: (0, s.Z)(a), children: t })
        );
      }
    },
    43615: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n(57437),
        r = n(2265),
        s = n(48241),
        l = n.n(s),
        o = n(87138),
        c = n(44839),
        d = n(78002),
        a = n(16609),
        u = n(49582),
        h = n(16463);
      function m(e) {
        let {
            href: t,
            download: n,
            className: s,
            target: m,
            children: _,
            color: g = "primary",
            onClick: f,
            direction: v,
            directionMobile: p = v,
            translateY: b = 0,
            translateX: x = 0,
            duration: j = 0.8,
            rotateX: y = 0,
            rotateY: w = 0,
            ease: k = "back.out",
            opacity: N = 0,
            animate: P,
            start: F = 80,
            end: Z = 60,
            ...C
          } = e,
          T = (0, d.Z)(),
          z = (0, r.useRef)(null),
          { useGSAP: X, activatedGsap: E } = (0, a.Z)(),
          I = (0, h.usePathname)();
        return (
          X(() => {
            if (
              "/" == I &&
              E &&
              P &&
              z.current &&
              (null == T ? void 0 : T.width)
            ) {
              let e, t;
              (null == T ? void 0 : T.width) < 992
                ? ((x = "right" == p ? -200 : "left" == p ? 200 : x),
                  (b = "top" == p ? 200 : "bottom" == p ? -200 : b))
                : ((b = "top" == v ? 200 : "bottom" == v ? -200 : b),
                  (x = "right" == v ? -200 : "left" == v ? 200 : x));
              let n = u.ZP.timeline({
                scrollTrigger: {
                  trigger: z.current,
                  start: "top ".concat(
                    (null == T ? void 0 : T.width) < 992 ? F - 10 : F,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == T ? void 0 : T.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == T ? void 0 : T.width) > 1440
                    ? x
                    : (null == T ? void 0 : T.width) < 992
                    ? ((null == T ? void 0 : T.width) / 500) * x
                    : ((null == T ? void 0 : T.width) / 1440) * x),
                (t =
                  (null == T ? void 0 : T.width) > 1440
                    ? b
                    : (null == T ? void 0 : T.width) < 992
                    ? ((null == T ? void 0 : T.width) / 500) * b
                    : ((null == T ? void 0 : T.width) / 1440) * b),
                n
                  .from(z.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: y,
                    rotateY: w,
                    opacity: N,
                    duration: j,
                    ease: k,
                  })
                  .to(z.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [T, E, I]),
          (0, i.jsx)(i.Fragment, {
            children:
              "#" === t
                ? (0, i.jsx)("p", {
                    className: (0, c.Z)(l().customlink, l()[g], s),
                    children: _,
                  })
                : m && "_blank" == m
                ? (0, i.jsx)(o.default, {
                    ref: z,
                    download: n,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, c.Z)(l().customlink, l()[g], s),
                    ...C,
                    children: _,
                  })
                : (0, i.jsx)(o.default, {
                    ref: z,
                    download: n,
                    href: t,
                    target: m,
                    onClick: f,
                    className: (0, c.Z)(l().customlink, l()[g], s),
                    ...C,
                    children: _,
                  }),
          })
        );
      }
    },
    45419: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return _;
        },
      });
      var i = n(57437),
        r = n(42625),
        s = n(76003),
        l = n.n(s),
        o = n(21360),
        c = n(47984),
        d = n(32913),
        a = n(87580),
        u = n(70499),
        h = n(13259),
        m = n(44839);
      function _(e) {
        let { color: t } = e;
        return (0, i.jsx)(d.Z, {
          className: l().section,
          color: t || "primary",
          children: (0, i.jsxs)(r.Z, {
            className: l().sectionContainer,
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsx)(c.default, {
                  className: l().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, i.jsx)(a.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, i.jsxs)(o.default, {
                className: (0, m.Z)(l().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, i.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, i.jsxs)("div", {
                className: l().btns,
                children: [
                  (0, i.jsx)(u.default, {
                    href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, i.jsx)(u.default, {
                    color: "transparent-light",
                    href: h.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    88973: function (e) {
      e.exports = {
        section: "style_section__GP2Eb",
        container: "style_container__TUSnW",
        content: "style_content__C_kLd",
        box: "style_box__H1EJd",
        title: "style_title__Simqe",
        desc: "style_desc__gJLyu",
      };
    },
    95918: function (e) {
      e.exports = {
        features: "style_features__XgGLU",
        container: "style_container__Ggco3",
        content: "style_content__dZMRK",
        top: "style_top__bWvQU",
        title: "style_title__83jzM",
        desc: "style_desc__qcFgy",
        grid: "style_grid__AfO6w",
        gridItem: "style_gridItem__Vt2Ri",
        texts: "style_texts__b4XQa",
        gridTitle: "style_gridTitle__yR0Rf",
        gridDesc: "style_gridDesc__zzp81",
        gridIcon: "style_gridIcon__eWkPB",
      };
    },
    48241: function (e) {
      e.exports = {
        customlink: "style_customlink___bLW0",
        primary: "style_primary__NaDFQ",
        light: "style_light___QhFW",
        dark: "style_dark__F5y8x",
      };
    },
    76003: function (e) {
      e.exports = {
        section: "style_section__K46ck",
        sectionContainer: "style_sectionContainer__oErws",
        desc: "style_desc___bTux",
        btns: "style_btns__eS32b",
        cube: "style_cube__p2p8S",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 9667, 5073, 922, 9391, 231, 493, 3106, 8048, 7096, 4360,
        2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 60667));
      }
    ),
      (_N_E = e.O());
  },
]);
