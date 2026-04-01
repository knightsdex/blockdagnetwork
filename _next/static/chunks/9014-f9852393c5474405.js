(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9014],
  {
    70499: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var l = s(57437),
        a = s(87138),
        n = s(60231),
        r = s.n(n),
        i = s(44839),
        c = s(2265),
        o = s(16609),
        d = s(49582),
        _ = s(78002),
        u = s(16463);
      function m(e) {
        let {
            href: t,
            className: s,
            children: n,
            target: m,
            onClick: h,
            direction: p,
            directionMobile: f = p,
            translateY: x = 0,
            translateX: y = 0,
            duration: v = 0.8,
            rotateX: j = 0,
            rotateY: b = 0,
            ease: g = "back.out",
            opacity: N = 0,
            animate: w,
            start: k = 80,
            end: A = 60,
            color: C = "primary",
            disabled: E,
            type: M = "button",
          } = e,
          B = (0, c.useRef)(null),
          z = (0, c.useRef)(null),
          L = (0, _.Z)(),
          { useGSAP: T, activatedGsap: Z } = (0, o.Z)(),
          D = (0, u.usePathname)();
        return (
          T(() => {
            if ("/" == D) {
              let e;
              if (
                (B.current && (e = B),
                z.current && (e = z),
                Z && w && e && e.current && (null == L ? void 0 : L.width))
              ) {
                let t, s;
                (null == L ? void 0 : L.width) < 992
                  ? ((y = "right" == f ? -200 : "left" == f ? 200 : y),
                    (x = "top" == f ? 200 : "bottom" == f ? -200 : x))
                  : ((x = "top" == p ? 200 : "bottom" == p ? -200 : x),
                    (y = "right" == p ? -200 : "left" == p ? 200 : y));
                let l = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == L ? void 0 : L.width) < 992 ? k - 10 : k,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == L ? void 0 : L.width) < 992 ? A - 15 : A - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == L ? void 0 : L.width) > 1440
                      ? y
                      : (null == L ? void 0 : L.width) < 992
                      ? ((null == L ? void 0 : L.width) / 500) * y
                      : ((null == L ? void 0 : L.width) / 1440) * y),
                  (s =
                    (null == L ? void 0 : L.width) > 1440
                      ? x
                      : (null == L ? void 0 : L.width) < 992
                      ? ((null == L ? void 0 : L.width) / 500) * x
                      : ((null == L ? void 0 : L.width) / 1440) * x),
                  l
                    .from(e.current, {
                      translateY: s,
                      translateX: t,
                      rotateX: j,
                      rotateY: b,
                      opacity: N,
                      duration: v,
                      ease: g,
                    })
                    .to(e.current, {
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
          }, [Z, D]),
          (0, l.jsx)(l.Fragment, {
            children: t
              ? m && "_blank" == m
                ? (0, l.jsxs)(a.default, {
                    ref: z,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: h,
                    className: (0, i.Z)(r().button, s, r()[C]),
                    children: [n, (0, l.jsx)("span", { className: r().wrap })],
                  })
                : (0, l.jsxs)(a.default, {
                    ref: z,
                    href: t,
                    target: m,
                    rel: "",
                    onClick: h,
                    className: (0, i.Z)(r().button, s, r()[C]),
                    children: [n, (0, l.jsx)("span", { className: r().wrap })],
                  })
              : (0, l.jsxs)("button", {
                  type: M,
                  disabled: E,
                  ref: B,
                  onClick: h,
                  className: (0, i.Z)(r().button, s, r()[C]),
                  children: [n, (0, l.jsx)("span", { className: r().wrap })],
                }),
          })
        );
      }
    },
    10179: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return h;
        },
      });
      var l = s(57437),
        a = s(2265),
        n = s(821),
        r = s.n(n),
        i = s(81079),
        c = s(44839),
        o = s(70499),
        d = s(13259),
        _ = s(21360),
        u = s(90011),
        m = s(47984);
      function h(e) {
        let { coin: t } = e,
          [s, n] = (0, a.useState)(t ? "coin" : "miner"),
          [h, p] = (0, a.useState)(-1),
          f = [
            {
              title: (0, l.jsxs)("span", {
                children: [
                  "Coin Amount",
                  (0, l.jsx)("span", {
                    className: "d-md",
                    children: " Calculator",
                  }),
                ],
              }),
              value: "coin",
            },
            {
              title: (0, l.jsxs)("span", {
                children: [
                  "Mining Profit",
                  (0, l.jsx)("span", {
                    className: "d-md",
                    children: " Calculator",
                  }),
                ],
              }),
              value: "miner",
            },
          ],
          [x, y] = (0, a.useState)(""),
          [v, j] = (0, a.useState)(100),
          b = (0, a.useRef)(null),
          g = [
            0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.004, 0.0045, 0.005,
            0.006, 0.007, 0.0075, 0.008, 0.0085, 0.009, 0.0095, 0.011, 0.0122,
            0.0136, 0.015, 0.0164, 0.0178, 0.0192, 0.0206, 0.022, 0.0234,
            0.0248, 0.0262, 0.0276, 0.029, 0.0304, 0.0318, 0.0332, 0.0346,
            0.036, 0.0374, 0.0388, 0.0402, 0.0416, 0.043, 0.0444, 0.0458,
            0.0472, 0.0486,
          ],
          [N, w] = (0, a.useState)(0.05),
          [k, A] = (0, a.useState)(100),
          C = (e) => {
            if (b.current) {
              let t = b.current.getBoundingClientRect(),
                s = ((e - t.left) / t.width) * 100;
              j((s = Math.max(0, Math.min(s, 100))));
            }
          };
        (0, a.useEffect)(() => {
          100 == v ? w(0.05) : w(g[Math.floor((44 * v) / 100)]);
        }, [v]),
          (0, a.useEffect)(() => {
            0.05 == N ? A(100) : A(g.findIndex((e) => e == N) + 1);
          }, [N]);
        let E = (e) => {
          if (!e) return "";
          let t = e.split(".");
          return (
            t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            (t[1] ? "." + t[1] : "")
          );
        };
        return (0, l.jsxs)("div", {
          className: r().calculator,
          children: [
            (0, l.jsx)(i.default, {
              direction: "right",
              className: (0, c.Z)(r().tabs),
              children: f.map((e) =>
                (0, l.jsx)(
                  "div",
                  {
                    onClick: () => {
                      n(e.value);
                    },
                    className: (0, c.Z)(
                      r().tabItem,
                      s === e.value && r().active
                    ),
                    children: e.title,
                  },
                  e.value
                )
              ),
            }),
            (0, l.jsxs)("div", {
              className: r().box,
              children: [
                "coin" == s
                  ? (0, l.jsxs)("div", {
                      className: r().coins,
                      children: [
                        (0, l.jsx)(_.default, {
                          className: r().title,
                          size: "lg",
                          children: "How many coins will I mine per day?",
                        }),
                        (0, l.jsxs)("div", {
                          className: r().inputs,
                          children: [
                            (0, l.jsxs)("div", {
                              className: r().formGroup,
                              children: [
                                (0, l.jsx)("label", {
                                  children:
                                    "Enter how much BDAG coins you have",
                                }),
                                (0, l.jsxs)("div", {
                                  className: r().formController,
                                  children: [
                                    (0, l.jsx)("p", { children: "BDAG" }),
                                    (0, l.jsx)("input", {
                                      inputMode: "numeric",
                                      maxLength: 18,
                                      value: E(x),
                                      onChange: (e) => {
                                        let t = e.target.value.replace(
                                          /,/g,
                                          ""
                                        );
                                        /^\d*\.?\d*$/.test(t) && y(t);
                                      },
                                      placeholder: "0.00",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: r().formGroup,
                              children: [
                                (0, l.jsx)("label", { children: "USD Amount" }),
                                (0, l.jsxs)("div", {
                                  className: r().formController,
                                  children: [
                                    (0, l.jsx)("p", { children: "$" }),
                                    (0, l.jsx)("input", {
                                      disabled: !0,
                                      value: E((N * Number(x || 0)).toFixed(2)),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, l.jsxs)("div", {
                      className: r().miners,
                      children: [
                        (0, l.jsx)(_.default, {
                          className: r().title,
                          size: "lg",
                          children: "How many coins will I mine per day?",
                        }),
                        (0, l.jsx)("div", {
                          className: r().cards,
                          children: u.U.filter(
                            (e) => e.isProduct || e.isApp
                          ).map((e, t) =>
                            (0, l.jsxs)(
                              "div",
                              {
                                tabIndex: -1,
                                className: r().card,
                                onMouseLeave: () => {
                                  p(-1);
                                },
                                children: [
                                  (0, l.jsxs)(_.default, {
                                    className: r().cardTitle,
                                    children: [
                                      e.title,
                                      " ",
                                      (0, l.jsxs)("span", {
                                        onClick: () => {
                                          p(t);
                                        },
                                        className: r().icon,
                                        children: [
                                          (0, l.jsx)(m.default, {
                                            src: "/icons/info-circle.svg",
                                            alt: "info",
                                          }),
                                          (0, l.jsx)("span", {
                                            onMouseLeave: () => {
                                              p(-1);
                                            },
                                            className: (0, c.Z)(
                                              r().tooltip,
                                              h == t && r().active
                                            ),
                                            children: e.features.map((e, t) =>
                                              (0, l.jsxs)(
                                                "span",
                                                {
                                                  className: r().tip,
                                                  children: [
                                                    (0, l.jsx)(_.default, {
                                                      className: "font-normal",
                                                      component: "span",
                                                      size: "sm",
                                                      children: e.title,
                                                    }),
                                                    (0, l.jsx)(_.default, {
                                                      className: "font-bold",
                                                      component: "span",
                                                      size: "sm",
                                                      children: e.desc,
                                                    }),
                                                  ],
                                                },
                                                t
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)(_.default, {
                                    size: "xl",
                                    children:
                                      e.earn &&
                                      (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          "$",
                                          (Number(N) * e.earn).toFixed(2),
                                        ],
                                      }),
                                  }),
                                  (0, l.jsxs)(_.default, {
                                    children: [e.earn, " BDAG"],
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                (0, l.jsxs)("div", {
                  className: r().barArea,
                  children: [
                    (0, l.jsxs)(_.default, {
                      size: "sm",
                      children: [
                        "Move the slider to see how much your ",
                        (0, l.jsx)("b", { children: "BDAG" }),
                        " will be worth at different price targets!",
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      ref: b,
                      className: r().bar,
                      onMouseDown: () => {
                        let e = (e) => {
                            C(e.clientX);
                          },
                          t = () => {
                            document.removeEventListener("mousemove", e),
                              document.removeEventListener("mouseup", t);
                          };
                        document.addEventListener("mousemove", e),
                          document.addEventListener("mouseup", t);
                      },
                      onTouchStart: () => {
                        let e = () => {
                            document.body.classList.add("no-scroll");
                          },
                          t = () => {
                            document.body.classList.remove("no-scroll");
                          },
                          s = (t) => {
                            e(), C(t.touches[0].clientX);
                          },
                          l = () => {
                            t(),
                              document.removeEventListener("touchmove", s),
                              document.removeEventListener("touchend", l);
                          };
                        document.addEventListener("touchmove", s),
                          document.addEventListener("touchend", l);
                      },
                      children: [
                        (0, l.jsx)("div", {
                          className: r().progress,
                          style: { width: "".concat(v - 2.5, "%") },
                          children: (0, l.jsxs)("span", {
                            className: r().percent,
                            children: [Math.round(v), "%"],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          tabIndex: -1,
                          className: r().thumb,
                        }),
                        (0, l.jsx)("div", {
                          className: r().remaining,
                          style: { width: "".concat(100 - v - 2.5, "%") },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: r().selected,
                  children: [
                    (0, l.jsx)(_.default, {
                      size: "sm",
                      children:
                        100 == k
                          ? (0, l.jsx)(_.default, {
                              className: r().big,
                              size: "lg",
                              component: "span",
                              children: "Launch",
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                "Stage",
                                " ",
                                (0, l.jsx)(_.default, {
                                  className: r().big,
                                  size: "lg",
                                  component: "span",
                                  children: k,
                                }),
                              ],
                            }),
                    }),
                    (0, l.jsxs)(_.default, {
                      size: "sm",
                      children: [
                        "Price",
                        " ",
                        (0, l.jsxs)(_.default, {
                          className: r().big,
                          size: "lg",
                          component: "span",
                          children: [N, " $BDAG"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: r().btns,
              children: [
                (0, l.jsx)(o.default, {
                  color: "dark",
                  href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                  children: "Buy Now",
                }),
                (0, l.jsx)(o.default, {
                  color: "light",
                  href: d.zA,
                  children: "How To Buy",
                }),
              ],
            }),
          ],
        });
      }
    },
    93639: function (e) {
      e.exports = {
        calculator: "style_calculator__Ex7un",
        container: "style_container__mMiyh",
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
    821: function (e) {
      e.exports = {
        calculator: "style_calculator__5UHYM",
        thumb: "style_thumb__HR41y",
        tabs: "style_tabs__S8H6b",
        tabItem: "style_tabItem__JsB2S",
        active: "style_active__1Yrok",
        btns: "style_btns__6cRgI",
        box: "style_box__P4d5J",
        miners: "style_miners__3UAmd",
        coins: "style_coins__mi9VT",
        inputs: "style_inputs__g5nZF",
        formGroup: "style_formGroup__8kJRT",
        formController: "style_formController__kBuhk",
        title: "style_title__rXABb",
        cards: "style_cards__gDMgJ",
        card: "style_card__tPiNZ",
        cardTitle: "style_cardTitle__9zoTl",
        icon: "style_icon__Ez85y",
        tooltip: "style_tooltip__gws30",
        tip: "style_tip__hcgC3",
        barArea: "style_barArea__rVaM_",
        bar: "style_bar__V59_K",
        progress: "style_progress__cgEf3",
        percent: "style_percent__6raBl",
        remaining: "style_remaining__drxK_",
        selected: "style_selected__TZOjj",
        big: "style_big__MgAeM",
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
  },
]);
