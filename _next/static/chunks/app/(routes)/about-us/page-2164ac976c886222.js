(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2965],
  {
    16617: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.bind(s, 62840)),
        Promise.resolve().then(s.t.bind(s, 5319, 23)),
        Promise.resolve().then(s.bind(s, 14904)),
        Promise.resolve().then(s.bind(s, 92300)),
        Promise.resolve().then(s.t.bind(s, 26766, 23)),
        Promise.resolve().then(s.bind(s, 90062)),
        Promise.resolve().then(s.bind(s, 13006)),
        Promise.resolve().then(s.bind(s, 43377)),
        Promise.resolve().then(s.bind(s, 15858)),
        Promise.resolve().then(s.bind(s, 39070)),
        Promise.resolve().then(s.t.bind(s, 9975, 23)),
        Promise.resolve().then(s.bind(s, 41296)),
        Promise.resolve().then(s.bind(s, 81079)),
        Promise.resolve().then(s.bind(s, 50958)),
        Promise.resolve().then(s.bind(s, 70499)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.bind(s, 43615)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.bind(s, 45419)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
        Promise.resolve().then(s.bind(s, 21360)),
        Promise.resolve().then(s.bind(s, 87580)),
        Promise.resolve().then(s.bind(s, 84395));
    },
    62840: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return _;
        },
      });
      var i = s(57437),
        n = s(32913),
        l = s(21935),
        r = s.n(l),
        o = s(42625),
        c = s(21360),
        a = s(87580),
        d = s(84395),
        h = s(81079),
        m = s(47984);
      function _(e) {
        let {} = e,
          t = [
            {
              title: (0, i.jsx)(i.Fragment, {
                children: "Scalability Challenges",
              }),
              icon: "/icons/scalability.svg",
            },
            {
              title: (0, i.jsx)(i.Fragment, { children: "High Fees" }),
              icon: "/icons/high-fees.svg",
            },
            {
              title: (0, i.jsx)(i.Fragment, { children: "High Energy Usage" }),
              icon: "/icons/high-energy.svg",
            },
            {
              title: (0, i.jsx)(i.Fragment, {
                children: "Decentralization Challenges",
              }),
              icon: "/icons/decentralization.svg",
            },
            {
              title: (0, i.jsx)(i.Fragment, { children: "Volatility of Fees" }),
              icon: "/icons/volatility.svg",
            },
          ];
        return (0, i.jsx)(n.Z, {
          color: "dark",
          className: r().features,
          children: (0, i.jsx)(o.Z, {
            className: r().container,
            children: (0, i.jsxs)("div", {
              className: r().content,
              children: [
                (0, i.jsxs)("div", {
                  className: r().top,
                  children: [
                    (0, i.jsx)(d.default, {
                      color: "primary",
                      className: r().subtitle,
                      animate: !0,
                      direction: "bottom",
                      children: "OUR SOLUTION",
                    }),
                    (0, i.jsx)(a.default, {
                      animate: !0,
                      direction: "right",
                      className: r().title,
                      children: "The Problem We’re Solving",
                    }),
                    (0, i.jsx)(c.default, {
                      size: "md",
                      className: r().desc,
                      children:
                        "The current blockchain landscape faces challenges that hinder its adoption. Scalability, high fees, energy consumption, and interoperability issues limit its potential. BlockDAG is designed to address these pain points, offering a more efficient, scalable, and user-friendly solution to drive blockchain’s widespread adoption.",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: r().grid,
                  children: t.map((e, t) =>
                    (0, i.jsxs)(
                      h.default,
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
                        className: r().gridItem,
                        children: [
                          (0, i.jsx)("div", {
                            className: r().gridIcon,
                            children: (0, i.jsx)(m.default, {
                              src: e.icon,
                              alt: "icon",
                              width: 48,
                              height: 48,
                            }),
                          }),
                          (0, i.jsx)(c.default, {
                            size: "lg",
                            className: r().gridTitle,
                            children: e.title,
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
    39070: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return u;
        },
      });
      var i = s(57437),
        n = s(32913),
        l = s(52783),
        r = s.n(l),
        o = s(42625),
        c = s(84395),
        a = s(87580),
        d = s(21360),
        h = s(47984),
        m = s(43615),
        _ = s(81079),
        g = s(44839);
      function u(e) {
        let { color: t } = e,
          s = (e) => {
            let t = document.createElement("a");
            (t.href = "".concat(e)),
              (t.download = e),
              document.body.appendChild(t),
              t.click(),
              document.body.removeChild(t);
          };
        return (0, i.jsx)(n.Z, {
          color: t || "dark",
          className: r().presskit,
          children: (0, i.jsxs)(o.Z, {
            className: r().container,
            children: [
              (0, i.jsxs)("div", {
                className: r().texts,
                children: [
                  (0, i.jsx)(c.default, {
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
                  (0, i.jsx)(a.default, {
                    animate: !0,
                    direction: "right",
                    children: "Files For Press",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
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
                ].map((e, n) =>
                  (0, i.jsxs)(
                    _.default,
                    {
                      animate: !0,
                      direction:
                        n % 3 == 0 ? "right" : n % 3 == 1 ? "top" : "left",
                      directionMobile: n % 2 == 0 ? "right" : "left",
                      className: (0, g.Z)(
                        r().item,
                        "light" === t ? r().white : ""
                      ),
                      children: [
                        (0, i.jsx)("div", {
                          className: r().head,
                          children: (0, i.jsx)(a.default, {
                            size: "sm",
                            children: e.format,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: r().img,
                          children: (0, i.jsx)(h.default, {
                            src: e.img,
                            alt: e.title,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: r().details,
                          children: [
                            (0, i.jsx)(d.default, {
                              size: "lg",
                              className: "font-bold",
                              children: e.title,
                            }),
                            (0, i.jsx)(d.default, { children: e.size }),
                            (0, i.jsx)(d.default, {
                              className: r().desc,
                              children: e.desc,
                            }),
                            (0, i.jsx)(m.default, {
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
                    n
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    41296: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var i = s(57437),
        n = s(82415),
        l = s(12900),
        r = s.n(l),
        o = s(2265);
      function c(e) {
        let { q: t, a: s, ul: l, index: c, className: a } = e,
          [d, h] = (0, o.useState)(0),
          [m, _] = (0, o.useState)(0),
          g = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            g.current && (d == c ? _(g.current.scrollHeight) : _(0));
          }, [d, c, g]),
          (0, i.jsxs)("div", {
            className: ""
              .concat(r().accordion, " ")
              .concat(d == c ? r().active : "", " ")
              .concat(a),
            children: [
              (0, i.jsxs)("h5", {
                onClick: () => h(d == c ? -1 : c),
                children: [
                  t,
                  d == c
                    ? (0, i.jsx)(n.Z.Minus, { className: r().icon })
                    : (0, i.jsx)(n.Z.Plus, { className: r().icon }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: r().dropdown,
                style: { height: m },
                ref: g,
                children: [
                  (0, i.jsx)("div", {
                    className: r().answerWrapper,
                    children: (function (e) {
                      let t = e.split(/(\n+)/);
                      return (0, i.jsx)("p", {
                        children: t.map((e, t) => {
                          if (e.match(/^\n+$/)) {
                            let s = e.length;
                            return (0, i.jsx)(
                              o.Fragment,
                              {
                                children: Array.from({ length: s }).map(
                                  (e, t) => (0, i.jsx)("br", {}, t)
                                ),
                              },
                              t
                            );
                          }
                          return (0, i.jsx)(
                            o.Fragment,
                            {
                              children: (function (e) {
                                let t;
                                let s = /([^\s]+)-\((https?:\/\/[^\s)]+)\)/g,
                                  n = [],
                                  l = 0;
                                for (; null !== (t = s.exec(e)); )
                                  t.index > l && n.push(e.slice(l, t.index)),
                                    n.push(
                                      (0, i.jsx)(
                                        "a",
                                        {
                                          href: t[2],
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: t[1],
                                        },
                                        t.index
                                      )
                                    ),
                                    (l = t.index + t[0].length);
                                return (
                                  l < e.length && n.push(e.slice(l)),
                                  n.length > 0 ? n : e
                                );
                              })(e),
                            },
                            t
                          );
                        }),
                      });
                    })(s),
                  }),
                  l &&
                    (0, i.jsx)("ul", {
                      className: r().list,
                      children: l.map((e, t) =>
                        (0, i.jsx)("li", { children: e }, t)
                      ),
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    21935: function (e) {
      e.exports = {
        features: "style_features__uPhX1",
        container: "style_container__c103t",
        content: "style_content__9KvQK",
        top: "style_top__2LiUS",
        desc: "style_desc__ktlzK",
        title: "style_title__lxrkW",
        descs: "style_descs__lx3Rp",
        btns: "style_btns__rkauA",
        grid: "style_grid__TrN8E",
        gridItem: "style_gridItem__CMtmU",
        gridTitle: "style_gridTitle__6rLSW",
        gridIcon: "style_gridIcon__8x0tY",
      };
    },
    5319: function (e) {
      e.exports = {
        faqs: "style_faqs__aODmp",
        container: "style_container__sLQJ4",
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
    9975: function (e) {
      e.exports = {
        tokenomics: "style_tokenomics__8o9IJ",
        container: "style_container__cbWQ8",
        texts: "style_texts___4Xhz",
        content: "style_content__cEKpx",
        chartImg: "style_chartImg__ZbdJM",
        table: "style_table__qymNX",
        row: "style_row___HYHN",
        column: "style_column__n3ACp",
        color: "style_color__rahPb",
        total: "style_total__pieT4",
        btn: "style_btn__fnWjf",
      };
    },
    12900: function (e) {
      e.exports = {
        accordion: "style_accordion__d4F3Z",
        active: "style_active__nnABF",
        dropdown: "style_dropdown__p0IDv",
        list: "style_list__4_UCr",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 9667, 5073, 5698, 922, 9391, 231, 493, 3106, 8048, 2456,
        3006, 5162, 5734, 9762, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 16617));
      }
    ),
      (_N_E = e.O());
  },
]);
