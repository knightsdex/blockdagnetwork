(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    33808: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 38173, 23)),
        Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.bind(n, 14904)),
        Promise.resolve().then(n.bind(n, 42955)),
        Promise.resolve().then(n.bind(n, 97639)),
        Promise.resolve().then(n.bind(n, 49761)),
        Promise.resolve().then(n.bind(n, 29409)),
        Promise.resolve().then(n.bind(n, 92300)),
        Promise.resolve().then(n.t.bind(n, 26766, 23)),
        Promise.resolve().then(n.bind(n, 79336)),
        Promise.resolve().then(n.bind(n, 90062)),
        Promise.resolve().then(n.bind(n, 97885)),
        Promise.resolve().then(n.t.bind(n, 26143, 23)),
        Promise.resolve().then(n.t.bind(n, 72232, 23)),
        Promise.resolve().then(n.bind(n, 9411)),
        Promise.resolve().then(n.t.bind(n, 35234, 23)),
        Promise.resolve().then(n.bind(n, 87452)),
        Promise.resolve().then(n.bind(n, 43377)),
        Promise.resolve().then(n.bind(n, 30021)),
        Promise.resolve().then(n.bind(n, 15858)),
        Promise.resolve().then(n.bind(n, 81079)),
        Promise.resolve().then(n.bind(n, 50958)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.bind(n, 43615)),
        Promise.resolve().then(n.t.bind(n, 18803, 23)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.bind(n, 45419)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    39053: function (e, t, n) {
      (e.exports = n(45240)).tz.load(n(46564));
    },
    45240: function (e, t, n) {
      var s, i, r;
      (r = function (e) {
        "use strict";
        void 0 === e.version && e.default && (e = e.default);
        var t,
          n,
          s = {},
          i = {},
          r = {},
          a = {},
          l = {};
        (e && "string" == typeof e.version) ||
          N(
            "Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/"
          );
        var o = e.version.split("."),
          c = +o[0],
          d = +o[1];
        function h(e) {
          return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48;
        }
        function u(e) {
          var t,
            n = 0,
            s = e.split("."),
            i = s[0],
            r = s[1] || "",
            a = 1,
            l = 0,
            o = 1;
          for (45 === e.charCodeAt(0) && ((n = 1), (o = -1)); n < i.length; n++)
            l = 60 * l + (t = h(i.charCodeAt(n)));
          for (n = 0; n < r.length; n++)
            (a /= 60), (l += (t = h(r.charCodeAt(n))) * a);
          return l * o;
        }
        function m(e) {
          for (var t = 0; t < e.length; t++) e[t] = u(e[t]);
        }
        function _(e, t) {
          var n,
            s = [];
          for (n = 0; n < t.length; n++) s[n] = e[t[n]];
          return s;
        }
        function p(e) {
          var t = e.split("|"),
            n = t[2].split(" "),
            s = t[3].split(""),
            i = t[4].split(" ");
          return (
            m(n),
            m(s),
            m(i),
            (function (e, t) {
              for (var n = 0; n < t; n++)
                e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
              e[t - 1] = 1 / 0;
            })(i, s.length),
            {
              name: t[0],
              abbrs: _(t[1].split(" "), s),
              offsets: _(n, s),
              untils: i,
              population: 0 | t[5],
            }
          );
        }
        function f(e) {
          e && this._set(p(e));
        }
        function g(e, t) {
          (this.name = e), (this.zones = t);
        }
        function y(e) {
          var t = e.toTimeString(),
            n = t.match(/\([a-z ]+\)/i);
          "GMT" ===
            (n =
              n && n[0]
                ? (n = n[0].match(/[A-Z]/g))
                  ? n.join("")
                  : void 0
                : (n = t.match(/[A-Z]{3,5}/g))
                ? n[0]
                : void 0) && (n = void 0),
            (this.at = +e),
            (this.abbr = n),
            (this.offset = e.getTimezoneOffset());
        }
        function x(e) {
          (this.zone = e), (this.offsetScore = 0), (this.abbrScore = 0);
        }
        function b(e, t) {
          return e.offsetScore !== t.offsetScore
            ? e.offsetScore - t.offsetScore
            : e.abbrScore !== t.abbrScore
            ? e.abbrScore - t.abbrScore
            : e.zone.population !== t.zone.population
            ? t.zone.population - e.zone.population
            : t.zone.name.localeCompare(e.zone.name);
        }
        function v(e) {
          return (e || "").toLowerCase().replace(/\//g, "_");
        }
        function w(e) {
          var t, n, i, r;
          for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++)
            (s[(r = v((n = (i = e[t].split("|"))[0])))] = e[t]),
              (a[r] = n),
              (function (e, t) {
                var n, s;
                for (m(t), n = 0; n < t.length; n++)
                  (l[(s = t[n])] = l[s] || {}), (l[s][e] = !0);
              })(r, i[2].split(" "));
        }
        function j(e, t) {
          var n,
            r = s[(e = v(e))];
          return r instanceof f
            ? r
            : "string" == typeof r
            ? ((r = new f(r)), (s[e] = r), r)
            : i[e] && t !== j && (n = j(i[e], j))
            ? ((r = s[e] = new f())._set(n), (r.name = a[e]), r)
            : null;
        }
        function k(e) {
          var t, n, s, r;
          for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++)
            (s = v((n = e[t].split("|"))[0])),
              (r = v(n[1])),
              (i[s] = r),
              (a[s] = n[0]),
              (i[r] = s),
              (a[r] = n[1]);
        }
        function C(e) {
          var t = "X" === e._f || "x" === e._f;
          return !!(e._a && void 0 === e._tzm && !t);
        }
        function N(e) {
          "undefined" != typeof console &&
            "function" == typeof console.error &&
            console.error(e);
        }
        function A(t) {
          var n,
            s = Array.prototype.slice.call(arguments, 0, -1),
            i = arguments[arguments.length - 1],
            r = e.utc.apply(null, s);
          return (
            !e.isMoment(t) &&
              C(r) &&
              (n = j(i)) &&
              r.add(n.parse(r), "minutes"),
            r.tz(i),
            r
          );
        }
        (c < 2 || (2 === c && d < 6)) &&
          N(
            "Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " +
              e.version +
              ". See momentjs.com"
          ),
          (f.prototype = {
            _set: function (e) {
              (this.name = e.name),
                (this.abbrs = e.abbrs),
                (this.untils = e.untils),
                (this.offsets = e.offsets),
                (this.population = e.population);
            },
            _index: function (e) {
              var t;
              if (
                (t = (function (e, t) {
                  var n,
                    s = t.length;
                  if (e < t[0]) return 0;
                  if (s > 1 && t[s - 1] === 1 / 0 && e >= t[s - 2])
                    return s - 1;
                  if (e >= t[s - 1]) return -1;
                  for (var i = 0, r = s - 1; r - i > 1; )
                    t[(n = Math.floor((i + r) / 2))] <= e ? (i = n) : (r = n);
                  return r;
                })(+e, this.untils)) >= 0
              )
                return t;
            },
            countries: function () {
              var e = this.name;
              return Object.keys(r).filter(function (t) {
                return -1 !== r[t].zones.indexOf(e);
              });
            },
            parse: function (e) {
              var t,
                n,
                s,
                i,
                r = +e,
                a = this.offsets,
                l = this.untils,
                o = l.length - 1;
              for (i = 0; i < o; i++)
                if (
                  ((t = a[i]),
                  (n = a[i + 1]),
                  (s = a[i ? i - 1 : i]),
                  t < n && A.moveAmbiguousForward
                    ? (t = n)
                    : t > s && A.moveInvalidForward && (t = s),
                  r < l[i] - 6e4 * t)
                )
                  return a[i];
              return a[o];
            },
            abbr: function (e) {
              return this.abbrs[this._index(e)];
            },
            offset: function (e) {
              return (
                N("zone.offset has been deprecated in favor of zone.utcOffset"),
                this.offsets[this._index(e)]
              );
            },
            utcOffset: function (e) {
              return this.offsets[this._index(e)];
            },
          }),
          (x.prototype.scoreOffsetAt = function (e) {
            (this.offsetScore += Math.abs(
              this.zone.utcOffset(e.at) - e.offset
            )),
              this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr &&
                this.abbrScore++;
          }),
          (A.version = "0.5.46"),
          (A.dataVersion = ""),
          (A._zones = s),
          (A._links = i),
          (A._names = a),
          (A._countries = r),
          (A.add = w),
          (A.link = k),
          (A.load = function (e) {
            w(e.zones),
              k(e.links),
              (function (e) {
                var t, n, s, i;
                if (e && e.length)
                  for (t = 0; t < e.length; t++)
                    (n = (i = e[t].split("|"))[0].toUpperCase()),
                      (s = i[1].split(" ")),
                      (r[n] = new g(n, s));
              })(e.countries),
              (A.dataVersion = e.version);
          }),
          (A.zone = j),
          (A.zoneExists = function e(t) {
            return (
              e.didShowError ||
                ((e.didShowError = !0),
                N(
                  "moment.tz.zoneExists('" +
                    t +
                    "') has been deprecated in favor of !moment.tz.zone('" +
                    t +
                    "')"
                )),
              !!j(t)
            );
          }),
          (A.guess = function (e) {
            return (
              (!n || e) &&
                (n = (function () {
                  try {
                    var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (e && e.length > 3) {
                      var t = a[v(e)];
                      if (t) return t;
                      N(
                        "Moment Timezone found " +
                          e +
                          " from the Intl api, but did not have that data loaded."
                      );
                    }
                  } catch (e) {}
                  var n,
                    s,
                    i,
                    r = (function () {
                      var e,
                        t,
                        n,
                        s,
                        i = new Date().getFullYear() - 2,
                        r = new y(new Date(i, 0, 1)),
                        a = r.offset,
                        l = [r];
                      for (s = 1; s < 48; s++)
                        (n = new Date(i, s, 1).getTimezoneOffset()) !== a &&
                          (l.push(
                            (e = (function (e, t) {
                              for (
                                var n, s;
                                (s = (((t.at - e.at) / 12e4) | 0) * 6e4);

                              )
                                (n = new y(new Date(e.at + s))).offset ===
                                e.offset
                                  ? (e = n)
                                  : (t = n);
                              return e;
                            })(r, (t = new y(new Date(i, s, 1)))))
                          ),
                          l.push(new y(new Date(e.at + 6e4))),
                          (r = t),
                          (a = n));
                      for (s = 0; s < 4; s++)
                        l.push(new y(new Date(i + s, 0, 1))),
                          l.push(new y(new Date(i + s, 6, 1)));
                      return l;
                    })(),
                    o = r.length,
                    c = (function (e) {
                      var t,
                        n,
                        s,
                        i,
                        r = e.length,
                        o = {},
                        c = [],
                        d = {};
                      for (t = 0; t < r; t++)
                        if (((s = e[t].offset), !d.hasOwnProperty(s))) {
                          for (n in (i = l[s] || {}))
                            i.hasOwnProperty(n) && (o[n] = !0);
                          d[s] = !0;
                        }
                      for (t in o) o.hasOwnProperty(t) && c.push(a[t]);
                      return c;
                    })(r),
                    d = [];
                  for (s = 0; s < c.length; s++) {
                    for (i = 0, n = new x(j(c[s]), o); i < o; i++)
                      n.scoreOffsetAt(r[i]);
                    d.push(n);
                  }
                  return d.sort(b), d.length > 0 ? d[0].zone.name : void 0;
                })()),
              n
            );
          }),
          (A.names = function () {
            var e,
              t = [];
            for (e in a)
              a.hasOwnProperty(e) && (s[e] || s[i[e]]) && a[e] && t.push(a[e]);
            return t.sort();
          }),
          (A.Zone = f),
          (A.unpack = p),
          (A.unpackBase60 = u),
          (A.needsOffset = C),
          (A.moveInvalidForward = !0),
          (A.moveAmbiguousForward = !1),
          (A.countries = function () {
            return Object.keys(r);
          }),
          (A.zonesForCountry = function (e, t) {
            if (!(e = r[e.toUpperCase()] || null)) return null;
            var n = e.zones.sort();
            return t
              ? n.map(function (e) {
                  var t = j(e);
                  return { name: e, offset: t.utcOffset(new Date()) };
                })
              : n;
          });
        var L = e.fn;
        function B(e) {
          return function () {
            return this._z ? this._z.abbr(this) : e.call(this);
          };
        }
        function Z(e) {
          return function () {
            return (this._z = null), e.apply(this, arguments);
          };
        }
        (e.tz = A),
          (e.defaultZone = null),
          (e.updateOffset = function (t, n) {
            var s,
              i = e.defaultZone;
            if (
              (void 0 === t._z &&
                (i &&
                  C(t) &&
                  !t._isUTC &&
                  t.isValid() &&
                  ((t._d = e.utc(t._a)._d), t.utc().add(i.parse(t), "minutes")),
                (t._z = i)),
              t._z)
            ) {
              if (
                (16 > Math.abs((s = t._z.utcOffset(t))) && (s /= 60),
                void 0 !== t.utcOffset)
              ) {
                var r = t._z;
                t.utcOffset(-s, n), (t._z = r);
              } else t.zone(s, n);
            }
          }),
          (L.tz = function (t, n) {
            if (t) {
              if ("string" != typeof t)
                throw Error(
                  "Time zone name must be a string, got " +
                    t +
                    " [" +
                    typeof t +
                    "]"
                );
              return (
                (this._z = j(t)),
                this._z
                  ? e.updateOffset(this, n)
                  : N(
                      "Moment Timezone has no data for " +
                        t +
                        ". See http://momentjs.com/timezone/docs/#/data-loading/."
                    ),
                this
              );
            }
            if (this._z) return this._z.name;
          }),
          (L.zoneName = B(L.zoneName)),
          (L.zoneAbbr = B(L.zoneAbbr)),
          (L.utc = Z(L.utc)),
          (L.local = Z(L.local)),
          (L.utcOffset =
            ((t = L.utcOffset),
            function () {
              return (
                arguments.length > 0 && (this._z = null),
                t.apply(this, arguments)
              );
            })),
          (e.tz.setDefault = function (t) {
            return (
              (c < 2 || (2 === c && d < 9)) &&
                N(
                  "Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " +
                    e.version +
                    "."
                ),
              (e.defaultZone = t ? j(t) : null),
              e
            );
          });
        var T = e.momentProperties;
        return (
          "[object Array]" === Object.prototype.toString.call(T)
            ? (T.push("_z"), T.push("_a"))
            : T && (T._z = null),
          e
        );
      }),
        e.exports
          ? (e.exports = r(n(19212)))
          : ((s = [n(19212)]),
            void 0 === (i = r.apply(t, s)) || (e.exports = i));
    },
    87138: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var s = n(231),
        i = n.n(s);
    },
    42955: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return m;
        },
      });
      var s = n(57437),
        i = n(32913),
        r = n(45814),
        a = n.n(r),
        l = n(42625),
        o = n(44839),
        c = n(87580),
        d = n(66648),
        h = n(16700),
        u = n(70499);
      function m(e) {
        let {} = e;
        return (0, s.jsx)(i.Z, {
          className: (0, o.Z)(a().hero),
          children: (0, s.jsxs)(l.Z, {
            className: (0, o.Z)(a().container),
            children: [
              (0, s.jsx)("div", {
                className: a().top,
                children: (0, s.jsx)("div", {
                  className: (0, o.Z)(a().content),
                  children: (0, s.jsx)("div", {
                    className: (0, o.Z)(a().texts),
                    children: (0, s.jsxs)(c.default, {
                      component: "h1",
                      className: (0, o.Z)(a().title),
                      children: [
                        "the Numbers Don’t Lie",
                        (0, s.jsx)("br", {}),
                        "BlockDAG is rewriting the rules of crypto",
                      ],
                    }),
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: a().links,
                children: (0, s.jsx)("div", {
                  className: a().list,
                  children: [
                    {
                      icon: "/images/key-stats/stat1.svg",
                      title: "312,000+",
                      subtitle: "Holders and Counting",
                      desc: "Growing by 1,000+ daily",
                    },
                    {
                      icon: "/images/key-stats/stat3.svg",
                      title: "19,000",
                      subtitle: "Miners",
                      desc: "(X10/X30/X100) being shipped & scaling to 2,000/week",
                    },
                    {
                      icon: "/images/key-stats/stat4.svg",
                      title: "3M+",
                      subtitle: "Users on the X1 App",
                      desc: "Mining BDAG daily",
                    },
                    {
                      icon: "/images/key-stats/stat5.svg",
                      title: "325,000+",
                      subtitle: "A community across 130+ countries",
                      desc: "Mining BDAG daily",
                    },
                  ].map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: a().listItem,
                        children: (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(d.default, {
                              src: e.icon,
                              width: 44,
                              height: 44,
                              className: a().icon,
                              alt: "external",
                            }),
                            (0, s.jsx)("h3", {
                              className: (0, o.Z)(a().title, h.BD),
                              children: e.title,
                            }),
                            (0, s.jsx)("h4", {
                              className: a().subtitle,
                              children: e.subtitle,
                            }),
                            (0, s.jsx)("p", {
                              className: a().desc,
                              children: e.desc,
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          }),
        });
      }
    },
    97639: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return _;
        },
      });
      var s = n(57437),
        i = n(32913),
        r = n(13913),
        a = n.n(r),
        l = n(42625),
        o = n(21360),
        c = n(87580),
        d = n(81079),
        h = n(66648),
        u = n(70499),
        m = n(87138);
      function _(e) {
        let {} = e;
        return (0, s.jsx)(i.Z, {
          color: "light",
          className: a().exchange,
          children: (0, s.jsxs)(l.Z, {
            className: a().container,
            children: [
              (0, s.jsx)(d.default, {
                direction: "right",
                className: a().image,
                children: (0, s.jsx)(h.default, {
                  src: "/images/home/exchange.webp",
                  alt: "Exchange Listings",
                  width: 424,
                  height: 440,
                }),
              }),
              (0, s.jsxs)("div", {
                className: a().content,
                children: [
                  (0, s.jsx)(c.default, {
                    animate: !0,
                    direction: "left",
                    className: a().title,
                    children: "Top Exchange Listings Confirmed",
                  }),
                  (0, s.jsx)(o.default, {
                    animate: !0,
                    size: "lg",
                    direction: "left",
                    className: "font-bold",
                    children:
                      "BlockDAG (BDAG) is officially confirmed for launch on major global exchanges including:",
                  }),
                  (0, s.jsx)("div", {
                    className: a().logos,
                    children: [
                      {
                        title: "lbank",
                        src: "/images/home/exchanges/lbank.svg",
                      },
                      { title: "xt", src: "/images/home/exchanges/xt.svg" },
                      {
                        title: "coinstore",
                        src: "/images/home/exchanges/coinstore.svg",
                      },
                      {
                        title: "bitmart",
                        src: "/images/home/exchanges/bitmart.svg",
                      },
                      { title: "weex", src: "/images/home/exchanges/weex.svg" },
                      {
                        title: "coinmarketcap",
                        src: "/images/home/exchanges/coinmarketcap.svg",
                      },
                      { title: "btcc", src: "/images/home/exchanges/btcc.svg" },
                      { title: "btse", src: "/images/home/exchanges/btse.svg" },
                      {
                        title: "bifinance",
                        src: "/images/home/exchanges/bifinance.svg",
                      },
                      {
                        title: "biconomy",
                        src: "/images/home/exchanges/biconomy.svg",
                      },
                      { title: "2b", src: "/images/home/exchanges/2b.svg" },
                    ].map((e, t) =>
                      (0, s.jsx)(
                        d.default,
                        {
                          direction: "left",
                          className: a().logo,
                          children: e.href
                            ? (0, s.jsx)(m.default, {
                                href: e.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, s.jsx)(h.default, {
                                  src: e.src,
                                  alt: e.title,
                                  width: 75,
                                  height: 20,
                                }),
                              })
                            : (0, s.jsx)(h.default, {
                                src: e.src,
                                alt: e.title,
                                width: 75,
                                height: 20,
                              }),
                        },
                        t
                      )
                    ),
                  }),
                  (0, s.jsx)(o.default, {
                    animate: !0,
                    direction: "left",
                    className: "font-bold md:mt-[-20px]",
                    children: "+15 MORE Tier 1 and US exchanges",
                  }),
                  (0, s.jsx)(u.default, {
                    animate: !0,
                    direction: "left",
                    href: "https://x.com/BDAGnetworkCoin",
                    target: "_blank",
                    children: "Follow Us for Real-Time Listings",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    49761: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return _;
        },
      });
      var s = n(57437),
        i = n(87580),
        r = n(95474),
        a = n.n(r),
        l = n(42625),
        o = n(21360),
        c = n(70499),
        d = n(81079),
        h = n(47984),
        u = n(2265),
        m = n(44630);
      function _(e) {
        let {} = e,
          t = (0, m.Z)(),
          [n, r] = (0, u.useState)(!1);
        return (
          (0, u.useEffect)(() => {
            t > 200 && r(!0);
          }, [t]),
          (0, s.jsx)("section", {
            className: a().expansionStrategy,
            children: (0, s.jsxs)(l.Z, {
              className: a().content,
              children: [
                (0, s.jsxs)("div", {
                  className: a().contentLeft,
                  children: [
                    (0, s.jsxs)(i.default, {
                      size: "lg",
                      className: a().title,
                      children: [
                        "BlockDAG ",
                        (0, s.jsx)("br", {}),
                        " Growth ",
                        (0, s.jsx)("br", {}),
                        " Strategy",
                      ],
                    }),
                    (0, s.jsx)(o.default, {
                      size: "lg",
                      className: a().description,
                      children:
                        "BlockDAG’s global launch follows a carefully structured strategy designed to protect long-term value while supporting sustainable ecosystem growth. Instead of rushing directly into full market access, the launch is executed in controlled phases that focus on exchange expansion, liquidity strength, miner deployment, and network stability. This approach ensures that the infrastructure is fully prepared before global deposits open, allowing the market to grow in a healthy and balanced way.",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: a().contentRight,
                  children: (0, s.jsx)(d.default, {
                    animate: !1,
                    translateY: -300,
                    opacity: 1,
                    start: 60,
                    end: 0,
                    ease: "back.out",
                    className: a().gifArea,
                    children:
                      n &&
                      (0, s.jsx)(h.default, {
                        src: "/3d.gif",
                        width: 400,
                        height: 375,
                        alt: "BlockDAG",
                      }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    29409: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return p;
        },
      });
      var s = n(57437),
        i = n(32913),
        r = n(42625),
        a = n(58350),
        l = n(82415),
        o = n(47391),
        c = n.n(o),
        d = n(2265);
      let h = [
        {
          q: "Which Exchanges are listing and when do they go live?",
          f: [
            "19th February Staking and Earn contract live on Website",
            "March 5th trading on LBank, Bitmart, Coinstore",
            "March 10th expanding to trading futures on Coinstore, LBank, BitMart, Pionex, Biconomy, BTCC, BTSE, Bifinance & Weex",
            "March 20th expanded trading on 4 more exchanges",
            "March 24th BlockDAG goes live on 2 DEX exchanges Hyperliquid & dYdX",
            "March 28th BlockDAG adds trading on 4 more exchanges",
            "April 5th BlockDAG adds trading on 7 more exchanges.",
            "April 20th BlockDAG Super Application",
          ],
        },
        {
          q: "Which exchanges is BDAG launching on?",
          a: "BDAG is launching across both centralized and decentralized exchanges.\n\nOn the DEX side, BDAG will be available on Uniswap.",
          f: [],
          a2: "In addition, BDAG has multiple centralized exchange (CEX) listings confirmed, with several more exchanges already contracted and in final coordination stages.\n\nListings will be announced progressively, in line with each exchange’s disclosure policies and go-live requirements. As standard practice, only exchanges permitted to be named publicly are disclosed in advance, with further listings announced as they go live.",
        },
        {
          q: "Do I have to pay any fees to receive my BDAG coins? What's the process?",
          a: "No- Process (high level): connect the same wallet you bought with, vesting activates on-chain.",
        },
        {
          q: "If I purchased a Golden Ticket, when will I receive my coins?",
          a: "Golden Ticket = Early Airdrop. BDAG coins are airdropped at TGE/Launch, and that listings are 1 week later, so “early airdrop” is airdrop of your BDAG Coins slightly earlier days after TGE, however this does not change your ability to trade before listings, on the 16th February.",
        },
        {
          q: "Will you do something for early investors?",
          a: "Any additional benefits for early participants are only applicable where a specific promotional claim or incentive was explicitly included at the time of purchase (for example, Golden Ticket or other defined promotional campaigns).\n\nThere are no retroactive rewards, discretionary bonuses, or blanket incentives applied outside of those clearly stated promotions. All allocations and benefits are distributed strictly according to the original purchase terms, promotional conditions, and vesting schedules.",
        },
        {
          q: "Can I still change my wallet address?",
          a: "Wallet address changes were allowed as a once-off update only and are now closed to protect allocation integrity ahead of TGE.",
        },
        {
          q: "Legal Structure Clarification",
          a: "BlockDAG confirms that it no longer conducts any business activities from, within, or connected to the Republic of Seychelles. The company does not maintain operations, offices, management functions, or services in Seychelles. Any previous references, statements, or information suggesting that the company operates from or is based in Seychelles are outdated and should be disregarded. Such references relate only to historical matters and do not reflect the company’s current operational structure.\n\nThe company does not solicit business, offer services, or carry out activities in or from the Republic of Seychelles.",
        },
      ];
      function u(e) {
        let t;
        let n = /([^\s]+)-\((https?:\/\/[^\s)]+)\)/g,
          i = [],
          r = 0;
        for (; null !== (t = n.exec(e)); )
          t.index > r && i.push(e.slice(r, t.index)),
            i.push(
              (0, s.jsx)(
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
            (r = t.index + t[0].length);
        return r < e.length && i.push(e.slice(r)), i.length > 0 ? i : e;
      }
      function m(e) {
        let t = e.split(/(\n+)/);
        return (0, s.jsx)("p", {
          children: t.map((e, t) => {
            if (e.match(/^\n+$/)) {
              let n = e.length;
              return (0, s.jsx)(
                d.Fragment,
                {
                  children: Array.from({ length: n }).map((e, t) =>
                    (0, s.jsx)("br", {}, t)
                  ),
                },
                t
              );
            }
            return (0, s.jsx)(d.Fragment, { children: u(e) }, t);
          }),
        });
      }
      function _(e) {
        let { q: t, a: n, f: i, a2: r, isOpen: a, onClick: o } = e,
          h = (0, d.useRef)(null),
          [_, p] = (0, d.useState)(0);
        return (
          (0, d.useEffect)(() => {
            h.current && (a ? p(h.current.scrollHeight) : p(0));
          }, [a]),
          (0, s.jsxs)("div", {
            className: ""
              .concat(c().accordionItem, " ")
              .concat(a ? c().active : ""),
            children: [
              (0, s.jsxs)("button", {
                className: c().accordionHeader,
                onClick: o,
                children: [
                  (0, s.jsx)("span", { className: c().question, children: t }),
                  (0, s.jsx)("span", {
                    className: c().iconWrapper,
                    children: a
                      ? (0, s.jsx)(l.Z.Minus, { className: c().icon })
                      : (0, s.jsx)(l.Z.Plus, { className: c().icon }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: c().accordionContent,
                style: { height: _ },
                ref: h,
                children: (0, s.jsxs)("div", {
                  className: c().answerWrapper,
                  children: [
                    n && m(n),
                    i &&
                      i.length > 0 &&
                      (0, s.jsx)("ul", {
                        children: i.map((e, t) =>
                          (0, s.jsx)("li", { children: u(e) }, t)
                        ),
                      }),
                    r && m(r),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function p() {
        let [e, t] = (0, d.useState)(-1),
          n = (n) => {
            t(e === n ? -1 : n);
          };
        return (0, s.jsx)(i.Z, {
          className: c().mainFaqs,
          children: (0, s.jsxs)(r.Z, {
            className: c().container,
            children: [
              (0, s.jsx)(a.Z, {
                align: "left",
                subtitle: "FAQS",
                title: "Answers For Common Questions",
              }),
              (0, s.jsx)("div", {
                className: c().faqsArea,
                children: h.map((t, i) =>
                  (0, s.jsx)(
                    _,
                    {
                      q: t.q,
                      a: t.a,
                      f: t.f,
                      a2: t.a2,
                      isOpen: e === i,
                      onClick: () => n(i),
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    79336: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return D;
        },
      });
      var s = n(57437),
        i = n(33375),
        r = n.n(i),
        a = n(32913),
        l = n(2265),
        o = n(44839),
        c = n(44630),
        d = n(42625),
        h = n(82415),
        u = n(79124),
        m = n(47984),
        _ = n(16463),
        p = n(5540),
        f = n(53267),
        g = n(87580),
        y = n(13259),
        x = n(47062),
        b = n.n(x),
        v = n(16700),
        w = n(70499),
        j = n(87737),
        k = n.n(j);
      function C(e) {
        let { innerPage: t, dark: n } = e;
        return (0, s.jsxs)("div", {
          className: (0, o.Z)(
            k().presalelogos,
            t && k().innerPage,
            n && k().dark
          ),
          children: [
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconCry,
                src: "/icons/eth.svg",
                alt: "eth",
                width: 20,
                height: 20,
              }),
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconCry,
                src: "/icons/usdt.svg",
                alt: "eth",
                width: 20,
                height: 20,
              }),
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconCry,
                src: "/icons/bnb.svg",
                alt: "eth",
                width: 20,
                height: 20,
              }),
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconVisa,
                src: "/icons/visa.svg",
                alt: "eth",
                width: 0,
                height: 0,
              }),
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconMastercard,
                src: "/icons/mastercard.svg",
                alt: "eth",
                width: 0,
                height: 0,
              }),
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconPays,
                src: "/icons/gpay.svg",
                alt: "eth",
                width: 0,
                height: 0,
              }),
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)(m.default, {
                hero: !0,
                className: k().iconPays,
                src: "/icons/applepay.svg",
                alt: "eth",
                width: 0,
                height: 0,
              }),
            }),
            n &&
              (0, s.jsx)(w.default, {
                className: k().button,
                href: y.YJ,
                target: "_blank",
                color: "primary",
                children: (0, s.jsxs)("span", {
                  children: [
                    "Buy ",
                    (0, s.jsx)("span", { className: "d-md", children: " Now" }),
                  ],
                }),
              }),
          ],
        });
      }
      function N(e) {
        let { active: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: (0, o.Z)(b().presaleislive, t && b().active),
              children: [
                (0, s.jsxs)("p", {
                  className: (0, o.Z)(b().presale, v.BD),
                  children: [
                    "SWAP IS ",
                    (0, s.jsx)("span", { children: "LIVE" }),
                    " NOW",
                  ],
                }),
                (0, s.jsx)(w.default, {
                  className: b().button,
                  href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                  target: "_blank",
                  color: "primary",
                  children: (0, s.jsx)("span", { children: "Buy Now " }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: (0, o.Z)(b().presaleislivesec, !t && b().active),
              children: [
                (0, s.jsxs)("p", {
                  className: (0, o.Z)(b().presale, v.BD),
                  children: [
                    "Presale is ",
                    (0, s.jsx)("span", { children: "Live" }),
                  ],
                }),
                (0, s.jsx)(C, { dark: !0 }),
              ],
            }),
          ],
        });
      }
      var A = n(39053),
        L = n.n(A),
        B = n(21365),
        Z = n.n(B),
        T = (e) => {
          let { className: t, ctLondon: n } = e,
            i = L().tz(n || "2025-01-31 18:00", "Europe/London"),
            r = () => {
              let e = L()(),
                t = i.diff(e, "seconds");
              return t <= 0
                ? null
                : {
                    days: Math.floor(t / 86400),
                    hours: Math.floor((t / 3600) % 24),
                    minutes: Math.floor((t / 60) % 60),
                    seconds: t % 60,
                  };
            },
            [a, c] = (0, l.useState)(r()),
            [d, h] = (0, l.useState)(!1);
          if (
            ((0, l.useEffect)(() => {
              h(!0);
            }, []),
            (0, l.useEffect)(() => {
              if (!d || !a) return;
              let e = setInterval(() => {
                c(r());
              }, 1e3);
              return () => clearInterval(e);
            }, [d, a]),
            !a || !d)
          )
            return (0, s.jsx)("div", {
              className: (0, o.Z)(Z().countArea, t, v.BD),
            });
          let { days: u, hours: m, minutes: _, seconds: p } = a;
          return (0, s.jsx)("div", {
            className: (0, o.Z)(Z().countArea, t, v.BD),
            children: (0, s.jsxs)("div", {
              className: Z().counter,
              children: [
                (0, s.jsx)("div", {
                  className: Z().box,
                  style: {
                    "--percent": "".concat(100 * Math.min(u / 30, 1), "%"),
                  },
                  children: (0, s.jsx)("div", {
                    className: Z().numbers,
                    children: (0, s.jsx)("span", {
                      children: u < 10 ? "0".concat(u) : u,
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: Z().box,
                  style: { "--percent": "".concat((m / 24) * 100, "%") },
                  children: (0, s.jsx)("div", {
                    className: Z().numbers,
                    children: (0, s.jsx)("span", {
                      children: m < 10 ? "0".concat(m) : m,
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: Z().box,
                  style: { "--percent": "".concat((_ / 60) * 100, "%") },
                  children: (0, s.jsx)("div", {
                    className: Z().numbers,
                    children: (0, s.jsx)("span", {
                      children: _ < 10 ? "0".concat(_) : _,
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: Z().box,
                  style: { "--percent": "".concat((p / 60) * 100, "%") },
                  children: (0, s.jsx)("div", {
                    className: Z().numbers,
                    children: (0, s.jsx)("span", {
                      children: p < 10 ? "0".concat(p) : p,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        M = n(16609);
      function D(e) {
        let {} = e,
          t = (0, c.Z)(),
          n = (0, _.useRouter)(),
          [i, x] = (0, l.useState)(0),
          b = (0, u.Z)(),
          { bdagMarketPrice: v } = (0, M.$)(),
          w = (0, l.useRef)(null),
          [j] = (0, l.useState)(!1),
          k = [
            {
              img: "/images/home/bmp-banner.webp",
              mobileImg: "/images/home/bmp-banner-mobile.webp",
              href: "".concat(y.YJ),
              desc: void 0,
              wide: void 0,
              sliderDuration: 4e3,
              video: void 0,
              content: (0, s.jsx)("div", {
                className: r().title4wrapper,
                children: (0, s.jsx)("iframe", {
                  src: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                  width: "50%",
                  height: "600",
                  style: {
                    border: "none",
                    borderRadius: "16px",
                  },
                  allow: "clipboard-write; clipboard-read",
                }),
              }),
              imgClass: r().bannerImage,
              position: "start",
            },
            {
              img: "/images/home/banner-86.webp",
              mobileImg: "/images/home/banner-86-mobile.webp",
              href: "".concat(y.YJ),
              desc: void 0,
              wide: void 0,
              sliderDuration: 4e3,
              video: void 0,
              content: (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)("div", {
                  className: r().banner86,
                  children: (0, s.jsxs)("div", {
                    className: r().bannerContent,
                    children: [
                      (0, s.jsx)(g.default, {
                        size: "xl",
                        className: (0, o.Z)(r().title),
                        children: "MARKET ERA",
                      }),
                      (0, s.jsx)(g.default, {
                        className: (0, o.Z)(r().title2),
                        children: "JOIN OUR DAILY",
                      }),
                      (0, s.jsx)(g.default, {
                        size: "xl",
                        className: (0, o.Z)(r().title3),
                        children: "LIVE AMAs",
                      }),
                    ],
                  }),
                }),
              }),
              imgClass: r().bannerImage,
              position: "start",
            },
          ];
        return (0, s.jsx)(a.Z, {
          color: "white",
          className: (0, o.Z)(r().hero),
          children: (0, s.jsxs)("div", {
            className: (0, o.Z)(
              r().heroWrapper,
              t < 250 ? r().sticky : r().absolute
            ),
            children: [
              (0, s.jsx)("div", {
                className: r().slideWrapper,
                children: (0, s.jsx)(f.tq, {
                  id: "heroSwiper",
                  ref: w,
                  className: r().swiper,
                  modules: [p.s5, p.tl, p.W_, p.pt, p.lI],
                  effect: "coverflow",
                  loop: !0,
                  breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    992: { slidesPerView: 1, spaceBetween: 0 },
                  },
                  slidesPerView: "auto",
                  onSlideChange: (e) => {
                    x(e.realIndex);
                  },
                  pagination: { clickable: !0 },
                  children: k.map((e, t) =>
                    (0, s.jsxs)(
                      f.o5,
                      {
                        onClick: () => {
                          (null == e ? void 0 : e.href) &&
                            n.push(null == e ? void 0 : e.href);
                        },
                        className: r().swiperSlide,
                        children: [
                          (0, s.jsxs)("div", {
                            className: (0, o.Z)(
                              r().img,
                              j && r().videoActive,
                              (null == e ? void 0 : e.position) &&
                                r()[e.position]
                            ),
                            children: [
                              0 == t
                                ? (0, s.jsx)(s.Fragment, {
                                    children: e.mobileImg
                                      ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)(m.default, {
                                              hero: !0,
                                              className: (0, o.Z)(
                                                "d-md",
                                                e.imgClass
                                              ),
                                              priority: !1,
                                              src: e.img,
                                              alt: "BlockDAG",
                                              width: 1440,
                                              height: 1080,
                                            }),
                                            (0, s.jsx)(m.default, {
                                              hero: !0,
                                              className: (0, o.Z)(
                                                "d-sm",
                                                e.imgClass
                                              ),
                                              priority: !0,
                                              src: e.mobileImg,
                                              alt: "BlockDAG",
                                              width: 455,
                                              height: 823,
                                            }),
                                          ],
                                        })
                                      : (0, s.jsx)(m.default, {
                                          hero: !0,
                                          className: (0, o.Z)(e.imgClass),
                                          priority: !0,
                                          src: e.img,
                                          alt: "BlockDAG",
                                          width: 1440,
                                          height: 1080,
                                        }),
                                  })
                                : (b || 0 !== i) &&
                                  (0, s.jsx)(s.Fragment, {
                                    children: e.mobileImg
                                      ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)(m.default, {
                                              hero: !0,
                                              className: (0, o.Z)(
                                                "d-md",
                                                e.imgClass
                                              ),
                                              priority: !1,
                                              src: e.img,
                                              alt: "BlockDAG",
                                              width: 1440,
                                              height: 1080,
                                            }),
                                            (0, s.jsx)(m.default, {
                                              hero: !0,
                                              className: (0, o.Z)(
                                                "d-sm",
                                                e.imgClass
                                              ),
                                              priority: !1,
                                              src: e.mobileImg,
                                              alt: "BlockDAG",
                                              width: 1440,
                                              height: 1080,
                                            }),
                                          ],
                                        })
                                      : (0, s.jsx)(m.default, {
                                          hero: !0,
                                          className: (0, o.Z)(e.imgClass),
                                          priority: !1,
                                          src: e.img,
                                          alt: "BlockDAG",
                                          width: 1440,
                                          height: 1080,
                                        }),
                                  }),
                              e.video &&
                                t == i &&
                                (0, s.jsx)("div", {
                                  className: (0, o.Z)(
                                    r().video,
                                    j && r().videoActive
                                  ),
                                  children: e.video,
                                }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: (0, o.Z)(
                              r().content,
                              j && r().videoActive
                            ),
                            children: (0, s.jsx)(d.Z, {
                              size: (null == e ? void 0 : e.wide)
                                ? "lg"
                                : void 0,
                              className: r().container,
                              children: (0, s.jsx)("div", {
                                className: r().mainContent,
                                children: e.content,
                              }),
                            }),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
              k.length > 1 &&
                (0, s.jsxs)("div", {
                  className: r().swiperNavigation,
                  children: [
                    (0, s.jsx)("button", {
                      className: r().prev,
                      onClick: () => {
                        if (w.current) {
                          var e;
                          null === (e = w.current) ||
                            void 0 === e ||
                            e.swiper.slidePrev();
                        }
                      },
                      children: (0, s.jsx)(h.Z.Chevron, {}),
                    }),
                    (0, s.jsx)("button", {
                      className: r().next,
                      onClick: () => {
                        if (w.current) {
                          var e;
                          null === (e = w.current) ||
                            void 0 === e ||
                            e.swiper.slideNext();
                        }
                      },
                      children: (0, s.jsx)(h.Z.Chevron, {}),
                    }),
                  ],
                }),
              (0, s.jsx)(N, { active: !0 }),
            ],
          }),
        });
      }
    },
    97885: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return _;
        },
      });
      var s = n(57437),
        i = n(2265),
        r = n(44839),
        a = n(81079),
        l = n(80941),
        o = n.n(l),
        c = n(64860),
        d = n(5540),
        h = n(53267),
        u = n(66648);
      let m = [
        {
          date: "February 19th",
          description:
            "Staking & Earn contracts go live. Rewards begin from day one.",
          status: "completed",
        },
        {
          date: "March 5th",
          description:
            "Batch 1 Claims open. The first on-chain BDAG distributions are processed directly from vesting contracts.",
          status: "completed",
        },
        {
          date: "March 10th",
          description:
            "Batch 2 Claims. Distribution expands under structured vesting and controlled supply release.",
          status: "completed",
        },
        {
          date: "March 12th",
          description:
            "Swap functionality activates. BDAG moves within the ecosystem under controlled pricing while staking compounds.",
          status: "completed",
        },
        {
          date: "March 20th",
          description:
            "Eight exchanges go live: Coinstore, P2B, Pionex, Biconomy, BiFinance, BTCC, WEEX, BTSE.",
          status: "completed",
        },
        {
          date: "March 24th",
          description:
            "Ecosystem visibility expands. Liquidity rollout remains controlled and deliberate.",
          status: "completed",
        },
        {
          date: "April 6th",
          description: "Batch 3 Claims and Smart Wallet access.",
        },
        {
          date: "April 8th",
          description: "Additional exchange integrations. Open trading begins.",
        },
        {
          date: "Early April",
          description:
            "Full TGE. Aligned liquidity, market makers, and global exchange participation launch under a single coordinated event.",
        },
      ];
      function _(e) {
        let {} = e,
          [t, n] = (0, i.useState)(0);
        return (0, s.jsx)("section", {
          className: o().keydates,
          children: (0, s.jsxs)(c.Z, {
            id: "keydates",
            className: o().container,
            large: !1,
            children: [
              (0, s.jsx)(a.default, {
                direction: "left",
                className: o().title,
                component: "div",
                children: (0, s.jsx)("h2", { children: "KEY DATES" }),
              }),
              (0, s.jsx)("div", {
                className: o().timeline,
                children: (0, s.jsx)(h.tq, {
                  className: o().swiper,
                  modules: [d.tl, d.s5],
                  spaceBetween: 16,
                  slidesPerView: 1.2,
                  centeredSlides: !0,
                  onSlideChange: (e) => n(e.activeIndex),
                  breakpoints: { 1024: { slidesPerView: 3.2 } },
                  children: m.map((e, n) =>
                    (0, s.jsx)(
                      h.o5,
                      {
                        children: (0, s.jsxs)("div", {
                          className: (0, r.Z)(
                            o().card,
                            n === t && o().cardActive,
                            e.highlight && o().cardHighlight,
                            "completed" === e.status && o().cardCompleted
                          ),
                          children: [
                            (0, s.jsx)("span", {
                              className: o().date,
                              children: e.date,
                            }),
                            "completed" === e.status &&
                              (0, s.jsx)(u.default, {
                                src: "/icons/tick-2.svg",
                                alt: "status",
                                width: 32,
                                height: 32,
                                className: o().statusIcon,
                              }),
                            (0, s.jsx)("p", {
                              className: o().description,
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
                className: o().paginationTrack,
                "aria-hidden": !0,
                children: (0, s.jsx)("div", {
                  className: o().paginationFill,
                  style: {
                    width: "".concat(100 / m.length, "%"),
                    transform: "translateX(".concat(100 * t, "%)"),
                  },
                }),
              }),
            ],
          }),
        });
      }
    },
    9411: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return p;
        },
      });
      var s = n(57437),
        i = n(32913),
        r = n(9750),
        a = n.n(r),
        l = n(42625),
        o = n(21360),
        c = n(70499),
        d = n(13259),
        h = n(47984),
        u = n(81079),
        m = n(44630),
        _ = n(2265);
      function p(e) {
        let {} = e,
          t = (0, m.Z)(),
          [n, r] = (0, _.useState)(!1);
        return (
          (0, _.useEffect)(() => {
            t > 200 && r(!0);
          }, [t]),
          (0, s.jsx)(i.Z, {
            color: "dark",
            className: a().raised,
            children: (0, s.jsxs)(l.Z, {
              className: a().container,
              children: [
                (0, s.jsxs)("div", {
                  className: a().texts,
                  children: [
                    (0, s.jsx)(o.default, {
                      component: "h3",
                      start: 70,
                      end: 30,
                      ease: "back.in",
                      animate: !1,
                      direction: "left",
                      size: "xl",
                      className: "text-center font-bold",
                      children: "Ground-Breaking Crypto 2026",
                    }),
                    (0, s.jsx)(o.default, {
                      direction: "left",
                      start: 70,
                      end: 30,
                      ease: "back.in",
                      animate: !1,
                      size: "lg",
                      className: "text-center",
                      children:
                        "Join the BlockDAG crypto 2026, engage with the project, and see your contribution grow to new heights.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex justify-center gap-4",
                  children: [
                    (0, s.jsx)(c.default, {
                      animate: !1,
                      start: 80,
                      end: 15,
                      rotateY: 80,
                      ease: "expo.out",
                      direction: "right",
                      href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                      color: "primary",
                      children: "Buy Now",
                    }),
                    (0, s.jsx)(c.default, {
                      animate: !1,
                      direction: "left",
                      start: 80,
                      rotateY: -80,
                      end: 15,
                      ease: "expo.out",
                      href: d.zA,
                      color: "transparent-dark",
                      children: "How to Buy?",
                    }),
                  ],
                }),
                (0, s.jsx)(u.default, {
                  animate: !1,
                  translateY: -300,
                  opacity: 1,
                  start: 60,
                  end: 0,
                  ease: "back.out",
                  className: a().gifArea,
                  children:
                    n &&
                    (0, s.jsx)(h.default, {
                      src: "/3d.gif",
                      width: 400,
                      height: 375,
                      alt: "BlockDAG",
                    }),
                }),
              ],
            }),
          })
        );
      }
    },
    87452: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return f;
        },
      });
      var s = n(57437),
        i = n(32913),
        r = n(44327),
        a = n.n(r),
        l = n(42625),
        o = n(58350),
        c = n(87580),
        d = n(47984),
        h = n(44839),
        u = n(21360),
        m = n(70499),
        _ = n(87138),
        p = n(82415);
      function f(e) {
        let {} = e,
          t = [
            {
              icon: "/cube.webp",
              iconStyle: { rotate: "-33deg", width: "calc(var(--1) * 55)" },
              completed: !0,
              title: (0, s.jsx)(s.Fragment, { children: "Internal Audit" }),
              desc: (0, s.jsx)(s.Fragment, {
                children:
                  "Our in-house team conducted an exhaustive review using advanced code analysis tools, extensive unit tests, and integration tests to identify and address potential vulnerabilities.",
              }),
            },
            {
              icon: "/images/security/halborn-black.svg",
              iconStyle: { width: "calc(var(--1) * 160)" },
              completed: !0,
              title: (0, s.jsx)(s.Fragment, {
                children: "External Audit 1: Halborn ",
              }),
              href: "https://www.halborn.com/audits/blockdag/treasury-vesting",
              desc: (0, s.jsx)(s.Fragment, {
                children:
                  "We partnered with Halborn, a renowned security firm, to provide an independent assessment. Their review validated our internal findings and helped fortify our security measures.",
              }),
            },
            {
              icon: "/images/security/certik-black.svg",
              iconStyle: { width: "calc(var(--1) * 174)" },
              completed: !0,
              title: (0, s.jsx)(s.Fragment, {
                children: "External Audit 2: Certik ",
              }),
              href: "/blockdag-certik-security-audit.pdf",
              desc: (0, s.jsx)(s.Fragment, {
                children:
                  "We are currently collaborating with Certik for an additional layer of scrutiny to further enhance our smart contract security.",
              }),
            },
          ];
        return (0, s.jsx)(i.Z, {
          color: "white",
          className: a().section,
          children: (0, s.jsx)(l.Z, {
            classic: !0,
            children: (0, s.jsxs)("div", {
              className: a().content,
              children: [
                (0, s.jsx)(o.Z, {
                  bg: "light",
                  align: "center",
                  alignMobile: "center",
                  title: "Fortifying Blockchain Security at Every Layer",
                  desc: (0, s.jsx)(s.Fragment, {
                    children:
                      "BlockDAG places security at the heart of innovation, implementing rigorous audits, community-driven bug bounty programs, and advanced cryptographic solutions. Discover how our proactive approach ensures a secure, transparent, and resilient blockchain ecosystem.",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: a().boxes,
                  children: t.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: a().box,
                        children: [
                          (0, s.jsx)("div", {
                            className: a().top,
                            children: (0, s.jsx)("div", {
                              className: a().icon,
                              style: e.iconStyle,
                              children: e.href
                                ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsxs)("div", {
                                      className: a().linkBox,
                                      children: [
                                        (0, s.jsxs)(_.default, {
                                          href: e.href,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: [
                                            (0, s.jsx)(d.default, {
                                              src: e.icon,
                                              alt: "Icon",
                                            }),
                                            (0, s.jsx)(p.Z.ExternalLink, {}),
                                          ],
                                        }),
                                        (0, s.jsx)("span", {
                                          className: a().link,
                                          children:
                                            "Click on above logo to read",
                                        }),
                                      ],
                                    }),
                                  })
                                : (0, s.jsx)(d.default, {
                                    src: e.icon,
                                    alt: "Icon",
                                  }),
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: a().texts,
                            children: [
                              (0, s.jsx)(c.default, {
                                family: "primary",
                                size: "xs",
                                children: e.title,
                              }),
                              (0, s.jsx)("div", {
                                className: (0, h.Z)(
                                  e.completed ? a().completed : a().uncompleted
                                ),
                                children: e.completed
                                  ? "Completed"
                                  : "In Progress",
                              }),
                              (0, s.jsx)(u.default, {
                                className: a().desc,
                                children: e.desc,
                              }),
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
          }),
        });
      }
    },
    30021: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return m;
        },
      });
      var s = n(57437),
        i = n(2265),
        r = n(32913),
        a = n(42625),
        l = n(81079),
        o = n(19076),
        c = n.n(o),
        d = n(66648);
      let h = [
          {
            title: "LBank",
            src: "/images/home/logos/lbank.webp",
            href: "https://www.lbank.com/",
          },
          {
            title: "XT",
            src: "/images/home/logos/xt.webp",
            href: "https://www.xt.com/en",
          },
          {
            title: "Coinstore",
            src: "/images/home/logos/coinstore.webp",
            href: "https://www.coinstore.com/",
          },
          {
            title: "BitMart",
            src: "/images/home/logos/bitmart.webp",
            href: "https://www.bitmart.com/en-GB",
          },
          {
            title: "WEEX",
            src: "/images/home/logos/weex.webp",
            href: "https://www.weex.com/",
          },
          {
            title: "CoinMarketCap",
            src: "/images/home/logos/coinmarketcap.webp",
            href: "https://coinmarketcap.com/",
          },
          {
            title: "BTCC",
            src: "/images/home/logos/btcc.webp",
            href: "https://www.btcc.com/",
          },
          {
            title: "BTSE",
            src: "/images/home/logos/btse.webp",
            href: "https://www.btse.com/",
          },
          {
            title: "BiFinance",
            src: "/images/home/logos/bifinance.webp",
            href: "https://www.bifinance.com/",
          },
          {
            title: "Biconomy",
            src: "/images/home/logos/biconomy.webp",
            href: "https://www.biconomy.com/",
          },
          {
            title: "P2B",
            src: "/images/home/logos/p2b.webp",
            href: "https://p2pb2b.com/",
          },
        ],
        u = [
          {
            name: "BlockDAG Mainnet Team",
            address: "0x35E7f8f1031B2Bf364A88fdE7FDDA80FCe8C3bBe",
            amount: "1,500,000,000",
          },
          {
            name: "BlockDAG Mainnet MM Liquidity",
            address: "0x4938DF5b0eaF8130CA128e480812c2cc5c70b6c4",
            amount: "4,500,000,000",
          },
          {
            name: "BlockDAG Mainnet Treasury",
            address: "0x14143445822f03796A7301B0cE5b437d3070474D",
            amount: "19,000,000,000",
          },
          {
            name: "BlockDAG Mainnet Special",
            address: "0xd8A5D6Df7F3A1d57CDC9661f4a8132E9206B00D5",
            amount: "50,000,000,000",
          },
          {
            name: "BlockDAG Mainnet Staking Rewards",
            address: "0xF417719986a694a71C3Ac3095c103802846c3fF4",
            amount: "25,000,000,000",
          },
        ];
      function m() {
        let [e, t] = (0, i.useState)(!1),
          n = (0, i.useRef)(null),
          o = (0, i.useCallback)((e) => {
            navigator.clipboard.writeText(e).then(() => {
              n.current && clearTimeout(n.current),
                t(!0),
                (n.current = setTimeout(() => t(!1), 1e3));
            });
          }, []);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            e &&
              (0, s.jsx)("div", {
                className: c().toast,
                children: "✓ Address copied to clipboard",
              }),
            (0, s.jsx)(r.Z, {
              className: c().treasury,
              children: (0, s.jsxs)(a.Z, {
                className: c().container,
                children: [
                  (0, s.jsxs)("div", {
                    className: c().header,
                    children: [
                      (0, s.jsx)(l.default, {
                        direction: "left",
                        className: c().title,
                        component: "div",
                        children: (0, s.jsx)("h2", {
                          children:
                            "BlockDAG Mainnet Treasury & Allocation Transparency",
                        }),
                      }),
                      (0, s.jsx)(l.default, {
                        direction: "left",
                        className: c().subtitle,
                        component: "p",
                        children: "Full Transparency. On-Chain. Verifiable.",
                      }),
                      (0, s.jsx)(l.default, {
                        direction: "left",
                        className: c().description,
                        component: "p",
                        children:
                          "The wallet addresses listed below represent the official BlockDAG mainnet allocations across treasury, team, liquidity, staking rewards, and protocol reserves. Publishing these addresses ensures that all core allocations are publicly visible and verifiable on-chain. Every balance and transaction can be independently reviewed through the BlockDAG Explorer, allowing the community to confirm supply structure and allocation integrity in real time. Transparency at this level is fundamental to long-term trust, and it reflects our commitment to operating the network with clear and accountable token governance. No hidden wallets. No undisclosed allocations. No off-book supply. Just full-powered BlockDAG. This is what accountable infrastructure looks like.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: c().logos,
                    children: h.map((e, t) =>
                      (0, s.jsx)(
                        l.default,
                        {
                          direction: "left",
                          className: c().logo,
                          children: (0, s.jsx)("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, s.jsx)(d.default, {
                              src: e.src,
                              alt: e.title,
                              width: 100,
                              height: 30,
                            }),
                          }),
                        },
                        t
                      )
                    ),
                  }),
                  (0, s.jsx)(l.default, {
                    direction: "bottom",
                    className: c().tableWrapper,
                    children: (0, s.jsx)("table", {
                      className: c().table,
                      children: (0, s.jsx)("tbody", {
                        children: u.map((e, t) =>
                          (0, s.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, s.jsx)("td", {
                                  className: c().nameCell,
                                  children: e.name,
                                }),
                                (0, s.jsx)("td", {
                                  className: ""
                                    .concat(c().addressCell, " ")
                                    .concat(c().copyable),
                                  onClick: () => o(e.address),
                                  title: "Click to copy",
                                  children: e.address,
                                }),
                                (0, s.jsx)("td", {
                                  className: c().amountCell,
                                  children: e.amount,
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: c().cardsWrapper,
                    children: u.map((e, t) =>
                      (0, s.jsxs)(
                        l.default,
                        {
                          direction: "bottom",
                          className: c().card,
                          children: [
                            (0, s.jsx)("div", {
                              className: c().cardName,
                              children: e.name,
                            }),
                            (0, s.jsx)("div", {
                              className: ""
                                .concat(c().cardAddress, " ")
                                .concat(c().copyable),
                              onClick: () => o(e.address),
                              title: "Click to copy",
                              children: e.address,
                            }),
                            (0, s.jsx)("div", {
                              className: c().cardAmount,
                              children: e.amount,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    81079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n(57437),
        i = n(2265),
        r = n(44839),
        a = n(16609),
        l = n(49582),
        o = n(78002),
        c = n(16463);
      function d(e) {
        let {
            children: t,
            component: n = "div",
            className: d,
            direction: h,
            directionMobile: u = h,
            translateY: m = 0,
            translateX: _ = 0,
            duration: p = 0.8,
            rotateX: f = 0,
            rotateY: g = 0,
            ease: y = "back.out",
            opacity: x = 0,
            animate: b = !0,
            start: v = 80,
            end: w = 60,
            ...j
          } = e,
          k = (0, i.useRef)(null),
          { useGSAP: C, activatedGsap: N } = (0, a.Z)(),
          A = (0, o.Z)(),
          L = (0, c.usePathname)();
        return (
          C(() => {
            if (
              "/" == L &&
              N &&
              b &&
              k.current &&
              (null == A ? void 0 : A.width)
            ) {
              let e, t;
              (null == A ? void 0 : A.width) < 992
                ? ((_ = "right" == u ? -200 : "left" == u ? 200 : _),
                  (m = "top" == u ? 200 : "bottom" == u ? -200 : m))
                : ((m = "top" == h ? 200 : "bottom" == h ? -200 : m),
                  (_ = "right" == h ? -200 : "left" == h ? 200 : _));
              let n = l.ZP.timeline({
                scrollTrigger: {
                  trigger: k.current,
                  start: "top ".concat(
                    (null == A ? void 0 : A.width) < 992 ? v - 10 : v,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == A ? void 0 : A.width) < 992 ? w - 15 : w - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == A ? void 0 : A.width) > 1440
                    ? _
                    : (null == A ? void 0 : A.width) < 992
                    ? ((null == A ? void 0 : A.width) / 500) * _
                    : ((null == A ? void 0 : A.width) / 1440) * _),
                (t =
                  (null == A ? void 0 : A.width) > 1440
                    ? m
                    : (null == A ? void 0 : A.width) < 992
                    ? ((null == A ? void 0 : A.width) / 500) * m
                    : ((null == A ? void 0 : A.width) / 1440) * m),
                n
                  .from(k.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: f,
                    rotateY: g,
                    opacity: x,
                    duration: p,
                    ease: y,
                  })
                  .to(k.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [N, L]),
          (0, s.jsx)(n, { ...j, ref: k, className: (0, r.Z)(d), children: t })
        );
      }
    },
    42625: function (e, t, n) {
      "use strict";
      var s = n(57437),
        i = n(44839),
        r = n(58538),
        a = n.n(r);
      let l = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: r, size: l, classic: o, ...c } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            ref: t,
            className: (0, i.Z)(
              a().container,
              r,
              l && a()[l],
              o && a().classic
            ),
            ...c,
            children: n,
          }),
        });
      });
      (l.displayName = "Container"), (t.Z = l);
    },
    43615: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var s = n(57437),
        i = n(2265),
        r = n(48241),
        a = n.n(r),
        l = n(87138),
        o = n(44839),
        c = n(78002),
        d = n(16609),
        h = n(49582),
        u = n(16463);
      function m(e) {
        let {
            href: t,
            download: n,
            className: r,
            target: m,
            children: _,
            color: p = "primary",
            onClick: f,
            direction: g,
            directionMobile: y = g,
            translateY: x = 0,
            translateX: b = 0,
            duration: v = 0.8,
            rotateX: w = 0,
            rotateY: j = 0,
            ease: k = "back.out",
            opacity: C = 0,
            animate: N,
            start: A = 80,
            end: L = 60,
            ...B
          } = e,
          Z = (0, c.Z)(),
          T = (0, i.useRef)(null),
          { useGSAP: M, activatedGsap: D } = (0, d.Z)(),
          z = (0, u.usePathname)();
        return (
          M(() => {
            if (
              "/" == z &&
              D &&
              N &&
              T.current &&
              (null == Z ? void 0 : Z.width)
            ) {
              let e, t;
              (null == Z ? void 0 : Z.width) < 992
                ? ((b = "right" == y ? -200 : "left" == y ? 200 : b),
                  (x = "top" == y ? 200 : "bottom" == y ? -200 : x))
                : ((x = "top" == g ? 200 : "bottom" == g ? -200 : x),
                  (b = "right" == g ? -200 : "left" == g ? 200 : b));
              let n = h.ZP.timeline({
                scrollTrigger: {
                  trigger: T.current,
                  start: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? A - 10 : A,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == Z ? void 0 : Z.width) < 992 ? L - 15 : L - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? b
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * b
                    : ((null == Z ? void 0 : Z.width) / 1440) * b),
                (t =
                  (null == Z ? void 0 : Z.width) > 1440
                    ? x
                    : (null == Z ? void 0 : Z.width) < 992
                    ? ((null == Z ? void 0 : Z.width) / 500) * x
                    : ((null == Z ? void 0 : Z.width) / 1440) * x),
                n
                  .from(T.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: w,
                    rotateY: j,
                    opacity: C,
                    duration: v,
                    ease: k,
                  })
                  .to(T.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [Z, D, z]),
          (0, s.jsx)(s.Fragment, {
            children:
              "#" === t
                ? (0, s.jsx)("p", {
                    className: (0, o.Z)(a().customlink, a()[p], r),
                    children: _,
                  })
                : m && "_blank" == m
                ? (0, s.jsx)(l.default, {
                    ref: T,
                    download: n,
                    href: t,
                    target: m,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: f,
                    className: (0, o.Z)(a().customlink, a()[p], r),
                    ...B,
                    children: _,
                  })
                : (0, s.jsx)(l.default, {
                    ref: T,
                    download: n,
                    href: t,
                    target: m,
                    onClick: f,
                    className: (0, o.Z)(a().customlink, a()[p], r),
                    ...B,
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
      var s = n(57437),
        i = n(44839),
        r = n(21360),
        a = n(87580),
        l = n(84395),
        o = n(18803),
        c = n.n(o);
      function d(e) {
        let {
          subtitle: t,
          subtitleColor: n,
          title: o,
          bigdesc: d,
          titleBottomContent: h,
          largedesc: u,
          desc: m,
          subtitleComponent: _,
          titleComponent: p,
          align: f = "center",
          alignMobile: g = f,
          bg: y = "dark",
          animate: x = !0,
          direction: b = "right",
          maxWidth: v,
          className: w,
          largedescClass: j,
          bigdescClass: k,
          descClass: C,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, i.Z)(
            c().heading,
            c()[f],
            f !== g && c()["sm-".concat(g)],
            v && c().max,
            w && w
          ),
          children: [
            t &&
              (0, s.jsx)(l.default, {
                color:
                  n ||
                  ("light" == y
                    ? "dark"
                    : "primary" == y
                    ? "light"
                    : "primary"),
                component: _,
                animate: x,
                direction: b,
                className: c().subtitle,
                children: t,
              }),
            o &&
              (0, s.jsx)(a.default, {
                animate: x,
                direction: b,
                component: p,
                className: c().title,
                children: o,
              }),
            h && h,
            u &&
              (0, s.jsx)(r.default, {
                animate: x,
                direction: b,
                className: (0, i.Z)(c().bigdesc, c().largedesc, c()[y], j),
                size: "xl",
                children: u,
              }),
            d &&
              (0, s.jsx)(r.default, {
                animate: x,
                direction: b,
                className: (0, i.Z)(c().bigdesc, c()[y], k),
                size: "lg",
                children: d,
              }),
            m &&
              (0, s.jsx)(r.default, {
                animate: x,
                direction: b,
                className: (0, i.Z)(c().desc, c()[y], C),
                children: m,
              }),
          ],
        });
      }
    },
    82415: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(57437);
      n(2265);
      var i = {
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
    32913: function (e, t, n) {
      "use strict";
      var s = n(57437),
        i = n(44839),
        r = n(14629),
        a = n.n(r);
      let l = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: r, color: l = "dark", ...o } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("section", {
            ref: t,
            className: (0, i.Z)(a().section, a()[l], r),
            ...o,
            children: n,
          }),
        });
      });
      (l.displayName = "Section"), (t.Z = l);
    },
    45814: function (e) {
      e.exports = {
        hero: "style_hero__DC06C",
        container: "style_container__Mu_up",
        top: "style_top__sEJTl",
        content: "style_content__g5c4q",
        texts: "style_texts__gvpIe",
        subtitle: "style_subtitle__KV5FV",
        title: "style_title__LjqJZ",
        bigdesc: "style_bigdesc__ZBWVQ",
        desc: "style_desc__n_V27",
        links: "style_links__UXONI",
        linksTitle: "style_linksTitle__nW6TI",
        list: "style_list__WA9zz",
        listItem: "style_listItem__LiMrd",
        icon: "style_icon__pqwtr",
        button: "style_button__TVXG1",
      };
    },
    13913: function (e) {
      e.exports = {
        exchange: "style_exchange__ezuLz",
        container: "style_container__wqqK8",
        image: "style_image__9lc5k",
        content: "style_content__O1loB",
        title: "style_title__6PZHg",
        descs: "style_descs__nkEJq",
        desc: "style_desc__PTeP1",
        btns: "style_btns__3uyVS",
        logos: "style_logos__uWEOo",
      };
    },
    95474: function (e) {
      e.exports = {
        expansionStrategy: "style_expansionStrategy__w_40d",
        content: "style_content__MqQ4Z",
        contentLeft: "style_contentLeft__zppw9",
        contentRight: "style_contentRight__xtvb0",
        title: "style_title__uP5Xj",
        description: "style_description__Sk5fq",
      };
    },
    47391: function (e) {
      e.exports = {
        mainFaqs: "style_mainFaqs__4YGOd",
        container: "style_container__s_uNY",
        faqsArea: "style_faqsArea__L4__5",
        accordionItem: "style_accordionItem__1EzvW",
        accordionHeader: "style_accordionHeader__r_iXx",
        question: "style_question__5Y6_t",
        iconWrapper: "style_iconWrapper___NQfP",
        icon: "style_icon__Lb8np",
        accordionContent: "style_accordionContent__xCXMm",
        answerWrapper: "style_answerWrapper___QaIA",
        active: "style_active__FRxUA",
      };
    },
    33375: function (e) {
      e.exports = {
        banner0320: "style_banner0320__pox8K",
        bannerContent: "style_bannerContent__ewT_W",
        title: "style_title__IQRSo",
        title2: "style_title2__4Bjcy",
        title3: "style_title3__jzu_w",
        title4: "style_title4__QCevU",
        title4wrapper: "style_title4wrapper__8yB9E",
        countdown: "style_countdown__tOTWs",
        bannerImage: "style_bannerImage__p0qwR",
        bannerAsc: "style_bannerAsc__rMV9B",
        bannerContentAsc: "style_bannerContentAsc__Mkia8",
        titleTop: "style_titleTop__re5of",
        titlePriceBar: "style_titlePriceBar__ZJ_0v",
        titlePrice: "style_titlePrice__vW3vL",
        titleCode: "style_titleCode__3IbnQ",
        titleMain: "style_titleMain__P7Hr8",
        titleSub: "style_titleSub__lnHiZ",
        banner0317: "style_banner0317__84I4w",
        title3wrapper: "style_title3wrapper__HRG6h",
        banner1303: "style_banner1303__TLaJf",
        banner86: "style_banner86__5mVQB",
        banner84: "style_banner84__x_f30",
        banner0137Banner: "style_banner0137Banner__heTcD",
        banner0137Content: "style_banner0137Content__UqcEu",
        banner0137Title: "style_banner0137Title__0fa6V",
        banner0137Title2: "style_banner0137Title2__ReAS4",
        banner0137Title3: "style_banner0137Title3__Q5yG0",
        banner0137Title4: "style_banner0137Title4__ZYYC3",
        banner1602Img: "style_banner1602Img___Xa5P",
        banner0136Banner: "style_banner0136Banner__y6u5w",
        banner0136Content: "style_banner0136Content__zrkFY",
        banner0136Title: "style_banner0136Title__U8y9N",
        banner0136Title2: "style_banner0136Title2__NXZLj",
        banner0136Divider: "style_banner0136Divider__SLFql",
        banner0136DividerSpan: "style_banner0136DividerSpan__bIAYi",
        banner0136DividerSpan2: "style_banner0136DividerSpan2__PWDc1",
        banner0136Title3: "style_banner0136Title3__tqwjq",
        banner0136Title4: "style_banner0136Title4__SzjCA",
        banner0136Title5: "style_banner0136Title5__CmGAt",
        banner0136Title5Span: "style_banner0136Title5Span__pVRtU",
        hero: "style_hero__tXKZW",
        swiperNavigation: "style_swiperNavigation__wcA5S",
        prev: "style_prev__PzhgM",
        next: "style_next__6O0jS",
        swiper: "style_swiper__H0FOs",
        content: "style_content__6JEzh",
        container: "style_container__wsYVP",
        mainContent: "style_mainContent__Q57El",
        xCenter: "style_xCenter__vx6Tq",
        yCenter: "style_yCenter__KPfZs",
        yBottom: "style_yBottom__A6p_g",
        btns: "style_btns__WQlab",
        slideWrapper: "style_slideWrapper__yAG8Q",
        partners: "style_partners__EntuL",
        partnerShip: "style_partnerShip__Cd4mL",
        partnerLogos: "style_partnerLogos__Aor41",
        partnerLogoDivider: "style_partnerLogoDivider__Y4yNs",
        seawolvesLogo: "style_seawolvesLogo__JEeID",
        img: "style_img__Yeqei",
        videoActive: "style_videoActive__PkdgK",
        video: "style_video__BxuzB",
        center: "style_center__H1nYx",
        left: "style_left__K2LsV",
        right: "style_right__NON5M",
        active: "style_active__Q0pNl",
        slideContent: "style_slideContent__YIk_b",
        pagination: "style_pagination__dkJvy",
      };
    },
    80941: function (e) {
      e.exports = {
        keydates: "style_keydates__NSOrI",
        container: "style_container__CwUAv",
        timeline: "style_timeline__zUuXy",
        title: "style_title__U6J7j",
        swiper: "style_swiper__Q45at",
        card: "style_card__bs7zo",
        date: "style_date__IIY04",
        status: "style_status__8Dm57",
        statusIcon: "style_statusIcon__uKd7B",
        statusCompleted: "style_statusCompleted__dnJA6",
        description: "style_description__Wexi8",
        cardActive: "style_cardActive__XZH7a",
        cardHighlight: "style_cardHighlight__06I2r",
        paginationTrack: "style_paginationTrack__UBwY0",
        paginationFill: "style_paginationFill__GqMp2",
      };
    },
    26143: function (e) {
      e.exports = {
        keynotes: "style_keynotes__Rf_rY",
        container: "style_container__uWpT3",
        top: "style_top__CKIne",
        grid: "style_grid__C3svw",
        item: "style_item__uzrvS",
        title: "style_title__b_tG7",
        desc: "style_desc__zAuh4",
        imgWrapper: "style_imgWrapper__AkTxi",
      };
    },
    72232: function (e) {
      e.exports = {
        media: "style_media__MGgKx",
        container: "style_container___31qm",
        texts: "style_texts__SO8nV",
        title: "style_title__YSHJi",
        desc: "style_desc__4fuYc",
        logos: "style_logos__IXOX0",
        logo: "style_logo___etC_",
      };
    },
    9750: function (e) {
      e.exports = {
        raised: "style_raised__0BywU",
        container: "style_container__tnLJL",
        title: "style_title__hlH4X",
        first: "style_first__jDNmp",
        second: "style_second__Rg8Bw",
        texts: "style_texts__orDoC",
        gifArea: "style_gifArea__MF5c3",
      };
    },
    35234: function (e) {
      e.exports = {
        referral: "style_referral__12bcr",
        container: "style_container__G_s23",
        content: "style_content__vyR4y",
        texts: "style_texts__IyA0i",
        link: "style_link__EO0_k",
        imageWrapper: "style_imageWrapper__NlyFA",
        image: "style_image__LHCHQ",
      };
    },
    44327: function (e) {
      e.exports = {
        section: "style_section__bXXSC",
        content: "style_content__OiZm_",
        boxes: "style_boxes__Eilcm",
        box: "style_box__C9_KI",
        top: "style_top__IKdL0",
        icon: "style_icon___eDAP",
        linkBox: "style_linkBox__G8WTe",
        link: "style_link__wazwM",
        texts: "style_texts__az91B",
        completed: "style_completed__5ohz6",
        uncompleted: "style_uncompleted__GcZ7I",
        button: "style_button__Mhj2F",
      };
    },
    19076: function (e) {
      e.exports = {
        treasury: "style_treasury__tg4i1",
        container: "style_container__f8K4j",
        header: "style_header__0Hacd",
        title: "style_title__Xoou9",
        subtitle: "style_subtitle__AnMOH",
        description: "style_description__mski3",
        tableWrapper: "style_tableWrapper__qZ0os",
        table: "style_table__4PkXO",
        nameCell: "style_nameCell__5Ox5V",
        addressCell: "style_addressCell__zwyO7",
        amountCell: "style_amountCell___jt0l",
        cardsWrapper: "style_cardsWrapper__LAkBV",
        card: "style_card__7nZp4",
        cardName: "style_cardName__jcJKm",
        cardAddress: "style_cardAddress__EaKO9",
        cardAmount: "style_cardAmount__CQFiE",
        copyable: "style_copyable__c_699",
        toast: "style_toast__4nShq",
        slideDown: "style_slideDown__85dkC",
        logos: "style_logos__sIAto",
      };
    },
    21365: function (e) {
      e.exports = {
        countArea: "style_countArea__BbysK",
        counter: "style_counter__qTi_L",
        box: "style_box__9FPhV",
        box100: "style_box100__O3_7r",
        numbers: "style_numbers__FXsFe",
        numbers100: "style_numbers100__9GtqA",
        digit: "style_digit__mS8IW",
        text: "style_text__ZEEpB",
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
    47062: function (e) {
      e.exports = {
        presaleislive: "style_presaleislive__eIxJ1",
        button: "style_button__29T4g",
        active: "style_active__loAw8",
        logos: "style_logos__QPJFB",
        presale: "style_presale__5KDjs",
        presaleislivesec: "style_presaleislivesec___JlEo",
      };
    },
    87737: function (e) {
      e.exports = {
        presalelogos: "style_presalelogos__CFR1I",
        button: "style_button__YBwt4",
        iconCry: "style_iconCry__lsg1O",
        iconVisa: "style_iconVisa__VZ7By",
        iconMastercard: "style_iconMastercard__Zg_Hl",
        iconPays: "style_iconPays__LDOl7",
        innerPage: "style_innerPage__18LE2",
        dark: "style_dark__t6fFo",
        preLogoAnimation: "style_preLogoAnimation__sAK_B",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1899, 947, 9667, 5073, 7367, 5698, 922, 7326, 6990, 9391, 231, 493,
        3106, 8048, 5162, 5734, 9762, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 33808));
      }
    ),
      (_N_E = e.O());
  },
]);
