(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3829],
  {
    41235: function (t, e, r) {
      Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.bind(r, 54893)),
        Promise.resolve().then(r.t.bind(r, 58538, 23)),
        Promise.resolve().then(r.t.bind(r, 59747, 23)),
        Promise.resolve().then(r.bind(r, 47984)),
        Promise.resolve().then(r.bind(r, 45419)),
        Promise.resolve().then(r.t.bind(r, 14629, 23)),
        Promise.resolve().then(r.bind(r, 21360)),
        Promise.resolve().then(r.bind(r, 87580)),
        Promise.resolve().then(r.bind(r, 84395));
    },
    66648: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return n.a;
        },
      });
      var l = r(55601),
        n = r.n(l);
    },
    87138: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return n.a;
        },
      });
      var l = r(231),
        n = r.n(l);
    },
    55601: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return a;
          },
        });
      let l = r(99920),
        n = r(80497),
        i = r(38173),
        s = l._(r(21241));
      function a(t) {
        let { props: e } = (0, n.getImgProps)(t, {
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
        for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
        return { props: e };
      }
      let o = i.Image;
    },
    54893: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return _;
        },
      });
      var l = r(57437),
        n = r(32913),
        i = r(18439),
        s = r.n(i),
        a = r(42625),
        o = r(44839),
        d = r(84395),
        c = r(16700),
        u = r(87580);
      function _(t) {
        let {} = t,
          e = [
            {
              subtitle: "SHIPPING DETAILS",
              title: "Complete Your Shipping Details: A Simple Guide",
              iframe: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("iframe", {
                    className: "d-md",
                    src: "//play.vidyard.com/vwXbAUJx3pbwoidDSrX6HD.html?",
                    frameBorder: "0",
                    allow:
                      "autoplay; fullscreen; picture-in-picture; clipboard-write",
                    title: "BlockDAG - How To Guide",
                  }),
                  (0, l.jsx)("iframe", {
                    className: "d-sm",
                    src: "//play.vidyard.com/uruTGRsfBG8JNv32ifH2vz.html?",
                    frameBorder: "0",
                    allow:
                      "autoplay; fullscreen; picture-in-picture; clipboard-write",
                    title: "BlockDAG - How To Guide",
                  }),
                ],
              }),
              href: "#",
            },
          ];
        return (0, l.jsx)(n.Z, {
          className: s().guides,
          children: (0, l.jsx)(a.Z, {
            classic: !0,
            children: (0, l.jsx)("div", {
              className: s().videos,
              children: e.map((t, e) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: s().item,
                    children: [
                      (0, l.jsx)("div", {
                        className: s().card,
                        children: (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)(d.default, { children: t.subtitle }),
                            (0, l.jsx)(u.default, {
                              size: "sm",
                              className: (0, o.Z)(
                                "font-bold text-white",
                                c.BD,
                                s().title
                              ),
                              children: t.title,
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: (0, o.Z)(s().video),
                        children: t.iframe,
                      }),
                    ],
                  },
                  e
                )
              ),
            }),
          }),
        });
      }
    },
    70499: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return m;
          },
        });
      var l = r(57437),
        n = r(87138),
        i = r(60231),
        s = r.n(i),
        a = r(44839),
        o = r(2265),
        d = r(16609),
        c = r(49582),
        u = r(78002),
        _ = r(16463);
      function m(t) {
        let {
            href: e,
            className: r,
            children: i,
            target: m,
            onClick: h,
            direction: f,
            directionMobile: v = f,
            translateY: p = 0,
            translateX: y = 0,
            duration: w = 0.8,
            rotateX: g = 0,
            rotateY: b = 0,
            ease: x = "back.out",
            opacity: N = 0,
            animate: k,
            start: j = 80,
            end: Z = 60,
            color: P = "primary",
            disabled: E,
            type: S = "button",
          } = t,
          B = (0, o.useRef)(null),
          D = (0, o.useRef)(null),
          X = (0, u.Z)(),
          { useGSAP: Y, activatedGsap: I } = (0, d.Z)(),
          A = (0, _.usePathname)();
        return (
          Y(() => {
            if ("/" == A) {
              let t;
              if (
                (B.current && (t = B),
                D.current && (t = D),
                I && k && t && t.current && (null == X ? void 0 : X.width))
              ) {
                let e, r;
                (null == X ? void 0 : X.width) < 992
                  ? ((y = "right" == v ? -200 : "left" == v ? 200 : y),
                    (p = "top" == v ? 200 : "bottom" == v ? -200 : p))
                  : ((p = "top" == f ? 200 : "bottom" == f ? -200 : p),
                    (y = "right" == f ? -200 : "left" == f ? 200 : y));
                let l = c.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == X ? void 0 : X.width) < 992 ? j - 10 : j,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == X ? void 0 : X.width) < 992 ? Z - 15 : Z - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (e =
                    (null == X ? void 0 : X.width) > 1440
                      ? y
                      : (null == X ? void 0 : X.width) < 992
                      ? ((null == X ? void 0 : X.width) / 500) * y
                      : ((null == X ? void 0 : X.width) / 1440) * y),
                  (r =
                    (null == X ? void 0 : X.width) > 1440
                      ? p
                      : (null == X ? void 0 : X.width) < 992
                      ? ((null == X ? void 0 : X.width) / 500) * p
                      : ((null == X ? void 0 : X.width) / 1440) * p),
                  l
                    .from(t.current, {
                      translateY: r,
                      translateX: e,
                      rotateX: g,
                      rotateY: b,
                      opacity: N,
                      duration: w,
                      ease: x,
                    })
                    .to(t.current, {
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
          }, [I, A]),
          (0, l.jsx)(l.Fragment, {
            children: e
              ? m && "_blank" == m
                ? (0, l.jsxs)(n.default, {
                    ref: D,
                    href: e,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: h,
                    className: (0, a.Z)(s().button, r, s()[P]),
                    children: [i, (0, l.jsx)("span", { className: s().wrap })],
                  })
                : (0, l.jsxs)(n.default, {
                    ref: D,
                    href: e,
                    target: m,
                    rel: "",
                    onClick: h,
                    className: (0, a.Z)(s().button, r, s()[P]),
                    children: [i, (0, l.jsx)("span", { className: s().wrap })],
                  })
              : (0, l.jsxs)("button", {
                  type: S,
                  disabled: E,
                  ref: B,
                  onClick: h,
                  className: (0, a.Z)(s().button, r, s()[P]),
                  children: [i, (0, l.jsx)("span", { className: s().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, e, r) {
      "use strict";
      var l = r(57437),
        n = r(44839),
        i = r(58538),
        s = r.n(i);
      let a = (0, r(2265).forwardRef)((t, e) => {
        let { children: r, className: i, size: a, classic: o, ...d } = t;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("div", {
            ref: e,
            className: (0, n.Z)(
              s().container,
              i,
              a && s()[a],
              o && s().classic
            ),
            ...d,
            children: r,
          }),
        });
      });
      (a.displayName = "Container"), (e.Z = a);
    },
    47984: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return d;
          },
        });
      var l = r(57437),
        n = r(79124),
        i = r(66648);
      r(2265);
      var s = r(69665),
        a = r.n(s),
        o = r(44839);
      function d(t) {
        let {
            alt: e = "BlockDAG",
            src: r,
            width: s,
            height: d,
            hero: c,
            className: u,
            ..._
          } = t,
          m = (0, n.Z)();
        return (0, l.jsx)(l.Fragment, {
          children:
            c || _.priority
              ? (0, l.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().img, u),
                    src: r,
                    alt: e,
                    width: s || 0,
                    height: d || 0,
                    ..._,
                  },
                  1
                )
              : m
              ? (0, l.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().img, u),
                    src: r,
                    alt: e,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  2
                )
              : (0, l.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().loadingImg, u),
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
    45419: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return h;
        },
      });
      var l = r(57437),
        n = r(42625),
        i = r(76003),
        s = r.n(i),
        a = r(21360),
        o = r(47984),
        d = r(32913),
        c = r(87580),
        u = r(70499),
        _ = r(13259),
        m = r(44839);
      function h(t) {
        let { color: e } = t;
        return (0, l.jsx)(d.Z, {
          className: s().section,
          color: e || "primary",
          children: (0, l.jsxs)(n.Z, {
            className: s().sectionContainer,
            children: [
              (0, l.jsx)("div", {
                children: (0, l.jsx)(o.default, {
                  className: s().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, l.jsx)(c.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, l.jsxs)(a.default, {
                className: (0, m.Z)(s().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, l.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, l.jsxs)("div", {
                className: s().btns,
                children: [
                  (0, l.jsx)(u.default, {
                    href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    color: "dark" === e ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, l.jsx)(u.default, {
                    color: "transparent-light",
                    href: _.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    32913: function (t, e, r) {
      "use strict";
      var l = r(57437),
        n = r(44839),
        i = r(14629),
        s = r.n(i);
      let a = (0, r(2265).forwardRef)((t, e) => {
        let { children: r, className: i, color: a = "dark", ...o } = t;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            ref: e,
            className: (0, n.Z)(s().section, s()[a], i),
            ...o,
            children: r,
          }),
        });
      });
      (a.displayName = "Section"), (e.Z = a);
    },
    21360: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return _;
          },
        });
      var l = r(57437),
        n = r(2265),
        i = r(8544),
        s = r.n(i),
        a = r(44839),
        o = r(16609),
        d = r(49582),
        c = r(78002),
        u = r(16463);
      function _(t) {
        let {
            children: e,
            component: r = "p",
            size: i = "md",
            className: _,
            style: m,
            direction: h,
            directionMobile: f = h,
            translateY: v = 0,
            translateX: p = 0,
            duration: y = 0.8,
            rotateX: w = 0,
            rotateY: g = 0,
            ease: b = "back.out",
            opacity: x = 0,
            animate: N,
            start: k = 80,
            end: j = 60,
            onClick: Z,
          } = t,
          P = (0, n.useRef)(null),
          E = (0, c.Z)(),
          { useGSAP: S, activatedGsap: B } = (0, o.Z)(),
          D = (0, u.usePathname)();
        return (
          S(() => {
            if (
              "/" == D &&
              B &&
              N &&
              P.current &&
              (null == E ? void 0 : E.width)
            ) {
              let t, e;
              (null == E ? void 0 : E.width) < 992
                ? ((p = "right" == f ? -200 : "left" == f ? 200 : p),
                  (v = "top" == f ? 200 : "bottom" == f ? -200 : v))
                : ((v = "top" == h ? 200 : "bottom" == h ? -200 : v),
                  (p = "right" == h ? -200 : "left" == h ? 200 : p));
              let r = d.ZP.timeline({
                scrollTrigger: {
                  trigger: P.current,
                  start: "top ".concat(
                    (null == E ? void 0 : E.width) < 992 ? k - 10 : k,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == E ? void 0 : E.width) < 992 ? j - 15 : j - 10,
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
                    ? v
                    : (null == E ? void 0 : E.width) < 992
                    ? ((null == E ? void 0 : E.width) / 500) * v
                    : ((null == E ? void 0 : E.width) / 1440) * v),
                r
                  .from(P.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: g,
                    opacity: x,
                    duration: y,
                    ease: b,
                  })
                  .to(P.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [B, D]),
          (0, l.jsx)(r, {
            onClick: Z,
            ref: P,
            className: (0, a.Z)(s().text, s()[i], _),
            style: m,
            children: e,
          })
        );
      }
    },
    87580: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return m;
          },
        });
      var l = r(57437),
        n = r(2265),
        i = r(15681),
        s = r.n(i),
        a = r(44839),
        o = r(16700),
        d = r(78002),
        c = r(16609),
        u = r(49582),
        _ = r(16463);
      function m(t) {
        let {
            children: e,
            size: r = "md",
            className: i,
            family: m = "secondary",
            component: h = "md" == r ? "h2" : "h6",
            variant: f,
            uppercase: v,
            direction: p,
            directionMobile: y = p,
            translateY: w = 0,
            translateX: g = 0,
            duration: b = 0.8,
            rotateX: x = 0,
            rotateY: N = 0,
            ease: k = "back.out",
            opacity: j = 0,
            animate: Z,
            start: P = 80,
            end: E = 60,
          } = t,
          S = (0, n.useRef)(null),
          B = (0, d.Z)(),
          { useGSAP: D, activatedGsap: X } = (0, c.Z)(),
          Y = (0, _.usePathname)();
        return (
          D(() => {
            if (
              "/" == Y &&
              X &&
              Z &&
              S.current &&
              (null == B ? void 0 : B.width)
            ) {
              let t, e;
              (null == B ? void 0 : B.width) < 992
                ? ((g = "right" == y ? -200 : "left" == y ? 200 : g),
                  (w = "top" == y ? 200 : "bottom" == y ? -200 : w))
                : ((w = "top" == p ? 200 : "bottom" == p ? -200 : w),
                  (g = "right" == p ? -200 : "left" == p ? 200 : g));
              let r = u.ZP.timeline({
                scrollTrigger: {
                  trigger: S.current,
                  start: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? P - 10 : P,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? E - 15 : E - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == B ? void 0 : B.width) > 1440
                    ? g
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * g
                    : ((null == B ? void 0 : B.width) / 1440) * g),
                (e =
                  (null == B ? void 0 : B.width) > 1440
                    ? w
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * w
                    : ((null == B ? void 0 : B.width) / 1440) * w),
                r
                  .from(S.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: x,
                    rotateY: N,
                    opacity: j,
                    duration: b,
                    ease: k,
                  })
                  .to(S.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [X, Y]),
          (0, l.jsx)(h, {
            ref: S,
            className: (0, a.Z)(
              s().title,
              s()[f || h],
              "secondary" == m ? o.BD : o.T$,
              s()[r],
              i,
              v ? "uppercase" : ""
            ),
            children: e,
          })
        );
      }
    },
    84395: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return _;
          },
        });
      var l = r(57437),
        n = r(2265),
        i = r(15681),
        s = r.n(i),
        a = r(44839),
        o = r(78002),
        d = r(16609),
        c = r(49582),
        u = r(16463);
      function _(t) {
        let {
            children: e,
            component: r = "h5",
            className: i,
            color: _ = "primary",
            direction: m,
            directionMobile: h = m,
            translateY: f = 0,
            translateX: v = 0,
            duration: p = 0.8,
            rotateX: y = 0,
            rotateY: w = 0,
            ease: g = "back.out",
            opacity: b = 0,
            animate: x,
            start: N = 80,
            end: k = 60,
          } = t,
          j = (0, n.useRef)(null),
          Z = (0, o.Z)(),
          { useGSAP: P, activatedGsap: E } = (0, d.Z)(),
          S = (0, u.usePathname)();
        return (
          P(() => {
            if (
              "/" == S &&
              E &&
              x &&
              j.current &&
              (null == Z ? void 0 : Z.width)
            ) {
              let t, e;
              (null == Z ? void 0 : Z.width) < 992
                ? ((v = "right" == h ? -200 : "left" == h ? 200 : v),
                  (f = "top" == h ? 200 : "bottom" == h ? -200 : f))
                : ((f = "top" == m ? 200 : "bottom" == m ? -200 : f),
                  (v = "right" == m ? -200 : "left" == m ? 200 : v));
              let r = c.ZP.timeline({
                scrollTrigger: {
                  trigger: j.current,
                  start: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? N - 10 : N,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? k - 15 : k - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? v
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * v
                    : ((null == Z ? void 0 : Z.width) / 1440) * v),
                (e =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? f
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * f
                    : ((null == Z ? void 0 : Z.width) / 1440) * f),
                r
                  .from(j.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: y,
                    rotateY: w,
                    opacity: b,
                    duration: p,
                    ease: g,
                  })
                  .to(j.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [E, S]),
          (0, l.jsx)(r, {
            ref: j,
            className: (0, a.Z)(s().subtitle, s()[_], i),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, r) {
      "use strict";
      r.d(e, {
        BD: function () {
          return c;
        },
        T$: function () {
          return d;
        },
      });
      var l = r(37983),
        n = r.n(l),
        i = r(68941),
        s = r.n(i),
        a = r(68425),
        o = r.n(a);
      let d = n().className,
        c = s().className;
      o().className;
    },
    79124: function (t, e, r) {
      "use strict";
      var l = r(2265),
        n = r(44630);
      e.Z = () => {
        let [t, e] = (0, l.useState)(!1),
          r = (0, n.Z)(),
          i = () => {
            e(!0);
          };
        return (
          (0, l.useEffect)(() => {
            r > 1 && e(!0);
          }, [r]),
          (0, l.useEffect)(
            () => (
              window.addEventListener("mousemove", i),
              window.addEventListener("click", i),
              window.addEventListener("touchmove", i),
              window.addEventListener("touchstart", i),
              window.addEventListener("touchend", i),
              () => {
                window.removeEventListener("mousemove", i),
                  window.removeEventListener("click", i),
                  window.removeEventListener("touchmove", i),
                  window.removeEventListener("touchstart", i),
                  window.removeEventListener("touchend", i);
              }
            ),
            []
          ),
          t
        );
      };
    },
    18439: function (t) {
      t.exports = {
        guides: "style_guides__cfrW2",
        videos: "style_videos__HQNmQ",
        item: "style_item__Ph0I3",
        title: "style_title__Ssgf8",
        card: "style_card__2v5N5",
        video: "style_video__EDfer",
      };
    },
    60231: function (t) {
      t.exports = {
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
    76003: function (t) {
      t.exports = {
        section: "style_section__K46ck",
        sectionContainer: "style_sectionContainer__oErws",
        desc: "style_desc___bTux",
        btns: "style_btns__eS32b",
        cube: "style_cube__p2p8S",
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
      [1899, 947, 4194, 9667, 5073, 922, 9391, 231, 3106, 2971, 7023, 1744],
      function () {
        return t((t.s = 41235));
      }
    ),
      (_N_E = t.O());
  },
]);
