(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4505],
  {
    96592: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 38173, 23)),
        Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 19e3)),
        Promise.resolve().then(i.t.bind(i, 46105, 23)),
        Promise.resolve().then(i.t.bind(i, 93278, 23)),
        Promise.resolve().then(i.t.bind(i, 97661, 23)),
        Promise.resolve().then(i.bind(i, 62100)),
        Promise.resolve().then(i.t.bind(i, 80851, 23)),
        Promise.resolve().then(i.bind(i, 81079)),
        Promise.resolve().then(i.t.bind(i, 58538, 23));
    },
    19e3: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return r;
        },
      });
      var s = i(57437),
        a = i(2265),
        l = i(43271),
        n = i.n(l);
      function r() {
        let [e, t] = (0, a.useState)(0),
          i = (e) => {
            t(Math.max(0, e));
          },
          l = (e) => {
            if (!e) return "";
            let t = e.split(".");
            return (
              t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              (t[1] ? "." + t[1] : "")
            );
          };
        return (0, s.jsxs)("section", {
          className: n().section,
          children: [
            (0, s.jsxs)("div", {
              className: n().container,
              children: [
                (0, s.jsxs)("div", {
                  className: n().headerBox,
                  children: [
                    (0, s.jsx)("span", {
                      className: n().label,
                      children: "CALCULATOR",
                    }),
                    (0, s.jsx)("h2", {
                      className: n().heading,
                      children: "Reward Calculator",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: n().box,
                  children: [
                    (0, s.jsxs)("div", {
                      className: n().inputArea,
                      children: [
                        (0, s.jsx)("p", {
                          className: n().inputLabel,
                          children: "Enter the BDAG you are staking",
                        }),
                        (0, s.jsxs)("div", {
                          className: n().formController,
                          children: [
                            (0, s.jsx)("input", {
                              inputMode: "numeric",
                              maxLength: 18,
                              value: e > 0 ? l(e.toString()) : "",
                              onChange: (e) => {
                                let t = e.target.value.replace(/,/g, "");
                                /^\d*\.?\d*$/.test(t) && i(Number(t || 0));
                              },
                              placeholder: "0.00",
                            }),
                            (0, s.jsx)("span", {
                              className: n().inputSuffix,
                              children: "BDAG",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: n().rewardArea,
                      children: [
                        (0, s.jsxs)("p", {
                          className: n().rewardLabel,
                          children: [
                            "Reward after 1 epoch",
                            " ",
                            (0, s.jsx)("span", {
                              className: n().rewardLabelLight,
                              children: "(based on BDAG staked on slider)",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("p", {
                          className: n().rewardValue,
                          children: [
                            l((0.121 * e).toFixed(2)),
                            " ",
                            (0, s.jsx)("span", {
                              className: n().rewardSuffix,
                              children: "BDAG",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className: n().disclaimer,
                  children:
                    "This calculation is an estimate and serves as an illustration of rewards earned. Claims will be made available after 4 epochs.",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: n().heading2,
              children: (0, s.jsx)("h2", {
                className: n().heading2Title,
                children: "Don't miss out on this BDAG Staking opportunity!",
              }),
            }),
          ],
        });
      }
    },
    62100: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return h;
        },
      });
      var s = i(57437),
        a = i(2265),
        l = i(44839),
        n = i(81079),
        r = i(68505),
        _ = i.n(r),
        o = i(42625),
        d = i(5540),
        c = i(53267);
      let u = [
        {
          date: "Phase 1",
          description: "Information page with staking process",
        },
        { date: "Phase 2", description: "Stake to main pool. Stake, Unstake" },
        {
          date: "Phase 3",
          description:
            "Expanding to trading futures on LBank, BitMart & Coinstore",
        },
        {
          date: "Phase 4",
          description:
            "See performance and choose to stake against a specific pool.",
        },
      ];
      function h(e) {
        let {} = e,
          [t, i] = (0, a.useState)(0);
        return (0, s.jsx)("section", {
          className: _().timeline,
          children: (0, s.jsxs)(o.Z, {
            className: _().container,
            children: [
              (0, s.jsx)(n.default, {
                direction: "left",
                className: _().title,
                component: "div",
                children: (0, s.jsx)("h2", { children: "Staking Timeline" }),
              }),
              (0, s.jsx)("div", {
                className: _().timeline,
                children: (0, s.jsx)(c.tq, {
                  className: _().swiper,
                  modules: [d.tl, d.s5],
                  spaceBetween: 16,
                  slidesPerView: 1.2,
                  centeredSlides: !0,
                  onSlideChange: (e) => i(e.activeIndex),
                  breakpoints: {
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                  },
                  children: u.map((e, i) =>
                    (0, s.jsx)(
                      c.o5,
                      {
                        children: (0, s.jsxs)("div", {
                          className: (0, l.Z)(
                            _().card,
                            i === t && _().cardActive
                          ),
                          children: [
                            (0, s.jsx)("span", {
                              className: _().date,
                              children: e.date,
                            }),
                            (0, s.jsx)("p", {
                              className: _().description,
                              children: e.description,
                            }),
                          ],
                        }),
                      },
                      e.date
                    )
                  ),
                }),
              }),
              (0, s.jsx)("div", {
                className: _().paginationTrack,
                "aria-hidden": !0,
                children: (0, s.jsx)("div", {
                  className: _().paginationFill,
                  style: {
                    width: "".concat(100 / u.length, "%"),
                    transform: "translateX(".concat(100 * t, "%)"),
                  },
                }),
              }),
            ],
          }),
        });
      }
    },
    81079: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return d;
          },
        });
      var s = i(57437),
        a = i(2265),
        l = i(44839),
        n = i(16609),
        r = i(49582),
        _ = i(78002),
        o = i(16463);
      function d(e) {
        let {
            children: t,
            component: i = "div",
            className: d,
            direction: c,
            directionMobile: u = c,
            translateY: h = 0,
            translateX: p = 0,
            duration: m = 0.8,
            rotateX: y = 0,
            rotateY: f = 0,
            ease: g = "back.out",
            opacity: x = 0,
            animate: b = !0,
            start: v = 80,
            end: w = 60,
            ...N
          } = e,
          j = (0, a.useRef)(null),
          { useGSAP: A, activatedGsap: k } = (0, n.Z)(),
          L = (0, _.Z)(),
          S = (0, o.usePathname)();
        return (
          A(() => {
            if (
              "/" == S &&
              k &&
              b &&
              j.current &&
              (null == L ? void 0 : L.width)
            ) {
              let e, t;
              (null == L ? void 0 : L.width) < 992
                ? ((p = "right" == u ? -200 : "left" == u ? 200 : p),
                  (h = "top" == u ? 200 : "bottom" == u ? -200 : h))
                : ((h = "top" == c ? 200 : "bottom" == c ? -200 : h),
                  (p = "right" == c ? -200 : "left" == c ? 200 : p));
              let i = r.ZP.timeline({
                scrollTrigger: {
                  trigger: j.current,
                  start: "top ".concat(
                    (null == L ? void 0 : L.width) < 992 ? v - 10 : v,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == L ? void 0 : L.width) < 992 ? w - 15 : w - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == L ? void 0 : L.width) > 1440
                    ? p
                    : (null == L ? void 0 : L.width) < 992
                    ? ((null == L ? void 0 : L.width) / 500) * p
                    : ((null == L ? void 0 : L.width) / 1440) * p),
                (t =
                  (null == L ? void 0 : L.width) > 1440
                    ? h
                    : (null == L ? void 0 : L.width) < 992
                    ? ((null == L ? void 0 : L.width) / 500) * h
                    : ((null == L ? void 0 : L.width) / 1440) * h),
                i
                  .from(j.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: y,
                    rotateY: f,
                    opacity: x,
                    duration: m,
                    ease: g,
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
          }, [k, S]),
          (0, s.jsx)(i, { ...N, ref: j, className: (0, l.Z)(d), children: t })
        );
      }
    },
    42625: function (e, t, i) {
      "use strict";
      var s = i(57437),
        a = i(44839),
        l = i(58538),
        n = i.n(l);
      let r = (0, i(2265).forwardRef)((e, t) => {
        let { children: i, className: l, size: r, classic: _, ...o } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            ref: t,
            className: (0, a.Z)(
              n().container,
              l,
              r && n()[r],
              _ && n().classic
            ),
            ...o,
            children: i,
          }),
        });
      });
      (r.displayName = "Container"), (t.Z = r);
    },
    43271: function (e) {
      e.exports = {
        section: "style_section__LNSt9",
        container: "style_container__C1S8F",
        headerBox: "style_headerBox__ixjiz",
        label: "style_label__57ln_",
        heading: "style_heading___xV9a",
        box: "style_box__b1AqX",
        inputArea: "style_inputArea__0G9nV",
        inputLabel: "style_inputLabel__w0u6b",
        formController: "style_formController__34_Ls",
        inputSuffix: "style_inputSuffix__Pu8V2",
        barArea: "style_barArea__RBIcq",
        bar: "style_bar__yt9aQ",
        progress: "style_progress__O5tFx",
        progressLabel: "style_progressLabel__tT2NN",
        thumb: "style_thumb__oSjL3",
        remaining: "style_remaining__oScgD",
        rewardArea: "style_rewardArea__xjANr",
        rewardLabel: "style_rewardLabel__s2CYi",
        rewardLabelLight: "style_rewardLabelLight__O0vFB",
        rewardValue: "style_rewardValue__zhVBD",
        rewardSuffix: "style_rewardSuffix__QyqcD",
        info: "style_info__yG6Ax",
        infoItem: "style_infoItem__CQSAh",
        infoLabel: "style_infoLabel__seASm",
        infoValue: "style_infoValue__xgou1",
        disclaimer: "style_disclaimer__dbIjY",
        heading2: "style_heading2__551xS",
        heading2Title: "style_heading2Title__B5HMY",
      };
    },
    93278: function (e) {
      e.exports = {
        section: "style_section__LebU_",
        wrap: "style_wrap__lRrHr",
        imageWrap: "style_imageWrap__yBbXq",
        content: "style_content___oi6D",
        title: "style_title__bV_6B",
        desc: "style_desc__gZWTh",
        button: "style_button__tjMYZ",
        heading2: "style_heading2__zloy4",
        heading2Title: "style_heading2Title__RO8Ky",
      };
    },
    97661: function (e) {
      e.exports = {
        guide: "style_guide__XuINO",
        title: "style_title__ecbap",
        guideCard: "style_guideCard__MQbev",
        step: "style_step__L8l9c",
        cardTitle: "style_cardTitle__0sY5N",
        description: "style_description__A7Pou",
        imageWrapper: "style_imageWrapper__3JKcM",
      };
    },
    46105: function (e) {
      e.exports = {
        hero: "style_hero__Z8J2k",
        title: "style_title__YmRIg",
        subtitle: "style_subtitle__B4pE3",
        imageWrap: "style_imageWrap__Ma0ZA",
      };
    },
    68505: function (e) {
      e.exports = {
        timeline: "style_timeline__fz3c4",
        container: "style_container__L3Okd",
        title: "style_title__4_WT3",
        swiper: "style_swiper__A2uPz",
        card: "style_card__Yrk3O",
        date: "style_date__jLQUh",
        description: "style_description__ciQZ7",
        cardActive: "style_cardActive__FOMMD",
        paginationTrack: "style_paginationTrack__3kxEZ",
        paginationFill: "style_paginationFill__fYz_z",
      };
    },
    80851: function (e) {
      e.exports = {
        whatIsStaking: "style_whatIsStaking__i_ZHt",
        title: "style_title__5Dxz2",
        description: "style_description__nOm3P",
        list: "style_list__UiA5e",
        button: "style_button__fAoEU",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [9667, 6519, 922, 9391, 231, 493, 3106, 2971, 7023, 1744],
      function () {
        return e((e.s = 96592));
      }
    ),
      (_N_E = e.O());
  },
]);
