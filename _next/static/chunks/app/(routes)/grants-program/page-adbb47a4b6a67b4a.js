(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5029],
  {
    47536: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.bind(s, 70499)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.t.bind(s, 9784, 23)),
        Promise.resolve().then(s.t.bind(s, 340, 23)),
        Promise.resolve().then(s.t.bind(s, 73411, 23)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.t.bind(s, 98801, 23)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.bind(s, 45419)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
        Promise.resolve().then(s.t.bind(s, 14566, 23)),
        Promise.resolve().then(s.bind(s, 21360)),
        Promise.resolve().then(s.bind(s, 87580)),
        Promise.resolve().then(s.bind(s, 84395));
    },
    87138: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return r.a;
        },
      });
      var n = s(231),
        r = s.n(n);
    },
    70499: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s(57437),
        r = s(87138),
        l = s(60231),
        i = s.n(l),
        _ = s(44839),
        o = s(2265),
        c = s(16609),
        a = s(49582),
        d = s(78002),
        h = s(16463);
      function u(e) {
        let {
            href: t,
            className: s,
            children: l,
            target: u,
            onClick: y,
            direction: b,
            directionMobile: f = b,
            translateY: p = 0,
            translateX: m = 0,
            duration: x = 0.8,
            rotateX: g = 0,
            rotateY: v = 0,
            ease: w = "back.out",
            opacity: k = 0,
            animate: j,
            start: N = 80,
            end: P = 60,
            color: T = "primary",
            disabled: C,
            type: Z = "button",
          } = e,
          B = (0, o.useRef)(null),
          E = (0, o.useRef)(null),
          F = (0, d.Z)(),
          { useGSAP: O, activatedGsap: W } = (0, c.Z)(),
          Y = (0, h.usePathname)();
        return (
          O(() => {
            if ("/" == Y) {
              let e;
              if (
                (B.current && (e = B),
                E.current && (e = E),
                W && j && e && e.current && (null == F ? void 0 : F.width))
              ) {
                let t, s;
                (null == F ? void 0 : F.width) < 992
                  ? ((m = "right" == f ? -200 : "left" == f ? 200 : m),
                    (p = "top" == f ? 200 : "bottom" == f ? -200 : p))
                  : ((p = "top" == b ? 200 : "bottom" == b ? -200 : p),
                    (m = "right" == b ? -200 : "left" == b ? 200 : m));
                let n = a.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == F ? void 0 : F.width) < 992 ? N - 10 : N,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == F ? void 0 : F.width) < 992 ? P - 15 : P - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == F ? void 0 : F.width) > 1440
                      ? m
                      : (null == F ? void 0 : F.width) < 992
                      ? ((null == F ? void 0 : F.width) / 500) * m
                      : ((null == F ? void 0 : F.width) / 1440) * m),
                  (s =
                    (null == F ? void 0 : F.width) > 1440
                      ? p
                      : (null == F ? void 0 : F.width) < 992
                      ? ((null == F ? void 0 : F.width) / 500) * p
                      : ((null == F ? void 0 : F.width) / 1440) * p),
                  n
                    .from(e.current, {
                      translateY: s,
                      translateX: t,
                      rotateX: g,
                      rotateY: v,
                      opacity: k,
                      duration: x,
                      ease: w,
                    })
                    .to(e.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => n.kill()
                );
              }
            }
          }, [W, Y]),
          (0, n.jsx)(n.Fragment, {
            children: t
              ? u && "_blank" == u
                ? (0, n.jsxs)(r.default, {
                    ref: E,
                    href: t,
                    target: u,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: y,
                    className: (0, _.Z)(i().button, s, i()[T]),
                    children: [l, (0, n.jsx)("span", { className: i().wrap })],
                  })
                : (0, n.jsxs)(r.default, {
                    ref: E,
                    href: t,
                    target: u,
                    rel: "",
                    onClick: y,
                    className: (0, _.Z)(i().button, s, i()[T]),
                    children: [l, (0, n.jsx)("span", { className: i().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: Z,
                  disabled: C,
                  ref: B,
                  onClick: y,
                  className: (0, _.Z)(i().button, s, i()[T]),
                  children: [l, (0, n.jsx)("span", { className: i().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, s) {
      "use strict";
      var n = s(57437),
        r = s(44839),
        l = s(58538),
        i = s.n(l);
      let _ = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: l, size: _, classic: o, ...c } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, r.Z)(
              i().container,
              l,
              _ && i()[_],
              o && i().classic
            ),
            ...c,
            children: s,
          }),
        });
      });
      (_.displayName = "Container"), (t.Z = _);
    },
    45419: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return y;
        },
      });
      var n = s(57437),
        r = s(42625),
        l = s(76003),
        i = s.n(l),
        _ = s(21360),
        o = s(47984),
        c = s(32913),
        a = s(87580),
        d = s(70499),
        h = s(13259),
        u = s(44839);
      function y(e) {
        let { color: t } = e;
        return (0, n.jsx)(c.Z, {
          className: i().section,
          color: t || "primary",
          children: (0, n.jsxs)(r.Z, {
            className: i().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(o.default, {
                  className: i().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, n.jsx)(a.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, n.jsxs)(_.default, {
                className: (0, u.Z)(i().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, n.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, n.jsxs)("div", {
                className: i().btns,
                children: [
                  (0, n.jsx)(d.default, {
                    href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, n.jsx)(d.default, {
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
    32913: function (e, t, s) {
      "use strict";
      var n = s(57437),
        r = s(44839),
        l = s(14629),
        i = s.n(l);
      let _ = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: l, color: _ = "dark", ...o } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, r.Z)(i().section, i()[_], l),
            ...o,
            children: s,
          }),
        });
      });
      (_.displayName = "Section"), (t.Z = _);
    },
    73411: function (e) {
      e.exports = {
        section: "style_section__IQuiS",
        content: "style_content__Qz0rE",
        card: "style_card__0KSOx",
        icon: "style_icon__VnWlb",
        boxContent: "style_boxContent__LN5bl",
        title: "style_title__KaVFi",
        desc: "style_desc__kLiqP",
        selectionProcess: "style_selectionProcess__2R9fk",
        selectionTitle: "style_selectionTitle__XexNU",
        boxes: "style_boxes__wr7na",
        connect: "style_connect__CBZop",
        texts: "style_texts__tTeed",
        list: "style_list__dCU6U",
        item: "style_item__joVfp",
        bottomText: "style_bottomText__SkRQI",
      };
    },
    14566: function (e) {
      e.exports = {
        section: "style_section__6AOXo",
        content: "style_content__sbPHz",
        card: "style_card__OyTC6",
      };
    },
    340: function (e) {
      e.exports = {
        section: "style_section__LV9xQ",
        content: "style_content__7awYL",
      };
    },
    98801: function (e) {
      e.exports = {
        section: "style_section__k4tzU",
        content: "style_content__i424f",
        title: "style_title__WDaW9",
        right: "style_right__n1EJg",
        rightTopTexts: "style_rightTopTexts__J_hFw",
        rightTitle: "style_rightTitle__kWi55",
        boxes: "style_boxes__fMkCk",
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
        5073, 9667, 1128, 1899, 947, 922, 9391, 231, 3106, 8048, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 47536));
      }
    ),
      (_N_E = e.O());
  },
]);
