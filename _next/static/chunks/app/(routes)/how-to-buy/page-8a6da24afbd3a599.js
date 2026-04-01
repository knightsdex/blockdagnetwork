(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4238],
  {
    88763: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.bind(s, 16398)),
        Promise.resolve().then(s.t.bind(s, 17360, 23)),
        Promise.resolve().then(s.bind(s, 81079)),
        Promise.resolve().then(s.bind(s, 70499)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.t.bind(s, 9784, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.t.bind(s, 70309, 23)),
        Promise.resolve().then(s.t.bind(s, 87737, 23)),
        Promise.resolve().then(s.bind(s, 21360)),
        Promise.resolve().then(s.bind(s, 87580)),
        Promise.resolve().then(s.bind(s, 84395));
    },
    87138: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return i.a;
        },
      });
      var l = s(231),
        i = s.n(l);
    },
    16398: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return m;
        },
      });
      var l = s(57437),
        i = s(32913),
        n = s(8971),
        r = s.n(n),
        a = s(42625),
        o = s(58350),
        c = s(7628),
        d = s(47984),
        _ = s(44839),
        u = s(16463),
        h = s(87138);
      function m(e) {
        let { largedesc: t, desc: s } = e,
          n = (0, u.usePathname)(),
          m = [

          ];
        return (0, l.jsx)(i.Z, {
          className: r().step1,
          children: (0, l.jsxs)(a.Z, {
            classic: !0,
            children: [
              (0, l.jsx)("div", {
                className: (0, _.Z)(r().tabs),
                children: m.map((e) =>
                  (0, l.jsx)(
                    h.default,
                    {
                      href: e.value,
                      target: e.target,
                      className: (0, _.Z)(
                        r().tabItem,
                        n === e.value && r().active
                      ),
                      children: e.title,
                    },
                    e.value
                  )
                ),
              }),
              (0, l.jsxs)("div", {
                className: r().grid,
                children: [
                  (0, l.jsx)(o.Z, {
                    align: "left",
                    alignMobile: "center",
                    largedesc: t,
                    subtitle: "HOW TO BUY",
                    title: "Step 1",
                    desc: s,
                  }),
                  (0, l.jsx)(c.Z, {
                    shadow: !0,
                    descComponent: "div",
                    desc: (0, l.jsx)("div", {
                      className: r().methods,
                      children: [
                        {
                          title: "metamask",
                          img: "/images/methods/metamask.png",
                        },
                        {
                          title: "coinbase",
                          img: "/images/methods/coinbase.png",
                        },
                        { title: "trust", img: "/images/methods/trust.png" },
                        {
                          title: "pluswallet",
                          img: "/images/methods/pluswallet.png",
                        },
                        {
                          title: "walletconnect",
                          img: "/images/methods/walletconnect.png",
                        },
                      ].map((e, t) =>
                        (0, l.jsx)(
                          "div",
                          {
                            className: r().img,
                            children: (0, l.jsx)(d.default, {
                              src: e.img,
                              alt: e.title,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    81079: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var l = s(57437),
        i = s(2265),
        n = s(44839),
        r = s(16609),
        a = s(49582),
        o = s(78002),
        c = s(16463);
      function d(e) {
        let {
            children: t,
            component: s = "div",
            className: d,
            direction: _,
            directionMobile: u = _,
            translateY: h = 0,
            translateX: m = 0,
            duration: g = 0.8,
            rotateX: p = 0,
            rotateY: y = 0,
            ease: f = "back.out",
            opacity: v = 0,
            animate: b = !0,
            start: w = 80,
            end: x = 60,
            ...j
          } = e,
          k = (0, i.useRef)(null),
          { useGSAP: N, activatedGsap: Z } = (0, r.Z)(),
          P = (0, o.Z)(),
          B = (0, c.usePathname)();
        return (
          N(() => {
            if (
              "/" == B &&
              Z &&
              b &&
              k.current &&
              (null == P ? void 0 : P.width)
            ) {
              let e, t;
              (null == P ? void 0 : P.width) < 992
                ? ((m = "right" == u ? -200 : "left" == u ? 200 : m),
                  (h = "top" == u ? 200 : "bottom" == u ? -200 : h))
                : ((h = "top" == _ ? 200 : "bottom" == _ ? -200 : h),
                  (m = "right" == _ ? -200 : "left" == _ ? 200 : m));
              let s = a.ZP.timeline({
                scrollTrigger: {
                  trigger: k.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? w - 10 : w,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? x - 15 : x - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? m
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * m
                    : ((null == P ? void 0 : P.width) / 1440) * m),
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? h
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * h
                    : ((null == P ? void 0 : P.width) / 1440) * h),
                s
                  .from(k.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: p,
                    rotateY: y,
                    opacity: v,
                    duration: g,
                    ease: f,
                  })
                  .to(k.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => s.kill()
              );
            }
          }, [Z, B]),
          (0, l.jsx)(s, { ...j, ref: k, className: (0, n.Z)(d), children: t })
        );
      }
    },
    70499: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        });
      var l = s(57437),
        i = s(87138),
        n = s(60231),
        r = s.n(n),
        a = s(44839),
        o = s(2265),
        c = s(16609),
        d = s(49582),
        _ = s(78002),
        u = s(16463);
      function h(e) {
        let {
            href: t,
            className: s,
            children: n,
            target: h,
            onClick: m,
            direction: g,
            directionMobile: p = g,
            translateY: y = 0,
            translateX: f = 0,
            duration: v = 0.8,
            rotateX: b = 0,
            rotateY: w = 0,
            ease: x = "back.out",
            opacity: j = 0,
            animate: k,
            start: N = 80,
            end: Z = 60,
            color: P = "primary",
            disabled: B,
            type: C = "button",
          } = e,
          Y = (0, o.useRef)(null),
          F = (0, o.useRef)(null),
          T = (0, _.Z)(),
          { useGSAP: E, activatedGsap: O } = (0, c.Z)(),
          W = (0, u.usePathname)();
        return (
          E(() => {
            if ("/" == W) {
              let e;
              if (
                (Y.current && (e = Y),
                F.current && (e = F),
                O && k && e && e.current && (null == T ? void 0 : T.width))
              ) {
                let t, s;
                (null == T ? void 0 : T.width) < 992
                  ? ((f = "right" == p ? -200 : "left" == p ? 200 : f),
                    (y = "top" == p ? 200 : "bottom" == p ? -200 : y))
                  : ((y = "top" == g ? 200 : "bottom" == g ? -200 : y),
                    (f = "right" == g ? -200 : "left" == g ? 200 : f));
                let l = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == T ? void 0 : T.width) < 992 ? N - 10 : N,
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
                  (t =
                    (null == T ? void 0 : T.width) > 1440
                      ? f
                      : (null == T ? void 0 : T.width) < 992
                      ? ((null == T ? void 0 : T.width) / 500) * f
                      : ((null == T ? void 0 : T.width) / 1440) * f),
                  (s =
                    (null == T ? void 0 : T.width) > 1440
                      ? y
                      : (null == T ? void 0 : T.width) < 992
                      ? ((null == T ? void 0 : T.width) / 500) * y
                      : ((null == T ? void 0 : T.width) / 1440) * y),
                  l
                    .from(e.current, {
                      translateY: s,
                      translateX: t,
                      rotateX: b,
                      rotateY: w,
                      opacity: j,
                      duration: v,
                      ease: x,
                    })
                    .to(e.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => l.kill()
                );
              }
            }
          }, [O, W]),
          (0, l.jsx)(l.Fragment, {
            children: t
              ? h && "_blank" == h
                ? (0, l.jsxs)(i.default, {
                    ref: F,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: m,
                    className: (0, a.Z)(r().button, s, r()[P]),
                    children: [n, (0, l.jsx)("span", { className: r().wrap })],
                  })
                : (0, l.jsxs)(i.default, {
                    ref: F,
                    href: t,
                    target: h,
                    rel: "",
                    onClick: m,
                    className: (0, a.Z)(r().button, s, r()[P]),
                    children: [n, (0, l.jsx)("span", { className: r().wrap })],
                  })
              : (0, l.jsxs)("button", {
                  type: C,
                  disabled: B,
                  ref: Y,
                  onClick: m,
                  className: (0, a.Z)(r().button, s, r()[P]),
                  children: [n, (0, l.jsx)("span", { className: r().wrap })],
                }),
          })
        );
      }
    },
    7628: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var l = s(57437),
        i = s(44839),
        n = s(9784),
        r = s.n(n),
        a = s(21360),
        o = s(47984);
      function c(e) {
        let {
          icon: t,
          title: s,
          bigTitle: n,
          desc: c,
          descComponent: d,
          vertical: _,
          verticalMobile: u = _,
          shadow: h,
          shadowTop: m,
          light: g,
          dark: p,
          white: y,
          customTitleColor: f,
          customDescColor: v,
          customBorderColor: b,
          style: w,
          className: x,
        } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.Z)(
            r().card,
            _ && r().vertical,
            u && r().verticalMobile,
            h && r().shadow,
            m && r().shadowTop,
            g && r().light,
            p && r().dark,
            y && r().white,
            x
          ),
          style: { borderColor: b, ...w },
          children: [
            t &&
              (0, l.jsx)("div", {
                className: r().icon,
                children: (0, l.jsx)(o.default, {
                  src: t,
                  alt: "BlockDAG",
                  width: 0,
                  height: 0,
                }),
              }),
            (0, l.jsxs)("div", {
              className: r().content,
              children: [
                s &&
                  (0, l.jsx)(a.default, {
                    size: n ? "xl" : "lg",
                    className: r().title,
                    style: { color: f },
                    children: s,
                  }),
                c &&
                  (0, l.jsx)(a.default, {
                    component: d,
                    className: r().desc,
                    style: { color: v },
                    children: c,
                  }),
              ],
            }),
          ],
        });
      }
    },
    42625: function (e, t, s) {
      "use strict";
      var l = s(57437),
        i = s(44839),
        n = s(58538),
        r = s.n(n);
      let a = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: n, size: a, classic: o, ...c } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("div", {
            ref: t,
            className: (0, i.Z)(
              r().container,
              n,
              a && r()[a],
              o && r().classic
            ),
            ...c,
            children: s,
          }),
        });
      });
      (a.displayName = "Container"), (t.Z = a);
    },
    58350: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = s(57437),
        i = s(44839),
        n = s(21360),
        r = s(87580),
        a = s(84395),
        o = s(18803),
        c = s.n(o);
      function d(e) {
        let {
          subtitle: t,
          subtitleColor: s,
          title: o,
          bigdesc: d,
          titleBottomContent: _,
          largedesc: u,
          desc: h,
          subtitleComponent: m,
          titleComponent: g,
          align: p = "center",
          alignMobile: y = p,
          bg: f = "dark",
          animate: v = !0,
          direction: b = "right",
          maxWidth: w,
          className: x,
          largedescClass: j,
          bigdescClass: k,
          descClass: N,
        } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.Z)(
            c().heading,
            c()[p],
            p !== y && c()["sm-".concat(y)],
            w && c().max,
            x && x
          ),
          children: [
            t &&
              (0, l.jsx)(a.default, {
                color:
                  s ||
                  ("light" == f
                    ? "dark"
                    : "primary" == f
                    ? "light"
                    : "primary"),
                component: m,
                animate: v,
                direction: b,
                className: c().subtitle,
                children: t,
              }),
            o &&
              (0, l.jsx)(r.default, {
                animate: v,
                direction: b,
                component: g,
                className: c().title,
                children: o,
              }),
            _ && _,
            u &&
              (0, l.jsx)(n.default, {
                animate: v,
                direction: b,
                className: (0, i.Z)(c().bigdesc, c().largedesc, c()[f], j),
                size: "xl",
                children: u,
              }),
            d &&
              (0, l.jsx)(n.default, {
                animate: v,
                direction: b,
                className: (0, i.Z)(c().bigdesc, c()[f], k),
                size: "lg",
                children: d,
              }),
            h &&
              (0, l.jsx)(n.default, {
                animate: v,
                direction: b,
                className: (0, i.Z)(c().desc, c()[f], N),
                children: h,
              }),
          ],
        });
      }
    },
    32913: function (e, t, s) {
      "use strict";
      var l = s(57437),
        i = s(44839),
        n = s(14629),
        r = s.n(n);
      let a = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: n, color: a = "dark", ...o } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            ref: t,
            className: (0, i.Z)(r().section, r()[a], n),
            ...o,
            children: s,
          }),
        });
      });
      (a.displayName = "Section"), (t.Z = a);
    },
    8971: function (e) {
      e.exports = {
        step1: "style_step1__mm3bb",
        grid: "style_grid__CI_Bu",
        methods: "style_methods__THXLk",
        img: "style_img__eIqJ5",
        tabs: "style_tabs__luaEz",
        tabItem: "style_tabItem__WR5WP",
        active: "style_active__FETbS",
      };
    },
    17360: function (e) {
      e.exports = {
        step2: "style_step2__r4rNG",
        cards: "style_cards__kFPFT",
        card: "style_card__iBbRS",
        desc: "style_desc__98en9",
        icons: "style_icons__VD5dV",
      };
    },
    70309: function (e) {
      e.exports = {
        stepgrid: "style_stepgrid___d6WY",
        container: "style_container__xzlYS",
        left: "style_left__5H2s6",
        right: "style_right__PBebv",
        img: "style_img__nRbWg",
      };
    },
    60231: function (e) {
      e.exports = {
        button: "style_button__C9H72",
        wrap: "style_wrap__yFGLp",
        hover: "style_hover__dNFsO",
        primary: "style_primary__FoPQF",
        light: "style_light__geNjY",
        dark: "style_dark__Ov6B6",
        "linear-dark": "style_linear-dark__bAjvr",
        "linear-primary": "style_linear-primary__omW84",
        "transparent-dark": "style_transparent-dark__hThHh",
        "transparent-light": "style_transparent-light__aG3s9",
        "transparent-primary": "style_transparent-primary__q5o8s",
      };
    },
    9784: function (e) {
      e.exports = {
        card: "style_card__Pxh7T",
        icon: "style_icon__lYd_T",
        vertical: "style_vertical__gD7An",
        verticalMobile: "style_verticalMobile__FySfF",
        shadow: "style_shadow__BN9sk",
        shadowTop: "style_shadowTop__ARDte",
        content: "style_content__YtA0e",
        title: "style_title__KEKbX",
        desc: "style_desc__dVqU2",
        white: "style_white__eOgEV",
        light: "style_light__ztwkE",
        lightDescWhite: "style_lightDescWhite__CnBc6",
        dark: "style_dark__ZeUOf",
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
    87737: function (e) {
      e.exports = {
        presalelogos: "style_presalelogos__CFR1I",
        button: "style_button__YBwt4",
        iconCry: "style_iconCry__lsg1O",
        iconVisa: "style_iconVisa__VZ7By",
        iconMastercard: "style_iconMastercard__Zg_Hl",
        iconPays: "style_iconPays__LDOl7",
        innerPage: "style_innerPage__18LE2",
        dark: "style_dark__t6fFo",
        preLogoAnimation: "style_preLogoAnimation__sAK_B",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 9667, 5073, 7367, 922, 9391, 231, 3106, 8048, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 88763));
      }
    ),
      (_N_E = e.O());
  },
]);
