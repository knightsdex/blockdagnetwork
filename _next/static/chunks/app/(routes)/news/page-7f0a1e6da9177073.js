(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1944],
  {
    91720: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.bind(s, 42263)),
        Promise.resolve().then(s.bind(s, 65385)),
        Promise.resolve().then(s.t.bind(s, 66391, 23)),
        Promise.resolve().then(s.bind(s, 10876)),
        Promise.resolve().then(s.bind(s, 39070)),
        Promise.resolve().then(s.bind(s, 70499)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.bind(s, 45419)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
        Promise.resolve().then(s.t.bind(s, 84868, 23)),
        Promise.resolve().then(s.t.bind(s, 77632, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.bind(s, 21360)),
        Promise.resolve().then(s.bind(s, 87580)),
        Promise.resolve().then(s.bind(s, 84395));
    },
    10876: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return h;
        },
      });
      var l = s(57437),
        i = s(2265),
        n = s(77632),
        r = s.n(n),
        o = s(47984),
        a = s(44839),
        c = s(21360),
        d = s(70499),
        _ = s(43615),
        u = s(87138);
      function h(e) {
        let { newsData: t, countriesData: s } = e,
          [n, h] = (0, i.useState)(6),
          [m, b] = (0, i.useState)("English"),
          [f, g] = (0, i.useState)(t || []);
        return (
          (0, i.useEffect)(() => {
            t &&
              s &&
              (null !== m
                ? g(t.filter((e) => e.attributes["news-country"].includes(m)))
                : g(t),
              h(6));
          }, [m, t]),
          (0, l.jsxs)("div", {
            className: r().newsWrapper,
            children: [
              (0, l.jsxs)("div", {
                className: r().countries,
                children: [
                  (0, l.jsxs)("div", {
                    onClick: () => {
                      b(null);
                    },
                    className: (0, a.Z)(
                      r().countryItem,
                      null == m && r().selected
                    ),
                    children: [
                      (0, l.jsx)("div", {
                        className: r().flagImg,
                        children: (0, l.jsx)(o.default, {
                          hero: !0,
                          src: "/icons/global.svg",
                          alt: "World flag",
                        }),
                      }),
                      (0, l.jsx)(c.default, { children: "All" }),
                    ],
                  }),
                  s &&
                    s.map((e, t) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          onClick: () => {
                            b(e.attributes.title);
                          },
                          className: (0, a.Z)(
                            r().countryItem,
                            m == e.attributes.title && r().selected
                          ),
                          children: [
                            (0, l.jsx)("div", {
                              className: r().flagImg,
                              children: (0, l.jsx)(o.default, {
                                hero: !0,
                                src: e.attributes.img,
                                alt: e.attributes.title,
                              }),
                            }),
                            (0, l.jsx)(c.default, {
                              children: e.attributes.title,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                ],
              }),
              (0, l.jsxs)("div", {
                className: r().newsContainer,
                children: [
                  (0, l.jsx)(c.default, {
                    size: "lg",
                    children: m
                      ? "News from ".concat(m, " Media")
                      : "News All Over World",
                  }),
                  (0, l.jsxs)("div", {
                    className: r().newsGrid,
                    children: [
                      !f.length &&
                        (0, l.jsxs)(c.default, {
                          children: [
                            "There is no latest news from",
                            " ",
                            m || "World",
                            " Media yet.",
                          ],
                        }),
                      f.slice(0, n).map((e, t) => {
                        var s, i, n, o;
                        return (0, l.jsxs)(
                          "div",
                          {
                            className: r().item,
                            children: [
                              (0, l.jsx)(u.default, {
                                href: (
                                  null == e
                                    ? void 0
                                    : null === (s = e.attributes) ||
                                      void 0 === s
                                    ? void 0
                                    : s.link
                                )
                                  ? null == e
                                    ? void 0
                                    : null === (i = e.attributes) ||
                                      void 0 === i
                                    ? void 0
                                    : i.link
                                  : "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, l.jsx)(c.default, {
                                  size: "lg",
                                  className: (0, a.Z)(
                                    r().title,
                                    (e.attributes.title.includes("https://") ||
                                      e.attributes.title.includes("www.")) &&
                                      r().break,
                                    "line-clamp-4"
                                  ),
                                  children: e.attributes.title,
                                }),
                              }),
                              (0, l.jsx)(c.default, {
                                className: r().date,
                                children: e.attributes.date,
                              }),
                              (0, l.jsx)(_.default, {
                                href: (
                                  null == e
                                    ? void 0
                                    : null === (n = e.attributes) ||
                                      void 0 === n
                                    ? void 0
                                    : n.link
                                )
                                  ? null == e
                                    ? void 0
                                    : null === (o = e.attributes) ||
                                      void 0 === o
                                    ? void 0
                                    : o.link
                                  : "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Read More",
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    ],
                  }),
                  (0, l.jsx)(d.default, {
                    className: r().button,
                    color: "primary",
                    disabled: !f || (null == f ? void 0 : f.length) <= n,
                    onClick: () => {
                      h((e) => e + 3);
                    },
                    children: "Show More",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    39070: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return b;
        },
      });
      var l = s(57437),
        i = s(32913),
        n = s(52783),
        r = s.n(n),
        o = s(42625),
        a = s(84395),
        c = s(87580),
        d = s(21360),
        _ = s(47984),
        u = s(43615),
        h = s(81079),
        m = s(44839);
      function b(e) {
        let { color: t } = e,
          s = (e) => {
            let t = document.createElement("a");
            (t.href = "".concat(e)),
              (t.download = e),
              document.body.appendChild(t),
              t.click(),
              document.body.removeChild(t);
          };
        return (0, l.jsx)(i.Z, {
          color: t || "dark",
          className: r().presskit,
          children: (0, l.jsxs)(o.Z, {
            className: r().container,
            children: [
              (0, l.jsxs)("div", {
                className: r().texts,
                children: [
                  (0, l.jsx)(a.default, {
                    color:
                      "primary" == t
                        ? "light"
                        : "light" === t
                        ? "dark"
                        : "primary",
                    animate: !0,
                    direction: "right",
                    children: "PRESS KIT",
                  }),
                  (0, l.jsx)(c.default, {
                    animate: !0,
                    direction: "right",
                    children: "Files For Press",
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: r().content,
                children: [
                  {
                    title: "The Logo",
                    format: ".SVG",
                    size: "2.9 MB",
                    desc: "The horizontal lockup shall be used in most circumstances. The vertical lockup and the BloockDAG symbol shall only be used for constrained spaces.",
                    img: "/images/presskit/Logo.svg",
                  },
                  {
                    title: "The Logo Vertical",
                    format: ".SVG",
                    size: "2.9 MB",
                    desc: '"BlockDAG" represents the brand and the platform.',
                    img: "/images/presskit/LogoVertical.svg",
                  },
                  {
                    title: "The BlockDAG Symbol",
                    format: ".SVG",
                    size: "2.9 MB",
                    desc: '"BlockDAG" symbol represents the brand and the platform.',
                    img: "/images/presskit/Symbol.svg",
                  },
                  {
                    title: "The BlockDAG Coin Logo",
                    format: ".SVG",
                    size: "8 KB",
                    desc: "“BlockDAG” represents the governance coin on the BlockDAG blockchain.",
                    img: "/images/presskit/TokenLogo.svg",
                  },
                  {
                    title: "The BlockDAG Coin Logo Vertical",
                    format: ".SVG",
                    size: "8 KB",
                    desc: '"BlockDAG" represents the brand and the platform.',
                    img: "/images/presskit/TokenLogoVertical.svg",
                  },
                  {
                    title: "The BlockDAG Coin Symbol",
                    format: ".SVG",
                    size: "2 KB",
                    desc: "“BlockDAG” represents the governance coin on the BlockDAG blockchain.",
                    img: "/images/presskit/TokenSymbol.svg",
                  },
                ].map((e, i) =>
                  (0, l.jsxs)(
                    h.default,
                    {
                      animate: !0,
                      direction:
                        i % 3 == 0 ? "right" : i % 3 == 1 ? "top" : "left",
                      directionMobile: i % 2 == 0 ? "right" : "left",
                      className: (0, m.Z)(
                        r().item,
                        "light" === t ? r().white : ""
                      ),
                      children: [
                        (0, l.jsx)("div", {
                          className: r().head,
                          children: (0, l.jsx)(c.default, {
                            size: "sm",
                            children: e.format,
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: r().img,
                          children: (0, l.jsx)(_.default, {
                            src: e.img,
                            alt: e.title,
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: r().details,
                          children: [
                            (0, l.jsx)(d.default, {
                              size: "lg",
                              className: "font-bold",
                              children: e.title,
                            }),
                            (0, l.jsx)(d.default, { children: e.size }),
                            (0, l.jsx)(d.default, {
                              className: r().desc,
                              children: e.desc,
                            }),
                            (0, l.jsx)(u.default, {
                              className: r().download,
                              href: e.img,
                              target: "_blank",
                              download: !0,
                              onClick: () => {
                                s(e.img);
                              },
                              children: "Download",
                            }),
                          ],
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    45419: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return m;
        },
      });
      var l = s(57437),
        i = s(42625),
        n = s(76003),
        r = s.n(n),
        o = s(21360),
        a = s(47984),
        c = s(32913),
        d = s(87580),
        _ = s(70499),
        u = s(13259),
        h = s(44839);
      function m(e) {
        let { color: t } = e;
        return (0, l.jsx)(c.Z, {
          className: r().section,
          color: t || "primary",
          children: (0, l.jsxs)(i.Z, {
            className: r().sectionContainer,
            children: [
              (0, l.jsx)("div", {
                children: (0, l.jsx)(a.default, {
                  className: r().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, l.jsx)(d.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, l.jsxs)(o.default, {
                className: (0, h.Z)(r().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, l.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, l.jsxs)("div", {
                className: r().btns,
                children: [
                  (0, l.jsx)(_.default, {
                    href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, l.jsx)(_.default, {
                    color: "transparent-light",
                    href: u.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    32913: function (e, t, s) {
      "use strict";
      var l = s(57437),
        i = s(44839),
        n = s(14629),
        r = s.n(n);
      let o = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: n, color: o = "dark", ...a } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            ref: t,
            className: (0, i.Z)(r().section, r()[o], n),
            ...a,
            children: s,
          }),
        });
      });
      (o.displayName = "Section"), (t.Z = o);
    },
    84868: function (e) {
      e.exports = {
        giveaway: "style_giveaway__ID1_5",
        content: "style_content__Gq_nS",
        flex: "style_flex__Q8bYC",
        image: "style_image__Oqgeq",
        texts: "style_texts__R_LRv",
        btn: "style_btn__NBSYt",
      };
    },
    77632: function (e) {
      e.exports = {
        news: "style_news__JLYh4",
        container: "style_container__QoNu2",
        newsWrapper: "style_newsWrapper__ZVGPn",
        countries: "style_countries__LN9QY",
        countryItem: "style_countryItem__pvIyj",
        selected: "style_selected__dvxn2",
        newsContainer: "style_newsContainer__jHWtY",
        button: "style_button__yooF2",
        newsGrid: "style_newsGrid__60c8W",
        item: "style_item__oUIl0",
        title: "style_title__eudre",
        break: "style_break__B4A64",
        date: "style_date__syeK4",
      };
    },
    52783: function (e) {
      e.exports = {
        presskit: "style_presskit__rNaON",
        container: "style_container__yuBEx",
        texts: "style_texts__lQtL0",
        content: "style_content__wpHeG",
        item: "style_item__06BAS",
        white: "style_white__P48BU",
        head: "style_head__a4j3_",
        img: "style_img__Vxvo6",
        details: "style_details__Jmx7Q",
        desc: "style_desc__QCZZ7",
        download: "style_download___gG1s",
      };
    },
    59747: function (e) {
      e.exports = {
        breadcrumbSection: "style_breadcrumbSection___gLAq",
        hero: "style_hero__UpYQP",
        container: "style_container__uiBlW",
        content: "style_content__fcl60",
        texts: "style_texts__ek20Z",
        title: "style_title__K_zoE",
        bigdesc: "style_bigdesc__J_ZOY",
        desc: "style_desc__701gB",
        btns: "style_btns__HG0fs",
        imgWrapper: "style_imgWrapper__2Ez5g",
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
        9667, 9769, 5073, 1899, 947, 8557, 922, 9391, 231, 493, 3106, 8048,
        8826, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 91720));
      }
    ),
      (_N_E = e.O());
  },
]);
