(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8826],
  {
    87138: function (t, l, e) {
      "use strict";
      e.d(l, {
        default: function () {
          return r.a;
        },
      });
      var i = e(231),
        r = e.n(i);
    },
    42263: function (t, l, e) {
      "use strict";
      e.d(l, {
        default: function () {
          return u;
        },
      });
      var i = e(57437),
        r = e(42625),
        s = e(87138),
        n = e(60357),
        a = e.n(n),
        o = e(16463),
        d = e(66648);
      function u(t) {
        let { data: l } = t,
          e = (0, o.usePathname)();
        return (0, i.jsxs)(r.Z, {
          className: a().container,
          children: [
            (0, i.jsx)("h5", {
              className: a().title,
              children: "News Categories",
            }),
            (0, i.jsxs)("ul", {
              className: a().list,
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsxs)(s.default, {
                    href: "/blog",
                    className: "/blog" === e ? a().active : "",
                    children: [
                      (0, i.jsx)(d.default, {
                        src: "/icons/global-white.svg",
                        width: 24,
                        height: 24,
                        alt: "Global",
                      }),
                      "Global",
                    ],
                  }),
                }),
                l.map((t, l) =>
                  (0, i.jsx)(
                    "li",
                    {
                      children: (0, i.jsx)(s.default, {
                        href: "/blog/category/".concat(t.attributes.slug),
                        className:
                          e.replace("/blog/category/", "") === t.attributes.slug
                            ? a().active
                            : "",
                        children: t.attributes.title,
                      }),
                    },
                    l
                  )
                ),
              ],
            }),
          ],
        });
      }
    },
    65385: function (t, l, e) {
      "use strict";
      e.d(l, {
        default: function () {
          return p;
        },
      });
      var i = e(57437),
        r = e(66391),
        s = e.n(r),
        n = e(47984),
        a = e(44839),
        o = e(21360),
        d = e(43615),
        u = e(87138),
        c = e(2265),
        v = e(81079),
        h = e(70499),
        _ = e(42625),
        m = e(5540),
        f = e(53267),
        g = e(66648),
        b = e(762);
      function p(t) {
        let { blogData: l, slider: e, authors: r } = t,
          [p, w] = (0, c.useState)(6);
        return (0, i.jsxs)("div", {
          className: s().blogWrapper,
          children: [
            e &&
              (0, i.jsx)(f.tq, {
                id: "updatesSwiper",
                className: (0, a.Z)(s().swiper),
                modules: [m.tl, m.s5],
                breakpoints: {
                  320: { slidesPerView: 1.2, spaceBetween: 40 },
                  992: { slidesPerView: 2.3, spaceBetween: 0 },
                },
                slidesPerView: "auto",
                pagination: { clickable: !0 },
                children:
                  null == l
                    ? void 0
                    : l.map((t, l) => {
                        var e, r, c, v, h, _, m, g, b, p, w, x;
                        return (0, i.jsx)(
                          f.o5,
                          {
                            className: s().slide,
                            children: (0, i.jsxs)(
                              "div",
                              {
                                className: s().sliderItem,
                                children: [
                                  (0, i.jsx)(u.default, {
                                    href: (
                                      null == t
                                        ? void 0
                                        : null === (e = t.attributes) ||
                                          void 0 === e
                                        ? void 0
                                        : e.slug
                                    )
                                      ? "/blog/".concat(
                                          null == t
                                            ? void 0
                                            : null === (r = t.attributes) ||
                                              void 0 === r
                                            ? void 0
                                            : r.slug
                                        )
                                      : "/blog#",
                                    className: s().img,
                                    children: (0, i.jsx)(n.default, {
                                      src: t.attributes.img,
                                      alt: t.attributes.title,
                                      draggable: !1,
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: s().content,
                                    children: [
                                      (0, i.jsx)(u.default, {
                                        href: (
                                          null == t
                                            ? void 0
                                            : null === (c = t.attributes) ||
                                              void 0 === c
                                            ? void 0
                                            : c.slug
                                        )
                                          ? "/blog/".concat(
                                              null == t
                                                ? void 0
                                                : null === (v = t.attributes) ||
                                                  void 0 === v
                                                ? void 0
                                                : v.slug
                                            )
                                          : "/blog#",
                                        children: (0, i.jsx)(o.default, {
                                          className: (0, a.Z)(
                                            s().title,
                                            "line-clamp-3"
                                          ),
                                          size: "lg",
                                          children: t.attributes.title,
                                        }),
                                      }),
                                      (0, i.jsx)(o.default, {
                                        className: (0, a.Z)(
                                          s().desc,
                                          "line-clamp-3"
                                        ),
                                        children: (
                                          null === (_ = t.attributes) ||
                                          void 0 === _
                                            ? void 0
                                            : null === (h = _.seo) ||
                                              void 0 === h
                                            ? void 0
                                            : h.metaDesc
                                        )
                                          ? null === (g = t.attributes) ||
                                            void 0 === g
                                            ? void 0
                                            : null === (m = g.seo) ||
                                              void 0 === m
                                            ? void 0
                                            : m.metaDesc
                                          : null === (p = t.attributes) ||
                                            void 0 === p
                                          ? void 0
                                          : null === (b = p.seo) || void 0 === b
                                          ? void 0
                                          : b.metaDescription,
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className: s().button,
                                        href: (
                                          null == t
                                            ? void 0
                                            : null === (w = t.attributes) ||
                                              void 0 === w
                                            ? void 0
                                            : w.slug
                                        )
                                          ? "/blog/".concat(
                                              null == t
                                                ? void 0
                                                : null === (x = t.attributes) ||
                                                  void 0 === x
                                                ? void 0
                                                : x.slug
                                            )
                                          : "/blog#",
                                        children: "Read More",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              l
                            ),
                          },
                          l
                        );
                      }),
              }),
            !e &&
              (0, i.jsxs)(_.Z, {
                classic: !0,
                children: [
                  (0, i.jsx)(v.default, {
                    direction: "top",
                    className: s().cards,
                    children:
                      null == l
                        ? void 0
                        : l.map((t, l) => {
                            var e, c, v, h, _, m, f, w, x, y, j, N, k, Z, C, X;
                            return (0, i.jsxs)(
                              "div",
                              {
                                className: (0, a.Z)(
                                  s().item,
                                  l + 1 > p && "d-md d-sm"
                                ),
                                children: [
                                  (0, i.jsx)(u.default, {
                                    href: (
                                      null == t
                                        ? void 0
                                        : null === (e = t.attributes) ||
                                          void 0 === e
                                        ? void 0
                                        : e.slug
                                    )
                                      ? "/blog/".concat(
                                          null == t
                                            ? void 0
                                            : null === (c = t.attributes) ||
                                              void 0 === c
                                            ? void 0
                                            : c.slug
                                        )
                                      : "/blog#",
                                    className: s().img,
                                    children: (0, i.jsx)(n.default, {
                                      src: t.attributes.img,
                                      alt: t.attributes.title,
                                      draggable: !1,
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: s().content,
                                    children: [
                                      (0, i.jsx)(u.default, {
                                        href: (
                                          null == t
                                            ? void 0
                                            : null === (v = t.attributes) ||
                                              void 0 === v
                                            ? void 0
                                            : v.slug
                                        )
                                          ? "/blog/".concat(
                                              null == t
                                                ? void 0
                                                : null === (h = t.attributes) ||
                                                  void 0 === h
                                                ? void 0
                                                : h.slug
                                            )
                                          : "/blog#",
                                        children: (0, i.jsx)(o.default, {
                                          className: (0, a.Z)(
                                            s().title,
                                            "line-clamp-3"
                                          ),
                                          size: "lg",
                                          children: t.attributes.title,
                                        }),
                                      }),
                                      (0, i.jsx)(o.default, {
                                        className: (0, a.Z)(
                                          s().desc,
                                          "line-clamp-3"
                                        ),
                                        children: (
                                          null === (m = t.attributes) ||
                                          void 0 === m
                                            ? void 0
                                            : null === (_ = m.seo) ||
                                              void 0 === _
                                            ? void 0
                                            : _.metaDesc
                                        )
                                          ? null === (w = t.attributes) ||
                                            void 0 === w
                                            ? void 0
                                            : null === (f = w.seo) ||
                                              void 0 === f
                                            ? void 0
                                            : f.metaDesc
                                          : null === (y = t.attributes) ||
                                            void 0 === y
                                          ? void 0
                                          : null === (x = y.seo) || void 0 === x
                                          ? void 0
                                          : x.metaDescription,
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: s().infos,
                                        children: [
                                          (0, i.jsxs)(o.default, {
                                            className: (0, a.Z)(
                                              s().info,
                                              "line-clamp-3"
                                            ),
                                            children: [
                                              (0, i.jsx)(g.default, {
                                                src: "/icons/calendar.svg",
                                                alt: "Calendar",
                                                width: 20,
                                                height: 20,
                                              }),
                                              (0, b.ie)(t.createdAt),
                                            ],
                                          }),
                                          (0, i.jsxs)(o.default, {
                                            className: (0, a.Z)(
                                              s().info,
                                              "line-clamp-3"
                                            ),
                                            children: [
                                              (0, i.jsx)(g.default, {
                                                src:
                                                  (null ===
                                                    (j = (0, b.Eh)(
                                                      null ===
                                                        (N =
                                                          t.attributes
                                                            .authors) ||
                                                        void 0 === N
                                                        ? void 0
                                                        : N[0],
                                                      r
                                                    )) || void 0 === j
                                                    ? void 0
                                                    : j.attributes.img) ||
                                                  "/icons/user.svg",
                                                alt: "User",
                                                width: 20,
                                                height: 20,
                                              }),
                                              null ===
                                                (k = (0, b.Eh)(
                                                  null ===
                                                    (Z =
                                                      t.attributes.authors) ||
                                                    void 0 === Z
                                                    ? void 0
                                                    : Z[0],
                                                  r
                                                )) || void 0 === k
                                                ? void 0
                                                : k.attributes.title,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className: s().button,
                                        href: (
                                          null == t
                                            ? void 0
                                            : null === (C = t.attributes) ||
                                              void 0 === C
                                            ? void 0
                                            : C.slug
                                        )
                                          ? "/blog/".concat(
                                              null == t
                                                ? void 0
                                                : null === (X = t.attributes) ||
                                                  void 0 === X
                                                ? void 0
                                                : X.slug
                                            )
                                          : "/blog#",
                                        children: "Read More",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              l
                            );
                          }),
                  }),
                  (0, i.jsx)(h.default, {
                    className: s().moreButton,
                    color: "primary",
                    disabled: !l || (null == l ? void 0 : l.length) <= p,
                    onClick: () => {
                      w((t) => t + 3);
                    },
                    children: "Show More",
                  }),
                ],
              }),
          ],
        });
      }
    },
    81079: function (t, l, e) {
      "use strict";
      e.r(l),
        e.d(l, {
          default: function () {
            return u;
          },
        });
      var i = e(57437),
        r = e(2265),
        s = e(44839),
        n = e(16609),
        a = e(49582),
        o = e(78002),
        d = e(16463);
      function u(t) {
        let {
            children: l,
            component: e = "div",
            className: u,
            direction: c,
            directionMobile: v = c,
            translateY: h = 0,
            translateX: _ = 0,
            duration: m = 0.8,
            rotateX: f = 0,
            rotateY: g = 0,
            ease: b = "back.out",
            opacity: p = 0,
            animate: w = !0,
            start: x = 80,
            end: y = 60,
            ...j
          } = t,
          N = (0, r.useRef)(null),
          { useGSAP: k, activatedGsap: Z } = (0, n.Z)(),
          C = (0, o.Z)(),
          X = (0, d.usePathname)();
        return (
          k(() => {
            if (
              "/" == X &&
              Z &&
              w &&
              N.current &&
              (null == C ? void 0 : C.width)
            ) {
              let t, l;
              (null == C ? void 0 : C.width) < 992
                ? ((_ = "right" == v ? -200 : "left" == v ? 200 : _),
                  (h = "top" == v ? 200 : "bottom" == v ? -200 : h))
                : ((h = "top" == c ? 200 : "bottom" == c ? -200 : h),
                  (_ = "right" == c ? -200 : "left" == c ? 200 : _));
              let e = a.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == C ? void 0 : C.width) < 992 ? x - 10 : x,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == C ? void 0 : C.width) < 992 ? y - 15 : y - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == C ? void 0 : C.width) > 1440
                    ? _
                    : (null == C ? void 0 : C.width) < 992
                    ? ((null == C ? void 0 : C.width) / 500) * _
                    : ((null == C ? void 0 : C.width) / 1440) * _),
                (l =
                  (null == C ? void 0 : C.width) > 1440
                    ? h
                    : (null == C ? void 0 : C.width) < 992
                    ? ((null == C ? void 0 : C.width) / 500) * h
                    : ((null == C ? void 0 : C.width) / 1440) * h),
                e
                  .from(N.current, {
                    translateY: l,
                    translateX: t,
                    rotateX: f,
                    rotateY: g,
                    opacity: p,
                    duration: m,
                    ease: b,
                  })
                  .to(N.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => e.kill()
              );
            }
          }, [Z, X]),
          (0, i.jsx)(e, { ...j, ref: N, className: (0, s.Z)(u), children: l })
        );
      }
    },
    70499: function (t, l, e) {
      "use strict";
      e.r(l),
        e.d(l, {
          default: function () {
            return h;
          },
        });
      var i = e(57437),
        r = e(87138),
        s = e(60231),
        n = e.n(s),
        a = e(44839),
        o = e(2265),
        d = e(16609),
        u = e(49582),
        c = e(78002),
        v = e(16463);
      function h(t) {
        let {
            href: l,
            className: e,
            children: s,
            target: h,
            onClick: _,
            direction: m,
            directionMobile: f = m,
            translateY: g = 0,
            translateX: b = 0,
            duration: p = 0.8,
            rotateX: w = 0,
            rotateY: x = 0,
            ease: y = "back.out",
            opacity: j = 0,
            animate: N,
            start: k = 80,
            end: Z = 60,
            color: C = "primary",
            disabled: X,
            type: Y = "button",
          } = t,
          P = (0, o.useRef)(null),
          D = (0, o.useRef)(null),
          F = (0, c.Z)(),
          { useGSAP: B, activatedGsap: E } = (0, d.Z)(),
          R = (0, v.usePathname)();
        return (
          B(() => {
            if ("/" == R) {
              let t;
              if (
                (P.current && (t = P),
                D.current && (t = D),
                E && N && t && t.current && (null == F ? void 0 : F.width))
              ) {
                let l, e;
                (null == F ? void 0 : F.width) < 992
                  ? ((b = "right" == f ? -200 : "left" == f ? 200 : b),
                    (g = "top" == f ? 200 : "bottom" == f ? -200 : g))
                  : ((g = "top" == m ? 200 : "bottom" == m ? -200 : g),
                    (b = "right" == m ? -200 : "left" == m ? 200 : b));
                let i = u.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == F ? void 0 : F.width) < 992 ? k - 10 : k,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == F ? void 0 : F.width) < 992 ? Z - 15 : Z - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (l =
                    (null == F ? void 0 : F.width) > 1440
                      ? b
                      : (null == F ? void 0 : F.width) < 992
                      ? ((null == F ? void 0 : F.width) / 500) * b
                      : ((null == F ? void 0 : F.width) / 1440) * b),
                  (e =
                    (null == F ? void 0 : F.width) > 1440
                      ? g
                      : (null == F ? void 0 : F.width) < 992
                      ? ((null == F ? void 0 : F.width) / 500) * g
                      : ((null == F ? void 0 : F.width) / 1440) * g),
                  i
                    .from(t.current, {
                      translateY: e,
                      translateX: l,
                      rotateX: w,
                      rotateY: x,
                      opacity: j,
                      duration: p,
                      ease: y,
                    })
                    .to(t.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => i.kill()
                );
              }
            }
          }, [E, R]),
          (0, i.jsx)(i.Fragment, {
            children: l
              ? h && "_blank" == h
                ? (0, i.jsxs)(r.default, {
                    ref: D,
                    href: l,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: _,
                    className: (0, a.Z)(n().button, e, n()[C]),
                    children: [s, (0, i.jsx)("span", { className: n().wrap })],
                  })
                : (0, i.jsxs)(r.default, {
                    ref: D,
                    href: l,
                    target: h,
                    rel: "",
                    onClick: _,
                    className: (0, a.Z)(n().button, e, n()[C]),
                    children: [s, (0, i.jsx)("span", { className: n().wrap })],
                  })
              : (0, i.jsxs)("button", {
                  type: Y,
                  disabled: X,
                  ref: P,
                  onClick: _,
                  className: (0, a.Z)(n().button, e, n()[C]),
                  children: [s, (0, i.jsx)("span", { className: n().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, l, e) {
      "use strict";
      var i = e(57437),
        r = e(44839),
        s = e(58538),
        n = e.n(s);
      let a = (0, e(2265).forwardRef)((t, l) => {
        let { children: e, className: s, size: a, classic: o, ...d } = t;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            ref: l,
            className: (0, r.Z)(
              n().container,
              s,
              a && n()[a],
              o && n().classic
            ),
            ...d,
            children: e,
          }),
        });
      });
      (a.displayName = "Container"), (l.Z = a);
    },
    43615: function (t, l, e) {
      "use strict";
      e.r(l),
        e.d(l, {
          default: function () {
            return h;
          },
        });
      var i = e(57437),
        r = e(2265),
        s = e(48241),
        n = e.n(s),
        a = e(87138),
        o = e(44839),
        d = e(78002),
        u = e(16609),
        c = e(49582),
        v = e(16463);
      function h(t) {
        let {
            href: l,
            download: e,
            className: s,
            target: h,
            children: _,
            color: m = "primary",
            onClick: f,
            direction: g,
            directionMobile: b = g,
            translateY: p = 0,
            translateX: w = 0,
            duration: x = 0.8,
            rotateX: y = 0,
            rotateY: j = 0,
            ease: N = "back.out",
            opacity: k = 0,
            animate: Z,
            start: C = 80,
            end: X = 60,
            ...Y
          } = t,
          P = (0, d.Z)(),
          D = (0, r.useRef)(null),
          { useGSAP: F, activatedGsap: B } = (0, u.Z)(),
          E = (0, v.usePathname)();
        return (
          F(() => {
            if (
              "/" == E &&
              B &&
              Z &&
              D.current &&
              (null == P ? void 0 : P.width)
            ) {
              let t, l;
              (null == P ? void 0 : P.width) < 992
                ? ((w = "right" == b ? -200 : "left" == b ? 200 : w),
                  (p = "top" == b ? 200 : "bottom" == b ? -200 : p))
                : ((p = "top" == g ? 200 : "bottom" == g ? -200 : p),
                  (w = "right" == g ? -200 : "left" == g ? 200 : w));
              let e = c.ZP.timeline({
                scrollTrigger: {
                  trigger: D.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? C - 10 : C,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? X - 15 : X - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? w
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * w
                    : ((null == P ? void 0 : P.width) / 1440) * w),
                (l =
                  (null == P ? void 0 : P.width) > 1440
                    ? p
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * p
                    : ((null == P ? void 0 : P.width) / 1440) * p),
                e
                  .from(D.current, {
                    translateY: l,
                    translateX: t,
                    rotateX: y,
                    rotateY: j,
                    opacity: k,
                    duration: x,
                    ease: N,
                  })
                  .to(D.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => e.kill()
              );
            }
          }, [P, B, E]),
          (0, i.jsx)(i.Fragment, {
            children:
              "#" === l
                ? (0, i.jsx)("p", {
                    className: (0, o.Z)(n().customlink, n()[m], s),
                    children: _,
                  })
                : h && "_blank" == h
                ? (0, i.jsx)(a.default, {
                    ref: D,
                    download: e,
                    href: l,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, o.Z)(n().customlink, n()[m], s),
                    ...Y,
                    children: _,
                  })
                : (0, i.jsx)(a.default, {
                    ref: D,
                    download: e,
                    href: l,
                    target: h,
                    onClick: f,
                    className: (0, o.Z)(n().customlink, n()[m], s),
                    ...Y,
                    children: _,
                  }),
          })
        );
      }
    },
    60357: function (t) {
      t.exports = {
        container: "style_container__E_htq",
        title: "style_title__Ubdj8",
        list: "style_list__91rgv",
        active: "style_active__VpBw1",
      };
    },
    66391: function (t) {
      t.exports = {
        blog: "style_blog__Mvbds",
        container: "style_container__Zztbd",
        swiper: "style_swiper__1EXBT",
        slide: "style_slide__Hlx0D",
        blogWrapper: "style_blogWrapper__awAK_",
        sliderItem: "style_sliderItem__A2XBi",
        img: "style_img__Gjh2a",
        content: "style_content___IYrX",
        title: "style_title__5zoZj",
        button: "style_button__UC0Zs",
        item: "style_item__7q9xi",
        infos: "style_infos__7wGVA",
        info: "style_info__EjYMe",
        cards: "style_cards__hl507",
        loading: "style_loading__hAETz",
        revealDev: "style_revealDev__uEaq5",
        moreButton: "style_moreButton__kK5LO",
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
    48241: function (t) {
      t.exports = {
        customlink: "style_customlink___bLW0",
        primary: "style_primary__NaDFQ",
        light: "style_light___QhFW",
        dark: "style_dark__F5y8x",
      };
    },
  },
]);
