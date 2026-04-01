(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8048],
  {
    66648: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = l(55601),
        i = l.n(n);
    },
    55601: function (t, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var l in e)
            Object.defineProperty(t, l, { enumerable: !0, get: e[l] });
        })(e, {
          default: function () {
            return a;
          },
          getImageProps: function () {
            return o;
          },
        });
      let n = l(99920),
        i = l(80497),
        r = l(38173),
        s = n._(l(21241));
      function o(t) {
        let { props: e } = (0, i.getImgProps)(t, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, l] of Object.entries(e)) void 0 === l && delete e[t];
        return { props: e };
      }
      let a = r.Image;
    },
    47984: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return _;
          },
        });
      var n = l(57437),
        i = l(79124),
        r = l(66648);
      l(2265);
      var s = l(69665),
        o = l.n(s),
        a = l(44839);
      function _(t) {
        let {
            alt: e = "BlockDAG",
            src: l,
            width: s,
            height: _,
            hero: d,
            className: u,
            ...c
          } = t,
          m = (0, i.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            d || c.priority
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(o().img, u),
                    src: l,
                    alt: e,
                    width: s || 0,
                    height: _ || 0,
                    ...c,
                  },
                  1
                )
              : m
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(o().img, u),
                    src: l,
                    alt: e,
                    width: 0,
                    height: 0,
                    ...c,
                  },
                  2
                )
              : (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(o().loadingImg, u),
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
    21360: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return c;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(8544),
        s = l.n(r),
        o = l(44839),
        a = l(16609),
        _ = l(49582),
        d = l(78002),
        u = l(16463);
      function c(t) {
        let {
            children: e,
            component: l = "p",
            size: r = "md",
            className: c,
            style: m,
            direction: f,
            directionMobile: h = f,
            translateY: v = 0,
            translateX: y = 0,
            duration: w = 0.8,
            rotateX: g = 0,
            rotateY: p = 0,
            ease: b = "back.out",
            opacity: k = 0,
            animate: x,
            start: Z = 80,
            end: E = 60,
            onClick: N,
          } = t,
          I = (0, i.useRef)(null),
          X = (0, d.Z)(),
          { useGSAP: L, activatedGsap: D } = (0, a.Z)(),
          S = (0, u.usePathname)();
        return (
          L(() => {
            if (
              "/" == S &&
              D &&
              x &&
              I.current &&
              (null == X ? void 0 : X.width)
            ) {
              let t, e;
              (null == X ? void 0 : X.width) < 992
                ? ((y = "right" == h ? -200 : "left" == h ? 200 : y),
                  (v = "top" == h ? 200 : "bottom" == h ? -200 : v))
                : ((v = "top" == f ? 200 : "bottom" == f ? -200 : v),
                  (y = "right" == f ? -200 : "left" == f ? 200 : y));
              let l = _.ZP.timeline({
                scrollTrigger: {
                  trigger: I.current,
                  start: "top ".concat(
                    (null == X ? void 0 : X.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == X ? void 0 : X.width) < 992 ? E - 15 : E - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == X ? void 0 : X.width) > 1440
                    ? y
                    : (null == X ? void 0 : X.width) < 992
                    ? ((null == X ? void 0 : X.width) / 500) * y
                    : ((null == X ? void 0 : X.width) / 1440) * y),
                (e =
                  (null == X ? void 0 : X.width) > 1440
                    ? v
                    : (null == X ? void 0 : X.width) < 992
                    ? ((null == X ? void 0 : X.width) / 500) * v
                    : ((null == X ? void 0 : X.width) / 1440) * v),
                l
                  .from(I.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: g,
                    rotateY: p,
                    opacity: k,
                    duration: w,
                    ease: b,
                  })
                  .to(I.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [D, S]),
          (0, n.jsx)(l, {
            onClick: N,
            ref: I,
            className: (0, o.Z)(s().text, s()[r], c),
            style: m,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return m;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(15681),
        s = l.n(r),
        o = l(44839),
        a = l(16700),
        _ = l(78002),
        d = l(16609),
        u = l(49582),
        c = l(16463);
      function m(t) {
        let {
            children: e,
            size: l = "md",
            className: r,
            family: m = "secondary",
            component: f = "md" == l ? "h2" : "h6",
            variant: h,
            uppercase: v,
            direction: y,
            directionMobile: w = y,
            translateY: g = 0,
            translateX: p = 0,
            duration: b = 0.8,
            rotateX: k = 0,
            rotateY: x = 0,
            ease: Z = "back.out",
            opacity: E = 0,
            animate: N,
            start: I = 80,
            end: X = 60,
          } = t,
          L = (0, i.useRef)(null),
          D = (0, _.Z)(),
          { useGSAP: S, activatedGsap: Y } = (0, d.Z)(),
          j = (0, c.usePathname)();
        return (
          S(() => {
            if (
              "/" == j &&
              Y &&
              N &&
              L.current &&
              (null == D ? void 0 : D.width)
            ) {
              let t, e;
              (null == D ? void 0 : D.width) < 992
                ? ((p = "right" == w ? -200 : "left" == w ? 200 : p),
                  (g = "top" == w ? 200 : "bottom" == w ? -200 : g))
                : ((g = "top" == y ? 200 : "bottom" == y ? -200 : g),
                  (p = "right" == y ? -200 : "left" == y ? 200 : p));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: L.current,
                  start: "top ".concat(
                    (null == D ? void 0 : D.width) < 992 ? I - 10 : I,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == D ? void 0 : D.width) < 992 ? X - 15 : X - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == D ? void 0 : D.width) > 1440
                    ? p
                    : (null == D ? void 0 : D.width) < 992
                    ? ((null == D ? void 0 : D.width) / 500) * p
                    : ((null == D ? void 0 : D.width) / 1440) * p),
                (e =
                  (null == D ? void 0 : D.width) > 1440
                    ? g
                    : (null == D ? void 0 : D.width) < 992
                    ? ((null == D ? void 0 : D.width) / 500) * g
                    : ((null == D ? void 0 : D.width) / 1440) * g),
                l
                  .from(L.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: k,
                    rotateY: x,
                    opacity: E,
                    duration: b,
                    ease: Z,
                  })
                  .to(L.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [Y, j]),
          (0, n.jsx)(f, {
            ref: L,
            className: (0, o.Z)(
              s().title,
              s()[h || f],
              "secondary" == m ? a.BD : a.T$,
              s()[l],
              r,
              v ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return c;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(15681),
        s = l.n(r),
        o = l(44839),
        a = l(78002),
        _ = l(16609),
        d = l(49582),
        u = l(16463);
      function c(t) {
        let {
            children: e,
            component: l = "h5",
            className: r,
            color: c = "primary",
            direction: m,
            directionMobile: f = m,
            translateY: h = 0,
            translateX: v = 0,
            duration: y = 0.8,
            rotateX: w = 0,
            rotateY: g = 0,
            ease: p = "back.out",
            opacity: b = 0,
            animate: k,
            start: x = 80,
            end: Z = 60,
          } = t,
          E = (0, i.useRef)(null),
          N = (0, a.Z)(),
          { useGSAP: I, activatedGsap: X } = (0, _.Z)(),
          L = (0, u.usePathname)();
        return (
          I(() => {
            if (
              "/" == L &&
              X &&
              k &&
              E.current &&
              (null == N ? void 0 : N.width)
            ) {
              let t, e;
              (null == N ? void 0 : N.width) < 992
                ? ((v = "right" == f ? -200 : "left" == f ? 200 : v),
                  (h = "top" == f ? 200 : "bottom" == f ? -200 : h))
                : ((h = "top" == m ? 200 : "bottom" == m ? -200 : h),
                  (v = "right" == m ? -200 : "left" == m ? 200 : v));
              let l = d.ZP.timeline({
                scrollTrigger: {
                  trigger: E.current,
                  start: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? x - 10 : x,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == N ? void 0 : N.width) > 1440
                    ? v
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * v
                    : ((null == N ? void 0 : N.width) / 1440) * v),
                (e =
                  (null == N ? void 0 : N.width) > 1440
                    ? h
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * h
                    : ((null == N ? void 0 : N.width) / 1440) * h),
                l
                  .from(E.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: g,
                    opacity: b,
                    duration: y,
                    ease: p,
                  })
                  .to(E.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [X, L]),
          (0, n.jsx)(l, {
            ref: E,
            className: (0, o.Z)(s().subtitle, s()[c], r),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, l) {
      "use strict";
      l.d(e, {
        BD: function () {
          return d;
        },
        T$: function () {
          return _;
        },
      });
      var n = l(37983),
        i = l.n(n),
        r = l(68941),
        s = l.n(r),
        o = l(68425),
        a = l.n(o);
      let _ = i().className,
        d = s().className;
      a().className;
    },
    79124: function (t, e, l) {
      "use strict";
      var n = l(2265),
        i = l(44630);
      e.Z = () => {
        let [t, e] = (0, n.useState)(!1),
          l = (0, i.Z)(),
          r = () => {
            e(!0);
          };
        return (
          (0, n.useEffect)(() => {
            l > 1 && e(!0);
          }, [l]),
          (0, n.useEffect)(
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
    18803: function (t) {
      t.exports = {
        heading: "style_heading__7QWv_",
        subtitle: "style_subtitle__LLHN9",
        title: "style_title__FMEQZ",
        bigdesc: "style_bigdesc__5rpkX",
        max: "style_max__0T80P",
        center: "style_center__F8CrW",
        desc: "style_desc__YAo5D",
        left: "style_left__W8sqB",
        right: "style_right__mFqM7",
        "sm-center": "style_sm-center__RGnjf",
        "sm-left": "style_sm-left__ESlVy",
        "sm-right": "style_sm-right__qY1rC",
        largedesc: "style_largedesc__IB79u",
        dark: "style_dark__dEXck",
        light: "style_light__9MD59",
        primary: "style_primary__V_I_D",
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
]);
