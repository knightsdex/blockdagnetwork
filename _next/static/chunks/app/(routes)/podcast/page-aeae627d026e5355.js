(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7979],
  {
    9017: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 90062)),
        Promise.resolve().then(i.bind(i, 17492)),
        Promise.resolve().then(i.t.bind(i, 58538, 23)),
        Promise.resolve().then(i.t.bind(i, 59747, 23)),
        Promise.resolve().then(i.bind(i, 47984)),
        Promise.resolve().then(i.bind(i, 45419)),
        Promise.resolve().then(i.t.bind(i, 14629, 23)),
        Promise.resolve().then(i.bind(i, 21360)),
        Promise.resolve().then(i.bind(i, 87580)),
        Promise.resolve().then(i.bind(i, 84395));
    },
    87138: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return r.a;
        },
      });
      var s = i(231),
        r = i.n(s);
    },
    17492: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return p;
        },
      });
      var s = i(57437),
        r = i(2265),
        a = i(42625),
        n = i(23881),
        l = i.n(n),
        d = i(32913),
        c = i(58350),
        o = i(21360),
        u = i(87580),
        h = i(70499),
        m = i(762);
      let _ = [
        {
          id: 9,
          vidyardId: "gosj6cKZvv9xicngUZRpLb",
          url: "https://share.vidyard.com/watch/gosj6cKZvv9xicngUZRpLb",
          subtitle: "EPISODE 3",
          title: "Podcast #3 Nick and Anthony with Adolfo",
          desc: "Podcast #3 Nick and Anthony with Adolfo",
          date: "2025-04-27",
        },
        {
          id: 6,
          vidyardId: "JphW5kqXPyHDesxXAPXuqn",
          url: "https://share.vidyard.com/watch/JphW5kqXPyHDesxXAPXuqn",
          title: "Reel #2 Nick and Alejandro",
          desc: "Reel #2 Nick and Alejandro",
          date: "2025-04-24",
        },
        {
          id: 4,
          vidyardId: "FtHoK5Xv8LoiS6rNyQDvs8",
          url: "https://share.vidyard.com/watch/FtHoK5Xv8LoiS6rNyQDvs8",
          subtitle: "EPISODE 2",
          title: "Podcast #2 Nick and Alejandro",
          desc: "Podcast #2 Nick and Alejandro",
          date: "2025-04-22",
        },
        {
          id: 1,
          vidyardId: "Ji1j3T5D8jj1oFFCBdk2a9",
          url: "https://share.vidyard.com/watch/Ji1j3T5D8jj1oFFCBdk2a9",
          title: "NICK REEL 1",
          desc: "NICK REEL 1.",
          date: "2025-04-20",
        },
        {
          id: 2,
          vidyardId: "6SkSfTY2BKgwag7pPFSxuY",
          url: "https://share.vidyard.com/watch/6SkSfTY2BKgwag7pPFSxuY",
          subtitle: "EPISODE 1",
          title: "Podcast #1 Nick and Steven",
          desc: "Description for episode 1.",
          date: "2025-04-19",
        },
      ];
      function p() {
        let [e, t] = (0, r.useState)(3);
        return (0, s.jsx)(d.Z, {
          color: "white",
          className: l().section,
          children: (0, s.jsxs)(a.Z, {
            className: l().container,
            children: [
              (0, s.jsx)(c.Z, {
                align: "center",
                alignMobile: "center",
                bg: "light",
                title: (0, s.jsx)(s.Fragment, { children: "Latest Episodes" }),
                desc: (0, s.jsx)(s.Fragment, {
                  children:
                    "Explore our collection of podcast episodes featuring expert insights, project updates, and exclusive interviews from the BlockDAG team. Stay informed and never miss the latest news from our ecosystem.",
                }),
                maxWidth: !0,
              }),
              (0, s.jsx)("div", {
                className: l().podcastList,
                children: _.slice(0, e).map((e) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: l().card,
                      children: [
                        (0, s.jsx)("div", {
                          className: l().cardImageWrapper,
                          children: (0, s.jsx)("iframe", {
                            src: "https://play.vidyard.com/".concat(
                              e.vidyardId,
                              ".html?autoplay=0"
                            ),
                            frameBorder: "0",
                            allow:
                              "fullscreen; picture-in-picture; clipboard-write",
                            title: e.title,
                            allowFullScreen: !0,
                            className: l().cardImage,
                            style: { borderRadius: 16, background: "#000" },
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: l().cardContent,
                          children: [
                            (0, s.jsx)(o.default, {
                              size: "sm",
                              className: l().episode,
                              children: null == e ? void 0 : e.subtitle,
                            }),
                            (0, s.jsx)(u.default, {
                              className: l().title,
                              size: "sm",
                              children: e.title,
                            }),
                            (0, s.jsx)("span", {
                              className: l().date,
                              children: (0, m.ie)(e.date),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              e < _.length &&
                (0, s.jsx)("div", {
                  className: l().loadMore,
                  children: (0, s.jsx)(h.default, {
                    color: "transparent-light",
                    className: l().loadMoreButton,
                    onClick: () => {
                      t((e) => e + 3);
                    },
                    children: "Load more",
                  }),
                }),
            ],
          }),
        });
      }
    },
    81079: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var s = i(57437),
        r = i(2265),
        a = i(44839),
        n = i(16609),
        l = i(49582),
        d = i(78002),
        c = i(16463);
      function o(e) {
        let {
            children: t,
            component: i = "div",
            className: o,
            direction: u,
            directionMobile: h = u,
            translateY: m = 0,
            translateX: _ = 0,
            duration: p = 0.8,
            rotateX: v = 0,
            rotateY: y = 0,
            ease: f = "back.out",
            opacity: g = 0,
            animate: x = !0,
            start: j = 80,
            end: b = 60,
            ...N
          } = e,
          P = (0, r.useRef)(null),
          { useGSAP: w, activatedGsap: k } = (0, n.Z)(),
          Z = (0, d.Z)(),
          I = (0, c.usePathname)();
        return (
          w(() => {
            if (
              "/" == I &&
              k &&
              x &&
              P.current &&
              (null == Z ? void 0 : Z.width)
            ) {
              let e, t;
              (null == Z ? void 0 : Z.width) < 992
                ? ((_ = "right" == h ? -200 : "left" == h ? 200 : _),
                  (m = "top" == h ? 200 : "bottom" == h ? -200 : m))
                : ((m = "top" == u ? 200 : "bottom" == u ? -200 : m),
                  (_ = "right" == u ? -200 : "left" == u ? 200 : _));
              let i = l.ZP.timeline({
                scrollTrigger: {
                  trigger: P.current,
                  start: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? j - 10 : j,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? b - 15 : b - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? _
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * _
                    : ((null == Z ? void 0 : Z.width) / 1440) * _),
                (t =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? m
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * m
                    : ((null == Z ? void 0 : Z.width) / 1440) * m),
                i
                  .from(P.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: v,
                    rotateY: y,
                    opacity: g,
                    duration: p,
                    ease: f,
                  })
                  .to(P.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => i.kill()
              );
            }
          }, [k, I]),
          (0, s.jsx)(i, { ...N, ref: P, className: (0, a.Z)(o), children: t })
        );
      }
    },
    42625: function (e, t, i) {
      "use strict";
      var s = i(57437),
        r = i(44839),
        a = i(58538),
        n = i.n(a);
      let l = (0, i(2265).forwardRef)((e, t) => {
        let { children: i, className: a, size: l, classic: d, ...c } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            ref: t,
            className: (0, r.Z)(
              n().container,
              a,
              l && n()[l],
              d && n().classic
            ),
            ...c,
            children: i,
          }),
        });
      });
      (l.displayName = "Container"), (t.Z = l);
    },
    58350: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = i(57437),
        r = i(44839),
        a = i(21360),
        n = i(87580),
        l = i(84395),
        d = i(18803),
        c = i.n(d);
      function o(e) {
        let {
          subtitle: t,
          subtitleColor: i,
          title: d,
          bigdesc: o,
          titleBottomContent: u,
          largedesc: h,
          desc: m,
          subtitleComponent: _,
          titleComponent: p,
          align: v = "center",
          alignMobile: y = v,
          bg: f = "dark",
          animate: g = !0,
          direction: x = "right",
          maxWidth: j,
          className: b,
          largedescClass: N,
          bigdescClass: P,
          descClass: w,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, r.Z)(
            c().heading,
            c()[v],
            v !== y && c()["sm-".concat(y)],
            j && c().max,
            b && b
          ),
          children: [
            t &&
              (0, s.jsx)(l.default, {
                color:
                  i ||
                  ("light" == f
                    ? "dark"
                    : "primary" == f
                    ? "light"
                    : "primary"),
                component: _,
                animate: g,
                direction: x,
                className: c().subtitle,
                children: t,
              }),
            d &&
              (0, s.jsx)(n.default, {
                animate: g,
                direction: x,
                component: p,
                className: c().title,
                children: d,
              }),
            u && u,
            h &&
              (0, s.jsx)(a.default, {
                animate: g,
                direction: x,
                className: (0, r.Z)(c().bigdesc, c().largedesc, c()[f], N),
                size: "xl",
                children: h,
              }),
            o &&
              (0, s.jsx)(a.default, {
                animate: g,
                direction: x,
                className: (0, r.Z)(c().bigdesc, c()[f], P),
                size: "lg",
                children: o,
              }),
            m &&
              (0, s.jsx)(a.default, {
                animate: g,
                direction: x,
                className: (0, r.Z)(c().desc, c()[f], w),
                children: m,
              }),
          ],
        });
      }
    },
    32913: function (e, t, i) {
      "use strict";
      var s = i(57437),
        r = i(44839),
        a = i(14629),
        n = i.n(a);
      let l = (0, i(2265).forwardRef)((e, t) => {
        let { children: i, className: a, color: l = "dark", ...d } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("section", {
            ref: t,
            className: (0, r.Z)(n().section, n()[l], a),
            ...d,
            children: i,
          }),
        });
      });
      (l.displayName = "Section"), (t.Z = l);
    },
    23881: function (e) {
      e.exports = {
        section: "style_section__5IO8T",
        container: "style_container__W4Gou",
        podcastList: "style_podcastList__OzPTs",
        card: "style_card__qNypA",
        cardImageWrapper: "style_cardImageWrapper__mFHyN",
        cardImage: "style_cardImage__64hIx",
        playIconOverlay: "style_playIconOverlay__ujiPj",
        playIcon: "style_playIcon__PblxS",
        cardContent: "style_cardContent__cZ7HZ",
        episode: "style_episode__BFHDC",
        title: "style_title__Y9Y68",
        desc: "style_desc__gyPUu",
        date: "style_date__F245m",
        loadMore: "style_loadMore__A7Qts",
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
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 9667, 5073, 4765, 922, 9391, 231, 493, 3106, 8048, 5162,
        2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 9017));
      }
    ),
      (_N_E = e.O());
  },
]);
