var Yd = Object.defineProperty;
var Wd = (Xt, Bt, et) =>
  Bt in Xt
    ? Yd(Xt, Bt, { enumerable: !0, configurable: !0, writable: !0, value: et })
    : (Xt[Bt] = et);
var H = (Xt, Bt, et) => Wd(Xt, typeof Bt != "symbol" ? Bt + "" : Bt, et);
(function (Xt) {
  typeof define == "function" && define.amd ? define(Xt) : Xt();
})(function () {
  "use strict";
  function Xt(s, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          s,
          typeof (i = (function (n, o) {
            if (typeof n != "object" || n === null) return n;
            var a = n[Symbol.toPrimitive];
            if (a !== void 0) {
              var u = a.call(n, "string");
              if (typeof u != "object") return u;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(n);
          })(r.key)) == "symbol"
            ? i
            : String(i),
          r
        );
    }
    var i;
  }
  function Bt(s, e, t) {
    return (
      e && Xt(s.prototype, e),
      Object.defineProperty(s, "prototype", { writable: !1 }),
      s
    );
  }
  function et() {
    return (
      (et = Object.assign
        ? Object.assign.bind()
        : function (s) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r]);
            }
            return s;
          }),
      et.apply(this, arguments)
    );
  }
  function jn(s, e) {
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.constructor = s),
      Qi(s, e);
  }
  function $s(s) {
    return (
      ($s = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      $s(s)
    );
  }
  function Qi(s, e) {
    return (
      (Qi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, r) {
            return (t.__proto__ = r), t;
          }),
      Qi(s, e)
    );
  }
  function Tc() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function Vs(s, e, t) {
    return (
      (Vs = Tc()
        ? Reflect.construct.bind()
        : function (r, i, n) {
            var o = [null];
            o.push.apply(o, i);
            var a = new (Function.bind.apply(r, o))();
            return n && Qi(a, n.prototype), a;
          }),
      Vs.apply(null, arguments)
    );
  }
  function js(s) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (js = function (t) {
        if (
          t === null ||
          Function.toString.call(t).indexOf("[native code]") === -1
        )
          return t;
        if (typeof t != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (e !== void 0) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return Vs(t, arguments, $s(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Qi(r, t)
        );
      }),
      js(s)
    );
  }
  function Fc(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  var vr,
    Pc = function () {
      (this.before = void 0),
        (this.beforeLeave = void 0),
        (this.leave = void 0),
        (this.afterLeave = void 0),
        (this.beforeEnter = void 0),
        (this.enter = void 0),
        (this.afterEnter = void 0),
        (this.after = void 0);
    };
  (function (s) {
    (s[(s.off = 0)] = "off"),
      (s[(s.error = 1)] = "error"),
      (s[(s.warning = 2)] = "warning"),
      (s[(s.info = 3)] = "info"),
      (s[(s.debug = 4)] = "debug");
  })(vr || (vr = {}));
  var ba = vr.off,
    Xr = (function () {
      function s(t) {
        (this.t = void 0), (this.t = t);
      }
      (s.getLevel = function () {
        return ba;
      }),
        (s.setLevel = function (t) {
          return (ba = vr[t]);
        });
      var e = s.prototype;
      return (
        (e.error = function () {
          this.i(console.error, vr.error, [].slice.call(arguments));
        }),
        (e.warn = function () {
          this.i(console.warn, vr.warning, [].slice.call(arguments));
        }),
        (e.info = function () {
          this.i(console.info, vr.info, [].slice.call(arguments));
        }),
        (e.debug = function () {
          this.i(console.log, vr.debug, [].slice.call(arguments));
        }),
        (e.i = function (t, r, i) {
          r <= s.getLevel() &&
            t.apply(console, ["[" + this.t + "] "].concat(i));
        }),
        s
      );
    })();
  function mi(s) {
    return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function Ea(s) {
    return s && s.sensitive ? "" : "i";
  }
  var $t = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    $r = new ((function () {
      function s() {
        (this.o = $t),
          (this.u = void 0),
          (this.h = { after: null, before: null, parent: null });
      }
      var e = s.prototype;
      return (
        (e.toString = function (t) {
          return t.outerHTML;
        }),
        (e.toDocument = function (t) {
          return (
            this.u || (this.u = new DOMParser()),
            this.u.parseFromString(t, "text/html")
          );
        }),
        (e.toElement = function (t) {
          var r = document.createElement("div");
          return (r.innerHTML = t), r;
        }),
        (e.getHtml = function (t) {
          return (
            t === void 0 && (t = document), this.toString(t.documentElement)
          );
        }),
        (e.getWrapper = function (t) {
          return (
            t === void 0 && (t = document),
            t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
          );
        }),
        (e.getContainer = function (t) {
          return (
            t === void 0 && (t = document),
            t.querySelector(
              "[" + this.o.prefix + '="' + this.o.container + '"]'
            )
          );
        }),
        (e.removeContainer = function (t) {
          document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
        }),
        (e.addContainer = function (t, r) {
          var i = this.getContainer() || this.h.before;
          i
            ? this.l(t, i)
            : this.h.after
            ? this.h.after.parentNode.insertBefore(t, this.h.after)
            : this.h.parent
            ? this.h.parent.appendChild(t)
            : r.appendChild(t);
        }),
        (e.getSibling = function () {
          return this.h;
        }),
        (e.getNamespace = function (t) {
          t === void 0 && (t = document);
          var r = t.querySelector(
            "[" + this.o.prefix + "-" + this.o.namespace + "]"
          );
          return r
            ? r.getAttribute(this.o.prefix + "-" + this.o.namespace)
            : null;
        }),
        (e.getHref = function (t) {
          if (t.tagName && t.tagName.toLowerCase() === "a") {
            if (typeof t.href == "string") return t.href;
            var r = t.getAttribute("href") || t.getAttribute("xlink:href");
            if (r) return this.resolveUrl(r.baseVal || r);
          }
          return null;
        }),
        (e.resolveUrl = function () {
          var t = [].slice.call(arguments).length;
          if (t === 0)
            throw new Error(
              "resolveUrl requires at least one argument; got none."
            );
          var r = document.createElement("base");
          if (((r.href = arguments[0]), t === 1)) return r.href;
          var i = document.getElementsByTagName("head")[0];
          i.insertBefore(r, i.firstChild);
          for (var n, o = document.createElement("a"), a = 1; a < t; a++)
            (o.href = arguments[a]), (r.href = n = o.href);
          return i.removeChild(r), n;
        }),
        (e.l = function (t, r) {
          r.parentNode.insertBefore(t, r.nextSibling);
        }),
        (e.v = function (t) {
          return (
            (this.h = {
              after: t.nextElementSibling,
              before: t.previousElementSibling,
              parent: t.parentElement,
            }),
            this.h
          );
        }),
        s
      );
    })())(),
    Ac = (function () {
      function s() {
        (this.p = void 0), (this.m = []), (this.P = -1);
      }
      var e = s.prototype;
      return (
        (e.init = function (t, r) {
          this.p = "barba";
          var i = {
            data: {},
            ns: r,
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t,
          };
          (this.P = 0), this.m.push(i);
          var n = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history && window.history.replaceState(n, "", t);
        }),
        (e.change = function (t, r, i) {
          if (i && i.state) {
            var n = i.state,
              o = n.index;
            (r = this.g(this.P - o)), this.replace(n.states), (this.P = o);
          } else this.add(t, r);
          return r;
        }),
        (e.add = function (t, r, i, n) {
          var o = i ?? this.R(r),
            a = {
              data: n ?? {},
              ns: "tmp",
              scroll: { x: window.scrollX, y: window.scrollY },
              url: t,
            };
          switch (o) {
            case "push":
              (this.P = this.size), this.m.push(a);
              break;
            case "replace":
              this.set(this.P, a);
          }
          var u = { from: this.p, index: this.P, states: [].concat(this.m) };
          switch (o) {
            case "push":
              window.history && window.history.pushState(u, "", t);
              break;
            case "replace":
              window.history && window.history.replaceState(u, "", t);
          }
        }),
        (e.store = function (t, r) {
          var i = r || this.P,
            n = this.get(i);
          (n.data = et({}, n.data, t)), this.set(i, n);
          var o = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(o, "");
        }),
        (e.update = function (t, r) {
          var i = r || this.P,
            n = et({}, this.get(i), t);
          this.set(i, n);
        }),
        (e.remove = function (t) {
          t ? this.m.splice(t, 1) : this.m.pop(), this.P--;
        }),
        (e.clear = function () {
          (this.m = []), (this.P = -1);
        }),
        (e.replace = function (t) {
          this.m = t;
        }),
        (e.get = function (t) {
          return this.m[t];
        }),
        (e.set = function (t, r) {
          return (this.m[t] = r);
        }),
        (e.R = function (t) {
          var r = "push",
            i = t,
            n = $t.prefix + "-" + $t.history;
          return (
            i.hasAttribute && i.hasAttribute(n) && (r = i.getAttribute(n)), r
          );
        }),
        (e.g = function (t) {
          return Math.abs(t) > 1
            ? t > 0
              ? "forward"
              : "back"
            : t === 0
            ? "popstate"
            : t > 0
            ? "back"
            : "forward";
        }),
        Bt(s, [
          {
            key: "current",
            get: function () {
              return this.m[this.P];
            },
          },
          {
            key: "previous",
            get: function () {
              return this.P < 1 ? null : this.m[this.P - 1];
            },
          },
          {
            key: "size",
            get: function () {
              return this.m.length;
            },
          },
        ]),
        s
      );
    })(),
    Sa = new Ac(),
    Un = function (s, e) {
      try {
        var t = (function () {
          if (!e.next.html)
            return Promise.resolve(s).then(function (r) {
              var i = e.next;
              if (r) {
                var n = $r.toElement(r.html);
                (i.namespace = $r.getNamespace(n)),
                  (i.container = $r.getContainer(n)),
                  (i.url = r.url),
                  (i.html = r.html),
                  Sa.update({ ns: i.namespace });
                var o = $r.toDocument(r.html);
                document.title = o.title;
              }
            });
        })();
        return Promise.resolve(t && t.then ? t.then(function () {}) : void 0);
      } catch (r) {
        return Promise.reject(r);
      }
    },
    Ta = function s(e, t, r) {
      return e instanceof RegExp
        ? (function (i, n) {
            if (!n) return i;
            for (
              var o = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = o.exec(i.source);
              u;

            )
              n.push({
                name: u[1] || a++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
              }),
                (u = o.exec(i.source));
            return i;
          })(e, t)
        : Array.isArray(e)
        ? (function (i, n, o) {
            var a = i.map(function (u) {
              return s(u, n, o).source;
            });
            return new RegExp("(?:".concat(a.join("|"), ")"), Ea(o));
          })(e, t, r)
        : (function (i, n, o) {
            return (function (a, u, l) {
              l === void 0 && (l = {});
              for (
                var c = l.strict,
                  p = c !== void 0 && c,
                  f = l.start,
                  h = f === void 0 || f,
                  g = l.end,
                  d = g === void 0 || g,
                  _ = l.encode,
                  D =
                    _ === void 0
                      ? function (O) {
                          return O;
                        }
                      : _,
                  y = l.delimiter,
                  v = y === void 0 ? "/#?" : y,
                  m = l.endsWith,
                  x = "[".concat(mi(m === void 0 ? "" : m), "]|$"),
                  E = "[".concat(mi(v), "]"),
                  C = h ? "^" : "",
                  T = 0,
                  S = a;
                T < S.length;
                T++
              ) {
                var b = S[T];
                if (typeof b == "string") C += mi(D(b));
                else {
                  var M = mi(D(b.prefix)),
                    A = mi(D(b.suffix));
                  if (b.pattern)
                    if ((u && u.push(b), M || A))
                      if (b.modifier === "+" || b.modifier === "*") {
                        var B = b.modifier === "*" ? "?" : "";
                        C += "(?:"
                          .concat(M, "((?:")
                          .concat(b.pattern, ")(?:")
                          .concat(A)
                          .concat(M, "(?:")
                          .concat(b.pattern, "))*)")
                          .concat(A, ")")
                          .concat(B);
                      } else
                        C += "(?:"
                          .concat(M, "(")
                          .concat(b.pattern, ")")
                          .concat(A, ")")
                          .concat(b.modifier);
                    else
                      C +=
                        b.modifier === "+" || b.modifier === "*"
                          ? "((?:"
                              .concat(b.pattern, ")")
                              .concat(b.modifier, ")")
                          : "(".concat(b.pattern, ")").concat(b.modifier);
                  else C += "(?:".concat(M).concat(A, ")").concat(b.modifier);
                }
              }
              if (d)
                p || (C += "".concat(E, "?")),
                  (C += l.endsWith ? "(?=".concat(x, ")") : "$");
              else {
                var k = a[a.length - 1],
                  L =
                    typeof k == "string"
                      ? E.indexOf(k[k.length - 1]) > -1
                      : k === void 0;
                p || (C += "(?:".concat(E, "(?=").concat(x, "))?")),
                  L || (C += "(?=".concat(E, "|").concat(x, ")"));
              }
              return new RegExp(C, Ea(l));
            })(
              (function (a, u) {
                u === void 0 && (u = {});
                for (
                  var l = (function (A) {
                      for (var B = [], k = 0; k < A.length; ) {
                        var L = A[k];
                        if (L !== "*" && L !== "+" && L !== "?")
                          if (L !== "\\")
                            if (L !== "{")
                              if (L !== "}")
                                if (L !== ":")
                                  if (L !== "(")
                                    B.push({
                                      type: "CHAR",
                                      index: k,
                                      value: A[k++],
                                    });
                                  else {
                                    var O = 1,
                                      R = "";
                                    if (A[(F = k + 1)] === "?")
                                      throw new TypeError(
                                        'Pattern cannot start with "?" at '.concat(
                                          F
                                        )
                                      );
                                    for (; F < A.length; )
                                      if (A[F] !== "\\") {
                                        if (A[F] === ")") {
                                          if (--O == 0) {
                                            F++;
                                            break;
                                          }
                                        } else if (
                                          A[F] === "(" &&
                                          (O++, A[F + 1] !== "?")
                                        )
                                          throw new TypeError(
                                            "Capturing groups are not allowed at ".concat(
                                              F
                                            )
                                          );
                                        R += A[F++];
                                      } else R += A[F++] + A[F++];
                                    if (O)
                                      throw new TypeError(
                                        "Unbalanced pattern at ".concat(k)
                                      );
                                    if (!R)
                                      throw new TypeError(
                                        "Missing pattern at ".concat(k)
                                      );
                                    B.push({
                                      type: "PATTERN",
                                      index: k,
                                      value: R,
                                    }),
                                      (k = F);
                                  }
                                else {
                                  for (var I = "", F = k + 1; F < A.length; ) {
                                    var w = A.charCodeAt(F);
                                    if (
                                      !(
                                        (w >= 48 && w <= 57) ||
                                        (w >= 65 && w <= 90) ||
                                        (w >= 97 && w <= 122) ||
                                        w === 95
                                      )
                                    )
                                      break;
                                    I += A[F++];
                                  }
                                  if (!I)
                                    throw new TypeError(
                                      "Missing parameter name at ".concat(k)
                                    );
                                  B.push({ type: "NAME", index: k, value: I }),
                                    (k = F);
                                }
                              else
                                B.push({
                                  type: "CLOSE",
                                  index: k,
                                  value: A[k++],
                                });
                            else
                              B.push({ type: "OPEN", index: k, value: A[k++] });
                          else
                            B.push({
                              type: "ESCAPED_CHAR",
                              index: k++,
                              value: A[k++],
                            });
                        else
                          B.push({ type: "MODIFIER", index: k, value: A[k++] });
                      }
                      return B.push({ type: "END", index: k, value: "" }), B;
                    })(a),
                    c = u.prefixes,
                    p = c === void 0 ? "./" : c,
                    f = "[^".concat(mi(u.delimiter || "/#?"), "]+?"),
                    h = [],
                    g = 0,
                    d = 0,
                    _ = "",
                    D = function (A) {
                      if (d < l.length && l[d].type === A) return l[d++].value;
                    },
                    y = function (A) {
                      var B = D(A);
                      if (B !== void 0) return B;
                      var k = l[d],
                        L = k.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(k.type, " at ")
                          .concat(L, ", expected ")
                          .concat(A)
                      );
                    },
                    v = function () {
                      for (
                        var A, B = "";
                        (A = D("CHAR") || D("ESCAPED_CHAR"));

                      )
                        B += A;
                      return B;
                    };
                  d < l.length;

                ) {
                  var m = D("CHAR"),
                    x = D("NAME"),
                    E = D("PATTERN");
                  if (x || E)
                    p.indexOf((T = m || "")) === -1 && ((_ += T), (T = "")),
                      _ && (h.push(_), (_ = "")),
                      h.push({
                        name: x || g++,
                        prefix: T,
                        suffix: "",
                        pattern: E || f,
                        modifier: D("MODIFIER") || "",
                      });
                  else {
                    var C = m || D("ESCAPED_CHAR");
                    if (C) _ += C;
                    else if ((_ && (h.push(_), (_ = "")), D("OPEN"))) {
                      var T = v(),
                        S = D("NAME") || "",
                        b = D("PATTERN") || "",
                        M = v();
                      y("CLOSE"),
                        h.push({
                          name: S || (b ? g++ : ""),
                          pattern: S && !b ? f : b,
                          prefix: T,
                          suffix: M,
                          modifier: D("MODIFIER") || "",
                        });
                    } else y("END");
                  }
                }
                return h;
              })(i, o),
              n,
              o
            );
          })(e, t, r);
    },
    kc = {
      __proto__: null,
      update: Un,
      nextTick: function () {
        return new Promise(function (s) {
          window.requestAnimationFrame(s);
        });
      },
      pathToRegexp: Ta,
    },
    Fa = function () {
      return window.location.origin;
    },
    Ki = function (s) {
      return s === void 0 && (s = window.location.href), wr(s).port;
    },
    wr = function (s) {
      var e,
        t = s.match(/:\d+/);
      if (t === null)
        /^http/.test(s) && (e = 80), /^https/.test(s) && (e = 443);
      else {
        var r = t[0].substring(1);
        e = parseInt(r, 10);
      }
      var i,
        n = s.replace(Fa(), ""),
        o = {},
        a = n.indexOf("#");
      a >= 0 && ((i = n.slice(a + 1)), (n = n.slice(0, a)));
      var u = n.indexOf("?");
      return (
        u >= 0 && ((o = Pa(n.slice(u + 1))), (n = n.slice(0, u))),
        { hash: i, path: n, port: e, query: o }
      );
    },
    Pa = function (s) {
      return s.split("&").reduce(function (e, t) {
        var r = t.split("=");
        return (e[r[0]] = r[1]), e;
      }, {});
    },
    Us = function (s) {
      return (
        s === void 0 && (s = window.location.href),
        s.replace(/(\/#.*|\/|#.*)$/, "")
      );
    },
    Oc = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getAbsoluteHref: function (s, e) {
        return e === void 0 && (e = document.baseURI), new URL(s, e).href;
      },
      getOrigin: Fa,
      getPort: Ki,
      getPath: function (s) {
        return s === void 0 && (s = window.location.href), wr(s).path;
      },
      getQuery: function (s, e) {
        return (
          e === void 0 && (e = !1),
          e ? JSON.stringify(wr(s).query) : wr(s).query
        );
      },
      getHash: function (s) {
        return wr(s).hash;
      },
      parse: wr,
      parseQuery: Pa,
      clean: Us,
    };
  function Mc(s, e, t, r, i) {
    return (
      e === void 0 && (e = 2e3),
      new Promise(function (n, o) {
        var a = new XMLHttpRequest();
        (a.onreadystatechange = function () {
          if (a.readyState === XMLHttpRequest.DONE) {
            if (a.status === 200) {
              var u =
                a.responseURL !== "" && a.responseURL !== s ? a.responseURL : s;
              n({ html: a.responseText, url: et({ href: u }, wr(u)) }),
                r.update(s, { status: "fulfilled", target: u });
            } else if (a.status) {
              var l = { status: a.status, statusText: a.statusText };
              t(s, l), o(l), r.update(s, { status: "rejected" });
            }
          }
        }),
          (a.ontimeout = function () {
            var u = new Error("Timeout error [" + e + "]");
            t(s, u), o(u), r.update(s, { status: "rejected" });
          }),
          (a.onerror = function () {
            var u = new Error("Fetch error");
            t(s, u), o(u), r.update(s, { status: "rejected" });
          }),
          a.open("GET", s),
          (a.timeout = e),
          a.setRequestHeader(
            "Accept",
            "text/html,application/xhtml+xml,application/xml"
          ),
          a.setRequestHeader("x-barba", "yes"),
          i.all().forEach(function (u, l) {
            a.setRequestHeader(l, u);
          }),
          a.send();
      })
    );
  }
  function Rc(s) {
    return (
      !!s &&
      (typeof s == "object" || typeof s == "function") &&
      typeof s.then == "function"
    );
  }
  function yi(s, e) {
    return (
      e === void 0 && (e = {}),
      function () {
        var t = arguments,
          r = !1,
          i = new Promise(function (n, o) {
            e.async = function () {
              return (
                (r = !0),
                function (u, l) {
                  u ? o(u) : n(l);
                }
              );
            };
            var a = s.apply(e, [].slice.call(t));
            r || (Rc(a) ? a.then(n, o) : n(a));
          });
        return i;
      }
    );
  }
  var xr = new ((function (s) {
      function e() {
        var r;
        return (
          ((r = s.call(this) || this).logger = new Xr("@barba/core")),
          (r.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeOnce",
            "once",
            "afterOnce",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "beforeEnter",
            "enter",
            "afterEnter",
            "after",
          ]),
          (r.registered = new Map()),
          r.init(),
          r
        );
      }
      jn(e, s);
      var t = e.prototype;
      return (
        (t.init = function () {
          var r = this;
          this.registered.clear(),
            this.all.forEach(function (i) {
              r[i] ||
                (r[i] = function (n, o) {
                  r.registered.has(i) || r.registered.set(i, new Set()),
                    r.registered.get(i).add({ ctx: o || {}, fn: n });
                });
            });
        }),
        (t.do = function (r) {
          var i = arguments,
            n = this;
          if (this.registered.has(r)) {
            var o = Promise.resolve();
            return (
              this.registered.get(r).forEach(function (a) {
                o = o.then(function () {
                  return yi(a.fn, a.ctx).apply(void 0, [].slice.call(i, 1));
                });
              }),
              o.catch(function (a) {
                n.logger.debug("Hook error [" + r + "]"), n.logger.error(a);
              })
            );
          }
          return Promise.resolve();
        }),
        (t.clear = function () {
          var r = this;
          this.all.forEach(function (i) {
            delete r[i];
          }),
            this.init();
        }),
        (t.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var r = [];
          this.registered.forEach(function (i, n) {
            return r.push(n);
          }),
            this.logger.info("Registered hooks: " + r.join(","));
        }),
        e
      );
    })(Pc))(),
    Aa = (function () {
      function s(e) {
        if (((this.k = void 0), (this.O = []), typeof e == "boolean"))
          this.k = e;
        else {
          var t = Array.isArray(e) ? e : [e];
          this.O = t.map(function (r) {
            return Ta(r);
          });
        }
      }
      return (
        (s.prototype.checkHref = function (e) {
          if (typeof this.k == "boolean") return this.k;
          var t = wr(e).path;
          return this.O.some(function (r) {
            return r.exec(t) !== null;
          });
        }),
        s
      );
    })(),
    Lc = (function (s) {
      function e(r) {
        var i;
        return ((i = s.call(this, r) || this).T = new Map()), i;
      }
      jn(e, s);
      var t = e.prototype;
      return (
        (t.set = function (r, i, n, o, a) {
          return (
            this.T.set(r, { action: n, request: i, status: o, target: a ?? r }),
            { action: n, request: i, status: o, target: a }
          );
        }),
        (t.get = function (r) {
          return this.T.get(r);
        }),
        (t.getRequest = function (r) {
          return this.T.get(r).request;
        }),
        (t.getAction = function (r) {
          return this.T.get(r).action;
        }),
        (t.getStatus = function (r) {
          return this.T.get(r).status;
        }),
        (t.getTarget = function (r) {
          return this.T.get(r).target;
        }),
        (t.has = function (r) {
          return !this.checkHref(r) && this.T.has(r);
        }),
        (t.delete = function (r) {
          return this.T.delete(r);
        }),
        (t.update = function (r, i) {
          var n = et({}, this.T.get(r), i);
          return this.T.set(r, n), n;
        }),
        e
      );
    })(Aa),
    Bc = (function () {
      function s() {
        this.A = new Map();
      }
      var e = s.prototype;
      return (
        (e.set = function (t, r) {
          return this.A.set(t, r), { name: r };
        }),
        (e.get = function (t) {
          return this.A.get(t);
        }),
        (e.all = function () {
          return this.A;
        }),
        (e.has = function (t) {
          return this.A.has(t);
        }),
        (e.delete = function (t) {
          return this.A.delete(t);
        }),
        (e.clear = function () {
          return this.A.clear();
        }),
        s
      );
    })(),
    Nc = function () {
      return !window.history.pushState;
    },
    zc = function (s) {
      return !s.el || !s.href;
    },
    Ic = function (s) {
      var e = s.event;
      return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    },
    qc = function (s) {
      var e = s.el;
      return e.hasAttribute("target") && e.target === "_blank";
    },
    Hc = function (s) {
      var e = s.el;
      return (
        (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
        (e.hostname !== void 0 && window.location.hostname !== e.hostname)
      );
    },
    Yc = function (s) {
      var e = s.el;
      return e.port !== void 0 && Ki() !== Ki(e.href);
    },
    Wc = function (s) {
      var e = s.el;
      return e.getAttribute && typeof e.getAttribute("download") == "string";
    },
    Xc = function (s) {
      return s.el.hasAttribute($t.prefix + "-" + $t.prevent);
    },
    $c = function (s) {
      return !!s.el.closest("[" + $t.prefix + "-" + $t.prevent + '="all"]');
    },
    Vc = function (s) {
      var e = s.href;
      return Us(e) === Us() && Ki(e) === Ki();
    },
    jc = (function (s) {
      function e(r) {
        var i;
        return (
          ((i = s.call(this, r) || this).suite = []),
          (i.tests = new Map()),
          i.init(),
          i
        );
      }
      jn(e, s);
      var t = e.prototype;
      return (
        (t.init = function () {
          this.add("pushState", Nc),
            this.add("exists", zc),
            this.add("newTab", Ic),
            this.add("blank", qc),
            this.add("corsDomain", Hc),
            this.add("corsPort", Yc),
            this.add("download", Wc),
            this.add("preventSelf", Xc),
            this.add("preventAll", $c),
            this.add("sameUrl", Vc, !1);
        }),
        (t.add = function (r, i, n) {
          n === void 0 && (n = !0),
            this.tests.set(r, i),
            n && this.suite.push(r);
        }),
        (t.run = function (r, i, n, o) {
          return this.tests.get(r)({ el: i, event: n, href: o });
        }),
        (t.checkLink = function (r, i, n) {
          var o = this;
          return this.suite.some(function (a) {
            return o.run(a, r, i, n);
          });
        }),
        e
      );
    })(Aa),
    Gs = (function (s) {
      function e(t, r) {
        var i;
        return (
          r === void 0 && (r = "Barba error"),
          ((i =
            s.call.apply(s, [this].concat([].slice.call(arguments, 2))) ||
            this).error = void 0),
          (i.label = void 0),
          (i.error = t),
          (i.label = r),
          Error.captureStackTrace && Error.captureStackTrace(Fc(i), e),
          (i.name = "BarbaError"),
          i
        );
      }
      return jn(e, s), e;
    })(js(Error)),
    Uc = (function () {
      function s(t) {
        t === void 0 && (t = []),
          (this.logger = new Xr("@barba/core")),
          (this.all = []),
          (this.page = []),
          (this.once = []),
          (this.j = [
            { name: "namespace", type: "strings" },
            { name: "custom", type: "function" },
          ]),
          t && (this.all = this.all.concat(t)),
          this.update();
      }
      var e = s.prototype;
      return (
        (e.add = function (t, r) {
          t === "rule"
            ? this.j.splice(r.position || 0, 0, r.value)
            : this.all.push(r),
            this.update();
        }),
        (e.resolve = function (t, r) {
          var i = this;
          r === void 0 && (r = {});
          var n = r.once ? this.once : this.page;
          n = n.filter(
            r.self
              ? function (f) {
                  return f.name && f.name === "self";
                }
              : function (f) {
                  return !f.name || f.name !== "self";
                }
          );
          var o = new Map(),
            a = n.find(function (f) {
              var h = !0,
                g = {};
              return r.self && f.name === "self"
                ? (o.set(f, g), !0)
                : (i.j.reverse().forEach(function (d) {
                    h &&
                      ((h = i.M(f, d, t, g)),
                      f.from &&
                        f.to &&
                        (h = i.M(f, d, t, g, "from") && i.M(f, d, t, g, "to")),
                      f.from && !f.to && (h = i.M(f, d, t, g, "from")),
                      !f.from && f.to && (h = i.M(f, d, t, g, "to")));
                  }),
                  o.set(f, g),
                  h);
            }),
            u = o.get(a),
            l = [];
          if ((l.push(r.once ? "once" : "page"), r.self && l.push("self"), u)) {
            var c,
              p = [a];
            Object.keys(u).length > 0 && p.push(u),
              (c = this.logger).info.apply(
                c,
                ["Transition found [" + l.join(",") + "]"].concat(p)
              );
          } else this.logger.info("No transition found [" + l.join(",") + "]");
          return a;
        }),
        (e.update = function () {
          var t = this;
          (this.all = this.all
            .map(function (r) {
              return t.N(r);
            })
            .sort(function (r, i) {
              return r.priority - i.priority;
            })
            .reverse()
            .map(function (r) {
              return delete r.priority, r;
            })),
            (this.page = this.all.filter(function (r) {
              return r.leave !== void 0 || r.enter !== void 0;
            })),
            (this.once = this.all.filter(function (r) {
              return r.once !== void 0;
            }));
        }),
        (e.M = function (t, r, i, n, o) {
          var a = !0,
            u = !1,
            l = t,
            c = r.name,
            p = c,
            f = c,
            h = c,
            g = o ? l[o] : l,
            d = o === "to" ? i.next : i.current;
          if (o ? g && g[c] : g[c]) {
            switch (r.type) {
              case "strings":
              default:
                var _ = Array.isArray(g[p]) ? g[p] : [g[p]];
                d[p] && _.indexOf(d[p]) !== -1 && (u = !0),
                  _.indexOf(d[p]) === -1 && (a = !1);
                break;
              case "object":
                var D = Array.isArray(g[f]) ? g[f] : [g[f]];
                d[f]
                  ? (d[f].name && D.indexOf(d[f].name) !== -1 && (u = !0),
                    D.indexOf(d[f].name) === -1 && (a = !1))
                  : (a = !1);
                break;
              case "function":
                g[h](i) ? (u = !0) : (a = !1);
            }
            u &&
              (o ? ((n[o] = n[o] || {}), (n[o][c] = l[o][c])) : (n[c] = l[c]));
          }
          return a;
        }),
        (e.S = function (t, r, i) {
          var n = 0;
          return (
            (t[r] || (t.from && t.from[r]) || (t.to && t.to[r])) &&
              ((n += Math.pow(10, i)),
              t.from && t.from[r] && (n += 1),
              t.to && t.to[r] && (n += 2)),
            n
          );
        }),
        (e.N = function (t) {
          var r = this;
          t.priority = 0;
          var i = 0;
          return (
            this.j.forEach(function (n, o) {
              i += r.S(t, n.name, o + 1);
            }),
            (t.priority = i),
            t
          );
        }),
        s
      );
    })();
  function Zi(s, e) {
    try {
      var t = s();
    } catch (r) {
      return e(r);
    }
    return t && t.then ? t.then(void 0, e) : t;
  }
  var Gc = (function () {
      function s(t) {
        t === void 0 && (t = []),
          (this.logger = new Xr("@barba/core")),
          (this.store = void 0),
          (this.C = !1),
          (this.store = new Uc(t));
      }
      var e = s.prototype;
      return (
        (e.get = function (t, r) {
          return this.store.resolve(t, r);
        }),
        (e.doOnce = function (t) {
          var r = t.data,
            i = t.transition;
          try {
            var n = function () {
                o.C = !1;
              },
              o = this,
              a = i || {};
            o.C = !0;
            var u = Zi(
              function () {
                return Promise.resolve(o.L("beforeOnce", r, a)).then(
                  function () {
                    return Promise.resolve(o.once(r, a)).then(function () {
                      return Promise.resolve(o.L("afterOnce", r, a)).then(
                        function () {}
                      );
                    });
                  }
                );
              },
              function (l) {
                (o.C = !1),
                  o.logger.debug("Transition error [before/after/once]"),
                  o.logger.error(l);
              }
            );
            return Promise.resolve(u && u.then ? u.then(n) : n());
          } catch (l) {
            return Promise.reject(l);
          }
        }),
        (e.doPage = function (t) {
          var r = t.data,
            i = t.transition,
            n = t.page,
            o = t.wrapper;
          try {
            var a = function (f) {
                u.C = !1;
              },
              u = this,
              l = i || {},
              c = l.sync === !0 || !1;
            u.C = !0;
            var p = Zi(
              function () {
                function f() {
                  return Promise.resolve(u.L("before", r, l)).then(function () {
                    function g(_) {
                      return Promise.resolve(u.remove(r)).then(function () {
                        return Promise.resolve(u.L("after", r, l)).then(
                          function () {}
                        );
                      });
                    }
                    var d = (function () {
                      if (c)
                        return Zi(
                          function () {
                            return Promise.resolve(u.add(r, o)).then(
                              function () {
                                return Promise.resolve(
                                  u.L("beforeLeave", r, l)
                                ).then(function () {
                                  return Promise.resolve(
                                    u.L("beforeEnter", r, l)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        u.leave(r, l),
                                        u.enter(r, l),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        u.L("afterLeave", r, l)
                                      ).then(function () {
                                        return Promise.resolve(
                                          u.L("afterEnter", r, l)
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              }
                            );
                          },
                          function (v) {
                            if (u.H(v))
                              throw new Gs(v, "Transition error [sync]");
                          }
                        );
                      var _ = function (v) {
                          return Zi(
                            function () {
                              var m = (function () {
                                if (D !== !1)
                                  return Promise.resolve(u.add(r, o)).then(
                                    function () {
                                      return Promise.resolve(
                                        u.L("beforeEnter", r, l)
                                      ).then(function () {
                                        return Promise.resolve(
                                          u.enter(r, l, D)
                                        ).then(function () {
                                          return Promise.resolve(
                                            u.L("afterEnter", r, l)
                                          ).then(function () {});
                                        });
                                      });
                                    }
                                  );
                              })();
                              if (m && m.then) return m.then(function () {});
                            },
                            function (m) {
                              if (u.H(m))
                                throw new Gs(
                                  m,
                                  "Transition error [before/after/enter]"
                                );
                            }
                          );
                        },
                        D = !1,
                        y = Zi(
                          function () {
                            return Promise.resolve(
                              u.L("beforeLeave", r, l)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([u.leave(r, l), Un(n, r)]).then(
                                  function (v) {
                                    return v[0];
                                  }
                                )
                              ).then(function (v) {
                                return (
                                  (D = v),
                                  Promise.resolve(u.L("afterLeave", r, l)).then(
                                    function () {}
                                  )
                                );
                              });
                            });
                          },
                          function (v) {
                            if (u.H(v))
                              throw new Gs(
                                v,
                                "Transition error [before/after/leave]"
                              );
                          }
                        );
                      return y && y.then ? y.then(_) : _();
                    })();
                    return d && d.then ? d.then(g) : g();
                  });
                }
                var h = (function () {
                  if (c) return Promise.resolve(Un(n, r)).then(function () {});
                })();
                return h && h.then ? h.then(f) : f();
              },
              function (f) {
                throw (
                  ((u.C = !1),
                  f.name && f.name === "BarbaError"
                    ? (u.logger.debug(f.label), u.logger.error(f.error), f)
                    : (u.logger.debug("Transition error [page]"),
                      u.logger.error(f),
                      f))
                );
              }
            );
            return Promise.resolve(p && p.then ? p.then(a) : a());
          } catch (f) {
            return Promise.reject(f);
          }
        }),
        (e.once = function (t, r) {
          try {
            return Promise.resolve(xr.do("once", t, r)).then(function () {
              return r.once ? yi(r.once, r)(t) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.leave = function (t, r) {
          try {
            return Promise.resolve(xr.do("leave", t, r)).then(function () {
              return r.leave ? yi(r.leave, r)(t) : Promise.resolve();
            });
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.enter = function (t, r, i) {
          try {
            return Promise.resolve(xr.do("enter", t, r)).then(function () {
              return r.enter ? yi(r.enter, r)(t, i) : Promise.resolve();
            });
          } catch (n) {
            return Promise.reject(n);
          }
        }),
        (e.add = function (t, r) {
          try {
            return (
              $r.addContainer(t.next.container, r),
              xr.do("nextAdded", t),
              Promise.resolve()
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.remove = function (t) {
          try {
            return (
              $r.removeContainer(t.current.container),
              xr.do("currentRemoved", t),
              Promise.resolve()
            );
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.H = function (t) {
          return t.message
            ? !/Timeout error|Fetch error/.test(t.message)
            : !t.status;
        }),
        (e.L = function (t, r, i) {
          try {
            return Promise.resolve(xr.do(t, r, i)).then(function () {
              return i[t] ? yi(i[t], i)(r) : Promise.resolve();
            });
          } catch (n) {
            return Promise.reject(n);
          }
        }),
        Bt(s, [
          {
            key: "isRunning",
            get: function () {
              return this.C;
            },
            set: function (t) {
              this.C = t;
            },
          },
          {
            key: "hasOnce",
            get: function () {
              return this.store.once.length > 0;
            },
          },
          {
            key: "hasSelf",
            get: function () {
              return this.store.all.some(function (t) {
                return t.name === "self";
              });
            },
          },
          {
            key: "shouldWait",
            get: function () {
              return this.store.all.some(function (t) {
                return (t.to && !t.to.route) || t.sync;
              });
            },
          },
        ]),
        s
      );
    })(),
    Qc = (function () {
      function s(e) {
        var t = this;
        (this.names = [
          "beforeLeave",
          "afterLeave",
          "beforeEnter",
          "afterEnter",
        ]),
          (this.byNamespace = new Map()),
          e.length !== 0 &&
            (e.forEach(function (r) {
              t.byNamespace.set(r.namespace, r);
            }),
            this.names.forEach(function (r) {
              xr[r](t._(r));
            }));
      }
      return (
        (s.prototype._ = function (e) {
          var t = this;
          return function (r) {
            var i = e.match(/enter/i) ? r.next : r.current,
              n = t.byNamespace.get(i.namespace);
            return n && n[e] ? yi(n[e], n)(r) : Promise.resolve();
          };
        }),
        s
      );
    })();
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (s) {
        var e = this;
        do {
          if (e.matches(s)) return e;
          e = e.parentElement || e.parentNode;
        } while (e !== null && e.nodeType === 1);
        return null;
      });
  var Kc = {
      container: null,
      html: "",
      namespace: "",
      url: { hash: "", href: "", path: "", port: null, query: {} },
    },
    Ji = new ((function () {
      function s() {
        (this.version = "2.10.3"),
          (this.schemaPage = Kc),
          (this.Logger = Xr),
          (this.logger = new Xr("@barba/core")),
          (this.plugins = []),
          (this.timeout = void 0),
          (this.cacheIgnore = void 0),
          (this.cacheFirstPage = void 0),
          (this.prefetchIgnore = void 0),
          (this.preventRunning = void 0),
          (this.hooks = xr),
          (this.cache = void 0),
          (this.headers = void 0),
          (this.prevent = void 0),
          (this.transitions = void 0),
          (this.views = void 0),
          (this.dom = $r),
          (this.helpers = kc),
          (this.history = Sa),
          (this.request = Mc),
          (this.url = Oc),
          (this.D = void 0),
          (this.B = void 0),
          (this.q = void 0),
          (this.F = void 0);
      }
      var e = s.prototype;
      return (
        (e.use = function (t, r) {
          var i = this.plugins;
          i.indexOf(t) > -1
            ? this.logger.warn("Plugin [" + t.name + "] already installed.")
            : typeof t.install == "function"
            ? (t.install(this, r), i.push(t))
            : this.logger.warn(
                "Plugin [" + t.name + '] has no "install" method.'
              );
        }),
        (e.init = function (t) {
          var r = t === void 0 ? {} : t,
            i = r.transitions,
            n = i === void 0 ? [] : i,
            o = r.views,
            a = o === void 0 ? [] : o,
            u = r.schema,
            l = u === void 0 ? $t : u,
            c = r.requestError,
            p = r.timeout,
            f = p === void 0 ? 2e3 : p,
            h = r.cacheIgnore,
            g = h !== void 0 && h,
            d = r.cacheFirstPage,
            _ = d !== void 0 && d,
            D = r.prefetchIgnore,
            y = D !== void 0 && D,
            v = r.preventRunning,
            m = v !== void 0 && v,
            x = r.prevent,
            E = x === void 0 ? null : x,
            C = r.debug,
            T = r.logLevel;
          if (
            (Xr.setLevel(
              (C !== void 0 && C) === !0 ? "debug" : T === void 0 ? "off" : T
            ),
            this.logger.info(this.version),
            Object.keys(l).forEach(function (M) {
              $t[M] && ($t[M] = l[M]);
            }),
            (this.B = c),
            (this.timeout = f),
            (this.cacheIgnore = g),
            (this.cacheFirstPage = _),
            (this.prefetchIgnore = y),
            (this.preventRunning = m),
            (this.q = this.dom.getWrapper()),
            !this.q)
          )
            throw new Error("[@barba/core] No Barba wrapper found");
          this.I();
          var S = this.data.current;
          if (!S.container)
            throw new Error("[@barba/core] No Barba container found");
          if (
            ((this.cache = new Lc(g)),
            (this.headers = new Bc()),
            (this.prevent = new jc(y)),
            (this.transitions = new Gc(n)),
            (this.views = new Qc(a)),
            E !== null)
          ) {
            if (typeof E != "function")
              throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", E);
          }
          this.history.init(S.url.href, S.namespace),
            _ &&
              this.cache.set(
                S.url.href,
                Promise.resolve({ html: S.html, url: S.url }),
                "init",
                "fulfilled"
              ),
            (this.U = this.U.bind(this)),
            (this.$ = this.$.bind(this)),
            (this.X = this.X.bind(this)),
            this.G(),
            this.plugins.forEach(function (M) {
              return M.init();
            });
          var b = this.data;
          (b.trigger = "barba"),
            (b.next = b.current),
            (b.current = et({}, this.schemaPage)),
            this.hooks.do("ready", b),
            this.once(b),
            this.I();
        }),
        (e.destroy = function () {
          this.I(),
            this.J(),
            this.history.clear(),
            this.hooks.clear(),
            (this.plugins = []);
        }),
        (e.force = function (t) {
          window.location.assign(t);
        }),
        (e.go = function (t, r, i) {
          var n;
          if (
            (r === void 0 && (r = "barba"),
            (this.F = null),
            this.transitions.isRunning)
          )
            this.force(t);
          else if (
            !(n =
              r === "popstate"
                ? this.history.current &&
                  this.url.getPath(this.history.current.url) ===
                    this.url.getPath(t) &&
                  this.url.getQuery(this.history.current.url, !0) ===
                    this.url.getQuery(t, !0)
                : this.prevent.run("sameUrl", null, null, t)) ||
            this.transitions.hasSelf
          )
            return (
              (r = this.history.change(
                this.cache.has(t) ? this.cache.get(t).target : t,
                r,
                i
              )),
              i && (i.stopPropagation(), i.preventDefault()),
              this.page(t, r, i ?? void 0, n)
            );
        }),
        (e.once = function (t) {
          try {
            var r = this;
            return Promise.resolve(r.hooks.do("beforeEnter", t)).then(
              function () {
                function i() {
                  return Promise.resolve(r.hooks.do("afterEnter", t)).then(
                    function () {}
                  );
                }
                var n = (function () {
                  if (r.transitions.hasOnce) {
                    var o = r.transitions.get(t, { once: !0 });
                    return Promise.resolve(
                      r.transitions.doOnce({ transition: o, data: t })
                    ).then(function () {});
                  }
                })();
                return n && n.then ? n.then(i) : i();
              }
            );
          } catch (i) {
            return Promise.reject(i);
          }
        }),
        (e.page = function (t, r, i, n) {
          try {
            var o,
              a = function () {
                var p = u.data;
                return Promise.resolve(u.hooks.do("page", p)).then(function () {
                  var f = (function (h, g) {
                    try {
                      var d =
                        ((_ = u.transitions.get(p, { once: !1, self: n })),
                        Promise.resolve(
                          u.transitions.doPage({
                            data: p,
                            page: o,
                            transition: _,
                            wrapper: u.q,
                          })
                        ).then(function () {
                          u.I();
                        }));
                    } catch {
                      return g();
                    }
                    var _;
                    return d && d.then ? d.then(void 0, g) : d;
                  })(0, function () {
                    Xr.getLevel() === 0 && u.force(p.next.url.href);
                  });
                  if (f && f.then) return f.then(function () {});
                });
              },
              u = this;
            if (
              ((u.data.next.url = et({ href: t }, u.url.parse(t))),
              (u.data.trigger = r),
              (u.data.event = i),
              u.cache.has(t))
            )
              o = u.cache.update(t, { action: "click" }).request;
            else {
              var l = u.request(
                t,
                u.timeout,
                u.onRequestError.bind(u, r),
                u.cache,
                u.headers
              );
              l.then(function (p) {
                p.url.href !== t && u.history.add(p.url.href, r, "replace");
              }),
                (o = u.cache.set(t, l, "click", "pending").request);
            }
            var c = (function () {
              if (u.transitions.shouldWait)
                return Promise.resolve(Un(o, u.data)).then(function () {});
            })();
            return Promise.resolve(c && c.then ? c.then(a) : a());
          } catch (p) {
            return Promise.reject(p);
          }
        }),
        (e.onRequestError = function (t) {
          this.transitions.isRunning = !1;
          var r = [].slice.call(arguments, 1),
            i = r[0],
            n = r[1],
            o = this.cache.getAction(i);
          return (
            this.cache.delete(i),
            (this.B && this.B(t, o, i, n) === !1) ||
              (o === "click" && this.force(i)),
            !1
          );
        }),
        (e.prefetch = function (t) {
          var r = this;
          (t = this.url.getAbsoluteHref(t)),
            this.cache.has(t) ||
              this.cache.set(
                t,
                this.request(
                  t,
                  this.timeout,
                  this.onRequestError.bind(this, "barba"),
                  this.cache,
                  this.headers
                ).catch(function (i) {
                  r.logger.error(i);
                }),
                "prefetch",
                "pending"
              );
        }),
        (e.G = function () {
          this.prefetchIgnore !== !0 &&
            (document.addEventListener("mouseover", this.U),
            document.addEventListener("touchstart", this.U)),
            document.addEventListener("click", this.$),
            window.addEventListener("popstate", this.X);
        }),
        (e.J = function () {
          this.prefetchIgnore !== !0 &&
            (document.removeEventListener("mouseover", this.U),
            document.removeEventListener("touchstart", this.U)),
            document.removeEventListener("click", this.$),
            window.removeEventListener("popstate", this.X);
        }),
        (e.U = function (t) {
          var r = this,
            i = this.W(t);
          if (i) {
            var n = this.url.getAbsoluteHref(this.dom.getHref(i));
            this.prevent.checkHref(n) ||
              this.cache.has(n) ||
              this.cache.set(
                n,
                this.request(
                  n,
                  this.timeout,
                  this.onRequestError.bind(this, i),
                  this.cache,
                  this.headers
                ).catch(function (o) {
                  r.logger.error(o);
                }),
                "enter",
                "pending"
              );
          }
        }),
        (e.$ = function (t) {
          var r = this.W(t);
          if (r) {
            if (this.transitions.isRunning && this.preventRunning)
              return t.preventDefault(), void t.stopPropagation();
            (this.F = t), this.go(this.dom.getHref(r), r, t);
          }
        }),
        (e.X = function (t) {
          this.go(this.url.getHref(), "popstate", t);
        }),
        (e.W = function (t) {
          for (var r = t.target; r && !this.dom.getHref(r); ) r = r.parentNode;
          if (r && !this.prevent.checkLink(r, t, this.dom.getHref(r))) return r;
        }),
        (e.I = function () {
          var t = this.url.getHref(),
            r = {
              container: this.dom.getContainer(),
              html: this.dom.getHtml(),
              namespace: this.dom.getNamespace(),
              url: et({ href: t }, this.url.parse(t)),
            };
          (this.D = {
            current: r,
            event: void 0,
            next: et({}, this.schemaPage),
            trigger: void 0,
          }),
            this.hooks.do("reset", this.data);
        }),
        Bt(s, [
          {
            key: "data",
            get: function () {
              return this.D;
            },
          },
          {
            key: "wrapper",
            get: function () {
              return this.q;
            },
          },
        ]),
        s
      );
    })())();
  function or(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function ka(s, e) {
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.constructor = s),
      (s.__proto__ = e);
  }
  /*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Dt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    vi = { duration: 0.5, overwrite: !1, delay: 0 },
    Qs,
    qe,
    fe,
    Vt = 1e8,
    $e = 1 / Vt,
    Ks = Math.PI * 2,
    Zc = Ks / 4,
    Jc = 0,
    Oa = Math.sqrt,
    ef = Math.cos,
    tf = Math.sin,
    Re = function (e) {
      return typeof e == "string";
    },
    De = function (e) {
      return typeof e == "function";
    },
    ar = function (e) {
      return typeof e == "number";
    },
    Zs = function (e) {
      return typeof e > "u";
    },
    jt = function (e) {
      return typeof e == "object";
    },
    lt = function (e) {
      return e !== !1;
    },
    Js = function () {
      return typeof window < "u";
    },
    Gn = function (e) {
      return De(e) || Re(e);
    },
    Ma =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Ve = Array.isArray,
    eo = /(?:-?\.?\d|\.)+/gi,
    Ra = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    wi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    to = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    La = /[+-]=-?[.\d]+/,
    Ba = /[^,'"\[\]\s]+/gi,
    rf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    pe,
    Ut,
    ro,
    io,
    mt = {},
    Qn = {},
    Na,
    za = function (e) {
      return (Qn = Ci(e, mt)) && ht;
    },
    no = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    en = function (e, t) {
      return !t && console.warn(e);
    },
    Ia = function (e, t) {
      return (e && (mt[e] = t) && Qn && (Qn[e] = t)) || mt;
    },
    tn = function () {
      return 0;
    },
    nf = { suppressEvents: !0, isStart: !0, kill: !1 },
    Kn = { suppressEvents: !0, kill: !1 },
    sf = { suppressEvents: !0 },
    so = {},
    Cr = [],
    oo = {},
    qa,
    yt = {},
    ao = {},
    Ha = 30,
    Zn = [],
    uo = "",
    lo = function (e) {
      var t = e[0],
        r,
        i;
      if ((jt(t) || De(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
        for (i = Zn.length; i-- && !Zn[i].targetTest(t); );
        r = Zn[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new gu(e[i], r)))) ||
          e.splice(i, 1);
      return e;
    },
    Vr = function (e) {
      return e._gsap || lo(kt(e))[0]._gsap;
    },
    Ya = function (e, t, r) {
      return (r = e[t]) && De(r)
        ? e[t]()
        : (Zs(r) && e.getAttribute && e.getAttribute(t)) || r;
    },
    ct = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ve = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Se = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    xi = function (e, t) {
      var r = t.charAt(0),
        i = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
      );
    },
    of = function (e, t) {
      for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
      return i < r;
    },
    Jn = function () {
      var e = Cr.length,
        t = Cr.slice(0),
        r,
        i;
      for (oo = {}, Cr.length = 0, r = 0; r < e; r++)
        (i = t[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Wa = function (e, t, r, i) {
      Cr.length && !qe && Jn(),
        e.render(t, r, qe && t < 0 && (e._initted || e._startAt)),
        Cr.length && !qe && Jn();
    },
    Xa = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Ba).length < 2
        ? t
        : Re(e)
        ? e.trim()
        : e;
    },
    $a = function (e) {
      return e;
    },
    vt = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    af = function (e) {
      return function (t, r) {
        for (var i in r)
          i in t || (i === "duration" && e) || i === "ease" || (t[i] = r[i]);
      };
    },
    Ci = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Va = function s(e, t) {
      for (var r in t)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (e[r] = jt(t[r]) ? s(e[r] || (e[r] = {}), t[r]) : t[r]);
      return e;
    },
    es = function (e, t) {
      var r = {},
        i;
      for (i in e) i in t || (r[i] = e[i]);
      return r;
    },
    rn = function (e) {
      var t = e.parent || pe,
        r = e.keyframes ? af(Ve(e.keyframes)) : vt;
      if (lt(e.inherit))
        for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    uf = function (e, t) {
      for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; );
      return r < 0;
    },
    ja = function (e, t, r, i, n) {
      var o = e[i],
        a;
      if (n) for (a = t[n]; o && o[n] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[r]), (e[r] = t)),
        t._next ? (t._next._prev = t) : (e[i] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    ts = function (e, t, r, i) {
      r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
      var n = t._prev,
        o = t._next;
      n ? (n._next = o) : e[r] === t && (e[r] = o),
        o ? (o._prev = n) : e[i] === t && (e[i] = n),
        (t._next = t._prev = t.parent = null);
    },
    br = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    jr = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
      return e;
    },
    lf = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    co = function (e, t, r, i) {
      return (
        e._startAt &&
        (qe
          ? e._startAt.revert(Kn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, i))
      );
    },
    cf = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    Ua = function (e) {
      return e._repeat ? bi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    bi = function (e, t) {
      var r = Math.floor((e = Se(e / t)));
      return e && r === e ? r - 1 : r;
    },
    rs = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    is = function (e) {
      return (e._end = Se(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || $e) || 0)
      ));
    },
    ns = function (e, t) {
      var r = e._dp;
      return (
        r &&
          r.smoothChildTiming &&
          e._ts &&
          ((e._start = Se(
            r._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          is(e),
          r._dirty || jr(r, e)),
        e
      );
    },
    Ga = function (e, t) {
      var r;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((r = rs(e.rawTime(), t)),
          (!t._dur || sn(0, t.totalDuration(), r) - t._tTime > $e) &&
            t.render(r, !0)),
        jr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (r = e; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        e._zTime = -1e-8;
      }
    },
    Gt = function (e, t, r, i) {
      return (
        t.parent && br(t),
        (t._start = Se(
          (ar(r) ? r : r || e !== pe ? At(e, r, t) : e._time) + t._delay
        )),
        (t._end = Se(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        ja(e, t, "_first", "_last", e._sort ? "_start" : 0),
        fo(t) || (e._recent = t),
        i || Ga(e, t),
        e._ts < 0 && ns(e, e._tTime),
        e
      );
    },
    Qa = function (e, t) {
      return (
        (mt.ScrollTrigger || no("scrollTrigger", t)) &&
        mt.ScrollTrigger.create(t, e)
      );
    },
    Ka = function (e, t, r, i, n) {
      if ((wo(e, t, n), !e._initted)) return 1;
      if (
        !r &&
        e._pt &&
        !qe &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        qa !== xt.frame
      )
        return Cr.push(e), (e._lazy = [n, i]), 1;
    },
    ff = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    fo = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    hf = function (e, t, r, i) {
      var n = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && ff(e) && !(!e._initted && fo(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !fo(e))))
            ? 0
            : 1,
        a = e._rDelay,
        u = 0,
        l,
        c,
        p;
      if (
        (a &&
          e._repeat &&
          ((u = sn(0, e._tDur, t)),
          (c = bi(u, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== bi(e._tTime, a) &&
            ((n = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== n || qe || i || e._zTime === $e || (!t && e._zTime))
      ) {
        if (!e._initted && Ka(e, t, i, r, u)) return;
        for (
          p = e._zTime,
            e._zTime = t || (r ? $e : 0),
            r || (r = t && !p),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = u,
            l = e._pt;
          l;

        )
          l.r(o, l.d), (l = l._next);
        t < 0 && co(e, t, r, !0),
          e._onUpdate && !r && wt(e, "onUpdate"),
          u && e._repeat && !r && e.parent && wt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && br(e, 1),
            !r &&
              !qe &&
              (wt(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    df = function (e, t, r) {
      var i;
      if (r > t)
        for (i = e._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > t) return i;
          i = i._next;
        }
      else
        for (i = e._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < t) return i;
          i = i._prev;
        }
    },
    Ei = function (e, t, r, i) {
      var n = e._repeat,
        o = Se(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !i && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = n ? (n < 0 ? 1e10 : Se(o * (n + 1) + e._rDelay * n)) : o),
        a > 0 && !i && ns(e, (e._tTime = e._tDur * a)),
        e.parent && is(e),
        r || jr(e.parent, e),
        e
      );
    },
    Za = function (e) {
      return e instanceof tt ? jr(e) : Ei(e, e._dur);
    },
    pf = { _start: 0, endTime: tn, totalDuration: tn },
    At = function s(e, t, r) {
      var i = e.labels,
        n = e._recent || pf,
        o = e.duration() >= Vt ? n.endTime(!1) : e._dur,
        a,
        u,
        l;
      return Re(t) && (isNaN(t) || t in i)
        ? ((u = t.charAt(0)),
          (l = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          u === "<" || u === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (l ? (a < 0 ? n : r).totalDuration() / 100 : 1))
            : a < 0
            ? (t in i || (i[t] = o), i[t])
            : ((u = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              l && r && (u = (u / 100) * (Ve(r) ? r[0] : r).totalDuration()),
              a > 1 ? s(e, t.substr(0, a - 1), r) + u : o + u))
        : t == null
        ? o
        : +t;
    },
    nn = function (e, t, r) {
      var i = ar(t[1]),
        n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[n],
        a,
        u;
      if ((i && (o.duration = t[1]), (o.parent = r), e)) {
        for (a = o, u = r; u && !("immediateRender" in a); )
          (a = u.vars.defaults || {}), (u = lt(u.vars.inherit) && u.parent);
        (o.immediateRender = lt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[n - 1]);
      }
      return new Te(t[0], o, t[n + 1]);
    },
    Er = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    sn = function (e, t, r) {
      return r < e ? e : r > t ? t : r;
    },
    je = function (e, t) {
      return !Re(e) || !(t = rf.exec(e)) ? "" : t[1];
    },
    _f = function (e, t, r) {
      return Er(r, function (i) {
        return sn(e, t, i);
      });
    },
    ho = [].slice,
    Ja = function (e, t) {
      return (
        e &&
        jt(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && jt(e[0]))) &&
        !e.nodeType &&
        e !== Ut
      );
    },
    gf = function (e, t, r) {
      return (
        r === void 0 && (r = []),
        e.forEach(function (i) {
          var n;
          return (Re(i) && !t) || Ja(i, 1)
            ? (n = r).push.apply(n, kt(i))
            : r.push(i);
        }) || r
      );
    },
    kt = function (e, t, r) {
      return fe && !t && fe.selector
        ? fe.selector(e)
        : Re(e) && !r && (ro || !Ti())
        ? ho.call((t || io).querySelectorAll(e), 0)
        : Ve(e)
        ? gf(e, r)
        : Ja(e)
        ? ho.call(e, 0)
        : e
        ? [e]
        : [];
    },
    po = function (e) {
      return (
        (e = kt(e)[0] || en("Invalid scope") || {}),
        function (t) {
          var r = e.current || e.nativeElement || e;
          return kt(
            t,
            r.querySelectorAll
              ? r
              : r === e
              ? en("Invalid scope") || io.createElement("div")
              : e
          );
        }
      );
    },
    eu = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    tu = function (e) {
      if (De(e)) return e;
      var t = jt(e) ? e : { each: e },
        r = Ur(t.ease),
        i = t.from || 0,
        n = parseFloat(t.base) || 0,
        o = {},
        a = i > 0 && i < 1,
        u = isNaN(i) || a,
        l = t.axis,
        c = i,
        p = i;
      return (
        Re(i)
          ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && u && ((c = i[0]), (p = i[1])),
        function (f, h, g) {
          var d = (g || t).length,
            _ = o[d],
            D,
            y,
            v,
            m,
            x,
            E,
            C,
            T,
            S;
          if (!_) {
            if (((S = t.grid === "auto" ? 0 : (t.grid || [1, Vt])[1]), !S)) {
              for (
                C = -1e8;
                C < (C = g[S++].getBoundingClientRect().left) && S < d;

              );
              S < d && S--;
            }
            for (
              _ = o[d] = [],
                D = u ? Math.min(S, d) * c - 0.5 : i % S,
                y = S === Vt ? 0 : u ? (d * p) / S - 0.5 : (i / S) | 0,
                C = 0,
                T = Vt,
                E = 0;
              E < d;
              E++
            )
              (v = (E % S) - D),
                (m = y - ((E / S) | 0)),
                (_[E] = x =
                  l ? Math.abs(l === "y" ? m : v) : Oa(v * v + m * m)),
                x > C && (C = x),
                x < T && (T = x);
            i === "random" && eu(_),
              (_.max = C - T),
              (_.min = T),
              (_.v = d =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (S > d
                      ? d - 1
                      : l
                      ? l === "y"
                        ? d / S
                        : S
                      : Math.max(S, d / S)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (_.b = d < 0 ? n - d : n),
              (_.u = je(t.amount || t.each) || 0),
              (r = r && d < 0 ? du(r) : r);
          }
          return (
            (d = (_[f] - _.min) / _.max || 0),
            Se(_.b + (r ? r(d) : d) * _.v) + _.u
          );
        }
      );
    },
    _o = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var i = Se(Math.round(parseFloat(r) / e) * e * t);
        return (i - (i % 1)) / t + (ar(r) ? 0 : je(r));
      };
    },
    ru = function (e, t) {
      var r = Ve(e),
        i,
        n;
      return (
        !r &&
          jt(e) &&
          ((i = r = e.radius || Vt),
          e.values
            ? ((e = kt(e.values)), (n = !ar(e[0])) && (i *= i))
            : (e = _o(e.increment))),
        Er(
          t,
          r
            ? De(e)
              ? function (o) {
                  return (n = e(o)), Math.abs(n - o) <= i ? n : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(n ? o.x : o),
                      u = parseFloat(n ? o.y : 0),
                      l = Vt,
                      c = 0,
                      p = e.length,
                      f,
                      h;
                    p--;

                  )
                    n
                      ? ((f = e[p].x - a),
                        (h = e[p].y - u),
                        (f = f * f + h * h))
                      : (f = Math.abs(e[p] - a)),
                      f < l && ((l = f), (c = p));
                  return (
                    (c = !i || l <= i ? e[c] : o),
                    n || c === o || ar(o) ? c : c + je(o)
                  );
                }
            : _o(e)
        )
      );
    },
    iu = function (e, t, r, i) {
      return Er(Ve(e) ? !t : r === !0 ? !!(r = 0) : !i, function () {
        return Ve(e)
          ? e[~~(Math.random() * e.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - r / 2 + Math.random() * (t - e + r * 0.99)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    Df = function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (i) {
        return t.reduce(function (n, o) {
          return o(n);
        }, i);
      };
    },
    mf = function (e, t) {
      return function (r) {
        return e(parseFloat(r)) + (t || je(r));
      };
    },
    yf = function (e, t, r) {
      return su(e, t, 0, 1, r);
    },
    nu = function (e, t, r) {
      return Er(r, function (i) {
        return e[~~t(i)];
      });
    },
    vf = function s(e, t, r) {
      var i = t - e;
      return Ve(e)
        ? nu(e, s(0, e.length), t)
        : Er(r, function (n) {
            return ((i + ((n - e) % i)) % i) + e;
          });
    },
    wf = function s(e, t, r) {
      var i = t - e,
        n = i * 2;
      return Ve(e)
        ? nu(e, s(0, e.length - 1), t)
        : Er(r, function (o) {
            return (o = (n + ((o - e) % n)) % n || 0), e + (o > i ? n - o : o);
          });
    },
    on = function (e) {
      for (var t = 0, r = "", i, n, o, a; ~(i = e.indexOf("random(", t)); )
        (o = e.indexOf(")", i)),
          (a = e.charAt(i + 7) === "["),
          (n = e.substr(i + 7, o - i - 7).match(a ? Ba : eo)),
          (r +=
            e.substr(t, i - t) +
            iu(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (t = o + 1);
      return r + e.substr(t, e.length - t);
    },
    su = function (e, t, r, i, n) {
      var o = t - e,
        a = i - r;
      return Er(n, function (u) {
        return r + (((u - e) / o) * a || 0);
      });
    },
    xf = function s(e, t, r, i) {
      var n = isNaN(e + t)
        ? 0
        : function (h) {
            return (1 - h) * e + h * t;
          };
      if (!n) {
        var o = Re(e),
          a = {},
          u,
          l,
          c,
          p,
          f;
        if ((r === !0 && (i = 1) && (r = null), o))
          (e = { p: e }), (t = { p: t });
        else if (Ve(e) && !Ve(t)) {
          for (c = [], p = e.length, f = p - 2, l = 1; l < p; l++)
            c.push(s(e[l - 1], e[l]));
          p--,
            (n = function (g) {
              g *= p;
              var d = Math.min(f, ~~g);
              return c[d](g - d);
            }),
            (r = t);
        } else i || (e = Ci(Ve(e) ? [] : {}, e));
        if (!c) {
          for (u in t) yo.call(a, e, u, "get", t[u]);
          n = function (g) {
            return bo(g, a) || (o ? e.p : e);
          };
        }
      }
      return Er(r, n);
    },
    ou = function (e, t, r) {
      var i = e.labels,
        n = Vt,
        o,
        a,
        u;
      for (o in i)
        (a = i[o] - t),
          a < 0 == !!r && a && n > (a = Math.abs(a)) && ((u = o), (n = a));
      return u;
    },
    wt = function (e, t, r) {
      var i = e.vars,
        n = i[t],
        o = fe,
        a = e._ctx,
        u,
        l,
        c;
      if (n)
        return (
          (u = i[t + "Params"]),
          (l = i.callbackScope || e),
          r && Cr.length && Jn(),
          a && (fe = a),
          (c = u ? n.apply(l, u) : n.call(l)),
          (fe = o),
          c
        );
    },
    an = function (e) {
      return (
        br(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!qe),
        e.progress() < 1 && wt(e, "onInterrupt"),
        e
      );
    },
    Si,
    au = [],
    uu = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Js() || e.headless)) {
          var t = e.name,
            r = De(e),
            i =
              t && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: tn,
              render: bo,
              add: yo,
              kill: zf,
              modifier: Nf,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Co,
              aliases: {},
              register: 0,
            };
          if ((Ti(), e !== i)) {
            if (yt[t]) return;
            vt(i, vt(es(e, n), o)),
              Ci(i.prototype, Ci(n, es(e, o))),
              (yt[(i.prop = t)] = i),
              e.targetTest && (Zn.push(i), (so[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Ia(t, i), e.register && e.register(ht, i, ft);
        } else au.push(e);
    },
    ue = 255,
    un = {
      aqua: [0, ue, ue],
      lime: [0, ue, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ue],
      navy: [0, 0, 128],
      white: [ue, ue, ue],
      olive: [128, 128, 0],
      yellow: [ue, ue, 0],
      orange: [ue, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ue, 0, 0],
      pink: [ue, 192, 203],
      cyan: [0, ue, ue],
      transparent: [ue, ue, ue, 0],
    },
    go = function (e, t, r) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (r - t) * e * 6
          : e < 0.5
          ? r
          : e * 3 < 2
          ? t + (r - t) * (2 / 3 - e) * 6
          : t) *
          ue +
          0.5) |
          0
      );
    },
    lu = function (e, t, r) {
      var i = e ? (ar(e) ? [e >> 16, (e >> 8) & ue, e & ue] : 0) : un.black,
        n,
        o,
        a,
        u,
        l,
        c,
        p,
        f,
        h,
        g;
      if (!i) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), un[e]))
          i = un[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((n = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                n +
                n +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (i = parseInt(e.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & ue, i & ue, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (i = [e >> 16, (e >> 8) & ue, e & ue]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((i = g = e.match(eo)), !t))
            (u = (+i[0] % 360) / 360),
              (l = +i[1] / 100),
              (c = +i[2] / 100),
              (o = c <= 0.5 ? c * (l + 1) : c + l - c * l),
              (n = c * 2 - o),
              i.length > 3 && (i[3] *= 1),
              (i[0] = go(u + 1 / 3, n, o)),
              (i[1] = go(u, n, o)),
              (i[2] = go(u - 1 / 3, n, o));
          else if (~e.indexOf("="))
            return (i = e.match(Ra)), r && i.length < 4 && (i[3] = 1), i;
        } else i = e.match(eo) || un.transparent;
        i = i.map(Number);
      }
      return (
        t &&
          !g &&
          ((n = i[0] / ue),
          (o = i[1] / ue),
          (a = i[2] / ue),
          (p = Math.max(n, o, a)),
          (f = Math.min(n, o, a)),
          (c = (p + f) / 2),
          p === f
            ? (u = l = 0)
            : ((h = p - f),
              (l = c > 0.5 ? h / (2 - p - f) : h / (p + f)),
              (u =
                p === n
                  ? (o - a) / h + (o < a ? 6 : 0)
                  : p === o
                  ? (a - n) / h + 2
                  : (n - o) / h + 4),
              (u *= 60)),
          (i[0] = ~~(u + 0.5)),
          (i[1] = ~~(l * 100 + 0.5)),
          (i[2] = ~~(c * 100 + 0.5))),
        r && i.length < 4 && (i[3] = 1),
        i
      );
    },
    cu = function (e) {
      var t = [],
        r = [],
        i = -1;
      return (
        e.split(Sr).forEach(function (n) {
          var o = n.match(wi) || [];
          t.push.apply(t, o), r.push((i += o.length + 1));
        }),
        (t.c = r),
        t
      );
    },
    fu = function (e, t, r) {
      var i = "",
        n = (e + i).match(Sr),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        u,
        l,
        c,
        p;
      if (!n) return e;
      if (
        ((n = n.map(function (f) {
          return (
            (f = lu(f, t, 1)) &&
            o +
              (t
                ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3]
                : f.join(",")) +
              ")"
          );
        })),
        r && ((c = cu(e)), (u = r.c), u.join(i) !== c.c.join(i)))
      )
        for (l = e.replace(Sr, "1").split(wi), p = l.length - 1; a < p; a++)
          i +=
            l[a] +
            (~u.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (c.length ? c : n.length ? n : r).shift());
      if (!l)
        for (l = e.split(Sr), p = l.length - 1; a < p; a++) i += l[a] + n[a];
      return i + l[p];
    },
    Sr = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in un) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    Cf = /hsl[a]?\(/,
    hu = function (e) {
      var t = e.join(" "),
        r;
      if (((Sr.lastIndex = 0), Sr.test(t)))
        return (
          (r = Cf.test(t)),
          (e[1] = fu(e[1], r)),
          (e[0] = fu(e[0], r, cu(e[1]))),
          !0
        );
    },
    ln,
    xt = (function () {
      var s = Date.now,
        e = 500,
        t = 33,
        r = s(),
        i = r,
        n = 1e3 / 240,
        o = n,
        a = [],
        u,
        l,
        c,
        p,
        f,
        h,
        g = function d(_) {
          var D = s() - i,
            y = _ === !0,
            v,
            m,
            x,
            E;
          if (
            ((D > e || D < 0) && (r += D - t),
            (i += D),
            (x = i - r),
            (v = x - o),
            (v > 0 || y) &&
              ((E = ++p.frame),
              (f = x - p.time * 1e3),
              (p.time = x = x / 1e3),
              (o += v + (v >= n ? 4 : n - v)),
              (m = 1)),
            y || (u = l(d)),
            m)
          )
            for (h = 0; h < a.length; h++) a[h](x, f, E, _);
        };
      return (
        (p = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
          },
          deltaRatio: function (_) {
            return f / (1e3 / (_ || 60));
          },
          wake: function () {
            Na &&
              (!ro &&
                Js() &&
                ((Ut = ro = window),
                (io = Ut.document || {}),
                (mt.gsap = ht),
                (Ut.gsapVersions || (Ut.gsapVersions = [])).push(ht.version),
                za(Qn || Ut.GreenSockGlobals || (!Ut.gsap && Ut) || {}),
                au.forEach(uu)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              u && p.sleep(),
              (l =
                c ||
                function (_) {
                  return setTimeout(_, (o - p.time * 1e3 + 1) | 0);
                }),
              (ln = 1),
              g(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(u), (ln = 0), (l = tn);
          },
          lagSmoothing: function (_, D) {
            (e = _ || 1 / 0), (t = Math.min(D || 33, e));
          },
          fps: function (_) {
            (n = 1e3 / (_ || 240)), (o = p.time * 1e3 + n);
          },
          add: function (_, D, y) {
            var v = D
              ? function (m, x, E, C) {
                  _(m, x, E, C), p.remove(v);
                }
              : _;
            return p.remove(_), a[y ? "unshift" : "push"](v), Ti(), v;
          },
          remove: function (_, D) {
            ~(D = a.indexOf(_)) && a.splice(D, 1) && h >= D && h--;
          },
          _listeners: a,
        }),
        p
      );
    })(),
    Ti = function () {
      return !ln && xt.wake();
    },
    te = {},
    bf = /^[\d.\-M][\d.\-,\s]/,
    Ef = /["']/g,
    Sf = function (e) {
      for (
        var t = {},
          r = e.substr(1, e.length - 3).split(":"),
          i = r[0],
          n = 1,
          o = r.length,
          a,
          u,
          l;
        n < o;
        n++
      )
        (u = r[n]),
          (a = n !== o - 1 ? u.lastIndexOf(",") : u.length),
          (l = u.substr(0, a)),
          (t[i] = isNaN(l) ? l.replace(Ef, "").trim() : +l),
          (i = u.substr(a + 1).trim());
      return t;
    },
    Tf = function (e) {
      var t = e.indexOf("(") + 1,
        r = e.indexOf(")"),
        i = e.indexOf("(", t);
      return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
    },
    Ff = function (e) {
      var t = (e + "").split("("),
        r = te[t[0]];
      return r && t.length > 1 && r.config
        ? r.config.apply(
            null,
            ~e.indexOf("{") ? [Sf(t[1])] : Tf(e).split(",").map(Xa)
          )
        : te._CE && bf.test(e)
        ? te._CE("", e)
        : r;
    },
    du = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    pu = function s(e, t) {
      for (var r = e._first, i; r; )
        r instanceof tt
          ? s(r, t)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== t &&
            (r.timeline
              ? s(r.timeline, t)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = t))),
          (r = r._next);
    },
    Ur = function (e, t) {
      return (e && (De(e) ? e : te[e] || Ff(e))) || t;
    },
    Gr = function (e, t, r, i) {
      r === void 0 &&
        (r = function (u) {
          return 1 - t(1 - u);
        }),
        i === void 0 &&
          (i = function (u) {
            return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
          });
      var n = { easeIn: t, easeOut: r, easeInOut: i },
        o;
      return (
        ct(e, function (a) {
          (te[a] = mt[a] = n), (te[(o = a.toLowerCase())] = r);
          for (var u in n)
            te[
              o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
            ] = te[a + "." + u] = n[u];
        }),
        n
      );
    },
    _u = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Do = function s(e, t, r) {
      var i = t >= 1 ? t : 1,
        n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (n / Ks) * (Math.asin(1 / i) || 0),
        a = function (c) {
          return c === 1 ? 1 : i * Math.pow(2, -10 * c) * tf((c - o) * n) + 1;
        },
        u =
          e === "out"
            ? a
            : e === "in"
            ? function (l) {
                return 1 - a(1 - l);
              }
            : _u(a);
      return (
        (n = Ks / n),
        (u.config = function (l, c) {
          return s(e, l, c);
        }),
        u
      );
    },
    mo = function s(e, t) {
      t === void 0 && (t = 1.70158);
      var r = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        i =
          e === "out"
            ? r
            : e === "in"
            ? function (n) {
                return 1 - r(1 - n);
              }
            : _u(r);
      return (
        (i.config = function (n) {
          return s(e, n);
        }),
        i
      );
    };
  ct("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
    var t = e < 5 ? e + 1 : e;
    Gr(
      s + ",Power" + (t - 1),
      e
        ? function (r) {
            return Math.pow(r, t);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, t);
      },
      function (r) {
        return r < 0.5
          ? Math.pow(r * 2, t) / 2
          : 1 - Math.pow((1 - r) * 2, t) / 2;
      }
    );
  }),
    (te.Linear.easeNone = te.none = te.Linear.easeIn),
    Gr("Elastic", Do("in"), Do("out"), Do()),
    (function (s, e) {
      var t = 1 / e,
        r = 2 * t,
        i = 2.5 * t,
        n = function (a) {
          return a < t
            ? s * a * a
            : a < r
            ? s * Math.pow(a - 1.5 / e, 2) + 0.75
            : a < i
            ? s * (a -= 2.25 / e) * a + 0.9375
            : s * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      Gr(
        "Bounce",
        function (o) {
          return 1 - n(1 - o);
        },
        n
      );
    })(7.5625, 2.75),
    Gr("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    Gr("Circ", function (s) {
      return -(Oa(1 - s * s) - 1);
    }),
    Gr("Sine", function (s) {
      return s === 1 ? 1 : -ef(s * Zc) + 1;
    }),
    Gr("Back", mo("in"), mo("out"), mo()),
    (te.SteppedEase =
      te.steps =
      mt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var r = 1 / e,
              i = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              o = 1 - $e;
            return function (a) {
              return (((i * sn(0, o, a)) | 0) + n) * r;
            };
          },
        }),
    (vi.ease = te["quad.out"]),
    ct(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (uo += s + "," + s + "Params,");
      }
    );
  var gu = function (e, t) {
      (this.id = Jc++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Ya),
        (this.set = t ? t.getSetter : Co);
    },
    cn = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Ei(this, +t.duration, 1, 1),
          (this.data = t.data),
          fe && ((this._ctx = fe), fe.data.push(this)),
          ln || xt.wake();
      }
      var e = s.prototype;
      return (
        (e.delay = function (r) {
          return r || r === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + r - this._delay),
              (this._delay = r),
              this)
            : this._delay;
        }),
        (e.duration = function (r) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (r) {
          return arguments.length
            ? ((this._dirty = 0),
              Ei(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (r, i) {
          if ((Ti(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              ns(this, r), !n._dp || n.parent || Ga(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && r < this._tDur) ||
                (this._ts < 0 && r > 0) ||
                (!this._tDur && !r)) &&
              Gt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === $e) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Wa(this, r, i)),
            this
          );
        }),
        (e.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + Ua(this)) %
                  (this._dur + this._rDelay) || (r ? this._dur : 0),
                i
              )
            : this._time;
        }),
        (e.totalProgress = function (r, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * r, i)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (r, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                  Ua(this),
                i
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (r, i) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (r - 1) * n, i)
            : this._repeat
            ? bi(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === r) return this;
          var n =
            this.parent && this._ts ? rs(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
            this.totalTime(sn(-Math.abs(this._delay), this._tDur, n), i !== !1),
            is(this),
            lf(this)
          );
        }),
        (e.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ti(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== $e &&
                        (this._tTime -= $e)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return (
              i && (i._sort || !this.parent) && Gt(i, this, r - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (r) {
          return (
            this._start +
            (lt(r) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (r) {
          var i = this.parent || this._dp;
          return i
            ? r &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? rs(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (r) {
          r === void 0 && (r = sf);
          var i = qe;
          return (
            (qe = r),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(r),
              this.totalTime(-0.01, r.suppressEvents)),
            this.data !== "nested" && r.kill !== !1 && this.kill(),
            (qe = i),
            this
          );
        }),
        (e.globalTime = function (r) {
          for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
            (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
          return !this.parent && this._sat ? this._sat.globalTime(r) : n;
        }),
        (e.repeat = function (r) {
          return arguments.length
            ? ((this._repeat = r === 1 / 0 ? -2 : r), Za(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), Za(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (e.seek = function (r, i) {
          return this.totalTime(At(this, r), lt(i));
        }),
        (e.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, lt(i)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (e.play = function (r, i) {
          return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (r, i) {
          return (
            r != null && this.seek(r || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (r, i) {
          return r != null && this.seek(r, i), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (r) {
          return arguments.length
            ? (!!r !== this.reversed() &&
                this.timeScale(-this._rts || (r ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var r = this.parent || this._dp,
            i = this._start,
            n;
          return !!(
            !r ||
            (this._ts &&
              this._initted &&
              r.isActive() &&
              (n = r.rawTime(!0)) >= i &&
              n < this.endTime(!0) - $e)
          );
        }),
        (e.eventCallback = function (r, i, n) {
          var o = this.vars;
          return arguments.length > 1
            ? (i
                ? ((o[r] = i),
                  n && (o[r + "Params"] = n),
                  r === "onUpdate" && (this._onUpdate = i))
                : delete o[r],
              this)
            : o[r];
        }),
        (e.then = function (r) {
          var i = this;
          return new Promise(function (n) {
            var o = De(r) ? r : $a,
              a = function () {
                var l = i.then;
                (i.then = null),
                  De(o) && (o = o(i)) && (o.then || o === i) && (i.then = l),
                  n(o),
                  (i.then = l);
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? a()
              : (i._prom = a);
          });
        }),
        (e.kill = function () {
          an(this);
        }),
        s
      );
    })();
  vt(cn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var tt = (function (s) {
    ka(e, s);
    function e(r, i) {
      var n;
      return (
        r === void 0 && (r = {}),
        (n = s.call(this, r) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!r.smoothChildTiming),
        (n.autoRemoveChildren = !!r.autoRemoveChildren),
        (n._sort = lt(r.sortChildren)),
        pe && Gt(r.parent || pe, or(n), i),
        r.reversed && n.reverse(),
        r.paused && n.paused(!0),
        r.scrollTrigger && Qa(or(n), r.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (i, n, o) {
        return nn(0, arguments, this), this;
      }),
      (t.from = function (i, n, o) {
        return nn(1, arguments, this), this;
      }),
      (t.fromTo = function (i, n, o, a) {
        return nn(2, arguments, this), this;
      }),
      (t.set = function (i, n, o) {
        return (
          (n.duration = 0),
          (n.parent = this),
          rn(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Te(i, n, At(this, o), 1),
          this
        );
      }),
      (t.call = function (i, n, o) {
        return Gt(this, Te.delayedCall(0, i, n), o);
      }),
      (t.staggerTo = function (i, n, o, a, u, l, c) {
        return (
          (o.duration = n),
          (o.stagger = o.stagger || a),
          (o.onComplete = l),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Te(i, o, At(this, u)),
          this
        );
      }),
      (t.staggerFrom = function (i, n, o, a, u, l, c) {
        return (
          (o.runBackwards = 1),
          (rn(o).immediateRender = lt(o.immediateRender)),
          this.staggerTo(i, n, o, a, u, l, c)
        );
      }),
      (t.staggerFromTo = function (i, n, o, a, u, l, c, p) {
        return (
          (a.startAt = o),
          (rn(a).immediateRender = lt(a.immediateRender)),
          this.staggerTo(i, n, a, u, l, c, p)
        );
      }),
      (t.render = function (i, n, o) {
        var a = this._time,
          u = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          c = i <= 0 ? 0 : Se(i),
          p = this._zTime < 0 != i < 0 && (this._initted || !l),
          f,
          h,
          g,
          d,
          _,
          D,
          y,
          v,
          m,
          x,
          E,
          C;
        if (
          (this !== pe && c > u && i >= 0 && (c = u),
          c !== this._tTime || o || p)
        ) {
          if (
            (a !== this._time &&
              l &&
              ((c += this._time - a), (i += this._time - a)),
            (f = c),
            (m = this._start),
            (v = this._ts),
            (D = !v),
            p && (l || (a = this._zTime), (i || !n) && (this._zTime = i)),
            this._repeat)
          ) {
            if (
              ((E = this._yoyo),
              (_ = l + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(_ * 100 + i, n, o);
            if (
              ((f = Se(c % _)),
              c === u
                ? ((d = this._repeat), (f = l))
                : ((x = Se(c / _)),
                  (d = ~~x),
                  d && d === x && ((f = l), d--),
                  f > l && (f = l)),
              (x = bi(this._tTime, _)),
              !a &&
                this._tTime &&
                x !== d &&
                this._tTime - x * _ - this._dur <= 0 &&
                (x = d),
              E && d & 1 && ((f = l - f), (C = 1)),
              d !== x && !this._lock)
            ) {
              var T = E && x & 1,
                S = T === (E && d & 1);
              if (
                (d < x && (T = !T),
                (a = T ? 0 : c % l ? l : c),
                (this._lock = 1),
                (this.render(a || (C ? 0 : Se(d * _)), n, !l)._lock = 0),
                (this._tTime = c),
                !n && this.parent && wt(this, "onRepeat"),
                this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  D !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((l = this._dur),
                (u = this._tDur),
                S &&
                  ((this._lock = 2),
                  (a = T ? l : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !C && this.invalidate()),
                (this._lock = 0),
                !this._ts && !D)
              )
                return this;
              pu(this, C);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = df(this, Se(a), Se(f))), y && (c -= f - (f = y._start))),
            (this._tTime = c),
            (this._time = f),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (a = 0)),
            !a && f && !n && !d && (wt(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (f >= a && i >= 0)
            for (h = this._first; h; ) {
              if (
                ((g = h._next), (h._act || f >= h._start) && h._ts && y !== h)
              ) {
                if (h.parent !== this) return this.render(i, n, o);
                if (
                  (h.render(
                    h._ts > 0
                      ? (f - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (f - h._start) * h._ts,
                    n,
                    o
                  ),
                  f !== this._time || (!this._ts && !D))
                ) {
                  (y = 0), g && (c += this._zTime = -1e-8);
                  break;
                }
              }
              h = g;
            }
          else {
            h = this._last;
            for (var b = i < 0 ? i : f; h; ) {
              if (
                ((g = h._prev), (h._act || b <= h._end) && h._ts && y !== h)
              ) {
                if (h.parent !== this) return this.render(i, n, o);
                if (
                  (h.render(
                    h._ts > 0
                      ? (b - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (b - h._start) * h._ts,
                    n,
                    o || (qe && (h._initted || h._startAt))
                  ),
                  f !== this._time || (!this._ts && !D))
                ) {
                  (y = 0), g && (c += this._zTime = b ? -1e-8 : $e);
                  break;
                }
              }
              h = g;
            }
          }
          if (
            y &&
            !n &&
            (this.pause(),
            (y.render(f >= a ? 0 : -1e-8)._zTime = f >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = m), is(this), this.render(i, n, o);
          this._onUpdate && !n && wt(this, "onUpdate", !0),
            ((c === u && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (m === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !l) &&
                  ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                  br(this, 1),
                !n &&
                  !(i < 0 && !a) &&
                  (c || a || !u) &&
                  (wt(
                    this,
                    c === u && i >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < u && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (i, n) {
        var o = this;
        if ((ar(n) || (n = At(this, n, i)), !(i instanceof cn))) {
          if (Ve(i))
            return (
              i.forEach(function (a) {
                return o.add(a, n);
              }),
              this
            );
          if (Re(i)) return this.addLabel(i, n);
          if (De(i)) i = Te.delayedCall(0, i);
          else return this;
        }
        return this !== i ? Gt(this, i, n) : this;
      }),
      (t.getChildren = function (i, n, o, a) {
        i === void 0 && (i = !0),
          n === void 0 && (n = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -1e8);
        for (var u = [], l = this._first; l; )
          l._start >= a &&
            (l instanceof Te
              ? n && u.push(l)
              : (o && u.push(l),
                i && u.push.apply(u, l.getChildren(!0, n, o)))),
            (l = l._next);
        return u;
      }),
      (t.getById = function (i) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
          if (n[o].vars.id === i) return n[o];
      }),
      (t.remove = function (i) {
        return Re(i)
          ? this.removeLabel(i)
          : De(i)
          ? this.killTweensOf(i)
          : (i.parent === this && ts(this, i),
            i === this._recent && (this._recent = this._last),
            jr(this));
      }),
      (t.totalTime = function (i, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Se(
                xt.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts)
              )),
            s.prototype.totalTime.call(this, i, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (i, n) {
        return (this.labels[i] = At(this, n)), this;
      }),
      (t.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (t.addPause = function (i, n, o) {
        var a = Te.delayedCall(0, n || tn, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), Gt(this, a, At(this, i))
        );
      }),
      (t.removePause = function (i) {
        var n = this._first;
        for (i = At(this, i); n; )
          n._start === i && n.data === "isPause" && br(n), (n = n._next);
      }),
      (t.killTweensOf = function (i, n, o) {
        for (var a = this.getTweensOf(i, o), u = a.length; u--; )
          Tr !== a[u] && a[u].kill(i, n);
        return this;
      }),
      (t.getTweensOf = function (i, n) {
        for (var o = [], a = kt(i), u = this._first, l = ar(n), c; u; )
          u instanceof Te
            ? of(u._targets, a) &&
              (l
                ? (!Tr || (u._initted && u._ts)) &&
                  u.globalTime(0) <= n &&
                  u.globalTime(u.totalDuration()) > n
                : !n || u.isActive()) &&
              o.push(u)
            : (c = u.getTweensOf(a, n)).length && o.push.apply(o, c),
            (u = u._next);
        return o;
      }),
      (t.tweenTo = function (i, n) {
        n = n || {};
        var o = this,
          a = At(o, i),
          u = n,
          l = u.startAt,
          c = u.onStart,
          p = u.onStartParams,
          f = u.immediateRender,
          h,
          g = Te.to(
            o,
            vt(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  n.duration ||
                  Math.abs(
                    (a - (l && "time" in l ? l.time : o._time)) / o.timeScale()
                  ) ||
                  $e,
                onStart: function () {
                  if ((o.pause(), !h)) {
                    var _ =
                      n.duration ||
                      Math.abs(
                        (a - (l && "time" in l ? l.time : o._time)) /
                          o.timeScale()
                      );
                    g._dur !== _ && Ei(g, _, 0, 1).render(g._time, !0, !0),
                      (h = 1);
                  }
                  c && c.apply(g, p || []);
                },
              },
              n
            )
          );
        return f ? g.render(0) : g;
      }),
      (t.tweenFromTo = function (i, n, o) {
        return this.tweenTo(n, vt({ startAt: { time: At(this, i) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (i) {
        return i === void 0 && (i = this._time), ou(this, At(this, i));
      }),
      (t.previousLabel = function (i) {
        return i === void 0 && (i = this._time), ou(this, At(this, i), 1);
      }),
      (t.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + $e);
      }),
      (t.shiftChildren = function (i, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, u = this.labels, l; a; )
          a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
        if (n) for (l in u) u[l] >= o && (u[l] += i);
        return jr(this);
      }),
      (t.invalidate = function (i) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
        return s.prototype.invalidate.call(this, i);
      }),
      (t.clear = function (i) {
        i === void 0 && (i = !0);
        for (var n = this._first, o; n; )
          (o = n._next), this.remove(n), (n = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          jr(this)
        );
      }),
      (t.totalDuration = function (i) {
        var n = 0,
          o = this,
          a = o._last,
          u = Vt,
          l,
          c,
          p;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -i : i)
          );
        if (o._dirty) {
          for (p = o.parent; a; )
            (l = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > u && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (Gt(o, a, c - a._delay, 1)._lock = 0))
                : (u = c),
              c < 0 &&
                a._ts &&
                ((n -= c),
                ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (u = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = l);
          Ei(o, o === pe && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (i) {
        if ((pe._ts && (Wa(pe, rs(i, pe)), (qa = xt.frame)), xt.frame >= Ha)) {
          Ha += Dt.autoSleep || 120;
          var n = pe._first;
          if ((!n || !n._ts) && Dt.autoSleep && xt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || xt.sleep();
          }
        }
      }),
      e
    );
  })(cn);
  vt(tt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Pf = function (e, t, r, i, n, o, a) {
      var u = new ft(this._pt, e, t, 0, 1, xu, null, n),
        l = 0,
        c = 0,
        p,
        f,
        h,
        g,
        d,
        _,
        D,
        y;
      for (
        u.b = r,
          u.e = i,
          r += "",
          i += "",
          (D = ~i.indexOf("random(")) && (i = on(i)),
          o && ((y = [r, i]), o(y, e, t), (r = y[0]), (i = y[1])),
          f = r.match(to) || [];
        (p = to.exec(i));

      )
        (g = p[0]),
          (d = i.substring(l, p.index)),
          h ? (h = (h + 1) % 5) : d.substr(-5) === "rgba(" && (h = 1),
          g !== f[c++] &&
            ((_ = parseFloat(f[c - 1]) || 0),
            (u._pt = {
              _next: u._pt,
              p: d || c === 1 ? d : ",",
              s: _,
              c: g.charAt(1) === "=" ? xi(_, g) - _ : parseFloat(g) - _,
              m: h && h < 4 ? Math.round : 0,
            }),
            (l = to.lastIndex));
      return (
        (u.c = l < i.length ? i.substring(l, i.length) : ""),
        (u.fp = a),
        (La.test(i) || D) && (u.e = 0),
        (this._pt = u),
        u
      );
    },
    yo = function (e, t, r, i, n, o, a, u, l, c) {
      De(i) && (i = i(n || 0, e, o));
      var p = e[t],
        f =
          r !== "get"
            ? r
            : De(p)
            ? l
              ? e[
                  t.indexOf("set") || !De(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](l)
              : e[t]()
            : p,
        h = De(p) ? (l ? Rf : vu) : xo,
        g;
      if (
        (Re(i) &&
          (~i.indexOf("random(") && (i = on(i)),
          i.charAt(1) === "=" &&
            ((g = xi(f, i) + (je(f) || 0)), (g || g === 0) && (i = g))),
        !c || f !== i || vo)
      )
        return !isNaN(f * i) && i !== ""
          ? ((g = new ft(
              this._pt,
              e,
              t,
              +f || 0,
              i - (f || 0),
              typeof p == "boolean" ? Bf : wu,
              0,
              h
            )),
            l && (g.fp = l),
            a && g.modifier(a, this, e),
            (this._pt = g))
          : (!p && !(t in e) && no(t, i),
            Pf.call(this, e, t, f, i, h, u || Dt.stringFilter, l));
    },
    Af = function (e, t, r, i, n) {
      if (
        (De(e) && (e = fn(e, n, t, r, i)),
        !jt(e) || (e.style && e.nodeType) || Ve(e) || Ma(e))
      )
        return Re(e) ? fn(e, n, t, r, i) : e;
      var o = {},
        a;
      for (a in e) o[a] = fn(e[a], n, t, r, i);
      return o;
    },
    Du = function (e, t, r, i, n, o) {
      var a, u, l, c;
      if (
        yt[e] &&
        (a = new yt[e]()).init(
          n,
          a.rawVars ? t[e] : Af(t[e], i, n, o, r),
          r,
          i,
          o
        ) !== !1 &&
        ((r._pt = u = new ft(r._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
        r !== Si)
      )
        for (l = r._ptLookup[r._targets.indexOf(n)], c = a._props.length; c--; )
          l[a._props[c]] = u;
      return a;
    },
    Tr,
    vo,
    wo = function s(e, t, r) {
      var i = e.vars,
        n = i.ease,
        o = i.startAt,
        a = i.immediateRender,
        u = i.lazy,
        l = i.onUpdate,
        c = i.runBackwards,
        p = i.yoyoEase,
        f = i.keyframes,
        h = i.autoRevert,
        g = e._dur,
        d = e._startAt,
        _ = e._targets,
        D = e.parent,
        y = D && D.data === "nested" ? D.vars.targets : _,
        v = e._overwrite === "auto" && !Qs,
        m = e.timeline,
        x,
        E,
        C,
        T,
        S,
        b,
        M,
        A,
        B,
        k,
        L,
        O,
        R;
      if (
        (m && (!f || !n) && (n = "none"),
        (e._ease = Ur(n, vi.ease)),
        (e._yEase = p ? du(Ur(p === !0 ? n : p, vi.ease)) : 0),
        p &&
          e._yoyo &&
          !e._repeat &&
          ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
        (e._from = !m && !!i.runBackwards),
        !m || (f && !i.stagger))
      ) {
        if (
          ((A = _[0] ? Vr(_[0]).harness : 0),
          (O = A && i[A.prop]),
          (x = es(i, so)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && a && !h
              ? d.render(-1, !0)
              : d.revert(c && g ? Kn : nf),
            (d._lazy = 0)),
          o)
        ) {
          if (
            (br(
              (e._startAt = Te.set(
                _,
                vt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !d && lt(u),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      l &&
                      function () {
                        return wt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (qe || (!a && !h)) && e._startAt.revert(Kn),
            a && g && t <= 0 && r <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && g && !d) {
          if (
            (t && (a = !1),
            (C = vt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !d && lt(u),
                immediateRender: a,
                stagger: 0,
                parent: D,
              },
              x
            )),
            O && (C[A.prop] = O),
            br((e._startAt = Te.set(_, C))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (qe ? e._startAt.revert(Kn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            s(e._startAt, $e, $e);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, u = (g && lt(u)) || (u && !g), E = 0;
          E < _.length;
          E++
        ) {
          if (
            ((S = _[E]),
            (M = S._gsap || lo(_)[E]._gsap),
            (e._ptLookup[E] = k = {}),
            oo[M.id] && Cr.length && Jn(),
            (L = y === _ ? E : y.indexOf(S)),
            A &&
              (B = new A()).init(S, O || x, e, L, y) !== !1 &&
              ((e._pt = T =
                new ft(e._pt, S, B.name, 0, 1, B.render, B, 0, B.priority)),
              B._props.forEach(function (I) {
                k[I] = T;
              }),
              B.priority && (b = 1)),
            !A || O)
          )
            for (C in x)
              yt[C] && (B = Du(C, x, e, L, S, y))
                ? B.priority && (b = 1)
                : (k[C] = T =
                    yo.call(e, S, C, "get", x[C], L, y, 0, i.stringFilter));
          e._op && e._op[E] && e.kill(S, e._op[E]),
            v &&
              e._pt &&
              ((Tr = e),
              pe.killTweensOf(S, k, e.globalTime(t)),
              (R = !e.parent),
              (Tr = 0)),
            e._pt && u && (oo[M.id] = 1);
        }
        b && Cu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = l),
        (e._initted = (!e._op || e._pt) && !R),
        f && t <= 0 && m.render(Vt, !0, !0);
    },
    kf = function (e, t, r, i, n, o, a, u) {
      var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        p,
        f,
        h;
      if (!l)
        for (
          l = e._ptCache[t] = [], f = e._ptLookup, h = e._targets.length;
          h--;

        ) {
          if (((c = f[h][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (vo = 1),
              (e.vars[t] = "+=0"),
              wo(e, a),
              (vo = 0),
              u ? en(t + " not eligible for reset") : 1
            );
          l.push(c);
        }
      for (h = l.length; h--; )
        (p = l[h]),
          (c = p._pt || p),
          (c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + o * c.c),
          (c.c = r - c.s),
          p.e && (p.e = ve(r) + je(p.e)),
          p.b && (p.b = c.s + je(p.b));
    },
    Of = function (e, t) {
      var r = e[0] ? Vr(e[0]).harness : 0,
        i = r && r.aliases,
        n,
        o,
        a,
        u;
      if (!i) return t;
      n = Ci({}, t);
      for (o in i)
        if (o in n)
          for (u = i[o].split(","), a = u.length; a--; ) n[u[a]] = n[o];
      return n;
    },
    Mf = function (e, t, r, i) {
      var n = t.ease || i || "power1.inOut",
        o,
        a;
      if (Ve(t))
        (a = r[e] || (r[e] = [])),
          t.forEach(function (u, l) {
            return a.push({ t: (l / (t.length - 1)) * 100, v: u, e: n });
          });
      else
        for (o in t)
          (a = r[o] || (r[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: n });
    },
    fn = function (e, t, r, i, n) {
      return De(e)
        ? e.call(t, r, i, n)
        : Re(e) && ~e.indexOf("random(")
        ? on(e)
        : e;
    },
    mu = uo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    yu = {};
  ct(mu + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (yu[s] = 1);
  });
  var Te = (function (s) {
    ka(e, s);
    function e(r, i, n, o) {
      var a;
      typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
        (a = s.call(this, o ? i : rn(i)) || this);
      var u = a.vars,
        l = u.duration,
        c = u.delay,
        p = u.immediateRender,
        f = u.stagger,
        h = u.overwrite,
        g = u.keyframes,
        d = u.defaults,
        _ = u.scrollTrigger,
        D = u.yoyoEase,
        y = i.parent || pe,
        v = (Ve(r) || Ma(r) ? ar(r[0]) : "length" in i) ? [r] : kt(r),
        m,
        x,
        E,
        C,
        T,
        S,
        b,
        M;
      if (
        ((a._targets = v.length
          ? lo(v)
          : en(
              "GSAP target " + r + " not found. https://gsap.com",
              !Dt.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = h),
        g || f || Gn(l) || Gn(c))
      ) {
        if (
          ((i = a.vars),
          (m = a.timeline =
            new tt({
              data: "nested",
              defaults: d || {},
              targets: y && y.data === "nested" ? y.vars.targets : v,
            })),
          m.kill(),
          (m.parent = m._dp = or(a)),
          (m._start = 0),
          f || Gn(l) || Gn(c))
        ) {
          if (((C = v.length), (b = f && tu(f)), jt(f)))
            for (T in f) ~mu.indexOf(T) && (M || (M = {}), (M[T] = f[T]));
          for (x = 0; x < C; x++)
            (E = es(i, yu)),
              (E.stagger = 0),
              D && (E.yoyoEase = D),
              M && Ci(E, M),
              (S = v[x]),
              (E.duration = +fn(l, or(a), x, S, v)),
              (E.delay = (+fn(c, or(a), x, S, v) || 0) - a._delay),
              !f &&
                C === 1 &&
                E.delay &&
                ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
              m.to(S, E, b ? b(x, S, v) : 0),
              (m._ease = te.none);
          m.duration() ? (l = c = 0) : (a.timeline = 0);
        } else if (g) {
          rn(vt(m.vars.defaults, { ease: "none" })),
            (m._ease = Ur(g.ease || i.ease || "none"));
          var A = 0,
            B,
            k,
            L;
          if (Ve(g))
            g.forEach(function (O) {
              return m.to(v, O, ">");
            }),
              m.duration();
          else {
            E = {};
            for (T in g)
              T === "ease" || T === "easeEach" || Mf(T, g[T], E, g.easeEach);
            for (T in E)
              for (
                B = E[T].sort(function (O, R) {
                  return O.t - R.t;
                }),
                  A = 0,
                  x = 0;
                x < B.length;
                x++
              )
                (k = B[x]),
                  (L = {
                    ease: k.e,
                    duration: ((k.t - (x ? B[x - 1].t : 0)) / 100) * l,
                  }),
                  (L[T] = k.v),
                  m.to(v, L, A),
                  (A += L.duration);
            m.duration() < l && m.to({}, { duration: l - m.duration() });
          }
        }
        l || a.duration((l = m.duration()));
      } else a.timeline = 0;
      return (
        h === !0 && !Qs && ((Tr = or(a)), pe.killTweensOf(v), (Tr = 0)),
        Gt(y, or(a), n),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (p ||
          (!l &&
            !g &&
            a._start === Se(y._time) &&
            lt(p) &&
            cf(or(a)) &&
            y.data !== "nested")) &&
          ((a._tTime = -1e-8), a.render(Math.max(0, -c) || 0)),
        _ && Qa(or(a), _),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (i, n, o) {
        var a = this._time,
          u = this._tDur,
          l = this._dur,
          c = i < 0,
          p = i > u - $e && !c ? u : i < $e ? 0 : i,
          f,
          h,
          g,
          d,
          _,
          D,
          y,
          v,
          m;
        if (!l) hf(this, i, n, o);
        else if (
          p !== this._tTime ||
          !i ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((f = p), (v = this.timeline), this._repeat)) {
            if (((d = l + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(d * 100 + i, n, o);
            if (
              ((f = Se(p % d)),
              p === u
                ? ((g = this._repeat), (f = l))
                : ((_ = Se(p / d)),
                  (g = ~~_),
                  g && g === _ ? ((f = l), g--) : f > l && (f = l)),
              (D = this._yoyo && g & 1),
              D && ((m = this._yEase), (f = l - f)),
              (_ = bi(this._tTime, d)),
              f === a && !o && this._initted && g === _)
            )
              return (this._tTime = p), this;
            g !== _ &&
              (v && this._yEase && pu(v, D),
              this.vars.repeatRefresh &&
                !D &&
                !this._lock &&
                f !== d &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Se(d * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ka(this, c ? i : f, o, n, p)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && g !== _))
              return this;
            if (l !== this._dur) return this.render(i, n, o);
          }
          if (
            ((this._tTime = p),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (m || this._ease)(f / l)),
            this._from && (this.ratio = y = 1 - y),
            f && !a && !n && !g && (wt(this, "onStart"), this._tTime !== p))
          )
            return this;
          for (h = this._pt; h; ) h.r(y, h.d), (h = h._next);
          (v && v.render(i < 0 ? i : v._dur * v._ease(f / this._dur), n, o)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !n &&
              (c && co(this, i, n, o), wt(this, "onUpdate")),
            this._repeat &&
              g !== _ &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              wt(this, "onRepeat"),
            (p === this._tDur || !p) &&
              this._tTime === p &&
              (c && !this._onUpdate && co(this, i, !0, !0),
              (i || !l) &&
                ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
                br(this, 1),
              !n &&
                !(c && !a) &&
                (p || a || D) &&
                (wt(this, p === u ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(p < u && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (i) {
        return (
          (!i || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(i),
          s.prototype.invalidate.call(this, i)
        );
      }),
      (t.resetTo = function (i, n, o, a, u) {
        ln || xt.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || wo(this, l),
          (c = this._ease(l / this._dur)),
          kf(this, i, n, o, a, c, l, u)
            ? this.resetTo(i, n, o, a, 1)
            : (ns(this, 0),
              this.parent ||
                ja(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (i, n) {
        if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? an(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!qe),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, n, Tr && Tr.vars.overwrite !== !0)
              ._first || an(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Ei(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          u = i ? kt(i) : a,
          l = this._ptLookup,
          c = this._pt,
          p,
          f,
          h,
          g,
          d,
          _,
          D;
        if ((!n || n === "all") && uf(a, u))
          return n === "all" && (this._pt = 0), an(this);
        for (
          p = this._op = this._op || [],
            n !== "all" &&
              (Re(n) &&
                ((d = {}),
                ct(n, function (y) {
                  return (d[y] = 1);
                }),
                (n = d)),
              (n = Of(a, n))),
            D = a.length;
          D--;

        )
          if (~u.indexOf(a[D])) {
            (f = l[D]),
              n === "all"
                ? ((p[D] = n), (g = f), (h = {}))
                : ((h = p[D] = p[D] || {}), (g = n));
            for (d in g)
              (_ = f && f[d]),
                _ &&
                  ((!("kill" in _.d) || _.d.kill(d) === !0) &&
                    ts(this, _, "_pt"),
                  delete f[d]),
                h !== "all" && (h[d] = 1);
          }
        return this._initted && !this._pt && c && an(this), this;
      }),
      (e.to = function (i, n) {
        return new e(i, n, arguments[2]);
      }),
      (e.from = function (i, n) {
        return nn(1, arguments);
      }),
      (e.delayedCall = function (i, n, o, a) {
        return new e(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (i, n, o) {
        return nn(2, arguments);
      }),
      (e.set = function (i, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n);
      }),
      (e.killTweensOf = function (i, n, o) {
        return pe.killTweensOf(i, n, o);
      }),
      e
    );
  })(cn);
  vt(Te.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ct("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Te[s] = function () {
        var e = new tt(),
          t = ho.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var xo = function (e, t, r) {
      return (e[t] = r);
    },
    vu = function (e, t, r) {
      return e[t](r);
    },
    Rf = function (e, t, r, i) {
      return e[t](i.fp, r);
    },
    Lf = function (e, t, r) {
      return e.setAttribute(t, r);
    },
    Co = function (e, t) {
      return De(e[t]) ? vu : Zs(e[t]) && e.setAttribute ? Lf : xo;
    },
    wu = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Bf = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    xu = function (e, t) {
      var r = t._pt,
        i = "";
      if (!e && t.b) i = t.b;
      else if (e === 1 && t.e) i = t.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * e)
              : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
            i),
            (r = r._next);
        i += t.c;
      }
      t.set(t.t, t.p, i, t);
    },
    bo = function (e, t) {
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    Nf = function (e, t, r, i) {
      for (var n = this._pt, o; n; )
        (o = n._next), n.p === i && n.modifier(e, t, r), (n = o);
    },
    zf = function (e) {
      for (var t = this._pt, r, i; t; )
        (i = t._next),
          (t.p === e && !t.op) || t.op === e
            ? ts(this, t, "_pt")
            : t.dep || (r = 1),
          (t = i);
      return !r;
    },
    If = function (e, t, r, i) {
      i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
    },
    Cu = function (e) {
      for (var t = e._pt, r, i, n, o; t; ) {
        for (r = t._next, i = n; i && i.pr > t.pr; ) i = i._next;
        (t._prev = i ? i._prev : o) ? (t._prev._next = t) : (n = t),
          (t._next = i) ? (i._prev = t) : (o = t),
          (t = r);
      }
      e._pt = n;
    },
    ft = (function () {
      function s(t, r, i, n, o, a, u, l, c) {
        (this.t = r),
          (this.s = n),
          (this.c = o),
          (this.p = i),
          (this.r = a || wu),
          (this.d = u || this),
          (this.set = l || xo),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (r, i, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = If),
            (this.m = r),
            (this.mt = n),
            (this.tween = i);
        }),
        s
      );
    })();
  ct(
    uo +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (so[s] = 1);
    }
  ),
    (mt.TweenMax = mt.TweenLite = Te),
    (mt.TimelineLite = mt.TimelineMax = tt),
    (pe = new tt({
      sortChildren: !1,
      defaults: vi,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Dt.stringFilter = hu);
  var Qr = [],
    ss = {},
    qf = [],
    bu = 0,
    Hf = 0,
    Eo = function (e) {
      return (ss[e] || qf).map(function (t) {
        return t();
      });
    },
    So = function () {
      var e = Date.now(),
        t = [];
      e - bu > 2 &&
        (Eo("matchMediaInit"),
        Qr.forEach(function (r) {
          var i = r.queries,
            n = r.conditions,
            o,
            a,
            u,
            l;
          for (a in i)
            (o = Ut.matchMedia(i[a]).matches),
              o && (u = 1),
              o !== n[a] && ((n[a] = o), (l = 1));
          l && (r.revert(), u && t.push(r));
        }),
        Eo("matchMediaRevert"),
        t.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (bu = e),
        Eo("matchMedia"));
    },
    Eu = (function () {
      function s(t, r) {
        (this.selector = r && po(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Hf++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (r, i, n) {
          De(r) && ((n = i), (i = r), (r = De));
          var o = this,
            a = function () {
              var l = fe,
                c = o.selector,
                p;
              return (
                l && l !== o && l.data.push(o),
                n && (o.selector = po(n)),
                (fe = o),
                (p = i.apply(o, arguments)),
                De(p) && o._r.push(p),
                (fe = l),
                (o.selector = c),
                (o.isReverted = !1),
                p
              );
            };
          return (
            (o.last = a),
            r === De
              ? a(o, function (u) {
                  return o.add(null, u);
                })
              : r
              ? (o[r] = a)
              : a
          );
        }),
        (e.ignore = function (r) {
          var i = fe;
          (fe = null), r(this), (fe = i);
        }),
        (e.getTweens = function () {
          var r = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof s
                ? r.push.apply(r, i.getTweens())
                : i instanceof Te &&
                    !(i.parent && i.parent.data === "nested") &&
                    r.push(i);
            }),
            r
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (r, i) {
          var n = this;
          if (
            (r
              ? (function () {
                  for (var a = n.getTweens(), u = n.data.length, l; u--; )
                    (l = n.data[u]),
                      l.data === "isFlip" &&
                        (l.revert(),
                        l.getChildren(!0, !0, !1).forEach(function (c) {
                          return a.splice(a.indexOf(c), 1);
                        }));
                  for (
                    a
                      .map(function (c) {
                        return {
                          g:
                            c._dur ||
                            c._delay ||
                            (c._sat && !c._sat.vars.immediateRender)
                              ? c.globalTime(0)
                              : -1 / 0,
                          t: c,
                        };
                      })
                      .sort(function (c, p) {
                        return p.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(r);
                      }),
                      u = n.data.length;
                    u--;

                  )
                    (l = n.data[u]),
                      l instanceof tt
                        ? l.data !== "nested" &&
                          (l.scrollTrigger && l.scrollTrigger.revert(),
                          l.kill())
                        : !(l instanceof Te) && l.revert && l.revert(r);
                  n._r.forEach(function (c) {
                    return c(r, n);
                  }),
                    (n.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            i)
          )
            for (var o = Qr.length; o--; )
              Qr[o].id === this.id && Qr.splice(o, 1);
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        s
      );
    })(),
    Yf = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), fe && fe.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (r, i, n) {
          jt(r) || (r = { matches: r });
          var o = new Eu(0, n || this.scope),
            a = (o.conditions = {}),
            u,
            l,
            c;
          fe && !o.selector && (o.selector = fe.selector),
            this.contexts.push(o),
            (i = o.add("onMatch", i)),
            (o.queries = r);
          for (l in r)
            l === "all"
              ? (c = 1)
              : ((u = Ut.matchMedia(r[l])),
                u &&
                  (Qr.indexOf(o) < 0 && Qr.push(o),
                  (a[l] = u.matches) && (c = 1),
                  u.addListener
                    ? u.addListener(So)
                    : u.addEventListener("change", So)));
          return (
            c &&
              i(o, function (p) {
                return o.add(null, p);
              }),
            this
          );
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        (e.kill = function (r) {
          this.contexts.forEach(function (i) {
            return i.kill(r, !0);
          });
        }),
        s
      );
    })(),
    os = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        t.forEach(function (i) {
          return uu(i);
        });
      },
      timeline: function (e) {
        return new tt(e);
      },
      getTweensOf: function (e, t) {
        return pe.getTweensOf(e, t);
      },
      getProperty: function (e, t, r, i) {
        Re(e) && (e = kt(e)[0]);
        var n = Vr(e || {}).get,
          o = r ? $a : Xa;
        return (
          r === "native" && (r = ""),
          e &&
            (t
              ? o(((yt[t] && yt[t].get) || n)(e, t, r, i))
              : function (a, u, l) {
                  return o(((yt[a] && yt[a].get) || n)(e, a, u, l));
                })
        );
      },
      quickSetter: function (e, t, r) {
        if (((e = kt(e)), e.length > 1)) {
          var i = e.map(function (c) {
              return ht.quickSetter(c, t, r);
            }),
            n = i.length;
          return function (c) {
            for (var p = n; p--; ) i[p](c);
          };
        }
        e = e[0] || {};
        var o = yt[t],
          a = Vr(e),
          u = (a.harness && (a.harness.aliases || {})[t]) || t,
          l = o
            ? function (c) {
                var p = new o();
                (Si._pt = 0),
                  p.init(e, r ? c + r : c, Si, 0, [e]),
                  p.render(1, p),
                  Si._pt && bo(1, Si);
              }
            : a.set(e, u);
        return o
          ? l
          : function (c) {
              return l(e, u, r ? c + r : c, a, 1);
            };
      },
      quickTo: function (e, t, r) {
        var i,
          n = ht.to(
            e,
            vt(
              ((i = {}), (i[t] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {}
            )
          ),
          o = function (u, l, c) {
            return n.resetTo(t, u, l, c);
          };
        return (o.tween = n), o;
      },
      isTweening: function (e) {
        return pe.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Ur(e.ease, vi.ease)), Va(vi, e || {});
      },
      config: function (e) {
        return Va(Dt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          r = e.effect,
          i = e.plugins,
          n = e.defaults,
          o = e.extendTimeline;
        (i || "").split(",").forEach(function (a) {
          return (
            a &&
            !yt[a] &&
            !mt[a] &&
            en(t + " effect requires " + a + " plugin.")
          );
        }),
          (ao[t] = function (a, u, l) {
            return r(kt(a), vt(u || {}, n), l);
          }),
          o &&
            (tt.prototype[t] = function (a, u, l) {
              return this.add(ao[t](a, jt(u) ? u : (l = u) && {}, this), l);
            });
      },
      registerEase: function (e, t) {
        te[e] = Ur(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Ur(e, t) : te;
      },
      getById: function (e) {
        return pe.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var r = new tt(e),
          i,
          n;
        for (
          r.smoothChildTiming = lt(e.smoothChildTiming),
            pe.remove(r),
            r._dp = 0,
            r._time = r._tTime = pe._time,
            i = pe._first;
          i;

        )
          (n = i._next),
            (t ||
              !(
                !i._dur &&
                i instanceof Te &&
                i.vars.onComplete === i._targets[0]
              )) &&
              Gt(r, i, i._start - i._delay),
            (i = n);
        return Gt(pe, r, 0), r;
      },
      context: function (e, t) {
        return e ? new Eu(e, t) : fe;
      },
      matchMedia: function (e) {
        return new Yf(e);
      },
      matchMediaRefresh: function () {
        return (
          Qr.forEach(function (e) {
            var t = e.conditions,
              r,
              i;
            for (i in t) t[i] && ((t[i] = !1), (r = 1));
            r && e.revert();
          }) || So()
        );
      },
      addEventListener: function (e, t) {
        var r = ss[e] || (ss[e] = []);
        ~r.indexOf(t) || r.push(t);
      },
      removeEventListener: function (e, t) {
        var r = ss[e],
          i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: vf,
        wrapYoyo: wf,
        distribute: tu,
        random: iu,
        snap: ru,
        normalize: yf,
        getUnit: je,
        clamp: _f,
        splitColor: lu,
        toArray: kt,
        selector: po,
        mapRange: su,
        pipe: Df,
        unitize: mf,
        interpolate: xf,
        shuffle: eu,
      },
      install: za,
      effects: ao,
      ticker: xt,
      updateRoot: tt.updateRoot,
      plugins: yt,
      globalTimeline: pe,
      core: {
        PropTween: ft,
        globals: Ia,
        Tween: Te,
        Timeline: tt,
        Animation: cn,
        getCache: Vr,
        _removeLinkedListItem: ts,
        reverting: function () {
          return qe;
        },
        context: function (e) {
          return e && fe && (fe.data.push(e), (e._ctx = fe)), fe;
        },
        suppressOverwrites: function (e) {
          return (Qs = e);
        },
      },
    };
  ct("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (os[s] = Te[s]);
  }),
    xt.add(tt.updateRoot),
    (Si = os.to({}, { duration: 0 }));
  var Wf = function (e, t) {
      for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
      return r;
    },
    Xf = function (e, t) {
      var r = e._targets,
        i,
        n,
        o;
      for (i in t)
        for (n = r.length; n--; )
          (o = e._ptLookup[n][i]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Wf(o, i)),
              o && o.modifier && o.modifier(t[i], e, r[n], i));
    },
    To = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (i, n, o) {
          o._onInit = function (a) {
            var u, l;
            if (
              (Re(n) &&
                ((u = {}),
                ct(n, function (c) {
                  return (u[c] = 1);
                }),
                (n = u)),
              t)
            ) {
              u = {};
              for (l in n) u[l] = t(n[l]);
              n = u;
            }
            Xf(a, n);
          };
        },
      };
    },
    ht =
      os.registerPlugin(
        {
          name: "attr",
          init: function (e, t, r, i, n) {
            var o, a, u;
            this.tween = r;
            for (o in t)
              (u = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (u || 0) + "",
                  t[o],
                  i,
                  n,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = u),
                this._props.push(o);
          },
          render: function (e, t) {
            for (var r = t._pt; r; )
              qe ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var r = t.length; r--; )
              this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
          },
        },
        To("roundProps", _o),
        To("modifiers"),
        To("snap", ru)
      ) || os;
  (Te.version = tt.version = ht.version = "3.12.7"),
    (Na = 1),
    Js() && Ti(),
    te.Power0,
    te.Power1,
    te.Power2,
    te.Power3,
    te.Power4,
    te.Linear,
    te.Quad,
    te.Cubic,
    te.Quart,
    te.Quint,
    te.Strong,
    te.Elastic,
    te.Back,
    te.SteppedEase,
    te.Bounce,
    te.Sine,
    te.Expo,
    te.Circ;
  /*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Su,
    Fr,
    Fi,
    Fo,
    Kr,
    Tu,
    Po,
    $f = function () {
      return typeof window < "u";
    },
    ur = {},
    Zr = 180 / Math.PI,
    Pi = Math.PI / 180,
    Ai = Math.atan2,
    Fu = 1e8,
    Ao = /([A-Z])/g,
    Vf = /(left|right|width|margin|padding|x)/i,
    jf = /[\s,\(]\S/,
    Qt = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    ko = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Uf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Gf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Qf = function (e, t) {
      var r = t.s + t.c * e;
      t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Pu = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Au = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Kf = function (e, t, r) {
      return (e.style[t] = r);
    },
    Zf = function (e, t, r) {
      return e.style.setProperty(t, r);
    },
    Jf = function (e, t, r) {
      return (e._gsap[t] = r);
    },
    eh = function (e, t, r) {
      return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    th = function (e, t, r, i, n) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = r), o.renderTransform(n, o);
    },
    rh = function (e, t, r, i, n) {
      var o = e._gsap;
      (o[t] = r), o.renderTransform(n, o);
    },
    _e = "transform",
    dt = _e + "Origin",
    ih = function s(e, t) {
      var r = this,
        i = this.target,
        n = i.style,
        o = i._gsap;
      if (e in ur && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = Qt[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (r.tfm[a] = lr(i, a));
                })
              : (this.tfm[e] = o.x ? o[e] : lr(i, e)),
            e === dt && (this.tfm.zOrigin = o.zOrigin);
        else
          return Qt.transform.split(",").forEach(function (a) {
            return s.call(r, a, t);
          });
        if (this.props.indexOf(_e) >= 0) return;
        o.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(dt, t, "")),
          (e = _e);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    ku = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    nh = function () {
      var e = this.props,
        t = this.target,
        r = t.style,
        i = t._gsap,
        n,
        o;
      for (n = 0; n < e.length; n += 3)
        e[n + 1]
          ? e[n + 1] === 2
            ? t[e[n]](e[n + 2])
            : (t[e[n]] = e[n + 2])
          : e[n + 2]
          ? (r[e[n]] = e[n + 2])
          : r.removeProperty(
              e[n].substr(0, 2) === "--"
                ? e[n]
                : e[n].replace(Ao, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) i[o] = this.tfm[o];
        i.svg &&
          (i.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Po()),
          (!n || !n.isStart) &&
            !r[_e] &&
            (ku(r),
            i.zOrigin &&
              r[dt] &&
              ((r[dt] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    Ou = function (e, t) {
      var r = { target: e, props: [], revert: nh, save: ih };
      return (
        e._gsap || ht.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    Mu,
    Oo = function (e, t) {
      var r = Fr.createElementNS
        ? Fr.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Fr.createElement(e);
      return r && r.style ? r : Fr.createElement(e);
    },
    Kt = function s(e, t, r) {
      var i = getComputedStyle(e);
      return (
        i[t] ||
        i.getPropertyValue(t.replace(Ao, "-$1").toLowerCase()) ||
        i.getPropertyValue(t) ||
        (!r && s(e, ki(t) || t, 1)) ||
        ""
      );
    },
    Ru = "O,Moz,ms,Ms,Webkit".split(","),
    ki = function (e, t, r) {
      var i = t || Kr,
        n = i.style,
        o = 5;
      if (e in n && !r) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Ru[o] + e in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ru[o] : "") + e;
    },
    Mo = function () {
      $f() &&
        window.document &&
        ((Su = window),
        (Fr = Su.document),
        (Fi = Fr.documentElement),
        (Kr = Oo("div") || { style: {} }),
        Oo("div"),
        (_e = ki(_e)),
        (dt = _e + "Origin"),
        (Kr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Mu = !!ki("perspective")),
        (Po = ht.core.reverting),
        (Fo = 1));
    },
    Lu = function (e) {
      var t = e.ownerSVGElement,
        r = Oo(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = e.cloneNode(!0),
        n;
      (i.style.display = "block"), r.appendChild(i), Fi.appendChild(r);
      try {
        n = i.getBBox();
      } catch {}
      return r.removeChild(i), Fi.removeChild(r), n;
    },
    Bu = function (e, t) {
      for (var r = t.length; r--; )
        if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
    },
    Nu = function (e) {
      var t, r;
      try {
        t = e.getBBox();
      } catch {
        (t = Lu(e)), (r = 1);
      }
      return (
        (t && (t.width || t.height)) || r || (t = Lu(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Bu(e, ["x", "cx", "x1"]) || 0,
              y: +Bu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    zu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Nu(e));
    },
    Jr = function (e, t) {
      if (t) {
        var r = e.style,
          i;
        t in ur && t !== dt && (t = _e),
          r.removeProperty
            ? ((i = t.substr(0, 2)),
              (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              r.removeProperty(
                i === "--" ? t : t.replace(Ao, "-$1").toLowerCase()
              ))
            : r.removeAttribute(t);
      }
    },
    Pr = function (e, t, r, i, n, o) {
      var a = new ft(e._pt, t, r, 0, 1, o ? Au : Pu);
      return (e._pt = a), (a.b = i), (a.e = n), e._props.push(r), a;
    },
    Iu = { deg: 1, rad: 1, turn: 1 },
    sh = { grid: 1, flex: 1 },
    Ar = function s(e, t, r, i) {
      var n = parseFloat(r) || 0,
        o = (r + "").trim().substr((n + "").length) || "px",
        a = Kr.style,
        u = Vf.test(t),
        l = e.tagName.toLowerCase() === "svg",
        c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
        p = 100,
        f = i === "px",
        h = i === "%",
        g,
        d,
        _,
        D;
      if (i === o || !n || Iu[i] || Iu[o]) return n;
      if (
        (o !== "px" && !f && (n = s(e, t, r, "px")),
        (D = e.getCTM && zu(e)),
        (h || o === "%") && (ur[t] || ~t.indexOf("adius")))
      )
        return (
          (g = D ? e.getBBox()[u ? "width" : "height"] : e[c]),
          ve(h ? (n / g) * p : (n / 100) * g)
        );
      if (
        ((a[u ? "width" : "height"] = p + (f ? o : i)),
        (d =
          (i !== "rem" && ~t.indexOf("adius")) ||
          (i === "em" && e.appendChild && !l)
            ? e
            : e.parentNode),
        D && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === Fr || !d.appendChild) && (d = Fr.body),
        (_ = d._gsap),
        _ && h && _.width && u && _.time === xt.time && !_.uncache)
      )
        return ve((n / _.width) * p);
      if (h && (t === "height" || t === "width")) {
        var y = e.style[t];
        (e.style[t] = p + i), (g = e[c]), y ? (e.style[t] = y) : Jr(e, t);
      } else
        (h || o === "%") &&
          !sh[Kt(d, "display")] &&
          (a.position = Kt(e, "position")),
          d === e && (a.position = "static"),
          d.appendChild(Kr),
          (g = Kr[c]),
          d.removeChild(Kr),
          (a.position = "absolute");
      return (
        u && h && ((_ = Vr(d)), (_.time = xt.time), (_.width = d[c])),
        ve(f ? (g * n) / p : g && n ? (p / g) * n : 0)
      );
    },
    lr = function (e, t, r, i) {
      var n;
      return (
        Fo || Mo(),
        t in Qt &&
          t !== "transform" &&
          ((t = Qt[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        ur[t] && t !== "transform"
          ? ((n = dn(e, i)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : us(Kt(e, dt)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
              (n =
                (as[t] && as[t](e, t, r)) ||
                Kt(e, t) ||
                Ya(e, t) ||
                (t === "opacity" ? 1 : 0))),
        r && !~(n + "").trim().indexOf(" ") ? Ar(e, t, n, r) + r : n
      );
    },
    oh = function (e, t, r, i) {
      if (!r || r === "none") {
        var n = ki(t, e, 1),
          o = n && Kt(e, n, 1);
        o && o !== r
          ? ((t = n), (r = o))
          : t === "borderColor" && (r = Kt(e, "borderTopColor"));
      }
      var a = new ft(this._pt, e.style, t, 0, 1, xu),
        u = 0,
        l = 0,
        c,
        p,
        f,
        h,
        g,
        d,
        _,
        D,
        y,
        v,
        m,
        x;
      if (
        ((a.b = r),
        (a.e = i),
        (r += ""),
        (i += ""),
        i === "auto" &&
          ((d = e.style[t]),
          (e.style[t] = i),
          (i = Kt(e, t) || i),
          d ? (e.style[t] = d) : Jr(e, t)),
        (c = [r, i]),
        hu(c),
        (r = c[0]),
        (i = c[1]),
        (f = r.match(wi) || []),
        (x = i.match(wi) || []),
        x.length)
      ) {
        for (; (p = wi.exec(i)); )
          (_ = p[0]),
            (y = i.substring(u, p.index)),
            g
              ? (g = (g + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (g = 1),
            _ !== (d = f[l++] || "") &&
              ((h = parseFloat(d) || 0),
              (m = d.substr((h + "").length)),
              _.charAt(1) === "=" && (_ = xi(h, _) + m),
              (D = parseFloat(_)),
              (v = _.substr((D + "").length)),
              (u = wi.lastIndex - v.length),
              v ||
                ((v = v || Dt.units[t] || m),
                u === i.length && ((i += v), (a.e += v))),
              m !== v && (h = Ar(e, t, d, v) || 0),
              (a._pt = {
                _next: a._pt,
                p: y || l === 1 ? y : ",",
                s: h,
                c: D - h,
                m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = u < i.length ? i.substring(u, i.length) : "";
      } else a.r = t === "display" && i === "none" ? Au : Pu;
      return La.test(i) && (a.e = 0), (this._pt = a), a;
    },
    qu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    ah = function (e) {
      var t = e.split(" "),
        r = t[0],
        i = t[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((e = r), (r = i), (i = e)),
        (t[0] = qu[r] || r),
        (t[1] = qu[i] || i),
        t.join(" ")
      );
    },
    uh = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t,
          i = r.style,
          n = t.u,
          o = r._gsap,
          a,
          u,
          l;
        if (n === "all" || n === !0) (i.cssText = ""), (u = 1);
        else
          for (n = n.split(","), l = n.length; --l > -1; )
            (a = n[l]),
              ur[a] && ((u = 1), (a = a === "transformOrigin" ? dt : _e)),
              Jr(r, a);
        u &&
          (Jr(r, _e),
          o &&
            (o.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            dn(r, 1),
            (o.uncache = 1),
            ku(i)));
      }
    },
    as = {
      clearProps: function (e, t, r, i, n) {
        if (n.data !== "isFromStart") {
          var o = (e._pt = new ft(e._pt, t, r, 0, 0, uh));
          return (o.u = i), (o.pr = -10), (o.tween = n), e._props.push(r), 1;
        }
      },
    },
    hn = [1, 0, 0, 1, 0, 0],
    Hu = {},
    Yu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Wu = function (e) {
      var t = Kt(e, _e);
      return Yu(t) ? hn : t.substr(7).match(Ra).map(ve);
    },
    Ro = function (e, t) {
      var r = e._gsap || Vr(e),
        i = e.style,
        n = Wu(e),
        o,
        a,
        u,
        l;
      return r.svg && e.getAttribute("transform")
        ? ((u = e.transform.baseVal.consolidate().matrix),
          (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
          n.join(",") === "1,0,0,1,0,0" ? hn : n)
        : (n === hn &&
            !e.offsetParent &&
            e !== Fi &&
            !r.svg &&
            ((u = i.display),
            (i.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((l = 1), (a = e.nextElementSibling), Fi.appendChild(e)),
            (n = Wu(e)),
            u ? (i.display = u) : Jr(e, "display"),
            l &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Fi.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Lo = function (e, t, r, i, n, o) {
      var a = e._gsap,
        u = n || Ro(e, !0),
        l = a.xOrigin || 0,
        c = a.yOrigin || 0,
        p = a.xOffset || 0,
        f = a.yOffset || 0,
        h = u[0],
        g = u[1],
        d = u[2],
        _ = u[3],
        D = u[4],
        y = u[5],
        v = t.split(" "),
        m = parseFloat(v[0]) || 0,
        x = parseFloat(v[1]) || 0,
        E,
        C,
        T,
        S;
      r
        ? u !== hn &&
          (C = h * _ - g * d) &&
          ((T = m * (_ / C) + x * (-d / C) + (d * y - _ * D) / C),
          (S = m * (-g / C) + x * (h / C) - (h * y - g * D) / C),
          (m = T),
          (x = S))
        : ((E = Nu(e)),
          (m = E.x + (~v[0].indexOf("%") ? (m / 100) * E.width : m)),
          (x =
            E.y + (~(v[1] || v[0]).indexOf("%") ? (x / 100) * E.height : x))),
        i || (i !== !1 && a.smooth)
          ? ((D = m - l),
            (y = x - c),
            (a.xOffset = p + (D * h + y * d) - D),
            (a.yOffset = f + (D * g + y * _) - y))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = m),
        (a.yOrigin = x),
        (a.smooth = !!i),
        (a.origin = t),
        (a.originIsAbsolute = !!r),
        (e.style[dt] = "0px 0px"),
        o &&
          (Pr(o, a, "xOrigin", l, m),
          Pr(o, a, "yOrigin", c, x),
          Pr(o, a, "xOffset", p, a.xOffset),
          Pr(o, a, "yOffset", f, a.yOffset)),
        e.setAttribute("data-svg-origin", m + " " + x);
    },
    dn = function (e, t) {
      var r = e._gsap || new gu(e);
      if ("x" in r && !t && !r.uncache) return r;
      var i = e.style,
        n = r.scaleX < 0,
        o = "px",
        a = "deg",
        u = getComputedStyle(e),
        l = Kt(e, dt) || "0",
        c,
        p,
        f,
        h,
        g,
        d,
        _,
        D,
        y,
        v,
        m,
        x,
        E,
        C,
        T,
        S,
        b,
        M,
        A,
        B,
        k,
        L,
        O,
        R,
        I,
        F,
        w,
        X,
        ie,
        he,
        J,
        U;
      return (
        (c = p = f = d = _ = D = y = v = m = 0),
        (h = g = 1),
        (r.svg = !!(e.getCTM && zu(e))),
        u.translate &&
          ((u.translate !== "none" ||
            u.scale !== "none" ||
            u.rotate !== "none") &&
            (i[_e] =
              (u.translate !== "none"
                ? "translate3d(" +
                  (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
              (u.scale !== "none"
                ? "scale(" + u.scale.split(" ").join(",") + ") "
                : "") +
              (u[_e] !== "none" ? u[_e] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (C = Ro(e, r.svg)),
        r.svg &&
          (r.uncache
            ? ((I = e.getBBox()),
              (l = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px"),
              (R = ""))
            : (R = !t && e.getAttribute("data-svg-origin")),
          Lo(e, R || l, !!R || r.originIsAbsolute, r.smooth !== !1, C)),
        (x = r.xOrigin || 0),
        (E = r.yOrigin || 0),
        C !== hn &&
          ((M = C[0]),
          (A = C[1]),
          (B = C[2]),
          (k = C[3]),
          (c = L = C[4]),
          (p = O = C[5]),
          C.length === 6
            ? ((h = Math.sqrt(M * M + A * A)),
              (g = Math.sqrt(k * k + B * B)),
              (d = M || A ? Ai(A, M) * Zr : 0),
              (y = B || k ? Ai(B, k) * Zr + d : 0),
              y && (g *= Math.abs(Math.cos(y * Pi))),
              r.svg && ((c -= x - (x * M + E * B)), (p -= E - (x * A + E * k))))
            : ((U = C[6]),
              (he = C[7]),
              (w = C[8]),
              (X = C[9]),
              (ie = C[10]),
              (J = C[11]),
              (c = C[12]),
              (p = C[13]),
              (f = C[14]),
              (T = Ai(U, ie)),
              (_ = T * Zr),
              T &&
                ((S = Math.cos(-T)),
                (b = Math.sin(-T)),
                (R = L * S + w * b),
                (I = O * S + X * b),
                (F = U * S + ie * b),
                (w = L * -b + w * S),
                (X = O * -b + X * S),
                (ie = U * -b + ie * S),
                (J = he * -b + J * S),
                (L = R),
                (O = I),
                (U = F)),
              (T = Ai(-B, ie)),
              (D = T * Zr),
              T &&
                ((S = Math.cos(-T)),
                (b = Math.sin(-T)),
                (R = M * S - w * b),
                (I = A * S - X * b),
                (F = B * S - ie * b),
                (J = k * b + J * S),
                (M = R),
                (A = I),
                (B = F)),
              (T = Ai(A, M)),
              (d = T * Zr),
              T &&
                ((S = Math.cos(T)),
                (b = Math.sin(T)),
                (R = M * S + A * b),
                (I = L * S + O * b),
                (A = A * S - M * b),
                (O = O * S - L * b),
                (M = R),
                (L = I)),
              _ &&
                Math.abs(_) + Math.abs(d) > 359.9 &&
                ((_ = d = 0), (D = 180 - D)),
              (h = ve(Math.sqrt(M * M + A * A + B * B))),
              (g = ve(Math.sqrt(O * O + U * U))),
              (T = Ai(L, O)),
              (y = Math.abs(T) > 2e-4 ? T * Zr : 0),
              (m = J ? 1 / (J < 0 ? -J : J) : 0)),
          r.svg &&
            ((R = e.getAttribute("transform")),
            (r.forceCSS = e.setAttribute("transform", "") || !Yu(Kt(e, _e))),
            R && e.setAttribute("transform", R))),
        Math.abs(y) > 90 &&
          Math.abs(y) < 270 &&
          (n
            ? ((h *= -1),
              (y += d <= 0 ? 180 : -180),
              (d += d <= 0 ? 180 : -180))
            : ((g *= -1), (y += y <= 0 ? 180 : -180))),
        (t = t || r.uncache),
        (r.x =
          c -
          ((r.xPercent =
            c &&
            ((!t && r.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (e.offsetWidth * r.xPercent) / 100
            : 0) +
          o),
        (r.y =
          p -
          ((r.yPercent =
            p &&
            ((!t && r.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          o),
        (r.z = f + o),
        (r.scaleX = ve(h)),
        (r.scaleY = ve(g)),
        (r.rotation = ve(d) + a),
        (r.rotationX = ve(_) + a),
        (r.rotationY = ve(D) + a),
        (r.skewX = y + a),
        (r.skewY = v + a),
        (r.transformPerspective = m + o),
        (r.zOrigin = parseFloat(l.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
          (i[dt] = us(l)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Dt.force3D),
        (r.renderTransform = r.svg ? ch : Mu ? Xu : lh),
        (r.uncache = 0),
        r
      );
    },
    us = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Bo = function (e, t, r) {
      var i = je(t);
      return ve(parseFloat(t) + parseFloat(Ar(e, "x", r + "px", i))) + i;
    },
    lh = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Xu(e, t);
    },
    ei = "0deg",
    pn = "0px",
    ti = ") ",
    Xu = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        n = r.yPercent,
        o = r.x,
        a = r.y,
        u = r.z,
        l = r.rotation,
        c = r.rotationY,
        p = r.rotationX,
        f = r.skewX,
        h = r.skewY,
        g = r.scaleX,
        d = r.scaleY,
        _ = r.transformPerspective,
        D = r.force3D,
        y = r.target,
        v = r.zOrigin,
        m = "",
        x = (D === "auto" && e && e !== 1) || D === !0;
      if (v && (p !== ei || c !== ei)) {
        var E = parseFloat(c) * Pi,
          C = Math.sin(E),
          T = Math.cos(E),
          S;
        (E = parseFloat(p) * Pi),
          (S = Math.cos(E)),
          (o = Bo(y, o, C * S * -v)),
          (a = Bo(y, a, -Math.sin(E) * -v)),
          (u = Bo(y, u, T * S * -v + v));
      }
      _ !== pn && (m += "perspective(" + _ + ti),
        (i || n) && (m += "translate(" + i + "%, " + n + "%) "),
        (x || o !== pn || a !== pn || u !== pn) &&
          (m +=
            u !== pn || x
              ? "translate3d(" + o + ", " + a + ", " + u + ") "
              : "translate(" + o + ", " + a + ti),
        l !== ei && (m += "rotate(" + l + ti),
        c !== ei && (m += "rotateY(" + c + ti),
        p !== ei && (m += "rotateX(" + p + ti),
        (f !== ei || h !== ei) && (m += "skew(" + f + ", " + h + ti),
        (g !== 1 || d !== 1) && (m += "scale(" + g + ", " + d + ti),
        (y.style[_e] = m || "translate(0, 0)");
    },
    ch = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        n = r.yPercent,
        o = r.x,
        a = r.y,
        u = r.rotation,
        l = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        f = r.scaleY,
        h = r.target,
        g = r.xOrigin,
        d = r.yOrigin,
        _ = r.xOffset,
        D = r.yOffset,
        y = r.forceCSS,
        v = parseFloat(o),
        m = parseFloat(a),
        x,
        E,
        C,
        T,
        S;
      (u = parseFloat(u)),
        (l = parseFloat(l)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (l += c), (u += c)),
        u || l
          ? ((u *= Pi),
            (l *= Pi),
            (x = Math.cos(u) * p),
            (E = Math.sin(u) * p),
            (C = Math.sin(u - l) * -f),
            (T = Math.cos(u - l) * f),
            l &&
              ((c *= Pi),
              (S = Math.tan(l - c)),
              (S = Math.sqrt(1 + S * S)),
              (C *= S),
              (T *= S),
              c &&
                ((S = Math.tan(c)),
                (S = Math.sqrt(1 + S * S)),
                (x *= S),
                (E *= S))),
            (x = ve(x)),
            (E = ve(E)),
            (C = ve(C)),
            (T = ve(T)))
          : ((x = p), (T = f), (E = C = 0)),
        ((v && !~(o + "").indexOf("px")) || (m && !~(a + "").indexOf("px"))) &&
          ((v = Ar(h, "x", o, "px")), (m = Ar(h, "y", a, "px"))),
        (g || d || _ || D) &&
          ((v = ve(v + g - (g * x + d * C) + _)),
          (m = ve(m + d - (g * E + d * T) + D))),
        (i || n) &&
          ((S = h.getBBox()),
          (v = ve(v + (i / 100) * S.width)),
          (m = ve(m + (n / 100) * S.height))),
        (S =
          "matrix(" +
          x +
          "," +
          E +
          "," +
          C +
          "," +
          T +
          "," +
          v +
          "," +
          m +
          ")"),
        h.setAttribute("transform", S),
        y && (h.style[_e] = S);
    },
    fh = function (e, t, r, i, n) {
      var o = 360,
        a = Re(n),
        u = parseFloat(n) * (a && ~n.indexOf("rad") ? Zr : 1),
        l = u - i,
        c = i + l + "deg",
        p,
        f;
      return (
        a &&
          ((p = n.split("_")[1]),
          p === "short" &&
            ((l %= o), l !== l % (o / 2) && (l += l < 0 ? o : -360)),
          p === "cw" && l < 0
            ? (l = ((l + o * Fu) % o) - ~~(l / o) * o)
            : p === "ccw" && l > 0 && (l = ((l - o * Fu) % o) - ~~(l / o) * o)),
        (e._pt = f = new ft(e._pt, t, r, i, l, Uf)),
        (f.e = c),
        (f.u = "deg"),
        e._props.push(r),
        f
      );
    },
    $u = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    hh = function (e, t, r) {
      var i = $u({}, r._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = r.style,
        a,
        u,
        l,
        c,
        p,
        f,
        h,
        g;
      i.svg
        ? ((l = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (o[_e] = t),
          (a = dn(r, 1)),
          Jr(r, _e),
          r.setAttribute("transform", l))
        : ((l = getComputedStyle(r)[_e]),
          (o[_e] = t),
          (a = dn(r, 1)),
          (o[_e] = l));
      for (u in ur)
        (l = i[u]),
          (c = a[u]),
          l !== c &&
            n.indexOf(u) < 0 &&
            ((h = je(l)),
            (g = je(c)),
            (p = h !== g ? Ar(r, u, l, g) : parseFloat(l)),
            (f = parseFloat(c)),
            (e._pt = new ft(e._pt, a, u, p, f - p, ko)),
            (e._pt.u = g || 0),
            e._props.push(u));
      $u(a, i);
    };
  ct("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      r = "Right",
      i = "Bottom",
      n = "Left",
      o = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function (
        a
      ) {
        return e < 2 ? s + a : "border" + a + s;
      });
    as[e > 1 ? "border" + s : s] = function (a, u, l, c, p) {
      var f, h;
      if (arguments.length < 4)
        return (
          (f = o.map(function (g) {
            return lr(a, g, l);
          })),
          (h = f.join(" ")),
          h.split(f[0]).length === 5 ? f[0] : h
        );
      (f = (c + "").split(" ")),
        (h = {}),
        o.forEach(function (g, d) {
          return (h[g] = f[d] = f[d] || f[((d - 1) / 2) | 0]);
        }),
        a.init(u, h, p);
    };
  });
  var Vu = {
    name: "css",
    register: Mo,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, r, i, n) {
      var o = this._props,
        a = e.style,
        u = r.vars.startAt,
        l,
        c,
        p,
        f,
        h,
        g,
        d,
        _,
        D,
        y,
        v,
        m,
        x,
        E,
        C,
        T;
      Fo || Mo(),
        (this.styles = this.styles || Ou(e)),
        (T = this.styles.props),
        (this.tween = r);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !(yt[d] && Du(d, t, r, i, e, n)))
        ) {
          if (
            ((h = typeof c),
            (g = as[d]),
            h === "function" && ((c = c.call(r, i, e, n)), (h = typeof c)),
            h === "string" && ~c.indexOf("random(") && (c = on(c)),
            g)
          )
            g(this, e, d, c, r) && (C = 1);
          else if (d.substr(0, 2) === "--")
            (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (Sr.lastIndex = 0),
              Sr.test(l) || ((_ = je(l)), (D = je(c))),
              D ? _ !== D && (l = Ar(e, d, l, D) + D) : _ && (c += _),
              this.add(a, "setProperty", l, c, i, n, 0, 0, d),
              o.push(d),
              T.push(d, 0, a[d]);
          else if (h !== "undefined") {
            if (
              (u && d in u
                ? ((l =
                    typeof u[d] == "function" ? u[d].call(r, i, e, n) : u[d]),
                  Re(l) && ~l.indexOf("random(") && (l = on(l)),
                  je(l + "") ||
                    l === "auto" ||
                    (l += Dt.units[d] || je(lr(e, d)) || ""),
                  (l + "").charAt(1) === "=" && (l = lr(e, d)))
                : (l = lr(e, d)),
              (f = parseFloat(l)),
              (y = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (p = parseFloat(c)),
              d in Qt &&
                (d === "autoAlpha" &&
                  (f === 1 && lr(e, "visibility") === "hidden" && p && (f = 0),
                  T.push("visibility", 0, a.visibility),
                  Pr(
                    this,
                    a,
                    "visibility",
                    f ? "inherit" : "hidden",
                    p ? "inherit" : "hidden",
                    !p
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = Qt[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (v = d in ur),
              v)
            ) {
              if (
                (this.styles.save(d),
                m ||
                  ((x = e._gsap),
                  (x.renderTransform && !t.parseTransform) ||
                    dn(e, t.parseTransform),
                  (E = t.smoothOrigin !== !1 && x.smooth),
                  (m = this._pt =
                    new ft(this._pt, a, _e, 0, 1, x.renderTransform, x, 0, -1)),
                  (m.dep = 1)),
                d === "scale")
              )
                (this._pt = new ft(
                  this._pt,
                  x,
                  "scaleY",
                  x.scaleY,
                  (y ? xi(x.scaleY, y + p) : p) - x.scaleY || 0,
                  ko
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                T.push(dt, 0, a[dt]),
                  (c = ah(c)),
                  x.svg
                    ? Lo(e, c, 0, E, 0, this)
                    : ((D = parseFloat(c.split(" ")[2]) || 0),
                      D !== x.zOrigin && Pr(this, x, "zOrigin", x.zOrigin, D),
                      Pr(this, a, d, us(l), us(c)));
                continue;
              } else if (d === "svgOrigin") {
                Lo(e, c, 1, E, 0, this);
                continue;
              } else if (d in Hu) {
                fh(this, x, d, f, y ? xi(f, y + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Pr(this, x, "smooth", x.smooth, c);
                continue;
              } else if (d === "force3D") {
                x[d] = c;
                continue;
              } else if (d === "transform") {
                hh(this, c, e);
                continue;
              }
            } else d in a || (d = ki(d) || d);
            if (
              v ||
              ((p || p === 0) && (f || f === 0) && !jf.test(c) && d in a)
            )
              (_ = (l + "").substr((f + "").length)),
                p || (p = 0),
                (D = je(c) || (d in Dt.units ? Dt.units[d] : _)),
                _ !== D && (f = Ar(e, d, l, D)),
                (this._pt = new ft(
                  this._pt,
                  v ? x : a,
                  d,
                  f,
                  (y ? xi(f, y + p) : p) - f,
                  !v && (D === "px" || d === "zIndex") && t.autoRound !== !1
                    ? Qf
                    : ko
                )),
                (this._pt.u = D || 0),
                _ !== D && D !== "%" && ((this._pt.b = l), (this._pt.r = Gf));
            else if (d in a) oh.call(this, e, d, l, y ? y + c : c);
            else if (d in e) this.add(e, d, l || e[d], y ? y + c : c, i, n);
            else if (d !== "parseTransform") {
              no(d, c);
              continue;
            }
            v ||
              (d in a
                ? T.push(d, 0, a[d])
                : typeof e[d] == "function"
                ? T.push(d, 2, e[d]())
                : T.push(d, 1, l || e[d])),
              o.push(d);
          }
        }
      C && Cu(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Po())
        for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
      else t.styles.revert();
    },
    get: lr,
    aliases: Qt,
    getSetter: function (e, t, r) {
      var i = Qt[t];
      return (
        i && i.indexOf(",") < 0 && (t = i),
        t in ur && t !== dt && (e._gsap.x || lr(e, "x"))
          ? r && Tu === r
            ? t === "scale"
              ? eh
              : Jf
            : (Tu = r || {}) && (t === "scale" ? th : rh)
          : e.style && !Zs(e.style[t])
          ? Kf
          : ~t.indexOf("-")
          ? Zf
          : Co(e, t)
      );
    },
    core: { _removeProperty: Jr, _getMatrix: Ro },
  };
  (ht.utils.checkPrefix = ki),
    (ht.core.getStyleSaver = Ou),
    (function (s, e, t, r) {
      var i = ct(s + "," + e + "," + t, function (n) {
        ur[n] = 1;
      });
      ct(e, function (n) {
        (Dt.units[n] = "deg"), (Hu[n] = 1);
      }),
        (Qt[i[13]] = s + "," + e),
        ct(r, function (n) {
          var o = n.split(":");
          Qt[o[1]] = i[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    ct(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        Dt.units[s] = "px";
      }
    ),
    ht.registerPlugin(Vu);
  var q = ht.registerPlugin(Vu) || ht;
  q.core.Tween;
  function dh(s, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(s, r.key, r);
    }
  }
  function ph(s, e, t) {
    return dh(s.prototype, e), s;
  }
  /*!
   * Observer 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var He,
    ls,
    Ct,
    kr,
    Or,
    Oi,
    ju,
    ri,
    _n,
    Uu,
    cr,
    Nt,
    Gu,
    Qu = function () {
      return (
        He ||
        (typeof window < "u" && (He = window.gsap) && He.registerPlugin && He)
      );
    },
    Ku = 1,
    Mi = [],
    K = [],
    Zt = [],
    gn = Date.now,
    No = function (e, t) {
      return t;
    },
    _h = function () {
      var e = _n.core,
        t = e.bridge || {},
        r = e._scrollers,
        i = e._proxies;
      r.push.apply(r, K),
        i.push.apply(i, Zt),
        (K = r),
        (Zt = i),
        (No = function (o, a) {
          return t[o](a);
        });
    },
    Mr = function (e, t) {
      return ~Zt.indexOf(e) && Zt[Zt.indexOf(e) + 1][t];
    },
    Dn = function (e) {
      return !!~Uu.indexOf(e);
    },
    rt = function (e, t, r, i, n) {
      return e.addEventListener(t, r, { passive: i !== !1, capture: !!n });
    },
    it = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    cs = "scrollLeft",
    fs = "scrollTop",
    zo = function () {
      return (cr && cr.isPressed) || K.cache++;
    },
    hs = function (e, t) {
      var r = function i(n) {
        if (n || n === 0) {
          Ku && (Ct.history.scrollRestoration = "manual");
          var o = cr && cr.isPressed;
          (n = i.v = Math.round(n) || (cr && cr.iOS ? 1 : 0)),
            e(n),
            (i.cacheID = K.cache),
            o && No("ss", n);
        } else
          (t || K.cache !== i.cacheID || No("ref")) &&
            ((i.cacheID = K.cache), (i.v = e()));
        return i.v + i.offset;
      };
      return (r.offset = 0), e && r;
    },
    nt = {
      s: cs,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: hs(function (s) {
        return arguments.length
          ? Ct.scrollTo(s, ke.sc())
          : Ct.pageXOffset || kr[cs] || Or[cs] || Oi[cs] || 0;
      }),
    },
    ke = {
      s: fs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: nt,
      sc: hs(function (s) {
        return arguments.length
          ? Ct.scrollTo(nt.sc(), s)
          : Ct.pageYOffset || kr[fs] || Or[fs] || Oi[fs] || 0;
      }),
    },
    pt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || He.utils.toArray)(e)[0] ||
        (typeof e == "string" && He.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Rr = function (e, t) {
      var r = t.s,
        i = t.sc;
      Dn(e) && (e = kr.scrollingElement || Or);
      var n = K.indexOf(e),
        o = i === ke.sc ? 1 : 2;
      !~n && (n = K.push(e) - 1), K[n + o] || rt(e, "scroll", zo);
      var a = K[n + o],
        u =
          a ||
          (K[n + o] =
            hs(Mr(e, r), !0) ||
            (Dn(e)
              ? i
              : hs(function (l) {
                  return arguments.length ? (e[r] = l) : e[r];
                })));
      return (
        (u.target = e),
        a || (u.smooth = He.getProperty(e, "scrollBehavior") === "smooth"),
        u
      );
    },
    Io = function (e, t, r) {
      var i = e,
        n = e,
        o = gn(),
        a = o,
        u = t || 50,
        l = Math.max(500, u * 3),
        c = function (g, d) {
          var _ = gn();
          d || _ - o > u
            ? ((n = i), (i = g), (a = o), (o = _))
            : r
            ? (i += g)
            : (i = n + ((g - n) / (_ - a)) * (o - a));
        },
        p = function () {
          (n = i = r ? 0 : i), (a = o = 0);
        },
        f = function (g) {
          var d = a,
            _ = n,
            D = gn();
          return (
            (g || g === 0) && g !== i && c(g),
            o === a || D - a > l
              ? 0
              : ((i + (r ? _ : -_)) / ((r ? D : o) - d)) * 1e3
          );
        };
      return { update: c, reset: p, getVelocity: f };
    },
    mn = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Zu = function (e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    Ju = function () {
      (_n = He.core.globals().ScrollTrigger), _n && _n.core && _h();
    },
    el = function (e) {
      return (
        (He = e || Qu()),
        !ls &&
          He &&
          typeof document < "u" &&
          document.body &&
          ((Ct = window),
          (kr = document),
          (Or = kr.documentElement),
          (Oi = kr.body),
          (Uu = [Ct, kr, Or, Oi]),
          He.utils.clamp,
          (Gu = He.core.context || function () {}),
          (ri = "onpointerenter" in Oi ? "pointer" : "mouse"),
          (ju = we.isTouch =
            Ct.matchMedia &&
            Ct.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Ct ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Nt = we.eventTypes =
            (
              "ontouchstart" in Or
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Or
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Ku = 0);
          }, 500),
          Ju(),
          (ls = 1)),
        ls
      );
    };
  (nt.op = ke), (K.cache = 0);
  var we = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (r) {
        ls || el(He) || console.warn("Please gsap.registerPlugin(Observer)"),
          _n || Ju();
        var i = r.tolerance,
          n = r.dragMinimum,
          o = r.type,
          a = r.target,
          u = r.lineHeight,
          l = r.debounce,
          c = r.preventDefault,
          p = r.onStop,
          f = r.onStopDelay,
          h = r.ignore,
          g = r.wheelSpeed,
          d = r.event,
          _ = r.onDragStart,
          D = r.onDragEnd,
          y = r.onDrag,
          v = r.onPress,
          m = r.onRelease,
          x = r.onRight,
          E = r.onLeft,
          C = r.onUp,
          T = r.onDown,
          S = r.onChangeX,
          b = r.onChangeY,
          M = r.onChange,
          A = r.onToggleX,
          B = r.onToggleY,
          k = r.onHover,
          L = r.onHoverEnd,
          O = r.onMove,
          R = r.ignoreCheck,
          I = r.isNormalizer,
          F = r.onGestureStart,
          w = r.onGestureEnd,
          X = r.onWheel,
          ie = r.onEnable,
          he = r.onDisable,
          J = r.onClick,
          U = r.scrollSpeed,
          Pe = r.capture,
          ne = r.allowClicks,
          Ye = r.lockAxis,
          Ne = r.onLockAxis;
        (this.target = a = pt(a) || Or),
          (this.vars = r),
          h && (h = He.utils.toArray(h)),
          (i = i || 1e-9),
          (n = n || 0),
          (g = g || 1),
          (U = U || 1),
          (o = o || "wheel,touch,pointer"),
          (l = l !== !1),
          u || (u = parseFloat(Ct.getComputedStyle(Oi).lineHeight) || 22);
        var me,
          ut,
          _t,
          se,
          xe,
          gt,
          Tt,
          P = this,
          Ft = 0,
          _r = 0,
          qr = r.passive || (!c && r.passive !== !1),
          Ce = Rr(a, nt),
          gr = Rr(a, ke),
          Hr = Ce(),
          di = gr(),
          ze =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Nt[0] === "pointerdown",
          Yr = Dn(a),
          be = a.ownerDocument || kr,
          It = [0, 0, 0],
          Lt = [0, 0, 0],
          Dr = 0,
          Yn = function () {
            return (Dr = gn());
          },
          Ae = function ($, oe) {
            return (
              ((P.event = $) && h && ~h.indexOf($.target)) ||
              (oe && ze && $.pointerType !== "touch") ||
              (R && R($, oe))
            );
          },
          Ys = function () {
            P._vx.reset(), P._vy.reset(), ut.pause(), p && p(P);
          },
          mr = function () {
            var $ = (P.deltaX = Zu(It)),
              oe = (P.deltaY = Zu(Lt)),
              N = Math.abs($) >= i,
              V = Math.abs(oe) >= i;
            M && (N || V) && M(P, $, oe, It, Lt),
              N &&
                (x && P.deltaX > 0 && x(P),
                E && P.deltaX < 0 && E(P),
                S && S(P),
                A && P.deltaX < 0 != Ft < 0 && A(P),
                (Ft = P.deltaX),
                (It[0] = It[1] = It[2] = 0)),
              V &&
                (T && P.deltaY > 0 && T(P),
                C && P.deltaY < 0 && C(P),
                b && b(P),
                B && P.deltaY < 0 != _r < 0 && B(P),
                (_r = P.deltaY),
                (Lt[0] = Lt[1] = Lt[2] = 0)),
              (se || _t) &&
                (O && O(P),
                _t && (_ && _t === 1 && _(P), y && y(P), (_t = 0)),
                (se = !1)),
              gt && !(gt = !1) && Ne && Ne(P),
              xe && (X(P), (xe = !1)),
              (me = 0);
          },
          ji = function ($, oe, N) {
            (It[N] += $),
              (Lt[N] += oe),
              P._vx.update($),
              P._vy.update(oe),
              l ? me || (me = requestAnimationFrame(mr)) : mr();
          },
          Ui = function ($, oe) {
            Ye &&
              !Tt &&
              ((P.axis = Tt = Math.abs($) > Math.abs(oe) ? "x" : "y"),
              (gt = !0)),
              Tt !== "y" && ((It[2] += $), P._vx.update($, !0)),
              Tt !== "x" && ((Lt[2] += oe), P._vy.update(oe, !0)),
              l ? me || (me = requestAnimationFrame(mr)) : mr();
          },
          Wr = function ($) {
            if (!Ae($, 1)) {
              $ = mn($, c);
              var oe = $.clientX,
                N = $.clientY,
                V = oe - P.x,
                W = N - P.y,
                j = P.isDragging;
              (P.x = oe),
                (P.y = N),
                (j ||
                  ((V || W) &&
                    (Math.abs(P.startX - oe) >= n ||
                      Math.abs(P.startY - N) >= n))) &&
                  ((_t = j ? 2 : 1), j || (P.isDragging = !0), Ui(V, W));
            }
          },
          pi = (P.onPress = function (G) {
            Ae(G, 1) ||
              (G && G.button) ||
              ((P.axis = Tt = null),
              ut.pause(),
              (P.isPressed = !0),
              (G = mn(G)),
              (Ft = _r = 0),
              (P.startX = P.x = G.clientX),
              (P.startY = P.y = G.clientY),
              P._vx.reset(),
              P._vy.reset(),
              rt(I ? a : be, Nt[1], Wr, qr, !0),
              (P.deltaX = P.deltaY = 0),
              v && v(P));
          }),
          ee = (P.onRelease = function (G) {
            if (!Ae(G, 1)) {
              it(I ? a : be, Nt[1], Wr, !0);
              var $ = !isNaN(P.y - P.startY),
                oe = P.isDragging,
                N =
                  oe &&
                  (Math.abs(P.x - P.startX) > 3 ||
                    Math.abs(P.y - P.startY) > 3),
                V = mn(G);
              !N &&
                $ &&
                (P._vx.reset(),
                P._vy.reset(),
                c &&
                  ne &&
                  He.delayedCall(0.08, function () {
                    if (gn() - Dr > 300 && !G.defaultPrevented) {
                      if (G.target.click) G.target.click();
                      else if (be.createEvent) {
                        var W = be.createEvent("MouseEvents");
                        W.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Ct,
                          1,
                          V.screenX,
                          V.screenY,
                          V.clientX,
                          V.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          G.target.dispatchEvent(W);
                      }
                    }
                  })),
                (P.isDragging = P.isGesturing = P.isPressed = !1),
                p && oe && !I && ut.restart(!0),
                _t && mr(),
                D && oe && D(P),
                m && m(P, N);
            }
          }),
          _i = function ($) {
            return (
              $.touches &&
              $.touches.length > 1 &&
              (P.isGesturing = !0) &&
              F($, P.isDragging)
            );
          },
          qt = function () {
            return (P.isGesturing = !1) || w(P);
          },
          Ht = function ($) {
            if (!Ae($)) {
              var oe = Ce(),
                N = gr();
              ji((oe - Hr) * U, (N - di) * U, 1),
                (Hr = oe),
                (di = N),
                p && ut.restart(!0);
            }
          },
          Yt = function ($) {
            if (!Ae($)) {
              ($ = mn($, c)), X && (xe = !0);
              var oe =
                ($.deltaMode === 1
                  ? u
                  : $.deltaMode === 2
                  ? Ct.innerHeight
                  : 1) * g;
              ji($.deltaX * oe, $.deltaY * oe, 0), p && !I && ut.restart(!0);
            }
          },
          gi = function ($) {
            if (!Ae($)) {
              var oe = $.clientX,
                N = $.clientY,
                V = oe - P.x,
                W = N - P.y;
              (P.x = oe),
                (P.y = N),
                (se = !0),
                p && ut.restart(!0),
                (V || W) && Ui(V, W);
            }
          },
          Gi = function ($) {
            (P.event = $), k(P);
          },
          yr = function ($) {
            (P.event = $), L(P);
          },
          Wn = function ($) {
            return Ae($) || (mn($, c) && J(P));
          };
        (ut = P._dc = He.delayedCall(f || 0.25, Ys).pause()),
          (P.deltaX = P.deltaY = 0),
          (P._vx = Io(0, 50, !0)),
          (P._vy = Io(0, 50, !0)),
          (P.scrollX = Ce),
          (P.scrollY = gr),
          (P.isDragging = P.isGesturing = P.isPressed = !1),
          Gu(this),
          (P.enable = function (G) {
            return (
              P.isEnabled ||
                (rt(Yr ? be : a, "scroll", zo),
                o.indexOf("scroll") >= 0 &&
                  rt(Yr ? be : a, "scroll", Ht, qr, Pe),
                o.indexOf("wheel") >= 0 && rt(a, "wheel", Yt, qr, Pe),
                ((o.indexOf("touch") >= 0 && ju) ||
                  o.indexOf("pointer") >= 0) &&
                  (rt(a, Nt[0], pi, qr, Pe),
                  rt(be, Nt[2], ee),
                  rt(be, Nt[3], ee),
                  ne && rt(a, "click", Yn, !0, !0),
                  J && rt(a, "click", Wn),
                  F && rt(be, "gesturestart", _i),
                  w && rt(be, "gestureend", qt),
                  k && rt(a, ri + "enter", Gi),
                  L && rt(a, ri + "leave", yr),
                  O && rt(a, ri + "move", gi)),
                (P.isEnabled = !0),
                (P.isDragging = P.isGesturing = P.isPressed = se = _t = !1),
                P._vx.reset(),
                P._vy.reset(),
                (Hr = Ce()),
                (di = gr()),
                G && G.type && pi(G),
                ie && ie(P)),
              P
            );
          }),
          (P.disable = function () {
            P.isEnabled &&
              (Mi.filter(function (G) {
                return G !== P && Dn(G.target);
              }).length || it(Yr ? be : a, "scroll", zo),
              P.isPressed &&
                (P._vx.reset(), P._vy.reset(), it(I ? a : be, Nt[1], Wr, !0)),
              it(Yr ? be : a, "scroll", Ht, Pe),
              it(a, "wheel", Yt, Pe),
              it(a, Nt[0], pi, Pe),
              it(be, Nt[2], ee),
              it(be, Nt[3], ee),
              it(a, "click", Yn, !0),
              it(a, "click", Wn),
              it(be, "gesturestart", _i),
              it(be, "gestureend", qt),
              it(a, ri + "enter", Gi),
              it(a, ri + "leave", yr),
              it(a, ri + "move", gi),
              (P.isEnabled = P.isPressed = P.isDragging = !1),
              he && he(P));
          }),
          (P.kill = P.revert =
            function () {
              P.disable();
              var G = Mi.indexOf(P);
              G >= 0 && Mi.splice(G, 1), cr === P && (cr = 0);
            }),
          Mi.push(P),
          I && Dn(a) && (cr = P),
          P.enable(d);
      }),
      ph(s, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      s
    );
  })();
  (we.version = "3.12.7"),
    (we.create = function (s) {
      return new we(s);
    }),
    (we.register = el),
    (we.getAll = function () {
      return Mi.slice();
    }),
    (we.getById = function (s) {
      return Mi.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    Qu() && He.registerPlugin(we);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var z,
    Ri,
    Z,
    ce,
    bt,
    ae,
    qo,
    ds,
    yn,
    vn,
    wn,
    ps,
    Ue,
    _s,
    Ho,
    st,
    tl,
    rl,
    Li,
    il,
    Yo,
    nl,
    ot,
    Wo,
    sl,
    ol,
    Lr,
    Xo,
    $o,
    Bi,
    Vo,
    gs,
    jo,
    Uo,
    Ds = 1,
    Ge = Date.now,
    Go = Ge(),
    Ot = 0,
    xn = 0,
    al = function (e, t, r) {
      var i = Et(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
    },
    ul = function (e, t) {
      return t && (!Et(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    gh = function s() {
      return xn && requestAnimationFrame(s);
    },
    ll = function () {
      return (_s = 1);
    },
    cl = function () {
      return (_s = 0);
    },
    Jt = function (e) {
      return e;
    },
    Cn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    fl = function () {
      return typeof window < "u";
    },
    hl = function () {
      return z || (fl() && (z = window.gsap) && z.registerPlugin && z);
    },
    ii = function (e) {
      return !!~qo.indexOf(e);
    },
    dl = function (e) {
      return (
        (e === "Height" ? Vo : Z["inner" + e]) ||
        bt["client" + e] ||
        ae["client" + e]
      );
    },
    pl = function (e) {
      return (
        Mr(e, "getBoundingClientRect") ||
        (ii(e)
          ? function () {
              return (As.width = Z.innerWidth), (As.height = Vo), As;
            }
          : function () {
              return fr(e);
            })
      );
    },
    Dh = function (e, t, r) {
      var i = r.d,
        n = r.d2,
        o = r.a;
      return (o = Mr(e, "getBoundingClientRect"))
        ? function () {
            return o()[i];
          }
        : function () {
            return (t ? dl(n) : e["client" + n]) || 0;
          };
    },
    mh = function (e, t) {
      return !t || ~Zt.indexOf(e)
        ? pl(e)
        : function () {
            return As;
          };
    },
    er = function (e, t) {
      var r = t.s,
        i = t.d2,
        n = t.d,
        o = t.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (o = Mr(e, r))
          ? o() - pl(e)()[n]
          : ii(e)
          ? (bt[r] || ae[r]) - dl(i)
          : e[r] - e["offset" + i]
      );
    },
    ms = function (e, t) {
      for (var r = 0; r < Li.length; r += 3)
        (!t || ~t.indexOf(Li[r + 1])) && e(Li[r], Li[r + 1], Li[r + 2]);
    },
    Et = function (e) {
      return typeof e == "string";
    },
    Qe = function (e) {
      return typeof e == "function";
    },
    bn = function (e) {
      return typeof e == "number";
    },
    ni = function (e) {
      return typeof e == "object";
    },
    En = function (e, t, r) {
      return e && e.progress(t ? 0 : 1) && r && e.pause();
    },
    Qo = function (e, t) {
      if (e.enabled) {
        var r = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    },
    Ni = Math.abs,
    _l = "left",
    gl = "top",
    Ko = "right",
    Zo = "bottom",
    si = "width",
    oi = "height",
    Sn = "Right",
    Tn = "Left",
    Fn = "Top",
    Pn = "Bottom",
    Fe = "padding",
    Mt = "margin",
    zi = "Width",
    Jo = "Height",
    Oe = "px",
    Rt = function (e) {
      return Z.getComputedStyle(e);
    },
    yh = function (e) {
      var t = Rt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Dl = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    fr = function (e, t) {
      var r =
          t &&
          Rt(e)[Ho] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          z
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        i = e.getBoundingClientRect();
      return r && r.progress(0).kill(), i;
    },
    ys = function (e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    ml = function (e) {
      var t = [],
        r = e.labels,
        i = e.duration(),
        n;
      for (n in r) t.push(r[n] / i);
      return t;
    },
    vh = function (e) {
      return function (t) {
        return z.utils.snap(ml(e), t);
      };
    },
    ea = function (e) {
      var t = z.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (i, n) {
            return i - n;
          });
      return r
        ? function (i, n, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!n) return t(i);
            if (n > 0) {
              for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
              return r[a - 1];
            } else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a];
            return r[0];
          }
        : function (i, n, o) {
            o === void 0 && (o = 0.001);
            var a = t(i);
            return !n || Math.abs(a - i) < o || a - i < 0 == n < 0
              ? a
              : t(n < 0 ? i - e : i + e);
          };
    },
    wh = function (e) {
      return function (t, r) {
        return ea(ml(e))(t, r.direction);
      };
    },
    vs = function (e, t, r, i) {
      return r.split(",").forEach(function (n) {
        return e(t, n, i);
      });
    },
    Le = function (e, t, r, i, n) {
      return e.addEventListener(t, r, { passive: !i, capture: !!n });
    },
    Be = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    ws = function (e, t, r) {
      (r = r && r.wheelHandler), r && (e(t, "wheel", r), e(t, "touchmove", r));
    },
    yl = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    xs = { toggleActions: "play", anticipatePin: 0 },
    Cs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    bs = function (e, t) {
      if (Et(e)) {
        var r = e.indexOf("="),
          i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
          (e =
            i +
            (e in Cs
              ? Cs[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Es = function (e, t, r, i, n, o, a, u) {
      var l = n.startColor,
        c = n.endColor,
        p = n.fontSize,
        f = n.indent,
        h = n.fontWeight,
        g = ce.createElement("div"),
        d = ii(r) || Mr(r, "pinType") === "fixed",
        _ = e.indexOf("scroller") !== -1,
        D = d ? ae : r,
        y = e.indexOf("start") !== -1,
        v = y ? l : c,
        m =
          "border-color:" +
          v +
          ";font-size:" +
          p +
          ";color:" +
          v +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (m += "position:" + ((_ || u) && d ? "fixed;" : "absolute;")),
        (_ || u || !d) &&
          (m += (i === ke ? Ko : Zo) + ":" + (o + parseFloat(f)) + "px;"),
        a &&
          (m +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (g._isStart = y),
        g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (g.style.cssText = m),
        (g.innerText = t || t === 0 ? e + "-" + t : e),
        D.children[0] ? D.insertBefore(g, D.children[0]) : D.appendChild(g),
        (g._offset = g["offset" + i.op.d2]),
        Ss(g, 0, i, y),
        g
      );
    },
    Ss = function (e, t, r, i) {
      var n = { display: "block" },
        o = r[i ? "os2" : "p2"],
        a = r[i ? "p2" : "os2"];
      (e._isFlipped = i),
        (n[r.a + "Percent"] = i ? -100 : 0),
        (n[r.a] = i ? "1px" : 0),
        (n["border" + o + zi] = 1),
        (n["border" + a + zi] = 0),
        (n[r.p] = t + "px"),
        z.set(e, n);
    },
    Q = [],
    ta = {},
    An,
    vl = function () {
      return Ge() - Ot > 34 && (An || (An = requestAnimationFrame(hr)));
    },
    Ii = function () {
      (!ot || !ot.isPressed || ot.startX > ae.clientWidth) &&
        (K.cache++,
        ot ? An || (An = requestAnimationFrame(hr)) : hr(),
        Ot || ui("scrollStart"),
        (Ot = Ge()));
    },
    ra = function () {
      (ol = Z.innerWidth), (sl = Z.innerHeight);
    },
    kn = function (e) {
      K.cache++,
        (e === !0 ||
          (!Ue &&
            !nl &&
            !ce.fullscreenElement &&
            !ce.webkitFullscreenElement &&
            (!Wo ||
              ol !== Z.innerWidth ||
              Math.abs(Z.innerHeight - sl) > Z.innerHeight * 0.25))) &&
          ds.restart(!0);
    },
    ai = {},
    xh = [],
    wl = function s() {
      return Be(Y, "scrollEnd", s) || ci(!0);
    },
    ui = function (e) {
      return (
        (ai[e] &&
          ai[e].map(function (t) {
            return t();
          })) ||
        xh
      );
    },
    St = [],
    xl = function (e) {
      for (var t = 0; t < St.length; t += 5)
        (!e || (St[t + 4] && St[t + 4].query === e)) &&
          ((St[t].style.cssText = St[t + 1]),
          St[t].getBBox && St[t].setAttribute("transform", St[t + 2] || ""),
          (St[t + 3].uncache = 1));
    },
    ia = function (e, t) {
      var r;
      for (st = 0; st < Q.length; st++)
        (r = Q[st]),
          r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
      (gs = !0), t && xl(t), t || ui("revert");
    },
    Cl = function (e, t) {
      K.cache++,
        (t || !at) &&
          K.forEach(function (r) {
            return Qe(r) && r.cacheID++ && (r.rec = 0);
          }),
        Et(e) && (Z.history.scrollRestoration = $o = e);
    },
    at,
    li = 0,
    bl,
    Ch = function () {
      if (bl !== li) {
        var e = (bl = li);
        requestAnimationFrame(function () {
          return e === li && ci(!0);
        });
      }
    },
    El = function () {
      ae.appendChild(Bi),
        (Vo = (!ot && Bi.offsetHeight) || Z.innerHeight),
        ae.removeChild(Bi);
    },
    Sl = function (e) {
      return yn(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    ci = function (e, t) {
      if (
        ((bt = ce.documentElement),
        (ae = ce.body),
        (qo = [Z, ce, bt, ae]),
        Ot && !e && !gs)
      ) {
        Le(Y, "scrollEnd", wl);
        return;
      }
      El(),
        (at = Y.isRefreshing = !0),
        K.forEach(function (i) {
          return Qe(i) && ++i.cacheID && (i.rec = i());
        });
      var r = ui("refreshInit");
      il && Y.sort(),
        t || ia(),
        K.forEach(function (i) {
          Qe(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        Q.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (gs = !1),
        Q.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = i.pin[n];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - o), i.refresh();
          }
        }),
        (jo = 1),
        Sl(!0),
        Q.forEach(function (i) {
          var n = er(i.scroller, i._dir),
            o = i.vars.end === "max" || (i._endClamp && i.end > n),
            a = i._startClamp && i.start >= n;
          (o || a) &&
            i.setPositions(
              a ? n - 1 : i.start,
              o ? Math.max(a ? n : i.start + 1, n) : i.end,
              !0
            );
        }),
        Sl(!1),
        (jo = 0),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        K.forEach(function (i) {
          Qe(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        Cl($o, 1),
        ds.pause(),
        li++,
        (at = 2),
        hr(2),
        Q.forEach(function (i) {
          return Qe(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (at = Y.isRefreshing = !1),
        ui("refresh");
    },
    na = 0,
    Ts = 1,
    On,
    hr = function (e) {
      if (e === 2 || (!at && !gs)) {
        (Y.isUpdating = !0), On && On.update(0);
        var t = Q.length,
          r = Ge(),
          i = r - Go >= 50,
          n = t && Q[0].scroll();
        if (
          ((Ts = na > n ? -1 : 1),
          at || (na = n),
          i &&
            (Ot && !_s && r - Ot > 200 && ((Ot = 0), ui("scrollEnd")),
            (wn = Go),
            (Go = r)),
          Ts < 0)
        ) {
          for (st = t; st-- > 0; ) Q[st] && Q[st].update(0, i);
          Ts = 1;
        } else for (st = 0; st < t; st++) Q[st] && Q[st].update(0, i);
        Y.isUpdating = !1;
      }
      An = 0;
    },
    sa = [
      _l,
      gl,
      Zo,
      Ko,
      Mt + Pn,
      Mt + Sn,
      Mt + Fn,
      Mt + Tn,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Fs = sa.concat([
      si,
      oi,
      "boxSizing",
      "max" + zi,
      "max" + Jo,
      "position",
      Mt,
      Fe,
      Fe + Fn,
      Fe + Sn,
      Fe + Pn,
      Fe + Tn,
    ]),
    bh = function (e, t, r) {
      qi(r);
      var i = e._gsap;
      if (i.spacerIsNative) qi(i.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    oa = function (e, t, r, i) {
      if (!e._gsap.swappedIn) {
        for (var n = sa.length, o = t.style, a = e.style, u; n--; )
          (u = sa[n]), (o[u] = r[u]);
        (o.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (o.display = "inline-block"),
          (a[Zo] = a[Ko] = "auto"),
          (o.flexBasis = r.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[si] = ys(e, nt) + Oe),
          (o[oi] = ys(e, ke) + Oe),
          (o[Fe] = a[Mt] = a[gl] = a[_l] = "0"),
          qi(i),
          (a[si] = a["max" + zi] = r[si]),
          (a[oi] = a["max" + Jo] = r[oi]),
          (a[Fe] = r[Fe]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Eh = /([A-Z])/g,
    qi = function (e) {
      if (e) {
        var t = e.t.style,
          r = e.length,
          i = 0,
          n,
          o;
        for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; i < r; i += 2)
          (o = e[i + 1]),
            (n = e[i]),
            o
              ? (t[n] = o)
              : t[n] && t.removeProperty(n.replace(Eh, "-$1").toLowerCase());
      }
    },
    Ps = function (e) {
      for (var t = Fs.length, r = e.style, i = [], n = 0; n < t; n++)
        i.push(Fs[n], r[Fs[n]]);
      return (i.t = e), i;
    },
    Sh = function (e, t, r) {
      for (var i = [], n = e.length, o = r ? 8 : 0, a; o < n; o += 2)
        (a = e[o]), i.push(a, a in t ? t[a] : e[o + 1]);
      return (i.t = e.t), i;
    },
    As = { left: 0, top: 0 },
    Tl = function (e, t, r, i, n, o, a, u, l, c, p, f, h, g) {
      Qe(e) && (e = e(u)),
        Et(e) &&
          e.substr(0, 3) === "max" &&
          (e = f + (e.charAt(4) === "=" ? bs("0" + e.substr(3), r) : 0));
      var d = h ? h.time() : 0,
        _,
        D,
        y;
      if ((h && h.seek(0), isNaN(e) || (e = +e), bn(e)))
        h &&
          (e = z.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            f,
            e
          )),
          a && Ss(a, r, i, !0);
      else {
        Qe(t) && (t = t(u));
        var v = (e || "0").split(" "),
          m,
          x,
          E,
          C;
        (y = pt(t, u) || ae),
          (m = fr(y) || {}),
          (!m || (!m.left && !m.top)) &&
            Rt(y).display === "none" &&
            ((C = y.style.display),
            (y.style.display = "block"),
            (m = fr(y)),
            C ? (y.style.display = C) : y.style.removeProperty("display")),
          (x = bs(v[0], m[i.d])),
          (E = bs(v[1] || "0", r)),
          (e = m[i.p] - l[i.p] - c + x + n - E),
          a && Ss(a, E, i, r - E < 20 || (a._isStart && E > 20)),
          (r -= r - E);
      }
      if ((g && ((u[g] = e || -0.001), e < 0 && (e = 0)), o)) {
        var T = e + r,
          S = o._isStart;
        (_ = "scroll" + i.d2),
          Ss(
            o,
            T,
            i,
            (S && T > 20) ||
              (!S && (p ? Math.max(ae[_], bt[_]) : o.parentNode[_]) <= T + 1)
          ),
          p &&
            ((l = fr(a)),
            p && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Oe));
      }
      return (
        h &&
          y &&
          ((_ = fr(y)),
          h.seek(f),
          (D = fr(y)),
          (h._caScrollDist = _[i.p] - D[i.p]),
          (e = (e / h._caScrollDist) * f)),
        h && h.seek(d),
        h ? e : Math.round(e)
      );
    },
    Th = /(webkit|moz|length|cssText|inset)/i,
    Fl = function (e, t, r, i) {
      if (e.parentNode !== t) {
        var n = e.style,
          o,
          a;
        if (t === ae) {
          (e._stOrig = n.cssText), (a = Rt(e));
          for (o in a)
            !+o &&
              !Th.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = r), (n.left = i);
        } else n.cssText = e._stOrig;
        (z.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Pl = function (e, t, r) {
      var i = t,
        n = i;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== i &&
            a !== n &&
            Math.abs(a - i) > 3 &&
            Math.abs(a - n) > 3 &&
            ((o = a), r && r()),
          (n = i),
          (i = Math.round(o)),
          i
        );
      };
    },
    ks = function (e, t, r) {
      var i = {};
      (i[t.p] = "+=" + r), z.set(e, i);
    },
    Al = function (e, t) {
      var r = Rr(e, t),
        i = "_scroll" + t.p2,
        n = function o(a, u, l, c, p) {
          var f = o.tween,
            h = u.onComplete,
            g = {};
          l = l || r();
          var d = Pl(r, l, function () {
            f.kill(), (o.tween = 0);
          });
          return (
            (p = (c && p) || 0),
            (c = c || a - l),
            f && f.kill(),
            (u[i] = a),
            (u.inherit = !1),
            (u.modifiers = g),
            (g[i] = function () {
              return d(l + c * f.ratio + p * f.ratio * f.ratio);
            }),
            (u.onUpdate = function () {
              K.cache++, o.tween && hr();
            }),
            (u.onComplete = function () {
              (o.tween = 0), h && h.call(f);
            }),
            (f = o.tween = z.to(e, u)),
            f
          );
        };
      return (
        (e[i] = r),
        (r.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        Le(e, "wheel", r.wheelHandler),
        Y.isTouch && Le(e, "touchmove", r.wheelHandler),
        n
      );
    },
    Y = (function () {
      function s(t, r) {
        Ri ||
          s.register(z) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Xo(this),
          this.init(t, r);
      }
      var e = s.prototype;
      return (
        (e.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !xn)
          ) {
            this.update = this.refresh = this.kill = Jt;
            return;
          }
          r = Dl(Et(r) || bn(r) || r.nodeType ? { trigger: r } : r, xs);
          var n = r,
            o = n.onUpdate,
            a = n.toggleClass,
            u = n.id,
            l = n.onToggle,
            c = n.onRefresh,
            p = n.scrub,
            f = n.trigger,
            h = n.pin,
            g = n.pinSpacing,
            d = n.invalidateOnRefresh,
            _ = n.anticipatePin,
            D = n.onScrubComplete,
            y = n.onSnapComplete,
            v = n.once,
            m = n.snap,
            x = n.pinReparent,
            E = n.pinSpacer,
            C = n.containerAnimation,
            T = n.fastScrollEnd,
            S = n.preventOverlaps,
            b =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? nt
                : ke,
            M = !p && p !== 0,
            A = pt(r.scroller || Z),
            B = z.core.getCache(A),
            k = ii(A),
            L =
              ("pinType" in r
                ? r.pinType
                : Mr(A, "pinType") || (k && "fixed")) === "fixed",
            O = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            R = M && r.toggleActions.split(" "),
            I = "markers" in r ? r.markers : xs.markers,
            F = k ? 0 : parseFloat(Rt(A)["border" + b.p2 + zi]) || 0,
            w = this,
            X =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(w);
              },
            ie = Dh(A, k, b),
            he = mh(A, k),
            J = 0,
            U = 0,
            Pe = 0,
            ne = Rr(A, b),
            Ye,
            Ne,
            me,
            ut,
            _t,
            se,
            xe,
            gt,
            Tt,
            P,
            Ft,
            _r,
            qr,
            Ce,
            gr,
            Hr,
            di,
            ze,
            Yr,
            be,
            It,
            Lt,
            Dr,
            Yn,
            Ae,
            Ys,
            mr,
            ji,
            Ui,
            Wr,
            pi,
            ee,
            _i,
            qt,
            Ht,
            Yt,
            gi,
            Gi,
            yr;
          if (
            ((w._startClamp = w._endClamp = !1),
            (w._dir = b),
            (_ *= 45),
            (w.scroller = A),
            (w.scroll = C ? C.time.bind(C) : ne),
            (ut = ne()),
            (w.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((il = 1), r.refreshPriority === -9999 && (On = w)),
            (B.tweenScroll = B.tweenScroll || {
              top: Al(A, ke),
              left: Al(A, nt),
            }),
            (w.tweenTo = Ye = B.tweenScroll[b.p]),
            (w.scrubDuration = function (N) {
              (_i = bn(N) && N),
                _i
                  ? ee
                    ? ee.duration(N)
                    : (ee = z.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: _i,
                        paused: !0,
                        onComplete: function () {
                          return D && D(w);
                        },
                      }))
                  : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !w.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  r.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (w.animation = i.pause()),
              (i.scrollTrigger = w),
              w.scrubDuration(p),
              (Wr = 0),
              u || (u = i.vars.id)),
            m &&
              ((!ni(m) || m.push) && (m = { snapTo: m }),
              "scrollBehavior" in ae.style &&
                z.set(k ? [ae, bt] : A, { scrollBehavior: "auto" }),
              K.forEach(function (N) {
                return (
                  Qe(N) &&
                  N.target === (k ? ce.scrollingElement || bt : A) &&
                  (N.smooth = !1)
                );
              }),
              (me = Qe(m.snapTo)
                ? m.snapTo
                : m.snapTo === "labels"
                ? vh(i)
                : m.snapTo === "labelsDirectional"
                ? wh(i)
                : m.directional !== !1
                ? function (N, V) {
                    return ea(m.snapTo)(N, Ge() - U < 500 ? 0 : V.direction);
                  }
                : z.utils.snap(m.snapTo)),
              (qt = m.duration || { min: 0.1, max: 2 }),
              (qt = ni(qt) ? vn(qt.min, qt.max) : vn(qt, qt)),
              (Ht = z
                .delayedCall(m.delay || _i / 2 || 0.1, function () {
                  var N = ne(),
                    V = Ge() - U < 500,
                    W = Ye.tween;
                  if (
                    (V || Math.abs(w.getVelocity()) < 10) &&
                    !W &&
                    !_s &&
                    J !== N
                  ) {
                    var j = (N - se) / Ce,
                      Ie = i && !M ? i.totalProgress() : j,
                      re = V ? 0 : ((Ie - pi) / (Ge() - wn)) * 1e3 || 0,
                      Ee = z.utils.clamp(-j, 1 - j, (Ni(re / 2) * re) / 0.185),
                      Ke = j + (m.inertia === !1 ? 0 : Ee),
                      ye,
                      de,
                      le = m,
                      Wt = le.onStart,
                      ge = le.onInterrupt,
                      Pt = le.onComplete;
                    if (
                      ((ye = me(Ke, w)),
                      bn(ye) || (ye = Ke),
                      (de = Math.max(0, Math.round(se + ye * Ce))),
                      N <= xe && N >= se && de !== N)
                    ) {
                      if (W && !W._initted && W.data <= Ni(de - N)) return;
                      m.inertia === !1 && (Ee = ye - j),
                        Ye(
                          de,
                          {
                            duration: qt(
                              Ni(
                                (Math.max(Ni(Ke - Ie), Ni(ye - Ie)) * 0.185) /
                                  re /
                                  0.05 || 0
                              )
                            ),
                            ease: m.ease || "power3",
                            data: Ni(de - N),
                            onInterrupt: function () {
                              return Ht.restart(!0) && ge && ge(w);
                            },
                            onComplete: function () {
                              w.update(),
                                (J = ne()),
                                i &&
                                  !M &&
                                  (ee
                                    ? ee.resetTo(
                                        "totalProgress",
                                        ye,
                                        i._tTime / i._tDur
                                      )
                                    : i.progress(ye)),
                                (Wr = pi =
                                  i && !M ? i.totalProgress() : w.progress),
                                y && y(w),
                                Pt && Pt(w);
                            },
                          },
                          N,
                          Ee * Ce,
                          de - N - Ee * Ce
                        ),
                        Wt && Wt(w, Ye.tween);
                    }
                  } else w.isActive && J !== N && Ht.restart(!0);
                })
                .pause())),
            u && (ta[u] = w),
            (f = w.trigger = pt(f || (h !== !0 && h))),
            (yr = f && f._gsap && f._gsap.stRevert),
            yr && (yr = yr(w)),
            (h = h === !0 ? f : pt(h)),
            Et(a) && (a = { targets: f, className: a }),
            h &&
              (g === !1 ||
                g === Mt ||
                (g =
                  !g &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Rt(h.parentNode).display === "flex"
                    ? !1
                    : Fe),
              (w.pin = h),
              (Ne = z.core.getCache(h)),
              Ne.spacer
                ? (gr = Ne.pinState)
                : (E &&
                    ((E = pt(E)),
                    E && !E.nodeType && (E = E.current || E.nativeElement),
                    (Ne.spacerIsNative = !!E),
                    E && (Ne.spacerState = Ps(E))),
                  (Ne.spacer = ze = E || ce.createElement("div")),
                  ze.classList.add("pin-spacer"),
                  u && ze.classList.add("pin-spacer-" + u),
                  (Ne.pinState = gr = Ps(h))),
              r.force3D !== !1 && z.set(h, { force3D: !0 }),
              (w.spacer = ze = Ne.spacer),
              (Ui = Rt(h)),
              (Yn = Ui[g + b.os2]),
              (be = z.getProperty(h)),
              (It = z.quickSetter(h, b.a, Oe)),
              oa(h, ze, Ui),
              (di = Ps(h))),
            I)
          ) {
            (_r = ni(I) ? Dl(I, yl) : yl),
              (P = Es("scroller-start", u, A, b, _r, 0)),
              (Ft = Es("scroller-end", u, A, b, _r, 0, P)),
              (Yr = P["offset" + b.op.d2]);
            var Wn = pt(Mr(A, "content") || A);
            (gt = this.markerStart = Es("start", u, Wn, b, _r, Yr, 0, C)),
              (Tt = this.markerEnd = Es("end", u, Wn, b, _r, Yr, 0, C)),
              C && (Gi = z.quickSetter([gt, Tt], b.a, Oe)),
              !L &&
                !(Zt.length && Mr(A, "fixedMarkers") === !0) &&
                (yh(k ? ae : A),
                z.set([P, Ft], { force3D: !0 }),
                (Ys = z.quickSetter(P, b.a, Oe)),
                (ji = z.quickSetter(Ft, b.a, Oe)));
          }
          if (C) {
            var G = C.vars.onUpdate,
              $ = C.vars.onUpdateParams;
            C.eventCallback("onUpdate", function () {
              w.update(0, 0, 1), G && G.apply(C, $ || []);
            });
          }
          if (
            ((w.previous = function () {
              return Q[Q.indexOf(w) - 1];
            }),
            (w.next = function () {
              return Q[Q.indexOf(w) + 1];
            }),
            (w.revert = function (N, V) {
              if (!V) return w.kill(!0);
              var W = N !== !1 || !w.enabled,
                j = Ue;
              W !== w.isReverted &&
                (W &&
                  ((Yt = Math.max(ne(), w.scroll.rec || 0)),
                  (Pe = w.progress),
                  (gi = i && i.progress())),
                gt &&
                  [gt, Tt, P, Ft].forEach(function (Ie) {
                    return (Ie.style.display = W ? "none" : "block");
                  }),
                W && ((Ue = w), w.update(W)),
                h &&
                  (!x || !w.isActive) &&
                  (W ? bh(h, ze, gr) : oa(h, ze, Rt(h), Ae)),
                W || w.update(W),
                (Ue = j),
                (w.isReverted = W));
            }),
            (w.refresh = function (N, V, W, j) {
              if (!((Ue || !w.enabled) && !V)) {
                if (h && N && Ot) {
                  Le(s, "scrollEnd", wl);
                  return;
                }
                !at && X && X(w),
                  (Ue = w),
                  Ye.tween && !W && (Ye.tween.kill(), (Ye.tween = 0)),
                  ee && ee.pause(),
                  d && i && i.revert({ kill: !1 }).invalidate(),
                  w.isReverted || w.revert(!0, !0),
                  (w._subPinOffset = !1);
                var Ie = ie(),
                  re = he(),
                  Ee = C ? C.duration() : er(A, b),
                  Ke = Ce <= 0.01,
                  ye = 0,
                  de = j || 0,
                  le = ni(W) ? W.end : r.end,
                  Wt = r.endTrigger || f,
                  ge = ni(W)
                    ? W.start
                    : r.start ||
                      (r.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                  Pt = (w.pinnedContainer =
                    r.pinnedContainer && pt(r.pinnedContainer, w)),
                  ir = (f && Math.max(0, Q.indexOf(w))) || 0,
                  We = ir,
                  Xe,
                  Ze,
                  Di,
                  Ws,
                  Je,
                  Me,
                  nr,
                  Ca,
                  Sc,
                  Xn,
                  sr,
                  $n,
                  Xs;
                for (
                  I &&
                  ni(W) &&
                  (($n = z.getProperty(P, b.p)), (Xs = z.getProperty(Ft, b.p)));
                  We-- > 0;

                )
                  (Me = Q[We]),
                    Me.end || Me.refresh(0, 1) || (Ue = w),
                    (nr = Me.pin),
                    nr &&
                      (nr === f || nr === h || nr === Pt) &&
                      !Me.isReverted &&
                      (Xn || (Xn = []), Xn.unshift(Me), Me.revert(!0, !0)),
                    Me !== Q[We] && (ir--, We--);
                for (
                  Qe(ge) && (ge = ge(w)),
                    ge = al(ge, "start", w),
                    se =
                      Tl(
                        ge,
                        f,
                        Ie,
                        b,
                        ne(),
                        gt,
                        P,
                        w,
                        re,
                        F,
                        L,
                        Ee,
                        C,
                        w._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    Qe(le) && (le = le(w)),
                    Et(le) &&
                      !le.indexOf("+=") &&
                      (~le.indexOf(" ")
                        ? (le = (Et(ge) ? ge.split(" ")[0] : "") + le)
                        : ((ye = bs(le.substr(2), Ie)),
                          (le = Et(ge)
                            ? ge
                            : (C
                                ? z.utils.mapRange(
                                    0,
                                    C.duration(),
                                    C.scrollTrigger.start,
                                    C.scrollTrigger.end,
                                    se
                                  )
                                : se) + ye),
                          (Wt = f))),
                    le = al(le, "end", w),
                    xe =
                      Math.max(
                        se,
                        Tl(
                          le || (Wt ? "100% 0" : Ee),
                          Wt,
                          Ie,
                          b,
                          ne() + ye,
                          Tt,
                          Ft,
                          w,
                          re,
                          F,
                          L,
                          Ee,
                          C,
                          w._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    ye = 0,
                    We = ir;
                  We--;

                )
                  (Me = Q[We]),
                    (nr = Me.pin),
                    nr &&
                      Me.start - Me._pinPush <= se &&
                      !C &&
                      Me.end > 0 &&
                      ((Xe =
                        Me.end -
                        (w._startClamp ? Math.max(0, Me.start) : Me.start)),
                      ((nr === f && Me.start - Me._pinPush < se) ||
                        nr === Pt) &&
                        isNaN(ge) &&
                        (ye += Xe * (1 - Me.progress)),
                      nr === h && (de += Xe));
                if (
                  ((se += ye),
                  (xe += ye),
                  w._startClamp && (w._startClamp += ye),
                  w._endClamp &&
                    !at &&
                    ((w._endClamp = xe || -0.001),
                    (xe = Math.min(xe, er(A, b)))),
                  (Ce = xe - se || ((se -= 0.01) && 0.001)),
                  Ke &&
                    (Pe = z.utils.clamp(0, 1, z.utils.normalize(se, xe, Yt))),
                  (w._pinPush = de),
                  gt &&
                    ye &&
                    ((Xe = {}),
                    (Xe[b.a] = "+=" + ye),
                    Pt && (Xe[b.p] = "-=" + ne()),
                    z.set([gt, Tt], Xe)),
                  h && !(jo && w.end >= er(A, b)))
                )
                  (Xe = Rt(h)),
                    (Ws = b === ke),
                    (Di = ne()),
                    (Lt = parseFloat(be(b.a)) + de),
                    !Ee &&
                      xe > 1 &&
                      ((sr = (k ? ce.scrollingElement || bt : A).style),
                      (sr = {
                        style: sr,
                        value: sr["overflow" + b.a.toUpperCase()],
                      }),
                      k &&
                        Rt(ae)["overflow" + b.a.toUpperCase()] !== "scroll" &&
                        (sr.style["overflow" + b.a.toUpperCase()] = "scroll")),
                    oa(h, ze, Xe),
                    (di = Ps(h)),
                    (Ze = fr(h, !0)),
                    (Ca = L && Rr(A, Ws ? nt : ke)()),
                    g
                      ? ((Ae = [g + b.os2, Ce + de + Oe]),
                        (Ae.t = ze),
                        (We = g === Fe ? ys(h, b) + Ce + de : 0),
                        We &&
                          (Ae.push(b.d, We + Oe),
                          ze.style.flexBasis !== "auto" &&
                            (ze.style.flexBasis = We + Oe)),
                        qi(Ae),
                        Pt &&
                          Q.forEach(function (Vn) {
                            Vn.pin === Pt &&
                              Vn.vars.pinSpacing !== !1 &&
                              (Vn._subPinOffset = !0);
                          }),
                        L && ne(Yt))
                      : ((We = ys(h, b)),
                        We &&
                          ze.style.flexBasis !== "auto" &&
                          (ze.style.flexBasis = We + Oe)),
                    L &&
                      ((Je = {
                        top: Ze.top + (Ws ? Di - se : Ca) + Oe,
                        left: Ze.left + (Ws ? Ca : Di - se) + Oe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Je[si] = Je["max" + zi] = Math.ceil(Ze.width) + Oe),
                      (Je[oi] = Je["max" + Jo] = Math.ceil(Ze.height) + Oe),
                      (Je[Mt] =
                        Je[Mt + Fn] =
                        Je[Mt + Sn] =
                        Je[Mt + Pn] =
                        Je[Mt + Tn] =
                          "0"),
                      (Je[Fe] = Xe[Fe]),
                      (Je[Fe + Fn] = Xe[Fe + Fn]),
                      (Je[Fe + Sn] = Xe[Fe + Sn]),
                      (Je[Fe + Pn] = Xe[Fe + Pn]),
                      (Je[Fe + Tn] = Xe[Fe + Tn]),
                      (Hr = Sh(gr, Je, x)),
                      at && ne(0)),
                    i
                      ? ((Sc = i._initted),
                        Yo(1),
                        i.render(i.duration(), !0, !0),
                        (Dr = be(b.a) - Lt + Ce + de),
                        (mr = Math.abs(Ce - Dr) > 1),
                        L && mr && Hr.splice(Hr.length - 2, 2),
                        i.render(0, !0, !0),
                        Sc || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        Yo(0))
                      : (Dr = Ce),
                    sr &&
                      (sr.value
                        ? (sr.style["overflow" + b.a.toUpperCase()] = sr.value)
                        : sr.style.removeProperty("overflow-" + b.a));
                else if (f && ne() && !C)
                  for (Ze = f.parentNode; Ze && Ze !== ae; )
                    Ze._pinOffset &&
                      ((se -= Ze._pinOffset), (xe -= Ze._pinOffset)),
                      (Ze = Ze.parentNode);
                Xn &&
                  Xn.forEach(function (Vn) {
                    return Vn.revert(!1, !0);
                  }),
                  (w.start = se),
                  (w.end = xe),
                  (ut = _t = at ? Yt : ne()),
                  !C && !at && (ut < Yt && ne(Yt), (w.scroll.rec = 0)),
                  w.revert(!1, !0),
                  (U = Ge()),
                  Ht && ((J = -1), Ht.restart(!0)),
                  (Ue = 0),
                  i &&
                    M &&
                    (i._initted || gi) &&
                    i.progress() !== gi &&
                    i.progress(gi || 0, !0).render(i.time(), !0, !0),
                  (Ke || Pe !== w.progress || C || d || (i && !i._initted)) &&
                    (i &&
                      !M &&
                      i.totalProgress(
                        C && se < -0.001 && !Pe
                          ? z.utils.normalize(se, xe, 0)
                          : Pe,
                        !0
                      ),
                    (w.progress = Ke || (ut - se) / Ce === Pe ? 0 : Pe)),
                  h && g && (ze._pinOffset = Math.round(w.progress * Dr)),
                  ee && ee.invalidate(),
                  isNaN($n) ||
                    (($n -= z.getProperty(P, b.p)),
                    (Xs -= z.getProperty(Ft, b.p)),
                    ks(P, b, $n),
                    ks(gt, b, $n - (j || 0)),
                    ks(Ft, b, Xs),
                    ks(Tt, b, Xs - (j || 0))),
                  Ke && !at && w.update(),
                  c && !at && !qr && ((qr = !0), c(w), (qr = !1));
              }
            }),
            (w.getVelocity = function () {
              return ((ne() - _t) / (Ge() - wn)) * 1e3 || 0;
            }),
            (w.endAnimation = function () {
              En(w.callbackAnimation),
                i &&
                  (ee
                    ? ee.progress(1)
                    : i.paused()
                    ? M || En(i, w.direction < 0, 1)
                    : En(i, i.reversed()));
            }),
            (w.labelToScroll = function (N) {
              return (
                (i &&
                  i.labels &&
                  (se || w.refresh() || se) +
                    (i.labels[N] / i.duration()) * Ce) ||
                0
              );
            }),
            (w.getTrailing = function (N) {
              var V = Q.indexOf(w),
                W = w.direction > 0 ? Q.slice(0, V).reverse() : Q.slice(V + 1);
              return (
                Et(N)
                  ? W.filter(function (j) {
                      return j.vars.preventOverlaps === N;
                    })
                  : W
              ).filter(function (j) {
                return w.direction > 0 ? j.end <= se : j.start >= xe;
              });
            }),
            (w.update = function (N, V, W) {
              if (!(C && !W && !N)) {
                var j = at === !0 ? Yt : w.scroll(),
                  Ie = N ? 0 : (j - se) / Ce,
                  re = Ie < 0 ? 0 : Ie > 1 ? 1 : Ie || 0,
                  Ee = w.progress,
                  Ke,
                  ye,
                  de,
                  le,
                  Wt,
                  ge,
                  Pt,
                  ir;
                if (
                  (V &&
                    ((_t = ut),
                    (ut = C ? ne() : j),
                    m && ((pi = Wr), (Wr = i && !M ? i.totalProgress() : re))),
                  _ &&
                    h &&
                    !Ue &&
                    !Ds &&
                    Ot &&
                    (!re && se < j + ((j - _t) / (Ge() - wn)) * _
                      ? (re = 1e-4)
                      : re === 1 &&
                        xe > j + ((j - _t) / (Ge() - wn)) * _ &&
                        (re = 0.9999)),
                  re !== Ee && w.enabled)
                ) {
                  if (
                    ((Ke = w.isActive = !!re && re < 1),
                    (ye = !!Ee && Ee < 1),
                    (ge = Ke !== ye),
                    (Wt = ge || !!re != !!Ee),
                    (w.direction = re > Ee ? 1 : -1),
                    (w.progress = re),
                    Wt &&
                      !Ue &&
                      ((de = re && !Ee ? 0 : re === 1 ? 1 : Ee === 1 ? 2 : 3),
                      M &&
                        ((le =
                          (!ge && R[de + 1] !== "none" && R[de + 1]) || R[de]),
                        (ir =
                          i &&
                          (le === "complete" || le === "reset" || le in i)))),
                    S &&
                      (ge || ir) &&
                      (ir || p || !i) &&
                      (Qe(S)
                        ? S(w)
                        : w.getTrailing(S).forEach(function (Di) {
                            return Di.endAnimation();
                          })),
                    M ||
                      (ee && !Ue && !Ds
                        ? (ee._dp._time - ee._start !== ee._time &&
                            ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo(
                                "totalProgress",
                                re,
                                i._tTime / i._tDur
                              )
                            : ((ee.vars.totalProgress = re),
                              ee.invalidate().restart()))
                        : i && i.totalProgress(re, !!(Ue && (U || N)))),
                    h)
                  ) {
                    if ((N && g && (ze.style[g + b.os2] = Yn), !L))
                      It(Cn(Lt + Dr * re));
                    else if (Wt) {
                      if (
                        ((Pt =
                          !N && re > Ee && xe + 1 > j && j + 1 >= er(A, b)),
                        x)
                      )
                        if (!N && (Ke || Pt)) {
                          var We = fr(h, !0),
                            Xe = j - se;
                          Fl(
                            h,
                            ae,
                            We.top + (b === ke ? Xe : 0) + Oe,
                            We.left + (b === ke ? 0 : Xe) + Oe
                          );
                        } else Fl(h, ze);
                      qi(Ke || Pt ? Hr : di),
                        (mr && re < 1 && Ke) ||
                          It(Lt + (re === 1 && !Pt ? Dr : 0));
                    }
                  }
                  m && !Ye.tween && !Ue && !Ds && Ht.restart(!0),
                    a &&
                      (ge || (v && re && (re < 1 || !Uo))) &&
                      yn(a.targets).forEach(function (Di) {
                        return Di.classList[Ke || v ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !M && !N && o(w),
                    Wt && !Ue
                      ? (M &&
                          (ir &&
                            (le === "complete"
                              ? i.pause().totalProgress(1)
                              : le === "reset"
                              ? i.restart(!0).pause()
                              : le === "restart"
                              ? i.restart(!0)
                              : i[le]()),
                          o && o(w)),
                        (ge || !Uo) &&
                          (l && ge && Qo(w, l),
                          O[de] && Qo(w, O[de]),
                          v && (re === 1 ? w.kill(!1, 1) : (O[de] = 0)),
                          ge ||
                            ((de = re === 1 ? 1 : 3), O[de] && Qo(w, O[de]))),
                        T &&
                          !Ke &&
                          Math.abs(w.getVelocity()) > (bn(T) ? T : 2500) &&
                          (En(w.callbackAnimation),
                          ee
                            ? ee.progress(1)
                            : En(i, le === "reverse" ? 1 : !re, 1)))
                      : M && o && !Ue && o(w);
                }
                if (ji) {
                  var Ze = C ? (j / C.duration()) * (C._caScrollDist || 0) : j;
                  Ys(Ze + (P._isFlipped ? 1 : 0)), ji(Ze);
                }
                Gi && Gi((-j / C.duration()) * (C._caScrollDist || 0));
              }
            }),
            (w.enable = function (N, V) {
              w.enabled ||
                ((w.enabled = !0),
                Le(A, "resize", kn),
                k || Le(A, "scroll", Ii),
                X && Le(s, "refreshInit", X),
                N !== !1 && ((w.progress = Pe = 0), (ut = _t = J = ne())),
                V !== !1 && w.refresh());
            }),
            (w.getTween = function (N) {
              return N && Ye ? Ye.tween : ee;
            }),
            (w.setPositions = function (N, V, W, j) {
              if (C) {
                var Ie = C.scrollTrigger,
                  re = C.duration(),
                  Ee = Ie.end - Ie.start;
                (N = Ie.start + (Ee * N) / re), (V = Ie.start + (Ee * V) / re);
              }
              w.refresh(
                !1,
                !1,
                {
                  start: ul(N, W && !!w._startClamp),
                  end: ul(V, W && !!w._endClamp),
                },
                j
              ),
                w.update();
            }),
            (w.adjustPinSpacing = function (N) {
              if (Ae && N) {
                var V = Ae.indexOf(b.d) + 1;
                (Ae[V] = parseFloat(Ae[V]) + N + Oe),
                  (Ae[1] = parseFloat(Ae[1]) + N + Oe),
                  qi(Ae);
              }
            }),
            (w.disable = function (N, V) {
              if (
                w.enabled &&
                (N !== !1 && w.revert(!0, !0),
                (w.enabled = w.isActive = !1),
                V || (ee && ee.pause()),
                (Yt = 0),
                Ne && (Ne.uncache = 1),
                X && Be(s, "refreshInit", X),
                Ht &&
                  (Ht.pause(), Ye.tween && Ye.tween.kill() && (Ye.tween = 0)),
                !k)
              ) {
                for (var W = Q.length; W--; )
                  if (Q[W].scroller === A && Q[W] !== w) return;
                Be(A, "resize", kn), k || Be(A, "scroll", Ii);
              }
            }),
            (w.kill = function (N, V) {
              w.disable(N, V), ee && !V && ee.kill(), u && delete ta[u];
              var W = Q.indexOf(w);
              W >= 0 && Q.splice(W, 1),
                W === st && Ts > 0 && st--,
                (W = 0),
                Q.forEach(function (j) {
                  return j.scroller === w.scroller && (W = 1);
                }),
                W || at || (w.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  N && i.revert({ kill: !1 }),
                  V || i.kill()),
                gt &&
                  [gt, Tt, P, Ft].forEach(function (j) {
                    return j.parentNode && j.parentNode.removeChild(j);
                  }),
                On === w && (On = 0),
                h &&
                  (Ne && (Ne.uncache = 1),
                  (W = 0),
                  Q.forEach(function (j) {
                    return j.pin === h && W++;
                  }),
                  W || (Ne.spacer = 0)),
                r.onKill && r.onKill(w);
            }),
            Q.push(w),
            w.enable(!1, !1),
            yr && yr(w),
            i && i.add && !Ce)
          ) {
            var oe = w.update;
            (w.update = function () {
              (w.update = oe), K.cache++, se || xe || w.refresh();
            }),
              z.delayedCall(0.01, w.update),
              (Ce = 0.01),
              (se = xe = 0);
          } else w.refresh();
          h && Ch();
        }),
        (s.register = function (r) {
          return (
            Ri ||
              ((z = r || hl()),
              fl() && window.document && s.enable(),
              (Ri = xn)),
            Ri
          );
        }),
        (s.defaults = function (r) {
          if (r) for (var i in r) xs[i] = r[i];
          return xs;
        }),
        (s.disable = function (r, i) {
          (xn = 0),
            Q.forEach(function (o) {
              return o[i ? "kill" : "disable"](r);
            }),
            Be(Z, "wheel", Ii),
            Be(ce, "scroll", Ii),
            clearInterval(ps),
            Be(ce, "touchcancel", Jt),
            Be(ae, "touchstart", Jt),
            vs(Be, ce, "pointerdown,touchstart,mousedown", ll),
            vs(Be, ce, "pointerup,touchend,mouseup", cl),
            ds.kill(),
            ms(Be);
          for (var n = 0; n < K.length; n += 3)
            ws(Be, K[n], K[n + 1]), ws(Be, K[n], K[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((Z = window),
            (ce = document),
            (bt = ce.documentElement),
            (ae = ce.body),
            z &&
              ((yn = z.utils.toArray),
              (vn = z.utils.clamp),
              (Xo = z.core.context || Jt),
              (Yo = z.core.suppressOverwrites || Jt),
              ($o = Z.history.scrollRestoration || "auto"),
              (na = Z.pageYOffset || 0),
              z.core.globals("ScrollTrigger", s),
              ae))
          ) {
            (xn = 1),
              (Bi = document.createElement("div")),
              (Bi.style.height = "100vh"),
              (Bi.style.position = "absolute"),
              El(),
              gh(),
              we.register(z),
              (s.isTouch = we.isTouch),
              (Lr =
                we.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Wo = we.isTouch === 1),
              Le(Z, "wheel", Ii),
              (qo = [Z, ce, bt, ae]),
              z.matchMedia
                ? ((s.matchMedia = function (l) {
                    var c = z.matchMedia(),
                      p;
                    for (p in l) c.add(p, l[p]);
                    return c;
                  }),
                  z.addEventListener("matchMediaInit", function () {
                    return ia();
                  }),
                  z.addEventListener("matchMediaRevert", function () {
                    return xl();
                  }),
                  z.addEventListener("matchMedia", function () {
                    ci(0, 1), ui("matchMedia");
                  }),
                  z.matchMedia().add("(orientation: portrait)", function () {
                    return ra(), ra;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              ra(),
              Le(ce, "scroll", Ii);
            var r = ae.hasAttribute("style"),
              i = ae.style,
              n = i.borderTopStyle,
              o = z.core.Animation.prototype,
              a,
              u;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                a = fr(ae),
                ke.m = Math.round(a.top + ke.sc()) || 0,
                nt.m = Math.round(a.left + nt.sc()) || 0,
                n
                  ? (i.borderTopStyle = n)
                  : i.removeProperty("border-top-style"),
                r ||
                  (ae.setAttribute("style", ""), ae.removeAttribute("style")),
                ps = setInterval(vl, 250),
                z.delayedCall(0.5, function () {
                  return (Ds = 0);
                }),
                Le(ce, "touchcancel", Jt),
                Le(ae, "touchstart", Jt),
                vs(Le, ce, "pointerdown,touchstart,mousedown", ll),
                vs(Le, ce, "pointerup,touchend,mouseup", cl),
                Ho = z.utils.checkPrefix("transform"),
                Fs.push(Ho),
                Ri = Ge(),
                ds = z.delayedCall(0.2, ci).pause(),
                Li = [
                  ce,
                  "visibilitychange",
                  function () {
                    var l = Z.innerWidth,
                      c = Z.innerHeight;
                    ce.hidden
                      ? ((tl = l), (rl = c))
                      : (tl !== l || rl !== c) && kn();
                  },
                  ce,
                  "DOMContentLoaded",
                  ci,
                  Z,
                  "load",
                  ci,
                  Z,
                  "resize",
                  kn,
                ],
                ms(Le),
                Q.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                u = 0;
              u < K.length;
              u += 3
            )
              ws(Be, K[u], K[u + 1]), ws(Be, K[u], K[u + 2]);
          }
        }),
        (s.config = function (r) {
          "limitCallbacks" in r && (Uo = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(ps)) || ((ps = i) && setInterval(vl, i)),
            "ignoreMobileResize" in r &&
              (Wo = s.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (ms(Be) || ms(Le, r.autoRefreshEvents || "none"),
              (nl = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (r, i) {
          var n = pt(r),
            o = K.indexOf(n),
            a = ii(n);
          ~o && K.splice(o, a ? 6 : 2),
            i && (a ? Zt.unshift(Z, i, ae, i, bt, i) : Zt.unshift(n, i));
        }),
        (s.clearMatchMedia = function (r) {
          Q.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (r, i, n) {
          var o = (Et(r) ? pt(r) : r).getBoundingClientRect(),
            a = o[n ? si : oi] * i || 0;
          return n
            ? o.right - a > 0 && o.left + a < Z.innerWidth
            : o.bottom - a > 0 && o.top + a < Z.innerHeight;
        }),
        (s.positionInViewport = function (r, i, n) {
          Et(r) && (r = pt(r));
          var o = r.getBoundingClientRect(),
            a = o[n ? si : oi],
            u =
              i == null
                ? a / 2
                : i in Cs
                ? Cs[i] * a
                : ~i.indexOf("%")
                ? (parseFloat(i) * a) / 100
                : parseFloat(i) || 0;
          return n ? (o.left + u) / Z.innerWidth : (o.top + u) / Z.innerHeight;
        }),
        (s.killAll = function (r) {
          if (
            (Q.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            r !== !0)
          ) {
            var i = ai.killAll || [];
            (ai = {}),
              i.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (Y.version = "3.12.7"),
    (Y.saveStyles = function (s) {
      return s
        ? yn(s).forEach(function (e) {
            if (e && e.style) {
              var t = St.indexOf(e);
              t >= 0 && St.splice(t, 5),
                St.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  z.core.getCache(e),
                  Xo()
                );
            }
          })
        : St;
    }),
    (Y.revert = function (s, e) {
      return ia(!s, e);
    }),
    (Y.create = function (s, e) {
      return new Y(s, e);
    }),
    (Y.refresh = function (s) {
      return s ? kn(!0) : (Ri || Y.register()) && ci(!0);
    }),
    (Y.update = function (s) {
      return ++K.cache && hr(s === !0 ? 2 : 0);
    }),
    (Y.clearScrollMemory = Cl),
    (Y.maxScroll = function (s, e) {
      return er(s, e ? nt : ke);
    }),
    (Y.getScrollFunc = function (s, e) {
      return Rr(pt(s), e ? nt : ke);
    }),
    (Y.getById = function (s) {
      return ta[s];
    }),
    (Y.getAll = function () {
      return Q.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (Y.isScrolling = function () {
      return !!Ot;
    }),
    (Y.snapDirectional = ea),
    (Y.addEventListener = function (s, e) {
      var t = ai[s] || (ai[s] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Y.removeEventListener = function (s, e) {
      var t = ai[s],
        r = t && t.indexOf(e);
      r >= 0 && t.splice(r, 1);
    }),
    (Y.batch = function (s, e) {
      var t = [],
        r = {},
        i = e.interval || 0.016,
        n = e.batchMax || 1e9,
        o = function (l, c) {
          var p = [],
            f = [],
            h = z
              .delayedCall(i, function () {
                c(p, f), (p = []), (f = []);
              })
              .pause();
          return function (g) {
            p.length || h.restart(!0),
              p.push(g.trigger),
              f.push(g),
              n <= p.length && h.progress(1);
          };
        },
        a;
      for (a in e)
        r[a] =
          a.substr(0, 2) === "on" && Qe(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        Qe(n) &&
          ((n = n()),
          Le(Y, "refresh", function () {
            return (n = e.batchMax());
          })),
        yn(s).forEach(function (u) {
          var l = {};
          for (a in r) l[a] = r[a];
          (l.trigger = u), t.push(Y.create(l));
        }),
        t
      );
    });
  var kl = function (e, t, r, i) {
      return (
        t > i ? e(i) : t < 0 && e(0),
        r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
      );
    },
    aa = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (we.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === bt && s(ae, t);
    },
    Os = { auto: 1, scroll: 1 },
    Fh = function (e) {
      var t = e.event,
        r = e.target,
        i = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = n._gsap || z.core.getCache(n),
        a = Ge(),
        u;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== ae &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Os[(u = Rt(n)).overflowY] || Os[u.overflowX]));

        )
          n = n.parentNode;
        (o._isScroll =
          n &&
          n !== r &&
          !ii(n) &&
          (Os[(u = Rt(n)).overflowY] || Os[u.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || i === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Ol = function (e, t, r, i) {
      return we.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (i = i && Fh),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Le(ce, we.eventTypes[0], Rl, !1, !0);
        },
        onDisable: function () {
          return Be(ce, we.eventTypes[0], Rl, !0);
        },
      });
    },
    Ph = /(input|label|select|textarea)/i,
    Ml,
    Rl = function (e) {
      var t = Ph.test(e.target.tagName);
      (t || Ml) && ((e._gsapAllow = !0), (Ml = t));
    },
    Ah = function (e) {
      ni(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        r = t.normalizeScrollX,
        i = t.momentum,
        n = t.allowNestedScroll,
        o = t.onRelease,
        a,
        u,
        l = pt(e.target) || bt,
        c = z.core.globals().ScrollSmoother,
        p = c && c.get(),
        f =
          Lr &&
          ((e.content && pt(e.content)) ||
            (p && e.content !== !1 && !p.smooth() && p.content())),
        h = Rr(l, ke),
        g = Rr(l, nt),
        d = 1,
        _ =
          (we.isTouch && Z.visualViewport
            ? Z.visualViewport.scale * Z.visualViewport.width
            : Z.outerWidth) / Z.innerWidth,
        D = 0,
        y = Qe(i)
          ? function () {
              return i(a);
            }
          : function () {
              return i || 2.8;
            },
        v,
        m,
        x = Ol(l, e.type, !0, n),
        E = function () {
          return (m = !1);
        },
        C = Jt,
        T = Jt,
        S = function () {
          (u = er(l, ke)),
            (T = vn(Lr ? 1 : 0, u)),
            r && (C = vn(0, er(l, nt))),
            (v = li);
        },
        b = function () {
          (f._gsap.y = Cn(parseFloat(f._gsap.y) + h.offset) + "px"),
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(f._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        M = function () {
          if (m) {
            requestAnimationFrame(E);
            var I = Cn(a.deltaY / 2),
              F = T(h.v - I);
            if (f && F !== h.v + h.offset) {
              h.offset = F - h.v;
              var w = Cn((parseFloat(f && f._gsap.y) || 0) - h.offset);
              (f.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                w +
                ", 0, 1)"),
                (f._gsap.y = w + "px"),
                (h.cacheID = K.cache),
                hr();
            }
            return !0;
          }
          h.offset && b(), (m = !0);
        },
        A,
        B,
        k,
        L,
        O = function () {
          S(),
            A.isActive() &&
              A.vars.scrollY > u &&
              (h() > u ? A.progress(1) && h(u) : A.resetTo("scrollY", u));
        };
      return (
        f && z.set(f, { y: "+=0" }),
        (e.ignoreCheck = function (R) {
          return (
            (Lr && R.type === "touchmove" && M()) ||
            (d > 1.05 && R.type !== "touchstart") ||
            a.isGesturing ||
            (R.touches && R.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          m = !1;
          var R = d;
          (d = Cn(((Z.visualViewport && Z.visualViewport.scale) || 1) / _)),
            A.pause(),
            R !== d && aa(l, d > 1.01 ? !0 : r ? !1 : "x"),
            (B = g()),
            (k = h()),
            S(),
            (v = li);
        }),
        (e.onRelease = e.onGestureStart =
          function (R, I) {
            if ((h.offset && b(), !I)) L.restart(!0);
            else {
              K.cache++;
              var F = y(),
                w,
                X;
              r &&
                ((w = g()),
                (X = w + (F * 0.05 * -R.velocityX) / 0.227),
                (F *= kl(g, w, X, er(l, nt))),
                (A.vars.scrollX = C(X))),
                (w = h()),
                (X = w + (F * 0.05 * -R.velocityY) / 0.227),
                (F *= kl(h, w, X, er(l, ke))),
                (A.vars.scrollY = T(X)),
                A.invalidate().duration(F).play(0.01),
                ((Lr && A.vars.scrollY >= u) || w >= u - 1) &&
                  z.to({}, { onUpdate: O, duration: F });
            }
            o && o(R);
          }),
        (e.onWheel = function () {
          A._ts && A.pause(), Ge() - D > 1e3 && ((v = 0), (D = Ge()));
        }),
        (e.onChange = function (R, I, F, w, X) {
          if (
            (li !== v && S(),
            I && r && g(C(w[2] === I ? B + (R.startX - R.x) : g() + I - w[1])),
            F)
          ) {
            h.offset && b();
            var ie = X[2] === F,
              he = ie ? k + R.startY - R.y : h() + F - X[1],
              J = T(he);
            ie && he !== J && (k += J - he), h(J);
          }
          (F || I) && hr();
        }),
        (e.onEnable = function () {
          aa(l, r ? !1 : "x"),
            Y.addEventListener("refresh", O),
            Le(Z, "resize", O),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = g.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          aa(l, !0),
            Be(Z, "resize", O),
            Y.removeEventListener("refresh", O),
            x.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new we(e)),
        (a.iOS = Lr),
        Lr && !h() && h(1),
        Lr && z.ticker.add(Jt),
        (L = a._dc),
        (A = z.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Pl(h, h(), function () {
              return A.pause();
            }),
          },
          onUpdate: hr,
          onComplete: L.vars.onComplete,
        })),
        a
      );
    };
  (Y.sort = function (s) {
    if (Qe(s)) return Q.sort(s);
    var e = Z.pageYOffset || 0;
    return (
      Y.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + Z.innerHeight);
      }),
      Q.sort(
        s ||
          function (t, r) {
            return (
              (t.vars.refreshPriority || 0) * -1e6 +
              (t.vars.containerAnimation ? 1e6 : t._sortY) -
              ((r.vars.containerAnimation ? 1e6 : r._sortY) +
                (r.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (Y.observe = function (s) {
      return new we(s);
    }),
    (Y.normalizeScroll = function (s) {
      if (typeof s > "u") return ot;
      if (s === !0 && ot) return ot.enable();
      if (s === !1) {
        ot && ot.kill(), (ot = s);
        return;
      }
      var e = s instanceof we ? s : Ah(s);
      return (
        ot && ot.target === e.target && ot.kill(), ii(e.target) && (ot = e), e
      );
    }),
    (Y.core = {
      _getVelocityProp: Io,
      _inputObserver: Ol,
      _scrollers: K,
      _proxies: Zt,
      bridge: {
        ss: function () {
          Ot || ui("scrollStart"), (Ot = Ge());
        },
        ref: function () {
          return Ue;
        },
      },
    }),
    hl() && z.registerPlugin(Y);
  const kh = () => {
    const s = document.querySelector(".navbar_menu-wrapper"),
      e = s.querySelectorAll(".navbar_nav-link"),
      t = s.querySelector(".navbar_page-selector");
    let r = q.timeline(),
      i = 0,
      n = !1,
      o = !1;
    const a = (l, c = 0) => {
        r.clear();
        const p = l.getBoundingClientRect(),
          f = l.parentElement.getBoundingClientRect(),
          h = {
            width: p.width,
            height: p.height,
            top: p.top - f.top,
            left: p.left - f.left,
          };
        n &&
          !o &&
          r.to(t, {
            width: `-=${i}px`,
            height: h.height - i,
            x: `+=${i / 2}px`,
            y: h.top + i / 2,
            ease: "back.inOut(1.7)",
          }),
          r.to(t, {
            width: h.width - i,
            height: h.height - i,
            x: h.left + i / 2,
            y: h.top + i / 2,
            ease: "back.inOut(1.7)",
            duration: 0.5,
            delay: c - 0.1,
          }),
          !n &&
            o &&
            r.to(t, {
              width: `+=${i}px`,
              height: h.height,
              x: `-=${i / 2}px`,
              y: h.top,
            });
      },
      u = () => {
        let l = Array.from(e).filter((p) => p.getAttribute("href") === "/")[0],
          c = window.location.pathname;
        return (
          e.forEach((p) => {
            let f = p.getAttribute("href");
            f != "/" && c.includes(f) && (l = p);
          }),
          l
        );
      };
    q.set(t, { display: "block", width: "0rem" }),
      a(u()),
      e.forEach((l) => {
        l.addEventListener("mouseenter", () => {
          (i = 4), (n = !0), a(l), (o = !0);
        }),
          l.addEventListener("click", () => {
            a(l);
          });
      }),
      s.addEventListener("mouseleave", () => {
        (n = !1), a(u()), (i = 0), (o = !1);
      });
  };
  var Oh = "1.1.19";
  function Ll(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function Mh(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function Rh(s, e, t, r) {
    return Mh(s, e, 1 - Math.exp(-t * r));
  }
  function Lh(s, e) {
    return ((s % e) + e) % e;
  }
  var Bh = class {
    constructor() {
      H(this, "isRunning", !1);
      H(this, "value", 0);
      H(this, "from", 0);
      H(this, "to", 0);
      H(this, "currentTime", 0);
      H(this, "lerp");
      H(this, "duration");
      H(this, "easing");
      H(this, "onUpdate");
    }
    advance(s) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const r = Ll(0, this.currentTime / this.duration, 1);
        e = r >= 1;
        const i = e ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = Rh(this.value, this.to, this.lerp * 60, s)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(s, e, { lerp: t, duration: r, easing: i, onStart: n, onUpdate: o }) {
      (this.from = this.value = s),
        (this.to = e),
        (this.lerp = t),
        (this.duration = r),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        n == null || n(),
        (this.onUpdate = o);
    }
  };
  function Nh(s, e) {
    let t;
    return function (...r) {
      let i = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), s.apply(i, r);
        }, e));
    };
  }
  var zh = class {
      constructor(s, e, { autoResize: t = !0, debounce: r = 250 } = {}) {
        H(this, "width", 0);
        H(this, "height", 0);
        H(this, "scrollHeight", 0);
        H(this, "scrollWidth", 0);
        H(this, "debouncedResize");
        H(this, "wrapperResizeObserver");
        H(this, "contentResizeObserver");
        H(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        H(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        H(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = s),
          (this.content = e),
          t &&
            ((this.debouncedResize = Nh(this.resize, r)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var s, e;
        (s = this.wrapperResizeObserver) == null || s.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    Bl = class {
      constructor() {
        H(this, "events", {});
      }
      emit(s, ...e) {
        var r;
        let t = this.events[s] || [];
        for (let i = 0, n = t.length; i < n; i++)
          (r = t[i]) == null || r.call(t, ...e);
      }
      on(s, e) {
        var t;
        return (
          ((t = this.events[s]) != null && t.push(e)) || (this.events[s] = [e]),
          () => {
            var r;
            this.events[s] =
              (r = this.events[s]) == null ? void 0 : r.filter((i) => e !== i);
          }
        );
      }
      off(s, e) {
        var t;
        this.events[s] =
          (t = this.events[s]) == null ? void 0 : t.filter((r) => e !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    Nl = 100 / 6,
    Br = { passive: !1 },
    Ih = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        H(this, "touchStart", { x: 0, y: 0 });
        H(this, "lastDelta", { x: 0, y: 0 });
        H(this, "window", { width: 0, height: 0 });
        H(this, "emitter", new Bl());
        H(this, "onTouchStart", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        H(this, "onTouchMove", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
              ? s.targetTouches[0]
              : s,
            r = -(e - this.touchStart.x) * this.options.touchMultiplier,
            i = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit("scroll", { deltaX: r, deltaY: i, event: s });
        });
        H(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        H(this, "onWheel", (s) => {
          let { deltaX: e, deltaY: t, deltaMode: r } = s;
          const i = r === 1 ? Nl : r === 2 ? this.window.width : 1,
            n = r === 1 ? Nl : r === 2 ? this.window.height : 1;
          (e *= i),
            (t *= n),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: s });
        });
        H(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = s),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Br),
          this.element.addEventListener("touchstart", this.onTouchStart, Br),
          this.element.addEventListener("touchmove", this.onTouchMove, Br),
          this.element.addEventListener("touchend", this.onTouchEnd, Br);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Br),
          this.element.removeEventListener("touchstart", this.onTouchStart, Br),
          this.element.removeEventListener("touchmove", this.onTouchMove, Br),
          this.element.removeEventListener("touchend", this.onTouchEnd, Br);
      }
    },
    qh = class {
      constructor({
        wrapper: s = window,
        content: e = document.documentElement,
        eventsTarget: t = s,
        smoothWheel: r = !0,
        syncTouch: i = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: u = (E) => Math.min(1, 1.001 - Math.pow(2, -10 * E)),
        lerp: l = 0.1,
        infinite: c = !1,
        orientation: p = "vertical",
        gestureOrientation: f = "vertical",
        touchMultiplier: h = 1,
        wheelMultiplier: g = 1,
        autoResize: d = !0,
        prevent: _,
        virtualScroll: D,
        overscroll: y = !0,
        autoRaf: v = !1,
        anchors: m = !1,
        __experimental__naiveDimensions: x = !1,
      } = {}) {
        H(this, "_isScrolling", !1);
        H(this, "_isStopped", !1);
        H(this, "_isLocked", !1);
        H(this, "_preventNextNativeScrollEvent", !1);
        H(this, "_resetVelocityTimeout", null);
        H(this, "__rafID", null);
        H(this, "isTouching");
        H(this, "time", 0);
        H(this, "userData", {});
        H(this, "lastVelocity", 0);
        H(this, "velocity", 0);
        H(this, "direction", 0);
        H(this, "options");
        H(this, "targetScroll");
        H(this, "animatedScroll");
        H(this, "animate", new Bh());
        H(this, "emitter", new Bl());
        H(this, "dimensions");
        H(this, "virtualScroll");
        H(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        H(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        H(this, "onClick", (s) => {
          const t = s.composedPath().find((r) => {
            var i;
            return (
              r instanceof HTMLAnchorElement &&
              ((i = r.getAttribute("href")) == null
                ? void 0
                : i.startsWith("#"))
            );
          });
          if (t) {
            const r = t.getAttribute("href");
            if (r) {
              const i =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              this.scrollTo(r, i);
            }
          }
        });
        H(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        H(this, "onVirtualScroll", (s) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(s) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: r } = s;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          const i = r.type.includes("touch"),
            n = r.type.includes("wheel");
          this.isTouching = r.type === "touchstart" || r.type === "touchmove";
          const o = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const u =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (o || u) return;
          let l = r.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            l.find((_) => {
              var D, y, v;
              return (
                _ instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(_))) ||
                  ((D = _.hasAttribute) == null
                    ? void 0
                    : D.call(_, "data-lenis-prevent")) ||
                  (i &&
                    ((y = _.hasAttribute) == null
                      ? void 0
                      : y.call(_, "data-lenis-prevent-touch"))) ||
                  (n &&
                    ((v = _.hasAttribute) == null
                      ? void 0
                      : v.call(_, "data-lenis-prevent-wheel"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && i) || (this.options.smoothWheel && n))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (r.lenisStopPropagation = !0);
            return;
          }
          let f = t;
          this.options.gestureOrientation === "both"
            ? (f = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (f = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.preventDefault();
          const h = i && this.options.syncTouch,
            d = i && r.type === "touchend" && Math.abs(f) > 5;
          d && (f = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + f, {
              programmatic: !1,
              ...(h
                ? { lerp: d ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        H(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const s = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - s),
              (this.direction = Math.sign(this.animatedScroll - s)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        H(this, "raf", (s) => {
          const e = s - (this.time || s);
          (this.time = s),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = Oh),
          (!s || s === document.documentElement) && (s = window),
          (this.options = {
            wrapper: s,
            content: e,
            eventsTarget: t,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: n,
            touchInertiaMultiplier: o,
            duration: a,
            easing: u,
            lerp: l,
            infinite: c,
            gestureOrientation: f,
            orientation: p,
            touchMultiplier: h,
            wheelMultiplier: g,
            autoResize: d,
            prevent: _,
            virtualScroll: D,
            overscroll: y,
            autoRaf: v,
            anchors: m,
            __experimental__naiveDimensions: x,
          }),
          (this.dimensions = new zh(s, e, { autoResize: d })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new Ih(t, {
            touchMultiplier: h,
            wheelMultiplier: g,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      off(s, e) {
        return this.emitter.off(s, e);
      }
      setScroll(s) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: s, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: s, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1));
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0));
      }
      scrollTo(
        s,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: r = !1,
          duration: i = this.options.duration,
          easing: n = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: u,
          force: l = !1,
          programmatic: c = !0,
          userData: p,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !l)) {
          if (typeof s == "string" && ["top", "left", "start"].includes(s))
            s = 0;
          else if (
            typeof s == "string" &&
            ["bottom", "right", "end"].includes(s)
          )
            s = this.limit;
          else {
            let f;
            if (
              (typeof s == "string"
                ? (f = document.querySelector(s))
                : s instanceof HTMLElement &&
                  s != null &&
                  s.nodeType &&
                  (f = s),
              f)
            ) {
              if (this.options.wrapper !== window) {
                const g = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? g.left : g.top;
              }
              const h = f.getBoundingClientRect();
              s = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
            }
          }
          if (typeof s == "number") {
            if (
              ((s += e),
              (s = Math.round(s)),
              this.options.infinite
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (s = Ll(0, s, this.limit)),
              s === this.targetScroll)
            ) {
              a == null || a(this), u == null || u(this);
              return;
            }
            if (((this.userData = p ?? {}), t)) {
              (this.animatedScroll = this.targetScroll = s),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u == null || u(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            c || (this.targetScroll = s),
              this.animate.fromTo(this.animatedScroll, s, {
                duration: i,
                easing: n,
                lerp: o,
                onStart: () => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (f, h) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = f - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = f),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = f),
                    h || this.emit(),
                    h &&
                      (this.reset(),
                      this.emit(),
                      u == null || u(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        const s = this.options.wrapper;
        return this.isHorizontal
          ? s.scrollX ?? s.scrollLeft
          : s.scrollY ?? s.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Lh(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(s) {
        this._isScrolling !== s &&
          ((this._isScrolling = s), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(s) {
        this._isStopped !== s &&
          ((this._isStopped = s), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(s) {
        this._isLocked !== s && ((this._isLocked = s), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let s = "lenis";
        return (
          this.isStopped && (s += " lenis-stopped"),
          this.isLocked && (s += " lenis-locked"),
          this.isScrolling && (s += " lenis-scrolling"),
          this.isScrolling === "smooth" && (s += " lenis-smooth"),
          s
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  function Hh() {
    q.registerPlugin(Y);
    let s = new qh({ lerp: 0.2, smooth: !0 });
    return (
      q.ticker.add((e) => {
        s.raf(e * 1e3), Y.update();
      }),
      q.ticker.lagSmoothing(0),
      console.log("lenis initiated"),
      s
    );
  }
  function zl(s) {
    const e = s.currentTarget,
      t = e.getBoundingClientRect(),
      r = 15,
      i = e.children,
      n = 15,
      o = ((s.clientX - t.left) / e.offsetWidth - 0.5) * (r / 16),
      a = ((s.clientY - t.top) / e.offsetHeight - 0.5) * (r / 16);
    if (
      (q.to(e, {
        x: o + "em",
        y: a + "em",
        rotate: "0.001deg",
        ease: "power4.out",
        duration: 0.6,
      }),
      i)
    ) {
      const u = ((s.clientX - t.left) / e.offsetWidth - 0.5) * (n / 16),
        l = ((s.clientY - t.top) / e.offsetHeight - 0.5) * (n / 16);
      q.to(i, {
        x: u + "em",
        y: l + "em",
        rotate: "0.001deg",
        ease: "power2.out",
        duration: 1,
      });
    }
  }
  function Il(s) {
    const e = s.currentTarget,
      t = e.firstChild;
    q.to(e, { x: "0em", y: "0em", ease: "elastic.out(1, 0.3)", duration: 0.8 }),
      t &&
        q.to(t, {
          x: "0em",
          y: "0em",
          ease: "elastic.out(1, 0.3)",
          duration: 1.2,
        });
  }
  const Yh = (s) => {
      s.querySelectorAll(".project-thumbnail_image-wrapper").forEach((t) => {
        q.set(t.children, { scale: 1.05 }),
          t.addEventListener("mousemove", zl),
          t.addEventListener("mouseleave", Il);
      });
    },
    ql = (s) => {
      s.querySelectorAll(".project-thumbnail_image-wrapper").forEach((t) => {
        t.removeEventListener("mousemove", zl),
          t.removeEventListener("mouseleave", Il);
      });
    },
    Wh = (s = document) => {
      q.registerPlugin(Y);
      let e = s.querySelectorAll("[animated-figure]"),
        t = q.timeline();
      e.forEach((r) => {
        t.to(r, {
          rotate: 60,
          ease: "linear",
          scrollTrigger: {
            trigger: r,
            start: "top bottom",
            end: "bottom top",
            scrub: !0,
          },
        });
      });
    },
    Xh = (s) => {
      Y.killAll();
    };
  q.defaults({ ease: "power2.inOut", duration: 0.3 });
  const ua = new WeakMap();
  function $h(s, e) {
    let t = q.timeline({ paused: !0 });
    return (
      t.set(s.firstChild, { opacity: 0 }),
      t.set(s, { opacity: 1, display: "" }),
      t.to(e, { width: "100%" }),
      t.to(s.firstChild, { opacity: 1 }),
      t
    );
  }
  const Vh = (s) => {
      q.registerPlugin(Y),
        s.querySelectorAll(".table").forEach((t) => {
          t.querySelectorAll(".table_row").forEach((i) => {
            q.set(i, {
              borderBottom: "1px solid transparent",
              position: "relative",
              opacity: 0,
            });
            const n = document.createElement("div");
            q.set(n, {
              height: "1px",
              width: "0%",
              position: "absolute",
              bottom: "0",
              left: "0",
              backgroundColor: "black",
            }),
              i.appendChild(n),
              Y.create({
                trigger: n,
                start: "bottom 90%",
                end: "bottom 10%",
                onEnter: () => {
                  q.to(n, {
                    width: "100%",
                    duration: 0.5,
                    ease: "power2.inOut",
                  }),
                    q.to(i, { opacity: 1 });
                },
                onLeaveBack: () => {
                  q.to(n, { width: "0%", duration: 0.4, ease: "power2.inOut" }),
                    q.to(i, { opacity: 0 });
                },
              });
            let o = i.querySelector(".table_row-description");
            if (o) {
              q.set(i, { cursor: "pointer" }),
                q.set(o, {
                  display: "none",
                  borderBottom: "1px solid transparent",
                  opacity: 0,
                });
              const a = document.createElement("div");
              q.set(a, {
                height: "1px",
                width: "0%",
                position: "absolute",
                bottom: "-1",
                left: "-0",
                backgroundColor: "black",
              }),
                o.appendChild(a);
              const u = $h(o, a),
                l = () => u.play(),
                c = () => u.reverse();
              ua.set(i, { hoverInListener: l, hoverOutListener: c }),
                i.addEventListener("mouseenter", l),
                i.addEventListener("mouseleave", c);
            }
          });
        });
    },
    jh = (s) => {
      Y.killAll(),
        s.querySelectorAll(".table").forEach((t) => {
          t.querySelectorAll(".table_row").forEach((i) => {
            const n = ua.get(i);
            n &&
              (i.removeEventListener("mouseenter", n.hoverInListener),
              i.removeEventListener("mouseleave", n.hoverOutListener),
              ua.delete(i));
          });
        });
    };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Uh = /(?:^\s+|\s+$)/g,
    Hl =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Ms(s) {
    var e = s.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof s.textContent == "string") return s.textContent;
      for (s = s.firstChild; s; s = s.nextSibling) t += Ms(s);
    } else if (e === 3 || e === 4) return s.nodeValue;
    return t;
  }
  function tr(s, e, t, r, i) {
    if (
      ((s += ""),
      t && (s = s.trim ? s.trim() : s.replace(Uh, "")),
      e && e !== "")
    )
      return s.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var n = [], o = s.length, a = 0, u, l; a < o; a++)
      (l = s.charAt(a)),
        ((l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319) ||
          (s.charCodeAt(a + 1) >= 65024 && s.charCodeAt(a + 1) <= 65039)) &&
          ((u = ((s.substr(a, 12).split(Hl) || [])[1] || "").length || 2),
          (l = s.substr(a, u)),
          (n.emoji = 1),
          (a += u - 1)),
        n.push(
          i
            ? l
            : l === ">"
            ? "&gt;"
            : l === "<"
            ? "&lt;"
            : r &&
              l === " " &&
              (s.charAt(a - 1) === " " || s.charAt(a + 1) === " ")
            ? "&nbsp;"
            : l
        );
    return n;
  }
  /*!
   * SplitText: 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Hi,
    la,
    Yl,
    Mn,
    Wl,
    Rs,
    Gh = /(?:\r|\n|\t\t)/g,
    Qh = /(?:\s\s+)/g,
    Kh = " ",
    Xl = function (e) {
      (Hi = document),
        (la = window),
        (Mn =
          Mn ||
          e ||
          la.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        Mn &&
          ((Rs = Mn.utils.toArray),
          (Wl = Mn.core.context || function () {}),
          (Yl = 1));
    },
    $l = function (e) {
      return la.getComputedStyle(e);
    },
    ca = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    Zh = function (e, t) {
      for (var r = t.length, i; --r > -1; )
        if (((i = t[r]), e.substr(0, i.length) === i)) return i.length;
    },
    Jh = " style='position:relative;display:inline-block;'",
    Vl = function (e, t) {
      e === void 0 && (e = "");
      var r = ~e.indexOf("++"),
        i = 1;
      return (
        r && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + Jh + (e ? " class='" + e + (r ? i++ : "") + "'>" : ">")
          );
        }
      );
    },
    jl = function s(e, t, r) {
      var i = e.nodeType;
      if (i === 1 || i === 9 || i === 11)
        for (e = e.firstChild; e; e = e.nextSibling) s(e, t, r);
      else (i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(t).join(r));
    },
    fa = function (e, t) {
      for (var r = t.length; --r > -1; ) e.push(t[r]);
    },
    Ul = function (e, t, r) {
      for (var i; e && e !== t; ) {
        if (((i = e._next || e.nextSibling), i))
          return i.textContent.charAt(0) === r;
        e = e.parentNode || e._parent;
      }
    },
    ed = function s(e) {
      var t = Rs(e.childNodes),
        r = t.length,
        i,
        n;
      for (i = 0; i < r; i++)
        (n = t[i]),
          n._isSplit
            ? s(n)
            : i && n.previousSibling && n.previousSibling.nodeType === 3
            ? ((n.previousSibling.nodeValue +=
                n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue),
              e.removeChild(n))
            : n.nodeType !== 3 &&
              (e.insertBefore(n.firstChild, n), e.removeChild(n));
    },
    rr = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    td = function (e, t, r, i, n, o, a) {
      var u = $l(e),
        l = rr("paddingLeft", u),
        c = -999,
        p = rr("borderBottomWidth", u) + rr("borderTopWidth", u),
        f = rr("borderLeftWidth", u) + rr("borderRightWidth", u),
        h = rr("paddingTop", u) + rr("paddingBottom", u),
        g = rr("paddingLeft", u) + rr("paddingRight", u),
        d = rr("fontSize", u) * (t.lineThreshold || 0.2),
        _ = u.textAlign,
        D = [],
        y = [],
        v = [],
        m = t.wordDelimiter || " ",
        x = t.tag ? t.tag : t.span ? "span" : "div",
        E = t.type || t.split || "chars,words,lines",
        C = n && ~E.indexOf("lines") ? [] : null,
        T = ~E.indexOf("words"),
        S = ~E.indexOf("chars"),
        b = ca(t),
        M = t.linesClass,
        A = ~(M || "").indexOf("++"),
        B = [],
        k = u.display === "flex",
        L = e.style.display,
        O,
        R,
        I,
        F,
        w,
        X,
        ie,
        he,
        J,
        U,
        Pe,
        ne;
      for (
        A && (M = M.split("++").join("")),
          k && (e.style.display = "block"),
          R = e.getElementsByTagName("*"),
          I = R.length,
          w = [],
          O = 0;
        O < I;
        O++
      )
        w[O] = R[O];
      if (C || b)
        for (O = 0; O < I; O++)
          (F = w[O]),
            (X = F.parentNode === e),
            (X || b || (S && !T)) &&
              ((ne = F.offsetTop),
              C &&
                X &&
                Math.abs(ne - c) > d &&
                (F.nodeName !== "BR" || O === 0) &&
                ((ie = []), C.push(ie), (c = ne)),
              b &&
                ((F._x = F.offsetLeft),
                (F._y = ne),
                (F._w = F.offsetWidth),
                (F._h = F.offsetHeight)),
              C &&
                (((F._isSplit && X) ||
                  (!S && X) ||
                  (T && X) ||
                  (!T &&
                    F.parentNode.parentNode === e &&
                    !F.parentNode._isSplit)) &&
                  (ie.push(F), (F._x -= l), Ul(F, e, m) && (F._wordEnd = !0)),
                F.nodeName === "BR" &&
                  ((F.nextSibling && F.nextSibling.nodeName === "BR") ||
                    O === 0) &&
                  C.push([])));
      for (O = 0; O < I; O++) {
        if (((F = w[O]), (X = F.parentNode === e), F.nodeName === "BR")) {
          C || b
            ? (F.parentNode && F.parentNode.removeChild(F),
              w.splice(O--, 1),
              I--)
            : T || e.appendChild(F);
          continue;
        }
        if (
          (b &&
            ((J = F.style),
            !T && !X && ((F._x += F.parentNode._x), (F._y += F.parentNode._y)),
            (J.left = F._x + "px"),
            (J.top = F._y + "px"),
            (J.position = "absolute"),
            (J.display = "block"),
            (J.width = F._w + 1 + "px"),
            (J.height = F._h + "px")),
          !T && S)
        )
          if (F._isSplit)
            for (
              F._next = R = F.nextSibling, F.parentNode.appendChild(F);
              R && R.nodeType === 3 && R.textContent === " ";

            )
              (F._next = R.nextSibling),
                F.parentNode.appendChild(R),
                (R = R.nextSibling);
          else
            F.parentNode._isSplit
              ? ((F._parent = F.parentNode),
                !F.previousSibling &&
                  F.firstChild &&
                  (F.firstChild._isFirst = !0),
                F.nextSibling &&
                  F.nextSibling.textContent === " " &&
                  !F.nextSibling.nextSibling &&
                  B.push(F.nextSibling),
                (F._next =
                  F.nextSibling && F.nextSibling._isFirst
                    ? null
                    : F.nextSibling),
                F.parentNode.removeChild(F),
                w.splice(O--, 1),
                I--)
              : X ||
                ((ne = !F.nextSibling && Ul(F.parentNode, e, m)),
                F.parentNode._parent && F.parentNode._parent.appendChild(F),
                ne && F.parentNode.appendChild(Hi.createTextNode(" ")),
                x === "span" && (F.style.display = "inline"),
                D.push(F));
        else
          F.parentNode._isSplit && !F._isSplit && F.innerHTML !== ""
            ? y.push(F)
            : S &&
              !F._isSplit &&
              (x === "span" && (F.style.display = "inline"), D.push(F));
      }
      for (O = B.length; --O > -1; ) B[O].parentNode.removeChild(B[O]);
      if (C) {
        for (
          b &&
            ((U = Hi.createElement(x)),
            e.appendChild(U),
            (Pe = U.offsetWidth + "px"),
            (ne = U.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(U)),
            J = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (he = m === " " && (!b || (!T && !S)), O = 0; O < C.length; O++) {
          for (
            ie = C[O],
              U = Hi.createElement(x),
              U.style.cssText =
                "display:block;text-align:" +
                _ +
                ";position:" +
                (b ? "absolute;" : "relative;"),
              M && (U.className = M + (A ? O + 1 : "")),
              v.push(U),
              I = ie.length,
              R = 0;
            R < I;
            R++
          )
            ie[R].nodeName !== "BR" &&
              ((F = ie[R]),
              U.appendChild(F),
              he && F._wordEnd && U.appendChild(Hi.createTextNode(" ")),
              b &&
                (R === 0 &&
                  ((U.style.top = F._y + "px"), (U.style.left = l + ne + "px")),
                (F.style.top = "0px"),
                ne && (F.style.left = F._x - ne + "px")));
          I === 0
            ? (U.innerHTML = "&nbsp;")
            : !T && !S && (ed(U), jl(U, " ", " ")),
            b && ((U.style.width = Pe), (U.style.height = F._h + "px")),
            e.appendChild(U);
        }
        e.style.cssText = J;
      }
      b &&
        (a > e.clientHeight &&
          ((e.style.height = a - h + "px"),
          e.clientHeight < a && (e.style.height = a + p + "px")),
        o > e.clientWidth &&
          ((e.style.width = o - g + "px"),
          e.clientWidth < o && (e.style.width = o + f + "px"))),
        k && (L ? (e.style.display = L) : e.style.removeProperty("display")),
        fa(r, D),
        T && fa(i, y),
        fa(n, v);
    },
    rd = function (e, t, r, i) {
      var n = t.tag ? t.tag : t.span ? "span" : "div",
        o = t.type || t.split || "chars,words,lines",
        a = ~o.indexOf("chars"),
        u = ca(t),
        l = t.wordDelimiter || " ",
        c = function (b) {
          return b === l || (b === Kh && l === " ");
        },
        p = l !== " " ? "" : u ? "&#173; " : " ",
        f = "</" + n + ">",
        h = 1,
        g = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : Zh
          : null,
        d,
        _,
        D,
        y,
        v,
        m,
        x,
        E,
        C = Hi.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(C, e),
          C.textContent = e.nodeValue,
          T.removeChild(e),
          e = C,
          d = Ms(e),
          x = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(Qh, " ").replace(Gh, "")),
          x && (d = d.split("<").join("{{LT}}")),
          v = d.length,
          _ = (d.charAt(0) === " " ? p : "") + r(),
          D = 0;
        D < v;
        D++
      )
        if (((m = d.charAt(D)), g && (E = g(d.substr(D), t.specialChars))))
          (m = d.substr(D, E || 1)),
            (_ += a && m !== " " ? i() + m + "</" + n + ">" : m),
            (D += E - 1);
        else if (c(m) && !c(d.charAt(D - 1)) && D) {
          for (_ += h ? f : "", h = 0; c(d.charAt(D + 1)); ) (_ += p), D++;
          D === v - 1
            ? (_ += p)
            : d.charAt(D + 1) !== ")" && ((_ += p + r()), (h = 1));
        } else
          m === "{" && d.substr(D, 6) === "{{LT}}"
            ? ((_ += a ? i() + "{{LT}}</" + n + ">" : "{{LT}}"), (D += 5))
            : (m.charCodeAt(0) >= 55296 && m.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(D + 1) >= 65024 && d.charCodeAt(D + 1) <= 65039)
            ? ((y = ((d.substr(D, 12).split(Hl) || [])[1] || "").length || 2),
              (_ +=
                a && m !== " "
                  ? i() + d.substr(D, y) + "</" + n + ">"
                  : d.substr(D, y)),
              (D += y - 1))
            : (_ += a && m !== " " ? i() + m + "</" + n + ">" : m);
      (e.outerHTML = _ + (h ? f : "")), x && jl(T, "{{LT}}", "<");
    },
    id = function s(e, t, r, i) {
      var n = Rs(e.childNodes),
        o = n.length,
        a = ca(t),
        u,
        l;
      if (e.nodeType !== 3 || o > 1) {
        for (t.absolute = !1, u = 0; u < o; u++)
          (l = n[u]),
            (l._next = l._isFirst = l._parent = l._wordEnd = null),
            (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
              (a &&
                l.nodeType !== 3 &&
                $l(l).display === "inline" &&
                ((l.style.display = "inline-block"),
                (l.style.position = "relative")),
              (l._isSplit = !0),
              s(l, t, r, i));
        (t.absolute = a), (e._isSplit = !0);
        return;
      }
      rd(e, t, r, i);
    },
    Ls = (function () {
      function s(t, r) {
        Yl || Xl(),
          (this.elements = Rs(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = r || {}),
          Wl(this),
          this.split(r);
      }
      var e = s.prototype;
      return (
        (e.split = function (r) {
          this.isSplit && this.revert(),
            (this.vars = r = r || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var i = this.elements.length,
              n = r.tag ? r.tag : r.span ? "span" : "div",
              o = Vl(r.wordsClass, n),
              a = Vl(r.charsClass, n),
              u,
              l,
              c;
            --i > -1;

          )
            (c = this.elements[i]),
              (this._originals[i] = {
                html: c.innerHTML,
                style: c.getAttribute("style"),
              }),
              (u = c.clientHeight),
              (l = c.clientWidth),
              id(c, r, o, a),
              td(c, r, this.chars, this.words, this.lines, l, u);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var r = this._originals;
          if (!r) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (i, n) {
              (i.innerHTML = r[n].html),
                i.setAttribute("style", r[n].style || "");
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (s.create = function (r, i) {
          return new s(r, i);
        }),
        s
      );
    })();
  (Ls.version = "3.12.7"), (Ls.register = Xl);
  /*!
   * ScrambleTextPlugin 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Bs = (function () {
      function s(t) {
        (this.chars = tr(t)), (this.sets = []), (this.length = 50);
        for (var r = 0; r < 20; r++) this.sets[r] = Zl(80, this.chars);
      }
      var e = s.prototype;
      return (
        (e.grow = function (r) {
          for (var i = 0; i < 20; i++)
            this.sets[i] += Zl(r - this.length, this.chars);
          this.length = r;
        }),
        s
      );
    })(),
    fi,
    Gl,
    Ql = function () {
      return (
        fi ||
        (typeof window < "u" && (fi = window.gsap) && fi.registerPlugin && fi)
      );
    },
    nd = 1,
    Kl = /\s+/g,
    Zl = function (e, t) {
      for (var r = t.length, i = ""; --e > -1; ) i += t[~~(Math.random() * r)];
      return i;
    },
    ha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Jl = ha.toLowerCase(),
    sd = {
      upperCase: new Bs(ha),
      lowerCase: new Bs(Jl),
      upperAndLowerCase: new Bs(ha + Jl),
    },
    ec = function () {
      Gl = fi = Ql();
    },
    Yi = {
      version: "3.12.7",
      name: "scrambleText",
      register: function (e, t, r) {
        (fi = e), ec();
      },
      init: function (e, t, r, i, n) {
        if (
          (Gl || ec(),
          (this.prop =
            "innerHTML" in e
              ? "innerHTML"
              : "textContent" in e
              ? "textContent"
              : 0),
          !!this.prop)
        ) {
          (this.target = e), typeof t != "object" && (t = { text: t });
          var o = t.text || t.value || "",
            a = t.trim !== !1,
            u = this,
            l,
            c,
            p,
            f;
          return (
            (u.delimiter = l = t.delimiter || ""),
            (u.original = tr(
              Ms(e).replace(Kl, " ").split("&nbsp;").join(""),
              l,
              a
            )),
            (o === "{original}" || o === !0 || o == null) &&
              (o = u.original.join(l)),
            (u.text = tr((o || "").replace(Kl, " "), l, a)),
            (u.hasClass = !!(t.newClass || t.oldClass)),
            (u.newClass = t.newClass),
            (u.oldClass = t.oldClass),
            (f = l === ""),
            (u.textHasEmoji = f && !!u.text.emoji),
            (u.charsHaveEmoji = !!t.chars && !!tr(t.chars).emoji),
            (u.length = f ? u.original.length : u.original.join(l).length),
            (u.lengthDif =
              (f ? u.text.length : u.text.join(l).length) - u.length),
            (u.fillChar =
              t.fillChar || (t.chars && ~t.chars.indexOf(" ")) ? "&nbsp;" : ""),
            (u.charSet = p = sd[t.chars || "upperCase"] || new Bs(t.chars)),
            (u.speed = 0.05 / (t.speed || 1)),
            (u.prevScrambleTime = 0),
            (u.setIndex = (Math.random() * 20) | 0),
            (c = u.length + Math.max(u.lengthDif, 0)),
            c > p.length && p.grow(c),
            (u.chars = p.sets[u.setIndex]),
            (u.revealDelay = t.revealDelay || 0),
            (u.tweenLength = t.tweenLength !== !1),
            (u.tween = r),
            (u.rightToLeft = !!t.rightToLeft),
            u._props.push("scrambleText", "text"),
            nd
          );
        }
      },
      render: function (e, t) {
        var r = t.target,
          i = t.prop,
          n = t.text,
          o = t.delimiter,
          a = t.tween,
          u = t.prevScrambleTime,
          l = t.revealDelay,
          c = t.setIndex,
          p = t.chars,
          f = t.charSet,
          h = t.length,
          g = t.textHasEmoji,
          d = t.charsHaveEmoji,
          _ = t.lengthDif,
          D = t.tweenLength,
          y = t.oldClass,
          v = t.newClass,
          m = t.rightToLeft,
          x = t.fillChar,
          E = t.speed,
          C = t.original,
          T = t.hasClass,
          S = n.length,
          b = a._time,
          M = b - u,
          A,
          B,
          k,
          L,
          O,
          R,
          I,
          F,
          w,
          X,
          ie;
        l &&
          (a._from && (b = a._dur - b),
          (e =
            b === 0
              ? 0
              : b < l
              ? 1e-6
              : b === a._dur
              ? 1
              : a._ease((b - l) / (a._dur - l)))),
          e < 0 ? (e = 0) : e > 1 && (e = 1),
          m && (e = 1 - e),
          (A = ~~(e * S + 0.5)),
          e
            ? ((M > E || M < -E) &&
                ((t.setIndex = c = (c + ((Math.random() * 19) | 0)) % 20),
                (t.chars = f.sets[c]),
                (t.prevScrambleTime += M)),
              (L = p))
            : (L = C.join(o)),
          (ie = a._from ? e : 1 - e),
          (X = h + (D ? (a._from ? ie * ie * ie : 1 - ie * ie * ie) : 1) * _),
          m
            ? e === 1 && (a._from || a.data === "isFromStart")
              ? ((k = ""), (L = C.join(o)))
              : ((I = n.slice(A).join(o)),
                d
                  ? (k = tr(L)
                      .slice(0, (X - (g ? tr(I) : I).length + 0.5) | 0)
                      .join(""))
                  : (k = L.substr(0, (X - (g ? tr(I) : I).length + 0.5) | 0)),
                (L = I))
            : ((k = n.slice(0, A).join(o)),
              (B = (g ? tr(k) : k).length),
              d
                ? (L = tr(L)
                    .slice(B, (X + 0.5) | 0)
                    .join(""))
                : (L = L.substr(B, (X - B + 0.5) | 0))),
          T
            ? ((F = m ? y : v),
              (w = m ? v : y),
              (O = F && A !== 0),
              (R = w && A !== S),
              (I =
                (O ? "<span class='" + F + "'>" : "") +
                k +
                (O ? "</span>" : "") +
                (R ? "<span class='" + w + "'>" : "") +
                o +
                L +
                (R ? "</span>" : "")))
            : (I = k + o + L),
          (r[i] =
            x === "&nbsp;" && ~I.indexOf("  ")
              ? I.split("  ").join("&nbsp;&nbsp;")
              : I);
      },
    };
  (Yi.emojiSafeSplit = tr), (Yi.getText = Ms), Ql() && fi.registerPlugin(Yi);
  const da = new WeakMap(),
    od = (s) => {
      q.registerPlugin(Yi),
        q.registerPlugin(Ls),
        s.querySelectorAll(".button").forEach((t) => {
          let r = q.timeline({ paused: !0 });
          q.set(t, { width: t.offsetWidth * 1.02 });
          const i = new Ls(t, { type: "words,chars" });
          i.chars.forEach((a) => {
            r.set(a, { width: a.offsetWidth });
          }),
            i.chars.forEach((a, u) => {
              let l = u == 0 ? 0 : -1;
              r.to(a, {
                duration: 0.3,
                delay: 0.25 * l,
                scrambleText: {
                  text: "{original}",
                  chars: "■",
                  ease: "expo.inOut",
                },
              });
            });
          const n = () => r.play(),
            o = () => r.reverse();
          da.set(t, { hoverInListener: n, hoverOutListener: o }),
            t.addEventListener("mouseenter", n),
            t.addEventListener("mouseleave", o);
        });
    },
    ad = (s) => {
      s.querySelectorAll(".button").forEach((t) => {
        const r = da.get(t);
        r &&
          (t.removeEventListener("mouseenter", r.hoverInListener),
          t.removeEventListener("mouseleave", r.hoverOutListener),
          da.delete(t));
      });
    };
  q.defaults({ ease: "power2.inOut", duration: 0.3 });
  function ud(s) {
    q.registerPlugin(Yi);
    const e = s.textContent;
    let t = q.timeline();
    return (
      (s.textContent = "■".repeat(e.length)),
      t.to(s, {
        duration: 1,
        scrambleText: { text: e, chars: "■", ease: "expo.inOut" },
      }),
      t
    );
  }
  const ld = (s) => {
      let e = [
        ...s.querySelectorAll("h1"),
        ...s.querySelectorAll(".heading-style-h1"),
        ...s.querySelectorAll("[animate-h1=true]"),
      ];
      (e = Array.from(new Set(e))),
        (e = e.filter(
          (r) =>
            !r.matches(".heading-style-h2") && !r.matches("[animate-h1=false]")
        )),
        e.forEach((r) => {
          const i = r.offsetWidth,
            n = window.innerWidth,
            o = (i / n) * 10;
          if (i > n) {
            const a = document.createElement("div"),
              u = r.textContent;
            a.append(u),
              a.classList.add("heading-style-h1"),
              q.set(r.parentElement, { display: "flex" }),
              q.set([r, a], { marginLeft: "0.25ch", marginRight: "0.25ch" }),
              r.parentElement.append(a),
              q
                .to(r.parentElement, {
                  xPercent: -50,
                  repeat: -1,
                  duration: o,
                  ease: "linear",
                })
                .totalProgress(0.5);
          }
        });
      let t = [
        ...s.querySelectorAll("h2"),
        ...s.querySelectorAll(".heading-style-h2"),
        ...s.querySelectorAll("[animate-h2=true]"),
      ];
      (t = Array.from(new Set(t))),
        (t = t.filter(
          (r) =>
            !r.matches(".heading-style-h3") && !r.matches("[animate-h2=false]")
        )),
        t.forEach((r) => {
          let i = q.timeline({ paused: !0 });
          i.from(r, { opacity: 0, duration: 0.1 }),
            i.add(ud(r)),
            Y.create({
              trigger: r,
              start: "bottom 95%",
              end: "top 10%",
              onEnter: () => {
                i.play();
              },
              onLeave: () => {
                i.reverse();
              },
              onEnterBack: () => {
                i.play();
              },
              onLeaveBack: () => {
                i.reverse();
              },
            });
        });
    },
    cd = (s) => {
      Y.killAll();
    },
    tc = (s) => {
      ld(s), Yh(s), Wh(s), Vh(s), od(s), console.log("components init");
    },
    fd = (s) => {
      cd(), jh(s), ql(s), Xh(), ad(s), console.log("components cleanup");
    };
  /*!
   * paths 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var hd = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    dd = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    pd = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    _d = /(^[#\.][a-z]|[a-y][a-z])/i,
    gd = Math.PI / 180,
    Ns = Math.sin,
    zs = Math.cos,
    Rn = Math.abs,
    Ln = Math.sqrt,
    rc = function (e) {
      return typeof e == "string";
    },
    ic = function (e) {
      return typeof e == "number";
    },
    nc = 1e5,
    Nr = function (e) {
      return Math.round(e * nc) / nc || 0;
    };
  function Dd(s) {
    s = (rc(s) && _d.test(s) && document.querySelector(s)) || s;
    var e = s.getAttribute ? s : 0,
      t;
    return e && (s = s.getAttribute("d"))
      ? (e._gsPath || (e._gsPath = {}),
        (t = e._gsPath[s]),
        t && !t._dirty ? t : (e._gsPath[s] = zr(s)))
      : s
      ? rc(s)
        ? zr(s)
        : ic(s[0])
        ? [s]
        : s
      : console.warn("Expecting a <path> element or an SVG path data string");
  }
  function Bn(s) {
    var e = 0,
      t;
    for (s.reverse(); e < s.length; e += 2)
      (t = s[e]), (s[e] = s[e + 1]), (s[e + 1] = t);
    s.reversed = !s.reversed;
  }
  var md = function (e, t) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
        i = [].slice.call(e.attributes),
        n = i.length,
        o;
      for (t = "," + t + ","; --n > -1; )
        (o = i[n].nodeName.toLowerCase()),
          t.indexOf("," + o + ",") < 0 &&
            r.setAttributeNS(null, o, i[n].nodeValue);
      return r;
    },
    yd = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2",
    },
    vd = function (e, t) {
      for (var r = t ? t.split(",") : [], i = {}, n = r.length; --n > -1; )
        i[r[n]] = +e.getAttribute(r[n]) || 0;
      return i;
    };
  function sc(s, e) {
    var t = s.tagName.toLowerCase(),
      r = 0.552284749831,
      i,
      n,
      o,
      a,
      u,
      l,
      c,
      p,
      f,
      h,
      g,
      d,
      _,
      D,
      y,
      v,
      m,
      x,
      E,
      C,
      T,
      S;
    return t === "path" || !s.getBBox
      ? s
      : ((l = md(s, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
        (S = vd(s, yd[t])),
        t === "rect"
          ? ((a = S.rx),
            (u = S.ry || a),
            (n = S.x),
            (o = S.y),
            (h = S.width - a * 2),
            (g = S.height - u * 2),
            a || u
              ? ((d = n + a * (1 - r)),
                (_ = n + a),
                (D = _ + h),
                (y = D + a * r),
                (v = D + a),
                (m = o + u * (1 - r)),
                (x = o + u),
                (E = x + g),
                (C = E + u * r),
                (T = E + u),
                (i =
                  "M" +
                  v +
                  "," +
                  x +
                  " V" +
                  E +
                  " C" +
                  [
                    v,
                    C,
                    y,
                    T,
                    D,
                    T,
                    D - (D - _) / 3,
                    T,
                    _ + (D - _) / 3,
                    T,
                    _,
                    T,
                    d,
                    T,
                    n,
                    C,
                    n,
                    E,
                    n,
                    E - (E - x) / 3,
                    n,
                    x + (E - x) / 3,
                    n,
                    x,
                    n,
                    m,
                    d,
                    o,
                    _,
                    o,
                    _ + (D - _) / 3,
                    o,
                    D - (D - _) / 3,
                    o,
                    D,
                    o,
                    y,
                    o,
                    v,
                    m,
                    v,
                    x,
                  ].join(",") +
                  "z"))
              : (i =
                  "M" +
                  (n + h) +
                  "," +
                  o +
                  " v" +
                  g +
                  " h" +
                  -h +
                  " v" +
                  -g +
                  " h" +
                  h +
                  "z"))
          : t === "circle" || t === "ellipse"
          ? (t === "circle"
              ? ((a = u = S.r), (p = a * r))
              : ((a = S.rx), (u = S.ry), (p = u * r)),
            (n = S.cx),
            (o = S.cy),
            (c = a * r),
            (i =
              "M" +
              (n + a) +
              "," +
              o +
              " C" +
              [
                n + a,
                o + p,
                n + c,
                o + u,
                n,
                o + u,
                n - c,
                o + u,
                n - a,
                o + p,
                n - a,
                o,
                n - a,
                o - p,
                n - c,
                o - u,
                n,
                o - u,
                n + c,
                o - u,
                n + a,
                o - p,
                n + a,
                o,
              ].join(",") +
              "z"))
          : t === "line"
          ? (i = "M" + S.x1 + "," + S.y1 + " L" + S.x2 + "," + S.y2)
          : (t === "polyline" || t === "polygon") &&
            ((f = (s.getAttribute("points") + "").match(dd) || []),
            (n = f.shift()),
            (o = f.shift()),
            (i = "M" + n + "," + o + " L" + f.join(",")),
            t === "polygon" && (i += "," + n + "," + o + "z")),
        l.setAttribute("d", Wi((l._gsRawPath = zr(i)))),
        e &&
          s.parentNode &&
          (s.parentNode.insertBefore(l, s), s.parentNode.removeChild(s)),
        l);
  }
  function wd(s, e, t, r, i, n, o, a, u) {
    if (!(s === a && e === u)) {
      (t = Rn(t)), (r = Rn(r));
      var l = (i % 360) * gd,
        c = zs(l),
        p = Ns(l),
        f = Math.PI,
        h = f * 2,
        g = (s - a) / 2,
        d = (e - u) / 2,
        _ = c * g + p * d,
        D = -p * g + c * d,
        y = _ * _,
        v = D * D,
        m = y / (t * t) + v / (r * r);
      m > 1 && ((t = Ln(m) * t), (r = Ln(m) * r));
      var x = t * t,
        E = r * r,
        C = (x * E - x * v - E * y) / (x * v + E * y);
      C < 0 && (C = 0);
      var T = (n === o ? -1 : 1) * Ln(C),
        S = T * ((t * D) / r),
        b = T * -((r * _) / t),
        M = (s + a) / 2,
        A = (e + u) / 2,
        B = M + (c * S - p * b),
        k = A + (p * S + c * b),
        L = (_ - S) / t,
        O = (D - b) / r,
        R = (-_ - S) / t,
        I = (-D - b) / r,
        F = L * L + O * O,
        w = (O < 0 ? -1 : 1) * Math.acos(L / Ln(F)),
        X =
          (L * I - O * R < 0 ? -1 : 1) *
          Math.acos((L * R + O * I) / Ln(F * (R * R + I * I)));
      isNaN(X) && (X = f),
        !o && X > 0 ? (X -= h) : o && X < 0 && (X += h),
        (w %= h),
        (X %= h);
      var ie = Math.ceil(Rn(X) / (h / 4)),
        he = [],
        J = X / ie,
        U = ((4 / 3) * Ns(J / 2)) / (1 + zs(J / 2)),
        Pe = c * t,
        ne = p * t,
        Ye = p * -r,
        Ne = c * r,
        me;
      for (me = 0; me < ie; me++)
        (i = w + me * J),
          (_ = zs(i)),
          (D = Ns(i)),
          (L = zs((i += J))),
          (O = Ns(i)),
          he.push(_ - U * D, D + U * _, L + U * O, O - U * L, L, O);
      for (me = 0; me < he.length; me += 2)
        (_ = he[me]),
          (D = he[me + 1]),
          (he[me] = _ * Pe + D * Ye + B),
          (he[me + 1] = _ * ne + D * Ne + k);
      return (he[me - 2] = a), (he[me - 1] = u), he;
    }
  }
  function zr(s) {
    var e =
        (s + "")
          .replace(pd, function (S) {
            var b = +S;
            return b < 1e-4 && b > -1e-4 ? 0 : b;
          })
          .match(hd) || [],
      t = [],
      r = 0,
      i = 0,
      n = 2 / 3,
      o = e.length,
      a = 0,
      u = "ERROR: malformed path: " + s,
      l,
      c,
      p,
      f,
      h,
      g,
      d,
      _,
      D,
      y,
      v,
      m,
      x,
      E,
      C,
      T = function (b, M, A, B) {
        (y = (A - b) / 3),
          (v = (B - M) / 3),
          d.push(b + y, M + v, A - y, B - v, A, B);
      };
    if (!s || !isNaN(e[0]) || isNaN(e[1])) return console.log(u), t;
    for (l = 0; l < o; l++)
      if (
        ((x = h),
        isNaN(e[l]) ? ((h = e[l].toUpperCase()), (g = h !== e[l])) : l--,
        (p = +e[l + 1]),
        (f = +e[l + 2]),
        g && ((p += r), (f += i)),
        l || ((_ = p), (D = f)),
        h === "M")
      )
        d && (d.length < 8 ? (t.length -= 1) : (a += d.length)),
          (r = _ = p),
          (i = D = f),
          (d = [p, f]),
          t.push(d),
          (l += 2),
          (h = "L");
      else if (h === "C")
        d || (d = [0, 0]),
          g || (r = i = 0),
          d.push(
            p,
            f,
            r + e[l + 3] * 1,
            i + e[l + 4] * 1,
            (r += e[l + 5] * 1),
            (i += e[l + 6] * 1)
          ),
          (l += 6);
      else if (h === "S")
        (y = r),
          (v = i),
          (x === "C" || x === "S") &&
            ((y += r - d[d.length - 4]), (v += i - d[d.length - 3])),
          g || (r = i = 0),
          d.push(y, v, p, f, (r += e[l + 3] * 1), (i += e[l + 4] * 1)),
          (l += 4);
      else if (h === "Q")
        (y = r + (p - r) * n),
          (v = i + (f - i) * n),
          g || (r = i = 0),
          (r += e[l + 3] * 1),
          (i += e[l + 4] * 1),
          d.push(y, v, r + (p - r) * n, i + (f - i) * n, r, i),
          (l += 4);
      else if (h === "T")
        (y = r - d[d.length - 4]),
          (v = i - d[d.length - 3]),
          d.push(
            r + y,
            i + v,
            p + (r + y * 1.5 - p) * n,
            f + (i + v * 1.5 - f) * n,
            (r = p),
            (i = f)
          ),
          (l += 2);
      else if (h === "H") T(r, i, (r = p), i), (l += 1);
      else if (h === "V") T(r, i, r, (i = p + (g ? i - r : 0))), (l += 1);
      else if (h === "L" || h === "Z")
        h === "Z" && ((p = _), (f = D), (d.closed = !0)),
          (h === "L" || Rn(r - p) > 0.5 || Rn(i - f) > 0.5) &&
            (T(r, i, p, f), h === "L" && (l += 2)),
          (r = p),
          (i = f);
      else if (h === "A") {
        if (
          ((E = e[l + 4]),
          (C = e[l + 5]),
          (y = e[l + 6]),
          (v = e[l + 7]),
          (c = 7),
          E.length > 1 &&
            (E.length < 3
              ? ((v = y), (y = C), c--)
              : ((v = C), (y = E.substr(2)), (c -= 2)),
            (C = E.charAt(1)),
            (E = E.charAt(0))),
          (m = wd(
            r,
            i,
            +e[l + 1],
            +e[l + 2],
            +e[l + 3],
            +E,
            +C,
            (g ? r : 0) + y * 1,
            (g ? i : 0) + v * 1
          )),
          (l += c),
          m)
        )
          for (c = 0; c < m.length; c++) d.push(m[c]);
        (r = d[d.length - 2]), (i = d[d.length - 1]);
      } else console.log(u);
    return (
      (l = d.length),
      l < 6
        ? (t.pop(), (l = 0))
        : d[0] === d[l - 2] && d[1] === d[l - 1] && (d.closed = !0),
      (t.totalPoints = a + l),
      t
    );
  }
  function Wi(s) {
    ic(s[0]) && (s = [s]);
    var e = "",
      t = s.length,
      r,
      i,
      n,
      o;
    for (i = 0; i < t; i++) {
      for (
        o = s[i],
          e += "M" + Nr(o[0]) + "," + Nr(o[1]) + " C",
          r = o.length,
          n = 2;
        n < r;
        n++
      )
        e +=
          Nr(o[n++]) +
          "," +
          Nr(o[n++]) +
          " " +
          Nr(o[n++]) +
          "," +
          Nr(o[n++]) +
          " " +
          Nr(o[n++]) +
          "," +
          Nr(o[n]) +
          " ";
      o.closed && (e += "z");
    }
    return e;
  }
  /*!
   * MorphSVGPlugin 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var zt,
    pa,
    Nn,
    oc,
    zn,
    ac = function () {
      return (
        zt ||
        (typeof window < "u" && (zt = window.gsap) && zt.registerPlugin && zt)
      );
    },
    _a = function (e) {
      return typeof e == "function";
    },
    hi = Math.atan2,
    uc = Math.cos,
    lc = Math.sin,
    dr = Math.sqrt,
    Is = Math.PI,
    cc = Is * 2,
    xd = Is * 0.3,
    Cd = Is * 0.7,
    fc = 1e20,
    In = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    bd = /(^[#\.][a-z]|[a-y][a-z])/i,
    Ed = /[achlmqstvz]/i,
    Ir = function (e) {
      return console && console.warn(e);
    },
    Sd = 1,
    hc = function (e) {
      var t = e.length,
        r = 0,
        i = 0,
        n;
      for (n = 0; n < t; n++) (r += e[n++]), (i += e[n]);
      return [r / (t / 2), i / (t / 2)];
    },
    Xi = function (e) {
      var t = e.length,
        r = e[0],
        i = r,
        n = e[1],
        o = n,
        a,
        u,
        l;
      for (l = 6; l < t; l += 6)
        (a = e[l]),
          (u = e[l + 1]),
          a > r ? (r = a) : a < i && (i = a),
          u > n ? (n = u) : u < o && (o = u);
      return (
        (e.centerX = (r + i) / 2),
        (e.centerY = (n + o) / 2),
        (e.size = (r - i) * (n - o))
      );
    },
    qn = function (e, t) {
      t === void 0 && (t = 3);
      for (
        var r = e.length,
          i = e[0][0],
          n = i,
          o = e[0][1],
          a = o,
          u = 1 / t,
          l,
          c,
          p,
          f,
          h,
          g,
          d,
          _,
          D,
          y,
          v,
          m,
          x,
          E,
          C,
          T;
        --r > -1;

      )
        for (h = e[r], l = h.length, f = 6; f < l; f += 6)
          for (
            D = h[f],
              y = h[f + 1],
              v = h[f + 2] - D,
              E = h[f + 3] - y,
              m = h[f + 4] - D,
              C = h[f + 5] - y,
              x = h[f + 6] - D,
              T = h[f + 7] - y,
              g = t;
            --g > -1;

          )
            (d = u * g),
              (_ = 1 - d),
              (c = (d * d * x + 3 * _ * (d * m + _ * v)) * d + D),
              (p = (d * d * T + 3 * _ * (d * C + _ * E)) * d + y),
              c > i ? (i = c) : c < n && (n = c),
              p > o ? (o = p) : p < a && (a = p);
      return (
        (e.centerX = (i + n) / 2),
        (e.centerY = (o + a) / 2),
        (e.left = n),
        (e.width = i - n),
        (e.top = a),
        (e.height = o - a),
        (e.size = (i - n) * (o - a))
      );
    },
    Td = function (e, t) {
      return t.length - e.length;
    },
    dc = function (e, t) {
      var r = e.size || Xi(e),
        i = t.size || Xi(t);
      return Math.abs(i - r) < (r + i) / 20
        ? t.centerX - e.centerX || t.centerY - e.centerY
        : i - r;
    },
    pc = function (e, t) {
      var r = e.slice(0),
        i = e.length,
        n = i - 2,
        o,
        a;
      for (t = t | 0, o = 0; o < i; o++)
        (a = (o + t) % n), (e[o++] = r[a]), (e[o] = r[a + 1]);
    },
    ga = function (e, t, r, i, n) {
      var o = e.length,
        a = 0,
        u = o - 2,
        l,
        c,
        p,
        f;
      for (r *= 6, c = 0; c < o; c += 6)
        (l = (c + r) % u),
          (f = e[l] - (t[c] - i)),
          (p = e[l + 1] - (t[c + 1] - n)),
          (a += dr(p * p + f * f));
      return a;
    },
    Fd = function (e, t, r) {
      var i = e.length,
        n = hc(e),
        o = hc(t),
        a = o[0] - n[0],
        u = o[1] - n[1],
        l = ga(e, t, 0, a, u),
        c = 0,
        p,
        f,
        h;
      for (h = 6; h < i; h += 6)
        (f = ga(e, t, h / 6, a, u)), f < l && ((l = f), (c = h));
      if (r)
        for (p = e.slice(0), Bn(p), h = 6; h < i; h += 6)
          (f = ga(p, t, h / 6, a, u)), f < l && ((l = f), (c = -h));
      return c / 6;
    },
    Pd = function (e, t, r) {
      for (var i = e.length, n = fc, o = 0, a = 0, u, l, c, p, f, h; --i > -1; )
        for (u = e[i], h = u.length, f = 0; f < h; f += 6)
          (l = u[f] - t),
            (c = u[f + 1] - r),
            (p = dr(l * l + c * c)),
            p < n && ((n = p), (o = u[f]), (a = u[f + 1]));
      return [o, a];
    },
    Ad = function (e, t, r, i, n, o) {
      var a = t.length,
        u = 0,
        l = Math.min(e.size || Xi(e), t[r].size || Xi(t[r])) * i,
        c = fc,
        p = e.centerX + n,
        f = e.centerY + o,
        h,
        g,
        d,
        _,
        D;
      for (g = r; g < a && ((h = t[g].size || Xi(t[g])), !(h < l)); g++)
        (d = t[g].centerX - p),
          (_ = t[g].centerY - f),
          (D = dr(d * d + _ * _)),
          D < c && ((u = g), (c = D));
      return (D = t[u]), t.splice(u, 1), D;
    },
    Da = function (e, t) {
      var r = 0,
        i = 0.999999,
        n = e.length,
        o = t / ((n - 2) / 6),
        a,
        u,
        l,
        c,
        p,
        f,
        h,
        g,
        d,
        _,
        D,
        y,
        v,
        m;
      for (v = 2; v < n; v += 6)
        for (r += o; r > i; )
          (a = e[v - 2]),
            (u = e[v - 1]),
            (l = e[v]),
            (c = e[v + 1]),
            (p = e[v + 2]),
            (f = e[v + 3]),
            (h = e[v + 4]),
            (g = e[v + 5]),
            (m = 1 / ((Math.floor(r) || 1) + 1)),
            (d = a + (l - a) * m),
            (D = l + (p - l) * m),
            (d += (D - d) * m),
            (D += (p + (h - p) * m - D) * m),
            (_ = u + (c - u) * m),
            (y = c + (f - c) * m),
            (_ += (y - _) * m),
            (y += (f + (g - f) * m - y) * m),
            e.splice(
              v,
              4,
              a + (l - a) * m,
              u + (c - u) * m,
              d,
              _,
              d + (D - d) * m,
              _ + (y - _) * m,
              D,
              y,
              p + (h - p) * m,
              f + (g - f) * m
            ),
            (v += 6),
            (n += 6),
            r--;
      return e;
    },
    ma = function (e, t, r, i, n) {
      var o = t.length - e.length,
        a = o > 0 ? t : e,
        u = o > 0 ? e : t,
        l = 0,
        c = i === "complexity" ? Td : dc,
        p = i === "position" ? 0 : typeof i == "number" ? i : 0.8,
        f = u.length,
        h = typeof r == "object" && r.push ? r.slice(0) : [r],
        g = h[0] === "reverse" || h[0] < 0,
        d = r === "log",
        _,
        D,
        y,
        v,
        m,
        x,
        E;
      if (u[0]) {
        if (
          a.length > 1 &&
          (e.sort(c),
          t.sort(c),
          (x = a.size || qn(a)),
          (x = u.size || qn(u)),
          (x = a.centerX - u.centerX),
          (E = a.centerY - u.centerY),
          c === dc)
        )
          for (f = 0; f < u.length; f++)
            a.splice(f, 0, Ad(u[f], a, f, p, x, E));
        if (o)
          for (
            o < 0 && (o = -o),
              a[0].length > u[0].length &&
                Da(u[0], ((a[0].length - u[0].length) / 6) | 0),
              f = u.length;
            l < o;

          )
            (v = a[f].size || Xi(a[f])),
              (y = Pd(u, a[f].centerX, a[f].centerY)),
              (v = y[0]),
              (m = y[1]),
              (u[f++] = [v, m, v, m, v, m, v, m]),
              (u.totalPoints += 8),
              l++;
        for (f = 0; f < e.length; f++)
          (_ = t[f]),
            (D = e[f]),
            (o = _.length - D.length),
            o < 0 ? Da(_, (-o / 6) | 0) : o > 0 && Da(D, (o / 6) | 0),
            g && n !== !1 && !D.reversed && Bn(D),
            (r = h[f] || h[f] === 0 ? h[f] : "auto"),
            r &&
              (D.closed ||
              (Math.abs(D[0] - D[D.length - 2]) < 0.5 &&
                Math.abs(D[1] - D[D.length - 1]) < 0.5)
                ? r === "auto" || r === "log"
                  ? ((h[f] = r = Fd(D, _, !f || n === !1)),
                    r < 0 && ((g = !0), Bn(D), (r = -r)),
                    pc(D, r * 6))
                  : r !== "reverse" &&
                    (f && r < 0 && Bn(D), pc(D, (r < 0 ? -r : r) * 6))
                : !g &&
                  ((r === "auto" &&
                    Math.abs(_[0] - D[0]) +
                      Math.abs(_[1] - D[1]) +
                      Math.abs(_[_.length - 2] - D[D.length - 2]) +
                      Math.abs(_[_.length - 1] - D[D.length - 1]) >
                      Math.abs(_[0] - D[D.length - 2]) +
                        Math.abs(_[1] - D[D.length - 1]) +
                        Math.abs(_[_.length - 2] - D[0]) +
                        Math.abs(_[_.length - 1] - D[1])) ||
                    r % 2)
                ? (Bn(D), (h[f] = -1), (g = !0))
                : r === "auto"
                ? (h[f] = 0)
                : r === "reverse" && (h[f] = -1),
              D.closed !== _.closed && (D.closed = _.closed = !1));
        return (
          d && Ir("shapeIndex:[" + h.join(",") + "]"), (e.shapeIndex = h), h
        );
      }
    },
    _c = function (e, t, r, i, n) {
      var o = zr(e[0]),
        a = zr(e[1]);
      ma(o, a, t || t === 0 ? t : "auto", r, n) &&
        ((e[0] = Wi(o)),
        (e[1] = Wi(a)),
        (i === "log" || i === !0) &&
          Ir('precompile:["' + e[0] + '","' + e[1] + '"]'));
    },
    kd = function (e, t) {
      if (!t) return e;
      var r = e.match(In) || [],
        i = r.length,
        n = "",
        o,
        a,
        u;
      for (
        t === "reverse"
          ? ((a = i - 1), (o = -2))
          : ((a = ((parseInt(t, 10) || 0) * 2 + 1 + i * 100) % i), (o = 2)),
          u = 0;
        u < i;
        u += 2
      )
        (n += r[a - 1] + "," + r[a] + " "), (a = (a + o) % i);
      return n;
    },
    gc = function (e, t) {
      var r = 0,
        i = parseFloat(e[0]),
        n = parseFloat(e[1]),
        o = i + "," + n + " ",
        a = 0.999999,
        u,
        l,
        c,
        p,
        f,
        h,
        g;
      for (
        c = e.length, u = (t * 0.5) / (c * 0.5 - 1), l = 0;
        l < c - 2;
        l += 2
      ) {
        if (
          ((r += u),
          (h = parseFloat(e[l + 2])),
          (g = parseFloat(e[l + 3])),
          r > a)
        )
          for (f = 1 / (Math.floor(r) + 1), p = 1; r > a; )
            (o +=
              (i + (h - i) * f * p).toFixed(2) +
              "," +
              (n + (g - n) * f * p).toFixed(2) +
              " "),
              r--,
              p++;
        (o += h + "," + g + " "), (i = h), (n = g);
      }
      return o;
    },
    ya = function (e) {
      var t = e[0].match(In) || [],
        r = e[1].match(In) || [],
        i = r.length - t.length;
      i > 0 ? (e[0] = gc(t, i)) : (e[1] = gc(r, -i));
    },
    Od = function (e) {
      return isNaN(e)
        ? ya
        : function (t) {
            ya(t), (t[1] = kd(t[1], parseInt(e, 10)));
          };
    },
    Md = function (e, t, r) {
      var i = typeof e == "string",
        n,
        o;
      return (
        (!i || bd.test(e) || (e.match(In) || []).length < 3) &&
          ((n = pa(e)[0]),
          n
            ? ((o = (n.nodeName + "").toUpperCase()),
              t && o !== "PATH" && ((n = sc(n, !1)), (o = "PATH")),
              (e = n.getAttribute(o === "PATH" ? "d" : "points") || ""),
              n === r && (e = n.getAttributeNS(null, "data-original") || e))
            : (Ir("WARNING: invalid morph to: " + e), (e = !1))),
        e
      );
    },
    Dc = function (e, t) {
      for (
        var r = e.length,
          i = 0.2 * (t || 1),
          n,
          o,
          a,
          u,
          l,
          c,
          p,
          f,
          h,
          g,
          d,
          _;
        --r > -1;

      ) {
        for (
          o = e[r],
            d = o.isSmooth = o.isSmooth || [0, 0, 0, 0],
            _ = o.smoothData = o.smoothData || [0, 0, 0, 0],
            d.length = 4,
            f = o.length - 2,
            p = 6;
          p < f;
          p += 6
        )
          (a = o[p] - o[p - 2]),
            (u = o[p + 1] - o[p - 1]),
            (l = o[p + 2] - o[p]),
            (c = o[p + 3] - o[p + 1]),
            (h = hi(u, a)),
            (g = hi(c, l)),
            (n = Math.abs(h - g) < i),
            n &&
              ((_[p - 2] = h),
              (_[p + 2] = g),
              (_[p - 1] = dr(a * a + u * u)),
              (_[p + 3] = dr(l * l + c * c))),
            d.push(n, n, 0, 0, n, n);
        o[f] === o[0] &&
          o[f + 1] === o[1] &&
          ((a = o[0] - o[f - 2]),
          (u = o[1] - o[f - 1]),
          (l = o[2] - o[0]),
          (c = o[3] - o[1]),
          (h = hi(u, a)),
          (g = hi(c, l)),
          Math.abs(h - g) < i &&
            ((_[f - 2] = h),
            (_[2] = g),
            (_[f - 1] = dr(a * a + u * u)),
            (_[3] = dr(l * l + c * c)),
            (d[f - 2] = d[f - 1] = !0)));
      }
      return e;
    },
    mc = function (e) {
      var t = e.trim().split(" "),
        r = ~e.indexOf("left")
          ? 0
          : ~e.indexOf("right")
          ? 100
          : isNaN(parseFloat(t[0]))
          ? 50
          : parseFloat(t[0]),
        i = ~e.indexOf("top")
          ? 0
          : ~e.indexOf("bottom")
          ? 100
          : isNaN(parseFloat(t[1]))
          ? 50
          : parseFloat(t[1]);
      return { x: r / 100, y: i / 100 };
    },
    Rd = function (e) {
      return e !== e % Is ? e + (e < 0 ? cc : -cc) : e;
    },
    yc =
      "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    Ld = function (e, t, r, i) {
      var n = this._origin,
        o = this._eOrigin,
        a = e[r] - n.x,
        u = e[r + 1] - n.y,
        l = dr(a * a + u * u),
        c = hi(u, a),
        p,
        f;
      return (
        (a = t[r] - o.x),
        (u = t[r + 1] - o.y),
        (p = hi(u, a) - c),
        (f = Rd(p)),
        !i && Nn && Math.abs(f + Nn.ca) < xd && (i = Nn),
        (this._anchorPT = Nn =
          {
            _next: this._anchorPT,
            t: e,
            sa: c,
            ca: i && f * i.ca < 0 && Math.abs(f) > Cd ? p : f,
            sl: l,
            cl: dr(a * a + u * u) - l,
            i: r,
          })
      );
    },
    vc = function (e) {
      (zt = ac()),
        (zn = zn || (zt && zt.plugins.morphSVG)),
        zt && zn
          ? ((pa = zt.utils.toArray),
            (zn.prototype._tweenRotation = Ld),
            (oc = 1))
          : e && Ir("Please gsap.registerPlugin(MorphSVGPlugin)");
    },
    $i = {
      version: "3.12.7",
      name: "morphSVG",
      rawVars: 1,
      register: function (e, t) {
        (zt = e), (zn = t), vc();
      },
      init: function (e, t, r, i, n) {
        if ((oc || vc(1), !t)) return Ir("invalid shape"), !1;
        _a(t) && (t = t.call(r, i, e, n));
        var o, a, u, l, c, p, f, h, g, d, _, D, y, v, m, x, E, C, T, S, b, M;
        if (typeof t == "string" || t.getBBox || t[0]) t = { shape: t };
        else if (typeof t == "object") {
          o = {};
          for (a in t)
            o[a] = _a(t[a]) && a !== "render" ? t[a].call(r, i, e, n) : t[a];
          t = o;
        }
        var A = e.nodeType ? window.getComputedStyle(e) : {},
          B = A.fill + "",
          k = !(
            B === "none" ||
            (B.match(In) || [])[3] === "0" ||
            A.fillRule === "evenodd"
          ),
          L = (t.origin || "50 50").split(",");
        if (
          ((o = (e.nodeName + "").toUpperCase()),
          (c = o === "POLYLINE" || o === "POLYGON"),
          o !== "PATH" && !c && !t.prop)
        )
          return Ir("Cannot morph a <" + o + "> element. " + yc), !1;
        if (
          ((a = o === "PATH" ? "d" : "points"), !t.prop && !_a(e.setAttribute))
        )
          return !1;
        if (
          ((l = Md(t.shape || t.d || t.points || "", a === "d", e)),
          c && Ed.test(l))
        )
          return Ir("A <" + o + "> cannot accept path data. " + yc), !1;
        if (
          ((p = t.shapeIndex || t.shapeIndex === 0 ? t.shapeIndex : "auto"),
          (f = t.map || $i.defaultMap),
          (this._prop = t.prop),
          (this._render = t.render || $i.defaultRender),
          (this._apply =
            "updateTarget" in t ? t.updateTarget : $i.defaultUpdateTarget),
          (this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision)),
          (this._tween = r),
          l)
        ) {
          if (
            ((this._target = e),
            (E = typeof t.precompile == "object"),
            (d = this._prop ? e[this._prop] : e.getAttribute(a)),
            !this._prop &&
              !e.getAttributeNS(null, "data-original") &&
              e.setAttributeNS(null, "data-original", d),
            a === "d" || this._prop)
          ) {
            if (
              ((d = zr(E ? t.precompile[0] : d)),
              (_ = zr(E ? t.precompile[1] : l)),
              !E && !ma(d, _, p, f, k))
            )
              return !1;
            for (
              (t.precompile === "log" || t.precompile === !0) &&
                Ir('precompile:["' + Wi(d) + '","' + Wi(_) + '"]'),
                b = (t.type || $i.defaultType) !== "linear",
                b &&
                  ((d = Dc(d, t.smoothTolerance)),
                  (_ = Dc(_, t.smoothTolerance)),
                  d.size || qn(d),
                  _.size || qn(_),
                  (S = mc(L[0])),
                  (this._origin = d.origin =
                    { x: d.left + S.x * d.width, y: d.top + S.y * d.height }),
                  L[1] && (S = mc(L[1])),
                  (this._eOrigin = {
                    x: _.left + S.x * _.width,
                    y: _.top + S.y * _.height,
                  })),
                this._rawPath = e._gsRawPath = d,
                y = d.length;
              --y > -1;

            )
              for (
                m = d[y],
                  x = _[y],
                  h = m.isSmooth || [],
                  g = x.isSmooth || [],
                  v = m.length,
                  Nn = 0,
                  D = 0;
                D < v;
                D += 2
              )
                (x[D] !== m[D] || x[D + 1] !== m[D + 1]) &&
                  (b
                    ? h[D] && g[D]
                      ? ((C = m.smoothData),
                        (T = x.smoothData),
                        (M = D + (D === v - 4 ? 7 - v : 5)),
                        (this._controlPT = {
                          _next: this._controlPT,
                          i: D,
                          j: y,
                          l1s: C[D + 1],
                          l1c: T[D + 1] - C[D + 1],
                          l2s: C[M],
                          l2c: T[M] - C[M],
                        }),
                        (u = this._tweenRotation(m, x, D + 2)),
                        this._tweenRotation(m, x, D, u),
                        this._tweenRotation(m, x, M - 1, u),
                        (D += 4))
                      : this._tweenRotation(m, x, D)
                    : ((u = this.add(m, D, m[D], x[D], 0, 0, 0, 0, 0, 1)),
                      (u =
                        this.add(
                          m,
                          D + 1,
                          m[D + 1],
                          x[D + 1],
                          0,
                          0,
                          0,
                          0,
                          0,
                          1
                        ) || u)));
          } else
            u = this.add(
              e,
              "setAttribute",
              e.getAttribute(a) + "",
              l + "",
              i,
              n,
              0,
              Od(p),
              a
            );
          b &&
            (this.add(
              this._origin,
              "x",
              this._origin.x,
              this._eOrigin.x,
              0,
              0,
              0,
              0,
              0,
              1
            ),
            (u = this.add(
              this._origin,
              "y",
              this._origin.y,
              this._eOrigin.y,
              0,
              0,
              0,
              0,
              0,
              1
            ))),
            u && (this._props.push("morphSVG"), (u.end = l), (u.endProp = a));
        }
        return Sd;
      },
      render: function (e, t) {
        for (
          var r = t._rawPath,
            i = t._controlPT,
            n = t._anchorPT,
            o = t._rnd,
            a = t._target,
            u = t._pt,
            l,
            c,
            p,
            f,
            h,
            g,
            d,
            _,
            D,
            y,
            v,
            m,
            x;
          u;

        )
          u.r(e, u.d), (u = u._next);
        if (e === 1 && t._apply)
          for (u = t._pt; u; )
            u.end &&
              (t._prop
                ? (a[t._prop] = u.end)
                : a.setAttribute(u.endProp, u.end)),
              (u = u._next);
        else if (r) {
          for (; n; )
            (g = n.sa + e * n.ca),
              (h = n.sl + e * n.cl),
              (n.t[n.i] = t._origin.x + uc(g) * h),
              (n.t[n.i + 1] = t._origin.y + lc(g) * h),
              (n = n._next);
          for (p = e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1; i; )
            (d = i.i),
              (f = r[i.j]),
              (x = d + (d === f.length - 4 ? 7 - f.length : 5)),
              (g = hi(f[x] - f[d + 1], f[x - 1] - f[d])),
              (v = lc(g)),
              (m = uc(g)),
              (D = f[d + 2]),
              (y = f[d + 3]),
              (h = i.l1s + p * i.l1c),
              (f[d] = D - m * h),
              (f[d + 1] = y - v * h),
              (h = i.l2s + p * i.l2c),
              (f[x - 1] = D + m * h),
              (f[x] = y + v * h),
              (i = i._next);
          if (((a._gsRawPath = r), t._apply)) {
            for (l = "", c = " ", _ = 0; _ < r.length; _++)
              for (
                f = r[_],
                  h = f.length,
                  l +=
                    "M" +
                    ((f[0] * o) | 0) / o +
                    c +
                    ((f[1] * o) | 0) / o +
                    " C",
                  d = 2;
                d < h;
                d++
              )
                l += ((f[d] * o) | 0) / o + c;
            t._prop ? (a[t._prop] = l) : a.setAttribute("d", l);
          }
        }
        t._render && r && t._render.call(t._tween, r, a);
      },
      kill: function (e) {
        this._pt = this._rawPath = 0;
      },
      getRawPath: Dd,
      stringToRawPath: zr,
      rawPathToString: Wi,
      normalizeStrings: function (e, t, r) {
        var i = r.shapeIndex,
          n = r.map,
          o = [e, t];
        return _c(o, i, n), o;
      },
      pathFilter: _c,
      pointsFilter: ya,
      getTotalSize: qn,
      equalizeSegmentQuantity: ma,
      convertToPath: function (e, t) {
        return pa(e).map(function (r) {
          return sc(r, t !== !1);
        });
      },
      defaultType: "linear",
      defaultUpdateTarget: !0,
      defaultMap: "size",
    };
  ac() && zt.registerPlugin($i),
    q.defaults({ ease: "power2.inOut", duration: 0.3 });
  async function Bd() {
    const s = document.querySelectorAll(
        "#loaderpath1, #loaderpath2, #loaderpath3"
      ),
      e = document.querySelector("#loaderpath1");
    await new Promise((t) => {
      const r = () => {
        e.removeEventListener("animationiteration", r), t();
      };
      e.addEventListener("animationiteration", r);
    }),
      s.forEach((t) => {
        (t.style.animation = "none"), (t.style.opacity = "1");
      });
  }
  const Nd = async () => {
    q.registerPlugin($i);
    const s = document.querySelector("body");
    s.style.overflow = "hidden";
    let e = q.timeline();
    pr.scrollTo(0, 0), await Bd();
    const t = document.querySelector(".loader_wrapper"),
      r = t.querySelector("#loaderpath1"),
      i = t.querySelector("#loaderpath2"),
      n = t.querySelector("#loaderpath3"),
      o = t.querySelector("#loaderpath4"),
      a =
        "M22.9877 25.921H29.2188C30.2276 25.921 31.2068 25.7577 32.1563 25.4311C33.1058 25.1045 33.9514 24.57 34.6932 23.8277C35.435 23.0557 36.0284 22.0611 36.4735 20.8437C36.9186 19.6263 37.1411 18.1417 37.1411 16.3899C37.1411 14.7866 36.9779 13.3465 36.6515 12.0697C36.3548 10.7633 35.8504 9.64986 35.1383 8.72941C34.4262 7.80896 33.4767 7.11121 32.2898 6.63614C31.1326 6.13137 29.6935 5.87899 27.9726 5.87899H22.9877V25.921ZM16 0H29.7083C31.7557 0 33.6547 0.326611 35.4053 0.979832C37.1856 1.63305 38.7137 2.61289 39.9896 3.91933C41.2952 5.22577 42.304 6.85882 43.0161 8.81849C43.7579 10.7782 44.1288 13.0793 44.1288 15.7218C44.1288 18.0378 43.8321 20.1756 43.2387 22.1353C42.6452 24.095 41.7402 25.7874 40.5237 27.2126C39.3368 28.6378 37.8384 29.7661 36.0284 30.5975C34.2481 31.3992 32.1414 31.8 29.7083 31.8H16V0Z",
      u = "M47.2129 0H54.2006V31.8H47.2129V0Z",
      l =
        "M66.7801 19.4185L55.1191 0H62.9525L70.3853 12.5597L77.7735 0H85.5623L73.7678 19.5966V31.8H66.7801V19.4185Z",
      c = "M87.6844 18.7884L10 18.7884L10 12.4468L87.6844 12.4468V18.7884Z";
    return (
      e.set(o, { fill: "transparent" }),
      e.to(i, {
        duration: 0.4,
        ease: "power2.in",
        delay: 0.5,
        morphSVG: { shape: u },
      }),
      e.to(r, {
        duration: 0.6,
        ease: "power2.out",
        morphSVG: { shape: a, type: "rotational", origin: "10% 10% 50% 50%" },
      }),
      e.to(
        n,
        {
          duration: 0.6,
          ease: "power2.out",
          morphSVG: { shape: l, type: "rotational", origin: "10% 10% 50% 50%" },
        },
        "<"
      ),
      e.set(o, { fill: "currentColor" }),
      e.to(o, {
        duration: 0.5,
        delay: -0.1,
        ease: "power2.inOut",
        morphSVG: { shape: c },
      }),
      e.then(() => {})
    );
  };
  var pr = Hh();
  const zd = async () => {
      kh(), tc(document), await Nd(), console.log("global init");
    },
    wc = async (s) => {
      function e(l) {
        return -(l.offsetHeight + window.innerHeight) / 2;
      }
      q.registerPlugin(Yi);
      const t = document.querySelector(".navbar"),
        r = document.querySelector(".overlay"),
        i = document.querySelector(".loader"),
        n = s.querySelector("[hero-image]"),
        o = s.querySelector(".hero_text-wrapper").firstChild;
      let a = q.timeline(),
        u = o.innerHTML;
      return (
        a.set(o, {
          y: "10rem",
          scrambleText: { text: "■■■■■■■■■■■■■■■■■■■■" },
        }),
        a.set(t, { y: "-100%" }),
        a.set(n, { opacity: 0, x: "-0vw", y: e(n), rotate: -95 }),
        a.to(i, { y: "-120vh", duration: 1, delay: 0.3, ease: "expo.inOut" }),
        a.to(o, { y: "0rem", ease: "expo.out", duration: 0.5, delay: -0.4 }),
        a.to(r, { opacity: 0 }, "<"),
        a.to(o, {
          duration: 1.5,
          ease: "expo.inOut",
          scrambleText: { text: u, chars: "■" },
        }),
        a.to(n, { y: 0, ease: "bounce.out", duration: 2, delay: -0.6 }),
        a.to(n, { opacity: 1, duration: 0.3 }, "<"),
        a.to(n, {
          x: "50vw",
          rotate: -5,
          duration: 1.3,
          ease: "linear",
          delay: -1.3,
        }),
        a.to(n, {
          rotate: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.3)",
          onComplete: () => {
            pr.start();
          },
        }),
        a.to(t, { y: "", ease: "expo.inOut", duration: 0.5, delay: 0.2 }),
        a.set([r, i], { display: "none", opacity: "", y: "" }),
        a.then(() => {})
      );
    },
    Id = (s = document) => {
      q.registerPlugin(Y);
      let e = s.querySelector("[hero-image]"),
        t = s.querySelector(".section_hero"),
        r = s.querySelector(".hero_sticky-parent"),
        i = q.timeline();
      i.set(r, {
        height: "150svh",
        onComplete: () => {
          pr.resize(), Y.update();
        },
      }),
        i.to(e, {
          rotate: 180,
          ease: "linear",
          scrollTrigger: {
            trigger: t,
            start: "0",
            end: "bottom top",
            scrub: !0,
            id: "bgImage",
          },
        });
    },
    qd = (s) => {
      console.log("home cleanup");
      let e;
      (e = Y.getById("bgImage")),
        e && e.kill(),
        (e = Y.getById("heading")),
        e && e.kill();
    };
  q.defaults({ ease: "power2.inOut", duration: 0.3 });
  const xc = document.querySelector(".navbar"),
    Hn = document.querySelector(".overlay"),
    va = document.querySelector(".loader");
  function Cc(s) {
    const e = s.getBoundingClientRect();
    return { x: e.left, y: e.top, height: e.height };
  }
  const bc = async (s) => {
    const e = q.timeline(),
      t = s.querySelectorAll("h2");
    window.getComputedStyle(va).display === "flex" &&
      e.to(va, { y: "120vh", duration: 1, delay: 0.2, ease: "expo.inOut" }),
      e.set(xc, { y: "-100%" }),
      e.set(va, { display: "none", y: "" }),
      e.set(Hn, { display: "block" }),
      t.forEach((i) => {
        const n = document.createElement("div"),
          o = document.createElement("div");
        (o.className = "heading-style-h2"),
          (o.textContent = i.textContent),
          o.setAttribute("data-animation", "h2-copy"),
          (o.style.opacity = 0),
          e.set(n, { opacity: 0, position: "fixed", top: Cc(i).y - Cc(s).y }),
          e.set(o, { opacity: 0, y: "4rem" }),
          n.appendChild(o),
          Hn.appendChild(n);
      });
    let r = Hn.querySelectorAll("[data-animation=h2-copy]");
    r.forEach((i, n) => {
      const o = i.parentElement,
        a = q.timeline(),
        u = n == 0 ? 0 : 0.05;
      e.set(o, { overflow: "hidden", opacity: 1 }),
        a.to(i, { opacity: 1, y: "", duration: 0.5, ease: "expo.inOut" }),
        a.set(o, { overflow: "", delay: 0.3 }, "<"),
        e.add(a, `+=${u}`);
    }),
      e.to(Hn, {
        opacity: 0,
        display: "none",
        onComplete: () => {
          r.forEach((i) => {
            i.remove();
          });
        },
      }),
      e.to(xc, { y: "", ease: "expo.inOut", duration: 0.5, delay: -0.2 }),
      e.to(Hn, { opacity: "" });
  };
  q.defaults({ ease: "power2.inOut", duration: 0.3 });
  const Vi = document.querySelector(".overlay"),
    wa = Vi.querySelector(".loader"),
    qs = document.querySelector(".navbar"),
    Hs = async () => {
      let s = q.timeline();
      return (
        s.set(wa, { opacity: 1, display: "flex" }),
        s.set(Vi, { y: "-120vh", display: "block" }),
        s.to(qs, { y: "-100%", ease: "expo.inOut", duration: 0.5 }),
        s.to(Vi, { y: "", duration: 1, delay: -0.4, ease: "expo.inOut" }),
        s.to(wa, { opacity: 1 }),
        s.set(qs, { y: "" }),
        s.then(() => {})
      );
    },
    xa = async () => {
      let s = q.timeline();
      return (
        s.set(Vi, { y: "", display: "block" }),
        s.set(qs, { y: "-100%" }),
        s.to(Vi, { y: "100vh", duration: 1, ease: "expo.inOut", delay: 0.3 }),
        s.to(qs, { y: "", ease: "expo.inOut", duration: 0.5, delay: -0.2 }),
        s.set(wa, { display: "none", opacity: "" }),
        s.set(Vi, { opacity: 1, y: "", display: "none" }),
        s.then(() => {})
      );
    },
    Hd = async (s, e) => {
      const t = [...s.querySelectorAll("a")].find(
        (r) => r.getAttribute("href") === e
      );
      t &&
        (pr.stop(),
        ql(s),
        q.to(t, { x: "-100vw", duration: 0.75, ease: "expo.inOut" })),
        await Hs();
    },
    Ec = async (s) => {
      q.registerPlugin(Y);
      const e = s.next.container,
        t = q.timeline();
      let r = e.querySelectorAll(".project-assets_asset-wrapper"),
        i = e.querySelector("[cover-image-mobile]");
      return (
        window.innerWidth < 768 &&
          (i = e.querySelector("[cover-image-desktop]")),
        (r = [...r].filter((n) => n !== i)),
        pr.stop(),
        q.set(r, { x: "120%" }),
        await xa(),
        r.forEach((n) => {
          Y.create({
            trigger: n,
            start: "top 90%",
            end: "bottom 10%",
            onEnter: () => {
              q.to(n, { x: "0%", ease: "expo.inOut", duration: 0.75 });
            },
            onLeaveBack: () => {
              q.to(n, { x: "120%", ease: "expo.inOut", duration: 0.75 });
            },
          });
        }),
        t.then(() => {
          pr.start();
        })
      );
    };
  q.defaults({ ease: "power2.inOut", duration: 0.3 }),
    console.log("Vite connected!"),
    Ji.init({
      views: [
        {
          namespace: "home",
          beforeEnter(s) {
            Id(s.next.container);
          },
          afterEnter(s) {},
          afterLeave(s) {
            qd(s.current.container);
          },
        },
        {
          namespace: "services",
          beforeEnter(s) {},
          afterEnter(s) {},
          afterLeave(s) {},
        },
        {
          namespace: "project",
          beforeEnter(s) {},
          afterEnter(s) {},
          afterLeave(s) {},
        },
        {
          namespace: "work",
          beforeEnter(s) {},
          afterEnter(s) {},
          afterLeave(s) {},
        },
        {
          namespace: "about",
          beforeEnter(s) {},
          afterEnter(s) {},
          afterLeave(s) {},
        },
      ],
      transitions: [
        {
          name: "default-transition",
          async once() {
            await xa(), console.log("default transition - once");
          },
          async leave() {
            await Hs(), console.log("default transition - leave");
          },
          enter() {},
          after() {
            xa(), console.log("default transition - after");
          },
        },
        {
          name: "home-transition",
          to: { namespace: ["home"] },
          async once(s) {
            await wc(s.next.container), console.log("home transition - once");
          },
          enter() {},
          after(s) {
            wc(s.next.container), console.log("home transition - after");
          },
          async leave() {
            await Hs();
          },
        },
        {
          name: "services-transition",
          to: { namespace: ["services"] },
          sync: !1,
          async once(s) {
            bc(s.next.container), console.log("services transition - once");
          },
          after(s) {
            console.log("services transition - after"), bc(s.next.container);
          },
          async leave() {
            await Hs(), console.log("services default transition - leave");
          },
        },
        {
          name: "project-transition",
          to: { namespace: ["project"] },
          sync: !1,
          async once(s) {
            Ec(s), console.log("project transition - once");
          },
          after(s) {
            Ec(s), console.log("project transition - after");
          },
          afterEnter() {},
          async leave(s) {
            await Hd(s.current.container, s.next.url.path),
              console.log("project transition - leave");
          },
        },
      ],
    }),
    Ji.hooks.beforeOnce(async () => {
      pr.scrollTo(0), await zd();
    }),
    Ji.hooks.after(() => {
      console.log("lenis resized"), pr.resize(), Y.refresh();
    }),
    Ji.hooks.beforeEnter((s) => {
      pr.scrollTo(0), tc(s.next.container);
    }),
    Ji.hooks.afterLeave((s) => {
      fd(s.current.container);
    });
});
