(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4197],
  {
    23929: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.bind(n, 8871)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.t.bind(n, 59747, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    87138: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var i = n(231),
        r = n.n(i);
    },
    8871: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return y;
        },
      });
      var i = n(57437),
        r = n(32913),
        l = n(36959),
        s = n.n(l),
        o = n(42625),
        a = n(58350),
        c = n(7628),
        d = n(21360),
        h = n(43615),
        u = n(44839),
        p = n(87138),
        _ = n(2265),
        m = n(78002);
      function y(e) {
        let {} = e,
          [t, n] = (0, _.useState)(new Set()),
          l = (0, _.useRef)([]),
          y = (0, m.Z)();
        (0, _.useEffect)(() => {
          {
            let e = new IntersectionObserver(
              (t) => {
                t.forEach((t) => {
                  if (t.isIntersecting) {
                    let i = parseInt(
                      t.target.getAttribute("data-index") || "0"
                    );
                    n((e) => new Set(Array.from(e).concat([i]))),
                      e.unobserve(t.target);
                  }
                });
              },
              { rootMargin: "50px", threshold: 0.1 }
            );
            return (
              l.current.forEach((t) => {
                t && e.observe(t);
              }),
              () => e.disconnect()
            );
          }
        }, [null == y ? void 0 : y.width]);
        let f = (e, t) =>
          (0, i.jsx)("iframe", {
            src: e,
            frameBorder: "0",
            allow: "autoplay; fullscreen; picture-in-picture; clipboard-write",
            title: t,
            loading: "lazy",
            className: s().videoIframe,
          });
        return (0, i.jsx)(r.Z, {
          className: s().keynotes,
          children: (0, i.jsxs)(o.Z, {
            classic: !0,
            children: [
              (0, i.jsx)("div", {
                className: s().videos,
                children: [
                  {
                    title: "Keynote 5",
                    date: "14.03.2026",
                    src: "//play.vidyard.com/u9MGyF6GY4gCR31rLgCUWY.html?",
                    link: "/../blockdag-whitepaper-r2.pdf",
                    linkText: "READ WHITEPAPER",
                    new: !0,
                  },
                  {
                    title: "Keynote 4",
                    date: "26.11.2025",
                    src: "//play.vidyard.com/4yjLAUDS8p3UcxHKG5nM5z.html?",
                    link: "/../blockdag-whitepaper-r2.pdf",
                    linkText: "READ WHITEPAPER",
                  },
                  {
                    title: "Miner Unboxing Video",
                    date: "04.07.2025",
                    src: "//play.vidyard.com/X7i67Vxfp3bQm5BH65BxfV.html?",
                    link: "/../blockdag-whitepaper-r2.pdf",
                    linkText: "READ WHITEPAPER",
                  },
                  {
                    title: "Keynote 1",
                    date: "10.10.2023",
                    src: "//play.vidyard.com/cQq84kEbaaaywLkJHTCgkM.html?",
                    videoTitle: "BlockDAG - Keynote",
                    link: "/../blockdag-whitepaper-r2.pdf",
                    linkText: "READ WHITEPAPER",
                  },
                  {
                    title: "Keynote 2",
                    date: "03.06.2024",
                    src: "//play.vidyard.com/jexAt5CStYjAtmrJpoeDVc.html?",
                    videoTitle: "BlockDAG - Keynote 2",
                    link: "/../blockdag-litepaper-r2.pdf",
                    linkText: "READ LITEPAPER",
                  },
                  {
                    title: "Keynote 3",
                    date: "28.03.2025",
                    src: "//play.vidyard.com/xAoioRxqVcV6V3yZZTFPYX.html?",
                    videoTitle: "BlockDAG - Keynote 3",
                  },
                ].map((e, n) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      className: (0, u.Z)(s().item),
                      children: [
                        (0, i.jsx)(c.Z, {
                          desc: (0, i.jsxs)("div", {
                            className: (0, u.Z)(s().card, e.new && s().new),
                            children: [
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)(d.default, {
                                    size: "lg",
                                    className: "font-bold text-white",
                                    children: e.title,
                                  }),
                                  (0, i.jsxs)(d.default, {
                                    children: [
                                      "Release Date: ",
                                      (0, i.jsx)("br", {}),
                                      e.date,
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: (0, u.Z)(s().video, "d-sm"),
                                children: (0, i.jsx)("div", {
                                  ref: (e) => {
                                    l.current[n] = e;
                                  },
                                  "data-index": n,
                                  className: s().videoContainer,
                                  children: t.has(n) && f(e.src, e.videoTitle),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: s().btns,
                                children:
                                  e.link &&
                                  (0, i.jsx)(h.default, {
                                    color: "light",
                                    href: e.link,
                                    target: "_blank",
                                    children: e.linkText,
                                  }),
                              }),
                            ],
                          }),
                          descComponent: "div",
                        }),
                        (0, i.jsx)("div", {
                          className: (0, u.Z)(s().video, s().videoDesktop),
                          children: (0, i.jsx)("div", {
                            ref: (e) => {
                              l.current[n] = e;
                            },
                            "data-index": n,
                            className: s().videoContainer,
                            children: t.has(n) && f(e.src, e.videoTitle),
                          }),
                        }),
                      ],
                    },
                    n
                  )
                ),
              }),
              (0, i.jsx)(a.Z, {
                align: "left",
                subtitle: "ANNOUNCEMENT",
                title: (0, i.jsx)(i.Fragment, {
                  children:
                    "The next major update will be the highly anticipated Launch Note! The date will be announced soon.",
                }),
                desc: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "To purchase coins, navigate to the BUY section on our website. Click on BUY, then connect your wallet here:",
                    " ",
                    (0, i.jsx)(p.default, {
                      href: "https://purchase.blockdag.network/",
                      children: "https://purchase.blockdag.network/",
                    }),
                    ".",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    "Refer anyone to purchase BDAG coins and receive a 10% referral bonus. By connecting your wallet, you can verify your token balance, Referrals and Referral Earnings on the purchase page.",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    "The shipment of BDAG miners is scheduled to begin in 2025. For comprehensive shipping details, please refer to",
                    " ",
                    (0, i.jsx)(p.default, {
                      href: "https://blockdag.network/shipping-policy",
                      children: "https://blockdag.network/shipping-policy",
                    }),
                    ". Should you require assistance with returns, our support team at",
                    (0, i.jsx)(p.default, {
                      href: "mailto:support@blockdag.network",
                      children: "support@blockdag.network",
                    }),
                    "is at your service.",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    'Upon purchasing, the BDAG coins will be deposited into the same wallet used for the transaction. You can calculate your earning potential on calculator page. You can view the number of BDAG coins you own in "Coin Balance" after your connect your wallet on the BUY page.',
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    'Moreover, to view the number of miners in your possession, connect your wallet and navigate to "Owned Devices" on the buy page',
                    (0, i.jsx)(p.default, {
                      href: "https://purchase.blockdag.network/",
                      children: "https://purchase.blockdag.network/",
                    }),
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    "Our X30 and X100 miners, enabling you to mine both BTC and BDAG coins. The development of the X1 model has been completed, with ongoing updates regularly released. You can directly download the app from the Apple App Store, Huawei App Gallery, and Amazon App Store. Android users can also download the APK version directly.",
                    (0, i.jsx)("br", {}),
                    (0, i.jsx)("br", {}),
                    "The X1 miner is now available on the Apple App Store. For Android users, the app can be downloaded from the Huawei App Gallery, the Amazon App Store, or directly via the Android APK.",
                    (0, i.jsx)("br", {}),
                    "We will also release a technical whitepaper and provide an updates section on GitHub to continuously track our project's development. Please use the validator tool to verify you are using the original links/channels. Stay tuned for the next keynote release.",
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    7628: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(57437),
        r = n(44839),
        l = n(9784),
        s = n.n(l),
        o = n(21360),
        a = n(47984);
      function c(e) {
        let {
          icon: t,
          title: n,
          bigTitle: l,
          desc: c,
          descComponent: d,
          vertical: h,
          verticalMobile: u = h,
          shadow: p,
          shadowTop: _,
          light: m,
          dark: y,
          white: f,
          customTitleColor: v,
          customDescColor: g,
          customBorderColor: x,
          style: b,
          className: k,
        } = e;
        return (0, i.jsxs)("div", {
          className: (0, r.Z)(
            s().card,
            h && s().vertical,
            u && s().verticalMobile,
            p && s().shadow,
            _ && s().shadowTop,
            m && s().light,
            y && s().dark,
            f && s().white,
            k
          ),
          style: { borderColor: x, ...b },
          children: [
            t &&
              (0, i.jsx)("div", {
                className: s().icon,
                children: (0, i.jsx)(a.default, {
                  src: t,
                  alt: "BlockDAG",
                  width: 0,
                  height: 0,
                }),
              }),
            (0, i.jsxs)("div", {
              className: s().content,
              children: [
                n &&
                  (0, i.jsx)(o.default, {
                    size: l ? "xl" : "lg",
                    className: s().title,
                    style: { color: v },
                    children: n,
                  }),
                c &&
                  (0, i.jsx)(o.default, {
                    component: d,
                    className: s().desc,
                    style: { color: g },
                    children: c,
                  }),
              ],
            }),
          ],
        });
      }
    },
    42625: function (e, t, n) {
      "use strict";
      var i = n(57437),
        r = n(44839),
        l = n(58538),
        s = n.n(l);
      let o = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: l, size: o, classic: a, ...c } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            ref: t,
            className: (0, r.Z)(
              s().container,
              l,
              o && s()[o],
              a && s().classic
            ),
            ...c,
            children: n,
          }),
        });
      });
      (o.displayName = "Container"), (t.Z = o);
    },
    43615: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n(57437),
        r = n(2265),
        l = n(48241),
        s = n.n(l),
        o = n(87138),
        a = n(44839),
        c = n(78002),
        d = n(16609),
        h = n(49582),
        u = n(16463);
      function p(e) {
        let {
            href: t,
            download: n,
            className: l,
            target: p,
            children: _,
            color: m = "primary",
            onClick: y,
            direction: f,
            directionMobile: v = f,
            translateY: g = 0,
            translateX: x = 0,
            duration: b = 0.8,
            rotateX: k = 0,
            rotateY: w = 0,
            ease: j = "back.out",
            opacity: A = 0,
            animate: N,
            start: T = 80,
            end: Z = 60,
            ...E
          } = e,
          P = (0, c.Z)(),
          D = (0, r.useRef)(null),
          { useGSAP: B, activatedGsap: R } = (0, d.Z)(),
          C = (0, u.usePathname)();
        return (
          B(() => {
            if (
              "/" == C &&
              R &&
              N &&
              D.current &&
              (null == P ? void 0 : P.width)
            ) {
              let e, t;
              (null == P ? void 0 : P.width) < 992
                ? ((x = "right" == v ? -200 : "left" == v ? 200 : x),
                  (g = "top" == v ? 200 : "bottom" == v ? -200 : g))
                : ((g = "top" == f ? 200 : "bottom" == f ? -200 : g),
                  (x = "right" == f ? -200 : "left" == f ? 200 : x));
              let n = h.ZP.timeline({
                scrollTrigger: {
                  trigger: D.current,
                  start: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? T - 10 : T,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == P ? void 0 : P.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == P ? void 0 : P.width) > 1440
                    ? x
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * x
                    : ((null == P ? void 0 : P.width) / 1440) * x),
                (t =
                  (null == P ? void 0 : P.width) > 1440
                    ? g
                    : (null == P ? void 0 : P.width) < 992
                    ? ((null == P ? void 0 : P.width) / 500) * g
                    : ((null == P ? void 0 : P.width) / 1440) * g),
                n
                  .from(D.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: k,
                    rotateY: w,
                    opacity: A,
                    duration: b,
                    ease: j,
                  })
                  .to(D.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [P, R, C]),
          (0, i.jsx)(i.Fragment, {
            children:
              "#" === t
                ? (0, i.jsx)("p", {
                    className: (0, a.Z)(s().customlink, s()[m], l),
                    children: _,
                  })
                : p && "_blank" == p
                ? (0, i.jsx)(o.default, {
                    ref: D,
                    download: n,
                    href: t,
                    target: p,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: y,
                    className: (0, a.Z)(s().customlink, s()[m], l),
                    ...E,
                    children: _,
                  })
                : (0, i.jsx)(o.default, {
                    ref: D,
                    download: n,
                    href: t,
                    target: p,
                    onClick: y,
                    className: (0, a.Z)(s().customlink, s()[m], l),
                    ...E,
                    children: _,
                  }),
          })
        );
      }
    },
    58350: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(57437),
        r = n(44839),
        l = n(21360),
        s = n(87580),
        o = n(84395),
        a = n(18803),
        c = n.n(a);
      function d(e) {
        let {
          subtitle: t,
          subtitleColor: n,
          title: a,
          bigdesc: d,
          titleBottomContent: h,
          largedesc: u,
          desc: p,
          subtitleComponent: _,
          titleComponent: m,
          align: y = "center",
          alignMobile: f = y,
          bg: v = "dark",
          animate: g = !0,
          direction: x = "right",
          maxWidth: b,
          className: k,
          largedescClass: w,
          bigdescClass: j,
          descClass: A,
        } = e;
        return (0, i.jsxs)("div", {
          className: (0, r.Z)(
            c().heading,
            c()[y],
            y !== f && c()["sm-".concat(f)],
            b && c().max,
            k && k
          ),
          children: [
            t &&
              (0, i.jsx)(o.default, {
                color:
                  n ||
                  ("light" == v
                    ? "dark"
                    : "primary" == v
                    ? "light"
                    : "primary"),
                component: _,
                animate: g,
                direction: x,
                className: c().subtitle,
                children: t,
              }),
            a &&
              (0, i.jsx)(s.default, {
                animate: g,
                direction: x,
                component: m,
                className: c().title,
                children: a,
              }),
            h && h,
            u &&
              (0, i.jsx)(l.default, {
                animate: g,
                direction: x,
                className: (0, r.Z)(c().bigdesc, c().largedesc, c()[v], w),
                size: "xl",
                children: u,
              }),
            d &&
              (0, i.jsx)(l.default, {
                animate: g,
                direction: x,
                className: (0, r.Z)(c().bigdesc, c()[v], j),
                size: "lg",
                children: d,
              }),
            p &&
              (0, i.jsx)(l.default, {
                animate: g,
                direction: x,
                className: (0, r.Z)(c().desc, c()[v], A),
                children: p,
              }),
          ],
        });
      }
    },
    32913: function (e, t, n) {
      "use strict";
      var i = n(57437),
        r = n(44839),
        l = n(14629),
        s = n.n(l);
      let o = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: l, color: o = "dark", ...a } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            ref: t,
            className: (0, r.Z)(s().section, s()[o], l),
            ...a,
            children: n,
          }),
        });
      });
      (o.displayName = "Section"), (t.Z = o);
    },
    36959: function (e) {
      e.exports = {
        keynotes: "style_keynotes__mUmzh",
        videos: "style_videos__UwHD_",
        videoDesktop: "style_videoDesktop__ByaQ8",
        item: "style_item__psUK6",
        card: "style_card___Mwnr",
        new: "style_new__MSzAM",
        btns: "style_btns__x_oJH",
        video: "style_video__e50L8",
        videoContainer: "style_videoContainer__uNfTJ",
        videoIframe: "style_videoIframe__rgQlq",
        videoPlaceholder: "style_videoPlaceholder__mqf90",
        loadingSpinner: "style_loadingSpinner__t382S",
        spin: "style_spin__vxtim",
        loadingText: "style_loadingText___UdsN",
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
    48241: function (e) {
      e.exports = {
        customlink: "style_customlink___bLW0",
        primary: "style_primary__NaDFQ",
        light: "style_light___QhFW",
        dark: "style_dark__F5y8x",
      };
    },
    59747: function (e) {
      e.exports = {
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
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 8598, 9667, 5073, 922, 9391, 231, 3106, 8048, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 23929));
      }
    ),
      (_N_E = e.O());
  },
]);
