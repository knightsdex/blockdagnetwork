(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9012],
  {
    70499: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return h;
          },
        });
      var n = r(57437),
        o = r(87138),
        i = r(60231),
        l = r.n(i),
        a = r(44839),
        s = r(2265),
        c = r(16609),
        d = r(49582),
        u = r(78002),
        w = r(16463);
      function h(t) {
        let {
            href: e,
            className: r,
            children: i,
            target: h,
            onClick: k,
            direction: p,
            directionMobile: g = p,
            translateY: m = 0,
            translateX: _ = 0,
            duration: b = 0.8,
            rotateX: f = 0,
            rotateY: v = 0,
            ease: L = "back.out",
            opacity: x = 0,
            animate: C,
            start: y = 80,
            end: j = 60,
            color: Z = "primary",
            disabled: M,
            type: V = "button",
          } = t,
          N = (0, s.useRef)(null),
          B = (0, s.useRef)(null),
          E = (0, u.Z)(),
          { useGSAP: Q, activatedGsap: X } = (0, c.Z)(),
          Y = (0, w.usePathname)();
        return (
          Q(() => {
            if ("/" == Y) {
              let t;
              if (
                (N.current && (t = N),
                B.current && (t = B),
                X && C && t && t.current && (null == E ? void 0 : E.width))
              ) {
                let e, r;
                (null == E ? void 0 : E.width) < 992
                  ? ((_ = "right" == g ? -200 : "left" == g ? 200 : _),
                    (m = "top" == g ? 200 : "bottom" == g ? -200 : m))
                  : ((m = "top" == p ? 200 : "bottom" == p ? -200 : m),
                    (_ = "right" == p ? -200 : "left" == p ? 200 : _));
                let n = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top ".concat(
                      (null == E ? void 0 : E.width) < 992 ? y - 10 : y,
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
                  (e =
                    (null == E ? void 0 : E.width) > 1440
                      ? _
                      : (null == E ? void 0 : E.width) < 992
                      ? ((null == E ? void 0 : E.width) / 500) * _
                      : ((null == E ? void 0 : E.width) / 1440) * _),
                  (r =
                    (null == E ? void 0 : E.width) > 1440
                      ? m
                      : (null == E ? void 0 : E.width) < 992
                      ? ((null == E ? void 0 : E.width) / 500) * m
                      : ((null == E ? void 0 : E.width) / 1440) * m),
                  n
                    .from(t.current, {
                      translateY: r,
                      translateX: e,
                      rotateX: f,
                      rotateY: v,
                      opacity: x,
                      duration: b,
                      ease: L,
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
          }, [X, Y]),
          (0, n.jsx)(n.Fragment, {
            children: e
              ? h && "_blank" == h
                ? (0, n.jsxs)(o.default, {
                    ref: B,
                    href: e,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: k,
                    className: (0, a.Z)(l().button, r, l()[Z]),
                    children: [i, (0, n.jsx)("span", { className: l().wrap })],
                  })
                : (0, n.jsxs)(o.default, {
                    ref: B,
                    href: e,
                    target: h,
                    rel: "",
                    onClick: k,
                    className: (0, a.Z)(l().button, r, l()[Z]),
                    children: [i, (0, n.jsx)("span", { className: l().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: V,
                  disabled: M,
                  ref: N,
                  onClick: k,
                  className: (0, a.Z)(l().button, r, l()[Z]),
                  children: [i, (0, n.jsx)("span", { className: l().wrap })],
                }),
          })
        );
      }
    },
    42625: function (t, e, r) {
      "use strict";
      var n = r(57437),
        o = r(44839),
        i = r(58538),
        l = r.n(i);
      let a = (0, r(2265).forwardRef)((t, e) => {
        let { children: r, className: i, size: a, classic: s, ...c } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: e,
            className: (0, o.Z)(
              l().container,
              i,
              a && l()[a],
              s && l().classic
            ),
            ...c,
            children: r,
          }),
        });
      });
      (a.displayName = "Container"), (e.Z = a);
    },
    82415: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(57437);
      r(2265);
      var o = {
        Chevron: function (t) {
          return (0, n.jsx)("svg", {
            ...t,
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
        Arrowdown: function (t) {
          return (0, n.jsx)("svg", {
            ...t,
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
        Shipping: function (t) {
          return (0, n.jsxs)("svg", {
            ...t,
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
        Minus: function (t) {
          return (0, n.jsx)("svg", {
            ...t,
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
        Plus: function (t) {
          return (0, n.jsx)("svg", {
            ...t,
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
        Inter: function (t) {
          return (0, n.jsxs)("svg", {
            ...t,
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
        ExternalLink: function (t) {
          return (0, n.jsx)("svg", {
            ...t,
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
    47984: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var n = r(57437),
        o = r(79124),
        i = r(66648);
      r(2265);
      var l = r(69665),
        a = r.n(l),
        s = r(44839);
      function c(t) {
        let {
            alt: e = "BlockDAG",
            src: r,
            width: l,
            height: c,
            hero: d,
            className: u,
            ...w
          } = t,
          h = (0, o.Z)();
        return (0, n.jsx)(n.Fragment, {
          children:
            d || w.priority
              ? (0, n.jsx)(
                  i.default,
                  {
                    className: (0, s.Z)(a().img, u),
                    src: r,
                    alt: e,
                    width: l || 0,
                    height: c || 0,
                    ...w,
                  },
                  1
                )
              : h
              ? (0, n.jsx)(
                  i.default,
                  {
                    className: (0, s.Z)(a().img, u),
                    src: r,
                    alt: e,
                    width: 0,
                    height: 0,
                    ...w,
                  },
                  2
                )
              : (0, n.jsx)(
                  i.default,
                  {
                    className: (0, s.Z)(a().loadingImg, u),
                    src: "/cube.webp",
                    alt: e,
                    width: 0,
                    height: 0,
                    ...w,
                  },
                  3
                ),
        });
      }
    },
    32913: function (t, e, r) {
      "use strict";
      var n = r(57437),
        o = r(44839),
        i = r(14629),
        l = r.n(i);
      let a = (0, r(2265).forwardRef)((t, e) => {
        let { children: r, className: i, color: a = "dark", ...s } = t;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: e,
            className: (0, o.Z)(l().section, l()[a], i),
            ...s,
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
            return w;
          },
        });
      var n = r(57437),
        o = r(2265),
        i = r(8544),
        l = r.n(i),
        a = r(44839),
        s = r(16609),
        c = r(49582),
        d = r(78002),
        u = r(16463);
      function w(t) {
        let {
            children: e,
            component: r = "p",
            size: i = "md",
            className: w,
            style: h,
            direction: k,
            directionMobile: p = k,
            translateY: g = 0,
            translateX: m = 0,
            duration: _ = 0.8,
            rotateX: b = 0,
            rotateY: f = 0,
            ease: v = "back.out",
            opacity: L = 0,
            animate: x,
            start: C = 80,
            end: y = 60,
            onClick: j,
          } = t,
          Z = (0, o.useRef)(null),
          M = (0, d.Z)(),
          { useGSAP: V, activatedGsap: N } = (0, s.Z)(),
          B = (0, u.usePathname)();
        return (
          V(() => {
            if (
              "/" == B &&
              N &&
              x &&
              Z.current &&
              (null == M ? void 0 : M.width)
            ) {
              let t, e;
              (null == M ? void 0 : M.width) < 992
                ? ((m = "right" == p ? -200 : "left" == p ? 200 : m),
                  (g = "top" == p ? 200 : "bottom" == p ? -200 : g))
                : ((g = "top" == k ? 200 : "bottom" == k ? -200 : g),
                  (m = "right" == k ? -200 : "left" == k ? 200 : m));
              let r = c.ZP.timeline({
                scrollTrigger: {
                  trigger: Z.current,
                  start: "top ".concat(
                    (null == M ? void 0 : M.width) < 992 ? C - 10 : C,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == M ? void 0 : M.width) < 992 ? y - 15 : y - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == M ? void 0 : M.width) > 1440
                    ? m
                    : (null == M ? void 0 : M.width) < 992
                    ? ((null == M ? void 0 : M.width) / 500) * m
                    : ((null == M ? void 0 : M.width) / 1440) * m),
                (e =
                  (null == M ? void 0 : M.width) > 1440
                    ? g
                    : (null == M ? void 0 : M.width) < 992
                    ? ((null == M ? void 0 : M.width) / 500) * g
                    : ((null == M ? void 0 : M.width) / 1440) * g),
                r
                  .from(Z.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: b,
                    rotateY: f,
                    opacity: L,
                    duration: _,
                    ease: v,
                  })
                  .to(Z.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [N, B]),
          (0, n.jsx)(r, {
            onClick: j,
            ref: Z,
            className: (0, a.Z)(l().text, l()[i], w),
            style: h,
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
            return h;
          },
        });
      var n = r(57437),
        o = r(2265),
        i = r(15681),
        l = r.n(i),
        a = r(44839),
        s = r(16700),
        c = r(78002),
        d = r(16609),
        u = r(49582),
        w = r(16463);
      function h(t) {
        let {
            children: e,
            size: r = "md",
            className: i,
            family: h = "secondary",
            component: k = "md" == r ? "h2" : "h6",
            variant: p,
            uppercase: g,
            direction: m,
            directionMobile: _ = m,
            translateY: b = 0,
            translateX: f = 0,
            duration: v = 0.8,
            rotateX: L = 0,
            rotateY: x = 0,
            ease: C = "back.out",
            opacity: y = 0,
            animate: j,
            start: Z = 80,
            end: M = 60,
          } = t,
          V = (0, o.useRef)(null),
          N = (0, c.Z)(),
          { useGSAP: B, activatedGsap: E } = (0, d.Z)(),
          Q = (0, w.usePathname)();
        return (
          B(() => {
            if (
              "/" == Q &&
              E &&
              j &&
              V.current &&
              (null == N ? void 0 : N.width)
            ) {
              let t, e;
              (null == N ? void 0 : N.width) < 992
                ? ((f = "right" == _ ? -200 : "left" == _ ? 200 : f),
                  (b = "top" == _ ? 200 : "bottom" == _ ? -200 : b))
                : ((b = "top" == m ? 200 : "bottom" == m ? -200 : b),
                  (f = "right" == m ? -200 : "left" == m ? 200 : f));
              let r = u.ZP.timeline({
                scrollTrigger: {
                  trigger: V.current,
                  start: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? Z - 10 : Z,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == N ? void 0 : N.width) < 992 ? M - 15 : M - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == N ? void 0 : N.width) > 1440
                    ? f
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * f
                    : ((null == N ? void 0 : N.width) / 1440) * f),
                (e =
                  (null == N ? void 0 : N.width) > 1440
                    ? b
                    : (null == N ? void 0 : N.width) < 992
                    ? ((null == N ? void 0 : N.width) / 500) * b
                    : ((null == N ? void 0 : N.width) / 1440) * b),
                r
                  .from(V.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: L,
                    rotateY: x,
                    opacity: y,
                    duration: v,
                    ease: C,
                  })
                  .to(V.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [E, Q]),
          (0, n.jsx)(k, {
            ref: V,
            className: (0, a.Z)(
              l().title,
              l()[p || k],
              "secondary" == h ? s.BD : s.T$,
              l()[r],
              i,
              g ? "uppercase" : ""
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
            return w;
          },
        });
      var n = r(57437),
        o = r(2265),
        i = r(15681),
        l = r.n(i),
        a = r(44839),
        s = r(78002),
        c = r(16609),
        d = r(49582),
        u = r(16463);
      function w(t) {
        let {
            children: e,
            component: r = "h5",
            className: i,
            color: w = "primary",
            direction: h,
            directionMobile: k = h,
            translateY: p = 0,
            translateX: g = 0,
            duration: m = 0.8,
            rotateX: _ = 0,
            rotateY: b = 0,
            ease: f = "back.out",
            opacity: v = 0,
            animate: L,
            start: x = 80,
            end: C = 60,
          } = t,
          y = (0, o.useRef)(null),
          j = (0, s.Z)(),
          { useGSAP: Z, activatedGsap: M } = (0, c.Z)(),
          V = (0, u.usePathname)();
        return (
          Z(() => {
            if (
              "/" == V &&
              M &&
              L &&
              y.current &&
              (null == j ? void 0 : j.width)
            ) {
              let t, e;
              (null == j ? void 0 : j.width) < 992
                ? ((g = "right" == k ? -200 : "left" == k ? 200 : g),
                  (p = "top" == k ? 200 : "bottom" == k ? -200 : p))
                : ((p = "top" == h ? 200 : "bottom" == h ? -200 : p),
                  (g = "right" == h ? -200 : "left" == h ? 200 : g));
              let r = d.ZP.timeline({
                scrollTrigger: {
                  trigger: y.current,
                  start: "top ".concat(
                    (null == j ? void 0 : j.width) < 992 ? x - 10 : x,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == j ? void 0 : j.width) < 992 ? C - 15 : C - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (t =
                  (null == j ? void 0 : j.width) > 1440
                    ? g
                    : (null == j ? void 0 : j.width) < 992
                    ? ((null == j ? void 0 : j.width) / 500) * g
                    : ((null == j ? void 0 : j.width) / 1440) * g),
                (e =
                  (null == j ? void 0 : j.width) > 1440
                    ? p
                    : (null == j ? void 0 : j.width) < 992
                    ? ((null == j ? void 0 : j.width) / 500) * p
                    : ((null == j ? void 0 : j.width) / 1440) * p),
                r
                  .from(y.current, {
                    translateY: e,
                    translateX: t,
                    rotateX: _,
                    rotateY: b,
                    opacity: v,
                    duration: m,
                    ease: f,
                  })
                  .to(y.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => r.kill()
              );
            }
          }, [M, V]),
          (0, n.jsx)(r, {
            ref: y,
            className: (0, a.Z)(l().subtitle, l()[w], i),
            children: e,
          })
        );
      }
    },
    16700: function (t, e, r) {
      "use strict";
      r.d(e, {
        BD: function () {
          return d;
        },
        T$: function () {
          return c;
        },
      });
      var n = r(37983),
        o = r.n(n),
        i = r(68941),
        l = r.n(i),
        a = r(68425),
        s = r.n(a);
      let c = o().className,
        d = l().className;
      s().className;
    },
    79124: function (t, e, r) {
      "use strict";
      var n = r(2265),
        o = r(44630);
      e.Z = () => {
        let [t, e] = (0, n.useState)(!1),
          r = (0, o.Z)(),
          i = () => {
            e(!0);
          };
        return (
          (0, n.useEffect)(() => {
            r > 1 && e(!0);
          }, [r]),
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
    597: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = [
        {
          title: "Website",
          trueValues: [
            
          ],
        },
        {
          title: "Twitter",
          trueValues: [
            "https://twitter.com/blockdagnetwork",
            "twitter.com/blockdagnetwork",
          ],
        },
        {
          title: "Telegram",
          trueValues: [
            "https://t.me/blockDAGnetworkOfficial",
            "t.me/blockdagnetworkofficial",
          ],
        },
        {
          title: "Instagram",
          trueValues: [
            "https://www.instagram.com/blockdagnetwork/",
            "https://instagram.com/blockdagnetwork",
            "instagram.com/blockdagnetwork",
            "www.instagram.com/blockdagnetwork",
          ],
        },
        {
          title: "Discord",
          trueValues: [
            "https://discord.com/invite/Q7BxghMVyu",
            "discord.com/invite/Q7BxghMVyu",
            "www.discord.com/invite/Q7BxghMVyu",
          ],
        },
        {
          title: "Facebook",
          trueValues: [
            "https://www.facebook.com/profile.php?id=61557699651392&mibextid=LQQJ4d",
            "www.facebook.com/profile.php?id=61557699651392&mibextid=LQQJ4d",
            "facebook.com/profile.php?id=61557699651392&mibextid=LQQJ4d",
            "https://www.facebook.com/people/Blockdag-Network/61557699651392/?mibextid=LQQJ4d",
            "www.facebook.com/people/Blockdag-Network/61557699651392/?mibextid=LQQJ4d",
            "facebook.com/people/Blockdag-Network/61557699651392/?mibextid=LQQJ4d",
          ],
        },
        {
          title: "Private Client Manager Name",
          trueValues: [
            "peter palag",
            "simon jose",
            "deepak kumar",
            "mason okes",
            "hunter brown",
            "jackson levy",
            "mathew jones",
            "scott ashby",
            "james middleton",
          ],
        },
        {
          title: "Private Client Manager E-mail",
          trueValues: [
            "peter.palag@blockdag.network",
            "simon.jose@blockdag.network",
            "deepak.kumar@blockdag.network",
            "mason.okes@blockdag.network",
            "hunter@blockdag.network",
            "jackson@blockdag.network",
            "mathew.jones@blockdag.network",
            "scott.ashby@blockdag.network",
            "james@blockdag.network",
          ],
        },
      ];
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
  },
]);
