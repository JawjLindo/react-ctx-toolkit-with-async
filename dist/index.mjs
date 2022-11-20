import Ee, { useRef as me, useCallback as Xt, useReducer as Gt, useMemo as Jt, createContext as Qt, useContext as be } from "react";
function ne(e, r) {
  function n(...o) {
    if (r) {
      const a = r(...o);
      if (!a)
        throw new Error("prepareAction did not return an object");
      return {
        type: e,
        payload: a.payload
      };
    }
    return { type: e, payload: o[0] };
  }
  return n.type = e, n.match = (o) => o.type === e, n.toString = () => `${e}`, n;
}
function j(e) {
  for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  if (process.env.NODE_ENV !== "production") {
    var a = ir[e], u = a ? typeof a == "function" ? a.apply(null, n) : a : "unknown error nr: " + e;
    throw Error("[Immer] " + u);
  }
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function z(e) {
  return !!e && !!e[k];
}
function F(e) {
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === cr;
  }(e) || Array.isArray(e) || !!e[yt] || !!e.constructor[yt] || De(e) || xe(e));
}
function X(e, r, n) {
  n === void 0 && (n = !1), V(e) === 0 ? (n ? Object.keys : Fe)(e).forEach(function(o) {
    n && typeof o == "symbol" || r(o, e[o], e);
  }) : e.forEach(function(o, a) {
    return r(a, o, e);
  });
}
function V(e) {
  var r = e[k];
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(e) ? 1 : De(e) ? 2 : xe(e) ? 3 : 0;
}
function _e(e, r) {
  return V(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function Zt(e, r) {
  return V(e) === 2 ? e.get(r) : e[r];
}
function ht(e, r, n) {
  var o = V(e);
  o === 2 ? e.set(r, n) : o === 3 ? (e.delete(r), e.add(n)) : e[r] = n;
}
function er(e, r) {
  return e === r ? e !== 0 || 1 / e == 1 / r : e != e && r != r;
}
function De(e) {
  return or && e instanceof Map;
}
function xe(e) {
  return ar && e instanceof Set;
}
function I(e) {
  return e.o || e.t;
}
function Ae(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var r = ur(e);
  delete r[k];
  for (var n = Fe(r), o = 0; o < n.length; o++) {
    var a = n[o], u = r[a];
    u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (r[a] = { configurable: !0, writable: !0, enumerable: u.enumerable, value: e[a] });
  }
  return Object.create(Object.getPrototypeOf(e), r);
}
function Ne(e, r) {
  return r === void 0 && (r = !1), $e(e) || z(e) || !F(e) || (V(e) > 1 && (e.set = e.add = e.clear = e.delete = tr), Object.freeze(e), r && X(e, function(n, o) {
    return Ne(o, !0);
  }, !0)), e;
}
function tr() {
  j(2);
}
function $e(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function A(e) {
  var r = sr[e];
  return r || j(18, e), r;
}
function it() {
  return process.env.NODE_ENV === "production" || M || j(0), M;
}
function ge(e, r) {
  r && (A("Patches"), e.u = [], e.s = [], e.v = r);
}
function oe(e) {
  je(e), e.p.forEach(rr), e.p = null;
}
function je(e) {
  e === M && (M = e.l);
}
function ct(e) {
  return M = { p: [], l: M, h: e, m: !0, _: 0 };
}
function rr(e) {
  var r = e[k];
  r.i === 0 || r.i === 1 ? r.j() : r.O = !0;
}
function Oe(e, r) {
  r._ = r.p.length;
  var n = r.p[0], o = e !== void 0 && e !== n;
  return r.h.g || A("ES5").S(r, e, o), o ? (n[k].P && (oe(r), j(4)), F(e) && (e = ae(r, e), r.l || ie(r, e)), r.u && A("Patches").M(n[k].t, e, r.u, r.s)) : e = ae(r, n, []), oe(r), r.u && r.v(r.u, r.s), e !== mt ? e : void 0;
}
function ae(e, r, n) {
  if ($e(r))
    return r;
  var o = r[k];
  if (!o)
    return X(r, function(u, s) {
      return ut(e, o, r, u, s, n);
    }, !0), r;
  if (o.A !== e)
    return r;
  if (!o.P)
    return ie(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var a = o.i === 4 || o.i === 5 ? o.o = Ae(o.k) : o.o;
    X(o.i === 3 ? new Set(a) : a, function(u, s) {
      return ut(e, o, a, u, s, n);
    }), ie(e, a, !1), n && e.u && A("Patches").R(o, n, e.u, e.s);
  }
  return o.o;
}
function ut(e, r, n, o, a, u) {
  if (process.env.NODE_ENV !== "production" && a === n && j(5), z(a)) {
    var s = ae(e, a, u && r && r.i !== 3 && !_e(r.D, o) ? u.concat(o) : void 0);
    if (ht(n, o, s), !z(s))
      return;
    e.m = !1;
  }
  if (F(a) && !$e(a)) {
    if (!e.h.F && e._ < 1)
      return;
    ae(e, a), r && r.A.l || ie(e, a);
  }
}
function ie(e, r, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Ne(r, n);
}
function we(e, r) {
  var n = e[k];
  return (n ? I(n) : e)[r];
}
function st(e, r) {
  if (r in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var o = Object.getOwnPropertyDescriptor(n, r);
      if (o)
        return o;
      n = Object.getPrototypeOf(n);
    }
}
function Se(e) {
  e.P || (e.P = !0, e.l && Se(e.l));
}
function Pe(e) {
  e.o || (e.o = Ae(e.t));
}
function ke(e, r, n) {
  var o = De(r) ? A("MapSet").N(r, n) : xe(r) ? A("MapSet").T(r, n) : e.g ? function(a, u) {
    var s = Array.isArray(a), p = { i: s ? 1 : 0, A: u ? u.A : it(), P: !1, I: !1, D: {}, l: u, t: a, k: null, o: null, j: null, C: !1 }, v = p, m = Re;
    s && (v = [p], m = H);
    var l = Proxy.revocable(v, m), O = l.revoke, g = l.proxy;
    return p.k = g, p.j = O, g;
  }(r, n) : A("ES5").J(r, n);
  return (n ? n.A : it()).p.push(o), o;
}
function nr(e) {
  return z(e) || j(22, e), function r(n) {
    if (!F(n))
      return n;
    var o, a = n[k], u = V(n);
    if (a) {
      if (!a.P && (a.i < 4 || !A("ES5").K(a)))
        return a.t;
      a.I = !0, o = ft(n, u), a.I = !1;
    } else
      o = ft(n, u);
    return X(o, function(s, p) {
      a && Zt(a.t, s) === p || ht(o, s, r(p));
    }), u === 3 ? new Set(o) : o;
  }(e);
}
function ft(e, r) {
  switch (r) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Ae(e);
}
var lt, M, Te = typeof Symbol < "u" && typeof Symbol("x") == "symbol", or = typeof Map < "u", ar = typeof Set < "u", pt = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", mt = Te ? Symbol.for("immer-nothing") : ((lt = {})["immer-nothing"] = !0, lt), yt = Te ? Symbol.for("immer-draftable") : "__$immer_draftable", k = Te ? Symbol.for("immer-state") : "__$immer_state", ir = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, cr = "" + Object.prototype.constructor, Fe = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, ur = Object.getOwnPropertyDescriptors || function(e) {
  var r = {};
  return Fe(e).forEach(function(n) {
    r[n] = Object.getOwnPropertyDescriptor(e, n);
  }), r;
}, sr = {}, Re = { get: function(e, r) {
  if (r === k)
    return e;
  var n = I(e);
  if (!_e(n, r))
    return function(a, u, s) {
      var p, v = st(u, s);
      return v ? "value" in v ? v.value : (p = v.get) === null || p === void 0 ? void 0 : p.call(a.k) : void 0;
    }(e, n, r);
  var o = n[r];
  return e.I || !F(o) ? o : o === we(e.t, r) ? (Pe(e), e.o[r] = ke(e.A.h, o, e)) : o;
}, has: function(e, r) {
  return r in I(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(I(e));
}, set: function(e, r, n) {
  var o = st(I(e), r);
  if (o != null && o.set)
    return o.set.call(e.k, n), !0;
  if (!e.P) {
    var a = we(I(e), r), u = a == null ? void 0 : a[k];
    if (u && u.t === n)
      return e.o[r] = n, e.D[r] = !1, !0;
    if (er(n, a) && (n !== void 0 || _e(e.t, r)))
      return !0;
    Pe(e), Se(e);
  }
  return e.o[r] === n && typeof n != "number" && (n !== void 0 || r in e.o) || (e.o[r] = n, e.D[r] = !0, !0);
}, deleteProperty: function(e, r) {
  return we(e.t, r) !== void 0 || r in e.t ? (e.D[r] = !1, Pe(e), Se(e)) : delete e.D[r], e.o && delete e.o[r], !0;
}, getOwnPropertyDescriptor: function(e, r) {
  var n = I(e), o = Reflect.getOwnPropertyDescriptor(n, r);
  return o && { writable: !0, configurable: e.i !== 1 || r !== "length", enumerable: o.enumerable, value: n[r] };
}, defineProperty: function() {
  j(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  j(12);
} }, H = {};
X(Re, function(e, r) {
  H[e] = function() {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
}), H.deleteProperty = function(e, r) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r)) && j(13), H.set.call(this, e, r, void 0);
}, H.set = function(e, r, n) {
  return process.env.NODE_ENV !== "production" && r !== "length" && isNaN(parseInt(r)) && j(14), Re.set.call(this, e[0], r, n, e[0]);
};
var fr = function() {
  function e(n) {
    var o = this;
    this.g = pt, this.F = !0, this.produce = function(a, u, s) {
      if (typeof a == "function" && typeof u != "function") {
        var p = u;
        u = a;
        var v = o;
        return function(N) {
          var ce = this;
          N === void 0 && (N = p);
          for (var x = arguments.length, _ = Array(x > 1 ? x - 1 : 0), W = 1; W < x; W++)
            _[W - 1] = arguments[W];
          return v.produce(N, function(ue) {
            var G;
            return (G = u).call.apply(G, [ce, ue].concat(_));
          });
        };
      }
      var m;
      if (typeof u != "function" && j(6), s !== void 0 && typeof s != "function" && j(7), F(a)) {
        var l = ct(o), O = ke(o, a, void 0), g = !0;
        try {
          m = u(O), g = !1;
        } finally {
          g ? oe(l) : je(l);
        }
        return typeof Promise < "u" && m instanceof Promise ? m.then(function(N) {
          return ge(l, s), Oe(N, l);
        }, function(N) {
          throw oe(l), N;
        }) : (ge(l, s), Oe(m, l));
      }
      if (!a || typeof a != "object") {
        if ((m = u(a)) === void 0 && (m = a), m === mt && (m = void 0), o.F && Ne(m, !0), s) {
          var D = [], K = [];
          A("Patches").M(a, m, D, K), s(D, K);
        }
        return m;
      }
      j(21, a);
    }, this.produceWithPatches = function(a, u) {
      if (typeof a == "function")
        return function(m) {
          for (var l = arguments.length, O = Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++)
            O[g - 1] = arguments[g];
          return o.produceWithPatches(m, function(D) {
            return a.apply(void 0, [D].concat(O));
          });
        };
      var s, p, v = o.produce(a, u, function(m, l) {
        s = m, p = l;
      });
      return typeof Promise < "u" && v instanceof Promise ? v.then(function(m) {
        return [m, s, p];
      }) : [v, s, p];
    }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var r = e.prototype;
  return r.createDraft = function(n) {
    F(n) || j(8), z(n) && (n = nr(n));
    var o = ct(this), a = ke(this, n, void 0);
    return a[k].C = !0, je(o), a;
  }, r.finishDraft = function(n, o) {
    var a = n && n[k];
    process.env.NODE_ENV !== "production" && (a && a.C || j(9), a.I && j(10));
    var u = a.A;
    return ge(u, o), Oe(void 0, u);
  }, r.setAutoFreeze = function(n) {
    this.F = n;
  }, r.setUseProxies = function(n) {
    n && !pt && j(20), this.g = n;
  }, r.applyPatches = function(n, o) {
    var a;
    for (a = o.length - 1; a >= 0; a--) {
      var u = o[a];
      if (u.path.length === 0 && u.op === "replace") {
        n = u.value;
        break;
      }
    }
    a > -1 && (o = o.slice(a + 1));
    var s = A("Patches").$;
    return z(n) ? s(n, o) : this.produce(n, function(p) {
      return s(p, o);
    });
  }, e;
}(), R = new fr(), lr = R.produce;
R.produceWithPatches.bind(R);
R.setAutoFreeze.bind(R);
R.setUseProxies.bind(R);
R.applyPatches.bind(R);
R.createDraft.bind(R);
R.finishDraft.bind(R);
const pr = lr;
function wr(e) {
  const [r, n] = yr(e);
  return (o, a) => {
    const u = r[a.type] || n;
    return u ? pr(o, (s) => {
      const p = u(s, a);
      return typeof p > "u" ? z(s) && F(s) ? void 0 : s : p;
    }) : o;
  };
}
function yr(e) {
  const r = {};
  let n;
  const o = {
    addCase(a, u) {
      const s = typeof a == "string" ? a : a.type;
      if (s in r)
        throw new Error("addCase cannot be called with two reducers for the same action type");
      return r[s] = u, o;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error("`builder.addDefaultCase` can only be called once");
      return n = a, o;
    }
  };
  return e(o), [r, n];
}
var bt = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function dr() {
  if (dt)
    return q;
  dt = 1;
  var e = Ee, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(p, v, m) {
    var l, O = {}, g = null, D = null;
    m !== void 0 && (g = "" + m), v.key !== void 0 && (g = "" + v.key), v.ref !== void 0 && (D = v.ref);
    for (l in v)
      o.call(v, l) && !u.hasOwnProperty(l) && (O[l] = v[l]);
    if (p && p.defaultProps)
      for (l in v = p.defaultProps, v)
        O[l] === void 0 && (O[l] = v[l]);
    return { $$typeof: r, type: p, key: g, ref: D, props: O, _owner: a.current };
  }
  return q.Fragment = n, q.jsx = s, q.jsxs = s, q;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function vr() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ee, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), p = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), K = Symbol.iterator, N = "@@iterator";
    function ce(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = K && t[K] || t[N];
      return typeof i == "function" ? i : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          c[f - 1] = arguments[f];
        W("error", t, c);
      }
    }
    function W(t, i, c) {
      {
        var f = x.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (i += "%s", c = c.concat([h]));
        var b = c.map(function(d) {
          return String(d);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var ue = !1, G = !1, gt = !1, Ot = !1, wt = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Pt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === u || wt || t === a || t === m || t === l || Ot || t === D || ue || G || gt || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === O || t.$$typeof === s || t.$$typeof === p || t.$$typeof === v || t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function _t(t, i, c) {
      var f = t.displayName;
      if (f)
        return f;
      var h = i.displayName || i.name || "";
      return h !== "" ? c + "(" + h + ")" : c;
    }
    function Ie(t) {
      return t.displayName || "Context";
    }
    function $(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case m:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case p:
            var i = t;
            return Ie(i) + ".Consumer";
          case s:
            var c = t;
            return Ie(c._context) + ".Provider";
          case v:
            return _t(t, t.render, "ForwardRef");
          case O:
            var f = t.displayName || null;
            return f !== null ? f : $(t.type) || "Memo";
          case g: {
            var h = t, b = h._payload, d = h._init;
            try {
              return $(d(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, B = 0, ze, We, Ue, Le, Me, Ve, Ke;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function jt() {
      {
        if (B === 0) {
          ze = console.log, We = console.info, Ue = console.warn, Le = console.error, Me = console.group, Ve = console.groupCollapsed, Ke = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function St() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, t, {
              value: ze
            }),
            info: C({}, t, {
              value: We
            }),
            warn: C({}, t, {
              value: Ue
            }),
            error: C({}, t, {
              value: Le
            }),
            group: C({}, t, {
              value: Me
            }),
            groupCollapsed: C({}, t, {
              value: Ve
            }),
            groupEnd: C({}, t, {
              value: Ke
            })
          });
        }
        B < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = x.ReactCurrentDispatcher, fe;
    function J(t, i, c) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (h) {
            var f = h.stack.trim().match(/\n( *(at )?)/);
            fe = f && f[1] || "";
          }
        return `
` + fe + t;
      }
    }
    var le = !1, Q;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new kt();
    }
    function Ye(t, i) {
      if (!t || le)
        return "";
      {
        var c = Q.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      le = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = se.current, se.current = null, jt();
      try {
        if (i) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (T) {
              f = T;
            }
            Reflect.construct(t, [], d);
          } else {
            try {
              d.call();
            } catch (T) {
              f = T;
            }
            t.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            f = T;
          }
          t();
        }
      } catch (T) {
        if (T && f && typeof T.stack == "string") {
          for (var y = T.stack.split(`
`), S = f.stack.split(`
`), w = y.length - 1, P = S.length - 1; w >= 1 && P >= 0 && y[w] !== S[P]; )
            P--;
          for (; w >= 1 && P >= 0; w--, P--)
            if (y[w] !== S[P]) {
              if (w !== 1 || P !== 1)
                do
                  if (w--, P--, P < 0 || y[w] !== S[P]) {
                    var E = `
` + y[w].replace(" at new ", " at ");
                    return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), typeof t == "function" && Q.set(t, E), E;
                  }
                while (w >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        le = !1, se.current = b, St(), Error.prepareStackTrace = h;
      }
      var L = t ? t.displayName || t.name : "", at = L ? J(L) : "";
      return typeof t == "function" && Q.set(t, at), at;
    }
    function Rt(t, i, c) {
      return Ye(t, !1);
    }
    function Et(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Z(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ye(t, Et(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case m:
          return J("Suspense");
        case l:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            return Rt(t.render);
          case O:
            return Z(t.type, i, c);
          case g: {
            var f = t, h = f._payload, b = f._init;
            try {
              return Z(b(h), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, qe = {}, He = x.ReactDebugCurrentFrame;
    function te(t) {
      if (t) {
        var i = t._owner, c = Z(t.type, t._source, i ? i.type : null);
        He.setExtraStackFrame(c);
      } else
        He.setExtraStackFrame(null);
    }
    function Dt(t, i, c, f, h) {
      {
        var b = Function.call.bind(ee);
        for (var d in t)
          if (b(t, d)) {
            var y = void 0;
            try {
              if (typeof t[d] != "function") {
                var S = Error((f || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = t[d](i, d, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              y = w;
            }
            y && !(y instanceof Error) && (te(h), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, d, typeof y), te(null)), y instanceof Error && !(y.message in qe) && (qe[y.message] = !0, te(h), _("Failed %s type: %s", c, y.message), te(null));
          }
      }
    }
    var xt = Array.isArray;
    function pe(t) {
      return xt(t);
    }
    function At(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function Nt(t) {
      try {
        return Xe(t), !1;
      } catch {
        return !0;
      }
    }
    function Xe(t) {
      return "" + t;
    }
    function Ge(t) {
      if (Nt(t))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(t)), Xe(t);
    }
    var Y = x.ReactCurrentOwner, $t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Qe, ye;
    ye = {};
    function Tt(t) {
      if (ee.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ft(t) {
      if (ee.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ct(t, i) {
      if (typeof t.ref == "string" && Y.current && i && Y.current.stateNode !== i) {
        var c = $(Y.current.type);
        ye[c] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(Y.current.type), t.ref), ye[c] = !0);
      }
    }
    function It(t, i) {
      {
        var c = function() {
          Je || (Je = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function zt(t, i) {
      {
        var c = function() {
          Qe || (Qe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Wt = function(t, i, c, f, h, b, d) {
      var y = {
        $$typeof: r,
        type: t,
        key: i,
        ref: c,
        props: d,
        _owner: b
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Ut(t, i, c, f, h) {
      {
        var b, d = {}, y = null, S = null;
        c !== void 0 && (Ge(c), y = "" + c), Ft(i) && (Ge(i.key), y = "" + i.key), Tt(i) && (S = i.ref, Ct(i, h));
        for (b in i)
          ee.call(i, b) && !$t.hasOwnProperty(b) && (d[b] = i[b]);
        if (t && t.defaultProps) {
          var w = t.defaultProps;
          for (b in w)
            d[b] === void 0 && (d[b] = w[b]);
        }
        if (y || S) {
          var P = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          y && It(d, P), S && zt(d, P);
        }
        return Wt(t, y, S, h, f, Y.current, d);
      }
    }
    var de = x.ReactCurrentOwner, Ze = x.ReactDebugCurrentFrame;
    function U(t) {
      if (t) {
        var i = t._owner, c = Z(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(c);
      } else
        Ze.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function he(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function et() {
      {
        if (de.current) {
          var t = $(de.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Lt(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var tt = {};
    function Mt(t) {
      {
        var i = et();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function rt(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Mt(i);
        if (tt[c])
          return;
        tt[c] = !0;
        var f = "";
        t && t._owner && t._owner !== de.current && (f = " It was passed a child from " + $(t._owner.type) + "."), U(t), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), U(null);
      }
    }
    function nt(t, i) {
      {
        if (typeof t != "object")
          return;
        if (pe(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            he(f) && rt(f, i);
          }
        else if (he(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var h = ce(t);
          if (typeof h == "function" && h !== t.entries)
            for (var b = h.call(t), d; !(d = b.next()).done; )
              he(d.value) && rt(d.value, i);
        }
      }
    }
    function Vt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === v || i.$$typeof === O))
          c = i.propTypes;
        else
          return;
        if (c) {
          var f = $(i);
          Dt(c, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !ve) {
          ve = !0;
          var h = $(i);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var f = i[c];
          if (f !== "children" && f !== "key") {
            U(t), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), U(null);
            break;
          }
        }
        t.ref !== null && (U(t), _("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function ot(t, i, c, f, h, b) {
      {
        var d = Pt(t);
        if (!d) {
          var y = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Lt(h);
          S ? y += S : y += et();
          var w;
          t === null ? w = "null" : pe(t) ? w = "array" : t !== void 0 && t.$$typeof === r ? (w = "<" + ($(t.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, y);
        }
        var P = Ut(t, i, c, h, b);
        if (P == null)
          return P;
        if (d) {
          var E = i.children;
          if (E !== void 0)
            if (f)
              if (pe(E)) {
                for (var L = 0; L < E.length; L++)
                  nt(E[L], t);
                Object.freeze && Object.freeze(E);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nt(E, t);
        }
        return t === o ? Kt(P) : Vt(P), P;
      }
    }
    function Bt(t, i, c) {
      return ot(t, i, c, !0);
    }
    function Yt(t, i, c) {
      return ot(t, i, c, !1);
    }
    var qt = Yt, Ht = Bt;
    re.Fragment = o, re.jsx = qt, re.jsxs = Ht;
  }()), re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = dr() : e.exports = vr();
})(bt);
bt.exports.jsx;
const hr = (e) => (n, o) => n(e(o)), Pr = (e) => {
  const r = ne(e), n = hr(r);
  return [r, n];
}, mr = (e) => {
  const r = ne(`${e}/pending`), n = ne(`${e}/fulfilled`), o = ne(`${e}/rejected`);
  return { pending: r, fulfilled: n, rejected: o };
}, br = (e, r, n) => (a, u) => {
  a(e.pending()), r(u).then((s) => a(e.fulfilled(s))).catch((s) => a(e.rejected(n(s))));
}, _r = (e, r, n) => {
  const o = mr(e), a = br(
    o,
    r,
    n
  );
  return [o, a];
}, gr = (e, r, n, o = []) => {
  const a = me(r), u = Xt(() => a.current, []), s = me(
    (O, g) => a.current = e(O, g)
  ).current, [p, v] = Gt(s, r, n), m = me(o), l = Jt(
    () => m.current.reduceRight(
      (O, g) => (D) => g(p, u, O)(D),
      v
    ),
    [u, p]
  );
  return [p, l, u];
};
function jr({ displayName: e, initialState: r, actions: n }, o, a) {
  const u = Qt(void 0);
  u.displayName = `${e}.Context`;
  function s({ children: l }) {
    const [O, g] = gr(
      o,
      r,
      void 0,
      a
    );
    return Ee.createElement(
      u.Provider,
      { value: { state: O, dispatch: g, actions: n } },
      l
    );
  }
  return s.prototype.displayName = `${e}.Provider`, {
    Provider: s,
    context: u,
    hooks: [() => {
      const l = be(u);
      if (l === void 0)
        throw new Error(`[${e}] must be used within a Provider`);
      return l.state;
    }, () => {
      const l = be(u);
      if (l === void 0)
        throw new Error(`[${e}] must be used within a Provider`);
      return l.dispatch;
    }, () => {
      const l = be(u);
      if (l === void 0)
        throw new Error(`[${e}] must be used within a Provider`);
      return l.actions;
    }]
  };
}
export {
  _r as createAsyncThunk,
  jr as createContext,
  wr as createReducer,
  Pr as createSyncThunk
};
