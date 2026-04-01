(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9160],
  {
    29373: function (t, e, l) {
      Promise.resolve().then(l.bind(l, 18709));
    },
    66648: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = l(55601),
        r = l.n(n);
    },
    87138: function (t, e, l) {
      "use strict";
      l.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = l(231),
        r = l.n(n);
    },
    55601: function (t, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var l in e)
            Object.defineProperty(t, l, { enumerable: !0, get: e[l] });
        })(e, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = l(99920),
        r = l(80497),
        i = l(38173),
        s = n._(l(21241));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
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
      let o = i.Image;
    },
    18709: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return s;
          },
        });
      var n = l(57437),
        r = l(70499),
        i = l(32983);
      function s(t) {
        let {} = t;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("title", {
              children: "404: This page could not be found.",
            }),
            (0, n.jsx)(i.Z, {
              img: { src: "/images/hero/notfound.webp" },
              title: (0, n.jsx)(n.Fragment, { children: "404" }),
              xldesc: (0, n.jsx)(n.Fragment, {
                children:
                  "The page you requested could not be found. It might have been removed, renamed, or is temporarily unavailable.",
              }),
              desc: (0, n.jsxs)("span", {
                className: "flex flex-col gap-4 mt-4",
                children: [
                  (0, n.jsx)(r.default, {
                    className: "!no-underline sm:mx-auto",
                    href: "/",
                    children: "Go back Home",
                  }),
                  "Check again later if you're still having trouble.",
                ],
              }),
            }),
          ],
        });
      }
    },
    70499: function (t, e, l) {
      "use strict";
      l.r(e),
        l.d(e, {
          default: function () {
            return h;
          },
        });
      var n = l(57437),
        r = l(87138),
        i = l(60231),
        s = l.n(i),
        a = l(44839),
        o = l(2265),
        d = l(16609),
        c = l(49582),
        u = l(78002),
        _ = l(16463);
      function h(t) {
        let {
            href: e,
            className: l,
            children: i,
            target: h,
            onClick: m,
            direction: f,
            directionMobile: v = f,
            translateY: g = 0,
            translateX: p = 0,
            duration: w = 0.8,
            rotateX: y = 0,
            rotateY: x = 0,
            ease: b = "back.out",
            opacity: j = 0,
            animate: Z,
            start: N = 80,
            end: k = 60,
            color: E = "primary",
            disabled: F,
            type: X = "button",
          } = t,
          Y = (0, o.useRef)(null),
          P = (0, o.useRef)(null),
          S = (0, u.Z)(),
          { useGSAP: I, activatedGsap: L } = (0, d.Z)(),
          B = (0, _.usePathname)();
        return (
          I(() => {
            if ("/" == B) {
              let t;
              if (
                (Y.current && (t = Y),
                P.current && (t = P),
                L && Z && t && t.current && (null == S ? void 0 : S.width))
              ) {
                let e, l;
                (null == S ? void 0 : S.width) < 992
                  ? ((p = "right" == v ? -200 : "left" == v ? 200 : p),
                    (g = "top" == v ? 200 : "bottom" == v ? -200 : g))
                  : ((g = "top" == f ? 200 : "bottom" == f ? -200 : g),
                    (p = "right" == f ? -200 : "left" == f ? 200 : p));
                let n = c.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == S ? void 0 : S.width) < 992 ? N - 10 : N,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == S ? void 0 : S.width) < 992 ? k - 15 : k - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (e =
                    (null == S ? void 0 : S.width) > 1440
                      ? p
                      : (null == S ? void 0 : S.width) < 992
                      ? ((null == S ? void 0 : S.width) / 500) * p
                      : ((null == S ? void 0 : S.width) / 1440) * p),
                  (l =
                    (null == S ? void 0 : S.width) > 1440
                      ? g
                      : (null == S ? void 0 : S.width) < 992
                      ? ((null == S ? void 0 : S.width) / 500) * g
                      : ((null == S ? void 0 : S.width) / 1440) * g),
                  n
                    .from(t.current, {
                      translateY: l,
                      translateX: e,
                      rotateX: y,
                      rotateY: x,
                      opacity: j,
                      duration: w,
                      ease: b,
                    })
                    .to(t.current, {
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
          }, [L, B]),
          (0, n.jsx)(n.Fragment, {
            children: e
              ? h && "_blank" == h
                ? (0, n.jsxs)(r.default, {
                    ref: P,
                    href: e,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: m,
                    className: (0, a.Z)(s().button, l, s()[E]),
                    children: [i, (0, n.jsx)("span", { className: s().wrap })],
                  })
                : (0, n.jsxs)(r.default, {
                    ref: P,
                    href: e,
                    target: h,
                    rel: "",
                    onClick: m,
                    className: (0, a.Z)(s().button, l, s()[E]),
                    children: [i, (0, n.jsx)("span", { className: s().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: X,
                  disabled: F,
                  ref: Y,
                  onClick: m,
                  className: (0, a.Z)(s().button, l, s()[E]),
                  children: [i, (0, n.jsx)("span", { className: s().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, e, l) {
      "use strict";
      var n = l(57437),
        r = l(44839),
        i = l(58538),
        s = l.n(i);
      let a = (0, l(2265).forwardRef)((t, e) => {
        let { children: l, className: i, size: a, classic: o, ...d } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: e,
            className: (0, r.Z)(
              s().container,
              i,
              a && s()[a],
              o && s().classic
            ),
            ...d,
            children: l,
          }),
        });
      });
      (a.displayName = "Container"), (e.Z = a);
    },
    32983: function (t, e, l) {
      "use strict";
      l.d(e, {
        Z: function () {
          return m;
        },
      });
      var n = l(57437),
        r = l(47984),
        i = l(42625),
        s = l(32913),
        a = l(21360),
        o = l(87580),
        d = l(59747),
        c = l.n(d),
        u = l(44839),
        _ = l(84395),
        h = l(87138);
      function m(t) {
        let {
          img: e,
          title: l,
          bigdesc: d,
          xldesc: m,
          desc: f,
          custom: v,
          btns: g,
          subtitle: p,
          notHero: w,
          breadcrumb: y,
          noBreadcrumb: x,
          sectionClass: b,
          containerClass: j,
          contentClass: Z,
          textsClass: N,
          subtitleClass: k,
          titleClass: E,
          xlDescClass: F,
          bigDescClass: X,
          descClass: Y,
          btnsClass: P,
        } = t;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            !x &&
              (0, n.jsx)("section", {
                className: c().breadcrumbSection,
                children: (0, n.jsx)(i.Z, {
                  className: c().breadcrumb,
                  children: (0, n.jsxs)("ul", {
                    children: [
                      (0, n.jsx)("li", {
                        children: (0, n.jsx)(h.default, {
                          href: "/",
                          children: (0, n.jsx)(a.default, { children: "Home" }),
                        }),
                      }),
                      y &&
                        y.map((t, e) =>
                          (0, n.jsx)(
                            "li",
                            {
                              children: (0, n.jsx)(h.default, {
                                href: t.slug,
                                children: (0, n.jsx)(a.default, {
                                  children: t.title,
                                }),
                              }),
                            },
                            e
                          )
                        ),
                      (0, n.jsx)("li", {
                        children: (0, n.jsx)(a.default, { children: l }),
                      }),
                    ],
                  }),
                }),
              }),
            (0, n.jsx)(s.Z, {
              className: (0, u.Z)(c().hero, b),
              children: (0, n.jsxs)(i.Z, {
                className: (0, u.Z)(c().container, j),
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, u.Z)(c().content, Z),
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, u.Z)(c().texts, N),
                        children: [
                          p &&
                            (0, n.jsx)(_.default, {
                              className: k,
                              children: p,
                            }),
                          (0, n.jsx)(o.default, {
                            component: w ? "h2" : "h1",
                            className: (0, u.Z)(c().title, E),
                            children: l,
                          }),
                          m &&
                            (0, n.jsx)(a.default, {
                              className: (0, u.Z)(c().bigdesc, F),
                              size: "xl",
                              children: m,
                            }),
                          " ",
                          d &&
                            (0, n.jsx)(a.default, {
                              className: (0, u.Z)(c().bigdesc, X),
                              size: "lg",
                              children: d,
                            }),
                          f &&
                            (0, n.jsx)(a.default, {
                              className: (0, u.Z)(c().desc, Y),
                              children: f,
                            }),
                        ],
                      }),
                      v && v,
                      g &&
                        (0, n.jsx)("div", {
                          className: (0, u.Z)(c().btns, P),
                          children: g,
                        }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: (0, u.Z)(c().imgWrapper, e.wrapperClass),
                    children: (0, n.jsx)(r.default, {
                      hero: !w,
                      priority: !w,
                      className: (0, u.Z)(c().img, e.className),
                      src: e.src,
                      alt: (null == e ? void 0 : e.alt) || "BlockDAG",
                      width: e.width || 568,
                      height: e.height || 590,
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
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
        r = l(79124),
        i = l(66648);
      l(2265);
      var s = l(69665),
        a = l.n(s),
        o = l(44839);
      function d(t) {
        let {
            alt: e = "BlockDAG",
            src: l,
            width: s,
            height: d,
            hero: c,
            className: u,
            ..._
          } = t,
          h = (0, r.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            c || _.priority
              ? (0, n.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().img, u),
                    src: l,
                    alt: e,
                    width: s || 0,
                    height: d || 0,
                    ..._,
                  },
                  1
                )
              : h
              ? (0, n.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().img, u),
                    src: l,
                    alt: e,
                    width: 0,
                    height: 0,
                    ..._,
                  },
                  2
                )
              : (0, n.jsx)(
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
    32913: function (t, e, l) {
      "use strict";
      var n = l(57437),
        r = l(44839),
        i = l(14629),
        s = l.n(i);
      let a = (0, l(2265).forwardRef)((t, e) => {
        let { children: l, className: i, color: a = "dark", ...o } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: e,
            className: (0, r.Z)(s().section, s()[a], i),
            ...o,
            children: l,
          }),
        });
      });
      (a.displayName = "Section"), (e.Z = a);
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
        r = l(2265),
        i = l(8544),
        s = l.n(i),
        a = l(44839),
        o = l(16609),
        d = l(49582),
        c = l(78002),
        u = l(16463);
      function _(t) {
        let {
            children: e,
            component: l = "p",
            size: i = "md",
            className: _,
            style: h,
            direction: m,
            directionMobile: f = m,
            translateY: v = 0,
            translateX: g = 0,
            duration: p = 0.8,
            rotateX: w = 0,
            rotateY: y = 0,
            ease: x = "back.out",
            opacity: b = 0,
            animate: j,
            start: Z = 80,
            end: N = 60,
            onClick: k,
          } = t,
          E = (0, r.useRef)(null),
          F = (0, c.Z)(),
          { useGSAP: X, activatedGsap: Y } = (0, o.Z)(),
          P = (0, u.usePathname)();
        return (
          X(() => {
            if (
              "/" == P &&
              Y &&
              j &&
              E.current &&
              (null == F ? void 0 : F.width)
            ) {
              let t, e;
              (null == F ? void 0 : F.width) < 992
                ? ((g = "right" == f ? -200 : "left" == f ? 200 : g),
                  (v = "top" == f ? 200 : "bottom" == f ? -200 : v))
                : ((v = "top" == m ? 200 : "bottom" == m ? -200 : v),
                  (g = "right" == m ? -200 : "left" == m ? 200 : g));
              let l = d.ZP.timeline({
                scrollTrigger: {
                  trigger: E.current,
                  start: "top ".concat(
                    (null == F ? void 0 : F.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == F ? void 0 : F.width) < 992 ? N - 15 : N - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == F ? void 0 : F.width) > 1440
                    ? g
                    : (null == F ? void 0 : F.width) < 992
                    ? ((null == F ? void 0 : F.width) / 500) * g
                    : ((null == F ? void 0 : F.width) / 1440) * g),
                (e =
                  (null == F ? void 0 : F.width) > 1440
                    ? v
                    : (null == F ? void 0 : F.width) < 992
                    ? ((null == F ? void 0 : F.width) / 500) * v
                    : ((null == F ? void 0 : F.width) / 1440) * v),
                l
                  .from(E.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: w,
                    rotateY: y,
                    opacity: b,
                    duration: p,
                    ease: x,
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
          }, [Y, P]),
          (0, n.jsx)(l, {
            onClick: k,
            ref: E,
            className: (0, a.Z)(s().text, s()[i], _),
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
        r = l(2265),
        i = l(15681),
        s = l.n(i),
        a = l(44839),
        o = l(16700),
        d = l(78002),
        c = l(16609),
        u = l(49582),
        _ = l(16463);
      function h(t) {
        let {
            children: e,
            size: l = "md",
            className: i,
            family: h = "secondary",
            component: m = "md" == l ? "h2" : "h6",
            variant: f,
            uppercase: v,
            direction: g,
            directionMobile: p = g,
            translateY: w = 0,
            translateX: y = 0,
            duration: x = 0.8,
            rotateX: b = 0,
            rotateY: j = 0,
            ease: Z = "back.out",
            opacity: N = 0,
            animate: k,
            start: E = 80,
            end: F = 60,
          } = t,
          X = (0, r.useRef)(null),
          Y = (0, d.Z)(),
          { useGSAP: P, activatedGsap: S } = (0, c.Z)(),
          I = (0, _.usePathname)();
        return (
          P(() => {
            if (
              "/" == I &&
              S &&
              k &&
              X.current &&
              (null == Y ? void 0 : Y.width)
            ) {
              let t, e;
              (null == Y ? void 0 : Y.width) < 992
                ? ((y = "right" == p ? -200 : "left" == p ? 200 : y),
                  (w = "top" == p ? 200 : "bottom" == p ? -200 : w))
                : ((w = "top" == g ? 200 : "bottom" == g ? -200 : w),
                  (y = "right" == g ? -200 : "left" == g ? 200 : y));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: X.current,
                  start: "top ".concat(
                    (null == Y ? void 0 : Y.width) < 992 ? E - 10 : E,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Y ? void 0 : Y.width) < 992 ? F - 15 : F - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == Y ? void 0 : Y.width) > 1440
                    ? y
                    : (null == Y ? void 0 : Y.width) < 992
                    ? ((null == Y ? void 0 : Y.width) / 500) * y
                    : ((null == Y ? void 0 : Y.width) / 1440) * y),
                (e =
                  (null == Y ? void 0 : Y.width) > 1440
                    ? w
                    : (null == Y ? void 0 : Y.width) < 992
                    ? ((null == Y ? void 0 : Y.width) / 500) * w
                    : ((null == Y ? void 0 : Y.width) / 1440) * w),
                l
                  .from(X.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: b,
                    rotateY: j,
                    opacity: N,
                    duration: x,
                    ease: Z,
                  })
                  .to(X.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [S, I]),
          (0, n.jsx)(m, {
            ref: X,
            className: (0, a.Z)(
              s().title,
              s()[f || m],
              "secondary" == h ? o.BD : o.T$,
              s()[l],
              i,
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
        r = l(2265),
        i = l(15681),
        s = l.n(i),
        a = l(44839),
        o = l(78002),
        d = l(16609),
        c = l(49582),
        u = l(16463);
      function _(t) {
        let {
            children: e,
            component: l = "h5",
            className: i,
            color: _ = "primary",
            direction: h,
            directionMobile: m = h,
            translateY: f = 0,
            translateX: v = 0,
            duration: g = 0.8,
            rotateX: p = 0,
            rotateY: w = 0,
            ease: y = "back.out",
            opacity: x = 0,
            animate: b,
            start: j = 80,
            end: Z = 60,
          } = t,
          N = (0, r.useRef)(null),
          k = (0, o.Z)(),
          { useGSAP: E, activatedGsap: F } = (0, d.Z)(),
          X = (0, u.usePathname)();
        return (
          E(() => {
            if (
              "/" == X &&
              F &&
              b &&
              N.current &&
              (null == k ? void 0 : k.width)
            ) {
              let t, e;
              (null == k ? void 0 : k.width) < 992
                ? ((v = "right" == m ? -200 : "left" == m ? 200 : v),
                  (f = "top" == m ? 200 : "bottom" == m ? -200 : f))
                : ((f = "top" == h ? 200 : "bottom" == h ? -200 : f),
                  (v = "right" == h ? -200 : "left" == h ? 200 : v));
              let l = c.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == k ? void 0 : k.width) < 992 ? j - 10 : j,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == k ? void 0 : k.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == k ? void 0 : k.width) > 1440
                    ? v
                    : (null == k ? void 0 : k.width) < 992
                    ? ((null == k ? void 0 : k.width) / 500) * v
                    : ((null == k ? void 0 : k.width) / 1440) * v),
                (e =
                  (null == k ? void 0 : k.width) > 1440
                    ? f
                    : (null == k ? void 0 : k.width) < 992
                    ? ((null == k ? void 0 : k.width) / 500) * f
                    : ((null == k ? void 0 : k.width) / 1440) * f),
                l
                  .from(N.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: p,
                    rotateY: w,
                    opacity: x,
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
          }, [F, X]),
          (0, n.jsx)(l, {
            ref: N,
            className: (0, a.Z)(s().subtitle, s()[_], i),
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
        r = l.n(n),
        i = l(68941),
        s = l.n(i),
        a = l(68425),
        o = l.n(a);
      let d = r().className,
        c = s().className;
      o().className;
    },
    79124: function (t, e, l) {
      "use strict";
      var n = l(2265),
        r = l(44630);
      e.Z = () => {
        let [t, e] = (0, n.useState)(!1),
          l = (0, r.Z)(),
          i = () => {
            e(!0);
          };
        return (
          (0, n.useEffect)(() => {
            l > 1 && e(!0);
          }, [l]),
          (0, n.useEffect)(
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
      [5073, 9667, 1899, 947, 922, 9391, 231, 3106, 2971, 7023, 1744],
      function () {
        return t((t.s = 29373));
      }
    ),
      (_N_E = t.O());
  },
]);
