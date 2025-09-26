function () {
    'use strict';

    const n$1 = r;
    ! function () {
        const n = r,
            e = a();
        for (;;) try {
            if (598118 === parseInt(n(302)) / 1 * (-parseInt(n(281)) / 2) + -parseInt(n(320)) / 3 * (-parseInt(n(295)) / 4) + -parseInt(n(288)) / 5 * (-parseInt(n(299)) / 6) + -parseInt(n(309)) / 7 * (parseInt(n(305)) / 8) + parseInt(n(304)) / 9 * (-parseInt(n(322)) / 10) + -parseInt(n(285)) / 11 * (-parseInt(n(301)) / 12) + parseInt(n(282)) / 13) break;
            e.push(e.shift());
        } catch (t) {
            e.push(e.shift());
        }
    }();
    const e$1 = function () {
        let n = true;
        return function (e, t) {
            const o = n ? function () {
                if (t) {
                    const n = t[r(321)](e, arguments);
                    return t = null, n
                }
            } : function () {};
            return n = false, o
        }
    }();
    e$1(globalThis, (function () {
        const n = r;
        let t;
        try {
            t = Function(n(298) + n(307) + ");")();
        } catch (a) {
            t = window;
        }
        const o = t[n(323)] = t[n(323)] || {},
            l = [n(303), n(300), n(294), n(289), n(332), n(327), n(315)];
        for (let r = 0; r < l[n(326)]; r++) {
            const t = e$1[n(306)][n(287)][n(316)](e$1),
                a = l[r],
                i = o[a] || t;
            t[n(293)] = e$1[n(316)](e$1), t[n(279)] = i[n(279)][n(316)](i), o[a] = t;
        }
    }))();
    const t$1 = [];

    function r(n, e) {
        const t = a();
        return r = function (e, o) {
            let l = t[e -= 279];
            if (void 0 === r.hgfWce) {
                r.IMDXwb = function (n) {
                    let e = "",
                        t = "";
                    for (let r, o, l = 0, a = 0; o = n.charAt(a++); ~o && (r = l % 4 ? 64 * r + o : o, l++ % 4) ? e += String.fromCharCode(255 & r >> (-2 * l & 6)) : 0) o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                    for (let r = 0, o = e.length; r < o; r++) t += "%" + ("00" + e.charCodeAt(r).toString(16)).slice(-2);
                    return decodeURIComponent(t)
                }, n = arguments, r.hgfWce = true;
            }
            const a = e + t[0],
                i = n[a];
            return i ? l = i : (l = r.IMDXwb(l), n[a] = l), l
        }, r(n, e)
    }
    let o$1 = false,
        l$1 = null;

    function a() {
        const n = ["mNj2verIsa", "mtKXndiYndbkvgrgAMm", "C2HVDW", "yM9KEq", "mJK1nJeXofDsuLPHEa", "yxbWzw5Kq2HPBgq", "ChjVDg90ExbL", "nty5ntv5Bwnstxa", "zxjYB3i", "y3jLyxrLrwXLBwvUDa", "Dg9W", "y2XHC3noyw1L", "x19WCM90B19F", "Aw5MBW", "mJa1ntz5t01JAey", "B3bLBLfrqNv5", "ywnuB29SDgLW", "CMv0DxjUicHMDw5JDgLVBIGPia", "ndy4uK1YAvnN", "D2fYBG", "mtjgCMLdBNm", "mte3mZa0nhv5rxbhBa", "Bg9N", "nJa2nNzqCfnlwG", "mJeYmhDTy1Lpua", "y29UC3rYDwn0B3i", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "CMvTB3zL", "mtyXmdbAvfL2sMy", "zgL2", "Aw5Uzxjive1m", "ChvZAa", "ywrKrxzLBNrmAxn0zw5LCG", "mJbWEa", "DhjHy2u", "yMLUza", "ywmTDg9VBhrPCca", "y2XPy2S", "y2XHC3nmAxn0", "mtmYAMfuq2zU", "yxbWBhK", "nZa1mg9bzK9OBG", "y29UC29Szq", "AgLKzq", "z2v0vgLTzq", "BgvUz3rO", "DgfIBgu", "C2HPzNq", "zNvUy3rPB24", "z2v0rwXLBwvUDej5swq", "C3r5Bgu", "zxHJzxb0Aw9U", "Dg9tDhjPBMC", "ywrK"];
        return (a = function () {
            return n
        })()
    }

    function i(e, r = n$1(297), a = 1e4, i = "", c = null, z = false) {
        const v = n$1;
        z ? function (e, t, r, o) {
            const a = n$1;
            let i = document[a(330)](t);
            !i && (i = document[a(290)](a(310)), i.id = t, i[a(292)] = a(317) + o, document[a(284)][a(286)](i)), i[a(311)] = e, i[a(292)] = a(317) + o, i[a(313)](a(318), (() => {
                u(uniqueId);
            })), setTimeout((() => {
                const n = a;
                i[n(319)][n(308)](n(324)), i[n(319)][n(280)](n(283)), i[n(331)][n(291)] = n(314);
            }), 50), l$1 && clearTimeout(l$1);
            l$1 = setTimeout((() => u(t)), r);
        }(e, r, a, i) : (t$1[v(312)]({
            text: e,
            id: r,
            duration: a,
            className: i,
            clickCallback: c
        }), o$1 || s());
    }

    function c$1(e) {
        const t = n$1;
        (null == ChannelUtils ? void 0 : ChannelUtils[t(296)]) && ChannelUtils[t(296)]({
            ret: true,
            msg: e
        });
    }

    function s(e) {
        const r = n$1;
        if (0 === t$1[r(326)]) return void(o$1 = false);
        o$1 = true;
        const {
            text: l,
            id: a,
            duration: i,
            className: c,
            clickCallback: z
        } = t$1[r(328)]();
        let v = document[r(330)](a);
        v && v[r(308)]();
        let d = a + "-" + (new Date)[r(325)](),
            y = document[r(290)](r(310));
        y.id = d, y[r(292)] = r(317) + c, y[r(311)] = l, document[r(284)][r(286)](y), z && typeof z === r(329) && y[r(313)](r(318), z), y[r(313)](r(318), (() => {
            u(d), s();
        })), setTimeout((() => {
            const n = r;
            y[n(319)][n(308)](n(324)), y[n(319)][n(280)](n(283)), y[n(331)][n(291)] = n(314);
        }), 50), i ? setTimeout((() => {
            u(d), s();
        }), i) : o$1 = false;
    }

    function u(e) {
        const t = n$1;
        let r = document[t(330)](e);
        r && (r[t(319)][t(308)](t(283)), r[t(319)][t(280)](t(324)), setTimeout((() => {
            r && r[t(308)]();
        }), 300));
    }
    const z = v;

    function v(n, e) {
        const t = y$1();
        return v = function (e, r) {
            let o = t[e -= 404];
            if (void 0 === v.FEWeaz) {
                v.GCiMNz = function (n) {
                    let e = "",
                        t = "";
                    for (let r, o, l = 0, a = 0; o = n.charAt(a++); ~o && (r = l % 4 ? 64 * r + o : o, l++ % 4) ? e += String.fromCharCode(255 & r >> (-2 * l & 6)) : 0) o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                    for (let r = 0, o = e.length; r < o; r++) t += "%" + ("00" + e.charCodeAt(r).toString(16)).slice(-2);
                    return decodeURIComponent(t)
                }, n = arguments, v.FEWeaz = true;
            }
            const l = e + t[0],
                a = n[l];
            return a ? o = a : (o = v.GCiMNz(o), n[l] = o), o
        }, v(n, e)
    }! function () {
        const n = v,
            e = y$1();
        for (;;) try {
            if (823748 === -parseInt(n(431)) / 1 * (parseInt(n(418)) / 2) + parseInt(n(427)) / 3 + -parseInt(n(408)) / 4 + -parseInt(n(432)) / 5 + parseInt(n(433)) / 6 * (parseInt(n(413)) / 7) + -parseInt(n(421)) / 8 + -parseInt(n(424)) / 9 * (-parseInt(n(420)) / 10)) break;
            e.push(e.shift());
        } catch (t) {
            e.push(e.shift());
        }
    }();
    const d$1 = function () {
        let n = true;
        return function (e, t) {
            const r = n ? function () {
                if (t) {
                    const n = t[v(426)](e, arguments);
                    return t = null, n
                }
            } : function () {};
            return n = false, r
        }
    }();

    function y$1() {
        const n = ["C2XPy2u", "y29UC29Szq", "mtqXmtC4sLb5vuvf", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "nJeXmhz3u25uvG", "otq3ntq4mePYwuvPvW", "ChjVDg90ExbL", "C2v0rgf0zq", "mJm4odzbyKXbwuy", "x19WCM90B19F", "yxbWBhK", "mJa2mJe1nwzKDvfqrG", "BgvUz3rO", "CgfKu3rHCNq", "zxHJzxb0Aw9U", "mtnJsxvfwhy", "mtuZodK1nvnsDuX4BW", "odKZodi2nK1Mve9jBa", "DhjHy2u", "y29UC3rYDwn0B3i", "Bg9N", "CMvWBgfJzq", "CMv0DxjUicHMDw5JDgLVBIGPia", "D2fYBG", "z2v0rNvSBfLLyxi", "z2v0tw9UDgG", "yMLUza", "mJi2mdiZnMvgA2XOrq", "Dg9ju09tDhjPBMC", "z2v0rgf0zq", "DgfIBgu", "zxjYB3i", "n2LAANrLyq", "Aw5MBW", "Dg9tDhjPBMC"];
        return (y$1 = function () {
            return n
        })()
    }
    d$1(globalThis, (function () {
        const n = v,
            e = function () {
                const n = v;
                let e;
                try {
                    e = Function(n(438) + n(419) + ");")();
                } catch (t) {
                    e = window;
                }
                return e
            }(),
            t = e[n(417)] = e[n(417)] || {},
            r = [n(436), n(404), n(414), n(412), n(430), n(411), n(434)];
        for (let o = 0; o < r[n(428)]; o++) {
            const e = d$1[n(435)][n(422)][n(407)](d$1),
                l = r[o],
                a = t[l] || e;
            e[n(425)] = d$1[n(407)](d$1), e[n(415)] = a[n(415)][n(407)](a), t[l] = e;
        }
    }))();
    const g$1 = f$1;

    function B() {
        const n = ["CM9VDa", "BwfUDq", "C3bLBgXjza", "6i+C56+U5A2q", "pgjYpG", "Aw5JBhvKzxm", "z25FzgjZx3f1zxn0", "57Ur5A6A5ywd5A6D", "54k55Bcg5y2H", "zxHJzxb0Aw9U", "zMLSDgvY", "Bwf0y2G", "5RAi6icxWRFMMj/NN7pLUieQ", "C2DZ", "AxrLBxm", "5AsP5RAV5Pwf5lQK", "vgfZA0fSBa", "z2v0rgf0zq", "yxbWBhK", "m0vjwKnhsa", "5zYJ6A2c546e5PM2", "CMv3yxjKC3r5Cgu", "Ahr0Chm6lY93zwiUC2fUz3vVC2HHlMnVBs8YmJaVAdvFmI9YzxmVCNvUDgLTzs9WyY9Nzw5LCMfSl2jPzY9IAwDtA2LUlW", "r2fTzunOyxjHy3rLCNm", "w2LUAxrnyxbDienVBMzPz193ioINO+AEKowUJoAiKa", "5y+Y6k+x55QU6ikK6zsM5zUk", "6iEZ6iE755QU6ikK56s855Us", "C2v0sxrLBq", "icOG", "6zoC5BIblW", "z2v0qMLUyxj5q29UDgvUDa", "6zMq6lsT56s85yYf", "y2HHx2DZx2rIC19MC19ZA2LUAw5MBW", "DgLTzvn0yxj0", "mZG3nZe3yxb2rNjb", "rMLNAhq", "u2HVCeDVB2rZ", "C2vHDa", "uM91BMrPza", "C3LZx3bSyxLJyxjKlNnNCW", "CMvWBgfJzq", "DgvZDc5Zyw5NDw9ZAgeUy29T", "zw5KDgLTzq", "z2v0AxrLBq", "CMv0DxjUicHMDw5JDgLVBIGPia", "AxrLBxrPChm", "56wi5Os/5y+W", "C3LZx3bSyxLJyxjK", "56wi56Ap5Q2M5Bcg", "CMvWBgfJzufSBa", "z25FzgjZx2DPzNrIywC", "kcHFys4", "5As65A6D56ko54Mh", "zxzLBNq", "r2fTzvnWzwXSCW", "yxn5BMm", "C3LZx2G1x3f1zxn0lNnNCW", "z29VzhnSAxn0", "ywmTDg9VBhrPCa", "v3vkAwfUz3m", "y2HHx2DZx2rIC19MC19ZA2LUAw5MBY5Zz3m", "6lcl5A6A5Rc05PM26iEQ6ycj56s855Us", "5OMl5Rcu5y2H", "Bwf4Aha", "44cr5ywr5O2I", "C3LZx2G1x2rIC19JBgLLBNrZzxj2zxjWDwi", "zw5KC1DPDgG", "vgv4Da", "z2vUzxjHBeLe", "rhjVCfrLBxbSzxrL", "z29Vzhm", "BwLU", "vdaWmdaWmG", "BNvTyMvY", "5Rkz5PgP5P+Vkfnqkq", "sxrLBq", "zxzLBNqX", "zMzFzxHJAgfUz2vFBMv3", "C3rHz2u", "pgrPDIbZDhLSzt0ID2LKDgG6nta3ChG7igHLAwDODdPHDxrVoYbIywnRz3jVDw5KlwnVBg9YoIbYz2jHka", "vgfJDgLJCW", "Bwf4", "z2v0EMHHBMzH", "r3vUEMLW", "lNnNCW", "CMv3yxjK", "Bg9ZDgL0zw0", "rhjVCeDYB3vW", "mtm1mtu5n1zfBfLmEa", "iJ48Aw1NihnYyZ0I", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "Bg9ZDg51Bq", "x0vn", "C3LZx2DZx2rIC19MC19NB29KC2jHC2vPBMzVlNnNCW", "Dgv4Da", "C3bSAxq", "yxjYyxLIDwzMzxi", "5PAW5zob55QU6ikK", "z25FzgjZx3f1zxn0lNnNCW", "pgeGDgfYz2v0psjFyMXHBMSIigHYzwy9iG", "qwr2zw50DxjL", "yMfZzuLe", "zMLSBa", "5Rc05PM256ko54Mh", "C2HVD2L0zw0", "56wi56Ap54gV", "Bgv2zwW", "C2HPzNq", "zNjVBq", "yMLNu2TPBG", "C3LZx3nLCNzLCL9PDgvTx2rYB3bZx3rLBxbSzxrLx2nVBMzPzY5Zz3m", "zMLLBgq", "z2LMDhm", "u3bNCM91Ca", "ChvZAa", "q2HVB3nL", "Dg9tDhjPBMC", "5lYG5lIw546j5466", "z2LMDeLe", "CMv2zxjZzq", "y2HHCg5HBwu", "zw50CMLLCW", "C3LZx3rYzwfZDxjLx2nOzxn0lNnNCW", "zMzFDgfZA19KywLSEq", "y2HHx3nWzwXS", "5AsA6ycj5lIa", "BwfW", "DgfZA3rLyw0", "zMXHDe1HCa", "C2L6zq", "AxrLBwDYB3vW", "C3rHCNq", "q2HHBMDLq291BNq", "C3LZx2G1x3rHC2S", "5A2z5BcA6AAzkoEvJoMzKoEQGEEGTcK", "ldaUnYK7iJ4", "z2v0rNvSBfLLyxi", "y29UC29Szq", "5QYI5lMq6lgg", "5AsN5Bcg5yAB5y2W", "y2HHx3nWzwXSlNnNCW", "mJa2nG", "ndKYm2n1uhDlDa", "ANnMDa", "ywXS", "odmSmJu1lda", "5lIh5lYx5PwS5lUW", "z2LMDhn5CW", "D3n6zG", "6k+46jgB6l+E5BYP", "nda2q3bMvLnr", "5OIy5lQl5O6O5RYu", "zgf0yuLUzM8", "qK9tuW", "C3rHCNrUDw0", "6zoC5BIbcG", "DhLWzq", "ANn0zG", "zMzFDgfZA19KywLSEs5Zz3m", "56Ia5PYj55QU6ikK5yYf", "CxvLC3rfBMruAw1L", "DxnLzgvMzMvJDa", "C3LZx3nLCNzLCL9PDgvTx2rYB3bZx3rLBxbSzxrLx2nVBMzPzW", "5RAi6icxWRC", "ChjVDg90ExbL", "zMLUza", "r2DYB3vW", "D2fYBG", "C3bLBgXPza", "odbJAfL1CKe", "BMfTzq", "56Ia5PYj5Bcg5y2W5A6D566X", "CM9Nzq", "z2LMDhnjDgvT", "x2f0DhjPyNv0zxm", "ANn6zG", "C2vHCMnO", "5OUB5yUF5lUK", "z2v0yxjTB3i", "zNjVBuvUDhjPzxm", "C3LZx3nZx2DHBwvSywjLBf9JB25MAwC", "5O2I5Bcg5y2H", "zMzFy2HLC3m", "5As65A6D6kgm5yQO", "y2XPzw50vgLTzvn0yxj0", "vw5PDMvYC2fSr3jVDxa", "5Poc5y+W5Q+u5Q2M", "ANnZyW", "DgHLBG", "5OUB5yw15lMW6AMS", "C3rHDgLJ", "mJu1ldeWmcWW", "x0Xz", "z2vUzxjHBhnRAw4", "C3bLBgW", "y29UC3rYDwn0B3i", "Bwf0y2HbBgW", "C3rHCNrZv2L0Aa", "BgvUz3rO", "q3rY", "zMzFy2HLC3mUC2DZ", "u2vSBfrPBwu", "t3rOzxi", "q2fYza", "zxf1Axa", "tMv3q2HLC3m", "z25FBMv3x2z1BgKUC2DZ", "WRFLVidLKk/JGja", "C3bLy2LHu2TPBG", "5P6T6zUe6yEr5y2W", "55UY55Us56Ap5yIP", "zgvZyW", "z2v0tw9UDgG", "ks0Ox2iU", "BMnU", "pc9ZCgfUpJXZCgfUihn0EwXLpsjJB2XVCJOGCMDIysGYntuSmJu1ldaSmsK7iJ7NRkW", "y29SB3i", "AgrFmxyXx3jVz3vL", "zxHZAgf0Aw1LCW", "DhjPz2DLCLr5Cgu", "Bg9HzefZEw5J", "zMzFDgLHBMDVBMC", "C3rYAw5NAwz5", "C2TPBKLe", "y2HHx3nWzwXSzxH0zw5KlNnNCW", "5PMU6ycA5Bcg5y2W5A6D566X", "x19WCM90B19F", "y2fYzhm", "AgfZ", "tKHLzMzLy3q", "pgrPDIbZDhLSzt0IAgvPz2H0oIaZChG7iJ48l2rPDJ4", "zhjHDW", "5Q2M5Bcg5yYf", "z3HQC29U", "6k+p5lUK5AsP5lIl", "AgrFmxyXx3jVz3vLlNnNCW", "z2v0sxrLBq", "5As65A6D6yEn572U5yI4", "C2vLza", "y2XPzw50", "nJa5nZa0BwHmqLPu", "CMv3yxjKAxrLBq", "C3LZx2G1x3rHC2SUC2DZ", "z25Fz3nFywHPzxzLBwvUDc5Zz3m", "B2jQzwn0", "CgfKu3rHCNq", "uM9VDa", "y2HHx3nWzwXSzxH0zw5K", "WRFLHzhMJAlJGjdLJAdMMj/NP5JLRP3JGje", "tgv2zwW", "C3LZx2G1x3nOB3a", "WRFJGjdLHBBLROpKU7VLIQhJGje", "zxjYB3i", "mJf0wurptNq", "Bg9JyxrPB24", "C2vHC29Usuq", "ChjPy2u", "44cq5Rs75yQO57Ut5P2F5O+q6yAs44crpgjYpGOGicaGicaGicaGicaGicaGicaG6k+35Qoa5P+L5PIV5zcM5PYj5PYQ5ywr5O2I55Qe54MP5zobpgjYpGOGicaGicaGicaGicaGicaGicaG54k55yE75ywZ6zET5PYS5O+q56s677Yi5lIn5yAn5O+q6yAs5Q2K5Rs75yQO77YjpgjYpGOGicaGicaGicaGicaGicaGicaG6k6+572U5lIT5y+V6k6+572U5PIV5zcM5BYa5zcV5Rs75yQO5OIQ5Q2I5PEL5PYF5O+q6yAs", "ANnZza", "Bg9JywXLq29TCgfYzq", "tKH0CMLNz2vY", "t2zIx0rLyW", "56Qb5P2L5y2X5PY6", "y2HHCMfJDgvY", "CMvKDwnL", "zMLNAhrjra", "6ycA55sO5ywd5A6D", "C3bSAwnL", "z2v0", "zwzMzwn0vhLWzq", "zMXVB3i", "CgfYC2u", "yxnZAwDU", "y291BNq", "D3nJza", "zMLNAhq", "r2vUzxjHBa", "uMv3yxjKsxrLBq", "6lwB5yMn5RYu5lMG", "q2HHChrLCG", "DgLTzuvUza", "C3rYAw5N", "A2v5CW", "z3vHBNHPBMC", "rhjVCa", "ChjL", "ANnJza", "5BYa5zcVWRC", "ANnZCa", "ndeYnhvLqMLXqG", "y29Uy2f0", "z2vUzxjHBgDYB3vW", "Bg9N", "y2fYza", "rhvVqMfV", "ANnICW", "57g75z6lpc9ZCgfUpG", "5yQO5Ocb5Rc05PM2lq", "5y+Y6k+x5Bcg5y2W5A6D566X", "w+wfIoAjI10", "y291BNrZ", "Aw5MBW", "Dg9mB2nHBgvtDhjPBMC", "rhjVCeL0zw0", "6lgQ5y2o55QU6ikK5yYf", "5As65A6D5yI4", "5lYG6k+055QU6ikK6zsM5zUk", "C29YDa", "ntvzCgTxrhC", "uMv3yxjKr3jVDxa", "z3jLzw4", "C3vIvhLWzq", "zMzFzgjZx2XVDhrLCNLFBMv3", "B3rOzxjHza", "C3LZx2DZx2rIC19MC19NB29KC2jHC2vPBMzV", "Ahr0Chm6lY93zwiUC2fUz3vVC2HHlMnVBs8YmJaVAdvFmI9YzxmVy29UzMLNl0nVBMzPz193lNnNCZ92pq", "x1Pe", "C2nOB29S", "zMzFDgLHBMDVBMCUC2DZ", "q29TBw9U", "pc9ZCgfUpG", "odiWotm4r3HRr1vs", "CMv0DxjUia", "y2rRzxK", "zMzFzxHJAgfUz2vFBMv3lNnNCW", "z2v0BNvT", "zMLSzq", "y2fYzg51Bq", "phnWyw4GC3r5Bgu9iMnVBg9YoIbYz2jHkdaSmcWWldaPo3n0CM9RztPUB25LoYi+", "5A615Bcp5y+R5zQJ", "lNbUzW", "iJ48l2e+", "5PAW5BM05AsN5zcj", "AxrLBuLK", "zxzLCNK", "y2fYzgrLC2m", "zMLNAhrNCM91Ca", "C3bNzw5LCMfSCW", "r2vUzxjHBfjHBMS", "Aw5MB3m", "C3LZx2G1x3nOB3aUC2DZ", "5AsX5y67ia", "DgfZA2LK", "44cq5ywf5yc85RAi6ls544cr", "AM9PBG", "ywjICMv2Awf0Aw9U", "q2XPzw50vgLTzvn0yxj0", "zMLUzeLUzgv4", "sNvTCfn0ywDL", "C3bLBgXZ", "CMvZB3vYy2vwzxjZAw9U", "DgvZDa", "vgfZAW", "D3nZCa", "BMfTzs5Szw5NDgG", "AgrFCM9NDwvSAwTL", "qwnOAwv2zw1LBNrbBgW", "wMHHBMDVBMC", "DhjHy2u", "AxrLBq", "mtG2nJu1nxrYuwfJrG", "EMHHBMzHCW", "5PAh5zkm5lMX5Q2MkG", "u2vSzwn0uMv3yxjK", "5yQG6l295lIT", "55QU6ikK5yYf", "ywrK", "C3LZx2G1x3f1zxn0", "x0To", "5zcm5B+d57Ut", "mtKYBuzKB2fp", "y2HHCMfJDgvYlNnNCW", "BMv4Da", "z2vUzxjHBg5HBwu", "Bg9ZDa", "zgvJB2rL", "z25FzgjZx2DPzNrIywCUC2DZ", "zgvJB21WCMvZCW", "AxnbCNjHEq", "r29VzhncyxnLsuq", "Bgv2zwXZ", "vgfZA05Vzgu", "r2fTzvbSyxLdyxjKCW", "yMLNl3m", "pc9KAxy+", "z2v0C3bLBgW", "AgrFCM9NDwvSAwTLlNnNCW", "ywjZ", "5yQO5Ocb5Awx6kof", "C2fPAML0AwfUzNu", "5QcH5Bcj5Bcg5y2W", "u3bLBgW", "mcW4mYWYntu", "q0rlrgLJDa", "z25FBMv3x2z1BgK", "DgLTzq", "Ag9ZDa", "yMvNAw50Aw1L", "C2XPy2u", "5lI65Rcr6zMK5A6Z", "zwzMzwn0suq", "qwnOAwv2zw1LBNq", "5yw25A6d6ygt5yw3", "Ahr0Chm6lY90zxn0lNnHBMD1B3nOys5JB20VAduVCMvZl2nVBMzPzY8Vq29UzMLNx3CUC2DZ", "yxjTB3i", "DhjPz2DLCKLe", "zMzFzgjZx2XVDhrLCNLFBMv3lNnNCW", "z25Fz3nFywHPzxzLBwvUDa", "zwzMzwn0", "mty2odK0ngD2wwHzqW", "Bw9UzxK", "C3LZx2G1x2rIC19JBgLLBNrZzxj2zxjWDwiUC2DZ", "C2vHDc9Z", "yMLUza", "CgXHDgzVCM0", "DMfSDwvZ", "C3LZx3rYzwfZDxjLx2nOzxn0", "DgfIBgu", "C29Tzq", "zM9YrwfJAa", "vhLWzuLe", "C2v0", "z2vUzxjHBhm", "zxHJAgfUz2vJB3vUDde", "qwXSrhjVCa"];
        return (B = function () {
            return n
        })()
    }! function () {
        const n = f$1,
            e = B();
        for (;;) try {
            if (935239 === parseInt(n(653)) / 1 * (parseInt(n(449)) / 2) + -parseInt(n(776)) / 3 * (-parseInt(n(498)) / 4) + parseInt(n(517)) / 5 * (-parseInt(n(530)) / 6) + -parseInt(n(462)) / 7 * (-parseInt(n(618)) / 8) + parseInt(n(569)) / 9 * (parseInt(n(803)) / 10) + -parseInt(n(668)) / 11 * (-parseInt(n(579)) / 12) + parseInt(n(722)) / 13 * (-parseInt(n(784)) / 14)) break;
            e.push(e.shift());
        } catch (t) {
            e.push(e.shift());
        }
    }();
    const C = function () {
        let n = true;
        return function (e, t) {
            const r = n ? function () {
                if (t) {
                    const n = t[f$1(652)](e, arguments);
                    return t = null, n
                }
            } : function () {};
            return n = false, r
        }
    }();

    function f$1(n, e) {
        const t = B();
        return f$1 = function (e, r) {
            let o = t[e -= 416];
            if (void 0 === f$1.iMoABw) {
                f$1.RDqZCl = function (n) {
                    let e = "",
                        t = "";
                    for (let r, o, l = 0, a = 0; o = n.charAt(a++); ~o && (r = l % 4 ? 64 * r + o : o, l++ % 4) ? e += String.fromCharCode(255 & r >> (-2 * l & 6)) : 0) o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                    for (let r = 0, o = e.length; r < o; r++) t += "%" + ("00" + e.charCodeAt(r).toString(16)).slice(-2);
                    return decodeURIComponent(t)
                }, n = arguments, f$1.iMoABw = true;
            }
            const l = e + t[0],
                a = n[l];
            return a ? o = a : (o = f$1.RDqZCl(o), n[l] = o), o
        }, f$1(n, e)
    }
    C(globalThis, (function () {
        const n = f$1,
            e = function () {
                const n = f$1;
                let e;
                try {
                    e = Function(n(678) + n(724) + ");")();
                } catch (t) {
                    e = window;
                }
                return e
            }(),
            t = e[n(771)] = e[n(771)] || {},
            r = [n(501), n(801), n(510), n(461), n(643), n(626), n(567)];
        for (let o = 0; o < r[n(832)]; o++) {
            const e = C[n(829)][n(798)][n(622)](C),
                l = r[o],
                a = t[l] || e;
            e[n(435)] = C[n(622)](C), e[n(750)] = a[n(750)][n(622)](a), t[l] = e;
        }
    }))();
    const w = {};
    var m$1 = [],
        D = [],
        M$1 = {
            290: "推锋",
            766: "匡弼"
        },
        x$1 = [],
        L = {},
        A$1 = {},
        I = {},
        h = {},
        p$1 = new Map,
        j = new Set,
        U$1 = () => ({
            name: g$1(573)
        }),
        N = [],
        b = {},
        H$1 = [],
        S = {},
        Z$1 = {},
        Y = {},
        P$1 = {},
        W = {},
        q = {},
        O = {},
        J = new Set;
    async function G(n) {
        const e = g$1;
        return new Promise((t => JSZipUtils[e(664)](window[e(463)][e(605)] === e(675) ? e(612) : e(524) + window[e(559)], ((r, o) => JSZip[e(429)](o)[e(822)]((async r => {
            var o;
            const l = e,
                a = function () {
                    const n = f$1,
                        e = new Date;
                    return e[n(770)]()[n(750)]() + (e[n(421)]() + 1)[n(750)]()[n(454)](2, "0") + e[n(651)]()[n(750)]()[n(454)](2, "0") + n(706)
                }();
            let i = [l(681), l(758), l(472), l(564), l(426), l(459), l(523), l(796), l(699), l(666), l(640), l(576), l(767), l(521), l(711), l(625), l(684), l(430), l(816), l(456), l(616), l(757), l(603), l(814)];
            var c = await Promise[l(778)](i[l(760)]((n => r[l(535)](n + l(718))[l(689)](l(730))[l(822)]((n => JSON[l(480)]((new TextDecoder)[l(584)](new(Zlib[l(717)])(CtrUtil[l(833)][l(470)](n))[l(586)]())))))))[l(822)]((n => i[l(473)](((e, t, r) => (e[t + l(718)] = n[r], e)), {})));

            function s(n, e) {
                const t = l;
                if (typeof n !== t(453)) return n;
                let r = {};
                for (let o in n) {
                    r[e[t(477)](o) || o] = n[o];
                }
                return r
            }
            var u, z = new Map([
                    ["id", "编号"],
                    [l(804), "名称"],
                    [l(604), "时间"],
                    [l(420), "说明"],
                    [l(719), "奖励"],
                    [l(465), "价格"],
                    [l(715), "限购"],
                    [l(617), "效果"],
                    [l(510), "信息"]
                ]),
                v = c[l(727)][l(634)][l(691)][l(704)][l(473)](((n, e) => {
                    const t = l;
                    return 124 == e.e && (e.b = t(506) + e.b), n[t(630)](e.a, e), n
                }), new Map),
                d = c[l(727)][l(634)][l(554)][l(745)][l(473)](((n, {
                    Short: e,
                    Long: t
                }) => (n[l(630)](e, t), n)), new Map),
                y = c[l(744)][l(633)][l(703)][l(721)][l(512)][l(473)](((n, e) => {
                    const t = l;
                    return n[t(437)](e.a) || n[t(630)](e.a, []), n[t(477)](e.a)[t(748)](e.d), n
                }), new Map);
            u = {}, U$1 = function (n) {
                const e = f$1;
                if (n = parseInt(n), u[n]) return u[n];
                let t = s(v[e(477)](n), d) || {},
                    r = c[e(549)][e(634)][e(679)][e(799)]((({
                        a: e
                    }) => e == n)),
                    o = t[e(795)] && T(t[e(795)]),
                    l = {
                        ...t
                    };
                return (null == r ? void 0 : r.e) && (l[e(510)] = r.e), o && (l[e(617)] = o), u[n] = l
            };
            var B = {};

            function C(n) {
                var e;
                const t = l;
                let r = null == n ? void 0 : n[t(674)](/([^0-9,\.])/g, "")[t(729)](",")[t(760)]((n => parseInt(n)));
                return (null == r ? void 0 : r[t(832)]) < 2 ? n : (B[r[0]] ?? (B[r[0]] = null == (e = v[t(477)](r[0])) ? void 0 : e.b) ?? r[0]) + (parseInt(r[1]) > 1 ? "*" + r[1] : "")
            }
            var G = {};

            function T(n) {
                const e = l;
                let t = parseInt(n);
                if (1e3 != t && Math[e(596)](t) > 0) return G[t] ?? (G[t] = (y[e(477)](Math[e(596)](t)) ?? [])[e(760)]((n => {
                    var t;
                    return (null == (t = v[e(477)](n)) ? void 0 : t.b) ?? T(n)
                }))[e(553)](t > 0 ? "/" : "&"))
            }
            x$1 = c[l(774)][l(688)][l(828)][l(473)](((n, {
                a: e,
                c: t,
                o: r
            }) => {
                var o, a;
                const i = l;
                let c = {
                    name: t,
                    spellid: e,
                    desc: (null == (a = null == (o = null == r ? void 0 : r[i(674)](/<[^\<\>]*>/g, "")) ? void 0 : o[i(674)](/#.*/g, "")) ? void 0 : a[i(674)](/[;\n]+$/g, "")) || ""
                };
                return (c[i(420)][i(639)]("暗置") || c[i(420)][i(639)]("扣置") || c[i(420)][i(639)]("移出")) && (M$1[e] = E[c[i(804)]] ?? c[i(804)]), n[e] = c, n
            }), []);
            let V = c[l(673)][l(554)][l(473)](((n, {
                Short: e,
                Long: t
            }) => (n[l(630)](e, t), n)), new Map);
            if (m$1 = c[l(673)][l(591)][l(502)][l(760)]((n => s(n, V)))[l(473)](((n, e) => {
                    var t, r;
                    const o = l;
                    return n[e.id] = {
                        ...e,
                        name: e[o(804)] ?? (null == (t = x$1[e[o(636)]]) ? void 0 : t[o(804)]),
                        desc: null == (r = x$1[e[o(636)]]) ? void 0 : r[o(420)]
                    }, n
                }), []), D = c[l(673)][l(591)][l(502)][l(516)](((n, e) => n.c - e.c || n.d - e.d || n.h - e.h || n.m - e.m || n.g - e.g || n.f - e.f || n.a - e.a))[l(760)]((({
                    a: n
                }) => n)), p$1 = new Map(c[l(694)][l(827)][l(648)][l(568)][l(760)]((n => [String(n.a), [n.a, n.c, n.v || n.q, n.r]]))[l(753)]()), I = c[l(694)][l(634)][l(635)][l(568)][l(473)](((n, {
                    skinID: e,
                    name: t,
                    skinlevel: r,
                    dongPoint: o
                }) => {
                    let l = parseInt(e / 100);
                    return n[l] || (n[l] = {}), n[l][e] = {
                        level: {
                            "0,0": "普通",
                            "0,1": "稀有",
                            "0,2": "史诗",
                            "0,3": "传说",
                            "0,4": "限定"
                        } [r] || "未知",
                        name: t,
                        state: void 0 !== o
                    }, n
                }), {}), A$1 = c[l(694)][l(827)][l(417)][l(644)]((n => String(n[l(432)])[l(639)]("_")))[l(473)](((n, e) => {
                    const t = l;
                    let [r, o] = e[t(432)][t(729)]("_")[t(760)](Number);
                    return n[r] ? n[r][t(639)](o) || n[r][t(748)](o) : n[r] = [o], n
                }), {}), Object[l(755)](A$1)[l(628)]((([n, e]) => {
                    var t, r;
                    const o = l;
                    null == (t = p$1[o(477)](n)) || t[o(748)](e);
                    let a = parseInt(n / 100),
                        i = null == (r = I[a]) ? void 0 : r[n];
                    i && (delete I[a][n], e[o(628)]((e => {
                        const t = o;
                        I[a][n + "_" + e] = {
                            ...i,
                            name: i[t(804)] + e
                        };
                    })));
                })), L = c[l(580)][l(657)][l(472)][l(473)](((n, {
                    a: e,
                    ai: t,
                    b: r
                }) => {
                    const o = l;
                    return n[e] = (t || "") + (null == r ? void 0 : r[o(683)]("&", "")), n
                }), {}), c[l(580)][l(657)][l(472)][l(628)]((({
                    a: n,
                    v: e
                }) => {
                    const t = l;
                    if (typeof e !== t(490)) return void(h[n] = new Set([n]));
                    let r = [n, ...e[t(729)](";")[t(760)]((n => parseInt(n)))],
                        o = r[t(799)]((n => n in h));
                    if (o) {
                        let n = h[o];
                        r[t(644)]((e => !n[t(437)](e)))[t(628)]((e => (h[e] = n)[t(575)](e)));
                    } else {
                        let n = new Set(r);
                        r[t(628)]((e => h[e] = n));
                    }
                })), O = c[l(580)][l(693)][l(747)][l(473)](((n, e) => {
                    const t = l,
                        r = e[t(546)] ? e[t(546)][t(729)](",")[t(760)](Number) : [];
                    return r[t(628)]((e => {
                        n[e] = new Set(r);
                    })), n
                }), {}), q = c[l(527)][l(634)][l(528)][l(473)](((n, e) => (n[e.Id] = e, n)), {}), typeof n !== l(490)) {
                let n = c[l(585)][l(781)][l(746)][l(807)][l(709)][l(644)]((n => n[l(532)] != l(647) && !n[l(623)] && n[l(676)] >= a && n[l(606)] <= a))[l(516)](((n, e) => n[l(676)] - e[l(676)]))[l(760)]((n => {
                    const e = l,
                        t = e(638) + n[e(786)][e(645)](/\[(\d+),(\d+)\]/g)[e(760)]((n => {
                            const t = e,
                                [r, o, l] = n[t(645)](/\[(\d+),(\d+)\]/);
                            return U$1(o)[t(804)] + t(662) + l
                        }))[e(553)](e(638));
                    return {
                        giftID: n[e(752)],
                        endtime: n[e(676)],
                        begintime: n[e(606)],
                        dataInfo: n[e(786)],
                        rewards: t
                    }
                }))[l(644)](Boolean);
                w[l(602)] = n, b = {
                    trigger: Object[l(813)](c[l(433)][l(469)][l(760)]((n => [n[l(614)], n[l(428)]]))),
                    effect: c[l(433)][l(438)][l(760)]((n => ({
                        type: n[l(478)],
                        desc: n[l(420)][l(674)](/^你可以?(.*?)。?$/, "$1")
                    })))[l(516)](((n, e) => n[l(790)] - e[l(790)] || n[l(420)][l(832)] - e[l(420)][l(832)]))[l(473)](((n, e, t, r) => {
                        const o = l;
                        let a = r[t - 1];
                        return e[o(790)] != (null == a ? void 0 : a[o(790)]) && (e[o(420)] += o(537) + Array(13 - e[o(420)][o(832)])[o(736)]("～")[o(553)]("") + o(424) + e[o(790)] + o(505)), e[o(420)][o(832)] < 16 && (null == a ? void 0 : a[o(420)]) && (a[o(420)][o(700)](o(529)) || a[o(420)][o(832)] < 16) ? e[o(420)] = a[o(420)] += o(537) + Array(a[o(420)][o(832)] > 16 ? 4 : 20 - a[o(420)][o(832)])[o(736)]("～")[o(553)]("") + o(529) + e[o(420)] : n[o(748)](e), n
                    }), [])[l(473)](((n, {
                        type: e,
                        desc: t
                    }, r, o) => {
                        var a;
                        const i = l;
                        return e != (null == (a = o[r - 1]) ? void 0 : a[i(790)]) && (n[e] = i(439)), n[e] += i(713) + ["", i(601), i(779), i(825)][e] + i(769) + t + i(593), n
                    }), [])
                };
                let e = c[l(580)][l(693)][l(566)][l(473)](((n, {
                    id: e,
                    name: t,
                    describe: r
                }) => (n[e] = {
                    name: t,
                    desc: r
                }, n)), {});
                N = c[l(452)][l(565)][l(610)][l(760)]((n => {
                    var t;
                    return Object[l(481)](n[l(808)], e[null == (t = n[l(808)]) ? void 0 : t.Id] ?? {})
                })), c[l(792)][l(634)][l(761)][l(644)]((n => 0 == (null == n ? void 0 : n.id) && (null == n ? void 0 : n[l(551)]) > 0))[l(499)](c[l(840)][l(634)][l(761)])[l(628)]((n => j[l(575)](null == n ? void 0 : n[l(551)])));
            }
            if (Object[l(481)](w, {
                    cardDict: m$1,
                    cardIDsOrder: D,
                    markSpell: M$1,
                    spellDict: x$1,
                    generalDict: L,
                    skinSP: A$1,
                    skinDict: I,
                    skinMap: h,
                    bigSkin: p$1,
                    goodsID: U$1,
                    Ach: N,
                    taskIds: j,
                    NanHua: b,
                    secId: q,
                    rogejson: P$1,
                    gxjson: W
                }), typeof n === l(490) && n != l(806) || async function (e, r) {
                    const o = l;
                    S = e[o(455)][o(458)][o(473)](((n, {
                        cityID: e,
                        cityname: t,
                        citypic: r,
                        citycoordinate: l,
                        scenespell: a,
                        scenesDesc: i,
                        startshow: c
                    }) => {
                        const s = o;
                        let [u, z] = l[s(729)](",")[s(760)](Number);
                        return n[e] = {
                            x: u,
                            y: -z,
                            boss: c,
                            cp: null == v ? void 0 : v[e],
                            spell: a,
                            desc: i,
                            name: t ?? (null == r ? void 0 : r[s(674)](/^city_([0-9]+)_(.+)*?(\.png)?$/, ((n, e, t) => e + t)))
                        }, n
                    }), {}), e[o(455)][o(714)][o(628)]((({
                        plot: n,
                        plotname: e,
                        plotdesc: t,
                        school: r,
                        money: l,
                        level: a
                    }) => {
                        const i = o;
                        H$1[n] = {
                            name: e[i(683)]("·", ""),
                            desc: t[i(683)](" ", ""),
                            school: r,
                            money: l,
                            level: a,
                            type: 2
                        };
                    })), e[o(455)][o(600)][o(628)]((({
                        id: n,
                        spellid: e,
                        money: t,
                        level: r
                    }) => {
                        var l, a;
                        const i = o;
                        H$1[n] = {
                            name: null == (l = x$1[e]) ? void 0 : l[i(804)],
                            desc: null == (a = x$1[e]) ? void 0 : a[i(420)],
                            spellid: e,
                            money: t,
                            level: r,
                            type: 3
                        };
                    })), e[o(455)][o(837)][o(628)]((({
                        id: n,
                        cardid: e,
                        isequip: t,
                        money: r,
                        level: l
                    }) => {
                        const a = o;
                        var i = m$1[e];
                        H$1[n] = {
                            name: {
                                6: "火杀",
                                7: "雷杀",
                                11: "冰杀",
                                12: "闪闪"
                            } [i[a(520)]] ?? i[a(804)],
                            desc: i[a(420)],
                            color: i[a(425)],
                            number: i[a(707)],
                            money: r,
                            level: l,
                            type: 4 + t,
                            rType: 100 * (10 * i[a(790)] + i[a(520)]) + t
                        };
                    }));
                    var a, i = e[o(455)][o(672)][o(473)](((n, {
                            useSeason: e
                        }) => e)),
                        c = new Map,
                        u = e[o(455)][o(701)][o(473)](((n, {
                            ID: e,
                            text: t
                        }) => (n[e] = t, n)), []);
                    e[o(455)][o(485)] = (a = e[o(634)][o(554)][o(473)](((n, {
                        Short: e,
                        Long: t
                    }) => (n[o(630)](e, t), n)), new Map), e[o(455)][o(485)][o(760)]((n => s(n, a)))), e[o(455)][o(734)][o(628)]((n => {
                        const e = o;
                        n[e(754)] = u[n[e(754)]] ?? n[e(754)];
                    }));
                    let z = e[o(455)][o(518)][o(473)](((n, {
                        reward: e,
                        rewarddesc: t,
                        allreward: r,
                        abandonmoney: l
                    }) => {
                        var a, i;
                        const c = o;
                        return n[e] = (l ? l + c(663) : "") + (null == (i = null == (a = null == r ? void 0 : r[c(729)](";")) ? void 0 : a[c(762)]((n => null == n ? void 0 : n[c(729)](",")))) ? void 0 : i[c(760)]((n => ["随机", "普通", "稀有", "史诗", "传说"][n]))[c(553)]("/")) + t[c(674)](c(759), "自选"), n
                    }), e[o(455)][o(836)][o(473)](((n, {
                        reward: e,
                        rewardname: t
                    }) => (n[e] = t, n)), {}));
                    var v = e[o(455)][o(488)][o(473)](((n, {
                            seasonID: e,
                            chapter: t,
                            cityName: r,
                            bosslocation: l,
                            location: a
                        }) => {
                            const i = o;
                            return a[i(729)](";")[i(628)]((o => {
                                n[o] = e + "-" + t + r;
                            })), n[l] = e + "-" + t + r + i(787), n
                        }), {}),
                        d = e[o(455)][o(485)][o(473)](((n, e) => {
                            const t = o;
                            return n[e[t(500)]] || (n[e[t(500)]] = []), n[e[t(500)]][t(748)](e), e[t(582)] = e[t(582)][t(674)]("&", ""), n
                        }), {});
                    e[o(455)][o(485)][o(628)]((n => {
                        const e = o;
                        n[e(547)] || (n[e(547)] = 0), n[e(557)] && (n[e(581)] = (([n, t]) => {
                            const r = e;
                            return n[r(831)](r(775)) && (n -= 2e4), d[n][t - 1] ?? d[n][0]
                        })(n[e(557)][e(729)](";"))), n[e(510)] = {
                            general: n[e(582)],
                            hp: n.hp,
                            maxhp: n[e(697)],
                            card: n[e(536)],
                            draw: n[e(440)],
                            sha: 1 + n[e(427)],
                            armor: n[e(613)],
                            getarmor: n[e(812)],
                            ...n[e(581)] ? {
                                next: n[e(581)][e(582)]
                            } : {}
                        }, n[e(558)] = ["", e(525), e(577), e(726), e(826)][e(762)](((t, r) => {
                            var o;
                            return ((null == (o = n[e(594) + t]) ? void 0 : o[e(729)](";")) ?? [])[e(760)]((n => x$1[n]))[e(644)](Boolean)[e(760)]((n => ({
                                ...n,
                                level: r
                            })))
                        })), n[e(828)] = n[e(558)][e(760)]((({
                            name: n
                        }) => n))[e(553)](","), n[e(570)] = ["", e(525), e(577), e(726), e(826)][e(762)](((t, r) => {
                            var o;
                            return ((null == (o = n[e(716) + t]) ? void 0 : o[e(729)](";")) ?? [])[e(644)]((n => H$1[n]))[e(760)]((n => ({
                                id: n,
                                name: H$1[n][e(804)] + "#",
                                desc: H$1[n][e(420)],
                                level: r
                            })))
                        })), n[e(828)] += n[e(570)][e(760)]((({
                            name: n
                        }) => n))[e(553)](","), n[e(436)] = ["", e(525), e(577), e(726), e(826)][e(762)](((t, r) => {
                            var o, l;
                            return [...(null == (o = n[e(544) + t]) ? void 0 : o[e(729)](";")) ?? [], ...(null == (l = n[e(838) + t]) ? void 0 : l[e(729)](";")) ?? []][e(760)]((n => m$1[n]))[e(644)](Boolean)[e(760)]((({
                                id: n
                            }) => ({
                                id: n,
                                ncn: R[n][e(423)],
                                level: r
                            })))
                        })), n[e(502)] = n[e(436)][e(760)]((({
                            ncn: n
                        }) => n))[e(553)](",");
                    })), Y = e[o(455)][o(669)][o(473)](((n, e) => {
                        const t = o;

                        function r(n, t, o = false) {
                            const l = f$1;
                            n && (e[l(484)] += M(n[l(510)]), e[l(583)] += (n[l(765)] ? l(508) : "") + n[l(582)], n[l(581)] ? (e[l(583)] += ">", n[l(581)][l(712)] = t, n[l(581)][l(510)][l(494)] = n[l(582)], e[l(631)][l(748)](n[l(581)]), r(n[l(581)], t + 1, o)) : !o && (e[l(484)] += "+", e[l(583)] += " "));
                        }
                        if (e[t(631)] = [...d[e[t(800)]] ?? []], e[t(484)] = "", e[t(583)] = "", e[t(788)]) {
                            let n = e[t(631)][t(799)]((n => n[t(702)] == e[t(788)]));
                            n && (n[t(765)] = true);
                        }
                        return e[t(631)][t(628)](((n, e, o) => r(n, 1, e == o[t(832)] - 1))), e[t(477)] = e[t(764)] + t(789) + (e[t(450)] ? String(e[t(450)])[t(729)](";") : [])[t(499)](String(e[t(719)])[t(729)](";"))[t(760)]((n => z[n]))[t(553)]("\n"), e[t(728)] = u[e[t(728)]] ?? e[t(728)], e[t(804)] = u[e[t(804)]] ?? e[t(804)], n[e[t(474)]] = e, n
                    }), []);
                    for (let n in d) n in Y || (Y[n] = {
                        generals: d[n]
                    });
                    var y = e[o(455)][o(734)][o(473)](((n, e) => {
                        const t = o;
                        return n[e.ID] = e[t(754)] = u[e[t(754)]] ?? e[t(754)], n
                    }), []);
                    if (Z$1 = e[o(455)][o(749)][o(473)](((n, e) => {
                            const t = o;
                            var r, l;
                            return 7 == e[t(790)] ? (n[e[t(609)]] = Y[e[t(710)]], c[t(630)](e[t(710)], y[String(e[t(609)])[t(607)](0, 4)] ?? y[String(e[t(609)])[t(607)](0, 8)])) : 3 == e[t(790)] && "2" == e[t(710)] ? n[e[t(609)]] = {
                                get: "营地"
                            } : n[e[t(609)]] = {
                                lost: (l = D(e[t(720)], e[t(725)], e[t(609)]), l ? t(550) + l : l),
                                get: (r = D(e[t(677)], e[t(534)], e[t(609)]), r && e[t(738)] ? r[t(674)]("随机", "特定") : r)
                            }, n
                        }), []), Object[o(481)](w, {
                            Rfight: Y,
                            Rchoose: Z$1,
                            Rcity: S,
                            vskinMap: O,
                            Rplot: H$1,
                            text: u
                        }), !n || n == o(806)) {
                        var g = Object[o(755)](d)[o(473)](((n, [e, t]) => {
                            var r, l, a;
                            const i = o;
                            let s = e[i(832)] < 6 ? e[i(607)](-3) : "99" !== e[i(607)](0, 2) ? e[i(607)](-5, -2) + ">" : "*" + e[i(607)](-2),
                                u = e[i(832)] < 6 ? e[i(607)](0, -3) - 2 : "99" !== e[i(607)](0, 2) ? e[i(607)](0, -5) - 2 : e[i(607)](-3, -2) - e[i(607)](-4, -3) + 9;
                            n[s] || (n[s] = {
                                fight: (null == (r = Y[e]) ? void 0 : r[i(804)]) ?? (null == (l = Y[parseInt(s) + 4e3]) ? void 0 : l[i(804)]) ?? "",
                                generals: {}
                            }), c[i(437)](e) && (n[s][i(687)] = c[i(477)](e));
                            let z = n[s][i(631)];
                            return ((null == (a = Y[e]) ? void 0 : a[i(631)]) ?? t)[i(628)]((n => {
                                const e = i;
                                let t = (s[e(831)]("*") ? u : "") + (n[e(712)] || "") + "#" + n[e(702)];
                                for (;;) {
                                    if (z[t]) {
                                        if (z[t][e(589)][e(639)](u)) {
                                            t += "@";
                                            continue
                                        }
                                    } else z[t] = {
                                        general: (n[e(510)][e(494)] ? ">" : "") + n[e(582)] + (n[e(510)][e(581)] ? ">" : ""),
                                        info: M(n[e(510)]),
                                        levels: [],
                                        start: [],
                                        infos: {},
                                        spell: {},
                                        card: {},
                                        ad: {}
                                    };
                                    break
                                }
                                let r = z[t];
                                u % 10 < 6 && u < 20 && (r[e(589)][e(748)](u), n[e(765)] && r[e(765)][e(748)](u)), r[e(548)][u] = n[e(510)], n[e(522)] && (r.ad[u] = n[e(522)]), n[e(558)] && n[e(558)][e(628)]((n => {
                                    const t = e;
                                    r[t(828)][n[t(802)]] || (r[t(828)][n[t(802)]] = {
                                        ...n,
                                        levels: [],
                                        level: void 0
                                    }), u % 10 < 6 && u < 20 && r[t(828)][n[t(802)]][t(589)][t(748)](u + (n[t(740)] ?? 0));
                                })), n[e(436)] && n[e(436)][e(628)]((n => {
                                    const t = e;
                                    r[t(502)][n.id] || (r[t(502)][n.id] = {
                                        name: n[t(423)],
                                        levels: [],
                                        level: void 0
                                    }), u % 10 < 6 && u < 20 && r[t(502)][n.id][t(589)][t(748)](u + (n[t(740)] ?? 0));
                                }));
                            })), n
                        }), {});
                        Object[o(755)](g)[o(628)]((([n, e]) => {
                            const t = o;
                            g[n][t(741)] = n[t(831)]("*") && 1 == Math[t(705)](...Object[t(624)](e[t(631)])[t(762)]((n => n[t(589)]))) ? 1 : 0, e[t(631)] = Object[t(624)](e[t(631)])[t(760)]((e => {
                                const r = t;
                                return e[r(740)] = Math[r(705)](...e[r(589)][r(516)](((n, e) => e - n))) - g[n][r(741)], e[r(740)] = e[r(740)], e[r(828)] = Object[r(624)](e[r(828)])[r(760)]((t => {
                                    const o = r;
                                    let l = Math[o(705)](...t[o(589)][o(516)](((n, e) => e - n)));
                                    return t[o(589)][o(627)](((n, t, r) => n < 10 && !r[o(639)](n + 10) && (e[o(589)][o(639)](n + 10) || 2 == e[o(589)][o(832)] && e[o(589)][o(639)](10)))) && (t[o(740)] = [l]), t[o(589)][o(627)]((n => n < 10)) && (n => {
                                        const e = o;
                                        n[e(832)] && (t[e(740)] = [l, n[n[e(832)] - 1]]);
                                    })(t[o(589)][o(644)](((n, e, t) => n >= 10 && !t[o(639)](n - 10)))), t[o(740)] = (t[o(740)] ?? l) - g[n][o(741)], delete t[o(589)], delete t[o(802)], t
                                }))[r(516)](((n, e) => {
                                    const t = r;
                                    let o = n => n[1] >= 10 ? n[1] : n[0] ?? n;
                                    return o(n[t(740)]) % 10 - o(e[t(740)]) % 10 || o(n[t(740)]) - o(e[t(740)])
                                })), e[r(502)] = Object[r(624)](e[r(502)])[r(760)]((t => {
                                    const o = r;
                                    let l = Math[o(705)](...t[o(589)][o(516)](((n, e) => e - n)));
                                    return t[o(589)][o(627)](((n, t, r) => n < 10 && !r[o(639)](n + 10) && (e[o(589)][o(639)](n + 10) || 2 == e[o(589)][o(832)] && e[o(589)][o(639)](10)))) && (t[o(740)] = [l]), t[o(589)][o(627)]((n => n < 10)) && (n => {
                                        const e = o;
                                        n[e(832)] && (t[e(740)] = [l, n[n[e(832)] - 1]]);
                                    })(t[o(589)][o(644)](((n, e, t) => n >= 10 && !t[o(639)](n - 10)))), t[o(740)] = (t[o(740)] ?? l) - g[n][o(741)], delete t[o(589)], t
                                }))[r(516)](((n, e) => {
                                    const t = r;
                                    let o = n => n[1] >= 10 ? n[1] : n[0] ?? n;
                                    return o(n[t(740)]) % 10 - o(e[t(740)]) % 10 || o(n[t(740)]) - o(e[t(740)])
                                })), e[r(502)][r(832)] || delete e[r(502)], e[r(510)] = Object[r(624)](e[r(548)])[r(473)](((n, e) => {
                                    const t = r;
                                    return Object[t(491)](n)[t(628)]((t => {
                                        e[t] > n[t] && (n[t] = e[t]);
                                    })), n
                                }), {
                                    hp: 0,
                                    card: 0,
                                    draw: 0,
                                    sha: 0
                                }), Object[r(491)](e.ad)[r(832)] ? Object[r(491)](e.ad)[r(516)](((n, e) => e - n))[r(628)](((n, t, r) => {
                                    (n >= 10 && e.ad[n] == e.ad[n % 10] || e.ad[n] == e.ad[r[t + 1]]) && delete e.ad[n];
                                })) : delete e.ad, e[r(765)][r(832)] ? e[r(765)] = Math[r(705)](...e[r(765)]) : delete e[r(765)], delete e[r(548)], delete e[r(589)], e
                            }))[t(516)](((n, e) => n[t(740)] - e[t(740)]));
                        }));
                        var B = e[o(455)][o(819)][o(644)]((n => void 0 !== n[o(545)]))[o(473)](((n, e) => {
                                const t = o;
                                n[e[t(474)]] || (n[e[t(474)]] = {});
                                let r = String(e[t(545)])[t(607)](-3);
                                return n[e[t(474)]][r] || (n[e[t(474)]][r] = []), n[e[t(474)]][r][t(748)](e), n
                            }), {}),
                            C = Array[o(742)](Array[o(742)](e[o(455)][o(458)][o(473)](((n, {
                                cityID: e,
                                eventfight: t,
                                universalfight: r,
                                startshow: l
                            }) => {
                                var a, i;
                                const c = o;

                                function s(t) {
                                    const r = c;
                                    if (!t || 0 == t[r(832)]) return;
                                    let o = n[r(477)](t);
                                    o ? o[r(639)](v[e]) || o[r(748)](v[e]) : n[r(630)](t, [v[e]]);
                                }
                                return s(r), s(null == (i = null == (a = null == t ? void 0 : t[c(729)](";")) ? void 0 : a[c(760)]((n => n[c(607)](-3)))) ? void 0 : i[c(644)](((n, e, t) => !t[c(607)](e + 1)[c(639)](n)))), n
                            }), new Map)[o(755)]())[o(473)](((n, [e, t]) => {
                                const r = o;
                                let l = t[r(832)] > 1 && new Set(t[r(760)]((n => n[r(607)](0, 3))))[r(763)] < 2 ? t[r(760)](((n, e) => n[r(607)](e ? 3 : 0)))[r(553)]("/") : String(t);
                                return n[r(477)](l) || n[r(630)](l, new Set), (B[e] ? Object[r(491)](B[e]) : e)[r(628)]((e => n[r(477)](l)[r(575)](e))), n
                            }), new Map)[o(755)]())[o(473)](((n, [e, t]) => {
                                const r = o;
                                return n[e] = Array[r(742)](t, (n => g[n])), n
                            }), {});
                        P$1[o(504)] = JSON[o(431)](Object[o(755)](C)[o(644)]((n => n[0][o(639)](i + "-")))[o(473)](((n, [e, t]) => {
                            const r = o;
                            let l = e[r(607)](2);
                            return n[l] || (n[l] = []), t[r(628)]((e => {
                                const t = r;
                                e[t(484)] != t(541) && n[l][t(748)](e);
                            })), n
                        }), {})), P$1[o(777)] = JSON[o(431)](Object[o(624)](g)[o(644)]((n => [o(649), o(823), o(780)][o(639)](n[o(687)]) && n[o(741)] || [o(471), o(820), o(785), o(608), o(487), o(538)][o(639)](n[o(687)])))[o(473)](((n, {
                            event: e,
                            generals: t,
                            fight: r
                        }) => {
                            const l = o;
                            return n[e] || (n[e] = []), n[e][l(748)]({
                                ...r ? {
                                    fight: r
                                } : {},
                                generals: t
                            }), n
                        }), {})), P$1[o(483)] = JSON[o(431)](Object[o(624)](r[o(837)][o(760)]((({
                            CitationID: n,
                            money: e
                        }) => ({
                            ...H$1[n],
                            money: e
                        })))[o(473)](((n, {
                            level: e,
                            money: t,
                            name: r,
                            color: l,
                            number: a,
                            desc: i,
                            rType: c
                        }) => {
                            const s = o;
                            let u = e + r + a;
                            return n[u] || (n[u] = {
                                cl: [],
                                level: t,
                                name: r,
                                number: a,
                                type: c,
                                desc: i
                            }), n[u].cl[s(748)](l), n
                        }), {}))[o(516)](K(o(790), o(740)))), P$1[o(562)] = JSON[o(431)](r[o(600)][o(760)]((({
                            CitationID: n,
                            money: e
                        }) => ({
                            ...H$1[n],
                            money: e
                        })))[o(516)](K(o(619), o(740), o(802)))[o(760)]((({
                            level: n,
                            money: e,
                            name: t,
                            desc: r
                        }) => ({
                            level: e,
                            name: t,
                            desc: r
                        })))), P$1[o(782)] = JSON[o(431)](r[o(714)][o(760)]((({
                            CitationID: n,
                            money: e
                        }) => ({
                            ...H$1[n],
                            money: e
                        })))[o(644)]((n => {
                            var e;
                            return (n[o(804)] = null == (e = n[o(804)]) ? void 0 : e[o(674)]("·新", "")) && !n[o(804)][o(639)]("废弃") && !n[o(420)][o(639)]("备用") && !/(游戏|战斗)开始/ [o(560)](n[o(420)])
                        }))[o(516)](((n, e) => !n[o(619)] ^ !e[o(619)] ? n[o(619)] ? 1 : -1 : 0 != n[o(804)][o(607)](0, 2)[o(468)](e[o(804)][o(607)](0, 2)) ? n[o(804)][o(607)](0, 2)[o(468)](e[o(804)][o(607)](0, 2)) : K(o(619), o(740), o(563))(n, e)))[o(760)]((({
                            level: n,
                            money: e,
                            name: t,
                            desc: r
                        }) => ({
                            level: e,
                            name: t,
                            desc: r
                        })))[o(644)](((n, e, t) => JSON[o(431)](n) != JSON[o(431)](t[e + 1])))), P$1[o(497)] = JSON[o(431)](H$1[o(644)]((n => 3 == (null == n ? void 0 : n[o(790)])))[o(516)](K(o(740), o(619), o(802)))[o(760)]((({
                            level: n,
                            money: e,
                            name: t,
                            desc: r
                        }) => ({
                            name: t,
                            level: n,
                            desc: r
                        })))), P$1[o(495)] = JSON[o(431)](Object[o(624)](H$1[o(644)]((n => (null == n ? void 0 : n[o(790)]) >= 4))[o(473)](((n, {
                            level: e,
                            money: t,
                            name: r,
                            color: l,
                            number: a,
                            type: i,
                            desc: c,
                            rType: s
                        }) => {
                            const u = o;
                            let z = e + r + a,
                                v = [33, 34][u(639)](Math[u(479)](s / 100)) || r == u(783) && 4 == e;
                            return n[z] || (n[z] = {
                                cl: [],
                                level: v ? 0 : e,
                                money: t,
                                name: r,
                                number: a,
                                type: s + (v ? 6 : 0),
                                desc: c
                            }), n[z].cl[u(748)](l), n
                        }), {}))[o(516)](K(o(790), o(740), o(619)))[o(516)](((n, e) => n[o(740)] > 0 && 0 == e[o(740)] ? -1 : 0))), P$1[o(467)] = JSON[o(431)](e[o(455)][o(447)][o(516)](K(o(740), o(447)))[o(760)]((({
                            name: n,
                            desc: e,
                            level: t,
                            huchijineng: r
                        }) => {
                            var l, a, i;
                            const c = o;
                            let s = null == (l = null == e ? void 0 : e[c(645)](/.*获得【([^【】]*)】.*/)) ? void 0 : l[1];
                            return s && (e += (null == (a = x$1[r]) ? void 0 : a[c(420)]) ?? (null == (i = x$1[c(799)]((n => (null == n ? void 0 : n[c(804)]) == s))) ? void 0 : i[c(420)])), {
                                name: n,
                                level: t,
                                desc: e
                            }
                        }))), P$1[o(821)] = JSON[o(431)](e[o(455)][o(526)][o(760)]((({
                            school: n,
                            name: e,
                            effect: t,
                            needputong: r,
                            needxiyou: l,
                            needshishi: a,
                            needchuanshuo: i
                        }) => ({
                            school: n,
                            name: e,
                            need: [r, l, a, i],
                            desc: H$1[t][o(420)][o(683)](" ", "")
                        }))))[o(674)]("（", "(")[o(674)]("）", ")")[o(674)]("）", ")"), P$1[o(809)] = JSON[o(431)](H$1[o(644)]((n => 2 == (null == n ? void 0 : n[o(790)])))[o(644)]((n => {
                            const e = o;
                            return n[e(526)] = parseInt(n[e(526)] || 100), n[e(804)] = n[e(804)][e(674)]("·新", ""), !n[e(804)][e(639)]("废弃") && !n[e(420)][e(639)]("备用") && !n[e(804)][e(639)]("套装")
                        }))[o(516)](((n, e) => 0 != n[o(804)][o(607)](0, 2)[o(468)](e[o(804)][o(607)](0, 2)) ? n[o(804)][o(607)](0, 2)[o(468)](e[o(804)][o(607)](0, 2)) : K(o(740), o(619), o(563))(n, e)))[o(760)]((({
                            level: n,
                            money: e,
                            name: t,
                            desc: r,
                            school: o
                        }) => ({
                            ...o < 100 ? {
                                school: o
                            } : {},
                            name: t,
                            level: n,
                            desc: r
                        })))[o(644)](((n, e, t) => JSON[o(431)](n) != JSON[o(431)](t[e + 1])))), P$1[o(791)] = JSON[o(431)](e[o(455)][o(598)][o(644)]((n => n[o(464)] == i))[o(473)](((n, {
                            tfid: e,
                            ceng: t,
                            type: r,
                            cost: l,
                            plot: a,
                            preposition: i
                        }) => {
                            const c = o;
                            return n[e] = {
                                id: e,
                                x: r,
                                y: t,
                                cost: l,
                                pre: (null == i ? void 0 : i[c(729)](/,|;/)) ?? [],
                                ...H$1[a]
                            }, n
                        }), [{
                            id: 0,
                            x: 0,
                            y: 0,
                            cost: 0,
                            pre: [],
                            name: "",
                            level: 0,
                            type: 0
                        }])), t(P$1);
                    }

                    function D(n, t, r) {
                        var l, a, i;
                        const s = o;
                        return n ? n[s(639)](",") ? (([n, e]) => ["随机", "普通", "稀有", "史诗", "传说"][e] + {
                            2: "战法",
                            3: "技能",
                            4: "手牌",
                            5: "装备"
                        } [n])(n[s(729)](",")) : z[n] ? (t > 1 ? t : "") + z[n] : H$1[n] ? null == (l = H$1[n]) ? void 0 : l[s(804)] : d[n] ? (c[s(630)](n, null == (a = e[s(455)][s(734)][s(799)]((n => n.ID === parseInt(r / 10)))) ? void 0 : a[s(754)]), d[n][s(760)]((n => n[s(582)]))[s(553)]("\n")) : null == (i = e[s(455)][s(837)][s(799)]((e => e.id == n))) ? void 0 : i[s(804)] : ""
                    }

                    function M({
                        general: n,
                        hp: e,
                        maxhp: t,
                        armor: r,
                        getarmor: o,
                        card: l,
                        draw: a,
                        sha: i,
                        next: c,
                        pre: s
                    }) {
                        return (s ? ">" : "") + n + e + (t !== e ? "/" + t : "") + "血" + l + "牌摸" + a + "杀" + i + (c ? ">" : "")
                    }
                }(c[l(595)], c[l(444)]), typeof n !== l(490) || n == l(492)) {
                let e = function (n, t, r = l(656)) {
                    const o = l;
                    let a = r + n + o(539);
                    return fetch(a)[o(822)]((l => {
                        const i = o;
                        return l.ok ? {
                            name: t,
                            desc: i(733) + a + i(723) + a[i(674)](i(743), i(824))[i(674)](i(592), i(621)) + i(540)
                        } : r[i(639)](i(671)) ? void 0 : e(n, t, r[i(674)](i(592), i(621))[i(674)](i(743), i(824)))
                    }))
                };
                w[l(442)] = {
                    "结果为代码自动推演和预测，请以最终公告为准！更新时间": (new Date)[l(511)](),
                    "【充值消费】": []
                };
                let r = [l(772), l(696), l(642), l(815), l(443), l(514), l(686), l(446), l(641), "桃花", l(637), l(811), l(441), l(574), l(793), l(513), "朱砂", "灵宝", "功勋", l(434), l(805), l(507), l(599), l(773)],
                    i = c[l(732)][l(650)][l(561)][l(644)]((({
                        _attributes: n
                    }) => n[l(818)] >= String(a)))[l(760)]((({
                        _attributes: n,
                        Reward: e
                    }) => {
                        const t = l;
                        let r = ",";
                        return e[t(572)] && (e = e[t(572)], r = "/"), e[t(486)][t(832)] || (e[t(486)] = [e[t(486)]]), J[t(575)](n[t(489)][t(607)](0, 8)), {
                            id: n.id,
                            time: n[t(667)][t(607)](0, 8) + "—" + n[t(489)][t(607)](0, 8),
                            desc: "【" + n[t(804)] + "】" + n[t(420)],
                            reward: e[t(486)][t(760)]((({
                                _attributes: n
                            }) => C(n[t(542)] + "," + n[t(482)])))[t(553)](r)
                        }
                    }))[l(499)](c[l(690)][l(634)][l(561)][l(644)]((n => n[l(555)] >= String(a)))[l(760)]((({
                        Id: n,
                        Name: e,
                        Desc: t,
                        Rewards: r,
                        Count: o,
                        ClientTimeStart: a,
                        ExtraRewards: i,
                        ClientTimeEnd: c,
                        SelectRewards: s
                    }) => {
                        const u = l;
                        let z = s ? "/" : ",";
                        return J[u(575)](c[u(607)](0, 8)), {
                            id: n,
                            time: a[u(607)](0, 8) + "—" + c[u(607)](0, 8),
                            desc: "【" + e + "】" + t,
                            reward: [r + "," + o, ...(null == i ? void 0 : i[u(729)](";")) ?? []][u(760)](C)[u(553)](z)
                        }
                    }))),
                    u = c[l(451)][l(650)][l(590)][l(644)]((({
                        duration: n,
                        quest_id: e
                    }) => {
                        var t;
                        return e && (!n || (null == (t = null == n ? void 0 : n[l(645)](/[0-9]{8}T[0-9]{6}/g)) ? void 0 : t[1]) >= String(a))
                    }))[l(473)](((n, {
                        duration: e,
                        quest_id: t,
                        name: r
                    }) => {
                        var o, c, s;
                        const u = l;
                        let z = t[u(729)](";")[u(760)](Number)[u(644)](Boolean);
                        z[u(628)]((n => j[u(575)](n)));
                        let v = ((null == (c = e || (null == (o = i[u(799)]((({
                            id: n,
                            time: e
                        }) => z[u(639)](n) && e))) ? void 0 : o[u(604)])) ? void 0 : c[u(607)](0, 8)) + "·【" + (null == r ? void 0 : r[u(674)](/.*盲盒.*/, u(419))) + "】")[u(674)](/.*(充值|消费).*/, u(552));
                        return (null == (s = null == e ? void 0 : e[u(645)](/[0-9]{8}T[0-9]{6}/g)) ? void 0 : s[0]) < a || z[u(628)]((e => {
                            n[e] = v;
                        })), n
                    }), {});
                i[l(628)]((({
                    id: n,
                    ...e
                }) => {
                    const t = l;
                    let r = u[n] ?? String(a) + t(460);
                    w[t(442)][r] || (w[t(442)][r] = []), w[t(442)][r][t(748)](e);
                })), (n => {
                    var e;
                    const t = l;
                    n[t(832)] > 1 && (w[t(442)][(null == (e = n[0][t(604)]) ? void 0 : e[t(607)](0, 8)) + t(457)] = n);
                })(c[l(615)][l(634)][l(670)][l(644)]((({
                    timeRange: n
                }) => {
                    var e;
                    return (null == (e = null == n ? void 0 : n[l(645)](/[0-9]{8}T[0-9]{6}/g)) ? void 0 : e[0]) >= String(a)
                }))[l(760)]((({
                    Id: n,
                    counts: e,
                    exchangecount: t,
                    timeRange: r
                }) => ({
                    time: null == r ? void 0 : r[l(674)](/.*?([0-9]+)T[0-9]+,([0-9]+)T[0-9]+/, ((n, e, t) => e + "-" + t)),
                    desc: l(646) + t,
                    reward: C(n + "," + e)
                })))), c[l(533)][l(634)][l(528)][l(644)]((({
                    duration: n
                }) => {
                    var e;
                    return (null == (e = null == n ? void 0 : n[l(645)](/[0-9]{8}T[0-9]{6}/g)) ? void 0 : e[0]) >= String(a)
                }))[l(628)]((({
                    itemid: n,
                    goods: e,
                    rewardstype: t,
                    duration: r
                }) => {
                    const o = l;
                    let a = r[o(607)](0, 8) + "·【" + U$1(n)[o(804)] + o(698);
                    w[o(442)][a] = (w[o(442)][a] || [])[o(499)](e[o(516)](((n, e) => e[o(632)] - n[o(632)]))[o(760)]((({
                        exchangecount1: e,
                        Id2: t,
                        counts: l,
                        limitcounts: a,
                        itemid2: i,
                        exchangecount2: c
                    }) => {
                        const s = o;
                        let u = String(l)[s(729)](";");
                        return J[s(575)](r[s(607)](16, 24)), {
                            time: r[s(607)](0, 8) + "—" + r[s(607)](16, 24),
                            desc: s(797) + C((i ?? n) + "," + (c ?? e)) + (a ? ",限" + a + "次" : ""),
                            reward: String(t)[s(729)](";")[s(760)](((n, e) => C(n + "," + u[e])))[s(553)]("/")
                        }
                    })));
                })), c[l(756)][l(634)][l(528)][l(644)]((({
                    duration: n
                }) => {
                    var e;
                    return (null == (e = null == n ? void 0 : n[l(645)](/[0-9]{8}T[0-9]{6}/g)) ? void 0 : e[0]) >= String(a)
                }))[l(628)]((({
                    itemid: n,
                    rewards: e,
                    duration: t
                }) => w[l(442)][t[l(607)](0, 8) + l(416) + U$1(n)[l(804)] + "】"] = e[l(760)]((e => ({
                    time: t[l(607)](0, 8) + "—" + t[l(607)](16, 24),
                    desc: l(496) + C(n + "," + e[l(509)]),
                    reward: JSON[l(431)](e)[l(729)](/,"goodsid[0-9]+":" *([0-9,;]+) *"/)[l(644)]((n => (null == n ? void 0 : n[l(810)](/([0-9]+,[0-9]+);?([0-9]+,[0-9]+)?/)) >= 0))[l(760)]((n => n[l(674)](/([0-9]+,[0-9]+);?([0-9]+,[0-9]+)?/, ((n, e, t) => C(e) + (t ? "[" + C(t) + "]" : "")))))[l(553)](2 == e[l(655)] ? "/" : ",")
                })))));
                let v = [],
                    d = [],
                    g = [],
                    B = c[l(620)][l(448)][l(503)][0][l(568)][l(644)]((({
                        BeginTime: n
                    }) => n > String(a)))[l(762)]((({
                        DropId: n,
                        ExchangeId: e,
                        BeginTime: t,
                        EndTime: o
                    }) => {
                        const a = l;
                        let i = t[a(607)](0, 8) + "-" + o[a(607)](0, 8),
                            c = (y[a(477)](Math[a(596)](n)) ?? [])[a(760)](U$1)[a(644)]((({
                                name: n
                            }) => !r[a(639)](n))),
                            s = c[a(760)]((({
                                ID: n
                            }) => n)),
                            u = (y[a(477)](Math[a(596)](e)) ?? [])[a(760)](U$1)[a(644)]((({
                                ID: n,
                                name: e,
                                TypeID: t
                            }) => s[a(639)](n) || !(43 == t && (null == e ? void 0 : e[a(700)](a(597))) || 36 == t && (null == e ? void 0 : e[a(831)](a(571))) || 25 == t && ["赵襄", a(708), a(768)][a(639)](e) || [a(418), a(737), a(654), a(659), a(515), a(660), a(695)][a(639)](e))))[a(760)]((({
                                ID: n,
                                name: e
                            }) => {
                                const t = a;
                                let r = c[t(556)]((({
                                    name: n
                                }) => n == e));
                                return r >= 0 && s[t(476)](r, 1, n), n
                            }));
                        return Array[a(742)](new Set([...s, ...u]))[a(760)](U$1)[a(760)]((({
                            ID: n,
                            TypeID: e,
                            PicID: t,
                            name: r,
                            returngoods: o,
                            usedeffect: l,
                            info: c,
                            fragment: z
                        }) => {
                            var v;
                            const d = a;
                            let y = {
                                time: i,
                                name: r,
                                price: [...s[d(639)](n) ? ["四角"] : [], ...u[d(639)](n) && z ? [z + d(686)] : []][d(553)]("/"),
                                ...(B = [d(739), d(654), d(418)][d(639)](r) ? "" : o && "0" != o && o[d(729)](";")[d(644)]((n => (null == n ? void 0 : n[d(810)](/[0-9]+,[0-9]+/)) >= 0))[d(760)](C)[d(553)](";") || (null == l ? void 0 : l[d(810)](/^([0-9]+,[0-9]+;?)+$/)) >= 0 && l[d(674)](/([0-9]+),[0-9,]+/g, C) || l && T(l) || c, B && {
                                    desc: B
                                })
                            };
                            var B;
                            return (36 == e || (null == (v = y[d(804)]) ? void 0 : v[d(810)](/\*[^0-9]/)) >= 0) && g[d(748)]({
                                name: r,
                                res: t
                            }), y
                        }))
                    }));
                B[l(832)] && (w[l(442)][l(817)] = B, B = B[l(760)]((({
                    name: n
                }) => n)));
                let m = c[l(727)][l(634)][l(691)][l(704)][l(644)]((n => {
                    var e, t;
                    return (null == (t = null == (e = n.x) ? void 0 : e[l(645)](/[0-9]{8}T[0-9]{6}/g)) ? void 0 : t[0]) >= String(a) && 834901 != n.a
                }))[l(760)]((({
                    a: n,
                    ah: e,
                    l: t
                }) => {
                    const r = l;
                    if (t && t[r(674)](/([0-9]+),[0-9,]+/g, ((n, t) => {
                            const o = r;
                            return e || [100301, 200101, 1325201][o(639)](parseInt(t)) || v[o(748)](parseInt(t)), n
                        })), !e) return n;
                    d[r(748)](n);
                }))[l(644)](Boolean)[l(499)](v)[l(516)](((n, e) => n - e))[l(644)](((n, e, t) => 0 == e || n != t[e - 1]));
                Array[l(742)](new Set(c[l(694)][l(634)][l(635)][l(568)][l(644)]((n => n[l(835)] > String(a)))[l(760)]((n => n[l(735)]))[l(499)](m[l(499)](m[l(644)](((n, e, t) => {
                    var r, o;
                    return n - t[e - 1] > 1e3 && t[e + 1] - n < 1e3 && "*" != (null == (o = null == (r = U$1(n)) ? void 0 : r[l(804)]) ? void 0 : o[4])
                }))[l(760)]((n => c[l(727)][l(634)][l(691)][l(704)][l(644)]((e => e.a - n > 0 && (e.a / 1e4 | 0) == (n / 1e4 | 0)))[l(760)]((n => n.a))))[l(473)](((n, e) => [...n, ...e]), []))[l(516)](((n, e) => n - e)))))[l(760)]((n => U$1(n)))[l(644)]((n => n && !r[l(499)](B)[l(639)](n[l(804)])))[l(628)]((({
                    ID: n,
                    TypeID: e,
                    PicID: t,
                    name: r,
                    maxBuyCount: o,
                    yuanbao: a,
                    returngoods: i,
                    SellTime: c,
                    usedeffect: s,
                    info: u,
                    yuanbaoonly: z,
                    fragment: v,
                    exchange: d,
                    shopvisual: y
                }) => {
                    var B;
                    const f = l;
                    let m = {
                        ...typeof c == f(490) ? {
                            time: null == c ? void 0 : c[f(674)](/.*?([0-9]+)T[0-9]+;([0-9]+)T[0-9]+/, ((n, e, t) => e + "-" + t))
                        } : {},
                        name: r,
                        ...(null == d ? void 0 : d[f(639)](",")) ? {
                            price: C(d)
                        } : y && 999999 != a && {
                            price: z ? a + f(475) : a + "元宝",
                            ...o && ((n, e) => parseInt(n) > 0 ? {
                                max: e + "个/" + (1 == n ? "" : n) + "天"
                            } : {})(...o[f(729)](";"))
                        },
                        ...(D = [f(739), f(654), f(418)][f(639)](r) ? "" : i && "0" != i && i[f(729)](";")[f(644)]((n => (null == n ? void 0 : n[f(810)](/[0-9]+,[0-9]+/)) >= 0))[f(760)](C)[f(553)](";") || (null == s ? void 0 : s[f(810)](/^([0-9]+,[0-9]+;?)+$/)) >= 0 && s[f(674)](/([0-9]+),[0-9,]+/g, C) || s && T(s) || u, D && {
                            desc: D
                        })
                    };
                    var D;
                    c && J[f(575)](c[f(674)](/.*?([0-9]+)T[0-9]+;([0-9]+)T[0-9]+/, ((n, e, t) => t))), (36 == e || (null == (B = m[f(804)]) ? void 0 : B[f(810)](/\*[^0-9]/)) >= 0) && g[f(748)]({
                        name: r,
                        res: t
                    }), String(m[f(465)])[f(639)]("夺宝") || String(m[f(465)])[f(639)]("灵宝") ? (w[f(442)][f(817)] || (w[f(442)][f(817)] = []), w[f(442)][f(817)][f(748)](m)) : m[f(715)] ? (w[f(442)][f(665)] || (w[f(442)][f(665)] = []), w[f(442)][f(665)][f(748)](m)) : (w[f(442)][f(611)] || (w[f(442)][f(611)] = []), w[f(442)][f(611)][f(748)](m));
                })), null == (o = w[l(442)][l(611)]) || o[l(516)](((n, e) => !n[l(465)] == !e[l(465)] ? 0 : n[l(465)] ? -1 : 1)), d[l(832)] && (w[l(442)][l(682)] = Object[l(755)](d[l(760)]((n => U$1(n)))[l(644)]((({
                    returngoods: n
                }) => {
                    var e;
                    return 25 == (null == (e = U$1(n[l(729)](";")[1][l(729)](",")[0])) ? void 0 : e[l(629)])
                }))[l(473)](((n, {
                    name: e,
                    lotteryPrice: t
                }) => {
                    const r = l;
                    return n[t] || (n[t] = []), n[t][r(748)](e[r(674)]("武将", "")[r(674)](/\(.*?\)/g, "")), n
                }), {}))[l(516)](((n, e) => e[0] - n[0]))[l(760)]((([n, e]) => ({
                    price: n + l(578),
                    reward: e[l(553)]("/")
                })))), (n => {
                    const e = l;
                    n[e(832)] && (w[e(442)][e(680)] = n);
                })(c[l(527)][l(634)][l(493)][l(473)](((n, {
                    Id: e,
                    ItemId: t,
                    MaxCount: o
                }) => (n[e] || (n[e] = []), (t => {
                    const o = f$1;
                    r[o(499)]([o(737), o(654), o(751)])[o(627)]((n => t[o(831)](n))) || n[e][o(748)](t);
                })(C(t + "," + o)), n)), [])[l(473)](((n, e) => {
                    const t = l;
                    if (e) {
                        let r = n[t(799)]((({
                            reward: n
                        }) => e[t(639)](n)));
                        r && (r[t(719)] = e[t(553)](","));
                    }
                    return n
                }), c[l(527)][l(634)][l(528)][l(607)]()[l(753)]()[l(473)](((n, {
                    Id: e,
                    Name: t,
                    bigrewards: r,
                    Duration2: o
                }) => {
                    const i = l;
                    let c = parseInt(o[i(607)](0, 8)) + 1;
                    if (c < parseInt(a)) return n;
                    let s = n[i(799)]((({
                        name: n
                    }) => n == t));
                    return s ? s[i(604)] += ";" + c : n[i(748)]({
                        name: t,
                        reward: L[r],
                        time: String(c)
                    }), n
                }), [])[l(753)]()));
                const D = (k = {}, function (n) {
                    const e = f$1;
                    return k[n] ? k[n] : k[n] = c[e(834)][e(634)][e(839)][e(644)]((({
                        PlanId2: e
                    }) => e == n))[e(473)](((n, {
                        MaxFloors: e
                    }) => n + parseInt(e)), 0)
                });
                (n => {
                    const e = l;
                    n[e(832)] && (w[e(442)]["绘卷"] = n);
                })(c[l(834)][l(634)][l(528)][l(473)](((n, {
                    GrandPrize: e,
                    PlanID2: t,
                    duration2: r
                }) => {
                    var o;
                    const i = l;
                    let c = parseInt(r[i(607)](0, 8)) + 1;
                    return c < parseInt(a) || n[i(748)]({
                        reward: null == (o = U$1(e)) ? void 0 : o[i(804)],
                        "预估价格": D(t) / 2 | 0,
                        time: c + "-" + r[i(607)](16, 24)
                    }), n
                }), [])), w[l(442)][l(731)] = g[l(760)]((({
                    name: n
                }) => ({
                    name: n
                }))), Object[l(755)](w[l(442)])[l(628)]((([n, e]) => w[l(442)][n] = Array[l(587)](e) ? e[l(760)]((n => s(n, z))) : s(e, z))), n && n != l(492) || t(Promise[l(778)](g[l(760)]((({
                    name: n,
                    res: t
                }) => e(t, n))))[l(822)]((n => w[l(442)][l(731)] = n[l(644)](Boolean)))[l(822)]((() => {
                    const n = l;
                    return Object[n(755)](w[n(442)])[n(628)]((([e, t]) => w[n(442)][e] = Array[n(587)](t) ? t[n(760)]((n => s(n, z))) : s(t, z))), w[n(442)]
                })));
            }
            var k;
            t(c),
                function (n) {
                    const e = g$1;
                    let t = (localStorage[e(445)](e(794)) || "")[e(729)](";")[e(644)](Boolean);
                    n[e(628)]((n => {
                        const r = e;
                        !t[r(639)](n) && t[r(748)](n);
                    })), localStorage[e(661)](e(794), t[e(553)](";"));
                }(J), console[l(801)](l(658));
        }))))))
    }

    function K(...n) {
        const e = g$1;
        return new Function("_a", "_b", e(531) + n[e(760)]((n => e(685) + n + e(422) + n + "))"))[e(553)]("||"))
    }

    function T(n, e) {
        const t = g$1,
            r = n[t(830)](/\[(\d+),(\d+)\]/g),
            o = Array[t(742)](r)[t(760)]((n => ({
                GoodsBaseID: parseInt(n[1]),
                ChangeCount: parseInt(n[2])
            })));
        if (o[t(832)] !== e[t(832)]) return false;
        const l = new Map(e[t(760)]((n => [n[t(588)], n[t(766)]])));
        return o[t(543)]((n => l[t(477)](n[t(588)]) === n[t(766)])) && e[t(543)]((n => o[t(627)]((e => e[t(588)] === n[t(588)] && e[t(766)] === n[t(766)]))))
    }

    function V() {
        const n = g$1,
            e = (new Date)[z(409)]()[z(416)](0, 10)[z(437)](/-/g, "");
        (localStorage[n(445)](n(794)) || "")[n(729)](";")[n(644)](Boolean)[n(628)]((t => {
            const r = n;
            (t === e || t === (n => {
                const e = v,
                    t = new Date(n[e(416)](0, 4) + "-" + n[e(416)](4, 6) + "-" + n[e(416)](6, 8));
                return t[e(423)](t[e(410)]() + 1), t[e(409)]()[e(416)](0, 10)[e(437)](/-/g, "")
            })(e)) && i(r(466), r(692), 1e4, r(519), (() => function (n) {
                const e = g$1,
                    t = (localStorage[e(445)](e(794)) || "")[e(729)](";")[e(644)](Boolean);
                localStorage[e(661)](e(794), t[e(644)]((e => e !== n))[e(553)](";"));
            }(t)));
        }));
    }
    const k = _;
    ! function () {
        const n = _,
            e = F();
        for (;;) try {
            if (693037 === -parseInt(n(221)) / 1 * (parseInt(n(198)) / 2) + -parseInt(n(210)) / 3 + parseInt(n(227)) / 4 * (-parseInt(n(195)) / 5) + parseInt(n(228)) / 6 * (parseInt(n(175)) / 7) + -parseInt(n(239)) / 8 * (parseInt(n(231)) / 9) + parseInt(n(213)) / 10 + parseInt(n(208)) / 11 * (parseInt(n(237)) / 12)) break;
            e.push(e.shift());
        } catch (t) {
            e.push(e.shift());
        }
    }();
    const X = function () {
        let n = true;
        return function (e, t) {
            const r = n ? function () {
                if (t) {
                    const n = t[_(184)](e, arguments);
                    return t = null, n
                }
            } : function () {};
            return n = false, r
        }
    }();

    function F() {
        const n = ["mtjzChbXsMi", "x19WCM90B19F", "nde3otq0uermDw1l", "5PA55AsP5OIF", "ChjVDg90ExbL", "6zw/5A6jlti", "D2fYBG", "zxHJzxb0Aw9U", "5zU96Aoo6kkn", "y2fYzhm", "mJfXvMXpvMi", "57UD5BcykZe", "BgvUz3rO", "5l+U572x5OIF", "CMv0DxjUicHMDw5JDgLVBIGPia", "AxrLCMf0B3i", "6AY86B6z5yIa", "55M+6iQX6kkn", "5lQu6kgm5OMh", "yxbWBhK", "6z2s6B6z5yIa", "y29UC29Szq", "5zUB5lMy6iIg", "6AQf6AQDkZe", "54IQ6BUekZe", "55Qe5y2IkZe", "5AsN5A6Blte", "5AsQ5ywS56YM", "5lIi5ywR55+B", "5Awh6zEO6zI1", "nJvcBNzgz0y", "6zob6jk66iIg", "5lIj5Bcw5yIa", "mtiWotG2zvDhB2Xx", "6BI+5yEK5yMr", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "6zUm6zUe5yMr", "6zwu6zob5OIF", "zxjYB3i", "55YF6B6z5yMr", "Bg9N", "5yIr5AsP5PAN", "Dg9tDhjPBMC", "mZuYodG0nZnWEvDJyM0", "6jMA5AAe5yAv", "mZa1mtGXnKHAr01oCW", "57sR6AQnlte", "6lwK6z2s6zsl", "nZq0otyXmgXPt0zNDa", "55M96zo254UU", "56wE6BM/lte", "DhjHy2u", "57sR6yEr5yAG", "5PYX6zUa5OMh", "6AoE6l2U6iIg", "5lUb546l55U+", "mJjhs1fLr3y", "6yEr5lMm5BYt", "yMLUza", "6lwK54ko55c0", "5PEG5y+m5OIF", "y2fYzerPy3q", "mZC2mJy4EwjQEKTs", "otm1ntaYBfzuzxrn", "Aw5MBW", "5lMm6zob6zo+", "mJDbzgLTDNm", "546Y54+r5BIM", "DgfIBgu", "57UD5B2XkZe", "y29UC3rYDwn0B3i", "6lwK5ywulte"];
        return (F = function () {
            return n
        })()
    }
    X(globalThis, (function () {
        const n = _,
            e = function () {
                const n = _;
                let e;
                try {
                    e = Function(n(179) + n(200) + ");")();
                } catch (t) {
                    e = window;
                }
                return e
            }(),
            t = e[n(186)] = e[n(186)] || {},
            r = [n(205), n(171), n(229), n(203), n(172), n(233), n(216)];
        for (let o = 0; o < r[n(177)]; o++) {
            const e = X[n(235)][n(169)][n(223)](X),
                l = r[o],
                a = t[l] || e;
            e[n(238)] = X[n(223)](X), e[n(207)] = a[n(207)][n(223)](a), t[l] = e;
        }
    }))();
    const E = {
            "乐不思蜀": "乐",
            "兵粮寸断": "兵",
            "八卦阵": "八卦",
            "爪黄飞电": k(189),
            "的卢": k(190),
            "绝影": k(234),
            "骅骝": k(188),
            "赤兔": k(236),
            "大宛": k(191),
            "紫骍": k(211),
            "紫騂": k(211),
            "诸葛连弩": "连弩",
            "木牛流马": "木马",
            "顺手牵羊": "顺手",
            "万箭齐发": "万箭",
            "五谷丰登": "五谷",
            "无中生有": "无中",
            "过河拆桥": "过拆",
            "桃园结义": "桃园",
            "无懈可击": "无懈",
            "南蛮入侵": "南蛮",
            "借刀杀人": "借刀",
            "铁索连环": "铁索",
            "随机应变": "随机",
            "远交近攻": "远交",
            "以逸待劳": "逸劳",
            "知己知彼": "知己",
            "逐近弃远": "逐近",
            "洞烛先机": "洞烛",
            "出其不意": "出其",
            "水淹七军": "水淹",
            "无懈可击·国": "国无",
            "挟天子以令诸侯": "挟令",
            "方天画戟": k(168),
            "雌雄双股剑": k(201),
            "青龙偃月刀": k(185),
            "丈八蛇矛": k(193),
            "朱雀羽扇": k(218),
            "白银狮子": k(214),
            "三尖两刃刀": k(197),
            "乌铁锁链": k(230),
            "五行鹤翎扇": k(183),
            "太公阴符": k(192),
            "无双方天戟": k(225),
            "束发紫金冠": k(217),
            "玲珑狮蛮带": k(232),
            "红棉百花袍": k(182),
            "红锦百花袍": k(182),
            "四乘粮舆": k(187),
            "铁蒺玄舆": k(196),
            "飞轮战舆": k(219),
            "鬼龙斩月刀": k(181),
            "国风玉袍": k(173),
            "赤炎镇魂琴": k(224),
            "奇门八阵": k(194),
            "绝尘金戈": k(176),
            "修罗炼狱戟": k(178),
            "虚妄之冕": k(209),
            "赤血青峰": k(212),
            "赤血青锋": k(212),
            "鸾凤和鸣剑": k(199),
            "七彩神鹿": k(215),
            "金乌落日弓": k(222),
            "刑天破军斧": k(206),
            "长安大舰": k(170),
            "禅让诏书": "诏书",
            "镔铁双戟": k(202),
            "继往开来": "继往",
            "攻守兼备": "攻守",
            "进退自如": "进退",
            "洪荒之力": "洪荒",
            "同舟共济": "同舟",
            "力争上游": "力争",
            "逆水行舟": "逆水",
            "撒豆成兵": "撒豆",
            "移花接木": "移花",
            "联军盛宴": "联军",
            "调虎离山": "调虎",
            "火烧连营": "火烧",
            "勠力同心": "勠力",
            "调剂盐梅": "调剂",
            "声东击西": "声东",
            "增兵减灶": "增兵",
            "草木皆兵": "草木",
            "唯我独尊": "独尊",
            "弃甲曳兵": "弃甲",
            "金蝉脱壳": "金蝉",
            "故步自封": "自封",
            "金鼓笙旗": "金鼓",
            "党同伐异": "伐异",
            "燎原之火": "燎原",
            "八卦阵(复制)": "八卦",
            "仁王盾(复制)": k(220),
            "藤甲(复制)": "藤甲",
            "白银狮子(复制)": k(214),
            "商鞅变法": "变法",
            "真龙长剑": k(204),
            "传国玉玺": "玉玺",
            "厚积形": "厚积",
            "桎梏形": "桎梏",
            "盈冲形": "盈冲",
            "背水形": "背水",
            "整肃形": "整肃",
            "寸兵形": "寸兵",
            "雄黄酒": "酒",
            "生死与共": "生死",
            "红运当头": "红运",
            "有难同当": "同当",
            "落井下石": "落井",
            "雷公助我": "雷公",
            "两肋插刀": "两肋",
            "兄弟齐心": "齐心",
            "无天无界": "无界",
            "你死我活": "死活",
            "浑天仪": "浑仪"
        },
        R = new Proxy({
            cards: {
                0: {
                    name: "",
                    type: 0,
                    color: 0,
                    number: 0,
                    ncn: "?",
                    cn: "0",
                    c: "",
                    n: 0
                }
            },
            [Symbol[k(180)]]: function* () {
                const n = k;
                for (let e in this[n(174)]) yield this[n(174)][e];
            }
        }, {
            get: function (n, e) {
                var t;
                const r = k;
                if (e in n) return n[e];
                if (!n[r(174)][e])
                    if (null == (t = w[r(226)]) ? void 0 : t[e]) {
                        let {
                            name: t,
                            type: o,
                            color: l,
                            number: a,
                            subType: i
                        } = w[r(226)][e], c = Q(l), s = $(a);
                        n[r(174)][e] = {
                            name: {
                                6: "火杀",
                                7: "雷杀",
                                11: "冰杀",
                                12: "闪闪"
                            } [i] || E[t] || t,
                            type: parseInt(o),
                            color: parseInt(l),
                            number: parseInt(a),
                            ncn: t + c + s,
                            cn: c + s,
                            c: c,
                            n: s
                        };
                    } else n[r(174)][e] = n[r(174)][0];
                return n[r(174)][e]
            }
        });

    function Q(n) {
        return ["", "♥", "♦", "♠", "♣"][n] ?? ""
    }

    function _(n, e) {
        const t = F();
        return _ = function (e, r) {
            let o = t[e -= 168];
            if (void 0 === _.UitHHE) {
                _.vBtBbd = function (n) {
                    let e = "",
                        t = "";
                    for (let r, o, l = 0, a = 0; o = n.charAt(a++); ~o && (r = l % 4 ? 64 * r + o : o, l++ % 4) ? e += String.fromCharCode(255 & r >> (-2 * l & 6)) : 0) o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                    for (let r = 0, o = e.length; r < o; r++) t += "%" + ("00" + e.charCodeAt(r).toString(16)).slice(-2);
                    return decodeURIComponent(t)
                }, n = arguments, _.UitHHE = true;
            }
            const l = e + t[0],
                a = n[l];
            return a ? o = a : (o = _.vBtBbd(o), n[l] = o), o
        }, _(n, e)
    }

    function $(n, e = true) {
        return e && 1 == parseInt(n) ? "A" : {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "J",
            12: "Q",
            13: "K"
        } [n] ?? ""
    }

    var g, n = Object.freeze,
        y = Object.defineProperty;
    var M = p;
    ! function () {
        for (var g = p, n = t();;) try {
            if (341696 === -parseInt(g(363)) / 1 * (parseInt(g(354)) / 2) + -parseInt(g(361)) / 3 * (-parseInt(g(335)) / 4) + -parseInt(g(343)) / 5 * (-parseInt(g(360)) / 6) + parseInt(g(346)) / 7 * (-parseInt(g(353)) / 8) + -parseInt(g(344)) / 9 * (-parseInt(g(350)) / 10) + -parseInt(g(362)) / 11 + -parseInt(g(348)) / 12 * (parseInt(g(355)) / 13)) break;
            n.push(n.shift());
        } catch (y) {
            n.push(n.shift());
        }
    }();
    var x, A = (x = true, function (g, n) {
        var y = x ? function () {
            if (n) {
                var y = n[p(345)](g, arguments);
                return n = null, y
            }
        } : function () {};
        return x = false, y
    });
    A(globalThis, (function () {
        for (var g = p, n = function () {
                var g, n = p;
                try {
                    g = Function(n(357) + n(352) + ");")();
                } catch (y) {
                    g = window;
                }
                return g
            }(), y = n[g(340)] = n[g(340)] || {}, i = [g(339), g(358), g(347), g(349), g(341), g(337), g(364)], B = 0; B < i[g(342)]; B++) {
            var L = A[g(356)][g(336)][g(351)](A),
                w = i[B],
                z = y[w] || L;
            L[g(338)] = A[g(351)](A), L[g(359)] = z[g(359)][g(351)](z), y[w] = L;
        }
    }))();
    var o = M(365);

    function t() {
        var g = ["yMLUza", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "otmZmZG0vwLTCwzN", "mtCXnZC4thnfzhnV", "mZLdy0DcrNK", "y29UC3rYDwn0B3i", "CMv0DxjUicHMDw5JDgLVBIGPia", "D2fYBG", "Dg9tDhjPBMC", "mJa0ode2B1f4BeHg", "otq4nJC4tw5XBxzH", "mti2mdq2ohjNDujzvW", "mxjVsgroyG", "DhjHy2u", "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", "nenmAvr5uW", "ChjVDg90ExbL", "DgfIBgu", "x19WCM90B19F", "Bg9N", "y29UC29Szq", "zxHJzxb0Aw9U", "BgvUz3rO", "mJbPBuL1qNy", "ovf1CKrouG", "yxbWBhK", "mtrPAvHSsKe", "Aw5MBW", "ndy3mtzAD1DkvM8", "zxjYB3i", "mZm0ndi4mefHug1myW"];
        return (t = function () {
            return g
        })()
    }

    function p(g, n) {
        var y = t();
        return p = function (n, i) {
            var B = y[n -= 335];
            if (void 0 === p.Szovxf) {
                p.csmOBG = function (g) {
                    for (var n, y, i = "", B = "", L = 0, w = 0; y = g.charAt(w++); ~y && (n = L % 4 ? 64 * n + y : y, L++ % 4) ? i += String.fromCharCode(255 & n >> (-2 * L & 6)) : 0) y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(y);
                    for (var z = 0, r = i.length; z < r; z++) B += "%" + ("00" + i.charCodeAt(z).toString(16)).slice(-2);
                    return decodeURIComponent(B)
                }, g = arguments, p.Szovxf = true;
            }
            var L = n + y[0],
                w = g[L];
            return w ? B = w : (B = p.csmOBG(B), g[L] = B), B
        }, p(g, n)
    }
    var P = e;

    function U() {
        var g = ["y29UC3rYDwn0B3i", "mte4ndm5nKnAC0XjDa", "mtKZnZyWD05OreDW", "yxbWBhK", "zxHJzxb0Aw9U", "BgvUz3rO", "mJq1mhbAvuzSyq", "x19WCM90B19F", "y29UC29Szq", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "mtvoDK1iuwC", "DgfIBgu", "mZiWuLnkswHd", "Bg9N", "mZyXmJbTzxzsu0G", "Dg9tDhjPBMC", "mty1otG3yvrvC0X2", "yMLUza", "CMf3", "DhjHy2u", "nJGYA0DKu0fi", "Aw5MBW", "ChjVDg90ExbL", "D2fYBG", "nJu4mtCYohn0sMXOBq", "zxjYB3i", "odGYsePmDu5z", "mJi4nLvguffyDW", "ndeZmdG4CePgyxbR", "CMv0DxjUicHMDw5JDgLVBIGPia"];
        return (U = function () {
            return g
        })()
    }

    function e(g, n) {
        var y = U();
        return e = function (n, i) {
            var B = y[n -= 485];
            if (void 0 === e.TnHzlt) {
                e.Wstyfa = function (g) {
                    for (var n, y, i = "", B = "", L = 0, w = 0; y = g.charAt(w++); ~y && (n = L % 4 ? 64 * n + y : y, L++ % 4) ? i += String.fromCharCode(255 & n >> (-2 * L & 6)) : 0) y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(y);
                    for (var z = 0, r = i.length; z < r; z++) B += "%" + ("00" + i.charCodeAt(z).toString(16)).slice(-2);
                    return decodeURIComponent(B)
                }, g = arguments, e.TnHzlt = true;
            }
            var L = n + y[0],
                w = g[L];
            return w ? B = w : (B = e.Wstyfa(B), g[L] = B), B
        }, e(g, n)
    }! function () {
        for (var g = e, n = U();;) try {
            if (484759 === -parseInt(g(495)) / 1 + -parseInt(g(499)) / 2 * (-parseInt(g(490)) / 3) + -parseInt(g(494)) / 4 * (-parseInt(g(503)) / 5) + -parseInt(g(507)) / 6 * (-parseInt(g(489)) / 7) + parseInt(g(487)) / 8 + parseInt(g(509)) / 9 * (-parseInt(g(505)) / 10) + parseInt(g(513)) / 11 * (-parseInt(g(491)) / 12)) break;
            n.push(n.shift());
        } catch (y) {
            n.push(n.shift());
        }
    }();
    var H, d = (H = true, function (g, n) {
        var y = H ? function () {
            if (n) {
                var y = n[e(496)](g, arguments);
                return n = null, y
            }
        } : function () {};
        return H = false, y
    });
    d(globalThis, (function () {
        var g, n = e;
        try {
            g = Function(n(492) + n(502) + ");")();
        } catch (r) {
            g = window;
        }
        for (var y = g[n(501)] = g[n(501)] || {}, i = [n(506), n(486), n(514), n(488), n(497), n(504), n(512)], B = 0; B < i[n(498)]; B++) {
            var L = d[n(493)][n(485)][n(510)](d),
                w = i[B],
                z = y[w] || L;
            L[n(500)] = d[n(510)](d), L[n(508)] = z[n(508)][n(510)](z), y[w] = L;
        }
    }))();
    const f = l;
    ! function () {
        const g = l,
            n = c();
        for (;;) try {
            if (415406 === parseInt(g(533)) / 1 + -parseInt(g(473)) / 2 + -parseInt(g(458)) / 3 + parseInt(g(468)) / 4 * (parseInt(g(465)) / 5) + parseInt(g(487)) / 6 + parseInt(g(469)) / 7 * (parseInt(g(460)) / 8) + parseInt(g(478)) / 9 * (-parseInt(g(548)) / 10)) break;
            n.push(n.shift());
        } catch (y) {
            n.push(n.shift());
        }
    }();
    const Z = function () {
        let g = true;
        return function (n, y) {
            const i = g ? function () {
                if (y) {
                    const g = y[l(552)](n, arguments);
                    return y = null, g
                }
            } : function () {};
            return g = false, i
        }
    }();

    function l(g, n) {
        const y = c();
        return l = function (n, i) {
            let B = y[n -= 427];
            if (void 0 === l.GySsQc) {
                l.lXTvkr = function (g) {
                    let n = "",
                        y = "";
                    for (let i, B, L = 0, w = 0; B = g.charAt(w++); ~B && (i = L % 4 ? 64 * i + B : B, L++ % 4) ? n += String.fromCharCode(255 & i >> (-2 * L & 6)) : 0) B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(B);
                    for (let i = 0, B = n.length; i < B; i++) y += "%" + ("00" + n.charCodeAt(i).toString(16)).slice(-2);
                    return decodeURIComponent(y)
                }, g = arguments, l.GySsQc = true;
            }
            const L = n + y[0],
                w = g[L];
            return w ? B = w : (B = l.lXTvkr(B), g[L] = B), B
        }, l(g, n)
    }

    function c() {
        const g = ["zwXLy3rYB24", "Dg9tDhjPBMC", "D2LUzg93lwnVBNrLBNq", "DhjHy2u", "6i635y+wiG", "D2LKDgG9", "yxzHAwXizwLNAhq", "AwzYyw1L", "lhrVCd0WlgXLzNq9mcXZDgf0Dxm9BM8SDg9VBgjHCJ1UBYXTzw51yMfYpw5VlgXVy2f0Aw9Upw5V", "BgvUz3rO", "Dw5KzwzPBMvK", "CMvTB3zLsxrLBq", "D2LUzg93", "CMv0DxjUicHMDw5JDgLVBIGPia", "ica8BgK+cG", "pc90zd48Dgq+", "zgL2", "zxzLCNK", "pc91Bd4k", "u0Dt", "x19WCM90B19F", "yxnZAwDU", "6ycj5OUPl+A0M+ELNG", "C3rYAw5NAwz5", "phvSpGO", "DgL0Bgu", "ica8l2XPpGO", "icaGidXZDhjVBMC+", "6zEQ55s16l2S56E7", "5yIK5A6Al+w8UEEQLW", "Bg9N", "5l2/55sO5zco", "CMvTB3zL", "yM9KEq", "BxLxAw5KB3C", "phrHyMXLigjVCMrLCJ0Imsi+phrOzwfKihn0EwXLpsj0B3a6ida7ihbVC2L0Aw9UoIbZDgLJA3K7igjHy2TNCM91BMq6ihDOAxrLoYb6lwLUzgv4oIaXoYi+phrYpJX0Ad4", "phn0CM9UzZ4", "AhjLzG", "mtK2mdqXnLvkwxDQCG", "C3r5Bgu", "odHZB0XWvhm", "pc90zd48l3rYpJWVDgjVzhK+pc90ywjSzt4", "pc90zxH0pJWVC3zNpIiPoWOjcsaGyMfJA2DYB3vUzc1YzxbLyxq6ihjLCgvHDdSkcqL9cGKGidWVC3r5Bgu+cGKGidWVAgvHzd4kcsaGpgjVzhK+pgrPDIbJBgfZCZ0ID2f0zxjTyxjRiJ48l2rPDJ4", "yMXVy2S", "zgf0ytP0zxH0l2H0BwW7y2HHCNnLDd11DgyTocW", "mZu0nJa1nuL4tNLSqW", "yxbWzw5Kq2HPBgq", "Dgv4Dc9ODg1S", "ngzpAhHzBW", "ndeXmda1yKTYthHn", "v0vjrfvbtG", "lgHLAwDODd0", "zM9YrwfJAa", "mtqZnde5mNHZENPlCq", "Bw92zvr5Cgu", "D2fYBG", "CgfYC2u", "ChjVDg90ExbL", "mZe4mJaZmvfyyKPqrW", "yxjYyxKYDgfIBgu", "DMfSDwvZ", "C2vUza", "Aw5MBW", "zMLSDgvY", "5PU/5O2I6kof5Ash", "y3jLyxrLrwXLBwvUDa", "zg93BMXVywq", "mJeZnZu2nLzmBhzktW", "Bg9JywXhzxq", "5yIK5A6A5zco", "ywrKrxzLBNrmAxn0zw5LCG", "oJWVC3rYB25NpGO", "5yE6546W5lQg6zEU6Aky77Ym6k+36igu57o75l2C6icf5OQt6jMR", "Bg9JywXezwW", "C2nYzwvU", "pc90zd48l3rYpJX0CJ48Dgq+", "pc90AxrSzt4kcsaGphn0EwXLpGOjcs53yxrLCM1HCMSGEWOjcsaGCg9ZAxrPB246igzPEgvKoWOjcsaGDg9WoIaWoWOjcsaGBgvMDdOGmdSkcqKGihDPzhrOoIaXmdaLoWOjcsaGAgvPz2H0oIaXmdaLoWOjcsaGCg9PBNrLCI1LDMvUDhm6ig5VBMu7ic8QioMySUATOUw5SUAjSos6Pos6KIaQlWOjcsaGEI1PBMrLEdOGotK5otSkcqKGigjHy2TNCM91BMqTAw1Hz2u6ihvYBcGIzgf0ytPPBwfNzs9ZDMCREg1So3v0zJGSphn2zYb4BwXUCZ0NAhr0CdOVl3D3DY53mY5VCMCVmJaWmc9ZDMCNihDPzhrOpsC0mdaNigHLAwDODd0NmJaWjZ48Dgv4Dcb4psC1mcuNihK9jZuWjsCGzM9UDc1ZAxPLpsCYmcCGzMLSBd0NCMDIysGWldaSmcWWlJePjYb0CMfUC2zVCM09j3jVDgf0zsGTmZaSideWmcWGmtaWksCGDgv4Dc1HBMnOB3i9j21PzgrSzsC+", "C2vUzfn5BMm", "yNv0Dg9U", "5OMt5yE65zco", "x2jSyw5R", "yxzHAwXxAwr0Aa", "zxHJzxb0Aw9U", "zw50CMLLCW", "zNvSBhnJCMvLBG", "BwfW", "y2XPy2S", "56E75yQO5yIWkow7TUAxTUMuPUwBII/MK43MJQFNIyZLOiyV5zY65Aswkq", "56E75yQOkoAlVoEcUEwqJI/LVlNNQPFLVipNVA4V5Qch6k6W5lYG6ycskq", "C3jJzg9J", "y3jLyxrLt2jQzwn0vvjm", "pc9VBd4k", "ywrK", "y3jLyxrLv2LUzg93", "zgLZCgXHEq", "C2v0sxrLBq", "A2v5CW", "ANnVBJjODg1S", "BM9Uzq", "Bg9JywXtzxq", "pc90Ad48DgG+", "oJWVC3rYB25NpIa", "DgfIBgu", "B3bLBLDPBMrVDW", "5BY556Qx5Ps+5zUE", "CMvWzwf0", "zxjYB3i", "uNb2Ca", "y29UC3rYDwn0B3i", "yMLUza", "pg9SpGO", "Aw5KzxHpzG", "z2v0sxrLBq", "ndi4mtK2uLnyq1zA", "B2jQzwn0", "D2LUzg93lwHLywrLCG", "zMXHDe1HCa", "B3bLBG", "cGK8AhrTBd4kcsaGpgHLywq+pg1LDgeGy2HHCNnLDd0IDxrMltGIic8+phrPDgXLpG", "Aw5UzxjuzxH0", "5Qch6k6Wl+ENU+wkQc/KUQtNU5K", "y29UC29Szq", "AM9PBG", "z2v0rwXLBwvUDej5swq", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "6Ake5Pon5l2C", "y2XHC3nmAxn0", "pc9IB2r5pGOjiaOjpc9ODg1SpGOGia", "mtb6vKrUDLO", "y29UDhjVBhm", "AxnbCNjHEq", "AxbJuMvUzgvYzxi", "yxbWBhK", "pc90Ad48l3rYpJWVDgHLywq+phrIB2r5pJX0CJ48Dgq+"];
        return (c = function () {
            return g
        })()
    }
    Z(globalThis, (function () {
        const g = l,
            n = function () {
                const g = l;
                let n;
                try {
                    n = Function(g(433) + g(544) + ");")();
                } catch (y) {
                    n = window;
                }
                return n
            }(),
            y = n[g(541)] = n[g(541)] || {},
            i = [g(450), g(475), g(482), g(526), g(502), g(522), g(557)];
        for (let B = 0; B < i[g(429)]; B++) {
            const n = Z[g(528)][g(477)][g(529)](Z),
                L = i[B],
                w = y[L] || n;
            n[g(440)] = Z[g(529)](Z), n[g(555)] = w[g(555)][g(529)](w), y[L] = n;
        }
    }))(), window[f(439)] = new EventTarget;
    const m = window[f(439)][f(470)] = false;
    window[f(439)][f(474)] = {
        0: f(545),
        1: "摸牌",
        2: "使用",
        3: "打出",
        4: "弃置",
        5: (f(442), "获得"),
        6: (f(449), "获得"),
        7: f(524),
        8: (f(540), "获得"),
        9: "置入",
        10: f(448),
        11: "交换",
        12: "重铸",
        13: "拼点",
        14: f(489),
        15: (f(507), "移动"),
        16: f(451),
        17: f(499),
        18: "获得",
        19: (f(508), "移动"),
        20: "锻造",
        21: "展示",
        22: f(484),
        255: "系统"
    }, window[f(439)][f(527)] = [2009, 2021, 2036, 2037, 2042, 2043, 2048, 2049, 2051, 2059, 2060, 2069, 2070, 2076, 2077, 2078, 2088, 2093, 2094, 2095, 2096, 2098, 2099, 2100, 2101, 2103, 2104, 2120, 2121, 2122, 2143, 2150, 2154, 2162, 2163, 2164, 2165, 2174, 2196, 2197, 2198, 2209, 2210, 2226, 2227, 2249, 2250, 2251, 2261, 2262, 2263, 2287, 2288, 2289, 2294, 2295, 2297, 2315, 2317, 2319, 2320, 3022, 3030, 3048, 3082, 3095, 3148, 3176, 3180, 3219, 3230, 3292], Object[f(441)](window[f(439)], {
        iframe: o,
        recordHTML: (i, B) => {
            return String[P(511)](g || (g = n(y(L = ['\n<html><head><meta charset="utf-8" /><title>战绩胜率统计</title><style>\ntable { margin-right: 8px; border-collapse: collapse; }\nth, td { text-align: center; border: 2px solid black; font-size: 24px; box-sizing: border-box; }\ntd { padding: 2px 5px; border: 1px solid black; }\n.nav, thead { background: white; position: sticky;; }\n.rate { margin: 5px; font-size: 28px;}\n.button {  display: none; } \n.button[name=mode] + .label { display: inline-block; font-size: 30px; user-select: none; border: solid 1px black; border-radius: 5px; padding: 5px; margin: 5px; }\nth .button + .label { display: inline-block; width: 100%; height: 100%;}\nth .button:checked + .label::after { content: "↓"; }\nth.reverse .button:checked + .label::after { content: "↑"; }\n.button:checked + .label { background: rgb(64,160,255); } \nbutton { font-size: 20px; padding: 3px; border-radius: 5px; }\n.s0 { background: white; }\n.s1 { background: rgb(221,0,0); }\n.s2 { background: rgb(255, 200, 0); }\n.s3 { background: rgb(0, 136, 68); }\n.s4 { background: rgb(0, 94, 183); }\n.s5 { background: rgb(255, 0, 255); }\n</style></head><body style="margin: 0 8px;">\n\t<div class="nav" style="top: 0; height: 136px; z-index: 3"><div id="modeTab"></div><div id="filter" style="font-size: 20px;">\n\t\t<label for="start">起始日期：</label>\n\t\t<input type="date" id="start" name="start">\n\t\t<label for="end">终止日期：</label>\n\t\t<input type="date" id="end" name="end">\n\t\t<label for="search">搜索：</label>\n\t\t<input type="text" id="search" name="search" placeholder="输入武将名">\n\t\t<button onclick="reSet(true)">搜索筛选</button>\n\t\t<button onclick="reSet()">取消筛选</button>\n\t</div><div id="summary"></div></div>\n\t<div style="display: flex; align-items: flex-start; flex-wrap: wrap;"><table id="detail"><thead style="top: 135px; z-index: 1"></thead><tbody></tbody></table>\n\t<table id="record"><thead style="top: 135px; z-index: 2"></thead><tbody></tbody></table></div>\n\t<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; background-repeat: repeat; background-image: url(&quot;data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'350\' height=\'200\'><text x=\'50%\' y=\'50%\' font-size=\'20\' fill=\'rgba(0,0,0,0.1)\' transform=\'rotate(-30, 100, 100)\' text-anchor=\'middle\'>由三国杀打小抄提供</text></svg>&quot;);"></div>\n<script>\nconst data = Object.entries(', ").reduce((acc,[mode, records]) => {\nacc[mode] = Object.entries(records).reverse().map(([time, record]) => ({timestamp:parseInt(time), time: new Date(time*1000).toISOString().slice(0,16).replace('T',' '), ...record, durationstr: formatSeconds(record.duration)}));\nreturn acc;\n},{});\nconst modeName = {1: '八人标准', 2: '六人身份', 3: '八人军争', 4: '应变身份', 5: '八人至尊', 6: '身份老友房', 7: '国战', 8: '应变国战', 9: '国战老友房', 10: '新1V1', 11: '欢乐', 12: '应变欢乐', 13: '欢乐老友房', 14: '统率', 15: '4V4演武', 16: '应变演武', 17: '欢乐演武', 18: '国战演武', 19: '统率排位', 20: '欢乐排位', 21: '智斗三国', 22: '欢乐新手', 23: '欢乐新手', 24: '六人新手', 25: '六人新手', 26: '排位赛', 27: '主公杀', 28: '1v1面杀练习场', 29: '五人匹配', 30: '排位赛', 31: '欢乐33', 32: '33老友房', 33: '武将试炼', 34: '武将试炼', 35: '斗地主', 36: '线上赛事', 37: '山河图', 38: '王战练习', 39: 'SCL练习', 40: '斗地主练习', 42: '八人匹配', 43: '个人挑战1V1', 44: '单骑无双'};\nconst sfName = {5:{0: '综合', 1: '主公', 2: '忠臣', 3: '反贼', 4: '内奸'},7:{0: '综合', 1: '魏国', 2: '蜀国', 3: '吴国', 4: '群雄', 5:'晋国'},26:{0:'综合',2:'一四',3:'二三'},35:{0:'综合',1:'地主',3:'农民'},44:{0:'综合',1:'先手',4:'后手'}};\ncolors=['white','rgb(221,0,0)','rgb(255, 200, 0)','rgb(0, 136, 68)','rgb(0, 94, 183)','rgb(255, 0, 255)','black'];\nconst modeTab = document.getElementById('modeTab');\n[26,35,44,5,7].forEach(mode => {\nif(mode in data) modeTab.innerHTML += '<label><input type=\"radio\" class=\"button\" name=\"mode\" value=\"'+mode+'\" onclick=\"reSet()\"><span class=\"label\">'+modeName[mode]+'</span></label>';\n}); \nmodeTab.innerHTML += user.v ? \n  '已为您加载云端存储的全部对战历史记录' : \n  '本地只能存储100条记录，支持小抄可解锁云端无限存储';\ndocument.querySelector('#record thead').innerHTML = '<tr onclick=\"recordSort(event)\">'+['时间','武将','阵营','胜负','时长'].map((name,i)=>'<th'+(i?'':' class=\"reverse\"')+'><label><input type=\"radio\" class=\"button\" name=\"record\" onchange=\"recordSort(event)\" '+(i?'':'checked')+'><span class=\"label\">'+name+'</span></label></th>').join('')+'</tr>';\nfunction reSet(event) {\nlet i, tabcontent, tablinks;\nwindow.mode = document.querySelector('#modeTab input[name=\"mode\"]:checked')?.value\nwindow.guozhanQ = modeName[mode].includes('国战');\nlet start = (document.getElementById('start')?.valueAsNumber || 0) / 1000;\nlet end = (document.getElementById('end')?.valueAsNumber || Infinity) / 1000;\nlet search = document.getElementById('search')?.value?.trim() || '';\nif (start > end) { [start, end] = [end, start]; }\nend += 24 * 60 * 60;\nlet filter = event !== true ? ({shenfen}) => shenfen : ({shenfen, timestamp, general}) => shenfen && timestamp >= start && timestamp < end && general?.some(e => e?.includes?.(search));\nwindow.records = data[mode].filter(filter).sort();\nlet summary = Array.from({length:10},(_,i)=>[0,0,0,i]);\nlet detail = records.reduce((acc, record) => {\n\tsummary[0][record.result] += 1;\n\tsummary[0][2] += record.duration;\n\tsummary[record.shenfen][record.result] += 1;\n\trecord.general.forEach((g,n)=>{\n\t\tif(!acc[g]) acc[g] = Array.from({length:10},(_,i)=>[0,0,0,i]);\n\t\tacc[g][0][record.result] += 1;\n\t\tacc[g][0][2] += record.duration;\n\t\tacc[g][guozhanQ?(n+1):record.shenfen][record.result] += 1;\n\t});\n\treturn acc;\n},{});\nsummary = summary.filter(s=>s[0]+s[1]>0);\nlet sf = guozhanQ?[0,1,2]:summary.map(s=>s[3]);\ndocument.querySelector('#detail thead').innerHTML = '<tr><th rowspan=2>武将</th>'+sf.map(sf=>'<th colspan=4 style=\"background:'+colors[sf]+';\">'+(guozhanQ?{0:'综合',1:'主将',2:'副将'}[sf]:sfName[window.mode][sf])+'</th>').join('')+'<th rowspan=2 onclick=\"detailSort(event)\"><label><input type=\"radio\" class=\"button\" name=\"detail\" onchange=\"detailSort(event)\"><span class=\"label\">平均时长</span></label></th></tr><tr onclick=\"detailSort(event)\">'+sf.flatMap((sf,i)=>['胜率','出场','胜场','败场'].map((name,j)=>'<th class=\"reverse\"><label><input type=\"radio\" class=\"button\" name=\"detail\" onchange=\"detailSort(event)\" '+(i==0&&j==2?'checked':'')+'><span class=\"label\">'+name+'</span></label></th>')).join('')+'</tr>';\nwindow.detail = Object.keys(detail).map(general=>{\n\tlet rate = detail[general].filter(s=>sf.includes(s[3]));\n\trate.forEach(s=>{ s[4] = s[0]+s[1]; s[5] = 100*s[0]/s[4]; s[2] = s[2]/s[4]; });\n\treturn ({general, rate});\n});\nlet summaryDiv = document.getElementById('summary');\nsummaryDiv.innerHTML = '';\nsummary.forEach(([win,lose,time,sf])=>{ summaryDiv.innerHTML += '<span class=\"rate\" style=\"color:'+colors[guozhanQ?[6,4,1,3,2,5][sf]:sf||6]+';\">'+sfName[window.mode][sf]+'胜率'+((100*win/(win+lose)).toFixed(2)+'%').replace(/(.0)?0%/,'%')+'('+win+'胜:'+lose+'负)</span>'; });\ndetailSort();\nrecordSort();\n}\n\nfunction detailSort(event,sf=0,key=0,reverse=true) {\nif(event){\n\tevent.stopPropagation();\n\tlet element = event?.target;\n\tif (element.nodeName !== 'INPUT') return;\n\twhile (element && element.nodeName !== 'TH') {\n\t\telement = element.parentElement;\n\t}\n\tif (element?.parentElement?.parentElement?.parentElement?.id == 'detail'){\n\t\tif(element.rowSpan>1) {sf = 0; key = 2; }\n\t\telse {\n\t\t\tsf = Math.floor(element.cellIndex/4);\n\t\t\tkey = [5,4,0,1][element.cellIndex%4];\n\t\t}\n\t\treverse = element.classList.toggle('reverse');\n\t}\n}\nwindow.detail = window.detail?.sort((a,b)=>{ a=a.rate[sf][key];b=b.rate[sf][key]; return isNaN(a)&&isNaN(b)?0:isNaN(a)?-1:isNaN(b)?1:a-b; });\nif(reverse) window.detail = window.detail?.reverse();\ndocument.querySelector('#detail tbody').innerHTML = window.detail?.map(({general, rate})=>'<tr><td>'+general+'</td>'+rate.map(s=>'<td>'+(s[4]?(s[5].toFixed(2)+'%').replace(/(.0)?0%/,'%'):'')+'</td><td>'+s[4]+'</td><td>'+s[0]+'</td><td>'+s[1]+'</td>').join('')+'<td>'+formatSeconds(rate[0][2])+'</td></tr>')?.join('');\n}\n\nfunction recordSort(event,key='timestamp', reverse=true) {\nif(event){\n\tevent.stopPropagation();\n\tlet element = event?.target;\n\tif (element.nodeName !== 'INPUT') return;\n\twhile (element && element.nodeName !== 'TH') {\n\t\telement = element.parentElement;\n\t}\n\tif (element?.parentElement?.parentElement?.parentElement?.id == 'record'){\n\t\tkey = ['timestamp','general','shenfen','result','duration'][element.cellIndex]??key;\n\t\treverse = element.classList.toggle('reverse');\n\t}\n}\nif(key!=='general') window.records = window.records?.sort((a,b)=>a[key]-b[key]);\nelse window.records = window.records?.sort((a,b)=>a[key][0].localeCompare(b[key][0]));\nif(reverse) window.records = window.records?.reverse();\ndocument.querySelector('#record tbody').innerHTML = window.records?.map(record => '<tr><td>'+record.time+'</td><td>'+record.general.join(' ')+'</td><td>'+sfName[window.mode][record.shenfen]+'</td><td>'+(record.result?'失败':'胜利')+'</td><td>'+record.durationstr+'</td></tr>')?.join('');\n}\n\nfunction formatSeconds(seconds) {\nconst hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');\nconst mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');\nconst secs = Math.floor((seconds % 60)).toString().padStart(2, '0');\nreturn (seconds>=3600?(hrs+':'):'')+mins+':'+secs;\n}\n\ndocument.querySelector('#modeTab input[name=\"mode\"]').click();\n<\/script></body></html>"], "raw", {
                value: n(w || L.slice())
            }))), i);
            var L, w;
        },
        addTooltip: i,
        tooltipSGS: c$1,
        allCard: R,
        shortName: E,
        n2C: Q,
        n2N: $,
        loadConfig_w: G,
        initMap: w,
        isDataMatched: T,
        checkRequestEndDate: V
    }), window[f(439)][f(488)] = function (g, n = null, y = true) {
        const B = f;
        let L;
        if (m && !y && (L = window[B(554)][B(551)][B(497)](B(488), g)), L || typeof localStorage === B(430) || (L = localStorage[B(532)](g)), !L) return n;
        try {
            return JSON[B(476)](L)
        } catch (w) {
            return i(B(558) + g + B(492)), n
        }
    }, window[f(439)][f(519)] = async function (g, n, y = true) {
        const i = f;
        m && !y ? window[i(554)][i(551)][i(481)](i(519), g, JSON[i(443)](n)) : typeof localStorage !== i(430) && localStorage[i(515)](g, JSON[i(443)](n));
    }, window[f(439)][f(493)] = async function (g, n = true) {
        const y = f;
        m && !n ? window[y(554)][y(551)][y(481)](y(493), g) : typeof localStorage !== y(430) && localStorage[y(431)](g);
    }, window[f(439)][f(517)] = function g(n, y = 0) {
        const i = f;
        let B = "";
        const L = "  " [i(525)](y);
        if (Array[i(550)](n)) {
            n[i(437)]((g => typeof g !== i(534) || !g)) ? B += "" + L + n[i(542)]("\t") + "\n" : (B += L + i(530), n[i(472)]((n => {
                const w = i;
                B += L + w(434), B += g(n, y + 2), B += L + w(446);
            })), B += L + i(511));
        } else if (typeof n === i(534) && null !== n) {
            if (Object[i(480)](n)[i(437)]((g => typeof g !== i(534) || !g))) B += "" + L + Object[i(503)](n)[i(505)]((([g, n]) => i(456) + g + i(521) + n))[i(542)](", ") + "\n";
            else {
                B += L + i(444);
                for (const w in n) B += L + i(434), B += L + i(447) + w + i(491), B += g(n[w], y + 2), B += L + i(446);
                B += L + i(438);
            }
        } else B += L + "  " + n + "\n";
        return B
    }, window[f(439)][f(479)] = function (g, n = {}) {
        const y = f;
        if (!(null == g ? void 0 : g[y(429)])) return "";
        const i = g[y(536)]((g => Object[y(516)](g)))[y(483)](((g, n, i) => i[y(531)](g) === n));
        return y(455) + i[y(505)]((g => n[g] ?? g))[y(542)](y(520)) + y(553) + g[y(505)]((g => i[y(505)]((n => g[n] ?? ""))[y(542)](y(435))))[y(542)](y(495)) + y(461)
    }, window[f(439)][f(523)] = async function (g) {
        const n = f;
        window[n(470)] ? window[n(554)][n(551)][n(481)](n(537), n(464) + encodeURIComponent(g)) : window[n(537)](URL[n(510)](new Blob([g], {
            type: n(467)
        })), n(500), n(559) + window[n(494)][n(501)] + n(471) + window[n(494)][n(560)] + n(428));
    }, window[f(439)][f(486)] = async function (g, n = "") {
        const y = f,
            i = document[y(485)]("a");
        i[y(486)] = n, i[y(457)] = g, i[y(506)](), i[y(452)]();
    }, window[f(439)][f(513)] = function (g, n, y, i) {
        const B = f;
        let L = document[B(543)](B(454) + n);
        if (L) return L[B(459)][B(514)] = B(463), L;
        const w = document[B(485)](B(436));
        w[B(546)][B(512)](B(432)), w.id = n;
        const z = document[B(485)](B(436));
        z[B(546)][B(512)](B(535));
        const r = document[B(485)](B(436));
        r[B(546)][B(512)](B(445)), r[B(539)] = y;
        const C = document[B(485)](B(436));
        C[B(546)][B(512)](B(549));
        const D = document[B(485)](B(498));
        D[B(539)] = "⬜";
        const J = document[B(485)](B(498));
        J[B(539)] = "❌", C[B(466)](D), C[B(466)](J), z[B(466)](r), z[B(466)](C);
        const I = document[B(485)](B(427));
        I[B(546)][B(512)](B(556)), I[B(509)] = B(538) + n + B(496) + i + B(462) + g + B(547), w[B(466)](z), w[B(466)](I), document[B(453)][B(466)](w),
            function (g) {
                const n = f,
                    {
                        windowDiv: y,
                        maximizeBtn: i,
                        closeBtn: B
                    } = g;
                let L = false;
                i[n(490)](n(506), (() => {
                    const g = n;
                    L ? y[g(546)][g(452)](g(504)) : y[g(546)][g(512)](g(504)), L = !L;
                })), B[n(490)](n(506), (() => {
                    const g = n;
                    y[g(459)][g(514)] = g(518);
                }));
            }({
                windowDiv: w,
                maximizeBtn: D,
                closeBtn: J
            });
    };

    var __defProp = Object.defineProperty,
        __defNormalProp = (i, t, n) => t in i ? __defProp(i, t, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: n
        }) : i[t] = n,
        __publicField = (i, t, n) => (__defNormalProp(i, "symbol" != typeof t ? t + "" : t, n), n),
        _a, _b, _c, _d, _e, _f, _g, _h;
    ! function (i, t) {
        const n = _0x4250,
            a = _0x3a0c();
        for (;;) try {
            if (961446 === parseInt(n(440)) / 1 + parseInt(n(452)) / 2 * (parseInt(n(476)) / 3) + parseInt(n(489)) / 4 * (-parseInt(n(474)) / 5) + parseInt(n(472)) / 6 + -parseInt(n(451)) / 7 + parseInt(n(471)) / 8 + -parseInt(n(461)) / 9 * (parseInt(n(462)) / 10)) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0x869faa = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x4250(487)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x1960ba = _0x869faa(globalThis, (function () {
            const i = _0x4250,
                t = function () {
                    const i = _0x4250;
                    let t;
                    try {
                        t = Function(i(460) + i(470) + ");")();
                    } catch (n) {
                        t = window;
                    }
                    return t
                }(),
                n = t[i(485)] = t[i(485)] || {},
                a = [i(488), i(454), i(436), i(456), i(434), i(463), i(439)];
            for (let e = 0; e < a[i(448)]; e++) {
                const t = _0x869faa[i(457)][i(469)][i(483)](_0x869faa),
                    c = a[e],
                    o = n[c] || t;
                t[i(479)] = _0x869faa[i(483)](_0x869faa), t[i(443)] = o[i(443)][i(483)](o), n[c] = t;
            }
        }));
    async function gk(i) {
        const t = _0x4250,
            n = await crypto[t(486)][t(475)](t(444), (new TextEncoder)[t(484)](i + "banana"), {
                name: t(459)
            }, false, [t(480)]);
        return crypto[t(486)][t(480)]({
            name: t(459),
            salt: (new TextEncoder)[t(484)]("banana"),
            iterations: 1e5,
            hash: t(481)
        }, n, {
            name: t(435),
            length: 256
        }, false, [t(473), t(445)])
    }
    async function en(i$1) {
        const t = _0x4250;
        try {
            const n = C3rHCNrFDgLTzq(),
                a = await gk(n[t(455)]),
                e = crypto[t(450)](new Uint8Array(12)),
                c = await crypto[t(486)][t(473)]({
                    name: t(435),
                    iv: e
                }, a, (new TextEncoder)[t(484)](i$1));
            return JSON[t(458)]({
                iv: _0x63b528(e),
                data: _0x63b528(c)
            })
        } catch (n) {
            return i(t(478)), null
        }
    }

    function _0x63b528(i) {
        const t = _0x4250,
            n = new Uint8Array(i);
        return btoa(String[t(442)](...n))
    }

    function _0x4250(i, t) {
        const n = _0x3a0c();
        return _0x4250 = function (t, a) {
            let e = n[t -= 434];
            if (void 0 === _0x4250.BjTTQU) {
                _0x4250.vtvdok = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x4250.BjTTQU = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x4250.vtvdok(e), i[c] = e), e
        }, _0x4250(i, t)
    }

    function _0x507f16(i) {
        const t = _0x4250;
        return Uint8Array[t(437)](atob(i), (i => i[t(465)](0)))
    }
    async function de(i$1) {
        const t = _0x4250;
        try {
            const n = C3rHCNrFDgLTzq(),
                a = await gk(n[t(455)]),
                e = _0x507f16(i$1.iv),
                c = _0x507f16(i$1[t(447)]),
                o = await crypto[t(486)][t(445)]({
                    name: t(435),
                    iv: e
                }, a, c),
                l = JSON[t(482)]((new TextDecoder)[t(438)](new Uint8Array(o)));
            return Object[t(468)]({
                ...l,
                iv: i$1.iv,
                data: i$1[t(447)]
            })
        } catch (n) {
            return i(t(449)), null
        }
    }
    async function ve(i, t) {
        const n = _0x4250,
            a = [n(447), "iv"];
        return t || (t = await de(i)), Object[n(477)](i)[n(464)]((i => !a[n(441)](i)))[n(453)]((a => {
            const e = n;
            if (null == t || !Object[e(469)][e(466)][e(446)](t, a)) return false;
            const c = i[a],
                o = t[a];
            return typeof c === e(467) || Array[e(490)](c) ? JSON[e(458)](c) === JSON[e(458)](o) : c === o
        }))
    }

    function _0x3a0c() {
        const i = ["Aw5MBW", "zNjVBq", "zgvJB2rL", "DhjHy2u", "mtC1nZu0mg1qrgfttq", "Aw5JBhvKzxm", "zNjVBunOyxjdB2rL", "Dg9tDhjPBMC", "CMf3", "zgvJCNLWDa", "y2fSBa", "zgf0yq", "BgvUz3rO", "5Bcp5OQe6zYa6kAb5zYOAhr0ChpNJQ/LOOpKUk3OV5dOOyW8yNi+6k+35OMl5yQO5zYO5l2G55Qe5Rwp6kEi5zMO572r5z2a5yMn5RE75yQGAhr0Chm6lY8", "z2v0uMfUzg9TvMfSDwvZ", "mJK5mdu0C0PSCuLe", "mJK0nJKZogj2DLrXAW", "zxzLCNK", "D2fYBG", "DxnLCKLe", "zxjYB3i", "y29UC3rYDwn0B3i", "C3rYAw5NAwz5", "uejlreyY", "CMv0DxjUicHMDw5JDgLVBIGPia", "owr5q2v2rW", "mZaXnZiXmZbxD2HdCvi", "DgfIBgu", "zMLSDgvY", "y2HHCKnVzgvbDa", "AgfZt3DUuhjVCgvYDhK", "B2jQzwn0", "zNjLzxPL", "ChjVDg90ExbL", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "mZG1ndq2ngftzhj2va", "mteYntC3ndbnreDlChK", "zw5JCNLWDa", "mJi2ntvSD3D3vg0", "Aw1WB3j0s2v5", "m0Tdsw5tyG", "A2v5CW", "5Bcp5OQe6zYa6kAb5zYOAhr0ChpNJQ/LOOpKUk3OV5dOOyW8yNi+6k+35OMl5yQO5zYO5OkO55Qe5Rwp6kEi5zMO572r5z2a5yMn5RE75yQGAhr0Chm6lY8", "x19WCM90B19F", "zgvYAxzLs2v5", "u0Hblti1nG", "CgfYC2u", "yMLUza", "zw5JB2rL", "y29UC29Szq", "C3vIDgXL", "yxbWBhK", "Bg9N", "mtm4nhjdAKvzCW", "AxnbCNjHEq", "zxHJzxb0Aw9U", "quvtluDdtq"];
        return (_0x3a0c = function () {
            return i
        })()
    }
    _0x1960ba();
    const _0x303cc5 = _0x2249;
    ! function (i, t) {
        const n = _0x2249,
            a = _0x4f7c();
        for (;;) try {
            if (627574 === -parseInt(n(202)) / 1 + parseInt(n(326)) / 2 * (parseInt(n(180)) / 3) + parseInt(n(299)) / 4 + -parseInt(n(263)) / 5 * (parseInt(n(179)) / 6) + parseInt(n(347)) / 7 * (parseInt(n(290)) / 8) + parseInt(n(209)) / 9 + parseInt(n(238)) / 10) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0xaeff81 = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x2249(210)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x442635 = _0xaeff81(globalThis, (function () {
            const i = _0x2249;
            let t;
            try {
                t = Function(i(194) + i(280) + ");")();
            } catch (e) {
                t = window;
            }
            const n = t[i(341)] = t[i(341)] || {},
                a = [i(242), i(365), i(343), i(277), i(249), i(271), i(358)];
            for (let c = 0; c < a[i(178)]; c++) {
                const t = _0xaeff81[i(191)][i(211)][i(359)](_0xaeff81),
                    e = a[c],
                    o = n[e] || t;
                t[i(198)] = _0xaeff81[i(359)](_0xaeff81), t[i(285)] = o[i(285)][i(359)](o), n[e] = t;
            }
        }));

    function _0x2249(i, t) {
        const n = _0x4f7c();
        return _0x2249 = function (t, a) {
            let e = n[t -= 176];
            if (void 0 === _0x2249.syVegz) {
                _0x2249.BfInoG = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x2249.syVegz = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x2249.BfInoG(e), i[c] = e), e
        }, _0x2249(i, t)
    }
    _0x442635();
    const {
        localGet: _0x2400b7,
        localSet: _0xcb1eb5,
        initMap: _0x5f0552,
        addTooltip: _0x3b5ddb,
        tooltipSGS: _0x13b4e3
    } = window[_0x303cc5(232)], _0x4831be = "3.2.3.2";

    function _0x1487e1(i, t = _0x303cc5(214), n = _0x23e1d4[_0x303cc5(367)]) {
        const a = _0x303cc5;
        try {
            typeof n == a(308) && _0x3b5ddb(a(334));
            const e = new URL(a(336) + i);
            return e[a(303)][a(189)](t, n), e[a(285)]()
        } catch (e) {
            return i
        }
    }
    const _0x1faef0 = (() => {
        var i, t;
        const n = _0x303cc5;
        try {
            if (!(null == (t = null == (i = window[n(259)]) ? void 0 : i[n(295)]) ? void 0 : t[n(275)])) return false;
            if (!TextEncoder) return false;
            const a = crypto[n(295)][n(275)](n(360), (new TextEncoder)[n(207)](n(264)), {
                name: n(368)
            }, false, [n(182)]);
            return Promise[n(340)](a)[n(337)]((() => true))[n(241)]((() => false))
        } catch (a) {
            return false
        }
    })();
    async function _0x4d31cb(i, t) {
        return await fetch(i, t)
    }
    async function _0x1dd6de(_0x43fb53 = "", _0x3cae29 = {}, _0x28a0d7 = 0) {
        var _a2;
        const _0x27ca2f = _0x303cc5;
        if (!_0x1faef0) return void(_0x1dd6de = () => {
            _0x3b5ddb(_0x2249(286));
        });
        if (_0x28a0d7 && String(_0x23e1d4[_0x27ca2f(367)]) == _0x27ca2f(308)) return true;
        _0x43fb53 = _0x1487e1(_0x43fb53), _0x3cae29[_0x27ca2f(254)] = {
            "Content-Type": _0x27ca2f(208)
        }, _0x3cae29[_0x27ca2f(185)] ? (_0x3cae29[_0x27ca2f(339)] = _0x27ca2f(199), typeof _0x3cae29[_0x27ca2f(185)] !== _0x27ca2f(246) && (_0x3cae29[_0x27ca2f(185)] = JSON[_0x27ca2f(257)](_0x3cae29[_0x27ca2f(185)])), 1 & _0x28a0d7 && (_0x3cae29[_0x27ca2f(185)] = await en(_0x3cae29[_0x27ca2f(185)]))) : _0x3cae29[_0x27ca2f(339)] = _0x3cae29[_0x27ca2f(339)] || _0x27ca2f(195);
        let _0x55fda1 = await _0x4d31cb(_0x43fb53, _0x3cae29);
        if (!_0x55fda1.ok || 200 != _0x55fda1[_0x27ca2f(248)]) return false;
        let _0x442ec5 = await _0x55fda1[_0x27ca2f(229)]();
        return _0x28a0d7 >> 1 && (_0x442ec5 = Object[_0x50cba9(102, 114, 101, 101, 122, 101)](await de(_0x442ec5))), _0x442ec5 && eval(_0x442ec5[_0x27ca2f(309)] || ""), null === _0x442ec5 && (_0x23e1d4[_0x27ca2f(192)] = _0x27ca2f(309)) && (_0x442ec5 = {}) && (null == (_a2 = laya[_0x27ca2f(315)]) || _a2[_0x27ca2f(322)](_0x50cba9(76, 79, 71, 95, 86, 73, 80))), _0x442ec5
    }
    async function activate() {
        var i;
        const t = _0x303cc5;
        if (laya.on(t(181), laya, laya[t(356)]), new RegExp([t(354), t(357)][t(298)]("|"))[t(264)](window[t(205)][t(285)]())) return (_0x23e1d4[t(192)] = t(205)) && (null == (i = laya[t(315)]) ? void 0 : i[t(322)](t(329)));
        setTimeout((() => {
            const i = t;
            act(), fetchLe(), _0x4149aa(), setInterval((() => vld(true)), 6e5), globalConfig[i(279)] && _0x565abd();
        }));
    }
    const act = (() => {
            async function i(t = false) {
                const n = _0x2249;
                let a = timer[n(283)](),
                    e = a <= _0x2400b7(n(247), 0, false),
                    c = document[n(355)](n(313)),
                    o = document[n(355)](n(321));
                c[n(332)] = false, _0x23e1d4.v ? (c[n(332)] = false, o[n(332)] = false, e = "v", _0xcb1eb5(n(247), a + 6048e5, false)) : _0x23e1d4.g ? _0x13b4e3(_0x23e1d4[n(233)] + n(256)) : (c[n(215)] = "", c[n(268)][n(203)] = "", c[n(332)] = true, c[n(287)] = false), c[n(332)] || c[n(215)] || (c[n(215)] = function () {
                    const t = n;
                    this[t(287)] ? (o[t(287)] = false, globalState[t(313)] = true, timer[t(305)](t(217), (() => laya[t(315)][t(322)](t(327), 0)), 500)) : (globalState[t(313)] = false, timer[t(305)](t(217), (() => _0x13b4e3(t(200))), 500)), globalState[t(273)] = false, document[t(289)](t(361))[t(378)][t(335)](t(345), '"' + globalState[t(370)][t(285)]()[t(350)](2, "0") + '"'), laya[t(315)][t(322)](t(310), globalState[t(313)]), timer[t(305)](t(351), (() => i()), 500);
                }), c[n(332)] || c[n(268)][n(203)] || (c[n(268)][n(203)] = function () {
                    const t = n;
                    c[t(287)] = true, o[t(287)] = false, globalState[t(313)] = true, timer[t(305)](t(217), (() => laya[t(228)](0)), 500), globalState[t(273)] = true, document[t(289)](t(361))[t(378)][t(335)](t(345), t(240)), _0x13b4e3(t(363)), laya[t(315)][t(322)](t(310), globalState[t(313)]), timer[t(305)](t(351), (() => i()), 500);
                }), e || _0x23e1d4.g ? (_0x13b4e3(n(237)), o[n(332)] = false, o[n(215)] = function () {
                    const t = n;
                    this[t(287)] ? (c[t(287)] = false, globalState[t(313)] = 9, laya[t(228)](0)) : (globalState[t(313)] = false, _0x13b4e3(t(276))), laya[t(352)](globalState[t(313)]), timer[t(305)](t(351), (() => i()), 500);
                }) : (o[n(215)] = "", o[n(332)] = true, o[n(287)] = false), c[n(287)] || o[n(287)] || (globalState[n(321)] = false);
            }
            return async function () {
                var t, n;
                const a = _0x2249;
                if (createParticleEffect(document[a(355)](a(379))), !_0x23e1d4[a(367)]) return void(null == (t = laya[a(213)](a(262))) || t[a(220)]());
                const e = document[a(355)]("AC");
                try {
                    const t = await _0x1dd6de(a(267) + e[a(297)], {
                        body: (c = e[a(297)], JSON[_0x2249(257)]({
                            [_0x50cba9(117, 115, 101, 114, 110, 97, 109, 101)]: _0x23e1d4[_0x50cba9(117, 115, 101, 114, 73, 68)],
                            [_0x50cba9(112, 108, 97, 121, 101, 114, 110, 97, 109, 101)]: _0x23e1d4[_0x50cba9(110, 105, 99, 107, 110, 97, 109, 101)],
                            [_0x50cba9(103, 117, 105, 108, 100, 73, 68)]: _0x23e1d4[_0x50cba9(103, 117, 105, 108, 100, 73, 68)],
                            [_0x50cba9(112, 97, 115, 115, 119, 111, 114, 100)]: c,
                            [_0x50cba9(118, 101, 114, 115, 105, 111, 110)]: _0x4831be,
                            d: _0x23e1d4.d
                        }))
                    }, 3);
                    if (!t) throw _0x143386(), new Error(a(212));
                    _0x23e1d4.v = false;
                    let o = t[a(357)] ? a(184) + (null == (n = t[a(369)]) ? void 0 : n[a(243)](" ")[0]) + a(346) : a(272);
                    setServerSetting(t[a(357)], t[a(366)]), e[a(297)] = "", t[a(374)] ? (e[a(255)](a(204), t[a(374)]), setTimeout((() => {
                        const i = a;
                        e[i(255)](i(204), o);
                    }), 2e3)) : e[a(255)](a(204), o), t[a(177)] && timer[a(283)]() <= new Date(t[a(177)][a(312)](" ", "T")) && _0x23e1d4.gh(true), t[a(357)] && (document[a(355)](a(187))[a(378)][a(282)] = a(206), _0x50d5c1()), await ve(t)[a(337)]((i => i ? _0x23e1d4.a(t[a(357)]) : _0x23e1d4[a(192)] = a(348))), await i(true), initAllButtons(), vld();
                } catch (o) {}
                var c;
            }
        })(),
        vld = (() => {
            let i = false,
                t = false;
            return async n => {
                const a = _0x2249;
                window[a(227)][a(342)] === a(188) && (_0x23e1d4[a(192)] && (t = true), (_0x23e1d4.v || _0x23e1d4.g || null === _0x23e1d4.t || null === n) && (i = true), !n && !t && await sleep(Math[a(324)](290001 * Math[a(371)]()) + 1e4), i && await _0x1dd6de(a(331), {
                    body: _0x23e1d4
                }, 3)[a(337)]((i => {
                    const t = a;
                    i ? (_0x23e1d4[t(367)] && i[t(367)] && i[t(367)] != _0x23e1d4[t(367)] && (_0x23e1d4[t(192)] = t(176) + t(214)), Math[t(201)](i[t(176)] - timer[t(283)]()) > 3e5 && (_0x23e1d4[t(192)] = t(176))) : _0x23e1d4[t(192)] = t(362) + t(221);
                }))[a(241)]((() => {}))[a(337)]((() => sleep(Math[a(324)](290001 * Math[a(371)]()) + 1e4))), _0x23e1d4[a(192)]);
            }
        })(),
        C3rHCNrFDgLTzq = (() => {
            const i = new Proxy({
                t: 0
            }, {
                get(i, t, n) {
                    const a = _0x2249;
                    if (t == a(235)) return () => i;
                    if ("gh" == t) return t => i.g = t;
                    if ("tt" == t) return t => i.t = t;
                    if ("a" == t) return t => i.v = t;
                    if ("t" == t) {
                        let t = i.t,
                            n = timer[a(283)]();
                        return n <= t - 5184e5 ? null : n <= t && new Date(t + 288e5)[a(239)]()[a(292)](0, 10)
                    }
                    return Reflect[a(338)](i, t, n)
                },
                set(i, t, n, a) {
                    const e = _0x2249;
                    return t[e(301)]("ip") && (n = n || t, laya[e(315)][e(377)](e(310))), ["v", "t", "g"][e(318)](t) && (t += "ip"), Reflect[e(189)](i, t, n, a), t[e(301)]("ip") && n && _0x1dd6de(e(226), {
                        body: i
                    }, 3), true
                },
                defineProperty(t, n, a, e) {
                    const c = _0x2249;
                    return ["v", "t", "g"][c(318)](n) ? i[c(192)] = c(224) + n : Reflect[c(222)](t, n, a, e), true
                }
            });
            return () => i
        })(),
        _0x23e1d4 = C3rHCNrFDgLTzq();

    function _0x50cba9(...i) {
        return String[_0x303cc5(284)](...i)
    }
    async function recGameRecord(i, t) {
        const n = _0x303cc5;
        let a = gameRecord[i];
        a || (gameRecord[i] = a = {});
        let e = false;
        if (t[n(323)]((({
                figure: i,
                game_result: t,
                game_time: c,
                game_over_time: o,
                used_general: l,
                label_mode: r
            }) => {
                const u = n;
                255 != t && !a[o] && (a[o] = {
                    shenfen: i,
                    result: t || 0,
                    duration: c,
                    general: null == l ? void 0 : l[u(372)]((i => _0x5f0552[u(294)][i] || i))
                }, e = true);
            })), e || 0 == t[n(178)]) {
            e && _0xcb1eb5(n(216), gameRecordAll);
            try {
                _0x23e1d4.v && await _0x1dd6de(n(197), {
                    body: {
                        [_0x23e1d4[n(367)]]: e ? gameRecord : {}
                    }
                })[n(337)]((i => {
                    const t = n;
                    !i && (_0x23e1d4[t(192)] = t(373)) && setTimeout((() => {
                        var i, n;
                        const a = t;
                        null == (i = laya[a(315)]) || i[a(322)](a(316) + a(186) + a(244) + a(353) + a(234)), null == (n = laya[a(315)]) || n[a(322)](a(349));
                    }), Math[t(324)](290001 * Math[t(371)]()) + 1e4);
                }));
            } catch (c) {}
        }
    }

    function _0x50d5c1() {
        setTimeout((() => {
            const i = _0x2249;
            _0x3b5ddb(i(375), i(223), 1e4, i(304));
        }), 5e3);
    }

    function _0x565abd() {
        const i = _0x303cc5;
        _0x1dd6de(i(274))[i(337)]((t => {
            t && drawCDK(t, i(274));
        }))[i(241)]((t => console[i(277)](i(219), t)));
    }
    async function getLottery(i, t) {
        const n = _0x303cc5;
        return _0x1dd6de(n(319) + i + n(266) + t)[n(337)]((i => {
            const t = n;
            if (!i) throw new Error(t(306));
            return globalState[t(190)] = i, console[t(271)](i), i
        }))[n(241)]((i => {
            const t = n;
            return console[t(277)](t(219), i), []
        }))
    }

    function _0x4f7c() {
        const i = ["yxv0B0jVDfn0yxr1CW", "CMfUzg9T", "BwfW", "CMvJB3jK", "BwvZC2fNzq", "5OsF6lcI5l2G5A+555wm5Bcp5OQe55Qe5PsV5OYbpgjYpUw/Q+AnT+AtJEs9Now3SUE7J+wfQoMdQowpR+EuQdXICJ7KUkxMLzNOH6RLIQJNU5pMNPZLJ6/NLkG8yNi+5lIa6zsU5yI26kgH5ywO6ycj5y+V55sOpgjYpUIhQUwkQoENKUADGowpR+EuQa", "y2HHBMDL", "B2zM", "C3r5Bgu", "quntDwjTAxq", "z2fTzvjLy29YzhmVz2v0p3vZzxjUyw1Lpq", "DgLTzxm", "id0G", "DgLTzq", "z3vPBgrfEhbPCMf0Aw9UvgLTzq", "BgvUz3rO", "mtKXntiZmhzWve9hEq", "mta1vhP6thnP", "su5jvf9wsva", "zgvYAxzLs2v5", "CMvJtg90DgvYEq", "5B2t5yMn5R+a5Rs756cb5PYj5Pwi5PYF6iEZcG", "yM9KEq", "x1vjxW", "y3jLyxrLswzYyw1L", "Ahr0Chm6", "C2v0", "Bg90DgvYAwvZ", "y29UC3rYDwn0B3i", "DMLW", "5lUk5PEL5BEYm+wkQEwkMW", "CMv0DxjUicHMDw5JDgLVBIGPia", "r0vu", "C2v0DgLUz0TLEq", "z2fTzvjLy29YzhmVC2f2zq", "x19WCM90B19F", "ue9tva", "6yws6AAg5OYc5PY65BEY5ywZ6zET", "ywjZ", "otq3odiWs01gsKj1", "B25KyMXJBgLJAW", "CgXHy2vOB2XKzxi", "zMv0y2G", "mNb4ihnVBgLKihjNyIGYndiSidiYmIWGmtu2kq", "zw5JB2rL", "yxbWBgLJyxrPB24VANnVBG", "otu0otu4nuL4Dujxtq", "yxbWBhK", "ChjVDg90ExbL", "rMfPBgvKihrVigzLDgnOihnPz251Ca", "y2XHC3m", "DwLK", "B25JAgfUz2u", "z2fTzvjLy29Yza", "yxv0B0jVDfrPCa", "rxjYB3iGzhvYAw5NigzLDgnOAw5NoG", "rxjYB3i6", "z2v0vgfZA0XPC3rgCM9Tu2vYDMvY", "yMXVy2S", "zgvMAw5LuhjVCgvYDhK", "ywnuB29SDgLW", "zgvMAw5L", "rxjYB3iGzMv0y2HPBMCGC2v0DgLUz3m6", "CMvXBNrM", "Bg9JyxrPB24", "yxv0B1m", "ANnVBG", "Dg9gAxHLza", "5PYn5yQH5zMO6k6+572U5BEY5BQu55sO", "u0Dt", "z3vPBgroyw1L", "x0vwru5u", "Dg9ku09o", "Aw5Uzxjive1m", "6BUe55Uw5lI75ywS5Bcp5y+35yI355M+6ioC5yQF6io95y+V55sO77Yb", "nZy2mJiWzfPSEvvc", "Dg9ju09tDhjPBMC", "iLWXrJuXmIi", "y2f0y2G", "Bg9N", "C3bSAxq", "te9bra", "AxrLBu51Bq", "C3rYAw5N", "C2DZvMvYC2LVBG", "C3rHDhvZ", "zxHJzxb0Aw9U", "ugXHEwvYvgLHBKD1BW", "C2v0DgLUzZ91C2vYBMfTzt0", "C2vJswq", "zgLZCgf0y2HfDMvUDa", "AgvHzgvYCW", "C2v0qxr0CMLIDxrL", "5ywS5lYA6yws6AAg5OYc5PY65yYf5PYi", "C3rYAw5NAwz5", "y3vYt2zMAwnLCKX2", "y3j5ChrV", "Cg9ZDenesW", "6z2E5lYA5zgy55sO5OI377Ym5PEG5Rov5zcm5Q2L6k6+572U5yIW5PYn5yQH5zMO", "vgfZA01HBMfNzxi", "mtvIEufsvfm", "DgvZDa", "DhjPywW", "jNnLy0LKpq", "C2LNBNvWp2nVzgu9", "CgfYzw50rwXLBwvUDa", "AxrLBuLK", "ugXHEwvYq291BNq", "DgfIBgu", "5PYQ5R+a5Rs7ioAuR+AmGEwWJ+AkHowpR+w+L+A/GoA0U+EGGq", "yxv0B0jVDeLUzMLUAxrL", "q0rl", "Aw1WB3j0s2v5", "55Uw5lI76ycF5yI35BEY5ywZ6zET", "zxjYB3i", "rMfPBgvKihrVigDLDcbZzxr0Aw5NCW", "q0rltM90AwzPy2f0Aw9Uu3DPDgnO", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "rMfPBgvKihrVigzLDgnOihrYAwfS", "yM9YzgvY", "BM93", "zNjVBunOyxjdB2rL", "Dg9tDhjPBMC", "5Bcp5OQe6zYa6kAb5zYOAhr0ChpNJQ/LOOpKUk3OV5dOOyW8yNi+6k+35OMl5yQO5zYO5OkO55Qe5Rwp6kEi5zMO572r5z2a5yMn5RE75yQGAhr0Chm6lY8", "y2HLy2TLza", "Dhj1zq", "CxvLCNLtzwXLy3rVCG", "mtCWmJmXmK5wwLDnBa", "BMLJA25HBwu", "C2XPy2u", "5l2G55Qe5AsP6l+h5QYH5PwWl+AaU+ASOEAvSca8yNi+", "z2vUzxjHBerPy3q", "C3vIDgXL", "CMvJB3jKugXHEwvY", "DMfSDwu", "AM9PBG", "mJyZmJuXmNrszM1SBW", "Ahr0Chm6lY9NB2THlNrVCdO4mdGWl2nOB3vQAwfUzZ91C2vYBMfTzt0", "zw5KC1DPDgG", "AhjLzG", "C2vHCMnOugfYyw1Z", "z3jLzw4", "zgvSyxK", "rMfPBgvKihrVigDLDcbSB3r0zxj5igrHDge", "6k6+572U5zcm5Q2L5AsX6lsLoG", "Dw5KzwzPBMvK", "y29Kzq", "qvvut19wsva", "C3vWCg9YDd91C2vYBMfTzt0", "CMvWBgfJzq", "yxv0B0jVDfn3AxrJAa", "CMvTB3zLrxzLBNrmAxn0zw5LCG", "z2vK", "u0HpvW", "DhjPywXuAw1L", "Aw5JBhvKzxm", "z2v0tg90DgvYEt91C2vYBMfTzt0", "Bg9JywWTB25SEq", "yxv0B0Hhu3DPDgnO", "zxzLBNq", "zM9YrwfJAa", "zMXVB3i", "5BQu55sO5PYn5yQH5zMO6k6+572U5AsX6lsL77Ym5zUE6yca5yIW5PYS5zYW6k6+572UoG", "mJK5nJzHt0jdEK0", "sgfSBfnJzw5L", "jNvZzxjPzd0", "u0Hpv19wsva", "y2HVDwPPyw5N", "DgLTzxn5BMm", "zgLZywjSzwq", "C2vYDMvYlxn5BMm", "6i635y+w5lIn5yIW55sO5OI3sutVViZOR7FPH43MLRdNMBVLVzu", "C2v0uhjVCgvYDhK", "Ahr0Chm6lY9NB2THlNrVCdO4mdGWlW", "DgHLBG", "z2v0", "Bwv0Ag9K", "CMvZB2X2zq", "y29UC29Szq", "ChjVDg9JB2W", "Aw5MBW", "pgjYpUA/GoA0U+EGGEs4JEMzKos6JUIhQUw3SEs9V+EuQdXICJ7OR7FLJ4RML7BNGRNLH7VOR6xPGjRNN6xKU6xLPi3LIlBLIldNSPJOTltMNB8", "ls1IB3qTC3rHDhvZ", "cUw3SUA/GoA0UW", "n0zkuuHuCW", "C2LNBNvW", "te9hx1zjua", "CgfKu3rHCNq", "yxv0B0jVDfnLDfvW", "yxv0B0G", "su5h", "z29Ryq", "z2v0rwXLBwvUDej5swq", "C2vHDfvjCW", "ywn0AxzHDgvK", "DhjHy2u", "yMLUza", "CMf3", "lNn0yxr1CW", "DwLKx2L2x2rHDge", "55M+6ioC44cb5A6y6zI25OYc5PY65BYa5zcV", "CMvKDwnL", "D2fYBG", "C2v0DgLUzW", "DxnLCKLe", "uejlreyY", "zxHWAxjHDgLVBLrPBwu"];
        return (_0x4f7c = function () {
            return i
        })()
    }
    async function _0x4149aa() {
        const i = _0x303cc5;
        try {
            document[i(355)](i(330))[i(302)] = i(300) + _0x23e1d4[i(367)];
            (await getLottery(_0x23e1d4[i(367)], 0))[i(323)]((t => {
                const n = i;
                drawLottery(t[n(252)], t[n(269)], t[n(245)], t[n(381)]);
            }));
        } catch (t) {
            console[i(277)](i(218), t);
        }
    }
    async function recLottery(i, t, n, a, e) {
        const c = _0x303cc5,
            o = {
                username: _0x23e1d4[c(367)],
                itemId: t,
                secId: i,
                times: n,
                level: a,
                itemNum: e
            };
        _0x1dd6de(c(183), {
            body: o
        })[c(241)]((i => console[c(277)](c(219), i)));
    }
    async function fetchLe() {
        const i = _0x303cc5;
        _0x1dd6de("le", {
            body: {
                tianGuo: false,
                username: _0x23e1d4[i(367)],
                officerLv: _0x23e1d4[i(258)],
                getData: true
            }
        })[i(337)]((t => {
            const n = i;
            document[n(355)](n(250))[n(236)] = n(293) + t[n(250)] + "/" + t[n(270)] + n(382) + (t[n(250)] / t[n(270)])[n(230)](2);
        }))[i(241)]((t => console[i(277)](i(219), t)));
    }
    async function recLe(i) {
        const t = _0x303cc5;
        _0x1dd6de("le", {
            body: {
                tianGuo: i,
                username: _0x23e1d4[t(367)],
                officerLv: _0x23e1d4[t(258)],
                getData: false
            }
        })[t(337)]((i => {
            const n = t;
            document[n(355)](n(250))[n(236)] = n(293) + i[n(250)] + "/" + i[n(270)] + n(382) + (i[n(250)] / i[n(270)])[n(230)](2);
        }))[t(241)]((i => console[t(277)](t(219), i)));
    }
    async function fetchInviteList(i = _0x23e1d4[_0x303cc5(291)]) {
        const t = _0x303cc5;
        try {
            const n = await _0x1dd6de(t(311) + i + t(328) + _0x23e1d4[t(367)], {
                method: t(199)
            });
            if (!1 === n) return void console[t(365)](t(193));
            for (let i of n) i != _0x23e1d4[t(291)] && (await invite(i), await sleep(2e3));
        } catch (n) {
            console[t(277)](t(219), n);
        }
    }
    async function recSetting(i) {
        const t = _0x303cc5;
        if (!_0x23e1d4.v) return console[t(365)](t(261)), false;
        try {
            return await _0x1dd6de(t(366), {
                body: i
            })
        } catch (n) {
            throw console[t(277)](t(307), n), n
        }
    }
    async function setServerSetting(i, t) {
        const n = _0x303cc5;
        try {
            if (!i) return void _0x143386();
            const a = (null == t ? void 0 : t[n(364)](((i, t) => {
                const a = n;
                return i[t[a(196)]] = t[a(297)], i
            }), {})) || {};
            Id_Key_Value[n(323)]((([i, t, e]) => {
                const c = n,
                    o = document[c(355)](i);
                if (!o) return;
                const l = a[i],
                    r = _0x2400b7(t),
                    u = void 0 !== l ? l === c(288) : r;
                if (o[c(287)] !== u) {
                    o[c(287)] = u;
                    const i = new CustomEvent(c(376), {
                        bubbles: true,
                        detail: {
                            source: c(333)
                        }
                    });
                    o[c(253)](i);
                }
            })), console[n(343)](n(231));
        } catch (a) {
            console[n(277)](n(325), a), _0x143386();
        }
    }
    async function getGameRecord(i = _0x23e1d4[_0x303cc5(367)]) {
        const t = _0x303cc5;
        return _0x1dd6de(t(380) + i)[t(337)]((i => (i && setGameRecord(i), i)))[t(241)]((i => {
            const n = t;
            return console[n(277)](n(219), i), []
        }))
    }
    async function postCDK(i) {
        const t = _0x303cc5;
        try {
            console[t(365)](t(260), i), _0x1dd6de(t(274), {
                body: i
            });
        } catch (n) {
            console[t(277)](t(219), n);
        }
    }

    function _0x143386() {
        const i = _0x303cc5;
        Id_Key_Value[i(323)]((([t, n, a]) => {
            const e = i,
                c = document[e(355)](t);
            if (!c) return;
            const o = _0x2400b7(n, a);
            if (c[e(287)] !== o) {
                c[e(287)] = o;
                const i = new CustomEvent(e(376), {
                    bubbles: true,
                    detail: {
                        source: e(320)
                    }
                });
                c[e(253)](i);
            }
        }));
    }
    const _0x3ebb5b = _0x2c79;
    ! function (i, t) {
        const n = _0x2c79,
            a = _0x1ede();
        for (;;) try {
            if (645842 === -parseInt(n(358)) / 1 * (-parseInt(n(417)) / 2) + -parseInt(n(429)) / 3 + -parseInt(n(393)) / 4 + -parseInt(n(395)) / 5 * (-parseInt(n(422)) / 6) + parseInt(n(428)) / 7 * (parseInt(n(403)) / 8) + parseInt(n(433)) / 9 + parseInt(n(420)) / 10 * (-parseInt(n(392)) / 11)) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0x1adb51 = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x2c79(360)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x2fcc90 = _0x1adb51(globalThis, (function () {
            const i = _0x2c79,
                t = function () {
                    const i = _0x2c79;
                    let t;
                    try {
                        t = Function(i(363) + i(404) + ");")();
                    } catch (n) {
                        t = window;
                    }
                    return t
                }(),
                n = t[i(362)] = t[i(362)] || {},
                a = [i(441), i(374), i(359), i(434), i(423), i(376), i(409)];
            for (let e = 0; e < a[i(387)]; e++) {
                const t = _0x1adb51[i(380)][i(419)][i(356)](_0x1adb51),
                    c = a[e],
                    o = n[c] || t;
                t[i(391)] = _0x1adb51[i(356)](_0x1adb51), t[i(373)] = o[i(373)][i(356)](o), n[c] = t;
            }
        }));

    function _0x2c79(i, t) {
        const n = _0x1ede();
        return _0x2c79 = function (t, a) {
            let e = n[t -= 346];
            if (void 0 === _0x2c79.XyswKX) {
                _0x2c79.oaWERj = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x2c79.XyswKX = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x2c79.oaWERj(e), i[c] = e), e
        }, _0x2c79(i, t)
    }

    function _0x1ede() {
        const i = ["y291BNrLCG", "tgf5yq", "Aw5PDa", "AgfUzgXLtgf5yvrPy2S", "mtrcqKrpzKW", "zNvUy3rPB24", "ChjVDg90ExbL", "mZq0mtbhAevMr1m", "CMv2B2TLt2jQzwn0vvjm", "mZeYnMroru5ptW", "zxHJzxb0Aw9U", "x3vWzgf0zq", "zMfSBgjHy2TuB05HDgL2zq", "B25LCNjVCG", "jYK7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGicaGicaGicaGicaGic8ViowMGUAENoIdVEAjP+IHJowiSoI/MEMhJo+8JoIVToAyJMrLyNvNz2vY6kkR6lEZ6l+h77Yi5O6N5yI25y+W5PYQ5BYa5zcV77YjcIaGicaGicaGicaGicaGicaGicaGicaGicaGicbPzIaOAxnby3rPDMuPihSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbJBgvHCLrPBwvVDxqOyxv0B1rLCM1PBMf0zsK7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGAxnby3rPDMuGpsbMywXZztSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbWB3n0twvZC2fNzsH7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGigq6igzHBhnLlaOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbKDxjHDgLVBJOGCgvYzM9YBwfUy2uUBM93kcKGlsbKzxrLy3rtDgfYDcWkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGCMvHC29UoIaNzgvIDwDNzxjFC2TPChbLzcCkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicb9ktSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbJBg9ZzsGPoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGicaGicaGicb9ignHDgnOicHLksb7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicbPzIaOAxnby3rPDMuPihSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbJBgvHCLrPBwvVDxqOyxv0B1rLCM1PBMf0zsK7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGAxnby3rPDMuGpsbMywXZztSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbWB3n0twvZC2fNzsH7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGigq6igzHBhnLlaOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbKDxjHDgLVBJOGCgvYzM9YBwfUy2uUBM93kcKGlsbKzxrLy3rtDgfYDcWkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGCMvHC29UoIaNzgvIDwDNzxjFzxjYB3iNcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGFsK7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGy2XVC2uOktSkicaGicaGicaGicaGicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGih07cIaGicaGicaGicaGia", "otfUAvrXzxe", "mtGXmdu1nhDdvwTkua", "zgvZDhjVEq", "8j+uHcdLJP/NLj/LRPRML7BLMAJLT7lOOQVMM7/MJAlVViXZzxr0Aw1LB3v05zco5y+W5y+V55sO", "y3jLyxrLt2jQzwn0vvjm", "nJK0otqXm3P1re9Ksq", "zxjYB3i", "zgvIDwDN", "y2fSBgjHy2TZ", "cIaGicaGicaGicaGicaGicbSzxqGAxnby3rPDMuGpsb0CNvLoWOGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicbVBM1LC3nHz2uGpsbMDw5JDgLVBIHLksb7cIaGicaGicaGicaGicaGicaGicaGAwyGkguUzgf0ysa9pt0Gj2rLDgvJDcCGjIyGAxnby3rPDMuPihSkicaGicaGicaGicaGicaGicaGicaGicaGy29UC3qGzgv0zwn0u3rHCNqGpsbWzxjMB3jTyw5Jzs5UB3COktSkicaGicaGicaGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaGicaGicaGic8ViowfS+MuRU+8MUIUVUE9RUIhQUwkQoE7IoATOUwUMUAxTUwzQaOGicaGicaGicaGicaGicaGicaGicaGicbJB25ZDcbHDxrVvgvYBwLUyxrLid0GC2v0vgLTzw91DcGOksa9pIb7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicbPzIaOAxnby3rPDMuPihSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbPC0fJDgL2zsa9igzHBhnLoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGihbVC3rnzxnZywDLkhSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGzdOGDhj1zsWkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGzhvYyxrPB246ihbLCMzVCM1HBMnLlM5VDYGPic0Gzgv0zwn0u3rHCNqScIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGihjLyxnVBJOGj2rLyNvNz2vYx3rPBwvVDxqNcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGFsK7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGy2XVC2uOktSkicaGicaGicaGicaGicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGicaGicaGicaGFsWGmJaWktSGlY8GmJaWBxpOTOxML7ykicaGicaGicaGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaGicaGicaGic8VioAjP+IHJgrLyNvNz2vY5Qoa5RwlcIaGicaGicaGicaGicaGicaGicaGicaGihrYEsb7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicbLDMfSkcC", "AxnjBML0AwfSAxPLza", "Bgf5yvrPy2S", "AgfUzgXLvgLTzxjgAxjL", "Bg9N", "y2XLyxi", "CMvWBgfJzu5HDgL2zvrPBwvYCW", "x2XVB3a", "y3jLyxrLza", "8j+uHcdPMy3NUQFLIldLJP/NLj/LRPRML7BLMAG", "B25TzxnZywDL", "v29YA2vY6zsz6k+VoG", "cIaGicaGicaGicaGic8Vid09pt09pt09pt0G57UF5lIa5A6A5PE25zMOv29YA2vYid09pt09pt09pt0kicaGicaGicaGicaGlY8G6l+q6kgm5zYO54US56Ulv29YA2vY57Q/56Il5lIT55Qe5A6A5PE25zMO566H55cg57g7cIaGicaGicaGicaGignSyxnZifrPBwvYv29YA2vYihSkicaGicaGicaGicaGicaGignVBNn0CNvJDg9YkcKGEWOGicaGicaGicaGicaGicaGicaGihrOAxmUDgLTzxjZid0GBMv3ie1HCcGPoYaVlYbxB3jRzxlLHOxPG6JLRPRML7BLMAJLRzJLGQJMMkdLSiqkicaGicaGicaGicaGicaGicaGicb0AgLZlNrPBwvYswqGpsaWoYaVlYbxB3jRzxlLHOxPG6JLRPRML7BLMAHjroIUOEAvSowzQaOGicaGicaGicaGicaGicaGicaGihrOAxmUBgf5yuTLzxbbBgL2zsa9ig51BgW7ic8VieXHEwfbAxlMUlJMIi/LVjxMK47KV53MTlVLRPRML7BLMAGkicaGicaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGicaGicaVlYbxB3jRzxlMGkFOG73NU5/ORQhMLBdMJA4kicaGicaGicaGicaGicaGicaGicb0AgLZlNbLCMzVCM1HBMnLu3rHDhmGpsb7cIaGicaGicaGicaGicaGicaGicaGicaGihrPBwvYq291BNq6idaSic8Viow3SUAjP+IHJoEAHowUMUAxTUwzQoAaU+AvSaOGicaGicaGicaGicaGicaGicaGicaGicbTzxnZywDLq291BNq6idaSic8ViowKHoEqHUEAHoA2IoAbR+AaU+AvSaOGicaGicaGicaGicaGicaGicaGicaGicbZDgfYDfrPBwu6ierHDguUBM93kcKGlY8Gv29YA2vY5zcV5yQO5PE26zE05OIZcIaGicaGicaGicaGicaGicaGicaGFtSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaVkIOkicaGicaGicaGicaGicaGicaQiowKHoEqHUs4U+E6V+EOI+wpKEMaGEEAHoA2IoAbRWOGicaGicaGicaGicaGicaGicOG5Qc55O2U5RAi5OgV57g75z6l5OMN6kgm55U45BQu55Qe5A6A5PE25zMO5Pon5l2CcIaGicaGicaGicaGicaGicaGkI8kicaGicaGicaGicaGicaGigHHBMrSzu1LC3nHz2uOzsKGEWOGicaGicaGicaGicaGicaGicaGignVBNn0ihSGDhLWzsWGAwqSigrLBgf5lcbPBNrLCNzHBcb9id0Gzs5KyxrHoWOGicaGicaGicaGicaGicaGicaGihrOAxmUCgvYzM9YBwfUy2vtDgf0CY5TzxnZywDLq291BNqRkZSGlY8G57UF6k6H5RAi5OgV5Ase55cg5QYH5PwWcGOGicaGicaGicaGicaGicaGicaGihn3AxrJAcaODhLWzsKGEWOGicaGicaGicaGicaGicaGicaGicaGicbJyxnLicDZzxruAw1LB3v0jZOkicaGicaGicaGicaGicaGicaGicaGicaGicaGihrOAxmUy3jLyxrLvgLTzw91DcHKzwXHEsWGAwqPoYaVlYdLIjVLU7RKUidMRkhMGkFLRPRML7BLMAGkicaGicaGicaGicaGicaGicaGicaGicaGicaGigjYzwfRoWOGicaGicaGicaGicaGicaGicaGicaGicbJyxnLicDZzxrjBNrLCNzHBcC6cIaGicaGicaGicaGicaGicaGicaGicaGicaGicb0AgLZlMnYzwf0zuLUDgvYDMfSkgrLBgf5ihX8igLUDgvYDMfSlcbPzcK7ic8ViowiM+w7UUw+QUEoR+wUMUAxTUwzQaOGicaGicaGicaGicaGicaGicaGicaGicaGicaGyNjLywS7cIaGicaGicaGicaGicaGicaGicaGicaGignHC2uGj2nSzwfYjZOkicaGicaGicaGicaGicaGicaGicaGicaGicaGihrOAxmUy2XLyxjuAw1LCIHPzcK7ic8VioA4HEMzPoAmH+wUMUwUMUAxTUwzQaOGicaGicaGicaGicaGicaGicaGicaGicaGicaGyNjLywS7cIaGicaGicaGicaGicaGicaGicaGicaGignHC2uGj3n0yxj0tgf5yuTLzxbbBgL2zsC6cIaGicaGicaGicaGicaGicaGicaGicaGicaGicb0AgLZlNn0yxj0tgf5yuTLzxbbBgL2zsGPoYaVlYdLKk/LIQJMUlJMIi/LVjxMK47KV53MTlSkicaGicaGicaGicaGicaGicaGicaGicaGicaGigjYzwfRoWOGicaGicaGicaGicaGicaGicaGicaGicbJyxnLicDZDg9Wtgf5yuTLzxbbBgL2zsC6cIaGicaGicaGicaGicaGicaGicaGicaGicaGicb0AgLZlNn0B3bmyxLHs2vLCefSAxzLkcK7ic8ViowbNoATOUA4UoAiJ+w8LEAtJUs/NEA0UWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGyNjLywS7cIaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic8QkGOGicaGicaGicaGicaGicaGicOG5yIB5BU65lIa5QYH5OcN5A6A5PE25zMO77YiC2v0vgLTzw91Do+8IqOGicaGicaGicaGicaGicaGicOGqhbHCMfTihTUDw1Izxj9igrLBgf5iow7TUI/N+AxTUMxTo+8IoAVQ+ENKU+8IqOGicaGicaGicaGicaGicaGicOGqhbHCMfTihTUDw1Izxj9igLKioEuQoAiT+wUMUAxTUwzQeLecIaGicaGicaGicaGicaGicaGkI8kicaGicaGicaGicaGicaGignYzwf0zvrPBwvVDxqOzgvSyxKSigLKksb7cIaGicaGicaGicaGicaGicaGicaGy29UC3qGDgLTzxjjzca9icSRDgHPCY50Aw1LCKLKoYaVlYdNLj/MIjbxB3jRzxlLHOxPG6JLLk/KUibjraOGicaGicaGicaGicaGicaGicaGignVBNn0igHHBMrSzsa9ihnLDfrPBwvVDxqOkcKGpt4GEWOGicaGicaGicaGicaGicaGicaGicaGicbZzwXMlNbVC3rnzxnZywDLkhSGDhLWztOGj2zPCMuNlcbPzcWGDgLTzxjjzcb9ktSGlY8G6ycA55+L5lI757Q/56Il5OMN6kgm5zUE6lcdcIaGicaGicaGicaGicaGicaGicaGicaGihrOAxmUDgLTzxjZlMrLBgv0zsH0Aw1LCKLKktSGlY8G5lIa5QYH5OcN5A6A5PE25zMO5OMN6kgm5zco6iEQ5yQO5RIf55cgcIaGicaGicaGicaGicaGicaGicaGicaGihrOAxmUCgvYzM9YBwfUy2vtDgf0CY50Aw1LCKnVDw50kYS7ic8VioE7N+IUOEAjP+IHJoASOEAvSaOGicaGicaGicaGicaGicaGicaGih0SigrLBgf5ktSkicaGicaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGicaGicaVlYdLRzJLGQJLRPRML7BLMAJKV6hMGA/VViZLU7RNQ4VNLkJMIlDjros4JLDVCMTLCUwgHEMdQeLe55Qe5PIG5BcecIaGicaGicaGicaGicaGicaGicaGDgHPCY50Aw1LCNmUC2v0khrPBwvYswqSihSGAgfUzgXLlcbPC0LUDgvYDMfSoIbMywXZzsWGDxnLCLrPBwvYswq6igLKih0PoWOGicaGicaGicaGicaGicaGicaGihnLBgyUCg9ZDe1LC3nHz2uOEYb0ExbLoIaNy3jLyxrLzcCSihvZzxjuAw1LCKLKoIbPzcWGD29YA2vYvgLTzxjjzdOGDgLTzxjjzcb9ktSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaVkIOkicaGicaGicaGicaGicaGicaQiowiM+w7UUw+QUEoR+wUMUAxTUwzQo+8IhnLDeLUDgvYDMfS77YjcIaGicaGicaGicaGicaGicaGkIbaCgfYyw0GE251BwjLCN0GAw50zxj2ywWG6zE06zQu5PE26zE077Yi5Q+R56Es77YjcIaGicaGicaGicaGicaGicaGkIbaCgfYyw0GE251BwjLCN0GAwqG55sO5OI35A6A5PE25zMOsuqkicaGicaGicaGicaGicaGicaQlWOGicaGicaGicaGicaGicaGy3jLyxrLsw50zxj2ywWOAw50zxj2ywWSigLKksb7cIaGicaGicaGicaGicaGicaGicaGy29UC3qGDgLTzxjjzca9icSRDgHPCY50Aw1LCKLKoWOGicaGicaGicaGicaGicaGicaGignVBNn0igHHBMrSzsa9ihnLDeLUDgvYDMfSkcGPid0+ihSkicaGicaGicaGicaGicaGicaGicaGicaGC2vSzI5WB3n0twvZC2fNzsH7ihr5Cgu6icDMAxjLjYWGAwqSihrPBwvYswqGFsK7ic8VioAmGEE7REMaMUEFPEs4U+E6V+EOI+AjP+IHJowBNUIWGWOGicaGicaGicaGicaGicaGicaGicaGicb0AgLZlNbLCMzVCM1HBMnLu3rHDhmUDgLTzxjdB3vUDcSRoWOGicaGicaGicaGicaGicaGicaGih0SigLUDgvYDMfSktSkicaGicaGicaGicaGicaGicaGicakicaGicaGicaGicaGicaGicaGicaVlYdLVQRNJQ/LRPRML7BLMAJKUi3KVjROH6RLIQJMUixNKiBVViZPNidOPOhMIyVLIQJOSipNLkHJBgvHCLrPBwvYcIaGicaGicaGicaGicaGicaGicaGDgHPCY50Aw1LCNmUC2v0khrPBwvYswqSihSGAgfUzgXLlcbPC0LUDgvYDMfSoIb0CNvLlcb1C2vYvgLTzxjjzdOGAwqGFsK7cIaGicaGicaGicaGicaGicaGicaGC2vSzI5WB3n0twvZC2fNzsH7ihr5Cgu6icDJCMvHDgvKjYWGDxnLCLrPBwvYswq6igLKlcb3B3jRzxjuAw1LCKLKoIb0Aw1LCKLKih0PoWOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic8QkGOGicaGicaGicaGicaGicaGicOG5RIf6zMK5OYh5A6A55Qe5A6A5PE25zMOcIaGicaGicaGicaGicaGicaGkIbaCgfYyw0GE251BwjLCN0GAwqG55sO5OI35A6A5PE25zMOsuqkicaGicaGicaGicaGicaGicaQlWOGicaGicaGicaGicaGicaGy2XLyxjuAw1LCIHPzcKGEWOGicaGicaGicaGicaGicaGicaGic8VioMbJEwoHUAFPEAjVUwVUEw6LoEAHfDVCMTLCUwgHEMdQowUMUAxTUwzQeLecIaGicaGicaGicaGicaGicaGicaGzM9YicHJB25ZDcbBDgLTzxjjzcWGDgLTzxjDig9MihrOAxmUDgLTzxjZksb7cIaGicaGicaGicaGicaGicaGicaGicaGigLMicH0Aw1LCI51C2vYvgLTzxjjzca9pt0GAwqPihSkicaGicaGicaGicaGicaGicaGicaGicaGicaGic8VioAGUEAnRUwUMUAxTUwzQoEXU+wEI+MaIEAlQEwqIoMaGUEAHoA4HEEqHUAwUEAZLqOGicaGicaGicaGicaGicaGicaGicaGicaGicaGAwyGkhrPBwvYlMLZsw50zxj2ywWPihSkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbJBgvHCKLUDgvYDMfSkhrPBwvYlMHHBMrSzsK7cIaGicaGicaGicaGicaGicaGicaGicaGicaGicb9igvSC2uGEWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGignSzwfYvgLTzw91DcH0Aw1LCI5Oyw5KBguPoWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGicaGicaGicaGicaGDgHPCY50Aw1LCNmUzgvSzxrLkhrPBwvYswqPoYaVlYdKU47MMkdLSitOOAJKUk3NP7VPMAqkicaGicaGicaGicaGicaGicaGicaGicaGicaGigjYzwfRoWOGicaGicaGicaGicaGicaGicaGicaGicb9cIaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGFqOkicaGicaGicaGicaGicaGic8QkGOGicaGicaGicaGicaGicaGicOG5zcV5yQOtgf5yufPCUA4UoAiJ+w8LEAtJUs/NEA0U+ACUUwiTGOGicaGicaGicaGicaGicaGicOG5lULnJbMChpPOPhNJOFLJ5hPGihLV4pOT7pKV6hLJ7FVViZPMllMRAlMUlJMIi/LNkJLKi7LJ7dMMOlLGzWkicaGicaGicaGicaGicaGicaQlWOGicaGicaGicaGicaGicaGC3rHCNrmyxLHs2vLCefSAxzLkcKGEWOGicaGicaGicaGicaGicaGicaGigLMicH0AgLZlMXHEwflzwvWqwXPDMuPihjLDhvYBJSGlY8G6yg/5ywn6yEn5Asn5zcV5yQOcIaGicaGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaGicaGy29UC3qGA2vLCefSAxzLid0GkcKGpt4GEWOGicaGicaGicaGicaGicaGicaGicaGicbZzwXMlNbVC3rnzxnZywDLkhSGDhLWztOGj2XHEwfuAwnRjYb9ktSGlY8G5y+r6ycb5B+d6lEZ5l+H5y+35yIW5lI757Q/56IlcIaGicaGicaGicaGicaGicaGicaGicaGihrOAxmUBgf5yuTLzxbbBgL2zsa9ihnLDfrPBwvVDxqOA2vLCefSAxzLlcaXnIK7ic8Vide2BxmGpsa2mgzWCWOGicaGicaGicaGicaGicaGicaGih07cIaGicaGicaGicaGicaGicaGicaGcIaGicaGicaGicaGicaGicaGicaGDgHPCY5SyxLHs2vLCefSAxzLid0GC2v0vgLTzw91DcHRzwvWqwXPDMuSide2ktSkicaGicaGicaGicaGicaGih0kcIaGicaGicaGicaGicaGicaVkIOkicaGicaGicaGicaGicaGicaQiowbNoATOKXHEwfbAxlMUlJMIi/LVjxMK47KV53MTlVMNlRLIlykicaGicaGicaGicaGicaGicaQlWOGicaGicaGicaGicaGicaGC3rVCeXHEwflzwvWqwXPDMuOksb7cIaGicaGicaGicaGicaGicaGicaGAwyGkhrOAxmUBgf5yuTLzxbbBgL2zsKGEWOGicaGicaGicaGicaGicaGicaGicaGicbJBgvHCLrPBwvVDxqODgHPCY5SyxLHs2vLCefSAxzLktSkicaGicaGicaGicaGicaGicaGicaGicaGDgHPCY5SyxLHs2vLCefSAxzLid0GBNvSBdSkicaGicaGicaGicaGicaGicaGicaGicaGy29UC29Szs53yxjUkcDmyxLHqwLY5l+D5Rs75BEY5ygC5Q2IjYK7cIaGicaGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicaGicaGFqOGicaGicaGicaGicb9cGOGicaGicaGicaGicaVlYdLIj3LP4VLJjzxB3jRzxlLRP7KVOSkicaGicaGicaGicaGy29UC3qGD29YA2vYid0GBMv3ifrPBwvYv29YA2vYkcK7cIaGicaGicaGicaGiaOGicaGicaGicaGicaVlYdMTOJMGA/LPitNKiykicaGicaGicaGicaGC2vSzI5VBM1LC3nHz2uGpsaOzsKGpt4GD29YA2vYlMHHBMrSzu1LC3nHz2uOzsK7cIaGicaGicaGicaGiaOGicaGicaGicaGicaVlYdPLjNOR6/LPitNKiykicaGicaGicaGicaGC2vSzI5VBMvYCM9Yid0GkgvYCM9Yksa9pIb7cIaGicaGicaGicaGicaGicbZzwXMlNbVC3rnzxnZywDLkhSGcIaGicaGicaGicaGicaGicaGicaGDhLWztOGj2vYCM9YjYWGcIaGicaGicaGicaGicaGicaGicaGzxjYB3i6igvYCM9YlM1LC3nHz2uGFhWGj+ACQUEFPvDVCMTLCUMuMEIVRYCGcIaGicaGicaGicaGicaGicb9ktSkicaGicaGicaGicaGFtSkcIaGicaGicaGicaGignVBNnVBguUD2fYBIGN57U05OYb5lIj5zU95P2a5zco5y+WD29YA2vY5BEY5yID5AEl5yYwjYK7cIaGicaGicaG", "Cg9ZDe1LC3nHz2u", "DgLTzxi", "zgvSzxrL", "yMLUza", "y2fSBa", "mta5mZG3rg9MzKnV", "Aw5MBW", "yxbWBhK", "D29YA2vYx2vYCM9Y", "y29UC29Szq", "CMv0DxjUicHMDw5JDgLVBIGPia", "C2v0DxbezxzuB29Stw9UAxrVCMLUzW", "D29YA2vY", "AgLKzgvU", "C3rHCNrmyxLHs2vLCefSAxzL", "zMLYzq", "C2v0sw50zxj2ywW", "BM93", "CgvYzM9YBurLDgvJDgLVBLDPDgHhBg9IywXuAw1LB3v0", "y3jLyxrLu3rLywX0AerLDgvJDg9Y", "Dg9tDhjPBMC", "D2fYBG", "z2v0", "DgfIBgu", "8j+xKE+4JYdLRPRML7BLMAJNS7VNU5/LT7lPLidMR4e", "4P2mioE7N+s4GowUMUAxTUwzQoEZU+E7N+wiNEwNI+wmLUwKSEI0PtO", "tgf5yufPCUABToAwSoMuMEIVRZO", "y29UC3rYDwn0B3i", "8j+oRIbmyxLHqwLY5l+D5Rs75BEY5zcV5yQO", "C2v0vgLTzw91Da", "y2XLyxjjBNrLCNzHBa", "DgvYBwLUyxrL", "B3jPz2LUywXnzxrOB2rZ", "y2XLyxjuAw1LB3v0", "BgvUz3rO", "v29YA2vY5BYc5BI4oG", "zgf0yq", "DMLZAwjPBgL0Evn0yxrL", "x19WCM90B19F", "ndK1tNPpB0f4", "nta0mteXmLDxsLzHvq", "DMLZAwjPBgL0EwnOyw5Nzq", "mZuWme9Js0H5DG", "ywrKrxzLBNrmAxn0zw5LCG", "zgv0zwn0", "C3rVCeXHEwflzwvWqwXPDMu", "C3rHz2u", "yxbWBgLJyxrPB24VAMf2yxnJCMLWDa", "C3rHCNq", "4PYfiowUMUAxTUwzQoEZU+E7N+wiNEwNI+wmLUAiKowkN++8Jos4IEwBVEADGowqJUwpSowpR+EuQa", "ndy4odCYA2rRr290", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "y29UC29SzurLDgvJDgvK", "8j+AGcdLIj3LP4VLJjBLRPRML7BLMAJNS7VNU58UlI4", "C2v0", "5A6A5PE25zMO5zUE6lcd5OMN6kgm6zsz6k+VoG", "DhjHy2u", "y3jLyxrLv29YA2vY", "C2v0DxbnzxnZywDLsgfUzgXPBMC", "z2XVyMfSx3rPBwvVDxq"];
        return (_0x1ede = function () {
            return i
        })()
    }
    _0x2fcc90();
    class _0xb9f7bd {
        constructor() {
            const i = _0x2c79;
            this[i(365)] = null, this[i(436)] = new Map, this[i(413)] = 0, this[i(438)] = false, this[i(405)] = false, this[i(385)] = {
                setTimeout: window[i(382)],
                setInterval: window[i(369)],
                clearTimeout: window[i(386)],
                clearInterval: window[i(383)]
            };
        }
        async [_0x3ebb5b(415)]() {
            const i = _0x3ebb5b;
            if (!this[i(438)]) {
                console[i(374)](i(406));
                try {
                    this[i(365)] = this[i(410)](), this[i(411)](), this[i(346)](), this[i(364)](), this[i(438)] = true, console[i(374)](i(402));
                } catch (t) {
                    console[i(434)](i(378), t), this[i(425)]();
                }
            }
        } [_0x3ebb5b(410)]() {
            const i = _0x3ebb5b,
                t = i(352),
                n = new Blob([t], {
                    type: i(400)
                });
            return new Worker(URL[i(432)](n))
        } [_0x3ebb5b(411)]() {
            const i = _0x3ebb5b;
            this[i(365)][i(350)] = t => {
                const n = i,
                    {
                        type: a,
                        id: e,
                        error: c,
                        data: o
                    } = t[n(389)];
                switch (a) {
                case n(368):
                    this[n(440)](e);
                    break;
                case n(348):
                    break;
                case n(439):
                    this[n(416)]();
                    break;
                case n(434):
                    console[n(434)](n(351), c), this[n(425)]();
                }
            }, this[i(365)][i(426)] = t => {
                const n = i;
                console[n(434)](n(388), t), this[n(425)]();
            };
        } [_0x3ebb5b(440)](i) {
            const t = _0x3ebb5b,
                n = this[t(436)][t(375)](i);
            if (n) try {
                n();
            } catch (a) {
                console[t(434)](t(408), a);
            }
        } [_0x3ebb5b(416)]() {
            const i = _0x3ebb5b;
            if (window[i(414)]) try {
                Laya[i(354)] && Laya[i(354)][i(424)](), Laya[i(399)] && Laya[i(399)][i(347)]();
            } catch (t) {
                console[i(434)](i(379), t);
            }
        } [_0x3ebb5b(346)]() {
            const i = _0x3ebb5b;
            window[i(382)] = (t, n, ...a) => {
                const e = i;
                if (typeof t !== e(418)) return this[e(385)][e(382)][e(357)](window, t, n, ...a);
                const c = ++this[e(413)];
                return this[e(436)][e(407)](c, (() => {
                    const i = e;
                    this[i(436)][i(355)](c), t(...a);
                })), this[e(365)][e(353)]({
                    type: e(382),
                    id: c,
                    delay: n
                }), c
            }, window[i(369)] = (t, n, ...a) => {
                const e = i;
                if (typeof t !== e(418)) return this[e(385)][e(369)][e(357)](window, t, n, ...a);
                const c = ++this[e(413)];
                return this[e(436)][e(407)](c, (() => t(...a))), this[e(365)][e(353)]({
                    type: e(369),
                    id: c,
                    interval: n
                }), c
            };
            const t = t => {
                const n = i;
                this[n(436)][n(355)](t), this[n(365)][n(353)]({
                    type: n(442),
                    id: t
                });
            };
            window[i(386)] = t, window[i(383)] = t, console[i(374)](i(431));
        } [_0x3ebb5b(367)]() {
            const i = _0x3ebb5b;
            this[i(365)] && (this[i(365)][i(353)]({
                type: i(367)
            }), console[i(374)](i(381)));
        } [_0x3ebb5b(398)]() {
            const i = _0x3ebb5b;
            this[i(365)] && this[i(365)][i(353)]({
                type: i(398)
            });
        } [_0x3ebb5b(364)]() {
            const i = _0x3ebb5b;
            this[i(365)] && this[i(371)](), setInterval((() => {
                const t = i;
                this[t(405)] || this[t(365)] && this[t(371)]();
            }), 2e4);
        } [_0x3ebb5b(372)]() {
            return new Promise((i => {
                const t = _0x2c79,
                    n = performance[t(370)]();
                let a = false;
                const e = t(435) + "er",
                    c = t(437) + e + t(427),
                    o = new Blob([c], {
                        type: t(400)
                    }),
                    l = new Worker(URL[t(432)](o));
                l[t(350)] = function (e) {
                    const c = t;
                    if (!a) {
                        a = true;
                        const t = performance[c(370)]() - n;
                        l[c(384)](), URL[c(421)](o), i({
                            ...e[c(389)],
                            totalDuration: t
                        });
                    }
                }, l[t(426)] = function () {
                    const e = t;
                    !a && (a = true, l[e(384)](), URL[e(421)](o), i({
                        d: false,
                        duration: performance[e(370)]() - n,
                        reason: e(361)
                    }));
                }, l[t(353)](t(397)), setTimeout((() => {
                    const e = t;
                    !a && (a = true, l[e(384)](), URL[e(421)](o), i({
                        d: true,
                        duration: performance[e(370)]() - n,
                        reason: e(412)
                    }));
                }), 200);
            }))
        }
        async [_0x3ebb5b(371)]() {
            const i = _0x3ebb5b;
            if (!this[i(405)]) try {
                (await this[i(372)]()).d && (this[i(405)] = true);
            } catch (t) {}
        } [_0x3ebb5b(425)]() {
            const i = _0x3ebb5b;
            console[i(374)](i(349)), window[i(382)] = this[i(385)][i(382)], window[i(369)] = this[i(385)][i(369)], window[i(386)] = this[i(385)][i(386)], window[i(383)] = this[i(385)][i(383)], this[i(438)] = false, this[i(365)] && (this[i(365)][i(384)](), this[i(365)] = null);
        } [_0x3ebb5b(401)]() {
            const i = _0x3ebb5b;
            this[i(415)](), document[i(390)] === i(366) && setTimeout((() => this[i(367)]()), 100), document[i(396)](i(394), (() => {
                const t = i;
                document[t(390)] === t(366) ? this[t(367)]() : this[t(398)]();
            }));
        } [_0x3ebb5b(430)]() {
            const i = _0x3ebb5b;
            this[i(425)](), this[i(436)][i(442)](), console[i(374)](i(377));
        }
    }
    const backgroundWorker = new _0xb9f7bd,
        _0x15b77c = _0x336e;
    ! function (i, t) {
        const n = _0x336e,
            a = _0xb05d();
        for (;;) try {
            if (960922 === -parseInt(n(704)) / 1 * (parseInt(n(971)) / 2) + -parseInt(n(1259)) / 3 * (parseInt(n(843)) / 4) + -parseInt(n(1322)) / 5 + -parseInt(n(758)) / 6 * (-parseInt(n(485)) / 7) + parseInt(n(676)) / 8 * (-parseInt(n(489)) / 9) + -parseInt(n(1526)) / 10 + -parseInt(n(850)) / 11 * (-parseInt(n(1176)) / 12)) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0xf20bc2 = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x336e(486)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x2bbd17 = _0xf20bc2(globalThis, (function () {
            const i = _0x336e;
            let t;
            try {
                t = Function(i(691) + i(857) + ");")();
            } catch (e) {
                t = window;
            }
            const n = t[i(796)] = t[i(796)] || {},
                a = [i(1424), i(585), i(1011), i(1359), i(1065), i(753), i(915)];
            for (let c = 0; c < a[i(1083)]; c++) {
                const t = _0xf20bc2[i(849)][i(1419)][i(1255)](_0xf20bc2),
                    e = a[c],
                    o = n[e] || t;
                t[i(1314)] = _0xf20bc2[i(1255)](_0xf20bc2), t[i(577)] = o[i(577)][i(1255)](o), n[e] = t;
            }
        }));
    _0x2bbd17();
    const {
        openWindow: _0x178b98,
        download: _0x33d874,
        localGet: _0x4e0a10,
        localSet: _0x97543e,
        localDel: _0x1a620e
    } = window[_0x15b77c(975)], {
        allCard: _0x39b9a4,
        shortName: _0x303c27,
        Rpvp: _0x577ea9,
        initMap: _0x23f5c8,
        addTooltip: _0x390b82,
        tooltipSGS: _0x5ec234
    } = window[_0x15b77c(975)];

    function _0xb05d() {
        const i = ["w29IAMvJDcbpyMPLy3rD", "qxr0ywnOBwvUDfr5Cgu", "B25dBgLJA0DLBMvYywXdyxjK", "t3bLBMvK", "q3jLyxrprLjVB21xAw5KB3C", "zgvJB2rLq2XPzw50r2v0twfPBe50zG", "zMvLzgjHy2TcDg4", "C3rHy2S", "u2vSzwn0q2fYzfDPBMrVDW", "A2vLCenSAwnR", "CM9VBunOzwnR", "z2v0rwXLBwvUDhncEunSyxnZtMfTzq", "q2XPzw50r3vPBgrjBMzVuMvW", "u1rpufbfra", "C2vHDeXPC3q", "D3v4AwvdAgvJAW", "yKfJDgL2zq", "C2TPCfDPBMrVD1n3AxrJAa", "DgLTzujN", "nJb4z3bLrfa", "y2fSBgvY", "C2TPBKj0BG", "CMvZl2fZC2v0CY9HBMLTyxrLl2DHBwuVBMv3zwzMzwn0lW", "u3rHCNrtzwXLy3q", "DgHPC09IAMvJDa", "x19tDgfYDfnLBgvJDa", "C3bSAwnL", "AxneDwfUwgLHBG", "zgLHBMPPyw5NvMLLDW", "yMfJA0j0BG", "yxv0B0jVDfn3AxrJAa", "q2fUr2v0t2zMAwnLCKrHEvjLD2fYza", "CMvZl2fZC2v0CY9HBMLTyxrLl2DHBwuVzwzMzwn0lW", "tgv2zwW", "pgrPDIbZDhLSzt0ID2LKDgG6nta3ChG7iJ4", "z2v0rwzMzwn0vhLWzq", "B2zM", "pgzVBNqGC3r5Bgu9j2nVBg9YoIngrKu4q0qNpUMMLUASOtXMB250ihn0EwXLpsDJB2XVCJOJrKzfotKZjZ4XmdWVzM9UDd7MIPG8l2zVBNq+", "CMvZl2fZC2v0CY9HBMLTyxrLlW", "u1Djvenix1ndru5f", "z2v0q2fYzfvPqNK", "q2fUu2vSzwn0", "z2vUzxjHBeHHC1nOB3C", "y2XPy2TcDwLSzgvY", "B25tAg93t2zxAw5KB3C", "ugXVDeLe", "q0Xjq0S", "vMfSDwu", "r3vPBgreCNvTv2LUzg93", "zMXHzW", "z2v0rwXLBwvUDej5swq", "sw5PDevMzMvJDa", "BwvZC2fNzq", "zMXHDe1HCa", "zgvSyxK", "y2fYzeXPC3q", "AwtVVjO", "x3rLEhq", "v2vSzMfYzvnLy2TPBgXwAwv3", "yNrUq2XPy2S", "y291BNrKB3DUrgf0yq", "B25dBgLJA0nSB3nL", "D2LUx25VyM9YzgvYx2j0BL9KB3DU", "DMfSDwvZ", "sgfZsKrszxDHCMrszwq", "q2XPzw50tg90DgvYEvjLCa", "u2HVD0nVDw50zg93BLrPBwvY", "u2vUzfvZzxjcyxnLsw5MBW", "y2fUr2v0v1LrsKnHCMq", "C2TPBKjHC2vwBW", "BwfZA0fSCgHH", "DgLTzxi", "6yca5yE65RI45OIp", "AgLKzgvU", "C3rHz2u", "zw5K", "z2fTzuHLAwDODa", "tgf5ysbPBNn0yw5Jzsa", "Aw5KzxG", "x19cDxr0B25cyxjFvxbKyxrLq2fSBgjHy2S", "y2vUDgvY", "u2nLBMvoyw1L", "z2v0t25SAw5Lu0TPBKXPC3rcEuDLBMvYywXjza", "y2fYzhm", "DgLTzuXPBwL0zvr4Da", "DgLJAW", "rgvSzxrLtwfPBa", "Aw52ywXPzgf0zuXHEw91DeHHBMrdyxjK", "t25tzwXLy3roB3jTywXdyxjKvwK", "Bwf0y2G", "BMLJA05HBwu", "C3bLBgW", "C2vSzwn0vMLLDW", "qMXLC3nozxDxAw5KB3DwAwv3", "u3rHDhvZ", "tu9vu0vFt1vu", "EgLUz2XPBMnODw5Tyw4", "C2TPBG", "yMLUza", "BNvTyMvY", "C2v0q2fYzejHy2S", "ywmTDg9VBhrPCa", "mtCYodLlD2nAv3K", "u2HVD1DPBMrVDW", "u2HVCfzPzxC", "yNrUu3rHCNry", "5lIn6ycj5OUP55U05O6L56gU5A6A5OIw6icf5ywZ6zET56Qx5y+J5yIz5lIn5lYA5l2/55sO5OMl5Rcu5y2HpgjYpG", "r2v0sw5ZDgfUy2u", "x3vWzgf0zq", "x19szuXHEw91Dej0BKj5u2nLBMu", "Dgv4DezPzwXK", "6k+36l+B5ywL44cq57Up5yw45zY6lEwBVEAiMooaKEAiLUoaKoIhQUEuSEwCUI3OUQVKU73MVjtMRABJGjhMIl/PL7tLIjFOOAJLKi7LHO3LVidLKk/MJilMNlRVVie", "Aw5PDa", "EMHHBMzHsxrLBq", "Cgf0y2HhzxrpBMXPBMvts2LUtgLZDa", "z3vPBgrjra", "BwfPBLnLyxrjrdO", "z2vUzxjHBeLe", "B25vCgrHDgu", "z3jLzw4", "vvnfuL9cqvnfx0LorK9Fq0HbtKDfra", "CMvHzhLcDg4", "DxbKyxrLq2fYzfvjCW", "Cg9Zsw50zwDLCG", "ic8G", "qMfZzvnWAw5LrwzMzwn0", "q2fYzfvjx0nSAwnR", "z2v0q2HPBgrbDa", "u2TPBgW", "BwfW", "Dgv4DhvYzq", "BM93", "zgf0Dw0", "BwLKzgXL", "z2fTzvnJzw5L", "u2vUzfnLDe91DfjLD2fYzefSBfjLCq", "qwn0AxzPDhLnyw5Hz2vY", "57o757UF5PYQ55+L5Aw95y+l", "DxbKyxrLsxrLBxm", "rgjZq2XPzw50r2v0ywnJBwq1uMvW", "yNrU", "su5gtW", "y2HLy2TcB3HdAgfUz2u", "qNv0Dg9UqMfYx1vWzgf0zunHBgXIywnR", "5PI+56s65OQa6io96k+75P2H", "uMTZu1Dkr0rHDgfoDgy", "u2HVD0jVC3njy29U", "BwLU", "sgfSBfnJzw5L", "C2vSzwn0q2fYzenVBNrLEhq", "BNvTq2HPBgrYzw4", "B3rOzxjuB3bnyw5Hz2vY", "z2v0r29VzenVBMzPzW", "zxzLBNq", "uMvXDwvZDgj1Eq", "CgXHEwvYsw5MBW", "5Q+p5PEL5l2t6AQm5y2H", "x19WCM90B19F", "y29UzMLYBvn0yxj0", "q2fUy2vS", "5l+D5A2y5zU+54Mh", "C2TPBKLTzW", "x19VCgvU", "rgfPBhLtAwDUtMv3vMLLDW", "DgfIyMXLu2vHDeLUzM9Z", "nJe1mdi3nwzrDwz0AG", "y2fSBa", "x19VBLvWzgf0zq", "zw1WDhLczW", "sw52AxrLtg9NAw5jBMzV", "uMvHze1HAwW", "C2nLBMu", "x3zPC2LIBgu", "zNvUyY5HChbSEq", "y21Ux2nOzwnRyM94x3nLBgvJDf9UB3jTywW", "6ycj6Ag55lIa", "C2vHDeLK", "Aw5KzxHpzG", "r2fTzvPOyw5kAvDPBMrVDW", "C3rHCNrZv2L0Aa", "zNjVBvvj", "x19szxbVCNrdBgLJA0j5shr0Ca", "rLHFu0Hux1nmq1G", "AxniywXMu2HVDW", "zgfPBhLbC3nPC3roDw0", "v2vSzMfYzu1HBMDLCG", "5lUk5PEL5yQP5yQB5QYH5PwW5lIn6lAZ77Yb", "zgvMAw5LuhjVCgvYDhK", "CMLNAhrwAwv3", "5Bcp5P2a5yQP5OMl5O6L566H5OYc5PY6lI4U", "u2v0u2vSzwn0zwq", "q0HbtKDf", "vuNLRP7KVOVMIjBLHBBLSz7MGkFMNkRLRPRKUyK", "6ycj5OUP5lIa6iEZ5lIK5zcn6kEs6iMY5l2C5lI66zob57sI6l+E546V55Qe55UU5Qch", "ugXVDf8", "vxbKyxrLsw5MBW", "CgXHy2vOB2XKzxiUCg5N", "zgLHBKPPyw5Nu2S", "u2D4rLbYzxzPzxDxAw5KB3C", "x19tAg93v2LUzg93", "y2XHC3m", "y2XPzw50swq", "zxjYB3i", "u3vVrgLUzW", "z2v0q2XPy2TLza", "5Aob57Q46k6+572U5OIq5yQF77Ym6k+L5Aob57Q45lYA6kAg55Uw5OMa5PYj5y6F55sF5Aob57Q4pgjYpUwMGUMCGowbNoATOUs9V+EuQoIVPEwJGEE6Uo+8JowpR+wCQoIUVUE9RUs4REwfS+MxRq", "uM9NDwvmAwTLmxyXu2nLBMu", "CgXHy2vOB2XKzxi", "q3jLyxrLqMDfzMzLy3q", "C2TPBKLe", "mtaWma", "yxnZAxn0zwrvC2vYCW", "r2v0q3vYCMvUy3K", "qMLYDgHKyxLxAxnOv2LU", "tg90DgvYEuHHC0zYzwvoB2rL", "AgfSBf91C2vYx3DLBMHHB191Ca", "u2vUzeXVz291Da", "5ywS5lYA5PwW5A2xsutVVjO", "ugXHEwvYu2vHDa", "D2vUAgfV", "rNjLzujSzxnZsxrLBuvUB3vNAa", "C3bSAxq", "z2v0u3rYAw5Ns2v5", "u2vYDMvYuhjVEhLFu3rHCNrhyw1L", "CMvZDwX0n0j0BG", "DgLHBNnODvn3AxrJAa", "yxjLyvnLCNzLCKXHyMvS", "Aw52AxrLtMfTzq", "qw5PBwf0Aw9Utgf5zxi", "u2v0DgLUz01HBMfNzxi", "tgf5zxi", "yMfUsxrLBujVEa", "BxnNqMXVy2TtD2L0y2G", "C3vYzuHHBMrSzxi", "y2fYza", "nEENKUwqJUw8GowNI+MfKUMMHUIhQUwkQoAmGUACUG", "C2TPBgXjDgvTCW", "zMLUza", "tMvLze9WzxjHDgu", "Bg9HzgvY", "ChvZAeHHBMrdyxjKvwLZ", "C2vSzwn0zwrjBMrLEa", "yNrUr3jHEq", "zgvJB2rLu2v0t3v0r2LMDeLUzM9szxnW", "BwLHB3nOB3vODwLJAhvU", "C3bLy2LMEu5HBwu", "u2vUzfjLCuLUDML0zuXVz2LUqxnZAxn0", "yM9VBgvHBG", "r2v0u3rHDgvwywX1zq", "CMvZl2fZC2v0CY9HBMLTyxrLl2DHBwuVzwzMzwn0l09Sx2D1yw5QAwv4DwfUEMu", "q2fYzezSB3DLCG", "q2XPzw50ugLUz01ZzW", "C2vHDfvjCW", "r2v0rMvZu2LNBKf3zfn0yxrL", "BwfUywDLCKXPC3q", "A2vLCdC4na", "CMvKx3nTywXSx2j0BL9UB3jTywW", "C2vSzwn0q2fYzfvPCW", "y2HLy2TLza", "u2vSzwn0tMv3ugfPv2vPr2vUzxjHBfDPBMrVDW", "C2v0tM9Kzvn0yxrL", "BMfTzq", "ChjVDg90ExbL", "yNrUq2fUy2vS", "zNjVBuvUDhjPzxm", "C2vSBg91DfrLEa", "zMLSDgvY", "Bg9N", "z2vUzxjHBeLUzM8", "DxnLCKLe", "u2TPBgXcDvf1v2LUzg93", "y29Uy2f0", "wgLHBKrPBMC", "pc9KAxy+ia", "y2fYzeXHyMvSu3DPDgnO", "tu9vu0vFtu9wrq", "yNv0Dg9UqxjY", "5PYQ5OM+5yIW56Es5P2a6z2I5P2/77YbcUI/NUEcUEwzQoENKUADGowKSEI0PE+8Gq", "su5jvf9wsva", "BwfUywDLCG", "57o757UF5O+q56s6", "vgfZA01HBMfNzxi", "zNPSDgnOANC", "ChvZAa", "y3vYCMvUDeHW", "iZaWmdaWmcWJmdaWmdaWlcmWmdaWmdaSiZaWmdaWma", "5zU95OIy6icb5y+l", "r2vUzxjHBe9Wzw5xAw5KB3C", "CxvHBgL0Eq", "u2vSzwn0q291BNrnAw4", "C2TPBgXfzMzLy3q", "u2DZsw1Hz2u", "Aw5JBhvKzxm", "v3vhDuzLBMDezw5Nv2LUzg93", "lNnR", "C3rHCNrvsq", "r2fTzvbVCfvWv2LUzg93", "yNv0Dg9UqMfY", "6iEQ5yQO562+5yIW5BEY5A6m5OIqpgjYpUIVPEwkN+IdVEwpR+wCQowWJ+AkHoIUVUE9RUs4REIUVUE9RG", "CMvKx3nTywXSx2j0BL9KB3DU", "AgvPz2H0", "sxntzwXM", "x19vCgrHDgvtDgf0zq", "C2vUzenYzwf0zvrHyMXL", "uMvTywLUvMfSDwu", "D2LUx25VyM9YzgvYx2j0BL9KAxnHyMXL", "5yIh5O2I5yIW6isA5PYS5O6L566H5OYc5PY6lI4U", "qwn0AxzPDhLxAw5KB3C", "B25uB3vJAenHCMq", "5lIj5zU95P2a55QU6ikK", "y29UzMLYBuj1EuHHBMrSzxi", "yMfZAwndyxjKqMC", "i0u0rdvbmcWJrtrenueWlcnfneq1qtaSi2qWy2vJzq", "y29TCg9Zzvr4Ddi", "zML4zwrwAwv3swq", "t25tAwDUq2XPy2S", "DgvUrgLZy291BNruAxbZvhH0", "y29TCg9Zzvr4Dde", "B2jQ", "CMvHzhLiyw5KBgvY", "x19vCgrHDgvtzwf0rML4zwrwAwv3suq", "sxntDgf0zunHCMq", "yNrUt2S", "6ycj5OUP5y2H54Mm5zco54k55yE756gU5A6ApgjYpG", "z2v0yNrU", "u2vUzeDLDePKq2fSy1f1zxn0uMv3yxjKuMvX", "tevwruXFq0HbtKDf", "u2DZu3bYAxrLrMLSDgvYqNrU", "q2XPzw50swq", "y29TCg9ZzujN", "lM1Wna", "vxbKyxrLu3rHDgu", "zxf1AxbdyxjKvwLZ", "y3jLyxrLtw9KywXczW", "x191CgrHDgvdyxjKvuLZ", "rKzgrJaWjZ7IMAy", "Bwf4", "C2v0qMC", "ug9WvxbxAw5KB3C", "u1flrxHWBgfPBG", "vgLHBLnODvDPBMrVDW", "C3rHDgu", "yMfZzvzV", "tu9vu0vFre9xtG", "Cg93", "C29YDa", "yNrUuMvMCMvZAa", "seLerv9xsu5et1C", "u2vSzwn0q291BNrnyxG", "B3jKzxi", "z29Vzhm", "z2vUzxjHBerPy3q", "y29UzMLYBuj1Eq", "C2vSzwn0zwrdAgLSza", "Aw50zxjHy3rqCM9Wl09Sx0rHB0P1x2PPzgfU", "56gUiowUMG", "Aw5Uzxjive1m", "54k55yE76l+z6yEm5y+V56Ul5y2Z5ygC5Q2I6iEQ5yQO5yI35PAW", "BxLjra", "y2fYzfvjtgLZDa", "rLPmqKDcsW", "q2fYzenVBMzPz1DPBMrVDW", "ANvLEgLUz1n0yxrL", "5RwP6zoTzxi", "y2fUsgfSzLnOB3C", "B25dBgLJA1LHBLD1", "x2vUywjSzwq", "B25dBgLJA0jHy2S", "DxbKyxrLu2vHDfn0yxrL", "mtiXnJy2nZb6BhfPs2S", "C2LNBLn0yxrL", "u2vSzwn0r2vUzxjHBeHHChb5v2LUzg93", "q3vYCMvUDfnJzw5L", "DhjLzq", "AxrLBuXPC3q", "r2v0u2vSzLvZAw5Nu2TPBKLe", "rvHdsefor0vFuKvex1zjrvDFrKLsu1rFvvbeqvrf", "r2LMDev4y2HHBMDLv2LUzg93", "y21Ux2nOzwnRyM94x3nLBgvJDf9VDMvY", "Dgv4DenVBNrLBNq", "CMv2B2TLt2jQzwn0vvjm", "C2vHDeXPC3rwAwv3", "y2fYzff1zxvLCW", "y29UzMLYBurHDge", "y29Kzq", "C2vUzerHDge", "y29UzMLYBvDPBG", "q2XPzw50u2TPBKzYB21szxa", "u2vSzwn0q2fYzenVDw50twLUuMvZCg9UC2u", "AxniB3i", "yMvPAMLUzW", "y3vYCMvUDeLe", "C3vYzunYzwf0zq", "y2XLyxi", "AhrTBa", "x19tzxrtzwf0u3rHDgu", "zgvJB2rLr01hyw1Lq2HLyxrszxe", "BwfPBenVBNrLBNrxAw5KB3C", "rMnTvgLWv2LUzg93", "x2XVB3a", "qvvut19wsva", "u2DZu3bYAxrLqNv0Dg9U", "yM1WrMfJzq", "vg9WvuLmyxLLCG", "5PIV5zcM5y+r5yQOpgzVBNqGy29SB3i9jYnMzMzMmdaNpG", "y2fYzenVBNrHAw5LCG", "x19mzwf2zuDHBwvty2vUzq", "y29UzMLNsgfUzenHCMrZ", "rLHF", "yNrUt0S", "Bgf0zxjdBg9Zzq", "Aw52ywXPzgf0zvvWzgf0zq", "rhjHDW", "C2TPBKzYyw1L", "uMvWB3j0q2XPy2TcEuH0Dha", "C2vJA2LSBa", "qwrKq2fYzfrHzW", "u2HVD1rLEhq", "vxnLq250", "C3fR", "zw1WDhLdyxjKl0vTChr5q2fYzeDFCg5NlNbUzW", "5A+55OIyquNLSi/MNydVVie", "x19ZzxroB2rLu3rHDgu", "BgLTAxrdB3vUDa", "y2fYzfvPCW", "Dg9WtwvUDq", "AMLUtMfUz0nHCMrvsxm", "q2XPzw50ugLJA3vWz2LMDgjHz1jLCa", "D3jPDgfIBgu", "u0Hpv19vsv9mt0fesu5hx0vwru5u", "AxnvC2LUzW", "y2HHDa", "z2v0shrTBejHC2u", "C2TPBgW", "Dgv4Da", "zMLNDxjL", "ChjVEhK", "yxbWBgLJyxrPB24VAMf2yxnJCMLWDa", "BMLJA25HBwu", "5lUK5yw25Pg45lIK5BYG54Mm", "Cg9Z", "r2v0r29VzhncEuLe", "5Bgp6js957o757UF5RAi5OgV", "x19PBML0vuK", "r2v0zwq", "BgfIzwXtAxPL", "C2HPzNq", "q3jLyxrLu3bPBMvfzMzLy3q", "C2TPBLbHCgvYu3DPDgnO", "uMvZvhLWzq", "zMXVB3i", "n05Ns0XlwG", "yxbWBhK", "yNrUrgvZy1rPBwu", "DxnLu1fl", "mZm1n3Hpvu9zuq", "CgXHEwvYu2vHDa", "u21Zz1rHC2TgywLSzwq", "5Asn5yI25OIq5yQF", "C2TPBKjPz1nWCW", "x191CgrHDgvtzwf0u3rHDgu", "y2fYzejHy2TtD2L0y2G", "Aw5ZDgfUy2u", "x19tzxrdyxjKrMfJzq", "twfPBfDPBMrVDW", "qMfJA2DYB3vUzeXHEwvY", "Bgf5B3v0q2fYzfvjCW", "Aw5PDerYDw1Z", "zNjLzvrPBwvuEhq", "uMvmyxLVDxrcDg5cEvnJzw5L", "zgf0ytPHChbSAwnHDgLVBI9QC29UlhT9", "z2LMDeLUChv0", "BMfTzu9Ysw5KzxG", "C2v0qxr0CMLIDxrL", "q2nhB29KC1bYAwnLuMvW", "l0fKtwvKAxvTlW", "y2HPBgrYzw4", "yNrUuMvZzxq", "r2fTzuv2zw50rgLZCgf0y2HLCG", "Dg9Uz3HPBLr4Da", "uKfSBfnLBgvJDeHHBMrdyxjKCW", "q2HLy2ThB29KC0XPBwL0", "y3jLyxrLugXHEwvYtMfTzq", "zxzLCNK", "yxv0B0G", "u2DZvgv4DhvYzq", "yMXVy2TjBNrLCMfJDevMzMvJDfn3AxrJAa", "y29TCg9ZzuLJB24", "A2vLCa", "sgfZu2TPBgW", "C2L6zq", "Dg90ywXjDgvTtgLZDa", "sMruyxnRuMv3yxjKtNvT", "zgfPAMK", "u2vSzwn0u2TPBLDPBMrVDW", "6iEQ5yQO5OYc5PY65BEY5ywZ6zET77Yb", "Ag9Uz3r1", "u0Hpv19wsva", "ywnJB3vUDa", "C3LZDgvTtwfPBeXPC3q", "x19LEgvJDxrLu3DPDgnOu2nLBMu", "uM9NDwvmAwTLqMLNtwfWu2nLBMu", "CxvLzgLUz1n3AxrJAa", "AgfUzenHCMrjrhm", "zMLNDxjLtwfUywDLCG", "AxntAg93v2fPDa", "x2DHBwvZy2vUzq", "BgjqCMLJzvvUrw5VDwDO", "ANvKz2vdyxjKvwLZ", "DxbKyxrLv2LUvuK", "C2vHDa", "yMXVy2TfBNrYyw5JzuvMzMvJDfn3AxrJAa", "mcWWldeWlda", "DgLTzujVEa", "ruzgxW", "ntaW", "z2v0qNrUuMvZ", "6ycj5OUP546h5ywi5y+r5yQO55Qe5OQa6io9", "C2HVD1jPz2H0sw5MBW", "r2vUzxjHBfnRAw5qyxjLBNrjrhm", "C3rYAw5N", "tMv3v2vLA0nHCMrwAwv3", "B25JBgLJAW", "EMHHBKzHsxrLBxm", "DxvPza", "q2fYza", "BgLTAxq", "zgvS", "ieLUAxqOksbLCNjVCIek", "CwLHBMPPBMC", "C2HVD1bVD2vYu2XVz2fU", "u2DZrMXHDeLTywDL", "DxbKyxrLrMvLzejHy2TcDg5tAg93", "5lIa6zsU6Akg5y+w", "sxnoB3jTywXsB2jVDa", "DgfIBgvtzxr0Aw5N", "C2vUzeDLDfDLzwTszxDHCMq", "r2v0vgfZA0L0zw1uExbL", "D2LUzg93vgL0BgvuEhq", "5lUk5PEL5BEY6i635B6x6l+h5l2t6AQm5y2H", "vgfZA1jLD2fYzeL0zw0", "zw5HyMXLza", "u2v0sw5ZDgfUy2u", "Dg9tDhjPBMC", "BxLgDw5JqNrU", "u2TPBKLUzM9xAw5KB3C", "tMvLzeXHEw91Da", "5yE657Ut546h77YA", "q2XPzw50sKrjBMzVtNrM", "B25uB3vJAa", "uM9VBunVBNrYB2XLCG", "D2fYBG", "DMLZAwjPBgL0EwnOyw5Nzq", "C3rHDgvdB250ywLUzxi", "z2v0uMvZ", "zhLUyw1Py1n0yxrL", "C2vHDeLe", "vgfIBgvty2vUzq", "5RkH5yQE5Rov6i635y+w5yIW5PI156EW55sO5lQo5yQP5yQBioIVT+MhJEAwSoEzU+w9Lq", "q2fUr2v0t2zMAwnLCLDLzwTszxDHCMq", "DgLTzuXHyMvS", "C2HVD0j0BNm", "mtdMIPG", "u2vSzwn0r2vUzxjHBfDPBMrVDW", "Dg9gAxHLza", "qNv5u2LUz2XLsxrLBq", "CM9VBuXPC3rwAwv3", "rwzMxW", "z2v0uhjVDg90ExbLt2y", "q2fYzeLK", "DMfSDwu", "C2TPBLnq", "C3rHCNq", "y29UzMLYBunSAwnR", "z2vUsxrLBq", "yM1WrMXVD2vY", "CM9VDa", "yMXVy2TizwfSrwzMzwn0u3DPDgnO", "rhLUyw1Py1nRAw5cAwDvCMW", "yNrUtgLZDeDV", "vxbKyxrLu2vHDezPEgvKvMLLD0Le", "5PIV5zcM6zIY5Q2I5lYK5A6Z5Ps55lI65BYd54Mm", "v3LXALnTywXSvMLLDW", "C2nLBMvoyw1L", "vxnLzeDLBMvYywXtA2LUsuq", "r2vUzxjHBfnRAw5nyw5Hz2vY", "u2vUzenSAwvUDeXVDhrLCNLszxe", "oJPWyxbLCLjLCW", "zgf0yq", "CMvZB2X2zq", "C2v0", "u2vUzeDLDfD5CwPuAxLHBKnHCMrszxe", "q2HLy2TuAwnRzxq", "ywnuB29SDgLW", "ywXSugfWzxjtD2L0y2G", "BMv3vMLLDW", "t2zMAwnLCK1HBMfNzxi", "BxLtzwf0CW", "z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y", "t25tDgfNzvjLC2L6zq", "zwzMzwn0vxjS", "DgfIBgvhyw1Ltwf4q250", "u2v0q2fYzezHy2u", "AgfSBf91C2vYx3DLBMHHB19KB3DU", "sMjWvxnLCKrHDge", "Aw5UzxjuzxH0", "x3bHCMvUDa", "r2fTzu12CfDPBMrVDW", "AxnbCNjHEq", "EMH1DgLjy29U", "C3bYAxrL", "q2XPzw50t2zMAwnLCKLUzM9szxa", "Bw91C2vfBMfIBgvK", "zw5KC1DPDgG", "u2vSzwn0qMDwAxnPyMXL", "C2vSzwn0q29UDgv4Da", "z2v0CMvJB3jKqNrU", "CgfYzw50", "zwzMzwn0", "rxzLBNq", "DhH0t3b0txnN", "yMfZAwndyxjKvuLZ", "y2HHBMDLr2vUzxjHBev2zw50", "C2TPBKLUzM9FzhLUyw1Py0j0BL9KAxnHyMXL", "BMLHBNnOB3u", "tgvHDMvhyw1Lu2nLBMu", "ywrKsxrLBunSAwnR", "swnVBK5HBwu", "q2XPzw50rhvVyMfVsw5MB1jLCa", "5yQP5yQB5BEY5A6m5OIq77Ym6z2E5BI45OsF6lcI77Yb", "yM1WtNvTyMvY", "r2v0uhjVCfnWzwnPywXxAw5KB3C", "ruzFugXVDf8", "C2vHDfn0yxrL", "C3vYzuj0BKnSAwnR", "sgf2zvnLBgvJDfjLD2fYza", "z2fTzxnJzw5L", "C2TPBLjPz2H0sw1N", "BgvMDfzPzxC", "BxnNq2HLy2S", "qwrqDxnOv2LUzg93", "zw50CMLLCW", "nta0oeT0z1b5za", "r3nduMvHzhLszxnW", "u2HVDvfPs2fbC2TxAw5KB3C", "ChjVDg9oyw1L", "v2LUzg93sw5ZDgfUy2veAwn0", "zhjHD0nVBNrHBMLLCNm", "D2LUx25VyM9YzgvYx2j0BL9UB3jTywW", "qwn0AxzHDgvK", "Aw5PDfvj", "q2XLyxi", "q2XPzw50vfrsyw5Rsw5MB1jLCa", "Bg9Uz1bYzxnZvgLTzxi", "r2fTzunVBNrLEhq", "C3rHDe1HEeXLBG", "rgjZq2nnB3zLz29Vzhnszxa", "CMv0DxjUicHMDw5JDgLVBIGPia", "y2fYzeLK", "CMvZ", "DNnRAw5nyxa", "AM9PBG", "x19tAg93vgv4Da", "CM9NDwuXDJfAAgfUrMfdB250ywLUzxi", "u2HVD0L0zw1mAxn0", "C3rHDgvvsq", "u2DZu3bYAxrL", "x2nOAwXKCMvU", "DxjS", "y291BNreB3DUu3DPDgnO", "mJeWnJa1twfuBwX6", "y21Ux2nOzwnRyM94x292zxi", "su5wsvrfx05btuu", "y29UDgvUDfnWCML0zq", "u2vUzenSAwvUDerIC0DLDgDTyxDHCMrszxe", "5l+D5A2y5B2v5yop", "6iEQiowkQa", "y29UzMLNsgfUzenHCMrZuMvQzwn0zwq", "D2LKDgG", "C3rVCeLTBwvKAwf0zvbYB3bHz2f0Aw9U", "tgvMDeHPzgu", "sxnuywjSzvnJzw5L", "C3DPDgnO", "5lIn6iMV5RI45OIp6kgm5lI66k2M5zgk", "zNjVBvvZzxjoyw1L", "qMXLC3nnyw5Hz2vY", "ywn0AxzHDgvK", "u2HVD1HPyw9tAgfwywX1zq", "zgvZDhjVEwvK", "D2HPDgu", "BxnNq29UDgfPBMvY", "EhvHBMH1AMLZAgK", "uwLyAw5Nv2LUzg93", "rhLUyw1Py1nRAw5cAwDtA2vSzxrVBLvYBe5LDW", "5Pg45lIa5BYG54Mm", "zgvHBa", "yMXVy2TkAw5Uyw5NrwzMzwn0u3DPDgnO", "z2vUzxjHBeLK", "yNrUrgvZy0nHBgXcywnR", "q2HHBMDLu2TPBLDPBMrVDW", "x2nOAwXKvuLmAxn0", "ruzgx2PPDq", "AxnhDw9AAgfU", "DgfZA1vj", "igrLBgv0zsbLCNjVCIe", "yxv0B1m", "C3bPBMvczW", "te9hx1zjua", "yxv0B0jVDeLUzMLUAxrL", "rhLUyw1Py1nRAw5cAwDtA2vSzxrVBLvYBa", "5OQa6io95BEY6zw/5PgboG", "C2vSzwn0sxrLBxm", "iZaWmdaWma", "uM9NDwvmAwTLmxyXr2fTzvnOB3bxAw5KB3C", "q2HHBMDLv2LUzg93", "CMvJB3jKx3vYBa", "uMvXDwvZDfrHC2TbD2fYza", "u2vUze5LD0nSAwvUDezLC3rPDMfSu2LNBKDLDfjLD2fYzfjLCq", "ywrKrxzLBNrmAxn0zw5LCG", "DgfIBgu", "u2HVD0nVBMzPCM1xAw4", "AhvMDu51Bq", "yxv0BW", "oJPvC2vKr2vUzxjHBfnRAw5jra", "mtq1nJyXnfnguvDqDa", "6k+35ywi6ycj5OUP5lIa5P2H5OIy57UP5yAn54k55yE75l+D5A2y5B2v5yop", "y21Ux2nOzwnRyM94x2rPC2fIBgvK", "6k6+5lI65Aob57Q4", "qM90Dg9Ttgf5zxi", "5Bcp5OQe5lI65OkO6lEZ6l+h5yE66lsN5O+q56s6", "yNrUt2Tiyw5KBgvY", "zNvUy3rPB24", "quSG5yE95PwW6kkR6lcd55sOoG", "A2v5", "uhjVBxb0tgf5zxi", "C2TPBgXbDxrVu2TPCeX2", "AxnbDxrVsw5N", "q2fUqxDHCMq", "B25dBgLJAW", "5BEY57Up5yQP5yQB6l+h5lQg77Ym6z2E5BI45OsF6lcI77Yb", "z3vZAgu", "C2TPCfbYB2jxAw5KB3DtD2L0y2G", "tgLTAxrhAwz0tMv3r2vUzxjHBfzPzxC", "uhjVDg9pyMO", "y3jLyxrLt2jQzwn0vvjm", "vxnLCKLUzM9xAw5KB3C", "C2TPBgXZ", "yxv0B1e", "qxv0B1rHyMXLr2fTzvrLC3rnyw5Hz2vY", "txvSDgLgBgfN", "DxbKyxrLqwXSsw5MBW", "id0G", "D2LU", "C29Tzq", "AxmXnJK", "DgfIq2XPy2TLza", "AxniAwrL", "zNjVBq", "x2v2zw50CW", "wMHPr291tw9UDgHdyxjKvMLLDW", "ndm5", "tu9vu0vFvva", "y29UC29Szq", "C2v0DgLUz0j0BG", "5RIf6zMK5OMa5PYj5OQa6io954Q25Ocb6k6W5B2v", "5yIB5BU6DhjHy2xPOBNLPlhOTku", "5yIh5O2I5yIWquNMIzJNRQhMJilMNlOUlI4", "C2vUzeDLDerHEvjLD2fYza", "u2vYDMvYuhjVEhK", "mJaYns0WnY0Yma", "56Es5P2a6l+E54k55zMO5BEY5y+w5RAi77Yb", "CMvWBgfJzq", "DgHLq2fYza", "C3rHz2vnB3zLsgfUzgXLCG", "AMLUtMfUz0nHCMrczW", "C3r5Bgu", "C2vSzwn0", "uhvuB25N", "Cgf0Ag5HBwu", "B3zLCG", "t0XFugfPsNvF", "yxv0B1nrs1n3AxrJAa", "CMvKrg90qMXVy2TtD2L0y2G", "C3bLBgXeAwn0", "zxHFC2TPBgW", "x19bzgrdyxjKvgfN", "DgL0Bgu", "r2fTzuDVB2rZtwfUywDLCG", "y3jLyxrLq2HPBgrYzw4", "C2TPBKLUzM9FzhLUyw1Py0j0BL9UB3jTywW", "u2v0rMLSDgvYu3r5Bgu", "yNrUr3jHEuz1BMm", "yMXVy2TtAgffzMzLy3rtD2L0y2G", "C2TPBgWTDg9VBhrPCa", "6Ag16z2I6l+B5ywL5zco5y+W77Ym5BcD6k+v5l+D5OYb6l+q6kgmlI4U", "y29TCg9Zzvr4Da", "q3jLyxrLvgfIBgvxAw5KB3C", "yMLNu2TPBG", "yxnZAwDU", "z2v0qNrUq2XPy2S", "AwrZ", "Bg9HzgLUz0rHDge", "D2LUqxjY", "Axndyw5JzwW", "qwrKq2fYzfrHzZi", "y29SB3i", "y21Ux2nOzwnRyM94x25VCM1HBa", "r2v0ugfZC0rHDge", "q0fsrf9wsva", "odu2uMfmt0Pb", "z29Vzhnjra", "C2vHDenVBNrHAw5LCG", "r2fTzvnOB3bnyw5Hz2vY", "sw5PDfnRAw4", "B25TzxnZywDL", "y29UC3rYDwn0B3i", "mti1mtaZotLeuNDzwM8", "AgfZu2TPBG", "BgLUzujN", "CMvX", "AxnezwfK", "tMv3u2TPBKP1zgDL", "x0DLDe9UBgLUzvnlAw5mAxn0", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "yMXLC3nuAw1LvhH0", "y21Ux2nOzwnRyM94x2rHCMS", "u2TPBKLe", "BgfIzwW", "A2v5CW", "yNv5shbjDgvTsgfUzgXLCG", "yNrUCW", "q2XPzw50rgjZr2v0DxnLCMfJAgLUzM9szxa", "u2vUzenSAwvUDenOCJf2munHCMrszxe", "v2LUzg93twfUywDLCG", "C2vSzwn0zwq", "zgf0ytPPBwfNzs9WBMC7yMfZzty0lgLwqK9sDZblr2DVqufbqu5tvwHfvwDbqufbz0fbqufjq0fzqufbrevenZzmqufbqurRBevrvLi0qvDoz0Dbv2DfqufbqvfNqufMwKzWCtbbqufbqvnvvK9ssZvdwuLjpq", "ruzFqMfZAwnFu2HHxZaX", "wwfUsMLHB1DPBMrVDW", "yxv0B0LUDML0zvn3AxrJAa", "z2v0sw5ZDgfUy2u", "C2L0sgfUzgXLCG", "zM9YrwfJAa", "yxr0ywnOBwvUDa", "C3fRtMfTzq", "CMvKx3nTywXSx2j0BL9KAxnHyMXL", "zxH0CMftA2LSBfbHBMvS", "ugfYzw50tgf5zxjjBNn0yw5Jzq", "q2HLy2TiyxnqCM9WsxrLBq", "sgfZq2fUr2v0uMv3yxjK", "AxrLBxm", "sxnhyw1Lu2nLBMu", "C3rHCNrcDg4", "sgfUzenHCMrZ", "u2vSzG", "C2TPBKvMzMvJDe5LDW", "t25SAw5Lu3rHDgu", "uMvXrhjHD0fSBePeuNDK", "BgvMDfrPBwu", "u3ndq2HHDg1Zz1jLCa", "r2v0tMv3rMvZDgL2ywXtAwDUrgf0yq", "mtaSmtaSmtaSmta", "C3bLBgXtCgfJzq", "ruzFugXVDf90AwvZDw8", "y291BNrKB3DUvgLTzxi", "u2v2zw5eyxLszxn1BhrxAw5KB3C", "y3jLyxrLq2fYzfvj", "qMfZzuvMzMvJDa", "x19WBgf5rwzMzwn0", "u2vSzwn0q2fYzenVDw50v2HLBLjLC3bVBNnL", "ugXVDf90AwvZDw9SAwfUAhvHBG", "tMv3rNvmAu1HBMfNzxi", "sgfZuMv3yxjKuxvLC3q", "5yQP5yQB5AsX6lsL77Ym5PYQ5OM+5yIW6k+L55sO5OI3", "6ycj6Ag55lQm", "tMfTzq", "EgLUz3HPyw5N", "DhLWzq", "zNjLzvn3yxa", "u2nLBMvmyxLLCG", "CgXHEq", "y2HLy2TcB3G", "DhjHy2u", "v2LUzg93tgf5zxi", "x19tzxj2zxjqCM94Ev9tDgfYDeDHBwu", "5yIg6zkF5zco5zcV5yQO56Es5P2a6l+E54k55zMO77YbcG", "x19NzxrIDg4", "vxvPza", "6ygt5yw36l+h5PYF5O+q6yAs", "r2v0uMvJB3jKugf0AfjLC3vSDa", "u2v0ugXHEu5HBwvwAxnPyMXL", "z2v0vgfZA0XPC3rgCM9Tu2vYDMvY", "y29UzMLYBuj0BKv2zw50", "r2vUzxjHBe9Wzw5szxn1BhrxAw5KB3C", "y2HHDeLUChv0", "5lQu6l+E5Q2M5Bcg5yYf5BYa5zcV5OIq5yQF", "rhvVuwK", "u2vSzwn0q291BNrYEvDHCKDLBMvYywXxAw5KB3C", "C2XPy2u", "6ywn572U5y2H54Mmsuq6", "D2LUx25VyM9YzgvYx2j0BL9VDMvY", "ruzgx05HBK1HBLj1uwLUzW", "x2XHyMvSCW", "y3jLyxrLugXHEwvYtMfTzujN", "CMvHy2G", "B25uCNvZDgvLC2HPCenSAwnR", "r2fTzvjLC3vSDfDPBMrVDW", "CgfZC3DVCMrjBNb1Da", "uMvXsMjWvhjLzvvZAw5N", "ywrKqwLiyw5KBgvY", "sfrnterPDKvSzw1LBNq", "r2v0tMfTzuLUC3rHBMnL", "ywrKq2HPBgq", "yMXVyG", "yMDfzMzLy3q", "zgLZywjSzwq", "zgvJB2rLq2XPzw50uwLgDu5LD0rHDge", "zgf0ytPIyxnPyZTIyxnLnJqSrxDctvfwBejrvtvkvfvgvvnvou9pAKv1tNK0D0jNqKvJBuzUyJi0t0fisNzIm1flww05DvPrChDIr0y1qwz3qufbqufbuufbqufjqxe2B21rz0LbqvaVl0fNqufbqufbqufjqxe2B21rz0vbquG5refbq0fqD0fbqufbqufbqufbqunbuhDbqufbqufbqufbqufbqufbqufbqufbqufbqufrqufMme1bquLbl0fbqufbqufbqufbqufjqs9bqufbqufbqufbqufbqufbqufbqufbrufbqufdqwDbqufbqufbz0nYCwLAq0frqufMA01bquLbl0fbqufbqufbqufbqufjqs9bqunbuhDbqwDeoefbqufbqufbqufbqufbqufcqufcl1f3qufNrdHbqufbqufbqufbqufbz0q4qufjqs9bqunbuhDbqufbqufbqufbq0fbsufbrufbqufJquHcC1LxtMXHrZLZwKDwEuXUqNvAD3b3yKDgALPxAhzIr1jSy2DVqufjqs9bqunbuhDbqwDfqufbsujbqufeqwz3quf3sdHbqu1cl0fbrefMD0vbqwDbqufbqufbqufdqufrqwnToxzKqwTbzfC1A1PxwNbIBvzRqufeqwz3qufcqujPyJi1BejbqNLImJKWqufeqwz3qufdqufrqufbqwDeoefbqufbqufbqufbqufNrdHbqufbqufbqufbqufbqufbqufbqufbqunbuhDbqufbqufbqufbqufdqvb3qufNtdHbquLdl0fbqufbqufbqufbqufbqufbqufcquffqufbqufbuufbquffqufbqufbquvbqKfcAwiYnwXcqujPyJi1BejbqNvKv3HZqufbzufbCgLImJvSq25cC1LxtMXHrZLZwKDwEunUqNnzv05SyuC5C1PhvNLdz0vcqvfbqwDeoefbqufbqufbqufbqufNrdHbqufbqufbqufbqufbz0vbqufjqKfbqufbqufbqufbqufbqufbqufbqufbpt0", "CMvKDwnL", "DhjPz2DLCG", "x19PBML0vxnPBMDts2LUsuq", "sw5PDa", "u0vux1nfqvrFu1rbveu", "u2TPBgXjza", "x19Kzxn0CM95", "q2XPzw50uwLMDvjHBMTszxa", "zgf0zq", "qxnRuMvJAgfYz2vjBMzVqwDHAw4", "5OQa6io95BEY6zw/5PgblcdLH73MLBdOOQVOSipNLkG", "r2v0t25SAw5Lu0TPBKXPC3q", "z2v0", "5PI156EW77YA", "DgLTzw91DeLK", "q29SB3i", "C2v0u2vSzwn0zwq", "C2v0DgLUz1zPzxC", "B3bLBG", "yMfZzurHDge", "mtbgEwLcwvi", "DgHLBG", "DgfZA3m", "rKyWmdaWjZ7IMAu", "u0Dt", "y2XVC2u", "ica6q291BNrYEtO", "zgvIDwC", "D2LUzg93x2j0BL9ZDhLSztjFB3zLCG", "x2nOAwXKtgLZDa", "5zcV5yQO6BUe55Uw5lI75ywS6iEQ5yQO6iUM6ikj5QIH5BYp", "q2fUuMv3yxjKq291BNq", "zw50zxjxAw5KB3C", "u0TjteXFq0HbtKDf", "zgLZCgXHEq", "DxnLCKrHDge", "uhjVDg9JB2W", "C2TPBKrHDge", "C3bLBgXtzwXLy3rVCG", "tMLJA25HBwu", "u2vSzLnLyxrvAq", "y2XPy2Tiyw5KBgvY", "CMvZl2fZC2v0CY9HBMLTyxrLl2DHBwuVC2TPBgWV", "vMLLDW", "ruzF", "DhjPBq", "DgfZA0LKCW", "v2fPDeLUzM8", "D2LUzg93x2j0BL9ZDhLSztjFzg93BG", "B25ozxDpCgvUqMfN", "56Es5P2a6l+E54k55zMO5zcV5yQO77YbcG", "B25dBgLJA0j1Eq", "CgXHEuvMzMvJDa", "BxLgDw5JqNrUma", "uM9NDwvmAwTLmxyXwMHHBKPPv2LUzg93", "y2HLy2TcB3HeyxrH", "z2vK", "tgf5yq", "t2zMAwnLCKXLDMvS", "ywrKrhjHD0nOAwXK", "Aw5MBW", "u2TPBgXdyxjKuMvTyxjR", "CMvHza", "C2TPBKLUzM9FzhLUyw1Py0j0BL9VDMvY", "BwfYAW", "qwXSu2vSzwn0sgfUzenHCMrZ", "D2LUzg93x2j0BL9ZDhLSztjFBM9YBwfS", "5l+D5A2y6kEg6Akr", "Aw50zxjHy3rqCM9Wl2z4x3vPAgrFy2fVEgLL", "AgfSBf91C2vYx3DLBMHHB19VDMvY", "DMLLD1n0ywnR", "DxbKyxrLqMXLC3ntDgf0Dxm", "B25pCgvUrePdBgLJAW", "6k+36ycj5OUP5lIa5BYG6kAb5Bgv56s655Qe5OMl54Mm", "AgfUzenHCMrvAxm", "x191CgrHDgvxAw5vsq", "y2XPy2TdBg9Zzq", "5Bcp5OQe5Bcg6iEQ5yQO5l2/55sO5OMl5Rcu5y2H55U05yIW6i635B6x55UU5Qch5OMl54MmpgjYpG", "CxvLCNLtzwXLy3rVCKfSBa", "y2fYzerHDge", "sgLKzq", "BxLczW", "zwzMzwn0qMXVy2TtD2L0y2G", "tMfUshvH", "Aw5PDfrVCa", "DMLZAwjSzq", "tMvLzefUAw1HDgu", "CMvMCMvZAeLJB24", "zxHLy3v0zvn3AxrJAfnJzw5L", "C2TPBKLUzM9FzhLUyw1Py0j0BL9KB3DU", "u2v0u2vHDfn0yxrL", "Bw9KzuLK", "C2nHBgu", "AgfZqxr0ywnOtwvUDa", "y2fSBeXHDgvY", "rMXVD2vYt25tzwf0", "tg9NtwfUywDLCG", "Bgf5zxjpCMrLCG", "CMvty29YBgXuBW", "q1jfqvrfx1rbqKXfx0vwru5u", "D3v4AwvtD2L0y2G", "lMXLzNqGAw5WDxrBDhLWzt0Iy2HLy2TIB3GIxq", "z2fTzvDPzhrO", "EK9YzgvY", "sxndyw5tAg93wgLHB1nOyq", "CMvTB3zLu2vSzG", "q2XPzw50r2vUzxjHBezYB21szxa", "y2fSBejHy2TqyxjHBxm", "DhjHy2vbCMvH", "55sO5OI35RkH5PYj6ywn572U5OMl54Mm55U05O6L5ywZ6zET5lQg56Qx5y+J", "l2jPzY9IAwDtA2LUlW", "x19dBg9Zzq", "BM9Uzq", "r2v0r29VzhncEujHC2vjra", "zxHJzxb0Aw9U", "u2vUzfbIuhjVDg8", "qxv0B1jLBgvHC2vszxm", "CMvKx3nTywXSx2j0BL9VDMvY", "cGKjBgv0ihrPBwvYid0GBNvSBdSkcqLJB25ZDcbPBNrLCNzHBca9ide2oYaVlYb+nJbMChmkcqLZzwXMlM9UBwvZC2fNzsa9igz1BMn0Aw9UkguPihSkcqLPzIaOzs5KyxrHid09psaNC3rHCNqNicyMicf0Aw1LCIKGEWOjcqLMDw5JDgLVBIbSB29WkcKGEWOjcqLZzwXMlNbVC3rnzxnZywDLkcD0AwnRjYK7cGKjcs8VignVBNnVBguUzgvIDwCOj3rPy2SNkqOjcqL0Aw1LCIa9ihnLDfrPBwvVDxqOBg9VCcWGAw50zxj2ywWPoWOjcqL9cGKjcxrPBwvYid0GC2v0vgLTzw91DcHSB29WlcbPBNrLCNzHBcK7cGKjFsbLBhnLigLMicHLlMrHDgeGpt09icDZDg9WjYaMjIb0Aw1LCIKGEWOjcqLJBgvHCLrPBwvVDxqODgLTzxiPoWOjcqL0Aw1LCIa9ig51BgW7cGKjFqOjcx07cGK", "D3vNDq", "Bw9KzujVEa", "x19WDxnOsgfUzenHCMrvAxm", "yxDHCMrZ", "D2LUzg93x2j0BL9ZDhLSztjFzgLZywjSzq", "mdbgrJaWjZ7IMAm", "tM9YBwfSu2HVCej1EvDPBMrVDW", "w+EzVUwhUL3MLRdNU4tLKiG", "l2jPzY9ZDgf0AwmV", "pc9MB250pG", "C3rVCa", "u2DZrMXHDej1DhrVBG", "q2XHC3nvDgLSCW", "BgvUz3rO", "Bg9VCa", "z2v0qNrU", "x2LUBMvYsfrnta", "zxf1AxbdyxjKvuLZ", "yMXVy2TtA2LSBevMzMvJDfn3AxrJAa", "rMLNDxjL", "Aw5PDejN", "EMLYDw8VrLHFAMLHBMD3yw5FEgLHCwK", "u2DZvgv4Da", "BwLK", "u0vdx1zjua", "uMfUze1Vzgu", "q291BNrYEq", "q2fYzeXHyMvSrgvZyW", "vgfZA1jLzerVDe1HBMfNzxi", "C2HVD0nHCMrvsxm", "yMDuzxq", "C2HVD0nOyxrtzxr0Aw5NvMLLDW", "q2XPzw50txLnyxrJAeLKuMvW", "zMLNDxjLt3v0", "Aw5PDfvZAw5Nu0TPBKLe", "mdbgrKzgjZ7IMAa", "l3jLCY9YDw50Aw1Ll3bJl0f2yxrHCLnOB3CVrNvSBfnJCMvLBLnOB3CV", "C2TPBLn3AxrJAa", "Bw9KywXczW", "z29VzhnFAwq", "pgjYpG", "sxnAAgfUrMftDgf0zq", "q2fYze51BwjLCG", "y2HHDfzPzxDvsq", "AgfZ", "uM9NDwvtBwfSBe1HCfnJzw5L", "y29UzMLYBu5VCM1HBefP", "i0zdrtfbqsWJrKnfmufblcngq0uXqueSi0zdrtfbqq", "y2fSBejHy2S", "uMvTB3zLrNjVBvbHCMvUDa", "CMvTB3zLq2HPBgrbDa", "AgfSBf91C2vYx3DLBMHHB19KAxnHyMXLza", "vxnLCKrHDge", "y2XHC3nLCW", "t2XKyMfJA09UzunSAwnRrhjHD0f3zfDPBG", "yMXHy2TIzW", "zgvZDhjVEq", "koAcQcK", "AxneEw5HBwLJugXHEq", "q2XVC2u", "vMvYC2LVBK5VDgLJzvDPBMrVDW", "yNrUtgLZDa", "DxnPBMDtA2LUsuq", "BgfZDfnLBgvJDgvKsxrLBq", "zgvJB2rLuM9NDwvmAwTLrgf0yvn5BMm", "ANnVBG", "DMLZAwjPBgL0Evn0yxrL", "C2HVD01VCMviyw5KBgvY", "Aw52AxrL", "x19vCgrHDgvjBMzV", "rgfPsMK", "C2vUzfjLCq", "5OQa6io95y+V6l+B5ywL6zsb5A6A5QIH5BYp77Ym5BYa5zcV6iEQ5yQO5Pg454MmpgjYpUMuGEwUMUAOOEw8J+s4I+EcUEwhU+AkGoIdVEwpLUA2IoIhQUwkQoArUoEjJa", "ywXWAge", "z2vUzxjHBfvPCW", "Cg9ZDe1LC3nHz2u", "uMvXsMjWqxDK", "u2nLBMvnyw5Hz2vY", "u2TPBK9Wzw5szxn1BhrxAw5KB3DozxC", "r2v0qwXSvgfZA0rHDgfcEvrHC2Tjra", "ruzgx2HLAML1", "CMvZl2fZC2v0CY9HBMLTyxrLl2DHBwuVBMv3zwzMzwn0l1nRAwXSrwzMzwn0lW", "C2LTC3vU", "mY0Yntu", "zhj1Bq", "lMPZB24", "y3vYCMvUDejVC3ndAxr5sxrLBq"];
        return (_0xb05d = function () {
            return i
        })()
    }
    const _0x50b7cf = C3rHCNrFDgLTzq();

    function _0x336e(i, t) {
        const n = _0xb05d();
        return _0x336e = function (t, a) {
            let e = n[t -= 470];
            if (void 0 === _0x336e.USxLJq) {
                _0x336e.TwlThC = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x336e.USxLJq = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x336e.TwlThC(e), i[c] = e), e
        }, _0x336e(i, t)
    }
    var _0x4cee3c = [1562902854, 1678425373];
    const _0x2a7345 = new Map,
        _0x232342 = (() => {
            const i = _0x15b77c,
                t = i(504),
                n = i(869),
                a = i(950);
            return e => {
                var c;
                const o = i;
                let l = null == (c = new URL(e)) ? void 0 : c[o(812)];
                return l ? l[o(647)](o(1353)) || globalConfig[o(545)] && l[o(1449)](o(509)) ? n : globalConfig[o(730)] && l[o(647)](o(1155)) && [o(934)][o(787)]((i => l[o(1449)](o(1179) + i))) ? t : !l[o(647)](o(1451)) || [o(896), o(903), o(735), o(1150)][o(787)]((i => l[o(1449)](i))) ? e : globalConfig[o(545)] && l[o(1449)](o(1106)) || globalConfig[o(611)] && [o(1565), o(725), o(1253), o(1401)][o(787)]((i => l[o(1449)](o(1189) + i))) || globalConfig[o(730)] && [o(814), o(1351), o(666), o(601), o(548), o(995), o(870)][o(787)]((i => l[o(1449)](o(1179) + i))) || globalConfig[o(826)] && [""][o(787)]((i => l[o(1449)](o(1406) + i))) || globalConfig[o(1088)] && [""][o(787)]((i => l[o(1449)](o(1151) + i))) || globalConfig[o(1088)] && [o(658), o(774), o(530), o(1091)][o(787)]((i => l[o(1449)](o(993) + i))) || globalConfig[o(520)] && [o(1019), o(1511)][o(787)]((i => l[o(1449)](o(1195) + i))) || globalConfig[o(1088)] && [o(1447), o(888)][o(787)]((i => l[o(1449)](o(1195) + i))) ? a : e : e
            }
        })();
    async function retry(i, t = 20, n = 500, a = () => {}) {
        const e = _0x15b77c,
            c = await Promise[e(623)](i());
        c ? a(c) : t > 0 ? setTimeout((() => retry(i, t - 1, n, a)), n) : a(null);
    }

    function wait(i, t = 20, n = 500) {
        return new Promise((a => {
            retry(i, t, n, a);
        }))
    }

    function sleep(i, t) {
        return new Promise(((n, a) => {
            setTimeout((() => n(t)), i);
        }))
    }

    function redefine(i, t, n) {
        const a = _0x15b77c;
        if (typeof (null == i ? void 0 : i[t]) == a(765)) return typeof (null == i ? void 0 : i["__" + t]) != a(765) && (i["__" + t] = i[t]), Object[a(1344)](i, t, {
            ...n,
            configurable: true
        }), true
    }
    const skins = (i, t) => ["up", _0x15b77c(813), "up", _0x15b77c(948)][_0x15b77c(1286)](((n, a, e) => _0x15b77c(818) + i + "_" + (e[t] ?? n))),
        laya = {
            instance: {},
            _gamescene: null,
            flag: null,
            limit: 300,
            order: [],
            mark: () => null,
            select: () => null,
            skill: () => null,
            card: () => null,
            seat: () => null,
            btn: () => null,
            deal: () => null,
            trace: () => null,
            on() {
                var i, t;
                const n = _0x15b77c;
                null == (i = this[n(1007)]) || i[n(1193)](arguments[0]), null == (t = this[n(1007)]) || t.on(...arguments);
            },
            win(i) {
                var t, n;
                const a = _0x15b77c;
                return (null == (n = null == (t = this[a(1357)](a(867))) ? void 0 : t[a(680)]) ? void 0 : n[a(963)](i)) ?? this[a(1394)](a(916), i)
            },
            goods(i) {
                var t;
                const n = _0x15b77c;
                return (null == (t = this[n(1357)](n(475))) ? void 0 : t(i)) || _0x23f5c8[n(844)](i)
            },
            get ged() {
                const i = _0x15b77c;
                return this[i(1357)](i(512))
            },
            get scene() {
                var i;
                const t = _0x15b77c;
                return (null == (i = this[t(1357)](t(1147))) ? void 0 : i[t(1529)]) || this[t(1394)](t(912), null)
            },
            get gamescene() {
                var i;
                const t = _0x15b77c;
                return (null == (i = this[t(1357)](t(1147))) ? void 0 : i[t(884)]) ? this[t(1328)] : null
            },
            classes: Object[_0x15b77c(1421)]([_0x15b77c(1122), _0x15b77c(700), _0x15b77c(1092), _0x15b77c(519), _0x15b77c(1081), _0x15b77c(1558), _0x15b77c(1484), _0x15b77c(1448), _0x15b77c(565), _0x15b77c(900), _0x15b77c(1282)][_0x15b77c(1286)]((i => [i, void 0]))),
            caller: (() => {
                const i = _0x15b77c;
                let t = {
                    AchievementManager: [i(865)],
                    ActivityGameDataManager: [i(1302)],
                    ActivityManager: [i(582)],
                    AutoTableGameTestManager: [i(1050), i(584)],
                    BlessManager: [i(958)],
                    BlessNewManager: [i(949)],
                    ChatManager: [i(892)],
                    GameGeneralManager: [i(1057)],
                    GameGoodsManager: [i(690)],
                    GameShopManager: [i(508)],
                    GeneralSkinManager: [i(1544)],
                    GiftManager: [i(1584)],
                    GuildManager: [i(1169)],
                    LoginManager: [i(1359)],
                    LogManager: i(689),
                    MailManager: [i(1162)],
                    MatchManager: [i(1102)],
                    NewFuLiManager: [i(1400)],
                    OfficerManager: [i(645)],
                    RogueLikePveManager: [i(1134)],
                    RoomControler: [i(677)],
                    SceneManager: [i(1196), i(512)],
                    SettingManager: [i(1483), i(887), i(769)],
                    SevenDayWarManager: [i(1296), i(802), i(835)],
                    TableGameManager: [i(1553)],
                    TaskManager: [i(491)],
                    TaskRedDotManager: [i(1533), i(1293)],
                    TimerManager: [i(1408)],
                    TreasureManger: [i(662)],
                    UserInfoManger: [i(686)],
                    WelfareManger: [i(1222)],
                    WindowManager: [i(1504), i(512)]
                };

                function n(n) {
                    var a;
                    return null == (a = t[n]) ? void 0 : a[i(1083)]
                }

                function a(a) {
                    var e, c, o, l, r, u;
                    const s = i;
                    if (!n(a)) return;
                    if (typeof t[a] == s(554) && typeof t[a] == s(554)) return null == (l = null == (o = null == (c = null == (e = laya[s(1357)](s(867))) ? void 0 : e[s(849)]) ? void 0 : c[s(1411)]) ? void 0 : o[s(1423)](Boolean)) ? void 0 : l[s(1394)]((i => Object[s(862)](i)[s(1449)](t[a])));
                    let [v, x = s(802), f = null] = t[a], z = null == (u = null == (r = laya[s(1357)](x)) ? void 0 : r[s(792)]) ? void 0 : u[v];
                    return z ? (Array[s(642)](z) ? z : [z])[s(1286)]((i => null == i ? void 0 : i[s(1177)]))[s(1423)](Boolean)[s(1394)]((i => !f || Object[s(862)](i)[s(1449)](f))) : void 0
                }
                return a[i(1114)] = n, a
            })(),
            class(i, t, n) {
                var a, e, c, o, l, r, u, s, v, x, f, z, G, w, d, g, y, L, b, B, h, C, D, M, A, _, m, U, q, H, I, j, P, Y, S;
                const O = _0x15b77c;
                if (t || !this[O(1123)][i])
                    if (typeof n == O(765)) this[O(1123)][i] = n();
                    else if (n) this[O(1123)][i] = n;
                else if (this[O(1177)][O(1114)](i)) this[O(1123)][i] = this[O(1177)](i);
                else if (i == O(475)) this[O(1123)][i] = null == (a = this[O(963)](O(1355), null, 0)) ? void 0 : a[O(1309)];
                else if (i == O(1092)) this[O(1123)][i] = null == (o = null == (c = null == (e = this[O(1328)]) ? void 0 : e[O(1582)]) ? void 0 : c[O(594)]) ? void 0 : o[O(849)];
                else if (i == O(519)) this[O(1123)][i] = null == (u = null == (r = null == (l = this[O(1328)]) ? void 0 : l[O(1582)]) ? void 0 : r[O(852)]) ? void 0 : u[O(849)];
                else if (i == O(1081)) this[O(1123)][i] = null == (x = null == (v = null == (s = this[O(1328)]) ? void 0 : s[O(1582)]) ? void 0 : v[O(797)]) ? void 0 : x[O(849)];
                else if (i == O(1484)) this[O(1123)][i] = null == (G = null == (z = null == (f = this[O(1328)]) ? void 0 : f[O(1582)]) ? void 0 : z[O(1186)]) ? void 0 : G[O(849)];
                else if (i == O(1558)) this[O(1123)][i] = null == (g = null == (d = null == (w = this[O(1357)](O(1484))) ? void 0 : w[O(1419)]) ? void 0 : d[O(1314)]) ? void 0 : g[O(849)];
                else if (i == O(700)) this[O(1123)][i] = null == (b = null == (L = null == (y = this[O(1357)](O(1558))) ? void 0 : y[O(1419)]) ? void 0 : L[O(1314)]) ? void 0 : b[O(849)];
                else if (i == O(1122)) this[O(1123)][i] = null == (C = null == (h = null == (B = this[O(963)](O(1370), null, 0, (i => {
                    var t;
                    return null == (t = null == i ? void 0 : i[O(1038)]) ? void 0 : t.call(i)
                }))) ? void 0 : B[O(986)]) ? void 0 : h[O(1314)]) ? void 0 : C[O(849)];
                else if (i == O(887)) this[O(1123)][i] = null == (D = this[O(1357)](O(1122))) ? void 0 : D[O(887)];
                else if (i == O(916)) this[O(1123)][i] = null == (M = this[O(963)](O(1495), null, 0)) ? void 0 : M[O(880)];
                else if (i == O(768)) this[O(1123)][i] = null == (A = this[O(963)](O(1555), null, 0)) ? void 0 : A[O(880)];
                else if (i == O(512)) this[O(1123)][i] = null == (_ = this[O(963)](O(1495), null, 0)) ? void 0 : _[O(1007)];
                else if (i == O(802)) this[O(1123)][i] = null == (m = this[O(1357)](O(867))) ? void 0 : m[O(470)];
                else if (i == O(688)) redefine(this[O(1357)](O(887)), O(1369), {
                    value: () => -1
                }), redefine(this[O(1357)](O(1047)), O(1571), {
                    value: () => 0
                }), this[O(963)](O(776), {
                    Id: 13000001
                }, 0, (i => null == i ? void 0 : i[O(1002)]())), this[O(1123)][i] = confirm({
                    title: O(1437)
                }, "取消", null, 0), redefine(this[O(1357)](O(1047)), O(1571), {
                    value: null == (U = this[O(1357)](O(1047))) ? void 0 : U[O(1338)]
                }), delete this[O(1357)](O(887))[O(1369)];
                else if ((i == O(900) || i == O(1282) || i == O(1448) || i == O(565)) && (this[O(1123)][i] = null == (I = null == (H = null == (q = this[O(670)]) ? void 0 : q[O(991)]) ? void 0 : H[O(1192)](i == O(900) ? 2 : 4)) ? void 0 : I[O(849)], !this[O(1123)][i])) try {
                    const i = this[O(963)](O(579));
                    if (!(null == i ? void 0 : i[O(493)])) return;
                    Object[O(832)](i, {
                        skinData: {
                            skinBaseVo: {}
                        },
                        generalinfo: {
                            ItemID: 1
                        }
                    }), i[O(552)](), i[O(493)][O(1365)](), i[O(493)][O(481)](), this[O(1123)][O(1448)] = null == (j = i[O(1318)]) ? void 0 : j[O(849)], this[O(1123)][O(565)] = null == (P = i[O(671)]) ? void 0 : P[O(849)], this[O(1123)][O(900)] = null == (Y = i[O(493)][O(947)]) ? void 0 : Y[O(849)], this[O(1123)][O(1282)] = null == (S = i[O(493)][O(740)]) ? void 0 : S[O(849)], this[O(561)](O(579));
                } catch (N) {}
                return this[O(1123)][i]
            },
            get(i, t, n = false, a) {
                var e;
                const c = _0x15b77c;
                if (i in this[c(1123)]) return this[c(1357)](i) ? new(this[c(1123)][i])(t) : void 0;
                if (!this[c(496)][i]) {
                    this[c(561)](i);
                    let n = Laya[c(1082)][c(873)](i, t);
                    if ((null == n ? void 0 : n[c(679)]) == c(987)) return n;
                    if (typeof (null == n ? void 0 : n[c(954)]) == c(765) && null !== t) try {
                        n[c(954)]();
                    } catch (o) {
                        console[c(1359)](c(1234) + i + c(562) + o[c(1164)]);
                    }
                    this[c(496)][i] = n;
                }
                return (null == (e = this[c(496)][i]) ? void 0 : e[c(965)]) && clearTimeout(this[c(496)][i][c(965)]), typeof a === c(765) && a(this[c(496)][i]), !1 !== n && this[c(561)](i, n), this[c(496)][i]
            },
            del: (() => {
                function i(i) {
                    var t, n;
                    const a = _0x336e;
                    if (this[a(496)][i]) {
                        if (!this[a(496)][i][a(651)]) try {
                            typeof this[a(496)][i][a(1129)] == a(765) ? this[a(496)][i][a(1129)]() : null == (n = (t = this[a(496)][i])[a(1126)]) || n.call(t);
                        } catch (e) {
                            console[a(1359)](a(1234) + i + a(738));
                        }
                        delete this[a(496)][i][a(965)], delete this[a(496)][i];
                    }
                }
                return function (t, n = true) {
                    const a = _0x336e;
                    this[a(496)][t] && !1 !== n && null !== n && (this[a(496)][t][a(965)] && (clearTimeout(this[a(496)][t][a(965)]), delete this[a(496)][t][a(965)]), !0 === n ? i[a(1323)](this, t) : this[a(496)][t][a(965)] = setTimeout((() => {
                        i[a(1323)](this, t);
                    }), n));
                }
            })(),
            find: (() => {
                const i = _0x15b77c,
                    t = t => Array[i(642)](t) && 1 == t[i(1083)] ? t[0] : t,
                    n = t => Object[i(1419)][i(577)][i(1323)](t) === i(1157);

                function a(n, a) {
                    var e, c, o, l;
                    const r = i;
                    if (a in n) return n[a]; {
                        let i = (null == (e = null == n ? void 0 : n[r(701)]) ? void 0 : e[r(1423)](Boolean)) || [];
                        if (null == a ? void 0 : a[r(647)](r(1387))) {
                            let t = [r(762), r(499), r(912), r(1385), r(916), r(1560), r(768)][r(1334)](a);
                            i = i[r(1423)]((i => i[r(1048)] == t));
                        } else if ((null == a ? void 0 : a[r(647)](r(994))) && (null == (o = null == (c = null == n ? void 0 : n[r(1021)]) ? void 0 : c[r(980)]) ? void 0 : o[r(1449)](a))) {
                            let t = n[r(1021)][r(980)][r(1286)](((i, t) => i == a ? t : -1))[r(1423)]((i => i > -1));
                            i = null == (l = n[r(1021)][r(734)]) ? void 0 : l[r(1423)](((i, n) => i && t[r(1449)](n)));
                        } else a && (i = i[r(1423)]((i => {
                            var t;
                            return i[r(1418)] == a || i[r(617)] == a || (null == (t = i[r(849)]) ? void 0 : t[r(1418)]) == a
                        })));
                        return (null == i ? void 0 : i[r(1083)]) ? t(i) : []
                    }
                }
                return function (...e) {
                    const c = i;
                    let o = n(e[0]) ? e[c(480)]() : Laya[c(1231)],
                        l = e[c(951)](((i, e) => {
                            const o = c;
                            return i instanceof Object ? Array[o(642)](i) ? i[o(1083)] ? Array[o(642)](e) ? t(i[o(1210)]((i => e[o(1210)]((t => a(i, t)))))) : t(i[o(1210)]((i => a(i, e)))) : [] : n(i) ? Array[o(642)](e) ? t(e[o(1210)]((t => a(i, t)))) : t(a(i, e)) : [] : []
                        }), o);
                    return 0 == (null == l ? void 0 : l[c(1083)]) ? null : l
                }
            })(),
            chat(i = "", t = false) {
                var n, a, e;
                const c = _0x15b77c;
                if (!t) {
                    let t = (null == (n = this[c(1328)]) ? void 0 : n[c(1113)]) || this[c(1394)](this[c(1328)], null, c(1113));
                    return (null == t ? void 0 : t[c(927)]) && (t[c(927)][c(1591)] = i)
                }
                typeof t === c(554) && (i = t + ":" + btoa(i), t = true), !0 === t && (t = (null == (e = null == (a = this[c(670)]) ? void 0 : a[c(1113)]) ? void 0 : e[c(927)]) ? 2 : 7), typeof t === c(1256) && this[c(1357)](c(802))[c(1066)](104001, {
                    chatmsg: i,
                    channel: t,
                    random: 0,
                    msglen: 0,
                    usingGoodsBaseid: 0,
                    msgkind: 0,
                    scene: 0,
                    desNickname: "",
                    bEmoji: false
                });
            },
            clickBuilder(i, t, n = i => i, a = (i, t) => (i[_0x15b77c(772)](), t)) {
                if (!i) return null;

                function e(i, n = true) {
                    return i ? !(n && !i[t]) && a(i, n) : null
                }
                return function (...a) {
                    const c = _0x336e;
                    let o = typeof a[0] == c(1404) ? a[c(480)]() : null;
                    if (0 == a[c(1083)]) a = Object[c(862)](i);
                    else {
                        let t = i[c(1286)](n);
                        a[c(517)]((i => t[c(1449)](i))) && (a = a[c(1286)]((i => t[c(1334)](i))));
                    }
                    if (typeof o == c(1404)) return a[c(1286)]((t => e(i[t], o)));
                    for (let n of a) {
                        let a = i[n];
                        if (null == a ? void 0 : a[t]) return e(a)
                    }
                    return null
                }
            },
            keepClick(i, t = () => null) {
                var n, a, e, c;
                const o = _0x15b77c,
                    l = null == (n = i[o(1285)]) ? void 0 : n[o(956)];
                if (!l) return null;
                const r = _0x2a7345[o(1114)](l) && !0 === _0x2a7345[o(963)](l)[o(606)];
                return console[o(585)](o(744), {
                    "技能ID": l,
                    "技能名称": null == (a = i[o(1285)]) ? void 0 : a[o(908)],
                    "是否正在运行": r
                }), timer[o(1550)](o(522) + l), !_0x2a7345[o(1114)](l) && (_0x2a7345[o(624)](l, {
                    start: false,
                    skillName: null == (e = i[o(1285)]) ? void 0 : e[o(908)]
                }), _0x390b82("长按" + (null == (c = i[o(1285)]) ? void 0 : c[o(908)]) + o(1142), o(827), 5e3, o(1276), null)), i[o(606)] = i[o(1080)] = false, i.AK = function (n) {
                    var a, e;
                    const c = o;
                    _0x2a7345[c(624)](l, {
                        start: n,
                        skillName: null == (a = i[c(1285)]) ? void 0 : a[c(908)]
                    }), console[c(585)](c(766), _0x2a7345), console[c(585)](c(961), {
                        "技能ID": l,
                        "技能名称": null == (e = i[c(1285)]) ? void 0 : e[c(908)],
                        "是否正在运行": n
                    }), this[c(1285)] && (this[c(606)] = typeof n == c(1404) ? n : !this[c(606)], !1 === this[c(606)] ? (timer[c(1550)](c(522) + this[c(1285)][c(956)]), this[c(847)](...skins(c(811)))) : (timer[c(1084)](c(522) + this[c(1285)][c(956)], (() => {
                        var i, n, a, e, o, l;
                        const r = c;
                        let u = null == (n = null == (i = laya[r(670)]) ? void 0 : i[r(991)]) ? void 0 : n[r(989)];
                        if (!this[r(1285)] || !this[r(1285)][r(908)]) return void t();
                        if ((null == u ? void 0 : u[r(1036)]) && (null == (a = null == u ? void 0 : u[r(654)]) ? void 0 : a[r(1086)]) == r(551)) {
                            let i = u[r(1131)][r(1394)]((i => {
                                var t;
                                return (null == (t = i[r(622)]) ? void 0 : t[r(861)]) == this[r(1285)][r(908)]
                            }));
                            (null == i ? void 0 : i[r(1523)]) && u[r(1216)](i);
                        }
                        let s = null == (o = null == (e = laya[r(670)]) ? void 0 : e[r(991)]) ? void 0 : o[r(1454)];
                        this[r(720)] ? this[r(1347)](true) : (null == s ? void 0 : s[r(1036)]) && (null == (l = null == s ? void 0 : s[r(654)]) ? void 0 : l[r(1086)]) == r(1561) + this[r(1285)][r(908)] + r(1079) && s[r(1479)][r(772)](), t();
                    }), 250), this[c(847)](...skins(c(1360)))));
                }, i.on(Laya[o(653)][o(1500)], i, (function () {
                    const i = o;
                    if (this[i(606)]) return this.AK(false);
                    this[i(687)] = setTimeout((() => this.AK(true)), 1e3);
                })), i.on(Laya[o(653)][o(795)], i, (function () {
                    clearTimeout(this[o(687)]);
                })), i.on(Laya[o(653)][o(1252)], i, (function () {
                    clearTimeout(this[o(687)]);
                })), r && i.AK(true), i[o(1285)][o(908)]
            },
            reset() {
                const i = _0x15b77c;
                _0x2a7345[i(1550)](), console[i(585)](i(798)), this[i(518)](null), timer[i(1550)](...Object[i(862)](timer[i(973)])[i(1423)]((t => t[i(1336)](i(522))))), this[i(540)] = null, this[i(560)] = 0, this[i(1506)] = [], this[i(1015)] = this[i(915)] = this[i(810)] = this[i(1590)] = this[i(1391)] = this[i(544)] = this[i(1297)] = this[i(729)] = () => null;
            },
            init(i) {
                var t, n, a, e, c, o;
                const l = _0x15b77c;
                if (null == (a = null == (n = null == (t = this[l(540)]) ? void 0 : t[l(845)]) ? void 0 : n[l(1409)]) ? void 0 : a[l(1083)]) return true;
                let r = this[l(670)];
                if (!r) return null;
                null == (e = r[l(1345)]) || e[l(789)](2);
                let u = null == (c = r[l(845)]) ? void 0 : c[l(1409)],
                    s = null == (o = r[l(1345)]) ? void 0 : o[l(1059)];
                return !(!(null == u ? void 0 : u[l(1083)]) || !s) && (this[l(560)] = 290, this[l(540)] = r, _0x50b7cf.v && laya[l(1007)][l(1310)](l(842)), _0x4bcafd(), redefine(this[l(670)][l(1436)], l(614), {
                    value: function () {
                        const i = l;
                        this[i(1477)][i(486)](this, arguments), setTimeout((() => laya[i(1007)][i(1310)](i(1435))));
                    }
                }), this[l(915)] = i => {
                    const t = l;
                    let n = s[t(724)][t(1284)](s[t(724)][t(1307)] - 1),
                        a = s[t(1589)](i + t(1110));
                    a ? (a.y = n.y + n[t(1457)] || 3, s[t(724)][t(945)](a), Laya[t(1228)][t(1045)](s, s[t(1049)])) : console[t(1359)](t(799), i);
                }, i || this[l(1409)](), true)
            },
            seatUIs() {
                var i, t, n, a;
                const e = _0x15b77c;
                if (this[e(1269)](true), !this[e(540)]) return null;
                let c = 290 == this[e(560)],
                    o = null == (i = this[e(670)][e(845)]) ? void 0 : i[e(1409)],
                    l = null == (t = null == o ? void 0 : o[e(1286)]((i => i[e(544)]))) ? void 0 : t[e(1423)]((i => !i[e(790)]));
                if (!room[e(736)] && !(null == (n = null == l ? void 0 : l[e(1423)]((i => i[e(1471)]))) ? void 0 : n[e(1083)])) return [];
                let r = l[e(1286)](((i, t, n) => {
                    var a, c;
                    return {
                        seat: i,
                        seatID: i[e(1235)],
                        order: i[e(1471)] - 1,
                        figure: room[e(736)] ? i[e(1096)] == n[0][e(1096)] || -!!i[e(1096)] : i[e(1592)] == n[0][e(1592)],
                        ai: (null == (a = null == i ? void 0 : i[e(1312)]) ? void 0 : a[e(1485)]) < 4e9 ? 0 : (null == (c = i[e(1312)]) ? void 0 : c[e(568)]) ? 2 : 1
                    }
                }));
                room[e(1409)][e(1286)]((i => i[e(1506)]))[e(695)](",") != r[e(1286)]((i => i[e(1506)]))[e(695)](",") && room[e(1337)](r), !0 === c && r[e(787)]((({
                    ai: i
                }) => i)) && _0x5ec234(e(1578)), r = r[e(1286)]((i => ({
                    ...i,
                    index: this[e(1506)][e(1334)](i[e(590)])
                })))[e(1502)](((i, t) => i[e(1592)] - t[e(1592)] || t.ai - i.ai || i[e(1235)] - t[e(1235)] || i[e(1506)] - t[e(1506)])), this[e(1506)] = r[e(1286)]((i => i[e(590)]));
                let u = this[e(670)][e(991)],
                    s = u[e(1562)],
                    v = null == s ? void 0 : s[e(1581)],
                    x = null == (a = u[e(1454)]) ? void 0 : a[e(864)],
                    f = u[e(1393)],
                    z = u[e(989)];
                if (!c) return true;
                if (!(v && x && f && z)) return false;
                this[e(560)]--;
                let G = this[e(1200)](z[e(1131)], e(1523), (i => {
                    var t;
                    return null == (t = i[e(622)]) ? void 0 : t[e(1542)]
                }), ((i, t) => {
                    var n;
                    const a = e;
                    return z[a(1216)](i), null == (n = i[a(622)]) ? void 0 : n[a(1542)]
                }));
                this[e(810)] = (i, ...t) => {
                    var n;
                    const a = e;
                    if (z[a(1036)] && (!i || (null == (n = z[a(1248)]) ? void 0 : n[a(956)]) == i)) return G(...t || [])
                }, this[e(1590)] = this[e(1200)](f, e(720), (i => {
                    var t;
                    return null == (t = i[e(1285)]) ? void 0 : t[e(956)]
                }), ((i, t) => {
                    var n;
                    const a = e;
                    return i[a(1347)](t), null == (n = i[a(1285)]) ? void 0 : n[a(956)]
                }));
                let w = this[e(1200)](v, e(720), (i => {
                    var t;
                    return null == (t = i[e(559)]) ? void 0 : t[e(692)]
                }), ((i, t) => {
                    var n;
                    const a = e;
                    return i[a(967)](t), null == (n = i[a(559)]) ? void 0 : n[a(692)]
                }));
                this[e(1391)] = (...i) => {
                    var t, n;
                    const a = e;
                    return (null == i ? void 0 : i[a(1083)]) ? w(arguments) : (null == (t = s[a(1016)]) || t.call(s), null == (n = s[a(1581)]) ? void 0 : n[a(1423)]((i => i[a(868)]))[a(1286)]((i => {
                        var t;
                        return null == (t = i[a(559)]) ? void 0 : t[a(692)]
                    })))
                }, this[e(544)] = this[e(1200)](o, e(720), (i => {
                    var t;
                    return null == (t = i[e(544)]) ? void 0 : t[e(1235)]
                }), ((i, t) => {
                    var n;
                    const a = e;
                    return i[a(544)][a(1347)](t), null == (n = i[a(544)]) ? void 0 : n[a(1235)]
                })), this[e(1297)] = this[e(1200)](x, e(1523), (i => i[e(1418)]), ((i, t) => {
                    const n = e;
                    return i[n(772)](), i[n(1418)]
                }));
                let d = i => {
                    var t;
                    return (null == (t = _0x39b9a4[Array[e(642)](i) ? i[0] : i]) ? void 0 : t[e(1418)]) || ""
                };
                this[e(729)] = (i = this[e(1506)], t = [0, 1, 2, 3]) => {
                    var n;
                    const a = e;
                    this[a(810)](...9 == this[a(1206)] ? [0, 0] : []);
                    let c = d(this[a(1391)]());
                    ["闪电", "借刀"][a(1449)](c) ? c = d(this[a(1391)](true)): ["铁索"][a(1449)](c) ? i = [false] : ["无懈", "国无"][a(1449)](c) && (null == (n = room[a(1409)][a(1394)]((({
                        seatID: i
                    }) => i == game[a(1548)]))) ? void 0 : n.ai) < 2 ? t = [3, 1, 0, 2] : (["桃", "粽", "生死"][a(1449)](c) && room[a(1409)][a(787)]((({
                        seat: i,
                        ai: t,
                        figure: n
                    }) => t > 1 && !n && !i[a(854)] && i[a(1441)] <= 0)) || ["落井"][a(1449)](c) && room[a(1409)][a(787)]((({
                        seat: i,
                        ai: t,
                        figure: n
                    }) => (t <= 1 || n) && !i[a(854)] && i[a(1441)] <= 0))) && (t = [1, 2, 3, 0]), 9 == this[a(1206)] && (t = [3, 2, 1, 0]), null === this[a(1297)](...t[a(931)](0, 1)) && (this[a(544)](...i), this[a(1297)](...t));
                }, this[e(1015)] = (i, t, n = (i, t) => i == t, a = v) => 0 != i && setTimeout((() => {
                    const c = e;
                    Array[c(642)](i) && (a = i[c(1286)]((i => s[c(1197)](i, false, a)))[c(1423)](Boolean)), a[c(875)]((i => {
                        var a, e, o;
                        return null == (o = null == i ? void 0 : i[c(1573)]) ? void 0 : o.call(i, ((null == (e = null == (a = null == i ? void 0 : i[c(1097)]) ? void 0 : a[c(1378)]("\n")) ? void 0 : e[c(1286)]((i => n(i, t) ? "" : i))) || [])[c(1428)](t)[c(1423)](Boolean)[c(695)]("\n"))
                    }));
                })), this[e(518)](globalState[e(1187)] || false), u[e(544)].on(e(984), this, this[e(780)]), this[e(780)](), this[e(1103)]();
            },
            skills() {
                var i, t, n, a, e, c, o, l, r;
                const u = _0x15b77c;
                this[u(1103)]();
                let s = null == (t = null == (i = this[u(670)]) ? void 0 : i[u(991)]) ? void 0 : t[u(1393)];
                if (!s || !Array[u(642)](s)) return;
                for (let x of s) 3324 == (null == (n = x[u(1285)]) ? void 0 : n[u(956)]) && (null == (a = x[u(1285)]) ? void 0 : a[u(683)]) ? x[u(847)](...skins(u(1429), 1)) : 3324 == (null == (e = x[u(1285)]) ? void 0 : e[u(956)]) && !(null == (c = x[u(1285)]) ? void 0 : c[u(683)]) && x[u(847)](...skins(u(811)));
                let v = this[u(670)][u(991)][u(1562)];
                this[u(1206)] && room[u(736)] && s[u(875)]((i => !i[u(1199)] && i[u(1521)] && !i[u(1340)] && !i[u(720)] && i[u(992)]())), _0x50b7cf.v && globalConfig[u(536)] && laya[u(1007)][u(792)][u(842)] && s[u(1286)]((i => {
                    var t, n, a, e, c;
                    const o = u;
                    let l = null == (t = i[o(1285)]) ? void 0 : t[o(956)];
                    return l ? 769 == l || 62 == l || 726 == l || 3295 == l || 3310 == l ? this[o(1166)](i) : 295 == l ? this[o(1166)](i, (() => this[o(810)](295, 2))) : 250 == l ? this[o(1166)](i, (() => {
                        var i, t, n, a;
                        const e = o;
                        let c = null == (t = null == (i = this[e(670)]) ? void 0 : i[e(991)]) ? void 0 : t[e(989)];
                        if ((null == c ? void 0 : c[e(1036)]) && (null == (n = c[e(1248)]) ? void 0 : n[e(956)]) == l) {
                            let i = (null == (a = room[e(631)]) ? void 0 : a[e(1449)](game[e(1548)])) ? e(473) : e(728),
                                t = c[e(1131)][e(1394)]((t => {
                                    var n;
                                    return (null == (n = t[e(622)]) ? void 0 : n[e(861)]) == i
                                }));
                            (null == t ? void 0 : t[e(1523)]) && i && c[e(1216)](t);
                        }
                    })) : 784 == l ? this[o(1166)](i, (() => {
                        var i, t, n, a, e;
                        const c = o;
                        let r = null == (t = null == (i = this[c(670)]) ? void 0 : i[c(991)]) ? void 0 : t[c(989)];
                        if ((null == r ? void 0 : r[c(1036)]) && (null == (n = r[c(1248)]) ? void 0 : n[c(956)]) == l) {
                            let i = (null == (e = null == (a = r[c(654)]) ? void 0 : a[c(1086)]) ? void 0 : e[c(1449)](c(1127))) ? c(907) : c(1332),
                                t = r[c(1131)][c(1394)]((t => {
                                    var n;
                                    return (null == (n = t[c(622)]) ? void 0 : n[c(861)]) == i
                                }));
                            (null == t ? void 0 : t[c(1523)]) && i && r[c(1216)](t);
                        }
                    })) : 445 == l || 49 == l ? this[o(1166)](i, (() => {
                        var i, t, n, a, e;
                        const c = o;
                        (null == (t = null == (i = null == v ? void 0 : v[c(1306)]) ? void 0 : i[c(1285)]) ? void 0 : t[c(956)]) == l && ((null == (n = v[c(1306)]) ? void 0 : n[c(1209)]) == c(1024) && (this[c(1391)](), this[c(1297)](0)), (null == (e = null == (a = v[c(1306)]) ? void 0 : a[c(1209)]) ? void 0 : e[c(1449)](c(1127))) && this[c(1297)](1));
                    })) : 101 == l || 3269 == l || 102 == l || 891 == l ? this[o(1166)](i, (() => {
                        var i, t, n, a, e, c, r;
                        const u = o;
                        (null == (t = null == (i = null == v ? void 0 : v[u(1306)]) ? void 0 : i[u(1285)]) ? void 0 : t[u(956)]) == l && (null == (n = v[u(1016)]) || n.call(v), null == (r = null == (c = null == (e = null == (a = this[u(670)]) ? void 0 : a[u(991)]) ? void 0 : e[u(1454)][u(1479)]) ? void 0 : c[u(772)]) || r.call(c));
                    })) : 48 != l && 719 != l || !(null == (n = i[o(544)]) ? void 0 : n[o(523)](45)) && !(null == (a = i[o(544)]) ? void 0 : a[o(523)](875)) ? 79 != l && 883 != l || !(null == (e = i[o(544)]) ? void 0 : e[o(523)](45)) && !(null == (c = i[o(544)]) ? void 0 : c[o(523)](875)) ? void 0 : this[o(1166)](i, (() => {
                        var i, t, n, a, e, c, r;
                        const u = o;
                        (null == (t = null == (i = null == v ? void 0 : v[u(1306)]) ? void 0 : i[u(1285)]) ? void 0 : t[u(956)]) == l && (null == (a = null == (n = v[u(1306)]) ? void 0 : n[u(1209)]) ? void 0 : a[u(1449)](u(1127))) && ([3, 4][u(1449)](null == (r = _0x39b9a4[null == (c = null == (e = Zone[u(1475)][u(1153)]) ? void 0 : e[0]) ? void 0 : c.id]) ? void 0 : r[u(839)]) ? this[u(1297)](1) : (this[u(1391)](), this[u(1297)](0)));
                    })) : this[o(1166)](i, (() => {
                        var t, n, a, e, c, r, u, s, x, f;
                        const z = o;
                        (null == (n = null == (t = null == v ? void 0 : v[z(1306)]) ? void 0 : t[z(1285)]) ? void 0 : n[z(956)]) == l && (null == (e = null == (a = v[z(1306)]) ? void 0 : a[z(1209)]) ? void 0 : e[z(1449)](z(1127))) && ([3, 4][z(1449)](null == (u = _0x39b9a4[null == (r = null == (c = Zone[z(1475)][z(1153)]) ? void 0 : c[0]) ? void 0 : r.id]) ? void 0 : u[z(839)]) ? this[z(1297)](1) : (this[z(1391)](null == (f = null == (x = null == (s = null == i ? void 0 : i[z(544)]) ? void 0 : s[z(886)]) ? void 0 : x[z(1394)]((i => 2 == i[z(966)]))) ? void 0 : f[z(692)]), this[z(1297)](0)));
                    })) : null
                })), null == (r = null == (l = null == (o = this[u(670)]) ? void 0 : o[u(991)]) ? void 0 : l[u(557)]) || r[u(875)]((i => {
                    const t = u;
                    void 0 === (null == i ? void 0 : i.n) && [2033, 2034, 2035, 2036, 2037, 2038, 2048, 2049, 2050, 2100, 2101, 2108, 2109, 2110, 2196, 2197, 2300, 2301, 2312, 2313, 2317, 2319, 2320, 2321, 2322][t(1449)](i[t(1202)]) && (i.n = 0, Object[t(1344)](i, t(683), {
                        get: function () {
                            const i = t;
                            return this[i(1270)][i(683)]
                        },
                        set: function (i) {
                            const n = t;
                            this[n(1270)][n(683)] = i, i && (this[n(1204)] = ++this.n);
                        }
                    }));
                }));
            },
            figureOut() {
                var i, t, n, a, e, c, o, l, r;
                const u = _0x15b77c;
                let s = laya[u(1357)](u(584));
                if ([5, 6, 7][u(1449)](null == (i = null == s ? void 0 : s[u(569)]) ? void 0 : i[u(1095)]) && !room[u(1184)]) {
                    let i = null == (n = null == (t = s[u(1321)]) ? void 0 : t[u(1289)]) ? void 0 : n[u(1286)]((i => {
                        var t;
                        return null == (t = null == i ? void 0 : i[u(1312)]) ? void 0 : t[u(1358)]
                    }));
                    8 == (null == i ? void 0 : i[u(1083)]) && (null == (c = null == (e = null == (a = this[u(670)]) ? void 0 : a[u(845)]) ? void 0 : e[u(1409)]) || c[u(875)](((t, n) => {
                        const a = u;
                        t[a(538)][a(1089)] || (t[a(538)][a(1089)] = [0, 1, 2, 2, 4, 3, 3, 3, 3][i[a(1334)](t[a(544)][a(1312)][a(1358)]) + 1] || 0);
                    })));
                }
                null == (r = null == (l = null == (o = this[u(670)]) ? void 0 : o[u(845)]) ? void 0 : l[u(1409)]) || r[u(875)]((({
                    seat: i,
                    otherTopManager: t
                }) => {
                    var n, a;
                    const e = u;
                    null == (a = null == t ? void 0 : t[e(923)]) || a.call(t, (null == (n = null == i ? void 0 : i[e(1312)]) ? void 0 : n[e(1485)]) < 4e9);
                }));
            },
            yanJiao(i, t = 1) {
                var n;
                const a = _0x15b77c,
                    e = this[a(1394)](a(916), a(871));
                if (!e) return;
                if ((null == (n = e[a(544)]) ? void 0 : n[a(1235)]) != room[a(1515)]) return false;
                if (t % 2 != 0) {
                    let i = e[a(1539)][a(1210)]((i => i));
                    return e[a(1539)][0][a(1183)](0, 1 / 0, ...i), e[a(1539)][1][a(1183)](0, 1 / 0), e[a(1539)][2][a(1183)](0, 1 / 0), void e[a(500)]()
                }
                let c = e[a(1539)][a(1210)]((i => i))[a(951)](((i, t) => {
                    const n = a;
                    return i[t[n(559)][n(1112)]][n(1440)](t), i
                }), Array[a(791)]({
                    length: 14
                }, (() => [])));
                e[a(1539)][0][a(1183)](0, 1 / 0, ...i[2][a(1210)](((i, t) => i && t ? c[t][a(1183)](0, i) : []))), e[a(1539)][1][a(1183)](0, 1 / 0, ...i[t / 2][a(1210)](((i, t) => i && t ? c[t][a(1183)](0, i) : []))), e[a(1539)][2][a(1183)](0, 1 / 0, ...i[1 - t / 2][a(1210)](((i, t) => i && t ? c[t][a(1183)](0, i) : []))), e[a(500)]();
            },
            async autoR(i) {
                var t, n, a, e, c, o, l, r, u, s;
                const v = _0x15b77c;
                let x = this[v(1328)];
                if ((null == x ? void 0 : x[v(1238)]) == v(1363)) globalState[v(1187)] = 11, null == (n = null == (t = null == x ? void 0 : x[v(1345)]) ? void 0 : t[v(1522)]) || n.call(t), wait((() => {
                    var i, t;
                    return null == (t = null == (i = this[v(670)]) ? void 0 : i[v(613)]) ? void 0 : t[v(1083)]
                }))[v(972)]((i => {
                    var t, n;
                    return i && (null == (n = null == (t = this[v(670)]) ? void 0 : t[v(583)]) ? void 0 : n.call(t, 1))
                }));
                else if ([28][v(1449)](null == (a = null == x ? void 0 : x[v(600)]) ? void 0 : a[v(1042)])) {
                    globalState[v(1187)] = 28, x[v(600)][v(1201)]();
                    let i = await wait((() => this[v(786)](v(1161))));
                    if (typeof (null == i ? void 0 : i[v(1549)]) !== v(765)) return null;
                    i[v(1549)]();
                } else {
                    if (![74, 84][v(1449)](null == (e = null == x ? void 0 : x[v(600)]) ? void 0 : e[v(1042)])) return _0x5ec234(v(1268)), false; {
                        x[v(600)][v(1460)]();
                        const i = await wait((() => this[v(786)](v(830))));
                        if (!i) return null;
                        null == (c = i[v(1137)]) || c.call(i), (null == (l = null == (o = i[v(1071)]) ? void 0 : o[v(935)]) ? void 0 : l[v(1083)]) && (i[v(1071)][v(1398)] = i[v(1071)][v(935)][v(1083)] - 1), i[v(547)] && (i[v(547)][v(1398)] = 1), i[v(1388)] && (i[v(1388)][v(868)] = true), i[v(940)] && (i[v(940)][v(1591)] = v(794)), await sleep(1e3), null == (r = i[v(1390)]) || r.call(i);
                        const t = await wait((() => this[v(1394)](v(912), v(591))));
                        if (!(null == (s = null == (u = null == t ? void 0 : t[v(1538)]) ? void 0 : u[v(1171)]) ? void 0 : s[v(1083)])) return null;
                        let n = t[v(1538)][v(1171)][v(1423)]((i => !i[v(998)]))[v(931)](-1)[0];
                        t[v(1538)][v(595)](n), t[v(1538)][v(874)]();
                    }
                }
                return true
            },
            async autoS(i) {
                var t, n, a, e, c, o, l, r, u, s, v, x, f, z, G;
                const w = _0x15b77c;
                await wait((() => {
                    var i;
                    return null == (i = this[w(1357)](w(1147))) ? void 0 : i[w(715)]
                }), i, 1e3);
                let d = this[w(1328)],
                    g = null == (n = null == (t = null == d ? void 0 : d[w(1538)]) ? void 0 : t[w(1171)]) ? void 0 : n[w(1083)];
                if (!g || !(null == d ? void 0 : d[w(1452)])) return null;
                await sleep(2e3);
                let y = null == (c = null == (e = null == (a = null == d ? void 0 : d[w(1582)]) ? void 0 : a[w(1383)]) ? void 0 : e[w(1591)]) ? void 0 : c[w(1449)](w(1443));
                if (y || null == (l = null == (o = d[w(1185)]) ? void 0 : o[w(1023)]) || l.call(o), !(null == (u = null == (r = d[w(1452)]) ? void 0 : r[w(885)]) ? void 0 : u[w(1036)])) return (null == (v = null == (s = d[w(1452)]) ? void 0 : s[w(1278)]) ? void 0 : v[w(1036)]) && (null == (f = (x = d[w(1452)])[w(1476)]) || f.call(x)), y && 9 == globalState[w(1187)] && (globalState[w(1187)] = 29), true;
                if (y) {
                    globalState[w(1187)] = 28;
                    for (let i of d[w(1538)][w(1171)][w(1423)]((i => !i[w(998)] && i[w(1333)] < g / 2))) d[w(1538)][w(595)](i), d[w(1538)][w(942)](1, i), await sleep(200);
                    await sleep(1e3);
                } else {
                    if (!0 === globalState[w(1187)])
                        for (let i of d[w(1538)][w(1171)][w(1423)]((i => !i[w(998)] && i[w(1333)] >= g / 2))) d[w(1538)][w(595)](i), d[w(1538)][w(942)]((null == (z = laya[w(1357)](w(887))) ? void 0 : z[w(1009)]) >= 23 ? 3 : 2, i), await sleep(200);
                    null == (G = d[w(1116)]) || G.call(d), await sleep(1e3);
                }
                return await sleep(5e3), retry((() => {
                    var i;
                    const t = w;
                    let n = null == (i = this[t(1328)]) ? void 0 : i[t(1452)];
                    return (null == n ? void 0 : n[t(885)]) && (null == n ? void 0 : n[t(1315)]) ? !!n[t(885)][t(575)] && (n[t(1315)](), true) : t(1316)
                }), 60, 2e3), true
            },
            autoH(i) {
                var t;
                const n = _0x15b77c;
                i != this[n(1206)] && (this[n(1206)] = i, timer[n(1550)](n(756)), null !== i && ((null == (t = this[n(670)]) ? void 0 : t[n(991)]) ? 9 == i ? (timer[n(1084)](n(756), (() => {
                    var i, t, a;
                    const e = n;
                    (null == (a = null == (t = null == (i = this[e(670)]) ? void 0 : i[e(991)]) ? void 0 : t[e(544)]) ? void 0 : a[e(523)](62)) ? this[e(560)]-- % 2 ? this[e(1297)](3, 1, 0) : this[e(1590)](62): this[e(729)]();
                }), 500), _0x5ec234(n(981))) : 29 == i ? timer[n(1084)](n(756), (() => this[n(729)]()), 1e3) : i ? this[n(1007)][n(1310)](n(1557), i) : console[n(585)](n(529)) : this[n(1206)] = null));
            },
            auto(i) {
                var t;
                const n = _0x15b77c;
                if (this[n(1206)] = i, timer[n(1550)](n(756)), null === i) return;
                let a = null == (t = this[n(670)]) ? void 0 : t[n(991)];
                a ? 9 == i ? (timer[n(1084)](n(756), (() => {
                    var i, t, a;
                    const e = n;
                    (null == (a = null == (t = null == (i = this[e(670)]) ? void 0 : i[e(991)]) ? void 0 : t[e(544)]) ? void 0 : a[e(523)](62)) ? this[e(560)]-- % 2 ? this[e(1297)](3, 1, 0) : this[e(1590)](62): this[e(729)]();
                }), 500), _0x5ec234(n(981))) : 3 == i ? (Laya[n(1231)][n(1193)](Laya[n(653)][n(1432)], a, a[n(807)]), timer[n(1084)](n(756), (() => {
                    const i = n;
                    3 != a[i(544)][i(889)] && a[i(938)](), this[i(560)]-- <= 0 && this[i(756)](globalState[i(1187)] || false);
                }), 1e3), _0x5ec234(n(800))) : 28 == i ? (timer[n(1084)](n(756), (() => (null == a ? void 0 : a[n(807)]()) || this[n(729)]()), 1e3), room[n(1409)][n(931)](1)[n(787)]((({
                    ai: i
                }) => !i)) && wait((() => {
                    var i, t;
                    return room[n(1515)] >= 0 && (null == (t = null == (i = room[n(1409)][0]) ? void 0 : i[n(544)]) ? void 0 : t[n(1096)]) > 0
                }))[n(972)]((() => this[n(1588)](n(1273) + room[n(1515)] + n(977) + room[n(1409)][0][n(544)][n(1096)], n(1298))))) : 29 == i ? timer[n(1084)](n(756), (() => this[n(729)]()), 1e3) : 11 == i ? (timer[n(1084)](n(756), (() => this[n(729)]()), 5e3), _0x5ec234(n(1346))) : i && (timer[n(1084)](n(756), (() => {
                    var i;
                    const t = n;
                    (null == (i = null == a ? void 0 : a[t(544)]) ? void 0 : i[t(889)]) >= 3 && (null == a || a[t(807)]()), this[t(729)]();
                }), 1e3), _0x5ec234(n(1463))) : this[n(1206)] = null;
            },
            async task(i) {
                var t;
                const n = _0x15b77c,
                    a = laya[n(1357)](n(1438)),
                    e = laya[n(1357)](n(1293)),
                    c = laya[n(1357)](n(904));
                if (!(i && a && e && c)) return;
                a[n(924)](), await sleep(1e3), Array[n(791)](_0x23f5c8[n(997)])[n(1286)]((i => a[n(1149)](i)))[n(1423)]((i => {
                    var t, a, c;
                    const o = n;
                    return (null == i ? void 0 : i[o(771)]) && !(null == (t = i[o(1499)]) ? void 0 : t[o(669)]) && e[o(571)](i.id) <= 1 && !(null == (c = null == (a = null == i ? void 0 : i[o(1499)]) ? void 0 : a[o(574)]) ? void 0 : c[o(787)]((({
                        ItemID: i
                    }) => {
                        var t;
                        return null == (t = laya[o(1507)](i)) ? void 0 : t[o(881)]
                    })))
                }))[n(875)]((i => 84800 != i.id && a[n(750)](i.id, 0, i[n(982)]))), setTimeout((() => {
                    var i;
                    const t = n;
                    Array[t(791)]({
                        length: Math[t(1304)](Math[t(484)](a[t(526)] / 3), 3)
                    }, ((i, n) => a[t(905)](n + 1) || a[t(1482)](n + 1))), e[t(1221)] && e[t(890)](), (null == (i = c[t(841)](1)) ? void 0 : i[t(882)]()) && (null == c || c[t(1292)](1));
                }), 1e3);
                let o = e[n(893)](71) || e[n(893)](72);
                null == (t = null == o ? void 0 : o[n(1073)]) || t[n(875)]((i => 2 == e[n(1410)](i) && e[n(751)](o.id, i[n(959)])));
            }
        };

    function updateCardLabels(i, t = null) {
        const n = _0x15b77c;
        if (globalConfig[n(1431)] && _0x50b7cf.v) {
            let i = new Zone(room[n(1515)])[n(1240)][n(951)](((i, t) => {
                const a = n;
                let e = t.id,
                    {
                        type: c,
                        color: o
                    } = _0x39b9a4[e],
                    l = c + "-" + o;
                return i[game[a(895)][3338][a(1114)](l)][a(1440)](e), i
            }), {
                false: [],
                true: []
            });
            laya[n(1015)](i[false], n(1077)), laya[n(1015)](i[true], "", (i => i == n(1077)));
        }
    }
    const clickCard = (() => {
        function i(i) {
            var t, n, a;
            const e = _0x336e,
                c = (null == this ? void 0 : this[e(1581)]) ? this : null == (n = null == (t = laya[e(670)]) ? void 0 : t[e(991)]) ? void 0 : n[e(1562)];
            if (!(null == (a = null == c ? void 0 : c[e(1581)]) ? void 0 : a[e(1083)])) return null;
            if (!0 === i && typeof (null == c ? void 0 : c[e(1016)]) == e(765)) return c[e(1016)]();
            if (!1 !== i && typeof (null == c ? void 0 : c[e(514)]) == e(765)) return c[e(514)]();
            let o = c[e(1581)][e(1423)]((i => null == i ? void 0 : i[e(720)]))[e(951)](((i, t) => {
                const n = e;
                return i[t[n(868)] ? 1 : 0][n(1440)](t), i
            }), [
                [],
                []
            ]);
            !0 !== i && o[1][e(875)]((i => i[e(1283)]())), !1 !== i && o[0][e(875)]((i => i[e(1283)]()));
        }
        const t = [function () {
            i[_0x336e(1323)](this, true);
        }, function () {
            i[_0x336e(1323)](this, void 0);
        }, function () {
            i[_0x336e(1323)](this, false);
        }, function () {
            reorderCard(_0x336e(1112));
        }, function () {
            reorderCard(_0x336e(1407));
        }];
        return async function (n) {
            var a, e;
            const c = _0x336e,
                o = await wait((() => {
                    var i;
                    return null == (i = this[c(670)]) ? void 0 : i[c(991)]
                }));
            if (!(null == (a = null == o ? void 0 : o[c(1562)]) ? void 0 : a[c(1581)]) || !(null == (e = null == o ? void 0 : o[c(1454)]) ? void 0 : e[c(1479)])) return false;
            if (typeof n == c(1404)) return i[c(1323)](o[c(1562)], n);
            if (_0x50b7cf.v && globalConfig[c(536)]) {
                let i = o[c(1454)][c(1479)];
                Object[c(1344)](i, c(861), {
                    get() {
                        const i = c;
                        return this[i(1214)][i(805)](i(710), i(1512))
                    },
                    set(i) {
                        const t = c;
                        this[t(781)] && i == t(1512) && (i = t(710)), this[t(1214)] = i, this[t(1267)][t(1591)] = i;
                    },
                    configurable: true
                }), i.on(Laya[c(653)][c(1500)], i, (function () {
                    const i = c;
                    this[i(1523)] || (this[i(781)] ? (this[i(781)] = false, this[i(861)] = i(1512), timer[i(1550)](i(522))) : (this[i(781)] = true, this[i(861)] = i(710), timer[i(1084)](i(522), (() => {
                        var t, n, a, e, c, o, l, r;
                        const u = i;
                        if ((null == (a = null == (n = null == (t = laya[u(670)]) ? void 0 : t[u(991)]) ? void 0 : n[u(1454)][u(654)]) ? void 0 : a[u(1086)]) == u(615)) null == (c = null == (e = laya[u(670)]) ? void 0 : e[u(991)]) || c[u(1454)][u(1420)][u(772)]();
                        else {
                            if ((null == (r = null == (l = null == (o = laya[u(670)]) ? void 0 : o[u(991)]) ? void 0 : l[u(1454)][u(654)]) ? void 0 : r[u(1086)]) == u(1350)) return;
                            this[u(1523)] && this[u(772)]();
                        }
                    }), 100)));
                })), redefine(o[c(651)], c(1180), {
                    value: function () {
                        var i, t, n, a;
                        const e = c;
                        if (this[e(1182)][e(486)](this, arguments), (timer[e(973)][e(522)] || timer[e(973)][e(1412)] && 784 == (null == (t = null == (i = this[e(649)]) ? void 0 : i[e(1285)]) ? void 0 : t[e(956)])) && (null == (n = this[e(649)]) ? void 0 : n[e(1505)]) == (null == (a = this[e(649)]) ? void 0 : a[e(1446)])) {
                            let i = this[e(1409)][e(1423)]((i => i[e(683)]));
                            i[e(1083)] == this[e(649)][e(1505)] && i[e(875)]((i => {
                                var t, n;
                                return null == (n = null == (t = i[e(544)]) ? void 0 : t[e(1347)]) ? void 0 : n.call(t, true)
                            }));
                        }
                    },
                    configurable: true
                });
            }
            if (t[c(875)](((i, t) => {
                    const n = c;
                    let a = o[n(578) + t] || this[n(963)](n(1484));
                    Object[n(832)](a, {
                        label: ["全选", "反选", "", "", ""][t],
                        width: 43.5,
                        height: 29,
                        labelSize: 12,
                        labelBold: true,
                        labelFont: n(1152),
                        labelColors: n(1469),
                        sizeGrid: n(894),
                        zOrder: 99,
                        SizeGridLimit: true
                    }), o[n(578) + t] || (2 == t ? a[n(847)]("") : a[n(847)](n(1017), n(979), n(999), n(1074)), a[n(824)](), o[n(945)](o[n(578) + t] = a), o[n(578) + t].on(Laya[n(653)][n(1203)], o[n(1562)], i));
                })), !o[c(633)][c(577)]()[c(1449)](c(578))) {
                const i = o[c(633)];
                Object[c(1344)](o, c(633), {
                    value: function () {
                        const t = c;
                        i[t(486)](this, arguments);
                        const n = this[t(712)] - 250 - this[t(879)][t(712)] - 43.5;
                        Array[t(791)]({
                            length: 5
                        }, ((i, a) => {
                            const e = t;
                            if (this[e(578) + a] && 2 !== a) {
                                let i;
                                0 === a ? i = 0 : 1 === a && (i = 43), this[e(578) + a][e(474)](n + i, 89);
                            }
                        }));
                    }
                }), o[c(633)]();
            }
            return true
        }
    })();
    async function patchSkinBtn() {
        const i = _0x15b77c,
            t = await wait((() => {
                var t;
                return null == (t = laya[i(1328)]) ? void 0 : t[i(1582)]
            }));
        redefine(t[i(1314)], i(503), {
            value: function () {
                const t = i;
                this[t(1266)][t(486)](this, arguments), this[t(1178)] && (this[t(1178)][t(1036)] = true);
                let n = SystemContext[t(1053)];
                for (let i = this[t(1131)][t(1083)] - 1; i >= 0; i--) {
                    const a = this[t(1131)][i];
                    a[t(1036)] && (n = n - a[t(712)] + 1, a.x = n);
                }
                this[t(1262)] = n;
            }
        }), t[i(503)]();
    }
    null == (_a = laya[_0x15b77c(937)]) || _a.call(laya, clickCard);
    const paper = {
            res: {},
            sprite: void 0,
            async init() {
                var i, t;
                const n = _0x15b77c;
                if (null == (i = this[n(644)]) ? void 0 : i[n(640)]) return this[n(644)];
                const a = await wait((() => laya[n(1394)](n(499))));
                if (!a) return false;
                if (this[n(644)] = this[n(644)] || a[n(1032)] || laya[n(963)](n(700)), !this[n(644)]) return false;
                !this[n(644)].bg && (this[n(644)].bg = laya[n(963)](n(565)), this[n(644)][n(1010)](this[n(644)].bg)), a[n(1032)] = this[n(644)], a[n(945)](this[n(644)]), this[n(644)][n(1054)] = 100;
                const e = null == (t = this[n(644)]) ? void 0 : t[n(633)];
                return typeof e == n(765) && !e[n(577)]()[n(1449)](n(1330)) && this[n(644)] && Object[n(1344)](this[n(644)], n(633), {
                    value: function () {
                        const i = n;
                        e[i(486)](this, arguments);
                        let t = Math[i(1493)](this[i(712)] ? SystemContext[i(1053)] / this[i(712)] : 1, this[i(1457)] ? SystemContext[i(1233)] / this[i(1457)] : 1);
                        this[i(1043)](t, t), this[i(474)](SystemContext[i(1053)] / 2, SystemContext[i(1233)] / 2);
                    },
                    configurable: true
                }), true
            },
            async setBg({
                url: i,
                type: t,
                width: n,
                height: a
            } = this[_0x15b77c(693)]) {
                var e;
                const c = _0x15b77c;
                if (i && ((null == (e = this[c(644)]) ? void 0 : e[c(640)]) || await wait((() => this[c(1269)]())), this[c(644)] && this[c(644)][c(702)] != i)) {
                    if (Object[c(832)](this[c(644)], {
                            width: n,
                            height: a
                        }), this[c(1550)](), 0 == t) this[c(644)].bg[c(1254)] = i, this[c(644)].bg[c(1280)](-n / 2, -a / 2);
                    else if (1 == t);
                    else {
                        let e, o, l, r;
                        2 == t ? (l = "sk", r = laya[c(1357)](c(900))) : (l = c(1135), r = laya[c(1357)](c(1282))), 3 != t ? (e = [c(1547), c(909)], o = c(913)) : (e = [c(1547), c(527), c(563)], o = c(1140)), e[c(875)]((e => {
                            const u = c;
                            let s = new r;
                            this[u(644)][u(945)](s), s[u(1067)] = true, s[u(1208)](i + "/" + e + "." + l, o, true), s[u(1003)](), 2 == t && s[u(524)](n, a);
                        }));
                    }
                    this[c(644)][c(633)](), this[c(644)][c(702)] = i, Object[c(832)](this[c(693)], {
                        url: i,
                        type: t,
                        width: n,
                        height: a
                    }), await _0x97543e(_0x50b7cf[c(1426)] + c(621), this[c(693)], true);
                }
            },
            async switch (i) {
                var t;
                const n = _0x15b77c;
                if (i) return this[n(1494)]();
                null == (t = this[n(644)]) || t[n(1056)]();
            },
            async clear(i) {
                var t;
                const n = _0x15b77c;
                if (!this[n(644)]) return;
                for (this[n(693)] = {}, this[n(644)].bg[n(1254)] = null; this[n(644)][n(1307)];) null == (t = this[n(644)][n(1120)](0)) || t[n(1126)]();
                if (!i) return;
                _0x1a620e(_0x50b7cf[n(1426)] + n(621), true), this[n(644)][n(1056)](), this[n(644)] = void 0;
                const a = await wait((() => laya[n(1394)](n(499))));
                if (!a) return false;
                delete a[n(1032)];
            }
        },
        getskin = (() => {
            async function i() {
                var a, e, c, o, l, r, u, s;
                const v = _0x336e;
                if (!(null == (a = null == this ? void 0 : this[v(1318)]) ? void 0 : a[v(1254)])) return null;
                let x = this[v(788)] ? 594 : this[v(1546)] ? 536 : 350,
                    f = this[v(788)] ? 335 : this[v(1546)] ? 380 : 464,
                    z = 1 != this[v(1128)] ? 0 : (null == (c = null == (e = this[v(988)]) ? void 0 : e[v(1226)]) ? void 0 : c[v(483)]) || 0,
                    G = (null == (l = null == (o = this[v(988)]) ? void 0 : o[v(1226)]) ? void 0 : l[v(743)]) || "";
                if (2 == z ? laya[v(1357)](v(900), true, (() => {
                        var i, t;
                        return null == (t = null == (i = this[v(493)]) ? void 0 : i[v(947)]) ? void 0 : t[v(849)]
                    })) : z > 2 && laya[v(1357)](v(1282), true, (() => {
                        var i, t;
                        return null == (t = null == (i = this[v(493)]) ? void 0 : i[v(740)]) ? void 0 : t[v(849)]
                    })), 1 == z) return G = ((null == (u = null == (r = this[v(988)]) ? void 0 : r[v(1226)]) ? void 0 : u[v(612)]) || "") + v(1487), this[v(1004)][v(1193)](Laya[v(653)][v(1203)], this, i), this[v(1004)].on(Laya[v(653)][v(1203)], this, (() => t[v(1323)](this, G))), void(this[v(1004)][v(861)] = v(1018));
                if (3 == z) this[v(988)][v(1226)][v(855)] ? G = this[v(988)][v(1226)][v(727)](this[v(1519)]) : z = 4;
                else if (2 == z || 4 == z);
                else {
                    let {
                        response: i,
                        url: t
                    } = await n(this[v(1318)][v(1254)]);
                    if (t && i.ok) {
                        G = t;
                        let n = await i[v(946)](),
                            a = await createImageBitmap(n);
                        x = a[v(712)], f = a[v(1457)];
                    }
                }
                null == (s = this[v(1129)]) || s.call(this), _0x390b82(v(1362), v(1258), 1e4, v(1276), null), setTimeout((() => paper[v(1494)]({
                    url: G,
                    type: z,
                    width: x,
                    height: f
                })), 1e3);
            }
            async function t(i) {
                var t, a, e, c, o, l, r;
                const u = _0x336e;
                let s = (null == (a = null == (t = this[u(988)]) ? void 0 : t[u(1226)]) ? void 0 : a[u(1418)]) || _0x23f5c8[u(1508)][null == (e = this[u(988)]) ? void 0 : e[u(1274)]] || u(1466),
                    v = null == (o = null == (c = this[u(988)]) ? void 0 : c[u(1226)]) ? void 0 : o[u(831)],
                    x = i && typeof i == u(554) ? i : (null == (l = this[u(1318)]) ? void 0 : l[u(1254)]) || "";
                if (!x) return;
                let [, f, z] = x[u(1246)](/\/([0-9]+)(_[0-9])?(\.png|\.mp4)/i)[u(1286)](Number), G = (null == (r = _0x23f5c8[u(605)][f]) ? void 0 : r[u(1083)]) || {
                    60500: 3,
                    62300: 2,
                    66100: 2
                } [f] || (z ? 2 : 1);
                (G > 1 ? Array[u(791)]({
                    length: G
                }, ((i, t) => "_" + (t + 1))) : [""])[u(875)]((async i => {
                    const t = u;
                    let a = x[t(805)](/(\/[0-9]+)(_[0-9])?(\.png|\.mp4)/i, "$1" + i + "$3"),
                        {
                            response: e
                        } = await n(a, v);
                    if (null == e ? void 0 : e.ok) {
                        let n = await e[t(946)](),
                            a = URL[t(778)](n);
                        _0x33d874(a, s + i), URL[t(1537)](a);
                    }
                }));
            }
            async function n(i, t = true) {
                const n = _0x336e;
                if (t) {
                    let t = i[n(805)](n(1078), n(1061)),
                        a = await fetch(t);
                    if (a.ok) return {
                        response: a,
                        url: t
                    }
                }
                let a = await fetch(i);
                return a.ok ? {
                    response: a,
                    url: i
                } : null
            }
            return async function (n) {
                const a = _0x336e,
                    e = null == n ? void 0 : n[a(1570)];
                if (!e) return false;
                let {
                    x: c,
                    y: o,
                    width: l
                } = e;
                return [i, t][a(875)](((i, t) => {
                    const e = a;
                    let r = n[e(578) + t] || laya[e(963)](e(1081));
                    Object[e(832)](r, {
                        label: [e(761), e(1317)][t],
                        width: 166,
                        height: 50,
                        labelSize: 18,
                        labelFont: e(1439),
                        labelPadding: e(546),
                        labelColors: e(1117),
                        align: e(1237),
                        valign: e(1290)
                    }), r[e(474)](c + l / 2 + 166 * (t - 1), o - 50), !n[e(578) + t] && (r[e(847)](e(823), e(1014), e(1040), e(657)), n[e(707)][e(1010)](n[e(578) + t] = r), n[e(578) + t].on(Laya[e(653)][e(1203)], n, i));
                })), true
            }
        })(),
        _0x4bcafd = (() => {
            const i = _0x15b77c;
            var t, n = false;
            let a = [327, 256, 352, 21066, 273, 3652, 3692];
            const e = t => Array[i(791)](t)[i(1423)](((t, n, a) => !["♥", "♦", "♠", "♣"][i(1449)](t) || a[i(1334)](t) == n))[i(695)]("")[i(805)](new RegExp("(?<=<font color='#).{6}'>(.)(?=<\\/font>)", "g"), ((t, n) => ({
                "♥": i(974),
                "♦": i(1492),
                "♠": i(1105),
                "♣": i(1075)
            } [n] ?? t)));

            function c() {
                const t = i;
                this[t(1041)](this[t(490)], this[t(667)]);
            }
            return async function () {
                var o, l, r, u;
                const s = i;
                if (n) return true;
                t = laya[s(1007)];
                const [v, x] = null == (l = null == (o = laya[s(670)]) ? void 0 : o[s(845)]) ? void 0 : l[s(1409)];
                if (!v || !x) return false;
                redefine(v[s(1314)], s(1300), {
                    value: function (i) {
                        const t = s;
                        let n = this[t(1236)][t(486)](this, arguments);
                        return i != t(1566) ? n : n || this[t(1236)][t(1323)](this, t(511))
                    }
                }), redefine(x[s(1314)], s(1525), {
                    value: function (i) {
                        var o;
                        const l = s;
                        n && Object[l(1344)](x[l(1314)], l(1525), {
                            value: null == (o = x[l(1314)]) ? void 0 : o[l(494)],
                            configurable: true
                        }), this[l(494)][l(486)](this, arguments), n || !i || !i[l(1160)] || i[l(783)] || i[l(1111)] && this[l(697)] || i[l(1037)] || !i[l(580)] || i[l(1478)] && this[l(544)] && this[l(544)][l(1458)] || (async () => {
                            const i = l,
                                o = await wait((() => {
                                    var t, n;
                                    return null == (n = null == (t = null == this ? void 0 : this[i(587)]) ? void 0 : t[i(701)]) ? void 0 : n[i(1394)]((t => !t[i(667)][i(661)] && !t[i(667)][i(1395)]))
                                }));
                            if (!o) return n = false;
                            const r = null == o ? void 0 : o[i(1314)];
                            n = redefine(r, i(1041), {
                                value: function (n, o) {
                                    const l = i;
                                    if (a[l(1449)](null == o ? void 0 : o.ID)) {
                                        if (o[l(699)] = this, !o[l(696)]) {
                                            let i = o[l(1314)];
                                            i[l(696)] = Object[l(632)](i, l(1574))[l(963)], Object[l(1344)](i, l(1574), {
                                                get: function () {
                                                    var i;
                                                    const t = l;
                                                    let n = this[t(696)][t(1323)](this);
                                                    return this[t(699)] ? 273 == this.ID ? e(n)[t(805)](/权变[0-9]*\[/, "权变" + ((null == (i = this[t(699)][t(1375)]) ? void 0 : i[t(1405)](275)) || 0) + "[") : a[t(1449)](this.ID) ? e(n) : n : n
                                                },
                                                configurable: true
                                            });
                                        }
                                        273 == (null == o ? void 0 : o.ID) && (t.on(l(955), this, c), redefine(this, l(1126), {
                                            value: function () {
                                                const i = l;
                                                t[i(1193)](i(955), this, c), this[i(957)]();
                                            }
                                        }));
                                    }
                                    this[l(1552)][l(486)](this, arguments);
                                }
                            }), c[i(1323)](o);
                        })();
                    }
                }), redefine(null == (r = x[s(544)]) ? void 0 : r[s(1314)], s(1488), {
                    value: function (i) {
                        const n = s;
                        this[n(1459)][n(486)](this, arguments), 275 == i && t[n(1310)](n(955));
                    }
                }), redefine(null == (u = x[s(1308)]) ? void 0 : u[s(1314)], s(684), {
                    value: function () {
                        const i = s;
                        this[i(477)][i(486)](this, arguments), this[i(936)](), this[i(516)]();
                    }
                });
            }
        })();
    async function setProto() {
        ((async function () {
            var i;
            const t = _0x336e,
                n = await wait((() => {
                    var i;
                    return (null == (i = laya[t(1328)]) ? void 0 : i[t(1113)]) || laya[t(1394)](laya[t(1328)], null, t(1113))
                }));
            if (typeof (null == n ? void 0 : n[t(1101)]) != t(765)) return null;
            n[t(1101)]();
            const a = null == (i = n[t(968)]) ? void 0 : i[t(1314)],
                e = null == a ? void 0 : a[t(822)];
            typeof e == t(765) && (a[t(1051)] = globalConfig[t(1051)], a[t(1389)] = globalConfig[t(1389)], Object[t(1344)](a, t(624), {
                value: function (i) {
                    globalConfig[i] = this[i] = !globalConfig[i];
                },
                configurable: true
            }), !!e[t(577)]()[t(1449)](t(1330)) || Object[t(1344)](a, t(822), {
                value: function () {
                    const i = t;
                    e[i(486)](this, arguments);
                    const n = null == this ? void 0 : this[i(1167)];
                    if (!n) return;
                    this[i(1100)][i(1457)] = this[i(1457)] += 42;
                    let {
                        x: a,
                        y: c,
                        width: o,
                        height: l,
                        _labelColors: r,
                        _labelPadding: u,
                        textField: {
                            fontSize: s,
                            font: v,
                            bold: x
                        },
                        constructor: f
                    } = n;
                    this[i(673)] = new f, Object[i(832)](this[i(673)], {
                        label: i(476),
                        y: c + 42,
                        x: a,
                        width: o,
                        height: l,
                        labelSize: s,
                        labelFont: v,
                        labelBold: x,
                        _labelColors: r,
                        _labelPadding: u
                    }), this[i(673)][i(847)](i(840), i(705), i(859), i(760), i(1331), i(1535)), this[i(1010)](this[i(673)]), this[i(673)].on(Laya[i(653)][i(1348)], this, this[i(624)], [i(1389)]), this[i(1389)] && (this[i(673)][i(868)] = true), this[i(1172)] = new f, Object[i(832)](this[i(1172)], {
                        label: i(1301),
                        y: c + 63,
                        x: a,
                        width: o,
                        height: l,
                        labelSize: s,
                        labelFont: v,
                        labelBold: x,
                        _labelColors: r,
                        _labelPadding: u
                    }), this[i(1172)][i(847)](i(840), i(705), i(859), i(760), i(1331), i(1535)), this[i(1010)](this[i(1172)]), this[i(1172)].on(Laya[i(653)][i(1348)], this, this[i(624)], [i(1051)]), this[i(1051)] && (this[i(1172)][i(868)] = true);
                },
                configurable: true
            }));
        }))(), async function () {
            const i = _0x336e,
                t = await wait((() => {
                    var t, n;
                    return null == (n = null == (t = laya[i(1328)]) ? void 0 : t[i(672)]) ? void 0 : n[i(1314)]
                }), 1e3),
                n = null == t ? void 0 : t[i(550)];
            if (typeof n != i(765) || n[i(577)]()[i(1449)](i(1330))) return false;
            Object[i(1344)](t, i(550), {
                value: function () {
                    const t = i;
                    let a = n[t(486)](this, arguments);
                    return globalConfig[t(1174)] ? a[t(1423)]((i => 10187 != i[t(910)]))[t(1502)](((i, n) => !i[t(643)] == !n[t(643)] ? 0 : n[t(643)] ? 1 : -1)) : a
                },
                configurable: true
            });
        }(), async function () {
            var i, t;
            const n = _0x336e;
            redefine(null == (t = null == (i = laya[n(963)](n(528), void 0, 0)) ? void 0 : i[n(1249)]) ? void 0 : t[n(1314)], n(1104), {
                value: function (i) {
                    const t = n;
                    this[t(953)][t(486)](this, arguments), this[t(1132)] > 0 || (this[t(1132)] = laya[t(1357)](t(619))[t(1532)](i));
                }
            });
        }(), async function () {
            const i = _0x336e,
                t = laya[i(963)](i(1495), null, 0)[i(1314)],
                n = null == t ? void 0 : t[i(1490)];
            typeof n == i(765) && !n[i(577)]()[i(1449)](i(1330)) && Object[i(1344)](t, i(1490), {
                value: function () {
                    const t = i;
                    n[t(486)](this, arguments), [t(1416)][t(1449)](null == this ? void 0 : this[t(1418)]) && this[t(1108)] && (this[t(1108)][t(1143)] = .3, this[t(1108)][t(646)] = false);
                },
                configurable: true
            });
        }(), async function () {
            const i = _0x336e,
                t = laya[i(963)](i(1250))[i(1314)],
                n = t[i(1022)];
            typeof n == i(765) && !n[i(577)]()[i(1449)](i(1330)) && Object[i(1344)](t, i(1022), {
                value: function () {
                    var t;
                    const a = i;
                    if (n[a(486)](this, arguments), this[a(1473)][a(1086)] == a(1194) || this[a(1473)][a(1086)] == a(596)) {
                        if (!this[a(858)] || !this[a(513)] || !this[a(737)]) return void console[a(1359)](a(1349));
                        const i = parseFloat(this[a(513)][a(1591)]) || 0,
                            n = parseFloat(null == (t = this[a(737)][a(681)][0]) ? void 0 : t[a(1591)]) || 0,
                            e = 0 === n ? 0 : Math[a(484)](i / n * 100);
                        this[a(1473)][a(1036)] = true, this[a(1473)][a(1513)] = a(581) + i + a(1281) + n + a(785) + e + "%", this[a(1473)][a(474)](56, 60);
                    }
                },
                configurable: true
            });
        }(), async function () {
            var i, t, n, a;
            const e = _0x336e;
            redefine(null == (n = null == (t = null == (i = laya[e(1328)]) ? void 0 : i[e(1314)]) ? void 0 : t[e(1314)]) ? void 0 : n[e(1314)], e(1380), {
                value: function () {
                    var i;
                    const t = e;
                    null == (i = null == this ? void 0 : this[t(917)]) || i[t(486)](this, arguments), game[t(1232)](true);
                }
            }), redefine(null == (a = laya[e(1328)]) ? void 0 : a[e(651)], e(659), {
                value: function () {
                    const i = e;
                    this[i(1563)][i(486)](this, arguments), game[i(1232)](false);
                }
            });
        }(), async function () {
            const i = _0x336e;
            async function t() {
                var i, t, n, a;
                const e = _0x336e;
                let c = false,
                    o = (null == (t = _0x23f5c8[e(817)][null == (i = this[e(1285)]) ? void 0 : i[e(956)]]) ? void 0 : t[e(1418)]) ?? (null == (n = this[e(572)]) ? void 0 : n[e(1086)]) ?? "";
                o[e(1449)]("捷悟") && (null == (a = game[3659]) ? void 0 : a[e(1083)]) && (c = game[3659]), 0 != c && (o = o ? "[" + (_0x303c27[o] || o[e(931)](0, 2)) + "]" : "", laya[e(1015)](c, "​" + o, (i => i[e(1336)]("​")), this[e(1025)] ?? this[e(1516)]));
            }
            async function n(i = true, t, n, a) {
                var e, c, o, l, r, u, s, v, x, f;
                const z = _0x336e;
                if ((null == (e = this[z(544)]) ? void 0 : e[z(1235)]) != (n >= 0 ? n : room[z(1515)])) return false;
                if (t > 0 && (null == (c = this[z(1285)]) ? void 0 : c[z(956)]) != t) return false;
                if (!laya[z(1206)] && ((null == (o = this[z(1285)]) ? void 0 : o[z(902)]) != (null == (l = this[z(1285)]) ? void 0 : l[z(1545)]) || (null == (r = this[z(1489)]) ? void 0 : r[z(1083)]) || (null == (u = this[z(542)]) ? void 0 : u[z(1083)]) || (null == (s = this[z(1025)]) ? void 0 : s[z(787)]((i => {
                        var t;
                        return null == (t = null == i ? void 0 : i[z(559)]) ? void 0 : t[z(603)]
                    }))))) return false;
                a = (a > 0 ? a : (null == (v = this[z(1285)]) ? void 0 : v[z(902)]) || 1) - ((null == (x = this[z(1414)]) ? void 0 : x[z(1083)]) || 0);
                let G = [...this[z(1489)], ...this[z(1025)], ...this[z(542)]][z(1423)]((i => {
                    var t;
                    return (null == i ? void 0 : i[z(720)]) && !(null == (t = this[z(1414)]) ? void 0 : t[z(1449)](i))
                }))[z(931)](0, a)[z(1286)]((i => {
                    var t;
                    const n = z;
                    return this[n(1465)]({
                        target: i
                    }), null == (t = i[n(559)]) ? void 0 : t[n(603)]
                }));
                return !0 === i && (null == (f = this[z(607)]) || f.call(this)), G
            }
            async function a(i = 1e3) {
                const t = _0x336e;
                let n = null;
                return new Promise((a => timer[t(1084)](t(1070), (() => {
                    var i, e;
                    const c = t,
                        o = laya[c(786)](c(1450));
                    if (!o) return timer[c(1550)](c(1070)), void a(n);
                    let l = null == (i = o[c(1099)]) ? void 0 : i[c(1394)]((i => 0 == i[c(1227)]));
                    l && (null == (e = o[c(1245)]) || e.call(o, l), n = l[c(559)][c(692)]);
                }), i)))
            }
            async function e() {
                var i, t;
                const n = _0x336e;
                if (await wait((() => {
                        var i;
                        return null == (i = null == this ? void 0 : this[n(1144)]) ? void 0 : i[n(1083)]
                    }), 100, 100), !(null == (i = null == this ? void 0 : this[n(1144)]) ? void 0 : i[n(1083)])) return null;
                let a = -1,
                    e = null;
                if (this[n(1144)][n(787)]((i => {
                        var t, c;
                        const o = n;
                        if (null == i ? void 0 : i[o(1354)]) return e = i;
                        if (99 == globalState[o(1187)] && "神" == (null == (t = null == i ? void 0 : i[o(1425)]) ? void 0 : t[o(1402)])) return e = i;
                        let l = (null == (c = null == i ? void 0 : i[o(1425)]) ? void 0 : c[o(1445)]) || 0;
                        l > a && (a = l, e = i);
                    })), 99 == globalState[n(1187)] && "神" != (null == (t = null == e ? void 0 : e[n(1425)]) ? void 0 : t[n(1402)])) {
                    let i = this[n(1144)][n(1423)]((i => null == i ? void 0 : i[n(911)]));
                    i[n(1083)] && (i[n(875)]((i => {
                        var t;
                        return null == (t = i[n(656)]) ? void 0 : t.call(i)
                    })), await sleep(1e3), e = i[n(1394)]((i => {
                        var t;
                        return "神" == (null == (t = null == i ? void 0 : i[n(1425)]) ? void 0 : t[n(1402)])
                    })) || e);
                }
                null == e || e[n(668)](), 9 != globalState[n(1187)] && setTimeout((() => null == e ? void 0 : e[n(668)]()), 500), 99 == globalState[n(1187)] && setTimeout((() => {
                    var i, t;
                    const a = n;
                    null == (t = null == (i = laya[a(670)]) ? void 0 : i[a(1582)]) || t[a(1524)](), confirm({
                        title: a(1229)
                    }, "确定", true, 500);
                }), 1500);
            }
            async function c() {
                var i, t;
                const n = _0x336e;
                if (await wait((() => {
                        var i;
                        return null == (i = null == this ? void 0 : this[n(1144)]) ? void 0 : i[n(1083)]
                    }), 100, 100), !(null == (i = null == this ? void 0 : this[n(1144)]) ? void 0 : i[n(1083)])) return null;
                for (let a of this[n(1144)])(null == a ? void 0 : a[n(559)]) && (null == a ? void 0 : a[n(1198)]) && (this[n(1159)](a), await sleep(1e3));
                await sleep(1e3), null == (t = this[n(925)]) || t.call(this);
            }
            async function o() {
                var i, t, n, a, e, c, o;
                const l = _0x336e;
                if (await sleep(1e3), null == (t = null == (i = null == this ? void 0 : this[l(1249)]) ? void 0 : i[l(698)]) ? void 0 : t[l(1083)]) return null == (a = null == (n = this[l(1249)][l(698)][l(951)](((i, t) => i > t ? i : t))) ? void 0 : n[l(1311)]) ? void 0 : a.call(n);
                null == (c = null == (e = null == this ? void 0 : this[l(1261)]) ? void 0 : e[l(698)]) || c[l(1423)]((i => 0 == i[l(755)] || _0x577ea9[l(1449)](i.Id)))[l(875)]((i => {
                    var t, n;
                    return (null == (t = i[l(541)]) ? void 0 : t[l(1036)]) || (null == (n = i[l(1311)]) ? void 0 : n.call(i))
                })), await sleep(2e3), null == (o = null == this ? void 0 : this[l(714)]) || o.call(this);
            }
            async function l(i) {
                var l, r, u, s, v, x, f, z, G;
                const w = _0x336e;
                let d = await wait((() => laya[w(786)](i)));
                if (d && (await wait((() => !d[w(539)])), !d[w(722)])) switch (i) {
                case w(665):
                    globalConfig[w(775)] && (null == (l = d[w(1031)]) || l.call(d), null == (r = d[w(1129)]) || r.call(d));
                    break;
                case w(1005):
                    (globalConfig[w(1174)] || globalState[w(1187)]) && (null == (u = d[w(1218)]) || u.call(d));
                    break;
                case w(939):
                case w(641):
                case w(1335):
                    (globalConfig[w(1174)] || globalState[w(1187)]) && (null == (s = d[w(1567)]) || s.call(d));
                    break;
                case w(1130):
                case w(926):
                case w(1148):
                case w(1124):
                    (globalConfig[w(1174)] || globalState[w(1187)]) && (null == (v = d[w(1129)]) || v.call(d));
                    break;
                case w(528):
                    (globalConfig[w(1174)] || globalState[w(1187)]) && (null == (x = d[w(1249)]) ? void 0 : x[w(1132)]) >= 0 && (null == (f = d[w(1129)]) || f.call(d));
                    break;
                case w(579):
                    globalConfig[w(482)] && getskin(d);
                    break;
                case w(779):
                    Object[w(832)]((null == (G = null == (z = d[w(1021)]) ? void 0 : z[w(1510)]) ? void 0 : G[w(1381)]) ?? {}, {
                        visible: true
                    });
                    break;
                case w(597):
                case w(1528):
                    globalState[w(1187)] && e[w(1323)](d);
                    break;
                case w(930):
                    globalState[w(1187)] && c[w(1323)](d);
                    break;
                case w(747):
                    11 == globalState[w(1187)] && o[w(1323)](d);
                    break;
                case w(1450):
                    laya[w(1206)] > 0 && 3 !== laya[w(1206)] && a[w(1323)](d);
                    break;
                case w(1165):
                    (timer[w(973)][w(522)] || laya[w(1206)] > 0) && 3 !== laya[w(1206)] && n[w(1323)](d);
                case w(1427):
                    globalConfig[w(1431)] && t[w(1323)](d);
                    break;
                case w(1518):
                    d && d[w(1503)] && (d[w(1503)][w(1036)] = false), d[w(1054)] = 1;
                    [...d[w(1087)], ...d[w(1583)], ...d[w(655)]][w(875)]((i => {
                        var t;
                        const n = w;
                        if (!i) return;
                        i[n(609)] && (i[n(609)][n(1036)] = false), i[n(664)] && (i[n(664)][n(1036)] = false);
                        const a = null == (t = i[n(559)]) ? void 0 : t[n(692)];
                        if (a) {
                            const t = SGS[n(877)][a] || "";
                            t && i[n(1573)] && i[n(1573)](t);
                        }
                    })), globalConfig[w(815)] && _0x390b82(w(1480) + w(1028) + w(1263) + w(1514), w(1496), 1e4, w(1276), (function () {
                        const i = w;
                        timer[i(1550)](i(1576));
                    }));
                case w(733):
                }
            }
            redefine(laya[i(1007)], i(1260), {
                value: function (t, ...n) {
                    const a = i;
                    this[a(1356)][a(1323)](this, t, ...n), setTimeout((() => l(t)));
                }
            });
        }(), async function () {
            const i = _0x336e;
            let t = false;
            redefine(laya[i(1357)](i(1147)), i(1039), {
                value: function (n) {
                    const a = i;
                    this[a(534)][a(486)](this, arguments), (null == n ? void 0 : n[a(1238)]) && setTimeout((() => async function (i) {
                        var n, a, e, c;
                        const o = _0x336e;
                        globalConfig[o(482)] && paper[o(716)](globalConfig[o(628)] ? ![o(535), o(1115)][o(1449)](i) : laya[o(670)]), i == o(591) ? (globalState[o(1187)] && timer[o(1211)](o(756), (() => globalState[o(1187)] && laya[o(739)]()), 8e3), !t && redefine(null == (c = null == (e = null == (a = null == (n = laya[o(1328)]) ? void 0 : n[o(1538)]) ? void 0 : a[o(1171)]) ? void 0 : e[0]) ? void 0 : c[o(1314)], o(564), {
                            value: function () {}
                        }) && (t = true)) : (i == o(1305) || i == o(1363)) && (!0 === globalState[o(1187)] || 28 === globalState[o(1187)] || 11 === globalState[o(1187)]) && (_0x5ec234(o(1392)), timer[o(1211)](o(756), (() => globalState[o(1187)] && laya[o(1007)][o(1310)](o(1305))), 5e3));
                    }(n[a(1238)])));
                }
            });
        }(), async function () {
            const i = _0x336e;
            async function t() {
                var i;
                const t = _0x336e;
                let n = this[t(1133)];
                if (n) {
                    if (!1 !== (null == (i = Object[t(632)](n, t(922))) ? void 0 : i[t(1585)])) {
                        const i = n[t(922)];
                        typeof i == t(765) && !i[t(577)]()[t(1449)](t(1330)) && Object[t(1344)](n, t(922), {
                            value: function () {
                                var n;
                                const a = t;
                                let e = arguments[0];
                                return e && 0 == e[a(1541)] && (null == (n = e[a(622)]) ? void 0 : n[a(749)]) && _0x33d874(e[a(622)][a(749)], new URL(e[a(622)][a(749)])[a(812)][a(1378)]("/")[a(931)](-1)[0]), i[a(486)](this, arguments)
                            },
                            configurable: true
                        });
                    }
                    n[t(626)]();
                } else _0x5ec234(t(759));
            }
            const n = laya[i(963)](i(898), null, 0)[i(1314)],
                a = n[i(684)];
            typeof a == i(765) && !a[i(577)]()[i(1449)](i(1330)) && (Object[i(1344)](n, i(684), {
                value: function () {
                    const e = i;
                    if (a[e(486)](this, arguments), Object[e(602)](this) === n) {
                        const i = null == this ? void 0 : this[e(1163)];
                        if (!(null == i ? void 0 : i[e(1267)])) return false;
                        let {
                            x: n,
                            y: a,
                            width: c,
                            height: o,
                            _labelColors: l,
                            _labelPadding: r,
                            textField: {
                                fontSize: u,
                                font: s,
                                bold: v
                            },
                            constructor: x
                        } = i, f = new x;
                        Object[e(832)](f, {
                            label: e(709),
                            enabled: false,
                            width: c,
                            height: o,
                            labelSize: u,
                            labelFont: s,
                            labelBold: v,
                            _labelColors: l,
                            _labelPadding: r
                        }), f[e(847)](e(1413), e(1068), e(1456), e(878)), this[e(707)][e(1010)](f), this[e(650)] = f, f[e(474)](n - 1.2 * c, a), f.on(Laya[e(653)][e(1203)], this, t);
                    }
                },
                configurable: true
            }), Object[i(1344)](n, i(566), {
                value: function () {
                    var t;
                    const n = i;
                    this[n(1163)][n(575)] = !!this[n(1133)], void 0 !== (null == (t = this[n(650)]) ? void 0 : t[n(575)]) && (this[n(650)][n(575)] = this[n(1163)][n(575)]);
                },
                configurable: true
            }));
        }(), async function () {
            var i;
            const t = _0x336e,
                n = null == (i = laya[t(963)](t(1518), null, 0)) ? void 0 : i[t(1314)];
            redefine(n, t(764), {
                value: function () {
                    var i;
                    const n = t;
                    console[n(585)](this[n(608)][n(537)]), console[n(585)](n(932), this[n(537)]), globalState[n(1564)] = this[n(537)], this[n(1129)](), globalState[n(1564)][n(1083)] && !checkHandCards(this[n(608)][n(537)]) && (null == (i = globalState[n(1564)]) ? void 0 : i[n(1083)]) && laya[n(786)](n(678))[n(488)]();
                }
            }), redefine(n, t(1129), {
                value: function () {
                    var i;
                    const n = t;
                    return !globalState[n(1564)][n(1083)] && (globalState[n(711)] = true, console[n(585)](n(1060))), null == (i = this[n(1062)]) ? void 0 : i[n(486)](this, arguments)
                }
            }), redefine(n, t(1352), {
                value: function () {
                    const i = t;
                    this[i(1139)][i(486)](this, arguments), this[i(1479)][i(575)] = true;
                }
            }), redefine(n, t(1397), {
                value: function (i) {
                    var n;
                    const a = t;
                    i[a(609)] && (i[a(609)][a(1036)] = false), i[a(664)] && (i[a(664)][a(1036)] = false);
                    const e = null == (n = i[a(559)]) ? void 0 : n[a(692)];
                    if (e) {
                        const t = SGS[a(877)][e] || "";
                        t && i[a(1573)] && i[a(1573)](t);
                    }
                    return this[a(1072)][a(486)](this, arguments)
                }
            }), redefine(n, t(1279), {
                value: function (i, n, a, e, c, o, l) {
                    const r = t;
                    return 435 == e && (o = 387), 651 == o && (o = 751), this[r(1491)][r(486)](this, [i, n, a, e, c, o, l])
                }
            }), redefine(n, t(866), {
                value: function () {
                    const i = t;
                    this[i(1090)](845, 488, 845), this[i(808)][i(712)] += 100, this[i(1468)][i(712)] += 100;
                    let n = {};
                    n[i(987)] = {}, n[i(987)][i(777)] = {}, n[i(987)][i(777)][i(1212)] = [14, 135, 103, 64, 6005, 144, 32, 4300, 6004, 12053, 327, 25, 130, 2, 15, 16, 6, 7, 138, 112], this[i(1279)](this[i(707)], [14, 135, 103], this[i(1087)], 71, 46, 287, 0), this[i(1279)](this[i(707)], [64, 6005, 144, 32, 4300, 6004, 12053], this[i(1583)], 435, 46, 387, 0), this[i(1279)](this[i(707)], [327, 25, 130, 2, 6, 7, 138, 112], this[i(655)], 71, 194, 751, 0);
                }
            });
        }(), async function () {
            const i = _0x336e,
                t = laya[i(963)](i(498), null, 0)[i(1314)],
                n = t[i(1035)];
            typeof n == i(765) && !n[i(577)]()[i(1449)](i(1330)) && Object[i(1344)](t, i(1035), {
                value: function () {
                    const a = i;
                    if (n[a(486)](this, arguments), Object[a(602)](this) === t) {
                        const i = null == this ? void 0 : this[a(1163)];
                        if (!(null == i ? void 0 : i[a(1267)])) return false;
                        let {
                            x: t,
                            y: n,
                            width: e,
                            height: c,
                            _labelColors: o,
                            _labelPadding: l,
                            textField: {
                                fontSize: r,
                                font: u,
                                bold: s
                            },
                            constructor: v
                        } = i, x = new v;
                        Object[a(832)](x, {
                            label: a(567),
                            labelStroke: 2,
                            strokeColors: a(1442),
                            width: e,
                            height: c,
                            labelSize: r,
                            labelFont: u,
                            labelBold: s,
                            _labelColors: o,
                            _labelPadding: l
                        }), x[a(847)](a(682), a(933), a(1219), a(1462), a(933)), this[a(945)](x), x[a(474)](165, 39), x.on(Laya[a(653)][a(1203)], this, getmail);
                    }
                },
                configurable: true
            });
        }(), async function () {
            var i;
            const t = _0x336e;
            redefine(null == (i = laya[t(963)](t(1497), null, 0)) ? void 0 : i[t(1314)], t(543), {
                value: function (i) {
                    var n;
                    const a = t;
                    let e = null == i ? void 0 : i[a(910)];
                    if (6 == e && globalConfig[a(1174)]) return this[a(1129)]();
                    if (1 == e && _0x23f5c8[a(1034)][a(952)] && i[a(834)][a(1502)](((i, t) => _0x23f5c8[a(1034)][a(952)][i] - _0x23f5c8[a(1034)][a(952)][t])), this[a(1026)][a(486)](this, arguments), 1 == e)
                        if (this[a(1376)]) this[a(1376)][a(1036)] = true;
                        else {
                            let i = laya[a(963)](a(1484));
                            this[a(1376)] = i, this[a(945)](i), i[a(847)](a(1372), a(1020), a(637), a(1121)), i[a(474)](670, 270), i[a(1054)] = 100, i[a(646)] = true, i.on(Laya[a(653)][a(1203)], this, (function () {
                                var i;
                                const t = a;
                                this[t(1551)] && (this[t(1551)][t(1036)] = !this[t(1551)][t(1036)]), globalConfig[t(1382)] = null == (i = this[t(1551)]) ? void 0 : i[t(1036)];
                            }));
                        }
                    else this[a(1376)] && (this[a(1376)][a(1036)] = false);
                    if (1 == e && _0x23f5c8[a(1034)][a(952)] && _0x23f5c8[a(1034)][a(652)] && globalConfig[a(1382)]) {
                        this[a(745)][a(875)](((t, n) => {
                            const e = a;
                            let c = i[e(834)][n];
                            t[e(1575)] = "第" + _0x23f5c8[e(1034)][e(952)][c] + "类型", 3 == _0x23f5c8[e(1034)][e(952)][c] ? t[e(648)] = !0 : 1 == _0x23f5c8[e(1034)][e(952)][c] && t[e(1325)] && (t[e(1325)][e(1036)] = true, setTimeout((() => {
                                const i = e;
                                t[i(1325)][i(1329)] = false;
                            }), 100));
                        }));
                        let t = Math[a(1304)](...i[a(834)][a(1286)]((i => _0x23f5c8[a(1034)][a(952)][i]))),
                            n = new(Laya[a(943)]);
                        n[a(646)] = false, Object[a(832)](n[a(809)], {
                            width: 507,
                            color: a(723),
                            fontSize: 15,
                            fontFamily: a(1517),
                            stroke: 1,
                            strokeColor: a(746)
                        }), n[a(1513)] = a(1191) + _0x23f5c8[a(1034)][a(652)][a(931)](t)[a(695)]("") + a(1430), n[a(1036)] = globalConfig[a(1382)], this[a(945)](n), this[a(1551)] = n, n[a(474)](150, t <= 1 ? -40 : t >= 3 ? 176 : 38);
                    } else 2 == e && (null == (n = this[a(1551)]) || n[a(1056)](), delete this[a(1551)], this[a(745)][a(875)](((t, n) => {
                        var e;
                        const c = a;
                        null == (e = t[c(1325)]) || e[c(1568)](), [11, 12, 29][c(1449)](i[c(834)][n]) && (t[c(648)] = true);
                    })));
                },
                configurable: true
            });
        }(), async function () {
            const i = _0x336e,
                t = await wait((() => laya[i(1357)](i(1386))), 60, 1e3),
                {
                    SystemSets: n,
                    SkillSets: a
                } = t || {};
            redefine(a, i(1055), {
                value: function () {
                    const t = i;
                    return 11 == laya[t(1206)] || this[t(721)]
                }
            });
        }(), async function () {
            var i, t, n;
            const a = _0x336e;
            redefine(null == (n = null == (t = null == (i = laya[a(963)](a(616), {
                NeedLevel: 0
            }, 0)) ? void 0 : i[a(883)]) ? void 0 : t[0]) ? void 0 : n[a(1314)], a(1481), {
                value: function () {
                    var i;
                    const t = a;
                    let n = this[t(919)][t(486)](this, arguments);
                    return (null == (i = this.vo) ? void 0 : i[t(731)]) && (n[t(861)] = t(1313), n.on(Laya[t(653)][t(1203)], this, (async () => {
                        var i, n;
                        const a = t;
                        let e = (null == (i = this.vo) ? void 0 : i[a(731)]) || 0;
                        (null == (n = laya[a(1357)](a(1438))) ? void 0 : n[a(1225)]) ? laya[a(1357)](a(1293))[a(625)]([e]): _0x5ec234(a(573));
                    }))), n
                }
            });
        }(), async function () {
            const i = _0x336e,
                t = laya[i(1357)](i(782));
            Object[i(1344)](t, i(635), {
                get: () => 1 / 0,
                set: () => {},
                configurable: true
            }), Object[i(1344)](t, i(770), {
                get: () => 11 == laya[i(1206)],
                set: () => {},
                configurable: true
            });
        }(), async function () {
            var i, t, n;
            const a = _0x336e;
            redefine(null == (n = null == (t = null == (i = laya[a(963)](a(1453), void 0, 0, (i => i[a(1223)](1)))) ? void 0 : i[a(897)]) ? void 0 : t[a(1314)]) ? void 0 : n[a(1314)], a(1275), {
                value: function () {
                    const i = a;
                    this[i(1324)][i(486)](this, arguments), globalConfig[i(703)] && (!this[i(1591)] && (this[i(1591)] = laya[i(963)](i(1484)), this[i(945)](this[i(1591)])), this[i(1591)][i(479)] = 17, this[i(1591)][i(861)] = this[i(1461)][i(598)](0));
                }
            });
        }(), async function () {
            var i;
            const t = _0x336e;
            redefine(null == XMLHttpRequest ? void 0 : XMLHttpRequest[t(1419)], t(969), {
                value: function (i, n, ...a) {
                    const e = t;
                    (null == globalConfig ? void 0 : globalConfig[e(1033)]) && (n = _0x232342(n)), this[e(1319)][e(1323)](this, i, n, ...a);
                },
                configurable: true
            }), redefine(null == (i = laya[t(1357)](t(900))) ? void 0 : i[t(1419)], t(1003), {
                value: function () {
                    var i, n, a, e, c;
                    const o = t;
                    if ((null == globalConfig ? void 0 : globalConfig[o(1033)]) && this[o(506)] == o(913)) {
                        if (null == (i = this[o(634)]) ? void 0 : i[o(1449)](o(903))) return this[o(1310)](Laya[o(653)][o(1170)]);
                        if (null == (n = this[o(634)]) ? void 0 : n[o(1449)](o(1339))) return null == (c = null == (e = null == (a = this[o(640)]) ? void 0 : a[o(1156)]) ? void 0 : e[o(1303)]) ? void 0 : c.call(e)
                    }
                    this[o(901)][o(486)](this, arguments);
                },
                configurable: true
            });
        }(), async function () {
            const i = _0x336e;
            const t = laya[i(1357)](i(1098));
            redefine(t, i(1417), {
                value: function (t, n) {
                    const a = i;
                    if (t === 1 / 0) return function (i) {
                        var t;
                        const n = _0x336e;
                        if (!(null == i ? void 0 : i[n(1498)])) return [];
                        const a = [],
                            e = [i];
                        for (; e[n(1083)] > 0;) {
                            let i = e[n(480)](),
                                c = null == (t = i[n(510)]) ? void 0 : t[n(1423)]((i => i[n(1498)]));
                            (null == c ? void 0 : c[n(1083)]) ? e[n(1440)](...c): a[n(1440)](i);
                        }
                        return a
                    }(this[a(1530)][a(610)])[a(875)]((i => this[a(1579)][a(1323)](this, i, 0)));
                    (null == globalConfig ? void 0 : globalConfig[a(816)]) && (n = 0), this[a(1579)][a(1323)](this, t, n);
                }
            }) && globalConfig[i(816)] && t[i(1417)](1 / 0, 0);
        }(), async function () {
            var i, t, n, a;
            const e = _0x336e;
            redefine(null == (i = laya[e(963)](e(929), null, 0)) ? void 0 : i[e(1314)], e(1012), {
                value: function (i) {
                    var t;
                    const n = e;
                    return globalConfig[n(1431)] && (null == (t = game[3731]) ? void 0 : t[n(787)]((t => null == t ? void 0 : t[n(787)]((t => t == i[n(603)]))))) ? "炁" : ""
                }
            }), redefine(null == (a = null == (n = null == (t = laya[e(963)](e(726), null, 0)) ? void 0 : t[e(899)]) ? void 0 : n.call(t)) ? void 0 : a[e(1314)], e(1573), {
                value: function (i) {
                    const t = e;
                    return this[globalConfig[t(1431)] && "炁" == i ? t(838) : t(819)][t(486)](this, arguments)
                }
            });
        }();
    }
    async function login() {
        const i = _0x15b77c;
        try {
            if (!_0x50b7cf[i(1426)] || _0x4cee3c[i(1449)](_0x50b7cf[i(1426)])) return;
            laya.on(i(531), laya[i(1007)], (function () {
                const t = i;
                null == this || this[t(1310)](t(1586));
            })), window[i(1373)][i(577)]()[i(1449)](i(1264)) && laya.on(i(741), window, (function () {
                this[i(1373)]();
            })), globalState[i(618)] = _0x4e0a10(_0x50b7cf[i(532)] + i(757), globalState[i(618)]), Object[i(832)](paper[i(693)], _0x4e0a10(_0x50b7cf[i(1426)] + i(621), {}, true)), await wait((() => {
                var t;
                const n = i;
                let a = null == (t = laya[n(1357)](n(1122))) ? void 0 : t[n(887)],
                    {
                        clientId: e,
                        nickname: c,
                        guildID: o,
                        guildName: l,
                        Level: r,
                        vipLevel: u,
                        guildFlagBG: s,
                        guildFlagFG: v
                    } = a || {};
                if (e == _0x50b7cf[n(1426)] && c && r && (l || !o)) return Object[n(832)](_0x50b7cf, {
                    nickname: c,
                    guildID: o,
                    guildName: l,
                    Level: r,
                    vipLevel: u
                }), true
            }), 60, 1e3)[i(972)]((i => i && setTimeout(activate))), backgroundWorker[i(606)](), setProto();
            let t = document[i(1207)](i(558));
            t[i(639)] = i(1213) + _0x50b7cf[i(1426)], t[i(556)] = function () {
                const n = i;
                toClipboard(_0x50b7cf[n(1426)], false), t[n(639)] = n(492), setTimeout((() => {
                    const i = n;
                    t[i(1536)] = i(1213) + _0x50b7cf[i(1426)];
                }), n(549));
            };
            let n = document[i(1207)](i(1247));
            n[i(639)] = i(964) + _0x50b7cf[i(472)], n[i(556)] = function () {
                const t = i;
                toClipboard(_0x50b7cf[t(472)], false), n[t(639)] = t(492), setTimeout((() => {
                    const i = t;
                    n[i(1536)] = i(964) + _0x50b7cf[i(472)];
                }), t(549));
            }, document[i(1207)](i(1272))[i(639)] = i(1374) + _0x50b7cf[i(1272)], document[i(1207)](i(1384))[i(507)](i(1364), _0x50b7cf[i(472)] || ""), _0x4e0a10(i(706)) && _0x4e0a10(i(706)) != _0x50b7cf[i(472)] && (document[i(1207)](i(1384))[i(604)] = _0x4e0a10(i(706))), Date[i(1288)]() < new Date(i(803)) && globalConfig[i(872)] && wait((() => _0x50b7cf[i(1426)] && _0x50b7cf[i(472)]), 30, 1e3, (t => {
                var n;
                const a = i;
                if (!t) return _0x5ec234(a(592));
                fetchInviteList((null == (n = globalState[a(1384)]) ? void 0 : n[a(996)]()) || _0x50b7cf[a(472)]);
            })), Date[i(1288)]() >= new Date(i(803)) && (document[i(1168)](i(1138))[0][i(809)][i(985)] = i(1063)), gameRecordAll[_0x50b7cf[i(1426)]] ? setGameRecord(gameRecordAll[_0x50b7cf[i(1426)]]) : gameRecordAll[_0x50b7cf[i(1426)]] = gameRecord, getseven(_0x50b7cf[i(1426)]);
        } catch (t) {
            console[i(1359)](t);
        }
    }
    async function getseven(i, t = [26, 35, 44, 5, 7]) {
        const n = _0x15b77c,
            a = laya[n(963)](n(898));
        a[n(558)] = i, gameRecord[n(853)] = new Set(t), setTimeout((() => {
            const i = n;
            Array[i(791)](gameRecord[i(853)], (t => a[i(1141)](t))), laya[i(561)](i(898), 1e3);
        }), 0);
    }
    async function kanshu() {
        var i, t, n;
        const a = _0x15b77c,
            e = laya[a(1357)](a(1342));
        if (e && (null == (i = laya[a(1357)](a(719))) ? void 0 : i[a(1377)]) && (await wait((() => {
                var i, t;
                return (null == (i = e[a(638)]) ? void 0 : i[a(1251)]) || (null == (t = e[a(941)]) ? void 0 : t.call(e))
            }), 30, 1e3), 1 == (null == (t = e[a(638)]) ? void 0 : t[a(1251)]))) {
            let i = 100 * e[a(638)][a(1190)] + 12130001;
            null == (n = laya[a(1357)](a(846))) || n[a(599)](i), wait((() => {
                var t;
                return null == (t = laya[a(1357)](a(821))) ? void 0 : t[a(1064)](i)
            }))[a(972)]((() => {
                var t;
                return null == (t = e[a(1146)]) ? void 0 : t.call(e, i)
            }));
        }
    }
    async function yueka() {
        var i;
        const t = _0x15b77c,
            n = laya[t(963)](t(793));
        if (n[t(784)](), null == (i = n[t(1030)]) ? void 0 : i[t(1173)]) {
            n[t(833)]();
            for (let i = 0; i < 4; i++) n[t(660)](i);
        }
        laya[t(561)](t(793), 1e3);
        const a = laya[t(963)](t(555));
        a[t(784)](), "领取" == a[t(1085)][t(1214)] && a[t(833)](), laya[t(561)](t(555), 1e3);
    }
    async function dummy() {}
    async function wujiang() {
        var i, t, n, a, e;
        const c = _0x15b77c,
            o = laya[c(963)](c(1444)),
            l = 1e3 * (null == (e = null == (a = null == (n = null == (t = null == (i = null == o ? void 0 : o[c(629)]) ? void 0 : i[c(502)]) ? void 0 : t[c(1214)]) ? void 0 : n[c(1378)](":")) ? void 0 : a[c(1286)](Number)) ? void 0 : e[c(951)](((i, t, n) => i + t * Math[c(1501)](60, 2 - n)), 0)) || 0;
        l ? setTimeout(wujiang, l) : o[c(1e3)](8100101, 3), laya[c(561)](c(1444), 5e3), wait((() => laya[c(786)](c(926))))[c(972)]((i => null == i ? void 0 : i[c(1129)]()));
    }
    async function drum() {
        var i;
        const t = _0x15b77c,
            n = laya[t(963)](t(1205), void 0);
        null == n || n[t(501)](), n[t(1295)](), await sleep(1e3);
        let a = null == (i = null == n ? void 0 : n[t(1531)]) ? void 0 : i[t(1394)]((i => i[t(891)]));
        timer[t(1084)](t(1154), (() => null == a ? void 0 : a[t(1216)]()), 300, (null == a ? void 0 : a[t(891)]) || 0, (() => laya[t(561)](t(1205), 500)));
    }
    async function autoSign(i = false) {
        var t, n, a, e, c, o;
        const l = _0x15b77c;
        try {
            await sleep(1e4);
            const r = laya[l(963)](l(1320), void 0, 1e4);
            if (2 == (null == r ? void 0 : r[l(1527)]))
                for (let t = 0; t < r[l(1531)][l(1083)]; t++) {
                    let n = r[l(1531)][t][l(970)].ID;
                    9020101 != n && n[l(577)]()[l(1336)]("90") && i || 1 == r[l(1531)][t][l(910)] && (r[l(1531)][t][l(1472)](), _0x5ec234(l(1455)), await sleep(500));
                }
            for (let i = 0; i < (null == r ? void 0 : r[l(525)][l(1083)]); i++) 3 == r[l(525)][i][l(910)] && (r[l(525)][i][l(1472)](), await sleep(500));
            _0x50b7cf.v && ((null == (t = laya[l(1357)](l(1342))) ? void 0 : t[l(1371)]) && (null == (n = laya[l(1357)](l(1342))) || n[l(620)](0)), !1 === (null == (a = laya[l(1357)](l(846))) ? void 0 : a[l(515)](laya[l(1507)](13360001))) && _0xcf0117(true, 13360001, 1), !1 === (null == (e = laya[l(1357)](l(846))) ? void 0 : e[l(515)](laya[l(1507)](11578201))) && _0xcf0117(true, 11578201, 1), (null == (c = laya[l(1357)](l(630))) ? void 0 : c[l(593)]()) && laya[l(1357)](l(630))[l(570)](), (null == (o = laya[l(1357)](l(630))) ? void 0 : o[l(1188)]()) && laya[l(1357)](l(630))[l(801)]());
        } catch (r) {
            console[l(1359)](r);
        }
    }

    function getgift(i = "") {
        const t = _0x15b77c,
            n = laya[t(963)](t(1534));
        n[t(505)][t(1591)] = i, n[t(1361)](), laya[t(561)](t(1534), 1e4);
    }
    async function getmail() {
        var i, t, n, a, e, c, o, l, r;
        const u = _0x15b77c,
            s = (null == this ? void 0 : this[u(1418)]) == u(498) ? this : laya[u(786)](u(498)) || laya[u(963)](u(498), void 0, 3e4),
            v = null == s ? void 0 : s[u(1554)];
        if (Array[u(642)](null == v ? void 0 : v[u(836)])) {
            null == (t = null == (i = laya[u(1357)](u(1293))) ? void 0 : i[u(960)]) || t.call(i), await sleep(1e3);
            for (const i of ((null == (n = s[u(1436)]) ? void 0 : n[u(533)]) || [])[u(1423)]((({
                    mid: i
                }) => i))) {
                let t = i[u(1093)];
                if (i[u(820)] == u(921) || i[u(820)] == u(717)) null == (a = s[u(1436)]) || a[u(1243)](t);
                else if (i[u(1044)]) {
                    i[u(1013)] || null == (e = s[u(1436)]) || e[u(1327)](t);
                    let n = i[u(1158)],
                        a = (null == (c = i[u(876)][u(1379)](u(767))) ? void 0 : c[0]) ?? "",
                        x = i[u(718)] && i[u(718)] != u(1294) ? i[u(718)] : "";
                    if (1 == n) {
                        let t = x ? 2 : 0;
                        v[u(748)](t, i), null == (o = v[u(836)][t]) || o[u(833)](), null == (l = v[u(836)][t]) || l[u(1129)](), v[u(976)]();
                    } else 2 == n && (null == (r = s[u(1436)]) || r[u(708)](a, t, x));
                    await sleep(500), setTimeout((() => {
                        var n;
                        const a = u;
                        i[a(1013)] && i[a(478)] && (null == (n = s[a(1436)]) || n[a(1243)](t));
                    }), 1e3);
                }
            }
        }
    }
    const secKill = (() => {
            const i = _0x15b77c;
            let t, n, a = null,
                e = 0,
                c = "";
            const o = function (t, n, o = "", r = 1e3) {
                var u;
                const s = i;
                if (!1 === t) l(), timer[s(1550)](s(1572)), _0x5ec234(s(804));
                else if (void 0 !== t && t !== a) {
                    e = n || timer[s(1288)]();
                    let i = e - r,
                        l = i - timer[s(1288)]();
                    a = t, c = o || (null == (u = laya[s(1507)](t)) ? void 0 : u[s(1418)]) || "", _0x5ec234((l / 6e4)[s(598)](1) + s(918) + c), timer[s(624)](s(1572), (() => {
                        var i;
                        return null == (i = laya[s(1007)]) ? void 0 : i[s(1310)](s(1094))
                    }), i);
                }
                return a
            };

            function l() {
                const t = i;
                a = null, document[t(1029)](t(1052))[t(875)]((i => {
                    i[t(1415)] = false;
                }));
            }

            function r(t = 300) {
                const a = i;
                null == n || n[a(863)](), timer[a(1084)](a(1572), (() => {
                    const t = a;
                    var e, c, o, r, u;
                    null == n || n[t(863)](), (0 != (null == (c = null == (e = n) ? void 0 : e[i(1422)]) ? void 0 : c[i(1036)]) || !(null == (u = null == (r = null == (o = null == e ? void 0 : e[i(1580)]) ? void 0 : o[i(1086)]) ? void 0 : r[i(1449)]) ? void 0 : u.call(r, "0/"))) && (l(), timer[t(1550)](t(1572)));
                }), t);
            }
            return o.on = function (o = 900, l = 50) {
                const u = i;
                timer[u(1084)](u(1572), (() => {
                    var i;
                    const o = u;
                    return t = laya[o(1394)](o(916), o(1464), o(1215)) || laya[o(963)](o(1215)), (null == (i = null == t ? void 0 : t[o(1531)]) ? void 0 : i[o(1083)]) ? (n = t[o(1531)][o(1394)](((i, t) => {
                        var n;
                        return t == a || (null == (n = i[o(622)]) ? void 0 : n[o(1109)]) == a
                    })), typeof (null == n ? void 0 : n[o(863)]) == o(765) && (timer[o(624)](o(1572), r, e + 50), void _0x5ec234(o(1001) + c))) : null
                }), l, o / l | 0, (() => _0x5ec234(u(1434))));
            }, o
        })(),
        confirm = (() => {
            function i(i = {}, t = "", n = null) {
                var a;
                const e = _0x336e;
                if (!(null == this ? void 0 : this[e(1540)])) return null;
                if (Object[e(675)](i)[e(787)]((([i, t]) => this[e(1540)][i] != t))) return false;
                typeof n == e(1404) && this[e(914)] && (this[e(914)][e(868)] = n, this[e(1299)]());
                let c = this[e(1540)][e(1433)][e(1394)]((i => i[e(861)] == t)),
                    o = null == c ? void 0 : c[e(1181)];
                return (null == c ? void 0 : c[e(1118)]) && (null == c ? void 0 : c[e(1181)]) && c[e(1118)][e(486)](c[e(1181)], c[e(1058)]), (null == (a = this[e(1540)]) ? void 0 : a[e(1027)]) && this[e(1119)](), o
            }
            return function (t = {}, n = "", a = null, e = 1e3) {
                var c;
                const o = _0x336e;
                return e ? sleep(e)[o(972)]((() => {
                    var e;
                    return i[o(1323)](null == (e = laya[o(1357)](o(768))) ? void 0 : e[o(1543)], t, n, a)
                })) : i[o(1323)](null == (c = laya[o(1357)](o(768))) ? void 0 : c[o(1543)], t, n, a)
            }
        })();
    async function _0xcf0117(i = false, t, n, a = null, e = null, c = 0, o = null) {
        const l = _0x15b77c;
        let r = [...arguments];
        if (typeof r[0] == l(1404) ? r[l(480)]() : i = false, r[l(1083)] < 2) return null;
        const u = laya[l(963)](l(1076));
        u[l(983)](...r), i ? (u[l(1509)](), laya[l(561)](l(1076))) : (u[l(1467)](), delete laya[l(496)][l(1076)]);
    }
    async function invite(i = _0x15b77c(1520), t = false) {
        var n, a, e, c, o, l, r;
        const u = _0x15b77c;
        let s = null == (a = null == (n = laya[u(1357)](u(1122))) ? void 0 : n[u(944)](i)) ? void 0 : a[u(920)];
        if (s || (s = await new Promise((t => {
                const n = u;
                let a = laya[n(963)](n(1122));
                a[n(990)] = i, laya[n(1357)](n(1122))[n(576)](a), a.on(n(1277), a, (() => t(a[n(920)]))), laya[n(1357)](n(1122))[n(1224)](i);
            }))), !s) return t && _0x5ec234(u(906));
        let v = null == (e = laya[u(1357)](u(1293))) ? void 0 : e[u(1326)];
        return (null == (o = null == (c = null == v ? void 0 : v[u(1368)]) ? void 0 : c[u(1449)]) ? void 0 : o.call(c, s)) ? t && _0x5ec234(u(773)) : (null == v ? void 0 : v[u(1341)]) >= 3 ? t && _0x5ec234(u(1343)) : (null == (r = null == (l = laya[u(1357)](u(1293))) ? void 0 : l[u(1403)]) || r.call(l, s), t && _0x5ec234(u(663)))
    }

    function reorderCard(i = _0x15b77c(1112)) {
        const t = _0x15b77c,
            n = {
                CardNumber: (i, n) => i[t(559)][t(1112)] - n[t(559)][t(1112)],
                CardFlower: (i, n) => {
                    var a;
                    return i[t(559)][t(1046)] - (null == (a = n[t(559)]) ? void 0 : a[t(1046)])
                }
            } [i],
            a = laya[t(1394)](t(912), laya[t(1291)], t(991), t(1562));
        return !(!(null == a ? void 0 : a[t(1581)]) || !n) && (a[t(1581)][t(1502)](n), a[t(1581)][t(875)]((i => (i[t(1550)](false), i[t(1569)](a)))), a[t(1244)](), true)
    }
    async function setCardBack() {
        var i, t;
        const n = _0x15b77c,
            a = null == (t = null == (i = laya[n(670)][n(845)][n(1409)][0][n(1562)][n(1581)]) ? void 0 : i[0]) ? void 0 : t[n(1314)];
        console[n(978)](n(1257)), redefine(a, n(636), {
            value: function () {
                var i;
                const t = n;
                this[t(497)][t(486)](this, arguments), _0x50b7cf.v && globalConfig[t(495)] && 0 == (null == (i = this[t(806)]) ? void 0 : i[t(692)]) && (this[t(1559)][t(1287)] = Laya[t(1396)][t(588)](t(1577)));
            }
        });
    }
    const _0x281bb0 = _0x220f;
    ! function (i, t) {
        const n = _0x220f,
            a = _0x2837();
        for (;;) try {
            if (636608 === parseInt(n(128)) / 1 + parseInt(n(361)) / 2 * (parseInt(n(494)) / 3) + parseInt(n(446)) / 4 * (-parseInt(n(493)) / 5) + parseInt(n(206)) / 6 + -parseInt(n(451)) / 7 + -parseInt(n(391)) / 8 * (parseInt(n(380)) / 9) + parseInt(n(259)) / 10) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0x2adee3 = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x220f(285)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x3346ba = _0x2adee3(globalThis, (function () {
            const i = _0x220f;
            let t;
            try {
                t = Function(i(314) + i(241) + ");")();
            } catch (e) {
                t = window;
            }
            const n = t[i(294)] = t[i(294)] || {},
                a = [i(535), i(534), i(178), i(323), i(441), i(522), i(330)];
            for (let c = 0; c < a[i(315)]; c++) {
                const t = _0x2adee3[i(389)][i(427)][i(184)](_0x2adee3),
                    e = a[c],
                    o = n[e] || t;
                t[i(269)] = _0x2adee3[i(184)](_0x2adee3), t[i(190)] = o[i(190)][i(184)](o), n[e] = t;
            }
        }));
    _0x3346ba();
    const {
        localGet: _0xc293d9,
        localSet: _0x30ed79,
        localDel: _0x1ff167,
        initMap: _0x16cb5f,
        allCard: _0x16d8ff,
        n2C: _0x1023a2,
        n2N: _0x1ec9c1
    } = window[_0x281bb0(219)], _0x422bc4 = C3rHCNrFDgLTzq(), DI = 0, DING = 65280;

    function _0x2837() {
        const i = ["ruzgrunux0jmt0nlx1nxsvrdsa", "CxvLCNK", "BgLTAxq", "yxv0B0rYDw1tD2L0y2G", "ywz0zxjIzwDPBG", "55UU5QchsuqG", "y29UC29Szq", "Dg9ju09tDhjPBMC", "C2v0uhjVCgvYDhK", "Ag9Uz3nOyq", "Dw5ZAgLMDa", "zMLYC3rjra", "CxvLCNLtzwXLy3rVCKfSBa", "C2HVDW", "sgfZu2TPBgW", "ChvZAa", "z2v0vgLTzxPVBMvpzMzZzxq", "y291BNrLCG", "DhvYBG", "BxLtzwf0CW", "54Mm5Acg5yID5AEl5yYw5A6m5OIq", "w+E0Oos/Rv3LVOxLIiBPHy0", "qvvut19tuuTFu1Djveni", "ChjLDG", "yxv0B1L1zuTHu3DPDgnO", "z2vK", "CMv0DxjUicHMDw5JDgLVBIGPia", "BgvUz3rO", "zw5K", "ms0Yntu", "C3vIC3rYAw5N", "57Ut5P2F5zco", "AgvPC2HH", "6AQf6AQDkZe", "EMHHBKzHsxrLBxm", "zxjYB3i", "qKXpq0TFu0TjteXFruzgrunux1nxsvrdsa", "q2fYze5HBwu", "C3rHCNq", "BwfW", "5BYd54Mm6zI25Q61", "C3vPDa", "DhjHy2u", "ywXSugfWzxjtD2L0y2G", "C3bSAxq", "Aw5Uzxjive1m", "DMfSDwvZ", "yMXVy2TizwfSrwzMzwn0u3DPDgnO", "5Ase55cg5yY6", "q2HHBMDLq291BNq", "yxnZAwDU", "Aw5UzxjuzxH0", "uefereLorW", "5y+K6zsT5yIa", "u3bLBgXjra", "5yE654Mm6zI25Q61", "y3jLyxrLrwXLBwvUDa", "5RI45OIp5BEY57Ut5P2F77Yb", "ywz0zxjLBMq", "C29Tzq", "AgvHCNq", "CgfKzgLUzW", "C2v0txLjra", "z2vUzxjHBhm", "icdMO4dMN6xLKi3NP7aGiG", "AxneB3veAvPODq", "zgvSzxrLuhjVCgvYDhK", "BwfYA2vKq2fYza", "Dg9WtwvUDq", "C3r5Bgu", "q0fsrf9cqunlx1nxsvrdsa", "ie5LDYbdyxjKie1VDMvK", "BM9xDvHPzvn3AxrJAa", "mJu4nZKWrMrqBuLZ", "Aw5Zzxj0qwrQywnLBNrive1m", "C2TPCfDPBMrVD1n3AxrJAa", "y2fYzejHy2TtD2L0y2G", "5lIj5P2/5PAN", "ywrK", "Dgv4Da", "54Mm5AcgkoA4UoAiJ+w8GowNI+wjJsKG", "zMLUzeTA", "tefcruXZ", "CMvZDwX0", "yxv0B1nrs1n3AxrJAa", "CxvLzgLUz1n3AxrJAa", "DhLWzq", "BwfYA1nWzwXS", "zxzLCNK", "5lYK5A6Z6zsM5zUk", "5yIK5A6A6zI25Q61", "C2vHDa", "mJa5nZu0tLHmreTK", "CgfPzhvP", "quXmx1bbuevsx1nxsvrdsa", "u2vUzeHLyxj0yMvHCNq", "CMvKDwnL", "zgvSzxrL", "5yIK5A6A5yY6", "ie5VienHCMqGwW", "y29SB3i", "y29UC3rYDwn0B3i", "zgv0ywLS", "mtm2z25MuMrj", "C2TPCfbYB2jxAw5KB3DtD2L0y2G", "zMLUza", "AwrLBNrPzNKGzxjYB3i6ia", "y2fYzhm", "5BYd54Mm5Acg", "57sR6AQnlte", "y29UzMLNsgfUzenHCMrZuMvQzwn0zwq", "6z2s6yET5yMr", "zgLZywjSzwq", "u0TjtL9tv0Luq0G", "4P2mioEBRUAGH0Leia", "y2fYza", "z2v0rwXLBwvUDej5swq", "A25VD25dyxjKCW", "Bw92zq", "mI0Yntu", "AM9PBG", "yxv0B1nPz25tD2L0y2G", "C2v0", "C2HVDxbHAq", "Dw5WywnR", "DgvTCa", "y2fYzeXHyMvSu3DPDgnO", "5lQK5O2I5lI05PE25yY6", "qKXpq0TFu0Hbx0vgrKvdvf9tv0Luq0G", "veLbtLnivv9tv0Luq0G", "C2vHDfvju3DPDgnO", "pc9ZCgfUpJWVzgL2pG", "yMXVy2TtA2LSBevMzMvJDfn3AxrJAa", "yxv0B0LUDML0zvn3AxrJAa", "yMXVy2TlAwXSrwzMzwn0u3DPDgnO", "q0rlx05pveLgsunbveLptL9tv0Luq0G", "zMLYC3rfBgvTzw50q2HPBgq", "AxnhDw9AAgfU", "y3vYCMvUDeLe", "ChjVDg90ExbL", "kZhPQAW", "5RI45OIp5Asw", "5zUE5zci5BYa5AEl5PE2", "iJOG5OMl54Mm5lIT5PYjia", "CgfJAW", "C3bSAwnL", "5lUb546l55U+", "z2vUzxjHBerPy3q", "zwzMzwn0qMXVy2TtD2L0y2G", "5lIi5ywR55+B", "5zUE5zci57Ut5P2F5zco", "qKXpq0TFu0TjtL9tvefurv9tv0Luq0G", "z2fTzxnJzw5L", "zxHJzxb0Aw9U", "z2vUzxjHBa", "C3rYAw5N", "vefts19wsva", "CwLWywLdyxjKCW", "ndK5nKrptM9YyG", "BxLjra", "zNvUy3rPB24", "qKXpq0TFru5uuKfoq0vFruzgrunux1nxsvrdsa", "zMLSBa", "ntiWmtG4mKHIyNrqCq", "zMLUzeLUzgv4", "yMXVy2TtAgffzMzLy3rtD2L0y2G", "r29VzhncyxnLsuq", "Bwf0y2G", "pgrPDIbPzd0I", "BNvTyMvY", "y2XHC3nmAxn0", "5AsA5AsA55Uk5zAe", "u2vYDMvYvgLTzq", "C2vHDfvjCW", "lM1PEMH1", "EM9Uzxm", "A2v5CW", "C291CMnL", "z2fTzvjLy29Yza", "phnWyw4+", "y2XHC3m", "C29YDa", "B3jKzxi", "zwXLBwvUDa", "C3fR", "yMvMB3jLzw5K", "yMXVy2TtA2LUu3rHDgvtD2L0y2G", "ugXVDeLe", "Aw5PDa", "Aw5JBhvKzxm", "AxneDwfUwgLHBG", "qvvut19tsuDox1nxsvrdsa", "x2j1DhrVBG", "yMXVy2TkAw5Uyw5NrwzMzwn0u3DPDgnO", "iZiZmJaXza", "v1vysuvFu1Djveni", "vMfSDwu", "W5C8l3nWyw4+pgjYpG", "y2XLyxi", "uunbuKq", "55M96zo254UU", "qvvut19zvuvlqv9tv0Luq0G", "yxv0B1rHC2TtD2L0y2G", "Cg9Z", "qKXpq0TFs0Lmtf9frKzfq1rFu1Djveni", "ndG0nwTYvhHJuW", "mJfhuLHIq2W", "5A+s5yAW5yMr", "w1b1yKDZq01VDMvdyxjKxEwfIoAjI+s9JEE9RJO", "lthPQAW", "D3v4AwvtD2L0y2G", "y29UzMLNsgfUzenHCMrZ", "q09vtLrFre9xtL9tv0Luq0G", "AxnqyxnZzwq", "y29UDgfPBNm", "5zUE5zci57Ut5P2F5PE2", "yMXVy2TfBNrYyw5JzuvMzMvJDfn3AxrJAa", "qKXpq0TFsKLotKfor19frKzfq1rFu1Djveni", "A2v5", "u0Tjuf9quK9cx1DjtKrpv19tv0Luq0G", "zNjVBunVzgvqB2LUDa", "CwLWywK", "C3bLBgXtCgfJzq", "zgvSyxK", "y29YCG", "qvvut19tsuDox1nlsvbFu1Djveni", "DgLHBNnODvn3AxrJAa", "yxv0B1D1sMLHBMDtD2L0y2G", "y3jLyxrL", "qKXpq0TFsevbtf9frKzfq1rFu1Djveni", "B2jQ", "yxbWzw5Kq2HPBgq", "57UD5B2XkZe", "y3LHBG", "DgfIBgu", "yxv0B1nPz25tA2LWu3DPDgnO", "5OMl54MmsuqG", "DxnLCKLe", "z2v0", "5yEg5Ash6zI25Q61", "6zUm6zUe5yMr", "ls1oBY1JB250zw50", "u0Tjuf9xsu5et1DFu1Djveni", "Dgv4DenVBNrLBNq", "Aw5Zzxj0qwrQywnLBNrfBgvTzw50", "5PYX6zUa5OMh", "D2fYBG", "Bg9N", "z2v0sxrLBq", "B3v0zxjive1m", "C2XPy2u", "xsa+ia", "5BYd54Mm5lI05PE25yY6", "5BgE5OcN5P2a", "Bg9UzW", "z2vUzxjHBfn3AxrJAa", "uwnHCMq", "AxrLCMf0B3i", "x2TLEq", "kcq0kq", "y2XHC3noyw1L", "CgHYyxnL", "5RI45OIp5BYa5AEl77YbwW", "DgLTzw91DeLK", "Dw5RBM93BG", "55Qe5y2IkZe", "C3bHzgu", "mtaYotyWoezIAuLRvW", "q2XVC2vxAw5KB3C", "C2TPCefeu3DPDgnO", "DgfZA3m", "zMLUzeLeCW", "z3jLzw4", "C2HPzNq", "vgLTzxjnyw5Hz2vY", "C2L6zq", "qvvut19jtLzjvevFu1Djveni", "zNjVBuvUDhjPzxm", "BwfYAW", "zM9UDfnPEMu", "5AsN5A6Blte", "iIbJBgfZCZ0IBwfYA2vKq2fYzci+phnWyw4Gy2XHC3mGpsaNBwfYAYC+", "y2X1yG", "uK9hvuvFq0Luwv9tv0Luq0G", "54IQ6BUekZe", "y2fYzfr5CguGAw5Hy3rPDMu", "xsbnB3zLza", "CM9NDwvdAxr5u3DPDgnO", "q0rltM90AwzPy2f0Aw9Uu3DPDgnO", "CM91BMq", "B3DUs2v5CW", "BgfIzwW", "5OMl54Mm57UF6k6HoG", "yxjLyvnLCNzLCKXHyMvS", "zgf0yxnLDa", "5lU75Osp5P2a", "5Qgdl+MfKG", "y2fYzeXPC3q", "zg9Tq29UDgfPBMvY", "5RI45OIp5BEY6yEn572U77Yb5RI45OIp5y2Z5Bcg5BYa5AEl77Yb", "q2fYzenVBMzPz1DPBMrVDW", "Aw50zxj2ywXjza", "5yw1l+s5Ka", "CMvWBgfJzq", "zgvZDhjVEq", "C2HVDxbHAsbs", "zgvHBenHCMq", "5Pg454Mm6zI25Q61", "qvvut19euLvnx1nxsvrdsa", "Aw5KzxG", "BMnU", "z2v0t3jKzxi", "y29Uy2f0", "u0Tjuf9brf9tv0Luq0G", "CgHHC2u", "EM9Uzq", "CMv2zxjZzq", "Aw5MBW", "y3vYCMvUDeHW", "6lwK5ywulte", "BxnNqMXVy2TtD2L0y2G", "C3bLBgXeAwn0", "C3fRtMfTzq", "yMLUza", "z3jVDxbZ", "5OUgl+MHUG", "EM9UzuLe", "z2v0twLUDxrLCW", "zMXHDe1HCa", "Dg9tDhjPBMC", "C2vHDeLe", "C2vYDMvYlxn5BMm", "tvnhx0jmt0nlx1nxsvrdsa", "mtiTmJu1", "6lsV55+Z5PAN", "AxnbCNjHEq", "56wE6B6z5Pgg5Bc+", "zNjVBq", "y291BNq", "C2vHDfbVCW", "q0fsrf9mqujftf9tv0Luq0G", "qvvut19xvuPjqu5hx1nxsvrdsa", "CgfPzhvPq2fYzhm", "ic0+iowpR+IdVEwqJEENSdO", "zxzLBNq", "mZK1mtyXmM92tK1hzW", "BM93", "DgL0Bgu", "B3jKzxjjrhm", "C2v0twLUDxrLCW", "r0vorvjbtf9tv0Luq0G", "C3DHCa", "yxv0B0THBLnODvn3AxrJAa", "5PA55AsP5OIF", "xsbtAg93BG", "AwrLBNrPzNK", "Axnhyw1Lu3rHCNq", "yM9uDq", "u0Dt", "yMfJA2DYB3vUzenVBg9Y", "uvvfreLor19tv0Luq0G", "C2TPBK1HCa", "zgLHBw9Uza", "u0vbvf9vsv9tv0Luq0G", "iowmUEMfJEE7K+AENdOG", "5BYa5AEl5PE2", "4PYfioAjGoACIEEBRUAGH+MdVEwmUEMfJEAiKowkN++8JoI/LowBNIb0CNvL", "qvvut19wsva", "y2vPBa", "iU+8JowjQEs9Msa", "Aw5KzxHpzG", "zMLSDgvY", "6BQs6BQF5BYt", "zw50CMLLCW", "C2TPBLbHCgvYu3DPDgnO", "zgLZCgXHEq", "5zUE5Ps25yY6", "57Ut5P2F5PE2", "z2fTzq", "BM9Uzq", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "ioAxOoAZLEwmUEMfJE+8JoI/LowBNIbMywXZzq", "zhjHDW", "AgfZ", "AxntAgfUsgvuDq", "tK9Fv1vysuvFu1Djveni", "zM9YrwfJAa", "oNnJB3bLpI5ZAg91CgfP", "5OMl5yIW5Pos5P2L", "jdi+", "y2fYzeLeC09YzgvY", "C2TPBLn3AxrJAa", "BM9Kzxm", "zNjVBunOyxjdB2rL", "AgvHza", "CMvZzxq", "ic0+iownOEEjJowqJEENSdOG", "57Ut5P2F6zI25Q61", "mZKYmJqYmfrwEePpCq", "u0TjtL9qqvbfuL9tv0Luq0G", "y291BNreB3DUu3DPDgnO", "qvvut19lqu5tsfvFu1Djveni", "6z2s6B6z5yIa", "u2vHDeLe", "yxv0B0jVDfn3AxrJAa", "CMvTB3zL", "icdINjmG5l2/55sO5lQgmEw8OcaI", "BMv4Da", "x19WCM90B19F", "zNjPzw5Kr2vUzxjHBa", "pc9ZCgfUpJXICJ4", "y2fYzfr5CguGywn0AxzL", "C2vSzwn0", "qvvut19uqvnlx1nxsvrdsa", "5lIa5lQm5lIj5zUB5lQu5ywT5lId5ywR", "C2vHDeLeCW", "DxbKyxrL", "BMfTzq", "z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y", "u2vSzLnLyxrvAq", "CgXVDa", "yMXVy2TjBNrLCMfJDevMzMvJDfn3AxrJAa", "y2fYzfr5CgvezxrHAwW", "u1DbucbdyxjKifS", "yxbWBhK", "yNv0Dg9U", "qKXpq0TFsu5urvjbq1rFruzgrunux1nxsvrdsa"];
        return (_0x2837 = function () {
            return i
        })()
    }
    const RAND = 65282,
        globalState = {
            inviteName: "",
            UsedGeneralSkinID: {
                UsedGeneralSkinID: {}
            },
            goods: [],
            lotteries: [],
            closeIframe: false,
            autoBotStatus: 30,
            autoBotInfinite: false,
            recGoods: {},
            configHandCards: [],
            configHandCardsRejected: false
        };
    let Id_Key_Value = [
        [_0x281bb0(349), _0x281bb0(340), 0],
        [_0x281bb0(252), _0x281bb0(401), false],
        [_0x281bb0(543), _0x281bb0(211), false],
        [_0x281bb0(436), _0x281bb0(288), false],
        [_0x281bb0(235), _0x281bb0(260), true],
        [_0x281bb0(331), _0x281bb0(382), false],
        [_0x281bb0(364), _0x281bb0(358), false],
        [_0x281bb0(418), _0x281bb0(224), true],
        [_0x281bb0(409), _0x281bb0(479), false],
        [_0x281bb0(523), _0x281bb0(513), false],
        [_0x281bb0(421), _0x281bb0(137), false],
        [_0x281bb0(291), _0x281bb0(169), false],
        [_0x281bb0(515), _0x281bb0(202), false],
        [_0x281bb0(213), _0x281bb0(262), false],
        [_0x281bb0(312), _0x281bb0(489), false],
        [_0x281bb0(363), _0x281bb0(530), false],
        [_0x281bb0(392), _0x281bb0(507), false],
        [_0x281bb0(130), _0x281bb0(174), true],
        [_0x281bb0(149), _0x281bb0(423), true],
        [_0x281bb0(498), _0x281bb0(483), false],
        [_0x281bb0(181), _0x281bb0(193), false],
        [_0x281bb0(148), _0x281bb0(144), true],
        [_0x281bb0(414), _0x281bb0(201), true],
        [_0x281bb0(514), _0x281bb0(417), true],
        [_0x281bb0(373), _0x281bb0(221), true],
        [_0x281bb0(261), _0x281bb0(500), true],
        [_0x281bb0(372), _0x281bb0(310), true],
        [_0x281bb0(490), _0x281bb0(274), true],
        [_0x281bb0(420), _0x281bb0(324), false],
        [_0x281bb0(282), _0x281bb0(287), false],
        [_0x281bb0(481), _0x281bb0(505), false],
        [_0x281bb0(422), _0x281bb0(492), false],
        [_0x281bb0(504), _0x281bb0(449), false],
        [_0x281bb0(335), _0x281bb0(517), false],
        [_0x281bb0(453), _0x281bb0(416), false],
        [_0x281bb0(360), _0x281bb0(246), false],
        [_0x281bb0(474), _0x281bb0(439), false]
    ];
    const globalConfig = new Proxy(Object[_0x281bb0(138)](Id_Key_Value[_0x281bb0(327)]((([i, t, n]) => (null === localStorage[_0x281bb0(536)](t) && _0x30ed79(t, n), [i, _0xc293d9(t, n)])))), {
            set: function (i, t, n) {
                var a;
                const e = _0x281bb0,
                    c = Id_Key_Value[e(393)]((([i]) => i === t));
                if (!c) return false;
                const o = c[1];
                _0x30ed79(o, n);
                if (window[e(205)] && (null == (a = window[e(205)][e(390)]) ? void 0 : a[e(465)]) === e(192)) return i[t] = n, true;
                let l = {
                    username: _0x422bc4[e(525)],
                    settingKey: t,
                    value: n
                };
                return _0x422bc4.v && debounce(recSetting(l), 300), i[t] = n, t == e(349) && (window[e(349)] = n), true
            }
        }),
        UI = {
            seatWidthPercent: .3,
            firstUpdateSeatUI: false,
            scoreFrameTotal: 10,
            scoreFrameIndex: 0,
            paddingLeft: 10,
            paddingRight: 15,
            paddingTop: 30,
            paddingBottom: 0,
            paddingLeftTopExtra: 0,
            selectStarted: false,
            leftRightTop: 20,
            stackCardAreaHeight: 0,
            stackCardAreaY: 0,
            MAX_SEAT_WIDTH: 149,
            inPopFirstTarget: false,
            unscaledWidth: 146,
            unscaledHeight: 172,
            MAX_HEIGHT: 180,
            MAX_WIDTH: 150,
            scale: 1,
            selfSeatUiUnscaledHeight: 178,
            rightBarWidth: 221,
            seatUIs: [],
            cities: []
        },
        gameRecord = {};

    function _0x220f(i, t) {
        const n = _0x2837();
        return _0x220f = function (t, a) {
            let e = n[t -= 117];
            if (void 0 === _0x220f.RZkVGQ) {
                _0x220f.UEFcRC = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x220f.RZkVGQ = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x220f.UEFcRC(e), i[c] = e), e
        }, _0x220f(i, t)
    }

    function setGameRecord(i) {
        Object[_0x281bb0(338)](gameRecord, i);
    }
    const gameRecordAll = _0xc293d9(_0x281bb0(466), {}),
        rogueMap = {},
        timer = {
            tasks: {},
            corr: 0,
            shift: 0,
            now(i = true) {
                const t = _0x281bb0;
                return Date[t(207)]() + this[t(512)] + (i ? 0 : this[t(134)])
            },
            sync(i) {
                const t = _0x281bb0;
                this[t(512)] = 1e3 * (i[t(460)] - 28800) - Date[t(207)](), this[t(134)] && (i[t(460)] += this[t(134)] / 1e3 | 0);
            },
            update(i = Date[_0x281bb0(207)]()) {
                var t;
                const n = _0x281bb0;
                null == (t = laya[n(468)](n(135))) || t[n(383)](i);
            },
            modify(i = null) {
                const t = _0x281bb0;
                this[t(134)] = i ? i - this[t(207)]() : 0, this[t(277)]();
            },
            local(i) {
                const t = _0x281bb0;
                let n = new Date(i ?? this[t(207)]()),
                    a = n[t(304)]();
                return n[t(210)](n[t(188)]() - a), n[t(295)]()
            },
            loop(i, t, n, a = 1 / 0, e) {
                const c = _0x281bb0;
                this[c(486)](i);
                let o = setInterval((() => {
                    const n = c;
                    t(), --a <= 0 && (this[n(486)](i), typeof e === n(448) && e());
                }), n);
                return this[c(131)][i] = {
                    intervalId: o,
                    callback: t
                }, this[c(131)][i][c(162)]
            },
            delay(i, t, n) {
                const a = _0x281bb0;
                this[a(486)](i);
                let e = setTimeout((() => {
                    this[a(486)](i), t();
                }), n);
                return this[a(131)][i] = {
                    timeoutId: e,
                    callback: t
                }, this[a(131)][i][a(124)]
            },
            set(i, t, n, a = 18e5) {
                const e = _0x281bb0;
                this[e(486)](i);
                const c = this[e(207)](),
                    o = (n ?? c) - c;
                if (o > 1) {
                    let c = setTimeout((() => this[e(410)](i, t, n, a)), o < a ? o : a);
                    this[e(131)][i] = {
                        timeoutId: c,
                        callback: t
                    };
                } else t();
            },
            trigger(i) {
                const t = _0x281bb0;
                if (!this[t(131)][i]) return null;
                let {
                    timeoutId: n,
                    callback: a
                } = this[t(131)][i];
                return n && (clearTimeout(n), delete this[t(131)][i]), typeof a == t(448) && (a(), true)
            },
            clear(...i) {
                const t = _0x281bb0;
                !0 === i[0] && (i = Object[t(464)](this[t(131)])), i[t(232)]((i => this[t(131)][i]))[t(327)]((i => {
                    const n = t;
                    if (!this[n(131)][i]) return null;
                    let {
                        intervalId: a,
                        timeoutId: e
                    } = this[n(131)][i];
                    return e && clearTimeout(e), a && clearInterval(a), delete this[n(131)][i], i
                }));
            }
        },
        game = new Proxy({
            turn: 0,
            round: 0,
            phase: 0,
            currentID: void 0,
            isGameStart: true,
            isPassed: false,
            spellSpace: {},
            domContainer: [_0x281bb0(413), _0x281bb0(175), _0x281bb0(150), _0x281bb0(306), _0x281bb0(239), _0x281bb0(542)][_0x281bb0(384)](((i, t, n) => (i[t] = i[n] = [], i)), {}),
            end(i) {
                const t = _0x281bb0;
                !this[t(217)] && i || this[t(501)] || (this[t(217)] = false, this[t(501)] = true, UI[t(461)] = [], UI[t(270)] = 0, getSeatUIs(null), laya[t(256)](), document[t(300)](t(462))[t(247)]((i => i[t(357)][t(236)] = t(240))), console[t(534)](t(345)), globalState[t(490)] && laya[t(313)][t(205)](t(444), true)), i && this[t(501)] && (this[t(501)] = false, this[t(306)] = 0, this[t(150)] = 0, this[t(175)] = 0, this[t(426)] = void 0, this[t(510)] = {}, getseven(_0x422bc4[t(525)]), room[t(256)](), console[t(534)](t(160)), retry((() => laya[t(476)]())));
            },
            ready(i) {
                const t = _0x281bb0;
                this[t(316)](true), room[t(158)] = i;
                let n = _0x16cb5f[t(251)][t(232)]((n => i[t(477)](n))),
                    a = n[t(173)](i[t(232)]((i => !n[t(477)](i))))[t(232)](Boolean);
                Qcard[t(476)](a), Zone[t(476)](a, t(407)), room[t(425)] = i[t(477)](1150), room[t(353)] = i[t(477)](13005), room[t(245)] = i[t(477)](20100), domInit(), room[t(245)] && patchSkinBtn(), [3338][t(247)]((i => delete this[t(510)][i])), console[t(534)](t(308)), laya[t(313)][t(129)](t(161)), globalState[t(499)] = [], globalState[t(398)] = false, recGameRecord(1, []);
            },
            start() {
                const i = _0x281bb0;
                !this[i(217)] && room[i(136)] && (this[i(217)] = true, this[i(501)] = false, console[i(534)](i(123) + room[i(276)] + i(539) + room[i(307)]), laya[i(476)](), resetOrderContainer(), hideOrderContainer(room[i(136)]), Zone[i(243)]());
            },
            enter(i, t, n) {
                var a, e, c, o, l, r, u, s, v, x, f, z, G;
                const w = _0x281bb0;
                if (i > 0) this[w(306)] = i, this[w(150)] = 0, this[w(486)](w(306)), null == (c = null == (e = null == (a = laya[w(440)]) ? void 0 : a[w(280)]) ? void 0 : e[w(322)]) || c[w(247)]((i => {
                    const t = w;
                    void 0 !== (null == i ? void 0 : i.n) && [2033, 2034, 2035, 2036, 2037, 2038, 2048, 2049, 2050, 2196, 2197, 2300, 2301][t(477)](i[t(475)]) && (i[t(484)] = i.n = 0);
                })), 1 == i && this[w(326)]();
                else {
                    0 == t ? (this[w(306)] ? this[w(426)] == room[w(447)] && (this[w(510)][w(249)] = this[w(510)][w(459)] = 0) : this[w(326)](), null == (r = null == (l = null == (o = laya[w(440)]) ? void 0 : o[w(280)]) ? void 0 : l[w(322)]) || r[w(247)]((i => {
                        const t = w;
                        void 0 !== (null == i ? void 0 : i.n) && [2100, 2101, 2108, 2109, 2110, 2312, 2313, 2317, 2319, 2320, 2321, 2322][t(477)](i[t(475)]) && (i[t(484)] = i.n = 0), this[t(426)] == room[t(447)] && [2079, 2080, 2081, 2082, 2083, 2084][t(477)](i[t(475)]) && (i[t(484)] = 0);
                    })), this[w(426)] = n, this[w(150)]++, this[w(175)] = 0, (null == (s = null == (u = room[w(461)][0]) ? void 0 : u[w(379)]) ? void 0 : s[w(302)](3031)) && this[w(426)] == room[w(447)] && laya[w(139)](true, w(309)), [7011, 3090, 2143, 3271, 3659][w(247)]((i => delete this[w(510)][i])), document[w(404)](w(329))[w(339)] = "", document[w(404)](w(218))[w(339)] = "", document[w(404)](w(371))[w(333)] = "", Zone[w(243)](w(407)), this[w(486)](w(150)), !0 === globalState[w(265)] && laya[w(290)] > 0 && (null == (z = null == (f = null == (x = null == (v = laya[w(440)]) ? void 0 : v[w(356)]) ? void 0 : x[w(154)]) ? void 0 : f[w(367)]) ? void 0 : z[w(477)]("身份")) && (this[w(426)] == room[w(461)][w(232)]((i => i[w(379)][w(179)] > 0))[w(327)]((i => i[w(379)][w(170)]))[w(538)](-1)[0] ? laya[w(313)][w(205)](w(228), 3) : this[w(426)] != room[w(447)] && laya[w(313)][w(205)](w(228), true))) : this[w(175)]++, this[w(486)](w(175));
                    let i = document[w(404)](w(122)),
                        a = parseInt(null == (G = i[w(339)][w(455)](/\(([0-9])\)$/)) ? void 0 : G[1]);
                    this[w(175)] == a ? i[w(339)] = i[w(339)][w(164)](/(回合)?(.{2,3})(阶段)? ?\(([0-9])\)$/, w(250) + [w(226), "准备", "判定", "摸牌", "出牌", "弃牌", "结束", w(238), w(319)][t] + w(120)) : i[w(339)] = [w(430), w(527), w(378), w(168), w(343), w(328), w(258), w(503), w(438)][t] + " (" + this[w(175)] + ")";
                }
            },
            record({
                use: i = 0,
                mo: t = 0
            }) {
                var n, a;
                const e = _0x281bb0;
                let c = null == (a = null == (n = laya[e(440)]) ? void 0 : n[e(280)]) ? void 0 : a[e(322)];
                (null == c ? void 0 : c[e(315)]) && (this[e(510)][e(197)] = (this[e(510)][e(197)] || 0) + t, this[e(510)][e(459)] = (this[e(510)][e(459)] || 0) + (t ? 1 : 0), this[e(510)][e(249)] = (this[e(510)][e(249)] || 0) + (i ? 1 : 0), this[e(510)][e(365)] = (this[e(510)][e(365)] || 0) + (1 == i ? 1 : 0), c[e(247)]((i => {
                    const t = e;
                    [2042, 2043, 2044][t(477)](i[t(475)]) ? i[t(484)] = this[t(510)][t(365)] % 3: 2143 == i[t(475)] ? i[t(484)] = this[t(510)][t(197)] % 6 : 2104 == i[t(475)] ? i[t(484)] = this[t(510)][t(197)] % 9 : [2079, 2080, 2081][t(477)](i[t(475)]) ? i[t(484)] = this[t(510)][t(249)] : [2082, 2083, 2084][t(477)](i[t(475)]) && (i[t(484)] = this[t(510)][t(459)]);
                })));
            },
            clear(i, t, n) {
                const a = _0x281bb0;
                let e = this[a(159)][i];
                for (let c = e[a(315)] - 1; c >= 0; c--) void 0 === n && t !== e[c][a(342)] && e[c][a(199)]--, (!(e[c][a(199)] > 0) || t === e[c][a(342)] && n === e[c][a(264)]) && (e[c][a(471)][a(266)](), e[a(433)](c, 1));
            }
        }, {
            ownKeys(i) {
                const t = _0x281bb0;
                return Reflect[t(151)](i[t(510)])
            },
            getOwnPropertyDescriptor(i, t) {
                const n = _0x281bb0;
                return Object[n(279)](i[n(510)], t)
            },
            deleteProperty(i, t) {
                const n = _0x281bb0;
                return Reflect[n(354)](i[n(510)], t)
            },
            get(i, t, n) {
                const a = _0x281bb0;
                return t in i ? i[t] : Reflect[a(526)](i[a(510)], t, i[a(510)])
            },
            set(i, t, n, a) {
                const e = _0x281bb0;
                return t in i ? i[t] = n : Reflect[e(410)](i[e(510)], t, n, i[e(510)]), true
            }
        }),
        room = {
            cardList: [],
            seatUIs: [],
            seatIDs: [],
            orderIDs: [],
            mySeats: [],
            generals: {},
            shift: 0,
            isShanHeTu: false,
            isGuoZhan: false,
            isDouDiZhu: false,
            size: void 0,
            firstID: void 0,
            isDuanXian: false,
            get myID() {
                var i;
                const t = _0x281bb0;
                return this[t(307)][0] ?? (null == (i = this[t(461)][0]) ? void 0 : i[t(191)]) ?? this[t(276)][0]
            },
            seatPos: (i = 8) => ({
                0: [],
                1: [0],
                2: [0, 4],
                3: [0, 3, 5],
                4: [0, 1, 4, 7],
                5: [0, 1, 3, 5, 7],
                6: [0, 1, 3, 4, 5, 7],
                7: [0, 1, 2, 3, 5, 6, 7],
                8: [0, 1, 2, 3, 4, 5, 6, 7]
            } [i]),
            dealCard: () => null,
            reset() {
                const i = _0x281bb0;
                this[i(478)] = false, this[i(158)] = [], this[i(461)] = [], this[i(276)] = [], this[i(209)] = [], this[i(307)] = [], this[i(351)] = {}, this[i(134)] = 0, this[i(245)] = false, this[i(425)] = false, this[i(353)] = false, this[i(136)] = void 0, this[i(299)] = void 0, this[i(167)] = (t, n) => {
                    const a = i;
                    t = parseInt(t), this[a(209)][a(477)](t) || (void 0 === this[a(299)] && (this[a(299)] = t, console[a(534)](a(496) + t)), this[a(209)][a(303)](t), n > 0 && !this[a(307)][a(477)](t) && (this[a(307)][a(315)] ? this[a(307)][a(303)](t) : this[a(350)](t)), this[a(277)](false, this[a(209)])), this[a(209)][a(315)] == this[a(136)] && (this[a(167)] = () => null);
                };
            },
            getSeatUI(i) {
                const t = _0x281bb0;
                return this[t(461)][t(393)]((n => n[t(191)] == i)) || {}
            },
            getOrder(i) {
                var t;
                const n = _0x281bb0;
                if (this[n(461)][n(315)]) return null == (t = this[n(461)][n(393)]((t => t[n(191)] == i))) ? void 0 : t[n(470)];
                let a = this[n(276)][n(231)](this[n(299)] ?? this[n(276)][0]) % this[n(136)],
                    e = this[n(276)][n(231)](parseInt(i));
                return -1 !== e ? (e - a + this[n(136)]) % this[n(136)] : void 0
            },
            getIndex(i) {
                const t = _0x281bb0;
                if (this[t(461)][t(315)]) return this[t(461)][t(452)]((n => n[t(191)] == i));
                let n = (this[t(276)][t(231)](this[t(307)][0]) + this[t(134)]) % this[t(136)],
                    a = this[t(276)][t(231)](parseInt(i));
                if (a < 0) return;
                let e = (a - n + this[t(136)]) % this[t(136)];
                return this[t(200)]()[e]
            },
            getID(i) {
                var t;
                const n = _0x281bb0;
                if (this[n(461)][n(315)]) return null == (t = this[n(461)][this[n(200)]()[n(231)](parseInt(i))]) ? void 0 : t[n(191)];
                let a = (this[n(276)][n(231)](this[n(307)][0]) + this[n(134)]) % this[n(136)],
                    e = this[n(200)]()[n(231)](parseInt(i));
                if (e < 0) return;
                let c = (e + a + this[n(136)]) % this[n(136)];
                return this[n(276)][c]
            },
            sequence(i) {
                const t = _0x281bb0;
                let n = this[t(276)][t(231)](i);
                return n < 0 ? [] : this[t(276)][t(538)](n)[t(173)](this[t(276)][t(538)](0, n))
            },
            update(i, t = this[_0x281bb0(209)]) {
                const n = _0x281bb0;
                if ((t = t[n(538)]())[n(315)] > this[n(276)][n(315)] || t[n(315)] == this[n(276)][n(315)] && !1 !== i) this[n(276)] = t, this[n(136)] = t[n(315)];
                else if (i) {
                    for (let i = t[n(315)]; i < this[n(136)]; i++) t[n(303)](((t[i - 1] ?? -1) + 1) % this[n(136)]);
                    this[n(276)] = t, this[n(136)] = t[n(315)];
                }
                this[n(243)]();
            },
            fromUI(i = []) {
                var t;
                const n = _0x281bb0;
                this[n(461)] = i, this[n(136)] = this[n(461)][n(315)], this[n(299)] = (null == (t = this[n(461)][n(393)]((i => 0 == i[n(470)]))) ? void 0 : t[n(191)]) ?? this[n(299)], this[n(276)] = this[n(461)][n(327)]((i => i[n(191)])), this[n(350)](this[n(461)][0][n(191)]), this[n(243)]();
            },
            setMyID(i) {
                const t = _0x281bb0;
                if (void 0 !== i && this[t(307)][0] !== i) {
                    let n = this[t(307)][t(231)](i);
                    n > -1 && this[t(307)][t(433)](n, 1), this[t(307)][t(298)](i);
                }
            },
            setGeneral(i, t, n = 0, a = false) {
                const e = _0x281bb0;
                if (!_0x16cb5f[e(435)][t]) return;
                this[e(351)][i] || (this[e(351)][i] = Array(this[e(425)] ? 2 : 1)[e(450)](0)), this[e(351)][i][n] = t, this[e(425)] && !a && timer[e(511)](e(461), (() => laya[e(461)]()), 3e3);
                let c = this[e(172)](i),
                    o = document[e(404)](c + 1);
                o && o[e(357)][e(296)](e(529), '"' + room[e(278)](i) + '"');
            },
            find(i, t, n = false) {
                var a;
                const e = _0x281bb0;
                return Array[e(196)](t) || (t = [t]), null == (a = this[e(351)][i]) ? void 0 : a[e(393)]((i => t[e(393)]((t => {
                    var a;
                    return n ? null == (a = _0x16cb5f[e(222)][i]) ? void 0 : a[e(244)](t) : i == t
                }))))
            },
            name(i, t = true) {
                var n, a, e, c;
                const o = _0x281bb0;
                let l = this[o(172)](i);
                if (void 0 === l) return "";
                let r = (null == (n = this[o(351)][i]) ? void 0 : n[o(315)]) > 1 ? this[o(351)][i][o(327)]((i => _0x16cb5f[o(435)][i])) : [null == (c = null == (e = null == (a = this[o(461)][o(393)]((t => t[o(191)] == i))) ? void 0 : a[o(379)]) ? void 0 : e[o(442)]) ? void 0 : c[o(325)]];
                return null === t && 1 != (null == r ? void 0 : r[o(315)]) && (r = []), ((null == r ? void 0 : r[o(347)](Boolean)) ? r[o(327)]((i => i || "暗"))[o(408)]("丨") : o(275)[l] + "号位") + (t ? "丨" + o(275)[l] : "")
            },
            draw() {
                const i = _0x281bb0;
                this[i(276)][i(247)]((t => {
                    const n = i;
                    let a = this[n(172)](t),
                        e = document[n(404)](a + 1);
                    if (!e) return;
                    let c = room[n(278)](t);
                    e[n(357)][n(296)](n(529), '"' + c + '"');
                })), getSeatUIs();
            }
        },
        Qcard = new Proxy({
            name: {},
            color: Array[_0x281bb0(198)]({
                length: 7
            }, (() => new Set)),
            number: Array[_0x281bb0(198)]({
                length: 14
            }, (() => new Set)),
            query: new Set,
            select: {
                name: new Set,
                color: new Set,
                number: new Set
            },
            cards: [],
            QCARD: class {
                constructor(i, t, n, a, e) {
                    const c = _0x281bb0;
                    this.id = i, this[c(278)] = t, this[c(388)] = n, this[c(457)] = a, this[c(374)] = e, this[c(506)] = -1;
                } [_0x281bb0(281)](i) {
                    const t = _0x281bb0;
                    let n = this[t(480)];
                    if (!n) {
                        if (n = this[t(480)] = document[t(344)](t(286)), n[t(121)] = this[t(388)] <= 2 ? t(166) : t(411), !this.id) return n;
                        n.id = t(117) + this.id, n[t(333)] = t(467) + (_0x1023a2(this[t(388)]) + _0x1ec9c1(this[t(457)])) + t(271) + this[t(278)][t(318)](0, 2);
                    }
                    return (this[t(506)] != i || 1 == i) && (this[t(506)] = i, n[t(357)][t(220)] = ["", t(521), t(482), t(133)][i] ?? "", n[t(208)] = ["牌堆", "", t(396), "销毁"][i] || Card[t(369)](this.id)[t(463)][t(327)]((i => {
                        const n = t;
                        let [a, e, c] = i[n(332)]("-")[n(327)]((i => parseInt(i)));
                        return Zone[n(278)](e, a, null, c, c)
                    }))[t(408)]("/")), n
                }
            },
            [Symbol[_0x281bb0(118)]]: function* () {
                const i = _0x281bb0;
                for (let t of this[i(395)]) void 0 !== t && (yield t);
            },
            add(i, t = null) {
                const n = _0x281bb0;
                if (!i) return;
                let {
                    name: a,
                    color: e,
                    number: c,
                    type: o
                } = _0x16d8ff[i];
                a in this[n(278)] || (this[n(278)][a] = new Set), this[n(278)][a][n(366)](i), this[n(388)][e][n(366)](i), this[n(457)][c][n(366)](i), this[n(374)][o][n(366)](i), 3 == e && c >= 2 && c <= 9 && this[n(457)][0][n(366)](i), a[n(455)](/^(冰|火|雷)?杀$/) && this[n(388)][Math[n(229)](e / 2) + 4][n(366)](i), this[n(395)][i] = new(this[n(487)])(i, a, e, c, o), null !== t && this[n(305)](i, t);
            },
            init(i) {
                const t = _0x281bb0;
                this[t(278)] = {}, this[t(388)] = Array[t(198)]({
                    length: 7
                }, (() => new Set)), this[t(457)] = Array[t(198)]({
                    length: 14
                }, (() => new Set)), this[t(374)] = Array[t(198)]({
                    length: 4
                }, (() => new Set)), this[t(289)] = new Set, this[t(273)] = {
                    name: new Set,
                    color: new Set,
                    number: new Set
                }, this[t(395)] = [], i[t(247)]((i => this[t(366)](i)));
            },
            counter(i, t) {
                const n = _0x281bb0;
                let {
                    name: a,
                    number: e,
                    color: c
                } = _0x16d8ff[i ?? 0];
                if (!(void 0 === i || i && a && void 0 !== this[n(278)][a])) return;
                let o = Zone[n(125)];
                (i ? [a] : Object[n(464)](this[n(278)]))[n(247)]((i => {
                    const t = n;
                    let a = o[t(232)]((n => this[t(278)][i][t(244)](n)))[t(315)],
                        e = document[t(404)](i);
                    e && (e[t(531)] = a > 1 ? a + i : i, e[t(121)] = t(a > 0 ? 272 : 146));
                })), (i ? [e] : Object[n(464)](this[n(457)]))[n(247)]((i => {
                    const t = n;
                    let a = o[t(232)]((n => {
                            var a;
                            return null == (a = this[t(457)][i]) ? void 0 : a[t(244)](n)
                        }))[t(315)],
                        e = document[t(404)](t(457) + i);
                    e && (e[t(531)] = (0 == i ? "电" : _0x1ec9c1(i)) + "*" + a, e[t(121)] = t(a > 0 ? 272 : 146));
                })), (i ? [5, 6][n(232)]((t => this[n(388)][t][n(244)](i)))[n(173)](c) : [1, 2, 3, 4, 5, 6])[n(247)]((i => {
                    var t;
                    const a = n;
                    let e = o[a(232)]((t => this[a(388)][i][a(244)](t)))[a(315)],
                        c = document[a(404)](["", a(348), a(223), a(127), a(143), a(297), a(320)][i]);
                    c && (c[a(333)] = null == (t = c[a(333)]) ? void 0 : t[a(164)](/-?[0-9]+/, String(e)));
                })), i ? this[n(289)][n(244)](i) && this[i][n(281)](0 == t ? 0 : 1) : this[n(243)]();
            },
            onquery(i, t) {
                const n = _0x281bb0;
                if (this[n(273)][i][n(385)](t)) {
                    if (this[n(273)][i][n(136)]) return Array[n(198)](this[i][t])[n(247)]((i => this[n(289)][n(385)](i))), void this[n(243)]()
                } else this[n(273)][i][n(366)](t);
                this[n(289)] = [n(278), n(457), n(388)][n(232)]((i => this[n(273)][i][n(136)]))[n(384)](((i, t) => new Set(Array[n(198)](this[n(273)][t])[n(189)]((i => Array[n(198)](this[t][i])))[n(232)]((t => !i[n(136)] || i[n(244)](t))))), new Set), this[n(243)]();
            },
            queryone(i, t) {
                const n = _0x281bb0;
                this[n(289)] = new Set(Array[n(198)](this[i][t])), this[n(243)]();
            },
            draw() {
                const i = _0x281bb0,
                    t = document[i(404)](i(283));
                if (t[i(333)] = "", 0 == this[i(289)][i(136)]) return;
                let n = new Set(Zone[i(125)]),
                    a = new Set(Zone[i(509)]);
                Object[i(234)](_0x16cb5f[i(251)][i(232)]((t => this[i(289)][i(244)](t)))[i(384)](((t, e) => {
                    var c;
                    const o = i;
                    return n[o(244)](e) ? t[0][o(303)](e) : a[o(244)](e) ? t[2][o(303)](e) : (null == (c = Card[o(526)](e)[0]) ? void 0 : c[o(176)]) == o(194) ? t[3][o(303)](e) : t[1][o(303)](e), t
                }), [
                    [],
                    [],
                    [],
                    []
                ]))[i(247)]((([n, a]) => a[i(247)]((a => t[i(519)](this[i(395)][a][i(281)](Number(n)))))));
            }
        }, {
            get(i, t, n) {
                const a = _0x281bb0;
                return typeof t === a(457) || typeof t === a(443) && !isNaN(t) ? i[a(395)][t] : Reflect[a(526)](...arguments)
            }
        }),
        _Card = class i {
            static[(_b = _0x281bb0(506), _c = _0x281bb0(253), _d = _0x281bb0(185), _e = _0x281bb0(370), _0x281bb0(152))](t) {
                const n = _0x281bb0;
                if (i[n(185)][n(244)](t)) return i[n(185)][n(526)](t);
                const a = i[n(370)][n(134)]();
                return i[n(185)][n(410)](t, a), a
            }
            constructor(t, n = null, a = _0x281bb0(194), e = null, c = null) {
                var o;
                const l = _0x281bb0;
                this[l(119)] = t, this[l(176)] = a, this.id = n ?? (null == (o = this[l(268)]) ? void 0 : o.id) ?? this[l(506)], this[l(268)] = e, this[l(311)] = c, i[l(253)][l(244)](t) || i[l(253)][l(410)](t, new Set), i[l(253)][l(526)](t)[l(366)](this);
            }
            get[_0x281bb0(255)]() {
                const i = _0x281bb0;
                let t = this;
                for (; t[i(311)];) t = t[i(311)];
                return t
            }
            get[_0x281bb0(316)]() {
                const i = _0x281bb0;
                let t = this;
                for (; t[i(268)];) t = t[i(268)];
                return t
            }
            get[_0x281bb0(506)]() {
                return this[_0x281bb0(119)]
            }
            set[_0x281bb0(506)](t) {
                const n = _0x281bb0;
                this[n(119)] != t && (i[n(253)][n(526)](this[n(119)])[n(385)](this), this[n(119)] = t, i[n(253)][n(244)](t) || i[n(253)][n(410)](t, new Set), i[n(253)][n(526)](t)[n(366)](this));
            }
            static[_0x281bb0(526)](t) {
                const n = _0x281bb0;
                return i[n(253)][n(244)](t) ? Array[n(198)](i[n(253)][n(526)](t)) : []
            }
            static[_0x281bb0(232)](t = Boolean) {
                const n = _0x281bb0;
                return Array[n(198)](i[n(253)][n(334)]())[n(189)]((i => Array[n(198)](i)))[n(232)](t)
            }
            static[_0x281bb0(476)](t, n) {
                const a = _0x281bb0;
                return i[a(506)] = 0, i[a(253)] = new Map, i[a(185)] = new Map([
                    [0, "?"]
                ]), i[a(370)] = Array[a(198)]({
                    length: 62
                }, ((i, t) => String[a(254)](t + 65))), t[a(327)]((t => new i(0, t, n)))
            } [_0x281bb0(190)]() {
                const i = _0x281bb0;
                return this[i(268)] ? this[i(311)] ? this[i(506)] + "<" + this[i(268)][i(190)]() : this[i(176)] + ":" + this[i(506)] + "<" + this[i(268)][i(190)]() : "[" + this.id + "]" + (this[i(506)] > 0 ? _0x16d8ff[this.id][i(171)] : "？")
            } [_0x281bb0(281)](t) {
                var n;
                const a = _0x281bb0;
                let e = this[a(480)];
                return !e && (e = this[a(480)] = document[a(344)](a(286)), e[a(121)] = a(411)), e[a(400)] = this[a(506)] <= 0 && this[a(506)] % 2 == 0, (t || this[a(506)] != (null == (n = null == e ? void 0 : e[a(155)]) ? void 0 : n[a(506)]) || this[a(506)] <= 0 && i[a(152)](this[a(506)]) != e[a(333)]) && (e[a(121)] = a(411), e.id = a(403) + this.id, e[a(155)][a(506)] = this[a(506)], this[a(506)] > 0 ? (e[a(458)][a(266)]("G"), _0x16d8ff[this.id][a(388)] > 2 ? e[a(458)][a(266)]("R") : _0x16d8ff[this.id][a(388)] > 0 && e[a(458)][a(366)]("R"), e[a(357)][a(388)] = "", e[a(357)][a(140)] = "", e[a(208)] = new Zone(a(125))[a(395)][a(244)](this) ? i[a(369)](this.id)[a(463)][a(327)]((i => {
                    const t = a;
                    let [n, e, c] = i[t(332)]("-")[t(327)]((i => parseInt(i)));
                    return Zone[t(278)](e, n, null, c, c)
                }))[a(408)]("/") : _0x16d8ff[this.id][a(171)], e[a(333)] = a(467) + _0x16d8ff[this.id].cn + a(271) + _0x16d8ff[this.id][a(278)][a(318)](0, 2)) : (e[a(458)][a(366)]("G"), e[a(333)] = "？")), e
            } [_0x281bb0(212)](i) {
                const t = _0x281bb0;
                if (!i || i == this) return this;
                for ([this[t(506)], i[t(506)]] = [i[t(506)], this[t(506)]], [this.id, i.id] = [i.id, this.id], [this[t(268)], i[t(268)]] = [i[t(268)], this[t(268)]], this[t(268)] && (this[t(268)][t(311)] = this), i[t(268)] && (i[t(268)][t(311)] = i); i[t(311)] && i[t(311)].id !== i.id;) i[t(311)].id = i.id, i = i[t(311)];
                for (i[t(281)](true), Zone[t(243)](i[t(176)]), i = this; i[t(311)] && i[t(311)].id !== i.id;) i[t(311)].id = i.id, i = i[t(311)];
                return i[t(281)](true), Zone[t(243)](i[t(176)]), this
            } [_0x281bb0(516)](t) {
                const n = _0x281bb0,
                    a = new i(this[n(506)], this.id, this[n(176)], this[n(268)], this);
                return this[n(506)] = t, this[n(268)] && (this[n(268)][n(311)] = a), this[n(268)] = a, this
            } [_0x281bb0(385)]() {
                const t = _0x281bb0;
                let n = false;
                if (this[t(268)]) {
                    let a = this[t(268)];
                    return this[t(506)] = a[t(506)], this.id = a.id, this[t(268)] = a[t(268)], a[t(268)] ? a[t(268)][t(311)] = this : new Zone(t(125))[t(395)][t(385)](a) && (n = true, this[t(311)] && new Zone(t(125))[t(395)][t(366)](this)), i[t(253)][t(526)](a[t(506)])[t(385)](a), n
                }
                return 0 === this[t(506)] ? (this[t(506)] = this.id, Qcard[t(305)](this.id, this[t(506)]), true) : null
            } [_0x281bb0(165)](t) {
                const n = _0x281bb0;
                let a = false,
                    e = this[n(506)];
                for (; e < 0;) this[n(385)]() && (a = true), i[n(412)](e) && (a = true), e = this[n(506)];
                return this[n(506)] != t && (this[n(506)] = t ?? this.id, Qcard[n(305)](this.id, this[n(506)])), this[n(311)] ? i[n(412)](this[n(311)][n(506)]) : (this[n(281)](true), Zone[n(243)](this[n(176)])), a && Zone[n(243)](n(125)), this
            } [_0x281bb0(216)](t, n = null) {
                const a = _0x281bb0;
                if (this.id == t) return this[a(506)] > 0 || (n && (this[a(316)].id = n), this[a(165)]()), this;
                let e, c = new Set([this[a(506)]]),
                    o = [
                        [this[a(506)],
                            []
                        ]
                    ];
                for (; o[a(315)] > 0;) {
                    let [n, l] = o[a(134)]();
                    if (e = i[a(393)](n, t), e) {
                        l[a(173)](e)[a(384)](((i, t) => i[a(212)](t)[a(268)]), this);
                        break
                    }
                    for (let t of i[a(526)](n)[a(232)]((i => i[a(268)]))) !c[a(244)](t[a(268)][a(506)]) && (c[a(366)](t[a(268)][a(506)]), o[a(303)]([t[a(268)][a(506)], l[a(173)](t)]));
                }
                if (e) {
                    if (n) {
                        let i = this;
                        for (i.id = n; i[a(268)];) i = i[a(268)], i.id = n;
                    }
                    return this[a(165)](), this
                }
                return t > 0 ? this[a(216)](0, t) : (console[a(323)](a(394) + (t > 0 ? t : n) + ">" + this), null)
            }
            static[_0x281bb0(406)](t, n) {
                const a = _0x281bb0;
                Array[a(196)](t) || (t = [t]);
                let {
                    turn: e,
                    round: c,
                    phase: o
                } = game;
                return null == t || t[a(247)]((i => Object[a(338)](i, {
                    zone: n,
                    turn: e,
                    round: c,
                    phase: o
                }))), Array[a(198)](new Set(null == t ? void 0 : t[a(327)]((i => i[a(506)]))))[a(232)]((i => i <= 0))[a(327)]((t => i[a(412)](t)))[a(315)] ? Zone[a(243)](a(125)) : Array[a(198)](new Set(null == t ? void 0 : t[a(327)]((i => i[a(506)]))))[a(232)]((i => i > 0 && Qcard[a(289)][a(244)](i)))[a(247)]((i => {
                    const t = a;
                    Qcard[i][t(281)](n == t(194) ? 3 : n == t(407) ? 2 : 1);
                })), t
            }
            static[_0x281bb0(432)](t, n, a) {
                var e;
                const c = _0x281bb0;
                if (!((null == t ? void 0 : t[c(315)]) > 1 && (null == t ? void 0 : t[c(376)](Boolean)))) return (null == (e = null == t ? void 0 : t[0]) ? void 0 : e[c(506)]) ?? 0;
                let o, l = new Set(t[c(327)]((i => i[c(506)])));
                if (1 === l[c(136)]) return Array[c(198)](l)[0];
                if (i[c(506)] = i[c(506)] - 1, a) {
                    if (1 === new Set(t[c(327)]((i => i[c(255)][c(176)])))[c(136)]) return 0;
                    let n = Array[c(198)](i[c(253)][c(464)]())[c(232)]((i => i < 0));
                    for (let t = 0; t >= i[c(506)]; t--)
                        if (!n[c(477)](2 * t - 1) && !n[c(477)](2 * t - 2)) {
                            o = 2 * t - a;
                            break
                        } n[c(232)]((i => i > o))[c(469)](((i, t) => i - t))[c(247)]((t => {
                        const n = c;
                        i[n(526)](t)[n(247)]((i => {
                            const t = n;
                            i[t(506)] = i[t(506)] - 2, i[t(255)][t(281)](true);
                        }));
                    })), o = -a;
                } else o = 2 * i[c(506)] - (n ? 2 : 1);
                return t[c(247)]((i => {
                    const t = c;
                    i[t(516)](o), new Zone(t(125))[t(395)][t(385)](i), n || new Zone(t(125))[t(395)][t(366)](i[t(316)]);
                })), Zone[c(243)](c(125)), o
            }
            static[_0x281bb0(412)](t) {
                const n = _0x281bb0;
                if (t > 0) return true;
                const a = i[n(526)](t);
                let e = new Set(a[n(327)]((i => {
                        var t;
                        return null == (t = i[n(268)]) ? void 0 : t[n(506)]
                    }))),
                    c = new Set(a[n(327)]((i => i[n(255)][n(176)])));
                if (1 === a[n(315)] || !c[n(244)](n(317)) && (1 === c[n(136)] || 1 === e[n(136)] && 0 !== t)) {
                    i[n(185)][n(244)](t) && (i[n(370)][n(298)](i[n(185)][n(526)](t)), i[n(185)][n(385)](t));
                    let e = a[n(327)]((i => i[n(385)]()))[n(347)](Boolean);
                    return Array[n(198)](new Set(a[n(232)]((i => i[n(311)]))[n(327)]((i => i[n(311)][n(506)]))))[n(247)]((t => i[n(412)](t))), a[n(232)]((i => !i[n(311)]))[n(247)]((i => i[n(281)](true))), Array[n(198)](c)[n(247)]((i => Zone[n(243)](i))), e
                }
                return false
            }
            static[_0x281bb0(393)](t, n) {
                const a = _0x281bb0;
                let e = i[a(526)](t)[a(393)]((i => i.id == n));
                if (void 0 === e && 0 != t) {
                    let c = i[a(526)](0)[a(393)]((i => i.id == n));
                    c && (e = i[a(526)](t)[a(393)]((i => 0 == i[a(316)][a(506)])), void 0 !== e && c[a(212)](e[a(316)]));
                }
                return e
            }
            static[_0x281bb0(132)](t, n = false, a = new Set, e = new Set) {
                const c = _0x281bb0;
                return e[c(366)](t), t > 0 || !n && 0 == t ? a[c(366)](t) : (n || t % 2 != 0) && i[c(526)](t)[c(247)]((t => {
                    const o = c;
                    if (t[o(268)]) {
                        let c = t[o(268)][o(506)];
                        e[o(244)](c) || i[o(132)](c, n, a, e);
                    } else n && a[o(366)](t.id);
                })), Array[c(198)](a)
            }
            static[_0x281bb0(369)](t, n = false, a = new Set, e = new Set) {
                const c = _0x281bb0;
                let o = t;
                return !(o instanceof i) && t > 0 && (o = i[c(526)](t)[0]), o instanceof i || (o = i[c(526)](0)[c(393)]((i => i.id == t))), o instanceof i && (!n && o[c(506)] <= 0 && o[c(506)] % 2 == 0 ? (e[c(366)]("?"), a[c(366)](o[c(506)])) : (e[c(366)](o[c(255)][c(176)]), !a[c(244)](o[c(506)]) && (a[c(366)](o[c(506)]), o[c(506)] <= 0 && (n || o[c(506)] % 2 != 0) && i[c(526)](o[c(506)])[c(247)]((t => {
                    t != o && i[c(369)](t, n, a, e);
                }))), o[c(311)] && i[c(369)](o[c(311)], n, a, e))), {
                    keys: Array[c(198)](a),
                    zones: Array[c(198)](e)
                }
            }
        };
    __publicField(_Card, _b, NaN), __publicField(_Card, _c, new Map), __publicField(_Card, _d, new Map([
        [0, "?"]
    ])), __publicField(_Card, _e, Array[_0x281bb0(198)]({
        length: 50
    }, ((i, t) => String[_0x281bb0(508)](t < 20 ? 9312 + t : t < 35 ? 12861 + t : 12942 + t))));
    let Card = _Card;
    const _Zone = class i {
        static get[(_f = _0x281bb0(518), _0x281bb0(381))]() {
            const t = _0x281bb0;
            return Array[t(198)](new Set(Array[t(198)](Card[t(526)](0), (({
                id: i
            }) => i))[t(173)]((i[t(518)][t(317)] ?? [])[t(327)]((({
                id: i
            }) => i)))))
        }
        static get[_0x281bb0(509)]() {
            const t = _0x281bb0;
            return (i[t(518)][t(407)] ?? [])[t(232)]((({
                key: i
            }) => i > 0))[t(327)]((({
                id: i
            }) => i))
        }
        static get[_0x281bb0(125)]() {
            const i = _0x281bb0;
            return Array[i(198)](Card[i(526)](0), (({
                id: i
            }) => i))
        }
        static[_0x281bb0(411)](t) {
            const n = _0x281bb0;
            return (i[n(518)]["5-" + t] ?? [])[n(232)]((({
                key: i
            }) => i > 0))[n(327)]((({
                id: i
            }) => i))
        }
        constructor(t, n = 5, a = DING, e = null, c = null, o = null) {
            var l;
            const r = _0x281bb0;
            typeof t === r(457) ? (this.id = t, this[r(176)] = n, 0 == this.id && [0, 1, 2, 3, 9, 12][r(477)](this[r(176)]) && (this.id = 255), 9 == this[r(176)] && (this[r(176)] = 1), 4 == this[r(176)] && (this.id = this.id + "-" + (o || c || 0)), 8 == this[r(176)] && (this.id = "-" + (c || o || 0)), this[r(187)] = this[r(176)] + "-" + this.id) : typeof t === r(443) ? [this[r(187)], this[r(176)], this.id] = t[r(455)](/(.*?)-(.*)/) ?? [t, t, ""] : null == (l = null == t ? void 0 : t[r(376)]) || l.call(t, (i => i instanceof Card)), this[r(187)] in i[r(518)] || (i[r(518)][this[r(187)]] = []), 1 == this[r(176)] ? this[r(491)] = a === DING ? DI : a === DI ? DING : a : 10 === this[r(176)] ? this[r(491)] = a : this[r(491)] = RAND, this[r(199)] = e;
        } [_0x281bb0(301)](t = []) {
            const n = _0x281bb0;
            if (isNaN(Card[n(506)])) return [];
            if (Array[n(196)](t) || (t = [t]), 0 == t[n(232)]((i => i > 0))[n(315)]) return [];
            let a = [],
                e = t[n(538)]();
            if (this[n(491)] == DING) a = this[n(395)][n(538)](-t[n(315)])[n(327)]((i => i[n(216)](e[n(134)]())));
            else if (this[n(491)] != RAND) a = this[n(395)][n(538)](this[n(491)], t[n(315)])[n(327)]((i => i[n(216)](e[n(134)]())));
            else if (1 != this[n(176)]) {
                let i = e[n(327)]((i => Card[n(369)](i, true)[n(464)]));
                this[n(395)][n(538)]()[n(469)](((i, t) => t[n(506)] - i[n(506)]))[n(347)]((t => {
                    const c = n;
                    if (0 == e[c(232)]((i => i > 0))[c(315)]) return true;
                    i[c(347)](((i, n) => {
                        const o = c;
                        if (i[o(477)](t[o(506)])) return a[n] = t[o(216)](e[n]), i[o(315)] = 0, e[n] = null, true
                    }));
                })), e[n(247)](((i, t) => {
                    var e, c, o, l;
                    const r = n;
                    if (i && (a[t] = null == (e = this[r(395)][r(393)]((i => 0 == i.id))) ? void 0 : e[r(216)](i), void 0 === a[t] && (a[t] = null == (c = this[r(395)][r(393)]((i => 0 == i[r(506)]))) ? void 0 : c[r(216)](i)), void 0 === a[t])) {
                        let n = Card[r(526)](i)[0];
                        n ? (a[t] = null == (l = null == (o = this[r(395)][r(393)]((i => !a[r(477)](i)))) ? void 0 : o[r(212)](n)) ? void 0 : l[r(216)](i), console[r(323)](this[r(187)] + r(284) + i + r(215))) : (a[t] = new Card(i, i, this[r(187)]), 12 != this[r(176)] && console[r(323)](this[r(187)] + r(387) + i + r(215)));
                    }
                }));
            }
            return i[n(243)](this[n(187)]), a
        } [_0x281bb0(266)](t = [], n, a) {
            const e = _0x281bb0;
            if (isNaN(Card[e(506)])) return [];
            Array[e(196)](t) || (t = [t]), a && (this[e(199)] = a);
            let c = [],
                o = t[e(538)]();
            if (this[e(491)] == DING) c = this[e(395)][e(433)](-this[e(199)]), 1 == this[e(176)] && (c = c[e(177)]());
            else if (this[e(491)] != RAND) c = this[e(395)][e(433)](this[e(491)], this[e(199)]), 1 == this[e(176)] && [3208, 7011, 987, 988][e(477)](n) && (c = c[e(177)]());
            else if (t[e(232)]((i => i > 0))[e(315)] > 0) {
                let i = o[e(327)]((i => Card[e(369)](i, true)[e(464)]));
                this[e(395)][e(538)]()[e(177)]()[e(469)](((i, t) => t[e(506)] - i[e(506)]))[e(347)]((t => {
                    const n = e;
                    if (0 == o[n(232)]((i => i > 0))[n(315)]) return true;
                    i[n(347)](((i, a) => {
                        const e = n;
                        if (i[e(477)](t[e(506)])) return c[a] = this[e(395)][e(433)](this[e(395)][e(231)](t), 1)[0], i[e(315)] = 0, o[a] = null, true
                    }));
                })), o[e(247)](((i, t) => {
                    var n;
                    const a = e;
                    if (!i) return;
                    let o = this[a(395)][a(452)]((i => 0 == i.id));
                    if (-1 === o && (o = this[a(395)][a(452)]((i => 0 == i[a(506)]))), o > -1) c[t] = this[a(395)][a(433)](o, 1)[0];
                    else {
                        let e = Card[a(526)](i)[0],
                            o = this[a(395)][a(452)]((i => !c[a(477)](i)));
                        e && o >= 0 ? (c[t] = null == (n = this[a(395)][a(433)](o, 1)[0]) ? void 0 : n[a(212)](e), console[a(323)](this[a(187)] + a(284) + i + a(147))) : (c[t] = new Card(i, i, this[a(187)]), 12 != this[a(176)] && console[a(323)](this[a(187)] + a(387) + i + a(147)));
                    }
                }));
            } else if (this[e(199)] == this[e(315)] || 1 == this[e(136)]) c = this[e(395)][e(433)](0, this[e(199)]);
            else if (1 == this[e(176)] || 2 == this[e(176)]) {
                var l = [...this[e(395)][e(232)]((i => i[e(506)] <= 0))[e(469)](((i, t) => t[e(506)] - i[e(506)])), ...this[e(395)][e(232)]((i => i[e(506)] > 0))];
                if ([11104, 3488, 862][e(477)](n)) {
                    var r = new Set(l[e(327)]((i => i[e(506)])));
                    11104 == n ? r = new Set(Array[e(198)](r)[e(232)]((i => {
                        const t = e;
                        return Card[t(526)](i)[t(347)]((i => {
                            var n;
                            return null == (n = Qcard[t(374)][3]) ? void 0 : n[t(244)](i.id)
                        }))
                    }))) : 3488 == n ? r = new Set(Array[e(198)](r)[e(232)]((i => {
                        const t = e;
                        return Card[t(526)](i)[t(347)]((i => {
                            var n, a, e;
                            return (null == (n = Qcard[t(278)]["雷杀"]) ? void 0 : n[t(244)](i.id)) || (null == (a = Qcard[t(278)]["火杀"]) ? void 0 : a[t(244)](i.id)) || (null == (e = Qcard[t(278)]["冰杀"]) ? void 0 : e[t(244)](i.id))
                        }))
                    }))) : 862 == n && (r = new Set(Array[e(198)](r)[e(232)]((i => {
                        const t = e;
                        return Card[t(526)](i)[t(347)]((i => Qcard[t(457)][6][t(244)](i.id)))
                    })))), l = l[e(232)]((i => r[e(244)](i[e(506)])));
                }
                c = l[e(538)](0, this[e(199)]), c[e(347)]((i => i[e(506)] > 0 || i[e(506)] % 2)) && Card[e(432)](l, true), c[e(247)]((i => this[e(395)][e(433)](this[e(395)][e(231)](i), 1)));
            } else Card[e(432)](this[e(395)]), c = this[e(395)][e(433)](0, this[e(199)]);
            return c[e(315)] != this[e(199)] && Array[e(198)]({
                length: this[e(199)] - c[e(315)]
            }, (() => {
                const i = e;
                return console[i(323)](this[i(187)] + i(359)), c[i(303)](new Card(0, 0, this[i(187)]))
            })), t[e(232)]((i => i > 0))[e(315)] == this[e(199)] ? t[e(247)](((i, t) => {
                var n;
                return null == (n = c[t]) ? void 0 : n[e(216)](i)
            })) : c[e(232)]((i => i[e(506)] > 0))[e(315)] == this[e(199)] && c[e(247)]((({
                id: i
            }, n) => {
                t[n] = i;
            })), i[e(243)](this[e(187)]), c
        } [_0x281bb0(366)](t) {
            const n = _0x281bb0;
            if (isNaN(Card[n(506)])) return;
            let a = Card[n(406)](t, this[n(187)])[n(538)]();
            return this[n(491)] == RAND || this[n(491)] == DING ? this[n(395)][n(433)](this[n(395)][n(315)], 0, ...a) : this[n(395)][n(433)](this[n(491)], 0, ...a[n(177)]()), i[n(243)](this[n(187)]), t
        } [_0x281bb0(410)](t) {
            const n = _0x281bb0;
            isNaN(Card[n(506)]) || (i[n(518)][this[n(187)]] = Card[n(406)](t, this[n(187)]), i[n(243)](this[n(187)]));
        }
        get[_0x281bb0(395)]() {
            const t = _0x281bb0;
            return i[t(518)][this[t(187)]] ?? []
        }
        get[_0x281bb0(315)]() {
            var i;
            const t = _0x281bb0;
            return (null == (i = this[t(395)]) ? void 0 : i[t(315)]) ?? 0
        }
        get[_0x281bb0(136)]() {
            var i;
            const t = _0x281bb0;
            return new Set((null == (i = this[t(395)]) ? void 0 : i[t(327)]((i => i[t(506)]))) ?? [])[t(136)]
        }
        static[_0x281bb0(476)](t, n) {
            const a = _0x281bb0;
            i[a(518)] = {
                unknown: new Set
            }, i[a(518)][n] = Card[a(476)](t, n);
        }
        static[_0x281bb0(243)](t) {
            var n, a;
            const e = _0x281bb0;
            if (isNaN(Card[e(506)])) return;
            if (void 0 === t) return void Object[e(464)](i[e(518)])[e(232)]((i => "5" == i[e(332)]("-")[0]))[e(247)]((t => i[e(243)](t)));
            let c = null,
                o = null,
                [l, r, u] = (null == (n = t[e(332)]("-")) ? void 0 : n[e(327)](Number)) ?? [];
            if (t == e(125)) c = e(405);
            else if (1 == l) c = e(203);
            else if (2 == l) c = e(445);
            else if (5 == l) c = String(room[e(172)](r) + 1);
            else {
                if (4 != l || !(u in _0x16cb5f[e(375)])) return;
                c = e(139) + t;
            }
            o = document[e(404)](c);
            let s = Array[e(198)](i[e(518)][t] ?? []);
            if (2 == l) {
                let {
                    turn: i,
                    round: t,
                    phase: n
                } = game;
                s = s[e(232)]((n => n[e(306)] == i && n[e(150)] == t));
            }
            if (t == e(125) && (Array[e(198)](new Set(s[e(327)]((i => i[e(255)][e(176)]))))[e(247)]((t => i[e(243)](t))), Qcard[e(243)]()), s && 0 != s[e(232)]((i => i[e(506)] > 0 || i[e(506)] % 2 != 0))[e(315)]) {
                if (o) o[e(300)](e(248))[e(247)]((i => i[e(266)]()));
                else {
                    if (4 != l) return;
                    null == (a = document[e(404)](String(room[e(172)](r) + 1))) || a[e(362)](e(473), e(456) + c + e(142) + _0x16cb5f[e(375)][u] + e(419)), o = document[e(404)](c);
                }
                t != e(317) && s[e(469)](((i, t) => i[e(506)] > 0 && t[e(506)] > 0 ? 0 : t[e(506)] - i[e(506)])), 4 == l && (o = o[e(424)] || o);
                var v = 1;
                s[e(327)]((i => i[e(281)](t == e(125))))[e(177)]()[e(247)](((i, n, a) => {
                    var c, r;
                    const u = e;
                    if (i[u(155)][u(506)] == (null == (r = null == (c = a[n + 1]) ? void 0 : c[u(155)]) ? void 0 : r[u(506)])) v++;
                    else {
                        v > 1 && (i[u(357)][u(140)] = "", i[u(333)] = u(467) + i[u(333)] + u(485) + v);
                        let n = parseInt(i[u(155)][u(506)]);
                        if (n < 0) {
                            let a = Card[u(132)](n)[u(469)](((i, t) => i > 0 && t > 0 ? 0 : t - i));
                            i[u(208)] = v + "张：" + a[u(327)]((i => _0x16d8ff[i][u(171)]))[u(408)]("/"), t !== u(317) && a[u(315)] < 5 && (i[u(357)][u(140)] = "", i[u(333)] = a[u(327)]((i => {
                                var t, n;
                                return (null == (n = null == (t = Card[u(526)](i)[0]) ? void 0 : t[u(281)]()) ? void 0 : n[u(537)]) || ""
                            }))[u(408)](""));
                        }
                        4 == l ? o[u(532)](u(346), i) : o[u(532)](u(292), i), v = 1;
                    }
                }));
            } else o && (o[e(458)][e(502)](e(355)) ? o[e(266)]() : o[e(300)](e(248))[e(247)]((i => i[e(266)]())));
        }
        static[_0x281bb0(278)](i, t, n, a, e) {
            var c;
            const o = _0x281bb0;
            let l;
            if (isNaN(t)) return "?";
            if (1 == t && 0 == i) return o(368);
            if (1 == t && 255 == i) l = "牌堆";
            else if (2 == t) l = o(396);
            else if (3 == t) l = o(336);
            else if (4 == t) l = "标记";
            else if (5 == t) l = "手牌";
            else if (6 == t) l = "装备";
            else if (7 == t) l = o(386);
            else if (8 == t) l = "弹窗";
            else {
                if (9 == t) return "洗牌";
                10 == t ? l = o(415) : 11 == t ? l = o(540) : 12 == t ? l = o(237) : 0 == t && (l = o(429));
            }
            return ([0, 1, 2, 3, 8, 11, 12][o(477)](t) ? "" : room[o(278)](i, false)) + ([4, 8][o(477)](t) ? "[" + (null == (c = _0x16cb5f[o(182)][8 == t ? e : a || e || 0]) ? void 0 : c[o(278)]) + "]" : "") + (l ?? o(176) + t) + ({
                [DI]: "底",
                [DING]: "顶",
                [RAND]: "*"
            } [n] ?? (n ? ":" + n : ""))
        }
    };
    __publicField(_Zone, _f, {
        unknown: new Set
    });
    let Zone = _Zone;

    function mergeGoodsList(i = [], t = []) {
        const n = _0x281bb0,
            a = new Map;
        return i[n(247)]((i => {
            const t = n;
            a[t(410)](i[t(454)], i[t(337)]);
        })), t[n(247)]((i => {
            const t = n,
                {
                    GoodsBaseID: e,
                    ChangeCount: c
                } = i;
            a[t(244)](e) ? a[t(410)](e, a[t(526)](e) + c) : a[t(410)](e, c);
        })), Array[n(198)](a, (([i, t]) => ({
            GoodsBaseID: i,
            ChangeCount: t
        })))
    }

    function checkHandCards(i, t = globalState[_0x281bb0(499)]) {
        var n;
        const a = _0x281bb0;
        if (!t[a(315)]) return true;
        const e = {};
        i[a(247)]((i => {
            var t;
            const n = a,
                c = null == (t = _0x16d8ff[i]) ? void 0 : t[n(278)];
            console[n(534)](n(524) + i + n(257) + c), c && (e[c] = (e[c] || 0) + 1);
        })), console[a(534)](a(153), e);
        for (const c of t) {
            const i = SGS[a(472)][c] || [null == (n = _0x16d8ff[c]) ? void 0 : n[a(278)]];
            console[a(534)](a(293) + c + a(204), i);
            const t = i[a(347)]((i => {
                const t = a,
                    n = e[i] || 0;
                return console[t(534)](t(352) + i + t(431) + n + " 张"), !!(i && n > 0) && (e[i]--, console[t(534)](t(267) + i + t(230) + e[i] + " 张"), true)
            }));
            if (console[a(534)](a(293) + c + a(225) + t), !t) return console[a(534)](a(402) + c + a(242)), false
        }
        return console[a(534)](a(227)), true
    }

    function _0x1644() {
        const i = ["y2rR", "C3jJ", "5BEY5ywr5O2I", "BgvUz3rO", "C3rHCNq", "6l+F54k55yAn55Yl55Yl5zcN", "vgv4Da", "5QcH5Bcj5Bcg5y2W", "DuDLBMvYywXjza", "y2HHDc1IB2r5", "z2v0", "pgjYpUwMGUs4JEAdS+IMGEwfKEAnOUEGGEMaMUEFPE+8JowpR+wCQoIUVUE9RUs4REwfS+MxRq", "yxnZAwDU", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKos4PEAvMEoaKEAxOoINO++8GtWVC3bHBJ4", "BgfZDfvZzunHCMq", "BwLHB3nOyq", "5zoL5lUS5ys/77Ym57Uz5yQB54k55ys/6kgm5zcx", "C29Y", "C2HVDY1LBgXPChnPCW", "5OM+5yIW5ywr5O2I56cb77YbpgjYpG", "C2vSzwn0", "uNbSB3q", "CxvLCNLdB21Tyw5Ku3vWCg9YDgvK", "w+wfIoIHJf0", "yMLNCMv3yxjKCW", "B25JBgLJAW", "z2vUzxjHBa", "CMvWBgfJzufSBa", "zML4zwq", "zgL2", "Ahr0Chm6lY93zwiUC2fUz3vVC2HHlMnVBs8YmJaVAdvFmI9YzxmVCNvUDgLTzs9WyY9gywnLlW", "57+757+75lMq56EV5yIg", "5Rc05PM256ko54Mh", "mta1otLqrgvNDhK", "BNvTq2HPBgrYzw4", "55wm5Bcp5OQe77YA54k55lIl5PA55PwW5A2x5y+V5lUL6iEQ5yQO5yIg6ywn54MmpgjYpUEcUEwhU+AdS+IMGEwiHUMfJEE7MEIhQUw3SEEAHos4GoE7HoAvSowTL+wnS+wpRW", "AgfZ", "ywrKrxzLBNrmAxn0zw5LCG", "zxzLBNq", "mteYtwD0vuPL", "DMfSAwDU", "5zoL77Ym5lQK5lIQ5PYl5y+l5zcN", "CxvLCNLtzwXLy3rVCKfSBa", "r0vorvjbta", "t3bLBKnVBw1VBLzV", "y2XHC3m", "y29WEq", "5zYJ6A2c546e5PM2", "vKjVEa", "BgvMDa", "z2fTzurHDge", "z2vUzxjHBg5HBwu", "z2v0rwXLBwvUDej5swq", "CgfKu3rHCNq", "q0rl", "y2XHC3noyw1L", "mZK0mZbNwKnfsLK", "5O2I5Bcg5y2H", "A2v5CW", "y2fUy2vS", "CMvXoIdLT7lOR7FMSylOV4FVViZOT7pOV4FPH43LPi3OR7FMSyiSigrTpq", "CMvZAxPL", "Aw5UzxjuzxH0", "C2vHDfvj", "Dgv4DfjLCW", "5OMl5Rcu5y2H", "n2n1rM1xtq", "5l2G5lUS5Oco5lMi5B+n5B+d5BcX6l+z5lMi6k6P5OIr6ywX5Rk55lQg", "BwLKzgXL", "CMvZ", "vw5RBM93BIaO", "5Bcp5yAf5yAn5lIn6lEZ77Ym5zco6z2I6l+y5Oco5lMi546P5ys/5zwk", "cUENKUADGownS+wWHUw8GowNI++8GqO", "C3rVCMvezxrHAwW", "Cg9Zwq", "ywXSrgf0yq", "5OIr77Ym5OIr5Oo55l2G5lUS5lQg5zcx", "5Asn5yI25OIq5yQF", "ywz0zxjIzwDPBG", "Dw5Zy2fSzwrxAwr0Aa", "C2vJ", "DhLWzq", "z2v0C3bLBgW", "z3jLzw4", "D2LKDgG", "DLnJCM9SBejHCLnRAw4", "lNbUzW", "z2v0q2HPBgrbDa", "C2vJswq", "r0vux0LorK8", "q0rltM90AwzPy2f0Aw9Uu3DPDgnO", "Dgv4DenVBNrLBNq", "zMXVB3i", "B25TB3vZzwrVD24", "zM9UDfnPEMu", "ntaW", "yxbWzw5Kq2HPBgq", "ls0Tls0Tls0Tls0Tls0Tls0Tls0", "zgf0yxnLDa", "5Bcp5yAf5zwk77Ym5OkO6icb5OkG552a54k55ys/", "Cg9Z", "uM9NDwvtBwfSBe1HCfnJzw5L", "Bg9JyxrPB25Z", "lMXLzNqGAw5WDxrBDhLWzt0Iy2HLy2TIB3GIxq", "CMvZDwX0", "u0Dt", "EwfUAMLHB3nWyw4", "5Asn5yI25OIq5yQF77Yb", "igDYyxK", "Aw1N", "Aw5KzxHpzG", "54k55yE7iJ0I5BEM5l6N5OIw5y+Z5l6N55Qe5PwW5A2x77Ym5Bcg6kkR54k55yE75lIa5l6N55Qe5PwW5A2x5yIg6ywn57Uz6iEQ5BEX77Ym5y+M5lIa5l6N55Qe5yIg6ywn57Uz5BYG5PIm6jkY", "C3vIC3rYAw5N", "Aw5JBhvKzxm", "5lIn5Aw95Osp5OcD77Ym5yIA5OMn5y2H5lQg", "Bwf4", "DhjHy2u", "CMvKDwnL", "EK9YzgvY", "D2fYBG", "C2HVCerHDge", "B2jZzxj2zq", "C2v0", "C29YDa", "5Ps+5BYa5OIr55Qe6zIF5y+l77Ym5yAY5OIr5P2L", "zMLSBa", "5PIp5zcB77Ym5PIp5zcB5zwk", "mJKYmJq1nMvfrgjVDG", "C3bHBG", "Dw5ZAgLMDa", "BwLU", "C2vHC29Urgf0yq", "5As65A6D5yI4", "CMv3yxjKCW", "zgLZywjSzwq", "ywXWAge", "AM9PBG", "Bg9ZDa", "zMXHDe1HCa", "CMLNAhq", "ywrKq2HPBgq", "5AEr5AIy77Ym5l2G55YF5PIV5P2H5Rgj5A2q", "zxHJzxb0Aw9U", "z2v0C3bLBgXFs04", "CM9NDwvdAxr5u3DPDgnO", "y2HPBgrmAxn0", "i2zMzMzMzG", "Bg9N", "zgf0yu1HCMS", "CMvWBgfJzq", "6k+p5lUK5AsP5lIl", "mteWCgrIB0D5", "z3jHCgHPy3m", "y2XVBMvoB2rL", "Dg9W", "CMvWBgfJzvDPDgG", "BgfZDenVBNrLBNq", "D2fYBMLUzW", "icOG", "5lIj5y2b5ywT6k6H77Ym6lwW5lI65lIk77Ym5A655OIr5y675y675l6/5zUE", "tgfIzwW", "Aw5MBW", "C2nYB2XSsgvPz2H0", "y2HHDa", "mtzHANnKrey", "zhjHD1jLy3q", "C3rVCfbYB3bHz2f0Aw9U", "yM9Sza", "DgHLBG", "C3bSAwnL", "DgfIBgu", "C3bLBgXeAwn0", "CgfKzgLUz1jPz2H0", "Dg9tDhjPBMC", "zgf0Dw0", "Dg9ju09tDhjPBMC", "6ycA55sO5ywd5A6D", "pgjYpG", "5AsN5Bcg5yAB5y2W", "mJmWmJa3mfbsyMXWrW", "yLnOB3C", "zxjYB3i", "Cg9W", "y2HPBgrYzw4", "C3vPDa", "z2vUzxjHBhbVB2W", "Dgv4Da", "ioASOEAvSo+8MG", "C3bSAxq", "yNv0Dg9U", "ywmTDg9VBhrPCa", "y2XHC3nmAxn0", "x19WCM90B19F", "i2yYzgu5yW", "DgfYz2v0", "zgLMzMLJDwX0Eq", "Bgf5B3v0rw5HyMXLza", "yMvMB3jLzw5K", "q29WEsb0BYbJBgLWyM9HCMqGzMfPBgvKlG", "BMfTzq", "C29Tzq", "BM93", "5l2G6zQp5l6/5P2a77Ym6zEQ5lIn5lQg566x5OIr6l6t", "C2vHDfvjCW", "C2v0rgf0yq", "k251BwjLCG", "phnWyw4Gy2XHC3m9iMv4CgXHBMf0Aw9UihnLy0TPBgXezxrHAwXuzxH0", "z29Vzhm", "iZncm0eYnW", "5Bcp5OQe5O+q56s677YA5y+V5O2I5Bcg5lI6", "y29UC3rYDwn0B3i", "mty4ndu1odDnuK5hALK", "BxLhzw5LCMfS", "uM9NDwvmAwTLuhzLtwfUywDLCG", "yxbWBhK", "Cg9ZAxrPB24", "zxHLy0nVBw1HBMq", "6Aoo5zc56BIH6jUl5AoZ77Ym54Mm5y675lQ65A6j5lMq", "z2v0C3bLBgXFwKq", "C29YzgvYq29UDgfPBMvY", "z2vUzxjHBerPy3q", "C2HVDxbHAq", "54g15A6D57Up6k+W", "5lQ65B+d5PwJ5lQg77Ym6zIF5lYn5lIn5Aw95BIM5zwk", "iIb0AxrSzt0I", "z2vUzxjHBhm", "pc9ZCgfUpG", "B2jQzwn0", "BgfZDenOAwXK", "lNnVCMrLCI1IB2r5", "C29YzgvYlwjVzhK", "y3jLyxrLrwXLBwvUDa", "5OIr5lUo5PYQ6kEb6l+h5AAc5Q2K5y6A6AkC5PEG6ic75lMl5lQ6", "54k55yE75Asn5yI2", "uMzPz2H0", "6k+35Ps25lIl5OIr55Qe6iAD55Uw", "k3rPBwvZ", "y2L0EvzPzxC", "Bg9JyxrPB24", "y2fSuMvZ", "zMLSDgvY", "nti3mdCZAMPYuvPQ", "Cg9Zwa", "pgjYpUEcUEwhU+wnS+wpR+wfKEAnOUs4LowfS+MxREATPoADOEMaMUEFPq", "zM9YrwfJAa", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKoAyK+wFJUoaKEAxOoAZLEs6PoAnOU+8GtWVC3bHBJ4", "Aw5Zzxj0qwrQywnLBNrive1m", "yxbWzw5K", "CMv0DxjUicHMDw5JDgLVBIGPia", "z2v0C3bLBgXFtfK", "BM9YBwfS", "AxrLBuLK", "BwfW", "AgvPz2H0", "ChjVDg90ExbL", "ywrK", "5l2G5y+V5lUL5OMt55Qe5yAn54oc5lIa54k55ys/5zcx", "z2v0C3bLBgXFru0", "u2nLBMvmyxLLCG", "q29WEsb0BYbJBgLWyM9HCMq6ien0CMWRqYWGrw50zxi", "C3r5Bgu", "CMDIkdi0mcWGnJuSidG1kq", "5l2G5zkl5lIn5lIk5AsP5zgI", "mJy5ntiZowXzDejdyq", "5OMa5PYj5ywr5O2I56cb5BEY57Up5ywr5O2I", "5Awh54+n5As65A6D5yI4", "y2XPCgjVyxjKrgf0yq", "zgLZy29UBMvJDa", "yMLUza", "y2L0AwvZ", "zxzLCNK", "Bgv2zwW", "tMfTzq", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "y2HHChrLCKrHDge", "y3jLyxrLrg9JDw1LBNrgCMfNBwvUDa", "z2vUzxjHBf9JAgfUz2u", "5PEG5Ps25B2v5OQa6io9", "ywXPz24", "54k55Bcg5y2H", "CMvTB3zL", "Dgv4DgfYzwe", "DgL0Bgu", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKoI1HoApTooaKEAxOoINO++8GtWVC3bHBJ4", "ChvZAa", "ywnuB29SDgLW", "C2nHBgu", "C05V", "zhjHD1jVz3vLtgLRzq", "6kEb6k+b5Awh6l+555Qe5PE25yI75yIW5lQg", "yxr0CMLIDxrLCW", "i2nJyW", "v2vSzMfYzu1HBMDLCG", "u3bYAxrL", "uMnOB29Zzq", "5AA55A2q77Ym5lQK5lIQ5PYl5y+l5zcN", "ih4G", "EwfUsMLHBW", "yM9KEq", "zgvSzxrL", "y2vUDgvY", "5QYI5lMq6lgg", "C2HVDxbHAsbs", "zMfJzq", "zMLUza", "uMnPDhK", "CMvTB3zLq2HPBgq", "u2vJA2LSBerHDge", "z2v0rwXLBwvUDhncEunSyxnZtMfTzq", "6io95lIn6io95B+R5lIa54k55ys/5zga77Ym5yw16ls156wE6ycF5zwk", "CMv2zxjZzq", "C2XPy2u", "Bg90DgvYEq", "zNjVBq", "y2XLyxi", "6l+z5RoI5lIn5lQp", "y29SB3i", "uM9NDwvmAwTLrgf0yvjLCq", "y2L0Eq", "y29UC29Szq", "Aw5Uzxjive1m", "Dw5KzwzPBMvK", "5lI75ywS77Ym5yIR5BYa5P6Q77Ym6iEQ5BEX5lQ6", "ywn0DwfSu2vHDeLe", "5PQc5PEG6zUg5BIc5PwW5O2U", "phnWyw4+ptWVC3bHBJ4"];
        return (_0x1644 = function () {
            return i
        })()
    }
    SGS[_0x281bb0(183)] = {
        83: _0x281bb0(428),
        31: _0x281bb0(497),
        6005: _0x281bb0(186),
        327: _0x281bb0(157),
        6: _0x281bb0(156),
        138: _0x281bb0(541),
        6004: "锦囊",
        12053: _0x281bb0(377),
        4300: _0x281bb0(163),
        196: "武器",
        12148: "防具",
        12130: "装备"
    }, SGS[_0x281bb0(472)] = {
        1: ["决斗"],
        2: ["闪"],
        3: ["顺手"],
        5: [_0x281bb0(195)],
        14: ["连弩"],
        25: ["桃"],
        27: ["万箭"],
        32: ["乐"],
        33: ["无中"],
        38: ["过拆"],
        44: [_0x281bb0(233)],
        64: ["无懈"],
        67: ["八卦"],
        72: ["南蛮"],
        92: ["闪电"],
        103: [_0x281bb0(437)],
        107: [_0x281bb0(434)],
        108: [_0x281bb0(495)],
        110: ["火攻"],
        112: ["火杀"],
        122: [_0x281bb0(533)],
        130: ["酒"],
        135: [_0x281bb0(341)],
        136: ["藤甲"],
        144: ["兵"],
        145: ["铁索"],
        148: [_0x281bb0(488)],
        327: ["桃", "酒"],
        4300: ["兵", "乐"],
        6005: ["顺手", "过拆"],
        6: ["杀", "火杀", "雷杀", "冰杀"],
        138: ["火杀", "雷杀", "冰杀"],
        31: [_0x281bb0(397), _0x281bb0(180), _0x281bb0(141)],
        83: [_0x281bb0(145), _0x281bb0(126), _0x281bb0(520), _0x281bb0(321)],
        6004: ["决斗", "顺手", "万箭", "五谷", "无中", "过拆", "桃园", "无懈", "南蛮", "借刀", "火攻", "铁索"],
        12053: ["决斗", "火攻", "万箭", "南蛮"],
        196: [_0x281bb0(195), _0x281bb0(214), "连弩", _0x281bb0(233), _0x281bb0(528), _0x281bb0(399), _0x281bb0(263), _0x281bb0(437), _0x281bb0(495), _0x281bb0(533), _0x281bb0(341)],
        12148: ["八卦", _0x281bb0(434), "藤甲", _0x281bb0(488)],
        12130: [_0x281bb0(195), _0x281bb0(214), "连弩", _0x281bb0(233), _0x281bb0(528), _0x281bb0(399), _0x281bb0(263), _0x281bb0(437), _0x281bb0(495), _0x281bb0(533), _0x281bb0(341), "八卦", _0x281bb0(434), "藤甲", _0x281bb0(488), _0x281bb0(145), _0x281bb0(126), _0x281bb0(520), _0x281bb0(321), _0x281bb0(397), _0x281bb0(180), _0x281bb0(141)]
    };
    const _0x43d602 = _0x31b6;

    function _0x31b6(i, t) {
        const n = _0x1644();
        return _0x31b6 = function (t, a) {
            let e = n[t -= 286];
            if (void 0 === _0x31b6.TGKwvq) {
                _0x31b6.wnzaMC = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x31b6.TGKwvq = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x31b6.wnzaMC(e), i[c] = e), e
        }, _0x31b6(i, t)
    }! function (i, t) {
        const n = _0x31b6,
            a = _0x1644();
        for (;;) try {
            if (338374 === parseInt(n(290)) / 1 + -parseInt(n(526)) / 2 * (parseInt(n(408)) / 3) + parseInt(n(414)) / 4 * (parseInt(n(431)) / 5) + parseInt(n(502)) / 6 * (parseInt(n(441)) / 7) + parseInt(n(539)) / 8 * (parseInt(n(312)) / 9) + parseInt(n(554)) / 10 + -parseInt(n(586)) / 11) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const {
        allCard: _0x1327a3,
        n2N: _0x29a2ce,
        initMap: _0x905b17,
        addTooltip: _0x4bcc80,
        tooltipSGS: _0x319ccd
    } = window[_0x43d602(480)], {
        localSet: _0x52e9e9,
        localGet: _0x4f13eb,
        localDel: _0x243008
    } = window[_0x43d602(480)];

    function drawChatFace() {
        const i = _0x43d602;
        for (let t = 11; t <= 60; t++) {
            const n = i(405) + t + i(461),
                a = document[i(606)](i(484));
            a[i(376)] = n, a[i(566)][i(304)](i(352)), a[i(468)] = () => toClipboard("#" + t, false), document[i(357)](i(384))[0][i(471)](a);
        } [i(501), i(371), i(358), i(446), i(474), i(489), i(305), i(391), i(442), i(451), i(516), i(534), i(598), i(592), i(416), i(344), i(607), i(577), i(364), i(610), i(311), i(499), i(338)][i(293)](((t, n) => {
            const a = i,
                e = document[a(606)](a(503));
            e[a(566)][a(304)](a(288)), e[a(466)] = t, e[a(468)] = () => toClipboard("" + t, false), document[a(357)](a(384))[0][a(471)](e);
        }));
    }
    async function toClipboard(i, t) {
        const n = _0x43d602;
        _0x319ccd(n(482));
        var a = {
            1: "⒈",
            2: "⒉",
            3: "⒊",
            4: "⒋",
            5: "⒌",
            6: "⒍",
            7: "⒎",
            8: "⒏",
            9: "⒐",
            J: "Ⓙ",
            Q: "Ⓠ",
            K: "Ⓚ",
            "+": " ",
            10: "⒑"
        };
        if (t && Object[n(433)](a)[n(293)]((t => {
                i = i[n(402)](t, a[t]);
            })), laya[n(538)](i), window[n(315)] && window[n(315)][n(579)]) return window[n(315)][n(579)](n(381), i);
        if (document[n(397)] && document[n(397)](n(421))) {
            var e = document[n(606)](n(330));
            e[n(466)] = i, e[n(309)][n(590)] = n(403), document[n(347)][n(471)](e), e[n(395)]();
            try {
                return document[n(591)](n(421))
            } catch (c) {
                return console[n(494)](n(573), c), prompt(n(308), i)
            } finally {
                document[n(347)][n(355)](e);
            }
        }
    }
    async function drawCDK(i, t) {
        const n = _0x43d602;
        if (globalConfig[n(465)]) {
            let t = _0x4f13eb(n(429));
            !t && (t = []);
            let a = i[n(289)]((i => !t[n(488)](i[n(375)])));
            await sleep(1e4);
            for (let i of a) _0x4bcc80(n(394) + i[n(375)] + n(292) + i[n(508)] + n(386), n(565), 1e4, n(458), (function () {
                const a = n;
                !t[a(488)](i[a(375)]) && t[a(333)](i[a(375)]), _0x52e9e9(a(429), t), getgift(i[a(375)]);
            }));
        }
        var a = document[n(427)](t);
        a[n(437)] = "", 0 == i[n(378)] && t == n(429) && (i = [n(313), n(380)], _0x243008(n(429)));
        for (let c of i) {
            let i = document[n(606)](n(564));
            i[n(430)] = n(288), i[n(437)] = typeof c === n(602) ? "" + c[n(375)] : c, i[n(468)] = function () {
                const t = n;
                getgift(typeof c === t(602) ? c[t(375)] : c), i[t(437)] = t(377), setTimeout((() => {
                    const n = t;
                    i[n(466)] = typeof c === n(602) ? "" + c[n(375)] : c;
                }), t(470));
            }, a[n(296)](i);
            var e = document[n(606)]("br");
            a[n(296)](e);
        }
    }

    function _0x1a7b3b(i) {
        const t = _0x43d602;
        var n = document[t(427)](t(448));
        n[t(437)] = "", 0 == i[t(378)] && (i = [t(373)]);
        for (let a of i) {
            let i = document[t(606)](t(564));
            i[t(430)] = t(448), i[t(437)] = a, n[t(296)](i);
        }
    }
    let _0x5c8096 = {
        9020101: _0x43d602(350),
        100301: _0x43d602(440),
        100201: _0x43d602(328),
        1150001: _0x43d602(597),
        100401: _0x43d602(432),
        200201: _0x43d602(525),
        112301: _0x43d602(382),
        112101: "朱砂",
        12119999: "桃花",
        111801: "功勋",
        1111801: _0x43d602(407),
        1114301: _0x43d602(422),
        112501: _0x43d602(553),
        1142901: _0x43d602(507),
        21315101: _0x43d602(406),
        21315001: _0x43d602(314)
    };

    function lotteryFilter(i) {
        return !_0x5c8096[i]
    }

    function drawLottery(i, t, n, a) {
        var e;
        const c = _0x43d602;
        if (null == document[c(427)](c(455) + i)) {
            let t = document[c(427)](c(361));
            const n = document[c(606)](c(404)),
                e = document[c(606)](c(404));
            e[c(369)] = _0x905b17[c(463)][i][c(321)] + "：" + _0x905b17[c(595)][_0x905b17[c(463)][i][c(399)]] + " " + c(562) + a + c(552), e.id = c(455) + i + c(611), n.id = c(455) + i, n[c(296)](e), t[c(296)](n), t[c(296)](document[c(606)]("hr"));
        }
        if (typeof document[c(427)](c(455) + i) != c(370) && null == document[c(427)](i + "+" + t)) {
            document[c(427)](c(455) + i + c(611))[c(369)] = _0x905b17[c(463)][i][c(321)] + "：" + _0x905b17[c(595)][_0x905b17[c(463)][i][c(399)]] + " " + c(562) + a + c(552);
            let o = document[c(427)](c(455) + i);
            const l = document[c(606)](c(404));
            l[c(430)] = c(559), lotteryFilter(t) && l[c(566)][c(304)]("r");
            const r = document[c(606)](c(503)),
                u = document[c(606)](c(503));
            r[c(437)] = (null == (e = laya[c(582)](t)) ? void 0 : e[c(574)]) + c(533), u[c(437)] = n, r.id = i + "+" + t, u.id = i + "+" + t + c(580), l[c(296)](r), l[c(296)](u), o[c(471)](l);
        } else if (typeof document[c(427)](i) != c(370) && null != document[c(427)](i + "+" + t)) {
            document[c(427)](c(455) + i + c(611))[c(369)] = _0x905b17[c(463)][i][c(321)] + "：" + _0x905b17[c(595)][_0x905b17[c(463)][i][c(399)]] + " " + c(562) + a + c(552);
            let e = document[c(427)](i + "+" + t + c(580)),
                o = parseInt(e[c(437)]);
            o += n, e[c(437)] = o;
        }
    }

    function drawCard(i) {
        const t = _0x43d602;
        let n = document[t(427)](t(389));
        const a = document[t(606)](t(404));
        for (const c of i) {
            if ("0" == c) continue;
            var e = document[t(606)](t(564));
            e[t(430)] = _0x1327a3[c][t(365)] <= 2 ? t(351) : t(596);
            let i = document[t(606)](t(503));
            i[t(437)] = _0x1327a3[c].cn, e[t(471)](i), e[t(471)](document[t(606)]("br")), e[t(369)] += _0x1327a3[c][t(574)][t(487)](0, 2), a[t(296)](e);
        }
        n[t(369)] = a[t(369)];
    }
    const _0x2bd131 = new MutationObserver((i => {
            const t = _0x43d602;
            i[t(293)]((i => {
                const n = t,
                    a = i[n(569)],
                    e = document[n(427)](a.id),
                    c = document[n(427)]("s" + a.id);
                if (c && e && (i[n(456)] === n(520) || i[n(456)] === n(339))) {
                    const i = a[n(369)];
                    if (c[n(473)][n(531)] !== i && c) {
                        const t = a[n(528)](true);
                        t.id = "s" + a.id, t[n(430)] = c[n(430)], t[n(473)][n(531)] = i, c[n(530)](t), _0x596b7b(t);
                    }
                }
            }));
        })),
        _0x35fae0 = {
            attributes: true,
            childList: true,
            subtree: true
        };

    function _0x596b7b(i) {
        i && i instanceof HTMLElement && requestAnimationFrame((() => {
            const t = _0x31b6;
            i[t(537)] > 40 ? i[t(566)][t(304)](t(393)) : i[t(566)][t(329)](t(393));
        }));
    }

    function debounce(i, t) {
        const n = _0x43d602,
            a = function () {
                let i = true;
                return function (t, n) {
                    const a = i ? function () {
                        if (n) {
                            const i = n[_0x31b6(589)](t, arguments);
                            return n = null, i
                        }
                    } : function () {};
                    return i = false, a
                }
            }();
        let e;

        function c(...n) {
            const a = _0x31b6;
            clearTimeout(e), e = setTimeout((() => i[a(589)](this, n)), t);
        }
        return a(this, (function () {
            const i = _0x31b6,
                t = function () {
                    const i = _0x31b6;
                    let t;
                    try {
                        t = Function(i(297) + i(322) + ");")();
                    } catch (n) {
                        t = window;
                    }
                    return t
                }(),
                n = t[i(368)] = t[i(368)] || {},
                e = [i(522), i(494), i(536), i(556), i(517), i(545), i(491)];
            for (let c = 0; c < e[i(378)]; c++) {
                const t = a[i(585)][i(303)][i(317)](a),
                    o = e[c],
                    l = n[o] || t;
                t[i(567)] = a[i(317)](a), t[i(548)] = l[i(548)][i(317)](l), n[o] = t;
            }
        }))(), c[n(434)] = function () {
            clearTimeout(e), e = null;
        }, c
    }
    const _0x330339 = debounce((() => {
        requestAnimationFrame((() => {
            const i = _0x31b6;
            document[i(417)](i(604))[i(293)]((i => {
                _0x596b7b(i);
            }));
        }));
    }), 500);

    function drawSeatUIs() {
        const i = _0x43d602,
            t = document[i(427)](i(438)),
            n = document[i(324)]();
        for (let a of UI[i(578)])
            if (a[i(449)] && a[i(291)] && typeof a[i(372)] !== i(370))
                if (null == document[i(427)](i(392) + a[i(372)])) {
                    const t = document[i(606)](i(404));
                    t[i(430)] = i(594), t.id = i(392) + a[i(372)], t[i(309)][i(529)] = a[i(449)] + "px", t[i(309)][i(424)] = a[i(291)] + "px", t[i(309)][i(459)] = (UI[i(454)] + UI[i(547)]) * UI[i(335)] + "px";
                    const e = document[i(606)](i(404));
                    e[i(430)] = i(605), e[i(566)][i(304)](i(336) + a[i(372)]), e.id = "s" + a[i(372)], t[i(471)](e);
                    const c = document[i(427)](a[i(372)]);
                    c && (_0x2bd131[i(496)](c, _0x35fae0), n[i(471)](t));
                } else {
                    const t = document[i(427)](i(392) + a[i(372)]);
                    t[i(309)][i(529)] = a[i(449)] + "px", t[i(309)][i(424)] = a[i(291)] + "px", t[i(309)][i(459)] = (UI[i(454)] + UI[i(547)]) * UI[i(335)] + "px";
                } if (0 === UI[i(578)][i(378)]) {
            _0x2bd131[i(316)]();
            for (let t = 1; t <= 8; t++) {
                const n = document[i(427)](i(392) + t);
                n && n[i(329)]();
            }
        }
        t[i(471)](n);
    }
    window[_0x43d602(412)](_0x43d602(436), _0x330339);
    const _0xa358f4 = {
        TITLE: {
            color: _0x43d602(568),
            fontSize: 20,
            bold: true
        },
        HR: {
            text: _0x43d602(472),
            color: _0x43d602(340),
            fontSize: 15
        },
        GENERAL: {
            normal: _0x43d602(568),
            warning: _0x43d602(310),
            fontSize: 20
        },
        GET_INFO: {
            color: _0x43d602(568),
            fontSize: 20,
            bold: true
        }
    };

    function _0x2d3e96(i) {
        const t = _0x43d602,
            n = new(Laya[t(535)]);
        return n[t(561)] = i[t(561)] || "", n[t(365)] = i[t(365)] || t(521), n[t(469)] = i[t(469)] || 16, n[t(542)] = i[t(542)] || false, n[t(327)] = t(349), n[t(415)] = t(443), n[t(459)] = 210, n
    }

    function _0x40756b() {
        const i = _0x43d602;
        return _0x2d3e96({
            text: _0xa358f4.HR[i(561)],
            color: _0xa358f4.HR[i(365)],
            fontSize: _0xa358f4.HR[i(469)],
            bold: false
        })
    }

    function _0x3d359d(i, t) {
        const n = _0x43d602,
            [a, e] = _0xe66ca9(i, t),
            c = i[n(379)] ? n(398) : "";
        return _0x2d3e96({
            text: "" + i[n(426)] + c + (e ? " " + a[n(511)](" ") : ""),
            color: e ? _0xa358f4[n(418)][n(532)] : _0xa358f4[n(418)][n(299)],
            fontSize: _0xa358f4[n(418)][n(469)],
            bold: true
        })
    }

    function _0x504a11(i, t, n) {
        const a = _0x43d602;
        i[a(571)] = true, i[a(460)] = "", t[a(527)][a(363)](), t[a(527)][a(540)](0, 0, 210, n, a(583)), t[a(475)](0, 0);
    }

    function _0x474897(i, t) {
        const n = _0x43d602;
        let a = 0;
        i[n(600)][n(293)]((i => {
            const e = n,
                c = _0x3d359d(i, rogueMap[e(570)]);
            t[e(515)](c), a += c[e(302)];
        }));
        const e = _0x40756b();
        t[n(515)](e), a += e[n(302)];
        const c = _0x2d3e96({
            text: i[n(385)][n(524)](/\n/g, "\n"),
            ..._0xa358f4[n(464)]
        });
        return t[n(515)](c), a += c[n(302)], a
    }

    function _0x13ff94(i, t) {
        const n = _0x43d602;
        let a = 0;
        for (let e = 0; e < 3; e++) {
            const c = i + (e + 1)[n(548)](),
                o = i + (e + 1)[n(548)]()[n(428)](2, "0"),
                l = _0x905b17[n(343)][o] ? o : c;
            if (!_0x905b17[n(343)][l]) continue;
            const r = _0x905b17[n(343)][l];
            r[n(600)] && r[n(600)][n(293)]((i => {
                const e = n,
                    c = _0x3d359d(i, rogueMap[e(570)]);
                t[e(515)](c), a += c[e(302)];
            }));
            const u = [];
            if (!r[n(600)] && r[n(512)] && u[n(333)](r[n(512)] + " " + _0xc15b04(r[n(512)])), r[n(385)] && u[n(333)]("" + r[n(385)]), u[n(378)] > 0) {
                const i = _0x2d3e96({
                    text: u[n(511)]("\n"),
                    ..._0xa358f4[n(464)]
                });
                t[n(515)](i), a += i[n(302)];
            }
            const s = _0x40756b();
            t[n(515)](s), a += s[n(302)];
        }
        return a
    }

    function _0xc15b04(i) {
        const t = _0x43d602,
            n = i[t(563)](" ");
        if (2 !== n[t(378)]) return null;
        const [a, e] = n, c = {
            "战法": 2,
            "技能": 3
        }, o = {
            "普通": 1,
            "稀有": 2,
            "史诗": 3
        }, l = Object[t(433)](c)[t(353)]((i => e[t(488)](i))), r = Object[t(433)](o)[t(353)]((i => e[t(488)](i)));
        if (!l || !r) return "";
        const u = c[l],
            s = o[r];
        for (const v of rogueMap[t(300)]) {
            const i = _0x905b17[t(396)][v];
            if (i && i[t(456)] === u && i[t(320)] === s) return i[t(574)]
        }
        return ""
    }

    function drawCitiesUI(i, t) {
        const n = _0x43d602;
        rogueMap[n(444)] = [];
        for (const a of i) {
            const {
                x: i,
                y: t
            } = _0x905b17[n(354)][a.id];
            let e = 0;
            const c = new(Laya[n(423)]);
            c[n(475)](i, t), c[n(493)] = 999, c[n(574)] = n(367);
            const o = new(Laya[n(342)]);
            o[n(510)] = .7, c[n(515)](o), _0x905b17[n(609)][a[n(413)]] ? e = _0x474897({
                ..._0x905b17[n(609)][a[n(413)]],
                event: a[n(413)]
            }, c) : e += _0x13ff94(a[n(413)], c), _0x504a11(c, o, e), rogueMap[n(444)][n(333)]({
                id: a.id,
                city: c
            });
        }
        wait((() => laya[n(353)](n(307), n(476))))[n(543)]((t => {
            const a = n;
            for (let i = (null == t ? void 0 : t[a(286)][a(409)]) - 1; i >= 0; i--) {
                const n = t[a(286)][a(462)](i);
                n[a(574)] === a(367) && t[a(286)] && t[a(286)][a(355)](n);
            }(null == t ? void 0 : t[a(286)]) && i && rogueMap[a(444)][a(293)]((({
                city: i
            }) => {
                const n = a;
                t[n(286)][n(515)](i);
            }));
        }));
    }

    function _0x1cfb60(i, t = _0x43d602(608), n = true, a = false, e = null) {
        const c = _0x43d602;
        let o = document[c(606)](c(564));
        return o[c(430)] = c(288), o[c(331)] = t, o[c(509)] = a, o[c(437)] = i, o[c(400)] = () => {
            const t = c;
            toClipboard(i, n), o[t(437)] = t(452), setTimeout((() => {
                o[t(466)] = i;
            }), 500);
        }, o
    }
    async function drawMiZhu(i) {
        const t = _0x43d602;
        let n = i[t(360)]()[t(498)](((i, t) => i - t)),
            a = [];
        ! function i(e, c, o) {
            const l = t;
            if (13 !== o) {
                if (!(o > 13))
                    for (let t = c; t < n[l(378)]; t++) t > c && n[t] === n[t - 1] || (e[l(333)](n[t]), i(e, t + 1, o + n[t]), e[l(557)]());
            } else a[l(333)](e[l(360)]());
        }([], 0, 0);
        let e = document[t(427)](t(479));
        e[t(369)] = "";
        for (let c of a[t(498)](((i, n) => n[t(378)] - i[t(378)])))
            if (e[t(471)](_0x1cfb60(c[t(301)]((i => _0x29a2ce(i, false)))[t(511)]("+"))), e[t(558)][t(378)] >= 15) break;
        "" === e[t(369)] && (e[t(369)] = t(332));
    }
    async function drawYanJiao(i, t = false) {
        const n = _0x43d602;

        function a(i, ...t) {
            const n = _0x31b6;
            let a = i[n(360)]();
            for (let e = 0; e < a[n(378)]; e++) {
                for (let i = 0; i < t[n(378)]; i++)
                    if (a[e] -= t[i][e], a[e] < 0) return false;
                if (e > 0 && a[e] >= 2) return 0
            }
            return a
        }
        let e = i[n(492)](((i, t) => (i[0]++, i[t]++, i)), Array(14)[n(500)](0)),
            c = Math[n(467)](e[14] / 2),
            o = new Map([
                [0, [Array(14)[n(500)](0)]]
            ]);
        for (let u = 1; u <= 13; u++) {
            let i = e[u];
            if (0 != i)
                for (let t of Array[n(362)](o[n(433)]())[n(498)](((i, t) => t - i))) {
                    let a = o[n(385)](t);
                    for (let e = 1; e <= i; e++) {
                        let i = t + u * e;
                        if (i > c) break;
                        o[n(411)](i) || o[n(497)](i, []);
                        for (let t = 0; t < a[n(378)]; t++) {
                            let c = a[t][n(360)]();
                            c[0] += e, c[u] += e, o[n(385)](i)[n(333)](c);
                        }
                    }
                }
        }
        o[n(348)](0);
        let l = new Map;
        for (let u of Array[n(362)](o[n(433)]())[n(498)](((i, t) => t - i))) {
            let i = o[n(385)](u);
            for (let t = 0; t < i[n(378)]; t++)
                for (let c = t; c < i[n(378)]; c++) {
                    let o = a(e, i[t], i[c]);
                    o && (l[n(411)](o[0]) || l[n(497)](o[0], []), i[t][0] <= i[c][0] ? l[n(385)](o[0])[n(333)]([i[t], i[c], o]) : l[n(385)](o[0])[n(333)]([i[c], i[t], o]));
                }
        }
        let r = document[n(427)](n(479));
        r[n(369)] = "", Array[n(362)](l[n(433)]())[n(498)](((i, t) => i - t))[n(575)]((i => {
            const a = n;
            if (l[a(385)](i)[a(498)](((i, t) => i[0][0] - t[0][0]))[a(293)]((([i, n, e]) => {
                    const c = a;
                    let o = document[c(606)](c(564));
                    o[c(430)] = c(288);
                    let l = document[c(606)](c(503)),
                        u = document[c(606)](c(503));
                    l[c(437)] = i[c(513)](((i, t) => t > 0 ? Array(i)[c(500)](_0x29a2ce(t, false)) : []))[c(511)]("+"), u[c(437)] = n[c(513)](((i, t) => t > 0 ? Array(i)[c(500)](_0x29a2ce(t, false)) : []))[c(511)]("+"), o[c(471)](l), o[c(295)](c(572), c(374)), o[c(471)](u), o[c(331)] = c(608), o[c(400)] = function () {
                        toClipboard(this[c(437)], true);
                    }, t && (o[c(331)] = c(486), l[c(430)] = c(481), u[c(430)] = c(481), l[c(400)] = function (t) {
                        const a = c;
                        t[a(541)](), laya[a(346)]([i, n, e], 2);
                    }, u[c(400)] = function (t) {
                        const a = c;
                        t[a(541)](), laya[a(346)]([i, n, e], 0);
                    }), r[c(471)](o);
                })), r[a(558)][a(378)] >= 5) return true
        })), "" === r[n(369)] ? r[n(369)] = n(388) : t && r[n(295)](n(453), n(410));
    }
    async function drawChengXiang(i, t) {
        const n = _0x43d602;
        if (!(null == i ? void 0 : i[n(378)])) return;
        let a = i[n(360)]()[n(498)](((i, t) => i - t)),
            e = [];
        ! function i(c, o, l) {
            const r = n;
            if (!(l > 13)) {
                e[r(504)](c[r(360)]()), t && (e[0].K = 13 === l ? c[r(378)] : 0);
                for (let t = o; t < a[r(378)]; t++) t > o && a[t] === a[t - 1] || (c[r(333)](a[t]), i(c, t + 1, l + a[t]), c[r(557)]());
            }
        }([], 0, 0);
        let c = document[n(427)](n(479));
        c[n(369)] = "";
        for (let o of e[n(289)](((i, t, a) => !a[n(575)]((t => i[n(378)] < t[n(378)] && i[n(319)]((i => t[n(488)](i)))))))[n(498)](((i, t) => t.K - i.K || t[n(378)] - i[n(378)]))) c[n(471)](_0x1cfb60(o[n(301)]((i => _0x29a2ce(i, false)))[n(511)]("+"))), t && o.K && c[n(603)][n(566)][n(304)](n(439));
    }
    async function drawYiCheng(i, t) {
        const n = _0x43d602;

        function a(i, t, n, e, c) {
            const o = _0x31b6;
            if (n[o(378)] !== c + 1) {
                for (let l = e; l < i[o(378)]; l++) l > e && i[l] === i[l - 1] || (n[o(333)](i[l]), n[0] += i[l], a(i, t, n, l + 1, c), n[0] -= n[o(557)]());
                return t
            }
            t[o(333)]([...n, ...n[o(492)](((i, t) => {
                const n = o;
                return i[n(544)](i[n(485)](t), 1), i
            }), i[o(360)]())]);
        }
        let e = document[n(427)](n(479));
        if (e[n(369)] = "", !(null == i ? void 0 : i[n(378)]) || !(null == t ? void 0 : t[n(378)])) return;
        let c = Math[n(490)](i[n(378)], t[n(378)]);
        i[n(498)](((i, t) => i - t)), t[n(498)](((i, t) => i - t));
        for (let r = 2; r <= c; r++) {
            let o = a(i, [], [0], 0, r);
            a(t, [], [0], 0, r)[n(293)]((i => o[n(293)]((t => {
                const a = n;
                i[0] > t[0] && i[a(360)](1, r + 1)[a(319)]((i => !t[a(360)](1, r + 1)[a(488)](i))) && (c < 3 || Array[a(362)]({
                    length: r
                })[a(575)](((n, a) => i[a + 1] < t[a + 1]))) && e[a(471)](_0x1cfb60(i[a(360)](1, r + 1)[a(301)]((i => _0x29a2ce(i))) + "→" + t[a(360)](1, r + 1)[a(301)]((i => _0x29a2ce(i))), a(608), false));
            }))));
        }
        let o = Array[n(362)](new Set(t)),
            l = Array[n(362)](new Set(i));
        o[n(293)]((i => {
            const t = n;
            let a = l[t(289)]((t => t < i));
            a[t(378)] && e[t(471)](_0x1cfb60(_0x29a2ce(i) + "→" + a[t(301)]((i => _0x29a2ce(i)))[t(511)]("/"), t(608), false));
        })), "" === e[n(369)] && (e[n(369)] = n(294));
    }
    const _0xe25cfe = (() => {
        let i = false;
        return function (t = 63) {
            const n = _0x31b6;
            return t ? i ? (console[n(494)](n(435), t), true) : (i = true, laya[n(420)](n(588))[n(366)](t)) : i = false
        }
    })();
    async function drawRogueLike(i) {
        var t, n, a;
        const e = _0x43d602;
        if (console[e(494)](e(337), i), !(null == i ? void 0 : i[e(450)])) return;
        let c = i[e(450)],
            o = i[e(523)],
            l = Array[e(362)](Number(o)[e(548)](2), Number)[e(359)]();
        if (laya[e(420)](e(588)), l[4]) {
            if (!c[e(495)]) return _0xe25cfe();
            _0xe25cfe(0), c[e(495)][e(555)] = true;
        }
        let r = c[e(495)],
            u = c[e(323)],
            s = c[e(560)];
        if (r) {
            let i = [];
            if (r[e(300)] && _0x905b17[e(396)])
                for (let t of r[e(300)]) _0x905b17[e(396)][t] && i[e(333)](_0x905b17[e(396)][t][e(574)]);
            _0x1a7b3b(i);
        }
        if (s && s[e(325)] && s[e(325)][e(378)] > 0) {
            let i = s[e(325)][e(301)]((i => _0x905b17[e(595)][i] || e(445) + i + ")"));
            _0x4bcc80(e(584) + i[e(359)]()[e(511)](", "), e(334), 1e4, e(458), null, true);
        }
        let v = c[e(506)],
            x = v && v[e(570)];
        x && (rogueMap[e(570)] = x), rogueMap[e(401)] = (null == (n = null == (t = c[e(425)]) ? void 0 : t[e(587)]) ? void 0 : n[e(383)]) ?? 0, rogueMap[e(300)] = (null == (a = c[e(425)]) ? void 0 : a[e(300)]) ?? [], u && u[e(477)] && (UI[e(318)] = u[e(477)][e(301)]((i => ({
            id: i[e(287)],
            event: i[e(413)]
        }))), _0x905b17[e(354)] && globalConfig[e(519)] && drawCitiesUI(UI[e(318)]));
    }
    const drawMiaoSha = (() => {
        let i = false;
        return async () => {
            var t, n, a;
            const e = _0x31b6;
            if (i) return null;
            let {
                seckillDataDic: c,
                start_time: o,
                end_time: l
            } = (null == (n = null == (t = laya[e(420)](e(341))) ? void 0 : t[e(356)]) ? void 0 : n[e(419)]) || {};
            if (!(null == (a = null == c ? void 0 : c[e(549)]) ? void 0 : a[e(378)])) return null;
            let r = new Date(1e3 * o)[e(550)]()[e(360)](5, 16)[e(524)]("T", " "),
                u = new Date(1e3 * l)[e(550)]()[e(360)](5, 16)[e(524)]("T", " ");
            const s = document[e(417)](e(478));
            o = 1e3 * (o - 28800);
            let v = c[e(549)][e(301)]((({
                    goods_id: i,
                    goods_cnt: t,
                    price_type: n,
                    price_num: a,
                    stock: c,
                    buy_limit: l,
                    ori_price: v,
                    all_bought_cnt: x,
                    self_bought_cnt: f
                }, z) => {
                    var G;
                    const w = e;
                    let d = a + ["", w(551), "元宝", "银两"][n] + ": " + (null == (G = laya[w(582)](i)) ? void 0 : G[w(574)]) + (t > 1 ? "*" + t : ""),
                        g = r + w(345) + u + " 共" + c + "个",
                        y = x >= c || f >= l;
                    return Object[w(387)](s[z][w(473)] ?? {}, {
                        goods_id: i,
                        start_time: o,
                        goods: d
                    }), {
                        goods_id: i,
                        goods: d,
                        title: g,
                        disabled: y
                    }
                })),
                x = document[e(357)](e(514));
            for (let f = 0; f < Math[e(505)](x[e(378)], v[e(378)]); f++)
                if (x[f] && v[f]) {
                    const t = v[f];
                    x[f][e(369)] = e(581) + (t[e(509)] ? e(483) : "") + e(599) + t[e(331)] + '">' + t[e(582)] + e(601);
                    let n = x[f][e(379)] - 6e4;
                    n > timer[e(576)]() && timer[e(497)](e(390), (() => {
                        const t = e;
                        _0x319ccd(r + t(447) + v[t(301)]((({
                            goods: i
                        }) => i))[t(511)]("\n")), i = true, setTimeout((() => {
                            i = false;
                        }), 66666);
                    }), n);
                }
        }
    })();
    let _0x50a2bc = ["巳蛇", "灵动", "八门", "盾弓", "智迟", "持盈", "卫主", "不死", "刚烈", "觉醒", "悲鸣", "断肠", "节命", "先机", "悲鸣", "忘魂", "雅士", "挥泪", "不屈", "封冻", "灵躯", "武魂", "已蛇", "邪徒", "魅步", "雷击", "恢拓", "明哲", "夺炁"];
    const _0x33110c = {
        getspell: 0,
        getspell_ZD: 1,
        getspell_KN: 2,
        getspell_EM: 3,
        getspell_LY: 4
    };

    function _0xe66ca9(i, t) {
        const n = _0x43d602;
        let a = [],
            e = false,
            c = _0x1d4038(t);
        const o = _0x33110c[c];
        let l = Object[n(433)](_0x33110c)[n(289)]((i => _0x33110c[i] <= o))[n(301)]((t => i[t]))[n(289)](Boolean)[n(511)](";");
        l = null == l ? void 0 : l[n(563)](";")[n(301)]((i => {
            var t;
            return (null == (t = _0x905b17[n(546)][i]) ? void 0 : t[n(574)]) || n(326)
        }));
        for (let r of l) _0x50a2bc[n(488)](r) && (a[n(333)](r), e = true);
        return [a, e]
    }

    function _0x1d4038(i) {
        const t = _0x43d602;
        switch (Math[t(467)]((i - 1) / 5)) {
        case 0:
        default:
            return t(457);
        case 1:
            return t(593);
        case 2:
            return t(518);
        case 3:
            return t(306);
        case 4:
            return t(298)
        }
    }
    const _0x288fa7 = _0x3cac;
    ! function (i, t) {
        const n = _0x3cac,
            a = _0x21e0();
        for (;;) try {
            if (164602 === -parseInt(n(686)) / 1 * (parseInt(n(462)) / 2) + parseInt(n(658)) / 3 + -parseInt(n(534)) / 4 * (parseInt(n(818)) / 5) + -parseInt(n(535)) / 6 + -parseInt(n(757)) / 7 + -parseInt(n(920)) / 8 * (parseInt(n(719)) / 9) + -parseInt(n(476)) / 10 * (-parseInt(n(707)) / 11)) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0x51f62a = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x3cac(766)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x7a6de2 = _0x51f62a(globalThis, (function () {
            const i = _0x3cac;
            let t;
            try {
                t = Function(i(437) + i(713) + ");")();
            } catch (e) {
                t = window;
            }
            const n = t[i(660)] = t[i(660)] || {},
                a = [i(824), i(730), i(656), i(785), i(856), i(872), i(878)];
            for (let c = 0; c < a[i(568)]; c++) {
                const t = _0x51f62a[i(600)][i(879)][i(881)](_0x51f62a),
                    e = a[c],
                    o = n[e] || t;
                t[i(455)] = _0x51f62a[i(881)](_0x51f62a), t[i(595)] = o[i(595)][i(881)](o), n[e] = t;
            }
        }));
    _0x7a6de2();
    const {
        allCard: _0x5b61fb,
        initMap: _0x4a2d0d,
        loadConfig_w: _0xfc6243,
        addTooltip: _0x19990a,
        tooltipSGS: _0x19c297
    } = window[_0x288fa7(654)], {
        localDel: _0x3c4944,
        localGet: _0xff8b9f,
        localSet: _0x1cd405,
        createWindow: _0x1a8079
    } = window[_0x288fa7(654)], {
        openWindow: _0xca4f84,
        json2html: _0x1035d1,
        array2table: _0xbfdc5b
    } = window[_0x288fa7(654)], _0x117b26 = C3rHCNrFDgLTzq();
    let _0x581997 = null;
    const _0x2ce378 = " 3.2.3.2" [_0x288fa7(741)](/^2\.9\./, ""),
        _0x18c3c3 = "\n增加三国秀爱好者搭配搜索神器三国锦绣；\n增加山河图手册；\n如果觉得我们做得不错的话；\n不妨支持我们一下，解锁更多快捷功能；\n目前中秋国庆双节钜惠活动；\n刷酒馆福卡刷百胜赛博上班？小抄帮你刷刷刷；\n山河图操作太复杂？小抄智能技能一键挂机；\n日常任务太繁琐？小抄一键领取各种奖励；\n秒杀太难抢？小抄让你快人一步；\n最低4毛一天，帮你更轻松更快乐三国杀；\n点击该通知查看详情；\n" [_0x288fa7(741)](/；/g, _0x288fa7(559));

    function Init() {
        const i = _0x288fa7;
        return window[i(522)] = i(689), window[i(679)] = globalConfig[i(679)] || 0, window[i(682)](i(801), _0x43c2b8), new Promise(((t, n) => {
            const a = i;
            Promise[a(909)]([new Promise((i => {
                ! function t() {
                    var n;
                    const a = _0x3cac;
                    typeof JSZipUtils !== a(716) && typeof CtrUtil !== a(716) && typeof (null == (n = null == CtrUtil ? void 0 : CtrUtil[a(690)]) ? void 0 : n[a(567)]) !== a(716) && typeof SystemContext !== a(716) && document[a(847)](a(898)) ? initFrame(true)[a(597)](i) : setTimeout(t, 1e3);
                }();
            }))])[a(597)](t)[a(901)](n);
        }))
    }

    function Exit() {
        var i, t, n, a;
        const e = _0x288fa7;
        return window[e(451)](e(801), _0x43c2b8), window[e(451)](e(801), _0x5f4c0c), window[e(451)](e(579), _0x2b5a5e), window[e(715)][e(647)](0, 1 / 0), null == (i = document[e(847)](e(650))) || i[e(773)](), null == (t = document[e(847)](e(724))) || t[e(773)](), null == (n = document[e(847)](e(625))) || n[e(773)](), null == (a = document[e(847)](e(854))) || a[e(773)](), globalState[e(883)] = false, true
    }

    function _0x43c2b8() {
        const i = _0x288fa7;
        window[i(808)] = document[i(657)][i(828)] - window[i(679)];
    }

    function _0x2b5a5e() {
        const i = _0x288fa7;
        window[i(837)](new Event(i(801)));
    }
    let _0x1008de;

    function _0x5f4c0c() {
        _0x1008de && clearTimeout(_0x1008de), _0x1008de = setTimeout((() => {
            _0x1730f0(), _0x1008de = null;
        }), 500);
    }
    async function initFrame(i = false) {
        var t, n, a, e, c;
        const o = _0x288fa7;
        if (i && (null == (t = document[o(847)](o(650))) || t[o(773)](), null == (n = document[o(847)](o(724))) || n[o(773)](), null == (a = document[o(847)](o(625))) || a[o(773)](), null == (e = document[o(847)](o(854))) || e[o(773)](), globalState[o(883)] = false), !globalState[o(883)]) {
            window[o(682)](o(801), _0x5f4c0c), SystemContext[o(764)] = SystemContext[o(792)], SystemContext[o(479)] = SystemContext[o(874)], Object[o(563)](SystemContext, o(792), {
                get: function () {
                    return this[o(764)]
                },
                set: function (i) {
                    const t = o;
                    this[t(764)] !== i && (this[t(764)] = i, window[t(837)](new Event(t(579))));
                }
            }), Object[o(563)](SystemContext, o(874), {
                get: function () {
                    return this[o(479)]
                },
                set: function (i) {
                    const t = o;
                    this[t(479)] !== i && (this[t(479)] = i, window[t(837)](new Event(t(579))));
                }
            }), window[o(682)](o(579), _0x2b5a5e);
            try {
                document[o(847)](o(898))[o(825)][o(775)] = false, null == (c = document[o(802)](o(524))) || c[o(773)]();
            } catch {}
            return _0x3553db(), addDynamicBG(), addFrame(), globalState[o(883)] = true, _0xfc6243(true)
        }
    }

    function addDynamicBG() {
        const i = _0x288fa7;
        var t = document[i(847)](i(898));
        if (t) {
            var n = document[i(871)](i(767));
            n.id = i(625), n[i(606)][i(850)] = i(464), n[i(606)][i(777)] = i(768), n[i(606)][i(611)] = i(768), n[i(606)][i(704)] = i(618), n[i(606)][i(510)] = "0", n[i(606)][i(623)] = i(590);
            var a = document[i(871)](i(903));
            a[i(456)] = i(794), a.id = i(804), a[i(711)] = true, a[i(652)] = true, a[i(444)] = true, a[i(746)] = i(523), a[i(606)][i(447)](i(782), i(733), i(738));
            var e = document[i(871)](i(675));
            e[i(456)] = i(794), e.id = i(786), e[i(513)] = i(582), e[i(606)][i(510)] = "1", e[i(606)][i(850)] = i(464), e[i(606)][i(777)] = "0", e[i(606)][i(611)] = "0", n[i(566)](a), n[i(566)](e), t[i(566)](n), window[i(837)](new Event(i(801)));
        }
    }

    function _0x1730f0() {
        const i = _0x288fa7;
        if (!SystemContext) return;
        UI[i(498)] = SystemContext[i(544)] * SystemContext[i(874)] | 0, UI[i(643)] = SystemContext[i(726)] * SystemContext[i(874)] | 0, UI[i(446)] = SystemContext[i(874)], UI[i(508)] && UI[i(508)][i(568)] > 0 && (_0x44c71d(), drawSeatUIs()), window[i(808)], window[i(710)];
        let t = {
            width: (SystemContext[i(544)] * SystemContext[i(874)] | 0) / window[i(905)],
            height: (SystemContext[i(726)] * SystemContext[i(874)] | 0) / window[i(905)]
        };
        globalConfig[i(679)] && document[i(847)](i(854)) ? (document[i(847)](i(898))[i(606)][i(498)] = document[i(657)][i(828)] + "px", document[i(847)](i(854))[i(606)][i(643)] = i(776), document[i(847)](i(854))[i(606)][i(614)] = i(664), document[i(847)](i(854))[i(606)][i(777)] = i(664)) : document[i(847)](i(898))[i(606)][i(498)] = document[i(657)][i(828)] + "px";
        let n = document[i(847)](i(625)),
            a = document[i(847)](i(804)),
            e = document[i(847)](i(786)),
            c = document[i(847)](i(650)),
            o = document[i(847)](i(724)),
            l = ((window[i(710)] * window[i(905)] - SystemContext[i(874)] * SystemContext[i(726)]) / (2 * window[i(905)]) + SystemContext[i(874)] * SystemContext[i(726)] / 2) / window[i(905)];
        n && (n[i(606)][i(498)] = t[i(498)] + "px", n[i(606)][i(643)] = t[i(643)] + "px", n[i(606)][i(611)] = window[i(808)] / 2 + "px", n[i(606)][i(777)] = l + "px"), a[i(498)] = t[i(498)], a[i(643)] = t[i(643)], a[i(606)][i(611)] = window[i(808)] / 2 + "px", a[i(606)][i(777)] = l + "px", e[i(498)] = t[i(498)], e[i(643)] = t[i(643)], c[i(606)][i(498)] = t[i(498)] + "px", c[i(606)][i(643)] = t[i(643)] + "px", c[i(606)][i(611)] = window[i(808)] / 2 + "px", c[i(606)][i(777)] = l + "px", o[i(606)][i(498)] = t[i(498)] + "px", o[i(606)][i(643)] = t[i(643)] + "px", o[i(606)][i(611)] = window[i(808)] / 2 + "px", o[i(606)][i(777)] = l + "px", UI[i(525)] = window[i(808)] > t[i(498)] ? t[i(498)] / 2 : window[i(808)] / 2, UI[i(603)] = t[i(643)] / 2;
    }

    function _0x44c71d() {
        var i, t;
        const n = _0x288fa7,
            a = {
                ScaledHeight: UI[n(699)] * UI[n(446)]
            };
        let e = UI[n(759)] * UI[n(446)],
            c = UI[n(505)] * UI[n(446)];
        UI[n(858)] = e, UI[n(436)] = c;
        let o = UI[n(643)],
            l = UI[n(498)];
        var r, u, s = a[n(621)],
            v = UI[n(508)][n(568)];
        if (1 != v) {
            r = e, u = c;
            var x, f = (x = UI[n(508)])[n(568)] - 1,
                z = 0,
                G = 0,
                w = 0;
            f < 3 ? G = f : 3 == f ? G = 1 : 4 == f || 6 == f ? G = 2 : (5 == f || 7 == f) && (G = 3), w = f - (z = f - G >> 1) - G, room[n(545)] && (2 == (null == (i = UI[n(508)][0]) ? void 0 : i[n(906)]) ? (G = 1, z = 1) : 3 == (null == (t = UI[n(508)][0]) ? void 0 : t[n(906)]) && (G = 1, w = 1)), room[n(465)] && 3 == v && 1 == UI[n(914)] && (G = 1, w = 1);
            var d, g, y = 1,
                L = 0,
                b = 0,
                B = 0,
                h = 0,
                C = UI[n(867)] * UI[n(446)];
            if (z > 0) {
                var D = r,
                    M = u * z;
                for (B = .25 * (o - s - M) | 0, UI[n(698)] = B, M += (z - 1) * B, d = y + z, L = l - D - UI[n(507)] * UI[n(446)] - C - 0, b = (o - s - M - UI[n(865)] * UI[n(446)] - UI[n(636)] >> 1) + (UI[n(865)] + 10) * UI[n(446)] + M + UI[n(860)]; y < d; y += 1) b -= c, (g = x[y])[n(846)] = (L - 5 | 0) / window[n(905)], g[n(868)] = (b + c | 0) / window[n(905)], g[n(588)] = n(739), b -= B;
            }
            var A = [];
            if (G > 0) {
                var _ = r * G;
                for (h = .07 * (l - C - _) | 0, UI[n(475)] = h, d = y + G, L = (l - (_ += (G - 1) * h) - C) / 2 + _ + (l <= 1600 ? UI[n(453)] : 0), b = (UI[n(865)] + 10) * UI[n(446)]; y < d; y += 1) L -= e, (g = x[y])[n(846)] = (L | 0) / window[n(905)], g[n(868)] = (b + c | 0) / window[n(905)], g[n(588)] = n(629), A[n(831)](g), L -= h;
            }
            if (w > 0) {
                var m = u * w;
                for (m += (w - 1) * (B = .25 * (o - s - m) | 0), d = y + w, L = UI[n(727)] * UI[n(446)], b = (o - s - m - UI[n(865)] * UI[n(446)] - UI[n(636)] >> 1) + (UI[n(865)] + 10) * UI[n(446)] + UI[n(860)]; y < d; y += 1)(g = x[y]) && (g[n(588)] = n(876), g[n(846)] = (L + 0 | 0) / window[n(905)], g[n(868)] = (b + c | 0) / window[n(905)]), b += u + B;
            }
        }
    }

    function _0x21e0() {
        const i = ["B2jQzwn0lwzPDa", "cIaGica8zgL2ihn0EwXLpsi", "yNv0Dg9UCW", "zxjYB3i", "C2DZqMDjtuC", "CxvLzgLUz1n3AxrJAa", "i2yYzgu5yW", "BMv4DevSzw1LBNrtAwjSAw5N", "mJmWChG", "y2XVC2u", "z2fTzvnJCMvLBLr5Cgu", "quntDwjTAxq", "yMCTyw5P", "Dg91y2HLBMq", "z3jHyG", "BNvT", "yMXVy2TfzMzLy3rdB250ywLUzxi", "C2nYB2XSwa", "C2nYB2XSsgvPz2H0", "CMvZAxPL", "CxvLCNLtzwXLy3rVCG", "Dgv4Dc1HBgLNBJOGy2vUDgvYoW", "C2DZqMDwAwrLBW", "u2HVD1DPBMrVDW", "pc9IB2r5pJWVAhrTBd4", "yM9YzgvYoIaXChGGC29SAwqGCMDIkdiXmIWGmJeYlcaXnJiPoW", "Aw5UzxjxAwr0Aa", "zgf0Dw0", "B3bHy2L0Eq", "r0fnrv9nsuretevFsevjr0Hu", "B3bLBLn0B3jL", "yM9YzgvYlxjHzgL1CZOGnNb4oW", "zM9UDc1ZAxPLoIaYmhb4oW", "yxv0B0jVDfn3AxrJAa", "CgfWzxjtDgf0zuj1DhrVBG", "yxn5BMm", "mJKZotKWrvjov3j6", "yMfJA2DYB3vUzdOGCMDIkdeWnYWGmZaSidmWktS", "pc9HpJWVCd4kicaGidWVzgL2pGO", "DxnLCLnLBgvJDa", "y3vYC29YoIbWB2LUDgvYoW", "zgLZCgXHEtOGzMXLEdS", "Bg9N", "zMLYC3rfBgvTzw50q2HPBgq", "Dg9WihjPz2H0", "zgf0ys10B29SDgLW", "y2XPzw50v2LKDgG", "CM9NDwvdAxr5u3DPDgnO", "yM9YzgvYoIbUB25LoW", "ChvZAa", "yxv0B0rYDw1tD2L0y2G", "z2vK", "ChGSia", "q2fYze51BwjLCG", "mc42", "zgLZCgf0y2HfDMvUDa", "yMvMB3jLzw5K", "DMLZAwjSzq", "lM1PEMH1", "mZbWEa", "DhjHBNnMB3jTt3jPz2LU", "Dgv4DefSAwDU", "C2nYAxb0", "zxzLBNq", "Cg9Zwa", "z2v0rwXLBwvUDej5swq", "B2zMC2v0v2LKDgG", "zML4zwq", "Cg9ZAxrPB24", "y29SB3i", "twLU", "rwXLy3rYB24", "y3jLyxrLswzYyw1L", "6zEQ55s154Mm", "zxHJzxb0Aw9U", "Ahr0Chm6lY9SBhnJy20Uz2L0AhvIlMLVl3nNC3rVB2XZl3DVCMTLCMXVywrLCI5QCW", "u2nHBgvxAwr0Aa", "yxv0B0Hhu3DPDgnO", "BgvMDfjPz2H0vg9W", "Aw5WDxrBAwqKpsjtD2L0y2GIxq", "C2LKzwjHCKHPBNq", "r0fnrv9nsuretevFv0LeveG", "77Ym5AAc6zYa5PU05Ps5l+wiOoMzPo+8JoABToAuUs/LIkdPMAtMMlxNP7dPH43MLRdMIzpLVidLVidLHBm", "CgfKzgLUz1rVCa", "z3vHBNHPBMC", "CMLNAhrcyxjxAwr0Aa", "Cg9Zwq", "y2HHCMfJDgvYswq", "AwzYyw1LlxnVDxjJzq", "y3jLyxrLrwXLBwvUDa", "DgfIBgu", "C2TPBLn0yxrLqNv0Dg9U", "z2fTzvnJywXL", "z3HQC29U", "tgvMDa", "r0fnrv9nsu5Fv0LeveG", "DhjHy2u", "ChjVDg90ExbL", "DhjHBNnSyxrLkdbWEcWGmhb4kq", "yMLUza", "Ahr0Chm6lY93zwiUC2fUz3vVC2HHlMnVBs8YmJaVAdvFmI9YzxmVyxnZzxrZl2jPz1bUzY9WCM9Wr2v0lNbUzW", "AxngCMfTzufKza", "CxvLCNLtzwXLy3rVCKfSBa", "y2HLy2TIB3G", "Cg9ZAxrPB25Lza", "nZvWEa", "Dgv4DenVBNrLBNq", "Aw5Qzwn0q1nt", "DxnLCKLe", "zMXHz3m", "uM9NDwvtBwfSBe1HCfnJzw5L", "z29VzhnFAwq", "Bw91C2vVDMvY", "yMXVy2TfzMzLy3reAwfSB2C", "B2jZzxj2zq", "mtu1ChG", "yMDeAxy", "y2XPy2S", "yxv0B1D1sMLHBMDtD2L0y2G", "y2f0y2G", "BxLxAw5KB3DhDwfUwgLUzW", "DMLKzw8", "BwL6Ahu", "zgv2AwnLugL4zwXsyxrPBW", "ywn0DwfSu2vHDeLe", "y2fYzfr5Cgu", "pgH0BwW+pgHLywq+pg1LDgeGy2HHCNnLDd0IDxrMltGIic8+phrPDgXLpUEzVUIdNdWVDgL0Bgu+pc9OzwfKpJXIB2r5pG", "ywXS", "v29YA2vYtg9HzgvY", "ywXSugfWzxjtD2L0y2G", "DxbKyxrLtg9N", "q2fYzezSB3DLCG", "zNjPzw5Kr2vUzxjHBa", "v0vjrfvbtG", "zwXLBwvUDezYB21qB2LUDa", "AgvHza", "CgfYDgLJBgu", "C2vJs2LSBeL0zw0Xu3DPDgnO", "ohLTB29XsW", "mxb4", "vefts19wsva", "x2jSyw5R", "B25SB2fK", "y3nZvgv4Da", "u2nHBgvizwLNAhq", "CMv0DxjUicHMDw5JDgLVBIGPia", "AgLKzgvU", "ntaWChG", "5OUw5yIW6l+z6yEm5y+y5lI65y+y5lI65l6N6l655Qcp77Ym5yAn5QYH5OUw5yQO5y+w5RAi5l6N6l655Qcp", "AwzYyw1L", "DhjHBNnPDgLVBG", "5lIa5lQm5lIj5zUB5lQu5ywT5lId5ywR", "Bxv0zwq", "ChGP", "C2nHBgu", "C2v0uhjVCgvYDhK", "B3zLCMzSB3CTEtOGyxv0BZS", "Cg93zxiYlM91Da", "yNv0Dg9U", "CMvTB3zLrxzLBNrmAxn0zw5LCG", "y2XLyxi", "CgfKzgLUz0XLzNruB3bfEhrYyq", "zMLUAxnOvgLTzq", "x19WCM90B19F", "y2XHC3noyw1L", "DxnLCI1ZzwXLy3q6ig5VBMu7", "DgfYz2v0", "su5wsvrfx05btuu", "tufyu0LAruniqu5hrq", "CMvVCMrLCK51BwjLCG", "mMTHsNLHta", "BwLU", "ywjZB2X1Dgu", "AxntAgfUsgvuDq", "A2vLCa", "Dg9Nz2XL", "y2HHBMDL", "C2HVDW", "Bw91C2vSzwf2zq", "DMfSDwu", "CMvKrg90", "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oWOGicaGicaGicaGB3zLCMzSB3C6ihzPC2LIBgu7cIaGicaGih0kcIaGicaGic5ZB3jKzxiTyM9KEtPOB3zLCJO6ywz0zxiGEWOGicaGicaGicaGzgLZCgXHEtOGBM9UztSkicaGicaGFqOkicaGicaGlNnVCMrLCI1IB2r5oM5VDcGJCgfPzhvPq2fYzhmPic5ZAg91CgfPoMrPC2fIBgvKihSGcIaGicaGicaGicbKAxnWBgf5oIbUB25LoWOGicaGicb9iaOGicaGicaUC29YzgvYlwjVzhK6BM90kcnWywLKDwLdyxjKCYKGlNnOB3vWywKUrYb7cIaGicaGicaGicb3Awr0AdOGyxv0BZSkicaGicaGFsakicaGicaGcIaGicaGiebRzxLMCMfTzxmGzMfKzuLUtgvMDfrVuMLNAhqGEWOGicaGicaGidaLihSkicaGicaGicaGignSAxaTCgf0AdOGAw5ZzxqOmcaXmdaLidaGmcK7cIaGicaGicaGicbVCgfJAxr5oIaWoWOGicaGicaGih0kicaGicaGicaXmdaLihSkicaGicaGicaGignSAxaTCgf0AdOGAw5ZzxqOmcaWidaGmcK7cIaGicaGicaGicbVCgfJAxr5oIaXoWOGicaGicaGih0kicaGicaGFqOGicaGicakicaGicaGqgTLEwzYyw1LCYbMywrLt3v0uMLNAhruB0XLzNqGEWOGicaGicaGidaLihSkicaGicaGicaGignSAxaTCgf0AdOGAw5ZzxqOmcaWidaGmcK7cIaGicaGicaGicbVCgfJAxr5oIaXoWOGicaGicaGih0kicaGicaGicaXmdaLihSkicaGicaGicaGignSAxaTCgf0AdOGAw5ZzxqOmcaXmdaLidaGmcK7cIaGicaGicaGicbVCgfJAxr5oIaWoWOGicaGicaGih0kicaGicaGFqOGiaOGicaGicaUywmTDg9VBhrPCcb7cIaGicaGicaGCg9ZAxrPB246igzPEgvKoWOGicaGicaGihrVCdOGmtaWChG7cIaGicaGicaGBgvMDdOGntaLoWOGicaGicaGigjHy2TNCM91BMqTy29SB3i6ihrYyw5ZCgfYzw50oWOGicaGicaGigjHy2TNCM91BMqTAw1Hz2u6ihzHCIGTlw15lwjHy2TNCM91BMqTAw1Hz2uPoWOGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicbIywnRz3jVDw5KlxnPEMu6ideWmcuGmtaWjtSkicaGicaGicbJB2XVCJOGi0y0ndmZnJSkicaGicaGicbMB250lxnPEMu6ide2ChG7cIaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGihOTAw5KzxG6idK5otK7cIaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicb3AgL0zs1ZCgfJztOGBM93CMfWoWOGicaGicaGihbHzgrPBMC6ide2ChGGmZjWEdSkicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGB3bHy2L0EtOGmdSkicaGicaGicb2AxnPyMLSAxr5oIbOAwrKzw47cIaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvykdaPoWOGicaGicaGihrYyw5ZAxrPB246ig9WywnPDhKGmxmGzwfZzs1PBI1VDxqSihzPC2LIAwXPDhKGmxmGzwfZzs1PBI1VDxq7iaOGicaGicb9cIaGicaGic5HyY10B29SDgLWlMDYzwvUihSkicaGicaGicbIywnRz3jVDw5KlwnVBg9YoIb0CMfUC3bHCMvUDdSkicaGicaGicbJB2XVCJOGi2yYzgu5yZSkicaGicaGFqOGicaGicaUy2L0ExSkicaGicaGicb2AxnPyMLSAxr5oIbOAwrKzw47cIaGicaGicaGDhjHBNnPDgLVBJOGB3bHy2L0EsaXCYbLyxnLlwLUlw91DcWGDMLZAwjPBgL0EsaXCYbLyxnLlwLUlw91DdSGcIaGicaGicaGyMfJA2DYB3vUzc1JB2XVCJOGCMDIysG1nsWGntiSidm5lcaWlJCPoWOGicaGicaGignVBg9YoIaJzJjKztLJoWOGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGyM9YzgvYlxjHzgL1CZOGnxb4oWOGicaGicaGihrLEhqTywXPz246ignLBNrLCJSkicaGicaGicbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoYaVkIdKVB9MBgv45BId5Bga5z6c55U05O6s5yIxicOVcIaGicaGicaGCgfKzgLUzZOGnxb4cIaGicaGih0kicaGicaGAhiGEWOGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGig1HCMDPBJOGmaOGicaGicb9cIaGcIaGicaGiebRzxLMCMfTzxmGyMXPBMSGEWOGicaGicaGicaGntaLihSkicaGicaGicaGicaGicbIB3jKzxiTy29SB3i6icnMmMrLowm7cIaGicaGicaGicb9cIaGicaGih0kicaGic5ZAg93ihSkicaGicaGicbHBMLTyxrPB246igzHzgvjBKXLzNruB1jPz2H0idfZigzVCNDHCMrZlcbIBgLUAYaYCYbPBMzPBML0ztSkicaGicaGicb2AxnPyMLSAxr5oIb2AxnPyMXLoWOGicaGicb9cIaGlMHPzguGEWOGicaGyw5PBwf0Aw9UoIbMywrLt3v0uMLNAhruB0XLzNqGmxmGzM9YD2fYzhm7cIaGicb2AxnPyMLSAxr5oIbOAwrKzw47cIaGFqOGlNDPBMrVDYb7cIaGicb3Awr0AdOGmtaYnhb4oWOGicaGAgvPz2H0oIa2mdbWEdSkicaGigjVCMrLCJOGmNb4ihnVBgLKicmZmZm7cIaGicbIB3jKzxiTCMfKAxvZoIa4ChG7cIaGicbIB3GTC2HHzg93oIaWidaGmtvWEcbYz2jHkdaSidaSidaSidaUnsK7cIaGicbWB3nPDgLVBJOGCMvSyxrPDMu7cIaGicbIywnRz3jVDw5KlwnVBg9YoIaJzJvMnwy1oWOGicaGB3zLCMzSB3C6igHPzgrLBJSkicb9cGOGic53Aw5KB3CTAgvHzgvYihSkicaGigrPC3bSyxK6igzSzxG7cIaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGyMfJA2DYB3vUzc1JB2XVCJOGiZiZmJaXzdSkicaGignVBg9YoIb3AgL0ztSkicaGihbHzgrPBMC6idvWEdSkicaGign1CNnVCJOGBw92ztSkicb9cGOGic53Aw5KB3CTAgvHzgvYic50AxrSzsb7cIaGicbMB250lxDLAwDODdOGyM9SzdSkicaGihbHzgrPBMCTBgvMDdOGmtbWEdSkicb9cGOGic53Aw5KB3CTAgvHzgvYic5JB250CM9SCYb7cIaGicbKAxnWBgf5oIbMBgv4oWOGicaGz2fWoIa1ChG7cIaGFqOkicaUD2LUzg93lwHLywrLCIaUy29UDhjVBhmGyNv0Dg9UihSkicaGigjHy2TNCM91BMq6ihrYyw5ZCgfYzw50oWOGicaGyM9YzgvYoIbUB25LoWOGicaGy29SB3i6ihDOAxrLoWOGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGCgfKzgLUzZOGnxb4oWOGih0kcIaGlNDPBMrVDY1OzwfKzxiGlMnVBNrYB2XZigj1DhrVBJPOB3zLCIb7cIaGicbIywnRz3jVDw5KlwnVBg9YoIbYz2jHkdi1nsWGmJu1lcaYntuSidaUmIK7cIaGFqOkicaUD2LUzg93lwnVBNrLBNqGEWOGicaGD2LKDgG6ideWmcu7cIaGicbOzwLNAhq6ignHBgmOmtaWjsaTidqWChGPoWOGicaGyM9YzgvYoIbUB25LoWOGih0kcIaGlMz1BgXZy3jLzw4GEWOGicaGCg9ZAxrPB246igzPEgvKoWOGicaGDg9WoIaWoWOGicaGBgvMDdOGmdSkicaGihDPzhrOoIaXmdb2DZSkicaGigHLAwDODdOGmtaWDMG7cIaGicb6lwLUzgv4oIaXmdaWoWOGih0kicakica", "u2nLBMvoyw1L", "Ag9YAxPVBNrHBeDHCa", "odbRuM9Ov0W", "z29Vzhm", "CMvX", "x2DHBwvty2fSzq", "D29YA2vY", "C2XPy2u", "5OQa6io95OIy5yQF", "y2XVC2vK", "lNn3AxrJAa", "BwfYz2LU", "y2XVC2vZDa", "rLvmta", "DgfZAW", "twLKzgXL", "y29SDw1U", "ANvZDgLMEs1JB250zw50oIbJzw50zxi7", "BNvTyMvY", "yMfPC2HLBMC", "y2XHC3nmAxn0", "ywnOAwv2zw1LBNrjBMzV", "y29SB3i6icnMmMrLowm7", "y3vYC29Y", "D2LKDgG", "DgL0Bgu", "ChjLDMvUDerLzMf1Bhq", "B3zLCMzSB3C", "y2XPzw50wq", "5BEY5A6m5OIq", "D2LKDgG6idi2ChG7", "Dw5Zy2fSzwrizwLNAhq", "5RI45OIp6k6W5B2v", "CgfKzgLUz1jPz2H0", "C2vHDfvjCW", "ls1KAwfSB2CTBgvMDa", "EKLUzgv4", "ywXPz24TAxrLBxm6ignLBNrLCJS", "rwXLy3rYB24Gqvbj6lcd55sO5AsX6lsL77Ym5zUE6yca6ycA55sO5PA55Rov", "C3jJ", "r0fnrv9nqvHFv0LeveG", "DgLTzq", "lMrPywXVzY1JBg9Zzs1IDg4", "yxv0B0THBLnODvn3AxrJAa", "ywXPz25jDgvTCW", "C3rYAw5NAwz5", "Bw91C2v1Ca", "y3jLyxrLu2TPBKLMCMfTzvnVDxjJzq", "v0rwzxjtAw9U", "yxv0BW", "BgLUA1TYzwW9C3r5BgvZAgvLDf0", "y2vUDgvYwa", "CMvVCMrLCKzSB3DLCG", "lMv4CgXHBMf0Aw9U", "lNbHBMvSlwHLywrLCG", "BwfYz2LUoIaWChG7", "zM9UDfnPEMu", "r2v0uhjVq291BNq", "C2TPBLn3AxrJAa", "ls1KAwfSB2CTDg9W", "mtjvwhbfuNO", "otuXmde4rhnosgTZ", "Dgv4Da", "C2nLBMu", "5lI655UU5yMn5PY65zMO5OMa5PYj6lsM5y+357Ur5A6A5yQP5yQB", "lMv4DgvYBMfSlwXPBMS", "r1nbuow6K+ACQUwkOoI9VE+8JoEYKUwTKoEjUEAvIow3SUI3S+I/HW", "Bw91C2uTChjLC3nLza", "D2LUzg93", "Bwf4sgvPz2H0", "z2fTzvDPzhrO", "AxneB3veAvPODq", "BxLxAw5KB3DcywLtAgvUzW", "mZfWEa", "i3nLyxrvssa+icO6BM90kc5JAxr5kq", "CMDIysG1nsWGndaSidmYlcaXkq", "lNnVCMrLCI1IB2r5", "C2vJs2LSBeL0zw0Zu3DPDgnO", "r0fnrv9nsu5Fsevjr0Hu", "lNnSAwrLCG", "CMDIkdm1lcaZmIWGmJKP", "Aw52AxrLtMfTzq", "C2vHDfvju3DPDgnO", "CMDIkdeZmcWGmZaSidmWkq", "B25JBgLJAW", "pgjYpG", "z2v0qxr0CMLIDxrL", "yxv0B1rHC2TtD2L0y2G", "ywn0AxzL", "zgvMAw5LuhjVCgvYDhK", "C2v0sxrLBq", "Dg91y2HTB3zL", "yxbWzw5Kq2HPBgq", "t2zIx0rLyW", "BgvUz3rO", "y3jLyxrLt2jQzwn0vvjm", "Aw5Zzxj0qwrQywnLBNrive1m", "uM9NDwvmAwTLqMLNtwfWu2nLBMu", "zwzMzwn0qMXVy2TtD2L0y2G", "DhLWztq", "C2nYB2XSwq", "BxLxAw5KB3Dhyw1LuMvJB3jK", "zgLZywjSzwq", "uM9NDwvkAvnOAvDPBMrVDW", "DhjPBq", "u0DtCMvZAxPL", "yMfJA2DYB3vUzenVBg9Y", "B2zMC2v0sgvPz2H0", "zgf0ytPPBwfNzs9NAwy7yMfZzty0lfiWBeDprgXOqvfbqKfjqufbqufbqvaVlY95sdvcquvbqufbquXbqufbqufcquffqufbsujsque3", "zgLZy29UBMvJDa", "C2HVD01VzgfS", "B3jKzxiTyM9KEq", "ywnuB29SDgLW", "Ahr0Chm6lY93zwiUC2fUz3vVC2HHlMnVBs8Xmc9WyY9YzxmVyxnZzxrZl3j1BNrPBwuVz2vUzxjHBc9TyxHcAwCVnJa0nZaXlNbUzW", "rgLZCgXHEuXVy2f0Aw9U", "lMXLzNqGAw5WDxrBDhLWzt0Iy2HLy2TIB3GIxq", "BM9Uzq", "B3bLBKv4DgvYBMfS", "yMXVy2S", "D2LSBenOyw5Nzq", "iIb0yxjNzxq9iL9IBgfUAYi+", "Dg9tDhjPBMC", "z2fTzxjLy29Yza", "DgHLBG", "yMfZAwm", "DxjS", "y29UC3rYDwn0B3i", "y2XVC2vjzNjHBwu", "Aw5UzxjuzxH0", "y2vUDgvYwq", "B25TB3vZzw92zxi", "D2LKDgG6idiZmhb4oW", "C3r5Bgu", "Aw5Uzxjive1m", "z2v0t3jKzxi", "B25TB3vZzw91Da", "B25TzxnZywDL", "BgvMDa", "BwfYz2LUlxjPz2H0oIbHDxrVoW", "lNn3AxrJAc1JB250ywLUzxi", "CMLNAhq", "5Bcp5OQe5BEY57Up5PU05PAW5yIW", "CMDIkdeWnYWGmZaSidmWkq", "zg9JDw1LBNq", "DhjHBNnSyxrLkc01mcuSic01mcuP", "C3rYAw5N", "C29YDa", "u2nHBgvKsgvPz2H0", "Bw91C2vKB3DU", "Cg9PBNrLCKv2zw50CW", "Dg91y2HZDgfYDa", "y3vZqKDeAxy", "B3bLBG", "BwfYz2LUoIaXChG7", "yxv0B1nrs1n3AxrJAa", "vg9W", "y2XHC3m", "C2LU", "z2vUzxjHBerPy3q", "AxnuCNvZDgvK", "CMfUzg9T", "C3rHCNrFDgLTzq", "CgfKzgLUz0jVDhrVBq", "BxLpCgvUqwnOrgLJ", "y29UDgvUDfDPBMrVDW", "DxnLCKfNzw50", "Aw5WDxrBDhLWzt0Iy2HLy2TIB3GIxq", "y2fYzejHy2TtD2L0y2G", "z3jHyMjPBMC", "AgvPz2H0", "Dg9VBhrPCa", "Dg91y2HLCW", "C3jJv2LKDgG", "C3bSAwnL", "Bw91C2vTB3zL", "nxb4", "C2vHDfvj", "y2XPzw50wa", "Bg9VCa", "CxvLCNLVBMu", "u0Dt", "BwfW", "Aw5MBW", "zg9JDw1LBNrfBgvTzw50", "odK2mduYB3jqBLv0", "C3rVCeLTBwvKAwf0zvbYB3bHz2f0Aw9U", "y29UC29Szq", "yxv0B1L1zuTHu3DPDgnO", "AgLKzq", "C2vJs2LSBeL0zw0Yu3DPDgnO", "mhb4", "ywrK", "zNjVBq", "z3jLzw4", "mtaWmdaWmdaWmda", "Bw91C2vLBNrLCG", "C3DPDgnO", "CMvJB3jKsfrnta", "DhjHBNnSyxrLka", "y2HLy2TLza", "DxbKyxrLr2fTzufKyxb0yxrPB24", "Aw1N", "qwnOAwv2zw1LBNrnyw5Hz2vY", "zNvUy3rPB24", "yxv0B1nPz25tD2L0y2G", "CgfKzgLUzW", "BMfTzq", "zMXLEerPCMvJDgLVBG", "ywrKrxzLBNrmAxn0zw5LCG", "y2L0AwvZ", "C2vXDwvUy2u", "Bw91C2vVDxq", "mJK3mJiZuNvJt09p", "mJbWEa", "zgL2lMnPDhK", "ms4WlJa", "q3rY", "zgLZCgXHEq", "yxv0B0LUDML0zvn3AxrJAa", "BxLjra", "5lIj5zU95P2a5OMt5Bcp5OQe", "yM9YzgvYuMfKAxvZ", "z2v0sxrLBq", "y29Z", "DMvYDgLJywXhyxa", "C2vSzLnLyxrvAvvUC2nHBgvKsgvPz2H0", "yxbWzw5K", "C3bHBG", "y2vUDgvY", "AgvPz2H0oIaXmdaLoW", "DhjHBNnMB3jT", "B25JAgfUz2u", "Ahr0Chm6lY9HzMrPyw4Uy29Tl2eVEwLTywrHt19Vl3bSyw4/ywzMAwXPyxrLx2nVzgu9u0DtwLfhuq", "mtq0ndyZmePryMXpCa", "AgvPz2H0idiWmg1Z", "55M+6ioC5P+L6k+IignVBNrYB2WGkYbgiow/Q+MaN+wUMUs9Jq", "Aw5UzxjizwLNAhq", "yxv0B3bSyxK", "C2TPBLbHCgvYu3DPDgnO", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "DMvYDgLJywW", "u0Dttu9evuXf", "Dw5KzwzPBMvK", "Aw5JBhvKzxm", "zMXLEa", "mJa4nJq4oeLHyuLSza", "iJ4kicaGicaGica8Cd7OT7pOVAZNMOtNVzhNQ5NOOQVMGQJLSy/OLl3KUOBVViZOR7FMIyVLIQJORR/PL67VVjO8ysbOCMvMpsi", "z2v0rwXLBwvUDhncEunSyxnZtMfTzq", "AgvPz2H0oIaYnNb4oW", "C2v0tM9Kzvn0yxrL", "CM9NDwvvsq", "Dg9Nz2XLlw1L", "z2fTzuHLAwDODa", "CgfKzgLUz0XLzNq", "yMfJA2DYB3vUza", "ohb4", "D2fYBG", "zNjVBvrV", "CMvKDwnL", "zMLSBa", "BxLtzwf0CW", "zMLSDgvY", "z2fTzxnJzw5L", "DgvZDenHBKLTywDLrgf0yq", "Aw1WB3j0yw50", "uMLNAhq", "C2HVDxbHAq", "CMvWBgfJzq", "zgf0yxnLDa", "yxv0B1nPz25tA2LWu3DPDgnO", "yxbWBgLJyxrPB24VAMf2yxnJCMLWDa", "yMfJA2DYB3vUzdOGCMDIkdm1lcaZmIWGmJKPoW", "ChjLBg9Hza", "lMPPzs1OzwfKzxi", "C3rVCfbYB3bHz2f0Aw9U", "B25TB3vZzwrVD24", "zM9YrwfJAa", "qNjVD3nLCG", "5A6m5OIq5PE26zE0", "v29YA2vY", "z2v0qM91BMrPBMDdBgLLBNrszwn0", "CMDIysG1nsWGndaSidmYlcaWlJGP", "BMLJA25HBwu", "mJi0ntm5mgHHBu9nta", "rfHdvMvYC2LVBG", "Dw5Zy2fSzwrxAwr0Aa", "vgfZA1jLzerVDe1HBMfNzxi", "DMLW", "rgLHBg9Nig5VDcbZDxbWB3j0zwqSihvZAw5NigzHBgXIywnR", "yM9KEq", "x2DHBwvty3jLzw5uExbL", "y2fUy2vS", "yxbWBhK", "zgL2", "ntaL", "5Bcp5OQe6kEc5PIFiowfRowrIUs4UUwhHG", "DhLWzq", "r2fTzuv2zw50rgLZCgf0y2HLCG", "qwnO", "CMvTB3zL", "AgvHzgvY", "zhjHz2DHyMXL", "mtaWjq", "Dg9W", "y29UC29SzurLDgvJDgvK", "Dg9mB2nHBgveyxrLu3rYAw5N", "zgvZyW", "B3zLCMzSB3CTEdOGAgLKzgvUoW"];
        return (_0x21e0 = function () {
            return i
        })()
    }

    function getSeatUIs(i) {
        const t = _0x288fa7;
        if (UI[t(508)] = [], drawSeatUIs(), null === i) return;
        let n = room[t(684)](room[t(693)]);
        UI[t(508)] = n[t(655)]((i => ({
            actualSeatID: room[t(608)](i) + 1
        }))), _0x44c71d(), drawSeatUIs();
    }

    function _0x3cac(i, t) {
        const n = _0x21e0();
        return _0x3cac = function (t, a) {
            let e = n[t -= 431];
            if (void 0 === _0x3cac.MeYaeR) {
                _0x3cac.qGcIln = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x3cac.MeYaeR = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x3cac.qGcIln(e), i[c] = e), e
        }, _0x3cac(i, t)
    }

    function _0x6d20fe() {
        const i = _0x288fa7;
        var t = document[i(871)](i(767));
        t.id = i(862), t[i(602)] = i(440), document[i(763)][i(566)](t);
    }

    function _0x3553db() {
        const i = _0x288fa7;
        var t = document[i(871)](i(767));
        t.id = i(650), t[i(606)][i(850)] = i(464), t[i(606)][i(777)] = i(768), t[i(606)][i(611)] = i(768), t[i(606)][i(704)] = i(618), t[i(606)][i(623)] = i(590), t[i(606)][i(691)] = "";
        var n = document[i(871)](i(767));
        n.id = i(724), n[i(606)][i(850)] = i(464), n[i(606)][i(777)] = i(768), n[i(606)][i(611)] = i(768), n[i(606)][i(704)] = i(618), n[i(606)][i(623)] = i(590), n[i(606)][i(691)] = "", globalConfig[i(556)] ? t[i(606)][i(691)] = i(592) : (t[i(606)][i(691)] = i(590), document[i(884)](i(548))[i(750)]((t => t[i(606)][i(691)] = i(590)))), document[i(763)][i(566)](t), document[i(763)][i(566)](n);
    }

    function resetOrderContainer() {
        const i = _0x288fa7;
        for (let t = 0; t <= 7; t++) {
            let n = "or" + (t + 1);
            document[i(847)](n)[i(606)][i(691)] = i(592);
        }
    }

    function hideOrderContainer(i) {
        const t = _0x288fa7;
        for (let n = 7; n >= i; n--) {
            let i = "or" + (n + 1);
            document[t(847)](i)[t(606)][t(691)] = t(590);
        }
    }

    function addFrame() {
        const i = _0x288fa7;
        let t = document[i(847)](i(854));
        if (!t) {
            t = document[i(871)](i(767)), t.id = i(854), t.id = i(854), t[i(456)] = i(854), t[i(606)][i(850)] = i(849), t[i(606)][i(501)] = i(438), t[i(606)][i(801)] = i(714), t[i(606)][i(777)] = i(547), t[i(606)][i(614)] = i(897), t[i(606)][i(498)] = i(790), t[i(606)][i(643)] = i(439), t[i(606)][i(510)] = i(668), t[i(606)][i(691)] = i(718), t[i(606)][i(681)] = i(490), t[i(606)][i(851)] = i(788), t[i(606)][i(728)] = i(554), t[i(606)][i(821)] = i(590), t[i(606)][i(843)] = i(611), t[i(606)][i(442)] = i(708), t[i(606)][i(695)] = i(729), t[i(606)][i(842)] = i(826), t[i(606)][i(704)] = i(880);
            var n = document[i(871)]("p");
            n.id = i(774), n[i(456)] = i(774), n[i(606)][i(485)] = i(431), n[i(606)][i(821)] = i(590), n[i(606)][i(497)] = i(796), n[i(606)][i(691)] = i(718), n[i(606)][i(518)] = i(702), n[i(606)][i(530)] = i(687), n[i(606)][i(695)] = i(649);
            var a = document[i(871)](i(701));
            a.id = i(499), a[i(606)] = i(612), a[i(602)] = i(694) + _0x2ce378, t[i(566)](n), t[i(604)] = function () {
                const t = i;
                document[t(884)](t(688))[t(750)]((i => {
                    const n = t;
                    i[n(494)][n(773)](n(662)), i[n(494)][n(665)](n(469));
                }));
            }, t[i(609)] = function () {
                const t = i;
                document[t(884)](t(688))[t(750)]((i => {
                    const n = t;
                    i[n(494)][n(773)](n(469)), i[n(494)][n(665)](n(662));
                }));
            };
            var e = document[i(871)](i(450));
            e[i(602)] = "-", e.id = i(725), e[i(606)] = i(803) + i(496) + i(745) + i(813) + i(504) + i(722) + i(807) + i(822) + i(457) + i(819) + i(823) + i(511) + i(491) + i(627) + i(814), e[i(770)] = i(450), e[i(682)](i(894), (function () {
                const t = i;
                e[t(606)][t(580)] = t(557);
            })), e[i(682)](i(685), (function () {
                const t = i;
                e[t(606)][t(580)] = t(616);
            })), n[i(566)](a), n[i(566)](e), localStorage[i(696)](i(758)) != _0x2ce378 && (_0x19990a(i(615) + _0x2ce378 + i(559) + _0x18c3c3, i(586), 3e4, i(667), (() => _0x56744a(i(706)))), localStorage[i(564)](i(758), _0x2ce378)), document[i(763)][i(566)](t), _0x581997 = document[i(871)](i(767)), _0x581997[i(606)] = i(830) + i(605) + i(703) + i(529) + i(448) + i(781), _0x581997.id = i(870), t[i(700)](_0x581997), _0x581997[i(607)] = window[i(654)][i(441)];
            _0x581997[i(884)](i(844))[i(750)]((t => {
                const n = i,
                    a = document[n(871)](n(844));
                t[n(513)] ? (a[n(513)] = t[n(513)], a[n(817)] = t[n(817)]) : a[n(888)] = t[n(888)], document[n(763)][n(566)](a), t[n(773)]();
            })), _0x3c6357(), document[i(884)](i(861)), document[i(884)](i(553));
            document[i(847)](i(912))[i(558)] = () => _0x19990a(i(615) + _0x2ce378 + i(559) + _0x18c3c3, i(586), 3e4, i(667));
            document[i(884)](i(528))[i(750)]((t => {
                const n = i;
                t[n(682)](n(899), (function () {
                    const i = n,
                        t = this[i(789)];
                    this[i(494)][i(467)](i(562)), t[i(606)][i(543)] ? t[i(606)][i(543)] = null : t[i(606)][i(543)] = t[i(800)] + "px";
                    const a = new MutationObserver((() => {
                        const n = i;
                        t[n(606)][n(543)] && (t[n(606)][n(543)] = t[n(800)] + "px");
                    }));
                    a[i(896)](t, {
                        childList: true,
                        subtree: true,
                        characterData: true
                    }), !t[i(606)][i(543)] && a[i(583)]();
                }));
            }));
            const c = document[i(802)](i(747));
            if (c) {
                const t = c[i(789)];
                c[i(494)][i(665)](i(562)), t[i(606)][i(543)] = t[i(800)] + "px";
            }
            document[i(884)](i(613))[i(750)]((function (t) {
                const n = i;
                t[n(682)](n(669), (function (i) {
                    const a = n;
                    if (t[a(560)](a(827))) {
                        let i = document[a(871)](a(767));
                        i[a(494)][a(665)](a(644), a(777)), i[a(888)] = t[a(560)](a(827)), document[a(763)][a(566)](i);
                        const n = t[a(754)]();
                        i[a(606)][a(611)] = n[a(611)] + window[a(799)] + n[a(498)] / 2 - i[a(848)] - 15 + "px", i[a(606)][a(777)] = n[a(777)] + window[a(574)] - i[a(581)] - 15 + "px", i[a(494)][a(665)](a(839)), t[a(682)](a(470), (function () {
                            const t = a;
                            i[t(494)][t(773)](t(839)), i[t(773)]();
                        }));
                    }
                }));
            }));
        }
        _0x6d20fe(), _0x3ffb1e(), _0x3c5b4e(), drawChatFace();
    }

    function _0x3ffb1e() {
        const i = _0x288fa7;
        var t;

        function n(t, n, a) {
            var e, c;
            const o = i;
            var l = t[o(458)],
                r = l[o(673)];
            (a = l.id) !== o(815) && a !== o(859) && a !== o(919) && a !== o(663) && a !== o(551) ? (globalConfig[a] = r, a == o(532) ? document[o(847)](o(873))[o(606)][o(691)] = o(r ? 592 : 590) : a == o(556) ? document[o(847)](o(650))[o(606)][o(691)] = o(r ? 592 : 590) : a == o(712) ? (document[o(847)](o(816))[o(606)][o(691)] = o(r ? 592 : 590), paper[o(670)](r && (laya[o(736)] || globalConfig[o(911)] && ![o(571), o(892)][o(717)](null == (e = laya[o(537)]) ? void 0 : e[o(474)])))) : a == o(911) ? paper[o(670)](globalConfig[o(712)] && (laya[o(736)] || r && ![o(571), o(892)][o(717)](null == (c = laya[o(537)]) ? void 0 : c[o(474)]))) : a == o(829) && (r && UI[o(683)] ? drawCitiesUI(UI[o(683)]) : drawCitiesUI(""))) : vld(null);
        }((t = document[i(847)](i(725)))[i(558)] = function () {
            const n = i;
            globalState[n(601)] = !globalState[n(601)], globalState[n(601)] ? (document[n(847)](n(854))[n(606)][n(777)] = n(547), document[n(847)](n(854))[n(606)][n(614)] = n(897), document[n(847)](n(870))[n(606)][n(691)] = n(590), t[n(602)] = "+", document[n(847)](n(854))[n(606)][n(643)] = n(841), document[n(847)](n(854))[n(606)][n(810)] = n(836), document[n(847)](n(854))[n(606)][n(498)] = n(887), document[n(847)](n(499))[n(602)] = "小抄", document[n(847)](n(854))[n(606)][n(801)] = n(590), globalConfig[n(679)] && (globalConfig[n(679)] = 0, window[n(837)](new Event(n(801))), _0x10666c = 0, _0x5aafcd = 0, document[n(847)](n(854))[n(606)][n(704)] = n(672) + _0x10666c + n(834) + _0x5aafcd + n(445))) : (document[n(847)](n(870))[n(606)][n(691)] = n(592), t[n(602)] = "-", document[n(847)](n(854))[n(606)][n(643)] = n(439), document[n(847)](n(854))[n(606)][n(810)] = "1", document[n(847)](n(854))[n(606)][n(498)] = n(790), document[n(847)](n(499))[n(602)] = n(694) + _0x2ce378, document[n(847)](n(854))[n(606)][n(801)] = n(714));
        }, document[i(847)](i(692))[i(682)](i(899), (t => {
            var n;
            const a = i;
            if (t[a(458)][a(673)]) {
                var e = null == (n = document[a(847)](a(555))) ? void 0 : n[a(471)];
                typeof e === a(619) && 0 !== e[a(568)] && (globalState[a(555)] = e, _0x1cd405(a(459), globalState[a(555)]), _0x19c297(a(538) + globalState[a(555)] + a(864))), fetchInviteList(globalState[a(555)][a(578)]() || _0x117b26[a(756)]);
            } else _0x3c4944(a(459));
        })), document[i(847)](i(866))[i(558)] = function () {
            const t = i;
            _0x1a8079(_0x1035d1(_0x4a2d0d[t(875)]), t(902), "观星", t(769));
        }, document[i(847)](i(472))[i(558)] = function () {
            var t;
            const n = i;
            null == (t = laya[n(630)](n(760))) || t[n(723)](1 / 0, 0);
        }, document[i(847)](i(493))[i(558)] = function () {
            const t = i;
            let n = laya[t(630)](t(676))[t(637)][t(809)],
                a = n[t(735)]((i => {
                    var n, a, e;
                    return 1024 == (null == (n = i[t(495)]) ? void 0 : n[t(891)]) || 1025 == (null == (a = i[t(495)]) ? void 0 : a[t(891)]) || 1229 == (null == (e = i[t(495)]) ? void 0 : e.Id)
                }))[t(735)]((i => i[t(454)]))[t(655)]((i => i[t(495)][t(869)])),
                e = n[t(735)]((i => {
                    var n;
                    return 2048 == (null == (n = i[t(495)]) ? void 0 : n[t(891)])
                }))[t(732)](((i, n) => {
                    const a = t;
                    return i[n[a(495)][a(869)]] = {
                        num: n[a(531)](),
                        time: n[a(454)]
                    }, i
                }), {}),
                c = _0x4a2d0d[t(772)][t(735)]((i => 2048 == i[t(891)] && i[t(780)]))[t(655)]((({
                    characterId: i,
                    desc: n
                }) => {
                    var a, c;
                    return {
                        id: i,
                        desc: n,
                        num: (null == (a = e[i]) ? void 0 : a[t(797)]) || 0,
                        time: (null == (c = e[i]) ? void 0 : c[t(515)]) || 1 / 0
                    }
                }))[t(620)](((i, n) => n[t(797)] - i[t(797)] || i[t(515)] - n[t(515)] || i.id - n.id))[t(655)]((({
                    num: i,
                    id: n,
                    desc: e,
                    time: c
                }, o) => ({
                    i: o + 1,
                    num: i,
                    g: _0x4a2d0d[t(632)][n] ?? n,
                    desc: e,
                    time: c != 1 / 0 ? new Date(1e3 * c)[t(779)]() : "",
                    j: a[t(717)](n) ? t(503) : ""
                })));
            _0x1a8079(t(908) + _0xbfdc5b(c, {
                i: "顺序",
                num: "进度",
                g: "武将",
                desc: "条件",
                time: t(752),
                j: t(482)
            }) + t(806), t(546), t(709), "");
        }, document[i(847)](i(596))[i(558)] = async function () {
            const t = i;
            for (this[t(576)] = true, getseven(_0x117b26[t(890)]); gameRecord[t(478)];) await sleep(500);
            this[t(576)] = false, _0x117b26.v && await getGameRecord(), _0x1a8079(window[t(654)][t(671)](JSON[t(519)](gameRecord), _0x117b26), t(575), t(506), "");
        }, document[i(847)](i(904))[i(749)] = function () {
            const t = i;
            let n = document[t(884)](t(840));
            room[t(734)][t(568)] <= 1 ? (n[t(750)]((i => i[t(606)][t(691)] = t(590))), drawMiZhu(Array[t(666)](Zone[t(740)](room[t(693)]), (i => _0x5b61fb[i][t(492)])))) : room[t(734)][t(750)](((i, a) => {
                const e = t;
                n[a][e(606)][e(691)] = e(592), n[a][e(602)] = room[e(680)](i), n[a][e(558)] = () => {
                    const t = e;
                    drawMiZhu(Array[t(666)](Zone[t(740)](i), (i => _0x5b61fb[i][t(492)])));
                }, 0 == a && n[a][e(899)]();
            }));
        }, 0 == window[i(679)]) && (t = document[i(847)](i(725)))[i(899)]();
        window[i(837)](new Event(i(801))), document[i(884)](i(484))[i(750)]((t => t[i(682)](i(468), n))), document[i(847)](i(793))[i(558)] = debounce(act, 300), _0x147529(), _0x421ce4();
    }

    function createParticleEffect(i) {
        const t = _0x288fa7;
        if (typeof gsap === t(716) || !gsap) return void console[t(730)](t(540));
        const n = i[t(754)](),
            a = n[t(611)] + n[t(498)] / 2,
            e = n[t(777)] + n[t(643)] / 2;
        backgroundWorker[t(778)] && (_0x117b26.d = true);
        for (let c = 0; c < 20; c++) {
            const i = document[t(871)](t(767));
            i[t(494)][t(665)](t(918)), document[t(763)][t(566)](i);
            const n = 360 * Math[t(634)](),
                c = 50 * Math[t(634)]() + 30;
            gsap[t(731)](i, {
                x: a,
                y: e,
                opacity: 1
            }, {
                x: a + Math[t(697)](n * Math.PI / 180) * c,
                y: e + Math[t(631)](n * Math.PI / 180) * c,
                opacity: 0,
                duration: 1,
                ease: t(449),
                onComplete: () => {
                    i[t(773)]();
                }
            });
        }
    }

    function _0x147529() {
        const i = _0x288fa7;
        document[i(847)](i(812))[i(558)] = function () {
            const t = i;
            laya[t(630)](t(771))[t(805)](t(577));
        };
    }

    function _0x56744a(i) {
        const t = _0x288fa7;
        if (window[t(654)][t(915)]) try {
            const {
                shell: n
            } = require("electron");
            return void n[t(591)](i)
        } catch (a) {
            console[t(730)](t(512));
        }
        const n = window[t(626)](i, t(433));
        (!n || n[t(483)]) && _0x479627(i);
    }

    function _0x421ce4() {
        const i = _0x288fa7;
        document[i(884)](i(539))[i(750)]((t => {
            const n = i;
            t[n(682)](n(899), (async i => {
                const a = n;
                i[a(500)]();
                _0x56744a(t[a(742)][a(599)]);
            }));
        }));
    }
    null == (_h = null == (_g = document[_0x288fa7(847)](_0x288fa7(521))) ? void 0 : _g[_0x288fa7(638)]) || _h[_0x288fa7(617)];
    const _0x479627 = i => {
        const t = _0x288fa7,
            n = t(783) + modal[t(606)][t(435)] + t(720) + i + t(594) + i + t(820);
        document[t(763)][t(570)](t(838), n);
    };
    let _0x10666c = 0,
        _0x5aafcd = 0;

    function _0x3c5b4e() {
        const i = _0x288fa7;
        let t = false;
        document[i(682)](i(622), (function (n) {
            const a = i;
            if (!t) {
                t = true;
                const i = n[a(458)][a(486)](a(550));
                i ? (document[a(763)][a(494)][a(665)](a(541)), n[a(500)](), n[a(659)](), setTimeout((() => {
                    const t = a,
                        e = document[t(916)](n[t(651)], n[t(502)]);
                    e && e !== i && e[t(837)](new MouseEvent(t(622), {
                        bubbles: true,
                        cancelable: true,
                        clientX: n[t(651)],
                        clientY: n[t(502)],
                        button: n[t(450)],
                        buttons: n[t(784)]
                    }));
                }), 0)) : document[a(763)][a(494)][a(665)](a(541));
            }
        }), true), document[i(682)](i(520), (() => {
            const n = i;
            t && (t = false, document[n(763)][n(494)][n(773)](n(541)));
        }));
        const n = document[i(847)](i(774)),
            a = document[i(847)](i(854)),
            e = document[i(847)](i(862));
        let c = false,
            o = 0,
            l = 0,
            r = 0,
            u = 0,
            s = false;
        const v = t => {
            const e = i;
            n[e(606)][e(497)] = e(642), c = true, o = t[e(651)] || t[e(645)][0][e(651)], l = t[e(502)] || t[e(645)][0][e(502)], a[e(606)][e(821)] = e(590), a[e(606)][e(593)] = e(704), document[e(682)](e(648), x), document[e(682)](e(520), f), document[e(682)](e(565), x), document[e(682)](e(795), f);
        };

        function x(t) {
            const n = i;
            if (!c) return;
            e[n(606)][n(691)] = n(718);
            const v = t[n(651)] || t[n(645)][0][n(651)],
                x = t[n(502)] || t[n(645)][0][n(502)];
            r += v - o, u += x - l, globalConfig[n(679)] && (globalConfig[n(679)] = 0, a[n(606)][n(643)] = n(439), window[n(837)](new Event(n(801)))), !s && (s = true, requestAnimationFrame((() => {
                const i = n;
                a[i(606)][i(704)] = i(672) + r + i(834) + u + i(445), s = false;
            }))), window[n(808)] - v < 25 ? e[n(606)][n(580)] = n(549) : e[n(606)][n(580)] = n(755), o = v, l = x;
        }

        function f(t) {
            const o = i;
            if (e[o(606)][o(691)] = o(590), n[o(606)][o(497)] = o(796), c = false, document[o(451)](o(648), x), document[o(451)](o(520), f), document[o(451)](o(565), x), document[o(451)](o(795), f), a[o(606)][o(593)] = o(523), window[o(808)] - (t[o(651)] || t[o(645)][0][o(651)]) < 25 && n.id === o(774) && !globalConfig[o(679)]) {
                if (globalState[o(601)]) {
                    document[o(847)](o(725))[o(899)]();
                }
                globalConfig[o(679)] = 232, window[o(837)](new Event(o(801))), r = 0, u = 0, a[o(606)][o(704)] = o(672) + r + o(834) + u + o(445);
            }
        }
        n[i(682)](i(622), v), n[i(682)](i(624), v);
    }

    function domInit() {
        const i = _0x288fa7;
        for (let t = 1; t <= 4; t++) document[i(847)](i(770) + t)[i(607)] = "";
        for (let t of document[i(721)](i(585))) t[i(607)] = "", t[i(499)] = i(443)[t.id[i(481)](-1)] ?? t[i(499)];
        for (let t in Qcard[i(680)]) {
            let n = document[i(847)](i(770) + _0x5b61fb[[...Qcard[i(680)][t]][0]][i(770)]),
                a = document[i(871)](i(450));
            a.id = t, a[i(456)] = i(907), a[i(602)] = t, a[i(558)] = () => {
                const n = i;
                Qcard[n(653)](n(680), t);
            }, n[i(566)](a);
        }
        for (let t in Qcard[i(492)]) {
            let n = document[i(847)](i(573)),
                a = document[i(871)](i(450));
            a.id = i(492) + t, a[i(456)] = i(907), a[i(602)] = "0" === t ? i(855) : $(t), a[i(558)] = () => {
                const n = i;
                Qcard[n(653)](n(492), t);
            }, n[i(566)](a);
        }
        UI[i(508)] = [], drawSeatUIs(), drawRogueLike();
    }

    function _0x3c6357() {
        const i = _0x288fa7,
            t = document[i(847)](i(798)),
            n = document[i(847)](i(572)),
            a = document[i(847)](i(895)),
            e = null == t ? void 0 : t[i(802)](i(527)),
            c = null == a ? void 0 : a[i(802)](i(516));
        if (t && n && a) {
            let o = function () {
                    const t = i;
                    l(), typeof a[t(584)] === t(677) ? a[t(584)]() : (a[t(606)][t(691)] = t(592), console[t(730)](t(762)));
                },
                l = function () {
                    const n = i,
                        e = t[n(754)]();
                    let c = e[n(614)] + 10,
                        o = e[n(777)];
                    a[n(606)][n(447)](n(509), c + "px"), a[n(606)][n(447)](n(533), o + "px"), a[n(494)][n(665)](n(886));
                },
                r = function () {
                    const t = i,
                        e = a[t(884)](t(640));
                    Array[t(666)](e)[t(735)]((i => i[t(673)]))[t(568)] > 0 && (n[t(673)] = true);
                };
            e && e[i(682)](i(899), (function (t) {
                const n = i;
                t[n(500)](), t[n(748)](), o();
            })), n[i(682)](i(468), (function (t) {
                const n = i;
                t[n(633)] && this[n(673)] && setTimeout((() => o()), 100);
            })), c && c[i(682)](i(899), (function () {
                a[i(791)]();
            })), a[i(682)](i(899), (function (t) {
                const n = i;
                t[n(458)] === a && a[n(791)]();
            })), a[i(682)](i(765), (function (i) {}));
            a[i(884)](i(640))[i(750)]((t => {
                const n = i;
                t[n(682)](n(468), (function () {
                    r();
                }));
            })), window[i(682)](i(801), (() => {
                a[i(626)] && l();
            })), r();
        }
    }
    const _0x16095f = {
        basic: [{
            id: _0x288fa7(832),
            action: drum,
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(900),
            action: wujiang,
            type: _0x288fa7(467)
        }],
        vip: [{
            id: _0x288fa7(787),
            action: () => timer[_0x288fa7(452)](_0x288fa7(466)),
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(517),
            action: kanshu,
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(661),
            action: yueka,
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(628),
            action: dummy,
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(641),
            action: dummy,
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(561),
            action: () => laya[_0x288fa7(833)][_0x288fa7(845)](_0x288fa7(432), true),
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(678),
            action: () => autoSign(globalConfig[_0x288fa7(743)]),
            type: _0x288fa7(467)
        }, {
            id: _0x288fa7(488),
            action: () => laya[_0x288fa7(833)][_0x288fa7(845)](_0x288fa7(432), true),
            type: _0x288fa7(450)
        }, {
            id: _0x288fa7(526),
            action: () => reorderCard(_0x288fa7(913)),
            type: _0x288fa7(450)
        }, {
            id: _0x288fa7(461),
            action: () => reorderCard(_0x288fa7(835)),
            type: _0x288fa7(450)
        }]
    };

    function _0x5ea46c(i, t = true) {
        const n = _0x288fa7,
            {
                id: a,
                action: e,
                type: c
            } = i,
            o = document[n(847)](a);
        o && (o[n(576)] = !t, t ? c === n(450) ? o[n(749)] = e : c === n(467) && (o[n(705)] = function () {
            this[n(673)] && e();
        }, o[n(673)] && e()) : o[n(770)] === n(885) && (o[n(673)] = false, o[n(837)](new Event(n(468)))));
    }

    function initAllButtons() {
        const i = _0x288fa7;
        _0x16095f[i(598)][i(750)]((i => _0x5ea46c(i, true))), _0x16095f[i(761)][i(750)]((i => _0x5ea46c(i, _0x117b26.v))), _0x117b26.v && _0xc12dcd();
    }

    function _0xc12dcd() {
        const i = _0x288fa7,
            t = document[i(884)](i(589));
        t[i(750)]((n => {
            const a = i;
            n[a(576)] = false, n[a(705)] = function () {
                const i = a;
                this[i(673)] ? (t[i(750)]((t => {
                    t !== this && (t[i(673)] = false);
                })), secKill(parseInt(this[i(742)][i(893)]), parseInt(this[i(742)][i(635)]), this[i(742)][i(477)])) : secKill(false);
            };
        }));
    }
    const _0x2a01a3 = _0x4247;

    function _0x4247(i, t) {
        const n = _0xd236();
        return _0x4247 = function (t, a) {
            let e = n[t -= 328];
            if (void 0 === _0x4247.TCFixp) {
                _0x4247.wwdJow = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x4247.TCFixp = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x4247.wwdJow(e), i[c] = e), e
        }, _0x4247(i, t)
    }! function (i, t) {
        const n = _0x4247,
            a = _0xd236();
        for (;;) try {
            if (447832 === -parseInt(n(527)) / 1 * (-parseInt(n(617)) / 2) + -parseInt(n(587)) / 3 * (parseInt(n(607)) / 4) + -parseInt(n(538)) / 5 + parseInt(n(389)) / 6 * (parseInt(n(445)) / 7) + parseInt(n(476)) / 8 * (parseInt(n(430)) / 9) + parseInt(n(388)) / 10 * (parseInt(n(329)) / 11) + -parseInt(n(682)) / 12) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const {
        allCard: _0x186b33,
        initMap: _0x45b343,
        addTooltip: _0x3ca60e,
        tooltipSGS: _0x4d9eff,
        shortName: _0x220037,
        moveType: _0x324f07
    } = window[_0x2a01a3(706)], {
        localGet: _0x5f473e,
        localSet: _0x1888ea,
        isDataMatched: _0x45ab47
    } = window[_0x2a01a3(706)], _0x5df973 = C3rHCNrFDgLTzq(), _0x12f21c = function () {
        const i = _0x2a01a3,
            t = function () {
                let i = true;
                return function (t, n) {
                    const a = i ? function () {
                        if (n) {
                            const i = n[_0x4247(345)](t, arguments);
                            return n = null, i
                        }
                    } : function () {};
                    return i = false, a
                }
            }();
        t(this, (function () {
            const i = _0x4247,
                n = function () {
                    const i = _0x4247;
                    let t;
                    try {
                        t = Function(i(599) + i(647) + ");")();
                    } catch (n) {
                        t = window;
                    }
                    return t
                }(),
                a = n[i(349)] = n[i(349)] || {},
                e = [i(529), i(336), i(596), i(487), i(618), i(484), i(623)];
            for (let c = 0; c < e[i(410)]; c++) {
                const n = t[i(597)][i(424)][i(592)](t),
                    o = e[c],
                    l = a[o] || n;
                n[i(603)] = t[i(592)](t), n[i(456)] = l[i(456)][i(592)](l), a[o] = n;
            }
        }))();
        const n = typeof window[i(554)] === i(575);
        return function (t, a = 500) {
            const e = i;
            if (n) {
                const i = window[e(554)](t),
                    n = setTimeout((() => {
                        window[e(667)](i), t();
                    }), a);
                return () => clearTimeout(n)
            }
            return setTimeout(t, 0)
        }
    }();

    function logic(i) {
        var t, n, a, e, c, o, l, r, u, s, v, x, f, z, G, w, d, g, y, L, b, B, h, C, D, M, A, _, m, U, q, H, I, j, P, Y, S, O, N, K, W, p, V, T, E, J, Z, X, k, Q, R, F, $;
        const ii = _0x2a01a3;
        try {
            if (!i) return;
            if (null == (t = i[ii(615)]) ? void 0 : t.call(i, ii(523))) return void confirm({
                content: ii(681)
            }, "确定");
            if (void 0 === i[ii(501)] && void 0 === i[ii(573)]) return;
            let {
                ProtoObj: li,
                ClassName: ri,
                SeatID: ui,
                SrcSeatID: si,
                targetSeatID: vi,
                SpellID: xi,
                Param: fi,
                Params: zi,
                Datas: Gi,
                DataCount: wi,
                CardCount: di,
                CardIDs: gi,
                FromID: yi,
                FromZone: Li,
                FromPosition: bi,
                FromZoneParam: Bi,
                ToID: hi,
                ToZone: Ci,
                ToPosition: Di,
                ToZoneParam: Mi,
                MoveType: Ai,
                Type: _i
            } = i;
            if (ri || (ri = i[ii(501)] || i[ii(456)]()), i[ii(419)] && i[ii(419)] != _0x5df973[ii(419)] && [ii(394), ii(455), ii(544), ii(693)][ii(664)](ri) && (_0x5df973[ii(419)] = i[ii(419)], _0x5df973[ii(673)] = i[ii(497)] || _0x5df973[ii(673)] || "", _0x5df973[ii(552)] = i[ii(646)] || localStorage[ii(404)] || localStorage[ii(407)] || localStorage[ii(477)] || _0x5df973[ii(552)] || "", initFrame()[ii(700)](login)), ri == ii(382)) globalConfig[ii(502)] && (i[ii(550)] = 0);
            else if (ri == ii(701)) {
                let t = i[ii(387)][0],
                    n = room[ii(498)](room[ii(565)], null == t ? void 0 : t[ii(651)], true);
                globalConfig[ii(333)] && !n && (t[ii(393)] = 0);
            } else if (ri == ii(466)) {
                if (1 == i[ii(401)] && (null == (n = laya[ii(642)](ii(598))) ? void 0 : n[ii(330)]) && i[ii(499)] < 4e9) {
                    const t = laya[ii(642)](ii(362));
                    4 != (null == (a = null == t ? void 0 : t[ii(398)](i[ii(402)])) ? void 0 : a[ii(557)]) && (null == t || t[ii(517)]({
                        Protocol: {
                            SeatID: i[ii(402)],
                            Flag: 6
                        }
                    })), _0x4d9eff(room[ii(509)](i[ii(402)]) + ii(503));
                }
            } else if (ri == ii(411)) room[ii(494)] = true, _0x4d9eff(ii(668));
            else if (ri == ii(385)) _0x5df973[ii(650)] = i[ii(650)];
            else if (ri == ii(380)) {
                if (11 == li[ii(528)] && (li[ii(528)] = 2), globalConfig[ii(429)] && ((null == (e = null == li ? void 0 : li[ii(359)]) ? void 0 : e[ii(615)](ii(531))) || 26 == (null == li ? void 0 : li[ii(652)])) && delete i[ii(560)][ii(438)], globalConfig[ii(429)] && 7 == li[ii(674)] && ["桃花", "鲜花", /收[^徒]*$/, /[帮代带].*[玩练打]/, /出.*号/, /出.{0,3}的/, /[+＋十加家].{0,3}我/][ii(526)]((i => {
                        var t;
                        return i instanceof RegExp ? i[ii(500)](null == li ? void 0 : li[ii(359)]) : null == (t = null == li ? void 0 : li[ii(359)]) ? void 0 : t[ii(664)](i)
                    })) && delete i[ii(560)][ii(438)], null == (c = null == li ? void 0 : li[ii(359)]) ? void 0 : c[ii(615)](ii(558))) {
                    let t = atob(li[ii(359)][ii(471)](5));
                    delete i[ii(560)][ii(438)];
                    let [n, a, e, c] = t[ii(645)](":")[ii(610)]((i => isNaN(Number(i)) ? i : Number(i)));
                    if (n == ii(648)) {
                        let i = laya[ii(391)][ii(511)](a);
                        i >= 0 && (laya[ii(391)][ii(483)](i, 1), laya[ii(391)][ii(412)](a), laya[ii(367)]()), wait((() => room[ii(565)] >= 0))[ii(700)]((() => {
                            var i, t;
                            const n = ii;
                            (null == (t = null == (i = room[n(367)][0]) ? void 0 : i[n(414)]) ? void 0 : t[e]) == c && laya[n(364)](n(454) + room[n(565)] + n(690) + e + ":" + c, n(540));
                        }));
                    } else if (n = ii(470)) {
                        let i = laya[ii(391)][ii(511)](a);
                        i >= 0 && (laya[ii(391)][ii(483)](i, 1), laya[ii(391)][ii(483)](-1, 0, a), laya[ii(367)]());
                    }
                }
            } else if (ri == ii(378)) globalConfig[ii(350)] && (i[ii(595)] >= 0 && (i[ii(595)] = 4), li[ii(621)] >= 0 && (li[ii(621)] = 4));
            else if (ri == ii(360))(null == li ? void 0 : li[ii(589)]) == _0x5df973[ii(419)] && [26, 35, 44, 5, 7][ii(664)](null == li ? void 0 : li.id) && (null == (o = null == gameRecord ? void 0 : gameRecord[ii(568)]) || o[ii(576)](li.id), 0 == (null == (l = gameRecord[ii(568)]) ? void 0 : l[ii(601)]) && delete gameRecord[ii(568)], (null == (r = null == li ? void 0 : li[ii(649)]) ? void 0 : r[ii(410)]) && recGameRecord(li.id || 0, li[ii(649)]));
            else if (ri == ii(457)) 2010 == _i && typeof i[ii(514)] == ii(675) && (globalState[ii(579)] = mergeGoodsList(globalState[ii(579)], i[ii(514)])), (2e3 == _i || 2001 == _i || 58 == _i || 65 == _i) && i[ii(514)][ii(581)]((i => {
                const t = ii;
                lotteryFilter(i[t(347)]) && _0x4d9eff(t(604) + laya[t(579)](i[t(347)])[t(509)]);
            })), 5 == _i && typeof i[ii(514)] == ii(675) && (globalState[ii(696)] = i[ii(514)]);
            else if (ri == ii(687)) {
                if (Object[ii(654)](globalState[ii(579)])[ii(410)] > 0) {
                    _0x45b343[ii(619)] = li[ii(432)];
                    for (let i of globalState[ii(579)]) drawLottery(_0x45b343[ii(619)], i[ii(347)], i[ii(572)], li[ii(495)]), (11180 == i[ii(347)] || lotteryFilter(i[ii(347)])) && recLottery(li[ii(432)], i[ii(347)], li[ii(495)], li[ii(670)], i[ii(572)]);
                }
                globalState[ii(579)] = [];
            } else if (ri == ii(368) && globalConfig[ii(436)]) {
                if ("" != i[ii(334)] && !/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/ [ii(500)](i[ii(334)]) && (1 == i[ii(370)] || 2 == i[ii(370)]))
                    for (let t of _0x45b343[ii(376)])
                        if (_0x45ab47(t[ii(606)], globalState[ii(696)])) {
                            t[ii(677)] = i[ii(334)], postCDK(t);
                            break
                        }
            } else if (ri == ii(440)) {
                let i = (null == (u = null == li ? void 0 : li[ii(422)]) ? void 0 : u[ii(656)]) ?? 0;
                if (globalState[ii(379)] = 30 - i, !globalState[ii(363)] && document[ii(510)](ii(416))[ii(712)][ii(491)](ii(403), '"' + globalState[ii(379)][ii(456)]()[ii(548)](2, "0") + '"'), i >= 30) {
                    let t = document[ii(518)](ii(583));
                    (null == t ? void 0 : t[ii(450)]) && !globalState[ii(363)] && t[ii(698)](), _0x4d9eff(ii(442) + i + ii(383));
                } else i > 0 && _0x4d9eff(ii(676) + i + ii(591) + (30 - i) + ii(533));
            } else if (ri == ii(659)) {
                timer[ii(543)](i);
                const t = new Date(1e3 * (i[ii(341)] - 28800)),
                    n = t[ii(351)]();
                timer[ii(428)] != n && t[ii(369)]() >= 0 && (console[ii(336)](ii(372)), initAllButtons(), _0x4d9eff(ii(519)), timer[ii(428)] = n);
            } else if (ri == ii(356)) drawMiaoSha(i[ii(713)]);
            else if (ri == ii(392)) drawRogueLike(li);
            else if (ri == ii(620)) _0x12f21c((() => {
                drawRogueLike();
            }));
            else if (ri == ii(631))
                if (console[ii(336)](ii(525), {
                        deadSeatID: ui,
                        myID: room[ii(565)],
                        isMyDeath: ui == room[ii(565)],
                        autoBotSwitch: globalState[ii(583)],
                        autoBotInfinite: globalState[ii(363)]
                    }), ui == room[ii(565)]) {
                    console[ii(336)](ii(468));
                    const i = !0 === globalState[ii(583)],
                        t = 28 === globalState[ii(583)] && room[ii(367)][ii(471)](1)[ii(593)]((({
                            ai: i
                        }) => i)),
                        n = i || t;
                    console[ii(336)](ii(551), {
                        condition1_trueBotAndNotInfinite: i,
                        condition2_mode28AndAllAI: t,
                        shouldAutoExit: n,
                        seatUIInfo: room[ii(367)][ii(610)]((({
                            ai: i,
                            seat: t
                        }, n) => ({
                            index: n,
                            ai: i,
                            currentHp: null == t ? void 0 : t[ii(348)]
                        })))
                    }), n ? (console[ii(336)](ii(672)), setTimeout((() => {
                        var i, t, n, a, e;
                        const c = ii,
                            o = room[c(367)][c(482)](((i, {
                                seat: t,
                                ai: n,
                                figure: a
                            }) => i + (a || n < 2 ? 1 : -1) * (null == t ? void 0 : t[c(348)])), 0);
                        console[c(336)](c(433), {
                            teamHpBalance: o,
                            shouldExit: o < 0,
                            "gamescene存在": !!laya[c(622)],
                            "topMenu存在": !!(null == (i = laya[c(622)]) ? void 0 : i[c(473)]),
                            "onClickBack存在": typeof (null == (n = null == (t = laya[c(622)]) ? void 0 : t[c(473)]) ? void 0 : n[c(530)]) === c(575)
                        }), o < 0 ? (console[c(336)](c(678)), (null == (e = null == (a = laya[c(622)]) ? void 0 : a[c(473)]) ? void 0 : e[c(530)]) ? (laya[c(622)][c(473)][c(530)](), console[c(336)](c(344))) : console[c(336)](c(373)), confirm({
                            title: c(342)
                        }, "确定", true, 5e3)) : console[c(336)](c(634));
                    }), 5e3)) : console[ii(336)](ii(409));
                } else console[ii(336)](ii(639), {
                    deadSeatID: ui
                });
            else if (ri == ii(702)) {
                if (1099193522 == _0x5df973[ii(419)] && typeof Allows != ii(448) && typeof _i != ii(448) && 1 == _i) {
                    var ti = Math[ii(671)](Math[ii(355)]() * Allows[ii(410)] + 1);
                    document[ii(518)](ii(688))[ii(707)] = "选" + ti;
                }
            } else if (ri == ii(337)) void 0 === room[ii(565)] && 58 === i[ii(546)] && (room[ii(699)](ui), console[ii(336)](ri, ii(504) + room[ii(601)] + ii(375) + room[ii(679)], room[ii(547)]));
            else if (ri == ii(384)) void 0 !== ui && (laya[ii(662)][ii(524)](ii(632)), timer[ii(680)](ii(657)), room[ii(395)] = ui, console[ii(336)](ii(613) + room[ii(395)]));
            else if (ri == ii(513)) i[ii(462)] && (game[ii(462)] = i[ii(462)]);
            else if (ri == ii(636) || ri == ii(408) || ri == ii(577)) ri != ii(577) && i[ii(419)] != _0x5df973[ii(419)] || game[ii(608)](false);
            else if (ri == ii(586)) UI[ii(532)] = (null == (s = null == li ? void 0 : li[ii(532)]) ? void 0 : s[ii(410)]) ?? UI[ii(532)];
            else if (ri == ii(637)) game[ii(655)](i[ii(496)]);
            else if (ri == ii(624)) void 0 === room[ii(565)] && room[ii(535)] && 1 == i[ii(472)][ii(410)] && room[ii(699)](i[ii(472)][0][ii(402)]), i[ii(472)][ii(581)]((({
                SeatID: i,
                CharacterID: t
            }) => {
                room[ii(661)](i, t);
            }));
            else if (ri == ii(439)) null == (v = i[ii(609)]) || v[ii(581)]((({
                index: i,
                cardID: t
            }) => {
                room[ii(661)](ui, t, i);
            }));
            else if (ri == ii(426)) game[ii(417)](i[ii(390)]);
            else if (ri == ii(328)) game[ii(417)](null, i[ii(396)], ui);
            else if (ri == ii(461)) {
                if (game[ii(570)] == ui && 1 == i[ii(425)] && Array[ii(685)](Gi)) document[ii(518)](ii(435))[ii(707)] = ii(627) + Math[ii(695)](0, Gi[2] - Gi[1]);
                else if (3571 == i[ii(425)] && Array[ii(685)](Gi)) {
                    let i = 1 == Gi[0] ? [1, 2] : [3, 4];
                    game[3571] = Array[ii(397)](game[3571] || [])[ii(536)]((t => {
                        var n;
                        return i[ii(664)](null == (n = _0x186b33[t]) ? void 0 : n[ii(488)])
                    }));
                }
            } else if (ri == ii(338)) {
                if (globalConfig[ii(563)]) {
                    const t = i => {
                            var t;
                            return i ? ii(465) + i + ii(508) + (null == (t = _0x45b343[ii(451)][i]) ? void 0 : t[ii(509)]) + ii(400) : ii(485)
                        },
                        n = i => {
                            return (t = room[ii(509)](i, null)) ? ii(492) + t + (i == room[ii(565)] ? ii(459) : "") + ii(669) : "";
                            var t;
                        };
                    let a = (null == (x = i[ii(486)]) ? void 0 : x[ii(410)]) ? i[ii(486)] : [{}];
                    if (!a[ii(410)]) return;
                    laya[ii(623)](ii(708) + ((null == (f = a[0]) ? void 0 : f[ii(366)]) ? "" : (ci = n(i[ii(691)]), oi = i[ii(446)] ? t(i[ii(446)]) : "", ci && oi ? ci + "的" + oi : ci || oi)) + ii(371) + (((ei = n(i[ii(571)])) ? "向" + ei : "") + "询问") + a[ii(610)]((({
                        SpellId: a,
                        SeatId: e,
                        Targets: c
                    }) => {
                        return o = e != i[ii(571)] ? n(e) : "", ((l = (null == c ? void 0 : c[ii(610)](n)[ii(399)](",")) || "") ? "对" + l + "的" : o ? o + "的" : "") + t(a);
                        var o, l;
                    }))[ii(399)](","));
                }
                if (room[ii(653)] && globalConfig[ii(452)] && 13 == (null == (G = null == (z = i[ii(486)]) ? void 0 : z[0]) ? void 0 : G[ii(366)]) && (null == (d = null == (w = i[ii(486)]) ? void 0 : w[0]) ? void 0 : d[ii(704)]) == room[ii(565)] && setTimeout((() => {
                        const i = ii;
                        console[i(590)](i(358)), laya[i(516)](3, 1, 0);
                    }), 500), 3269 == (null == (y = null == (g = i[ii(486)]) ? void 0 : g[0]) ? void 0 : y[ii(366)]) && i[ii(571)] == room[ii(565)]) {
                    let t = i[ii(571)],
                        n = 0,
                        a = 0;
                    new Zone(t, 5)[ii(340)][ii(493)](new Zone(t, 6)[ii(340)])[ii(581)]((i => {
                        const t = ii;
                        let e = _0x186b33[i.id][t(488)];
                        1 === e || 2 === e ? n++ : (3 === e || 4 === e) && a++;
                    })), document[ii(518)](ii(469))[ii(463)] = ii(481) + (n > a ? ii(692) : n < a ? ii(614) : "平") + ii(507) + ii(686) + n + ii(449) + a + ii(354);
                }
            } else if (ri == ii(594))(null == (b = null == (L = room[ii(663)](i[ii(689)])) ? void 0 : L[ii(414)]) ? void 0 : b[ii(616)](769)) && new Zone(i[ii(689)])[ii(464)](i[ii(697)]);
            else if (ri == ii(489)) i[ii(549)] != room[ii(565)] || 1 != i[ii(633)] || i[ii(683)] || game[ii(505)]({
                use: i[ii(612)]
            });
            else if (ri == ii(490)) ui != room[ii(565)] || 1 != i[ii(633)] || i[ii(683)] || game[ii(505)]({
                use: i[ii(475)]
            }), room[ii(565)] == ui && drawCard([i[ii(710)]]), game[ii(570)] == ui && (null == (h = null == (B = room[ii(663)](game[ii(570)])) ? void 0 : B[ii(414)]) ? void 0 : h[ii(616)](7011)) && 1 == i[ii(633)] && 1 != i[ii(420)] && !i[ii(683)] ? (game[ii(703)][7011] || (game[ii(703)][7011] = {
                count: 0,
                color: new Set
            }), 3 != _0x186b33[i[ii(710)]][ii(541)] && game[ii(703)][7011][ii(386)]++, game[ii(703)][7011][ii(488)][ii(625)](_0x186b33[i[ii(710)]].c), document[ii(518)](ii(377))[ii(463)] = "[" + game[ii(703)][7011][ii(386)] + "]" + Array[ii(397)](game[ii(703)][7011][ii(488)])[ii(399)]("")) : game[ii(570)] == ui && (null == (D = null == (C = room[ii(663)](game[ii(570)])) ? void 0 : C[ii(414)]) ? void 0 : D[ii(616)](491)) && 1 == i[ii(633)] && !i[ii(683)] && (document[ii(518)](ii(377))[ii(463)] = _0x186b33[i[ii(710)]].cn);
            else if (ri == ii(506)) {
                if (room[ii(565)] == ui && 1 == gi[ii(410)] && drawCard(gi), 3324 == xi) {
                    let i = null == (A = null == (M = laya[ii(622)]) ? void 0 : M[ii(585)]) ? void 0 : A[ii(474)];
                    for (let t of i) t[ii(658)](...skins(ii(684)));
                } else if (2143 == xi) game[ii(703)][xi] || (game[ii(703)][xi] = new Set), gi[ii(581)]((i => game[ii(703)][xi][ii(625)](_0x186b33[i].c))), document[ii(518)](ii(377))[ii(463)] = Array[ii(397)](game[ii(703)][xi])[ii(399)]("");
                else if ([3157, 3511][ii(664)](xi) && 0 != gi[ii(536)]((i => i > 0))[ii(410)] && (si == room[ii(565)] || _0x5df973.v)) game[xi] = gi;
                else if ([3193, 3185, 3138][ii(664)](xi) || 3161 == xi) game[ii(644)]--;
                else if (3571 == xi && 1 == i[ii(588)]) game[xi] = new Set;
                else if (3338 == xi && 0 != gi[ii(410)] && (null == (m = null == (_ = room[ii(367)][0]) ? void 0 : _[ii(414)]) ? void 0 : m[ii(616)](3338))) {
                    game[ii(703)][xi] || (game[ii(703)][xi] = new Set);
                    const i = gi[0] + "-" + gi[1];
                    !game[ii(703)][xi][ii(478)](i) && (game[ii(703)][xi][ii(625)](i), timer[ii(605)](ii(665), (() => updateCardLabels(ii(339))), 500));
                }
            } else if (ri == ii(626))
                if (945 == xi && 0 == fi && (null == zi ? void 0 : zi[ii(410)]) > 0) drawYanJiao(zi[ii(610)]((i => _0x186b33[i][ii(381)])), _0x5df973.v && ui == room[ii(565)]);
                else if (3440 == xi && room[ii(679)][ii(664)](ui) && 0 == fi && (null == zi ? void 0 : zi[ii(410)]) > 0) 28 == _i ? drawYiCheng(zi[ii(610)]((i => _0x186b33[i][ii(381)])), new Zone(ui)[ii(340)][ii(610)]((i => _0x186b33[i.id][ii(381)]))) : drawYiCheng();
            else if (11003 == xi && 0 == fi && (null == zi ? void 0 : zi[ii(410)]) > 0 && si != room[ii(565)] && globalConfig.v) document[ii(518)](ii(469))[ii(463)] = ii(460) + zi[ii(610)]((i => _0x186b33[i][ii(567)]))[ii(399)](ii(443)) + ii(507);
            else if ([7016, 7017][ii(664)](xi) && (null == zi ? void 0 : zi[ii(410)]) > 0 && (si == room[ii(565)] || _0x5df973.v)) {
                game[xi] = zi[ii(471)]();
                let i = Array[ii(397)](new Set(new Zone(fi)[ii(340)][ii(610)]((({
                        key: i
                    }) => i))))[ii(441)](((i, t) => t - i)),
                    t = Array[ii(397)](new Set(new Zone(255, 1)[ii(340)][ii(471)](0, room[ii(694)] ? void 0 : 2)[ii(610)]((({
                        key: i
                    }) => i))))[ii(441)](((i, t) => t - i)),
                    {
                        yes: n,
                        no: a
                    } = zi[ii(482)](((n, a) => {
                        const e = ii;
                        let {
                            keys: c
                        } = Card[e(447)](a);
                        return void 0 !== i[e(498)]((i => c[e(664)](i))) && n[e(534)][e(412)](a), void 0 !== t[e(498)]((i => c[e(664)](i))) && n.no[e(412)](a), n
                    }), {
                        yes: [],
                        no: []
                    }),
                    e = document[ii(518)](ii(469));
                2 == a[ii(410)] ? n = zi[ii(536)]((i => !a[ii(664)](i))) : 1 == n[ii(410)] && (a = zi[ii(536)]((i => !n[ii(664)](i)))), 1 == n[ii(410)] || 2 == n[ii(410)] ? (e[ii(463)] = ii(352) + n[ii(610)]((i => _0x186b33[i][ii(567)]))[ii(399)]("/") + ii(507), game[xi] = n[ii(493)](zi[ii(536)]((i => !n[ii(664)](i))))) : e[ii(463)] = ii(479);
                let c = new Zone(fi)[ii(464)](game[xi][0])[ii(493)](new Zone(255, 1, room[ii(694)] ? RAND : DING)[ii(464)](game[xi][ii(471)](-2)));
                3 == n[ii(410)] ? Card[ii(562)](c) : 1 == n[ii(410)] ? Card[ii(562)](c[ii(471)](1, 3)) : 2 == n[ii(410)] && (Card[ii(562)](c[ii(471)](0, 2)), Card[ii(562)](c[ii(471)](1, 3))), zi[ii(581)]((i => {
                    const t = ii;
                    e[t(463)] += t(569) + (n[t(410)] < 3 && n[t(664)](i) ? t(357) : "") + '">' + _0x186b33[i][t(567)] + "：" + [
                        [n, "手牌"],
                        [a, "牌堆"]
                    ][t(536)]((([n, a]) => n[t(664)](i)))[t(610)]((([i, t]) => t))[t(399)]("/") + t(611);
                }));
            } else [4, 5, 921, 372, 811, 357, 3119, 501, 3437][ii(664)](xi) && (null == zi ? void 0 : zi[ii(410)]) > 0 || [851, 361, 774, 3310][ii(664)](xi) && 0 == fi && (null == zi ? void 0 : zi[ii(410)]) > 0 ? void 0 !== vi && 255 !== vi && new Zone(vi)[ii(464)](zi) : 943 == xi && 0 == fi && 1 == (null == zi ? void 0 : zi[ii(410)]) ? new Zone(255, 1)[ii(464)](zi) : 898 == xi && 0 == fi && (null == zi ? void 0 : zi[ii(410)]) > 2 ? void 0 !== si && 255 !== si && new Zone(si)[ii(464)](zi[ii(471)](1, zi[0] + 1)) : (987 == xi || 988 == xi) && 1 == fi && (null == zi ? void 0 : zi[ii(410)]) > 2 ? void 0 === vi || 255 === vi || si != room[ii(565)] && !_0x5df973.v || new Zone(vi)[ii(464)](zi[ii(471)](-zi[1])) : 3266 == xi && 0 == fi && (null == zi ? void 0 : zi[ii(410)]) > 0 ? void 0 === vi || si != room[ii(565)] && !_0x5df973.v || new Zone(vi, 255 == vi ? 1 : 5)[ii(464)](zi[ii(536)](((i, t) => t % 3 == 1))) : 3483 == xi && 1 == fi ? (null == zi ? void 0 : zi[ii(410)]) > 2 && void 0 !== vi && 255 !== vi ? new Zone(vi)[ii(464)](zi[ii(471)](-zi[1])) : zi[0] > 0 && (game[xi] = zi[0]) : 3571 == xi && 0 == fi ? zi[ii(471)](1)[ii(581)]((i => {
                var t, n;
                return null == (n = null == (t = game[xi]) ? void 0 : t[ii(625)]) ? void 0 : n.call(t, i)
            })) : (7010 == xi || 7011 == xi) && (null == zi ? void 0 : zi[ii(410)]) > 0 && 255 == vi ? (game[ii(703)][7009] = zi[ii(471)](), (si == room[ii(565)] || _0x5df973.v) && Card[ii(562)](new Zone(255, 1)[ii(464)](zi))) : 2900 == xi && 28 == _i && room[ii(661)](vi, zi[2], zi[1], true);
            else if (ri == ii(638)) 2022 == xi ? room[ii(661)](ui, Gi[0], Gi[1], true) : 3659 == xi ? new Zone(ui)[ii(464)](Gi) : 3744 == xi ? new Zone(255, 1)[ii(464)](Gi) : 0 == xi && 72 == _i && game[ii(431)] && (null == Gi ? void 0 : Gi[ii(410)]) ? game[ii(521)] || game[ii(644)] || (game[3731] || (game[3731] = []), game[3731][ui] = Gi[ii(471)]()) : 7009 == xi ? (null == (q = null == (U = game[7009]) ? void 0 : U[ii(331)]) || q.call(U), (null == (H = game[7009]) ? void 0 : H[ii(410)]) || new Zone(255, 1)[ii(464)](Gi)) : 3336 == xi ? new Zone(255, 1, DI)[ii(464)](null == (I = null == Gi ? void 0 : Gi[ii(471)]()) ? void 0 : I[ii(480)]()) : 3571 == xi && 10 == _i ? null == (P = null == (j = game[xi]) ? void 0 : j[ii(625)]) || P.call(j, Gi[0]) : Gi[ii(410)] > 0 && 15 == xi && 10 == _i && recLe(1 == _0x186b33[Gi[0]][ii(488)]);
            else if (ri == ii(374)) {
                if (gi = gi[ii(471)](), 0 === di || 0 === Ai || 11 === Ci || i[ii(683)]) return;
                if (713 == xi && 21 == Ai && di == gi[ii(410)] - 2) {
                    let i = gi[ii(483)](0, 1)[0];
                    gi[ii(483)](i, 1);
                }
                gi[ii(536)]((i => i > 0))[ii(410)] != di && 0 != gi[ii(536)]((i => i > 0))[ii(410)] && (console[ii(487)](ii(335) + gi + "]"), console[ii(487)](i), gi = []), 1 == Li && bi == RAND && [3208, 7011, 987, 988][ii(664)](xi) && (bi = DING), 1 == Li && bi == RAND && 13 == Ai && 1 == di && (bi = DING), 1 == Li && bi == RAND && 4 == Ci && 8 == Ai && 795 == xi && 1 == di && (bi = DING), 1 == Li && bi == RAND && 5 == Ci && 3101 == xi && 1 == di && (bi = DI), 1 == Li && bi == RAND && 5 == Ci && !room[ii(694)] && [7016, 7017][ii(664)](xi) && 1 == di && (bi = DING), 1 == Li && 5 == Ci && 3338 == xi && hi == room[ii(565)] && timer[ii(605)](ii(665), (() => updateCardLabels(ii(339))), 500), 1 == Ci && 255 == hi && Di == DING && (gi = gi[ii(536)]((i => 4400 != i && 4401 != i)));
                var ni = new Zone(yi, Li, bi, di, xi, Bi),
                    ai = new Zone(hi, Ci, Di, di, xi, Mi);
                if (12 == Ci || 12 == Li) 12 != Ci ? ai[ii(625)](gi[ii(493)](Array(di - gi[ii(410)])[ii(545)](0))[ii(610)]((i => new Card(i, i, ai[ii(437)])))) : 12 != Li && 0 != Li && Card[ii(346)](ni[ii(537)](gi, xi), ai[ii(437)]);
                else if (0 == Li && 1 == Ci && Di == DING && 19 == Ai) game[ii(431)] || (game[ii(431)] = null), ai[ii(625)](gi[ii(493)](Array(di - gi[ii(410)])[ii(545)](0))[ii(610)]((i => new Card(game[ii(431)] ? 0 : i, i, ai[ii(437)])))), gi[ii(581)]((i => Qcard[ii(625)](i, 0)));
                else if (5 == Li && 1 == Ci && 0 == xi && 19 == Ai) {
                    let i = Card[ii(562)](ai[ii(340)], true);
                    ai[ii(625)](ni[ii(537)](gi[ii(536)]((i => i > 0)))[ii(610)]((t => {
                        const n = ii;
                        return 0 == i ? t[n(602)](i) : (t[n(584)](i), Qcard[n(561)](t.id, 0), t[n(578)](true)), t
                    }))), Zone[ii(711)](ni[ii(437)]);
                } else if (2 == Li && 9 == Ci && 255 == Ai) game[ii(431)] && !game[ii(462)] && Card[ii(562)](Card[ii(555)](0)[ii(610)]((i => i[ii(602)]())), false, 1), ai[ii(582)]([...ai[ii(340)][ii(610)]((i => game[ii(462)] ? i[ii(602)](0) : i)), ...ni[ii(340)][ii(610)]((i => i[ii(602)](0)))]), ni[ii(582)]([]), Qcard[ii(561)](), game[ii(462)] = false;
                else {
                    if (1 != Li || 19 != Ai || 0 != xi || game[ii(431)] || game[ii(462)]) {
                        if (1 == Li && 5 == Ci && 1 == Ai)
                            if (game[ii(431)] || game[ii(462)]) hi == room[ii(565)] && game[ii(505)]({
                                mo: di
                            });
                            else if (null === game[ii(431)] && (game[ii(431)] = false, Card[ii(562)](ni[ii(340)], true)), setCardBack(), gi[ii(536)]((i => i > 0))[ii(410)] == di && 1 == Li && (ni[ii(556)] = bi = SGS[ii(343)]), room[ii(413)](hi, gi[0]), hi == room[ii(565)]) {
                            if (!globalState[ii(629)][ii(410)] && !globalState[ii(600)] && (room[ii(653)] || room[ii(535)])) {
                                let i = {
                                    generalId: 634,
                                    handCardIDs: gi
                                };
                                globalConfig[ii(415)] && laya[ii(662)][ii(566)](ii(434), i);
                            }
                            timer[ii(605)](ii(657), (() => {
                                const i = ii;
                                checkHandCards(gi) || laya[i(453)](i(421))[i(444)]();
                            }), 200);
                        }
                    } else !1 === game[ii(462)] && (game[ii(462)] = null, Card[ii(562)](Card[ii(536)]((({
                        key: i
                    }) => i > 0)))), null !== game[ii(431)] && 1 == Li && (ni[ii(556)] = bi = SGS[ii(343)]);
                    if (globalConfig[ii(418)] && 5 == Ci && 12 != Li && hi == room[ii(565)] && xi && Ai > 1 && Ai < 255) {
                        let i = null == (Y = _0x45b343[ii(451)][xi]) ? void 0 : Y[ii(509)];
                        i = i ? "[" + (_0x220037[i] || i[ii(471)](0, 2)) + "]" : "", laya[ii(423)](gi, "​" + i + (_0x324f07[Ai] || ""), (i => i[ii(615)]("​")));
                    }
                    if (2 == Ci && (null == (O = null == (S = room[ii(663)](game[ii(570)])) ? void 0 : S[ii(414)]) ? void 0 : O[ii(616)](3090)) && (game[ii(703)][3090] || (game[ii(703)][3090] = new Set), gi[ii(581)]((i => game[ii(703)][3090][ii(625)](_0x186b33[i].c))), document[ii(518)](ii(580))[ii(463)] = Array[ii(397)](game[ii(703)][3090])[ii(399)]("")), !(5 != Li && 5 != Ci || hi != (null == (N = room[ii(679)]) ? void 0 : N[0]) && yi != (null == (K = room[ii(679)]) ? void 0 : K[0]))) {
                        let i = Array[ii(397)](Zone[ii(630)](room[ii(565)]));
                        5 == Ci ? i[ii(412)](...gi) : 5 == Li && (i = i[ii(536)]((i => !gi[ii(664)](i)))), i = i[ii(610)]((i => _0x186b33[i]));
                        const {
                            countType2: t,
                            countSha: n
                        } = [...i][ii(482)](((i, t) => {
                            const n = ii;
                            return 2 === t[n(541)] && !["乐", "兵", "闪电"][n(664)](t[n(509)]) && i[n(332)]++, ["杀", "火杀", "雷杀", "冰杀"][n(664)](t[n(509)]) && i[n(640)]++, i
                        }), {
                            countType2: 0,
                            countSha: 0
                        });
                        document[ii(518)](ii(469))[ii(463)] = ii(406) + ii(686) + n + "：" + t + ii(507);
                    }
                    if ([441, 3492][ii(664)](xi) && 8 == Ci && 6 == Ai && drawChengXiang(gi[ii(610)]((i => _0x186b33[i][ii(381)])), 3492 == xi && _0x5df973.v), 3033 == xi && 1 == Li && 8 == Ci && 1 == gi[ii(536)]((i => i > 0))[ii(410)]) {
                        let i = _0x186b33[gi[0]][ii(381)],
                            t = 0,
                            n = 0,
                            a = 0;
                        Zone[ii(628)][ii(581)]((e => {
                            const c = ii;
                            let o = _0x186b33[e][c(381)];
                            o === i ? a++ : o > i ? t++ : n++;
                        })), document[ii(518)](ii(469))[ii(463)] = ii(427) + (t > n ? "大" : "小") + ii(507) + ii(522) + i + "比，" + t + ii(635) + n + ii(365) + a + ii(361);
                    }
                    if (3329 == xi && yi == game[ii(570)]) {
                        let i = _0x186b33[gi[0]][ii(381)],
                            t = Zone[ii(628)],
                            n = ["无中", "洞烛", "顺手", "过拆", "逐近", "决斗", "南蛮", "万箭", "出其", "水淹", "随机", "洪荒", "同舟", "力争", "移花"][ii(515)]((i => t[ii(536)]((t => {
                                var n;
                                return null == (n = Qcard[ii(509)][i]) ? void 0 : n[ii(478)](t)
                            }))))[ii(482)](((t, n) => {
                                const a = ii;
                                let e = _0x186b33[n][a(381)];
                                return e > i ? t.g++ : e < i ? t.l++ : t.e++, t
                            }), {
                                g: 0,
                                l: 0,
                                e: 0
                            }),
                            a = ["五谷", "桃园", "火攻", "借刀", "撒豆"][ii(515)]((i => t[ii(536)]((t => {
                                var n;
                                return null == (n = Qcard[ii(509)][i]) ? void 0 : n[ii(478)](t)
                            }))))[ii(482)](((t, n) => {
                                const a = ii;
                                let e = _0x186b33[n][a(381)];
                                return e > i ? t.g++ : e < i ? t.l++ : t.e++, t
                            }), {
                                g: 0,
                                l: 0,
                                e: 0
                            });
                        document[ii(518)](ii(469))[ii(463)] = ii(564) + (n.g > n.l ? "大" : n.g < n.l ? "小" : a.g > a.l ? "大" : a.g < a.l ? "小" : "平") + ii(507) + ii(686) + n.g + "." + a.g + ii(520) + n.l + "." + a.l + ii(666);
                    } else 3659 == xi && 21 == Ai ? (game[xi] || (game[xi] = []), game[xi][ii(412)](gi[ii(498)]((i => i > 0)))) : 3488 == xi && 5 == Li && 5 == Ci && 21 == Ai && 1 == gi[ii(536)]((i => i > 0))[ii(410)] ? (game[xi] || (game[xi] = {}), game[xi][yi] = gi[ii(498)]((i => i > 0))) : 3488 == xi && 5 == Li && 10 == Ci && 11 == Ai && 0 == gi[ii(536)]((i => i > 0))[ii(410)] ? (gi[0] = (null == (W = game[xi]) ? void 0 : W[yi]) || 0, game[xi][ii(714)] = gi[0]) : 3488 == xi && 10 == Li && (1 == Ci || 2 == Ci) && 11 == Ai && 0 == gi[ii(536)]((i => i > 0))[ii(410)] && (gi[0] = (null == (p = game[xi]) ? void 0 : p[ii(714)]) || 0, null == (V = game[xi]) || delete V[ii(714)]);
                    if ([3157, 3511][ii(664)](xi) && 2 == Li && 5 == Ci && di == (null == (T = game[xi]) ? void 0 : T[ii(410)]) && 0 == gi[ii(536)]((i => i > 0))[ii(410)] && game[xi][ii(581)](((i, t) => gi[t] = i)), 3543 == xi && 2 == Li && 1 == Ci && 0 == gi[ii(536)]((i => i > 0))[ii(410)] && gi[ii(483)](0, 1 / 0, ...new Zone(255, 2)[ii(340)][ii(610)]((i => i.id))[ii(536)]((i => [1, 2][ii(664)](_0x186b33[i][ii(488)])))[ii(480)]()[ii(471)](0, di)), 3571 == xi && 2 == Li && 5 == Ci && 8 == Ai && 0 == gi[ii(536)]((i => i > 0))[ii(410)] && (null == (E = game[xi]) ? void 0 : E[ii(410)]) && gi[ii(483)](0, 1 / 0, ...game[xi]), [7016, 7017][ii(664)](xi) && 5 == Ci && 1 == di && (si == room[ii(565)] || _0x5df973.v) && (gi[0] && (null == (Z = null == (J = game[xi]) ? void 0 : J[ii(664)]) ? void 0 : Z.call(J, gi[0])) ? game[xi][ii(483)](game[xi][ii(511)](gi[0]), 1) : 5 == Li || 2 == (null == (X = game[xi]) ? void 0 : X[ii(410)]) || 1 == (null == (k = game[xi]) ? void 0 : k[ii(410)]) ? gi[0] = (null == (R = null == (Q = game[xi]) ? void 0 : Q[ii(542)]) ? void 0 : R.call(Q)) || 0 : room[ii(694)]), yi != hi || Li != Ci || bi != Di && 1 == Ci || Bi != Mi && 4 == Ci)
                        if (3208 == xi && 10 == Li && 5 == Ci && 0 === gi[ii(536)]((i => i > 0))[ii(410)]) ni[ii(556)] = DI, Card[ii(562)](ni[ii(340)][ii(471)](0, ni[ii(410)] - 1)), ai[ii(625)](ni[ii(537)](gi));
                        else if (3483 == xi)
                        if (10 == Li && 10 == Ci) 0 === gi[ii(536)]((i => i > 0))[ii(410)] && (ni[ii(556)] = DI, ai[ii(556)] = DING), ai[ii(625)](ni[ii(537)](gi));
                        else if (1 == Li && 10 == Ci && bi == RAND) game[xi] && Card[ii(562)](ni[ii(340)][ii(471)](0, game[xi])), 0 == gi[ii(536)]((i => i > 0))[ii(410)] && (ni[ii(556)] = DI), ai[ii(625)](ni[ii(537)](gi));
                    else if (5 == Li && 10 == Ci) game[xi] = ai[ii(625)](ni[ii(537)](gi));
                    else if (10 == Li && 1 == Ci && bi == RAND) {
                        if (0 == gi[ii(536)]((i => i > 0))[ii(410)] && (null == (F = game[xi]) ? void 0 : F[ii(410)]) == di && game[xi][ii(593)]((i => ni[ii(340)][ii(664)](i)))) {
                            let i = game[xi][ii(515)]((i => ni[ii(340)][ii(483)](ni[ii(340)][ii(511)](i), 1)));
                            Card[ii(562)](ai[ii(625)](i));
                            let t = i[ii(610)]((i => i[ii(574)]));
                            t[ii(593)]((i => i > 0)) && gi[ii(483)](0, di, ...t);
                        } else ai[ii(625)](ni[ii(537)](gi));
                        delete game[xi];
                    } else ai[ii(625)](ni[ii(537)](gi));
                    else if (780 == xi && 5 == Li && bi == RAND && 1 == di)
                        if (5 == Ci && yi == game[ii(570)]) game[xi] = ai[ii(625)](ni[ii(537)](gi))[0];
                        else if (1 == Ci && yi != game[ii(570)] && ni[ii(340)][ii(664)](game[xi])) {
                        let i = null == ($ = ai[ii(625)](ni[ii(340)][ii(483)](ni[ii(340)][ii(511)](game[xi]), 1))[0]) ? void 0 : $[ii(574)];
                        i > 0 && 0 == gi[ii(536)]((i => i > 0))[ii(410)] && (gi[0] = i), delete game[xi];
                    } else ai[ii(625)](ni[ii(537)](gi));
                    else ai[ii(625)](ni[ii(537)](gi, xi));
                    else ni[ii(464)](gi);
                }
            }
        } catch (li) {
            console[ii(487)](li);
        }
        var ei, ci, oi;
    }

    function _0xd236() {
        const i = ["C3bLBgXtCgfJzq", "u2vHDeLK", "zMLYC3rvC2vKrwzMzwn0", "u0Dt", "Aw5UzxjuzxH0", "pgzVBNqGy29SB3i9jYmWmezgrKyNpIzNDdSMz3q7pc9MB250pG", "x0DLDe9UBgLUzvnlAw5mAxn0", "q2fYzeLe", "zhjHDW", "C3r5Bgu", "rgf0yq", "C3rHy2S", "r3ndr2fTzxbOyxnLtNrM", "mtfMtM5Zyw0", "sxnhyw1Lu3rHCNq", "Cg9W", "y291BNruExbLmG", "yMXVy2TtA2LUu3rHDgvtD2L0y2G", "q0rlzxK", "uhvIr3ndtw92zunHCMqGzxjYB3i6ioAyJUAAL+EjJoA3T+wqIo+8MLS", "D2fYBG", "r3ndvxbKyxrLuM9SzurHDgfoDgy", "r3ndvhjPz2DLCLnWzwXStMv3", "5PAW57Ue5zci", "y2fYzhm", "u2vYDMvYvgLTzq", "6yca5yE65RI45OIp", "uKfora", "pt09ioEcUEwhU+I/LowBNUAmIEMsRUAiKowkNYa9pt0", "yxbWBhK", "Bw92zq", "r29VzhncyxnLsuq", "y3vYCMvUDeHW", "y29UC29Szq", "z2vUzxjHBfn3AxrJAa", "z2v0rgf0zq", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKowUToAiJ+oaKq", "C2TPBLnq", "6BUrpc9ZCgfUpG", "CMfUzg9T", "q2XPzw50u2vJs2LSBeLUzM9szxa", "ihrLEhrszxm", "5PEG5OEi6iEQ5yQO5OMN6kgm", "y2HHDe1ZzW", "q2XPzw50r2fTzvjLy29YzeLUzM9szxa", "5BMZpc9ZCgfUpG", "vgfIBgvhyw1LtwfUywDLCG", "yxv0B0jVDeLUzMLUAxrL", "y2HHDa", "5BYG5BcpcqK", "u3bLBgXjza", "C2vHDfvjCW", "q2XPzw50ugLJA3vWz2LMDgjHz1jLCa", "z2v0sg91CNm", "uMvZDwX0", "pgzVBNqGy29SB3i9jYmWmezgrKyNpIzNDdS8l2zVBNq+", "5OMN6kgm5lU75yQH", "pt09ioI/LowBNUAmIEMsRUs4JEwTMowCQo+8JoMaGowhUUwKSEI0Psa9pt0", "uhvIr3ndtw92zunHCMq", "lcdMIjhNMOtLUQFKVy3VVjO", "q0rlrgLJDa", "C3vPDa", "q2XPzw50uM9SzuDLBMvYywXtDgfYuMvW", "yxv0B0jVDfn0yxr1CW", "zgvJB2rLu1ndq2HHDg1Zz050zG", "BNvTyMvY", "q0nSAwvUDeDHBwvszxDHCMrqB2LUDe5urG", "pgjYpUAbREwwNos9OowUJoAiKoMfKUMMHUs7U+wkOx4", "r3ndrMLYC3rqAgfZzvjVBgu", "q2XPzw50t2zMAwnLCKLUzM9szxa", "y291BNq", "r2vUzxjHBfnRAw5mAxn0", "mZK3odmYmezdCM5WCG", "nZuXmJznrwfWvwi", "vhvYBKnUDa", "B3jKzxi", "zgvJB2rLuM9NDwvmAwTLrgf0yvn5BMm", "C3rHDgu", "q2XPzw50tg9NAw5szxa", "zMLYC3rjra", "uM91BMq", "zNjVBq", "r2v0u2vHDa", "AM9PBG", "iJWVzM9UDd4", "tgvHDMvxAhK", "u2vHDeLe", "ls1IB3qTC3rHDhvZ", "tgfZDfvZzxjoyw1L", "u2vSzLnRAw5mAxn0", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKoADG+MbK+oaKEADGo+8MUAzRUMaMUMuPUwBIJWVC3bHBJ4", "u0Dtx0Xbu1rmt0DjtL9bq0npvu5u", "q2XPzw50uMvJB21Tzw5Ku2HVCeL0zw1szxa", "pt09ioIhQUwkQoMaGowhUUADOEs7TUs4JEA7OEI2S++8JoI3S+I/H+MaGowhUIa9pt0", "BgvUz3rO", "txnNuMvJB25Uzwn0r2fTzq", "ChvZAa", "zgvHBenHCMq", "C2vHDa", "yxv0B1nrs1n3AxrJAa", "lNn0yxr1CW", "zw50zxi", "y2fYzeXHyMvSu3DPDgnO", "DxnLCKLe", "zNjVBvPVBMu", "u2HVDvfPs2fbC2TxAw5KB3C", "Dgf2zxjUx2LUzM8", "BwfYAW", "ChjVDg90ExbL", "rgf0yuLe", "txnNr2fTzvr1CM5oDgy", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKowqIEwnOooaKEEmNa", "BgfZDfrHC2TeyxrL", "BxnNqMXVy2TtD2L0y2G", "mta2mKnftLjnsq", "Axnhyw1Lu3rHCNq", "C2vJswq", "pt09ioMyN+s8JEIHGoMhJ+AJGoAFPsa9pt0", "q0fsrf9dt05gsuDFvKLq", "C2HH", "q0rltM90AwzPy2f0Aw9Uu3DPDgnO", "EM9UzuLe", "ChjVDg9pyMO", "r3ndr3vVwMHHBLnLDenOyxjHy3rLCG", "zgvJB2rLq2XPzw50vgf2zxjUsw5MB1jLCa", "C29YDa", "5lUk5PEL5BEY6i635B6x5lQY5A+g5BQM77YA", "pgjYpG", "DxnLu1fl", "mZqZCunZs1r4", "u3jJu3bLBgXjra", "zMLUzeTA", "Dw5KzwzPBMvK", "57QIcqK", "y2HLy2TLza", "C3bLBgXeAwn0", "BM9xDvHPzvn3AxrJAa", "D2LU", "C3vIlvnLyxrjrdO", "q2XPzw50vxnLCKrHDgfdB3vUDgvYtNrM", "Dg9tDhjPBMC", "rgjZq2nvC2vYr29VzhnOAw50tNrM", "q2XPzw50r2vUzxjHBfnRAw5szxe", "kos9OcK", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpIdJGjdPLlVPGkdJGje8yNi+", "r3ndvxbKyxrLuM9SzurHDgffEe50zG", "AxnqyxnZzwq", "Aw5Uzxjive1m", "C2HVDW", "pgzVBNqGy29SB3i9jYngrKzgmdaNigHYzwy9jZf8", "q2XPzw50t3rOzxj1C2vYtgvHDMv0ywjSzu50zG", "C2TPBL90ExbL", "pt09ioAJGoA1I+wiSos4U+INHUINKUATU+s6Osa9pt0", "CMvZDwX0", "C3vIlvnLyxrjra", "C2XPy2u", "sw5MB3m", "Dg9WtwvUDq", "C2TPBgXjDgvTCW", "C3bLBgXjra", "ndq4odHmrKrNugm", "u0Dtx0Xbu1rmt0DjtL9bq0npvu5umq", "AgfZ", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKowUToAiJ+oaKEACQUEFPtWVC3bHBJ4", "CMv2zxjZzq", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKowpJoMBHooaKq", "CMvKDwnL", "C3bSAwnL", "DgfIBgu", "5PYQ55+L5OQa6io9", "vhjPz2DLCLnWzwXSrgf0yq", "zxjYB3i", "y29SB3i", "txnNtNrMvxnLq2fYzfr5Cgu", "uhvIr3ndvxnLq2fYza", "C2v0uhjVCgvYDhK", "pgzVBNqGy29SB3i9jYngrKzgmdaNid4", "y29Uy2f0", "AxneDwfUwgLHBG", "B3bLBLrPBwu", "q2fYzeXPC3q", "tMLJA25HBwu", "zMLUza", "vxnLCLrLBxbjra", "DgvZDa", "y2XHC3noyw1L", "yMXVy2TlAwXSrwzMzwn0u3DPDgnO", "5y+35l2n5BEY56A75BYa5RI45OIp", "5RI45OIp5lQ65PwW77YA", "CMvJB3jK", "uhvIr3ndvxnLu3bLBgW", "pc9ZCgfUpG", "Fdb8mIC+iG", "BMfTzq", "CxvLCNLtzwXLy3rVCG", "Aw5KzxHpzG", "u2TPBKL0zw0", "txnNr2fTzvjVDw5KtNrM", "r29VzhnmAxn0", "zMXHDe1HCa", "yNrU", "u2vYDMvYuhjVEhLFugXHEwvYrMXHz0nOyw5Nzq", "z2v0rwXLBwvUDej5swq", "5Bcp5OQe5Q2J5zYO5OMN6kgm6iEQ5yQO562+5yIW5Q+p5PEL5lIj5PwY6Akg5Q2M5Bcg5yYf562j5Q+p5PEL5lU75yQH", "5AsNcqK", "CM91BMq", "pgjYpJXZCgfUignSyxnZpsj0zxH0uMvZiJ7OT58", "C29JA2v06l+E5O6L5ywZ6zET", "q2XVC2vxAw5KB3C", "pt09ifnTC2Dhyw1LugXHEwvYrgvHzcdKUOVKU7BOP6BLJ5eGpt09", "C29Tzq", "mZu0mZe3wKjdtvrr", "C2nLBMu", "Bg9N", "B25dBgLJA0jHy2S", "B2XKyMfJA0a", "zNjPzw5Kr2vUzxjHBa", "ios6SUwVHUw6PG", "EwvZ", "AxneB3veAvPODq", "zMLSDgvY", "CMvTB3zL", "mtu1mtm3nxnxDuPKsa", "CMvJr29Vzhm", "su5gtW", "DhLWzq", "C2HPzNq", "C3LUyW", "u21Zz1vWzgf0zvrHC2TmAxn0vg9dBgLLBNq", "zMLSBa", "u3rHDgvjra", "C2vHDeLeCW", "CgfKu3rHCNq", "y2fZDfnLyxrjza", "vhLWzq", "pt09ioIhQUwkQoMaGowhUUADOEs7TUAJGoAFPsa9pt0", "ywnJB3vUDa", "vxnLzeDLBMvYywXtA2LUsuq", "CMvXDwvZDeLKBgvdywXSyMfJAW", "z2v0", "Cg9Z", "t25SAw5Lu3rHDgu", "su5gtZO", "u2TPBKLe", "zgf0yq", "y291BNrLCG", "CgfJAW", "D3v4AwvtD2L0y2G", "phnWyw4Gy2XHC3m9iNrLEhrszxmIpUoaKowsJoIHT+oaKq", "BxLjra", "zxzLBNq", "BMnU", "CMvX", "phnWyw4Gy2XHC3m9iNrLEhrszxm", "y3vYCMvUDeLe", "vhjPz2DLCLnLyxrjza", "q2HHBMDLq291BNq", "q2XHC3noyw1L", "A2v5", "zNvUy3rPB24", "zgvSzxrL", "q2XPzw50tgvHDMv0ywjSzvjLCa", "CgXVDa", "z29Vzhm", "yM9uDq", "zM9YrwfJAa", "C2v0", "yxv0B0jVDfn3AxrJAa", "y3jLyxrL", "u2vSzLnLyxrvAq", "zgvJB2rLuM91z2vcyxnLsw5MB1jLCa", "m0nMz3nQwq", "rwzMzwn0sw5KzxG", "CxvLCNLFDwLK", "zgvIDwC", "ios6SUwVHUw6PJXICJ7KU4RML6xOV5JLJ6/LVPCG", "yMLUza", "zxzLCNK", "q2XPzw50sgfWChLhzxrgCMLLBMriyw5Ky2fYzfjLCa", "u3rHCG", "Aw5MBW", "y29UC3rYDwn0B3i", "uM9VBunVBNrYB2XLCG", "CMv0DxjUicHMDw5JDgLVBIGPia", "y29UzMLNsgfUzenHCMrZuMvQzwn0zwq", "C2L6zq", "zgvZDhjVEq", "x19WCM90B19F", "5OgT5zAC5l2G6i635B6x77YA", "zgvSyxK", "zgf0yuLUzM8", "mJqXmdqYogjbsfjsuq", "zw5K", "r2vUzxjHBerHDge", "BwfW", "pc9ZCgfUpJXICJ4", "C3bLBgXjza", "5ywi5OMl5l2n572UoG", "5BYdioE6OG", "C3rHCNrZv2L0Aa", "sgfZu2TPBgW", "mK9uthDZDa", "zxHJzxb0Aw9U", "y3vYCMvUDfnLyW", "q2XPzw50qwn0AxzPDhLZzxreyxrHuMvW", "C3rHCG", "z2fTzxnJzw5L", "DhjHy2u", "u21Zz0DHBwvtzxrdAgfYywn0zxi", "ywrK", "r3nduM9Szu9WDfrHCMDLDe50zG", "5y+V5yE65P2a5QYH5PwW77YA", "CgfPzhvP", "y29UzMLNsgfUzenHCMrZ", "C2HVDxbHAq", "u21Zz0DHBwvqBgf5zxjezwfK", "q2fYzenVBMzPz1DPBMrVDW", "DxnLvhLWzq", "pt09ioMyN+s8JEIHGoMhJ+AJGoAFPEwKSEI0PE+8JowpLUA2IoIhQUwkQoMaGowhUIa9pt0", "5BYG5AsNcqK", "txnNr2fTzu92zxi", "txnNr2fTzvbSyxLdyxjKtNrM", "q0DZuM9SzvnWzwXSt3b0uMvW", "pt09iowfTUs7LUEoQEwUTUATU+s6OE+8JoMDNUs4U+INHUINKIa9pt0", "y291BNrtAge", "oJPvC2vKr2vUzxjHBfnRAw5jra", "y2XHC3m", "r2vUzxjHBfnRAw5nyw5Hz2vY", "CgHHC2u", "C3bSAxq", "qwnJB3vUDa", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "BwfPBLnLyxrjra", "ywXSx3jLy29Yza", "y3vYt2zMAwnLCKX2", "r2vUzxjHBeLe", "txnNvhLWzq", "AxntAgfUsgvuDq", "A2v5CW", "CMvHzhK", "zgf5x3f1zxn0x2zPBMLZAgvKx2nUDa", "C3fR", "sw5PDfnRAw4", "txnNsgvHCNrbBgL2zvjLCa", "z2vUzxjHBfnRAw5pD25iva", "C2v0r2vUzxjHBa", "z2vK", "z2v0u2vHDfvj", "Aw5JBhvKzxm", "yMfPy2H1", "5Bcppc9ZCgfUpG", "y2fUy2vSswrSzunHBgXIywnR", "5PAT57Q/6yEn6l+E77Ym5PYS5Bga5RI45OIp5lIT5Bcp5OQe6k6W5B2v5y+V6io95lIn5yEg", "pc9MB250pG", "Bgv2zwXjza", "zMXVB3i", "pt09iowqR+wkQdxNP5lLU7BOV5/OH6RLIQJPGidLH7OGpt09", "BMLJA25HBwu", "q2HHBM5LBa", "B2jQzwn0", "6yws6AAg5BEY6i635B6xia", "y2rR", "pt09ioAjP+IHJoIhQUwkQoMaGowhUUA4UoAiJ++8IoATU+s6OEINPUwpKE+8It09pq", "BxLtzwf0CW", "y2XLyxi", "5OkO55Qe5lQm5QYH5A+g56cb6k6K6k+b6zsz6k+V77Ym6k+356In5zco5yAn6k+v", "odaWndC0ng9lBLPlBq", "Axntzw5K", "uhvuB25N", "AxnbCNjHEq", "pgjYpJXZCgfUignSyxnZpsj0zxH0uMvZiJ4", "zgvJB2rLq2XPzw50u2vJCMv0sw5MB1jLCa", "DgL0Bgu", "C2vHDeLK", "ica6", "u3jJu3bLBgXdyxn0zxjtzwf0", "5BYdioM7Kq", "q2XPzw50r3vPBgrnzw1IzxjdAgfUz2voDgy", "AxnhDw9AAgfU", "Bwf4", "q0rlz29Vzhm", "q2fYzhm", "y2XPy2S", "C2v0txLjra", "DgHLBG", "q2XPzw50r2vUzxjHBfnRAw5szxa", "txnNr2fTzurLywXdAgfYywn0zxi"];
        return (_0xd236 = function () {
            return i
        })()
    }
    debounce((i => {
        const t = _0x2a01a3,
            n = globalState[t(539)][i[t(432)]];
        if (n && n[t(410)] > 0) {
            for (let a of n) recLottery(i[t(432)], a[t(347)], i[t(495)], i[t(670)], a[t(572)]);
            delete globalState[t(539)][i[t(432)]];
        }
    }), 6e4);
    const _0x56dea5 = _0x4f6b;

    function _0x4f6b(i, t) {
        const n = _0x336d();
        return _0x4f6b = function (t, a) {
            let e = n[t -= 164];
            if (void 0 === _0x4f6b.qTuEmv) {
                _0x4f6b.EWjWug = function (i) {
                    let t = "",
                        n = "";
                    for (let a, e, c = 0, o = 0; e = i.charAt(o++); ~e && (a = c % 4 ? 64 * a + e : e, c++ % 4) ? t += String.fromCharCode(255 & a >> (-2 * c & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                    for (let a = 0, e = t.length; a < e; a++) n += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }, i = arguments, _0x4f6b.qTuEmv = true;
            }
            const c = t + n[0],
                o = i[c];
            return o ? e = o : (e = _0x4f6b.EWjWug(e), i[c] = e), e
        }, _0x4f6b(i, t)
    }! function (i, t) {
        const n = _0x4f6b,
            a = _0x336d();
        for (;;) try {
            if (561064 === -parseInt(n(192)) / 1 + -parseInt(n(164)) / 2 + parseInt(n(199)) / 3 + -parseInt(n(196)) / 4 * (-parseInt(n(201)) / 5) + -parseInt(n(194)) / 6 + parseInt(n(189)) / 7 * (-parseInt(n(174)) / 8) + -parseInt(n(175)) / 9 * (-parseInt(n(181)) / 10)) break;
            a.push(a.shift());
        } catch (e) {
            a.push(a.shift());
        }
    }();
    const _0x46d893 = function () {
            let i = true;
            return function (t, n) {
                const a = i ? function () {
                    if (n) {
                        const i = n[_0x4f6b(166)](t, arguments);
                        return n = null, i
                    }
                } : function () {};
                return i = false, a
            }
        }(),
        _0x106ba4 = _0x46d893(globalThis, (function () {
            const i = _0x4f6b;
            let t;
            try {
                t = Function(i(176) + i(187) + ");")();
            } catch (e) {
                t = window;
            }
            const n = t[i(178)] = t[i(178)] || {},
                a = [i(179), i(193), i(191), i(195), i(168), i(169), i(200)];
            for (let c = 0; c < a[i(177)]; c++) {
                const t = _0x46d893[i(188)][i(180)][i(185)](_0x46d893),
                    e = a[c],
                    o = n[e] || t;
                t[i(197)] = _0x46d893[i(185)](_0x46d893), t[i(186)] = o[i(186)][i(185)](o), n[e] = t;
            }
        }));

    function _0x336d() {
        const i = ["mte5nJeWnLbHrNbVDq", "zxjYB3i", "ndaZndHTtLrjAgi", "x19WCM90B19F", "C3rHy2S", "mJa4mZq3ow1Oq1Lrta", "DhjHy2u", "mJaWEfjmB2ny", "mtCYotiWoe5NBgP2BG", "q29SDw1UoG", "yxbWBhK", "rvHjva", "zxHJzxb0Aw9U", "DgfIBgu", "tgLUztO", "su5jva", "BwvZC2fNzq", "u0Dt", "ohD0q3ffsG", "mtC3mZa4mvrfvKTHDG", "CMv0DxjUicHMDw5JDgLVBIGPia", "BgvUz3rO", "y29UC29Szq", "Bg9N", "ChjVDg90ExbL", "mteWBfjHuuzv", "C2XPy2u", "Bwf0y2G", "y2fSBa", "yMLUza", "Dg9tDhjPBMC", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK", "y29UC3rYDwn0B3i", "ntm3nJG0n2T3AM5oCG", "5Bcp5OQer0FKUOBVViZOGztNS7VKVzZOGixOP6pLHRm", "Aw5MBW", "odCXotmYwNvvAxnW", "D2fYBG"];
        return (_0x336d = function () {
            return i
        })()
    }
    _0x106ba4();
    const {
        addTooltip: _0x48a54a,
        tooltipSGS: _0x558f15
    } = window[_0x56dea5(173)];

    function main() {
        const i = _0x56dea5;
        let t = Array[i(180)][i(182)][i(184)](arguments);
        try {
            return t[0] === i(171) ? Init() : t[0] === i(167) ? Exit() : logic(t[t[i(177)] - 1])
        } catch (n) {
            console[i(195)](n[i(172)]), console[i(195)](n[i(198)]);
            const [, t, a] = n[i(198)][i(183)](/(\d+):(\d+)/);
            console[i(195)](i(170), t), console[i(195)](i(165), a), _0x558f15(i(190));
        }
    }
    "undefined" != typeof SGSMODULE && (Object.defineProperty(window.console, "log", {
        get: () => console.info,
        set() {}
    }), window.SGSMODULE.forEach((i => i("EXIT"))), delete window.SGSMODULE), console.info("%c三国杀打小抄", "font-weight: bold; color: white; background-color: #525288; padding: 1px 4px; border-radius: 4px;"), window.SGSMODULE = [], Object.defineProperty(window.console, "log", {
        get: () => function (...i) {
            (window._debug || window.isLogAllClass) && console.debug(...i), window.SGSMODULE.forEach((t => null == t ? void 0 : t(...i)));
        },
        set() {}
    }), main("INIT").then((i => {
        i && window.SGSMODULE.push(main);
    }));

}.toString()