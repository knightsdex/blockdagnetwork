(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3106],
  {
    13259: function (t, e, r) {
      "use strict";
      r.d(e, {
        $G: function () {
          return p;
        },
        BT: function () {
          return l;
        },
        D3: function () {
          return f;
        },
        PQ: function () {
          return i;
        },
        T5: function () {
          return w;
        },
        UK: function () {
          return g;
        },
        Uz: function () {
          return S;
        },
        XI: function () {
          return b;
        },
        YJ: function () {
          return o;
        },
        br: function () {
          return h;
        },
        ej: function () {
          return u;
        },
        gG: function () {
          return c;
        },
        i4: function () {
          return y;
        },
        ob: function () {
          return P;
        },
        rz: function () {
          return v;
        },
        sc: function () {
          return m;
        },
        uU: function () {
          return s;
        },
        wd: function () {
          return d;
        },
        yM: function () {
          return k;
        },
        zA: function () {
          return a;
        },
      });
      var n = r(20357);
      let o = "https://purchase3.blockdag.network",
        a = "/how-to-buy",
        i = "https://apps.apple.com/us/app/blockdag-x1/id6503609082",
        c = "https://apk.blockdagnetwork.io/BlockDAGv1.6.apk",
        s = "https://api.bdagapiserver.com/api/v2/barong/public/users/metrics",
        u =
          "pk.eyJ1IjoiYmxvY2tkYWduZXR3b3JrIiwiYSI6ImNtN3Z4YjFpMjAxYjEycXNuOW54ZGMwN3MifQ.QNDH25sl5Hwt_OCo1wwT6A",
        l = "https://noteforms.com/forms/amazing-chain-race-buildathon-k31v72",
        d = "https://bdagscan.com/",
        f = "https://ide.bdagscan.com/",
        p = "https://rpc.bdagscan.com/",
        h = "https://wizard.bdagscan.com/",
        g = "https://coldwallet.com/",
        m = "https://academy.blockdag.network/",
        v = "https://wiki.blockdag.network/blockdag-wiki",
        w = "https://presaleapi.blockdag.network",
        b = "https://leadapi.blockdag.network",
        k = "https://blockdag.network/";
      n.env.NEXTAUTH_URL, n.env.NEXT_LOCAL;
      let S = "https://preapi.blockdag.network/",
        y = "https://mainnet.blockdag.network/mainnet",
        P = { headers: { project: k } };
    },
    16609: function (t, e, r) {
      "use strict";
      r.d(e, {
        BaseProvider: function () {
          return w;
        },
        Z: function () {
          return b;
        },
        $: function () {
          return v;
        },
      });
      var n = r(57437),
        o = r(13259),
        a = r(38472);
      let i = async (t) => {
        try {
          return await a.Z.get("".concat(o.Uz).concat(t));
        } catch (t) {
          throw (console.error("Failed to fetch data:", t), t);
        }
      };
      var c = r(762),
        s = r(2265),
        u = r(49582),
        l = r(60019),
        d = r(66098),
        f = r.n(d),
        p = r(78002),
        h = r(16463),
        g = r(44630);
      u.ZP.registerPlugin(l.V, f());
      let m = (0, s.createContext)(void 0),
        v = () => {
          let t = (0, s.useContext)(m);
          if (!t) throw Error("useBase must be used within a WalletProvider");
          return t;
        },
        w = (t) => {
          let { children: e } = t,
            [r, u] = (0, s.useState)(!1),
            [d, f] = (0, s.useState)(!0),
            [v, w] = (0, s.useState)(!1),
            b = (0, p.Z)(),
            k = (0, g.Z)(),
            S = (0, h.usePathname)(),
            [y, P] = (0, s.useState)(!1),
            [T, E] = (0, s.useState)(void 0);
          (0, s.useEffect)(() => {
            (null == b ? void 0 : b.width) &&
              (document.body.classList.add("sizeChanged"),
              setTimeout(() => {
                document.body.classList.remove("sizeChanged");
              }, 50));
          }, [null == b ? void 0 : b.width]);
          let [N, _] = (0, s.useState)(void 0),
            [B, A] = (0, s.useState)(void 0),
            [H, U] = (0, s.useState)({
              ETH: 1,
              BNB: 1,
              USDT: 1,
              NP: 1,
              PAPARA: 1,
            }),
            [M, R] = (0, s.useState)(void 0);
          (0, s.useEffect)(() => {
            B &&
              R(
                (Number(5e9) -
                  Number((null == B ? void 0 : B.stageSoldTokens) || 0)) *
                  0.0291
              );
          }, [B]),
            (0, s.useEffect)(() => {
              d || "/" != S || f(!0);
            }, [d, S]),
            (0, s.useEffect)(() => {
              a.Z.get("".concat(o.T5, "/user-country"), o.ob)
                .then((t) => {
                  200 == t.status ? _(t.data.userCountry) : _("US");
                })
                .catch((t) => {
                  console.log(t), _("US");
                });
            }, []),
            (0, s.useEffect)(() => {
              "/" !== S && P(!1);
            }, [S, k]);
          let Y = async () => {
              try {
                let t = await i("root");
                if (t && t.data) {
                  let e = null == t ? void 0 : t.data;
                  A(null == e ? void 0 : e.coin);
                } else
                  a.Z.get("".concat(o.T5, "/blockdag?project=").concat(o.yM), {
                    headers: { project: o.yM },
                  }).then((t) => {
                    if (200 === t.status) {
                      var e;
                      A(
                        null === (e = t.data) || void 0 === e ? void 0 : e.coin
                      );
                    }
                  });
              } catch (t) {
                a.Z.get("".concat(o.T5, "/blockdag?project=").concat(o.yM), {
                  headers: { project: o.yM },
                }).then((t) => {
                  if (200 === t.status) {
                    var e;
                    A(null === (e = t.data) || void 0 === e ? void 0 : e.coin);
                  }
                });
              }
            },
            Z = async () => {
              try {
                let t = await i("prices");
                if (t && t.data) {
                  let e = t.data;
                  if (e.ETH && e.BNB && e.TRY) {
                    let t = {
                      etherPrice: 1 / e.ETH,
                      bnbPrice: 1 / e.BNB,
                      tryPrice: 1 / e.TRY,
                    };
                    localStorage.setItem("prices", JSON.stringify(t)),
                      U({
                        ETH: 1 / e.ETH,
                        BNB: 1 / e.BNB,
                        USDT: 1,
                        NP: 1,
                        PAPARA: 1 / e.TRY,
                      });
                  }
                } else
                  a.Z.get(
                    "https://min-api.cryptocompare.com/data/price?fsym=usd&tsyms=eth,bnb,try"
                  )
                    .then((t) => {
                      if (200 === t.status) {
                        let e = {
                          etherPrice: 1 / t.data.ETH,
                          bnbPrice: 1 / t.data.BNB,
                          tryPrice: 1 / t.data.TRY,
                        };
                        localStorage.setItem("prices", JSON.stringify(e)),
                          U({
                            ETH: 1 / t.data.ETH,
                            BNB: 1 / t.data.BNB,
                            USDT: 1,
                            NP: 1,
                            PAPARA: 1 / t.data.TRY,
                          });
                      }
                    })
                    .catch((t) => {
                      console.error("Error fetching prices:", t);
                      let e = localStorage.getItem("prices");
                      if (e) {
                        let t = JSON.parse(e);
                        U({
                          ETH: t.etherPrice,
                          BNB: t.bnbPrice,
                          USDT: 1,
                          NP: 1,
                          PAPARA: t.tryPrice,
                        });
                      }
                    });
              } catch (t) {
                a.Z.get(
                  "https://min-api.cryptocompare.com/data/price?fsym=usd&tsyms=eth,bnb,try"
                )
                  .then((t) => {
                    if (200 === t.status) {
                      let e = {
                        etherPrice: 1 / t.data.ETH,
                        bnbPrice: 1 / t.data.BNB,
                        tryPrice: 1 / t.data.TRY,
                      };
                      localStorage.setItem("prices", JSON.stringify(e)),
                        U({
                          ETH: 1 / t.data.ETH,
                          BNB: 1 / t.data.BNB,
                          USDT: 1,
                          NP: 1,
                          PAPARA: 1 / t.data.TRY,
                        });
                    }
                  })
                  .catch((t) => {
                    console.error("Error fetching prices:", t);
                    let e = localStorage.getItem("prices");
                    if (e) {
                      let t = JSON.parse(e);
                      U({
                        ETH: t.etherPrice,
                        BNB: t.bnbPrice,
                        USDT: 1,
                        NP: 1,
                        PAPARA: t.tryPrice,
                      });
                    }
                  });
              }
            },
            O = async () => {
              try {
                let t = await fetch(
                  "https://api.blockdagnetwork.io/api/v2/base/public/current_price"
                );
                if (!t.ok) return;
                let e = await t.json(),
                  r = parseFloat(null == e ? void 0 : e.price);
                if (r > 0) {
                  let t = (Math.floor(1e3 * r) / 1e3)
                    .toFixed(3)
                    .replace(/0+$/, "")
                    .replace(/\.$/, "");
                  E(t);
                }
              } catch (t) {}
            };
          return (
            (0, s.useEffect)(() => {
              Y(), Z(), O();
              let t = setInterval(() => {
                u((t) => !t);
              }, 6e5);
              return () => clearInterval(t);
            }, [r]),
            (0, s.useEffect)(() => {
              (() => {
                {
                  var t, e, r, n;
                  let o = new URLSearchParams(window.location.search),
                    a = o.get("utm_source"),
                    i = o.get("source"),
                    s = o.get("utm_medium"),
                    u = o.get("utm_campaign"),
                    l =
                      (null === (n = window) || void 0 === n
                        ? void 0
                        : null === (r = n.location) || void 0 === r
                        ? void 0
                        : null === (e = r.href) || void 0 === e
                        ? void 0
                        : null === (t = e.split("?")) || void 0 === t
                        ? void 0
                        : t[1]) || "";
                  a &&
                    "Trust_iOS_Browser" !== a &&
                    (0, c.MS)("blockdag.utm_source", a, 1),
                    s && (0, c.MS)("blockdag.utm_medium", s, 1),
                    i && (0, c.MS)("blockdag.source", i, 1),
                    u && (0, c.MS)("blockdag.utm_campaign", u, 1),
                    l && (0, c.MS)("blockdag.all_params", "?".concat(l), 1);
                }
              })();
            }, []),
            (0, s.useEffect)(() => {
              (() => {
                {
                  let t = new URLSearchParams(window.location.search).get(
                    "earnusdt"
                  );
                  t &&
                    "Trust_iOS_Browser" !== t &&
                    (0, c.MS)("blockdag.earnusdt", t, 20);
                }
              })();
            }, []),
            (0, n.jsx)(m.Provider, {
              value: {
                tokenData: B,
                heroActive: v,
                setHeroActive: w,
                country: N,
                prices: H,
                useGSAP: l.V,
                activatedGsap: d,
                crActive: y,
                setCrActive: P,
                remainingCoins: M,
                bdagMarketPrice: T,
              },
              children: e,
            })
          );
        };
      var b = v;
    },
    44630: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(2265);
      function o() {
        let [t, e] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            {
              let t = () => {
                e(window.scrollY);
              };
              return (
                window.addEventListener("scroll", t),
                () => {
                  window.removeEventListener("scroll", t);
                }
              );
            }
          }, []),
          t
        );
      }
    },
    78002: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(2265);
      function o() {
        function t() {
          var t, e;
          return {
            width:
              null === (t = window) || void 0 === t ? void 0 : t.innerWidth,
            height:
              null === (e = window) || void 0 === e ? void 0 : e.innerHeight,
          };
        }
        let [e, r] = (0, n.useState)(t);
        return (
          (0, n.useEffect)(() => {
            var e;
            function n() {
              r(t());
            }
            return (
              null === (e = window) ||
                void 0 === e ||
                e.addEventListener("resize", n),
              () => {
                var t;
                return null === (t = window) || void 0 === t
                  ? void 0
                  : t.removeEventListener("resize", n);
              }
            );
          }, []),
          e
        );
      }
    },
    762: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        let n = new Date();
        n.setTime(n.getTime() + 6e4 * r);
        let o = "expires=" + n.toUTCString();
        (document.cookie =
          t + "=" + e + ";" + o + ";domain=.blockdag.network;path=/"),
          (document.cookie = t + "=" + e + ";" + o + ";path=/");
      }
      r.d(e, {
        Eh: function () {
          return i;
        },
        HN: function () {
          return a;
        },
        MS: function () {
          return n;
        },
        ie: function () {
          return o;
        },
      });
      let o = (t) =>
          t
            ? new Date(t).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : null,
        a = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        i = (t, e) =>
          "John Doe" != t && t
            ? e.find((e) => e.attributes.title === t)
            : e.find((t) => "Jake Morrison" === t.attributes.title);
    },
    58538: function (t) {
      t.exports = {
        container: "style_container__O7qie",
        lg: "style_lg__uab1X",
        sm: "style_sm__gJ0_G",
        classic: "style_classic___AOOd",
      };
    },
  },
]);
