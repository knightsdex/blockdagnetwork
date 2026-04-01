(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7075],
  {
    79656: function (t, e, l) {
      Promise.resolve().then(l.t.bind(l, 231, 23)),
        Promise.resolve().then(l.bind(l, 39070)),
        Promise.resolve().then(l.t.bind(l, 58538, 23)),
        Promise.resolve().then(l.bind(l, 47984)),
        Promise.resolve().then(l.t.bind(l, 14629, 23)),
        Promise.resolve().then(l.t.bind(l, 59747, 23)),
        Promise.resolve().then(l.bind(l, 21360)),
        Promise.resolve().then(l.bind(l, 87580)),
        Promise.resolve().then(l.bind(l, 84395));
    },
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
    87138: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = l(231),
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
            return s;
          },
        });
      let n = l(99920),
        i = l(80497),
        r = l(38173),
        o = n._(l(21241));
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
        for (let [t, l] of Object.entries(e)) void 0 === l && delete e[t];
        return { props: e };
      }
      let a = r.Image;
    },
    39070: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return f;
        },
      });
      var n = l(57437),
        i = l(32913),
        r = l(52783),
        o = l.n(r),
        s = l(42625),
        a = l(84395),
        d = l(87580),
        c = l(21360),
        u = l(47984),
        _ = l(43615),
        h = l(81079),
        m = l(44839);
      function f(t) {
        let { color: e } = t,
          l = (t) => {
            let e = document.createElement("a");
            (e.href = "".concat(t)),
              (e.download = t),
              document.body.appendChild(e),
              e.click(),
              document.body.removeChild(e);
          };
        return (0, n.jsx)(i.Z, {
          color: e || "dark",
          className: o().presskit,
          children: (0, n.jsxs)(s.Z, {
            className: o().container,
            children: [
              (0, n.jsxs)("div", {
                className: o().texts,
                children: [
                  (0, n.jsx)(a.default, {
                    color:
                      "primary" == e
                        ? "light"
                        : "light" === e
                        ? "dark"
                        : "primary",
                    animate: !0,
                    direction: "right",
                    children: "PRESS KIT",
                  }),
                  (0, n.jsx)(d.default, {
                    animate: !0,
                    direction: "right",
                    children: "Files For Press",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: o().content,
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
                ].map((t, i) =>
                  (0, n.jsxs)(
                    h.default,
                    {
                      animate: !0,
                      direction:
                        i % 3 == 0 ? "right" : i % 3 == 1 ? "top" : "left",
                      directionMobile: i % 2 == 0 ? "right" : "left",
                      className: (0, m.Z)(
                        o().item,
                        "light" === e ? o().white : ""
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: o().head,
                          children: (0, n.jsx)(d.default, {
                            size: "sm",
                            children: t.format,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: o().img,
                          children: (0, n.jsx)(u.default, {
                            src: t.img,
                            alt: t.title,
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: o().details,
                          children: [
                            (0, n.jsx)(c.default, {
                              size: "lg",
                              className: "font-bold",
                              children: t.title,
                            }),
                            (0, n.jsx)(c.default, { children: t.size }),
                            (0, n.jsx)(c.default, {
                              className: o().desc,
                              children: t.desc,
                            }),
                            (0, n.jsx)(_.default, {
                              className: o().download,
                              href: t.img,
                              target: "_blank",
                              download: !0,
                              onClick: () => {
                                l(t.img);
                              },
                              children: "Download",
                            }),
                          ],
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    81079: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return c;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(44839),
        o = l(16609),
        s = l(49582),
        a = l(78002),
        d = l(16463);
      function c(t) {
        let {
            children: e,
            component: l = "div",
            className: c,
            direction: u,
            directionMobile: _ = u,
            translateY: h = 0,
            translateX: m = 0,
            duration: f = 0.8,
            rotateX: v = 0,
            rotateY: g = 0,
            ease: w = "back.out",
            opacity: p = 0,
            animate: y = !0,
            start: b = 80,
            end: k = 60,
            ...x
          } = t,
          Z = (0, i.useRef)(null),
          { useGSAP: N, activatedGsap: j } = (0, o.Z)(),
          B = (0, a.Z)(),
          P = (0, d.usePathname)();
        return (
          N(() => {
            if (
              "/" == P &&
              j &&
              y &&
              Z.current &&
              (null == B ? void 0 : B.width)
            ) {
              let t, e;
              (null == B ? void 0 : B.width) < 992
                ? ((m = "right" == _ ? -200 : "left" == _ ? 200 : m),
                  (h = "top" == _ ? 200 : "bottom" == _ ? -200 : h))
                : ((h = "top" == u ? 200 : "bottom" == u ? -200 : h),
                  (m = "right" == u ? -200 : "left" == u ? 200 : m));
              let l = s.ZP.timeline({
                scrollTrigger: {
                  trigger: Z.current,
                  start: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? b - 10 : b,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? k - 15 : k - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == B ? void 0 : B.width) > 1440
                    ? m
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * m
                    : ((null == B ? void 0 : B.width) / 1440) * m),
                (e =
                  (null == B ? void 0 : B.width) > 1440
                    ? h
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * h
                    : ((null == B ? void 0 : B.width) / 1440) * h),
                l
                  .from(Z.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: v,
                    rotateY: g,
                    opacity: p,
                    duration: f,
                    ease: w,
                  })
                  .to(Z.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [j, P]),
          (0, n.jsx)(l, { ...x, ref: Z, className: (0, r.Z)(c), children: e })
        );
      }
    },
    42625: function (t, e, l) {
      "use strict";
      var n = l(57437),
        i = l(44839),
        r = l(58538),
        o = l.n(r);
      let s = (0, l(2265).forwardRef)((t, e) => {
        let { children: l, className: r, size: s, classic: a, ...d } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: e,
            className: (0, i.Z)(
              o().container,
              r,
              s && o()[s],
              a && o().classic
            ),
            ...d,
            children: l,
          }),
        });
      });
      (s.displayName = "Container"), (e.Z = s);
    },
    43615: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return h;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(48241),
        o = l.n(r),
        s = l(87138),
        a = l(44839),
        d = l(78002),
        c = l(16609),
        u = l(49582),
        _ = l(16463);
      function h(t) {
        let {
            href: e,
            download: l,
            className: r,
            target: h,
            children: m,
            color: f = "primary",
            onClick: v,
            direction: g,
            directionMobile: w = g,
            translateY: p = 0,
            translateX: y = 0,
            duration: b = 0.8,
            rotateX: k = 0,
            rotateY: x = 0,
            ease: Z = "back.out",
            opacity: N = 0,
            animate: j,
            start: B = 80,
            end: P = 60,
            ...S
          } = t,
          G = (0, d.Z)(),
          D = (0, i.useRef)(null),
          { useGSAP: E, activatedGsap: L } = (0, c.Z)(),
          A = (0, _.usePathname)();
        return (
          E(() => {
            if (
              "/" == A &&
              L &&
              j &&
              D.current &&
              (null == G ? void 0 : G.width)
            ) {
              let t, e;
              (null == G ? void 0 : G.width) < 992
                ? ((y = "right" == w ? -200 : "left" == w ? 200 : y),
                  (p = "top" == w ? 200 : "bottom" == w ? -200 : p))
                : ((p = "top" == g ? 200 : "bottom" == g ? -200 : p),
                  (y = "right" == g ? -200 : "left" == g ? 200 : y));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: D.current,
                  start: "top ".concat(
                    (null == G ? void 0 : G.width) < 992 ? B - 10 : B,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == G ? void 0 : G.width) < 992 ? P - 15 : P - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == G ? void 0 : G.width) > 1440
                    ? y
                    : (null == G ? void 0 : G.width) < 992
                    ? ((null == G ? void 0 : G.width) / 500) * y
                    : ((null == G ? void 0 : G.width) / 1440) * y),
                (e =
                  (null == G ? void 0 : G.width) > 1440
                    ? p
                    : (null == G ? void 0 : G.width) < 992
                    ? ((null == G ? void 0 : G.width) / 500) * p
                    : ((null == G ? void 0 : G.width) / 1440) * p),
                l
                  .from(D.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: k,
                    rotateY: x,
                    opacity: N,
                    duration: b,
                    ease: Z,
                  })
                  .to(D.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [G, L, A]),
          (0, n.jsx)(n.Fragment, {
            children:
              "#" === e
                ? (0, n.jsx)("p", {
                    className: (0, a.Z)(o().customlink, o()[f], r),
                    children: m,
                  })
                : h && "_blank" == h
                ? (0, n.jsx)(s.default, {
                    ref: D,
                    download: l,
                    href: e,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: v,
                    className: (0, a.Z)(o().customlink, o()[f], r),
                    ...S,
                    children: m,
                  })
                : (0, n.jsx)(s.default, {
                    ref: D,
                    download: l,
                    href: e,
                    target: h,
                    onClick: v,
                    className: (0, a.Z)(o().customlink, o()[f], r),
                    ...S,
                    children: m,
                  }),
          })
        );
      }
    },
    47984: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return d;
          },
        });
      var n = l(57437),
        i = l(79124),
        r = l(66648);
      l(2265);
      var o = l(69665),
        s = l.n(o),
        a = l(44839);
      function d(t) {
        let {
            alt: e = "BlockDAG",
            src: l,
            width: o,
            height: d,
            hero: c,
            className: u,
            ..._
          } = t,
          h = (0, i.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            c || _.priority
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(s().img, u),
                    src: l,
                    alt: e,
                    width: o || 0,
                    height: d || 0,
                    ..._,
                  },
                  1
                )
              : h
              ? (0, n.jsx)(
                  r.default,
                  {
                    className: (0, a.Z)(s().img, u),
                    src: l,
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
                    className: (0, a.Z)(s().loadingImg, u),
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
    32913: function (t, e, l) {
      "use strict";
      var n = l(57437),
        i = l(44839),
        r = l(14629),
        o = l.n(r);
      let s = (0, l(2265).forwardRef)((t, e) => {
        let { children: l, className: r, color: s = "dark", ...a } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: e,
            className: (0, i.Z)(o().section, o()[s], r),
            ...a,
            children: l,
          }),
        });
      });
      (s.displayName = "Section"), (e.Z = s);
    },
    21360: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return _;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(8544),
        o = l.n(r),
        s = l(44839),
        a = l(16609),
        d = l(49582),
        c = l(78002),
        u = l(16463);
      function _(t) {
        let {
            children: e,
            component: l = "p",
            size: r = "md",
            className: _,
            style: h,
            direction: m,
            directionMobile: f = m,
            translateY: v = 0,
            translateX: g = 0,
            duration: w = 0.8,
            rotateX: p = 0,
            rotateY: y = 0,
            ease: b = "back.out",
            opacity: k = 0,
            animate: x,
            start: Z = 80,
            end: N = 60,
            onClick: j,
          } = t,
          B = (0, i.useRef)(null),
          P = (0, c.Z)(),
          { useGSAP: S, activatedGsap: G } = (0, a.Z)(),
          D = (0, u.usePathname)();
        return (
          S(() => {
            if (
              "/" == D &&
              G &&
              x &&
              B.current &&
              (null == P ? void 0 : P.width)
            ) {
              let t, e;
              (null == P ? void 0 : P.width) < 992
                ? ((g = "right" == f ? -200 : "left" == f ? 200 : g),
                  (v = "top" == f ? 200 : "bottom" == f ? -200 : v))
                : ((v = "top" == m ? 200 : "bottom" == m ? -200 : v),
                  (g = "right" == m ? -200 : "left" == m ? 200 : g));
              let l = d.ZP.timeline({
                scrollTrigger: {
                  trigger: B.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? N - 15 : N - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? g
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * g
                    : ((null == P ? void 0 : P.width) / 1440) * g),
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? v
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * v
                    : ((null == P ? void 0 : P.width) / 1440) * v),
                l
                  .from(B.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: p,
                    rotateY: y,
                    opacity: k,
                    duration: w,
                    ease: b,
                  })
                  .to(B.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [G, D]),
          (0, n.jsx)(l, {
            onClick: j,
            ref: B,
            className: (0, s.Z)(o().text, o()[r], _),
            style: h,
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
            return h;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(15681),
        o = l.n(r),
        s = l(44839),
        a = l(16700),
        d = l(78002),
        c = l(16609),
        u = l(49582),
        _ = l(16463);
      function h(t) {
        let {
            children: e,
            size: l = "md",
            className: r,
            family: h = "secondary",
            component: m = "md" == l ? "h2" : "h6",
            variant: f,
            uppercase: v,
            direction: g,
            directionMobile: w = g,
            translateY: p = 0,
            translateX: y = 0,
            duration: b = 0.8,
            rotateX: k = 0,
            rotateY: x = 0,
            ease: Z = "back.out",
            opacity: N = 0,
            animate: j,
            start: B = 80,
            end: P = 60,
          } = t,
          S = (0, i.useRef)(null),
          G = (0, d.Z)(),
          { useGSAP: D, activatedGsap: E } = (0, c.Z)(),
          L = (0, _.usePathname)();
        return (
          D(() => {
            if (
              "/" == L &&
              E &&
              j &&
              S.current &&
              (null == G ? void 0 : G.width)
            ) {
              let t, e;
              (null == G ? void 0 : G.width) < 992
                ? ((y = "right" == w ? -200 : "left" == w ? 200 : y),
                  (p = "top" == w ? 200 : "bottom" == w ? -200 : p))
                : ((p = "top" == g ? 200 : "bottom" == g ? -200 : p),
                  (y = "right" == g ? -200 : "left" == g ? 200 : y));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: S.current,
                  start: "top ".concat(
                    (null == G ? void 0 : G.width) < 992 ? B - 10 : B,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == G ? void 0 : G.width) < 992 ? P - 15 : P - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == G ? void 0 : G.width) > 1440
                    ? y
                    : (null == G ? void 0 : G.width) < 992
                    ? ((null == G ? void 0 : G.width) / 500) * y
                    : ((null == G ? void 0 : G.width) / 1440) * y),
                (e =
                  (null == G ? void 0 : G.width) > 1440
                    ? p
                    : (null == G ? void 0 : G.width) < 992
                    ? ((null == G ? void 0 : G.width) / 500) * p
                    : ((null == G ? void 0 : G.width) / 1440) * p),
                l
                  .from(S.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: k,
                    rotateY: x,
                    opacity: N,
                    duration: b,
                    ease: Z,
                  })
                  .to(S.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [E, L]),
          (0, n.jsx)(m, {
            ref: S,
            className: (0, s.Z)(
              o().title,
              o()[f || m],
              "secondary" == h ? a.BD : a.T$,
              o()[l],
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
            return _;
          },
        });
      var n = l(57437),
        i = l(2265),
        r = l(15681),
        o = l.n(r),
        s = l(44839),
        a = l(78002),
        d = l(16609),
        c = l(49582),
        u = l(16463);
      function _(t) {
        let {
            children: e,
            component: l = "h5",
            className: r,
            color: _ = "primary",
            direction: h,
            directionMobile: m = h,
            translateY: f = 0,
            translateX: v = 0,
            duration: g = 0.8,
            rotateX: w = 0,
            rotateY: p = 0,
            ease: y = "back.out",
            opacity: b = 0,
            animate: k,
            start: x = 80,
            end: Z = 60,
          } = t,
          N = (0, i.useRef)(null),
          j = (0, a.Z)(),
          { useGSAP: B, activatedGsap: P } = (0, d.Z)(),
          S = (0, u.usePathname)();
        return (
          B(() => {
            if (
              "/" == S &&
              P &&
              k &&
              N.current &&
              (null == j ? void 0 : j.width)
            ) {
              let t, e;
              (null == j ? void 0 : j.width) < 992
                ? ((v = "right" == m ? -200 : "left" == m ? 200 : v),
                  (f = "top" == m ? 200 : "bottom" == m ? -200 : f))
                : ((f = "top" == h ? 200 : "bottom" == h ? -200 : f),
                  (v = "right" == h ? -200 : "left" == h ? 200 : v));
              let l = c.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == j ? void 0 : j.width) < 992 ? x - 10 : x,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == j ? void 0 : j.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == j ? void 0 : j.width) > 1440
                    ? v
                    : (null == j ? void 0 : j.width) < 992
                    ? ((null == j ? void 0 : j.width) / 500) * v
                    : ((null == j ? void 0 : j.width) / 1440) * v),
                (e =
                  (null == j ? void 0 : j.width) > 1440
                    ? f
                    : (null == j ? void 0 : j.width) < 992
                    ? ((null == j ? void 0 : j.width) / 500) * f
                    : ((null == j ? void 0 : j.width) / 1440) * f),
                l
                  .from(N.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: p,
                    opacity: b,
                    duration: g,
                    ease: y,
                  })
                  .to(N.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [P, S]),
          (0, n.jsx)(l, {
            ref: N,
            className: (0, s.Z)(o().subtitle, o()[_], r),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, l) {
      "use strict";
      l.d(e, {
        BD: function () {
          return c;
        },
        T$: function () {
          return d;
        },
      });
      var n = l(37983),
        i = l.n(n),
        r = l(68941),
        o = l.n(r),
        s = l(68425),
        a = l.n(s);
      let d = i().className,
        c = o().className;
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
    52783: function (t) {
      t.exports = {
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
    48241: function (t) {
      t.exports = {
        customlink: "style_customlink___bLW0",
        primary: "style_primary__NaDFQ",
        light: "style_light___QhFW",
        dark: "style_dark__F5y8x",
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
      [1899, 947, 9667, 5073, 922, 9391, 231, 3106, 2971, 7023, 1744],
      function () {
        return t((t.s = 79656));
      }
    ),
      (_N_E = t.O());
  },
]);
