(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    95889: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 79554)),
        Promise.resolve().then(i.bind(i, 85580)),
        Promise.resolve().then(i.bind(i, 44144)),
        Promise.resolve().then(i.bind(i, 70499)),
        Promise.resolve().then(i.t.bind(i, 58538, 23)),
        Promise.resolve().then(i.t.bind(i, 59747, 23)),
        Promise.resolve().then(i.t.bind(i, 5735, 23)),
        Promise.resolve().then(i.t.bind(i, 18803, 23)),
        Promise.resolve().then(i.bind(i, 47984)),
        Promise.resolve().then(i.bind(i, 45419)),
        Promise.resolve().then(i.t.bind(i, 14629, 23)),
        Promise.resolve().then(i.bind(i, 21360)),
        Promise.resolve().then(i.bind(i, 87580)),
        Promise.resolve().then(i.bind(i, 84395));
    },
    87138: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return r.a;
        },
      });
      var n = i(231),
        r = i.n(n);
    },
    44144: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return m;
        },
      });
      var n = i(57437),
        r = i(32913),
        s = i(19565),
        l = i.n(s),
        a = i(42625),
        o = i(47984),
        c = i(21360),
        d = i(87580),
        u = i(2265),
        h = i(44839);
      function m(e) {
        let {} = e,
          [t, i] = (0, u.useState)(0),
          s = [
            {
              index: 0,
              title: (0, n.jsx)(n.Fragment, {
                children: "Hybrid Architecture",
              }),
              desc: (0, n.jsx)(n.Fragment, {
                children:
                  "BlockDAG introduces a groundbreaking hybrid architecture that combines the best of blockchain and Directed Acyclic Graph (DAG) technologies. This innovative approach enables unparalleled scalability and efficiency, ensuring that the network can handle an ever-growing number of transactions without compromising on speed or security. The hybrid architecture allows BlockDAG to deliver a more sustainable and powerful platform that meets the demands of modern decentralized applications.",
              }),
              additional: (0, n.jsx)(o.default, {
                alt: "Diagram",
                width: 643,
                height: 338,
              }),
            },
            {
              index: 1,
              title: (0, n.jsx)(n.Fragment, { children: "EVM Compatibility" }),
              desc: (0, n.jsx)(n.Fragment, {
                children:
                  "To ensure interoperability with the vast ecosystem of Ethereum-based tools, wallets, and dApps, BlockDAG is fully compatible with the Ethereum Virtual Machine (EVM). This compatibility allows developers to seamlessly migrate their existing Ethereum projects to BlockDAG, taking advantage of the network’s superior speed and lower transaction costs, while maintaining all the functionalities they are accustomed to. BlockDAG bridges the gap between established blockchain ecosystems and new, more efficient technologies.",
              }),
            },
            {
              index: 2,
              title: (0, n.jsx)(n.Fragment, {
                children: "Low-Code Smart Contract Builder",
              }),
              desc: (0, n.jsx)(n.Fragment, {
                children:
                  "BlockDAG's Low-Code Smart Contract Builder revolutionizes the way developers and businesses create and deploy smart contracts. This intuitive tool simplifies the development process by providing a drag-and-drop interface that allows users to design complex smart contracts without extensive coding knowledge. By making smart contract creation accessible to everyone, BlockDAG empowers a broader audience to innovate and participate in the decentralized economy.",
              }),
            },
            {
              index: 3,
              title: (0, n.jsx)(n.Fragment, {
                children: "Innovations for the Real World",
              }),
              desc: (0, n.jsx)(n.Fragment, {
                children:
                  "BlockDAG is not just about technology for technology’s sake; it’s about driving real-world innovations that solve practical problems. Whether it's streamlining supply chains, enhancing financial systems, or enabling new forms of digital interaction, BlockDAG’s technology is designed to be applied in a wide range of industries. Our focus is on creating impactful solutions that bring tangible benefits to businesses and individuals around the globe.",
              }),
            },
            {
              index: 4,
              title: (0, n.jsx)(n.Fragment, {
                children: "Consensus & Security",
              }),
              desc: (0, n.jsx)(n.Fragment, {
                children:
                  "Security is at the core of BlockDAG’s architecture. The platform employs a robust consensus mechanism that ensures the integrity and security of all transactions on the network. By leveraging a hybrid proof-of-work (PoW) consensus model, BlockDAG provides a secure environment that resists attacks and maintains network stability. Our advanced security protocols protect user assets and data, giving users confidence in the safety of their interactions on the platform.",
              }),
            },
            {
              index: 5,
              title: (0, n.jsx)(n.Fragment, { children: "Scalability" }),
              desc: (0, n.jsx)(n.Fragment, {
                children:
                  "BlockDAG is engineered for scalability from the ground up. The platform’s hybrid architecture and innovative consensus mechanism allow it to process thousands of transactions per second, far surpassing the capabilities of traditional blockchain networks. This scalability ensures that BlockDAG can support the growing demands of decentralized applications and accommodate future growth, making it a sustainable and future-proof solution for the blockchain industry.",
              }),
            },
          ],
          m = [s[t], ...s.filter((e) => e.index !== t)];
        return (0, n.jsx)(r.Z, {
          className: l().explore,
          children: (0, n.jsx)(a.Z, {
            classic: !0,
            children: (0, n.jsxs)("div", {
              className: l().content,
              children: [
                (0, n.jsx)(d.default, { children: "Explore" }),
                (0, n.jsxs)("div", {
                  className: l().wrapper,
                  children: [
                    (0, n.jsx)("div", {
                      className: l().categories,
                      children: m.map((e) =>
                        (0, n.jsx)(
                          c.default,
                          {
                            size: t === e.index ? "lg" : "md",
                            onClick: () => i(e.index),
                            className: (0, h.Z)(
                              l().title,
                              t === e.index && l().active
                            ),
                            children: e.title,
                          },
                          e.index
                        )
                      ),
                    }),
                    (0, n.jsx)("div", {
                      className: l().boxes,
                      children: m.map((e) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: l().boxes_item,
                            children: [
                              (0, n.jsx)("div", {
                                className: l().icon,
                                children: (0, n.jsx)(o.default, {
                                  alt: "BlockDAG",
                                  src: e.icon,
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: l().texts,
                                children: [
                                  (0, n.jsx)(c.default, {
                                    size: "lg",
                                    className: l().texts_title,
                                    children: e.title,
                                  }),
                                  (0, n.jsx)(c.default, {
                                    size: "md",
                                    className: l().texts_desc,
                                    children: e.desc,
                                  }),
                                  e.additional && e.additional,
                                ],
                              }),
                            ],
                          },
                          e.index
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
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
      var n = i(57437),
        r = i(2265),
        s = i(44839),
        l = i(16609),
        a = i(49582),
        o = i(78002),
        c = i(16463);
      function d(e) {
        let {
            children: t,
            component: i = "div",
            className: d,
            direction: u,
            directionMobile: h = u,
            translateY: m = 0,
            translateX: p = 0,
            duration: f = 0.8,
            rotateX: g = 0,
            rotateY: v = 0,
            ease: _ = "back.out",
            opacity: b = 0,
            animate: y = !0,
            start: x = 80,
            end: w = 60,
            ...k
          } = e,
          j = (0, r.useRef)(null),
          { useGSAP: N, activatedGsap: F } = (0, l.Z)(),
          B = (0, o.Z)(),
          Z = (0, c.usePathname)();
        return (
          N(() => {
            if (
              "/" == Z &&
              F &&
              y &&
              j.current &&
              (null == B ? void 0 : B.width)
            ) {
              let e, t;
              (null == B ? void 0 : B.width) < 992
                ? ((p = "right" == h ? -200 : "left" == h ? 200 : p),
                  (m = "top" == h ? 200 : "bottom" == h ? -200 : m))
                : ((m = "top" == u ? 200 : "bottom" == u ? -200 : m),
                  (p = "right" == u ? -200 : "left" == u ? 200 : p));
              let i = a.ZP.timeline({
                scrollTrigger: {
                  trigger: j.current,
                  start: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? x - 10 : x,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? w - 15 : w - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == B ? void 0 : B.width) > 1440
                    ? p
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * p
                    : ((null == B ? void 0 : B.width) / 1440) * p),
                (t =
                  (null == B ? void 0 : B.width) > 1440
                    ? m
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * m
                    : ((null == B ? void 0 : B.width) / 1440) * m),
                i
                  .from(j.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: g,
                    rotateY: v,
                    opacity: b,
                    duration: f,
                    ease: _,
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
          }, [F, Z]),
          (0, n.jsx)(i, { ...k, ref: j, className: (0, s.Z)(d), children: t })
        );
      }
    },
    70499: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return m;
          },
        });
      var n = i(57437),
        r = i(87138),
        s = i(60231),
        l = i.n(s),
        a = i(44839),
        o = i(2265),
        c = i(16609),
        d = i(49582),
        u = i(78002),
        h = i(16463);
      function m(e) {
        let {
            href: t,
            className: i,
            children: s,
            target: m,
            onClick: p,
            direction: f,
            directionMobile: g = f,
            translateY: v = 0,
            translateX: _ = 0,
            duration: b = 0.8,
            rotateX: y = 0,
            rotateY: x = 0,
            ease: w = "back.out",
            opacity: k = 0,
            animate: j,
            start: N = 80,
            end: F = 60,
            color: B = "primary",
            disabled: Z,
            type: P = "button",
          } = e,
          A = (0, o.useRef)(null),
          D = (0, o.useRef)(null),
          G = (0, u.Z)(),
          { useGSAP: C, activatedGsap: T } = (0, c.Z)(),
          Y = (0, h.usePathname)();
        return (
          C(() => {
            if ("/" == Y) {
              let e;
              if (
                (A.current && (e = A),
                D.current && (e = D),
                T && j && e && e.current && (null == G ? void 0 : G.width))
              ) {
                let t, i;
                (null == G ? void 0 : G.width) < 992
                  ? ((_ = "right" == g ? -200 : "left" == g ? 200 : _),
                    (v = "top" == g ? 200 : "bottom" == g ? -200 : v))
                  : ((v = "top" == f ? 200 : "bottom" == f ? -200 : v),
                    (_ = "right" == f ? -200 : "left" == f ? 200 : _));
                let n = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == G ? void 0 : G.width) < 992 ? N - 10 : N,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == G ? void 0 : G.width) < 992 ? F - 15 : F - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == G ? void 0 : G.width) > 1440
                      ? _
                      : (null == G ? void 0 : G.width) < 992
                      ? ((null == G ? void 0 : G.width) / 500) * _
                      : ((null == G ? void 0 : G.width) / 1440) * _),
                  (i =
                    (null == G ? void 0 : G.width) > 1440
                      ? v
                      : (null == G ? void 0 : G.width) < 992
                      ? ((null == G ? void 0 : G.width) / 500) * v
                      : ((null == G ? void 0 : G.width) / 1440) * v),
                  n
                    .from(e.current, {
                      translateY: i,
                      translateX: t,
                      rotateX: y,
                      rotateY: x,
                      opacity: k,
                      duration: b,
                      ease: w,
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
          }, [T, Y]),
          (0, n.jsx)(n.Fragment, {
            children: t
              ? m && "_blank" == m
                ? (0, n.jsxs)(r.default, {
                    ref: D,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: p,
                    className: (0, a.Z)(l().button, i, l()[B]),
                    children: [s, (0, n.jsx)("span", { className: l().wrap })],
                  })
                : (0, n.jsxs)(r.default, {
                    ref: D,
                    href: t,
                    target: m,
                    rel: "",
                    onClick: p,
                    className: (0, a.Z)(l().button, i, l()[B]),
                    children: [s, (0, n.jsx)("span", { className: l().wrap })],
                  })
              : (0, n.jsxs)("button", {
                  type: P,
                  disabled: Z,
                  ref: A,
                  onClick: p,
                  className: (0, a.Z)(l().button, i, l()[B]),
                  children: [s, (0, n.jsx)("span", { className: l().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, i) {
      "use strict";
      var n = i(57437),
        r = i(44839),
        s = i(58538),
        l = i.n(s);
      let a = (0, i(2265).forwardRef)((e, t) => {
        let { children: i, className: s, size: a, classic: o, ...c } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            ref: t,
            className: (0, r.Z)(
              l().container,
              s,
              a && l()[a],
              o && l().classic
            ),
            ...c,
            children: i,
          }),
        });
      });
      (a.displayName = "Container"), (t.Z = a);
    },
    43615: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return m;
          },
        });
      var n = i(57437),
        r = i(2265),
        s = i(48241),
        l = i.n(s),
        a = i(87138),
        o = i(44839),
        c = i(78002),
        d = i(16609),
        u = i(49582),
        h = i(16463);
      function m(e) {
        let {
            href: t,
            download: i,
            className: s,
            target: m,
            children: p,
            color: f = "primary",
            onClick: g,
            direction: v,
            directionMobile: _ = v,
            translateY: b = 0,
            translateX: y = 0,
            duration: x = 0.8,
            rotateX: w = 0,
            rotateY: k = 0,
            ease: j = "back.out",
            opacity: N = 0,
            animate: F,
            start: B = 80,
            end: Z = 60,
            ...P
          } = e,
          A = (0, c.Z)(),
          D = (0, r.useRef)(null),
          { useGSAP: G, activatedGsap: C } = (0, d.Z)(),
          T = (0, h.usePathname)();
        return (
          G(() => {
            if (
              "/" == T &&
              C &&
              F &&
              D.current &&
              (null == A ? void 0 : A.width)
            ) {
              let e, t;
              (null == A ? void 0 : A.width) < 992
                ? ((y = "right" == _ ? -200 : "left" == _ ? 200 : y),
                  (b = "top" == _ ? 200 : "bottom" == _ ? -200 : b))
                : ((b = "top" == v ? 200 : "bottom" == v ? -200 : b),
                  (y = "right" == v ? -200 : "left" == v ? 200 : y));
              let i = u.ZP.timeline({
                scrollTrigger: {
                  trigger: D.current,
                  start: "top ".concat(
                    (null == A ? void 0 : A.width) < 992 ? B - 10 : B,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == A ? void 0 : A.width) < 992 ? Z - 15 : Z - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == A ? void 0 : A.width) > 1440
                    ? y
                    : (null == A ? void 0 : A.width) < 992
                    ? ((null == A ? void 0 : A.width) / 500) * y
                    : ((null == A ? void 0 : A.width) / 1440) * y),
                (t =
                  (null == A ? void 0 : A.width) > 1440
                    ? b
                    : (null == A ? void 0 : A.width) < 992
                    ? ((null == A ? void 0 : A.width) / 500) * b
                    : ((null == A ? void 0 : A.width) / 1440) * b),
                i
                  .from(D.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: w,
                    rotateY: k,
                    opacity: N,
                    duration: x,
                    ease: j,
                  })
                  .to(D.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => i.kill()
              );
            }
          }, [A, C, T]),
          (0, n.jsx)(n.Fragment, {
            children:
              "#" === t
                ? (0, n.jsx)("p", {
                    className: (0, o.Z)(l().customlink, l()[f], s),
                    children: p,
                  })
                : m && "_blank" == m
                ? (0, n.jsx)(a.default, {
                    ref: D,
                    download: i,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: g,
                    className: (0, o.Z)(l().customlink, l()[f], s),
                    ...P,
                    children: p,
                  })
                : (0, n.jsx)(a.default, {
                    ref: D,
                    download: i,
                    href: t,
                    target: m,
                    onClick: g,
                    className: (0, o.Z)(l().customlink, l()[f], s),
                    ...P,
                    children: p,
                  }),
          })
        );
      }
    },
    45419: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return p;
        },
      });
      var n = i(57437),
        r = i(42625),
        s = i(76003),
        l = i.n(s),
        a = i(21360),
        o = i(47984),
        c = i(32913),
        d = i(87580),
        u = i(70499),
        h = i(13259),
        m = i(44839);
      function p(e) {
        let { color: t } = e;
        return (0, n.jsx)(c.Z, {
          className: l().section,
          color: t || "primary",
          children: (0, n.jsxs)(r.Z, {
            className: l().sectionContainer,
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)(o.default, {
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
              (0, n.jsxs)(a.default, {
                className: (0, m.Z)(l().desc, "font-bold"),
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
    19565: function (e) {
      e.exports = {
        explore: "style_explore__jssWw",
        content: "style_content__jF4nj",
        wrapper: "style_wrapper__hMIvk",
        categories: "style_categories__tV3UH",
        title: "style_title__fxvaf",
        active: "style_active___vLg9",
        boxes: "style_boxes___lqG_",
        boxes_item: "style_boxes_item__8dI32",
        texts: "style_texts__XRCFy",
        texts_title: "style_texts_title__6vr2F",
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
    48241: function (e) {
      e.exports = {
        customlink: "style_customlink___bLW0",
        primary: "style_primary__NaDFQ",
        light: "style_light___QhFW",
        dark: "style_dark__F5y8x",
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
        5073, 1899, 947, 9667, 7951, 922, 9391, 231, 493, 3106, 8048, 7096,
        2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 95889));
      }
    ),
      (_N_E = e.O());
  },
]);
