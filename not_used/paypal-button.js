! function(n, e) {
    for (var t in e) n[t] = e[t]
}(window, function(t) {
    var r = {};

    function o(n) {
        if (r[n]) return r[n].exports;
        var e = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    return o.m = t, o.c = r, o.d = function(n, e, t) {
        o.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: t
        })
    }, o.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, o.t = function(e, n) {
        if (1 & n && (e = o(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (o.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) o.d(t, r, function(n) {
                return e[n]
            }.bind(null, r));
        return t
    }, o.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return o.d(e, "a", e), e
    }, o.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, o.p = "", o(o.s = 16)
}([function(n, e, t) {
    "use strict";

    function d() {
        return window.navigator.mockUserAgent || window.navigator.userAgent
    }

    function r() {
        return !!d().match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)
    }

    function l(n) {
        return void 0 === n && (n = d()), -1 < n.indexOf("Opera Mini")
    }

    function f(n) {
        return void 0 === n && (n = d()), /iPhone|iPod|iPad/.test(n)
    }

    function o() {
        if (window.document.documentMode) try {
            var n = window.status;
            return (window.status = "testIntranetMode") === window.status && (window.status = n, !0)
        } catch (n) {
            return !1
        }
        return !1
    }

    function i(n) {
        return void 0 === n && (n = d()), void 0 === (r = n) && (r = d()), !(f(r) && (void 0 === (o = r) && (o = d()), /\bGSA\b/.test(o) || /.+AppleWebKit(?!.*Safari)/.test(r)) || (void 0 === (e = n) && (e = d()), void 0 === (t = e) && (t = d()), /Android/.test(t) && /Version\/[\d.]+/.test(e) && !l(e)) || l(n) || (void 0 === (s = n) && (s = d()), /FxiOS/i.test(s)) || (void 0 === (u = n) && (u = d()), /EdgiOS/i.test(u)) || (void 0 === (c = n) && (c = d()), -1 !== c.indexOf("FBAN") || -1 !== c.indexOf("FBAV")) || (void 0 === (a = n) && (a = d()), /QQBrowser/.test(a)) || "undefined" != typeof process && process.versions && process.versions.electron || (i = d(), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(i)) || !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches);
        var e, t, r, o, i, a, c, u, s
    }
    var a, c, p = t(4),
        b = t(2),
        h = t(3),
        E = t(9);

    function u(n) {
        if ("function" == typeof btoa) return btoa(n);
        if ("undefined" != typeof Buffer) return Buffer.from(n, "utf8").toString("base64");
        throw new Error("Can not find window.btoa or Buffer")
    }

    function s(n) {
        if ("undefined" != typeof window && "function" == typeof window.atob) return window.atob(n);
        if ("undefined" != typeof Buffer) return Buffer.from(n, "base64").toString("utf8");
        throw new Error("Can not find window.atob or Buffer")
    }

    function m() {
        var n = "0123456789abcdef";
        return "xxxxxxxxxx".replace(/./g, function() {
            return n.charAt(Math.floor(Math.random() * n.length))
        }) + "_" + u((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    }

    function w() {
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("No global found")
    }

    function g(n) {
        try {
            return JSON.stringify(Array.prototype.slice.call(n), function(n, e) {
                return "function" == typeof e ? "memoize[" + function(n) {
                    if (a = a || new E.a, null == n || "object" != typeof n && "function" != typeof n) throw new Error("Invalid object");
                    var e = a.get(n);
                    return e || (e = typeof n + ":" + m(), a.set(n, e)), e
                }(e) + "]" : e
            })
        } catch (n) {
            throw new Error("Arguments not serializable -- can not be used to memoize")
        }
    }

    function v(u, s) {
        var n = this;
        void 0 === s && (s = {});
        var d = new E.a;

        function e() {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
            var r = d.getOrSet(s.thisNamespace ? this : u, function() {
                    return {}
                }),
                o = g(e),
                i = s.time;
            if (r[o] && i && Date.now() - r[o].time < i && delete r[o], r[o]) return r[o].value;
            var a = Date.now(),
                c = u.apply(this, arguments);
            return r[o] = {
                time: a,
                value: c
            }, r[o].value
        }
        return e.reset = function() {
            d.delete(s.thisNamespace ? n : u)
        }, s.name && (e.displayName = s.name + ":memoized"), e
    }

    function y(o) {
        var i = {};

        function n() {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
            var r = g(e);
            return i.hasOwnProperty(r) || (i[r] = o.apply(this, arguments).finally(function() {
                delete i[r]
            })), i[r]
        }
        return n.reset = function() {
            i = {}
        }, n
    }

    function O(n, e, t) {
        void 0 === t && (t = []);
        var r = n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {},
            o = g(t);
        return r.hasOwnProperty(o) ? r[o] : r[o] = e.apply(void 0, t)
    }

    function C() {}

    function N(n) {
        var e = !1;
        return function() {
            if (!e) return e = !0, n.apply(this, arguments)
        }
    }

    function T(n, e) {
        if (void 0 === e && (e = 1), 3 <= e) return "stringifyError stack overflow";
        try {
            if (!n) return "<unknown error: " + Object.prototype.toString.call(n) + ">";
            if ("string" == typeof n) return n;
            if (n instanceof Error) {
                var t = n && n.stack,
                    r = n && n.message;
                if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                if (t) return t;
                if (r) return r
            }
            return "function" == typeof n.toString ? n.toString() : Object.prototype.toString.call(n)
        } catch (n) {
            return "Error while stringifying error: " + T(n, e + 1)
        }
    }

    function R(n) {
        var e = "<unknown error: " + Object.prototype.toString.call(n) + ">";
        return n ? n instanceof Error ? n.message || e : "string" == typeof n.message && n.message || e : e
    }

    function L(n) {
        return "string" == typeof n ? n : n && "function" == typeof n.toString ? n.toString() : Object.prototype.toString.call(n)
    }

    function A(n, e) {
        if (!e) return n;
        if (Object.assign) return Object.assign(n, e);
        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }

    function _(n) {
        var e = [];
        for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
        return e
    }

    function S(n, e) {
        return Math.round(n * e / 100)
    }

    function P() {
        return Math.max.apply(Math, arguments)
    }

    function j(n) {
        return "data:image/svg+xml;base64," + u(n)
    }

    function I(n, e) {
        void 0 === e && (e = Boolean);
        var t = {};
        for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
        return t
    }

    function x(n) {
        return n
    }

    function M(n, e) {
        var t = [];
        return n.replace(e, function(n) {
            return t.push(n), ""
        }), t
    }

    function D(n, t) {
        var r, o;
        return void 0 === t && (t = 50),
            function() {
                o && clearTimeout(o);
                var e = r = r || new b.a;
                return o = setTimeout(function() {
                    o = r = null, b.a.try(n).then(function(n) {
                        e.resolve(n)
                    }, function(n) {
                        e.reject(n)
                    })
                }, t), e
            }
    }

    function k(e, t) {
        var r;
        return function n() {
            r = setTimeout(function() {
                e(), n()
            }, t)
        }(), {
            cancel: function() {
                clearTimeout(r)
            }
        }
    }

    function F(n, e, t) {
        for (var r in void 0 === e && (e = ""), void 0 === t && (t = {}), e = e ? e + "." : e, n) n.hasOwnProperty(r) && void 0 !== n[r] && null !== n[r] && "function" != typeof n[r] && (n[r] && Array.isArray(n[r]) && n[r].length && n[r].every(function(n) {
            return "object" != typeof n
        }) ? t["" + e + r + "[]"] = n[r].join(",") : n[r] && "object" == typeof n[r] ? t = F(n[r], "" + e + r, t) : t["" + e + r] = n[r].toString());
        return t
    }

    function H() {
        var o = {},
            u = {};
        return {
            on: function(n, e) {
                var t = u[n] = u[n] || [];
                t.push(e);
                var r = !1;
                return {
                    cancel: function() {
                        r || (r = !0, t.splice(t.indexOf(e), 1))
                    }
                }
            },
            once: function(n, e) {
                var t = this.on(n, function() {
                    t.cancel(), e()
                });
                return t
            },
            trigger: function(n) {
                for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
                var o = u[n],
                    i = [];
                if (o)
                    for (var a = function(n) {
                            var e = o[n];
                            i.push(b.a.try(function() {
                                return e.apply(void 0, t)
                            }))
                        }, c = 0; c < o.length; c++) a(c);
                return b.a.all(i).then(C)
            },
            triggerOnce: function(n) {
                if (o[n]) return b.a.resolve();
                o[n] = !0;
                for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
                return this.trigger.apply(this, [n].concat(t))
            }
        }
    }

    function U(n) {
        return n.replace(/-([a-z])/g, function(n) {
            return n[1].toUpperCase()
        })
    }

    function B(e, t, r) {
        if (Array.isArray(e)) {
            if ("number" != typeof t) throw new TypeError("Array key must be number")
        } else if ("object" == typeof e && null !== e && "string" != typeof t) throw new TypeError("Object key must be string");
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                delete e[t];
                var n = r();
                return e[t] = n
            },
            set: function(n) {
                delete e[t], e[t] = n
            }
        })
    }

    function W(n) {
        return "object" == typeof(e = n) && null !== e && "[object Object]" === Object.prototype.toString.call(n);
        var e
    }

    function Z(n) {
        if (!W(n)) return !1;
        var e = n.constructor;
        if ("function" != typeof e) return !1;
        var t = e.prototype;
        return !!W(t) && !!t.hasOwnProperty("isPrototypeOf")
    }

    function z(o, i, a) {
        if (void 0 === a && (a = ""), Array.isArray(o)) {
            for (var n = o.length, e = [], t = function(r) {
                    B(e, r, function() {
                        var n = a ? a + "." + r : "" + r,
                            e = o[r],
                            t = i(e, r, n);
                        return (Z(t) || Array.isArray(t)) && (t = z(t, i, n)), t
                    })
                }, r = 0; r < n; r++) t(r);
            return e
        }
        if (Z(o)) {
            var c = {},
                u = function(r) {
                    if (!o.hasOwnProperty(r)) return "continue";
                    B(c, r, function() {
                        var n = a ? a + "." + r : "" + r,
                            e = o[r],
                            t = i(e, r, n);
                        return (Z(t) || Array.isArray(t)) && (t = z(t, i, n)), t
                    })
                };
            for (var s in o) u(s);
            return c
        }
        throw new Error("Pass an object or array")
    }

    function G(n) {
        return null != n
    }

    function V(n) {
        return "[object RegExp]" === Object.prototype.toString.call(n)
    }

    function K(n, e, t) {
        if (n.hasOwnProperty(e)) return n[e];
        var r = t();
        return n[e] = r
    }

    function Y(t) {
        var r = [],
            o = !1;
        return {
            set: function(n, e) {
                return o || (t[n] = e, this.register(function() {
                    delete t[n]
                })), e
            },
            register: function(n) {
                o ? n() : r.push(N(n))
            },
            all: function() {
                var n = [];
                for (o = !0; r.length;) {
                    var e = r.pop();
                    n.push(e())
                }
                return b.a.all(n).then(C)
            }
        }
    }

    function q(n, e) {
        if (null == e) throw new Error("Expected " + n + " to be present");
        return e
    }

    function J() {
        return Boolean(document.body) && "complete" === document.readyState
    }

    function X(n) {
        return n.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B")
    }

    function $() {
        return O($, function() {
            return new b.a(function(n) {
                if (J()) return n();
                var e = setInterval(function() {
                    if (J()) return clearInterval(e), n()
                }, 10)
            })
        })
    }

    function Q() {
        return $().then(function() {
            if (document.body) return document.body;
            throw new Error("Document ready but document.body not present")
        })
    }

    function nn(o) {
        return O(nn, function() {
            var n = {};
            if (!o) return n;
            if (-1 === o.indexOf("=")) return n;
            for (var e = 0, t = o.split("&"); e < t.length; e++) {
                var r = t[e];
                (r = r.split("="))[0] && r[1] && (n[decodeURIComponent(r[0])] = decodeURIComponent(r[1]))
            }
            return n
        }, [o])
    }

    function en(n) {
        return nn(window.location.search.slice(1))[n]
    }

    function tn(n, e) {
        return void 0 === e && (e = {}), e && Object.keys(e).length ? (void 0 === (t = Object(p.a)({}, nn(n), e)) && (t = {}), Object.keys(t).filter(function(n) {
            return "string" == typeof t[n]
        }).map(function(n) {
            return X(n) + "=" + X(t[n])
        }).join("&")) : n;
        var t
    }

    function rn(n, e) {
        void 0 === e && (e = {});
        var t, r, o = e.query || {},
            i = e.hash || {},
            a = n.split("#");
        t = a[0], r = a[1];
        var c = t.split("?");
        t = c[0];
        var u = tn(c[1], o),
            s = tn(r, i);
        return u && (t = t + "?" + u), s && (t = t + "#" + s), t
    }

    function on(t, r) {
        return void 0 === r && (r = window), new b.a(function(n) {
            var e; - 1 === (e = r.location = t).indexOf("#") || 0 !== e.indexOf("#") && e.split("#")[0] !== window.location.href.split("#")[0] || n()
        })
    }

    function an() {
        return O(an, function() {
            return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && 1e3 < Math.abs(performance.now() - Date.now()) && 0 < performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart))
        })
    }

    function cn() {
        return $().then(function() {
            if (an()) {
                var n = window.performance.timing;
                return n.connectEnd && n.domInteractive ? n.domInteractive - n.connectEnd : void 0
            }
        })
    }

    function un() {
        return "undefined" != typeof window
    }

    function sn(n) {
        var e = n.host,
            o = void 0 === e ? window.location.host : e,
            i = n.path;
        return O(sn, function() {
            for (var n = "" + o + i, e = Array.prototype.slice.call(document.getElementsByTagName("script")), t = 0; t < e.length; t++) {
                var r = e[t];
                if (r.src && r.src.replace(/^https?:\/\//, "").split("?")[0] === n) return r
            }
        }, [i])
    }

    function dn() {
        return O(dn, function() {
            try {
                if ("undefined" == typeof window) return !1;
                if (window.localStorage) {
                    var n = Math.random().toString();
                    window.localStorage.setItem("__test__localStorage__", n);
                    var e = window.localStorage.getItem("__test__localStorage__");
                    if (window.localStorage.removeItem("__test__localStorage__"), n === e) return !0
                }
            } catch (n) {}
            return !1
        })
    }

    function ln() {
        var n = window.navigator,
            e = n.languages ? Array.prototype.slice.apply(n.languages) : [];
        return n.language && e.push(n.language), n.userLanguage && e.push(n.userLanguage), e.map(function(n) {
            if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                var e = n.split(/[-_]/),
                    t = e[0];
                return {
                    country: e[1],
                    lang: t
                }
            }
            return n && n.match(/^[a-z]{2}$/) ? {
                lang: n
            } : null
        }).filter(Boolean)
    }

    function fn(n, e) {
        n.appendChild(e)
    }

    function pn(n) {
        return n instanceof window.Element || null !== n && "object" == typeof n && 1 === n.nodeType && "object" == typeof n.style && "object" == typeof n.ownerDocument
    }

    function hn(n, e) {
        return void 0 === e && (e = document), pn(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
    }

    function En(n, e) {
        void 0 === e && (e = document);
        var t = hn(n, e);
        if (t) return t;
        throw new Error("Can not find element: " + L(n))
    }

    function mn(i) {
        return new b.a(function(n, e) {
            var t = L(i),
                r = hn(i);
            if (r) return n(r);
            if (J()) return e(new Error("Document is ready and element " + t + " does not exist"));
            var o = setInterval(function() {
                return (r = hn(i)) ? (clearInterval(o), n(r)) : J() ? (clearInterval(o), e(new Error("Document is ready and element " + t + " does not exist"))) : void 0
            }, 10)
        })
    }

    function wn(n) {
        this.message = n
    }

    function gn(n, e) {
        var t = e = e || {},
            r = t.width,
            o = t.height,
            i = 0,
            a = 0;
        r && (window.outerWidth ? a = Math.round((window.outerWidth - r) / 2) + window.screenX : window.screen.width && (a = Math.round((window.screen.width - r) / 2))), o && (window.outerHeight ? i = Math.round((window.outerHeight - o) / 2) + window.screenY : window.screen.height && (i = Math.round((window.screen.height - o) / 2)));
        var c = (e = Object(p.a)({
            top: i,
            left: a,
            width: r,
            height: o,
            status: 1,
            toolbar: 0,
            menubar: 0,
            resizable: 1,
            scrollbars: 1
        }, e)).name || "";
        delete e.name;
        var u, s = Object.keys(e).map(function(n) {
            if (e[n]) return n + "=" + L(e[n])
        }).filter(Boolean).join(",");
        try {
            u = window.open(n, c, s, !0)
        } catch (n) {
            throw new wn("Can not open popup window - " + (n.stack || n.message))
        }
        if (Object(h.u)(u)) throw new wn("Can not open popup window - blocked");
        return window.addEventListener("unload", function() {
            return u.close()
        }), u
    }

    function vn(n, e) {
        var t = e.tagName.toLowerCase();
        if ("html" !== t) throw new Error("Expected element to be html, got " + t);
        for (var r = n.document.documentElement; r.children && r.children.length;) r.removeChild(r.children[0]);
        for (; e.children.length;) r.appendChild(e.children[0])
    }

    function yn(r) {
        if ((c = c || new E.a).has(r)) {
            var n = c.get(r);
            if (n) return n
        }
        var e = new b.a(function(e, t) {
            r.addEventListener("load", function() {
                Object(h.v)(r), e(r)
            }), r.addEventListener("error", function(n) {
                r.contentWindow ? e(r) : t(n)
            })
        });
        return c.set(r, e), e
    }

    function bn(n) {
        return yn(n).then(function(n) {
            if (!n.contentWindow) throw new Error("Could not find window in iframe");
            return n.contentWindow
        })
    }

    function On(n, e) {
        void 0 === n && (n = {});
        var t = n.attributes || {},
            r = n.style || {},
            o = function(n, e, t) {
                void 0 === n && (n = "div"), void 0 === e && (e = {}), n = n.toLowerCase();
                var r, o, i, a = document.createElement(n);
                if (e.style && A(a.style, e.style), e.class && (a.className = e.class.join(" ")), e.id && a.setAttribute("id", e.id), e.attributes)
                    for (var c = 0, u = Object.keys(e.attributes); c < u.length; c++) {
                        var s = u[c];
                        a.setAttribute(s, e.attributes[s])
                    }
                if (e.styleSheet && (r = a, o = e.styleSheet, void 0 === i && (i = window.document), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(i.createTextNode(o))), e.html) {
                    if ("iframe" === n) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                    a.innerHTML = e.html
                }
                return a
            }("iframe", {
                attributes: Object(p.a)({
                    allowTransparency: "true"
                }, t),
                style: Object(p.a)({
                    backgroundColor: "transparent",
                    border: "none"
                }, r),
                html: n.html,
                class: n.class
            }),
            i = window.navigator.userAgent.match(/MSIE|Edge/i);
        return o.hasAttribute("id") || o.setAttribute("id", m()), yn(o), e && En(e).appendChild(o), (n.url || i) && o.setAttribute("src", n.url || "about:blank"), o
    }

    function Cn(n, e, t) {
        return n.addEventListener(e, t), {
            cancel: function() {
                n.removeEventListener(e, t)
            }
        }
    }

    function Nn(t, r, o) {
        o = N(o);
        for (var n = 0; n < r.length; n++) {
            var e = r[n];
            t.addEventListener(e, o)
        }
        return {
            cancel: N(function() {
                for (var n = 0; n < r.length; n++) {
                    var e = r[n];
                    t.removeEventListener(e, o)
                }
            })
        }
    }
    wn.prototype = Object.create(Error.prototype);
    var Tn = ["webkit", "moz", "ms", "o"],
        Rn = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
        Ln = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];

    function An(s, d, l, f) {
        return void 0 === f && (f = 1e3), new b.a(function(e, t) {
            var r = En(s);
            if (!r) return e();
            var o, i, a, n, c = !1;

            function u() {
                clearTimeout(o), clearTimeout(i), a.cancel(), n.cancel()
            }
            a = Nn(r, Rn, function(n) {
                    n.target === r && n.animationName === d && (clearTimeout(o), n.stopPropagation(), a.cancel(), c = !0, i = setTimeout(function() {
                        u(), e()
                    }, f))
                }), n = Nn(r, Ln, function(n) {
                    if (n.target === r && n.animationName === d) return u(), "string" == typeof n.animationName && n.animationName !== d ? t("Expected animation name to be " + d + ", found " + n.animationName) : e()
                }),
                function(n, e, t) {
                    n.style[e] = t;
                    for (var r, o = (r = e).charAt(0).toUpperCase() + r.slice(1).toLowerCase(), i = 0; i < Tn.length; i++) {
                        var a = Tn[i];
                        n.style["" + a + o] = t
                    }
                }(r, "animationName", d), o = setTimeout(function() {
                    if (!c) return u(), e()
                }, 200), l && l(u)
        })
    }

    function _n(n) {
        n && n.parentNode && n.parentNode.removeChild(n)
    }

    function Sn(n) {
        return !n || !n.parentNode
    }

    function Pn(n, e) {
        var t;
        return e = N(e), Sn(n) ? e() : t = k(function() {
            Sn(n) && (t.cancel(), e())
        }, 50), {
            cancel: function() {
                t && t.cancel()
            }
        }
    }

    function jn(t, r, n) {
        var e = void 0 === n ? {} : n,
            o = e.width,
            i = void 0 === o || o,
            a = e.height,
            c = void 0 === a || a,
            u = e.interval,
            s = void 0 === u ? 100 : u,
            d = e.win,
            l = void 0 === d ? window : d,
            f = t.offsetWidth,
            p = t.offsetHeight;
        r({
            width: f,
            height: p
        });
        var h, E, m = function() {
            var n = t.offsetWidth,
                e = t.offsetHeight;
            (i && n !== f || c && e !== p) && r({
                width: n,
                height: e
            }), f = n, p = e
        };
        return void 0 !== l.ResizeObserver ? (h = new l.ResizeObserver(m)).observe(t) : void 0 !== l.MutationObserver ? ((h = new l.MutationObserver(m)).observe(t, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !1
        }), l.addEventListener("resize", m)) : function n() {
            m(), E = setTimeout(n, s)
        }(), {
            cancel: function() {
                h.disconnect(), window.removeEventListener("resize", m), clearTimeout(E)
            }
        }
    }
    var In = 12e5;

    function xn(n) {
        var e = n.name,
            t = n.lifetime,
            o = void 0 === t ? In : t;
        return O(xn, function() {
            var i, a = "__" + e + "_storage__";

            function n(n) {
                var e, t = dn();
                if (i && (e = i), !e && t) {
                    var r = window.localStorage.getItem(a);
                    r && (e = JSON.parse(r))
                }
                e || (e = w()[a]), e || (e = {
                    id: m()
                }), e.id || (e.id = m());
                var o = n(i = e);
                return t ? window.localStorage.setItem(a, JSON.stringify(e)) : w()[a] = e, i = null, o
            }

            function t(r) {
                return n(function(n) {
                    var e = n.__session__,
                        t = Date.now();
                    return e && t - e.created > o && (e = null), e || (e = {
                        guid: m(),
                        created: t
                    }), n.__session__ = e, r(e)
                })
            }
            return {
                getState: n,
                getID: function() {
                    return n(function(n) {
                        return n.id
                    })
                },
                getSessionState: function(e) {
                    return t(function(n) {
                        return n.state = n.state || {}, e(n.state)
                    })
                },
                getSessionID: function() {
                    return t(function(n) {
                        return n.guid
                    })
                }
            }
        }, [{
            name: e,
            lifetime: o
        }])
    }

    function Mn() {
        return xn({
            name: "belter_experiment"
        })
    }

    function Dn(e) {
        return Mn().getSessionState(function(n) {
            return n.loggedBeacons = n.loggedBeacons || [], -1 === n.loggedBeacons.indexOf(e) && (n.loggedBeacons.push(e), !0)
        })
    }

    function kn(n) {
        var e, t, r = n.name,
            o = n.sample,
            i = void 0 === o ? 50 : o,
            a = n.logTreatment,
            c = void 0 === a ? C : a,
            u = n.logCheckpoint,
            s = void 0 === u ? C : u,
            d = (e = r, Mn().getState(function(n) {
                return n.throttlePercentiles = n.throttlePercentiles || {}, n.throttlePercentiles[e] = n.throttlePercentiles[e] || Math.floor(100 * Math.random()), n.throttlePercentiles[e]
            })),
            l = r + "_" + (t = d < i ? "test" : 50 <= i || i <= d && d < 2 * i ? "control" : "throttle"),
            f = !1,
            p = !1;
        try {
            window.localStorage && window.localStorage.getItem(r) && (p = !0)
        } catch (n) {}
        return {
            isEnabled: function() {
                return "test" === t || p
            },
            isDisabled: function() {
                return "test" !== t && !p
            },
            getTreatment: function() {
                return l
            },
            log: function(n, e) {
                return void 0 === e && (e = {}), f && (Dn(r + "_" + l) && c({
                    name: r,
                    treatment: l
                }), Dn(r + "_" + l + "_" + n) && s({
                    name: r,
                    treatment: l,
                    checkpoint: n,
                    payload: e
                })), this
            },
            logStart: function(n) {
                return void 0 === n && (n = {}), f = !0, this.log("start", n)
            },
            logComplete: function(n) {
                return void 0 === n && (n = {}), this.log("complete", n)
            }
        }
    }
    var Fn = [];

    function Hn(n) {
        var p = n.url,
            e = n.method,
            h = void 0 === e ? "get" : e,
            t = n.headers,
            E = void 0 === t ? {} : t,
            m = n.json,
            w = n.data,
            g = n.body,
            r = n.win,
            v = void 0 === r ? window : r,
            o = n.timeout,
            y = void 0 === o ? 0 : o;
        return new b.a(function(i, a) {
            if (m && w || m && g || w && m) throw new Error("Only options.json or options.data or options.body should be passed");
            for (var n = {}, e = 0, t = Object.keys(E); e < t.length; e++) {
                var r = t[e];
                n[r.toLowerCase()] = E[r]
            }
            m ? n["content-type"] = n["content-type"] || "application/json" : (w || g) && (n["content-type"] = n["content-type"] || "application/x-www-form-urlencoded; charset=utf-8"), n.accept = n.accept || "application/json";
            for (var o = 0; o < Fn.length; o++)
                for (var c = (0, Fn[o])(), u = 0, s = Object.keys(c); u < s.length; u++) {
                    var d = s[u];
                    n[d.toLowerCase()] = c[d]
                }
            var l = new v.XMLHttpRequest;
            for (var f in l.addEventListener("load", function() {
                    var n = function(n) {
                        void 0 === n && (n = "");
                        for (var e = {}, t = 0, r = n.trim().split("\n"); t < r.length; t++) {
                            var o = r[t].split(":"),
                                i = o[0],
                                a = o.slice(1);
                            e[i.toLowerCase()] = a.join(":").trim()
                        }
                        return e
                    }(this.getAllResponseHeaders());
                    if (!this.status) return a(new Error("Request to " + h.toLowerCase() + " " + p + " failed: no response status code."));
                    var e = n["content-type"],
                        t = e && (0 === e.indexOf("application/json") || 0 === e.indexOf("text/json")),
                        r = this.responseText;
                    try {
                        r = JSON.parse(r)
                    } catch (n) {
                        if (t) return a(new Error("Invalid json: " + this.responseText + "."))
                    }
                    var o = {
                        status: this.status,
                        headers: n,
                        body: r
                    };
                    return i(o)
                }, !1), l.addEventListener("error", function(n) {
                    a(new Error("Request to " + h.toLowerCase() + " " + p + " failed: " + n.toString() + "."))
                }, !1), l.open(h, p, !0), n) n.hasOwnProperty(f) && l.setRequestHeader(f, n[f]);
            m ? g = JSON.stringify(m) : w && (g = Object.keys(w).map(function(n) {
                return encodeURIComponent(n) + "=" + (w ? encodeURIComponent(w[n]) : "")
            }).join("&")), l.timeout = y, l.ontimeout = function() {
                a(new Error("Request to " + h.toLowerCase() + " " + p + " has timed out"))
            }, l.send(g)
        })
    }

    function Un(n) {
        return "string" == typeof n && /^[0-9]+%$/.test(n)
    }

    function Bn(n) {
        return "string" == typeof n && /^[0-9]+px$/.test(n)
    }

    function Wn(n) {
        if ("number" == typeof n) return n;
        var e = n.match(/^([0-9]+)(px|%)$/);
        if (!e) throw new Error("Could not match css value from " + n);
        return parseInt(e[1], 10)
    }

    function Zn(n) {
        return Wn(n) + "px"
    }

    function zn(n) {
        return "number" == typeof n ? Zn(n) : Un(n) ? n : Zn(n)
    }

    function Gn(n, e) {
        if ("number" == typeof n) return n;
        if (Un(n)) return parseInt(e * Wn(n) / 100, 10);
        if (Bn(n)) return Wn(n);
        throw new Error("Can not normalize dimension: " + n)
    }
    t.d(e, "D", function() {
        return r
    }), t.d(e, "G", function() {
        return f
    }), t.d(e, "F", function() {
        return o
    }), t.d(e, "eb", function() {
        return i
    }), t.d(e, "jb", function() {
        return Q
    }), t.d(e, "S", function() {
        return nn
    }), t.d(e, "v", function() {
        return en
    }), t.d(e, "q", function() {
        return rn
    }), t.d(e, "W", function() {
        return on
    }), t.d(e, "u", function() {
        return cn
    }), t.d(e, "B", function() {
        return un
    }), t.d(e, "w", function() {
        return sn
    }), t.d(e, "r", function() {
        return ln
    }), t.d(e, "d", function() {
        return fn
    }), t.d(e, "E", function() {
        return pn
    }), t.d(e, "s", function() {
        return hn
    }), t.d(e, "m", function() {
        return mn
    }), t.d(e, "a", function() {
        return wn
    }), t.d(e, "U", function() {
        return gn
    }), t.d(e, "lb", function() {
        return vn
    }), t.d(e, "f", function() {
        return bn
    }), t.d(e, "z", function() {
        return On
    }), t.d(e, "b", function() {
        return Cn
    }), t.d(e, "c", function() {
        return An
    }), t.d(e, "k", function() {
        return _n
    }), t.d(e, "kb", function() {
        return Pn
    }), t.d(e, "Q", function() {
        return jn
    }), t.d(e, "o", function() {
        return kn
    }), t.d(e, "x", function() {
        return xn
    }), t.d(e, "h", function() {
        return u
    }), t.d(e, "g", function() {
        return s
    }), t.d(e, "hb", function() {
        return m
    }), t.d(e, "L", function() {
        return v
    }), t.d(e, "M", function() {
        return y
    }), t.d(e, "A", function() {
        return O
    }), t.d(e, "N", function() {
        return C
    }), t.d(e, "R", function() {
        return N
    }), t.d(e, "cb", function() {
        return T
    }), t.d(e, "db", function() {
        return R
    }), t.d(e, "bb", function() {
        return L
    }), t.d(e, "p", function() {
        return A
    }), t.d(e, "ib", function() {
        return _
    }), t.d(e, "T", function() {
        return S
    }), t.d(e, "K", function() {
        return P
    }), t.d(e, "fb", function() {
        return j
    }), t.d(e, "P", function() {
        return I
    }), t.d(e, "y", function() {
        return x
    }), t.d(e, "X", function() {
        return M
    }), t.d(e, "V", function() {
        return D
    }), t.d(e, "ab", function() {
        return k
    }), t.d(e, "l", function() {
        return F
    }), t.d(e, "n", function() {
        return H
    }), t.d(e, "j", function() {
        return U
    }), t.d(e, "Y", function() {
        return z
    }), t.d(e, "C", function() {
        return G
    }), t.d(e, "J", function() {
        return V
    }), t.d(e, "t", function() {
        return K
    }), t.d(e, "i", function() {
        return Y
    }), t.d(e, "e", function() {
        return q
    }), t.d(e, "Z", function() {
        return Hn
    }), t.d(e, "H", function() {
        return Un
    }), t.d(e, "I", function() {
        return Bn
    }), t.d(e, "gb", function() {
        return zn
    }), t.d(e, "O", function() {
        return Gn
    })
}, function(n, e, t) {
    "use strict";
    var r, o = {
            AD: "AD",
            AE: "AE",
            AG: "AG",
            AI: "AI",
            AL: "AL",
            AM: "AM",
            AN: "AN",
            AO: "AO",
            AR: "AR",
            AT: "AT",
            AU: "AU",
            AW: "AW",
            AZ: "AZ",
            BA: "BA",
            BB: "BB",
            BE: "BE",
            BF: "BF",
            BG: "BG",
            BH: "BH",
            BI: "BI",
            BJ: "BJ",
            BM: "BM",
            BN: "BN",
            BO: "BO",
            BR: "BR",
            BS: "BS",
            BT: "BT",
            BW: "BW",
            BY: "BY",
            BZ: "BZ",
            CA: "CA",
            CD: "CD",
            CG: "CG",
            CH: "CH",
            CI: "CI",
            CK: "CK",
            CL: "CL",
            CM: "CM",
            CN: "CN",
            CO: "CO",
            CR: "CR",
            CV: "CV",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DJ: "DJ",
            DK: "DK",
            DM: "DM",
            DO: "DO",
            DZ: "DZ",
            EC: "EC",
            EE: "EE",
            EG: "EG",
            ER: "ER",
            ES: "ES",
            ET: "ET",
            FI: "FI",
            FJ: "FJ",
            FK: "FK",
            FM: "FM",
            FO: "FO",
            FR: "FR",
            GA: "GA",
            GB: "GB",
            GD: "GD",
            GE: "GE",
            GF: "GF",
            GI: "GI",
            GL: "GL",
            GM: "GM",
            GN: "GN",
            GP: "GP",
            GR: "GR",
            GT: "GT",
            GW: "GW",
            GY: "GY",
            HK: "HK",
            HN: "HN",
            HR: "HR",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IL: "IL",
            IN: "IN",
            IS: "IS",
            IT: "IT",
            JM: "JM",
            JO: "JO",
            JP: "JP",
            KE: "KE",
            KG: "KG",
            KH: "KH",
            KI: "KI",
            KM: "KM",
            KN: "KN",
            KR: "KR",
            KW: "KW",
            KY: "KY",
            KZ: "KZ",
            LA: "LA",
            LC: "LC",
            LI: "LI",
            LK: "LK",
            LS: "LS",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            MA: "MA",
            MC: "MC",
            MD: "MD",
            ME: "ME",
            MG: "MG",
            MH: "MH",
            MK: "MK",
            ML: "ML",
            MN: "MN",
            MQ: "MQ",
            MR: "MR",
            MS: "MS",
            MT: "MT",
            MU: "MU",
            MV: "MV",
            MW: "MW",
            MX: "MX",
            MY: "MY",
            MZ: "MZ",
            NA: "NA",
            NC: "NC",
            NE: "NE",
            NF: "NF",
            NG: "NG",
            NI: "NI",
            NL: "NL",
            NO: "NO",
            NP: "NP",
            NR: "NR",
            NU: "NU",
            NZ: "NZ",
            OM: "OM",
            PA: "PA",
            PE: "PE",
            PF: "PF",
            PG: "PG",
            PH: "PH",
            PL: "PL",
            PM: "PM",
            PN: "PN",
            PT: "PT",
            PW: "PW",
            PY: "PY",
            QA: "QA",
            RE: "RE",
            RO: "RO",
            RS: "RS",
            RU: "RU",
            RW: "RW",
            SA: "SA",
            SB: "SB",
            SC: "SC",
            SE: "SE",
            SG: "SG",
            SH: "SH",
            SI: "SI",
            SJ: "SJ",
            SK: "SK",
            SL: "SL",
            SM: "SM",
            SN: "SN",
            SO: "SO",
            SR: "SR",
            ST: "ST",
            SV: "SV",
            SZ: "SZ",
            TC: "TC",
            TD: "TD",
            TG: "TG",
            TH: "TH",
            TJ: "TJ",
            TM: "TM",
            TN: "TN",
            TO: "TO",
            TR: "TR",
            TT: "TT",
            TV: "TV",
            TW: "TW",
            TZ: "TZ",
            UA: "UA",
            UG: "UG",
            US: "US",
            UY: "UY",
            VA: "VA",
            VC: "VC",
            VE: "VE",
            VG: "VG",
            VN: "VN",
            VU: "VU",
            WF: "WF",
            WS: "WS",
            YE: "YE",
            YT: "YT",
            ZA: "ZA",
            ZM: "ZM",
            ZW: "ZW"
        },
        i = {
            AR: "ar",
            CS: "cs",
            DA: "da",
            DE: "de",
            EL: "el",
            EN: "en",
            ES: "es",
            FI: "fi",
            FR: "fr",
            HE: "he",
            HU: "hu",
            ID: "id",
            IT: "it",
            JA: "ja",
            KO: "ko",
            NL: "nl",
            NO: "no",
            PL: "pl",
            PT: "pt",
            RU: "ru",
            SK: "sk",
            SV: "sv",
            TH: "th",
            TR: "tr",
            ZH: "zh"
        },
        a = ((r = {})[o.AD] = [i.EN, i.FR, i.ES, i.ZH], r[o.AE] = [i.EN, i.FR, i.ES, i.ZH, i.AR], r[o.AG] = [i.EN, i.FR, i.ES, i.ZH], r[o.AI] = [i.EN, i.FR, i.ES, i.ZH], r[o.AL] = [i.EN], r[o.AM] = [i.EN, i.FR, i.ES, i.ZH], r[o.AN] = [i.EN, i.FR, i.ES, i.ZH], r[o.AO] = [i.EN, i.FR, i.ES, i.ZH], r[o.AR] = [i.ES, i.EN], r[o.AT] = [i.DE, i.EN], r[o.AU] = [i.EN], r[o.AW] = [i.EN, i.FR, i.ES, i.ZH], r[o.AZ] = [i.EN, i.FR, i.ES, i.ZH], r[o.BA] = [i.EN], r[o.BB] = [i.EN, i.FR, i.ES, i.ZH], r[o.BE] = [i.EN, i.NL, i.FR], r[o.BF] = [i.FR, i.EN, i.ES, i.ZH], r[o.BG] = [i.EN], r[o.BH] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.BI] = [i.FR, i.EN, i.ES, i.ZH], r[o.BJ] = [i.FR, i.EN, i.ES, i.ZH], r[o.BM] = [i.EN, i.FR, i.ES, i.ZH], r[o.BN] = [i.EN], r[o.BO] = [i.ES, i.EN, i.FR, i.ZH], r[o.BR] = [i.PT, i.EN], r[o.BS] = [i.EN, i.FR, i.ES, i.ZH], r[o.BT] = [i.EN], r[o.BW] = [i.EN, i.FR, i.ES, i.ZH], r[o.BY] = [i.EN], r[o.BZ] = [i.EN, i.ES, i.FR, i.ZH], r[o.CA] = [i.EN, i.FR], r[o.CD] = [i.FR, i.EN, i.ES, i.ZH], r[o.CG] = [i.EN, i.FR, i.ES, i.ZH], r[o.CH] = [i.DE, i.FR, i.EN], r[o.CI] = [i.FR, i.EN], r[o.CK] = [i.EN, i.FR, i.ES, i.ZH], r[o.CL] = [i.ES, i.EN, i.FR, i.ZH], r[o.CM] = [i.FR, i.EN], r[o.CN] = [i.ZH], r[o.CO] = [i.ES, i.EN, i.FR, i.ZH], r[o.CR] = [i.ES, i.EN, i.FR, i.ZH], r[o.CV] = [i.EN, i.FR, i.ES, i.ZH], r[o.CY] = [i.EN], r[o.CZ] = [i.CS, i.EN, i.FR, i.ES, i.ZH], r[o.DE] = [i.DE, i.EN], r[o.DJ] = [i.FR, i.EN, i.ES, i.ZH], r[o.DK] = [i.DA, i.EN], r[o.DM] = [i.EN, i.FR, i.ES, i.ZH], r[o.DO] = [i.ES, i.EN, i.FR, i.ZH], r[o.DZ] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.EC] = [i.ES, i.EN, i.FR, i.ZH], r[o.EE] = [i.EN, i.RU, i.FR, i.ES, i.ZH], r[o.EG] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.ER] = [i.EN, i.FR, i.ES, i.ZH], r[o.ES] = [i.ES, i.EN], r[o.ET] = [i.EN, i.FR, i.ES, i.ZH], r[o.FI] = [i.FI, i.EN, i.FR, i.ES, i.ZH], r[o.FJ] = [i.EN, i.FR, i.ES, i.ZH], r[o.FK] = [i.EN, i.FR, i.ES, i.ZH], r[o.FM] = [i.EN], r[o.FO] = [i.DA, i.EN, i.FR, i.ES, i.ZH], r[o.FR] = [i.FR, i.EN], r[o.GA] = [i.FR, i.EN, i.ES, i.ZH], r[o.GB] = [i.EN], r[o.GD] = [i.EN, i.FR, i.ES, i.ZH], r[o.GE] = [i.EN, i.FR, i.ES, i.ZH], r[o.GF] = [i.EN, i.FR, i.ES, i.ZH], r[o.GI] = [i.EN, i.FR, i.ES, i.ZH], r[o.GL] = [i.DA, i.EN, i.FR, i.ES, i.ZH], r[o.GM] = [i.EN, i.FR, i.ES, i.ZH], r[o.GN] = [i.FR, i.EN, i.ES, i.ZH], r[o.GP] = [i.EN, i.FR, i.ES, i.ZH], r[o.GR] = [i.EL, i.EN, i.FR, i.ES, i.ZH], r[o.GT] = [i.ES, i.EN, i.FR, i.ZH], r[o.GW] = [i.EN, i.FR, i.ES, i.ZH], r[o.GY] = [i.EN, i.FR, i.ES, i.ZH], r[o.HK] = [i.EN, i.ZH], r[o.HN] = [i.ES, i.EN, i.FR, i.ZH], r[o.HR] = [i.EN], r[o.HU] = [i.HU, i.EN, i.FR, i.ES, i.ZH], r[o.ID] = [i.ID, i.EN], r[o.IE] = [i.EN, i.FR, i.ES, i.ZH], r[o.IL] = [i.HE, i.EN], r[o.IN] = [i.EN], r[o.IS] = [i.EN], r[o.IT] = [i.IT, i.EN], r[o.JM] = [i.EN, i.ES, i.FR, i.ZH], r[o.JO] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.JP] = [i.JA, i.EN], r[o.KE] = [i.EN, i.FR, i.ES, i.ZH], r[o.KG] = [i.EN, i.FR, i.ES, i.ZH], r[o.KH] = [i.EN], r[o.KI] = [i.EN, i.FR, i.ES, i.ZH], r[o.KM] = [i.FR, i.EN, i.ES, i.ZH], r[o.KN] = [i.EN, i.FR, i.ES, i.ZH], r[o.KR] = [i.KO, i.EN], r[o.KW] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.KY] = [i.EN, i.FR, i.ES, i.ZH], r[o.KZ] = [i.EN, i.FR, i.ES, i.ZH], r[o.LA] = [i.EN], r[o.LC] = [i.EN, i.FR, i.ES, i.ZH], r[o.LI] = [i.EN, i.FR, i.ES, i.ZH], r[o.LK] = [i.EN], r[o.LS] = [i.EN, i.FR, i.ES, i.ZH], r[o.LT] = [i.EN, i.RU, i.FR, i.ES, i.ZH], r[o.LU] = [i.EN, i.DE, i.FR, i.ES, i.ZH], r[o.LV] = [i.EN, i.RU, i.FR, i.ES, i.ZH], r[o.MA] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.MC] = [i.FR, i.EN], r[o.MD] = [i.EN], r[o.ME] = [i.EN], r[o.MG] = [i.EN, i.FR, i.ES, i.ZH], r[o.MH] = [i.EN, i.FR, i.ES, i.ZH], r[o.MK] = [i.EN], r[o.ML] = [i.FR, i.EN, i.ES, i.ZH], r[o.MN] = [i.EN], r[o.MQ] = [i.EN, i.FR, i.ES, i.ZH], r[o.MR] = [i.EN, i.FR, i.ES, i.ZH], r[o.MS] = [i.EN, i.FR, i.ES, i.ZH], r[o.MT] = [i.EN], r[o.MU] = [i.EN, i.FR, i.ES, i.ZH], r[o.MV] = [i.EN], r[o.MW] = [i.EN, i.FR, i.ES, i.ZH], r[o.MX] = [i.ES, i.EN], r[o.MY] = [i.EN], r[o.MZ] = [i.EN, i.FR, i.ES, i.ZH], r[o.NA] = [i.EN, i.FR, i.ES, i.ZH], r[o.NC] = [i.EN, i.FR, i.ES, i.ZH], r[o.NE] = [i.FR, i.EN, i.ES, i.ZH], r[o.NF] = [i.EN, i.FR, i.ES, i.ZH], r[o.NG] = [i.EN], r[o.NI] = [i.ES, i.EN, i.FR, i.ZH], r[o.NL] = [i.NL, i.EN], r[o.NO] = [i.NO, i.EN], r[o.NP] = [i.EN], r[o.NR] = [i.EN, i.FR, i.ES, i.ZH], r[o.NU] = [i.EN, i.FR, i.ES, i.ZH], r[o.NZ] = [i.EN, i.FR, i.ES, i.ZH], r[o.OM] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.PA] = [i.ES, i.EN, i.FR, i.ZH], r[o.PE] = [i.ES, i.EN, i.FR, i.ZH], r[o.PF] = [i.EN, i.FR, i.ES, i.ZH], r[o.PG] = [i.EN, i.FR, i.ES, i.ZH], r[o.PH] = [i.EN], r[o.PL] = [i.PL, i.EN], r[o.PM] = [i.EN, i.FR, i.ES, i.ZH], r[o.PN] = [i.EN, i.FR, i.ES, i.ZH], r[o.PT] = [i.PT, i.EN], r[o.PW] = [i.EN, i.FR, i.ES, i.ZH], r[o.PY] = [i.ES, i.EN], r[o.QA] = [i.EN, i.FR, i.ES, i.ZH, i.AR], r[o.RE] = [i.EN, i.FR, i.ES, i.ZH], r[o.RO] = [i.EN, i.FR, i.ES, i.ZH], r[o.RS] = [i.EN, i.FR, i.ES, i.ZH], r[o.RU] = [i.RU, i.EN], r[o.RW] = [i.FR, i.EN, i.ES, i.ZH], r[o.SA] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.SB] = [i.EN, i.FR, i.ES, i.ZH], r[o.SC] = [i.FR, i.EN, i.ES, i.ZH], r[o.SE] = [i.SV, i.EN], r[o.SG] = [i.EN], r[o.SH] = [i.EN, i.FR, i.ES, i.ZH], r[o.SI] = [i.EN, i.FR, i.ES, i.ZH], r[o.SJ] = [i.EN, i.FR, i.ES, i.ZH], r[o.SK] = [i.SK, i.EN, i.FR, i.ES, i.ZH], r[o.SL] = [i.EN, i.FR, i.ES, i.ZH], r[o.SM] = [i.EN, i.FR, i.ES, i.ZH], r[o.SN] = [i.FR, i.EN, i.ES, i.ZH], r[o.SO] = [i.EN, i.FR, i.ES, i.ZH], r[o.SR] = [i.EN, i.FR, i.ES, i.ZH], r[o.ST] = [i.EN, i.FR, i.ES, i.ZH], r[o.SV] = [i.ES, i.EN, i.FR, i.ZH], r[o.SZ] = [i.EN, i.FR, i.ES, i.ZH], r[o.TC] = [i.EN, i.FR, i.ES, i.ZH], r[o.TD] = [i.FR, i.EN, i.ES, i.ZH], r[o.TG] = [i.FR, i.EN, i.ES, i.ZH], r[o.TH] = [i.TH, i.EN], r[o.TJ] = [i.EN, i.FR, i.ES, i.ZH], r[o.TM] = [i.EN, i.FR, i.ES, i.ZH], r[o.TN] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.TO] = [i.EN], r[o.TR] = [i.TR, i.EN], r[o.TT] = [i.EN, i.FR, i.ES, i.ZH], r[o.TV] = [i.EN, i.FR, i.ES, i.ZH], r[o.TW] = [i.ZH, i.EN], r[o.TZ] = [i.EN, i.FR, i.ES, i.ZH], r[o.UA] = [i.EN, i.RU, i.FR, i.ES, i.ZH], r[o.UG] = [i.EN, i.FR, i.ES, i.ZH], r[o.US] = [i.EN, i.FR, i.ES, i.ZH], r[o.UY] = [i.ES, i.EN, i.FR, i.ZH], r[o.VA] = [i.EN, i.FR, i.ES, i.ZH], r[o.VC] = [i.EN, i.FR, i.ES, i.ZH], r[o.VE] = [i.ES, i.EN, i.FR, i.ZH], r[o.VG] = [i.EN, i.FR, i.ES, i.ZH], r[o.VN] = [i.EN], r[o.VU] = [i.EN, i.FR, i.ES, i.ZH], r[o.WF] = [i.EN, i.FR, i.ES, i.ZH], r[o.WS] = [i.EN], r[o.YE] = [i.AR, i.EN, i.FR, i.ES, i.ZH], r[o.YT] = [i.EN, i.FR, i.ES, i.ZH], r[o.ZA] = [i.EN, i.FR, i.ES, i.ZH], r[o.ZM] = [i.EN, i.FR, i.ES, i.ZH], r[o.ZW] = [i.EN], r),
        c = {
            CLIENT_TOKEN: "data-client-token",
            PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
            STAGE_HOST: "data-stage-host",
            API_STAGE_HOST: "data-api-stage-host"
        },
        u = {
            COMPONENTS: "components",
            ENV: "env",
            DEBUG: "debug",
            CACHEBUST: "cachebust",
            CLIENT_ID: "client-id",
            MERCHANT_ID: "merchant-id",
            LOCALE: "locale",
            CURRENCY: "currency",
            INTENT: "intent",
            COMMIT: "commit",
            VAULT: "vault",
            BUYER_COUNTRY: "buyer-country",
            DISABLE_FUNDING: "disable-funding",
            DISABLE_CARD: "disable-card",
            LOCALE_COUNTRY: "locale-country",
            LOCALE_LANG: "locale-lang",
            FRAMEWORK: "framework",
            INTEGRATION_DATE: "integration-date",
            ORDER_CURRENCY: "order-currency",
            ORDER_INTENT: "order-intent",
            ORDER_COMMIT: "order-commit",
            ORDER_VAULT: "order-vault"
        },
        s = {
            TRUE: "true",
            FALSE: "false"
        },
        d = {
            LOCAL: "local",
            STAGE: "stage",
            SANDBOX: "sandbox",
            PRODUCTION: "production",
            TEST: "test"
        },
        l = {
            FEED: "feed_name",
            STATE: "state_name",
            TRANSITION: "transition_name",
            BUTTON_TYPE: "button_type",
            SESSION_UID: "page_session_id",
            BUTTON_SESSION_UID: "button_session_id",
            TOKEN: "token",
            CONTEXT_ID: "context_id",
            CONTEXT_TYPE: "context_type",
            REFERER: "referer_url",
            PAY_ID: "pay_id",
            SELLER_ID: "seller_id",
            CLIENT_ID: "client_id",
            DATA_SOURCE: "serverside_data_source",
            BUTTON_SOURCE: "button_source",
            ERROR_CODE: "ext_error_code",
            ERROR_DESC: "ext_error_desc",
            PAGE_LOAD_TIME: "page_load_time",
            EXPERIMENT_NAME: "pxp_exp_id",
            TREATMENT_NAME: "pxp_trtmnt_id",
            TRANSITION_TIME: "transition_time",
            FUNDING_LIST: "eligible_payment_methods",
            FUNDING_COUNT: "eligible_payment_count",
            CHOSEN_FUNDING: "selected_payment_method",
            BUTTON_LAYOUT: "button_layout",
            VERSION: "checkoutjs_version",
            LOCALE: "locale",
            BUYER_COUNTRY: "buyer_cntry",
            INTEGRATION_IDENTIFIER: "integration_identifier",
            PARTNER_ATTRIBUTION_ID: "bn_code",
            SDK_NAME: "sdk_name",
            SDK_VERSION: "sdk_version",
            USER_AGENT: "user_agent",
            USER_ACTION: "user_action",
            CONTEXT_CORRID: "context_correlation_id"
        },
        f = {
            COMMIT: "commit",
            CONTINUE: "continue"
        },
        p = {
            PAYMENTS_SDK: "checkout"
        },
        h = {
            PAYMENTS_SDK: "payments_sdk"
        },
        E = {
            PAYMENTS_SDK: "payments_sdk"
        },
        m = {
            CAPTURE: "capture",
            AUTHORIZE: "authorize",
            ORDER: "order"
        },
        w = {
            TRUE: !0,
            FALSE: !1
        },
        g = {
            TRUE: !0,
            FALSE: !1
        },
        v = {
            DESKTOP: "desktop",
            MOBILE: "mobile"
        },
        y = {
            PAYPAL: "paypal",
            VENMO: "venmo",
            CREDIT: "credit",
            CARD: "card",
            IDEAL: "ideal",
            SEPA: "sepa",
            BANCONTACT: "bancontact",
            GIROPAY: "giropay",
            SOFORT: "sofort",
            EPS: "eps",
            MYBANK: "mybank",
            P24: "p24",
            ZIMPLER: "zimpler",
            WECHATPAY: "wechatpay"
        },
        b = {
            VISA: "visa",
            MASTERCARD: "mastercard",
            AMEX: "amex",
            DISCOVER: "discover",
            HIPER: "hiper",
            ELO: "elo",
            JCB: "jcb",
            CUP: "cup"
        },
        O = m.CAPTURE,
        C = w.TRUE,
        N = w.FALSE,
        T = g.FALSE;
    t.d(e, "c", function() {
        return o
    }), t.d(e, "r", function() {
        return i
    }), t.d(e, "d", function() {
        return a
    }), t.d(e, "v", function() {
        return c
    }), t.d(e, "u", function() {
        return u
    }), t.d(e, "t", function() {
        return s
    }), t.d(e, "w", function() {
        return "unknown"
    }), t.d(e, "j", function() {
        return d
    }), t.d(e, "m", function() {
        return l
    }), t.d(e, "o", function() {
        return f
    }), t.d(e, "k", function() {
        return p
    }), t.d(e, "l", function() {
        return h
    }), t.d(e, "n", function() {
        return E
    }), t.d(e, "q", function() {
        return m
    }), t.d(e, "b", function() {
        return w
    }), t.d(e, "x", function() {
        return g
    }), t.d(e, "s", function() {
        return v
    }), t.d(e, "p", function() {
        return y
    }), t.d(e, "a", function() {
        return b
    }), t.d(e, "e", function() {
        return "USD"
    }), t.d(e, "f", function() {
        return O
    }), t.d(e, "h", function() {
        return C
    }), t.d(e, "g", function() {
        return N
    }), t.d(e, "i", function() {
        return T
    })
}, function(n, e, t) {
    "use strict";

    function l(n) {
        try {
            if (!n) return !1;
            if ("undefined" != typeof Promise && n instanceof Promise) return !0;
            if ("undefined" != typeof window && window.Window && n instanceof window.Window) return !1;
            if ("undefined" != typeof window && window.constructor && n instanceof window.constructor) return !1;
            var e = {}.toString;
            if (e) {
                var t = e.call(n);
                if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
            }
            if ("function" == typeof n.then) return !0
        } catch (n) {
            return !1
        }
        return !1
    }
    var r, o = [],
        i = [],
        a = 0;

    function c() {
        if (!a && r) {
            var n = r;
            r = null, n.resolve()
        }
    }

    function f() {
        a += 1
    }

    function p() {
        a -= 1, c()
    }
    var u = function() {
        function d(n) {
            var e = this;
            if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], n) {
                var t, r, o = !1,
                    i = !1,
                    a = !1;
                f();
                try {
                    n(function(n) {
                        a ? e.resolve(n) : (o = !0, t = n)
                    }, function(n) {
                        a ? e.reject(n) : (i = !0, r = n)
                    })
                } catch (n) {
                    return p(), void this.reject(n)
                }
                p(), a = !0, o ? this.resolve(t) : i && this.reject(r)
            }
        }
        var n = d.prototype;
        return n.resolve = function(n) {
            if (this.resolved || this.rejected) return this;
            if (l(n)) throw new Error("Can not resolve promise with another promise");
            return this.resolved = !0, this.value = n, this.dispatch(), this
        }, n.reject = function(n) {
            var e = this;
            if (this.resolved || this.rejected) return this;
            if (l(n)) throw new Error("Can not reject promise with another promise");
            if (!n) {
                var t = n && "function" == typeof n.toString ? n.toString() : Object.prototype.toString.call(n);
                n = new Error("Expected reject to be called with Error, got " + t)
            }
            return this.rejected = !0, this.error = n, this.errorHandled || setTimeout(function() {
                e.errorHandled || function(n, e) {
                    if (-1 === o.indexOf(n)) {
                        o.push(n), setTimeout(function() {
                            throw n
                        }, 1);
                        for (var t = 0; t < i.length; t++) i[t](n, e)
                    }
                }(n, e)
            }, 1), this.dispatch(), this
        }, n.asyncReject = function(n) {
            return this.errorHandled = !0, this.reject(n), this
        }, n.dispatch = function() {
            var a = this,
                n = this.dispatching,
                c = this.resolved,
                u = this.rejected,
                s = this.handlers;
            if (!n && (c || u)) {
                this.dispatching = !0, f();
                for (var e = function(n) {
                        var e = s[n],
                            t = e.onSuccess,
                            r = e.onError,
                            o = e.promise,
                            i = void 0;
                        if (c) try {
                            i = t ? t(a.value) : a.value
                        } catch (n) {
                            return o.reject(n), "continue"
                        } else if (u) {
                            if (!r) return o.reject(a.error), "continue";
                            try {
                                i = r(a.error)
                            } catch (n) {
                                return o.reject(n), "continue"
                            }
                        } i instanceof d && (i.resolved || i.rejected) ? (i.resolved ? o.resolve(i.value) : o.reject(i.error), i.errorHandled = !0) : l(i) ? i instanceof d && (i.resolved || i.rejected) ? i.resolved ? o.resolve(i.value) : o.reject(i.error) : i.then(function(n) {
                            o.resolve(n)
                        }, function(n) {
                            o.reject(n)
                        }) : o.resolve(i)
                    }, t = 0; t < s.length; t++) e(t);
                s.length = 0, this.dispatching = !1, p()
            }
        }, n.then = function(n, e) {
            if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
            if (e && "function" != typeof e && !e.call) throw new Error("Promise.then expected a function for error handler");
            var t = new d;
            return this.handlers.push({
                promise: t,
                onSuccess: n,
                onError: e
            }), this.errorHandled = !0, this.dispatch(), t
        }, n.catch = function(n) {
            return this.then(void 0, n)
        }, n.finally = function(e) {
            if (e && "function" != typeof e && !e.call) throw new Error("Promise.finally expected a function");
            return this.then(function(n) {
                return d.try(e).then(function() {
                    return n
                })
            }, function(n) {
                return d.try(e).then(function() {
                    throw n
                })
            })
        }, n.timeout = function(n, e) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout(function() {
                t.resolved || t.rejected || t.reject(e || new Error("Promise timed out after " + n + "ms"))
            }, n);
            return this.then(function(n) {
                return clearTimeout(r), n
            })
        }, n.toPromise = function() {
            if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
            return Promise.resolve(this)
        }, d.resolve = function(t) {
            return t instanceof d ? t : l(t) ? new d(function(n, e) {
                return t.then(n, e)
            }) : (new d).resolve(t)
        }, d.reject = function(n) {
            return (new d).reject(n)
        }, d.asyncReject = function(n) {
            return (new d).asyncReject(n)
        }, d.all = function(t) {
            var r = new d,
                o = t.length,
                i = [];
            if (!o) return r.resolve(i), r;
            for (var n = function(e) {
                    var n = t[e];
                    if (n instanceof d) {
                        if (n.resolved) return i[e] = n.value, o -= 1, "continue"
                    } else if (!l(n)) return i[e] = n, o -= 1, "continue";
                    d.resolve(n).then(function(n) {
                        i[e] = n, 0 == (o -= 1) && r.resolve(i)
                    }, function(n) {
                        r.reject(n)
                    })
                }, e = 0; e < t.length; e++) n(e);
            return 0 === o && r.resolve(i), r
        }, d.hash = function(n) {
            var t = {};
            return d.all(Object.keys(n).map(function(e) {
                return d.resolve(n[e]).then(function(n) {
                    t[e] = n
                })
            })).then(function() {
                return t
            })
        }, d.map = function(n, e) {
            return d.all(n.map(e))
        }, d.onPossiblyUnhandledException = function(n) {
            return e = n, i.push(e), {
                cancel: function() {
                    i.splice(i.indexOf(e), 1)
                }
            };
            var e
        }, d.try = function(n, e, t) {
            if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
            var r;
            f();
            try {
                r = n.apply(e, t || [])
            } catch (n) {
                return p(), d.reject(n)
            }
            return p(), d.resolve(r)
        }, d.delay = function(e) {
            return new d(function(n) {
                setTimeout(n, e)
            })
        }, d.isPromise = function(n) {
            return !!(n && n instanceof d) || l(n)
        }, d.flush = function() {
            return n = r = r || new d, c(), n;
            var n
        }, d
    }();
    t.d(e, "a", function() {
        return u
    })
}, function(n, e, t) {
    "use strict";

    function r(n) {
        return "[object RegExp]" === Object.prototype.toString.call(n)
    }
    var i = {
            MOCK: "mock:",
            FILE: "file:",
            ABOUT: "about:"
        },
        o = "*",
        a = {
            IFRAME: "iframe",
            POPUP: "popup"
        },
        c = "Call was rejected by callee.\r\n";

    function u(n) {
        return void 0 === n && (n = window), n.location.protocol === i.ABOUT
    }

    function s(n) {
        if (n) try {
            if (n.parent && n.parent !== n) return n.parent
        } catch (n) {}
    }

    function d(n) {
        if (n && !s(n)) try {
            return n.opener
        } catch (n) {}
    }

    function l(n) {
        try {
            return n && n.location && n.location.href, !0
        } catch (n) {}
        return !1
    }

    function f(n) {
        var e = (n = n || window).location;
        if (!e) throw new Error("Can not read window location");
        var t = e.protocol;
        if (!t) throw new Error("Can not read window protocol");
        if (t === i.FILE) return i.FILE + "//";
        if (t === i.ABOUT) {
            var r = s(n);
            return r && l(r) ? f(r) : i.ABOUT + "//"
        }
        var o = e.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o
    }

    function p(n) {
        var e = f(n = n || window);
        return e && n.mockDomain && 0 === n.mockDomain.indexOf(i.MOCK) ? n.mockDomain : e
    }

    function h(n) {
        try {
            if (!n.location.href) return !0;
            if ("about:blank" === n.location.href) return !0
        } catch (n) {}
        return !1
    }

    function E(n) {
        if (! function(n) {
                try {
                    if (n === window) return !0
                } catch (n) {}
                try {
                    var e = Object.getOwnPropertyDescriptor(n, "location");
                    if (e && !1 === e.enumerable) return !1
                } catch (n) {}
                try {
                    if (u(n) && l(n)) return !0
                } catch (n) {}
                try {
                    if (f(n) === f(window)) return !0
                } catch (n) {}
                return !1
            }(n)) return !1;
        try {
            if (n === window) return !0;
            if (u(n) && l(n)) return !0;
            if (p(window) === p(n)) return !0
        } catch (n) {}
        return !1
    }

    function m(n) {
        if (!E(n)) throw new Error("Expected window to be same domain");
        return n
    }

    function w(n, e) {
        if (!n || !e) return !1;
        var t = s(e);
        return t ? t === n : -1 !== function(n) {
            var e = [];
            try {
                for (; n.parent !== n;) e.push(n.parent), n = n.parent
            } catch (n) {}
            return e
        }(e).indexOf(n)
    }

    function g(e) {
        var t, n, r = [];
        try {
            t = e.frames
        } catch (n) {
            t = e
        }
        try {
            n = t.length
        } catch (n) {}
        if (0 === n) return r;
        if (n) {
            for (var o = 0; o < n; o++) {
                var i = void 0;
                try {
                    i = t[o]
                } catch (n) {
                    continue
                }
                r.push(i)
            }
            return r
        }
        for (var a = 0; a < 100; a++) {
            var c = void 0;
            try {
                c = t[a]
            } catch (n) {
                return r
            }
            if (!c) return r;
            r.push(c)
        }
        return r
    }

    function v(n) {
        for (var e = [], t = 0, r = g(n); t < r.length; t++) {
            var o = r[t];
            e.push(o);
            for (var i = 0, a = v(o); i < a.length; i++) {
                var c = a[i];
                e.push(c)
            }
        }
        return e
    }

    function y(n) {
        if (n) {
            try {
                if (n.top) return n.top
            } catch (n) {}
            if (s(n) === n) return n;
            try {
                if (w(window, n) && window.top) return window.top
            } catch (n) {}
            try {
                if (w(n, window) && window.top) return window.top
            } catch (n) {}
            for (var e = 0, t = v(n); e < t.length; e++) {
                var r = t[e];
                try {
                    if (r.top) return r.top
                } catch (n) {}
                if (s(r) === r) return r
            }
        }
    }

    function b(n) {
        var e = y(n);
        if (!e) throw new Error("Can not determine top window");
        return [].concat(v(e), [e])
    }
    var O = [],
        C = [];

    function N(n, e) {
        void 0 === e && (e = !0);
        try {
            if (n === window) return !1
        } catch (n) {
            return !0
        }
        try {
            if (!n) return !0
        } catch (n) {
            return !0
        }
        try {
            if (n.closed) return !0
        } catch (n) {
            return !n || n.message !== c
        }
        if (e && E(n)) try {
            if (n.mockclosed) return !0
        } catch (n) {}
        try {
            if (!n.parent || !n.top) return !0
        } catch (n) {}
        var t = function(n, e) {
            for (var t = 0; t < n.length; t++) try {
                if (n[t] === e) return t
            } catch (n) {}
            return -1
        }(O, n);
        if (-1 !== t) {
            var r = C[t];
            if (r && function(n) {
                    if (!n.contentWindow) return !0;
                    if (!n.parentNode) return !0;
                    var e = n.ownerDocument;
                    return !(!e || !e.documentElement || e.documentElement.contains(n))
                }(r)) return !0
        }
        return !1
    }

    function T(n) {
        if (function() {
                for (var n = 0; n < O.length; n++) {
                    var e = !1;
                    try {
                        e = O[n].closed
                    } catch (n) {}
                    e && (C.splice(n, 1), O.splice(n, 1))
                }
            }(), n && n.contentWindow) try {
            O.push(n.contentWindow), C.push(n)
        } catch (n) {}
    }

    function R(n) {
        return (n = n || window).navigator.mockUserAgent || n.navigator.userAgent
    }

    function L(n, e) {
        for (var t = g(n), r = 0; r < t.length; r++) {
            var o = t[r];
            try {
                if (E(o) && o.name === e && -1 !== t.indexOf(o)) return o
            } catch (n) {}
        }
        try {
            if (-1 !== t.indexOf(n.frames[e])) return n.frames[e]
        } catch (n) {}
        try {
            if (-1 !== t.indexOf(n[e])) return n[e]
        } catch (n) {}
    }

    function A(n, e) {
        return n === d(e)
    }

    function _(n) {
        return d(n = n || window) || s(n) || void 0
    }

    function S(n, e) {
        var t = _(e);
        if (t) return t === n;
        if (e === n) return !1;
        if (y(e) === e) return !1;
        for (var r = 0, o = g(n); r < o.length; r++)
            if (o[r] === e) return !0;
        return !1
    }

    function P(n, e) {
        for (var t = 0; t < n.length; t++)
            for (var r = n[t], o = 0; o < e.length; o++)
                if (r === e[o]) return !0;
        return !1
    }

    function j(n) {
        void 0 === n && (n = window);
        for (var e = 0, t = n; t;)(t = s(t)) && (e += 1);
        return e
    }

    function I(n, e) {
        return void 0 === e && (e = 1),
            function(n, e) {
                void 0 === e && (e = 1);
                for (var t = n, r = 0; r < e; r++) {
                    if (!t) return;
                    t = s(t)
                }
                return t
            }(n, j(n) - e)
    }

    function x(n, e) {
        var t = y(n) || n,
            r = y(e) || e;
        try {
            if (t && r) return t === r
        } catch (n) {}
        var o = b(n),
            i = b(e);
        if (P(o, i)) return !0;
        var a = d(t),
            c = d(r);
        return a && P(b(a), i) || c && P(b(c), o), !1
    }

    function M(n, e) {
        if ("string" == typeof n) {
            if ("string" == typeof e) return n === o || e === n;
            if (r(e)) return !1;
            if (Array.isArray(e)) return !1
        }
        return r(n) ? r(e) ? n.toString() === e.toString() : !Array.isArray(e) && Boolean(e.match(n)) : !!Array.isArray(n) && (Array.isArray(e) ? JSON.stringify(n) === JSON.stringify(e) : !r(e) && n.some(function(n) {
            return M(n, e)
        }))
    }

    function D(n) {
        return Array.isArray(n) ? "(" + n.join(" | ") + ")" : r(n) ? "RegExp(" + n.toString() : n.toString()
    }

    function k(n) {
        return n.match(/^(https?|mock|file):\/\//) ? n.split("/").slice(0, 3).join("/") : p()
    }

    function F(e, t, r, o) {
        var i;
        return void 0 === r && (r = 1e3), void 0 === o && (o = 1 / 0),
            function n() {
                if (N(e)) return i && clearTimeout(i), t();
                o <= 0 ? clearTimeout(i) : (o -= r, i = setTimeout(n, r))
            }(), {
                cancel: function() {
                    i && clearTimeout(i)
                }
            }
    }

    function H(n) {
        try {
            if (n === window) return !0
        } catch (n) {
            if (n && n.message === c) return !0
        }
        try {
            if ("[object Window]" === Object.prototype.toString.call(n)) return !0
        } catch (n) {
            if (n && n.message === c) return !0
        }
        try {
            if (window.Window && n instanceof window.Window) return !0
        } catch (n) {
            if (n && n.message === c) return !0
        }
        try {
            if (n && n.self === n) return !0
        } catch (n) {
            if (n && n.message === c) return !0
        }
        try {
            if (n && n.parent === n) return !0
        } catch (n) {
            if (n && n.message === c) return !0
        }
        try {
            if (n && n.top === n) return !0
        } catch (n) {
            if (n && n.message === c) return !0
        }
        try {
            n && n.__cross_domain_utils_window_check__
        } catch (n) {
            return !0
        }
        return !1
    }

    function U(n) {
        return "undefined" != typeof window && void 0 !== window.location && p() === n
    }

    function B(n) {
        if (0 !== k(n).indexOf(i.MOCK)) return n;
        throw new Error("Mock urls not supported out of test mode")
    }
    t.d(e, "l", function() {
        return s
    }), t.d(e, "k", function() {
        return d
    }), t.d(e, "g", function() {
        return p
    }), t.d(e, "o", function() {
        return h
    }), t.d(e, "r", function() {
        return E
    }), t.d(e, "c", function() {
        return m
    }), t.d(e, "d", function() {
        return b
    }), t.d(e, "u", function() {
        return N
    }), t.d(e, "v", function() {
        return T
    }), t.d(e, "m", function() {
        return R
    }), t.d(e, "i", function() {
        return L
    }), t.d(e, "q", function() {
        return A
    }), t.d(e, "e", function() {
        return _
    }), t.d(e, "n", function() {
        return S
    }), t.d(e, "f", function() {
        return j
    }), t.d(e, "j", function() {
        return I
    }), t.d(e, "s", function() {
        return x
    }), t.d(e, "w", function() {
        return M
    }), t.d(e, "z", function() {
        return D
    }), t.d(e, "h", function() {
        return k
    }), t.d(e, "y", function() {
        return F
    }), t.d(e, "t", function() {
        return H
    }), t.d(e, "p", function() {
        return U
    }), t.d(e, "x", function() {
        return B
    }), t.d(e, "a", function() {
        return i
    }), t.d(e, "b", function() {
        return a
    })
}, function(n, e, t) {
    "use strict";

    function r() {
        return (r = Object.assign || function(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
            }
            return n
        }).apply(this, arguments)
    }
    t.d(e, "a", function() {
        return r
    })
}, function(n, e, t) {
    "use strict";
    var w = t(12),
        o = t(7);

    function g(n) {
        var e = function(n, e) {
            if ("object" != typeof n || null === n) return n;
            var t = n[Symbol.toPrimitive];
            if (void 0 === t) return String(n);
            var r = t.call(n, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(n);
        return "symbol" == typeof e ? e : String(e)
    }

    function r(h) {
        var E = Object(o.f)(),
            n = Object(o.i)(),
            e = "__destroy_" + n + "_internal__";
        if (window[E]) {
            if (!window[E][e]) throw new Error("Error loading " + E + " version " + n + " - version " + (window[E].version || "(unknown)") + " already loaded on page");
            window[E][e]()
        }
        window[E] = window[E] || {}, window[E].version = n;
        for (var m = [], t = function(n) {
                var e = h[n],
                    t = e.name,
                    r = e.requirer,
                    o = e.setupHandler;
                try {
                    var i = r(),
                        a = i[o],
                        c = i.setup,
                        u = i.destroy,
                        s = Object(w.a)(i, [o, "setup", "destroy"].map(g));
                    a ? a() : c && c(), u && m.push(u);
                    for (var d = 0, l = Object.keys(s); d < l.length; d++) {
                        var f = l[d],
                            p = s[f];
                        p && p.__get__ && (p = p.__get__()), p && (window[E][f] = p)
                    }
                } catch (n) {
                    return setTimeout(function() {
                        throw new Error("Bootstrap Error for " + t + ":\n\n" + n.message + "\n\n" + n.stack)
                    }, 1), "continue"
                }
            }, r = 0; r < h.length; r++) t(r);
        Object.defineProperty(window[E], e, {
            enumerable: !1,
            value: function() {
                m.forEach(function(n) {
                    return n()
                }), delete window[E]
            }
        })
    }
    var u = t(10),
        s = t(8),
        d = t(6),
        l = t(0);

    function i() {
        return Object(l.h)(JSON.stringify({
            url: Object(d.j)(),
            stageHost: Object(d.k)(),
            apiStageHost: Object(d.a)()
        }))
    }
    var f = t(4),
        p = (t(2), t(1));

    function h(t) {
        return Object(l.A)(h, function() {
            Object(s.a)().info("rest_api_create_access_token");
            var n = Object(l.h)(t + ":");
            return Object(l.Z)({
                method: "post",
                url: Object(u.a)(),
                headers: {
                    Authorization: "Basic " + n
                },
                data: {
                    grant_type: "client_credentials"
                }
            }).then(function(n) {
                var e = n.body;
                if (e && "invalid_client" === e.error) throw new Error("Auth Api invalid client id: " + t + ":\n\n" + JSON.stringify(e, null, 4));
                if (!e || !e.access_token) throw new Error("Auth Api response error:\n\n" + JSON.stringify(e, null, 4));
                return e.access_token
            })
        }, [t])
    }

    function a(n, t, e) {
        var r = (void 0 === e ? {} : e).fptiState,
            o = void 0 === r ? "" : r;
        if (Object(s.a)().info("rest_api_create_order_token"), !n) throw new Error("Client ID not passed");
        if (!t) throw new Error("Expected order details to be passed");
        var i = Object(d.d)(),
            a = Object(d.e)(),
            c = Object(d.g)();
        if ((t = Object(f.a)({}, t)).intent && t.intent.toLowerCase() !== a) throw new Error("Unexpected intent: " + t.intent + " passed to order.create. Please ensure you are passing /sdk/js?" + p.u.INTENT + "=" + t.intent.toLowerCase() + " in the paypal script tag.");
        return (t = Object(f.a)({}, t, {
            intent: a.toUpperCase()
        })).purchase_units = t.purchase_units.map(function(n) {
            if (n.amount.currency_code && n.amount.currency_code !== i) throw new Error("Unexpected currency: " + n.amount.currency_code + " passed to order.create. Please ensure you are passing /sdk/js?" + p.u.CURRENCY + "=" + n.amount.currency_code + " in the paypal script tag.");
            var e = n.payee;
            if (e) {
                if (!c) throw new Error("Pass " + p.u.MERCHANT_ID + "=XYZ in the paypal script tag. Pass " + p.u.MERCHANT_ID + "=" + p.w + " if you do not have access to the merchant id");
                if (e.merchant_id && c !== p.w && e.merchant_id !== c) throw new Error('Expected payee.merchant_id to be "' + c + '"')
            }
            return c && c !== p.w && (e = Object(f.a)({}, e, {
                merchant_id: c
            })), Object(f.a)({}, n, {
                payee: e,
                amount: Object(f.a)({}, n.amount, {
                    currency_code: i
                })
            })
        }), t.application_context = t.application_context || {}, t.application_context.return_url = "https://www.paypal.com/checkoutnow/error", t.application_context.cancel_url = "https://www.paypal.com/checkoutnow/error", h(n).then(function(n) {
            var e = {
                Authorization: "Bearer " + n,
                "PayPal-Partner-Attribution-Id": Object(d.h)()
            };
            return Object(l.Z)({
                method: "post",
                url: Object(u.b)(),
                headers: e,
                json: t
            })
        }).then(function(n) {
            var e, t = n.body;
            if (!t || !t.id) throw new Error("Order Api response error:\n\n" + JSON.stringify(t, null, 4));
            return Object(s.a)().track(((e = {})[p.m.STATE] = o, e[p.m.TRANSITION] = "process_create_order", e[p.m.CONTEXT_TYPE] = "EC-Token", e[p.m.TOKEN] = t.id, e[p.m.CONTEXT_ID] = t.id, e)), t.id
        })
    }
    var c = t(11);
    t.d(e, "r", function() {
        return r
    }), t.d(e, "j", function() {
        return u.c
    }), t.d(e, "k", function() {
        return u.d
    }), t.d(e, "q", function() {
        return u.f
    }), t.d(e, "h", function() {
        return s.a
    }), t.d(e, "e", function() {
        return o.d
    }), t.d(e, "p", function() {
        return o.i
    }), t.d(e, "b", function() {
        return d.b
    }), t.d(e, "i", function() {
        return d.g
    }), t.d(e, "f", function() {
        return d.e
    }), t.d(e, "c", function() {
        return d.c
    }), t.d(e, "o", function() {
        return d.l
    }), t.d(e, "d", function() {
        return d.d
    }), t.d(e, "g", function() {
        return d.f
    }), t.d(e, "l", function() {
        return i
    }), t.d(e, "a", function() {
        return a
    }), t.d(e, "m", function() {
        return c.a
    }), t.d(e, "n", function() {
        return c.b
    })
}, function(n, e, t) {
    "use strict";
    t.d(e, "i", function() {
        return i
    }), t.d(e, "j", function() {
        return u
    }), t.d(e, "b", function() {
        return p
    }), t.d(e, "g", function() {
        return h
    }), t.d(e, "e", function() {
        return E
    }), t.d(e, "c", function() {
        return m
    }), t.d(e, "l", function() {
        return w
    }), t.d(e, "d", function() {
        return g
    }), t.d(e, "h", function() {
        return v
    }), t.d(e, "k", function() {
        return y
    }), t.d(e, "a", function() {
        return b
    }), t.d(e, "f", function() {
        return O
    });
    var d = t(0),
        l = t(1),
        o = t(7),
        r = {
            sb: "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R"
        };

    function i() {
        return Object(d.A)(i, function() {
            var n = {
                    host: Object(o.e)(),
                    path: Object(o.g)()
                },
                e = n.host,
                t = n.path,
                r = Object(d.w)({
                    host: e,
                    path: t
                });
            if (!r) throw new Error('PayPal Payments SDK script not present on page! Excected to find <script src="https://' + e + t + '">');
            return r
        })
    }

    function a() {
        return Object(d.A)(a, function() {
            for (var n = {}, e = 0, t = i().attributes; e < t.length; e++) {
                var r = t[e];
                0 === r.name.indexOf("data-") && (n[r.name] = r.value)
            }
            return n
        })
    }

    function c(n, e) {
        return a()[n] || e
    }

    function f(n, e) {
        return (t = i(), Object(d.S)(t.src.split("?")[1] || ""))[n] || e;
        var t
    }

    function u() {
        var n = i().getAttribute("src");
        if (!n) throw new Error("Can not find src for sdk script");
        return n
    }

    function s(n, e) {
        return f(n, e ? e.toString() : l.t.FALSE) === l.t.TRUE
    }

    function p() {
        var n = f(l.u.CLIENT_ID);
        if (!n) throw new Error("Expected " + l.u.CLIENT_ID + " parameter in sdk url");
        return r[n] ? r[n] : n
    }

    function h() {
        return f(l.u.MERCHANT_ID)
    }

    function E() {
        return f(l.u.INTENT, l.f)
    }

    function m() {
        return s(l.u.COMMIT, E() === l.q.CAPTURE ? l.h : l.g)
    }

    function w() {
        return s(l.u.VAULT, l.i)
    }

    function g() {
        return f(l.u.CURRENCY, l.e)
    }

    function v() {
        return c(l.v.PARTNER_ATTRIBUTION_ID)
    }

    function y() {
        return c(l.v.STAGE_HOST, Object(o.c)())
    }

    function b() {
        return c(l.v.API_STAGE_HOST, Object(o.b)())
    }

    function O() {
        var n = f(l.u.LOCALE);
        if (n) {
            var e = n.split("_");
            return {
                lang: e[0],
                country: e[1]
            }
        }
        for (var t = 0, r = Object(d.r)(); t < r.length; t++) {
            var o = r[t],
                i = o.country,
                a = o.lang;
            if (l.d.hasOwnProperty(i) && -1 !== l.d[i].indexOf(a)) return {
                country: i,
                lang: a
            }
        }
        for (var c = 0, u = Object(d.r)(); c < u.length; c++) {
            var s = u[c].country;
            if (l.d.hasOwnProperty(s)) return {
                country: s,
                lang: l.d[s][0]
            }
        }
        return {
            lang: l.r.EN,
            country: l.c.US
        }
    }
}, function(n, e, t) {
    "use strict";

    function r() {
        return "www.paypal.com"
    }

    function o() {
        return 80
    }

    function i() {
        return "/sdk/js"
    }

    function a() {
        return "sandbox"
    }

    function c() {
        return "www.paypal.com"
    }

    function u() {
        return "msmaster.qa.paypal.com"
    }

    function s() {
        return "5.0.1"
    }

    function d() {
        return "df41fbb0b4b11"
    }

    function l() {
        return "paypal"
    }
    t.d(e, "e", function() {
        return r
    }), t.d(e, "h", function() {
        return o
    }), t.d(e, "g", function() {
        return i
    }), t.d(e, "d", function() {
        return a
    }), t.d(e, "c", function() {
        return c
    }), t.d(e, "b", function() {
        return u
    }), t.d(e, "i", function() {
        return s
    }), t.d(e, "a", function() {
        return d
    }), t.d(e, "f", function() {
        return l
    }), t(1)
}, function(n, e, t) {
    "use strict";
    var v = t(4),
        y = t(2),
        b = t(0),
        O = {
            DEBUG: "debug",
            INFO: "info",
            WARN: "warn",
            ERROR: "error"
        },
        C = [O.WARN, O.ERROR],
        N = [O.ERROR, O.WARN, O.INFO, O.DEBUG],
        T = 6e4,
        R = O.WARN;

    function L(n) {
        var e = n.url,
            t = n.method,
            r = n.headers,
            o = n.json;
        return Object(b.Z)({
            url: e,
            method: t,
            headers: r,
            json: o
        }).then(b.N)
    }

    function A(n, e) {
        for (var t in e) e.hasOwnProperty(t) && e[t] && (n[t] = e[t])
    }
    var o = t(1),
        r = t(10),
        i = t(7),
        a = t(6),
        c = t(11);

    function u() {
        return Object(b.A)(u, function() {
            return function(n) {
                var i = n.url,
                    u = n.prefix,
                    e = n.logLevel,
                    a = void 0 === e ? R : e,
                    t = n.transport,
                    c = void 0 === t ? L : t,
                    r = n.flushInterval,
                    o = void 0 === r ? T : r,
                    s = [],
                    d = [],
                    l = [],
                    f = [],
                    p = [],
                    h = [];

                function E(n, e, t) {
                    if (Object(b.B)() && window.console && window.console.log) {
                        var r = a;
                        if (window.LOG_LEVEL && -1 !== N.indexOf(window.LOG_LEVEL) && (r = window.LOG_LEVEL), !(N.indexOf(n) > N.indexOf(r))) {
                            var o = [e];
                            o.push(t), (t.error || t.warning) && o.push("\n\n", t.error || t.warning);
                            try {
                                window.console[n] && window.console[n].apply ? window.console[n].apply(window.console, o) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, o)
                            } catch (n) {}
                        }
                    }
                }

                function m() {
                    return y.a.try(function() {
                        if (Object(b.B)() && (s.length || d.length)) {
                            for (var n = {}, e = 0; e < f.length; e++) A(n, (0, f[e])(n));
                            for (var t = {}, r = 0; r < h.length; r++) A(t, (0, h[r])(t));
                            var o = c({
                                method: "POST",
                                url: i,
                                headers: t,
                                json: {
                                    events: s,
                                    meta: n,
                                    tracking: d
                                }
                            });
                            return s = [], d = [], o.then(b.N)
                        }
                    })
                }
                var w = Object(b.V)(m);

                function g(n, e, t) {
                    if (void 0 === t && (t = {}), Object(b.B)()) {
                        u && (e = u + "_" + e);
                        for (var r, o, i, a = Object(v.a)({}, Object(b.P)(t), {
                                timestamp: Date.now().toString()
                            }), c = 0; c < l.length; c++) A(a, (0, l[c])(a));
                        r = n, o = e, i = a, s.push({
                            level: r,
                            event: o,
                            payload: i
                        }), -1 !== C.indexOf(r) && w(), E(n, e, a)
                    }
                }
                return Object(b.B)() && Object(b.ab)(w, o), {
                    debug: function(n, e) {
                        g(O.DEBUG, n, e)
                    },
                    info: function(n, e) {
                        g(O.INFO, n, e)
                    },
                    warn: function(n, e) {
                        g(O.WARN, n, e)
                    },
                    error: function(n, e) {
                        g(O.ERROR, n, e)
                    },
                    track: function(n) {
                        if (void 0 === n && (n = {}), Object(b.B)()) {
                            for (var e = Object(b.P)(n), t = 0; t < p.length; t++) A(e, (0, p[t])(e));
                            E(O.DEBUG, "track", e), d.push(e)
                        }
                    },
                    flush: w,
                    immediateFlush: m,
                    addPayloadBuilder: function(n) {
                        l.push(n)
                    },
                    addMetaBuilder: function(n) {
                        f.push(n)
                    },
                    addTrackingBuilder: function(n) {
                        p.push(n)
                    },
                    addHeaderBuilder: function(n) {
                        h.push(n)
                    },
                    setTransport: function(n) {
                        c = n
                    }
                }
            }({
                url: Object(r.e)()
            })
        })
    }

    function s() {
        var t = u();
        t.addPayloadBuilder(function() {
            return {
                referer: window.location.host,
                uid: Object(c.a)(),
                env: Object(i.d)()
            }
        }), t.addTrackingBuilder(function() {
            var n, e = Object(a.f)(),
                t = e.lang,
                r = e.country;
            return (n = {})[o.m.FEED] = o.l.PAYMENTS_SDK, n[o.m.DATA_SOURCE] = o.k.PAYMENTS_SDK, n[o.m.CLIENT_ID] = Object(a.b)(), n[o.m.SELLER_ID] = Object(a.g)(), n[o.m.SESSION_UID] = Object(c.a)(), n[o.m.REFERER] = window.location.host, n[o.m.LOCALE] = t + "_" + r, n[o.m.INTEGRATION_IDENTIFIER] = Object(a.b)(), n[o.m.PARTNER_ATTRIBUTION_ID] = Object(a.h)(), n[o.m.SDK_NAME] = o.n.PAYMENTS_SDK, n[o.m.SDK_VERSION] = Object(i.i)(), n[o.m.USER_AGENT] = window.navigator && window.navigator.userAgent, n[o.m.USER_ACTION] = Object(a.c)() ? o.o.COMMIT : o.o.CONTINUE, n[o.m.CONTEXT_CORRID] = Object(i.a)(), n
        }), y.a.onPossiblyUnhandledException(function(n) {
            var e;
            t.track(((e = {})[o.m.ERROR_CODE] = "payments_sdk_error", e[o.m.ERROR_DESC] = Object(b.db)(n), e)), t.error("unhandled_error", {
                err: Object(b.cb)(n)
            }), t.flush().catch(b.N)
        }), t.info("setup_" + Object(i.d)())
    }
    t.d(e, "a", function() {
        return u
    }), t.d(e, "b", function() {
        return s
    })
}, function(n, e, t) {
    "use strict";
    var r = {};
    t.r(r), t.d(r, "WeakMap", function() {
        return a
    });
    var o = t(3);

    function u(n, e) {
        for (var t = 0; t < n.length; t++) try {
            if (n[t] === e) return t
        } catch (n) {}
        return -1
    }
    var s = Object.defineProperty,
        i = Date.now() % 1e9,
        a = function() {
            function n() {
                if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, i += 1, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + i, function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var n = new WeakMap,
                                e = {},
                                t = "__testvalue__";
                            return Object.freeze(e), n.set(e, t), n.get(e) === t
                        } catch (n) {
                            return !1
                        }
                    }()) try {
                    this.weakmap = new WeakMap
                } catch (n) {}
                this.keys = [], this.values = []
            }
            var e = n.prototype;
            return e._cleanupClosedWindows = function() {
                for (var n = this.weakmap, e = this.keys, t = 0; t < e.length; t++) {
                    var r = e[t];
                    if (Object(o.t)(r) && Object(o.u)(r)) {
                        if (n) try {
                            n.delete(r)
                        } catch (n) {}
                        e.splice(t, 1), this.values.splice(t, 1), t -= 1
                    }
                }
            }, e.isSafeToReadWrite = function(n) {
                if (Object(o.t)(n)) return !1;
                try {
                    n && n.self, n && n[this.name]
                } catch (n) {
                    return !1
                }
                return !0
            }, e.set = function(n, e) {
                if (!n) throw new Error("WeakMap expected key");
                var t = this.weakmap;
                if (t) try {
                    t.set(n, e)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) {
                    var r = this.name,
                        o = n[r];
                    o && o[0] === n ? o[1] = e : s(n, r, {
                        value: [n, e],
                        writable: !0
                    })
                } else {
                    this._cleanupClosedWindows();
                    var i = this.keys,
                        a = this.values,
                        c = u(i, n); - 1 === c ? (i.push(n), a.push(e)) : a[c] = e
                }
            }, e.get = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    if (e.has(n)) return e.get(n)
                } catch (n) {
                    delete this.weakmap
                }
                if (!this.isSafeToReadWrite(n)) {
                    this._cleanupClosedWindows();
                    var t = u(this.keys, n);
                    if (-1 === t) return;
                    return this.values[t]
                }
                var r = n[this.name];
                if (r && r[0] === n) return r[1]
            }, e.delete = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    e.delete(n)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) {
                    var t = n[this.name];
                    t && t[0] === n && (t[0] = t[1] = void 0)
                } else {
                    this._cleanupClosedWindows();
                    var r = this.keys,
                        o = u(r, n); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
                }
            }, e.has = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    if (e.has(n)) return !0
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) {
                    var t = n[this.name];
                    return !(!t || t[0] !== n)
                }
                return this._cleanupClosedWindows(), -1 !== u(this.keys, n)
            }, e.getOrSet = function(n, e) {
                if (this.has(n)) return this.get(n);
                var t = e();
                return this.set(n, t), t
            }, n
        }();
    t.d(e, "a", function() {
        return a
    })
}, function(n, e, t) {
    "use strict";
    t.d(e, "c", function() {
        return c
    }), t.d(e, "e", function() {
        return s
    }), t.d(e, "a", function() {
        return d
    }), t.d(e, "b", function() {
        return l
    }), t.d(e, "d", function() {
        return f
    }), t.d(e, "f", function() {
        return p
    });
    var r = t(3),
        o = t(7),
        i = t(6),
        a = {
            LOGGER: "/xoplatform/logger/api/logger",
            AUTH: "/v1/oauth2/token",
            ORDER: "/v2/checkout/orders"
        };

    function c() {
        return Object(o.h)(), Object(i.k)(), "https://www.sandbox.paypal.com"
    }

    function u(n) {
        return void 0 === n && (n = ""), "" + (Object(r.p)(c()) ? c() : (Object(i.a)(), Object(i.a)(), "https://cors.api.sandbox.paypal.com")) + n
    }

    function s() {
        return void 0 === (n = a.LOGGER) && (n = ""), "" + c() + n;
        var n
    }

    function d() {
        return u(a.AUTH)
    }

    function l() {
        return u(a.ORDER)
    }

    function f() {
        return /\.paypal\.com(:\d+)?$/
    }

    function p() {
        return Boolean(Object(r.g)().match(/\.paypal\.com(:\d+)?$/))
    }
}, function(n, e, t) {
    "use strict";
    t.d(e, "a", function() {
        return a
    }), t.d(e, "b", function() {
        return c
    });
    var r = t(0),
        o = t(7);

    function i() {
        return Object(r.x)({
            name: Object(o.f)()
        })
    }

    function a() {
        return i().getSessionID()
    }

    function c(n) {
        return i().getState(n)
    }
}, function(n, e, t) {
    "use strict";

    function r(n, e) {
        if (null == n) return {};
        var t, r, o = {},
            i = Object.keys(n);
        for (r = 0; r < i.length; r++) t = i[r], 0 <= e.indexOf(t) || (o[t] = n[t]);
        return o
    }
    t.d(e, "a", function() {
        return r
    })
}, function(n, e, t) {
    "use strict";
    t.r(e);
    var d = t(5),
        A = t(0),
        N = t(4),
        b = t(3),
        O = t(2),
        u = "postrobot_message_response",
        s = "postrobot_message_ack",
        C = {
            METHOD: "postrobot_method",
            HELLO: "postrobot_hello",
            OPEN_TUNNEL: "postrobot_open_tunnel"
        },
        T = "*",
        h = {
            CROSS_DOMAIN_ZALGO_PROMISE: "cross_domain_zalgo_promise",
            CROSS_DOMAIN_FUNCTION: "cross_domain_function",
            CROSS_DOMAIN_WINDOW: "cross_domain_window"
        },
        i = t(9);

    function r(n) {
        return void 0 === n && (n = window), n !== window ? n.__post_robot_10_0_10__ : n.__post_robot_10_0_10__ = n.__post_robot_10_0_10__ || {}
    }
    var a = function() {
        return {}
    };

    function R(n, e) {
        return void 0 === n && (n = "store"), void 0 === e && (e = a), Object(A.t)(r(), n, function() {
            var t = e();
            return {
                has: function(n) {
                    return t.hasOwnProperty(n)
                },
                get: function(n, e) {
                    return t.hasOwnProperty(n) ? t[n] : e
                },
                set: function(n, e) {
                    return t[n] = e
                },
                del: function(n) {
                    delete t[n]
                },
                getOrSet: function(n, e) {
                    return Object(A.t)(t, n, e)
                },
                reset: function() {
                    t = e()
                },
                keys: function() {
                    return Object.keys(t)
                }
            }
        })
    }
    var o = function() {};

    function L() {
        var n = r();
        return n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new o, n.WINDOW_WILDCARD
    }

    function _(o, t) {
        return void 0 === o && (o = "store"), void 0 === t && (t = a), R("windowStore").getOrSet(o, function() {
            var e = new i.a,
                r = function(n) {
                    return e.getOrSet(n, t)
                };
            return {
                has: function(n) {
                    return r(n).hasOwnProperty(o)
                },
                get: function(n, e) {
                    var t = r(n);
                    return t.hasOwnProperty(o) ? t[o] : e
                },
                set: function(n, e) {
                    return r(n)[o] = e
                },
                del: function(n) {
                    delete r(n)[o]
                },
                getOrSet: function(n, e) {
                    var t = r(n);
                    return Object(A.t)(t, o, e)
                }
            }
        })
    }

    function c() {
        return R("instance").getOrSet("instanceID", A.hb)
    }

    function l(n) {
        return _("helloPromises").getOrSet(n, function() {
            return new O.a
        })
    }

    function f(r, n) {
        return (0, n.send)(r, C.HELLO, {
            instanceID: c()
        }, {
            domain: T,
            timeout: -1
        }).then(function(n) {
            var e = n.origin,
                t = n.data.instanceID;
            return l(r).resolve({
                win: r,
                domain: e
            }), {
                win: r,
                domain: e,
                instanceID: t
            }
        })
    }

    function p(n, e) {
        var t = e.send;
        return _("windowInstanceIDPromises").getOrSet(n, function() {
            return f(n, {
                send: t
            }).then(function(n) {
                return n.instanceID
            })
        })
    }

    function E(n) {
        _("knownWindows").set(n, !0)
    }
    var m, w = {
        FUNCTION: "function",
        ERROR: "error",
        PROMISE: "promise",
        REGEX: "regex",
        DATE: "date",
        ARRAY: "array",
        OBJECT: "object",
        STRING: "string",
        NUMBER: "number",
        BOOLEAN: "boolean",
        NULL: "null",
        UNDEFINED: "undefined"
    };

    function g(n) {
        return "object" == typeof n && null !== n && "string" == typeof n.__type__
    }

    function v(n) {
        return void 0 === n ? w.UNDEFINED : null === n ? w.NULL : Array.isArray(n) ? w.ARRAY : "function" == typeof n ? w.FUNCTION : "object" == typeof n ? n instanceof Error ? w.ERROR : "function" == typeof n.then ? w.PROMISE : "[object RegExp]" === Object.prototype.toString.call(n) ? w.REGEX : "[object Date]" === Object.prototype.toString.call(n) ? w.DATE : w.OBJECT : "string" == typeof n ? w.STRING : "number" == typeof n ? w.NUMBER : "boolean" == typeof n ? w.BOOLEAN : void 0
    }

    function y(n, e) {
        return {
            __type__: n,
            __val__: e
        }
    }
    var S, P = ((m = {})[w.FUNCTION] = function() {}, m[w.ERROR] = function(n) {
            var e = n.message,
                t = n.stack,
                r = n.code;
            return y(w.ERROR, {
                message: e,
                stack: t,
                code: r
            })
        }, m[w.PROMISE] = function() {}, m[w.REGEX] = function(n) {
            return y(w.REGEX, n.source)
        }, m[w.DATE] = function(n) {
            return y(w.DATE, n.toJSON())
        }, m[w.ARRAY] = function(n) {
            return n
        }, m[w.OBJECT] = function(n) {
            return n
        }, m[w.STRING] = function(n) {
            return n
        }, m[w.NUMBER] = function(n) {
            return n
        }, m[w.BOOLEAN] = function(n) {
            return n
        }, m[w.NULL] = function(n) {
            return n
        }, m),
        j = {},
        I = ((S = {})[w.FUNCTION] = function() {
            throw new Error("Function serialization is not implemented; nothing to deserialize")
        }, S[w.ERROR] = function(n) {
            var e = n.message,
                t = n.stack,
                r = n.code,
                o = new Error(e);
            return o.code = r, o.stack = t + "\n\n" + o.stack, o
        }, S[w.PROMISE] = function() {
            throw new Error("Promise serialization is not implemented; nothing to deserialize")
        }, S[w.REGEX] = function(n) {
            return new RegExp(n)
        }, S[w.DATE] = function(n) {
            return new Date(n)
        }, S[w.ARRAY] = function(n) {
            return n
        }, S[w.OBJECT] = function(n) {
            return n
        }, S[w.STRING] = function(n) {
            return n
        }, S[w.NUMBER] = function(n) {
            return n
        }, S[w.BOOLEAN] = function(n) {
            return n
        }, S[w.NULL] = function(n) {
            return n
        }, S),
        x = {};

    function M() {
        for (var n = R("idToProxyWindow"), e = 0, t = n.keys(); e < t.length; e++) {
            var r = t[e];
            n.get(r).shouldClean() && n.del(r)
        }
    }
    new O.a(function(n) {
        if (window.document && window.document.body) return n(window.document.body);
        var e = setInterval(function() {
            if (window.document && window.document.body) return clearInterval(e), n(window.document.body)
        }, 10)
    });
    var D = function() {
        function o(n, e, t) {
            var r = t.send;
            this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.serializedWindow = n, this.actualWindowPromise = new O.a, e && this.setWindow(e), this.serializedWindow.getInstanceID = Object(A.M)(this.serializedWindow.getInstanceID), this.send = r
        }
        var n = o.prototype;
        return n.getType = function() {
            return this.serializedWindow.type
        }, n.isPopup = function() {
            return this.getType() === b.b.POPUP
        }, n.isIframe = function() {
            return this.getType() === b.b.IFRAME
        }, n.setLocation = function(n) {
            var e = this;
            return O.a.try(function() {
                if (!e.actualWindow) return e.serializedWindow.setLocation(n);
                e.actualWindow.location = n
            }).then(function() {
                return e
            })
        }, n.setName = function(n) {
            var e = this;
            return O.a.try(function() {
                if (!e.actualWindow) return e.serializedWindow.setName(n);
                if (!Object(b.r)(e.actualWindow)) throw new Error("Can not set name for window on different domain");
                e.actualWindow.name = n, e.actualWindow.frameElement && e.actualWindow.frameElement.setAttribute("name", n)
            }).then(function() {
                return e
            })
        }, n.close = function() {
            var n = this;
            return O.a.try(function() {
                if (!n.actualWindow) return n.serializedWindow.close();
                n.actualWindow.close()
            }).then(function() {
                return n
            })
        }, n.focus = function() {
            var n = this;
            return O.a.try(function() {
                return n.actualWindow && n.actualWindow.focus(), n.serializedWindow.focus()
            }).then(function() {
                return n
            })
        }, n.isClosed = function() {
            var n = this;
            return O.a.try(function() {
                return n.actualWindow ? Object(b.u)(n.actualWindow) : n.serializedWindow.isClosed()
            })
        }, n.getWindow = function() {
            return this.actualWindow
        }, n.setWindow = function(n) {
            this.actualWindow = n, this.actualWindowPromise.resolve(n)
        }, n.awaitWindow = function() {
            return this.actualWindowPromise
        }, n.matchWindow = function(t) {
            var r = this;
            return O.a.try(function() {
                return r.actualWindow ? t === r.actualWindow : O.a.all([r.getInstanceID(), p(t, {
                    send: r.send
                })]).then(function(n) {
                    var e = n[0] === n[1];
                    return e && r.setWindow(t), e
                })
            })
        }, n.unwrap = function() {
            return this.actualWindow || this
        }, n.getInstanceID = function() {
            return this.actualWindow ? p(this.actualWindow, {
                send: this.send
            }) : this.serializedWindow.getInstanceID()
        }, n.serialize = function() {
            return this.serializedWindow
        }, n.shouldClean = function() {
            return this.actualWindow && Object(b.u)(this.actualWindow)
        }, o.unwrap = function(n) {
            return o.isProxyWindow(n) ? n.unwrap() : n
        }, o.serialize = function(n, e) {
            var t = e.send;
            return M(), o.toProxyWindow(n, {
                send: t
            }).serialize()
        }, o.deserialize = function(n, e) {
            var t = e.on,
                r = e.send;
            return M(), R("idToProxyWindow").getOrSet(n.id, function() {
                return new o(n, null, {
                    on: t,
                    send: r
                })
            })
        }, o.isProxyWindow = function(n) {
            return Boolean(n && !Object(b.t)(n) && n.isProxyWindow)
        }, o.toProxyWindow = function(e, n) {
            var t = n.send;
            return M(), o.isProxyWindow(e) ? e : _("winToProxyWindow").getOrSet(e, function() {
                var n = Object(A.hb)();
                return R("idToProxyWindow").set(n, new o({
                    id: n,
                    type: Object(b.k)(e) ? b.b.POPUP : b.b.IFRAME,
                    getInstanceID: function() {
                        return p(e, {
                            send: t
                        })
                    },
                    close: function() {
                        return O.a.try(function() {
                            e.close()
                        })
                    },
                    focus: function() {
                        return O.a.try(function() {
                            e.focus()
                        })
                    },
                    isClosed: function() {
                        return O.a.try(function() {
                            return Object(b.u)(e)
                        })
                    },
                    setLocation: function(n) {
                        return O.a.try(function() {
                            if (Object(b.r)(e)) try {
                                if (e.location && "function" == typeof e.location.replace) return void e.location.replace(n)
                            } catch (n) {}
                            e.location = n
                        })
                    },
                    setName: function(n) {
                        return O.a.try(function() {
                            e.name = n
                        })
                    }
                }, e, {
                    send: t
                }))
            })
        }, o
    }();

    function k(n, e, t, r, o) {
        var i = _("methodStore"),
            a = R("proxyWindowMethods");
        D.isProxyWindow(r) ? a.set(n, {
            val: e,
            name: t,
            domain: o,
            source: r
        }) : (a.del(n), i.getOrSet(r, function() {
            return {}
        })[n] = {
            domain: o,
            name: t,
            val: e,
            source: r
        })
    }

    function F(n, e) {
        var t = _("methodStore"),
            r = R("proxyWindowMethods");
        return t.getOrSet(n, function() {
            return {}
        })[e] || r.get(e)
    }

    function H(n, e, t, r, o) {
        var i, a = o.on;
        i = a, R("builtinListeners").getOrSet("functionCalls", function() {
            return i(C.METHOD, {
                domain: T
            }, function(n) {
                var e = n.source,
                    t = n.origin,
                    r = n.data,
                    o = r.id,
                    i = r.name,
                    a = F(e, o);
                if (!a) throw new Error("Could not find method '" + r.name + "' with id: " + r.id + " in " + Object(b.g)(window));
                var c = a.source,
                    u = a.domain,
                    s = a.val;
                return O.a.try(function() {
                    if (!Object(b.w)(u, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(Object(A.J)(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + Object(b.g)(window));
                    if (D.isProxyWindow(c)) return c.matchWindow(e).then(function(n) {
                        if (!n) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + Object(b.g)(window))
                    })
                }).then(function() {
                    return s.apply({
                        source: e,
                        origin: t
                    }, r.args)
                }, function(n) {
                    return O.a.try(function() {
                        if (s.onError) return s.onError(n)
                    }).then(function() {
                        throw n.stack && (n.stack = "Remote call to " + i + "()\n\n" + n.stack), n
                    })
                }).then(function(n) {
                    return {
                        result: n,
                        id: o,
                        name: i
                    }
                })
            })
        });
        var c = t.__id__ || Object(A.hb)();
        n = D.unwrap(n);
        var u = t.__name__ || t.name || r;
        return D.isProxyWindow(n) ? (k(c, t, u, n, e), n.awaitWindow().then(function(n) {
            k(c, t, u, n, e)
        })) : k(c, t, u, n, e), y(h.CROSS_DOMAIN_FUNCTION, {
            id: c,
            name: u
        })
    }

    function U(s, d, n, e) {
        var t, l = e.on,
            f = e.send;
        return function(n, o) {
            void 0 === o && (o = j);
            var e = JSON.stringify(n, function(n) {
                var e = this[n];
                if (g(this)) return e;
                var t = v(e);
                if (!t) return e;
                var r = o[t] || P[t];
                return r ? r(e, n) : e
            });
            return void 0 === e ? w.UNDEFINED : e
        }(n, ((t = {})[w.PROMISE] = function(n, e) {
            return t = s, r = d, o = n, i = e, c = (a = {
                on: l,
                send: f
            }).on, u = a.send, y(h.CROSS_DOMAIN_ZALGO_PROMISE, {
                then: H(t, r, function(n, e) {
                    return o.then(n, e)
                }, i, {
                    on: c,
                    send: u
                })
            });
            var t, r, o, i, a, c, u
        }, t[w.FUNCTION] = function(n, e) {
            return H(s, d, n, e, {
                on: l,
                send: f
            })
        }, t[w.OBJECT] = function(n) {
            return Object(b.t)(n) || D.isProxyWindow(n) ? (e = n, t = f, y(h.CROSS_DOMAIN_WINDOW, D.serialize(e, {
                send: t
            }))) : n;
            var e, t
        }, t))
    }

    function B(a, l, n, e) {
        var t, f = e.on,
            p = e.send;
        return function(n, i) {
            if (void 0 === i && (i = x), n !== w.UNDEFINED) return JSON.parse(n, function(n, e) {
                if (g(this)) return e;
                var t, r;
                if (r = g(e) ? (t = e.__type__, e.__val__) : (t = v(e), e), !t) return r;
                var o = i[t] || I[t];
                return o ? o(r, n) : r
            })
        }(n, ((t = {})[h.CROSS_DOMAIN_ZALGO_PROMISE] = function(n) {
            return e = n.then, new O.a(e);
            var e
        }, t[h.CROSS_DOMAIN_FUNCTION] = function(n) {
            return e = a, c = l, r = {
                on: f,
                send: p
            }, u = (t = n).id, s = t.name, d = r.send, (i = (o = function(i) {
                function a() {
                    var o = arguments;
                    return D.toProxyWindow(e, {
                        send: d
                    }).awaitWindow().then(function(n) {
                        var e = F(n, u);
                        if (e && e.val !== a) return e.val.apply({
                            source: window,
                            origin: Object(b.g)()
                        }, o);
                        var t = {
                                domain: c,
                                fireAndForget: i.fireAndForget
                            },
                            r = Array.prototype.slice.call(o);
                        return d(n, C.METHOD, {
                            id: u,
                            name: s,
                            args: r
                        }, t).then(function(n) {
                            if (!i.fireAndForget) return n.data.result
                        })
                    }).catch(function(n) {
                        throw n
                    })
                }
                return void 0 === i && (i = {}), a.__name__ = s, a.__origin__ = c, a.__source__ = e, a.__id__ = u, a.origin = c, a
            })()).fireAndForget = o({
                fireAndForget: !0
            }), i;
            var e, c, t, r, u, s, d, o, i
        }, t[h.CROSS_DOMAIN_WINDOW] = function(n) {
            return e = n, r = (t = {
                on: f,
                send: p
            }).on, o = t.send, D.deserialize(e, {
                on: r,
                send: o
            });
            var e, t, r, o
        }, t))
    }
    var W = {};

    function Z(n, e, t, r) {
        var o, i = r.on,
            a = r.send;
        if (Object(b.u)(n)) throw new Error("Window is closed");
        for (var c = U(n, e, ((o = {}).__post_robot_10_0_10__ = Object(N.a)({
                id: Object(A.hb)(),
                origin: Object(b.g)(window)
            }, t), o), {
                on: i,
                send: a
            }), u = Object.keys(W), s = [], d = 0; d < u.length; d++) {
            var l = u[d];
            try {
                W[l](n, c, e)
            } catch (n) {
                s.push(n)
            }
        }
        if (s.length === u.length) throw new Error("All post-robot messaging strategies failed:\n\n" + s.map(A.cb).join("\n\n"))
    }
    W.postrobot_post_message = function(e, t, n) {
        (Array.isArray(n) ? n : "string" == typeof n ? [n] : [T]).map(function(n) {
            return 0 === n.indexOf(b.a.FILE) ? T : n
        }).forEach(function(n) {
            e.postMessage(t, n)
        })
    }, W.postrobot_global = function(n, e) {
        if (Object(b.m)(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) {
            if (!Object(b.r)(n)) throw new Error("Post message through global disabled between different domain windows");
            if (!1 !== Object(b.s)(window, n)) throw new Error("Can only use global to communicate between two different windows, not between frames");
            var t = r(n);
            if (!t) throw new Error("Can not find postRobot global on foreign window");
            t.receiveMessage({
                source: window,
                origin: Object(b.g)(),
                data: e
            })
        }
    };
    var z, G = "__domain_regex__";

    function V(n) {
        return R("responseListeners").get(n)
    }

    function K(n) {
        R("responseListeners").del(n)
    }

    function Y(n) {
        return R("erroredResponseListeners").has(n)
    }

    function q(n) {
        var e = n.name,
            t = n.win,
            r = n.domain,
            o = _("requestListeners");
        if (t === T && (t = null), r === T && (r = null), !e) throw new Error("Name required to get request listener");
        for (var i = 0, a = [t, L()]; i < a.length; i++) {
            var c = a[i];
            if (c) {
                var u = o.get(c);
                if (u) {
                    var s = u[e];
                    if (s) {
                        if (r && "string" == typeof r) {
                            if (s[r]) return s[r];
                            if (s[G])
                                for (var d = 0, l = s[G]; d < l.length; d++) {
                                    var f = l[d],
                                        p = f.regex,
                                        h = f.listener;
                                    if (Object(b.w)(p, r)) return h
                                }
                        }
                        if (s[T]) return s[T]
                    }
                }
            }
        }
    }
    var J = ((z = {}).postrobot_message_request = function(r, o, i, n) {
        var a = n.on,
            c = n.send,
            e = q({
                name: i.name,
                win: r,
                domain: o
            });

        function t(n, e, t) {
            void 0 === t && (t = {}), i.fireAndForget || Object(b.u)(r) || Z(r, o, Object(N.a)({
                type: n,
                ack: e,
                hash: i.hash,
                name: i.name
            }, t), {
                on: a,
                send: c
            })
        }
        return i.name === C.METHOD && i.data && "string" == typeof i.data.name ? i.data.name : i.name, O.a.all([t(s), O.a.try(function() {
            if (!e) throw new Error("No handler found for post message: " + i.name + " from " + o + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!Object(b.w)(e.domain, o)) throw new Error("Request origin " + o + " does not match domain " + e.domain.toString());
            var n = i.data;
            return e.handler({
                source: r,
                origin: o,
                data: n
            })
        }).then(function(n) {
            return t(u, "success", {
                data: n
            })
        }, function(n) {
            return t(u, "error", {
                error: n
            })
        })]).then(A.N).catch(function(n) {
            if (e && e.handleError) return e.handleError(n);
            throw n
        })
    }, z[s] = function(n, e, t) {
        if (!Y(t.hash)) {
            var r = V(t.hash);
            if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!Object(b.w)(r.domain, e)) throw new Error("Ack origin " + e + " does not match domain " + r.domain.toString());
            if (n !== r.win) throw new Error("Ack source does not match registered window");
            r.ack = !0
        }
    }, z[u] = function(n, e, t) {
        if (!Y(t.hash)) {
            var r = V(t.hash);
            if (!r) throw new Error("No handler found for post message response for message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!Object(b.w)(r.domain, e)) throw new Error("Response origin " + e + " does not match domain " + Object(b.z)(r.domain));
            if (n !== r.win) throw new Error("Response source does not match registered window");
            K(t.hash), t.name === C.METHOD && t.data && "string" == typeof t.data.name ? t.data.name : t.name, "error" === t.ack ? r.promise.reject(t.error) : "success" === t.ack && r.promise.resolve({
                source: n,
                origin: e,
                data: t.data
            })
        }
    }, z);

    function X(n, e) {
        var t = e.on,
            r = e.send,
            o = R("receivedMessages");
        if (!window || window.closed) throw new Error("Message recieved in closed window");
        try {
            if (!n.source) return
        } catch (n) {
            return
        }
        var i = n.source,
            a = n.origin,
            c = function(n, e, t, r) {
                var o, i = r.on,
                    a = r.send;
                try {
                    o = B(e, t, n, {
                        on: i,
                        send: a
                    })
                } catch (n) {
                    return
                }
                if (o && "object" == typeof o && null !== o && (o = o.__post_robot_10_0_10__) && "object" == typeof o && null !== o && o.type && "string" == typeof o.type && J[o.type]) return o
            }(n.data, i, a, {
                on: t,
                send: r
            });
        c && (E(i), o.has(c.id) || (o.set(c.id, !0), Object(b.u)(i) && !c.fireAndForget || (0 === c.origin.indexOf(b.a.FILE) && (a = c.origin), J[c.type](i, a, c, {
            on: t,
            send: r
        }))))
    }

    function $(n, e, t) {
        if (!n) throw new Error("Expected name");
        if ("function" == typeof e && (t = e, e = {}), !t) throw new Error("Expected handler");
        (e = e || {}).name = n, e.handler = t || e.handler;
        var r = e.window,
            o = e.domain,
            i = function n(e, t) {
                var r = e.name,
                    o = e.win,
                    i = e.domain,
                    a = _("requestListeners");
                if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                if (Array.isArray(o)) {
                    for (var c = [], u = 0, s = o; u < s.length; u++) {
                        var d = s[u];
                        c.push(n({
                            name: r,
                            domain: i,
                            win: d
                        }, t))
                    }
                    return {
                        cancel: function() {
                            for (var n = 0; n < c.length; n++) c[n].cancel()
                        }
                    }
                }
                if (Array.isArray(i)) {
                    for (var l = [], f = 0, p = i; f < p.length; f++) {
                        var h = p[f];
                        l.push(n({
                            name: r,
                            win: o,
                            domain: h
                        }, t))
                    }
                    return {
                        cancel: function() {
                            for (var n = 0; n < l.length; n++) l[n].cancel()
                        }
                    }
                }
                var E = q({
                    name: r,
                    win: o,
                    domain: i
                });
                if (o && o !== T || (o = L()), i = i || T, E) throw o && i ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (o === L() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + r + " for " + (o === L() ? "wildcard" : "specified") + " window") : i ? new Error("Request listener already exists for " + r + " on domain " + i.toString()) : new Error("Request listener already exists for " + r);
                var m, w, g = a.getOrSet(o, function() {
                        return {}
                    }),
                    v = Object(A.t)(g, r, function() {
                        return {}
                    }),
                    y = i.toString();
                return Object(A.J)(i) ? (m = Object(A.t)(v, G, function() {
                    return []
                }), w = {
                    regex: i,
                    listener: t
                }, m.push(w)) : v[y] = t, {
                    cancel: function() {
                        delete v[y], w && (m.splice(m.indexOf(w, 1)), m.length || delete v[G]), Object.keys(v).length || delete g[r], o && !Object.keys(g).length && a.del(o)
                    }
                }
            }({
                name: n,
                win: r,
                domain: o
            }, {
                handler: e.handler,
                handleError: e.errorHandler || function(n) {
                    throw n
                },
                window: r,
                domain: o || T,
                name: n
            });
        return {
            cancel: function() {
                i.cancel()
            }
        }
    }
    var Q, nn, en, tn, rn, on, an, cn, un, sn, dn, ln = function h(E, m, w, n) {
        var g = (n = n || {}).domain || T,
            v = n.timeout || -1,
            r = n.timeout || 5e3,
            y = n.fireAndForget || !1;
        return O.a.try(function() {
            return function(n, e, t) {
                if (!m) throw new Error("Expected name");
                if (t && "string" != typeof t && !Array.isArray(t) && !Object(A.J)(t)) throw new TypeError("Expected domain to be a string, array, or regex");
                if (Object(b.u)(e)) throw new Error("Target window is closed")
            }(0, E, g), o = E, n = g, e = r, t = h, O.a.try(function() {
                return Object(b.n)(window, o) ? function(n, e, t) {
                    void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
                    var r = l(o);
                    return -1 !== e && (r = r.timeout(e, new Error(t + " did not load after " + e + "ms"))), r
                }(0, e) : Object(A.J)(n) ? f(o, {
                    send: t
                }) : {
                    domain: n
                }
            }).then(function(n) {
                return n.domain
            });
            var o, n, e, t
        }).then(function(n) {
            if (!Object(b.w)(g, n)) throw new Error("Domain " + Object(A.bb)(g) + " does not match " + Object(A.bb)(n));
            g = n;
            var e, t, r, o = m === C.METHOD && w && "string" == typeof w.name ? w.name + "()" : m,
                i = new O.a,
                a = m + "_" + Object(A.hb)();
            if (!y) {
                var c = {
                    name: m,
                    win: E,
                    domain: g,
                    promise: i
                };
                t = a, r = c, R("responseListeners").set(t, r);
                var u = _("requestPromises").getOrSet(E, function() {
                    return []
                });
                u.push(i), i.catch(function() {
                    var n;
                    n = a, R("erroredResponseListeners").set(n, !0), K(a)
                });
                var s = (e = E, _("knownWindows").get(e, !1) ? 1e4 : 2e3),
                    d = v,
                    l = s,
                    f = d,
                    p = Object(A.ab)(function() {
                        return Object(b.u)(E) ? i.reject(new Error("Window closed for " + m + " before " + (c.ack ? "response" : "ack"))) : (l = Math.max(l - 500, 0), -1 !== f && (f = Math.max(f - 500, 0)), c.ack || 0 !== l ? 0 === f ? i.reject(new Error("No response for postMessage " + o + " in " + Object(b.g)() + " in " + d + "ms")) : void 0 : i.reject(new Error("No ack for postMessage " + o + " in " + Object(b.g)() + " in " + s + "ms")))
                    }, 500);
                i.finally(function() {
                    p.cancel(), u.splice(u.indexOf(i, 1))
                }).catch(A.N)
            }
            return Z(E, g, {
                type: "postrobot_message_request",
                hash: a,
                name: m,
                data: w,
                fireAndForget: y
            }, {
                on: $,
                send: h
            }), y ? i.resolve() : i
        })
    };

    function fn(n, e, t) {
        return U(n, e, t, {
            on: $,
            send: ln
        })
    }

    function pn(n, e, t) {
        return B(n, e, t, {
            on: $,
            send: ln
        })
    }

    function hn(n) {
        return D.toProxyWindow(n, {
            send: ln
        })
    }

    function En(n) {
        for (var e = 0, t = _("requestPromises").get(n, []); e < t.length; e++) t[e].reject(new Error("Window cleaned up before response")).catch(A.N)
    }

    function mn(n) {
        if (void 0 === n && (n = window), !Object(b.r)(n)) throw new Error("Can not get global for window on different domain");
        return n.__zoid_9_0_14__ || (n.__zoid_9_0_14__ = {}), n.__zoid_9_0_14__
    }

    function wn(r) {
        return {
            resize: function(n) {
                var e = n.width,
                    t = n.height;
                "number" == typeof e && (r.style.width = Object(A.gb)(e)), "number" == typeof t && (r.style.height = Object(A.gb)(t))
            },
            getElement: function() {
                var n = this;
                return O.a.try(function() {
                    if (n.source && n.source !== window) throw new Error("Can not call getElement from a remote window");
                    return r
                })
            }
        }
    }
    r().initialized || (r().initialized = !0, en = (nn = {
        on: $,
        send: ln
    }).on, tn = nn.send, (rn = r()).receiveMessage = rn.receiveMessage || function(n) {
        return X(n, {
            on: en,
            send: tn
        })
    }, sn = (un = {
        on: $,
        send: ln
    }).on, dn = un.send, R().getOrSet("postMessageListener", function() {
        return Object(A.b)(window, "message", function(n) {
            ! function(n, e) {
                var t = e.on,
                    r = e.send;
                try {
                    Object(A.N)(n.source)
                } catch (n) {
                    return
                }
                var o = n.source || n.sourceElement,
                    i = n.origin || n.originalEvent && n.originalEvent.origin,
                    a = n.data;
                if ("null" === i && (i = b.a.FILE + "//"), o) {
                    if (!i) throw new Error("Post message did not have origin domain");
                    X({
                        source: o,
                        origin: i,
                        data: a
                    }, {
                        on: t,
                        send: r
                    })
                }
            }(n, {
                on: sn,
                send: dn
            })
        })
    }), an = (on = {
        on: $,
        send: ln
    }).on, cn = on.send, R("builtinListeners").getOrSet("helloListener", function() {
        var n = an(C.HELLO, {
                domain: T
            }, function(n) {
                var e = n.source,
                    t = n.origin;
                return l(e).resolve({
                    win: e,
                    domain: t
                }), {
                    instanceID: c()
                }
            }),
            e = Object(b.e)();
        return e && f(e, {
            send: cn
        }).catch(A.N), n
    }));
    var gn = "zoid",
        vn = gn + "_delegate",
        yn = gn + "_allow_delegate",
        bn = {
            STRING: "string",
            OBJECT: "object",
            FUNCTION: "function",
            BOOLEAN: "boolean",
            NUMBER: "number",
            ARRAY: "array"
        },
        On = b.b,
        Cn = {
            RENDER: "zoid-render",
            RENDERED: "zoid-rendered",
            DISPLAY: "zoid-display",
            ERROR: "zoid-error",
            CLOSE: "zoid-close",
            PROPS: "zoid-props"
        };

    function Nn(n, e, t, r, o) {
        var i = n.getPropDefinition(t);
        return i && "function" == typeof i.childDecorate ? i.childDecorate(Object(N.a)({
            value: r
        }, o)) : r
    }

    function Tn(o) {
        return Object(A.A)(Tn, function() {
            if (!o) throw new Error("No window name");
            var n = o.split("__"),
                e = n[1],
                t = n[2],
                r = n[3];
            if (e !== gn) throw new Error("Window not rendered by zoid - got " + e);
            if (!t) throw new Error("Expected component name");
            if (!r) throw new Error("Expected encoded payload");
            try {
                return JSON.parse(Object(A.g)(r))
            } catch (n) {
                throw new Error("Can not decode window name payload: " + r + ": " + Object(A.cb)(n))
            }
        }, [o])
    }

    function Rn() {
        try {
            return Tn(window.name)
        } catch (n) {}
    }
    var Ln = function() {
            function n(c) {
                var u = this;
                this.component = void 0, this.props = void 0, this.context = void 0, this.parent = void 0, this.parentComponentWindow = void 0, this.onPropHandlers = void 0, this.autoResize = void 0, O.a.try(function() {
                    u.component = c, u.onPropHandlers = [];
                    var n = Rn();
                    if (!n) throw new Error("No child payload found");
                    if ("9_0_14" !== n.version) throw new Error("Parent window has zoid version " + n.version + ", child window has version 9_0_14");
                    var e = n.parent,
                        t = n.domain,
                        r = n.exports,
                        o = n.context,
                        i = n.props;
                    u.context = o, u.parentComponentWindow = u.getParentComponentWindow(e), u.parent = pn(u.parentComponentWindow, t, r), u.checkParentDomain(t);
                    var a = u.getPropsByRef(u.parentComponentWindow, t, i);
                    return u.setProps(a, t), E(u.parentComponentWindow), u.watchForClose(), u.parent.init(u.buildExports())
                }).then(function() {
                    return u.watchForResize()
                }).catch(function(n) {
                    u.onError(n)
                })
            }
            var e = n.prototype;
            return e.getHelpers = function() {
                var r = this;
                return {
                    focus: function() {
                        return r.focus()
                    },
                    close: function() {
                        return r.close()
                    },
                    resize: function(n) {
                        var e = n.width,
                            t = n.height;
                        return r.resize({
                            width: e,
                            height: t
                        })
                    },
                    onError: function(n) {
                        return r.onError(n)
                    },
                    onProps: function(n) {
                        return r.onProps(n)
                    },
                    getParent: function() {
                        return r.parentComponentWindow
                    }
                }
            }, e.checkParentDomain = function(n) {
                if (!Object(b.w)(this.component.allowedParentDomains, n)) throw new Error("Can not be rendered by domain: " + n)
            }, e.onProps = function(n) {
                this.onPropHandlers.push(n)
            }, e.getPropsByRef = function(n, e, t) {
                var r, o = t.type,
                    i = t.value,
                    a = t.uid;
                if ("raw" === o) r = i;
                else if ("uid" === o) {
                    if (!Object(b.r)(n)) throw new Error("Parent component window is on a different domain - expected " + Object(b.g)() + " - can not retrieve props");
                    var c = mn(n);
                    r = Object(A.e)("props", c && c.props[a])
                }
                if (!r) throw new Error("Could not find props");
                return pn(n, e, r)
            }, e.getParentComponentWindow = function(n) {
                var e = n.type;
                if ("opener" === e) return Object(A.e)("opener", Object(b.k)(window));
                if ("parent" === e) {
                    var t = n.distance;
                    return Object(A.e)("parent", Object(b.j)(window, t))
                }
                if ("global" === e) {
                    var r = n.uid,
                        o = Object(b.e)(window);
                    if (!o) throw new Error("Can not find ancestor window");
                    for (var i = 0, a = Object(b.d)(o); i < a.length; i++) {
                        var c = a[i];
                        if (Object(b.r)(c)) {
                            var u = mn(c);
                            if (u && u.windows && u.windows[r]) return u.windows[r]
                        }
                    }
                }
                throw new Error("Unable to find " + e + " parent component window")
            }, e.getProps = function() {
                return this.props = this.props || {}, this.props
            }, e.setProps = function(n, e, t) {
                void 0 === t && (t = !1);
                var r = this.getHelpers(),
                    o = this.getProps(),
                    i = function(n, e, t, r, o, i) {
                        void 0 === i && (i = !1);
                        for (var a = {}, c = 0, u = Object.keys(t); c < u.length; c++) {
                            var s = u[c],
                                d = e.getPropDefinition(s);
                            if (!d || !d.sameDomain || r === Object(b.g)(window) && Object(b.r)(n)) {
                                var l = Nn(e, 0, s, t[s], o);
                                a[s] = l, d && d.alias && !a[d.alias] && (a[d.alias] = l)
                            }
                        }
                        if (!i)
                            for (var f = 0, p = e.getPropNames(); f < p.length; f++) {
                                var h = p[f];
                                t.hasOwnProperty(h) || (a[h] = Nn(e, 0, h, t[h], o))
                            }
                        return a
                    }(this.parentComponentWindow, this.component, n, e, r, t);
                Object(A.p)(o, i);
                for (var a = 0, c = this.onPropHandlers; a < c.length; a++) c[a].call(this, o)
            }, e.watchForClose = function() {
                var n = this;
                window.addEventListener("beforeunload", function() {
                    n.parent.checkClose.fireAndForget()
                }), window.addEventListener("unload", function() {
                    n.parent.checkClose.fireAndForget()
                }), Object(b.y)(this.parentComponentWindow, function() {
                    n.destroy()
                })
            }, e.getAutoResize = function() {
                var n = this.autoResize || this.component.autoResize || {},
                    e = n.width,
                    t = void 0 !== e && e,
                    r = n.height,
                    o = void 0 !== r && r,
                    i = n.element,
                    a = void 0 === i ? "body" : i;
                return {
                    width: t,
                    height: o,
                    element: a = Object(A.s)(a)
                }
            }, e.watchForResize = function() {
                var i = this;
                return Object(A.jb)().then(function() {
                    var n = i.getAutoResize(),
                        r = n.width,
                        o = n.height,
                        e = n.element;
                    e && (r || o) && i.context !== On.POPUP && Object(A.Q)(e, function(n) {
                        var e = n.width,
                            t = n.height;
                        i.resize({
                            width: r ? e : void 0,
                            height: o ? t : void 0
                        })
                    }, {
                        width: r,
                        height: o
                    })
                })
            }, e.buildExports = function() {
                var t = this;
                return {
                    updateProps: function(n) {
                        var e = this;
                        return O.a.try(function() {
                            return t.setProps(n, e.__origin__, !0)
                        })
                    },
                    close: function() {
                        return O.a.try(function() {
                            return t.destroy()
                        })
                    }
                }
            }, e.resize = function(n) {
                var e = n.width,
                    t = n.height;
                return this.parent.resize.fireAndForget({
                    width: e,
                    height: t
                })
            }, e.close = function() {
                return this.parent.close()
            }, e.destroy = function() {
                return O.a.try(function() {
                    window.close()
                })
            }, e.focus = function() {
                return O.a.try(function() {
                    window.focus()
                })
            }, e.onError = function(n) {
                var e = this;
                return O.a.try(function() {
                    if (e.parent && e.parent.onError) return e.parent.onError(n);
                    throw n
                })
            }, n
        }(),
        An = {};
    An[On.IFRAME] = {
        openOnClick: !1,
        openFrame: function() {
            return wn(Object(A.z)({
                attributes: Object(N.a)({
                    title: this.component.name
                }, this.component.attributes.iframe)
            }))
        },
        open: function(n) {
            var r = this;
            if (!n) throw new Error("Expected proxy frame to be passed");
            return n.getElement().then(function(t) {
                return Object(A.f)(t).then(function(n) {
                    var e = Object(A.kb)(t, function() {
                        return r.close()
                    });
                    return r.clean.register(function() {
                        return e.cancel()
                    }), r.clean.register(function() {
                        return Object(A.k)(t)
                    }), r.clean.register(function() {
                        return En(n)
                    }), hn(n)
                })
            })
        },
        openPrerenderFrame: function() {
            return wn(Object(A.z)({
                attributes: Object(N.a)({
                    name: "__zoid_prerender_frame__" + this.component.name + "_" + Object(A.hb)() + "__",
                    title: "prerender__" + this.component.name
                }, this.component.attributes.iframe)
            }))
        },
        openPrerender: function(n, e) {
            var t = this;
            if (!e) throw new Error("Expected proxy frame to be passed");
            return e.getElement().then(function(n) {
                return t.clean.register(function() {
                    return Object(A.k)(n)
                }), Object(A.f)(n).then(function(n) {
                    return Object(b.c)(n)
                }).then(function(n) {
                    return hn(n)
                })
            })
        },
        delegate: ["getProxyContainer", "renderContainer", "openFrame", "openPrerenderFrame", "prerender", "open", "openPrerender"],
        resize: function(n) {
            var e = n.width,
                t = n.height;
            this.proxyContainer && this.proxyContainer.resize({
                width: e,
                height: t
            })
        }
    }, An[On.POPUP] = {
        openOnClick: !0,
        open: function() {
            var o = this;
            return O.a.try(function() {
                var n = o.component.dimensions,
                    e = n.width,
                    t = n.height;
                e = Object(A.O)(e, window.outerWidth), t = Object(A.O)(t, window.outerWidth);
                var r = Object(A.U)("", Object(N.a)({
                    width: e,
                    height: t
                }, o.component.attributes.popup));
                return o.clean.register(function() {
                    r.close(), En(r)
                }), hn(r)
            })
        },
        openPrerender: function(n) {
            return O.a.try(function() {
                return n
            })
        },
        delegate: ["getProxyContainer", "renderContainer", "setProxyWin"]
    };
    var _n = function() {
            function n(n, e) {
                var t = this;
                this.component = void 0, this.driver = void 0, this.clean = void 0, this.event = void 0, this.initPromise = void 0, this.handledErrors = void 0, this.props = void 0, this.state = void 0, this.child = void 0, this.proxyWin = void 0, this.proxyContainer = void 0, this.initPromise = new O.a, this.handledErrors = [], this.props = {}, this.clean = Object(A.i)(this), this.state = {}, this.component = n, this.setupEvents(e.onError), this.setProps(e), this.component.registerActiveComponent(this), this.clean.register(function() {
                    return t.component.destroyActiveComponent(t)
                }), this.watchForUnload()
            }
            var e = n.prototype;
            return e.setupEvents = function(e) {
                var t = this;
                this.event = Object(A.n)(), this.event.on(Cn.RENDER, function() {
                    return t.props.onRender()
                }), this.event.on(Cn.DISPLAY, function() {
                    return t.props.onDisplay()
                }), this.event.on(Cn.RENDERED, function() {
                    return t.props.onRendered()
                }), this.event.on(Cn.CLOSE, function() {
                    return t.props.onClose()
                }), this.event.on(Cn.PROPS, function(n) {
                    return t.props.onProps(n)
                }), this.event.on(Cn.ERROR, function(n) {
                    return t.props && t.props.onError ? t.props.onError(n) : e ? e(n) : t.initPromise.reject(n).then(function() {
                        setTimeout(function() {
                            throw n
                        }, 1)
                    })
                })
            }, e.render = function(r, i, a) {
                var c = this;
                return O.a.try(function() {
                    c.component.log("render"), c.driver = An[a];
                    var o = gn + "-" + c.component.tag + "-" + Object(A.hb)(),
                        e = c.getDomain(),
                        t = c.getInitialDomain();
                    c.component.checkAllowRender(r, e, i), r !== window && c.delegate(a, r);
                    var n = {};
                    return n.init = c.initPromise, n.buildUrl = c.buildUrl(), n.onRender = c.event.trigger(Cn.RENDER), n.getProxyContainer = c.getProxyContainer(i), n.openFrame = c.openFrame(), n.openPrerenderFrame = c.openPrerenderFrame(), n.renderContainer = O.a.all([n.getProxyContainer, n.openFrame, n.openPrerenderFrame]).then(function(n) {
                        var e = n[0],
                            t = n[1],
                            r = n[2];
                        return c.renderContainer(e, {
                            context: a,
                            uid: o,
                            proxyFrame: t,
                            proxyPrerenderFrame: r
                        })
                    }), n.open = c.driver.openOnClick ? c.open() : n.openFrame.then(function(n) {
                        return c.open(n)
                    }), n.openPrerender = O.a.all([n.open, n.openPrerenderFrame]).then(function(n) {
                        var e = n[0],
                            t = n[1];
                        return c.openPrerender(e, t)
                    }), n.setState = O.a.all([n.open.then(function(n) {
                        return c.proxyWin = n, c.setProxyWin(n)
                    }), n.renderContainer.then(function(n) {
                        c.proxyContainer = n
                    })]), n.prerender = O.a.all([n.openPrerender, n.setState]).then(function(n) {
                        var e = n[0];
                        return c.prerender(e, {
                            context: a,
                            uid: o
                        })
                    }), n.loadUrl = O.a.all([n.open, n.buildUrl, n.setWindowName, n.prerender]).then(function(n) {
                        var e = n[0],
                            t = n[1];
                        return e.setLocation(t)
                    }), n.buildWindowName = n.open.then(function(n) {
                        return c.buildWindowName({
                            proxyWin: n,
                            initialDomain: t,
                            domain: e,
                            target: r,
                            context: a,
                            uid: o
                        })
                    }), n.setWindowName = O.a.all([n.open, n.buildWindowName]).then(function(n) {
                        var e = n[0],
                            t = n[1];
                        return e.setName(t)
                    }), n.watchForClose = n.open.then(function(n) {
                        return c.watchForClose(n)
                    }), n.onDisplay = n.prerender.then(function() {
                        return c.event.trigger(Cn.DISPLAY)
                    }), n.openBridge = n.open.then(function(n) {
                        return c.openBridge(n, t, a)
                    }), n.runTimeout = n.loadUrl.then(function() {
                        return c.runTimeout()
                    }), n.onRender = n.init.then(function() {
                        return c.event.trigger(Cn.RENDERED)
                    }), O.a.hash(n)
                }).catch(function(n) {
                    return O.a.all([c.onError(n), c.destroy(n)]).then(function() {
                        throw n
                    })
                }).then(A.N)
            }, e.getProxyContainer = function(n) {
                return O.a.try(function() {
                    return Object(A.m)(n)
                }).then(function(n) {
                    return wn(n)
                })
            }, e.buildWindowName = function(n) {
                var e = n.proxyWin,
                    t = n.initialDomain,
                    r = n.domain,
                    o = n.target,
                    i = n.uid,
                    a = n.context,
                    c = this.buildChildPayload({
                        proxyWin: e,
                        initialDomain: t,
                        domain: r,
                        target: o,
                        context: a,
                        uid: i
                    });
                return "__" + gn + "__" + this.component.name + "__" + Object(A.h)(JSON.stringify(c)) + "__"
            }, e.getPropsRef = function(n, e, t, r) {
                var o = fn(n, t, this.getPropsForChild(t)),
                    i = Object(b.r)(e) ? {
                        type: "raw",
                        value: o
                    } : {
                        type: "uid",
                        uid: r
                    };
                if ("uid" === i.type) {
                    var a = mn(window);
                    a.props = a.props || {}, a.props[r] = o, this.clean.register(function() {
                        delete a.props[r]
                    })
                }
                return i
            }, e.buildChildPayload = function(n) {
                var e = void 0 === n ? {} : n,
                    t = e.proxyWin,
                    r = e.initialDomain,
                    o = e.domain,
                    i = e.target,
                    a = void 0 === i ? window : i,
                    c = e.context,
                    u = e.uid;
                return {
                    uid: u,
                    context: c,
                    version: "9_0_14",
                    domain: Object(b.g)(window),
                    tag: this.component.tag,
                    parent: this.getWindowRef(a, r, u, c),
                    props: this.getPropsRef(t, a, o, u),
                    exports: fn(t, o, this.buildParentExports(t))
                }
            }, e.setProxyWin = function(n) {
                var e = this;
                return O.a.try(function() {
                    e.proxyWin = n
                })
            }, e.getHelpers = function() {
                var r = this;
                return {
                    state: this.state,
                    event: this.event,
                    close: function() {
                        return r.close()
                    },
                    focus: function() {
                        return r.focus()
                    },
                    resize: function(n) {
                        var e = n.width,
                            t = n.height;
                        return r.resize({
                            width: e,
                            height: t
                        })
                    },
                    onError: function(n) {
                        return r.onError(n)
                    },
                    updateProps: function(n) {
                        return r.updateProps(n)
                    }
                }
            }, e.setProps = function(n, e) {
                void 0 === e && (e = !1), this.component.validate && this.component.validate({
                    props: n
                });
                var t = this.getHelpers();
                ! function(n, e, t, r, o) {
                    void 0 === o && (o = !1), t = t || {}, Object(A.p)(e, t);
                    for (var i = o ? [] : [].concat(n.getPropNames()), a = 0, c = Object.keys(t); a < c.length; a++) {
                        var u = c[a]; - 1 === i.indexOf(u) && i.push(u)
                    }
                    for (var s = [], d = r.state, l = r.close, f = r.focus, p = r.onError, h = 0; h < i.length; h++) {
                        var E = i[h],
                            m = n.getPropDefinition(E),
                            w = t[E];
                        if (m) {
                            var g = m.alias;
                            if (g && (!Object(A.C)(w) && Object(A.C)(t[g]) && (w = t[g]), s.push(g)), m.value && (w = m.value({
                                    props: e,
                                    state: d,
                                    close: l,
                                    focus: f,
                                    onError: p
                                })), !Object(A.C)(w) && m.default && (w = m.default({
                                    props: e,
                                    state: d,
                                    close: l,
                                    focus: f,
                                    onError: p
                                })), Object(A.C)(w) && ("array" === m.type ? !Array.isArray(w) : typeof w !== m.type)) throw new TypeError("Prop is not of type " + m.type + ": " + E);
                            e[E] = w
                        }
                    }
                    for (var v = 0; v < s.length; v++) delete e[s[v]];
                    for (var y = 0, b = Object.keys(e); y < b.length; y++) {
                        var O = b[y],
                            C = n.getPropDefinition(O),
                            N = e[O];
                        C && (Object(A.C)(N) && C.validate && C.validate({
                            value: N,
                            props: e
                        }), Object(A.C)(N) && C.decorate && (e[O] = C.decorate({
                            value: N,
                            props: e,
                            state: d,
                            close: l,
                            focus: f,
                            onError: p
                        })))
                    }
                    for (var T = 0, R = n.getPropNames(); T < R.length; T++) {
                        var L = R[T];
                        if (!1 !== n.getPropDefinition(L).required && !Object(A.C)(e[L])) throw new Error('Expected prop "' + L + '" to be defined')
                    }
                }(this.component, this.props, n, t, e)
            }, e.buildUrl = function() {
                var n, e, s, t = this;
                return (n = Object(N.a)({}, this.component.props, this.component.builtinProps), e = this.props, s = {}, O.a.all(Object.keys(e).map(function(c) {
                    var u = n[c];
                    if (u) return O.a.resolve().then(function() {
                        var n = e[c];
                        if (n && u.queryParam) return n
                    }).then(function(n) {
                        var e, t, r, o, i;
                        if (null != n) return O.a.all([(r = u, o = c, i = n, O.a.try(function() {
                            return "function" == typeof r.queryParam ? r.queryParam({
                                value: i
                            }) : "string" == typeof r.queryParam ? r.queryParam : o
                        })), (e = u, t = n, O.a.try(function() {
                            return "function" == typeof e.queryValue && Object(A.C)(t) ? e.queryValue({
                                value: t
                            }) : t
                        }))]).then(function(n) {
                            var e, t = n[0],
                                r = n[1];
                            if ("boolean" == typeof r) e = r.toString();
                            else if ("string" == typeof r) e = r.toString();
                            else if ("object" == typeof r && null !== r) {
                                if ("json" === u.serialization) e = JSON.stringify(r);
                                else if ("base64" === u.serialization) e = btoa(JSON.stringify(r));
                                else if ("dotify" === u.serialization || !u.serialization) {
                                    e = Object(A.l)(r, c);
                                    for (var o = 0, i = Object.keys(e); o < i.length; o++) {
                                        var a = i[o];
                                        s[a] = e[a]
                                    }
                                    return
                                }
                            } else "number" == typeof r && (e = r.toString());
                            s[t] = e
                        })
                    })
                })).then(function() {
                    return s
                })).then(function(n) {
                    return Object(A.q)(Object(b.x)(t.component.getUrl(t.props)), {
                        query: n
                    })
                })
            }, e.getDomain = function() {
                return this.component.getDomain(this.props)
            }, e.getInitialDomain = function() {
                return this.component.getInitialDomain(this.props)
            }, e.getPropsForChild = function(n) {
                for (var e = {}, t = 0, r = Object.keys(this.props); t < r.length; t++) {
                    var o = r[t],
                        i = this.component.getPropDefinition(o);
                    i && !1 === i.sendToChild || i && i.sameDomain && !Object(b.w)(n, Object(b.g)(window)) || (e[o] = this.props[o])
                }
                return e
            }, e.updateProps = function(n) {
                var e = this;
                return this.setProps(n, !0), this.initPromise.then(function() {
                    if (e.child) return e.child.updateProps(e.getPropsForChild(e.getDomain()))
                })
            }, e.openFrame = function() {
                var n = this;
                return O.a.try(function() {
                    if (n.driver.openFrame) return n.driver.openFrame.call(n)
                })
            }, e.openPrerenderFrame = function() {
                var n = this;
                return O.a.try(function() {
                    if (n.driver.openPrerenderFrame) return n.driver.openPrerenderFrame.call(n)
                })
            }, e.open = function(e) {
                var t = this;
                return O.a.try(function() {
                    t.component.log("open");
                    var n = t.props.window;
                    return n ? (t.clean.register(function() {
                        return n.close()
                    }), hn(n)) : t.driver.open.call(t, e)
                }).then(function(n) {
                    return t.proxyWin = n
                })
            }, e.openPrerender = function(n, e) {
                var t = this;
                return O.a.try(function() {
                    return t.driver.openPrerender.call(t, n, e)
                })
            }, e.focus = function() {
                var n = this;
                return O.a.try(function() {
                    if (n.proxyWin) return n.proxyWin.focus().then(A.N)
                })
            }, e.delegate = function(n, e) {
                var t = this;
                this.component.log("delegate");
                for (var r = {}, o = 0, i = this.component.getPropNames(); o < i.length; o++) {
                    var a = i[o];
                    this.component.getPropDefinition(a).allowDelegate && (r[a] = this.props[a])
                }
                for (var c = ln(e, vn + "_" + this.component.name, {
                        context: n,
                        props: r,
                        overrides: {
                            event: this.event,
                            close: function() {
                                return t.close()
                            },
                            onError: function(n) {
                                return t.onError(n)
                            }
                        }
                    }).then(function(n) {
                        var e = n.data;
                        return t.clean.register(e.destroy), e.overrides
                    }).catch(function(n) {
                        throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + Object(A.cb)(n))
                    }), u = function(n, e) {
                        var r = e[n];
                        t[r] = function() {
                            var e = this,
                                t = arguments;
                            return c.then(function(n) {
                                return n[r].apply(e, t)
                            })
                        }
                    }, s = 0, d = this.driver.delegate; s < d.length; s++) u(s, d)
            }, e.getWindowRef = function(n, e, t, r) {
                if (e !== Object(b.g)(window)) return r === On.POPUP ? {
                    type: "opener"
                } : {
                    type: "parent",
                    distance: Object(b.f)(window)
                };
                var o = mn(window);
                return o.windows = o.windows || {}, o.windows[t] = window, this.clean.register(function() {
                    delete o.windows[t]
                }), {
                    type: "global",
                    uid: t
                }
            }, e.watchForClose = function(n) {
                var t = this;
                return n.awaitWindow().then(function(n) {
                    var e = Object(b.y)(n, function() {
                        return t.component.log("detect_close_child"), t.close()
                    }, 2e3);
                    t.clean.register(e.cancel)
                })
            }, e.watchForUnload = function() {
                var n = this,
                    e = Object(A.b)(window, "unload", Object(A.R)(function() {
                        n.component.log("navigate_away"), n.destroy(new Error("Window navigated away"))
                    }));
                this.clean.register(e.cancel)
            }, e.runTimeout = function() {
                var e = this;
                return O.a.try(function() {
                    var n = e.props.timeout;
                    if (n) return e.initPromise.timeout(n, new Error("Loading component timed out after " + n + " milliseconds"))
                })
            }, e.initChild = function(n) {
                var e = this;
                return O.a.try(function() {
                    e.clean.set("child", n), e.initPromise.resolve()
                })
            }, e.buildParentExports = function(n) {
                var r = this,
                    e = function(n) {
                        return r.onError(n)
                    },
                    t = function(n) {
                        return r.initChild(n)
                    };
                return t.onError = e, {
                    init: t,
                    close: function() {
                        return r.close()
                    },
                    checkClose: function() {
                        return r.checkClose(n)
                    },
                    resize: function(n) {
                        var e = n.width,
                            t = n.height;
                        return r.resize({
                            width: e,
                            height: t
                        })
                    },
                    onError: e
                }
            }, e.resize = function(n) {
                var e = this,
                    t = n.width,
                    r = n.height;
                return O.a.try(function() {
                    if (e.driver.resize) return e.driver.resize.call(e, {
                        width: t,
                        height: r
                    })
                })
            }, e.checkClose = function(e) {
                var t = this;
                return e.isClosed().then(function(n) {
                    return n ? t.close() : O.a.delay(200).then(function() {
                        return e.isClosed()
                    }).then(function(n) {
                        if (n) return t.close()
                    })
                })
            }, e.close = function() {
                var n = this;
                return O.a.try(function() {
                    return n.component.log("close"), n.event.trigger(Cn.CLOSE)
                }).then(function() {
                    return n.child && n.child.close.fireAndForget().catch(A.N), n.destroy(new Error("Window closed"), !1)
                })
            }, e.prerender = function(l, n) {
                var f = this,
                    p = n.context,
                    h = n.uid;
                return O.a.try(function() {
                    var n = f.component.prerenderTemplate;
                    if (n) {
                        var e = l.getWindow();
                        if (e && Object(b.r)(e) && Object(b.o)(e)) {
                            var t = (e = Object(b.c)(e)).document,
                                r = f.renderTemplate(n, {
                                    context: p,
                                    uid: h,
                                    doc: t
                                });
                            if (r) {
                                if (r.ownerDocument !== t) throw new Error("Expected prerender template to have been created with document from child window");
                                Object(A.lb)(e, r);
                                var o = f.component.autoResize || {},
                                    i = o.width,
                                    a = void 0 !== i && i,
                                    c = o.height,
                                    u = void 0 !== c && c,
                                    s = o.element,
                                    d = void 0 === s ? "body" : s;
                                (d = Object(A.s)(d, t)) && (a || u) && Object(A.Q)(d, function(n) {
                                    var e = n.width,
                                        t = n.height;
                                    f.resize({
                                        width: a ? e : void 0,
                                        height: u ? t : void 0
                                    })
                                }, {
                                    width: a,
                                    height: u,
                                    win: e
                                })
                            }
                        }
                    }
                })
            }, e.renderTemplate = function(n, e) {
                var t = this,
                    r = e.context,
                    o = e.uid,
                    i = e.container,
                    a = e.doc,
                    c = e.frame,
                    u = e.prerenderFrame;
                return n.call(this, {
                    container: i,
                    context: r,
                    uid: o,
                    doc: a,
                    frame: c,
                    prerenderFrame: u,
                    focus: function() {
                        return t.focus()
                    },
                    close: function() {
                        return t.close()
                    },
                    state: this.state,
                    props: this.props,
                    tag: this.component.tag,
                    dimensions: this.component.dimensions,
                    event: this.event
                })
            }, e.renderContainer = function(n, e) {
                var i = this,
                    t = e.proxyFrame,
                    r = e.proxyPrerenderFrame,
                    a = e.context,
                    c = e.uid;
                return O.a.all([n.getElement().then(A.m), t ? t.getElement() : null, r ? r.getElement() : null]).then(function(n) {
                    var e = n[0],
                        t = n[1],
                        r = n[2],
                        o = i.renderTemplate(i.component.containerTemplate, {
                            context: a,
                            uid: c,
                            container: e,
                            frame: t,
                            prerenderFrame: r,
                            doc: document
                        });
                    if (o) return Object(A.d)(e, o), i.clean.register(function() {
                        return Object(A.k)(o)
                    }), i.proxyContainer = wn(o), i.proxyContainer
                })
            }, e.destroy = function(n, e) {
                var t = this;
                return void 0 === e && (e = !0), O.a.try(function() {
                    return n || (e = !1, n = new Error("Component destroyed")), t.component.log("destroy"), t.onError(n, e)
                }).then(function() {
                    return t.clean.all()
                })
            }, e.onError = function(n, e) {
                var t = this;
                return void 0 === e && (e = !0), O.a.try(function() {
                    if (-1 === t.handledErrors.indexOf(n)) return t.handledErrors.push(n), t.initPromise.asyncReject(n), e ? t.event.trigger(Cn.ERROR, n) : void 0
                })
            }, e.openBridge = function(n, e, t) {}, n
        }(),
        Sn = function() {
            function n(n, e, t) {
                var r = this;
                this.component = void 0, this.source = void 0, this.context = void 0, this.driver = void 0, this.props = void 0, this.clean = void 0, this.focus = void 0, this.resize = void 0, this.renderTemplate = void 0, this.close = void 0, this.onError = void 0, this.event = void 0, this.component = n, this.context = t.context, this.driver = An[t.context], this.clean = Object(A.i)(this), this.focus = _n.prototype.focus, this.resize = _n.prototype.resize, this.renderTemplate = _n.prototype.renderTemplate, this.props = {};
                for (var o = 0, i = Object.keys(t.props); o < i.length; o++) {
                    var a = i[o],
                        c = this.component.getPropDefinition(a);
                    c && c.allowDelegate && t.props[a] && (this.props[a] = t.props[a])
                }
                this.close = t.overrides.close, this.onError = t.overrides.onError, this.event = t.overrides.event, this.component.registerActiveComponent(this), this.clean.register(function() {
                    return r.component.destroyActiveComponent(r)
                }), this.watchForSourceClose(e)
            }
            var e = n.prototype;
            return e.getDelegate = function() {
                var n = this;
                return {
                    overrides: this.getOverrides(),
                    destroy: function() {
                        return n.destroy()
                    }
                }
            }, e.watchForSourceClose = function(n) {
                var e = this,
                    t = Object(b.y)(n, function() {
                        return e.destroy()
                    }, 3e3);
                this.clean.register(t.cancel)
            }, e.getOverrides = function() {
                for (var r = {}, o = this, n = function(n, e) {
                        var t = e[n];
                        r[t] = function() {
                            return _n.prototype[t].apply(o, arguments)
                        }, r[t].__name__ = t
                    }, e = 0, t = this.driver.delegate; e < t.length; e++) n(e, t);
                return r
            }, e.destroy = function() {
                return this.clean.all()
            }, n
        }(),
        Pn = {
            register: function(i, n) {
                var a = n.React,
                    c = n.ReactDOM;
                return function(n) {
                    var e, t;

                    function r() {
                        return n.apply(this, arguments) || this
                    }
                    t = n, (e = r).prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t;
                    var o = r.prototype;
                    return o.render = function() {
                        return a.createElement("div", null)
                    }, o.componentDidMount = function() {
                        i.log("instantiate_react_component");
                        var n = c.findDOMNode(this),
                            e = i.init(Object(A.p)({}, this.props));
                        e.render(n, On.IFRAME), this.setState({
                            parent: e
                        })
                    }, o.componentDidUpdate = function() {
                        this.state && this.state.parent && this.state.parent.updateProps(Object(A.p)({}, this.props)).catch(A.N)
                    }, r
                }(a.Component)
            }
        },
        jn = {
            register: function(e, n) {
                return n.component(e.tag, {
                    render: function(n) {
                        return n("div")
                    },
                    inheritAttrs: !1,
                    mounted: function() {
                        var n = this.$el;
                        this.parent = e.init(Object(A.p)({}, this.$attrs)), this.parent.render(n, On.IFRAME)
                    },
                    watch: {
                        $attrs: {
                            handler: function() {
                                this.parent && this.$attrs && this.parent.updateProps(Object(A.p)({}, this.$attrs)).catch(A.N)
                            },
                            deep: !0
                        }
                    }
                })
            }
        },
        In = {
            register: function(o, n) {
                return n.module(o.tag, []).directive(Object(A.j)(o.tag), function() {
                    for (var n = {}, e = 0, t = o.getPropNames(); e < t.length; e++) n[t[e]] = "=";
                    return n.props = "=", {
                        scope: n,
                        restrict: "E",
                        controller: ["$scope", "$element", function(t, n) {
                            o.log("instantiate_angular_component");
                            var e = function() {
                                    return Object(A.Y)(t.props, function(e) {
                                        return "function" == typeof e ? function() {
                                            var n = e.apply(this, arguments);
                                            return function() {
                                                if ("$apply" !== t.$root.$$phase && "$digest" !== t.$root.$$phase) try {
                                                    t.$apply()
                                                } catch (n) {}
                                            }(), n
                                        } : e
                                    })
                                },
                                r = o.init(e());
                            r.render(n[0], On.IFRAME), t.$watch(function() {
                                r.updateProps(e()).catch(A.N)
                            })
                        }]
                    }
                })
            }
        },
        xn = {
            register: function(e, n) {
                var t = n.Component,
                    r = n.NgModule,
                    o = n.ElementRef,
                    i = n.NgZone;
                e.log("initializing angular2 component");
                var a = function(r) {
                        return Object(A.Y)(Object(N.a)({}, r.internalProps, r.props), function(t) {
                            return "function" == typeof t ? function() {
                                var n = this,
                                    e = arguments;
                                return r.zone.run(function() {
                                    return t.apply(n, e)
                                })
                            } : t
                        })
                    },
                    c = t({
                        selector: e.tag,
                        template: "<div></div>",
                        inputs: ["props"]
                    }).Class({
                        constructor: [o, i, function(n, e) {
                            this._props = {}, this.elementRef = n, this.zone = e
                        }],
                        ngOnInit: function() {
                            var n = this.elementRef.nativeElement;
                            this.parent = e.init(a(this)), this.parent.render(n, On.IFRAME)
                        },
                        ngDoCheck: function() {
                            this.parent && ! function(n, e) {
                                var t = {};
                                for (var r in n)
                                    if (n.hasOwnProperty(r) && (t[r] = !0, n[r] !== e[r])) return !1;
                                for (var o in e)
                                    if (!t[o]) return !1;
                                return !0
                            }(this._props, this.props) && (this._props = Object(N.a)({}, this.props), this.parent.updateProps(a(this)))
                        }
                    });
                return r({
                    declarations: [c],
                    exports: [c]
                }).Class({
                    constructor: function() {}
                })
            }
        },
        Mn = function() {
            return A.N
        },
        Dn = function(n) {
            var e = n.value;
            return Object(A.R)(e)
        },
        kn = function() {
            function n(n) {
                this.tag = void 0, this.name = void 0, this.url = void 0, this.domain = void 0, this.bridgeUrl = void 0, this.props = void 0, this.builtinProps = void 0, this.dimensions = void 0, this.autoResize = void 0, this.allowedParentDomains = void 0, this.defaultContext = void 0, this.attributes = void 0, this.containerTemplate = void 0, this.prerenderTemplate = void 0, this.validate = void 0, this.driverCache = void 0, this.xprops = void 0, this.logger = void 0, this.propNames = void 0,
                    function(n) {
                        if (!n) throw new Error("Expected options to be passed");
                        if (!n.tag || !n.tag.match(/^([a-z0-9]+-)+[a-z0-9]+$/)) throw new Error("Invalid options.tag: " + n.tag);
                        if (function(n) {
                                if (n.props && "object" != typeof n.props) throw new Error("Expected options.props to be an object");
                                var e = Object(A.ib)(bn);
                                if (n.props)
                                    for (var t = 0, r = Object.keys(n.props); t < r.length; t++) {
                                        var o = r[t],
                                            i = n.props[o];
                                        if (!i || "object" != typeof i) throw new Error("Expected options.props." + o + " to be an object");
                                        if (!i.type) throw new Error("Expected prop.type");
                                        if (-1 === e.indexOf(i.type)) throw new Error("Expected prop.type to be one of " + e.join(", "));
                                        if (i.required && i.default) throw new Error("Required prop can not have a default value");
                                        if (i.type === bn.FUNCTION && i.queryParam && !i.queryValue) throw new Error("Do not pass queryParam for function prop")
                                    }
                            }(n), n.dimensions) {
                            if (n.dimensions && !Object(A.I)(n.dimensions.width) && !Object(A.H)(n.dimensions.width)) throw new Error("Expected options.dimensions.width to be a px or % string value");
                            if (n.dimensions && !Object(A.I)(n.dimensions.height) && !Object(A.H)(n.dimensions.height)) throw new Error("Expected options.dimensions.height to be a px or % string value")
                        }
                        if (n.defaultContext && n.defaultContext !== On.IFRAME && n.defaultContext !== On.POPUP) throw new Error("Unsupported context type: " + (n.defaultContext || "unknown"));
                        if (!n.url) throw new Error("Must pass url");
                        if ("string" != typeof n.url && "function" != typeof n.url) throw new TypeError("Expected url to be string or function");
                        if (n.prerenderTemplate && "function" != typeof n.prerenderTemplate) throw new Error("Expected options.prerenderTemplate to be a function");
                        if (n.containerTemplate, "function" != typeof n.containerTemplate) throw new Error("Expected options.containerTemplate to be a function")
                    }(n), this.tag = n.tag, this.name = this.tag.replace(/-/g, "_"), this.allowedParentDomains = n.allowedParentDomains || "*";
                var e = mn();
                if (e.components = e.components || {}, e.components[this.tag]) throw new Error("Can not register multiple components with the same tag: " + this.tag);
                this.builtinProps = {
                    window: {
                        type: "object",
                        sendToChild: !1,
                        required: !1,
                        allowDelegate: !0,
                        validate: function(n) {
                            var e = n.value;
                            if (!Object(b.t)(e) && !D.isProxyWindow(e)) throw new Error("Expected Window or ProxyWindow")
                        },
                        decorate: function(n) {
                            return hn(n.value)
                        }
                    },
                    timeout: {
                        type: "number",
                        required: !1,
                        sendToChild: !1
                    },
                    close: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(n) {
                            return n.close
                        }
                    },
                    focus: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(n) {
                            return n.focus
                        }
                    },
                    resize: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(n) {
                            return n.resize
                        }
                    },
                    getParent: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(n) {
                            return n.getParent
                        }
                    },
                    onDisplay: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: Mn,
                        decorate: Dn
                    },
                    onRendered: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        default: Mn,
                        decorate: Dn
                    },
                    onRender: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        default: Mn,
                        decorate: Dn
                    },
                    onClose: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        allowDelegate: !0,
                        default: Mn,
                        decorate: Dn
                    },
                    onError: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        childDecorate: function(n) {
                            return n.onError
                        }
                    },
                    onProps: {
                        type: "function",
                        required: !1,
                        sendToChild: !1,
                        default: Mn,
                        childDecorate: function(n) {
                            return n.onProps
                        }
                    }
                }, this.props = n.props || {};
                var t = n.dimensions || {},
                    r = t.width,
                    o = void 0 === r ? "300px" : r,
                    i = t.height,
                    a = void 0 === i ? "150px" : i;
                this.dimensions = {
                    width: o,
                    height: a
                }, this.url = n.url, this.domain = n.domain, this.bridgeUrl = n.bridgeUrl, this.attributes = n.attributes || {}, this.attributes.iframe = this.attributes.iframe || {}, this.attributes.popup = this.attributes.popup || {}, this.defaultContext = n.defaultContext || On.IFRAME, this.autoResize = n.autoResize, n.containerTemplate && (this.containerTemplate = n.containerTemplate), n.prerenderTemplate && (this.prerenderTemplate = n.prerenderTemplate), this.validate = n.validate, this.logger = n.logger || {
                    debug: A.N,
                    info: A.N,
                    warn: A.N,
                    error: A.N
                }, this.registerChild(), this.listenDelegate(), e.components[this.tag] = this
            }
            var e = n.prototype;
            return e.getPropNames = function() {
                if (this.propNames) return this.propNames;
                for (var n = Object.keys(this.props), e = 0, t = Object.keys(this.builtinProps); e < t.length; e++) {
                    var r = t[e]; - 1 === n.indexOf(r) && n.push(r)
                }
                return this.propNames = n
            }, e.getPropDefinition = function(n) {
                return this.props[n] || this.builtinProps[n]
            }, e.driver = function(n, e) {
                var t = {
                    react: Pn,
                    angular: In,
                    vue: jn,
                    angular2: xn
                };
                if (!t[n]) throw new Error("Could not find driver for framework: " + n);
                return this.driverCache = this.driverCache || {}, this.driverCache[n] || (this.driverCache[n] = t[n].register(this, e)), this.driverCache[n]
            }, e.registerChild = function() {
                if (this.isChild()) {
                    if (window.xprops) throw new Error("Can not register " + this.name + " as child - can not attach multiple components to the same window");
                    var n = new Ln(this);
                    window.xprops = this.xprops = n.getProps()
                }
            }, e.listenDelegate = function() {
                var a = this;
                $(yn + "_" + this.name, function() {
                    return !0
                }), $(vn + "_" + this.name, function(n) {
                    var e = n.source,
                        t = n.data,
                        r = t.context,
                        o = t.props,
                        i = t.overrides;
                    return new Sn(a, e, {
                        context: r,
                        props: o,
                        overrides: i
                    }).getDelegate()
                })
            }, e.canRenderTo = function(n) {
                return ln(n, yn + "_" + this.name).then(function(n) {
                    return n.data
                }).catch(function() {
                    return !1
                })
            }, e.getUrl = function(n) {
                return "function" == typeof this.url ? this.url({
                    props: n
                }) : this.url
            }, e.getInitialDomain = function(n) {
                return this.domain && "string" == typeof this.domain ? this.domain : Object(b.h)(this.getUrl(n))
            }, e.getDomain = function(n) {
                return Object(A.J)(this.domain) ? this.domain : this.getInitialDomain(n)
            }, e.getBridgeUrl = function() {
                if (this.bridgeUrl) return this.bridgeUrl
            }, e.isChild = function() {
                var n = Rn();
                return Boolean(n && n.tag === this.tag)
            }, e.getDefaultContainer = function(n, e) {
                if (e) {
                    if ("string" != typeof e && !Object(A.E)(e)) throw new TypeError("Expected string or element selector to be passed");
                    return e
                }
                if (n === On.POPUP) return "body";
                throw new Error("Expected element to be passed to render iframe")
            }, e.getDefaultContext = function(n, e) {
                if (e.window) return hn(e.window).getType();
                if (n) {
                    if (n !== On.IFRAME && n !== On.POPUP) throw new Error("Unrecognized context: " + n);
                    return n
                }
                return this.defaultContext
            }, e.init = function(r) {
                var o = this,
                    i = new _n(this, r = r || {}),
                    a = function(n, e, t) {
                        return O.a.try(function() {
                            if (!Object(b.t)(n)) throw new Error("Must pass window to renderTo");
                            return t = o.getDefaultContext(t, r), e = o.getDefaultContainer(t, e), i.render(n, e, t)
                        })
                    };
                return Object(N.a)({}, i.getHelpers(), {
                    render: function(n, e) {
                        return a(window, n, e)
                    },
                    renderTo: function(n, e, t) {
                        return a(n, e, t)
                    }
                })
            }, e.checkAllowRender = function(n, e, t) {
                if (n !== window) {
                    if (!Object(b.s)(window, n)) throw new Error("Can only renderTo an adjacent frame");
                    var r = Object(b.g)();
                    if (!Object(b.w)(e, r) && !Object(b.r)(n)) throw new Error("Can not render remotely to " + e.toString() + " - can only render to " + r);
                    if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }")
                }
            }, e.log = function(n, e) {
                this.logger.info(this.name + "_" + n, e)
            }, e.registerActiveComponent = function(n) {
                var e = mn();
                e.activeComponents = e.activeComponents || [], e.activeComponents.push(n)
            }, e.destroyActiveComponent = function(n) {
                var e = mn();
                e.activeComponents = e.activeComponents || [], e.activeComponents.splice(e.activeComponents.indexOf(n), 1)
            }, n
        }();

    function Fn(n) {
        var t = new kn(n),
            e = function(n) {
                return t.init(n)
            };
        return e.driver = function(n, e) {
            return t.driver(n, e)
        }, e.isChild = function() {
            return t.isChild()
        }, e.canRenderTo = function(n) {
            return t.canRenderTo(n)
        }, e.xprops = t.xprops, e
    }

    function Hn() {
        Q && Q.destroyBridges();
        var n = [],
            e = mn();
        for (e.activeComponents = e.activeComponents || []; e.activeComponents.length;) n.push(e.activeComponents[0].destroy(new Error("zoid desroyed all"), !1));
        return O.a.all(n).then(A.N)
    }
    var Un = Hn;
    var Bn = t(1),
        Wn = {
            PAYPAL: "paypal",
            CHECKOUT: "checkout",
            PAY: "pay",
            CREDIT: "credit",
            CARD: "card",
            INSTALLMENT: "installment",
            VENMO: "venmo",
            IDEAL: "ideal",
            SEPA: "sepa",
            BANCONTACT: "bancontact",
            GIROPAY: "giropay",
            SOFORT: "sofort",
            EPS: "eps",
            MYBANK: "mybank",
            P24: "p24",
            ZIMPLER: "zimpler",
            WECHATPAY: "wechatpay"
        },
        Zn = {
            GOLD: "gold",
            BLUE: "blue",
            SILVER: "silver",
            DARKBLUE: "darkblue",
            TRANSPARENT: "transparent"
        },
        zn = {
            TINY: "tiny",
            SMALL: "small",
            MEDIUM: "medium",
            LARGE: "large",
            HUGE: "huge",
            RESPONSIVE: "responsive"
        },
        Gn = {
            PILL: "pill",
            RECT: "rect"
        },
        Vn = {
            HORIZONTAL: "horizontal",
            VERTICAL: "vertical"
        },
        Kn = {
            SINGLE: "single",
            MULTIPLE: "multiple"
        },
        Yn = {
            IFRAME: "iframe"
        },
        qn = {
            BUTTON_SESSION_ID: "button_session_id",
            ORDER_ID: "EC-Token"
        },
        Jn = {
            BUTTON: "smart_button",
            CHECKOUT: "smart_checkout"
        },
        Xn = {
            BUTTON_RENDER: "process_button_render",
            BUTTON_LOAD: "process_button_load",
            BUTTON_CLICK: "process_button_click",
            RECIEVE_ORDER: "process_recieve_order",
            CHECKOUT_INIT: "process_checkout_init",
            CHECKOUT_AUTHORIZE: "process_checkout_authorize",
            CHECKOUT_SHIPPING_CHANGE: "process_checkout_shipping_change",
            CHECKOUT_CANCEL: "process_checkout_cancel",
            CHECKOUT_ERROR: "process_checkout_error",
            EXTERNAL_EXPERIMENT: "process_external_experiment",
            EXTERNAL_EXPERIMENT_COMPLETE: "process_external_experiment_complete"
        },
        $n = {
            BUTTON: "data-button",
            FUNDING_SOURCE: "data-funding-source",
            CARD: "data-card"
        },
        Qn = {
            CONTAINER: "paypal-button-container",
            BUTTON: "paypal-button",
            LABEL: "paypal-button-label",
            COLOR: "paypal-button-color",
            SHAPE: "paypal-button-shape",
            LAYOUT: "paypal-button-layout",
            NUMBER: "paypal-button-number",
            ENV: "paypal-button-env",
            TAGLINE: "paypal-button-tagline",
            TAGLINE_COLOR: "paypal-button-tagline-color",
            TEXT: "paypal-button-text",
            CARD: "paypal-button-card",
            SEPARATOR: "paypal-separator"
        };

    function ne() {
        return window.xprops && window.xprops.sessionID ? window.xprops.sessionID : Object(d.m)()
    }

    function ee() {
        if (window.xprops && window.xprops.buttonSessionID) return window.xprops.buttonSessionID
    }

    function te() {
        if (!Object(d.q)()) throw new Error("Can only determine if iframe rendering is allowed on paypal domain");
        if (!Object(A.eb)()) return !0;
        var n = window.xprops && window.xprops.getParent();
        return !(!n || !Object(b.r)(n))
    }
    var re = {
        ELEMENT: "element",
        TEXT: "text",
        COMPONENT: "component",
        FRAGMENT: "fragment"
    };

    function oe(n, e) {
        for (var t = [], r = 0; r < n.length; r++) {
            var o = n[r].render(e);
            if (o)
                if (Array.isArray(o))
                    for (var i = 0; i < o.length; i++) {
                        var a = o[i];
                        a && t.push(a)
                    } else t.push(o)
        }
        return t
    }
    var ie = function() {
            function n(n, e, t) {
                this.type = re.ELEMENT, this.name = void 0, this.props = void 0, this.children = void 0, this.onRender = void 0, this.name = n, this.props = e, this.children = t;
                var r = e.onRender;
                "function" == typeof r && (this.onRender = r, delete e.onRender)
            }
            var e = n.prototype;
            return e.render = function(n) {
                var e = n(this);
                return this.onRender && this.onRender(e), e
            }, e.renderChildren = function(n) {
                return oe(this.children, n)
            }, n
        }(),
        ae = function() {
            function n(n) {
                this.type = re.FRAGMENT, this.children = void 0, this.children = n
            }
            return n.prototype.render = function(n) {
                return this.children.map(n)
            }, n
        }(),
        ce = function() {
            function n(n) {
                this.type = re.TEXT, this.text = void 0, this.text = n
            }
            return n.prototype.render = function(n) {
                return n(this)
            }, n
        }(),
        ue = function() {
            function n(n, e, t) {
                this.type = re.COMPONENT, this.component = void 0, this.props = void 0, this.children = void 0, this.component = n, this.props = e, this.children = t
            }
            var e = n.prototype;
            return e.renderComponent = function(n) {
                var e, t, r = this.props,
                    o = (e = this.component(r, this.children), 1 === (t = se(Array.isArray(e) ? e : [e])).length ? t[0] : 1 < t.length ? new ae(t) : void 0);
                if (o) return o.render(n)
            }, e.render = function(n) {
                return n(this)
            }, e.renderChildren = function(n) {
                return oe(this.children, n)
            }, n
        }();

    function se(n) {
        for (var e = [], t = 0; t < n.length; t++) {
            var r = n[t];
            if (r)
                if ("string" == typeof r) e.push(new ce(r));
                else if (Array.isArray(r))
                for (var o = 0, i = se(r); o < i.length; o++) {
                    var a = i[o];
                    e.push(a)
                } else {
                    if (!r || r.type !== re.ELEMENT && r.type !== re.TEXT && r.type !== re.COMPONENT) throw new TypeError("Unrecognized node type: " + typeof r);
                    e.push(r)
                }
        }
        return e
    }
    var de, le = function(n, e) {
            for (var t = arguments.length, r = new Array(2 < t ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
            if (e = e || {}, r = se(r), "string" == typeof n) return new ie(n, e, r);
            if ("function" == typeof n) return new ue(n, e, r);
            throw new TypeError("Expected jsx element to be a string or a function")
        },
        fe = function(n, e) {
            if (n && Object.keys(n).length) throw new Error("Do not pass props to Fragment");
            return e
        },
        pe = "0123456789abcdef",
        he = {
            HTML: "html",
            IFRAME: "iframe",
            SCRIPT: "script",
            NODE: "node",
            DEFAULT: "default"
        },
        Ee = {
            ID: "id",
            INNER_HTML: "innerHTML",
            EL: "el"
        },
        me = ((de = {})[he.IFRAME] = function(o, n) {
            var i = n.children[0];
            if (1 !== n.children.length || !i || i.type !== re.ELEMENT || i.name !== he.HTML) throw new Error("Expected only single html element node as child of " + he.IFRAME + " element");
            o.addEventListener("load", function() {
                var n = o.contentWindow;
                if (!n) throw new Error("Expected frame to have contentWindow");
                for (var e = n.document, t = e.documentElement; t.children && t.children.length;) t.removeChild(t.children[0]);
                for (var r = i.render(we({
                        doc: e
                    })); r.children.length;) t.appendChild(r.children[0])
            })
        }, de[he.SCRIPT] = function(n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || t.type !== re.TEXT) throw new Error("Expected only single text node as child of " + he.SCRIPT + " element");
            n.text = t.text
        }, de[he.DEFAULT] = function(n, e, t) {
            for (var r = 0, o = e.renderChildren(t); r < o.length; r++) {
                var i = o[r];
                n.appendChild(i)
            }
        }, de);

    function we(n) {
        void 0 === n && (n = {});
        var e = n.doc,
            i = void 0 === e ? document : e;
        return function n(c) {
            if (c.type === re.COMPONENT) return c.renderComponent(n);
            if (c.type === re.TEXT) return e = c, i.createTextNode(e.text);
            var e, t, r;
            if (c.type !== re.ELEMENT) throw new TypeError("Unhandleable node");
            var o = (t = i, (r = c).props[Ee.EL] ? r.props[Ee.EL] : t.createElement(r.name));
            return function(n, e) {
                    for (var t = c.props, r = 0, o = Object.keys(t); r < o.length; r++) {
                        var i = o[r],
                            a = t[i];
                        if (null != a && i !== Ee.EL && i !== Ee.INNER_HTML)
                            if (i.match(/^on[A-Z][a-z]/) && "function" == typeof a) n.addEventListener(i.slice(2).toLowerCase(), a);
                            else if ("string" == typeof a || "number" == typeof a) n.setAttribute(i, a.toString());
                        else {
                            if ("boolean" != typeof a) throw new TypeError("Can not render prop " + i + " of type " + typeof a);
                            !0 === a && n.setAttribute(i, "")
                        }
                    }
                    n.tagName.toLowerCase() !== he.IFRAME || t.id || n.setAttribute(Ee.ID, "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, function() {
                        return pe.charAt(Math.floor(Math.random() * pe.length))
                    }))
                }(o),
                function(n, e, t, r) {
                    if (e.props.hasOwnProperty(Ee.INNER_HTML)) {
                        if (e.children.length) throw new Error("Expected no children to be passed when " + Ee.INNER_HTML + " prop is set");
                        var o = e.props[Ee.INNER_HTML];
                        if ("string" != typeof o) throw new TypeError(Ee.INNER_HTML + " prop must be string");
                        e.name === he.SCRIPT ? n.text = o : (n.innerHTML = o, function(n, e) {
                            void 0 === e && (e = window.document);
                            for (var t = 0, r = n.querySelectorAll("script"); t < r.length; t++) {
                                var o = r[t],
                                    i = o.parentNode;
                                if (i) {
                                    var a = e.createElement("script");
                                    a.text = o.textContent, i.replaceChild(a, o)
                                }
                            }
                        }(n, t))
                    } else(me[e.name] || me[he.DEFAULT])(n, e, r)
                }(o, c, i, n), o
        }
    }
    var ge = {
        INNER_HTML: "innerHTML"
    };

    function ve(n) {
        return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
    }

    function ye() {
        return function n(e) {
            if (e.type === re.COMPONENT) return [].concat(e.renderComponent(n)).join("");
            if (e.type === re.ELEMENT) {
                var t = (o = e.props, (i = Object.keys(o).filter(function(n) {
                        var e = o[n];
                        return n !== ge.INNER_HTML && !!e && ("string" == typeof e || "number" == typeof e || !0 === e)
                    })).length ? " " + i.map(function(n) {
                        var e = o[n];
                        if (!0 === e) return "" + ve(n);
                        if ("string" != typeof e && "number" != typeof e) throw new TypeError("Unexpected prop type: " + typeof e);
                        return ve(n) + '="' + ve(e.toString()) + '"'
                    }).join(" ") : ""),
                    r = "string" == typeof e.props[ge.INNER_HTML] ? e.props[ge.INNER_HTML] : e.renderChildren(n).join("");
                return "<" + e.name + t + ">" + r + "</" + e.name + ">"
            }
            var o, i;
            if (e.type === re.TEXT) return ve(e.text);
            throw new TypeError("Unhandleable node: " + e.type)
        }
    }
    var be, Oe = t(12),
        Ce = {
            PP: "pp",
            PAYPAL: "paypal",
            VENMO: "venmo",
            CREDIT: "credit",
            IDEAL: "ideal",
            ELV: "elv",
            SEPA: "sepa",
            BANCONTACT: "bancontact",
            GIROPAY: "giropay",
            SOFORT: "sofort",
            EPS: "eps",
            MYBANK: "mybank",
            P24: "p24",
            ZIMPLER: "zimpler",
            WECHATPAY: "wechatpay"
        },
        Ne = {
            BLUE: "blue",
            BLACK: "black",
            WHITE: "white",
            DEFAULT: "default"
        },
        Te = {
            LOGO: "paypal-logo",
            CARD: "paypal-logo-card",
            LOGO_COLOR: "paypal-logo-color"
        };

    function Re(n) {
        var e = n.svg,
            t = Object(Oe.a)(n, ["svg"]);
        if (!e) throw new TypeError("Expected svg prop");
        if ("string" != typeof(e = e.render(ye()))) throw new TypeError("Expected svg prop to be a string or jsx node");
        return le("img", Object(N.a)({
            src: Object(A.fb)(e)
        }, t))
    }

    function Le(n) {
        var e = n.render,
            t = n.name,
            r = n.logoColor;
        return le(Re, {
            svg: e(),
            alt: t,
            class: Te.LOGO + " " + Te.LOGO + "-" + t + " " + (r ? Te.LOGO_COLOR + "-" + r : "")
        })
    }

    function Ae(n) {
        var e = n.render,
            t = n.name;
        return le(Re, {
            svg: e(),
            alt: t,
            class: Te.CARD + " " + Te.CARD + "-" + t
        })
    }

    function _e() {
        return le(Ae, {
            name: Bn.a.AMEX,
            render: function() {
                return le("svg", {
                    width: "40",
                    height: "24",
                    viewBox: "0 0 40 24",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, le("path", {
                    d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
                    fill: "rgb(20, 119, 190)"
                }), le("path", {
                    d: "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
                    fill: "rgb(255, 255, 255)"
                }), le("path", {
                    d: "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
                    fill: "rgb(255, 255, 255)"
                }))
            }
        })
    }

    function Se() {
        return le(Ae, {
            name: Bn.a.MASTERCARD,
            render: function() {
                return le("svg", {
                    width: "40",
                    height: "24",
                    viewBox: "0 0 40 24",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, le("path", {
                    d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                    fill: "rgb(62, 57, 57)"
                }), le("path", {
                    fill: "rgb(255, 95, 0)",
                    d: "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589"
                }), le("path", {
                    d: "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
                    fill: "rgb(235, 0, 27)"
                }), le("path", {
                    d: "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
                    fill: "rgb(247, 158, 27)"
                }), le("path", {
                    d: "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
                    fill: "rgb(255, 255, 255)"
                }))
            }
        })
    }

    function Pe() {
        return le(Ae, {
            name: Bn.a.VISA,
            render: function() {
                return le("svg", {
                    width: "40",
                    height: "24",
                    viewBox: "0 0 40 24",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, le("path", {
                    d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                    fill: "rgb(33, 86, 154)"
                }), le("path", {
                    d: "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
                    fill: "rgb(255, 255, 255)"
                }))
            }
        })
    }({})[Ne.WHITE] = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, {} [Ne.BLACK] = {
        primary: "#d03238",
        secondary: "#b3b1b1"
    };
    var je, Ie, xe = ((be = {})[Ne.BLUE] = {
        primary: "#003087",
        secondary: "#009cde"
    }, be[Ne.WHITE] = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, be[Ne.BLACK] = {
        primary: "#333030",
        secondary: "#636363"
    }, be);

    function Me(n) {
        var e = n.logoColor;
        if (!xe.hasOwnProperty(e)) throw new Error("No " + e + " paypal logo available");
        var t = xe[e],
            r = t.primary,
            o = t.secondary;
        return le(Le, {
            name: Ce.PAYPAL,
            logoColor: e,
            render: function() {
                return le("svg", {
                    width: "100",
                    height: "32",
                    viewBox: "0 0 100 32",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMinYMin meet"
                }, le("path", {
                    fill: r,
                    d: "M 12 4.917 L 4.2 4.917 C 3.7 4.917 3.2 5.317 3.1 5.817 L 0 25.817 C -0.1 26.217 0.2 26.517 0.6 26.517 L 4.3 26.517 C 4.8 26.517 5.3 26.117 5.4 25.617 L 6.2 20.217 C 6.3 19.717 6.7 19.317 7.3 19.317 L 9.8 19.317 C 14.9 19.317 17.9 16.817 18.7 11.917 C 19 9.817 18.7 8.117 17.7 6.917 C 16.6 5.617 14.6 4.917 12 4.917 Z M 12.9 12.217 C 12.5 15.017 10.3 15.017 8.3 15.017 L 7.1 15.017 L 7.9 9.817 C 7.9 9.517 8.2 9.317 8.5 9.317 L 9 9.317 C 10.4 9.317 11.7 9.317 12.4 10.117 C 12.9 10.517 13.1 11.217 12.9 12.217 Z"
                }), le("path", {
                    fill: r,
                    d: "M 35.2 12.117 L 31.5 12.117 C 31.2 12.117 30.9 12.317 30.9 12.617 L 30.7 13.617 L 30.4 13.217 C 29.6 12.017 27.8 11.617 26 11.617 C 21.9 11.617 18.4 14.717 17.7 19.117 C 17.3 21.317 17.8 23.417 19.1 24.817 C 20.2 26.117 21.9 26.717 23.8 26.717 C 27.1 26.717 29 24.617 29 24.617 L 28.8 25.617 C 28.7 26.017 29 26.417 29.4 26.417 L 32.8 26.417 C 33.3 26.417 33.8 26.017 33.9 25.517 L 35.9 12.717 C 36 12.517 35.6 12.117 35.2 12.117 Z M 30.1 19.317 C 29.7 21.417 28.1 22.917 25.9 22.917 C 24.8 22.917 24 22.617 23.4 21.917 C 22.8 21.217 22.6 20.317 22.8 19.317 C 23.1 17.217 24.9 15.717 27 15.717 C 28.1 15.717 28.9 16.117 29.5 16.717 C 30 17.417 30.2 18.317 30.1 19.317 Z"
                }), le("path", {
                    fill: r,
                    d: "M 55.1 12.117 L 51.4 12.117 C 51 12.117 50.7 12.317 50.5 12.617 L 45.3 20.217 L 43.1 12.917 C 43 12.417 42.5 12.117 42.1 12.117 L 38.4 12.117 C 38 12.117 37.6 12.517 37.8 13.017 L 41.9 25.117 L 38 30.517 C 37.7 30.917 38 31.517 38.5 31.517 L 42.2 31.517 C 42.6 31.517 42.9 31.317 43.1 31.017 L 55.6 13.017 C 55.9 12.717 55.6 12.117 55.1 12.117 Z"
                }), le("path", {
                    fill: o,
                    d: "M 67.5 4.917 L 59.7 4.917 C 59.2 4.917 58.7 5.317 58.6 5.817 L 55.5 25.717 C 55.4 26.117 55.7 26.417 56.1 26.417 L 60.1 26.417 C 60.5 26.417 60.8 26.117 60.8 25.817 L 61.7 20.117 C 61.8 19.617 62.2 19.217 62.8 19.217 L 65.3 19.217 C 70.4 19.217 73.4 16.717 74.2 11.817 C 74.5 9.717 74.2 8.017 73.2 6.817 C 72 5.617 70.1 4.917 67.5 4.917 Z M 68.4 12.217 C 68 15.017 65.8 15.017 63.8 15.017 L 62.6 15.017 L 63.4 9.817 C 63.4 9.517 63.7 9.317 64 9.317 L 64.5 9.317 C 65.9 9.317 67.2 9.317 67.9 10.117 C 68.4 10.517 68.5 11.217 68.4 12.217 Z"
                }), le("path", {
                    fill: o,
                    d: "M 90.7 12.117 L 87 12.117 C 86.7 12.117 86.4 12.317 86.4 12.617 L 86.2 13.617 L 85.9 13.217 C 85.1 12.017 83.3 11.617 81.5 11.617 C 77.4 11.617 73.9 14.717 73.2 19.117 C 72.8 21.317 73.3 23.417 74.6 24.817 C 75.7 26.117 77.4 26.717 79.3 26.717 C 82.6 26.717 84.5 24.617 84.5 24.617 L 84.3 25.617 C 84.2 26.017 84.5 26.417 84.9 26.417 L 88.3 26.417 C 88.8 26.417 89.3 26.017 89.4 25.517 L 91.4 12.717 C 91.4 12.517 91.1 12.117 90.7 12.117 Z M 85.5 19.317 C 85.1 21.417 83.5 22.917 81.3 22.917 C 80.2 22.917 79.4 22.617 78.8 21.917 C 78.2 21.217 78 20.317 78.2 19.317 C 78.5 17.217 80.3 15.717 82.4 15.717 C 83.5 15.717 84.3 16.117 84.9 16.717 C 85.5 17.417 85.7 18.317 85.5 19.317 Z"
                }), le("path", {
                    fill: o,
                    d: "M 95.1 5.417 L 91.9 25.717 C 91.8 26.117 92.1 26.417 92.5 26.417 L 95.7 26.417 C 96.2 26.417 96.7 26.017 96.8 25.517 L 100 5.617 C 100.1 5.217 99.8 4.917 99.4 4.917 L 95.8 4.917 C 95.4 4.917 95.2 5.117 95.1 5.417 Z"
                }))
            }
        })
    }

    function De(n) {
        var e = n.logoColor;
        return le(Le, {
            name: Ce.PP,
            logoColor: e,
            render: function() {
                if (e === Ne.BLUE) return le("svg", {
                    width: "24",
                    height: "32",
                    viewBox: "0 0 24 32",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMinYMin meet"
                }, le("path", {
                    fill: "#009cde",
                    d: "M 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.7 C 18.564 3.3 16.411 2.6 13.697 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3.1 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 6.675 28.9 C 6.581 29.3 6.862 29.6 7.236 29.6 L 11.356 29.6 C 11.825 29.6 12.292 29.3 12.386 28.8 L 12.386 28.5 L 13.228 23.3 L 13.228 23.1 C 13.322 22.6 13.79 22.2 14.258 22.2 L 14.821 22.2 C 18.845 22.2 21.935 20.5 22.871 15.5 C 23.339 13.4 23.153 11.7 22.029 10.5 C 21.748 10.1 21.279 9.8 20.905 9.5 L 20.905 9.5"
                }), le("path", {
                    fill: "#012169",
                    d: "M 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.7 C 18.564 3.3 16.411 2.6 13.697 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3.1 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 8.267 18.4 L 8.173 18.7 C 8.267 18.1 8.735 17.7 9.296 17.7 L 11.636 17.7 C 16.224 17.7 19.782 15.7 20.905 10.1 C 20.812 9.8 20.905 9.7 20.905 9.5"
                }), le("path", {
                    fill: "#003087",
                    d: "M 9.485 9.5 C 9.577 9.2 9.765 8.9 10.046 8.7 C 10.232 8.7 10.326 8.6 10.513 8.6 L 16.692 8.6 C 17.442 8.6 18.189 8.7 18.753 8.8 C 18.939 8.8 19.127 8.8 19.314 8.9 C 19.501 9 19.688 9 19.782 9.1 C 19.875 9.1 19.968 9.1 20.063 9.1 C 20.343 9.2 20.624 9.4 20.905 9.5 C 21.185 7.4 20.905 6 19.782 4.6 C 18.658 3.2 16.506 2.6 13.79 2.6 L 5.739 2.6 C 5.271 2.6 4.71 3 4.615 3.6 L 1.339 25.8 C 1.339 26.2 1.62 26.7 2.088 26.7 L 6.956 26.7 L 8.267 18.4 L 9.485 9.5 Z"
                }));
                if (e === Ne.WHITE) return le("svg", {
                    width: "24",
                    height: "32",
                    viewBox: "0 0 24 32",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMinYMin meet"
                }, le("path", {
                    fill: "#ffffff",
                    opacity: "0.7",
                    d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 6.378 28.938 C 6.285 29.238 6.659 29.638 6.94 29.638 L 11.153 29.638 C 11.621 29.638 11.995 29.238 12.089 28.739 L 12.182 28.539 L 12.931 23.341 L 13.025 23.041 C 13.119 22.441 13.493 22.141 13.961 22.141 L 14.616 22.141 C 18.642 22.141 21.731 20.342 22.668 15.443 C 23.042 13.344 22.855 11.545 21.825 10.345 C 21.451 10.046 21.076 9.646 20.702 9.446 L 20.702 9.446"
                }), le("path", {
                    fill: "#ffffff",
                    opacity: "0.7",
                    d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 7.876 18.642 C 8.063 18.043 8.438 17.643 9.093 17.643 L 11.433 17.643 C 16.021 17.643 19.578 15.643 20.608 9.946 C 20.608 9.746 20.608 9.546 20.702 9.446"
                }), le("path", {
                    fill: "#ffffff",
                    d: "M 9.28 9.446 C 9.28 9.146 9.468 8.846 9.842 8.646 C 9.936 8.646 10.123 8.546 10.216 8.546 L 16.489 8.546 C 17.238 8.546 17.893 8.646 18.548 8.746 C 18.736 8.746 18.829 8.746 19.11 8.846 C 19.204 8.946 19.391 8.946 19.578 9.046 C 19.672 9.046 19.672 9.046 19.859 9.146 C 20.14 9.246 20.421 9.346 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.648 C 18.361 3.248 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 3.048 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 9.28 9.446 Z"
                }), le("g", {
                    transform: "matrix(0.497737, 0, 0, 0.52612, 1.10144, 0.638654)",
                    opacity: "0.2"
                }, le("path", {
                    fill: "#231f20",
                    d: "M39.3 16.7c0.9 0.5 1.7 1.1 2.3 1.8 1 1.1 1.6 2.5 1.9 4.1 0.3-3.2-0.2-5.8-1.9-7.8-0.6-0.7-1.3-1.2-2.1-1.7C39.5 14.2 39.5 15.4 39.3 16.7z"
                }), le("path", {
                    fill: "#231f20",
                    d: "M0.4 45.2L6.7 5.6C6.8 4.5 7.8 3.7 8.9 3.7h16c5.5 0 9.8 1.2 12.2 3.9 1.2 1.4 1.9 3 2.2 4.8 0.4-3.6-0.2-6.1-2.2-8.4C34.7 1.2 30.4 0 24.9 0H8.9c-1.1 0-2.1 0.8-2.3 1.9L0 44.1C0 44.5 0.1 44.9 0.4 45.2z"
                }), le("path", {
                    fill: "#231f20",
                    d: "M10.7 49.4l-0.1 0.6c-0.1 0.4 0.1 0.8 0.4 1.1l0.3-1.7H10.7z"
                })));
                if (e === Ne.BLACK) return le("svg", {
                    width: "24",
                    height: "32",
                    viewBox: "0 0 24 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, le("path", {
                    opacity: "0.7",
                    d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 6.378 28.938 C 6.285 29.238 6.659 29.638 6.94 29.638 L 11.153 29.638 C 11.621 29.638 11.995 29.238 12.089 28.739 L 12.182 28.539 L 12.931 23.341 L 13.025 23.041 C 13.119 22.441 13.493 22.141 13.961 22.141 L 14.616 22.141 C 18.642 22.141 21.731 20.342 22.668 15.443 C 23.042 13.344 22.855 11.545 21.825 10.345 C 21.451 10.046 21.076 9.646 20.702 9.446 L 20.702 9.446",
                    fill: "rgb(99, 99, 99)"
                }), le("path", {
                    opacity: "0.7",
                    d: "M 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.548 C 18.361 3.148 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 2.948 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 7.876 18.642 C 8.063 18.043 8.438 17.643 9.093 17.643 L 11.433 17.643 C 16.021 17.643 19.578 15.643 20.608 9.946 C 20.608 9.746 20.608 9.546 20.702 9.446"
                }), le("path", {
                    d: "M 9.28 9.446 C 9.28 9.146 9.468 8.846 9.842 8.646 C 9.936 8.646 10.123 8.546 10.216 8.546 L 16.489 8.546 C 17.238 8.546 17.893 8.646 18.548 8.746 C 18.736 8.746 18.829 8.746 19.11 8.846 C 19.204 8.946 19.391 8.946 19.578 9.046 C 19.672 9.046 19.672 9.046 19.859 9.146 C 20.14 9.246 20.421 9.346 20.702 9.446 C 20.982 7.347 20.702 5.947 19.578 4.648 C 18.361 3.248 16.208 2.548 13.493 2.548 L 5.536 2.548 C 4.974 2.548 4.506 3.048 4.412 3.548 L 1.136 25.74 C 1.042 26.239 1.323 26.639 1.791 26.639 L 6.753 26.639 L 7.97 18.342 L 9.28 9.446 Z",
                    fill: "rgb(51, 48, 48)"
                }), le("g", {
                    transform: "matrix(0.497737, 0, 0, 0.52612, 1.10144, 0.638654)",
                    opacity: "0.2"
                }, le("path", {
                    fill: "#231f20",
                    d: "M39.3 16.7c0.9 0.5 1.7 1.1 2.3 1.8 1 1.1 1.6 2.5 1.9 4.1 0.3-3.2-0.2-5.8-1.9-7.8-0.6-0.7-1.3-1.2-2.1-1.7C39.5 14.2 39.5 15.4 39.3 16.7z"
                }), le("path", {
                    fill: "#231f20",
                    d: "M0.4 45.2L6.7 5.6C6.8 4.5 7.8 3.7 8.9 3.7h16c5.5 0 9.8 1.2 12.2 3.9 1.2 1.4 1.9 3 2.2 4.8 0.4-3.6-0.2-6.1-2.2-8.4C34.7 1.2 30.4 0 24.9 0H8.9c-1.1 0-2.1 0.8-2.3 1.9L0 44.1C0 44.5 0.1 44.9 0.4 45.2z"
                }), le("path", {
                    fill: "#231f20",
                    d: "M10.7 49.4l-0.1 0.6c-0.1 0.4 0.1 0.8 0.4 1.1l0.3-1.7H10.7z"
                })));
                throw new Error("No " + e + " paypal logo available")
            }
        })
    }(je = {})[Ne.DEFAULT] = {
        main: "#005DA0",
        card: "#AEB1BC"
    }, je[Ne.WHITE] = {
        main: "#FFFFFF",
        card: "#FFFFFF"
    }, (Ie = {})[Ne.BLUE] = {
        primary: "#3D93CE"
    }, Ie[Ne.WHITE] = {
        primary: "#ffffff"
    }, {} [Ne.BLACK] = {
        primary: "#1AAD19",
        secondary: "#4D4D4D"
    }, {} [Ne.BLACK] = {
        primary: "#00A599"
    };
    var ke, Fe, He, Ue = {
        CHECKOUT: "/checkoutnow",
        ALTPAY: "/latinumcheckout",
        GUEST: "/webapps/xoonboarding",
        BUTTON: "/smart/buttons",
        CARD: "/webapps/hermes/card-fields"
    };

    function Be() {
        return "" + Object(d.j)() + Ue.CHECKOUT
    }

    function We() {
        return "" + Object(d.j)() + Ue.GUEST
    }
    var Ze = {
            layouts: [Vn.HORIZONTAL, Vn.VERTICAL],
            platforms: [Bn.s.DESKTOP, Bn.s.MOBILE]
        },
        ze = {
            colors: [Zn.GOLD, Zn.BLUE, Zn.SILVER],
            shapes: [Gn.PILL, Gn.RECT],
            logoColors: (ke = {}, ke[Zn.GOLD] = Ne.BLUE, ke[Zn.SILVER] = Ne.BLUE, ke[Zn.BLUE] = Ne.WHITE, ke),
            tagLineColors: (Fe = {}, Fe[Zn.GOLD] = "blue", Fe[Zn.SILVER] = "blue", Fe[Zn.BLUE] = "blue", Fe[Zn.DARKBLUE] = "blue", Fe),
            secondaryColors: (He = {}, He[Zn.GOLD] = Zn.BLUE, He[Zn.SILVER] = Zn.BLUE, He[Zn.BLUE] = Zn.SILVER, He[Zn.DARKBLUE] = Zn.SILVER, He)
        },
        Ge = {
            en: {
                checkout: "{pp} {paypal} Checkout",
                safer_tag: "The safer, easier way to pay",
                pay: "Pay with {paypal}",
                installment: "{pp} {paypal}  Interest free{br}  payments",
                installment_period: "{pp} {paypal}  Pay up to {period}x{br}  without interest",
                dual_tag: "Two easy ways to pay"
            },
            fr: {
                checkout: "{pp} {paypal} Payer",
                safer_tag: "Votre réflexe sécurité pour payer en ligne",
                pay: "Payer avec {paypal}"
            },
            es: {
                checkout: "{pp} {paypal} Pagar",
                safer_tag: "La forma rápida y segura de pagar",
                pay: "Pagar con {paypal}",
                installment: "{pp} {paypal}  Pagos en{br}  mensualidades",
                installment_period: "{pp} {paypal}  Pague hasta{br}  {period}x sin interés"
            },
            zh: {
                checkout: "{pp} {paypal} 結帳",
                safer_tag: "更安全、更便捷的付款方式",
                pay: "用{paypal}付款"
            },
            ar: {
                checkout: "السداد بواسطة {pp} {paypal}",
                safer_tag: "الطريقة الأسهل والأكثر أماناً في الدفع",
                pay: "دفع بواسطة {paypal}"
            },
            de: {
                checkout: "Direkt zu {pp} {paypal}",
                safer_tag: "Überall schnell und sicher bezahlen",
                pay: "Mit {paypal} zahlen"
            },
            nl: {
                checkout: "{pp} {paypal} Betalen",
                safer_tag: "De veiligere en snellere manier om te betalen",
                pay: "Betalen met {paypal}"
            },
            pt: {
                checkout: "{pp} {paypal} Checkout",
                safer_tag: "A maneira fácil e segura de pagar",
                pay: "Pague com {paypal}",
                installment: "{pp} {paypal}  Pagamentos{br}  parcelados",
                installment_period: "{pp} {paypal}  Pague em até{br}  {period}x sem juros"
            },
            cs: {
                checkout: "Zaplatit přes {pp} {paypal}",
                safer_tag: "Jednodušší a bezpečnější způsob placení",
                pay: "Zaplatit přes {logo: paypal}"
            },
            da: {
                checkout: "{pp} {paypal} Betal",
                safer_tag: "Betal nemt og sikkert",
                pay: "Betal med {paypal}"
            },
            ru: {
                checkout: "{pp} {paypal} Оформить покупку",
                safer_tag: "Более безопасный и простой способ оплаты",
                pay: "Оплатить через {paypal}"
            },
            fi: {
                checkout: "{pp} {paypal}-maksu",
                safer_tag: "Turvallisempi ja helpompi maksutapa",
                pay: "{paypal}-maksu"
            },
            el: {
                checkout: "Ολοκλήρωση αγοράς μέσω {pp} {paypal}",
                safer_tag: "Ο ασφαλέστερος και ευκολότερος τρόπος πληρωμής",
                pay: "Πληρωμή μέσω {paypal}"
            },
            hu: {
                checkout: "{pp} {paypal}-fizetés",
                safer_tag: "Biztonságosabb, könnyebb fizetési mód",
                pay: "{paypal}-fizetés"
            },
            id: {
                checkout: "{pp} {paypal} Checkout",
                safer_tag: "Cara yang lebih mudah dan aman untuk membayar",
                pay: "Bayar dengan {paypal}"
            },
            he: {
                checkout: "{pp} {paypal} שלם",
                safer_tag: ".הדרך הקלה והבטוחה יותר לשלם",
                pay: "שלם באמצעות {paypal}‏"
            },
            it: {
                checkout: "{pp} {paypal} Paga adesso",
                safer_tag: "Il modo rapido e sicuro per pagare",
                pay: "Paga con {paypal}"
            },
            ja: {
                checkout: "{pp} {paypal}で支払う",
                safer_tag: "より安全・簡単にお支払い",
                pay: "{paypal}で支払う"
            },
            ko: {
                checkout: "{pp} {paypal} 체크 아웃",
                safer_tag: "더 안전하고 빠른 결제 방법",
                pay: "{paypal}로 지불하기"
            },
            no: {
                checkout: "{pp} {paypal} Betal",
                safer_tag: "En trygg og enkel betalingsmetode",
                pay: "Betal med {paypal}"
            },
            pl: {
                checkout: "{pp} {paypal} Do kasy",
                safer_tag: "Płać wygodnie i bezpiecznie",
                pay: "Zapłać z {paypal}"
            },
            sv: {
                checkout: "{pp} {paypal} Betala",
                safer_tag: "Ett tryggt och smidigt sätt att betala",
                pay: "Betala med {paypal}"
            },
            sk: {
                checkout: "Zaplatiť cez {pp} {paypal}",
                safer_tag: "Jednoduchší a bezpečnejší spôsob platby",
                pay: "Zaplatiť cez {logo: paypal}"
            },
            th: {
                checkout: "{pp} {paypal} ชำระเงิน",
                safer_tag: "วิธีชำระเงินที่ปลอดภัยและง่ายกว่า",
                pay: "ชำระเงินด้วย {paypal}"
            },
            tr: {
                checkout: "{pp} {paypal} ile Satın Alın",
                safer_tag: "Ödeme yapmanın daha güvenli ve kolay yolu",
                pay: "{paypal} ile Öde"
            }
        };

    function Ve(n, e, t) {
        var r, o, i = void 0 === t ? {} : t,
            a = i.logoColor,
            c = i.period,
            u = e.lang;
        return r = Ge[u][n], o = {
            text: function(n) {
                return le("span", {
                    class: Qn.TEXT
                }, n)
            },
            pp: function() {
                return le(De, {
                    logoColor: a
                })
            },
            paypal: function() {
                return le(Me, {
                    logoColor: a
                })
            },
            br: function() {
                return le("br", null)
            },
            period: function() {
                return c ? c.toString() : null
            }
        }, Object(A.X)(r, /(\{[a-z]+\})|([^{}]+)/g).map(function(n) {
            var e = n.match(/^{([a-z]+)}$/);
            return e ? o[e[1]]() : o.text ? o.text(n) : n
        }).filter(Boolean)
    }

    function Ke(n) {
        return Ve("checkout", n.locale, {
            logoColor: n.logoColor
        })
    }

    function Ye(n) {
        return Ve("pay", n.locale, {
            logoColor: n.logoColor
        })
    }

    function qe(n) {
        var e = n.locale,
            t = n.logoColor,
            r = n.period;
        return Ve(r ? "installment_period" : "installment", e, {
            logoColor: t,
            period: r
        })
    }

    function Je(n) {
        return Ve("safer_tag", n.locale)
    }

    function Xe(n) {
        var e = n.locale,
            t = e.lang;
        return Ge[t].dual_tag ? Ve("dual_tag", e) : Ve("safer_tag", e)
    }
    var $e = [Bn.a.VISA, Bn.a.MASTERCARD, Bn.a.AMEX, Bn.a.DISCOVER, Bn.a.HIPER, Bn.a.ELO, Bn.a.JCB],
        Qe = [Bn.p.PAYPAL, Bn.p.VENMO, Bn.p.CREDIT, Bn.p.IDEAL, Bn.p.SEPA, Bn.p.BANCONTACT, Bn.p.GIROPAY, Bn.p.EPS, Bn.p.SOFORT, Bn.p.MYBANK, Bn.p.P24, Bn.p.ZIMPLER, Bn.p.WECHATPAY, Bn.p.CARD];

    function nt() {
        return Object(A.A)(nt, function() {
            var n, e, t, r, o, c, u, i, a;
            return (n = {})[Bn.p.PAYPAL] = Object(N.a)({}, Ze, {
                url: Be,
                defaultLabel: Wn.PAYPAL,
                labels: (i = {}, i[Wn.PAYPAL] = Object(N.a)({}, ze, {
                    defaultColor: Zn.GOLD,
                    Label: function(n) {
                        var e = n.logoColor;
                        return le(fe, null, le(De, {
                            logoColor: e
                        }), " ", le(Me, {
                            logoColor: e
                        }))
                    },
                    Tag: function(n) {
                        var e = n.multiple,
                            t = n.locale;
                        return le(e ? Xe : Je, {
                            locale: t
                        })
                    },
                    allowPrimary: !0
                }), i[Wn.CHECKOUT] = Object(N.a)({}, ze, {
                    defaultColor: Zn.GOLD,
                    Label: function(n) {
                        var e = n.locale,
                            t = n.logoColor;
                        return le(Ke, {
                            locale: e,
                            logoColor: t
                        })
                    },
                    Tag: function(n) {
                        var e = n.multiple,
                            t = n.locale;
                        return le(e ? Xe : Je, {
                            locale: t
                        })
                    },
                    allowPrimary: !0
                }), i[Wn.PAY] = Object(N.a)({}, ze, {
                    defaultColor: Zn.GOLD,
                    Label: function(n) {
                        var e = n.locale,
                            t = n.logoColor;
                        return le(Ye, {
                            locale: e,
                            logoColor: t
                        })
                    },
                    Tag: function(n) {
                        var e = n.multiple,
                            t = n.locale;
                        return le(e ? Xe : Je, {
                            locale: t
                        })
                    },
                    allowPrimary: !0
                }), i[Wn.INSTALLMENT] = Object(N.a)({}, ze, {
                    defaultColor: Zn.GOLD,
                    Label: function(n) {
                        var e = n.locale,
                            t = n.logoColor,
                            r = n.period;
                        return le(qe, {
                            locale: e,
                            logoColor: t,
                            period: r
                        })
                    },
                    Tag: function(n) {
                        var e = n.multiple,
                            t = n.locale;
                        return le(e ? Xe : Je, {
                            locale: t
                        })
                    },
                    allowPrimary: !0
                }), i)
            }), n[Bn.p.VENMO] = null, n[Bn.p.CREDIT] = null, n[Bn.p.CARD] = ((a = {})[Bn.a.VISA] = {
                Logo: Pe
            }, a[Bn.a.AMEX] = {
                Logo: _e
            }, a[Bn.a.MASTERCARD] = {
                Logo: Se
            }, a[Bn.a.DISCOVER] = null, a[Bn.a.JCB] = null, a[Bn.a.ELO] = null, a[Bn.a.HIPER] = null, c = a, (e = {})[Bn.c.BR] = 5, u = e, Object(N.a)({}, Ze, {
                url: We,
                layouts: [Vn.VERTICAL],
                defaultLabel: Wn.CARD,
                maxCards: u,
                vendors: c,
                labels: (o = {}, o[Wn.CARD] = Object(N.a)({}, ze, {
                    Label: function(n) {
                        var o = n.fundingEligibility,
                            i = n.locale,
                            a = n.nonce,
                            e = 4;
                        return u[i.country] && (e = u[i.country]), $e.map(function(n) {
                            var e = o[Bn.p.CARD];
                            if (!e) return null;
                            if (!e.vendors[n] || !e.vendors[n].eligible) return null;
                            var t = c[n];
                            if (!t) return null;
                            var r = t.Logo;
                            return le(r, {
                                locale: i,
                                nonce: a
                            })
                        }).filter(Boolean).slice(0, e)
                    },
                    defaultColor: Zn.SILVER,
                    colors: [Zn.TRANSPARENT],
                    logoColors: (t = {}, t[Zn.TRANSPARENT] = Ne.BLACK, t),
                    secondaryColors: (r = {}, r[Zn.GOLD] = Zn.TRANSPARENT, r[Zn.BLUE] = Zn.TRANSPARENT, r[Zn.SILVER] = Zn.TRANSPARENT, r[Zn.DARKBLUE] = Zn.TRANSPARENT, r)
                }), o)
            })), n[Bn.p.IDEAL] = null, n[Bn.p.SEPA] = null, n[Bn.p.BANCONTACT] = null, n[Bn.p.GIROPAY] = null, n[Bn.p.SOFORT] = null, n[Bn.p.EPS] = null, n[Bn.p.MYBANK] = null, n[Bn.p.P24] = null, n[Bn.p.ZIMPLER] = null, n[Bn.p.WECHATPAY] = null, n
        })
    }
    var et = "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n";

    function tt(n) {
        var e = n.doc,
            t = n.props.nonce;
        return le("html", null, le("head", null, le("title", null, "PayPal"), le("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        })), le("body", null, le("div", {
            class: "preloader spinner"
        }, le("style", {
            nonce: t
        }, et), le("div", {
            class: "spinWrap"
        }, le("p", {
            class: "spinnerImage"
        }), le("p", {
            class: "loader"
        }))))).render(we({
            doc: e
        }))
    }
    var rt, ot, it, at = {
            de: {
                windowMessage: "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen",
                continueMessage: "Weiter"
            },
            en: {
                windowMessage: "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase",
                continueMessage: "Click to Continue"
            },
            zh: {
                windowMessage: "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款",
                continueMessage: "继续"
            },
            es: {
                windowMessage: "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra",
                continueMessage: "Continuar"
            },
            fr: {
                windowMessage: "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat",
                continueMessage: "Continuer"
            },
            ar: {
                windowMessage: "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك",
                continueMessage: "متابعة"
            },
            da: {
                windowMessage: "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale",
                continueMessage: "Fortsæt"
            },
            ru: {
                windowMessage: "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку",
                continueMessage: "Продолжить"
            },
            tr: {
                windowMessage: "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız",
                continueMessage: "Devam"
            },
            th: {
                windowMessage: "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย",
                continueMessage: "ดำเนินการต่อ"
            },
            sk: {
                windowMessage: "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť",
                continueMessage: "Pokračovať"
            },
            sv: {
                windowMessage: "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp",
                continueMessage: "Fortsätt"
            },
            pt: {
                windowMessage: "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra",
                continueMessage: "Continuar"
            },
            pl: {
                windowMessage: "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu",
                continueMessage: "Kontynuuj"
            },
            no: {
                windowMessage: "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet",
                continueMessage: "Fortsett"
            },
            nl: {
                windowMessage: "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien",
                continueMessage: "Doorgaan"
            },
            ko: {
                windowMessage: "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다",
                continueMessage: "계속"
            },
            ja: {
                windowMessage: "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします",
                continueMessage: "続行"
            },
            it: {
                windowMessage: "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto",
                continueMessage: "Continua"
            },
            he: {
                windowMessage: "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך",
                continueMessage: "המשך"
            },
            hu: {
                windowMessage: "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást",
                continueMessage: "Folytatás"
            },
            id: {
                windowMessage: "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda",
                continueMessage: "Lanjutkan"
            },
            el: {
                windowMessage: "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας",
                continueMessage: "Συνέχεια"
            },
            fi: {
                windowMessage: "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten",
                continueMessage: "Jatka"
            },
            cs: {
                windowMessage: "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit",
                continueMessage: "Pokračovat"
            }
        },
        ct = {
            OUTLET: "outlet",
            VISIBLE: "visible",
            INVISIBLE: "invisible",
            COMPONENT_FRAME: "component-frame",
            PRERENDER_FRAME: "prerender-frame"
        };

    function ut(n) {
        var e = n.uid,
            t = n.tag,
            r = n.props,
            o = n.context,
            i = n.close,
            a = n.focus,
            c = n.doc,
            u = n.event,
            s = n.frame,
            d = n.prerenderFrame,
            l = r.locale.lang;
        r.style;
        var f, p, h, E, m, w, g = at[l],
            v = function(e) {
                return function(n) {
                    u.on(Cn.DISPLAY, function() {
                        return Object(A.c)(n, "show-" + e, A.N)
                    }), u.on(Cn.CLOSE, function() {
                        return Object(A.c)(n, "hide-" + e, A.N)
                    })
                }
            };
        return s && d && (s.classList.add(ct.COMPONENT_FRAME), d.classList.add(ct.PRERENDER_FRAME), d.classList.add(ct.VISIBLE), s.classList.add(ct.INVISIBLE), u.on(Cn.RENDERED, function() {
            d.classList.remove(ct.VISIBLE), d.classList.add(ct.INVISIBLE), s.classList.remove(ct.INVISIBLE), s.classList.add(ct.VISIBLE), setTimeout(function() {
                Object(A.k)(d)
            }, 1)
        }), f = le("div", {
            class: ct.OUTLET,
            onRender: v("component")
        }, le("node", {
            el: s
        }), le("node", {
            el: d
        }))), le("div", {
            id: e,
            onRender: v("container"),
            class: "paypal-checkout-sandbox"
        }, le("style", null, (m = {
            uid: e
        }, w = m.uid, "\n        #" + w + ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" + w + ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    ")), le("iframe", {
            title: "PayPal Checkout Overlay",
            name: "__paypal_checkout_sandbox_" + e + "__",
            scrolling: "no",
            class: "paypal-checkout-sandbox-iframe"
        }, le("html", null, le("body", null, le("div", {
            id: e,
            onClick: function(n) {
                n.preventDefault(), n.stopPropagation(), Object(A.G)() ? window.alert("Please switch tabs to reactivate the PayPal window") : a()
            },
            class: t + "-context-" + o + " paypal-checkout-overlay"
        }, le("a", {
            href: "#",
            class: "paypal-checkout-close",
            onClick: function(n) {
                n.preventDefault(), n.stopPropagation(), i()
            },
            "aria-label": "close",
            role: "button"
        }), le("div", {
            class: "paypal-checkout-modal"
        }, le("div", {
            class: "paypal-checkout-logo"
        }, le(De, {
            logoColor: Ne.WHITE
        }), le(Me, {
            logoColor: Ne.WHITE
        })), le("div", {
            class: "paypal-checkout-message"
        }, g.windowMessage), le("div", {
            class: "paypal-checkout-continue"
        }, le("a", {
            onClick: a,
            href: "#"
        }, g.continueMessage)), le("div", {
            class: "paypal-checkout-loader"
        }, le("div", {
            class: "paypal-spinner"
        }))), le("div", {
            class: "paypal-checkout-iframe-container"
        }, f), le("style", null, (p = {
            uid: e,
            tag: t
        }, h = p.uid, E = p.tag, "\n        #" + h + " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" + h + " a {\n            color: #fff;\n        }\n\n        #" + h + " .paypal-checkout-close:before,\n        #" + h + " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" + h + "." + E + "-context-" + On.POPUP + " {\n            cursor: pointer;\n        }\n\n        #" + h + " a {\n            text-decoration: none;\n        }\n\n        #" + h + ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' + h + "." + E + "-loading .paypal-checkout-message, #" + h + "." + E + "-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" + h + "." + E + "-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" + h + " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" + h + " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" + h + " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" + h + " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-message, #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" + h + " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" + h + " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" + h + " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" + h + "." + E + "-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" + h + " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" + h + " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" + h + " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" + h + " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" + h + " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-iframe-container,\n        #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-iframe-container > ." + ct.OUTLET + ",\n        #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-iframe-container > ." + ct.OUTLET + " > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " > iframe." + ct.COMPONENT_FRAME + " {\n            z-index: 100;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " > iframe." + ct.PRERENDER_FRAME + " {\n            z-index: 200;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " > iframe." + ct.VISIBLE + " {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " > iframe." + ct.INVISIBLE + " {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" + h + "." + E + "-context-" + On.IFRAME + " .paypal-checkout-iframe-container,\n            #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" + h + "." + E + "-context-" + On.IFRAME + " ." + ct.OUTLET + " iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "))))))).render(we({
            doc: c
        }))
    }

    function st() {
        return Object(A.A)(st, function() {
            var n = Fn({
                tag: "paypal-checkout",
                attributes: {
                    iframe: {
                        scrolling: "yes"
                    }
                },
                defaultContext: Object(A.eb)() ? On.POPUP : On.IFRAME,
                url: function(n) {
                    var e = n.props.fundingSource,
                        t = nt()[e];
                    if (!t) throw new Error("Can not find funding config for " + e);
                    return t.url()
                },
                domain: Object(d.k)(),
                logger: Object(d.h)(),
                validate: function() {
                    if (Object(A.F)()) throw new Error("Can not render button in IE intranet mode")
                },
                prerenderTemplate: tt,
                containerTemplate: ut,
                props: {
                    clientID: {
                        type: "string",
                        value: function() {
                            return Object(d.b)()
                        },
                        queryParam: !0
                    },
                    sessionID: {
                        type: "string",
                        value: function() {
                            return ne()
                        },
                        queryParam: !0
                    },
                    buttonSessionID: {
                        type: "string",
                        required: !1,
                        default: function() {
                            return ee()
                        },
                        queryParam: !0
                    },
                    env: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return Object(d.e)()
                        }
                    },
                    sdkMeta: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return Object(d.l)()
                        }
                    },
                    nonce: {
                        type: "string",
                        required: !1
                    },
                    meta: {
                        type: "object",
                        default: function() {
                            return window.xprops && window.xprops.meta || {}
                        }
                    },
                    locale: {
                        type: "object",
                        queryParam: "locale.x",
                        allowDelegate: !0,
                        queryValue: function(n) {
                            var e = n.value;
                            return e.lang + "_" + e.country
                        },
                        value: function() {
                            return Object(d.g)()
                        }
                    },
                    createOrder: {
                        type: "function",
                        queryParam: "token",
                        alias: "payment",
                        queryValue: function(n) {
                            var e = n.value;
                            return O.a.try(e)
                        },
                        decorate: function(n) {
                            var e = n.value;
                            return Object(A.L)(function() {
                                return O.a.try(e).then(function(n) {
                                    if (!n) throw new Error("No order id passed");
                                    return n
                                })
                            })
                        }
                    },
                    xcomponent: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return "1"
                        }
                    },
                    version: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return "5"
                        }
                    },
                    commit: {
                        type: "boolean",
                        queryParam: !0,
                        default: d.c
                    },
                    fundingSource: {
                        type: "string",
                        queryParam: !0,
                        default: function() {
                            return Bn.p.PAYPAL
                        }
                    },
                    onApprove: {
                        type: "function",
                        alias: "onAuthorize",
                        decorate: function(n) {
                            var t = n.value,
                                r = n.state,
                                o = n.close,
                                i = n.onError;
                            return function(n, e) {
                                return O.a.try(function() {
                                    return r.approved = !0, t(n, e)
                                }).catch(function(n) {
                                    return i(n)
                                }).finally(function() {
                                    return o()
                                })
                            }
                        }
                    },
                    onShippingChange: {
                        type: "function",
                        required: !1
                    },
                    onAuth: {
                        type: "function",
                        required: !1,
                        sameDomain: !0
                    },
                    accessToken: {
                        type: "string",
                        required: !1
                    },
                    onCancel: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var t = n.value,
                                r = n.close,
                                o = n.onError;
                            return Object(A.R)(function(n, e) {
                                return void 0 === e && (e = {}), O.a.try(function() {
                                    return t(n, e)
                                }).catch(function(n) {
                                    return o(n)
                                }).finally(function() {
                                    r()
                                })
                            })
                        },
                        default: function() {
                            return A.N
                        }
                    },
                    onClose: {
                        type: "function",
                        required: !1,
                        allowDelegate: !0,
                        decorate: function(n) {
                            var o = n.value,
                                i = n.props,
                                a = n.state;
                            return Object(A.R)(function(n) {
                                for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
                                return O.a.try(function() {
                                    return O.a.all((a.onCloseHandlers || []).map(function(n) {
                                        return n()
                                    }))
                                }).then(function() {
                                    return a.approved ? o.apply(void 0, t) : O.a.try(function() {
                                        return i.onCancel()
                                    }).then(function() {
                                        return o.apply(void 0, t)
                                    })
                                })
                            })
                        },
                        default: function() {
                            return A.N
                        }
                    },
                    addOnClose: {
                        type: "function",
                        allowDelegate: !0,
                        value: function(n) {
                            var e = n.state;
                            return function(n) {
                                e.onCloseHandlers = e.onCloseHandlers || [], e.onCloseHandlers.push(n)
                            }
                        }
                    },
                    onDisplay: {
                        type: "function",
                        required: !1,
                        allowDelegate: !0,
                        decorate: function(n) {
                            var t = n.value,
                                r = n.state;
                            return Object(A.R)(function() {
                                var n = this,
                                    e = arguments;
                                return O.a.try(function() {
                                    return O.a.all((r.onDisplayHandlers || []).map(function(n) {
                                        return n()
                                    }))
                                }).then(function() {
                                    return t.apply(n, e)
                                })
                            })
                        },
                        default: function() {
                            return A.N
                        }
                    },
                    addOnDisplay: {
                        type: "function",
                        allowDelegate: !0,
                        value: function(n) {
                            var e = n.state;
                            return function(n) {
                                e.onDisplayHandlers = e.onDisplayHandlers || [], e.onDisplayHandlers.push(n)
                            }
                        }
                    },
                    test: {
                        type: "object",
                        default: function() {
                            return window.__test__ || {
                                action: "checkout"
                            }
                        }
                    }
                },
                dimensions: Object(A.D)() ? {
                    width: "100%",
                    height: "535px"
                } : {
                    width: "450px",
                    height: "535px"
                }
            });
            return n.isChild() && (window.xchild = {
                props: n.xprops,
                show: A.N,
                hide: A.N
            }), n
        })
    }
    var dt = ((rt = {})[Vn.HORIZONTAL] = zn.SMALL, rt[Vn.VERTICAL] = zn.MEDIUM, rt),
        lt = ((ot = {})[Vn.HORIZONTAL] = zn.HUGE, ot[Vn.VERTICAL] = zn.HUGE, ot),
        ft = {
            TAGLINE: 50,
            VERTICAL_MARGIN: 30
        },
        pt = ((it = {})[zn.TINY] = {
            defaultWidth: 75,
            defaultHeight: 25,
            minWidth: 75,
            maxWidth: 150,
            minHeight: 25,
            maxHeight: 30
        }, it[zn.SMALL] = {
            defaultWidth: 150,
            defaultHeight: 25,
            minWidth: 150,
            maxWidth: 200,
            minHeight: 25,
            maxHeight: 55
        }, it[zn.MEDIUM] = {
            defaultWidth: 250,
            defaultHeight: 35,
            minWidth: 200,
            maxWidth: 300,
            minHeight: 35,
            maxHeight: 55
        }, it[zn.LARGE] = {
            defaultWidth: 350,
            defaultHeight: 45,
            minWidth: 300,
            maxWidth: 500,
            minHeight: 30,
            maxHeight: 55
        }, it[zn.HUGE] = {
            defaultWidth: 500,
            defaultHeight: 55,
            minWidth: 500,
            maxWidth: 750,
            minHeight: 40,
            maxHeight: 55
        }, it),
        ht = {
            LABEL: Wn.PAYPAL,
            LAYOUT: Vn.VERTICAL,
            COLOR: Zn.GOLD,
            SHAPE: Gn.RECT
        },
        Et = {
            LOCALE: {
                country: Bn.c.US,
                lang: Bn.r.EN
            },
            COMMIT: Bn.b.TRUE,
            VAULT: Bn.x.FALSE,
            INTENT: Bn.q.CAPTURE,
            ENV: Bn.j.PRODUCTION,
            PLATFORM: Bn.s.DESKTOP
        };

    function mt(n) {
        if (!n) throw new Error("Expected props.style to be set");
        var e = n.label,
            t = void 0 === e ? ht.LABEL : e,
            r = n.layout,
            o = void 0 === r ? ht.LAYOUT : r,
            i = n.color,
            a = void 0 === i ? ht.COLOR : i,
            c = n.shape,
            u = void 0 === c ? ht.SHAPE : c,
            s = n.tagline,
            d = void 0 === s ? o === Vn.HORIZONTAL : s,
            l = n.height,
            f = n.period;
        if (-1 === Object(A.ib)(Vn).indexOf(o)) throw new Error("Invalid layout: " + o);
        var p = nt(),
            h = Object.keys(p).filter(function(n) {
                return p[n] && p[n].labels[t]
            })[0];
        if (!h) throw new Error("Invalid button label: " + t);
        var E = p[h];
        if (!E) throw new Error("Can not find funding config for " + h);
        var m = E.labels[t];
        if (!m) throw new Error("Can not find label config for " + t);
        if (!m.allowPrimary) throw new Error("Label " + t + " can not be used as primary button label");
        if (a && -1 === m.colors.indexOf(a)) throw new Error("Unexpected style.color for " + t + " button: " + a + ", expected " + m.colors.join(", "));
        if (u && -1 === m.shapes.indexOf(u)) throw new Error("Unexpected style.shape for " + t + " button: " + u + ", expected " + m.shapes.join(", "));
        if (void 0 !== l) {
            if ("number" != typeof l) throw new TypeError("Expected style.height to be a number, got: " + l);
            var w = [pt[zn.SMALL].minHeight, pt[zn.HUGE].maxHeight],
                g = w[0],
                v = w[1];
            if (l < g || v < l) throw new Error("Expected style.height to be between " + g + "px and " + v + "px - got " + l + "px")
        }
        if (o === Vn.VERTICAL && d) throw new Error("style.tagline is not allowed for " + Vn.VERTICAL + " layout");
        return {
            label: t,
            layout: o,
            color: a,
            shape: u,
            tagline: d,
            height: l,
            period: f
        }
    }
    var wt = Object(A.ib)(Bn.c),
        gt = Object(A.ib)(Bn.p),
        vt = Object(A.ib)(Bn.j),
        yt = Object(A.ib)(Bn.s),
        bt = "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: center;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n    }\n",
        Ot = "\n\n    ." + Qn.CONTAINER + ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;R\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' + Qn.BUTTON + ":not(." + Te.CARD + ") {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        outline: none;\n        overflow: hidden;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.TRANSPARENT + " {\n        cursor: auto;\n    }\n\n    ." + Qn.BUTTON + " * {\n        cursor: pointer;\n    }\n\n    ." + Qn.CONTAINER + "." + Qn.ENV + "-" + Bn.j.TEST + " ." + Qn.TEXT + " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." + Qn.BUTTON + ":hover {\n        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.GOLD + ":hover,\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.SILVER + ":hover {\n        box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.05);\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.TRANSPARENT + ":hover {\n        box-shadow: none;\n    }\n\n    ." + Te.CARD + ", ." + Te.CARD + " * {\n        cursor: pointer;\n    }\n\n    ." + Te.CARD + ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." + Qn.BUTTON + ":focus {\n        box-shadow: -1px -1px 18px 1px rgba(0, 0, 0, 0.25) inset;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.TRANSPARENT + ":focus {\n        box-shadow: none;\n    }\n\n    ." + Te.LOGO + " {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." + Qn.TEXT + " {\n        display: inline-block;\n        white-space: pre-wrap;\n    }\n\n    ." + Qn.BUTTON + " ." + Te.LOGO + ",\n    ." + Qn.BUTTON + " ." + Qn.TEXT + " {\n        vertical-align: top;\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        text-align: left;\n    }\n\n    ." + Qn.BUTTON + " ." + Qn.TEXT + " {\n        visibility: hidden;\n    }\n\n    ." + Qn.TAGLINE + " {\n        max-width: 100%;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n        visibility: hidden;\n    }\n",
        Ct = "\n\n    ." + Qn.BUTTON + "." + Qn.LABEL + "-" + Wn.CARD + " {\n        border-radius: 0 !important;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.LABEL + "-" + Wn.CREDIT + " ." + Qn.TEXT + " {\n        display: none !important;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + "." + Qn.LABEL + "-" + Wn.CREDIT + " ." + Te.LOGO + "." + Te.LOGO + "-" + Ce.PAYPAL + " {\n        display: none;\n    }\n\n    @media only screen and (max-width : " + pt[zn.SMALL].minWidth + "px) {\n\n        ." + Qn.BUTTON + "." + Qn.LABEL + "-" + Wn.CREDIT + " ." + Te.LOGO + "." + Te.LOGO + "-" + Ce.PAYPAL + " {\n            display: none;\n        }\n    }\n\n    @media only screen and (min-width : " + pt[zn.SMALL].minWidth + "px) {\n\n        ." + Qn.BUTTON + "." + Qn.LABEL + "-" + Wn.CREDIT + " ." + Te.LOGO + "." + Te.LOGO + "-" + Ce.PAYPAL + " {\n            display: inline-block;\n        }\n    }\n",
        Nt = 2.8,
        Tt = "\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.GOLD + " {\n        background: #ffc439;\n        color: #111;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.BLUE + " {\n        background: #009cde;\n        color: #fff;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.SILVER + " {\n        background: #eee;\n        color: #111;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.DARKBLUE + " {\n        background: #003087;\n        color: #fff;\n    }\n\n    ." + Qn.BUTTON + "." + Qn.COLOR + "-" + Zn.TRANSPARENT + " {\n        background: transparent;\n        color: #111;\n    }\n";

    function Rt(n) {
        var e = n.style,
            t = n.multiple,
            r = n.env,
            o = e.layout,
            i = e.shape;
        return [Qn.LAYOUT + "-" + o, Qn.SHAPE + "-" + i, Qn.NUMBER + "-" + (t ? Kn.MULTIPLE : Kn.SINGLE), Qn.ENV + "-" + r].join(" ")
    }

    function Lt(n) {
        var e, t = n.fundingSource,
            r = n.style,
            o = n.multiple,
            i = n.locale,
            a = n.env,
            c = n.fundingEligibility,
            u = n.i,
            s = n.nonce,
            d = n.onClick,
            l = void 0 === d ? A.N : d,
            f = r.color,
            p = r.period,
            h = function(n) {
                var e = n.fundingSource,
                    t = n.style,
                    r = nt()[e];
                if (!r) throw new Error("Can not find config for " + e);
                var o = r.labels,
                    i = t.label;
                if (o[i]) return i;
                if (r.defaultLabel) return r.defaultLabel;
                throw new Error("Could not determine label for " + e)
            }({
                fundingSource: t,
                style: r
            }),
            E = nt()[t];
        if (!E) throw new Error("Can not find funding config for " + t);
        var m = E.labels[h];
        if (!m) throw new Error("Can not find label config for " + h);
        var w = m.secondaryColors;
        o && 0 < u && (f = w[f]);
        var g, v, y, b, O = m.logoColors[f],
            C = m.Label;
        return le("div", Object(N.a)({}, ((e = {})[$n.FUNDING_SOURCE] = t, e[$n.BUTTON] = !0, e), {
            class: Qn.BUTTON + " " + Qn.NUMBER + "-" + u + " " + Rt({
                style: r,
                multiple: o,
                env: a
            }) + " " + (g = {
                label: h,
                color: f,
                logoColor: O
            }, v = g.label, y = g.color, b = g.logoColor, [Qn.LABEL + "-" + v, Qn.COLOR + "-" + y, Te.LOGO_COLOR + "-" + b].join(" ")),
            role: "button",
            "aria-label": t,
            onClick: function() {
                return l({
                    fundingSource: t
                })
            },
            tabindex: "0"
        }), le(C, {
            nonce: s,
            locale: i,
            logoColor: O,
            period: p,
            multiple: o,
            fundingEligibility: c
        }))
    }

    function At(n) {
        var e = n.fundingSource,
            t = n.style,
            r = n.locale,
            o = n.multiple,
            i = n.nonce,
            a = t.tagline,
            c = t.label,
            u = t.color;
        if (a) {
            var s = nt()[e];
            if (!s) throw new Error("Can not get config for " + e);
            var d = s.labels[c];
            if (!d) throw new Error("Can not find label config for " + c);
            var l = d.tagLineColors[u],
                f = d.Tag;
            if (f) return le("div", {
                class: Qn.TAGLINE + " " + Qn.TAGLINE_COLOR + "-" + l
            }, le(f, {
                nonce: i,
                locale: r,
                multiple: o
            }))
        }
    }

    function _t(n) {
        var e = n.nonce,
            t = function() {
                var o = {
                    BLOCK: "block",
                    INLINE_BLOCK: "inline-block",
                    NONE: "none",
                    VISIBLE: "visible",
                    HIDDEN: "hidden"
                };

                function n(n, e) {
                    return e = e || document, Array.prototype.slice.call(e.querySelectorAll(n))
                }

                function e(n, e) {
                    void 0 === e && (e = o.INLINE_BLOCK), n.style.display = e
                }

                function t(n) {
                    n.style.display = o.NONE
                }

                function r(n) {
                    n.style.visibility = o.VISIBLE
                }

                function i(n) {
                    n.style.visibility = o.HIDDEN
                }

                function a(n) {
                    return n.every(function(n) {
                        return r = n.getBoundingClientRect(), Boolean(r.height && r.width) || (e = n, !(t = window.getComputedStyle(e)) || t.display === o.NONE);
                        var e, t, r
                    })
                }

                function c(n) {
                    if (n.offsetWidth < n.scrollWidth || n.offsetHeight < n.scrollHeight) return !0;
                    var e = n.parentNode;
                    if (!e) return !1;
                    var t = n.getBoundingClientRect(),
                        r = e.getBoundingClientRect();
                    return t.top < r.top || t.left < r.left || t.right > r.right || t.bottom > r.bottom || t.left < 0 || t.top < 0 || t.left + t.width > window.innerWidth || t.top + t.height > window.innerHeight
                }
                var u = n(".{ CLASS.BUTTON } .{ LOGO_CLASS.LOGO }"),
                    s = n(".{ CLASS.BUTTON } .{ CLASS.TEXT }"),
                    d = n(".{ CLASS.TAGLINE }"),
                    l = n(".{ CLASS.BUTTON }-label-credit .{ CLASS.BUTTON }-logo-paypal");

                function f() {
                    d.some(c) ? d.forEach(i) : d.forEach(r), s.forEach(function(n) {
                        return e(n)
                    }), l.forEach(function(n) {
                        return e(n)
                    }), u.some(c) || s.some(c) ? (s.forEach(t), l.forEach(t)) : (s.forEach(r), l.forEach(function(n) {
                        return e(n)
                    }))
                }
                f(),
                    function(n, e) {
                        if (a(n)) e();
                        else var t = setInterval(function() {
                            a(n) && (clearInterval(t), e())
                        }, 5)
                    }(u, function() {
                        u.forEach(r), f(), document.addEventListener("DOMContentLoaded", f), window.addEventListener("load", f), window.addEventListener("resize", f),
                            function n(e, t, r) {
                                setTimeout(function() {
                                    e(), (r -= 1) && n(e, t, r)
                                }, t)
                            }(f, 10, 10)
                    })
            }.toString();
        return t = (t = t.replace(/\{\s*CLASS\.([A-Z0-9_]+)\s*\}/g, function(n, e) {
            return Qn[e]
        })).replace(/\{\s*LOGO_CLASS\.([A-Z0-9_]+)\s*\}/g, function(n, e) {
            return Te[e]
        }), le("script", {
            nonce: e,
            innerHTML: "(" + t + ")()"
        })
    }

    function St(n) {
        var e, t, o, r, i, a = n.style,
            c = n.cardNumber,
            u = n.nonce,
            s = (e = {
                height: a.height,
                cardNumber: c
            }, "\n        " + bt + "\n        " + Ot + "\n        " + Tt + "\n        " + Ct + "\n        " + (o = (t = {
                height: e.height,
                cardNumber: e.cardNumber
            }).height, i = void 0 === (r = t.cardNumber) ? 4 : r, Object.keys(pt).map(function(n) {
                var e = pt[n],
                    t = o || e.defaultHeight,
                    r = Math.round(t * Nt * 2);
                return "\n\n            @media only screen and (min-width: " + e.minWidth + "px) {\n\n                ." + Qn.CONTAINER + " {\n                    min-width: " + e.minWidth + "px;\n                    max-width: " + e.maxWidth + "px;\n                    font-size: " + Object(A.K)(Object(A.T)(t, 32), 10) + "px;\n                }\n\n                ." + Qn.BUTTON + ":not(." + Te.CARD + ") {\n                    height: " + t + "px;\n                    min-height: " + (o || e.minHeight) + "px;\n                    max-height: " + (o || e.maxHeight) + "px;\n                }\n\n                ." + Te.LOGO + " {\n                    height: " + (Object(A.T)(t, 35) + 5) + "px;\n                    max-height: " + Object(A.T)(t, 60) + "px;\n                    min-height: " + Object(A.T)(t, 40) + "px;\n                }\n                \n                ." + Te.LOGO + "." + Te.LOGO + "-" + Wn.EPS + ",\n                ." + Te.LOGO + "." + Te.LOGO + "-" + Wn.MYBANK + " {\n                    height: " + (Object(A.T)(t, 50) + 5) + "px;\n                    max-height: " + Object(A.T)(t, 70) + "px;\n                    min-height: " + Object(A.T)(t, 40) + "px;\n                }\n\n                ." + Qn.BUTTON + "." + Qn.SHAPE + "-" + Gn.PILL + ":not(" + Qn.LABEL + "-" + Te.CARD + ") {\n                    border-radius: " + Math.ceil(t / 2) + "px;\n                }\n\n                ." + Qn.BUTTON + "." + Qn.SHAPE + "-" + Gn.RECT + " {\n                    border-radius: 4px;\n                }\n\n                ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.VERTICAL + " {\n                    margin-bottom: " + Object(A.T)(t, ft.VERTICAL_MARGIN) + "px;\n                }\n\n                ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.VERTICAL + ":last-of-type {\n                    margin-bottom: 0;\n                }\n                \n                ." + Qn.TAGLINE + " {\n                    height: " + Object(A.T)(t, ft.TAGLINE) + "px;\n                    line-height: " + Object(A.T)(t, ft.TAGLINE) + "px;\n                }\n\n                ." + Te.CARD + " {\n                    display: inline-block;\n                }\n\n                ." + Qn.BUTTON + " ." + Te.CARD + " {\n                    width: " + (90 / i).toFixed(2) + "%;\n                    max-width: " + Object(A.T)(t, 160) + "px;\n                    margin-top: 0;\n                    margin-left: " + (5 / i).toFixed(2) + "%;\n                    margin-right: " + (5 / i).toFixed(2) + "%;\n                }\n\n                ." + Qn.BUTTON + " ." + Te.CARD + " img {\n                    width: 100%;\n                }\n            }\n\n            @media only screen and (min-width: " + e.minWidth + "px) and (max-width: " + r + "px) {\n\n                ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + "." + Qn.NUMBER + "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + "." + Qn.NUMBER + "-1 {\n                    display: none;\n                }\n\n                ." + Qn.CONTAINER + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + " ." + Qn.TAGLINE + " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " + Object(A.K)(e.minWidth, r) + "px) {\n\n                ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + "." + Qn.NUMBER + "-0 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                    margin-right: 4px;\n                }\n\n                ." + Qn.BUTTON + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + "." + Qn.NUMBER + "-1 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                }\n\n                ." + Qn.CONTAINER + "." + Qn.LAYOUT + "-" + Vn.HORIZONTAL + "." + Qn.NUMBER + "-" + Kn.MULTIPLE + " ." + Qn.TAGLINE + " {\n                    display: block;\n                }\n            }\n        "
            }).join("\n")) + "\n    "),
            d = le("style", {
                nonce: u,
                innerHTML: s
            });
        try {
            return d.render(ye()), d
        } catch (n) {
            return le("style", {
                nonce: u
            }, s)
        }
    }

    function Pt(n) {
        var e, t, r, o, i, a, c, u = n.onClick,
            s = function(n) {
                if (!n) throw new Error("Expected props");
                var e = n.clientID,
                    t = n.style,
                    r = void 0 === t ? {} : t,
                    o = n.remembered,
                    i = void 0 === o ? [] : o,
                    a = n.locale,
                    c = void 0 === a ? Et.LOCALE : a,
                    u = n.env,
                    s = void 0 === u ? Et.ENV : u,
                    d = n.platform,
                    l = void 0 === d ? Et.PLATFORM : d,
                    f = n.commit,
                    p = void 0 === f ? Et.COMMIT : f,
                    h = n.fundingEligibility,
                    E = n.sessionID,
                    m = void 0 === E ? Object(A.hb)() : E,
                    w = n.buttonSessionID,
                    g = void 0 === w ? Object(A.hb)() : w,
                    v = n.csp,
                    y = void 0 === v ? {} : v,
                    b = n.nonce,
                    O = void 0 === b ? "" : b,
                    C = c.country,
                    N = c.lang;
                if (!C || -1 === wt.indexOf(C)) throw new Error("Expected valid country, got " + (C || "undefined"));
                if (!N || -1 === Bn.d[C].indexOf(N)) throw new Error("Expected valid lang, got " + (N || "undefined"));
                if (i.some(function(n) {
                        return -1 === gt.indexOf(n)
                    })) throw new Error("Expected valid funding sources, got " + JSON.stringify(i));
                if (-1 === vt.indexOf(s)) throw new Error("Expected valid env, got " + (s || "undefined"));
                if (!h) throw new Error("Expected fundingEligibility");
                if (-1 === yt.indexOf(l)) throw new Error("Expected valid platform, got " + (l || "undefined"));
                return y && y.nonce && (O = y.nonce), {
                    clientID: e,
                    style: r = mt(r),
                    locale: c,
                    remembered: i,
                    env: s,
                    fundingEligibility: h,
                    platform: l,
                    buttonSessionID: g,
                    commit: p,
                    sessionID: m,
                    nonce: O
                }
            }(n),
            d = s.style,
            l = s.locale,
            f = s.remembered,
            p = s.env,
            h = s.fundingEligibility,
            E = s.platform,
            m = s.nonce,
            w = (t = (e = {
                style: d,
                remembered: f,
                platform: E,
                fundingEligibility: h
            }).style, r = e.platform, o = e.remembered, i = e.fundingEligibility, a = t.layout, c = Qe.filter(function(n) {
                return function(n, e) {
                    var t = e.layout,
                        r = e.platform,
                        o = e.remembered,
                        i = e.fundingEligibility;
                    if (!i[n] || !i[n].eligible || !1 === i[n].branded) return !1;
                    var a = nt()[n];
                    if (!a) throw new Error("Can not find funding config for " + n);
                    return !(a.layouts && -1 === a.layouts.indexOf(t) || a.platforms && -1 === a.platforms.indexOf(r) || a.remembered && o && -1 === o.indexOf(n))
                }(n, {
                    layout: a,
                    platform: r,
                    remembered: o,
                    fundingEligibility: i
                })
            }), a === Vn.HORIZONTAL && (c = c.slice(0, 2)), c),
            g = 1 < w.length;
        if (!w.length) throw new Error("No eligible funding fundingSources found to render buttons:\n\n" + JSON.stringify(h, null, 4));
        var v = le("div", {
            class: Qn.CONTAINER + " " + Rt({
                style: d,
                multiple: g,
                env: p
            })
        }, le(St, {
            nonce: m,
            style: d,
            cardNumber: function(n) {
                var e = nt()[Bn.p.CARD],
                    t = e && e.vendors,
                    r = 4;
                if (e && e.maxCards && e.maxCards[n.country] && (r = e.maxCards[n.country]), t) {
                    var o = Object.keys(t).length;
                    return Math.min(o, r)
                }
                return r
            }(l)
        }), w.map(function(n, e) {
            return le(Lt, {
                i: e,
                style: d,
                fundingSource: n,
                multiple: g,
                env: p,
                locale: l,
                nonce: m,
                fundingEligibility: h,
                onClick: u
            })
        }), le(At, {
            fundingSource: w[0],
            style: d,
            locale: l,
            multiple: g,
            nonce: m
        }), le(_t, {
            nonce: m
        }));
        v.toString = function() {
            return v.render(ye())
        };
        var y = v.render;
        return v.render = function(n) {
            return 3 === n.length && "undefined" == typeof window ? y.call(v, ye()) : y.call(v, n)
        }, v
    }
    var jt = {
        VISIBLE: "visible",
        INVISIBLE: "invisible",
        COMPONENT_FRAME: "component-frame",
        PRERENDER_FRAME: "prerender-frame"
    };

    function It(n) {
        var e = n.uid,
            t = n.props,
            r = n.tag,
            o = n.context,
            i = n.frame,
            a = n.prerenderFrame,
            c = n.doc,
            u = n.container,
            s = n.event;
        if (i && a) {
            if (u && "button" === u.tagName.toLowerCase()) throw new Error("Do not render the PayPal button into a button element");
            i.classList.add(jt.COMPONENT_FRAME), a.classList.add(jt.PRERENDER_FRAME), i.classList.add(jt.INVISIBLE), a.classList.add(jt.VISIBLE), s.on(Cn.RENDERED, function() {
                a.classList.remove(jt.VISIBLE), a.classList.add(jt.INVISIBLE), i.classList.remove(jt.INVISIBLE), i.classList.add(jt.VISIBLE), setTimeout(function() {
                    Object(A.k)(a)
                }, 1)
            });
            var d = t.style,
                l = d.label,
                f = d.layout,
                p = d.height,
                h = dt[f],
                E = lt[f];
            if (p) {
                var m = Object(A.ib)(zn).filter(function(n) {
                    return pt[n] && p && pt[n].minHeight <= p && pt[n].maxHeight >= p
                });
                m.sort(function(n, e) {
                    return pt[n].defaultWidth - pt[e].defaultWidth
                }), h = m[0]
            }
            return le("div", {
                id: e,
                class: r + " " + r + "-context-" + o + " " + r + "-label-" + l + " " + r + "-layout-" + f
            }, le("style", null, "\n                    #" + e + " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-width: " + pt[h].minWidth + "px;\n                        max-width: " + pt[E].maxWidth + "px;\n                        font-size: 0;\n                    }\n\n                    #" + e + " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" + e + " > iframe." + jt.COMPONENT_FRAME + " {\n                        z-index: 100;\n                    }\n\n                    #" + e + " > iframe." + jt.PRERENDER_FRAME + " {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" + e + " > iframe." + jt.VISIBLE + " {\n                        opacity: 1;\n                    }\n\n                    #" + e + " > iframe." + jt.INVISIBLE + " {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n                "), le("node", {
                el: i
            }), le("node", {
                el: a
            })).render(we({
                doc: c
            }))
        }
    }

    function xt(e) {
        return void 0 === e && (e = A.y), Object(d.n)(function(n) {
            return n.rememberedFunding = n.rememberedFunding || [], e(n.rememberedFunding)
        })
    }

    function Mt(r) {
        xt(function(n) {
            for (var e = 0; e < r.length; e++) {
                var t = r[e]; - 1 === n.indexOf(t) && n.push(t)
            }
        })
    }

    function Dt() {
        return Object(A.A)(Dt, function() {
            var n = Fn({
                tag: "paypal-buttons",
                url: "" + Object(d.j)() + Ue.BUTTON,
                domain: Object(d.k)(),
                autoResize: {
                    width: !1,
                    height: !0
                },
                containerTemplate: It,
                logger: Object(d.h)(),
                prerenderTemplate: function(n) {
                    var o = n.state,
                        i = n.props,
                        e = n.doc;
                    return le("html", null, le("body", null, le("div", null, le(Pt, Object(N.a)({}, i, {
                        onClick: function(n) {
                            var e, t = n.fundingSource,
                                r = i.createOrder();
                            Object(A.eb)() && (e = Object(A.U)("", {
                                width: 450,
                                height: 535
                            }), Object(A.lb)(e, tt({
                                document: e.document,
                                props: {
                                    nonce: i.nonce
                                }
                            }))), o.prerenderDetails = {
                                win: e,
                                order: r,
                                fundingSource: t
                            }
                        }
                    }))))).render(we({
                        doc: e
                    }))
                },
                attributes: {
                    iframe: {
                        allowpaymentrequest: "allowpaymentrequest",
                        scrolling: "no"
                    }
                },
                validate: function() {
                    if (Object(A.F)()) throw new Error("Can not render button in IE intranet mode")
                },
                props: {
                    style: {
                        type: "object",
                        queryParam: !0,
                        required: !1,
                        decorate: function(n) {
                            var e = mt(n.value),
                                t = e.label,
                                r = e.layout,
                                o = e.color,
                                i = e.shape,
                                a = e.tagline,
                                c = e.height,
                                u = e.period,
                                s = Object(d.h)();
                            return s.info("button_render_color_" + o), s.info("button_render_shape_" + i), s.info("button_render_label_" + t), s.info("button_render_layout_" + t), s.info("button_render_tagline_" + a.toString()), {
                                label: t,
                                layout: r,
                                color: o,
                                shape: i,
                                tagline: a,
                                height: c,
                                period: u
                            }
                        },
                        validate: function(n) {
                            var e = n.value;
                            mt(void 0 === e ? {} : e)
                        },
                        default: function() {
                            return {}
                        }
                    },
                    locale: {
                        type: "object",
                        queryParam: !0,
                        value: function() {
                            return Object(d.g)()
                        }
                    },
                    sdkMeta: {
                        type: "string",
                        queryParam: !0,
                        sendToChild: !1,
                        value: function() {
                            return Object(d.l)()
                        }
                    },
                    createOrder: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var e = n.value,
                                r = n.props,
                                t = n.state;
                            return function() {
                                return O.a.try(function() {
                                    return e({}, {
                                        order: {
                                            create: function(n) {
                                                return (t.remoteCreateOrder || d.a)(r.clientID, n, {
                                                    fptiState: Jn.BUTTON
                                                })
                                            }
                                        }
                                    })
                                }).then(function(n) {
                                    var e, t = Object(d.h)();
                                    if (!n || "string" != typeof n) throw t.error("no_orderid_passed_to_createorder"), new Error("Expected a promise for a string order id to be passed to createOrder");
                                    return t.track(((e = {})[Bn.m.STATE] = Jn.CHECKOUT, e[Bn.m.TRANSITION] = Xn.RECIEVE_ORDER, e[Bn.m.CONTEXT_TYPE] = qn.ORDER_ID, e[Bn.m.CONTEXT_ID] = n, e[Bn.m.BUTTON_SESSION_UID] = r.buttonSessionID, e)), t.flush(), n
                                })
                            }
                        },
                        default: function(n) {
                            if (!n.props.createBillingAgreement) return function(n, e) {
                                return e.order.create({
                                    purchase_units: [{
                                        amount: {
                                            currency_code: "USD",
                                            value: "0.01"
                                        }
                                    }]
                                })
                            }
                        }
                    },
                    createBillingAgreement: {
                        type: "function",
                        required: !1,
                        validate: function(n) {
                            if (n.props.createOrder) throw new Error("Do not pass both createOrder and createBillingAgreement")
                        },
                        decorate: function(n) {
                            var e = n.value;
                            return function() {
                                return O.a.try(function() {
                                    if (!Object(d.o)()) throw new Error("Must pass vault=true to sdk to use billing agreement flow");
                                    return e()
                                }).then(function(n) {
                                    var e = Object(d.h)();
                                    if (!n || "string" != typeof n) throw e.error("no_billing_token_passed_to_createbillingagreement"), new Error("Expected a promise for a string billing token to be passed to createBillingAgreement");
                                    return e.flush(), n
                                })
                            }
                        }
                    },
                    onApprove: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var i = n.value,
                                a = n.props,
                                c = n.close;
                            return function(n, e) {
                                var t, r = this,
                                    o = Object(d.h)();
                                return o.info("button_authorize"), o.track(((t = {})[Bn.m.STATE] = Jn.CHECKOUT, t[Bn.m.TRANSITION] = Xn.CHECKOUT_AUTHORIZE, t[Bn.m.BUTTON_SESSION_UID] = a.buttonSessionID, t)), o.flush(), e = Object(N.a)({}, e, {
                                    redirect: function(n, e) {
                                        return O.a.try(function() {
                                            return c()
                                        }).then(function() {
                                            return Object(A.W)(n, e || window.top)
                                        })
                                    }
                                }), O.a.try(function() {
                                    return i.call(r, n, e)
                                }).catch(function(n) {
                                    if (a.onError) return a.onError(n);
                                    throw n
                                })
                            }
                        },
                        default: function(n) {
                            var t = n.props;
                            return function(n, e) {
                                if (t.intent === Bn.q.CAPTURE && t.commit) return e.order.capture().then(A.N);
                                throw new Error("Please specify onApprove callback to handle buyer approval success")
                            }
                        }
                    },
                    onShippingChange: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var c = n.value,
                                u = n.props,
                                s = n.onError;
                            return function(n, e) {
                                var t, r = this;
                                void 0 === e && (e = {});
                                var o = Object(d.h)();
                                o.info("button_shipping_change"), o.track(((t = {})[Bn.m.STATE] = Jn.CHECKOUT, t[Bn.m.TRANSITION] = Xn.CHECKOUT_SHIPPING_CHANGE, t[Bn.m.BUTTON_SESSION_UID] = u.buttonSessionID, t)), o.flush();
                                var i = function() {
                                        return O.a.resolve()
                                    },
                                    a = e.reject || function() {
                                        throw new Error("Missing reject action callback")
                                    };
                                return O.a.try(function() {
                                    return c.call(r, n, Object(N.a)({}, e, {
                                        resolve: i,
                                        reject: a
                                    }))
                                }).catch(function(n) {
                                    throw s && s(n), n
                                })
                            }
                        }
                    },
                    onCancel: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var i = n.value,
                                a = n.props,
                                c = n.close;
                            return function(n, e) {
                                var t, r = this;
                                void 0 === e && (e = {});
                                var o = Object(d.h)();
                                return o.info("button_cancel"), o.track(((t = {})[Bn.m.STATE] = Jn.CHECKOUT, t[Bn.m.TRANSITION] = Xn.CHECKOUT_CANCEL, t[Bn.m.BUTTON_SESSION_UID] = a.buttonSessionID, t)), o.flush(), e = Object(N.a)({}, e, {
                                    redirect: function(n, e) {
                                        return O.a.all([Object(A.W)(n, e || window.top), c()])
                                    }
                                }), O.a.try(function() {
                                    return i.call(r, n, e)
                                }).catch(function(n) {
                                    if (a.onError) return a.onError(n);
                                    throw n
                                })
                            }
                        },
                        default: function() {
                            return A.N
                        }
                    },
                    onClick: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var r = n.value,
                                o = n.props;
                            return function(n) {
                                var e, t = Object(d.h)();
                                return t.info("button_click"), t.track(((e = {})[Bn.m.STATE] = Jn.BUTTON, e[Bn.m.TRANSITION] = Xn.BUTTON_CLICK, e[Bn.m.BUTTON_TYPE] = Yn.IFRAME, e[Bn.m.BUTTON_SESSION_UID] = o.buttonSessionID, e[Bn.m.CHOSEN_FUNDING] = n && (n.card || n.fundingSource), e)), t.flush(), r.call(this, n)
                            }
                        },
                        default: function() {
                            return A.N
                        }
                    },
                    onRender: {
                        type: "function",
                        required: !1,
                        decorate: function(n) {
                            var t = n.value,
                                r = n.props;
                            return function() {
                                var n, e = Object(d.h)();
                                return e.track(((n = {})[Bn.m.STATE] = Jn.BUTTON, n[Bn.m.TRANSITION] = Xn.BUTTON_RENDER, n[Bn.m.BUTTON_TYPE] = Yn.IFRAME, n[Bn.m.BUTTON_SESSION_UID] = r.buttonSessionID, n)), e.flush(), t.apply(this, arguments)
                            }
                        },
                        default: function() {
                            return A.N
                        }
                    },
                    getPrerenderDetails: {
                        type: "function",
                        value: function(n) {
                            var e = n.state;
                            return function() {
                                return e.prerenderDetails
                            }
                        }
                    },
                    proxyRest: {
                        type: "function",
                        value: function(n) {
                            var e = n.state;
                            return function(n) {
                                e.remoteCreateOrder = n.createOrder
                            }
                        }
                    },
                    clientID: {
                        type: "string",
                        value: function() {
                            return Object(d.b)()
                        },
                        queryParam: !0
                    },
                    sessionID: {
                        type: "string",
                        value: function() {
                            return ne()
                        },
                        queryParam: !0
                    },
                    buttonSessionID: {
                        type: "string",
                        value: function() {
                            return Object(A.hb)()
                        },
                        queryParam: !0
                    },
                    env: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return Object(d.e)()
                        }
                    },
                    fundingEligibility: {
                        type: "object",
                        value: function() {
                            return Object({
                                paypal: Object({
                                    eligible: !0,
                                    guest: !1,
                                    remembered: !1
                                }),
                                venmo: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                credit: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                card: Object({
                                    eligible: !0,
                                    guest: !1,
                                    remembered: !1,
                                    vendors: Object({
                                        visa: Object({
                                            eligible: !0
                                        }),
                                        mastercard: Object({
                                            eligible: !0
                                        }),
                                        amex: Object({
                                            eligible: !0
                                        }),
                                        discover: Object({
                                            eligible: !1
                                        }),
                                        hiper: Object({
                                            eligible: !1
                                        }),
                                        elo: Object({
                                            eligible: !1
                                        }),
                                        jcb: Object({
                                            eligible: !1
                                        }),
                                        cup: Object({
                                            eligible: !1
                                        })
                                    }),
                                    branded: !0
                                }),
                                ideal: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                sepa: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                bancontact: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                giropay: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                sofort: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                eps: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                mybank: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                p24: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                zimpler: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                }),
                                wechatpay: Object({
                                    eligible: !1,
                                    guest: !1,
                                    remembered: !1
                                })
                            })
                        },
                        queryParam: !0,
                        serialization: "base64"
                    },
                    platform: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return Object(A.D)() ? Bn.s.MOBILE : Bn.s.DESKTOP
                        }
                    },
                    remembered: {
                        type: "array",
                        queryParam: !0,
                        value: function() {
                            return xt()
                        }
                    },
                    remember: {
                        type: "function",
                        value: function() {
                            return Mt
                        }
                    },
                    currency: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return Object(d.d)()
                        }
                    },
                    intent: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return Object(d.f)()
                        }
                    },
                    commit: {
                        type: "boolean",
                        queryParam: !0,
                        value: function() {
                            return Object(d.c)()
                        }
                    },
                    vault: {
                        type: "boolean",
                        queryParam: !0,
                        value: function() {
                            return Object(d.o)()
                        }
                    },
                    csp: {
                        type: "object",
                        required: !1
                    },
                    test: {
                        type: "object",
                        default: function() {
                            return {
                                action: "checkout"
                            }
                        }
                    }
                }
            });
            n.isChild() && function(n) {
                if (Object(A.F)()) return window.xchild.error(new Error("Can not render button in IE Intranet mode"));
                var i = n.xprops;
                if (!i) throw new Error("No xprops found");
                Object(A.u)().then(function(n) {
                    var e, t = Object(d.h)(),
                        r = Array.prototype.slice.call(document.querySelectorAll("[" + $n.FUNDING_SOURCE + "]")).map(function(n) {
                            return n.getAttribute($n.CARD) || n.getAttribute($n.FUNDING_SOURCE)
                        }).filter(function(n) {
                            return n && n !== Bn.p.CARD
                        }),
                        o = Vn.HORIZONTAL;
                    i.style && i.style.layout && (o = i.style.layout), t.track(((e = {})[Bn.m.STATE] = Jn.BUTTON, e[Bn.m.TRANSITION] = Xn.BUTTON_LOAD, e[Bn.m.BUTTON_TYPE] = Yn.IFRAME, e[Bn.m.FUNDING_LIST] = r.join(":"), e[Bn.m.FUNDING_COUNT] = r.length.toString(), e[Bn.m.PAGE_LOAD_TIME] = n ? n.toString() : "", e[Bn.m.BUTTON_LAYOUT] = o, e)), t.flush()
                }), i.proxyRest({
                    createOrder: d.a
                })
            }(n);
            var t = n.driver;
            return n.driver = function(n, e) {
                return Object(d.h)().info("driver_" + n + "_" + Object(d.e)()), Object(d.h)().flush(), t(n, e)
            }, n
        })
    }
    t.d(e, "request", function() {
        return kt
    }), t.d(e, "Buttons", function() {
        return Ft
    }), t.d(e, "Checkout", function() {
        return Ht
    }), t.d(e, "PopupOpenError", function() {
        return Ut
    }), t.d(e, "allowIframe", function() {
        return Bt
    }), t.d(e, "destroyAll", function() {
        return Wt
    }), t.d(e, "setup", function() {
        return Zt
    }), t.d(e, "destroy", function() {
        return zt
    });
    var kt = {
            addHeaderBuilder: function() {}
        },
        Ft = {
            __get__: function() {
                return Dt()
            }
        },
        Ht = {
            __get__: function() {
                var n = st();
                if (Object(d.q)()) return n
            }
        },
        Ut = {
            __get__: function() {
                if (Object(d.q)()) return A.a
            }
        },
        Bt = {
            __get__: function() {
                if (Object(d.q)()) return te
            }
        },
        Wt = {
            __get__: function() {
                if (Object(d.q)()) return Un
            }
        };

    function Zt() {
        Object(d.h)().addTrackingBuilder(function() {
            var n, e, t, r = window.root && window.root.token ? window.root.token : Object(A.v)("token") || void 0,
                o = ee();
            return r ? (e = qn.ORDER_ID, t = r) : o && (e = qn.BUTTON_SESSION_ID, t = o), (n = {})[Bn.m.CONTEXT_TYPE] = e, n[Bn.m.CONTEXT_ID] = t, n[Bn.m.BUTTON_SESSION_UID] = o, n[Bn.m.TOKEN] = r, n[Bn.m.REFERER] = window.xchild && window.xchild.getParentDomain ? window.xchild.getParentDomain() : window.location.host, n
        }), Dt(), st()
    }

    function zt() {
        var n;
        Hn(), delete window.__zoid_9_0_14__, (n = R().get("postMessageListener")) && n.cancel(), delete window.__post_robot_10_0_10__
    }
}, function(n, e, t) {
    "use strict";
    t.r(e);
    var r = t(8),
        o = t(6);

    function i() {
        Object(o.i)(), Object(r.b)()
    }
    t(0), t.d(e, "setup", function() {
        return i
    })
}, function(n, e, t) {
    "use strict";
    t.r(e);
    var d = t(5),
        l = t(1),
        f = "xo-pptm";

    function r() {
        try {
            if ("mock://www.paypal.com" !== window.mockDomain && !Object(d.q)()) {
                var n = function() {
                        var n = Object(d.i)();
                        if (n !== l.w) return "string" == typeof n ? n.split(",")[0] : void 0
                    }(),
                    e = Object(d.b)(),
                    t = window.location.hostname,
                    r = Object(d.j)(),
                    o = document.createElement("script"),
                    i = document.querySelector("head"),
                    a = (c = n, u = e, s = r + "/tagmanager/pptm.js?id=" + t + "&t=xo&v=" + Object(d.p)() + "&source=payments_sdk", c && (s += "&mrid=" + c), u && (s += "&client_id=" + u), s);
                o.src = a, o.id = f, o.async = !0, i && i.appendChild(o)
            }
        } catch (n) {
            window.console.error(n)
        }
        var c, u, s
    }

    function o() {
        document.addEventListener("DOMContentLoaded", r)
    }
    t.d(e, "setup", function() {
        return o
    })
}, function(n, e, t) {
    "use strict";
    t.r(e);
    var r, o = t(5);
    r = [{
        name: "buttons",
        setupHandler: "setupButtons",
        requirer: function() {
            return t(13)
        }
    }, {
        name: "muse",
        setupHandler: void 0,
        requirer: function() {
            return t(15)
        }
    }, {
        name: "__paypal-sdk-client__",
        setupHandler: "setupClient",
        requirer: function() {
            return t(14)
        }
    }], Object(o.r)(r)
}]));