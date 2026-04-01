(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    11027: function (e, t, l) {
      Promise.resolve().then(l.t.bind(l, 84080, 23)),
        Promise.resolve().then(l.t.bind(l, 43034, 23)),
        Promise.resolve().then(l.t.bind(l, 54885, 23)),
        Promise.resolve().then(l.t.bind(l, 17322, 23)),
        Promise.resolve().then(l.t.bind(l, 90906, 23)),
        Promise.resolve().then(l.t.bind(l, 72169, 23)),
        Promise.resolve().then(l.t.bind(l, 16506, 23)),
        Promise.resolve().then(l.t.bind(l, 32563, 23)),
        Promise.resolve().then(l.t.bind(l, 37983, 23)),
        Promise.resolve().then(l.t.bind(l, 68941, 23)),
        Promise.resolve().then(l.t.bind(l, 68425, 23)),
        Promise.resolve().then(l.bind(l, 45934)),
        Promise.resolve().then(l.bind(l, 61194)),
        Promise.resolve().then(l.bind(l, 83683)),
        Promise.resolve().then(l.bind(l, 90689)),
        Promise.resolve().then(l.bind(l, 31707)),
        Promise.resolve().then(l.bind(l, 16609));
    },
    45934: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return _;
        },
      });
      var s = l(57437),
        n = l(42625),
        i = l(57274),
        r = l.n(i),
        a = l(87138),
        o = l(21360),
        c = l(47984),
        d = l(43615),
        u = l(16700),
        g = l(44839),
        h = l(13259),
        m = l(16463),
        v = l(2265);
      function _(e) {
        let {} = e,
          t = (0, m.usePathname)(),
          l = [
            {
              title: "Sitemap",
              links: [
                [
                  { title: "Home", slug: "/" },
                  { title: "Ecosystem", slug: "/ecosystem" },
                  { title: "Technology", slug: "/technology" },
                  { title: "Developer Hub", slug: "/developer-hub" },
                ],
                [
                  { title: "Tokenomics", slug: "/tokenomics" },
                  { title: "Validation", slug: "/validation" },
                  { title: "Referral Program", slug: "/referral-program" },
                ],
              ],
            },
            {
              title: "Socials",
              links: [
                [
                  { title: "Telegram", slug: "https://t.me/BlockDAGnetwork_Portal" },
                  { title: "Twitter", slug: "https://x.com/BDAGnetworkCoin" },
                  { title: "Dexscreener", slug: "https://dexscreener.com/ethereum/0xComingSoon" },
                  { title: "Uniswap", slug: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon" },
                ],
              ],
            },
          ];
        return (0, s.jsx)(
          v.Fragment,
          {
            children: (0, s.jsxs)("footer", {
              className: r().footer,
              children: [
                (0, s.jsxs)(n.Z, {
                  className: r().container,
                  children: [
                    (0, s.jsxs)("div", {
                      className: r().content,
                      children: [
                        (0, s.jsxs)("div", {
                          className: r().logoArea,
                          children: [
                            (0, s.jsx)("div", {
                              children: (0, s.jsx)(a.default, {
                                className: (0, g.Z)(r().logo, u.BD),
                                href: "/",
                                children: "BlockDAG",
                              }),
                            }),
                            (0, s.jsx)(o.default, {
                              children:
                                "BlockDAG is a Layer 1 proof of work consensus mechanism that evolves the crypto sphere with a cutting-edge Directed Acyclic Graph structure building on the foundations of Bitcoin",
                            }),
                          ],
                        }),
                        (0, s.jsx)(o.default, {
                          children: "Copyright \xa9 BlockDAG",
                        }),
                        (0, s.jsx)("div", {
                          className: r().socialList,
                          children: [
                            {
                              title: "X",
                              img: "/icons/socials/x.svg",
                              slug: "https://x.com/BDAGnetworkCoin",
                            },
                            {
                              title: "Telegram",
                              img: "/icons/socials/telegram.svg",
                              slug: "https://t.me/BlockDAGnetwork_Portal",
                            }
                          ].map((e) =>
                            (0, s.jsx)(
                              "div",
                              {
                                children: (0, s.jsx)(a.default, {
                                  href: e.slug,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, s.jsx)(c.default, {
                                    src: e.img,
                                    alt: e.title,
                                    width: 32,
                                    height: 32,
                                  }),
                                }),
                              },
                              e.slug
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: r().nav,
                      children: l.map((e, t) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className: (0, g.Z)(r().navItem, 1 == t && "d-md"),
                            children: [
                              (0, s.jsx)(o.default, {
                                className: r().navTitle,
                                children: e.title,
                              }),
                              (0, s.jsxs)("ul", {
                                className: r().listArea,
                                children: [
                                  e.links.map((e, t) =>
                                    (0, s.jsx)(
                                      v.Fragment,
                                      {
                                        children: e.map((e, l) =>
                                          (0, s.jsx)(
                                            "li",
                                            {
                                              style: {
                                                order: "".concat(t + 3 * l),
                                              },
                                              children: (0, s.jsx)(d.default, {
                                                color: "dark",
                                                href: e.slug,
                                                target: e.target,
                                                children: e.title,
                                              }),
                                            },
                                            l
                                          )
                                        ),
                                      },
                                      t
                                    )
                                  ),
                                  l
                                    .filter((e) => "Legals" == e.title)
                                    .map((e, t) =>
                                      (0, s.jsxs)(
                                        "div",
                                        {
                                          className: (0, g.Z)(
                                            r().navItem,
                                            "d-sm"
                                          ),
                                          children: [
                                            (0, s.jsx)(o.default, {
                                              className: r().navTitle,
                                              children: e.title,
                                            }),
                                            (0, s.jsx)("ul", {
                                              className: r().listArea,
                                              children: e.links.map((e, t) =>
                                                (0, s.jsx)(
                                                  v.Fragment,
                                                  {
                                                    children: e.map((e, t) =>
                                                      (0, s.jsx)(
                                                        "li",
                                                        {
                                                          children: (0, s.jsx)(
                                                            d.default,
                                                            {
                                                              color: "dark",
                                                              href: e.slug,
                                                              target: e.target,
                                                              children: e.title,
                                                            }
                                                          ),
                                                        },
                                                        t
                                                      )
                                                    ),
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
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsx)(n.Z, {
                  className: r().container,
                  children: (0, s.jsx)(o.default, {
                    children:
                      "BlockDAG Network operates under a global corporate structure and is fully incorporated through Dag Systems Ltd, registered at Intershore Suite, Le Sanalele Complex, Apia, Samoa, in accordance with applicable corporate and regulatory requirements.",
                  }),
                }),
                (0, s.jsx)(n.Z, {
                  children: (0, s.jsx)("div", { className: r().hr }),
                }),
                (0, s.jsx)(n.Z, {
                  className: r().container,
                  children: (0, s.jsx)(o.default, {
                    children:
                      "Cryptocurrency investments are highly speculative and involve significant risk. The value of cryptocurrencies can fluctuate widely, and there is a risk of losing all of your investment. You should carefully consider your investment objectives, level of experience, and risk tolerance before making any investment decisions.",
                  }),
                }),
              ],
            }),
          },
          t
        );
      }
    },
    61194: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return B;
        },
      });
      var s = l(57437),
        n = l(42625),
        i = l(97368),
        r = l.n(i),
        a = l(87138),
        o = l(44839),
        c = l(16700),
        d = l(70499),
        u = l(13259),
        g = l(16463),
        h = l(82415),
        m = l(2265),
        v = l(21360),
        _ = l(43615),
        f = l(78322),
        p = l.n(f);
      function x(e) {
        let { active: t, onClick: l } = e;
        return (0, s.jsxs)("div", {
          className: (0, o.Z)(p().hamburger, t && p().active),
          onClick: l,
          children: [
            (0, s.jsx)("span", {}),
            (0, s.jsx)("span", {}),
            (0, s.jsx)("span", {}),
          ],
        });
      }
      var w = l(44630),
        j = l(16609);
      let k = (e, t) => {
          let l = (e = e.toString()).split(".");
          if (l.length < 2) return e;
          let s = l[0],
            n = l[1];
          if (n.length <= t) return "";
          let i = n.match(/0*$/);
          if (!i) return "";
          let r = i[0],
            a = n.substring(0, i.index);
          return (
            (r = r.substring(0, t - (n.length - r.length))),
            "".concat(s, ".").concat(a).concat(r)
          );
        },
        y = (e, t, l) => {
          let s = (e = Math.floor(1e5 * e + 0.5) / 1e5).toString(),
            n = 0;
          if ((s.includes(".") && (n = s.split(".")[1].length), n < t)) {
            0 === n && (s += ".");
            for (var i = n; i < t; i++) s += "0";
          }
          if (n > 0) {
            let e = s.split("."),
              n = e[0],
              i = e[1],
              r = (i.match(/[1-9][0-9]*/) || [""])[0],
              a = r.length,
              o = (i.match(/0*/) || [""])[0],
              c = o + r;
            "0" !== n && c.length > l
              ? ((c = c.substring(0, l)),
                (s = "".concat(n, ".").concat(k(c, t))))
              : a > l &&
                ((r = r.substring(0, l)),
                (s = "".concat(n, ".").concat(o).concat(k(r, t))));
          }
          return s;
        },
        b = (e) => {
          let t = e.toString().split(".");
          return (
            (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), t.join(".")
          );
        },
        C = (e, t, l) => b(y(e, t, l)),
        L = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
        N = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 },
        Z = (e, t, l, s) => {
          if (isNaN(e) || void 0 === e) return "Calculating...";
          if (e < t) return C(e, l, s);
          let n = (e = Math.floor(e)),
            i = "";
          return (
            Object.entries(N).forEach((t) => {
              let [l, s] = t;
              e / s < 1e3 && e / s >= 1 && ((i = l), (n = e / s));
            }),
            "".concat(L(n, 2)).concat(i)
          );
        };
      function B(e) {
        var t, l, i, f, p;
        let {} = e,
          { heroActive: k, crActive: y } = (0, j.Z)(),
          b = (0, g.usePathname)(),
          { remainingCoins: C } = (0, j.Z)(),
          [L, N] = (0, m.useState)(!1),
          [B, A] = (0, m.useState)(-1),
          M = (0, w.Z)(),
          E = [
            {
              title: "Ecosystem",
              slug: "/thriving-ecosystem",
              megamenu: {
                title: "BlockDAG Ecosystem",
                desc: (0, s.jsx)(s.Fragment, {
                  children:
                    "Explore the best-in-class Layer 1 ecosystem, from hackathons to a rewarding grants program.",
                }),
                button: "Explore",
                list: [
                  [
                    {
                      title: "Hackathons",
                      slug: "/hackathons",
                      target: void 0,
                      new: !0,
                    },
                  ],
                  [
                    {
                      title: "Tokenomincs",
                      slug: "/tokenomics",
                      new: !0,
                      target: void 0,
                    },
                    {
                      title: "Grants Program",
                      slug: "/grants-program",
                      new: !0,
                    },
                  ],
                ],
              },
            },
            {
              title: "Developer Hub",
              slug: "/developer-hub",
              megamenu: {
                title: "Developer Hub",
                desc: (0, s.jsxs)(s.Fragment, {
                  children: [
                    "Unlock the full potential of BlockDAG with our comprehensive resources, tools, and community support.",
                    " ",
                  ],
                }),
                button: "Explore",
                list: [
                  [
                    {
                      title: "Technology",
                      slug: "/technology",
                      target: void 0,
                    },
                    { title: "Latest News", slug: "/news", target: void 0 },
                    { title: "How to Guide", slug: "/how-to-guide" },
                  ],
                ],
              },
            },
            
            
            
          ];
        return (
          "/landing" !== b &&
          (0, s.jsxs)(s.Fragment, {
            children: [
              
              (0, s.jsxs)("header", {
                className: (0, o.Z)(
                  r().header,
                  B > -1 && r().activeMega,
                  L && r().active,
                  (M > 100 || "/map" == b) && r().scrolled,
                  k && -1 == B && ("/" == b || "/map" == b) && r().heroActive,
                  y && r().crActive
                ),
                children: [
                  (0, s.jsxs)(n.Z, {
                    className: r().container,
                    size: "lg",
                    children: [
                      (0, s.jsxs)("div", {
                        className: r().left,
                        children: [
                          (0, s.jsx)(a.default, {
                            onClick: () => {
                              N(!1), A(-1);
                            },
                            href: "/",
                            className: (0, o.Z)(r().logo, c.BD),
                            children: "BlockDAG",
                          }),
                          (0, s.jsxs)("nav", {
                            className: (0, o.Z)(r().nav, L && r().active),
                            children: [
                              (0, s.jsxs)("div", {
                                className: r().navContent,
                                children: [
                                  (0, s.jsx)(v.default, {
                                    size: "lg",
                                    className: (0, o.Z)(
                                      r().navTitle,
                                      "d-sm font-bold"
                                    ),
                                    children: "Menu",
                                  }),
                                  (0, s.jsx)("ul", {
                                    children: E.map((e, t) =>
                                      (0, s.jsx)(
                                        "li",
                                        {
                                          children: (
                                            null == e ? void 0 : e.megamenu
                                          )
                                            ? (0, s.jsxs)("a", {
                                                className: (0, o.Z)(
                                                  b == e.slug && r().active,
                                                  B == t && r().megaOpen
                                                ),
                                                onClick: () => {
                                                  A(B == t ? -1 : t);
                                                },
                                                children: [
                                                  (null == e
                                                    ? void 0
                                                    : e.highlight) &&
                                                    (0, s.jsx)("span", {
                                                      className: (0, o.Z)(
                                                        r().highlight
                                                      ),
                                                    }),
                                                  e.title,
                                                  (null == e
                                                    ? void 0
                                                    : e.new) &&
                                                    (0, s.jsx)("span", {
                                                      className: (0, o.Z)(
                                                        r().new,
                                                        c.BD
                                                      ),
                                                      children: "New",
                                                    }),
                                                  (0, s.jsx)(h.Z.Chevron, {}),
                                                ],
                                              })
                                            : (0, s.jsxs)(a.default, {
                                                className: (0, o.Z)(
                                                  b == e.slug && r().active
                                                ),
                                                href: e.slug,
                                                target:
                                                  null == e ? void 0 : e.target,
                                                rel: (
                                                  null == e ? void 0 : e.target
                                                )
                                                  ? "noopener noreferrer"
                                                  : void 0,
                                                onClick: () => {
                                                  N(!1), A(-1);
                                                },
                                                children: [
                                                  (null == e
                                                    ? void 0
                                                    : e.highlight) &&
                                                    (0, s.jsx)("span", {
                                                      className: (0, o.Z)(
                                                        r().highlight
                                                      ),
                                                    }),
                                                  e.title,
                                                  (null == e
                                                    ? void 0
                                                    : e.new) &&
                                                    (0, s.jsx)("span", {
                                                      className: (0, o.Z)(
                                                        r().new,
                                                        c.BD
                                                      ),
                                                      children: "New",
                                                    }),
                                                  (null == e
                                                    ? void 0
                                                    : e.megamenu) &&
                                                    (0, s.jsx)(s.Fragment, {
                                                      children: (0, s.jsx)(
                                                        h.Z.Chevron,
                                                        {}
                                                      ),
                                                    }),
                                                ],
                                              }),
                                        },
                                        t
                                      )
                                    ),
                                  }),
                                  E.map((e, t) => {
                                    var l, n;
                                    return (0, s.jsx)(
                                      m.Fragment,
                                      {
                                        children:
                                          (null == e ? void 0 : e.megamenu) &&
                                          (0, s.jsxs)("div", {
                                            className: (0, o.Z)(
                                              r().navContent,
                                              r().megamenu,
                                              B == t && r().active,
                                              "d-sm"
                                            ),
                                            children: [
                                              (0, s.jsx)("span", {
                                                onClick: () => {
                                                  A(-1);
                                                },
                                                children: (0, s.jsxs)(
                                                  v.default,
                                                  {
                                                    size: "lg",
                                                    className: (0, o.Z)(
                                                      r().navTitle,
                                                      "d-sm font-bold"
                                                    ),
                                                    children: [
                                                      (0, s.jsx)(
                                                        h.Z.Chevron,
                                                        {}
                                                      ),
                                                      e.title,
                                                      (null == e
                                                        ? void 0
                                                        : e.new) &&
                                                        (0, s.jsx)("span", {
                                                          className: (0, o.Z)(
                                                            r().new,
                                                            c.BD
                                                          ),
                                                          children: "New",
                                                        }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              (0, s.jsxs)("ul", {
                                                children: [
                                                  (null === (l = e.megamenu) ||
                                                  void 0 === l
                                                    ? void 0
                                                    : l.button) &&
                                                    (0, s.jsx)("li", {
                                                      children: (0, s.jsxs)(
                                                        a.default,
                                                        {
                                                          className: (0, o.Z)(
                                                            b == e.slug &&
                                                              r().active
                                                          ),
                                                          target:
                                                            null == e
                                                              ? void 0
                                                              : e.target,
                                                          rel: (
                                                            null == e
                                                              ? void 0
                                                              : e.target
                                                          )
                                                            ? "noopener noreferrer"
                                                            : void 0,
                                                          href: e.slug,
                                                          onClick: () => {
                                                            N(!1), A(-1);
                                                          },
                                                          children: [
                                                            null ===
                                                              (n =
                                                                e.megamenu) ||
                                                            void 0 === n
                                                              ? void 0
                                                              : n.button,
                                                            (0, s.jsx)(
                                                              h.Z.ExternalLink,
                                                              {
                                                                className:
                                                                  r()
                                                                    .externalIcon,
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  e.megamenu.list.map((e, t) =>
                                                    (0, s.jsx)(
                                                      m.Fragment,
                                                      {
                                                        children: e.map(
                                                          (e, t) =>
                                                            (0, s.jsx)(
                                                              "li",
                                                              {
                                                                children: (
                                                                  null == e
                                                                    ? void 0
                                                                    : e.comingSoon
                                                                )
                                                                  ? (0, s.jsxs)(
                                                                      a.default,
                                                                      {
                                                                        className:
                                                                          (0,
                                                                          o.Z)(
                                                                            r()
                                                                              .comingSoonItem,
                                                                            b ==
                                                                              e.slug &&
                                                                              r()
                                                                                .active
                                                                          ),
                                                                        target:
                                                                          null ==
                                                                          e
                                                                            ? void 0
                                                                            : e.target,
                                                                        rel: (
                                                                          null ==
                                                                          e
                                                                            ? void 0
                                                                            : e.target
                                                                        )
                                                                          ? "noopener noreferrer"
                                                                          : void 0,
                                                                        href: e.slug,
                                                                        onClick:
                                                                          () => {
                                                                            N(
                                                                              !1
                                                                            ),
                                                                              A(
                                                                                -1
                                                                              );
                                                                          },
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            s.jsx)(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  r()
                                                                                    .comingSoonLabel,
                                                                                children:
                                                                                  "Coming soon",
                                                                              }
                                                                            ),
                                                                            e.title,
                                                                          ],
                                                                      }
                                                                    )
                                                                  : (0, s.jsxs)(
                                                                      a.default,
                                                                      {
                                                                        className:
                                                                          (0,
                                                                          o.Z)(
                                                                            b ==
                                                                              e.slug &&
                                                                              r()
                                                                                .active
                                                                          ),
                                                                        target:
                                                                          null ==
                                                                          e
                                                                            ? void 0
                                                                            : e.target,
                                                                        rel: (
                                                                          null ==
                                                                          e
                                                                            ? void 0
                                                                            : e.target
                                                                        )
                                                                          ? "noopener noreferrer"
                                                                          : void 0,
                                                                        href: e.slug,
                                                                        onClick:
                                                                          () => {
                                                                            N(
                                                                              !1
                                                                            ),
                                                                              A(
                                                                                -1
                                                                              );
                                                                          },
                                                                        children:
                                                                          [
                                                                            e.title,
                                                                            (null ==
                                                                            e
                                                                              ? void 0
                                                                              : e.new) &&
                                                                              (0,
                                                                              s.jsx)(
                                                                                "span",
                                                                                {
                                                                                  className:
                                                                                    (0,
                                                                                    o.Z)(
                                                                                      r()
                                                                                        .new,
                                                                                      c.BD
                                                                                    ),
                                                                                  children:
                                                                                    "New",
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                              },
                                                              t
                                                            )
                                                        ),
                                                      },
                                                      t
                                                    )
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                      },
                                      t
                                    );
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: (0, o.Z)(r().megaInfo, "d-sm"),
                                children: [
                                  (0, s.jsxs)(v.default, {
                                    size: "lg",
                                    className: (0, o.Z)(
                                      r().megaInfoTitle,
                                      "font-bold"
                                    ),
                                    children: [
                                      null ===
                                        (l = E.filter(
                                          (e) =>
                                            void 0 !==
                                            (null == e ? void 0 : e.megamenu)
                                        )[0]) || void 0 === l
                                        ? void 0
                                        : null === (t = l.megamenu) ||
                                          void 0 === t
                                        ? void 0
                                        : t.title,
                                      (0, s.jsx)(a.default, {
                                        onClick: () => {
                                          N(!1), A(-1);
                                        },
                                        className: r().megaInfoLink,
                                        href:
                                          null ===
                                            (i = E.filter(
                                              (e) =>
                                                void 0 !==
                                                (null == e
                                                  ? void 0
                                                  : e.megamenu)
                                            )[0]) || void 0 === i
                                            ? void 0
                                            : i.slug,
                                        children: (0, s.jsx)(h.Z.Chevron, {}),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(v.default, {
                                    children:
                                      null ===
                                        (p = E.filter(
                                          (e) =>
                                            void 0 !==
                                            (null == e ? void 0 : e.megamenu)
                                        )[0]) || void 0 === p
                                        ? void 0
                                        : null === (f = p.megamenu) ||
                                          void 0 === f
                                        ? void 0
                                        : f.desc,
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: r().navBtns,
                                children: (0, s.jsx)(d.default, {
                                  onClick: () => {
                                    N(!1), A(-1);
                                  },
                                  color: "dark",
                                  className: (0, o.Z)("d-sm"),
                                  href: u.YJ,
                                  children: "Buy",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: r().right,
                        children: [
                          (0, s.jsx)(x, {
                            active: L,
                            onClick: () => {
                              N((e) => !e), A(-1);
                            },
                          }),
                          (0, s.jsxs)(d.default, {
                            className: r().buyBtn,
                            onClick: () => {
                              N(!1), A(-1);
                            },
                            href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                            children: [
                              (0, s.jsx)("span", {
                                className: "d-md",
                                children: "Buy Now",
                              }),
                              (0, s.jsx)("span", {
                                className: "d-sm",
                                children: "Buy",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  E.map((e, t) =>
                    (0, s.jsx)(
                      m.Fragment,
                      {
                        children:
                          (null == e ? void 0 : e.megamenu) &&
                          (0, s.jsx)("div", {
                            className: (0, o.Z)(
                              r().megamenu,
                              B == t && r().active,
                              "d-md"
                            ),
                            children: (0, s.jsxs)(n.Z, {
                              size: "lg",
                              className: r().megaContainer,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: r().megaLeft,
                                  children: [
                                    (0, s.jsx)(v.default, {
                                      size: "lg",
                                      className: "font-bold",
                                      children: e.megamenu.title,
                                    }),
                                    (0, s.jsx)(v.default, {
                                      children: e.megamenu.desc,
                                    }),
                                    (0, s.jsx)(_.default, {
                                      className: "d-sm",
                                      onClick: () => {
                                        N(!1), A(-1);
                                      },
                                      target: e.target,
                                      color: "light",
                                      href: e.slug,
                                      children: e.megamenu.button,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: r().megaRight,
                                  children: e.megamenu.list.map((t, l) =>
                                    (0, s.jsxs)(
                                      "ul",
                                      {
                                        className: r().megaUl,
                                        children: [
                                          0 == l &&
                                            e.megamenu.button &&
                                            "#" !== e.slug &&
                                            (0, s.jsx)(s.Fragment, {
                                              children: (0, s.jsx)("li", {
                                                children: (0, s.jsxs)(
                                                  _.default,
                                                  {
                                                    className: (0, o.Z)(
                                                      b == e.slug && r().active
                                                    ),
                                                    href: e.slug,
                                                    color: "light",
                                                    target:
                                                      null == e
                                                        ? void 0
                                                        : e.target,
                                                    onClick: () => {
                                                      N(!1), A(-1);
                                                    },
                                                    children: [
                                                      e.megamenu.button,
                                                      (0, s.jsx)(
                                                        h.Z.ExternalLink,
                                                        {
                                                          className:
                                                            r().externalIcon,
                                                        }
                                                      ),
                                                    ],
                                                  }
                                                ),
                                              }),
                                            }),
                                          t.map((e, t) =>
                                            (0, s.jsx)(
                                              "li",
                                              {
                                                children: (
                                                  null == e
                                                    ? void 0
                                                    : e.comingSoon
                                                )
                                                  ? (0, s.jsxs)("span", {
                                                      className: (0, o.Z)(
                                                        r().comingSoonItem
                                                      ),
                                                      children: [
                                                        (0, s.jsx)("span", {
                                                          className:
                                                            r().comingSoonLabel,
                                                          children:
                                                            "Coming soon",
                                                        }),
                                                        (0, s.jsxs)(_.default, {
                                                          className: (0, o.Z)(
                                                            b == e.slug &&
                                                              r().active
                                                          ),
                                                          href: e.slug,
                                                          color: "light",
                                                          target:
                                                            null == e
                                                              ? void 0
                                                              : e.target,
                                                          onClick: () => {
                                                            N(!1), A(-1);
                                                          },
                                                          children: [
                                                            null == e
                                                              ? void 0
                                                              : e.title,
                                                            (null == e
                                                              ? void 0
                                                              : e.new) &&
                                                              (0, s.jsx)(
                                                                "span",
                                                                {
                                                                  className: (0,
                                                                  o.Z)(
                                                                    r().new,
                                                                    c.BD
                                                                  ),
                                                                  children:
                                                                    "New",
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                      ],
                                                    })
                                                  : (0, s.jsxs)(_.default, {
                                                      className: (0, o.Z)(
                                                        b == e.slug &&
                                                          r().active
                                                      ),
                                                      href: e.slug,
                                                      color: "light",
                                                      target:
                                                        null == e
                                                          ? void 0
                                                          : e.target,
                                                      onClick: () => {
                                                        N(!1), A(-1);
                                                      },
                                                      children: [
                                                        null == e
                                                          ? void 0
                                                          : e.title,
                                                        (null == e
                                                          ? void 0
                                                          : e.new) &&
                                                          (0, s.jsx)("span", {
                                                            className: (0, o.Z)(
                                                              r().new,
                                                              c.BD
                                                            ),
                                                            children: "New",
                                                          }),
                                                      ],
                                                    }),
                                              },
                                              t
                                            )
                                          ),
                                        ],
                                      },
                                      l
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                      },
                      t
                    )
                  ),
                ],
              }),
              (0, s.jsx)("div", {
                onMouseEnter: () => {
                  A(-1);
                },
                onClick: () => {
                  A(-1);
                },
                className: (0, o.Z)(r().overlay, B > -1 && r().active),
              }),
            ],
          })
        );
      }
    },
    83683: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return r;
        },
      });
      var s = l(57437),
        n = l(31877),
        i = l(2265);
      function r() {
        let [e, t] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            t(!0);
          }, []),
          (0, s.jsx)(s.Fragment, {
            children:
              e &&
              (0, s.jsx)(n.default, {
                id: "script-head",
                children:
                  "(function (w, d, s, l, i) {\n                w[l] = w[l] || [];\n                w[l].push({\n                  'gtm.start': new Date().getTime(),\n                  event: 'gtm.js',\n                });\n                var f = d.getElementsByTagName(s)[0],\n                  j = d.createElement(s),\n                  dl = l != 'dataLayer' ? '&l=' + l : '';\n                j.async = true;\n                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n                f.parentNode.insertBefore(j, f);\n              })(window, document, 'script', 'dataLayer', 'GTM-WDC5QK7Z')",
              }),
          })
        );
      }
    },
    70499: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        });
      var s = l(57437),
        n = l(87138),
        i = l(60231),
        r = l.n(i),
        a = l(44839),
        o = l(2265),
        c = l(16609),
        d = l(49582),
        u = l(78002),
        g = l(16463);
      function h(e) {
        let {
            href: t,
            className: l,
            children: i,
            target: h,
            onClick: m,
            direction: v,
            directionMobile: _ = v,
            translateY: f = 0,
            translateX: p = 0,
            duration: x = 0.8,
            rotateX: w = 0,
            rotateY: j = 0,
            ease: k = "back.out",
            opacity: y = 0,
            animate: b,
            start: C = 80,
            end: L = 60,
            color: N = "primary",
            disabled: Z,
            type: B = "button",
          } = e,
          A = (0, o.useRef)(null),
          M = (0, o.useRef)(null),
          E = (0, u.Z)(),
          { useGSAP: D, activatedGsap: T } = (0, c.Z)(),
          P = (0, g.usePathname)();
        return (
          D(() => {
            if ("/" == P) {
              let e;
              if (
                (A.current && (e = A),
                M.current && (e = M),
                T && b && e && e.current && (null == E ? void 0 : E.width))
              ) {
                let t, l;
                (null == E ? void 0 : E.width) < 992
                  ? ((p = "right" == _ ? -200 : "left" == _ ? 200 : p),
                    (f = "top" == _ ? 200 : "bottom" == _ ? -200 : f))
                  : ((f = "top" == v ? 200 : "bottom" == v ? -200 : f),
                    (p = "right" == v ? -200 : "left" == v ? 200 : p));
                let s = d.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == E ? void 0 : E.width) < 992 ? C - 10 : C,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == E ? void 0 : E.width) < 992 ? L - 15 : L - 10,
                      "%"
                    ),
                    scrub: 1,
                    markers: !1,
                  },
                });
                return (
                  (t =
                    (null == E ? void 0 : E.width) > 1440
                      ? p
                      : (null == E ? void 0 : E.width) < 992
                      ? ((null == E ? void 0 : E.width) / 500) * p
                      : ((null == E ? void 0 : E.width) / 1440) * p),
                  (l =
                    (null == E ? void 0 : E.width) > 1440
                      ? f
                      : (null == E ? void 0 : E.width) < 992
                      ? ((null == E ? void 0 : E.width) / 500) * f
                      : ((null == E ? void 0 : E.width) / 1440) * f),
                  s
                    .from(e.current, {
                      translateY: l,
                      translateX: t,
                      rotateX: w,
                      rotateY: j,
                      opacity: y,
                      duration: x,
                      ease: k,
                    })
                    .to(e.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => s.kill()
                );
              }
            }
          }, [T, P]),
          (0, s.jsx)(s.Fragment, {
            children: t
              ? h && "_blank" == h
                ? (0, s.jsxs)(n.default, {
                    ref: M,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: m,
                    className: (0, a.Z)(r().button, l, r()[N]),
                    children: [i, (0, s.jsx)("span", { className: r().wrap })],
                  })
                : (0, s.jsxs)(n.default, {
                    ref: M,
                    href: t,
                    target: h,
                    rel: "",
                    onClick: m,
                    className: (0, a.Z)(r().button, l, r()[N]),
                    children: [i, (0, s.jsx)("span", { className: r().wrap })],
                  })
              : (0, s.jsxs)("button", {
                  type: B,
                  disabled: Z,
                  ref: A,
                  onClick: m,
                  className: (0, a.Z)(r().button, l, r()[N]),
                  children: [i, (0, s.jsx)("span", { className: r().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, l) {
      "use strict";
      var s = l(57437),
        n = l(44839),
        i = l(58538),
        r = l.n(i);
      let a = (0, l(2265).forwardRef)((e, t) => {
        let { children: l, className: i, size: a, classic: o, ...c } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            ref: t,
            className: (0, n.Z)(
              r().container,
              i,
              a && r()[a],
              o && r().classic
            ),
            ...c,
            children: l,
          }),
        });
      });
      (a.displayName = "Container"), (t.Z = a);
    },
    43615: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        });
      var s = l(57437),
        n = l(2265),
        i = l(48241),
        r = l.n(i),
        a = l(87138),
        o = l(44839),
        c = l(78002),
        d = l(16609),
        u = l(49582),
        g = l(16463);
      function h(e) {
        let {
            href: t,
            download: l,
            className: i,
            target: h,
            children: m,
            color: v = "primary",
            onClick: _,
            direction: f,
            directionMobile: p = f,
            translateY: x = 0,
            translateX: w = 0,
            duration: j = 0.8,
            rotateX: k = 0,
            rotateY: y = 0,
            ease: b = "back.out",
            opacity: C = 0,
            animate: L,
            start: N = 80,
            end: Z = 60,
            ...B
          } = e,
          A = (0, c.Z)(),
          M = (0, n.useRef)(null),
          { useGSAP: E, activatedGsap: D } = (0, d.Z)(),
          T = (0, g.usePathname)();
        return (
          E(() => {
            if (
              "/" == T &&
              D &&
              L &&
              M.current &&
              (null == A ? void 0 : A.width)
            ) {
              let e, t;
              (null == A ? void 0 : A.width) < 992
                ? ((w = "right" == p ? -200 : "left" == p ? 200 : w),
                  (x = "top" == p ? 200 : "bottom" == p ? -200 : x))
                : ((x = "top" == f ? 200 : "bottom" == f ? -200 : x),
                  (w = "right" == f ? -200 : "left" == f ? 200 : w));
              let l = u.ZP.timeline({
                scrollTrigger: {
                  trigger: M.current,
                  start: "top ".concat(
                    (null == A ? void 0 : A.width) < 992 ? N - 10 : N,
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
                    ? w
                    : (null == A ? void 0 : A.width) < 992
                    ? ((null == A ? void 0 : A.width) / 500) * w
                    : ((null == A ? void 0 : A.width) / 1440) * w),
                (t =
                  (null == A ? void 0 : A.width) > 1440
                    ? x
                    : (null == A ? void 0 : A.width) < 992
                    ? ((null == A ? void 0 : A.width) / 500) * x
                    : ((null == A ? void 0 : A.width) / 1440) * x),
                l
                  .from(M.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: k,
                    rotateY: y,
                    opacity: C,
                    duration: j,
                    ease: b,
                  })
                  .to(M.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => l.kill()
              );
            }
          }, [A, D, T]),
          (0, s.jsx)(s.Fragment, {
            children:
              "#" === t
                ? (0, s.jsx)("p", {
                    className: (0, o.Z)(r().customlink, r()[v], i),
                    children: m,
                  })
                : h && "_blank" == h
                ? (0, s.jsx)(a.default, {
                    ref: M,
                    download: l,
                    href: t,
                    target: h,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: _,
                    className: (0, o.Z)(r().customlink, r()[v], i),
                    ...B,
                    children: m,
                  })
                : (0, s.jsx)(a.default, {
                    ref: M,
                    download: l,
                    href: t,
                    target: h,
                    onClick: _,
                    className: (0, o.Z)(r().customlink, r()[v], i),
                    ...B,
                    children: m,
                  }),
          })
        );
      }
    },
    82415: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return n;
        },
      });
      var s = l(57437);
      l(2265);
      var n = {
        Chevron: function (e) {
          return (0, s.jsx)("svg", {
            ...e,
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M4.5 6.75L9 11.25L13.5 6.75",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Arrowdown: function (e) {
          return (0, s.jsx)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M17.5 7.5L7.5 17.5M7.5 17.5H17.5M7.5 17.5V7.5",
              stroke: "currentColor",
              strokeWidth: "2.20542",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Shipping: function (e) {
          return (0, s.jsxs)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("g", {
                clipPath: "url(#clip0_100_17247)",
                children: (0, s.jsx)("path", {
                  d: "M23.853 5.60763C23.853 5.30315 23.6691 5.02881 23.3875 4.91308L12.7821 0.556314C12.5993 0.481229 12.3943 0.481229 12.2115 0.556314L1.60616 4.91308C1.32454 5.02876 1.14062 5.30315 1.14062 5.60763V19.3924C1.14062 19.6968 1.32449 19.9712 1.60616 20.0869L12.2115 24.4437C12.3923 24.518 12.5956 24.5196 12.7812 24.4436C12.7903 24.4406 12.3887 24.6053 23.3875 20.0869C23.6691 19.9712 23.853 19.6968 23.853 19.3924V5.60763ZM12.4968 9.21579L8.58915 7.6105L17.034 3.92655L21.203 5.63921L12.4968 9.21579ZM2.64234 6.79098L6.01375 8.17599V12.0835C6.01375 12.4981 6.34995 12.8343 6.76461 12.8343C7.17927 12.8343 7.51547 12.4981 7.51547 12.0835V8.79291L11.746 10.5308V22.6289L2.64234 18.8891V6.79098ZM12.4968 2.06259L15.0998 3.1319L6.65489 6.81585L3.7906 5.63916L12.4968 2.06259ZM13.2477 10.5308L22.3513 6.79098V18.8891L13.2477 22.6289V10.5308Z",
                  fill: "#4AB3FF",
                }),
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "clip0_100_17247",
                  children: (0, s.jsx)("rect", {
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
          return (0, s.jsx)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M5.5 12.5H19.5",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Plus: function (e) {
          return (0, s.jsx)("svg", {
            ...e,
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M12.5 5.5V19.5M5.5 12.5H19.5",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        },
        Inter: function (e) {
          return (0, s.jsxs)("svg", {
            ...e,
            width: "155",
            height: "155",
            viewBox: "0 0 155 155",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M77.7652 147.61C116.456 147.61 147.821 116.245 147.821 77.5544C147.821 38.8638 116.456 7.49892 77.7652 7.49892C39.0746 7.49892 7.70972 38.8638 7.70972 77.5544C7.70972 116.245 39.0746 147.61 77.7652 147.61Z",
                fill: "#001EA0",
              }),
              (0, s.jsx)("path", {
                d: "M77.7613 0.580471C35.2133 0.580471 0.799072 34.9946 0.799072 77.5427C0.799072 120.091 35.2133 154.505 77.7613 154.505C120.309 154.505 154.724 120.091 154.724 77.5427C154.724 34.9946 120.309 0.580471 77.7613 0.580471ZM77.7613 143.504C41.3707 143.504 11.7999 113.933 11.7999 77.5427C11.7999 41.1521 41.3707 11.5813 77.7613 11.5813C114.152 11.5813 143.723 41.1521 143.723 77.5427C143.723 113.933 114.152 143.504 77.7613 143.504Z",
                fill: "black",
              }),
              (0, s.jsx)("path", {
                d: "M77.7578 11.57C41.3672 11.57 11.7964 41.1408 11.7964 77.5314C11.7964 113.922 41.3672 143.493 77.7578 143.493C114.148 143.493 143.719 113.922 143.719 77.5314C143.719 41.1408 114.148 11.57 77.7578 11.57ZM39.3799 99.0878L37.9464 115.464C28.4876 105.571 22.7755 92.2679 22.7755 77.5314C22.7755 63.5659 27.9447 50.8167 36.5129 41.1408L41.6821 52.3588C36.7301 59.3958 33.7654 68.1921 33.7654 77.5314C33.7654 85.3395 35.8505 92.7023 39.369 99.0769L39.3799 99.0878ZM53.4539 126.899C49.7182 125.031 46.3083 122.827 43.007 120.188L48.8386 54.661L40.5961 36.9598C43.4522 34.4295 46.4278 32.2359 49.6096 30.2486L66.985 67.4102V93.4625L58.0801 74.3278L53.4648 126.878L53.4539 126.899ZM77.7578 132.503C71.0465 132.503 64.6719 131.297 58.8512 129.202L59.8394 117.658C63.6837 119.417 67.7561 120.622 72.1542 121.176V33.8865C67.5389 34.4404 63.1407 35.7544 59.177 37.6222L54.5616 27.7291C61.5987 24.4278 69.4067 22.5599 77.7578 22.5599C86.1089 22.5599 93.9169 24.4278 100.954 27.7291L96.3386 37.6222C92.3857 35.7544 87.9876 34.4295 83.3614 33.8865V121.176C87.6509 120.622 91.8319 119.417 95.6762 117.658L96.6644 129.202C90.8328 131.287 84.4582 132.503 77.7578 132.503ZM102.051 126.899L97.4354 74.3495L88.5306 93.4842V67.4319L105.906 30.2703C109.099 32.2467 112.063 34.4512 114.919 36.9815L106.677 54.6827L112.509 120.21C109.207 122.849 105.797 125.042 102.062 126.921L102.051 126.899ZM117.547 115.464L116.114 99.0878C119.633 92.7132 121.718 85.3503 121.718 77.5423C121.718 68.1921 118.753 59.4067 113.801 52.3696L118.97 41.1516C127.549 50.8276 132.708 63.5768 132.708 77.5423C132.708 92.2788 126.995 105.582 117.537 115.475L117.547 115.464Z",
                fill: "#001EA0",
              }),
              (0, s.jsx)("path", {
                d: "M37.9617 115.466L39.3952 99.0893C35.8766 92.7147 33.7916 85.3518 33.7916 77.5438C33.7916 68.1936 36.7563 59.4082 41.7083 52.3711L36.5391 41.1531C27.96 50.8291 22.8016 63.5783 22.8016 77.5438C22.8016 92.2803 28.5138 105.583 37.9725 115.476L37.9617 115.466ZM117.552 115.466C127.011 105.572 132.723 92.2694 132.723 77.5329C132.723 63.5674 127.554 50.8182 118.985 41.1423L113.816 52.3603C118.768 59.3973 121.733 68.1936 121.733 77.5329C121.733 85.341 119.648 92.7038 116.129 99.0784L117.563 115.455L117.552 115.466ZM40.6006 36.9722L48.843 54.6734L43.0114 120.2C46.3127 122.839 49.7227 125.033 53.4584 126.912L58.0737 74.3619L66.9786 93.4966V67.4443L49.6032 30.2827C46.4105 32.2591 43.4458 34.4636 40.5897 36.9939L40.6006 36.9722ZM88.535 93.4857L97.4399 74.351L102.055 126.901C105.791 125.033 109.201 122.828 112.502 120.19L106.671 54.6625L114.913 36.9613C112.057 34.431 109.081 32.2374 105.9 30.2501L88.5241 67.4117V93.464L88.535 93.4857ZM54.5661 27.7415L59.1814 37.6346C63.1343 35.7668 67.5325 34.4419 72.1587 33.8989V121.189C67.7605 120.635 63.6882 119.429 59.8438 117.67L58.8556 129.214C64.6872 131.299 71.0618 132.515 77.7622 132.515C84.4626 132.515 90.8481 131.31 96.6689 129.214L95.6806 117.67C91.8363 119.429 87.6554 120.635 83.3658 121.189V33.888C87.9811 34.4419 92.3793 35.7559 96.3431 37.6238L100.958 27.7306C93.9214 24.4293 86.1133 22.5615 77.7622 22.5615C69.4112 22.5615 61.6031 24.4293 54.5661 27.7306V27.7415Z",
                fill: "white",
              }),
            ],
          });
        },
        ExternalLink: function (e) {
          return (0, s.jsx)("svg", {
            ...e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, s.jsx)("path", {
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
    47984: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var s = l(57437),
        n = l(79124),
        i = l(66648);
      l(2265);
      var r = l(69665),
        a = l.n(r),
        o = l(44839);
      function c(e) {
        let {
            alt: t = "BlockDAG",
            src: l,
            width: r,
            height: c,
            hero: d,
            className: u,
            ...g
          } = e,
          h = (0, n.Z)();
        return (0, s.jsx)(s.Fragment, {
          children:
            d || g.priority
              ? (0, s.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().img, u),
                    src: l,
                    alt: t,
                    width: r || 0,
                    height: c || 0,
                    ...g,
                  },
                  1
                )
              : h
              ? (0, s.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().img, u),
                    src: l,
                    alt: t,
                    width: 0,
                    height: 0,
                    ...g,
                  },
                  2
                )
              : (0, s.jsx)(
                  i.default,
                  {
                    className: (0, o.Z)(a().loadingImg, u),
                    src: "/cube.webp",
                    alt: t,
                    width: 0,
                    height: 0,
                    ...g,
                  },
                  3
                ),
        });
      }
    },
    90689: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return c;
        },
      });
      var s = l(57437),
        n = l(2265),
        i = l(2906),
        r = l.n(i),
        a = l(16463),
        o = l(66648);
      function c() {
        let e = (0, a.useRouter)(),
          [t, l] = (0, n.useState)(!1),
          [i, c] = (0, n.useState)({ title: "United Kingdom", code: "UK" });
        return (
          (0, n.useEffect)(() => {
            {
              let e = new URLSearchParams(window.location.search);
              e.has("restricted")
                ? (l(!0), c({ title: "United Kingdom", code: "UK" }))
                : e.has("restricteduae") &&
                  (l(!0), c({ title: "United Arab Emirates", code: "UAE" }));
            }
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: t
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className: "".concat(r().resrictedpopup),
                      children: [
                        (0, s.jsx)("div", {
                          className: r().logo,
                          children: (0, s.jsx)(o.default, {
                            src: "/favicon.png",
                            alt: "BlockDAG",
                            width: 50,
                            height: 50,
                          }),
                        }),
                        (0, s.jsx)("h2", { children: "Forbidden Country" }),
                        (0, s.jsxs)("p", {
                          children: [
                            "This site is not accessible to users from the ",
                            i.code,
                            "; please leave if you are accessing it from within the",
                            " ",
                            i.title,
                            ".",
                            " ",
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: r().btns,
                          children: [
                            (0, s.jsx)("a", {
                              href: "https://google.com",
                              children: "Leave the site",
                            }),
                            (0, s.jsx)("a", {
                              onClick: () => {
                                l(!1), e.replace("/");
                              },
                              children: "Continue to site",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", { className: r().overlay }),
                  ],
                })
              : (0, s.jsx)(s.Fragment, {}),
          })
        );
      }
    },
    21360: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        });
      var s = l(57437),
        n = l(2265),
        i = l(8544),
        r = l.n(i),
        a = l(44839),
        o = l(16609),
        c = l(49582),
        d = l(78002),
        u = l(16463);
      function g(e) {
        let {
            children: t,
            component: l = "p",
            size: i = "md",
            className: g,
            style: h,
            direction: m,
            directionMobile: v = m,
            translateY: _ = 0,
            translateX: f = 0,
            duration: p = 0.8,
            rotateX: x = 0,
            rotateY: w = 0,
            ease: j = "back.out",
            opacity: k = 0,
            animate: y,
            start: b = 80,
            end: C = 60,
            onClick: L,
          } = e,
          N = (0, n.useRef)(null),
          Z = (0, d.Z)(),
          { useGSAP: B, activatedGsap: A } = (0, o.Z)(),
          M = (0, u.usePathname)();
        return (
          B(() => {
            if (
              "/" == M &&
              A &&
              y &&
              N.current &&
              (null == Z ? void 0 : Z.width)
            ) {
              let e, t;
              (null == Z ? void 0 : Z.width) < 992
                ? ((f = "right" == v ? -200 : "left" == v ? 200 : f),
                  (_ = "top" == v ? 200 : "bottom" == v ? -200 : _))
                : ((_ = "top" == m ? 200 : "bottom" == m ? -200 : _),
                  (f = "right" == m ? -200 : "left" == m ? 200 : f));
              let l = c.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? b - 10 : b,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? C - 15 : C - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? f
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * f
                    : ((null == Z ? void 0 : Z.width) / 1440) * f),
                (t =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? _
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * _
                    : ((null == Z ? void 0 : Z.width) / 1440) * _),
                l
                  .from(N.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: x,
                    rotateY: w,
                    opacity: k,
                    duration: p,
                    ease: j,
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
          }, [A, M]),
          (0, s.jsx)(l, {
            onClick: L,
            ref: N,
            className: (0, a.Z)(r().text, r()[i], g),
            style: h,
            children: t,
          })
        );
      }
    },
    31707: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var s = l(57437),
        n = l(2265),
        i = l(44839),
        r = l(26076),
        a = l.n(r),
        o = l(54887),
        c = (e) => {
          let {
              show: t,
              onMouseEnter: l,
              onMouseLeave: r,
              status: c,
              active: d,
              message: u,
            } = e,
            [g, h] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            h(!0);
          }, []);
          let m = t
            ? (0, s.jsx)("div", {
                onMouseEnter: l,
                onMouseLeave: r,
                className: (0, i.Z)(a().toast, a()[c], d && a().active),
                children: u,
              })
            : null;
          if (!g) return null;
          {
            let e = document.getElementById("toast-root");
            return o.createPortal(m, e);
          }
        },
        d = (e) => {
          let { message: t, status: l, duration: i, onRemove: r } = e,
            [a, o] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1),
            [g, h] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              o(!0);
            }, []),
            (0, n.useEffect)(() => {
              h(!0);
              let e = setTimeout(() => {
                h(!1),
                  d ||
                    setTimeout(() => {
                      o(!1), r();
                    }, 300);
              }, i);
              return () => clearTimeout(e);
            }, [i, d, r]),
            (0, s.jsx)(c, {
              show: a,
              onMouseEnter: () => u(!0),
              onMouseLeave: () => u(!1),
              onClose: () => {
                o(!1), r();
              },
              status: l,
              message: t,
              active: g,
              children: t,
            })
          );
        },
        u = l(16700),
        g = () => {
          let [e, t] = (0, n.useState)([]);
          (0, n.useEffect)(() => {
            let e = (e) => {
              t((t) => [...t, e.detail]);
            };
            return (
              window.addEventListener("add-toast", e),
              () => {
                window.removeEventListener("add-toast", e);
              }
            );
          }, []);
          let l = (e) => {
            t((t) => t.filter((t) => t.id !== e));
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              e.map((e) =>
                (0, s.jsx)(
                  d,
                  {
                    message: e.message,
                    status: e.status,
                    duration: e.duration,
                    onRemove: () => l(e.id),
                  },
                  e.id
                )
              ),
              (0, s.jsx)("div", {
                id: "toast-root",
                className: (0, i.Z)(a().toastContainer, u.T$),
              }),
            ],
          });
        };
    },
    16700: function (e, t, l) {
      "use strict";
      l.d(t, {
        BD: function () {
          return d;
        },
        T$: function () {
          return c;
        },
      });
      var s = l(37983),
        n = l.n(s),
        i = l(68941),
        r = l.n(i),
        a = l(68425),
        o = l.n(a);
      let c = n().className,
        d = r().className;
      o().className;
    },
    79124: function (e, t, l) {
      "use strict";
      var s = l(2265),
        n = l(44630);
      t.Z = () => {
        let [e, t] = (0, s.useState)(!1),
          l = (0, n.Z)(),
          i = () => {
            t(!0);
          };
        return (
          (0, s.useEffect)(() => {
            l > 1 && t(!0);
          }, [l]),
          (0, s.useEffect)(
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
          e
        );
      };
    },
    32563: function () {},
    57274: function (e) {
      e.exports = {
        footer: "style_footer__gp24T",
        container: "style_container__Xh6ZX",
        content: "style_content__5GAo4",
        logoArea: "style_logoArea__AaQE5",
        logo: "style_logo__1BeOf",
        socialList: "style_socialList__9gkGN",
        partnerShips: "style_partnerShips__Od6Ay",
        partnerTitle: "style_partnerTitle__szxJb",
        partnerList: "style_partnerList__6cd_z",
        shadow: "style_shadow__HBaD6",
        nav: "style_nav__7CWK2",
        navItem: "style_navItem__BTdBs",
        navTitle: "style_navTitle__zI3o7",
        listArea: "style_listArea__uk3hv",
        hr: "style_hr__br5KE",
        section: "style_section__1uFSi",
        sectionContainer: "style_sectionContainer__EZMVE",
        desc: "style_desc__P47fw",
        btns: "style_btns__iAW9j",
        cube: "style_cube__BVGUR",
      };
    },
    97368: function (e) {
      e.exports = {
        banner: "style_banner__xE8PO",
        heroActive: "style_heroActive__gfqTg",
        header: "style_header__w9GaQ",
        logo: "style_logo__sBWEm",
        nav: "style_nav__zIt6E",
        scrolled: "style_scrolled__0yBRC",
        activeMega: "style_activeMega__Veh5T",
        crActive: "style_crActive__gmr4R",
        right: "style_right__MFhS6",
        active: "style_active__TEbWu",
        container: "style_container__68Ose",
        left: "style_left__A7rTv",
        highlight: "style_highlight__aEqwv",
        new: "style_new__X7svQ",
        megaOpen: "style_megaOpen__LDpqQ",
        navContent: "style_navContent__bINGb",
        megamenu: "style_megamenu__zRv8g",
        navBtns: "style_navBtns__3OqTq",
        megaInfo: "style_megaInfo__vImQz",
        megaInfoTitle: "style_megaInfoTitle__F8wS3",
        navTitle: "style_navTitle__TfVAA",
        externalIcon: "style_externalIcon__XS4i7",
        comingSoonItem: "style_comingSoonItem__d1__z",
        comingSoonLabel: "style_comingSoonLabel__wj_nI",
        buyBtn: "style_buyBtn__2Jmur",
        megaContainer: "style_megaContainer__bBGgf",
        megaLeft: "style_megaLeft__Q5T1G",
        megaRight: "style_megaRight__TeIRG",
        megaUl: "style_megaUl__D6HRu",
        overlay: "style_overlay__RmfUJ",
        overlayEvent: "style_overlayEvent__JSddn",
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
    78322: function (e) {
      e.exports = {
        hamburger: "style_hamburger__vvTaM",
        active: "style_active__v2efS",
      };
    },
    69665: function (e) {
      e.exports = {
        loadingImg: "style_loadingImg__SX0hM",
        img: "style_img__foiEq",
      };
    },
    2906: function (e) {
      e.exports = {
        resrictedpopup: "style_resrictedpopup__WIqVc",
        btns: "style_btns__0SWeW",
        overlay: "style_overlay__kX9j_",
      };
    },
    8544: function (e) {
      e.exports = {
        text: "style_text__Z44aT",
        xs: "style_xs__fVs46",
        sm: "style_sm__RimS5",
        md: "style_md__ZQhe4",
        lg: "style_lg__AdDq0",
        xl: "style_xl__HaD9x",
      };
    },
    26076: function (e) {
      e.exports = {
        toast: "toast_toast__Hf0vh",
        deActiveToast: "toast_deActiveToast__03RvW",
        active: "toast_active__QAZGz",
        activeToast: "toast_activeToast__0FNmn",
        success: "toast_success__NyjXu",
        error: "toast_error__pRoFq",
        info: "toast_info__gHO3_",
        toastContainer: "toast_toastContainer__sew_d",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4762, 1899, 947, 9667, 1808, 5073, 8968, 9437, 922, 9391, 231, 2492,
        3106, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 11027));
      }
    ),
      (_N_E = e.O());
  },
]);
