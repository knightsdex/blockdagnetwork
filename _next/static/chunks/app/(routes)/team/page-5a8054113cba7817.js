(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7640],
  {
    24121: function (t, e, n) {
      Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.t.bind(n, 98858, 23)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.t.bind(n, 59747, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    66648: function (t, e, n) {
      "use strict";
      n.d(e, {
        default: function () {
          return i.a;
        },
      });
      var l = n(55601),
        i = n.n(l);
    },
    55601: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          default: function () {
            return _;
          },
          getImageProps: function () {
            return s;
          },
        });
      let l = n(99920),
        i = n(80497),
        r = n(38173),
        o = l._(n(21241));
      function s(t) {
        let { props: e } = (0, i.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, n] of Object.entries(e)) void 0 === n && delete e[t];
        return { props: e };
      }
      let _ = r.Image;
    },
    47984: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return a;
          },
        });
      var l = n(57437),
        i = n(79124),
        r = n(66648);
      n(2265);
      var o = n(69665),
        s = n.n(o),
        _ = n(44839);
      function a(t) {
        let {
            alt: e = "BlockDAG",
            src: n,
            width: o,
            height: a,
            hero: d,
            className: u,
            ...c
          } = t,
          m = (0, i.Z)();
        return (0, l.jsx)(l.Fragment, {
          children:
            d || c.priority
              ? (0, l.jsx)(
                  r.default,
                  {
                    className: (0, _.Z)(s().img, u),
                    src: n,
                    alt: e,
                    width: o || 0,
                    height: a || 0,
                    ...c,
                  },
                  1
                )
              : m
              ? (0, l.jsx)(
                  r.default,
                  {
                    className: (0, _.Z)(s().img, u),
                    src: n,
                    alt: e,
                    width: 0,
                    height: 0,
                    ...c,
                  },
                  2
                )
              : (0, l.jsx)(
                  r.default,
                  {
                    className: (0, _.Z)(s().loadingImg, u),
                    src: "/cube.webp",
                    alt: e,
                    width: 0,
                    height: 0,
                    ...c,
                  },
                  3
                ),
        });
      }
    },
    21360: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var l = n(57437),
        i = n(2265),
        r = n(8544),
        o = n.n(r),
        s = n(44839),
        _ = n(16609),
        a = n(49582),
        d = n(78002),
        u = n(16463);
      function c(t) {
        let {
            children: e,
            component: n = "p",
            size: r = "md",
            className: c,
            style: m,
            direction: f,
            directionMobile: h = f,
            translateY: v = 0,
            translateX: y = 0,
            duration: w = 0.8,
            rotateX: g = 0,
            rotateY: b = 0,
            ease: p = "back.out",
            opacity: x = 0,
            animate: k,
            start: Z = 80,
            end: E = 60,
            onClick: P,
          } = t,
          N = (0, i.useRef)(null),
          I = (0, d.Z)(),
          { useGSAP: L, activatedGsap: S } = (0, _.Z)(),
          X = (0, u.usePathname)();
        return (
          L(() => {
            if (
              "/" == X &&
              S &&
              k &&
              N.current &&
              (null == I ? void 0 : I.width)
            ) {
              let t, e;
              (null == I ? void 0 : I.width) < 992
                ? ((y = "right" == h ? -200 : "left" == h ? 200 : y),
                  (v = "top" == h ? 200 : "bottom" == h ? -200 : v))
                : ((v = "top" == f ? 200 : "bottom" == f ? -200 : v),
                  (y = "right" == f ? -200 : "left" == f ? 200 : y));
              let n = a.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == I ? void 0 : I.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == I ? void 0 : I.width) < 992 ? E - 15 : E - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == I ? void 0 : I.width) > 1440
                    ? y
                    : (null == I ? void 0 : I.width) < 992
                    ? ((null == I ? void 0 : I.width) / 500) * y
                    : ((null == I ? void 0 : I.width) / 1440) * y),
                (e =
                  (null == I ? void 0 : I.width) > 1440
                    ? v
                    : (null == I ? void 0 : I.width) < 992
                    ? ((null == I ? void 0 : I.width) / 500) * v
                    : ((null == I ? void 0 : I.width) / 1440) * v),
                n
                  .from(N.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: g,
                    rotateY: b,
                    opacity: x,
                    duration: w,
                    ease: p,
                  })
                  .to(N.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [S, X]),
          (0, l.jsx)(n, {
            onClick: P,
            ref: N,
            className: (0, s.Z)(o().text, o()[r], c),
            style: m,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return m;
          },
        });
      var l = n(57437),
        i = n(2265),
        r = n(15681),
        o = n.n(r),
        s = n(44839),
        _ = n(16700),
        a = n(78002),
        d = n(16609),
        u = n(49582),
        c = n(16463);
      function m(t) {
        let {
            children: e,
            size: n = "md",
            className: r,
            family: m = "secondary",
            component: f = "md" == n ? "h2" : "h6",
            variant: h,
            uppercase: v,
            direction: y,
            directionMobile: w = y,
            translateY: g = 0,
            translateX: b = 0,
            duration: p = 0.8,
            rotateX: x = 0,
            rotateY: k = 0,
            ease: Z = "back.out",
            opacity: E = 0,
            animate: P,
            start: N = 80,
            end: I = 60,
          } = t,
          L = (0, i.useRef)(null),
          S = (0, a.Z)(),
          { useGSAP: X, activatedGsap: Y } = (0, d.Z)(),
          D = (0, c.usePathname)();
        return (
          X(() => {
            if (
              "/" == D &&
              Y &&
              P &&
              L.current &&
              (null == S ? void 0 : S.width)
            ) {
              let t, e;
              (null == S ? void 0 : S.width) < 992
                ? ((b = "right" == w ? -200 : "left" == w ? 200 : b),
                  (g = "top" == w ? 200 : "bottom" == w ? -200 : g))
                : ((g = "top" == y ? 200 : "bottom" == y ? -200 : g),
                  (b = "right" == y ? -200 : "left" == y ? 200 : b));
              let n = u.ZP.timeline({
                scrollTrigger: {
                  trigger: L.current,
                  start: "top ".concat(
                    (null == S ? void 0 : S.width) < 992 ? N - 10 : N,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == S ? void 0 : S.width) < 992 ? I - 15 : I - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == S ? void 0 : S.width) > 1440
                    ? b
                    : (null == S ? void 0 : S.width) < 992
                    ? ((null == S ? void 0 : S.width) / 500) * b
                    : ((null == S ? void 0 : S.width) / 1440) * b),
                (e =
                  (null == S ? void 0 : S.width) > 1440
                    ? g
                    : (null == S ? void 0 : S.width) < 992
                    ? ((null == S ? void 0 : S.width) / 500) * g
                    : ((null == S ? void 0 : S.width) / 1440) * g),
                n
                  .from(L.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: x,
                    rotateY: k,
                    opacity: E,
                    duration: p,
                    ease: Z,
                  })
                  .to(L.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [Y, D]),
          (0, l.jsx)(f, {
            ref: L,
            className: (0, s.Z)(
              o().title,
              o()[h || f],
              "secondary" == m ? _.BD : _.T$,
              o()[n],
              r,
              v ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var l = n(57437),
        i = n(2265),
        r = n(15681),
        o = n.n(r),
        s = n(44839),
        _ = n(78002),
        a = n(16609),
        d = n(49582),
        u = n(16463);
      function c(t) {
        let {
            children: e,
            component: n = "h5",
            className: r,
            color: c = "primary",
            direction: m,
            directionMobile: f = m,
            translateY: h = 0,
            translateX: v = 0,
            duration: y = 0.8,
            rotateX: w = 0,
            rotateY: g = 0,
            ease: b = "back.out",
            opacity: p = 0,
            animate: x,
            start: k = 80,
            end: Z = 60,
          } = t,
          E = (0, i.useRef)(null),
          P = (0, _.Z)(),
          { useGSAP: N, activatedGsap: I } = (0, a.Z)(),
          L = (0, u.usePathname)();
        return (
          N(() => {
            if (
              "/" == L &&
              I &&
              x &&
              E.current &&
              (null == P ? void 0 : P.width)
            ) {
              let t, e;
              (null == P ? void 0 : P.width) < 992
                ? ((v = "right" == f ? -200 : "left" == f ? 200 : v),
                  (h = "top" == f ? 200 : "bottom" == f ? -200 : h))
                : ((h = "top" == m ? 200 : "bottom" == m ? -200 : h),
                  (v = "right" == m ? -200 : "left" == m ? 200 : v));
              let n = d.ZP.timeline({
                scrollTrigger: {
                  trigger: E.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? k - 10 : k,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? v
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * v
                    : ((null == P ? void 0 : P.width) / 1440) * v),
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? h
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * h
                    : ((null == P ? void 0 : P.width) / 1440) * h),
                n
                  .from(E.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: g,
                    opacity: p,
                    duration: y,
                    ease: b,
                  })
                  .to(E.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [I, L]),
          (0, l.jsx)(n, {
            ref: E,
            className: (0, s.Z)(o().subtitle, o()[c], r),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, n) {
      "use strict";
      n.d(e, {
        BD: function () {
          return d;
        },
        T$: function () {
          return a;
        },
      });
      var l = n(37983),
        i = n.n(l),
        r = n(68941),
        o = n.n(r),
        s = n(68425),
        _ = n.n(s);
      let a = i().className,
        d = o().className;
      _().className;
    },
    79124: function (t, e, n) {
      "use strict";
      var l = n(2265),
        i = n(44630);
      e.Z = () => {
        let [t, e] = (0, l.useState)(!1),
          n = (0, i.Z)(),
          r = () => {
            e(!0);
          };
        return (
          (0, l.useEffect)(() => {
            n > 1 && e(!0);
          }, [n]),
          (0, l.useEffect)(
            () => (
              window.addEventListener("mousemove", r),
              window.addEventListener("click", r),
              window.addEventListener("touchmove", r),
              window.addEventListener("touchstart", r),
              window.addEventListener("touchend", r),
              () => {
                window.removeEventListener("mousemove", r),
                  window.removeEventListener("click", r),
                  window.removeEventListener("touchmove", r),
                  window.removeEventListener("touchstart", r),
                  window.removeEventListener("touchend", r);
              }
            ),
            []
          ),
          t
        );
      };
    },
    98858: function (t) {
      t.exports = {
        contributors: "style_contributors___m4Fh",
        container: "style_container__Dt_1Z",
        list: "style_list__YhGJZ",
        item: "style_item__h0mIO",
        top: "style_top__Em6Zp",
        socials: "style_socials__qfmg9",
        social: "style_social__LtR9D",
        img: "style_img__s1_ZJ",
        content: "style_content__FpQE8",
        relateds: "style_relateds__ZngMA",
      };
    },
    59747: function (t) {
      t.exports = {
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
    69665: function (t) {
      t.exports = {
        loadingImg: "style_loadingImg__SX0hM",
        img: "style_img__foiEq",
      };
    },
    14629: function (t) {
      t.exports = {
        section: "style_section__09_zn",
        dark: "style_dark__R3RMO",
        light: "style_light__xXq5a",
        white: "style_white__ZsX2_",
        primary: "style_primary__zErJA",
      };
    },
    8544: function (t) {
      t.exports = {
        text: "style_text__Z44aT",
        xs: "style_xs__fVs46",
        sm: "style_sm__RimS5",
        md: "style_md__ZQhe4",
        lg: "style_lg__AdDq0",
        xl: "style_xl__HaD9x",
      };
    },
    15681: function (t) {
      t.exports = {
        title: "style_title__VJGg6",
        xs: "style_xs__YyI9I",
        sm: "style_sm__fI_bB",
        md: "style_md__tEuBB",
        lg: "style_lg___IlF9",
        xl: "style_xl__IttXv",
        subtitle: "style_subtitle__b3_RB",
        primary: "style_primary__168ud",
        dark: "style_dark__kOJyV",
        light: "style_light__4bx5s",
      };
    },
    68941: function (t) {
      t.exports = {
        style: {
          fontFamily:
            "'__Anek_Devanagari_665d18', '__Anek_Devanagari_Fallback_665d18'",
          fontStyle: "normal",
        },
        className: "__className_665d18",
      };
    },
    37983: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__DM_Sans_975d1f', '__DM_Sans_Fallback_975d1f'",
          fontStyle: "normal",
        },
        className: "__className_975d1f",
        variable: "__variable_975d1f",
      };
    },
    68425: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Inter_47b904', '__Inter_Fallback_47b904'",
          fontStyle: "normal",
        },
        className: "__className_47b904",
      };
    },
  },
  function (t) {
    t.O(
      0,
      [2504, 5073, 1899, 947, 9667, 922, 9391, 231, 3106, 2971, 7023, 1744],
      function () {
        return t((t.s = 24121));
      }
    ),
      (_N_E = t.O());
  },
]);
