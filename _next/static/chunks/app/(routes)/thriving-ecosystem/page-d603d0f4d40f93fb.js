(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3727],
  {
    20083: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 38173, 23)),
        Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.t.bind(s, 55629, 23)),
        Promise.resolve().then(s.t.bind(s, 9784, 23)),
        Promise.resolve().then(s.t.bind(s, 77943, 23)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.t.bind(s, 51293, 23)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.bind(s, 45419)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
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
            return h;
          },
        });
      var n = s(57437),
        r = s(87138),
        l = s(60231),
        i = s.n(l),
        o = s(44839),
        _ = s(2265),
        a = s(16609),
        c = s(49582),
        d = s(78002),
        u = s(16463);
      function h(e) {
        let {
            href: t,
            className: s,
            children: l,
            target: h,
            onClick: y,
            direction: m,
            directionMobile: b = m,
            translateY: f = 0,
            translateX: p = 0,
            duration: v = 0.8,
            rotateX: x = 0,
            rotateY: g = 0,
            ease: w = "back.out",
            opacity: k = 0,
            animate: j,
            start: N = 80,
            end: P = 60,
            color: Z = "primary",
            disabled: C,
            type: Y = "button",
          } = e,
          A = (0, _.useRef)(null),
          B = (0, _.useRef)(null),
          E = (0, d.Z)(),
          { useGSAP: T, activatedGsap: F } = (0, a.Z)(),
          D = (0, u.usePathname)();
        return (
          T(() => {
            if ("/" == D) {
              let e;
              if (
                (A.current && (e = A),
                B.current && (e = B),
                F && j && e && e.current && (null == E ? void 0 : E.width))
              ) {
                let t, s;
                (null == E ? void 0 : E.width) < 992
                  ? ((p = "right" == b ? -200 : "left" == b ? 200 : p),
                    (f = "top" == b ? 200 : "bottom" == b ? -200 : f))
                  : ((f = "top" == m ? 200 : "bottom" == m ? -200 : f),
                    (p = "right" == m ? -200 : "left" == m ? 200 : p));
                let n = c.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == E ? void 0 : E.width) < 992 ? N - 10 : N,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == E ? void 0 : E.width) < 992 ? P - 15 : P - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == E ? void 0 : E.width) > 1440
                      ? p
                      : (null == E ? void 0 : E.width) < 992
                      ? ((null == E ? void 0 : E.width) / 500) * p
                      : ((null == E ? void 0 : E.width) / 1440) * p),
                  (s =
                    (null == E ? void 0 : E.width) > 1440
                      ? f
                      : (null == E ? void 0 : E.width) < 992
                      ? ((null == E ? void 0 : E.width) / 500) * f
                      : ((null == E ? void 0 : E.width) / 1440) * f),
                  n
                    .from(e.current, {
                      translateY: s,
                      translateX: t,
                      rotateX: x,
                      rotateY: g,
                      opacity: k,
                      duration: v,
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
          }, [F, D]),
          (0, n.jsx)(n.Fragment, {
            children: t
              ? h && "_blank" == h
                ? (0, n.jsxs)(r.default, {
                    ref: B,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: y,
                    className: (0, o.Z)(i().button, s, i()[Z]),
                    children: [l, (0, n.jsx)("span", { className: i().wrap })],
                  })
                : (0, n.jsxs)(r.default, {
                    ref: B,
                    href: t,
                    target: h,
                    rel: "",
                    onClick: y,
                    className: (0, o.Z)(i().button, s, i()[Z]),
                    children: [l, (0, n.jsx)("span", { className: i().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: Y,
                  disabled: C,
                  ref: A,
                  onClick: y,
                  className: (0, o.Z)(i().button, s, i()[Z]),
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
      let o = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: l, size: o, classic: _, ...a } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, r.Z)(
              i().container,
              l,
              o && i()[o],
              _ && i().classic
            ),
            ...a,
            children: s,
          }),
        });
      });
      (o.displayName = "Container"), (t.Z = o);
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
        o = s(21360),
        _ = s(47984),
        a = s(32913),
        c = s(87580),
        d = s(70499),
        u = s(13259),
        h = s(44839);
      function y(e) {
        let { color: t } = e;
        return (0, n.jsx)(a.Z, {
          className: i().section,
          color: t || "primary",
          children: (0, n.jsxs)(r.Z, {
            className: i().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(_.default, {
                  className: i().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, n.jsx)(c.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, n.jsxs)(o.default, {
                className: (0, h.Z)(i().desc, "font-bold"),
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
      var n = s(57437),
        r = s(44839),
        l = s(14629),
        i = s.n(l);
      let o = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: l, color: o = "dark", ..._ } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, r.Z)(i().section, i()[o], l),
            ..._,
            children: s,
          }),
        });
      });
      (o.displayName = "Section"), (t.Z = o);
    },
    77943: function (e) {
      e.exports = {
        section: "style_section__8fmQt",
        content: "style_content__BA8Xd",
        boxes: "style_boxes__7H2M8",
      };
    },
    51293: function (e) {
      e.exports = {
        section: "style_section__VEuDC",
        content: "style_content__16jUK",
        boxes: "style_boxes__VjliJ",
        connect: "style_connect___py8C",
        texts: "style_texts__heZsj",
        list: "style_list__KDaO_",
        item: "style_item__lkT7s",
        bottomText: "style_bottomText__spfHk",
      };
    },
    55629: function (e) {
      e.exports = {
        section: "style_section__kARIQ",
        content: "style_content__J_YuY",
        card: "style_card__PgYEA",
        title: "style_title__78kFq",
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
        9667, 5073, 7790, 6480, 1899, 947, 922, 9391, 231, 3106, 8048, 2971,
        7023, 1744,
      ],
      function () {
        return e((e.s = 20083));
      }
    ),
      (_N_E = e.O());
  },
]);
