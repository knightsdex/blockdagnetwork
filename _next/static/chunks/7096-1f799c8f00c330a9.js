(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7096],
  {
    79554: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return f;
        },
      });
      var n = s(57437),
        i = s(5735),
        a = s.n(i),
        l = s(44839),
        r = s(36018),
        c = s.n(r),
        o = s(21360),
        d = s(87580),
        m = s(762),
        h = s(43615),
        u = s(87138);
      function p(e) {
        var t, s, i, a, r, p, g, _;
        let { dev: x, index: f, length: v, className: j } = e;
        return (0, n.jsxs)("div", {
          className: (0, l.Z)(c().devcard, j),
          children: [
            (0, n.jsx)("div", {
              className: c().img,
              children: (0, n.jsx)(d.default, {
                className: c().number,
                size: "sm",
                children: v - f,
              }),
            }),
            (0, n.jsxs)("div", {
              className: c().content,
              children: [
                (0, n.jsx)(u.default, {
                  href: "/dev-releases/".concat(
                    (null === (t = x.attributes) || void 0 === t
                      ? void 0
                      : t.slug) || "#"
                  ),
                  children: (0, n.jsxs)(o.default, {
                    className: c().title,
                    size: "lg",
                    children: ["Dev Releases ", v - f],
                  }),
                }),
                (0, n.jsx)(o.default, {
                  className: c().date,
                  children: (0, m.ie)(x.createdAt),
                }),
                (0, n.jsx)(o.default, {
                  className: (0, l.Z)(c().desc, "line-clamp-3"),
                  children: (
                    null === (i = x.attributes) || void 0 === i
                      ? void 0
                      : null === (s = i.seo) || void 0 === s
                      ? void 0
                      : s.metaDesc
                  )
                    ? null === (r = x.attributes) || void 0 === r
                      ? void 0
                      : null === (a = r.seo) || void 0 === a
                      ? void 0
                      : a.metaDesc
                    : null === (g = x.attributes) || void 0 === g
                    ? void 0
                    : null === (p = g.seo) || void 0 === p
                    ? void 0
                    : p.metaDescription,
                }),
                (0, n.jsx)(h.default, {
                  className: c().button,
                  href: "/dev-releases/".concat(
                    (null === (_ = x.attributes) || void 0 === _
                      ? void 0
                      : _.slug) || "#"
                  ),
                  children: "Read More",
                }),
              ],
            }),
          ],
        });
      }
      var g = s(81079),
        _ = s(2265),
        x = s(70499);
      function f(e) {
        let { devData: t, heading: s } = e,
          [i, r] = (0, _.useState)(6);
        return (0, n.jsxs)("div", {
          className: a().devWrapper,
          children: [
            (0, n.jsx)(g.default, {
              direction: "top",
              className: a().cards,
              children:
                null == t
                  ? void 0
                  : t.map((e, s) =>
                      (0, n.jsx)(
                        p,
                        {
                          className: (0, l.Z)(
                            s + 1 > i && "".concat(a().loading, " d-md d-sm")
                          ),
                          length: t.length,
                          dev: e,
                          index: s,
                        },
                        s
                      )
                    ),
            }),
            (0, n.jsx)(x.default, {
              className: a().button,
              color: s ? "dark" : "transparent-dark",
              disabled: !t || (null == t ? void 0 : t.length) <= i,
              onClick: () => {
                r((e) => e + 3);
              },
              children: "Show More",
            }),
          ],
        });
      }
    },
    85580: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return u;
        },
      });
      var n = s(57437),
        i = s(32913),
        a = s(56311),
        l = s.n(a),
        r = s(42625),
        c = s(58350),
        o = s(21360),
        d = s(44839),
        m = s(5540),
        h = s(53267);
      function u(e) {
        let {} = e,
          t = [
            {
              status: "completed",
              phase: "1",
              title: "Phase 1",
              lists: [
                {
                  title: "Core Protocol & Architecture",
                  list: [
                    (0, n.jsx)(n.Fragment, {
                      children: "16th February listing on exchanges",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Design and implementation of hybrid DAG + Proof-of-Work consensus",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Parallel block processing enabling ~2,000 TPS at launch",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "PoW security model preserving decentralization and censorship resistance",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "EVM Accounts based Ledger supporting fast payments + EVM smart contracts",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Full Ethereum EVM compatibility for Solidity-based dApps",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Public mainnet with external nodes and developers",
                    }),
                  ],
                },
              ],
              href: "#",
            },
            {
              status: "completed",
              phase: "1",
              title: "Phase 2",
              lists: [
                {
                  title: "Mainnet Infrastructure",
                  list: [
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Mainnet block production activated, 10th February 2026",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Mining consensus live with ASIC participation",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "On-chain emissions and halving schedule enforced at protocol level",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Native token (BDAG) issuance and vesting contracts deployed 11th February",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Core infrastructure online: nodes, RPCs, explorer, wallet support",
                    }),
                  ],
                },
              ],
              href: "#",
            },
            {
              phase: "1",
              title: "Phase 3",
              lists: [
                {
                  title: "Smart Contracts & DeFi Stack \xa0(0–2 Months)",
                  list: [
                    (0, n.jsx)(n.Fragment, {
                      children: "X1 Miner with Cold Wallet Integration",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Native DEX smart contracts deployed",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Liquidity pool framework with BDAG base pairs",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Lending and borrowing protocol deployment",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Oracle integrations for price feeds",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "On-chain staking and yield mechanisms",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Smart contract tooling for developers (SDKs, docs, test tooling)",
                    }),
                  ],
                },
              ],
              href: "#",
            },
            {
              phase: "1",
              title: "Phase 4",
              lists: [
                {
                  title: "Developer Tooling & UX Improvements (2-6 Months)",
                  list: [
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Account abstraction EIP-4337 / smart accounts (gas sponsorship, meta-transactions)",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Fee customization modules for dApp developers",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "No-code / low-code smart contract and token creation tools",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Improved RPC performance and indexing services",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Expanded testnet environments for third-party teams",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "T-REX / EIP-3643 Real WorldAssets support",
                    }),
                  ],
                },
              ],
              href: "#",
            },
            {
              phase: "1",
              title: "Phase 5",
              lists: [
                {
                  title: "Network Scaling & Optimization (6–12 Months)",
                  list: [
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "TPS scaling beyond launch targets toward 5000+ TPS",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "DAG optimization for higher concurrency under load",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Reduced finality times while preserving PoW security",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Mining efficiency improvements and network-wide tuning",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Increased node count and geographic decentralization",
                    }),
                  ],
                },
              ],
              href: "#",
            },
            {
              phase: "2",
              title: "Phase 6",
              lists: [
                {
                  title: "Advanced Protocol Capabilities (12–18 Months)",
                  list: [
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Additional virtual machine support (e.g. WASM)",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children: "Enhanced on-chain governance mechanisms",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Cross-chain bridges and interoperability layers",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Protocol-level support for enterprise and high-volume use cases",
                    }),
                    (0, n.jsx)(n.Fragment, {
                      children:
                        "Long-term emission reduction via scheduled halvings",
                    }),
                  ],
                },
              ],
              href: "#",
            },
          ];
        return (0, n.jsxs)(i.Z, {
          id: "roadmap",
          className: l().roadmap,
          children: [
            (0, n.jsxs)(r.Z, {
              className: l().container,
              children: [
                (0, n.jsx)(c.Z, {
                  align: "center",
                  title: "Roadmap",
                  desc: "BlockDAG represents the next evolution in blockchain technology, designed to address the limitations of traditional blockchain systems. Unlike conventional blockchains that process transactions in a linear sequence.",
                }),
                (0, n.jsx)(o.default, {
                  size: "lg",
                  className: "text-center font-bold",
                  children:
                    "We have completed our Phase 1 roadmap as promised!",
                }),
              ],
            }),
            (0, n.jsx)(h.tq, {
              id: "updatesSwiper",
              className: (0, d.Z)(l().swiper),
              modules: [m.tl, m.s5],
              breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 40 },
                992: { slidesPerView: 2.3, spaceBetween: 0 },
              },
              slidesPerView: "auto",
              pagination: { clickable: !0 },
              children: t.map((e, t) =>
                (0, n.jsx)(
                  h.o5,
                  {
                    className: l().slide,
                    children: (0, n.jsxs)(
                      "div",
                      {
                        className: (0, d.Z)(
                          l().item,
                          "completed" === e.status && l().itemCompleted
                        ),
                        children: [
                          (0, n.jsx)(o.default, {
                            size: "xl",
                            className: (0, d.Z)(l().listTitle, "font-bold"),
                            children: e.title,
                          }),
                          e.status &&
                            (0, n.jsx)("div", {
                              className: (0, d.Z)(l().status, l()[e.status]),
                              children:
                                "completed" === e.status
                                  ? "COMPLETED"
                                  : "progress" === e.status
                                  ? "IN PROGRESS"
                                  : "PENDING",
                            }),
                          e.lists.map((e, t) =>
                            (0, n.jsxs)(
                              "div",
                              {
                                className: l().list,
                                children: [
                                  e.title &&
                                    (0, n.jsx)(o.default, {
                                      size: "lg",
                                      className: "font-bold",
                                      children: e.title,
                                    }),
                                  (null == e ? void 0 : e.list) &&
                                    (0, n.jsx)("ul", {
                                      children: e.list.map((e, t) =>
                                        (0, n.jsx)(
                                          "li",
                                          {
                                            children: (0, n.jsx)(o.default, {
                                              children: e,
                                            }),
                                          },
                                          t
                                        )
                                      ),
                                    }),
                                ],
                              },
                              t
                            )
                          ),
                        ],
                      },
                      t
                    ),
                  },
                  t
                )
              ),
            }),
          ],
        });
      }
    },
    58350: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(57437),
        i = s(44839),
        a = s(21360),
        l = s(87580),
        r = s(84395),
        c = s(18803),
        o = s.n(c);
      function d(e) {
        let {
          subtitle: t,
          subtitleColor: s,
          title: c,
          bigdesc: d,
          titleBottomContent: m,
          largedesc: h,
          desc: u,
          subtitleComponent: p,
          titleComponent: g,
          align: _ = "center",
          alignMobile: x = _,
          bg: f = "dark",
          animate: v = !0,
          direction: j = "right",
          maxWidth: y,
          className: b,
          largedescClass: F,
          bigdescClass: N,
          descClass: k,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, i.Z)(
            o().heading,
            o()[_],
            _ !== x && o()["sm-".concat(x)],
            y && o().max,
            b && b
          ),
          children: [
            t &&
              (0, n.jsx)(r.default, {
                color:
                  s ||
                  ("light" == f
                    ? "dark"
                    : "primary" == f
                    ? "light"
                    : "primary"),
                component: p,
                animate: v,
                direction: j,
                className: o().subtitle,
                children: t,
              }),
            c &&
              (0, n.jsx)(l.default, {
                animate: v,
                direction: j,
                component: g,
                className: o().title,
                children: c,
              }),
            m && m,
            h &&
              (0, n.jsx)(a.default, {
                animate: v,
                direction: j,
                className: (0, i.Z)(o().bigdesc, o().largedesc, o()[f], F),
                size: "xl",
                children: h,
              }),
            d &&
              (0, n.jsx)(a.default, {
                animate: v,
                direction: j,
                className: (0, i.Z)(o().bigdesc, o()[f], N),
                size: "lg",
                children: d,
              }),
            u &&
              (0, n.jsx)(a.default, {
                animate: v,
                direction: j,
                className: (0, i.Z)(o().desc, o()[f], k),
                children: u,
              }),
          ],
        });
      }
    },
    32913: function (e, t, s) {
      "use strict";
      var n = s(57437),
        i = s(44839),
        a = s(14629),
        l = s.n(a);
      let r = (0, s(2265).forwardRef)((e, t) => {
        let { children: s, className: a, color: r = "dark", ...c } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            ref: t,
            className: (0, i.Z)(l().section, l()[r], a),
            ...c,
            children: s,
          }),
        });
      });
      (r.displayName = "Section"), (t.Z = r);
    },
    5735: function (e) {
      e.exports = {
        devreleases: "style_devreleases__ObT_M",
        container: "style_container__YKMqt",
        cards: "style_cards__vscfL",
        loading: "style_loading__hUaLe",
        revealDev: "style_revealDev__8w4FS",
        button: "style_button__B1g6u",
      };
    },
    56311: function (e) {
      e.exports = {
        roadmap: "style_roadmap___naA_",
        swiper: "style_swiper__pYHRx",
        slide: "style_slide__xnQfD",
        item: "style_item__zRHcP",
        listTitle: "style_listTitle__mlmLN",
        phase: "style_phase__zAWwf",
        status: "style_status__ex0eR",
        completed: "style_completed__610q3",
        progress: "style_progress__iVjFl",
        pending: "style_pending__ubL2m",
        list: "style_list__rmutB",
        button: "style_button__kwUTj",
      };
    },
    36018: function (e) {
      e.exports = {
        devcard: "style_devcard__HHSiF",
        img: "style_img__arX9f",
        content: "style_content__DIKMy",
        title: "style_title__8HQ6A",
        button: "style_button__7kB01",
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
]);
