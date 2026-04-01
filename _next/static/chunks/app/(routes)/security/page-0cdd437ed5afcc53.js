(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [388],
  {
    84702: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.t.bind(s, 58538, 23)),
        Promise.resolve().then(s.bind(s, 47984)),
        Promise.resolve().then(s.bind(s, 45419)),
        Promise.resolve().then(s.t.bind(s, 14629, 23)),
        Promise.resolve().then(s.t.bind(s, 59747, 23)),
        Promise.resolve().then(s.t.bind(s, 55629, 23)),
        Promise.resolve().then(s.t.bind(s, 9784, 23)),
        Promise.resolve().then(s.t.bind(s, 30843, 23)),
        Promise.resolve().then(s.t.bind(s, 18803, 23)),
        Promise.resolve().then(s.t.bind(s, 99188, 23)),
        Promise.resolve().then(s.t.bind(s, 16119, 23)),
        Promise.resolve().then(s.bind(s, 21360)),
        Promise.resolve().then(s.bind(s, 87580)),
        Promise.resolve().then(s.bind(s, 84395));
    },
    87138: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return l.a;
        },
      });
      var n = s(231),
        l = s.n(n);
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
        l = s(87138),
        r = s(60231),
        _ = s.n(r),
        i = s(44839),
        o = s(2265),
        c = s(16609),
        a = s(49582),
        d = s(78002),
        u = s(16463);
      function h(e) {
        let {
            href: t,
            className: s,
            children: r,
            target: h,
            onClick: y,
            direction: b,
            directionMobile: m = b,
            translateY: p = 0,
            translateX: f = 0,
            duration: x = 0.8,
            rotateX: v = 0,
            rotateY: w = 0,
            ease: g = "back.out",
            opacity: k = 0,
            animate: N,
            start: j = 80,
            end: P = 60,
            color: Z = "primary",
            disabled: Y,
            type: C = "button",
          } = e,
          A = (0, o.useRef)(null),
          B = (0, o.useRef)(null),
          T = (0, d.Z)(),
          { useGSAP: F, activatedGsap: O } = (0, c.Z)(),
          E = (0, u.usePathname)();
        return (
          F(() => {
            if ("/" == E) {
              let e;
              if (
                (A.current && (e = A),
                B.current && (e = B),
                O && N && e && e.current && (null == T ? void 0 : T.width))
              ) {
                let t, s;
                (null == T ? void 0 : T.width) < 992
                  ? ((f = "right" == m ? -200 : "left" == m ? 200 : f),
                    (p = "top" == m ? 200 : "bottom" == m ? -200 : p))
                  : ((p = "top" == b ? 200 : "bottom" == b ? -200 : p),
                    (f = "right" == b ? -200 : "left" == b ? 200 : f));
                let n = a.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == T ? void 0 : T.width) < 992 ? j - 10 : j,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == T ? void 0 : T.width) < 992 ? P - 15 : P - 10,
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
                      ? p
                      : (null == T ? void 0 : T.width) < 992
                      ? ((null == T ? void 0 : T.width) / 500) * p
                      : ((null == T ? void 0 : T.width) / 1440) * p),
                  n
                    .from(e.current, {
                      translateY: s,
                      translateX: t,
                      rotateX: v,
                      rotateY: w,
                      opacity: k,
                      duration: x,
                      ease: g,
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
          }, [O, E]),
          (0, n.jsx)(n.Fragment, {
            children: t
              ? h && "_blank" == h
                ? (0, n.jsxs)(l.default, {
                    ref: B,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: y,
                    className: (0, i.Z)(_().button, s, _()[Z]),
                    children: [r, (0, n.jsx)("span", { className: _().wrap })],
                  })
                : (0, n.jsxs)(l.default, {
                    ref: B,
                    href: t,
                    target: h,
                    rel: "",
                    onClick: y,
                    className: (0, i.Z)(_().button, s, _()[Z]),
                    children: [r, (0, n.jsx)("span", { className: _().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: C,
                  disabled: Y,
                  ref: A,
                  onClick: y,
                  className: (0, i.Z)(_().button, s, _()[Z]),
                  children: [r, (0, n.jsx)("span", { className: _().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, s) {
      "use strict";
      var n = s(57437),
        l = s(44839),
        r = s(58538),
        _ = s.n(r);
      let i = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: r, size: i, classic: o, ...c } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, l.Z)(
              _().container,
              r,
              i && _()[i],
              o && _().classic
            ),
            ...c,
            children: s,
          }),
        });
      });
      (i.displayName = "Container"), (t.Z = i);
    },
    45419: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return y;
        },
      });
      var n = s(57437),
        l = s(42625),
        r = s(76003),
        _ = s.n(r),
        i = s(21360),
        o = s(47984),
        c = s(32913),
        a = s(87580),
        d = s(70499),
        u = s(13259),
        h = s(44839);
      function y(e) {
        let { color: t } = e;
        return (0, n.jsx)(c.Z, {
          className: _().section,
          color: t || "primary",
          children: (0, n.jsxs)(l.Z, {
            className: _().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(o.default, {
                  className: _().cube,
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
              (0, n.jsxs)(i.default, {
                className: (0, h.Z)(_().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, n.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, n.jsxs)("div", {
                className: _().btns,
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
        l = s(44839),
        r = s(14629),
        _ = s.n(r);
      let i = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: r, color: i = "dark", ...o } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, l.Z)(_().section, _()[i], r),
            ...o,
            children: s,
          }),
        });
      });
      (i.displayName = "Section"), (t.Z = i);
    },
    55629: function (e) {
      e.exports = {
        section: "style_section__kARIQ",
        content: "style_content__J_YuY",
        card: "style_card__PgYEA",
        title: "style_title__78kFq",
      };
    },
    30843: function (e) {
      e.exports = {
        section: "style_section__0q_AI",
        content: "style_content__bDb8i",
        boxes: "style_boxes__OBvcw",
        box: "style_box__SlHS5",
        title: "style_title__wHSrh",
        subtitle: "style_subtitle__tGonx",
        list: "style_list__hJ_e8",
        list_item: "style_list_item__qjYs6",
        icon: "style_icon__PbK0o",
      };
    },
    99188: function (e) {
      e.exports = {
        section: "style_section__Np8AX",
        content: "style_content__9G_XK",
        boxes: "style_boxes__iFCYY",
        bottomText: "style_bottomText__Ilil0",
      };
    },
    16119: function (e) {
      e.exports = {
        section: "style_section__Zmt8M",
        content: "style_content__MCxhL",
        boxes: "style_boxes__ZUopk",
        box: "style_box__ONwwI",
        top: "style_top__WowN4",
        icon: "style_icon___oJY5",
        linkBox: "style_linkBox__u54Nn",
        link: "style_link__j_CNb",
        texts: "style_texts__fA5SO",
        completed: "style_completed__ZKaDH",
        uncompleted: "style_uncompleted__Lf_Ku",
        bottomText: "style_bottomText__OHLHK",
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
        9667, 5073, 1899, 947, 7997, 922, 9391, 231, 3106, 8048, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 84702));
      }
    ),
      (_N_E = e.O());
  },
]);
