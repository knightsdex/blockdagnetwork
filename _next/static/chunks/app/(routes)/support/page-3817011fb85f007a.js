(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7013],
  {
    99230: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 82253)),
        Promise.resolve().then(r.bind(r, 41296)),
        Promise.resolve().then(r.bind(r, 81079)),
        Promise.resolve().then(r.bind(r, 45419)),
        Promise.resolve().then(r.t.bind(r, 14629, 23)),
        Promise.resolve().then(r.t.bind(r, 5319, 23)),
        Promise.resolve().then(r.t.bind(r, 58538, 23)),
        Promise.resolve().then(r.t.bind(r, 18803, 23)),
        Promise.resolve().then(r.bind(r, 21360)),
        Promise.resolve().then(r.bind(r, 87580)),
        Promise.resolve().then(r.bind(r, 84395));
    },
    87138: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return s.a;
        },
      });
      var n = r(231),
        s = r.n(n);
    },
    82253: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return f;
        },
      });
      var n = r(57437),
        s = r(42625),
        i = r(75524),
        l = r.n(i),
        o = r(84395),
        a = r(87580),
        c = r(21360),
        d = r(32913),
        u = r(66648),
        h = r(70499);
      function f(e) {
        let {} = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(d.Z, {
              color: "white",
              className: l().support,
              children: [
                (0, n.jsx)("div", { className: l().headerArea }),
                (0, n.jsxs)(s.Z, {
                  className: l().container,
                  children: [
                    (0, n.jsxs)("div", {
                      className: l().content,
                      children: [
                        (0, n.jsx)(o.default, { children: "SUPPORT" }),
                        (0, n.jsxs)(a.default, {
                          children: [
                            "Need Help? ",
                            (0, n.jsx)("br", {}),
                            "We",
                            "'",
                            "re Here For You!",
                          ],
                        }),
                        (0, n.jsxs)(c.default, {
                          className: l().text,
                          children: [
                            "If you have a question or need assistance, you will be directed to our Resources and FAQ page. This is the first step, and it",
                            "'",
                            "s required, as it covers the most common questions and issues.",
                          ],
                        }),
                        (0, n.jsx)(c.default, {
                          className: l().text,
                          children:
                            "Please review the Resources and FAQ before proceeding.",
                        }),
                        (0, n.jsxs)("div", {
                          className: l().btns,
                          children: [
                            (0, n.jsx)(h.default, {
                              className: l().button,
                              href: "https://academy.blockdag.network/faqs",
                              target: "_blank",
                              children: "FAQ",
                            }),
                            (0, n.jsx)(h.default, {
                              className: l().buttonNew,
                              href: "https://academy.blockdag.network/resources",
                              target: "_blank",
                              children: "Resources",
                            }),
                          ],
                        }),
                        (0, n.jsx)(c.default, {
                          className: l().text,
                          children:
                            "If your question is not answered there, you can then submit a support request. Provide as much detail as possible so the team can review and respond efficiently.",
                        }),
                        (0, n.jsx)(c.default, {
                          className: l().text,
                          children:
                            "This process is in place to keep support clear, fast, and structured.",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: l().imgArea,
                      children: (0, n.jsx)(u.default, {
                        src: "/images/hero/support.webp",
                        alt: "support",
                        width: 415,
                        height: 540,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", { id: "support-widget" }),
          ],
        });
      }
    },
    41296: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(57437),
        s = r(82415),
        i = r(12900),
        l = r.n(i),
        o = r(2265);
      function a(e) {
        let { q: t, a: r, ul: i, index: a, className: c } = e,
          [d, u] = (0, o.useState)(0),
          [h, f] = (0, o.useState)(0),
          p = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            p.current && (d == a ? f(p.current.scrollHeight) : f(0));
          }, [d, a, p]),
          (0, n.jsxs)("div", {
            className: ""
              .concat(l().accordion, " ")
              .concat(d == a ? l().active : "", " ")
              .concat(c),
            children: [
              (0, n.jsxs)("h5", {
                onClick: () => u(d == a ? -1 : a),
                children: [
                  t,
                  d == a
                    ? (0, n.jsx)(s.Z.Minus, { className: l().icon })
                    : (0, n.jsx)(s.Z.Plus, { className: l().icon }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: l().dropdown,
                style: { height: h },
                ref: p,
                children: [
                  (0, n.jsx)("div", {
                    className: l().answerWrapper,
                    children: (function (e) {
                      let t = e.split(/(\n+)/);
                      return (0, n.jsx)("p", {
                        children: t.map((e, t) => {
                          if (e.match(/^\n+$/)) {
                            let r = e.length;
                            return (0, n.jsx)(
                              o.Fragment,
                              {
                                children: Array.from({ length: r }).map(
                                  (e, t) => (0, n.jsx)("br", {}, t)
                                ),
                              },
                              t
                            );
                          }
                          return (0, n.jsx)(
                            o.Fragment,
                            {
                              children: (function (e) {
                                let t;
                                let r = /([^\s]+)-\((https?:\/\/[^\s)]+)\)/g,
                                  s = [],
                                  i = 0;
                                for (; null !== (t = r.exec(e)); )
                                  t.index > i && s.push(e.slice(i, t.index)),
                                    s.push(
                                      (0, n.jsx)(
                                        "a",
                                        {
                                          href: t[2],
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: t[1],
                                        },
                                        t.index
                                      )
                                    ),
                                    (i = t.index + t[0].length);
                                return (
                                  i < e.length && s.push(e.slice(i)),
                                  s.length > 0 ? s : e
                                );
                              })(e),
                            },
                            t
                          );
                        }),
                      });
                    })(r),
                  }),
                  i &&
                    (0, n.jsx)("ul", {
                      className: l().list,
                      children: i.map((e, t) =>
                        (0, n.jsx)("li", { children: e }, t)
                      ),
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    81079: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return d;
          },
        });
      var n = r(57437),
        s = r(2265),
        i = r(44839),
        l = r(16609),
        o = r(49582),
        a = r(78002),
        c = r(16463);
      function d(e) {
        let {
            children: t,
            component: r = "div",
            className: d,
            direction: u,
            directionMobile: h = u,
            translateY: f = 0,
            translateX: p = 0,
            duration: x = 0.8,
            rotateX: _ = 0,
            rotateY: w = 0,
            ease: m = "back.out",
            opacity: v = 0,
            animate: g = !0,
            start: C = 80,
            end: j = 60,
            ...L
          } = e,
          b = (0, s.useRef)(null),
          { useGSAP: y, activatedGsap: k } = (0, l.Z)(),
          N = (0, a.Z)(),
          Z = (0, c.usePathname)();
        return (
          y(() => {
            if (
              "/" == Z &&
              k &&
              g &&
              b.current &&
              (null == N ? void 0 : N.width)
            ) {
              let e, t;
              (null == N ? void 0 : N.width) < 992
                ? ((p = "right" == h ? -200 : "left" == h ? 200 : p),
                  (f = "top" == h ? 200 : "bottom" == h ? -200 : f))
                : ((f = "top" == u ? 200 : "bottom" == u ? -200 : f),
                  (p = "right" == u ? -200 : "left" == u ? 200 : p));
              let r = o.ZP.timeline({
                scrollTrigger: {
                  trigger: b.current,
                  start: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? C - 10 : C,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? j - 15 : j - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == N ? void 0 : N.width) > 1440
                    ? p
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * p
                    : ((null == N ? void 0 : N.width) / 1440) * p),
                (t =
                  (null == N ? void 0 : N.width) > 1440
                    ? f
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * f
                    : ((null == N ? void 0 : N.width) / 1440) * f),
                r
                  .from(b.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: _,
                    rotateY: w,
                    opacity: v,
                    duration: x,
                    ease: m,
                  })
                  .to(b.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [k, Z]),
          (0, n.jsx)(r, { ...L, ref: b, className: (0, i.Z)(d), children: t })
        );
      }
    },
    70499: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r(57437),
        s = r(87138),
        i = r(60231),
        l = r.n(i),
        o = r(44839),
        a = r(2265),
        c = r(16609),
        d = r(49582),
        u = r(78002),
        h = r(16463);
      function f(e) {
        let {
            href: t,
            className: r,
            children: i,
            target: f,
            onClick: p,
            direction: x,
            directionMobile: _ = x,
            translateY: w = 0,
            translateX: m = 0,
            duration: v = 0.8,
            rotateX: g = 0,
            rotateY: C = 0,
            ease: j = "back.out",
            opacity: L = 0,
            animate: b,
            start: y = 80,
            end: k = 60,
            color: N = "primary",
            disabled: Z,
            type: M = "button",
          } = e,
          P = (0, a.useRef)(null),
          V = (0, a.useRef)(null),
          A = (0, u.Z)(),
          { useGSAP: F, activatedGsap: B } = (0, c.Z)(),
          H = (0, h.usePathname)();
        return (
          F(() => {
            if ("/" == H) {
              let e;
              if (
                (P.current && (e = P),
                V.current && (e = V),
                B && b && e && e.current && (null == A ? void 0 : A.width))
              ) {
                let t, r;
                (null == A ? void 0 : A.width) < 992
                  ? ((m = "right" == _ ? -200 : "left" == _ ? 200 : m),
                    (w = "top" == _ ? 200 : "bottom" == _ ? -200 : w))
                  : ((w = "top" == x ? 200 : "bottom" == x ? -200 : w),
                    (m = "right" == x ? -200 : "left" == x ? 200 : m));
                let n = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == A ? void 0 : A.width) < 992 ? y - 10 : y,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == A ? void 0 : A.width) < 992 ? k - 15 : k - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == A ? void 0 : A.width) > 1440
                      ? m
                      : (null == A ? void 0 : A.width) < 992
                      ? ((null == A ? void 0 : A.width) / 500) * m
                      : ((null == A ? void 0 : A.width) / 1440) * m),
                  (r =
                    (null == A ? void 0 : A.width) > 1440
                      ? w
                      : (null == A ? void 0 : A.width) < 992
                      ? ((null == A ? void 0 : A.width) / 500) * w
                      : ((null == A ? void 0 : A.width) / 1440) * w),
                  n
                    .from(e.current, {
                      translateY: r,
                      translateX: t,
                      rotateX: g,
                      rotateY: C,
                      opacity: L,
                      duration: v,
                      ease: j,
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
          }, [B, H]),
          (0, n.jsx)(n.Fragment, {
            children: t
              ? f && "_blank" == f
                ? (0, n.jsxs)(s.default, {
                    ref: V,
                    href: t,
                    target: f,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: p,
                    className: (0, o.Z)(l().button, r, l()[N]),
                    children: [i, (0, n.jsx)("span", { className: l().wrap })],
                  })
                : (0, n.jsxs)(s.default, {
                    ref: V,
                    href: t,
                    target: f,
                    rel: "",
                    onClick: p,
                    className: (0, o.Z)(l().button, r, l()[N]),
                    children: [i, (0, n.jsx)("span", { className: l().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: M,
                  disabled: Z,
                  ref: P,
                  onClick: p,
                  className: (0, o.Z)(l().button, r, l()[N]),
                  children: [i, (0, n.jsx)("span", { className: l().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(44839),
        i = r(58538),
        l = r.n(i);
      let o = (0, r(2265).forwardRef)((e, t) => {
        let { children: r, className: i, size: o, classic: a, ...c } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, s.Z)(
              l().container,
              i,
              o && l()[o],
              a && l().classic
            ),
            ...c,
            children: r,
          }),
        });
      });
      (o.displayName = "Container"), (t.Z = o);
    },
    82415: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(57437);
      r(2265);
      var s = {
        Chevron: function (e) {
          return (0, n.jsx)("svg", {
            ...e,
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M4.5 6.75L9 11.25L13.5 6.75",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Arrowdown: function (e) {
          return (0, n.jsx)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M17.5 7.5L7.5 17.5M7.5 17.5H17.5M7.5 17.5V7.5",
              stroke: "currentColor",
              strokeWidth: "2.20542",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Shipping: function (e) {
          return (0, n.jsxs)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("g", {
                clipPath: "url(#clip0_100_17247)",
                children: (0, n.jsx)("path", {
                  d: "M23.853 5.60763C23.853 5.30315 23.6691 5.02881 23.3875 4.91308L12.7821 0.556314C12.5993 0.481229 12.3943 0.481229 12.2115 0.556314L1.60616 4.91308C1.32454 5.02876 1.14062 5.30315 1.14062 5.60763V19.3924C1.14062 19.6968 1.32449 19.9712 1.60616 20.0869L12.2115 24.4437C12.3923 24.518 12.5956 24.5196 12.7812 24.4436C12.7903 24.4406 12.3887 24.6053 23.3875 20.0869C23.6691 19.9712 23.853 19.6968 23.853 19.3924V5.60763ZM12.4968 9.21579L8.58915 7.6105L17.034 3.92655L21.203 5.63921L12.4968 9.21579ZM2.64234 6.79098L6.01375 8.17599V12.0835C6.01375 12.4981 6.34995 12.8343 6.76461 12.8343C7.17927 12.8343 7.51547 12.4981 7.51547 12.0835V8.79291L11.746 10.5308V22.6289L2.64234 18.8891V6.79098ZM12.4968 2.06259L15.0998 3.1319L6.65489 6.81585L3.7906 5.63916L12.4968 2.06259ZM13.2477 10.5308L22.3513 6.79098V18.8891L13.2477 22.6289V10.5308Z",
                  fill: "#4AB3FF",
                }),
              }),
              (0, n.jsx)("defs", {
                children: (0, n.jsx)("clipPath", {
                  id: "clip0_100_17247",
                  children: (0, n.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white",
                    transform: "translate(0.5 0.5)",
                  }),
                }),
              }),
            ],
          });
        },
        Minus: function (e) {
          return (0, n.jsx)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M5.5 12.5H19.5",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Plus: function (e) {
          return (0, n.jsx)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M12.5 5.5V19.5M5.5 12.5H19.5",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Inter: function (e) {
          return (0, n.jsxs)("svg", {
            ...e,
            width: "155",
            height: "155",
            viewBox: "0 0 155 155",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M77.7652 147.61C116.456 147.61 147.821 116.245 147.821 77.5544C147.821 38.8638 116.456 7.49892 77.7652 7.49892C39.0746 7.49892 7.70972 38.8638 7.70972 77.5544C7.70972 116.245 39.0746 147.61 77.7652 147.61Z",
                fill: "#001EA0",
              }),
              (0, n.jsx)("path", {
                d: "M77.7613 0.580471C35.2133 0.580471 0.799072 34.9946 0.799072 77.5427C0.799072 120.091 35.2133 154.505 77.7613 154.505C120.309 154.505 154.724 120.091 154.724 77.5427C154.724 34.9946 120.309 0.580471 77.7613 0.580471ZM77.7613 143.504C41.3707 143.504 11.7999 113.933 11.7999 77.5427C11.7999 41.1521 41.3707 11.5813 77.7613 11.5813C114.152 11.5813 143.723 41.1521 143.723 77.5427C143.723 113.933 114.152 143.504 77.7613 143.504Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                d: "M77.7578 11.57C41.3672 11.57 11.7964 41.1408 11.7964 77.5314C11.7964 113.922 41.3672 143.493 77.7578 143.493C114.148 143.493 143.719 113.922 143.719 77.5314C143.719 41.1408 114.148 11.57 77.7578 11.57ZM39.3799 99.0878L37.9464 115.464C28.4876 105.571 22.7755 92.2679 22.7755 77.5314C22.7755 63.5659 27.9447 50.8167 36.5129 41.1408L41.6821 52.3588C36.7301 59.3958 33.7654 68.1921 33.7654 77.5314C33.7654 85.3395 35.8505 92.7023 39.369 99.0769L39.3799 99.0878ZM53.4539 126.899C49.7182 125.031 46.3083 122.827 43.007 120.188L48.8386 54.661L40.5961 36.9598C43.4522 34.4295 46.4278 32.2359 49.6096 30.2486L66.985 67.4102V93.4625L58.0801 74.3278L53.4648 126.878L53.4539 126.899ZM77.7578 132.503C71.0465 132.503 64.6719 131.297 58.8512 129.202L59.8394 117.658C63.6837 119.417 67.7561 120.622 72.1542 121.176V33.8865C67.5389 34.4404 63.1407 35.7544 59.177 37.6222L54.5616 27.7291C61.5987 24.4278 69.4067 22.5599 77.7578 22.5599C86.1089 22.5599 93.9169 24.4278 100.954 27.7291L96.3386 37.6222C92.3857 35.7544 87.9876 34.4295 83.3614 33.8865V121.176C87.6509 120.622 91.8319 119.417 95.6762 117.658L96.6644 129.202C90.8328 131.287 84.4582 132.503 77.7578 132.503ZM102.051 126.899L97.4354 74.3495L88.5306 93.4842V67.4319L105.906 30.2703C109.099 32.2467 112.063 34.4512 114.919 36.9815L106.677 54.6827L112.509 120.21C109.207 122.849 105.797 125.042 102.062 126.921L102.051 126.899ZM117.547 115.464L116.114 99.0878C119.633 92.7132 121.718 85.3503 121.718 77.5423C121.718 68.1921 118.753 59.4067 113.801 52.3696L118.97 41.1516C127.549 50.8276 132.708 63.5768 132.708 77.5423C132.708 92.2788 126.995 105.582 117.537 115.475L117.547 115.464Z",
                fill: "#001EA0",
              }),
              (0, n.jsx)("path", {
                d: "M37.9617 115.466L39.3952 99.0893C35.8766 92.7147 33.7916 85.3518 33.7916 77.5438C33.7916 68.1936 36.7563 59.4082 41.7083 52.3711L36.5391 41.1531C27.96 50.8291 22.8016 63.5783 22.8016 77.5438C22.8016 92.2803 28.5138 105.583 37.9725 115.476L37.9617 115.466ZM117.552 115.466C127.011 105.572 132.723 92.2694 132.723 77.5329C132.723 63.5674 127.554 50.8182 118.985 41.1423L113.816 52.3603C118.768 59.3973 121.733 68.1936 121.733 77.5329C121.733 85.341 119.648 92.7038 116.129 99.0784L117.563 115.455L117.552 115.466ZM40.6006 36.9722L48.843 54.6734L43.0114 120.2C46.3127 122.839 49.7227 125.033 53.4584 126.912L58.0737 74.3619L66.9786 93.4966V67.4443L49.6032 30.2827C46.4105 32.2591 43.4458 34.4636 40.5897 36.9939L40.6006 36.9722ZM88.535 93.4857L97.4399 74.351L102.055 126.901C105.791 125.033 109.201 122.828 112.502 120.19L106.671 54.6625L114.913 36.9613C112.057 34.431 109.081 32.2374 105.9 30.2501L88.5241 67.4117V93.464L88.535 93.4857ZM54.5661 27.7415L59.1814 37.6346C63.1343 35.7668 67.5325 34.4419 72.1587 33.8989V121.189C67.7605 120.635 63.6882 119.429 59.8438 117.67L58.8556 129.214C64.6872 131.299 71.0618 132.515 77.7622 132.515C84.4626 132.515 90.8481 131.31 96.6689 129.214L95.6806 117.67C91.8363 119.429 87.6554 120.635 83.3658 121.189V33.888C87.9811 34.4419 92.3793 35.7559 96.3431 37.6238L100.958 27.7306C93.9214 24.4293 86.1133 22.5615 77.7622 22.5615C69.4112 22.5615 61.6031 24.4293 54.5661 27.7306V27.7415Z",
                fill: "white",
              }),
            ],
          });
        },
        ExternalLink: function (e) {
          return (0, n.jsx)("svg", {
            ...e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, n.jsx)("path", {
              d: "M6 18L18 6M18 6H9M18 6V15",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
      };
    },
    45419: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return p;
        },
      });
      var n = r(57437),
        s = r(42625),
        i = r(76003),
        l = r.n(i),
        o = r(21360),
        a = r(47984),
        c = r(32913),
        d = r(87580),
        u = r(70499),
        h = r(13259),
        f = r(44839);
      function p(e) {
        let { color: t } = e;
        return (0, n.jsx)(c.Z, {
          className: l().section,
          color: t || "primary",
          children: (0, n.jsxs)(s.Z, {
            className: l().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(a.default, {
                  className: l().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, n.jsx)(d.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, n.jsxs)(o.default, {
                className: (0, f.Z)(l().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, n.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, n.jsxs)("div", {
                className: l().btns,
                children: [
                  (0, n.jsx)(u.default, {
                    href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, n.jsx)(u.default, {
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
    32913: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(44839),
        i = r(14629),
        l = r.n(i);
      let o = (0, r(2265).forwardRef)((e, t) => {
        let { children: r, className: i, color: o = "dark", ...a } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, s.Z)(l().section, l()[o], i),
            ...a,
            children: r,
          }),
        });
      });
      (o.displayName = "Section"), (t.Z = o);
    },
    5319: function (e) {
      e.exports = {
        faqs: "style_faqs__aODmp",
        container: "style_container__sLQJ4",
      };
    },
    75524: function (e) {
      e.exports = {
        support: "style_support___YdiV",
        headerArea: "style_headerArea__NJBx7",
        container: "style_container__75CWR",
        imgArea: "style_imgArea__Lvjfp",
        text: "style_text__F9n0Q",
        btns: "style_btns__dNiOe",
        button: "style_button__4htzH",
        buttonNew: "style_buttonNew__GEPWn",
      };
    },
    12900: function (e) {
      e.exports = {
        accordion: "style_accordion__d4F3Z",
        active: "style_active__nnABF",
        dropdown: "style_dropdown__p0IDv",
        list: "style_list__4_UCr",
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
        9667, 3561, 1899, 947, 5073, 922, 9391, 231, 3106, 8048, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 99230));
      }
    ),
      (_N_E = e.O());
  },
]);
