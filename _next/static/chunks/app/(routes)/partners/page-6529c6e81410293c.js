(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9434],
  {
    43158: function (t, e, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 76202)),
        Promise.resolve().then(i.bind(i, 47984)),
        Promise.resolve().then(i.t.bind(i, 14629, 23)),
        Promise.resolve().then(i.t.bind(i, 4756, 23)),
        Promise.resolve().then(i.t.bind(i, 58538, 23)),
        Promise.resolve().then(i.t.bind(i, 59747, 23)),
        Promise.resolve().then(i.bind(i, 21360)),
        Promise.resolve().then(i.bind(i, 87580)),
        Promise.resolve().then(i.bind(i, 84395));
    },
    66648: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return l.a;
        },
      });
      var n = i(55601),
        l = i.n(n);
    },
    55601: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return a;
          },
          getImageProps: function () {
            return s;
          },
        });
      let n = i(99920),
        l = i(80497),
        r = i(38173),
        o = n._(i(21241));
      function s(t) {
        let { props: e } = (0, l.getImgProps)(t, {
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
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let a = r.Image;
    },
    76202: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return _;
        },
      });
      var n = i(57437),
        l = i(21360),
        r = i(61415),
        o = i.n(r),
        s = i(81079);
      let a = [
        { title: "OpenAI", img: "/images/powered/openai.png" },
        { title: "Gemini", img: "/images/powered/gemini.png" },
        { title: "ASUS", img: "/images/powered/asus.png" },
        { title: "GitHub", img: "/images/powered/github.png" },
        { title: "google", img: "/images/powered/google.png" },
        { title: "bing", img: "/images/powered/bing.png" },
        { title: "cloudflare", img: "/images/powered/cloudflare.png" },
        { title: "ethereum", img: "/images/powered/ethereum.png" },
        { title: "tether", img: "/images/powered/tether.png" },
        { title: "binance", img: "/images/powered/binance.png" },
        { title: "trust", img: "/images/powered/trust.png" },
        {
          title: "google analytics",
          img: "/images/powered/google-analytics.png",
        },
        { title: "microsoft", img: "/images/powered/microsoft.png" },
        { title: "adobe", img: "/images/powered/adobe.png" },
        { title: "coinstats", img: "/images/powered/coinstats.png" },
        { title: "telegram", img: "/images/powered/telegram.png" },
        { title: "gmail", img: "/images/powered/gmail.png" },
        { title: "moonpay", img: "/images/powered/moonpay.png" },
        { title: "visa", img: "/images/powered/visa.png" },
        { title: "mastercard", img: "/images/powered/mastercard.png" },
        { title: "gpay", img: "/images/powered/gpay.png" },
        { title: "applepay", img: "/images/powered/applepay.png" },
      ];
      var d = i(78002),
        u = i(47984),
        c = i(44839);
      function _(t) {
        let {} = t,
          e = (0, d.Z)();
        return (0, n.jsxs)("div", {
          className: o().chainContent,
          children: [
            (0, n.jsx)(l.default, {
              animate: !0,
              direction: "right",
              className: (0, c.Z)(o().text),
              size: "md",
              children: "POWERED BY",
            }),
            (0, n.jsx)("div", {
              className: o().chainPartners,
              children: a.map((t, i) =>
                (0, n.jsx)(
                  s.default,
                  {
                    direction: "top",
                    directionMobile: i % 2 == 0 ? "right" : "left",
                    start: 90,
                    end:
                      e && (null == e ? void 0 : e.width) > 991.98
                        ? 90 - 3 * i
                        : 70,
                    children: (0, n.jsx)(u.default, {
                      src: t.img,
                      alt: t.title,
                      width: 0,
                      height: 0,
                    }),
                  },
                  i
                )
              ),
            }),
          ],
        });
      }
    },
    81079: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return u;
          },
        });
      var n = i(57437),
        l = i(2265),
        r = i(44839),
        o = i(16609),
        s = i(49582),
        a = i(78002),
        d = i(16463);
      function u(t) {
        let {
            children: e,
            component: i = "div",
            className: u,
            direction: c,
            directionMobile: _ = c,
            translateY: m = 0,
            translateX: g = 0,
            duration: h = 0.8,
            rotateX: p = 0,
            rotateY: f = 0,
            ease: v = "back.out",
            opacity: w = 0,
            animate: y = !0,
            start: b = 80,
            end: x = 60,
            ...k
          } = t,
          Z = (0, l.useRef)(null),
          { useGSAP: P, activatedGsap: E } = (0, o.Z)(),
          N = (0, a.Z)(),
          Y = (0, d.usePathname)();
        return (
          P(() => {
            if (
              "/" == Y &&
              E &&
              y &&
              Z.current &&
              (null == N ? void 0 : N.width)
            ) {
              let t, e;
              (null == N ? void 0 : N.width) < 992
                ? ((g = "right" == _ ? -200 : "left" == _ ? 200 : g),
                  (m = "top" == _ ? 200 : "bottom" == _ ? -200 : m))
                : ((m = "top" == c ? 200 : "bottom" == c ? -200 : m),
                  (g = "right" == c ? -200 : "left" == c ? 200 : g));
              let i = s.ZP.timeline({
                scrollTrigger: {
                  trigger: Z.current,
                  start: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? b - 10 : b,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? x - 15 : x - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == N ? void 0 : N.width) > 1440
                    ? g
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * g
                    : ((null == N ? void 0 : N.width) / 1440) * g),
                (e =
                  (null == N ? void 0 : N.width) > 1440
                    ? m
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * m
                    : ((null == N ? void 0 : N.width) / 1440) * m),
                i
                  .from(Z.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: p,
                    rotateY: f,
                    opacity: w,
                    duration: h,
                    ease: v,
                  })
                  .to(Z.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => i.kill()
              );
            }
          }, [E, Y]),
          (0, n.jsx)(i, { ...k, ref: Z, className: (0, r.Z)(u), children: e })
        );
      }
    },
    47984: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return d;
          },
        });
      var n = i(57437),
        l = i(79124),
        r = i(66648);
      i(2265);
      var o = i(69665),
        s = i.n(o),
        a = i(44839);
      function d(t) {
        let {
            alt: e = "BlockDAG",
            src: i,
            width: o,
            height: d,
            hero: u,
            className: c,
            ..._
          } = t,
          m = (0, l.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            u || _.priority
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(s().img, c),
                    src: i,
                    alt: e,
                    width: o || 0,
                    height: d || 0,
                    ..._,
                  },
                  1
                )
              : m
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(s().img, c),
                    src: i,
                    alt: e,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  2
                )
              : (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(s().loadingImg, c),
                    src: "/cube.webp",
                    alt: e,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  3
                ),
        });
      }
    },
    21360: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return _;
          },
        });
      var n = i(57437),
        l = i(2265),
        r = i(8544),
        o = i.n(r),
        s = i(44839),
        a = i(16609),
        d = i(49582),
        u = i(78002),
        c = i(16463);
      function _(t) {
        let {
            children: e,
            component: i = "p",
            size: r = "md",
            className: _,
            style: m,
            direction: g,
            directionMobile: h = g,
            translateY: p = 0,
            translateX: f = 0,
            duration: v = 0.8,
            rotateX: w = 0,
            rotateY: y = 0,
            ease: b = "back.out",
            opacity: x = 0,
            animate: k,
            start: Z = 80,
            end: P = 60,
            onClick: E,
          } = t,
          N = (0, l.useRef)(null),
          Y = (0, u.Z)(),
          { useGSAP: j, activatedGsap: X } = (0, a.Z)(),
          I = (0, c.usePathname)();
        return (
          j(() => {
            if (
              "/" == I &&
              X &&
              k &&
              N.current &&
              (null == Y ? void 0 : Y.width)
            ) {
              let t, e;
              (null == Y ? void 0 : Y.width) < 992
                ? ((f = "right" == h ? -200 : "left" == h ? 200 : f),
                  (p = "top" == h ? 200 : "bottom" == h ? -200 : p))
                : ((p = "top" == g ? 200 : "bottom" == g ? -200 : p),
                  (f = "right" == g ? -200 : "left" == g ? 200 : f));
              let i = d.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == Y ? void 0 : Y.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Y ? void 0 : Y.width) < 992 ? P - 15 : P - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == Y ? void 0 : Y.width) > 1440
                    ? f
                    : (null == Y ? void 0 : Y.width) < 992
                    ? ((null == Y ? void 0 : Y.width) / 500) * f
                    : ((null == Y ? void 0 : Y.width) / 1440) * f),
                (e =
                  (null == Y ? void 0 : Y.width) > 1440
                    ? p
                    : (null == Y ? void 0 : Y.width) < 992
                    ? ((null == Y ? void 0 : Y.width) / 500) * p
                    : ((null == Y ? void 0 : Y.width) / 1440) * p),
                i
                  .from(N.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: y,
                    opacity: x,
                    duration: v,
                    ease: b,
                  })
                  .to(N.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => i.kill()
              );
            }
          }, [X, I]),
          (0, n.jsx)(i, {
            onClick: E,
            ref: N,
            className: (0, s.Z)(o().text, o()[r], _),
            style: m,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return m;
          },
        });
      var n = i(57437),
        l = i(2265),
        r = i(15681),
        o = i.n(r),
        s = i(44839),
        a = i(16700),
        d = i(78002),
        u = i(16609),
        c = i(49582),
        _ = i(16463);
      function m(t) {
        let {
            children: e,
            size: i = "md",
            className: r,
            family: m = "secondary",
            component: g = "md" == i ? "h2" : "h6",
            variant: h,
            uppercase: p,
            direction: f,
            directionMobile: v = f,
            translateY: w = 0,
            translateX: y = 0,
            duration: b = 0.8,
            rotateX: x = 0,
            rotateY: k = 0,
            ease: Z = "back.out",
            opacity: P = 0,
            animate: E,
            start: N = 80,
            end: Y = 60,
          } = t,
          j = (0, l.useRef)(null),
          X = (0, d.Z)(),
          { useGSAP: I, activatedGsap: S } = (0, u.Z)(),
          A = (0, _.usePathname)();
        return (
          I(() => {
            if (
              "/" == A &&
              S &&
              E &&
              j.current &&
              (null == X ? void 0 : X.width)
            ) {
              let t, e;
              (null == X ? void 0 : X.width) < 992
                ? ((y = "right" == v ? -200 : "left" == v ? 200 : y),
                  (w = "top" == v ? 200 : "bottom" == v ? -200 : w))
                : ((w = "top" == f ? 200 : "bottom" == f ? -200 : w),
                  (y = "right" == f ? -200 : "left" == f ? 200 : y));
              let i = c.ZP.timeline({
                scrollTrigger: {
                  trigger: j.current,
                  start: "top ".concat(
                    (null == X ? void 0 : X.width) < 992 ? N - 10 : N,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == X ? void 0 : X.width) < 992 ? Y - 15 : Y - 10,
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
                    ? w
                    : (null == X ? void 0 : X.width) < 992
                    ? ((null == X ? void 0 : X.width) / 500) * w
                    : ((null == X ? void 0 : X.width) / 1440) * w),
                i
                  .from(j.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: x,
                    rotateY: k,
                    opacity: P,
                    duration: b,
                    ease: Z,
                  })
                  .to(j.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => i.kill()
              );
            }
          }, [S, A]),
          (0, n.jsx)(g, {
            ref: j,
            className: (0, s.Z)(
              o().title,
              o()[h || g],
              "secondary" == m ? a.BD : a.T$,
              o()[i],
              r,
              p ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return _;
          },
        });
      var n = i(57437),
        l = i(2265),
        r = i(15681),
        o = i.n(r),
        s = i(44839),
        a = i(78002),
        d = i(16609),
        u = i(49582),
        c = i(16463);
      function _(t) {
        let {
            children: e,
            component: i = "h5",
            className: r,
            color: _ = "primary",
            direction: m,
            directionMobile: g = m,
            translateY: h = 0,
            translateX: p = 0,
            duration: f = 0.8,
            rotateX: v = 0,
            rotateY: w = 0,
            ease: y = "back.out",
            opacity: b = 0,
            animate: x,
            start: k = 80,
            end: Z = 60,
          } = t,
          P = (0, l.useRef)(null),
          E = (0, a.Z)(),
          { useGSAP: N, activatedGsap: Y } = (0, d.Z)(),
          j = (0, c.usePathname)();
        return (
          N(() => {
            if (
              "/" == j &&
              Y &&
              x &&
              P.current &&
              (null == E ? void 0 : E.width)
            ) {
              let t, e;
              (null == E ? void 0 : E.width) < 992
                ? ((p = "right" == g ? -200 : "left" == g ? 200 : p),
                  (h = "top" == g ? 200 : "bottom" == g ? -200 : h))
                : ((h = "top" == m ? 200 : "bottom" == m ? -200 : h),
                  (p = "right" == m ? -200 : "left" == m ? 200 : p));
              let i = u.ZP.timeline({
                scrollTrigger: {
                  trigger: P.current,
                  start: "top ".concat(
                    (null == E ? void 0 : E.width) < 992 ? k - 10 : k,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == E ? void 0 : E.width) < 992 ? Z - 15 : Z - 10,
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
                (e =
                  (null == E ? void 0 : E.width) > 1440
                    ? h
                    : (null == E ? void 0 : E.width) < 992
                    ? ((null == E ? void 0 : E.width) / 500) * h
                    : ((null == E ? void 0 : E.width) / 1440) * h),
                i
                  .from(P.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: v,
                    rotateY: w,
                    opacity: b,
                    duration: f,
                    ease: y,
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
          }, [Y, j]),
          (0, n.jsx)(i, {
            ref: P,
            className: (0, s.Z)(o().subtitle, o()[_], r),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, i) {
      "use strict";
      i.d(e, {
        BD: function () {
          return u;
        },
        T$: function () {
          return d;
        },
      });
      var n = i(37983),
        l = i.n(n),
        r = i(68941),
        o = i.n(r),
        s = i(68425),
        a = i.n(s);
      let d = l().className,
        u = o().className;
      a().className;
    },
    79124: function (t, e, i) {
      "use strict";
      var n = i(2265),
        l = i(44630);
      e.Z = () => {
        let [t, e] = (0, n.useState)(!1),
          i = (0, l.Z)(),
          r = () => {
            e(!0);
          };
        return (
          (0, n.useEffect)(() => {
            i > 1 && e(!0);
          }, [i]),
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
    61415: function (t) {
      t.exports = {
        chainContent: "style_chainContent__tAipY",
        text: "style_text__neGRg",
        chainPartners: "style_chainPartners__hzUIY",
      };
    },
    4756: function (t) {
      t.exports = {
        partners: "style_partners__05Anl",
        container: "style_container__dqd8Q",
        list: "style_list__FmR8j",
        item: "style_item__2npdy",
        desc: "style_desc__dGv5d",
        content: "style_content__AbvHq",
        img: "style_img__5CG6y",
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
      [1899, 947, 9667, 5073, 9590, 922, 9391, 231, 3106, 2971, 7023, 1744],
      function () {
        return t((t.s = 43158));
      }
    ),
      (_N_E = t.O());
  },
]);
