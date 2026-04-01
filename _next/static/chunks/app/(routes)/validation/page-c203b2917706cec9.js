(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7860],
  {
    65971: function (e, t, l) {
      Promise.resolve().then(l.t.bind(l, 231, 23)),
        Promise.resolve().then(l.bind(l, 35481)),
        Promise.resolve().then(l.t.bind(l, 58538, 23)),
        Promise.resolve().then(l.bind(l, 47984)),
        Promise.resolve().then(l.t.bind(l, 14629, 23)),
        Promise.resolve().then(l.t.bind(l, 59747, 23)),
        Promise.resolve().then(l.bind(l, 21360)),
        Promise.resolve().then(l.bind(l, 87580)),
        Promise.resolve().then(l.bind(l, 84395));
    },
    66648: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return n.a;
        },
      });
      var s = l(55601),
        n = l.n(s);
    },
    87138: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return n.a;
        },
      });
      var s = l(231),
        n = l.n(s);
    },
    55601: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var l in t)
            Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return c;
          },
        });
      let s = l(99920),
        n = l(80497),
        a = l(38173),
        i = s._(l(21241));
      function c(e) {
        let { props: t } = (0, n.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, l] of Object.entries(t)) void 0 === l && delete t[e];
        return { props: t };
      }
      let o = a.Image;
    },
    35481: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return N;
        },
      });
      var s = l(57437),
        n = l(32913),
        a = l(90970),
        i = l.n(a),
        c = l(42625),
        o = l(21360),
        r = l(7628),
        d = l(2265);
      let _ = [
        {
          title: "1. Select the channel",
          desc: "Choose the channel you want to verify from the list below.",
        },
        {
          title: "2. Enter the details",
          desc: "Provide the exact information as it appears in the BLOCKDAG channel, paying attention to uppercase and lowercase letters.",
        },
        {
          title: "3. Review and confirm",
          desc: 'Double-check the information and click "Verify" to confirm.',
        },
      ];
      var u = l(597),
        m = l(70499),
        h = l(62729),
        f = l.n(h),
        y = l(54887),
        v = l(44839),
        p = l(82415),
        x = (e) => {
          let {
              show: t,
              onClose: l,
              children: n,
              register: a,
              modalClass: i,
              closeIcon: c = !0,
            } = e,
            [o, r] = (0, d.useState)(!1);
          (0, d.useEffect)(() => {
            r(!0);
          }, []);
          let _ = (e) => {
              e.preventDefault(), l && l();
            },
            u = t
              ? (0, s.jsxs)("div", {
                  className: ""
                    .concat(f().ModalOverlay, " ")
                    .concat(a ? f().register : ""),
                  children: [
                    (0, s.jsx)("div", {
                      className: f().StyledOverlayClose,
                      onClick: _,
                    }),
                    (0, s.jsx)("div", {
                      className: (0, v.Z)(f().StyledModal),
                      children: (0, s.jsxs)("div", {
                        className: (0, v.Z)(
                          f().StyledModalBody,
                          "modalhere",
                          i
                        ),
                        children: [
                          c &&
                            (0, s.jsx)("div", {
                              className: f().StyledCloseIcon,
                              onClick: _,
                              children: (0, s.jsx)(p.Z.Plus, {}),
                            }),
                          n,
                        ],
                      }),
                    }),
                  ],
                })
              : null;
          if (!o) return null;
          {
            let e = document.getElementById("modal-root");
            return y.createPortal(u, e);
          }
        },
        j = l(47984),
        g = l(87580);
      function N(e) {
        let {} = e,
          [t, l] = (0, d.useState)(""),
          [a, h] = (0, d.useState)(!1),
          [f, y] = (0, d.useState)(null),
          [v, N] = (0, d.useState)(!1),
          [k, w] = (0, d.useState)(!1),
          b = (e) => {
            !e.target.closest(".".concat(i().custom_select)) && a && h(!1);
          };
        (0, d.useEffect)(
          () => (
            document.addEventListener("click", b),
            () => {
              document.removeEventListener("click", b);
            }
          ),
          [a]
        );
        let C =
          "".concat(t && t.split("_")[0]) +
          "".concat(t && void 0 !== t.split("_")[1] ? "..." + t.slice(-3) : "");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.Z, {
              className: i().validation,
              children: (0, s.jsxs)(c.Z, {
                classic: !0,
                children: [
                  (0, s.jsxs)("div", {
                    className: i().content,
                    children: [
                      (0, s.jsx)(o.default, {
                        children:
                          "Protect yourself from fraud and phishing scams by verifying the authenticity of BlockDAG communication channels.",
                      }),
                      (0, s.jsxs)("div", {
                        className: i().inputArea,
                        children: [
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(i().custom_select, " ")
                              .concat(a ? i().active : ""),
                            onClick: () => h((e) => !e),
                            children: [
                              (0, s.jsxs)("span", {
                                translate: "no",
                                className: "".concat(f ? i().selected : ""),
                                children: [
                                  f ? f.title : "Select Channel",
                                  (0, s.jsx)(p.Z.Chevron, {}),
                                ],
                              }),
                              (0, s.jsx)("ul", {
                                children: u.Z.map((e) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      translate: "no",
                                      onClick: () => y(e),
                                      className: f == e ? i().selected : "",
                                      children: e.title,
                                    },
                                    e.title
                                  )
                                ),
                              }),
                            ],
                          }),
                          (0, s.jsx)("input", {
                            type: "email",
                            required: !0,
                            placeholder: f ? "Enter ".concat(f.title) : "",
                            onChange: (e) => l(e.target.value),
                            value: t,
                          }),
                          (0, s.jsx)(m.default, {
                            color: "primary",
                            onClick: () => {
                              if (f) {
                                let e = t.toLowerCase().trim(),
                                  l = (e) => {
                                    try {
                                      return new URL(
                                        e.includes("://")
                                          ? e
                                          : "https://".concat(e)
                                      ).hostname.replace(/^www\./, "");
                                    } catch (e) {
                                      return null;
                                    }
                                  },
                                  s = (e) => {
                                    if (e.includes("@")) return !1;
                                    if (
                                      /^(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
                                        e
                                      )
                                    )
                                      return !0;
                                    try {
                                      return !!new URL(
                                        e.includes("://")
                                          ? e
                                          : "https://".concat(e)
                                      ).hostname;
                                    } catch (e) {
                                      return !1;
                                    }
                                  },
                                  n = l(e);
                                w(
                                  !f.trueValues ||
                                    f.trueValues.some((t) => {
                                      if ("Website" !== f.title)
                                        return e === t.toLowerCase();
                                      {
                                        let a = l(t.toLowerCase());
                                        return n && n === a && s(e);
                                      }
                                    })
                                ),
                                  N(!0);
                              }
                            },
                            children: "Check validation",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: i().cards,
                    children: _.map((e, t) =>
                      (0, s.jsx)(r.Z, { title: e.title, desc: e.desc }, t)
                    ),
                  }),
                ],
              }),
            }),
            (0, s.jsx)(x, {
              show: v,
              onClose: () => N(!1),
              children: (0, s.jsx)("div", {
                className: i().modalBg,
                onClick: () => N(!1),
                children: (0, s.jsxs)("div", {
                  className: i().modal,
                  children: [
                    (0, s.jsx)("div", {
                      className: i().modal_close,
                      onClick: () => N(!1),
                      children: (0, s.jsx)(p.Z.Plus, {}),
                    }),
                    (0, s.jsx)("div", {
                      className: i().modal_icon,
                      children: (0, s.jsx)(j.default, {
                        hero: !0,
                        src: k ? "/images/valid.svg" : "/images/invalid.svg",
                        alt: "BlockDAG",
                      }),
                    }),
                    (0, s.jsx)(g.default, {
                      className: i().modalTitle,
                      size: "sm",
                      children: k
                        ? "Validation Successful"
                        : "Invalid official channel",
                    }),
                    (0, s.jsxs)("div", {
                      className: i().modal_content,
                      children: [
                        (0, s.jsx)("span", {
                          className: i().inputVal,
                          children:
                            (null == f ? void 0 : f.title) === "Website"
                              ? C
                              : t,
                        }),
                        !k &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(o.default, {
                                children:
                                  "The content you inquired is not the official channel of BlockDAG.",
                              }),
                              (0, s.jsx)(o.default, {
                                className: "text-error-400",
                                children:
                                  "Please make sure you’ve entered the correct information.",
                              }),
                              (0, s.jsx)(m.default, {
                                onClick: () => N(!1),
                                children: "GOT IT",
                              }),
                            ],
                          }),
                        k &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(o.default, {
                                className: "text-success-200",
                                children: "Thank you for validation.",
                              }),
                              (0, s.jsx)(m.default, {
                                onClick: () => N(!1),
                                children: "Go Back",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    7628: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = l(57437),
        n = l(44839),
        a = l(9784),
        i = l.n(a),
        c = l(21360),
        o = l(47984);
      function r(e) {
        let {
          icon: t,
          title: l,
          bigTitle: a,
          desc: r,
          descComponent: d,
          vertical: _,
          verticalMobile: u = _,
          shadow: m,
          shadowTop: h,
          light: f,
          dark: y,
          white: v,
          customTitleColor: p,
          customDescColor: x,
          customBorderColor: j,
          style: g,
          className: N,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, n.Z)(
            i().card,
            _ && i().vertical,
            u && i().verticalMobile,
            m && i().shadow,
            h && i().shadowTop,
            f && i().light,
            y && i().dark,
            v && i().white,
            N
          ),
          style: { borderColor: j, ...g },
          children: [
            t &&
              (0, s.jsx)("div", {
                className: i().icon,
                children: (0, s.jsx)(o.default, {
                  src: t,
                  alt: "BlockDAG",
                  width: 0,
                  height: 0,
                }),
              }),
            (0, s.jsxs)("div", {
              className: i().content,
              children: [
                l &&
                  (0, s.jsx)(c.default, {
                    size: a ? "xl" : "lg",
                    className: i().title,
                    style: { color: p },
                    children: l,
                  }),
                r &&
                  (0, s.jsx)(c.default, {
                    component: d,
                    className: i().desc,
                    style: { color: x },
                    children: r,
                  }),
              ],
            }),
          ],
        });
      }
    },
    90970: function (e) {
      e.exports = {
        validation: "style_validation__i9ZuF",
        cards: "style_cards__IDc_0",
        content: "style_content__Kt8Ca",
        inputArea: "style_inputArea__5z29w",
        custom_select: "style_custom_select__BN_Uu",
        selected: "style_selected__Txvpm",
        active: "style_active__lp5BX",
        phone_input: "style_phone_input__TGIxp",
        phoneInput: "style_phoneInput__4_R4p",
        modalBg: "style_modalBg__2zNAD",
        modal: "style_modal__pwQ1G",
        modalTitle: "style_modalTitle__BgWfW",
        modal_close: "style_modal_close__rVQLM",
        modal_icon: "style_modal_icon__pr2zJ",
        modal_content: "style_modal_content__k473C",
        inputVal: "style_inputVal__O5rw_",
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
    62729: function (e) {
      e.exports = {
        ModalOverlay: "style_ModalOverlay__GKtFH",
        register: "style_register__kgVJg",
        fading: "style_fading__rU8wc",
        StyledModal: "style_StyledModal__91AKx",
        StyledOverlayClose: "style_StyledOverlayClose__Y1YEl",
        StyledModalBody: "style_StyledModalBody__IDr7m",
        StyledCloseIcon: "style_StyledCloseIcon__2Rqot",
        fadeIn: "style_fadeIn__si5r7",
      };
    },
    68941: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Anek_Devanagari_665d18', '__Anek_Devanagari_Fallback_665d18'",
          fontStyle: "normal",
        },
        className: "__className_665d18",
      };
    },
    37983: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__DM_Sans_975d1f', '__DM_Sans_Fallback_975d1f'",
          fontStyle: "normal",
        },
        className: "__className_975d1f",
        variable: "__variable_975d1f",
      };
    },
    68425: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_47b904', '__Inter_Fallback_47b904'",
          fontStyle: "normal",
        },
        className: "__className_47b904",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 7645, 9667, 5073, 7603, 922, 9391, 231, 3106, 9012, 2971,
        7023, 1744,
      ],
      function () {
        return e((e.s = 65971));
      }
    ),
      (_N_E = e.O());
  },
]);
