(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6921],
  {
    95201: function (e, s, t) {
      Promise.resolve().then(t.t.bind(t, 67565, 23)),
        Promise.resolve().then(t.bind(t, 23328)),
        Promise.resolve().then(t.bind(t, 47984)),
        Promise.resolve().then(t.t.bind(t, 14629, 23)),
        Promise.resolve().then(t.t.bind(t, 58538, 23)),
        Promise.resolve().then(t.t.bind(t, 18803, 23)),
        Promise.resolve().then(t.bind(t, 21360)),
        Promise.resolve().then(t.bind(t, 87580)),
        Promise.resolve().then(t.bind(t, 84395));
    },
    23328: function (e, s, t) {
      "use strict";
      t.d(s, {
        default: function () {
          return h;
        },
      });
      var i = t(57437),
        n = t(32913),
        l = t(82723),
        r = t.n(l),
        c = t(42625),
        a = t(44839),
        o = t(47984),
        _ = t(87580),
        d = t(66648),
        m = t(16700);
      function h(e) {
        let {} = e;
        return (0, i.jsx)(n.Z, {
          className: (0, a.Z)(r().hero),
          children: (0, i.jsxs)(c.Z, {
            className: (0, a.Z)(r().container),
            children: [
              (0, i.jsxs)("div", {
                className: r().top,
                children: [
                  (0, i.jsx)("div", {
                    className: (0, a.Z)(r().content),
                    children: (0, i.jsx)("div", {
                      className: (0, a.Z)(r().texts),
                      children: (0, i.jsxs)(_.default, {
                        component: "h1",
                        className: (0, a.Z)(r().title),
                        children: [
                          "the Numbers Don’t Lie",
                          (0, i.jsx)("br", {}),
                          "BlockDAG is rewriting the rules of crypto",
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: r().imgWrapper,
                    children: (0, i.jsx)(o.default, {
                      hero: !0,
                      priority: !0,
                      className: (0, a.Z)(r().img),
                      src: "/images/hero/key-stats.png",
                      alt: "BlockDAG",
                      width: 568,
                      height: 590,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: r().links,
                children: (0, i.jsx)("div", {
                  className: r().list,
                  children: [
                    {
                      icon: "/images/key-stats/stat1.svg",
                      title: "312,000+",
                      subtitle: "Holders and Counting",
                      desc: "Growing by 1,000+ daily",
                    },
                    {
                      icon: "/images/key-stats/stat3.svg",
                      title: "19,000",
                      subtitle: "Miners",
                      desc: "(X10/X30/X100) being shipped & scaling to 2,000/week",
                    },
                    {
                      icon: "/images/key-stats/stat4.svg",
                      title: "3M+",
                      subtitle: "Users on the X1 App",
                      desc: "Mining BDAG daily",
                    },
                    {
                      icon: "/images/key-stats/stat5.svg",
                      title: "325,000+",
                      subtitle: "A community across 130+ countries",
                      desc: "Mining BDAG daily",
                    },
                  ].map((e, s) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: r().listItem,
                        children: (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)(d.default, {
                              src: e.icon,
                              width: 44,
                              height: 44,
                              className: r().icon,
                              alt: "external",
                            }),
                            (0, i.jsx)("h3", {
                              className: (0, a.Z)(r().title, m.BD),
                              children: e.title,
                            }),
                            (0, i.jsx)("h4", {
                              className: r().subtitle,
                              children: e.subtitle,
                            }),
                            (0, i.jsx)("p", {
                              className: r().desc,
                              children: e.desc,
                            }),
                          ],
                        }),
                      },
                      s
                    )
                  ),
                }),
              }),
            ],
          }),
        });
      }
    },
    42625: function (e, s, t) {
      "use strict";
      var i = t(57437),
        n = t(44839),
        l = t(58538),
        r = t.n(l);
      let c = (0, t(2265).forwardRef)((e, s) => {
        let { children: t, className: l, size: c, classic: a, ...o } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            ref: s,
            className: (0, n.Z)(
              r().container,
              l,
              c && r()[c],
              a && r().classic
            ),
            ...o,
            children: t,
          }),
        });
      });
      (c.displayName = "Container"), (s.Z = c);
    },
    32913: function (e, s, t) {
      "use strict";
      var i = t(57437),
        n = t(44839),
        l = t(14629),
        r = t.n(l);
      let c = (0, t(2265).forwardRef)((e, s) => {
        let { children: t, className: l, color: c = "dark", ...a } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            ref: s,
            className: (0, n.Z)(r().section, r()[c], l),
            ...a,
            children: t,
          }),
        });
      });
      (c.displayName = "Section"), (s.Z = c);
    },
    67565: function (e) {
      e.exports = {
        instructions: "style_instructions__Bjjqs",
        container: "style_container__urq58",
        eventLogos: "style_eventLogos__jVtMV",
      };
    },
    82723: function (e) {
      e.exports = {
        hero: "style_hero__2vHA_",
        container: "style_container__OBK4N",
        top: "style_top__MKyqY",
        content: "style_content__GNI4z",
        texts: "style_texts___v_Us",
        subtitle: "style_subtitle__N6_cJ",
        title: "style_title__k_avK",
        bigdesc: "style_bigdesc__TpbyD",
        desc: "style_desc___i0Jb",
        imgWrapper: "style_imgWrapper__ewmPv",
        bottom: "style_bottom__mbQEI",
        paragraph: "style_paragraph__vcSC9",
        links: "style_links__faixk",
        linksTitle: "style_linksTitle__tVeuk",
        list: "style_list__xDKo1",
        listItem: "style_listItem__ZJzPE",
        icon: "style_icon__oyEOd",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        7810, 1899, 947, 737, 9667, 5073, 922, 9391, 3106, 8048, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 95201));
      }
    ),
      (_N_E = e.O());
  },
]);
