(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3427],
  {
    65516: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.t.bind(n, 26766, 23)),
        Promise.resolve().then(n.bind(n, 81079)),
        Promise.resolve().then(n.bind(n, 50958)),
        Promise.resolve().then(n.t.bind(n, 58538, 23)),
        Promise.resolve().then(n.t.bind(n, 18803, 23)),
        Promise.resolve().then(n.bind(n, 47984)),
        Promise.resolve().then(n.bind(n, 4387)),
        Promise.resolve().then(n.bind(n, 45419)),
        Promise.resolve().then(n.t.bind(n, 14629, 23)),
        Promise.resolve().then(n.bind(n, 21360)),
        Promise.resolve().then(n.bind(n, 87580)),
        Promise.resolve().then(n.bind(n, 84395));
    },
    87138: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var a = n(231),
        i = n.n(a);
    },
    81079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n(57437),
        i = n(2265),
        o = n(44839),
        d = n(16609),
        r = n(49582),
        l = n(78002),
        u = n(16463);
      function s(e) {
        let {
            children: t,
            component: n = "div",
            className: s,
            direction: c,
            directionMobile: m = c,
            translateY: g = 0,
            translateX: h = 0,
            duration: f = 0.8,
            rotateX: y = 0,
            rotateY: p = 0,
            ease: _ = "back.out",
            opacity: v = 0,
            animate: b = !0,
            start: S = 80,
            end: C = 60,
            ...M
          } = e,
          N = (0, i.useRef)(null),
          { useGSAP: x, activatedGsap: w } = (0, d.Z)(),
          B = (0, l.Z)(),
          A = (0, u.usePathname)();
        return (
          x(() => {
            if (
              "/" == A &&
              w &&
              b &&
              N.current &&
              (null == B ? void 0 : B.width)
            ) {
              let e, t;
              (null == B ? void 0 : B.width) < 992
                ? ((h = "right" == m ? -200 : "left" == m ? 200 : h),
                  (g = "top" == m ? 200 : "bottom" == m ? -200 : g))
                : ((g = "top" == c ? 200 : "bottom" == c ? -200 : g),
                  (h = "right" == c ? -200 : "left" == c ? 200 : h));
              let n = r.ZP.timeline({
                scrollTrigger: {
                  trigger: N.current,
                  start: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? S - 10 : S,
                    "%"
                  ),
                  end: "top ".concat(
                    (null == B ? void 0 : B.width) < 992 ? C - 15 : C - 10,
                    "%"
                  ),
                  scrub: 1,
                  markers: !1,
                },
              });
              return (
                (e =
                  (null == B ? void 0 : B.width) > 1440
                    ? h
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * h
                    : ((null == B ? void 0 : B.width) / 1440) * h),
                (t =
                  (null == B ? void 0 : B.width) > 1440
                    ? g
                    : (null == B ? void 0 : B.width) < 992
                    ? ((null == B ? void 0 : B.width) / 500) * g
                    : ((null == B ? void 0 : B.width) / 1440) * g),
                n
                  .from(N.current, {
                    translateY: t,
                    translateX: e,
                    rotateX: y,
                    rotateY: p,
                    opacity: v,
                    duration: f,
                    ease: _,
                  })
                  .to(N.current, {
                    translateY: 0,
                    rotateX: 0,
                    rotateY: 0,
                    translateX: 0,
                    opacity: 1,
                  }),
                () => n.kill()
              );
            }
          }, [w, A]),
          (0, a.jsx)(n, { ...M, ref: N, className: (0, o.Z)(s), children: t })
        );
      }
    },
    70499: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var a = n(57437),
        i = n(87138),
        o = n(60231),
        d = n.n(o),
        r = n(44839),
        l = n(2265),
        u = n(16609),
        s = n(49582),
        c = n(78002),
        m = n(16463);
      function g(e) {
        let {
            href: t,
            className: n,
            children: o,
            target: g,
            onClick: h,
            direction: f,
            directionMobile: y = f,
            translateY: p = 0,
            translateX: _ = 0,
            duration: v = 0.8,
            rotateX: b = 0,
            rotateY: S = 0,
            ease: C = "back.out",
            opacity: M = 0,
            animate: N,
            start: x = 80,
            end: w = 60,
            color: B = "primary",
            disabled: A,
            type: k = "button",
          } = e,
          T = (0, l.useRef)(null),
          P = (0, l.useRef)(null),
          G = (0, c.Z)(),
          { useGSAP: j, activatedGsap: E } = (0, u.Z)(),
          I = (0, m.usePathname)();
        return (
          j(() => {
            if ("/" == I) {
              let e;
              if (
                (T.current && (e = T),
                P.current && (e = P),
                E && N && e && e.current && (null == G ? void 0 : G.width))
              ) {
                let t, n;
                (null == G ? void 0 : G.width) < 992
                  ? ((_ = "right" == y ? -200 : "left" == y ? 200 : _),
                    (p = "top" == y ? 200 : "bottom" == y ? -200 : p))
                  : ((p = "top" == f ? 200 : "bottom" == f ? -200 : p),
                    (_ = "right" == f ? -200 : "left" == f ? 200 : _));
                let a = s.ZP.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top ".concat(
                      (null == G ? void 0 : G.width) < 992 ? x - 10 : x,
                      "%"
                    ),
                    end: "top ".concat(
                      (null == G ? void 0 : G.width) < 992 ? w - 15 : w - 10,
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
                  (n =
                    (null == G ? void 0 : G.width) > 1440
                      ? p
                      : (null == G ? void 0 : G.width) < 992
                      ? ((null == G ? void 0 : G.width) / 500) * p
                      : ((null == G ? void 0 : G.width) / 1440) * p),
                  a
                    .from(e.current, {
                      translateY: n,
                      translateX: t,
                      rotateX: b,
                      rotateY: S,
                      opacity: M,
                      duration: v,
                      ease: C,
                    })
                    .to(e.current, {
                      translateY: 0,
                      rotateX: 0,
                      rotateY: 0,
                      translateX: 0,
                      opacity: 1,
                    }),
                  () => a.kill()
                );
              }
            }
          }, [E, I]),
          (0, a.jsx)(a.Fragment, {
            children: t
              ? g && "_blank" == g
                ? (0, a.jsxs)(i.default, {
                    ref: P,
                    href: t,
                    target: g,
                    rel: "noopener noreferrer",
                    prefetch: !1,
                    onClick: h,
                    className: (0, r.Z)(d().button, n, d()[B]),
                    children: [o, (0, a.jsx)("span", { className: d().wrap })],
                  })
                : (0, a.jsxs)(i.default, {
                    ref: P,
                    href: t,
                    target: g,
                    rel: "",
                    onClick: h,
                    className: (0, r.Z)(d().button, n, d()[B]),
                    children: [o, (0, a.jsx)("span", { className: d().wrap })],
                  })
              : (0, a.jsxs)("button", {
                  type: k,
                  disabled: A,
                  ref: T,
                  onClick: h,
                  className: (0, r.Z)(d().button, n, d()[B]),
                  children: [o, (0, a.jsx)("span", { className: d().wrap })],
                }),
          })
        );
      }
    },
    42625: function (e, t, n) {
      "use strict";
      var a = n(57437),
        i = n(44839),
        o = n(58538),
        d = n.n(o);
      let r = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: o, size: r, classic: l, ...u } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            ref: t,
            className: (0, i.Z)(
              d().container,
              o,
              r && d()[r],
              l && d().classic
            ),
            ...u,
            children: n,
          }),
        });
      });
      (r.displayName = "Container"), (t.Z = r);
    },
    4387: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return M;
        },
      });
      var a = n(57437),
        i = n(2265),
        o = n(77719),
        d = n.n(o);
      n(89360);
      var r = n(78002),
        l = n(36761),
        u = n.n(l),
        s = n(47984),
        c = n(87580),
        m = n(21360),
        g = n(13259);
      let h = {
          Africa: { coordinates: { latitude: 7.1881, longitude: 21.0936 } },
          Antarctica: {
            coordinates: { latitude: -75.250973, longitude: -0.071389 },
          },
          Asia: { coordinates: { latitude: 34.0479, longitude: 100.6197 } },
          Europe: { coordinates: { latitude: 54.526, longitude: 15.2551 } },
          "North America": {
            coordinates: { latitude: 40.526, longitude: -100.2551 },
          },
          Oceania: { coordinates: { latitude: -25.2744, longitude: 133.7751 } },
          "South America": {
            coordinates: { latitude: -8.7832, longitude: -55.4915 },
          },
        },
        f = {
          AF: {
            name: "Afghanistan",
            coordinates: { latitude: 33, longitude: 65 },
          },
          AX: {
            name: "\xc5land Islands",
            coordinates: { latitude: 60.116667, longitude: 19.9 },
          },
          AL: { name: "Albania", coordinates: { latitude: 41, longitude: 20 } },
          DZ: { name: "Algeria", coordinates: { latitude: 28, longitude: 3 } },
          AS: {
            name: "American Samoa",
            coordinates: { latitude: -14.3333, longitude: -170 },
          },
          AD: {
            name: "Andorra",
            coordinates: { latitude: 42.5, longitude: 1.6 },
          },
          AO: {
            name: "Angola",
            coordinates: { latitude: -12.5, longitude: 18.5 },
          },
          AI: {
            name: "Anguilla",
            coordinates: { latitude: 18.25, longitude: -63.1667 },
          },
          AQ: {
            name: "Antarctica",
            coordinates: { latitude: -90, longitude: 0 },
          },
          AG: {
            name: "Antigua and Barbuda",
            coordinates: { latitude: 17.05, longitude: -61.8 },
          },
          AR: {
            name: "Argentina",
            coordinates: { latitude: -34, longitude: -64 },
          },
          AM: { name: "Armenia", coordinates: { latitude: 40, longitude: 45 } },
          AW: {
            name: "Aruba",
            coordinates: { latitude: 12.5, longitude: -69.9667 },
          },
          AU: {
            name: "Australia",
            coordinates: { latitude: -27, longitude: 133 },
          },
          AT: {
            name: "Austria",
            coordinates: { latitude: 47.3333, longitude: 13.3333 },
          },
          AZ: {
            name: "Azerbaijan",
            coordinates: { latitude: 40.5, longitude: 47.5 },
          },
          BS: {
            name: "Bahamas",
            coordinates: { latitude: 24.25, longitude: -76 },
          },
          BH: {
            name: "Bahrain",
            coordinates: { latitude: 26, longitude: 50.55 },
          },
          BD: {
            name: "Bangladesh",
            coordinates: { latitude: 24, longitude: 90 },
          },
          BB: {
            name: "Barbados",
            coordinates: { latitude: 13.1667, longitude: -59.5333 },
          },
          BY: { name: "Belarus", coordinates: { latitude: 53, longitude: 28 } },
          BE: {
            name: "Belgium",
            coordinates: { latitude: 50.8333, longitude: 4 },
          },
          BZ: {
            name: "Belize",
            coordinates: { latitude: 17.25, longitude: -88.75 },
          },
          BJ: {
            name: "Benin",
            coordinates: { latitude: 9.5, longitude: 2.25 },
          },
          BM: {
            name: "Bermuda",
            coordinates: { latitude: 32.3333, longitude: -64.75 },
          },
          BT: {
            name: "Bhutan",
            coordinates: { latitude: 27.5, longitude: 90.5 },
          },
          BO: {
            name: "Bolivia",
            coordinates: { latitude: -17, longitude: -65 },
          },
          BQ: {
            name: "Bonaire, Sint Eustatius and Saba",
            coordinates: { latitude: 12.183333, longitude: -68.233333 },
          },
          BA: {
            name: "Bosnia and Herzegovina",
            coordinates: { latitude: 44, longitude: 18 },
          },
          BW: {
            name: "Botswana",
            coordinates: { latitude: -22, longitude: 24 },
          },
          BV: {
            name: "Bouvet Island",
            coordinates: { latitude: -54.4333, longitude: 3.4 },
          },
          BR: {
            name: "Brazil",
            coordinates: { latitude: -10, longitude: -55 },
          },
          IO: {
            name: "British Indian Ocean Territory",
            coordinates: { latitude: -6, longitude: 71.5 },
          },
          BN: {
            name: "Brunei",
            coordinates: { latitude: 4.5, longitude: 114.6667 },
          },
          BG: {
            name: "Bulgaria",
            coordinates: { latitude: 43, longitude: 25 },
          },
          BF: {
            name: "Burkina Faso",
            coordinates: { latitude: 13, longitude: -2 },
          },
          MM: { name: "Myanmar", coordinates: { latitude: 22, longitude: 98 } },
          BI: {
            name: "Burundi",
            coordinates: { latitude: -3.5, longitude: 30 },
          },
          KH: {
            name: "Cambodia",
            coordinates: { latitude: 13, longitude: 105 },
          },
          CM: { name: "Cameroon", coordinates: { latitude: 6, longitude: 12 } },
          CA: { name: "Canada", coordinates: { latitude: 60, longitude: -95 } },
          CV: {
            name: "Cape Verde",
            coordinates: { latitude: 16, longitude: -24 },
          },
          KY: {
            name: "Cayman Islands",
            coordinates: { latitude: 19.5, longitude: -80.5 },
          },
          CF: {
            name: "Central African Republic",
            coordinates: { latitude: 7, longitude: 21 },
          },
          TD: { name: "Chad", coordinates: { latitude: 15, longitude: 19 } },
          CL: { name: "Chile", coordinates: { latitude: -30, longitude: -71 } },
          CN: { name: "China", coordinates: { latitude: 35, longitude: 105 } },
          CX: {
            name: "Christmas Island",
            coordinates: { latitude: -10.5, longitude: 105.6667 },
          },
          CC: {
            name: "Cocos (Keeling) Islands",
            coordinates: { latitude: -12.5, longitude: 96.8333 },
          },
          CO: {
            name: "Colombia",
            coordinates: { latitude: 4, longitude: -72 },
          },
          KM: {
            name: "Comoros",
            coordinates: { latitude: -12.1667, longitude: 44.25 },
          },
          CD: {
            name: "Congo, the Democratic Republic of the",
            coordinates: { latitude: 0, longitude: 25 },
          },
          CG: { name: "Congo", coordinates: { latitude: -1, longitude: 15 } },
          CK: {
            name: "Cook Islands",
            coordinates: { latitude: -21.2333, longitude: -159.7667 },
          },
          CR: {
            name: "Costa Rica",
            coordinates: { latitude: 10, longitude: -84 },
          },
          CI: {
            name: "Ivory Coast",
            coordinates: { latitude: 8, longitude: -5 },
          },
          HR: {
            name: "Croatia",
            coordinates: { latitude: 45.1667, longitude: 15.5 },
          },
          CU: { name: "Cuba", coordinates: { latitude: 21.5, longitude: -80 } },
          CW: {
            name: "Cura\xe7ao",
            coordinates: { latitude: 12.166667, longitude: -68.966667 },
          },
          CY: { name: "Cyprus", coordinates: { latitude: 35, longitude: 33 } },
          CZ: {
            name: "Czech Republic",
            coordinates: { latitude: 49.75, longitude: 15.5 },
          },
          DK: { name: "Denmark", coordinates: { latitude: 56, longitude: 10 } },
          DJ: {
            name: "Djibouti",
            coordinates: { latitude: 11.5, longitude: 43 },
          },
          DM: {
            name: "Dominica",
            coordinates: { latitude: 15.4167, longitude: -61.3333 },
          },
          DO: {
            name: "Dominican Republic",
            coordinates: { latitude: 19, longitude: -70.6667 },
          },
          EC: {
            name: "Ecuador",
            coordinates: { latitude: -2, longitude: -77.5 },
          },
          EG: { name: "Egypt", coordinates: { latitude: 27, longitude: 30 } },
          SV: {
            name: "El Salvador",
            coordinates: { latitude: 13.8333, longitude: -88.9167 },
          },
          GQ: {
            name: "Equatorial Guinea",
            coordinates: { latitude: 2, longitude: 10 },
          },
          ER: { name: "Eritrea", coordinates: { latitude: 15, longitude: 39 } },
          EE: { name: "Estonia", coordinates: { latitude: 59, longitude: 26 } },
          ET: { name: "Ethiopia", coordinates: { latitude: 8, longitude: 38 } },
          FK: {
            name: "Falkland Islands (Malvinas)",
            coordinates: { latitude: -51.75, longitude: -59 },
          },
          FO: {
            name: "Faroe Islands",
            coordinates: { latitude: 62, longitude: -7 },
          },
          FJ: { name: "Fiji", coordinates: { latitude: -18, longitude: 175 } },
          FI: { name: "Finland", coordinates: { latitude: 64, longitude: 26 } },
          FR: { name: "France", coordinates: { latitude: 46, longitude: 2 } },
          GF: {
            name: "French Guiana",
            coordinates: { latitude: 4, longitude: -53 },
          },
          PF: {
            name: "French Polynesia",
            coordinates: { latitude: -15, longitude: -140 },
          },
          TF: {
            name: "French Southern Territories",
            coordinates: { latitude: -43, longitude: 67 },
          },
          GA: {
            name: "Gabon",
            coordinates: { latitude: -1, longitude: 11.75 },
          },
          GM: {
            name: "Gambia",
            coordinates: { latitude: 13.4667, longitude: -16.5667 },
          },
          GE: {
            name: "Georgia",
            coordinates: { latitude: 42, longitude: 43.5 },
          },
          DE: { name: "Germany", coordinates: { latitude: 51, longitude: 9 } },
          GH: { name: "Ghana", coordinates: { latitude: 8, longitude: -2 } },
          GI: {
            name: "Gibraltar",
            coordinates: { latitude: 36.1833, longitude: -5.3667 },
          },
          GR: { name: "Greece", coordinates: { latitude: 39, longitude: 22 } },
          GL: {
            name: "Greenland",
            coordinates: { latitude: 72, longitude: -40 },
          },
          GD: {
            name: "Grenada",
            coordinates: { latitude: 12.1167, longitude: -61.6667 },
          },
          GP: {
            name: "Guadeloupe",
            coordinates: { latitude: 16.25, longitude: -61.5833 },
          },
          GU: {
            name: "Guam",
            coordinates: { latitude: 13.4667, longitude: 144.7833 },
          },
          GT: {
            name: "Guatemala",
            coordinates: { latitude: 15.5, longitude: -90.25 },
          },
          GG: {
            name: "Guernsey",
            coordinates: { latitude: 49.5, longitude: -2.56 },
          },
          GW: {
            name: "Guinea-Bissau",
            coordinates: { latitude: 12, longitude: -15 },
          },
          GN: { name: "Guinea", coordinates: { latitude: 11, longitude: -10 } },
          GY: { name: "Guyana", coordinates: { latitude: 5, longitude: -59 } },
          HT: {
            name: "Haiti",
            coordinates: { latitude: 19, longitude: -72.4167 },
          },
          HM: {
            name: "Heard Island and McDonald Islands",
            coordinates: { latitude: -53.1, longitude: 72.5167 },
          },
          VA: {
            name: "Holy See (Vatican City State)",
            coordinates: { latitude: 41.9, longitude: 12.45 },
          },
          HN: {
            name: "Honduras",
            coordinates: { latitude: 15, longitude: -86.5 },
          },
          HK: {
            name: "Hong Kong",
            coordinates: { latitude: 22.25, longitude: 114.1667 },
          },
          HU: { name: "Hungary", coordinates: { latitude: 47, longitude: 20 } },
          IS: {
            name: "Iceland",
            coordinates: { latitude: 65, longitude: -18 },
          },
          IN: { name: "India", coordinates: { latitude: 20, longitude: 77 } },
          ID: {
            name: "Indonesia",
            coordinates: { latitude: -5, longitude: 120 },
          },
          IR: {
            name: "Iran, Islamic Republic of",
            coordinates: { latitude: 32, longitude: 53 },
          },
          IQ: { name: "Iraq", coordinates: { latitude: 33, longitude: 44 } },
          IE: { name: "Ireland", coordinates: { latitude: 53, longitude: -8 } },
          IM: {
            name: "Isle of Man",
            coordinates: { latitude: 54.23, longitude: -4.55 },
          },
          IL: {
            name: "Israel",
            coordinates: { latitude: 31.5, longitude: 34.75 },
          },
          IT: {
            name: "Italy",
            coordinates: { latitude: 42.8333, longitude: 12.8333 },
          },
          JM: {
            name: "Jamaica",
            coordinates: { latitude: 18.25, longitude: -77.5 },
          },
          JP: { name: "Japan", coordinates: { latitude: 36, longitude: 138 } },
          JE: {
            name: "Jersey",
            coordinates: { latitude: 49.21, longitude: -2.13 },
          },
          JO: { name: "Jordan", coordinates: { latitude: 31, longitude: 36 } },
          KZ: {
            name: "Kazakhstan",
            coordinates: { latitude: 48, longitude: 68 },
          },
          KE: { name: "Kenya", coordinates: { latitude: 1, longitude: 38 } },
          KI: {
            name: "Kiribati",
            coordinates: { latitude: 1.4167, longitude: 173 },
          },
          KP: {
            name: "Korea, Democratic People's Republic of",
            coordinates: { latitude: 40, longitude: 127 },
          },
          KR: {
            name: "South Korea",
            coordinates: { latitude: 37, longitude: 127.5 },
          },
          XK: {
            name: "Kosovo",
            coordinates: { latitude: 42.583333, longitude: 21 },
          },
          KW: {
            name: "Kuwait",
            coordinates: { latitude: 29.3375, longitude: 47.6581 },
          },
          KG: {
            name: "Kyrgyzstan",
            coordinates: { latitude: 41, longitude: 75 },
          },
          LA: {
            name: "Lao People's Democratic Republic",
            coordinates: { latitude: 18, longitude: 105 },
          },
          LV: { name: "Latvia", coordinates: { latitude: 57, longitude: 25 } },
          LB: {
            name: "Lebanon",
            coordinates: { latitude: 33.8333, longitude: 35.8333 },
          },
          LS: {
            name: "Lesotho",
            coordinates: { latitude: -29.5, longitude: 28.5 },
          },
          LR: {
            name: "Liberia",
            coordinates: { latitude: 6.5, longitude: -9.5 },
          },
          LY: {
            name: "Libyan Arab Jamahiriya",
            coordinates: { latitude: 25, longitude: 17 },
          },
          LI: {
            name: "Liechtenstein",
            coordinates: { latitude: 47.1667, longitude: 9.5333 },
          },
          LT: {
            name: "Lithuania",
            coordinates: { latitude: 56, longitude: 24 },
          },
          LU: {
            name: "Luxembourg",
            coordinates: { latitude: 49.75, longitude: 6.1667 },
          },
          MO: {
            name: "Macao",
            coordinates: { latitude: 22.1667, longitude: 113.55 },
          },
          MK: {
            name: "Macedonia, the former Yugoslav Republic of",
            coordinates: { latitude: 41.8333, longitude: 22 },
          },
          MG: {
            name: "Madagascar",
            coordinates: { latitude: -20, longitude: 47 },
          },
          MW: {
            name: "Malawi",
            coordinates: { latitude: -13.5, longitude: 34 },
          },
          MY: {
            name: "Malaysia",
            coordinates: { latitude: 2.5, longitude: 112.5 },
          },
          MV: {
            name: "Maldives",
            coordinates: { latitude: 3.25, longitude: 73 },
          },
          ML: { name: "Mali", coordinates: { latitude: 17, longitude: -4 } },
          MT: {
            name: "Malta",
            coordinates: { latitude: 35.8333, longitude: 14.5833 },
          },
          MH: {
            name: "Marshall Islands",
            coordinates: { latitude: 9, longitude: 168 },
          },
          MQ: {
            name: "Martinique",
            coordinates: { latitude: 14.6667, longitude: -61 },
          },
          MR: {
            name: "Mauritania",
            coordinates: { latitude: 20, longitude: -12 },
          },
          MU: {
            name: "Mauritius",
            coordinates: { latitude: -20.2833, longitude: 57.55 },
          },
          YT: {
            name: "Mayotte",
            coordinates: { latitude: -12.8333, longitude: 45.1667 },
          },
          MX: {
            name: "Mexico",
            coordinates: { latitude: 23, longitude: -102 },
          },
          FM: {
            name: "Micronesia, Federated States of",
            coordinates: { latitude: 6.9167, longitude: 158.25 },
          },
          MD: {
            name: "Moldova, Republic of",
            coordinates: { latitude: 47, longitude: 29 },
          },
          MC: {
            name: "Monaco",
            coordinates: { latitude: 43.7333, longitude: 7.4 },
          },
          MN: {
            name: "Mongolia",
            coordinates: { latitude: 46, longitude: 105 },
          },
          ME: {
            name: "Montenegro",
            coordinates: { latitude: 42, longitude: 19 },
          },
          MS: {
            name: "Montserrat",
            coordinates: { latitude: 16.75, longitude: -62.2 },
          },
          MA: { name: "Morocco", coordinates: { latitude: 32, longitude: -5 } },
          MZ: {
            name: "Mozambique",
            coordinates: { latitude: -18.25, longitude: 35 },
          },
          NA: {
            name: "Namibia",
            coordinates: { latitude: -22, longitude: 17 },
          },
          NR: {
            name: "Nauru",
            coordinates: { latitude: -0.5333, longitude: 166.9167 },
          },
          NP: { name: "Nepal", coordinates: { latitude: 28, longitude: 84 } },
          AN: {
            name: "Netherlands Antilles",
            coordinates: { latitude: 12.25, longitude: -68.75 },
          },
          NL: {
            name: "Netherlands",
            coordinates: { latitude: 52.5, longitude: 5.75 },
          },
          NC: {
            name: "New Caledonia",
            coordinates: { latitude: -21.5, longitude: 165.5 },
          },
          NZ: {
            name: "New Zealand",
            coordinates: { latitude: -41, longitude: 174 },
          },
          NI: {
            name: "Nicaragua",
            coordinates: { latitude: 13, longitude: -85 },
          },
          NE: { name: "Niger", coordinates: { latitude: 16, longitude: 8 } },
          NG: { name: "Nigeria", coordinates: { latitude: 10, longitude: 8 } },
          NU: {
            name: "Niue",
            coordinates: { latitude: -19.0333, longitude: -169.8667 },
          },
          NF: {
            name: "Norfolk Island",
            coordinates: { latitude: -29.0333, longitude: 167.95 },
          },
          MP: {
            name: "Northern Mariana Islands",
            coordinates: { latitude: 15.2, longitude: 145.75 },
          },
          NO: { name: "Norway", coordinates: { latitude: 62, longitude: 10 } },
          OM: { name: "Oman", coordinates: { latitude: 21, longitude: 57 } },
          PK: {
            name: "Pakistan",
            coordinates: { latitude: 30, longitude: 70 },
          },
          PW: {
            name: "Palau",
            coordinates: { latitude: 7.5, longitude: 134.5 },
          },
          PS: {
            name: "Palestinian Territory, Occupied",
            coordinates: { latitude: 32, longitude: 35.25 },
          },
          PA: { name: "Panama", coordinates: { latitude: 9, longitude: -80 } },
          PG: {
            name: "Papua New Guinea",
            coordinates: { latitude: -6, longitude: 147 },
          },
          PY: {
            name: "Paraguay",
            coordinates: { latitude: -23, longitude: -58 },
          },
          PE: { name: "Peru", coordinates: { latitude: -10, longitude: -76 } },
          PH: {
            name: "Philippines",
            coordinates: { latitude: 13, longitude: 122 },
          },
          PN: {
            name: "Pitcairn",
            coordinates: { latitude: -24.7, longitude: -127.4 },
          },
          PL: { name: "Poland", coordinates: { latitude: 52, longitude: 20 } },
          PT: {
            name: "Portugal",
            coordinates: { latitude: 39.5, longitude: -8 },
          },
          PR: {
            name: "Puerto Rico",
            coordinates: { latitude: 18.25, longitude: -66.5 },
          },
          QA: {
            name: "Qatar",
            coordinates: { latitude: 25.5, longitude: 51.25 },
          },
          RE: {
            name: "R\xe9union",
            coordinates: { latitude: -21.1, longitude: 55.6 },
          },
          RO: { name: "Romania", coordinates: { latitude: 46, longitude: 25 } },
          RU: {
            name: "Russian Federation",
            coordinates: { latitude: 60, longitude: 100 },
          },
          RW: { name: "Rwanda", coordinates: { latitude: -2, longitude: 30 } },
          BL: {
            name: "Saint Barth\xe9lemy",
            coordinates: { latitude: 17.897728, longitude: -62.834244 },
          },
          SH: {
            name: "Saint Helena, Ascension and Tristan da Cunha",
            coordinates: { latitude: -15.9333, longitude: -5.7 },
          },
          KN: {
            name: "Saint Kitts and Nevis",
            coordinates: { latitude: 17.3333, longitude: -62.75 },
          },
          LC: {
            name: "Saint Lucia",
            coordinates: { latitude: 13.8833, longitude: -61.1333 },
          },
          MF: {
            name: "Saint Martin (French part)",
            coordinates: { latitude: 18.075278, longitude: -63.06 },
          },
          PM: {
            name: "Saint Pierre and Miquelon",
            coordinates: { latitude: 46.8333, longitude: -56.3333 },
          },
          VC: {
            name: "St. Vincent and the Grenadines",
            coordinates: { latitude: 13.25, longitude: -61.2 },
          },
          WS: {
            name: "Samoa",
            coordinates: { latitude: -13.5833, longitude: -172.3333 },
          },
          SM: {
            name: "San Marino",
            coordinates: { latitude: 43.7667, longitude: 12.4167 },
          },
          ST: {
            name: "Sao Tome and Principe",
            coordinates: { latitude: 1, longitude: 7 },
          },
          SA: {
            name: "Saudi Arabia",
            coordinates: { latitude: 25, longitude: 45 },
          },
          SN: {
            name: "Senegal",
            coordinates: { latitude: 14, longitude: -14 },
          },
          RS: { name: "Serbia", coordinates: { latitude: 44, longitude: 21 } },
          SC: {
            name: "Seychelles",
            coordinates: { latitude: -4.5833, longitude: 55.6667 },
          },
          SL: {
            name: "Sierra Leone",
            coordinates: { latitude: 8.5, longitude: -11.5 },
          },
          SG: {
            name: "Singapore",
            coordinates: { latitude: 1.3667, longitude: 103.8 },
          },
          SX: {
            name: "Sint Maarten (Dutch part)",
            coordinates: { latitude: 18.033333, longitude: -63.05 },
          },
          SK: {
            name: "Slovakia",
            coordinates: { latitude: 48.6667, longitude: 19.5 },
          },
          SI: {
            name: "Slovenia",
            coordinates: { latitude: 46, longitude: 15 },
          },
          SB: {
            name: "Solomon Islands",
            coordinates: { latitude: -8, longitude: 159 },
          },
          SO: { name: "Somalia", coordinates: { latitude: 10, longitude: 49 } },
          ZA: {
            name: "South Africa",
            coordinates: { latitude: -29, longitude: 24 },
          },
          GS: {
            name: "South Georgia and the South Sandwich Islands",
            coordinates: { latitude: -54.5, longitude: -37 },
          },
          SS: {
            name: "South Sudan",
            coordinates: { latitude: 8, longitude: 30 },
          },
          ES: { name: "Spain", coordinates: { latitude: 40, longitude: -4 } },
          LK: {
            name: "Sri Lanka",
            coordinates: { latitude: 7, longitude: 81 },
          },
          SD: { name: "Sudan", coordinates: { latitude: 15, longitude: 30 } },
          SR: {
            name: "Suriname",
            coordinates: { latitude: 4, longitude: -56 },
          },
          SJ: {
            name: "Svalbard and Jan Mayen",
            coordinates: { latitude: 78, longitude: 20 },
          },
          SZ: {
            name: "Swaziland",
            coordinates: { latitude: -26.5, longitude: 31.5 },
          },
          SE: { name: "Sweden", coordinates: { latitude: 62, longitude: 15 } },
          CH: {
            name: "Switzerland",
            coordinates: { latitude: 47, longitude: 8 },
          },
          SY: {
            name: "Syrian Arab Republic",
            coordinates: { latitude: 35, longitude: 38 },
          },
          TW: {
            name: "Taiwan",
            coordinates: { latitude: 23.5, longitude: 121 },
          },
          TJ: {
            name: "Tajikistan",
            coordinates: { latitude: 39, longitude: 71 },
          },
          TZ: {
            name: "Tanzania, United Republic of",
            coordinates: { latitude: -6, longitude: 35 },
          },
          TH: {
            name: "Thailand",
            coordinates: { latitude: 15, longitude: 100 },
          },
          TL: {
            name: "Timor-Leste",
            coordinates: { latitude: -8.55, longitude: 125.5167 },
          },
          TG: { name: "Togo", coordinates: { latitude: 8, longitude: 1.1667 } },
          TK: {
            name: "Tokelau",
            coordinates: { latitude: -9, longitude: -172 },
          },
          TO: {
            name: "Tonga",
            coordinates: { latitude: -20, longitude: -175 },
          },
          TT: {
            name: "Trinidad and Tobago",
            coordinates: { latitude: 11, longitude: -61 },
          },
          TN: { name: "Tunisia", coordinates: { latitude: 34, longitude: 9 } },
          TR: { name: "Turkey", coordinates: { latitude: 39, longitude: 35 } },
          TM: {
            name: "Turkmenistan",
            coordinates: { latitude: 40, longitude: 60 },
          },
          TC: {
            name: "Turks and Caicos Islands",
            coordinates: { latitude: 21.75, longitude: -71.5833 },
          },
          TV: { name: "Tuvalu", coordinates: { latitude: -8, longitude: 178 } },
          UG: { name: "Uganda", coordinates: { latitude: 1, longitude: 32 } },
          UA: { name: "Ukraine", coordinates: { latitude: 49, longitude: 32 } },
          AE: {
            name: "United Arab Emirates",
            coordinates: { latitude: 24, longitude: 54 },
          },
          GB: {
            name: "United Kingdom",
            coordinates: { latitude: 54, longitude: -2 },
          },
          UM: {
            name: "United States Minor Outlying Islands",
            coordinates: { latitude: 19.2833, longitude: 166.6 },
          },
          US: {
            name: "United States",
            coordinates: { latitude: 38, longitude: -97 },
          },
          UY: {
            name: "Uruguay",
            coordinates: { latitude: -33, longitude: -56 },
          },
          UZ: {
            name: "Uzbekistan",
            coordinates: { latitude: 41, longitude: 64 },
          },
          VU: {
            name: "Vanuatu",
            coordinates: { latitude: -16, longitude: 167 },
          },
          VE: {
            name: "Venezuela",
            coordinates: { latitude: 8, longitude: -66 },
          },
          VN: {
            name: "Vietnam",
            coordinates: { latitude: 16, longitude: 106 },
          },
          VG: {
            name: "Virgin Islands, British",
            coordinates: { latitude: 18.5, longitude: -64.5 },
          },
          VI: {
            name: "Virgin Islands, U.S.",
            coordinates: { latitude: 18.3333, longitude: -64.8333 },
          },
          WF: {
            name: "Wallis and Futuna",
            coordinates: { latitude: -13.3, longitude: -176.2 },
          },
          EH: {
            name: "Western Sahara",
            coordinates: { latitude: 24.5, longitude: -13 },
          },
          YE: { name: "Yemen", coordinates: { latitude: 15, longitude: 48 } },
          ZM: { name: "Zambia", coordinates: { latitude: -15, longitude: 30 } },
          ZW: {
            name: "Zimbabwe",
            coordinates: { latitude: -20, longitude: 30 },
          },
        };
      var y = n(86953),
        p = n.n(y),
        _ = n(16609),
        v = n(44839),
        b = n(44630),
        S = n(38472),
        C = n(87138);
      function M() {
        let e = (0, i.useRef)(null),
          t = (0, i.useRef)(null),
          n = (0, b.Z)(),
          [o, l] = (0, i.useState)(0),
          y = (0, r.Z)() || {};
        (0, i.useEffect)(() => {
          y && l(y.width);
        }, [y]);
        let [M, N] = (0, i.useState)();
        (0, i.useEffect)(() => {
          S.Z.get("".concat(g.uU)).then((e) => {
            N(e.data);
          });
        }, []);
        let [x, w] = (0, i.useState)(1),
          [B, A] = (0, i.useState)(!0),
          [k, T] = (0, i.useState)(null),
          [P, G] = (0, i.useState)(null),
          [j, E] = (0, i.useState)(null),
          [I] = (0, i.useState)("city"),
          { setHeroActive: F } = (0, _.Z)(),
          L = (function () {
            let [e, t] = (0, i.useState)({ x: 0, y: 0 });
            return (
              (0, i.useEffect)(() => {
                var e;
                function n(e) {
                  t({
                    x: null == e ? void 0 : e.clientX,
                    y: null == e ? void 0 : e.clientY,
                  });
                }
                return (
                  null === (e = window) ||
                    void 0 === e ||
                    e.addEventListener("mousemove", n),
                  () => {
                    var e;
                    return null === (e = window) || void 0 === e
                      ? void 0
                      : e.removeEventListener("mousemove", n);
                  }
                );
              }, []),
              e
            );
          })(),
          [R, Z] = (0, i.useState)(!1);
        function z() {
          if (!t.current || !M) return;
          if (!t.current.isStyleLoaded()) {
            t.current.once("styledata", z);
            return;
          }
          let e = (function (e, t) {
            if (!e || !e.continents)
              return (
                console.error("Invalid data format!", e),
                { type: "FeatureCollection", features: [] }
              );
            let n = [];
            for (let [l, u] of Object.entries(e.continents)) {
              var a, i, o, d, r;
              if (u.total_users)
                for (let [e, s] of (("continent" === t || "all" === t) &&
                  n.push({
                    type: "Feature",
                    properties: {
                      type: "continent",
                      name: l,
                      total_users: u.total_users,
                    },
                    geometry: {
                      type: "Point",
                      coordinates: [
                        (null === (a = h[l]) || void 0 === a
                          ? void 0
                          : a.coordinates.longitude) || 0,
                        (null === (i = h[l]) || void 0 === i
                          ? void 0
                          : i.coordinates.latitude) || 0,
                      ],
                    },
                  }),
                Object.entries(u)))
                  "total_users" !== e &&
                    s.total_users &&
                    (("country" === t || "all" === t) &&
                      n.push({
                        type: "Feature",
                        properties: {
                          type: "country",
                          name:
                            (null === (o = f[e]) || void 0 === o
                              ? void 0
                              : o.name) || e,
                          total_users: s.total_users,
                          continent: l,
                        },
                        geometry: {
                          type: "Point",
                          coordinates: [
                            (null === (d = f[e]) || void 0 === d
                              ? void 0
                              : d.coordinates.longitude) || 0,
                            (null === (r = f[e]) || void 0 === r
                              ? void 0
                              : r.coordinates.latitude) || 0,
                          ],
                        },
                      }),
                    s.cities &&
                      ("city" === t || "all" === t) &&
                      s.cities.forEach((t) => {
                        var a;
                        t &&
                          t.coordinates &&
                          n.push({
                            type: "Feature",
                            properties: {
                              type: "city",
                              name: t.name,
                              total_users: t.total_users,
                              country:
                                (null === (a = f[e]) || void 0 === a
                                  ? void 0
                                  : a.name) || e,
                              country_code: e,
                              continent: l,
                            },
                            geometry: {
                              type: "Point",
                              coordinates: [
                                t.coordinates.longitude,
                                t.coordinates.latitude,
                              ],
                            },
                          });
                      }));
            }
            return { type: "FeatureCollection", features: n };
          })(M, I);
          t.current.getLayer("user-markers") &&
            t.current.removeLayer("user-markers"),
            t.current.getLayer("user-labels") &&
              t.current.removeLayer("user-labels"),
            t.current.getLayer("clusters") && t.current.removeLayer("clusters"),
            t.current.getLayer("cluster-count") &&
              t.current.removeLayer("cluster-count"),
            t.current.getSource("user_distribution") &&
              t.current.removeSource("user_distribution"),
            t.current.addSource("user_distribution", {
              type: "geojson",
              data: e,
              cluster: !0,
              clusterRadius: 50,
              clusterProperties: { total_users: ["+", ["get", "total_users"]] },
            }),
            t.current.addLayer({
              id: "clusters",
              type: "circle",
              source: "user_distribution",
              filter: ["has", "point_count"],
              paint: {
                "circle-color": [
                  "step",
                  ["get", "point_count"],
                  "#0094ff",
                  10,
                  "#008aed",
                  100,
                  "#007fda",
                ],
                "circle-radius": [
                  "step",
                  ["get", "point_count"],
                  15,
                  10,
                  20,
                  100,
                  30,
                ],
              },
            }),
            t.current.addLayer({
              id: "cluster-count",
              type: "symbol",
              source: "user_distribution",
              filter: ["has", "point_count"],
              layout: { "text-field": ["get", "total_users"], "text-size": 12 },
              paint: { "text-color": "#FFFFFF" },
            }),
            t.current.addLayer({
              id: "user-markers",
              type: "circle",
              source: "user_distribution",
              filter: ["!", ["has", "point_count"]],
              paint: {
                "circle-color": [
                  "match",
                  ["get", "type"],
                  "continent",
                  "#00BCD4",
                  "country",
                  "#00BCD4",
                  "city",
                  "#00BCD4",
                  "#ffffff",
                ],
                "circle-radius": [
                  "interpolate",
                  ["linear"],
                  ["get", "total_users"],
                  2,
                  "continent" === I ? 40 : "country" === I ? 20 : 10,
                  100,
                  20,
                  1e3,
                  40,
                ],
                "circle-opacity": 0.9,
              },
            }),
            t.current.addLayer({
              id: "user-labels",
              type: "symbol",
              source: "user_distribution",
              filter: ["!", ["has", "point_count"]],
              layout: {
                "text-field": [
                  "format",
                  ["get", "total_users"],
                  {
                    "font-scale":
                      "continent" === I ? 2 : "country" === I ? 1.5 : 1,
                    "text-color": "#ffffff",
                  },
                ],
                "text-size": 12,
                "text-offset": [
                  0,
                  "continent" === I ? -1.5 : "country" === I ? -1 : -0.75,
                ],
                "text-anchor": "top",
              },
              paint: { "text-color": "#000000" },
            }),
            t.current.off("click", "user-markers"),
            t.current.on("click", "user-markers", (e) => {
              if (!e.features || 0 === e.features.length) return;
              let n = e.features[0];
              T({
                name: n.properties.name,
                type: n.properties.type,
                totalUsers: n.properties.total_users,
                continent: n.properties.continent || "-",
                country: n.properties.country || "-",
                country_code: n.properties.country_code || "-",
              }),
                t.current.easeTo({
                  center: n.geometry.coordinates,
                  zoom: 12,
                  duration: 1500,
                });
            }),
            t.current.off("click", "clusters"),
            t.current.on("click", "clusters", (e) => {
              let n = t.current.queryRenderedFeatures(e.point, {
                layers: ["clusters"],
              });
              if (!n.length) return;
              let a = n[0].properties.cluster_id;
              t.current
                .getSource("user_distribution")
                .getClusterExpansionZoom(a, (e, a) => {
                  e ||
                    t.current.easeTo({
                      center: n[0].geometry.coordinates,
                      zoom: a + 1,
                    });
                });
            }),
            t.current.off("mouseenter", "clusters"),
            t.current.on("mouseenter", "clusters", () => {
              t.current.getCanvas().style.cursor = "pointer";
            }),
            t.current.off("mouseleave", "clusters"),
            t.current.on("mouseleave", "clusters", () => {
              t.current.getCanvas().style.cursor = "";
            }),
            t.current.off("mouseenter", "user-markers"),
            t.current.on("mouseenter", "user-markers", () => {
              t.current.getCanvas().style.cursor = "pointer";
            }),
            t.current.off("mouseleave", "user-markers"),
            t.current.on("mouseleave", "user-markers", () => {
              t.current.getCanvas().style.cursor = "";
            });
        }
        return (
          (0, i.useEffect)(() => {}, [M]),
          (0, i.useEffect)(() => {
            o > 992 && (F(!0), L.y < 100 ? F(!1) : F(!0), L.x < 250 && Z(!0));
          }, [L, o]),
          (0, i.useEffect)(() => {
            k && Z(!0);
          }, [k]),
          (0, i.useEffect)(() => {
            R &&
              setTimeout(() => {
                Z(!1);
              }, 5e3);
          }, [R]),
          (0, i.useEffect)(() => {
            if (k) {
              let e = M.continents[k.continent],
                t = M.continents[k.continent][k.country_code];
              M.continents[k.continent][k.country],
                e ? E(e.total_users) : E(0),
                t ? G(t.total_users) : G(0);
            }
          }, [k]),
          (0, i.useEffect)(() => {
            e.current &&
              M &&
              ((d().accessToken = g.ej),
              t.current
                ? z()
                : ((t.current = new (d().Map)({
                    container: e.current,
                    style: "mapbox://styles/mapbox/standard",
                    center: [0, 20],
                    zoom: o >= 992 ? 1.5 : 1,
                    projection: "globe",
                  })),
                  A(!1),
                  setTimeout(() => {
                    t.current.easeTo({
                      center: [-100, 30],
                      zoom: o >= 992 ? 2 : 1.4,
                      duration: 2500,
                    });
                  }, 500),
                  t.current.addControl(
                    new (d().NavigationControl)(),
                    "bottom-left"
                  ),
                  t.current.on("zoom", () => {
                    w(t.current.getZoom());
                  }),
                  t.current.on("load", () => {
                    z();
                  })));
          }, [M, I]),
          (0, a.jsx)("div", {
            className: u().section,
            children: (0, a.jsxs)("div", {
              ref: e,
              className: u().map,
              children: [
                (0, a.jsxs)("div", {
                  className: u().zoomControls,
                  children: [
                    (0, a.jsx)("button", {
                      onClick: () => {
                        if (t.current) {
                          let e = Math.min(x + 1, 10);
                          t.current.easeTo({ zoom: e }), w(e);
                        }
                      },
                      className: u().zoomButton,
                      children: "+",
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        if (t.current) {
                          let e = Math.max(x - 1, 1);
                          t.current.easeTo({ zoom: e }), w(e);
                        }
                      },
                      className: u().zoomButton,
                      children: "−",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: (0, v.Z)(
                    u().box,
                    R && u().active,
                    B && u().loading,
                    n > 100 && u().scrolled
                  ),
                  style: {
                    transform: "translate("
                      .concat(
                        o > 992
                          ? -((x - 2 < 0 ? 0 : x - 2 > 5 ? -150 : x - 2) * 50)
                          : -150,
                        "%,"
                      )
                      .concat(o > 992 ? -50 : 0, "%)"),
                  },
                  children: (0, a.jsxs)("div", {
                    className: u().starting,
                    children: [
                      (0, a.jsxs)("div", {
                        className: u().titleArea,
                        children: [
                          (0, a.jsx)("div", {
                            className: u().cube,
                            children: (0, a.jsx)(s.default, {
                              hero: !0,
                              src: "/cube.webp",
                              width: 80,
                              height: 80,
                            }),
                          }),
                          (0, a.jsxs)(c.default, {
                            component: "h1",
                            size: "sm",
                            className: u().title,
                            children: [
                              "Welcome to BlockDAG ",
                              (0, a.jsx)("br", {}),
                              (0, a.jsx)(C.default, {
                                href: "/product/blockdagx1",
                                children: (0, a.jsx)("span", {
                                  children: "X1 Miner APP",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      k
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)(c.default, {
                                component: "h2",
                                size: "sm",
                                className: u().citytitle,
                                children: [
                                  (0, a.jsx)(p(), {
                                    code: k.country_code,
                                    style: { width: 30, height: 20 },
                                  }),
                                  k.name,
                                ],
                              }),
                              (0, a.jsxs)(m.default, {
                                size: "md",
                                className: u().desc,
                                children: [
                                  k.continent,
                                  ": ",
                                  j,
                                  " ",
                                  (0, a.jsx)("br", {}),
                                  k.country,
                                  " : ",
                                  P,
                                  " ",
                                  (0, a.jsx)("br", {}),
                                  "Total Users: ",
                                  k.totalUsers,
                                ],
                              }),
                            ],
                          })
                        : (0, a.jsx)(m.default, {
                            size: "md",
                            className: u().desc,
                            children: "Click on a location to see details!",
                          }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    45419: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return h;
        },
      });
      var a = n(57437),
        i = n(42625),
        o = n(76003),
        d = n.n(o),
        r = n(21360),
        l = n(47984),
        u = n(32913),
        s = n(87580),
        c = n(70499),
        m = n(13259),
        g = n(44839);
      function h(e) {
        let { color: t } = e;
        return (0, a.jsx)(u.Z, {
          className: d().section,
          color: t || "primary",
          children: (0, a.jsxs)(i.Z, {
            className: d().sectionContainer,
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)(l.default, {
                  className: d().cube,
                  src: "/images/cube.png",
                  alt: "cube",
                  width: 245,
                  height: 245,
                }),
              }),
              (0, a.jsx)(s.default, {
                size: "md",
                children: "Buy BDAG",
              }),
              (0, a.jsxs)(r.default, {
                className: (0, g.Z)(d().desc, "font-bold"),
                size: "xl",
                children: [
                  "Join the BlockDAG crypto, engage with the project,",
                  (0, a.jsx)("br", { className: "d-md" }),
                  " and see your contribution grow to new heights.",
                ],
              }),
              (0, a.jsxs)("div", {
                className: d().btns,
                children: [
                  (0, a.jsx)(c.default, {
                    href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                    color: "dark" === t ? "primary" : "dark",
                    children: "Buy Now",
                  }),
                  (0, a.jsx)(c.default, {
                    color: "transparent-light",
                    href: m.zA,
                    children: "How To Buy",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    32913: function (e, t, n) {
      "use strict";
      var a = n(57437),
        i = n(44839),
        o = n(14629),
        d = n.n(o);
      let r = (0, n(2265).forwardRef)((e, t) => {
        let { children: n, className: o, color: r = "dark", ...l } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("section", {
            ref: t,
            className: (0, i.Z)(d().section, d()[r], o),
            ...l,
            children: n,
          }),
        });
      });
      (r.displayName = "Section"), (t.Z = r);
    },
    93728: function (e, t) {
      "use strict";
      let n = 0,
        a = (e, t, a) => {
          let i = new CustomEvent("add-toast", {
            detail: { id: n++, message: e, status: t, duration: a },
          });
          window.dispatchEvent(i);
        };
      t.Z = {
        success: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return a(e, "success", t);
        },
        error: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return a(e, "error", t);
        },
        info: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e3;
          return a(e, "info", t);
        },
      };
    },
    89360: function () {},
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
    36761: function (e) {
      e.exports = {
        section: "style_section__ZxEpF",
        zoomControls: "style_zoomControls__HFSss",
        zoomButton: "style_zoomButton__hXeCr",
        filters: "style_filters__fWokP",
        active: "style_active__XnOtI",
        map: "style_map__RCwHW",
        box: "style_box__UeHlK",
        titleArea: "style_titleArea__KkEIe",
        loading: "style_loading__YbwqV",
        scrolled: "style_scrolled__BXa2h",
        cube: "style_cube__ftv20",
        starting: "style_starting__Wf_dF",
        title: "style_title__QSORy",
        citytitle: "style_citytitle__GIBkJ",
        desc: "style_desc__HEt8H",
        loadingOverlay: "style_loadingOverlay__7u3M4",
        loadingSpinner: "style_loadingSpinner__ESnhB",
        spin: "style_spin__B7901",
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
        9667, 5698, 5073, 9961, 1899, 947, 922, 8241, 3415, 9391, 231, 3106,
        8048, 5734, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 65516));
      }
    ),
      (_N_E = e.O());
  },
]);
