function rk(h, C) {
  for (var S = 0; S < C.length; S++) {
    const T = C[S];
    if (typeof T != "string" && !Array.isArray(T)) {
      for (const _ in T)
        if (_ !== "default" && !(_ in h)) {
          const L = Object.getOwnPropertyDescriptor(T, _);
          L && Object.defineProperty(h, _, L.get ? L : {
            enumerable: !0,
            get: () => T[_]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
function ak(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var $0 = { exports: {} }, iv = {}, I0 = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jR;
function ik() {
  if (jR) return Dt;
  jR = 1;
  var h = Symbol.for("react.element"), C = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), y = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), F = Symbol.iterator;
  function X(M) {
    return M === null || typeof M != "object" ? null : (M = F && M[F] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = Object.assign, _e = {};
  function ge(M, q, qe) {
    this.props = M, this.context = q, this.refs = _e, this.updater = qe || Z;
  }
  ge.prototype.isReactComponent = {}, ge.prototype.setState = function(M, q) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, q, "setState");
  }, ge.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function je() {
  }
  je.prototype = ge.prototype;
  function ie(M, q, qe) {
    this.props = M, this.context = q, this.refs = _e, this.updater = qe || Z;
  }
  var le = ie.prototype = new je();
  le.constructor = ie, he(le, ge.prototype), le.isPureReactComponent = !0;
  var ke = Array.isArray, De = Object.prototype.hasOwnProperty, ut = { current: null }, Qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qt(M, q, qe) {
    var et, dt = {}, ft = null, wt = null;
    if (q != null) for (et in q.ref !== void 0 && (wt = q.ref), q.key !== void 0 && (ft = "" + q.key), q) De.call(q, et) && !Qe.hasOwnProperty(et) && (dt[et] = q[et]);
    var mt = arguments.length - 2;
    if (mt === 1) dt.children = qe;
    else if (1 < mt) {
      for (var yt = Array(mt), an = 0; an < mt; an++) yt[an] = arguments[an + 2];
      dt.children = yt;
    }
    if (M && M.defaultProps) for (et in mt = M.defaultProps, mt) dt[et] === void 0 && (dt[et] = mt[et]);
    return { $$typeof: h, type: M, key: ft, ref: wt, props: dt, _owner: ut.current };
  }
  function mn(M, q) {
    return { $$typeof: h, type: M.type, key: q, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function Ut(M) {
    return typeof M == "object" && M !== null && M.$$typeof === h;
  }
  function Nt(M) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(qe) {
      return q[qe];
    });
  }
  var wn = /\/+/g;
  function Ge(M, q) {
    return typeof M == "object" && M !== null && M.key != null ? Nt("" + M.key) : q.toString(36);
  }
  function st(M, q, qe, et, dt) {
    var ft = typeof M;
    (ft === "undefined" || ft === "boolean") && (M = null);
    var wt = !1;
    if (M === null) wt = !0;
    else switch (ft) {
      case "string":
      case "number":
        wt = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case h:
          case C:
            wt = !0;
        }
    }
    if (wt) return wt = M, dt = dt(wt), M = et === "" ? "." + Ge(wt, 0) : et, ke(dt) ? (qe = "", M != null && (qe = M.replace(wn, "$&/") + "/"), st(dt, q, qe, "", function(an) {
      return an;
    })) : dt != null && (Ut(dt) && (dt = mn(dt, qe + (!dt.key || wt && wt.key === dt.key ? "" : ("" + dt.key).replace(wn, "$&/") + "/") + M)), q.push(dt)), 1;
    if (wt = 0, et = et === "" ? "." : et + ":", ke(M)) for (var mt = 0; mt < M.length; mt++) {
      ft = M[mt];
      var yt = et + Ge(ft, mt);
      wt += st(ft, q, qe, yt, dt);
    }
    else if (yt = X(M), typeof yt == "function") for (M = yt.call(M), mt = 0; !(ft = M.next()).done; ) ft = ft.value, yt = et + Ge(ft, mt++), wt += st(ft, q, qe, yt, dt);
    else if (ft === "object") throw q = String(M), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    return wt;
  }
  function Bt(M, q, qe) {
    if (M == null) return M;
    var et = [], dt = 0;
    return st(M, et, "", "", function(ft) {
      return q.call(qe, ft, dt++);
    }), et;
  }
  function Lt(M) {
    if (M._status === -1) {
      var q = M._result;
      q = q(), q.then(function(qe) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = qe);
      }, function(qe) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = qe);
      }), M._status === -1 && (M._status = 0, M._result = q);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var Oe = { current: null }, de = { transition: null }, Ve = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: de, ReactCurrentOwner: ut };
  function Se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: Bt, forEach: function(M, q, qe) {
    Bt(M, function() {
      q.apply(this, arguments);
    }, qe);
  }, count: function(M) {
    var q = 0;
    return Bt(M, function() {
      q++;
    }), q;
  }, toArray: function(M) {
    return Bt(M, function(q) {
      return q;
    }) || [];
  }, only: function(M) {
    if (!Ut(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, Dt.Component = ge, Dt.Fragment = S, Dt.Profiler = _, Dt.PureComponent = ie, Dt.StrictMode = T, Dt.Suspense = z, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, Dt.act = Se, Dt.cloneElement = function(M, q, qe) {
    if (M == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var et = he({}, M.props), dt = M.key, ft = M.ref, wt = M._owner;
    if (q != null) {
      if (q.ref !== void 0 && (ft = q.ref, wt = ut.current), q.key !== void 0 && (dt = "" + q.key), M.type && M.type.defaultProps) var mt = M.type.defaultProps;
      for (yt in q) De.call(q, yt) && !Qe.hasOwnProperty(yt) && (et[yt] = q[yt] === void 0 && mt !== void 0 ? mt[yt] : q[yt]);
    }
    var yt = arguments.length - 2;
    if (yt === 1) et.children = qe;
    else if (1 < yt) {
      mt = Array(yt);
      for (var an = 0; an < yt; an++) mt[an] = arguments[an + 2];
      et.children = mt;
    }
    return { $$typeof: h, type: M.type, key: dt, ref: ft, props: et, _owner: wt };
  }, Dt.createContext = function(M) {
    return M = { $$typeof: y, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: L, _context: M }, M.Consumer = M;
  }, Dt.createElement = qt, Dt.createFactory = function(M) {
    var q = qt.bind(null, M);
    return q.type = M, q;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(M) {
    return { $$typeof: Y, render: M };
  }, Dt.isValidElement = Ut, Dt.lazy = function(M) {
    return { $$typeof: J, _payload: { _status: -1, _result: M }, _init: Lt };
  }, Dt.memo = function(M, q) {
    return { $$typeof: H, type: M, compare: q === void 0 ? null : q };
  }, Dt.startTransition = function(M) {
    var q = de.transition;
    de.transition = {};
    try {
      M();
    } finally {
      de.transition = q;
    }
  }, Dt.unstable_act = Se, Dt.useCallback = function(M, q) {
    return Oe.current.useCallback(M, q);
  }, Dt.useContext = function(M) {
    return Oe.current.useContext(M);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(M) {
    return Oe.current.useDeferredValue(M);
  }, Dt.useEffect = function(M, q) {
    return Oe.current.useEffect(M, q);
  }, Dt.useId = function() {
    return Oe.current.useId();
  }, Dt.useImperativeHandle = function(M, q, qe) {
    return Oe.current.useImperativeHandle(M, q, qe);
  }, Dt.useInsertionEffect = function(M, q) {
    return Oe.current.useInsertionEffect(M, q);
  }, Dt.useLayoutEffect = function(M, q) {
    return Oe.current.useLayoutEffect(M, q);
  }, Dt.useMemo = function(M, q) {
    return Oe.current.useMemo(M, q);
  }, Dt.useReducer = function(M, q, qe) {
    return Oe.current.useReducer(M, q, qe);
  }, Dt.useRef = function(M) {
    return Oe.current.useRef(M);
  }, Dt.useState = function(M) {
    return Oe.current.useState(M);
  }, Dt.useSyncExternalStore = function(M, q, qe) {
    return Oe.current.useSyncExternalStore(M, q, qe);
  }, Dt.useTransition = function() {
    return Oe.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var uv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
uv.exports;
var FR;
function lk() {
  return FR || (FR = 1, function(h, C) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = "18.3.1", T = Symbol.for("react.element"), _ = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), H = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), ge = Symbol.iterator, je = "@@iterator";
      function ie(m) {
        if (m === null || typeof m != "object")
          return null;
        var w = ge && m[ge] || m[je];
        return typeof w == "function" ? w : null;
      }
      var le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ke = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Qe = {}, qt = null;
      function mn(m) {
        qt = m;
      }
      Qe.setExtraStackFrame = function(m) {
        qt = m;
      }, Qe.getCurrentStack = null, Qe.getStackAddendum = function() {
        var m = "";
        qt && (m += qt);
        var w = Qe.getCurrentStack;
        return w && (m += w() || ""), m;
      };
      var Ut = !1, Nt = !1, wn = !1, Ge = !1, st = !1, Bt = {
        ReactCurrentDispatcher: le,
        ReactCurrentBatchConfig: ke,
        ReactCurrentOwner: ut
      };
      Bt.ReactDebugCurrentFrame = Qe, Bt.ReactCurrentActQueue = De;
      function Lt(m) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), W = 1; W < w; W++)
            B[W - 1] = arguments[W];
          de("warn", m, B);
        }
      }
      function Oe(m) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), W = 1; W < w; W++)
            B[W - 1] = arguments[W];
          de("error", m, B);
        }
      }
      function de(m, w, B) {
        {
          var W = Bt.ReactDebugCurrentFrame, ce = W.getStackAddendum();
          ce !== "" && (w += "%s", B = B.concat([ce]));
          var Xe = B.map(function(Ee) {
            return String(Ee);
          });
          Xe.unshift("Warning: " + w), Function.prototype.apply.call(console[m], console, Xe);
        }
      }
      var Ve = {};
      function Se(m, w) {
        {
          var B = m.constructor, W = B && (B.displayName || B.name) || "ReactClass", ce = W + "." + w;
          if (Ve[ce])
            return;
          Oe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, W), Ve[ce] = !0;
        }
      }
      var M = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, w, B) {
          Se(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, w, B, W) {
          Se(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, w, B, W) {
          Se(m, "setState");
        }
      }, q = Object.assign, qe = {};
      Object.freeze(qe);
      function et(m, w, B) {
        this.props = m, this.context = w, this.refs = qe, this.updater = B || M;
      }
      et.prototype.isReactComponent = {}, et.prototype.setState = function(m, w) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, w, "setState");
      }, et.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ft = function(m, w) {
          Object.defineProperty(et.prototype, m, {
            get: function() {
              Lt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var wt in dt)
          dt.hasOwnProperty(wt) && ft(wt, dt[wt]);
      }
      function mt() {
      }
      mt.prototype = et.prototype;
      function yt(m, w, B) {
        this.props = m, this.context = w, this.refs = qe, this.updater = B || M;
      }
      var an = yt.prototype = new mt();
      an.constructor = yt, q(an, et.prototype), an.isPureReactComponent = !0;
      function yr() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var Ir = Array.isArray;
      function yn(m) {
        return Ir(m);
      }
      function qn(m) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, B = w && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return B;
        }
      }
      function Bn(m) {
        try {
          return An(m), !1;
        } catch {
          return !0;
        }
      }
      function An(m) {
        return "" + m;
      }
      function On(m) {
        if (Bn(m))
          return Oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(m)), An(m);
      }
      function Yr(m, w, B) {
        var W = m.displayName;
        if (W)
          return W;
        var ce = w.displayName || w.name || "";
        return ce !== "" ? B + "(" + ce + ")" : B;
      }
      function Wr(m) {
        return m.displayName || "Context";
      }
      function Kn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && Oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case L:
            return "Fragment";
          case _:
            return "Portal";
          case Y:
            return "Profiler";
          case y:
            return "StrictMode";
          case F:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case H:
              var w = m;
              return Wr(w) + ".Consumer";
            case z:
              var B = m;
              return Wr(B._context) + ".Provider";
            case J:
              return Yr(m, m.render, "ForwardRef");
            case Z:
              var W = m.displayName || null;
              return W !== null ? W : Kn(m.type) || "Memo";
            case he: {
              var ce = m, Xe = ce._payload, Ee = ce._init;
              try {
                return Kn(Ee(Xe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var gr = Object.prototype.hasOwnProperty, Qr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, va, ir;
      ir = {};
      function Gr(m) {
        if (gr.call(m, "ref")) {
          var w = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function gn(m) {
        if (gr.call(m, "key")) {
          var w = Object.getOwnPropertyDescriptor(m, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function _r(m, w) {
        var B = function() {
          Sr || (Sr = !0, Oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: B,
          configurable: !0
        });
      }
      function pi(m, w) {
        var B = function() {
          va || (va = !0, Oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: B,
          configurable: !0
        });
      }
      function ha(m) {
        if (typeof m.ref == "string" && ut.current && m.__self && ut.current.stateNode !== m.__self) {
          var w = Kn(ut.current.type);
          ir[w] || (Oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, m.ref), ir[w] = !0);
        }
      }
      var ve = function(m, w, B, W, ce, Xe, Ee) {
        var We = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: m,
          key: w,
          ref: B,
          props: Ee,
          // Record the component responsible for creating this element.
          _owner: Xe
        };
        return We._store = {}, Object.defineProperty(We._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(We, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.defineProperty(We, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
      };
      function Be(m, w, B) {
        var W, ce = {}, Xe = null, Ee = null, We = null, St = null;
        if (w != null) {
          Gr(w) && (Ee = w.ref, ha(w)), gn(w) && (On(w.key), Xe = "" + w.key), We = w.__self === void 0 ? null : w.__self, St = w.__source === void 0 ? null : w.__source;
          for (W in w)
            gr.call(w, W) && !Qr.hasOwnProperty(W) && (ce[W] = w[W]);
        }
        var Mt = arguments.length - 2;
        if (Mt === 1)
          ce.children = B;
        else if (Mt > 1) {
          for (var tn = Array(Mt), Xt = 0; Xt < Mt; Xt++)
            tn[Xt] = arguments[Xt + 2];
          Object.freeze && Object.freeze(tn), ce.children = tn;
        }
        if (m && m.defaultProps) {
          var nn = m.defaultProps;
          for (W in nn)
            ce[W] === void 0 && (ce[W] = nn[W]);
        }
        if (Xe || Ee) {
          var ln = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Xe && _r(ce, ln), Ee && pi(ce, ln);
        }
        return ve(m, Xe, Ee, We, St, ut.current, ce);
      }
      function pt(m, w) {
        var B = ve(m.type, w, m.ref, m._self, m._source, m._owner, m.props);
        return B;
      }
      function Ht(m, w, B) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var W, ce = q({}, m.props), Xe = m.key, Ee = m.ref, We = m._self, St = m._source, Mt = m._owner;
        if (w != null) {
          Gr(w) && (Ee = w.ref, Mt = ut.current), gn(w) && (On(w.key), Xe = "" + w.key);
          var tn;
          m.type && m.type.defaultProps && (tn = m.type.defaultProps);
          for (W in w)
            gr.call(w, W) && !Qr.hasOwnProperty(W) && (w[W] === void 0 && tn !== void 0 ? ce[W] = tn[W] : ce[W] = w[W]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          ce.children = B;
        else if (Xt > 1) {
          for (var nn = Array(Xt), ln = 0; ln < Xt; ln++)
            nn[ln] = arguments[ln + 2];
          ce.children = nn;
        }
        return ve(m.type, Xe, Ee, We, St, Mt, ce);
      }
      function $t(m) {
        return typeof m == "object" && m !== null && m.$$typeof === T;
      }
      var Nn = ".", Sn = ":";
      function Er(m) {
        var w = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, W = m.replace(w, function(ce) {
          return B[ce];
        });
        return "$" + W;
      }
      var Kt = !1, Dr = /\/+/g;
      function It(m) {
        return m.replace(Dr, "$&/");
      }
      function Yt(m, w) {
        return typeof m == "object" && m !== null && m.key != null ? (On(m.key), Er("" + m.key)) : w.toString(36);
      }
      function ti(m, w, B, W, ce) {
        var Xe = typeof m;
        (Xe === "undefined" || Xe === "boolean") && (m = null);
        var Ee = !1;
        if (m === null)
          Ee = !0;
        else
          switch (Xe) {
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case T:
                case _:
                  Ee = !0;
              }
          }
        if (Ee) {
          var We = m, St = ce(We), Mt = W === "" ? Nn + Yt(We, 0) : W;
          if (yn(St)) {
            var tn = "";
            Mt != null && (tn = It(Mt) + "/"), ti(St, w, tn, "", function(ad) {
              return ad;
            });
          } else St != null && ($t(St) && (St.key && (!We || We.key !== St.key) && On(St.key), St = pt(
            St,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (St.key && (!We || We.key !== St.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              It("" + St.key) + "/"
            ) : "") + Mt
          )), w.push(St));
          return 1;
        }
        var Xt, nn, ln = 0, _t = W === "" ? Nn : W + Sn;
        if (yn(m))
          for (var Hi = 0; Hi < m.length; Hi++)
            Xt = m[Hi], nn = _t + Yt(Xt, Hi), ln += ti(Xt, w, B, nn, ce);
        else {
          var Ko = ie(m);
          if (typeof Ko == "function") {
            var is = m;
            Ko === is.entries && (Kt || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var rd = Ko.call(is), ii, ls = 0; !(ii = rd.next()).done; )
              Xt = ii.value, nn = _t + Yt(Xt, ls++), ln += ti(Xt, w, B, nn, ce);
          } else if (Xe === "object") {
            var os = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ln;
      }
      function Oa(m, w, B) {
        if (m == null)
          return m;
        var W = [], ce = 0;
        return ti(m, W, "", "", function(Xe) {
          return w.call(B, Xe, ce++);
        }), W;
      }
      function dl(m) {
        var w = 0;
        return Oa(m, function() {
          w++;
        }), w;
      }
      function Xl(m, w, B) {
        Oa(m, function() {
          w.apply(this, arguments);
        }, B);
      }
      function Po(m) {
        return Oa(m, function(w) {
          return w;
        }) || [];
      }
      function Ai(m) {
        if (!$t(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function pl(m) {
        var w = {
          $$typeof: H,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: z,
          _context: w
        };
        var B = !1, W = !1, ce = !1;
        {
          var Xe = {
            $$typeof: H,
            _context: w
          };
          Object.defineProperties(Xe, {
            Provider: {
              get: function() {
                return W || (W = !0, Oe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(Ee) {
                w.Provider = Ee;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(Ee) {
                w._currentValue = Ee;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(Ee) {
                w._currentValue2 = Ee;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(Ee) {
                w._threadCount = Ee;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, Oe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(Ee) {
                ce || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ee), ce = !0);
              }
            }
          }), w.Consumer = Xe;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ma = -1, vi = 0, ya = 1, ni = 2;
      function kr(m) {
        if (m._status === ma) {
          var w = m._result, B = w();
          if (B.then(function(Xe) {
            if (m._status === vi || m._status === ma) {
              var Ee = m;
              Ee._status = ya, Ee._result = Xe;
            }
          }, function(Xe) {
            if (m._status === vi || m._status === ma) {
              var Ee = m;
              Ee._status = ni, Ee._result = Xe;
            }
          }), m._status === ma) {
            var W = m;
            W._status = vi, W._result = B;
          }
        }
        if (m._status === ya) {
          var ce = m._result;
          return ce === void 0 && Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw m._result;
      }
      function ga(m) {
        var w = {
          // We use these fields to store the result.
          _status: ma,
          _result: m
        }, B = {
          $$typeof: he,
          _payload: w,
          _init: kr
        };
        {
          var W, ce;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return W;
              },
              set: function(Xe) {
                Oe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = Xe, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Xe) {
                Oe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Xe, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function hi(m) {
        m != null && m.$$typeof === Z ? Oe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? Oe("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && Oe("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && Oe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: J,
          render: m
        };
        {
          var B;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(W) {
              B = W, !m.name && !m.displayName && (m.displayName = W);
            }
          });
        }
        return w;
      }
      var mi;
      mi = Symbol.for("react.module.reference");
      function b(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === L || m === Y || st || m === y || m === F || m === X || Ge || m === _e || Ut || Nt || wn || typeof m == "object" && m !== null && (m.$$typeof === he || m.$$typeof === Z || m.$$typeof === z || m.$$typeof === H || m.$$typeof === J || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === mi || m.getModuleId !== void 0));
      }
      function re(m, w) {
        b(m) || Oe("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var B = {
          $$typeof: Z,
          type: m,
          compare: w === void 0 ? null : w
        };
        {
          var W;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(ce) {
              W = ce, !m.name && !m.displayName && (m.displayName = ce);
            }
          });
        }
        return B;
      }
      function se() {
        var m = le.current;
        return m === null && Oe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Fe(m) {
        var w = se();
        if (m._context !== void 0) {
          var B = m._context;
          B.Consumer === m ? Oe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === m && Oe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(m);
      }
      function Ct(m) {
        var w = se();
        return w.useState(m);
      }
      function Tt(m, w, B) {
        var W = se();
        return W.useReducer(m, w, B);
      }
      function Ke(m) {
        var w = se();
        return w.useRef(m);
      }
      function vt(m, w) {
        var B = se();
        return B.useEffect(m, w);
      }
      function jn(m, w) {
        var B = se();
        return B.useInsertionEffect(m, w);
      }
      function en(m, w) {
        var B = se();
        return B.useLayoutEffect(m, w);
      }
      function un(m, w) {
        var B = se();
        return B.useCallback(m, w);
      }
      function Cr(m, w) {
        var B = se();
        return B.useMemo(m, w);
      }
      function yi(m, w, B) {
        var W = se();
        return W.useImperativeHandle(m, w, B);
      }
      function zt(m, w) {
        {
          var B = se();
          return B.useDebugValue(m, w);
        }
      }
      function Xn() {
        var m = se();
        return m.useTransition();
      }
      function Or(m) {
        var w = se();
        return w.useDeferredValue(m);
      }
      function ht() {
        var m = se();
        return m.useId();
      }
      function Na(m, w, B) {
        var W = se();
        return W.useSyncExternalStore(m, w, B);
      }
      var vl = 0, Ho, hl, qr, ts, Nr, ns, rs;
      function oc() {
      }
      oc.__reactDisabledLog = !0;
      function Vo() {
        {
          if (vl === 0) {
            Ho = console.log, hl = console.info, qr = console.warn, ts = console.error, Nr = console.group, ns = console.groupCollapsed, rs = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: oc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          vl++;
        }
      }
      function ml() {
        {
          if (vl--, vl === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: q({}, m, {
                value: Ho
              }),
              info: q({}, m, {
                value: hl
              }),
              warn: q({}, m, {
                value: qr
              }),
              error: q({}, m, {
                value: ts
              }),
              group: q({}, m, {
                value: Nr
              }),
              groupCollapsed: q({}, m, {
                value: ns
              }),
              groupEnd: q({}, m, {
                value: rs
              })
            });
          }
          vl < 0 && Oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ri = Bt.ReactCurrentDispatcher, Lr;
      function yl(m, w, B) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (ce) {
              var W = ce.stack.trim().match(/\n( *(at )?)/);
              Lr = W && W[1] || "";
            }
          return `
` + Lr + m;
        }
      }
      var gl = !1, Sl;
      {
        var Bo = typeof WeakMap == "function" ? WeakMap : Map;
        Sl = new Bo();
      }
      function $o(m, w) {
        if (!m || gl)
          return "";
        {
          var B = Sl.get(m);
          if (B !== void 0)
            return B;
        }
        var W;
        gl = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Xe;
        Xe = ri.current, ri.current = null, Vo();
        try {
          if (w) {
            var Ee = function() {
              throw Error();
            };
            if (Object.defineProperty(Ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ee, []);
              } catch (_t) {
                W = _t;
              }
              Reflect.construct(m, [], Ee);
            } else {
              try {
                Ee.call();
              } catch (_t) {
                W = _t;
              }
              m.call(Ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_t) {
              W = _t;
            }
            m();
          }
        } catch (_t) {
          if (_t && W && typeof _t.stack == "string") {
            for (var We = _t.stack.split(`
`), St = W.stack.split(`
`), Mt = We.length - 1, tn = St.length - 1; Mt >= 1 && tn >= 0 && We[Mt] !== St[tn]; )
              tn--;
            for (; Mt >= 1 && tn >= 0; Mt--, tn--)
              if (We[Mt] !== St[tn]) {
                if (Mt !== 1 || tn !== 1)
                  do
                    if (Mt--, tn--, tn < 0 || We[Mt] !== St[tn]) {
                      var Xt = `
` + We[Mt].replace(" at new ", " at ");
                      return m.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", m.displayName)), typeof m == "function" && Sl.set(m, Xt), Xt;
                    }
                  while (Mt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          gl = !1, ri.current = Xe, ml(), Error.prepareStackTrace = ce;
        }
        var nn = m ? m.displayName || m.name : "", ln = nn ? yl(nn) : "";
        return typeof m == "function" && Sl.set(m, ln), ln;
      }
      function ji(m, w, B) {
        return $o(m, !1);
      }
      function nd(m) {
        var w = m.prototype;
        return !!(w && w.isReactComponent);
      }
      function gi(m, w, B) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return $o(m, nd(m));
        if (typeof m == "string")
          return yl(m);
        switch (m) {
          case F:
            return yl("Suspense");
          case X:
            return yl("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case J:
              return ji(m.render);
            case Z:
              return gi(m.type, w, B);
            case he: {
              var W = m, ce = W._payload, Xe = W._init;
              try {
                return gi(Xe(ce), w, B);
              } catch {
              }
            }
          }
        return "";
      }
      var At = {}, Io = Bt.ReactDebugCurrentFrame;
      function Jl(m) {
        if (m) {
          var w = m._owner, B = gi(m.type, m._source, w ? w.type : null);
          Io.setExtraStackFrame(B);
        } else
          Io.setExtraStackFrame(null);
      }
      function Yo(m, w, B, W, ce) {
        {
          var Xe = Function.call.bind(gr);
          for (var Ee in m)
            if (Xe(m, Ee)) {
              var We = void 0;
              try {
                if (typeof m[Ee] != "function") {
                  var St = Error((W || "React class") + ": " + B + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw St.name = "Invariant Violation", St;
                }
                We = m[Ee](w, Ee, W, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Mt) {
                We = Mt;
              }
              We && !(We instanceof Error) && (Jl(ce), Oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", B, Ee, typeof We), Jl(null)), We instanceof Error && !(We.message in At) && (At[We.message] = !0, Jl(ce), Oe("Failed %s type: %s", B, We.message), Jl(null));
            }
        }
      }
      function bt(m) {
        if (m) {
          var w = m._owner, B = gi(m.type, m._source, w ? w.type : null);
          mn(B);
        } else
          mn(null);
      }
      var Wo;
      Wo = !1;
      function Qo() {
        if (ut.current) {
          var m = Kn(ut.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function at(m) {
        if (m !== void 0) {
          var w = m.fileName.replace(/^.*[\\\/]/, ""), B = m.lineNumber;
          return `

Check your code at ` + w + ":" + B + ".";
        }
        return "";
      }
      function Zl(m) {
        return m != null ? at(m.__source) : "";
      }
      var En = {};
      function Kr(m) {
        var w = Qo();
        if (!w) {
          var B = typeof m == "string" ? m : m.displayName || m.name;
          B && (w = `

Check the top-level render call using <` + B + ">.");
        }
        return w;
      }
      function Mr(m, w) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var B = Kr(w);
          if (!En[B]) {
            En[B] = !0;
            var W = "";
            m && m._owner && m._owner !== ut.current && (W = " It was passed a child from " + Kn(m._owner.type) + "."), bt(m), Oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, W), bt(null);
          }
        }
      }
      function El(m, w) {
        if (typeof m == "object") {
          if (yn(m))
            for (var B = 0; B < m.length; B++) {
              var W = m[B];
              $t(W) && Mr(W, w);
            }
          else if ($t(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var ce = ie(m);
            if (typeof ce == "function" && ce !== m.entries)
              for (var Xe = ce.call(m), Ee; !(Ee = Xe.next()).done; )
                $t(Ee.value) && Mr(Ee.value, w);
          }
        }
      }
      function Tn(m) {
        {
          var w = m.type;
          if (w == null || typeof w == "string")
            return;
          var B;
          if (typeof w == "function")
            B = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === J || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === Z))
            B = w.propTypes;
          else
            return;
          if (B) {
            var W = Kn(w);
            Yo(B, m.props, "prop", W, m);
          } else if (w.PropTypes !== void 0 && !Wo) {
            Wo = !0;
            var ce = Kn(w);
            Oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && Oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wt(m) {
        {
          for (var w = Object.keys(m.props), B = 0; B < w.length; B++) {
            var W = w[B];
            if (W !== "children" && W !== "key") {
              bt(m), Oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), bt(null);
              break;
            }
          }
          m.ref !== null && (bt(m), Oe("Invalid attribute `ref` supplied to `React.Fragment`."), bt(null));
        }
      }
      function uc(m, w, B) {
        var W = b(m);
        if (!W) {
          var ce = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = Zl(w);
          Xe ? ce += Xe : ce += Qo();
          var Ee;
          m === null ? Ee = "null" : yn(m) ? Ee = "array" : m !== void 0 && m.$$typeof === T ? (Ee = "<" + (Kn(m.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof m, Oe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ce);
        }
        var We = Be.apply(this, arguments);
        if (We == null)
          return We;
        if (W)
          for (var St = 2; St < arguments.length; St++)
            El(arguments[St], m);
        return m === L ? Wt(We) : Tn(We), We;
      }
      var Xr = !1;
      function Jn(m) {
        var w = uc.bind(null, m);
        return w.type = m, Xr || (Xr = !0, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), w;
      }
      function Si(m, w, B) {
        for (var W = Ht.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          El(arguments[ce], W.type);
        return Tn(W), W;
      }
      function sc(m, w) {
        var B = ke.transition;
        ke.transition = {};
        var W = ke.transition;
        ke.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (ke.transition = B, B === null && W._updatedFibers) {
            var ce = W._updatedFibers.size;
            ce > 10 && Lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), W._updatedFibers.clear();
          }
        }
      }
      var Fi = !1, Cl = null;
      function cc(m) {
        if (Cl === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), B = h && h[w];
            Cl = B.call(h, "timers").setImmediate;
          } catch {
            Cl = function(ce) {
              Fi === !1 && (Fi = !0, typeof MessageChannel > "u" && Oe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Xe = new MessageChannel();
              Xe.port1.onmessage = ce, Xe.port2.postMessage(void 0);
            };
          }
        return Cl(m);
      }
      var La = 0, Rl = !1;
      function Pi(m) {
        {
          var w = La;
          La++, De.current === null && (De.current = []);
          var B = De.isBatchingLegacy, W;
          try {
            if (De.isBatchingLegacy = !0, W = m(), !B && De.didScheduleLegacyUpdate) {
              var ce = De.current;
              ce !== null && (De.didScheduleLegacyUpdate = !1, wl(ce));
            }
          } catch (nn) {
            throw Ma(w), nn;
          } finally {
            De.isBatchingLegacy = B;
          }
          if (W !== null && typeof W == "object" && typeof W.then == "function") {
            var Xe = W, Ee = !1, We = {
              then: function(nn, ln) {
                Ee = !0, Xe.then(function(_t) {
                  Ma(w), La === 0 ? Go(_t, nn, ln) : nn(_t);
                }, function(_t) {
                  Ma(w), ln(_t);
                });
              }
            };
            return !Rl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ee || (Rl = !0, Oe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), We;
          } else {
            var St = W;
            if (Ma(w), La === 0) {
              var Mt = De.current;
              Mt !== null && (wl(Mt), De.current = null);
              var tn = {
                then: function(nn, ln) {
                  De.current === null ? (De.current = [], Go(St, nn, ln)) : nn(St);
                }
              };
              return tn;
            } else {
              var Xt = {
                then: function(nn, ln) {
                  nn(St);
                }
              };
              return Xt;
            }
          }
        }
      }
      function Ma(m) {
        m !== La - 1 && Oe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = m;
      }
      function Go(m, w, B) {
        {
          var W = De.current;
          if (W !== null)
            try {
              wl(W), cc(function() {
                W.length === 0 ? (De.current = null, w(m)) : Go(m, w, B);
              });
            } catch (ce) {
              B(ce);
            }
          else
            w(m);
        }
      }
      var xl = !1;
      function wl(m) {
        if (!xl) {
          xl = !0;
          var w = 0;
          try {
            for (; w < m.length; w++) {
              var B = m[w];
              do
                B = B(!0);
              while (B !== null);
            }
            m.length = 0;
          } catch (W) {
            throw m = m.slice(w + 1), W;
          } finally {
            xl = !1;
          }
        }
      }
      var eo = uc, qo = Si, as = Jn, ai = {
        map: Oa,
        forEach: Xl,
        count: dl,
        toArray: Po,
        only: Ai
      };
      C.Children = ai, C.Component = et, C.Fragment = L, C.Profiler = Y, C.PureComponent = yt, C.StrictMode = y, C.Suspense = F, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bt, C.act = Pi, C.cloneElement = qo, C.createContext = pl, C.createElement = eo, C.createFactory = as, C.createRef = yr, C.forwardRef = hi, C.isValidElement = $t, C.lazy = ga, C.memo = re, C.startTransition = sc, C.unstable_act = Pi, C.useCallback = un, C.useContext = Fe, C.useDebugValue = zt, C.useDeferredValue = Or, C.useEffect = vt, C.useId = ht, C.useImperativeHandle = yi, C.useInsertionEffect = jn, C.useLayoutEffect = en, C.useMemo = Cr, C.useReducer = Tt, C.useRef = Ke, C.useState = Ct, C.useSyncExternalStore = Na, C.useTransition = Xn, C.version = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(uv, uv.exports)), uv.exports;
}
process.env.NODE_ENV === "production" ? I0.exports = ik() : I0.exports = lk();
var ee = I0.exports;
const ok = /* @__PURE__ */ ak(ee), uk = /* @__PURE__ */ rk({
  __proto__: null,
  default: ok
}, [ee]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PR;
function sk() {
  if (PR) return iv;
  PR = 1;
  var h = ee, C = Symbol.for("react.element"), S = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, _ = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(Y, z, H) {
    var J, F = {}, X = null, Z = null;
    H !== void 0 && (X = "" + H), z.key !== void 0 && (X = "" + z.key), z.ref !== void 0 && (Z = z.ref);
    for (J in z) T.call(z, J) && !L.hasOwnProperty(J) && (F[J] = z[J]);
    if (Y && Y.defaultProps) for (J in z = Y.defaultProps, z) F[J] === void 0 && (F[J] = z[J]);
    return { $$typeof: C, type: Y, key: X, ref: Z, props: F, _owner: _.current };
  }
  return iv.Fragment = S, iv.jsx = y, iv.jsxs = y, iv;
}
var lv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var HR;
function ck() {
  return HR || (HR = 1, process.env.NODE_ENV !== "production" && function() {
    var h = ee, C = Symbol.for("react.element"), S = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), Y = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), he = Symbol.iterator, _e = "@@iterator";
    function ge(b) {
      if (b === null || typeof b != "object")
        return null;
      var re = he && b[he] || b[_e];
      return typeof re == "function" ? re : null;
    }
    var je = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ie(b) {
      {
        for (var re = arguments.length, se = new Array(re > 1 ? re - 1 : 0), Fe = 1; Fe < re; Fe++)
          se[Fe - 1] = arguments[Fe];
        le("error", b, se);
      }
    }
    function le(b, re, se) {
      {
        var Fe = je.ReactDebugCurrentFrame, Ct = Fe.getStackAddendum();
        Ct !== "" && (re += "%s", se = se.concat([Ct]));
        var Tt = se.map(function(Ke) {
          return String(Ke);
        });
        Tt.unshift("Warning: " + re), Function.prototype.apply.call(console[b], console, Tt);
      }
    }
    var ke = !1, De = !1, ut = !1, Qe = !1, qt = !1, mn;
    mn = Symbol.for("react.module.reference");
    function Ut(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === T || b === L || qt || b === _ || b === H || b === J || Qe || b === Z || ke || De || ut || typeof b == "object" && b !== null && (b.$$typeof === X || b.$$typeof === F || b.$$typeof === y || b.$$typeof === Y || b.$$typeof === z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === mn || b.getModuleId !== void 0));
    }
    function Nt(b, re, se) {
      var Fe = b.displayName;
      if (Fe)
        return Fe;
      var Ct = re.displayName || re.name || "";
      return Ct !== "" ? se + "(" + Ct + ")" : se;
    }
    function wn(b) {
      return b.displayName || "Context";
    }
    function Ge(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case T:
          return "Fragment";
        case S:
          return "Portal";
        case L:
          return "Profiler";
        case _:
          return "StrictMode";
        case H:
          return "Suspense";
        case J:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case Y:
            var re = b;
            return wn(re) + ".Consumer";
          case y:
            var se = b;
            return wn(se._context) + ".Provider";
          case z:
            return Nt(b, b.render, "ForwardRef");
          case F:
            var Fe = b.displayName || null;
            return Fe !== null ? Fe : Ge(b.type) || "Memo";
          case X: {
            var Ct = b, Tt = Ct._payload, Ke = Ct._init;
            try {
              return Ge(Ke(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var st = Object.assign, Bt = 0, Lt, Oe, de, Ve, Se, M, q;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function et() {
      {
        if (Bt === 0) {
          Lt = console.log, Oe = console.info, de = console.warn, Ve = console.error, Se = console.group, M = console.groupCollapsed, q = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        Bt++;
      }
    }
    function dt() {
      {
        if (Bt--, Bt === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, b, {
              value: Lt
            }),
            info: st({}, b, {
              value: Oe
            }),
            warn: st({}, b, {
              value: de
            }),
            error: st({}, b, {
              value: Ve
            }),
            group: st({}, b, {
              value: Se
            }),
            groupCollapsed: st({}, b, {
              value: M
            }),
            groupEnd: st({}, b, {
              value: q
            })
          });
        }
        Bt < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ft = je.ReactCurrentDispatcher, wt;
    function mt(b, re, se) {
      {
        if (wt === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var Fe = Ct.stack.trim().match(/\n( *(at )?)/);
            wt = Fe && Fe[1] || "";
          }
        return `
` + wt + b;
      }
    }
    var yt = !1, an;
    {
      var yr = typeof WeakMap == "function" ? WeakMap : Map;
      an = new yr();
    }
    function Ir(b, re) {
      if (!b || yt)
        return "";
      {
        var se = an.get(b);
        if (se !== void 0)
          return se;
      }
      var Fe;
      yt = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = ft.current, ft.current = null, et();
      try {
        if (re) {
          var Ke = function() {
            throw Error();
          };
          if (Object.defineProperty(Ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ke, []);
            } catch (Xn) {
              Fe = Xn;
            }
            Reflect.construct(b, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Xn) {
              Fe = Xn;
            }
            b.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xn) {
            Fe = Xn;
          }
          b();
        }
      } catch (Xn) {
        if (Xn && Fe && typeof Xn.stack == "string") {
          for (var vt = Xn.stack.split(`
`), jn = Fe.stack.split(`
`), en = vt.length - 1, un = jn.length - 1; en >= 1 && un >= 0 && vt[en] !== jn[un]; )
            un--;
          for (; en >= 1 && un >= 0; en--, un--)
            if (vt[en] !== jn[un]) {
              if (en !== 1 || un !== 1)
                do
                  if (en--, un--, un < 0 || vt[en] !== jn[un]) {
                    var Cr = `
` + vt[en].replace(" at new ", " at ");
                    return b.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", b.displayName)), typeof b == "function" && an.set(b, Cr), Cr;
                  }
                while (en >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        yt = !1, ft.current = Tt, dt(), Error.prepareStackTrace = Ct;
      }
      var yi = b ? b.displayName || b.name : "", zt = yi ? mt(yi) : "";
      return typeof b == "function" && an.set(b, zt), zt;
    }
    function yn(b, re, se) {
      return Ir(b, !1);
    }
    function qn(b) {
      var re = b.prototype;
      return !!(re && re.isReactComponent);
    }
    function Bn(b, re, se) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return Ir(b, qn(b));
      if (typeof b == "string")
        return mt(b);
      switch (b) {
        case H:
          return mt("Suspense");
        case J:
          return mt("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case z:
            return yn(b.render);
          case F:
            return Bn(b.type, re, se);
          case X: {
            var Fe = b, Ct = Fe._payload, Tt = Fe._init;
            try {
              return Bn(Tt(Ct), re, se);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, On = {}, Yr = je.ReactDebugCurrentFrame;
    function Wr(b) {
      if (b) {
        var re = b._owner, se = Bn(b.type, b._source, re ? re.type : null);
        Yr.setExtraStackFrame(se);
      } else
        Yr.setExtraStackFrame(null);
    }
    function Kn(b, re, se, Fe, Ct) {
      {
        var Tt = Function.call.bind(An);
        for (var Ke in b)
          if (Tt(b, Ke)) {
            var vt = void 0;
            try {
              if (typeof b[Ke] != "function") {
                var jn = Error((Fe || "React class") + ": " + se + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              vt = b[Ke](re, Ke, Fe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              vt = en;
            }
            vt && !(vt instanceof Error) && (Wr(Ct), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", se, Ke, typeof vt), Wr(null)), vt instanceof Error && !(vt.message in On) && (On[vt.message] = !0, Wr(Ct), ie("Failed %s type: %s", se, vt.message), Wr(null));
          }
      }
    }
    var gr = Array.isArray;
    function Qr(b) {
      return gr(b);
    }
    function Sr(b) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, se = re && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return se;
      }
    }
    function va(b) {
      try {
        return ir(b), !1;
      } catch {
        return !0;
      }
    }
    function ir(b) {
      return "" + b;
    }
    function Gr(b) {
      if (va(b))
        return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(b)), ir(b);
    }
    var gn = je.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pi, ha, ve;
    ve = {};
    function Be(b) {
      if (An.call(b, "ref")) {
        var re = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function pt(b) {
      if (An.call(b, "key")) {
        var re = Object.getOwnPropertyDescriptor(b, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Ht(b, re) {
      if (typeof b.ref == "string" && gn.current && re && gn.current.stateNode !== re) {
        var se = Ge(gn.current.type);
        ve[se] || (ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ge(gn.current.type), b.ref), ve[se] = !0);
      }
    }
    function $t(b, re) {
      {
        var se = function() {
          pi || (pi = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        se.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function Nn(b, re) {
      {
        var se = function() {
          ha || (ha = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        se.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var Sn = function(b, re, se, Fe, Ct, Tt, Ke) {
      var vt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: b,
        key: re,
        ref: se,
        props: Ke,
        // Record the component responsible for creating this element.
        _owner: Tt
      };
      return vt._store = {}, Object.defineProperty(vt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(vt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(vt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(vt.props), Object.freeze(vt)), vt;
    };
    function Er(b, re, se, Fe, Ct) {
      {
        var Tt, Ke = {}, vt = null, jn = null;
        se !== void 0 && (Gr(se), vt = "" + se), pt(re) && (Gr(re.key), vt = "" + re.key), Be(re) && (jn = re.ref, Ht(re, Ct));
        for (Tt in re)
          An.call(re, Tt) && !_r.hasOwnProperty(Tt) && (Ke[Tt] = re[Tt]);
        if (b && b.defaultProps) {
          var en = b.defaultProps;
          for (Tt in en)
            Ke[Tt] === void 0 && (Ke[Tt] = en[Tt]);
        }
        if (vt || jn) {
          var un = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          vt && $t(Ke, un), jn && Nn(Ke, un);
        }
        return Sn(b, vt, jn, Ct, Fe, gn.current, Ke);
      }
    }
    var Kt = je.ReactCurrentOwner, Dr = je.ReactDebugCurrentFrame;
    function It(b) {
      if (b) {
        var re = b._owner, se = Bn(b.type, b._source, re ? re.type : null);
        Dr.setExtraStackFrame(se);
      } else
        Dr.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function ti(b) {
      return typeof b == "object" && b !== null && b.$$typeof === C;
    }
    function Oa() {
      {
        if (Kt.current) {
          var b = Ge(Kt.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function dl(b) {
      return "";
    }
    var Xl = {};
    function Po(b) {
      {
        var re = Oa();
        if (!re) {
          var se = typeof b == "string" ? b : b.displayName || b.name;
          se && (re = `

Check the top-level render call using <` + se + ">.");
        }
        return re;
      }
    }
    function Ai(b, re) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var se = Po(re);
        if (Xl[se])
          return;
        Xl[se] = !0;
        var Fe = "";
        b && b._owner && b._owner !== Kt.current && (Fe = " It was passed a child from " + Ge(b._owner.type) + "."), It(b), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, Fe), It(null);
      }
    }
    function pl(b, re) {
      {
        if (typeof b != "object")
          return;
        if (Qr(b))
          for (var se = 0; se < b.length; se++) {
            var Fe = b[se];
            ti(Fe) && Ai(Fe, re);
          }
        else if (ti(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var Ct = ge(b);
          if (typeof Ct == "function" && Ct !== b.entries)
            for (var Tt = Ct.call(b), Ke; !(Ke = Tt.next()).done; )
              ti(Ke.value) && Ai(Ke.value, re);
        }
      }
    }
    function ma(b) {
      {
        var re = b.type;
        if (re == null || typeof re == "string")
          return;
        var se;
        if (typeof re == "function")
          se = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === F))
          se = re.propTypes;
        else
          return;
        if (se) {
          var Fe = Ge(re);
          Kn(se, b.props, "prop", Fe, b);
        } else if (re.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var Ct = Ge(re);
          ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vi(b) {
      {
        for (var re = Object.keys(b.props), se = 0; se < re.length; se++) {
          var Fe = re[se];
          if (Fe !== "children" && Fe !== "key") {
            It(b), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), It(null);
            break;
          }
        }
        b.ref !== null && (It(b), ie("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var ya = {};
    function ni(b, re, se, Fe, Ct, Tt) {
      {
        var Ke = Ut(b);
        if (!Ke) {
          var vt = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = dl();
          jn ? vt += jn : vt += Oa();
          var en;
          b === null ? en = "null" : Qr(b) ? en = "array" : b !== void 0 && b.$$typeof === C ? (en = "<" + (Ge(b.type) || "Unknown") + " />", vt = " Did you accidentally export a JSX literal instead of a component?") : en = typeof b, ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, vt);
        }
        var un = Er(b, re, se, Ct, Tt);
        if (un == null)
          return un;
        if (Ke) {
          var Cr = re.children;
          if (Cr !== void 0)
            if (Fe)
              if (Qr(Cr)) {
                for (var yi = 0; yi < Cr.length; yi++)
                  pl(Cr[yi], b);
                Object.freeze && Object.freeze(Cr);
              } else
                ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(Cr, b);
        }
        if (An.call(re, "key")) {
          var zt = Ge(b), Xn = Object.keys(re).filter(function(Na) {
            return Na !== "key";
          }), Or = Xn.length > 0 ? "{key: someKey, " + Xn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ya[zt + Or]) {
            var ht = Xn.length > 0 ? "{" + Xn.join(": ..., ") + ": ...}" : "{}";
            ie(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Or, zt, ht, zt), ya[zt + Or] = !0;
          }
        }
        return b === T ? vi(un) : ma(un), un;
      }
    }
    function kr(b, re, se) {
      return ni(b, re, se, !0);
    }
    function ga(b, re, se) {
      return ni(b, re, se, !1);
    }
    var hi = ga, mi = kr;
    lv.Fragment = T, lv.jsx = hi, lv.jsxs = mi;
  }()), lv;
}
process.env.NODE_ENV === "production" ? $0.exports = sk() : $0.exports = ck();
var pe = $0.exports, sv = {}, Y0 = { exports: {} }, Za = {}, ly = { exports: {} }, P0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VR;
function fk() {
  return VR || (VR = 1, function(h) {
    function C(de, Ve) {
      var Se = de.length;
      de.push(Ve);
      e: for (; 0 < Se; ) {
        var M = Se - 1 >>> 1, q = de[M];
        if (0 < _(q, Ve)) de[M] = Ve, de[Se] = q, Se = M;
        else break e;
      }
    }
    function S(de) {
      return de.length === 0 ? null : de[0];
    }
    function T(de) {
      if (de.length === 0) return null;
      var Ve = de[0], Se = de.pop();
      if (Se !== Ve) {
        de[0] = Se;
        e: for (var M = 0, q = de.length, qe = q >>> 1; M < qe; ) {
          var et = 2 * (M + 1) - 1, dt = de[et], ft = et + 1, wt = de[ft];
          if (0 > _(dt, Se)) ft < q && 0 > _(wt, dt) ? (de[M] = wt, de[ft] = Se, M = ft) : (de[M] = dt, de[et] = Se, M = et);
          else if (ft < q && 0 > _(wt, Se)) de[M] = wt, de[ft] = Se, M = ft;
          else break e;
        }
      }
      return Ve;
    }
    function _(de, Ve) {
      var Se = de.sortIndex - Ve.sortIndex;
      return Se !== 0 ? Se : de.id - Ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var L = performance;
      h.unstable_now = function() {
        return L.now();
      };
    } else {
      var y = Date, Y = y.now();
      h.unstable_now = function() {
        return y.now() - Y;
      };
    }
    var z = [], H = [], J = 1, F = null, X = 3, Z = !1, he = !1, _e = !1, ge = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function le(de) {
      for (var Ve = S(H); Ve !== null; ) {
        if (Ve.callback === null) T(H);
        else if (Ve.startTime <= de) T(H), Ve.sortIndex = Ve.expirationTime, C(z, Ve);
        else break;
        Ve = S(H);
      }
    }
    function ke(de) {
      if (_e = !1, le(de), !he) if (S(z) !== null) he = !0, Lt(De);
      else {
        var Ve = S(H);
        Ve !== null && Oe(ke, Ve.startTime - de);
      }
    }
    function De(de, Ve) {
      he = !1, _e && (_e = !1, je(qt), qt = -1), Z = !0;
      var Se = X;
      try {
        for (le(Ve), F = S(z); F !== null && (!(F.expirationTime > Ve) || de && !Nt()); ) {
          var M = F.callback;
          if (typeof M == "function") {
            F.callback = null, X = F.priorityLevel;
            var q = M(F.expirationTime <= Ve);
            Ve = h.unstable_now(), typeof q == "function" ? F.callback = q : F === S(z) && T(z), le(Ve);
          } else T(z);
          F = S(z);
        }
        if (F !== null) var qe = !0;
        else {
          var et = S(H);
          et !== null && Oe(ke, et.startTime - Ve), qe = !1;
        }
        return qe;
      } finally {
        F = null, X = Se, Z = !1;
      }
    }
    var ut = !1, Qe = null, qt = -1, mn = 5, Ut = -1;
    function Nt() {
      return !(h.unstable_now() - Ut < mn);
    }
    function wn() {
      if (Qe !== null) {
        var de = h.unstable_now();
        Ut = de;
        var Ve = !0;
        try {
          Ve = Qe(!0, de);
        } finally {
          Ve ? Ge() : (ut = !1, Qe = null);
        }
      } else ut = !1;
    }
    var Ge;
    if (typeof ie == "function") Ge = function() {
      ie(wn);
    };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), Bt = st.port2;
      st.port1.onmessage = wn, Ge = function() {
        Bt.postMessage(null);
      };
    } else Ge = function() {
      ge(wn, 0);
    };
    function Lt(de) {
      Qe = de, ut || (ut = !0, Ge());
    }
    function Oe(de, Ve) {
      qt = ge(function() {
        de(h.unstable_now());
      }, Ve);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, h.unstable_continueExecution = function() {
      he || Z || (he = !0, Lt(De));
    }, h.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : mn = 0 < de ? Math.floor(1e3 / de) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, h.unstable_getFirstCallbackNode = function() {
      return S(z);
    }, h.unstable_next = function(de) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = X;
      }
      var Se = X;
      X = Ve;
      try {
        return de();
      } finally {
        X = Se;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(de, Ve) {
      switch (de) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          de = 3;
      }
      var Se = X;
      X = de;
      try {
        return Ve();
      } finally {
        X = Se;
      }
    }, h.unstable_scheduleCallback = function(de, Ve, Se) {
      var M = h.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? M + Se : M) : Se = M, de) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = Se + q, de = { id: J++, callback: Ve, priorityLevel: de, startTime: Se, expirationTime: q, sortIndex: -1 }, Se > M ? (de.sortIndex = Se, C(H, de), S(z) === null && de === S(H) && (_e ? (je(qt), qt = -1) : _e = !0, Oe(ke, Se - M))) : (de.sortIndex = q, C(z, de), he || Z || (he = !0, Lt(De))), de;
    }, h.unstable_shouldYield = Nt, h.unstable_wrapCallback = function(de) {
      var Ve = X;
      return function() {
        var Se = X;
        X = Ve;
        try {
          return de.apply(this, arguments);
        } finally {
          X = Se;
        }
      };
    };
  }(P0)), P0;
}
var H0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BR;
function dk() {
  return BR || (BR = 1, function(h) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = !1, S = !1, T = 5;
      function _(ve, Be) {
        var pt = ve.length;
        ve.push(Be), Y(ve, Be, pt);
      }
      function L(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function y(ve) {
        if (ve.length === 0)
          return null;
        var Be = ve[0], pt = ve.pop();
        return pt !== Be && (ve[0] = pt, z(ve, pt, 0)), Be;
      }
      function Y(ve, Be, pt) {
        for (var Ht = pt; Ht > 0; ) {
          var $t = Ht - 1 >>> 1, Nn = ve[$t];
          if (H(Nn, Be) > 0)
            ve[$t] = Be, ve[Ht] = Nn, Ht = $t;
          else
            return;
        }
      }
      function z(ve, Be, pt) {
        for (var Ht = pt, $t = ve.length, Nn = $t >>> 1; Ht < Nn; ) {
          var Sn = (Ht + 1) * 2 - 1, Er = ve[Sn], Kt = Sn + 1, Dr = ve[Kt];
          if (H(Er, Be) < 0)
            Kt < $t && H(Dr, Er) < 0 ? (ve[Ht] = Dr, ve[Kt] = Be, Ht = Kt) : (ve[Ht] = Er, ve[Sn] = Be, Ht = Sn);
          else if (Kt < $t && H(Dr, Be) < 0)
            ve[Ht] = Dr, ve[Kt] = Be, Ht = Kt;
          else
            return;
        }
      }
      function H(ve, Be) {
        var pt = ve.sortIndex - Be.sortIndex;
        return pt !== 0 ? pt : ve.id - Be.id;
      }
      var J = 1, F = 2, X = 3, Z = 4, he = 5;
      function _e(ve, Be) {
      }
      var ge = typeof performance == "object" && typeof performance.now == "function";
      if (ge) {
        var je = performance;
        h.unstable_now = function() {
          return je.now();
        };
      } else {
        var ie = Date, le = ie.now();
        h.unstable_now = function() {
          return ie.now() - le;
        };
      }
      var ke = 1073741823, De = -1, ut = 250, Qe = 5e3, qt = 1e4, mn = ke, Ut = [], Nt = [], wn = 1, Ge = null, st = X, Bt = !1, Lt = !1, Oe = !1, de = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, Se = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function M(ve) {
        for (var Be = L(Nt); Be !== null; ) {
          if (Be.callback === null)
            y(Nt);
          else if (Be.startTime <= ve)
            y(Nt), Be.sortIndex = Be.expirationTime, _(Ut, Be);
          else
            return;
          Be = L(Nt);
        }
      }
      function q(ve) {
        if (Oe = !1, M(ve), !Lt)
          if (L(Ut) !== null)
            Lt = !0, Gr(qe);
          else {
            var Be = L(Nt);
            Be !== null && gn(q, Be.startTime - ve);
          }
      }
      function qe(ve, Be) {
        Lt = !1, Oe && (Oe = !1, _r()), Bt = !0;
        var pt = st;
        try {
          var Ht;
          if (!S) return et(ve, Be);
        } finally {
          Ge = null, st = pt, Bt = !1;
        }
      }
      function et(ve, Be) {
        var pt = Be;
        for (M(pt), Ge = L(Ut); Ge !== null && !C && !(Ge.expirationTime > pt && (!ve || Wr())); ) {
          var Ht = Ge.callback;
          if (typeof Ht == "function") {
            Ge.callback = null, st = Ge.priorityLevel;
            var $t = Ge.expirationTime <= pt, Nn = Ht($t);
            pt = h.unstable_now(), typeof Nn == "function" ? Ge.callback = Nn : Ge === L(Ut) && y(Ut), M(pt);
          } else
            y(Ut);
          Ge = L(Ut);
        }
        if (Ge !== null)
          return !0;
        var Sn = L(Nt);
        return Sn !== null && gn(q, Sn.startTime - pt), !1;
      }
      function dt(ve, Be) {
        switch (ve) {
          case J:
          case F:
          case X:
          case Z:
          case he:
            break;
          default:
            ve = X;
        }
        var pt = st;
        st = ve;
        try {
          return Be();
        } finally {
          st = pt;
        }
      }
      function ft(ve) {
        var Be;
        switch (st) {
          case J:
          case F:
          case X:
            Be = X;
            break;
          default:
            Be = st;
            break;
        }
        var pt = st;
        st = Be;
        try {
          return ve();
        } finally {
          st = pt;
        }
      }
      function wt(ve) {
        var Be = st;
        return function() {
          var pt = st;
          st = Be;
          try {
            return ve.apply(this, arguments);
          } finally {
            st = pt;
          }
        };
      }
      function mt(ve, Be, pt) {
        var Ht = h.unstable_now(), $t;
        if (typeof pt == "object" && pt !== null) {
          var Nn = pt.delay;
          typeof Nn == "number" && Nn > 0 ? $t = Ht + Nn : $t = Ht;
        } else
          $t = Ht;
        var Sn;
        switch (ve) {
          case J:
            Sn = De;
            break;
          case F:
            Sn = ut;
            break;
          case he:
            Sn = mn;
            break;
          case Z:
            Sn = qt;
            break;
          case X:
          default:
            Sn = Qe;
            break;
        }
        var Er = $t + Sn, Kt = {
          id: wn++,
          callback: Be,
          priorityLevel: ve,
          startTime: $t,
          expirationTime: Er,
          sortIndex: -1
        };
        return $t > Ht ? (Kt.sortIndex = $t, _(Nt, Kt), L(Ut) === null && Kt === L(Nt) && (Oe ? _r() : Oe = !0, gn(q, $t - Ht))) : (Kt.sortIndex = Er, _(Ut, Kt), !Lt && !Bt && (Lt = !0, Gr(qe))), Kt;
      }
      function yt() {
      }
      function an() {
        !Lt && !Bt && (Lt = !0, Gr(qe));
      }
      function yr() {
        return L(Ut);
      }
      function Ir(ve) {
        ve.callback = null;
      }
      function yn() {
        return st;
      }
      var qn = !1, Bn = null, An = -1, On = T, Yr = -1;
      function Wr() {
        var ve = h.unstable_now() - Yr;
        return !(ve < On);
      }
      function Kn() {
      }
      function gr(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? On = Math.floor(1e3 / ve) : On = T;
      }
      var Qr = function() {
        if (Bn !== null) {
          var ve = h.unstable_now();
          Yr = ve;
          var Be = !0, pt = !0;
          try {
            pt = Bn(Be, ve);
          } finally {
            pt ? Sr() : (qn = !1, Bn = null);
          }
        } else
          qn = !1;
      }, Sr;
      if (typeof Se == "function")
        Sr = function() {
          Se(Qr);
        };
      else if (typeof MessageChannel < "u") {
        var va = new MessageChannel(), ir = va.port2;
        va.port1.onmessage = Qr, Sr = function() {
          ir.postMessage(null);
        };
      } else
        Sr = function() {
          de(Qr, 0);
        };
      function Gr(ve) {
        Bn = ve, qn || (qn = !0, Sr());
      }
      function gn(ve, Be) {
        An = de(function() {
          ve(h.unstable_now());
        }, Be);
      }
      function _r() {
        Ve(An), An = -1;
      }
      var pi = Kn, ha = null;
      h.unstable_IdlePriority = he, h.unstable_ImmediatePriority = J, h.unstable_LowPriority = Z, h.unstable_NormalPriority = X, h.unstable_Profiling = ha, h.unstable_UserBlockingPriority = F, h.unstable_cancelCallback = Ir, h.unstable_continueExecution = an, h.unstable_forceFrameRate = gr, h.unstable_getCurrentPriorityLevel = yn, h.unstable_getFirstCallbackNode = yr, h.unstable_next = ft, h.unstable_pauseExecution = yt, h.unstable_requestPaint = pi, h.unstable_runWithPriority = dt, h.unstable_scheduleCallback = mt, h.unstable_shouldYield = Wr, h.unstable_wrapCallback = wt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(H0)), H0;
}
var $R;
function nx() {
  return $R || ($R = 1, process.env.NODE_ENV === "production" ? ly.exports = fk() : ly.exports = dk()), ly.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IR;
function pk() {
  if (IR) return Za;
  IR = 1;
  var h = ee, C = nx();
  function S(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var T = /* @__PURE__ */ new Set(), _ = {};
  function L(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (_[n] = r, n = 0; n < r.length; n++) T.add(r[n]);
  }
  var Y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), z = Object.prototype.hasOwnProperty, H = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, J = {}, F = {};
  function X(n) {
    return z.call(F, n) ? !0 : z.call(J, n) ? !1 : H.test(n) ? F[n] = !0 : (J[n] = !0, !1);
  }
  function Z(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function he(n, r, l, u) {
    if (r === null || typeof r > "u" || Z(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function _e(n, r, l, u, c, d, g) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = g;
  }
  var ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ge[n] = new _e(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ge[r] = new _e(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ge[n] = new _e(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ge[n] = new _e(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ge[n] = new _e(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ge[n] = new _e(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ge[n] = new _e(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ge[n] = new _e(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ge[n] = new _e(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var je = /[\-:]([a-z])/g;
  function ie(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      je,
      ie
    );
    ge[r] = new _e(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(je, ie);
    ge[r] = new _e(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(je, ie);
    ge[r] = new _e(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ge[n] = new _e(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ge.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ge[n] = new _e(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function le(n, r, l, u) {
    var c = ge.hasOwnProperty(r) ? ge[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (he(r, l, c, u) && (l = null), u || c === null ? X(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var ke = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), ut = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), qt = Symbol.for("react.strict_mode"), mn = Symbol.for("react.profiler"), Ut = Symbol.for("react.provider"), Nt = Symbol.for("react.context"), wn = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), Bt = Symbol.for("react.memo"), Lt = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se = Object.assign, M;
  function q(n) {
    if (M === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      M = r && r[1] || "";
    }
    return `
` + M + n;
  }
  var qe = !1;
  function et(n, r) {
    if (!n || qe) return "";
    qe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch ($) {
          var u = $;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch ($) {
          u = $;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          u = $;
        }
        n();
      }
    } catch ($) {
      if ($ && u && typeof $.stack == "string") {
        for (var c = $.stack.split(`
`), d = u.stack.split(`
`), g = c.length - 1, x = d.length - 1; 1 <= g && 0 <= x && c[g] !== d[x]; ) x--;
        for (; 1 <= g && 0 <= x; g--, x--) if (c[g] !== d[x]) {
          if (g !== 1 || x !== 1)
            do
              if (g--, x--, 0 > x || c[g] !== d[x]) {
                var D = `
` + c[g].replace(" at new ", " at ");
                return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
              }
            while (1 <= g && 0 <= x);
          break;
        }
      }
    } finally {
      qe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? q(n) : "";
  }
  function dt(n) {
    switch (n.tag) {
      case 5:
        return q(n.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = et(n.type, !1), n;
      case 11:
        return n = et(n.type.render, !1), n;
      case 1:
        return n = et(n.type, !0), n;
      default:
        return "";
    }
  }
  function ft(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Qe:
        return "Fragment";
      case ut:
        return "Portal";
      case mn:
        return "Profiler";
      case qt:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case st:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Nt:
        return (n.displayName || "Context") + ".Consumer";
      case Ut:
        return (n._context.displayName || "Context") + ".Provider";
      case wn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Bt:
        return r = n.displayName || null, r !== null ? r : ft(n.type) || "Memo";
      case Lt:
        r = n._payload, n = n._init;
        try {
          return ft(n(r));
        } catch {
        }
    }
    return null;
  }
  function wt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ft(r);
      case 8:
        return r === qt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function mt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function yt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function an(n) {
    var r = yt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        u = "" + g, d.call(this, g);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(g) {
        u = "" + g;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function yr(n) {
    n._valueTracker || (n._valueTracker = an(n));
  }
  function Ir(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = yt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function yn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function qn(n, r) {
    var l = r.checked;
    return Se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = mt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function An(n, r) {
    r = r.checked, r != null && le(n, "checked", r, !1);
  }
  function On(n, r) {
    An(n, r);
    var l = mt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wr(n, r.type, mt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Yr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Wr(n, r, l) {
    (r !== "number" || yn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Kn = Array.isArray;
  function gr(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + mt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Qr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(S(91));
    return Se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(S(92));
        if (Kn(l)) {
          if (1 < l.length) throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: mt(l) };
  }
  function va(n, r) {
    var l = mt(r.value), u = mt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function ir(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Gr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Gr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _r, pi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _r.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ha(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ve = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function(n) {
    Be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ve[r] = ve[n];
    });
  });
  function pt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ve.hasOwnProperty(n) && ve[n] ? ("" + r).trim() : r + "px";
  }
  function Ht(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = pt(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var $t = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nn(n, r) {
    if (r) {
      if ($t[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(S(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(S(62));
    }
  }
  function Sn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Er = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Dr = null, It = null, Yt = null;
  function ti(n) {
    if (n = gs(n)) {
      if (typeof Dr != "function") throw Error(S(280));
      var r = n.stateNode;
      r && (r = Ie(r), Dr(n.stateNode, n.type, r));
    }
  }
  function Oa(n) {
    It ? Yt ? Yt.push(n) : Yt = [n] : It = n;
  }
  function dl() {
    if (It) {
      var n = It, r = Yt;
      if (Yt = It = null, ti(n), r) for (n = 0; n < r.length; n++) ti(r[n]);
    }
  }
  function Xl(n, r) {
    return n(r);
  }
  function Po() {
  }
  var Ai = !1;
  function pl(n, r, l) {
    if (Ai) return n(r, l);
    Ai = !0;
    try {
      return Xl(n, r, l);
    } finally {
      Ai = !1, (It !== null || Yt !== null) && (Po(), dl());
    }
  }
  function ma(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Ie(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(S(231, r, typeof l));
    return l;
  }
  var vi = !1;
  if (Y) try {
    var ya = {};
    Object.defineProperty(ya, "passive", { get: function() {
      vi = !0;
    } }), window.addEventListener("test", ya, ya), window.removeEventListener("test", ya, ya);
  } catch {
    vi = !1;
  }
  function ni(n, r, l, u, c, d, g, x, D) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (ae) {
      this.onError(ae);
    }
  }
  var kr = !1, ga = null, hi = !1, mi = null, b = { onError: function(n) {
    kr = !0, ga = n;
  } };
  function re(n, r, l, u, c, d, g, x, D) {
    kr = !1, ga = null, ni.apply(b, arguments);
  }
  function se(n, r, l, u, c, d, g, x, D) {
    if (re.apply(this, arguments), kr) {
      if (kr) {
        var $ = ga;
        kr = !1, ga = null;
      } else throw Error(S(198));
      hi || (hi = !0, mi = $);
    }
  }
  function Fe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Tt(n) {
    if (Fe(n) !== n) throw Error(S(188));
  }
  function Ke(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Fe(n), r === null) throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Tt(c), n;
          if (d === u) return Tt(c), r;
          d = d.sibling;
        }
        throw Error(S(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var g = !1, x = c.child; x; ) {
          if (x === l) {
            g = !0, l = c, u = d;
            break;
          }
          if (x === u) {
            g = !0, u = c, l = d;
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = d.child; x; ) {
            if (x === l) {
              g = !0, l = d, u = c;
              break;
            }
            if (x === u) {
              g = !0, u = d, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!g) throw Error(S(189));
        }
      }
      if (l.alternate !== u) throw Error(S(190));
    }
    if (l.tag !== 3) throw Error(S(188));
    return l.stateNode.current === l ? n : r;
  }
  function vt(n) {
    return n = Ke(n), n !== null ? jn(n) : null;
  }
  function jn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = jn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var en = C.unstable_scheduleCallback, un = C.unstable_cancelCallback, Cr = C.unstable_shouldYield, yi = C.unstable_requestPaint, zt = C.unstable_now, Xn = C.unstable_getCurrentPriorityLevel, Or = C.unstable_ImmediatePriority, ht = C.unstable_UserBlockingPriority, Na = C.unstable_NormalPriority, vl = C.unstable_LowPriority, Ho = C.unstable_IdlePriority, hl = null, qr = null;
  function ts(n) {
    if (qr && typeof qr.onCommitFiberRoot == "function") try {
      qr.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : oc, ns = Math.log, rs = Math.LN2;
  function oc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ns(n) / rs | 0) | 0;
  }
  var Vo = 64, ml = 4194304;
  function ri(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Lr(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, g = l & 268435455;
    if (g !== 0) {
      var x = g & ~c;
      x !== 0 ? u = ri(x) : (d &= g, d !== 0 && (u = ri(d)));
    } else g = l & ~c, g !== 0 ? u = ri(g) : d !== 0 && (u = ri(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Nr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function yl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var g = 31 - Nr(d), x = 1 << g, D = c[g];
      D === -1 ? (!(x & l) || x & u) && (c[g] = yl(x, r)) : D <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function Sl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bo() {
    var n = Vo;
    return Vo <<= 1, !(Vo & 4194240) && (Vo = 64), n;
  }
  function $o(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function ji(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function nd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function gi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Nr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var At = 0;
  function Io(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Jl, Yo, bt, Wo, Qo, at = !1, Zl = [], En = null, Kr = null, Mr = null, El = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Wt = [], uc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Xr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Kr = null;
        break;
      case "mouseover":
      case "mouseout":
        Mr = null;
        break;
      case "pointerover":
      case "pointerout":
        El.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(r.pointerId);
    }
  }
  function Jn(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = gs(r), r !== null && Yo(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Si(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return En = Jn(En, n, r, l, u, c), !0;
      case "dragenter":
        return Kr = Jn(Kr, n, r, l, u, c), !0;
      case "mouseover":
        return Mr = Jn(Mr, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return El.set(d, Jn(El.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tn.set(d, Jn(Tn.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function sc(n) {
    var r = za(n.target);
    if (r !== null) {
      var l = Fe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ct(l), r !== null) {
            n.blockedOn = r, Qo(n.priority, function() {
              bt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Fi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = qo(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        Er = u, l.target.dispatchEvent(u), Er = null;
      } else return r = gs(l), r !== null && Yo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Cl(n, r, l) {
    Fi(n) && l.delete(r);
  }
  function cc() {
    at = !1, En !== null && Fi(En) && (En = null), Kr !== null && Fi(Kr) && (Kr = null), Mr !== null && Fi(Mr) && (Mr = null), El.forEach(Cl), Tn.forEach(Cl);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, at || (at = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, cc)));
  }
  function Rl(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < Zl.length) {
      La(Zl[0], n);
      for (var l = 1; l < Zl.length; l++) {
        var u = Zl[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (En !== null && La(En, n), Kr !== null && La(Kr, n), Mr !== null && La(Mr, n), El.forEach(r), Tn.forEach(r), l = 0; l < Wt.length; l++) u = Wt[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Wt.length && (l = Wt[0], l.blockedOn === null); ) sc(l), l.blockedOn === null && Wt.shift();
  }
  var Pi = ke.ReactCurrentBatchConfig, Ma = !0;
  function Go(n, r, l, u) {
    var c = At, d = Pi.transition;
    Pi.transition = null;
    try {
      At = 1, wl(n, r, l, u);
    } finally {
      At = c, Pi.transition = d;
    }
  }
  function xl(n, r, l, u) {
    var c = At, d = Pi.transition;
    Pi.transition = null;
    try {
      At = 4, wl(n, r, l, u);
    } finally {
      At = c, Pi.transition = d;
    }
  }
  function wl(n, r, l, u) {
    if (Ma) {
      var c = qo(n, r, l, u);
      if (c === null) Sc(n, r, u, eo, l), Xr(n, u);
      else if (Si(c, n, r, l, u)) u.stopPropagation();
      else if (Xr(n, u), r & 4 && -1 < uc.indexOf(n)) {
        for (; c !== null; ) {
          var d = gs(c);
          if (d !== null && Jl(d), d = qo(n, r, l, u), d === null && Sc(n, r, u, eo, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Sc(n, r, u, null, l);
    }
  }
  var eo = null;
  function qo(n, r, l, u) {
    if (eo = null, n = Kt(u), n = za(n), n !== null) if (r = Fe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ct(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return eo = n, null;
  }
  function as(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xn()) {
          case Or:
            return 1;
          case ht:
            return 4;
          case Na:
          case vl:
            return 16;
          case Ho:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, m = null, w = null;
  function B() {
    if (w) return w;
    var n, r = m, l = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var g = l - n;
    for (u = 1; u <= g && r[l - u] === c[d - u]; u++) ;
    return w = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function W(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ce() {
    return !0;
  }
  function Xe() {
    return !1;
  }
  function Ee(n) {
    function r(l, u, c, d, g) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = g, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ce : Xe, this.isPropagationStopped = Xe, this;
    }
    return Se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ce);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ce);
    }, persist: function() {
    }, isPersistent: ce }), r;
  }
  var We = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, St = Ee(We), Mt = Se({}, We, { view: 0, detail: 0 }), tn = Ee(Mt), Xt, nn, ln, _t = Se({}, Mt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: od, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ln && (ln && n.type === "mousemove" ? (Xt = n.screenX - ln.screenX, nn = n.screenY - ln.screenY) : nn = Xt = 0, ln = n), Xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nn;
  } }), Hi = Ee(_t), Ko = Se({}, _t, { dataTransfer: 0 }), is = Ee(Ko), rd = Se({}, Mt, { relatedTarget: 0 }), ii = Ee(rd), ls = Se({}, We, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), os = Ee(ls), ad = Se({}, We, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), my = Ee(ad), yy = Se({}, We, { data: 0 }), id = Ee(yy), ld = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, yv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = gv[n]) ? !!r[n] : !1;
  }
  function od() {
    return Sv;
  }
  var Vi = Se({}, Mt, { key: function(n) {
    if (n.key) {
      var r = ld[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = W(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? yv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: od, charCode: function(n) {
    return n.type === "keypress" ? W(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? W(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), gy = Ee(Vi), ud = Se({}, _t, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = Ee(ud), sd = Se({}, Mt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: od }), Sy = Ee(sd), dc = Se({}, We, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ev = Ee(dc), Jr = Se({}, _t, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bi = Ee(Jr), Fn = [9, 13, 27, 32], li = Y && "CompositionEvent" in window, to = null;
  Y && "documentMode" in document && (to = document.documentMode);
  var pc = Y && "TextEvent" in window && !to, Cv = Y && (!li || to && 8 < to && 11 >= to), Xo = " ", Rv = !1;
  function xv(n, r) {
    switch (n) {
      case "keyup":
        return Fn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Jo = !1;
  function Ey(n, r) {
    switch (n) {
      case "compositionend":
        return vc(r);
      case "keypress":
        return r.which !== 32 ? null : (Rv = !0, Xo);
      case "textInput":
        return n = r.data, n === Xo && Rv ? null : n;
      default:
        return null;
    }
  }
  function Cy(n, r) {
    if (Jo) return n === "compositionend" || !li && xv(n, r) ? (n = B(), w = m = ai = null, Jo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var wv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Tv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!wv[n.type] : r === "textarea";
  }
  function bv(n, r, l, u) {
    Oa(u), r = hs(r, "onChange"), 0 < r.length && (l = new St("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var us = null, Zo = null;
  function eu(n) {
    gc(n, 0);
  }
  function tu(n) {
    var r = ru(n);
    if (Ir(r)) return n;
  }
  function _v(n, r) {
    if (n === "change") return r;
  }
  var cd = !1;
  if (Y) {
    var fd;
    if (Y) {
      var dd = "oninput" in document;
      if (!dd) {
        var Dv = document.createElement("div");
        Dv.setAttribute("oninput", "return;"), dd = typeof Dv.oninput == "function";
      }
      fd = dd;
    } else fd = !1;
    cd = fd && (!document.documentMode || 9 < document.documentMode);
  }
  function kv() {
    us && (us.detachEvent("onpropertychange", Ov), Zo = us = null);
  }
  function Ov(n) {
    if (n.propertyName === "value" && tu(Zo)) {
      var r = [];
      bv(r, Zo, n, Kt(n)), pl(eu, r);
    }
  }
  function Ry(n, r, l) {
    n === "focusin" ? (kv(), us = r, Zo = l, us.attachEvent("onpropertychange", Ov)) : n === "focusout" && kv();
  }
  function xy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return tu(Zo);
  }
  function wy(n, r) {
    if (n === "click") return tu(r);
  }
  function Nv(n, r) {
    if (n === "input" || n === "change") return tu(r);
  }
  function Ty(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ua = typeof Object.is == "function" ? Object.is : Ty;
  function ss(n, r) {
    if (Ua(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!z.call(r, c) || !Ua(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Lv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Mv(n, r) {
    var l = Lv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Lv(l);
    }
  }
  function Uv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Uv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hc() {
    for (var n = window, r = yn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = yn(n.document);
    }
    return r;
  }
  function $i(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function mc(n) {
    var r = hc(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Uv(l.ownerDocument.documentElement, l)) {
      if (u !== null && $i(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Mv(l, d);
          var g = Mv(
            l,
            u
          );
          c && g && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== g.node || n.focusOffset !== g.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(g.node, g.offset)) : (r.setEnd(g.node, g.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var zv = Y && "documentMode" in document && 11 >= document.documentMode, oi = null, pd = null, cs = null, vd = !1;
  function Av(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vd || oi == null || oi !== yn(u) || (u = oi, "selectionStart" in u && $i(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), cs && ss(cs, u) || (cs = u, u = hs(pd, "onSelect"), 0 < u.length && (r = new St("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = oi)));
  }
  function yc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var no = { animationend: yc("Animation", "AnimationEnd"), animationiteration: yc("Animation", "AnimationIteration"), animationstart: yc("Animation", "AnimationStart"), transitionend: yc("Transition", "TransitionEnd") }, hd = {}, md = {};
  Y && (md = document.createElement("div").style, "AnimationEvent" in window || (delete no.animationend.animation, delete no.animationiteration.animation, delete no.animationstart.animation), "TransitionEvent" in window || delete no.transitionend.transition);
  function Zn(n) {
    if (hd[n]) return hd[n];
    if (!no[n]) return n;
    var r = no[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in md) return hd[n] = r[l];
    return n;
  }
  var yd = Zn("animationend"), jv = Zn("animationiteration"), Fv = Zn("animationstart"), Pv = Zn("transitionend"), Hv = /* @__PURE__ */ new Map(), Vv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ii(n, r) {
    Hv.set(n, r), L(r, [n]);
  }
  for (var fs = 0; fs < Vv.length; fs++) {
    var ro = Vv[fs], by = ro.toLowerCase(), ds = ro[0].toUpperCase() + ro.slice(1);
    Ii(by, "on" + ds);
  }
  Ii(yd, "onAnimationEnd"), Ii(jv, "onAnimationIteration"), Ii(Fv, "onAnimationStart"), Ii("dblclick", "onDoubleClick"), Ii("focusin", "onFocus"), Ii("focusout", "onBlur"), Ii(Pv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), L("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), L("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), L("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), L("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _y = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Bv(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, se(u, r, void 0, n), n.currentTarget = null;
  }
  function gc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var g = u.length - 1; 0 <= g; g--) {
          var x = u[g], D = x.instance, $ = x.currentTarget;
          if (x = x.listener, D !== d && c.isPropagationStopped()) break e;
          Bv(c, x, $), d = D;
        }
        else for (g = 0; g < u.length; g++) {
          if (x = u[g], D = x.instance, $ = x.currentTarget, x = x.listener, D !== d && c.isPropagationStopped()) break e;
          Bv(c, x, $), d = D;
        }
      }
    }
    if (hi) throw n = mi, hi = !1, mi = null, n;
  }
  function rn(n, r) {
    var l = r[wd];
    l === void 0 && (l = r[wd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || ($v(r, n, 2, !1), l.add(u));
  }
  function Tl(n, r, l) {
    var u = 0;
    r && (u |= 4), $v(l, n, u, r);
  }
  var Yi = "_reactListening" + Math.random().toString(36).slice(2);
  function nu(n) {
    if (!n[Yi]) {
      n[Yi] = !0, T.forEach(function(l) {
        l !== "selectionchange" && (_y.has(l) || Tl(l, !1, n), Tl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Yi] || (r[Yi] = !0, Tl("selectionchange", !1, r));
    }
  }
  function $v(n, r, l, u) {
    switch (as(r)) {
      case 1:
        var c = Go;
        break;
      case 4:
        c = xl;
        break;
      default:
        c = wl;
    }
    l = c.bind(null, r, l, n), c = void 0, !vi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var g = u.tag;
      if (g === 3 || g === 4) {
        var x = u.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (g === 4) for (g = u.return; g !== null; ) {
          var D = g.tag;
          if ((D === 3 || D === 4) && (D = g.stateNode.containerInfo, D === c || D.nodeType === 8 && D.parentNode === c)) return;
          g = g.return;
        }
        for (; x !== null; ) {
          if (g = za(x), g === null) return;
          if (D = g.tag, D === 5 || D === 6) {
            u = d = g;
            continue e;
          }
          x = x.parentNode;
        }
      }
      u = u.return;
    }
    pl(function() {
      var $ = d, ae = Kt(l), oe = [];
      e: {
        var ne = Hv.get(n);
        if (ne !== void 0) {
          var xe = St, Ne = n;
          switch (n) {
            case "keypress":
              if (W(l) === 0) break e;
            case "keydown":
            case "keyup":
              xe = gy;
              break;
            case "focusin":
              Ne = "focus", xe = ii;
              break;
            case "focusout":
              Ne = "blur", xe = ii;
              break;
            case "beforeblur":
            case "afterblur":
              xe = ii;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              xe = Hi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = is;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = Sy;
              break;
            case yd:
            case jv:
            case Fv:
              xe = os;
              break;
            case Pv:
              xe = Ev;
              break;
            case "scroll":
              xe = tn;
              break;
            case "wheel":
              xe = Bi;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = my;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = fc;
          }
          var Ue = (r & 4) !== 0, Un = !Ue && n === "scroll", U = Ue ? ne !== null ? ne + "Capture" : null : ne;
          Ue = [];
          for (var O = $, P; O !== null; ) {
            P = O;
            var fe = P.stateNode;
            if (P.tag === 5 && fe !== null && (P = fe, U !== null && (fe = ma(O, U), fe != null && Ue.push(vs(O, fe, P)))), Un) break;
            O = O.return;
          }
          0 < Ue.length && (ne = new xe(ne, Ne, null, l, ae), oe.push({ event: ne, listeners: Ue }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", xe = n === "mouseout" || n === "pointerout", ne && l !== Er && (Ne = l.relatedTarget || l.fromElement) && (za(Ne) || Ne[Wi])) break e;
          if ((xe || ne) && (ne = ae.window === ae ? ae : (ne = ae.ownerDocument) ? ne.defaultView || ne.parentWindow : window, xe ? (Ne = l.relatedTarget || l.toElement, xe = $, Ne = Ne ? za(Ne) : null, Ne !== null && (Un = Fe(Ne), Ne !== Un || Ne.tag !== 5 && Ne.tag !== 6) && (Ne = null)) : (xe = null, Ne = $), xe !== Ne)) {
            if (Ue = Hi, fe = "onMouseLeave", U = "onMouseEnter", O = "mouse", (n === "pointerout" || n === "pointerover") && (Ue = fc, fe = "onPointerLeave", U = "onPointerEnter", O = "pointer"), Un = xe == null ? ne : ru(xe), P = Ne == null ? ne : ru(Ne), ne = new Ue(fe, O + "leave", xe, l, ae), ne.target = Un, ne.relatedTarget = P, fe = null, za(ae) === $ && (Ue = new Ue(U, O + "enter", Ne, l, ae), Ue.target = P, Ue.relatedTarget = Un, fe = Ue), Un = fe, xe && Ne) t: {
              for (Ue = xe, U = Ne, O = 0, P = Ue; P; P = ao(P)) O++;
              for (P = 0, fe = U; fe; fe = ao(fe)) P++;
              for (; 0 < O - P; ) Ue = ao(Ue), O--;
              for (; 0 < P - O; ) U = ao(U), P--;
              for (; O--; ) {
                if (Ue === U || U !== null && Ue === U.alternate) break t;
                Ue = ao(Ue), U = ao(U);
              }
              Ue = null;
            }
            else Ue = null;
            xe !== null && gd(oe, ne, xe, Ue, !1), Ne !== null && Un !== null && gd(oe, Un, Ne, Ue, !0);
          }
        }
        e: {
          if (ne = $ ? ru($) : window, xe = ne.nodeName && ne.nodeName.toLowerCase(), xe === "select" || xe === "input" && ne.type === "file") var Ae = _v;
          else if (Tv(ne)) if (cd) Ae = Nv;
          else {
            Ae = xy;
            var Je = Ry;
          }
          else (xe = ne.nodeName) && xe.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (Ae = wy);
          if (Ae && (Ae = Ae(n, $))) {
            bv(oe, Ae, l, ae);
            break e;
          }
          Je && Je(n, ne, $), n === "focusout" && (Je = ne._wrapperState) && Je.controlled && ne.type === "number" && Wr(ne, "number", ne.value);
        }
        switch (Je = $ ? ru($) : window, n) {
          case "focusin":
            (Tv(Je) || Je.contentEditable === "true") && (oi = Je, pd = $, cs = null);
            break;
          case "focusout":
            cs = pd = oi = null;
            break;
          case "mousedown":
            vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vd = !1, Av(oe, l, ae);
            break;
          case "selectionchange":
            if (zv) break;
          case "keydown":
          case "keyup":
            Av(oe, l, ae);
        }
        var Le;
        if (li) e: {
          switch (n) {
            case "compositionstart":
              var Ze = "onCompositionStart";
              break e;
            case "compositionend":
              Ze = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ze = "onCompositionUpdate";
              break e;
          }
          Ze = void 0;
        }
        else Jo ? xv(n, l) && (Ze = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ze = "onCompositionStart");
        Ze && (Cv && l.locale !== "ko" && (Jo || Ze !== "onCompositionStart" ? Ze === "onCompositionEnd" && Jo && (Le = B()) : (ai = ae, m = "value" in ai ? ai.value : ai.textContent, Jo = !0)), Je = hs($, Ze), 0 < Je.length && (Ze = new id(Ze, n, null, l, ae), oe.push({ event: Ze, listeners: Je }), Le ? Ze.data = Le : (Le = vc(l), Le !== null && (Ze.data = Le)))), (Le = pc ? Ey(n, l) : Cy(n, l)) && ($ = hs($, "onBeforeInput"), 0 < $.length && (ae = new id("onBeforeInput", "beforeinput", null, l, ae), oe.push({ event: ae, listeners: $ }), ae.data = Le));
      }
      gc(oe, r);
    });
  }
  function vs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function hs(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ma(n, l), d != null && u.unshift(vs(n, d, c)), d = ma(n, r), d != null && u.push(vs(n, d, c))), n = n.return;
    }
    return u;
  }
  function ao(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function gd(n, r, l, u, c) {
    for (var d = r._reactName, g = []; l !== null && l !== u; ) {
      var x = l, D = x.alternate, $ = x.stateNode;
      if (D !== null && D === u) break;
      x.tag === 5 && $ !== null && (x = $, c ? (D = ma(l, d), D != null && g.unshift(vs(l, D, x))) : c || (D = ma(l, d), D != null && g.push(vs(l, D, x)))), l = l.return;
    }
    g.length !== 0 && n.push({ event: r, listeners: g });
  }
  var Sd = /\r\n?/g, Dy = /\u0000|\uFFFD/g;
  function Ed(n) {
    return (typeof n == "string" ? n : "" + n).replace(Sd, `
`).replace(Dy, "");
  }
  function Ec(n, r, l) {
    if (r = Ed(r), Ed(n) !== r && l) throw Error(S(425));
  }
  function Cc() {
  }
  var Cd = null, io = null;
  function ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var lo = typeof setTimeout == "function" ? setTimeout : void 0, Iv = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, xd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(n) {
    return Rd.resolve(null).then(n).catch(ky);
  } : lo;
  function ky(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function bl(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), Rl(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    Rl(r);
  }
  function ui(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function ys(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var _l = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + _l, oo = "__reactProps$" + _l, Wi = "__reactContainer$" + _l, wd = "__reactEvents$" + _l, Oy = "__reactListeners$" + _l, Td = "__reactHandles$" + _l;
  function za(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = ys(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = ys(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function gs(n) {
    return n = n[Ei] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ru(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(S(33));
  }
  function Ie(n) {
    return n[oo] || null;
  }
  var Dl = [], sn = -1;
  function ct(n) {
    return { current: n };
  }
  function Vt(n) {
    0 > sn || (n.current = Dl[sn], Dl[sn] = null, sn--);
  }
  function Qt(n, r) {
    sn++, Dl[sn] = n.current, n.current = r;
  }
  var Ci = {}, nt = ct(Ci), bn = ct(!1), Zr = Ci;
  function Aa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ci;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function pn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ja() {
    Vt(bn), Vt(nt);
  }
  function kl(n, r, l) {
    if (nt.current !== Ci) throw Error(S(168));
    Qt(nt, r), Qt(bn, l);
  }
  function Ss(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(S(108, wt(n) || "Unknown", c));
    return Se({}, l, u);
  }
  function Rc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ci, Zr = nt.current, Qt(nt, n), Qt(bn, bn.current), !0;
  }
  function Yv(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(S(169));
    l ? (n = Ss(n, r, Zr), u.__reactInternalMemoizedMergedChildContext = n, Vt(bn), Vt(nt), Qt(nt, n)) : Vt(bn), Qt(bn, l);
  }
  var Sa = null, er = !1, Es = !1;
  function bd(n) {
    Sa === null ? Sa = [n] : Sa.push(n);
  }
  function _d(n) {
    er = !0, bd(n);
  }
  function ea() {
    if (!Es && Sa !== null) {
      Es = !0;
      var n = 0, r = At;
      try {
        var l = Sa;
        for (At = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Sa = null, er = !1;
      } catch (c) {
        throw Sa !== null && (Sa = Sa.slice(n + 1)), en(Or, ea), c;
      } finally {
        At = r, Es = !1;
      }
    }
    return null;
  }
  var Ol = [], ta = 0, uo = null, au = 0, na = [], Rr = 0, Fa = null, lr = 1, Qi = "";
  function Ea(n, r) {
    Ol[ta++] = au, Ol[ta++] = uo, uo = n, au = r;
  }
  function Dd(n, r, l) {
    na[Rr++] = lr, na[Rr++] = Qi, na[Rr++] = Fa, Fa = n;
    var u = lr;
    n = Qi;
    var c = 32 - Nr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var g = c - c % 5;
      d = (u & (1 << g) - 1).toString(32), u >>= g, c -= g, lr = 1 << 32 - Nr(r) + c | l << c | u, Qi = d + n;
    } else lr = 1 << d | l << c | u, Qi = n;
  }
  function xc(n) {
    n.return !== null && (Ea(n, 1), Dd(n, 1, 0));
  }
  function kd(n) {
    for (; n === uo; ) uo = Ol[--ta], Ol[ta] = null, au = Ol[--ta], Ol[ta] = null;
    for (; n === Fa; ) Fa = na[--Rr], na[Rr] = null, Qi = na[--Rr], na[Rr] = null, lr = na[--Rr], na[Rr] = null;
  }
  var Ca = null, ra = null, cn = !1, Pa = null;
  function Od(n, r) {
    var l = Qa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Wv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ca = n, ra = ui(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ca = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Fa !== null ? { id: lr, overflow: Qi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Qa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ca = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function wc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Tc(n) {
    if (cn) {
      var r = ra;
      if (r) {
        var l = r;
        if (!Wv(n, r)) {
          if (wc(n)) throw Error(S(418));
          r = ui(l.nextSibling);
          var u = Ca;
          r && Wv(n, r) ? Od(u, l) : (n.flags = n.flags & -4097 | 2, cn = !1, Ca = n);
        }
      } else {
        if (wc(n)) throw Error(S(418));
        n.flags = n.flags & -4097 | 2, cn = !1, Ca = n;
      }
    }
  }
  function Qv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ca = n;
  }
  function bc(n) {
    if (n !== Ca) return !1;
    if (!cn) return Qv(n), cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ms(n.type, n.memoizedProps)), r && (r = ra)) {
      if (wc(n)) throw Gv(), Error(S(418));
      for (; r; ) Od(n, r), r = ui(r.nextSibling);
    }
    if (Qv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ra = ui(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = Ca ? ui(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Gv() {
    for (var n = ra; n; ) n = ui(n.nextSibling);
  }
  function Cn() {
    ra = Ca = null, cn = !1;
  }
  function Nd(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  var _c = ke.ReactCurrentBatchConfig;
  function so(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(S(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(S(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(g) {
          var x = c.refs;
          g === null ? delete x[d] : x[d] = g;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(S(284));
      if (!l._owner) throw Error(S(290, n));
    }
    return n;
  }
  function Ri(n, r) {
    throw n = Object.prototype.toString.call(r), Error(S(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Dc(n) {
    function r(U, O) {
      if (n) {
        var P = U.deletions;
        P === null ? (U.deletions = [O], U.flags |= 16) : P.push(O);
      }
    }
    function l(U, O) {
      if (!n) return null;
      for (; O !== null; ) r(U, O), O = O.sibling;
      return null;
    }
    function u(U, O) {
      for (U = /* @__PURE__ */ new Map(); O !== null; ) O.key !== null ? U.set(O.key, O) : U.set(O.index, O), O = O.sibling;
      return U;
    }
    function c(U, O) {
      return U = Fl(U, O), U.index = 0, U.sibling = null, U;
    }
    function d(U, O, P) {
      return U.index = P, n ? (P = U.alternate, P !== null ? (P = P.index, P < O ? (U.flags |= 2, O) : P) : (U.flags |= 2, O)) : (U.flags |= 1048576, O);
    }
    function g(U) {
      return n && U.alternate === null && (U.flags |= 2), U;
    }
    function x(U, O, P, fe) {
      return O === null || O.tag !== 6 ? (O = mf(P, U.mode, fe), O.return = U, O) : (O = c(O, P), O.return = U, O);
    }
    function D(U, O, P, fe) {
      var Ae = P.type;
      return Ae === Qe ? ae(U, O, P.props.children, fe, P.key) : O !== null && (O.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === Lt && qv(Ae) === O.type) ? (fe = c(O, P.props), fe.ref = so(U, O, P), fe.return = U, fe) : (fe = vf(P.type, P.key, P.props, null, U.mode, fe), fe.ref = so(U, O, P), fe.return = U, fe);
    }
    function $(U, O, P, fe) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== P.containerInfo || O.stateNode.implementation !== P.implementation ? (O = Fs(P, U.mode, fe), O.return = U, O) : (O = c(O, P.children || []), O.return = U, O);
    }
    function ae(U, O, P, fe, Ae) {
      return O === null || O.tag !== 7 ? (O = To(P, U.mode, fe, Ae), O.return = U, O) : (O = c(O, P), O.return = U, O);
    }
    function oe(U, O, P) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return O = mf("" + O, U.mode, P), O.return = U, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case De:
            return P = vf(O.type, O.key, O.props, null, U.mode, P), P.ref = so(U, null, O), P.return = U, P;
          case ut:
            return O = Fs(O, U.mode, P), O.return = U, O;
          case Lt:
            var fe = O._init;
            return oe(U, fe(O._payload), P);
        }
        if (Kn(O) || Ve(O)) return O = To(O, U.mode, P, null), O.return = U, O;
        Ri(U, O);
      }
      return null;
    }
    function ne(U, O, P, fe) {
      var Ae = O !== null ? O.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return Ae !== null ? null : x(U, O, "" + P, fe);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case De:
            return P.key === Ae ? D(U, O, P, fe) : null;
          case ut:
            return P.key === Ae ? $(U, O, P, fe) : null;
          case Lt:
            return Ae = P._init, ne(
              U,
              O,
              Ae(P._payload),
              fe
            );
        }
        if (Kn(P) || Ve(P)) return Ae !== null ? null : ae(U, O, P, fe, null);
        Ri(U, P);
      }
      return null;
    }
    function xe(U, O, P, fe, Ae) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number") return U = U.get(P) || null, x(O, U, "" + fe, Ae);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case De:
            return U = U.get(fe.key === null ? P : fe.key) || null, D(O, U, fe, Ae);
          case ut:
            return U = U.get(fe.key === null ? P : fe.key) || null, $(O, U, fe, Ae);
          case Lt:
            var Je = fe._init;
            return xe(U, O, P, Je(fe._payload), Ae);
        }
        if (Kn(fe) || Ve(fe)) return U = U.get(P) || null, ae(O, U, fe, Ae, null);
        Ri(O, fe);
      }
      return null;
    }
    function Ne(U, O, P, fe) {
      for (var Ae = null, Je = null, Le = O, Ze = O = 0, Qn = null; Le !== null && Ze < P.length; Ze++) {
        Le.index > Ze ? (Qn = Le, Le = null) : Qn = Le.sibling;
        var jt = ne(U, Le, P[Ze], fe);
        if (jt === null) {
          Le === null && (Le = Qn);
          break;
        }
        n && Le && jt.alternate === null && r(U, Le), O = d(jt, O, Ze), Je === null ? Ae = jt : Je.sibling = jt, Je = jt, Le = Qn;
      }
      if (Ze === P.length) return l(U, Le), cn && Ea(U, Ze), Ae;
      if (Le === null) {
        for (; Ze < P.length; Ze++) Le = oe(U, P[Ze], fe), Le !== null && (O = d(Le, O, Ze), Je === null ? Ae = Le : Je.sibling = Le, Je = Le);
        return cn && Ea(U, Ze), Ae;
      }
      for (Le = u(U, Le); Ze < P.length; Ze++) Qn = xe(Le, U, Ze, P[Ze], fe), Qn !== null && (n && Qn.alternate !== null && Le.delete(Qn.key === null ? Ze : Qn.key), O = d(Qn, O, Ze), Je === null ? Ae = Qn : Je.sibling = Qn, Je = Qn);
      return n && Le.forEach(function(el) {
        return r(U, el);
      }), cn && Ea(U, Ze), Ae;
    }
    function Ue(U, O, P, fe) {
      var Ae = Ve(P);
      if (typeof Ae != "function") throw Error(S(150));
      if (P = Ae.call(P), P == null) throw Error(S(151));
      for (var Je = Ae = null, Le = O, Ze = O = 0, Qn = null, jt = P.next(); Le !== null && !jt.done; Ze++, jt = P.next()) {
        Le.index > Ze ? (Qn = Le, Le = null) : Qn = Le.sibling;
        var el = ne(U, Le, jt.value, fe);
        if (el === null) {
          Le === null && (Le = Qn);
          break;
        }
        n && Le && el.alternate === null && r(U, Le), O = d(el, O, Ze), Je === null ? Ae = el : Je.sibling = el, Je = el, Le = Qn;
      }
      if (jt.done) return l(
        U,
        Le
      ), cn && Ea(U, Ze), Ae;
      if (Le === null) {
        for (; !jt.done; Ze++, jt = P.next()) jt = oe(U, jt.value, fe), jt !== null && (O = d(jt, O, Ze), Je === null ? Ae = jt : Je.sibling = jt, Je = jt);
        return cn && Ea(U, Ze), Ae;
      }
      for (Le = u(U, Le); !jt.done; Ze++, jt = P.next()) jt = xe(Le, U, Ze, jt.value, fe), jt !== null && (n && jt.alternate !== null && Le.delete(jt.key === null ? Ze : jt.key), O = d(jt, O, Ze), Je === null ? Ae = jt : Je.sibling = jt, Je = jt);
      return n && Le.forEach(function(Gy) {
        return r(U, Gy);
      }), cn && Ea(U, Ze), Ae;
    }
    function Un(U, O, P, fe) {
      if (typeof P == "object" && P !== null && P.type === Qe && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case De:
            e: {
              for (var Ae = P.key, Je = O; Je !== null; ) {
                if (Je.key === Ae) {
                  if (Ae = P.type, Ae === Qe) {
                    if (Je.tag === 7) {
                      l(U, Je.sibling), O = c(Je, P.props.children), O.return = U, U = O;
                      break e;
                    }
                  } else if (Je.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === Lt && qv(Ae) === Je.type) {
                    l(U, Je.sibling), O = c(Je, P.props), O.ref = so(U, Je, P), O.return = U, U = O;
                    break e;
                  }
                  l(U, Je);
                  break;
                } else r(U, Je);
                Je = Je.sibling;
              }
              P.type === Qe ? (O = To(P.props.children, U.mode, fe, P.key), O.return = U, U = O) : (fe = vf(P.type, P.key, P.props, null, U.mode, fe), fe.ref = so(U, O, P), fe.return = U, U = fe);
            }
            return g(U);
          case ut:
            e: {
              for (Je = P.key; O !== null; ) {
                if (O.key === Je) if (O.tag === 4 && O.stateNode.containerInfo === P.containerInfo && O.stateNode.implementation === P.implementation) {
                  l(U, O.sibling), O = c(O, P.children || []), O.return = U, U = O;
                  break e;
                } else {
                  l(U, O);
                  break;
                }
                else r(U, O);
                O = O.sibling;
              }
              O = Fs(P, U.mode, fe), O.return = U, U = O;
            }
            return g(U);
          case Lt:
            return Je = P._init, Un(U, O, Je(P._payload), fe);
        }
        if (Kn(P)) return Ne(U, O, P, fe);
        if (Ve(P)) return Ue(U, O, P, fe);
        Ri(U, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, O !== null && O.tag === 6 ? (l(U, O.sibling), O = c(O, P), O.return = U, U = O) : (l(U, O), O = mf(P, U.mode, fe), O.return = U, U = O), g(U)) : l(U, O);
    }
    return Un;
  }
  var iu = Dc(!0), Kv = Dc(!1), Gi = ct(null), $n = null, me = null, Ha = null;
  function Ra() {
    Ha = me = $n = null;
  }
  function Ld(n) {
    var r = Gi.current;
    Vt(Gi), n._currentValue = r;
  }
  function Md(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lu(n, r) {
    $n = n, Ha = me = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (la = !0), n.firstContext = null);
  }
  function Va(n) {
    var r = n._currentValue;
    if (Ha !== n) if (n = { context: n, memoizedValue: r, next: null }, me === null) {
      if ($n === null) throw Error(S(308));
      me = n, $n.dependencies = { lanes: 0, firstContext: n };
    } else me = me.next = n;
    return r;
  }
  var co = null;
  function Pn(n) {
    co === null ? co = [n] : co.push(n);
  }
  function Xv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Pn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, qi(n, u);
  }
  function qi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Nl = !1;
  function kc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ou(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function aa(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Rt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, qi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Pn(u)) : (r.next = c.next, c.next = r), u.interleaved = r, qi(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, gi(n, l);
    }
  }
  function Jv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = g : d = d.next = g, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Nc(n, r, l, u) {
    var c = n.updateQueue;
    Nl = !1;
    var d = c.firstBaseUpdate, g = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var D = x, $ = D.next;
      D.next = null, g === null ? d = $ : g.next = $, g = D;
      var ae = n.alternate;
      ae !== null && (ae = ae.updateQueue, x = ae.lastBaseUpdate, x !== g && (x === null ? ae.firstBaseUpdate = $ : x.next = $, ae.lastBaseUpdate = D));
    }
    if (d !== null) {
      var oe = c.baseState;
      g = 0, ae = $ = D = null, x = d;
      do {
        var ne = x.lane, xe = x.eventTime;
        if ((u & ne) === ne) {
          ae !== null && (ae = ae.next = {
            eventTime: xe,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ne = n, Ue = x;
            switch (ne = r, xe = l, Ue.tag) {
              case 1:
                if (Ne = Ue.payload, typeof Ne == "function") {
                  oe = Ne.call(xe, oe, ne);
                  break e;
                }
                oe = Ne;
                break e;
              case 3:
                Ne.flags = Ne.flags & -65537 | 128;
              case 0:
                if (Ne = Ue.payload, ne = typeof Ne == "function" ? Ne.call(xe, oe, ne) : Ne, ne == null) break e;
                oe = Se({}, oe, ne);
                break e;
              case 2:
                Nl = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ne = c.effects, ne === null ? c.effects = [x] : ne.push(x));
        } else xe = { eventTime: xe, lane: ne, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, ae === null ? ($ = ae = xe, D = oe) : ae = ae.next = xe, g |= ne;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          ne = x, x = ne.next, ne.next = null, c.lastBaseUpdate = ne, c.shared.pending = null;
        }
      } while (!0);
      if (ae === null && (D = oe), c.baseState = D, c.firstBaseUpdate = $, c.lastBaseUpdate = ae, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          g |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Co |= g, n.lanes = g, n.memoizedState = oe;
    }
  }
  function Zv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(S(191, c));
        c.call(u);
      }
    }
  }
  var Cs = {}, si = ct(Cs), uu = ct(Cs), Rs = ct(Cs);
  function fo(n) {
    if (n === Cs) throw Error(S(174));
    return n;
  }
  function Ud(n, r) {
    switch (Qt(Rs, r), Qt(uu, n), Qt(si, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gn(r, n);
    }
    Vt(si), Qt(si, r);
  }
  function su() {
    Vt(si), Vt(uu), Vt(Rs);
  }
  function eh(n) {
    fo(Rs.current);
    var r = fo(si.current), l = gn(r, n.type);
    r !== l && (Qt(uu, n), Qt(si, l));
  }
  function zd(n) {
    uu.current === n && (Vt(si), Vt(uu));
  }
  var vn = ct(0);
  function Lc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Mc = [];
  function Ad() {
    for (var n = 0; n < Mc.length; n++) Mc[n]._workInProgressVersionPrimary = null;
    Mc.length = 0;
  }
  var Uc = ke.ReactCurrentDispatcher, xs = ke.ReactCurrentBatchConfig, ze = 0, Pe = null, rt = null, Et = null, xa = !1, cu = !1, ws = 0, Ny = 0;
  function xr() {
    throw Error(S(321));
  }
  function Ts(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ua(n[l], r[l])) return !1;
    return !0;
  }
  function te(n, r, l, u, c, d) {
    if (ze = d, Pe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Uc.current = n === null || n.memoizedState === null ? Ly : on, n = l(u, c), cu) {
      d = 0;
      do {
        if (cu = !1, ws = 0, 25 <= d) throw Error(S(301));
        d += 1, Et = rt = null, r.updateQueue = null, Uc.current = qc, n = l(u, c);
      } while (cu);
    }
    if (Uc.current = wr, r = rt !== null && rt.next !== null, ze = 0, Et = rt = Pe = null, xa = !1, r) throw Error(S(300));
    return n;
  }
  function Hn() {
    var n = ws !== 0;
    return ws = 0, n;
  }
  function $e() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? Pe.memoizedState = Et = n : Et = Et.next = n, Et;
  }
  function or() {
    if (rt === null) {
      var n = Pe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = rt.next;
    var r = Et === null ? Pe.memoizedState : Et.next;
    if (r !== null) Et = r, rt = n;
    else {
      if (n === null) throw Error(S(310));
      rt = n, n = { memoizedState: rt.memoizedState, baseState: rt.baseState, baseQueue: rt.baseQueue, queue: rt.queue, next: null }, Et === null ? Pe.memoizedState = Et = n : Et = Et.next = n;
    }
    return Et;
  }
  function wa(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ki(n) {
    var r = or(), l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var u = rt, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = d.next, d.next = g;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var x = g = null, D = null, $ = d;
      do {
        var ae = $.lane;
        if ((ze & ae) === ae) D !== null && (D = D.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), u = $.hasEagerState ? $.eagerState : n(u, $.action);
        else {
          var oe = {
            lane: ae,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          D === null ? (x = D = oe, g = u) : D = D.next = oe, Pe.lanes |= ae, Co |= ae;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      D === null ? g = u : D.next = x, Ua(u, r.memoizedState) || (la = !0), r.memoizedState = u, r.baseState = g, r.baseQueue = D, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Pe.lanes |= d, Co |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ba(n) {
    var r = or(), l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var g = c = c.next;
      do
        d = n(d, g.action), g = g.next;
      while (g !== c);
      Ua(d, r.memoizedState) || (la = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function fu() {
  }
  function po(n, r) {
    var l = Pe, u = or(), c = r(), d = !Ua(u.memoizedState, c);
    if (d && (u.memoizedState = c, la = !0), u = u.queue, bs(Ac.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Et !== null && Et.memoizedState.tag & 1) {
      if (l.flags |= 2048, vo(9, zc.bind(null, l, u, c, r), void 0, null), Dn === null) throw Error(S(349));
      ze & 30 || du(l, r, c);
    }
    return c;
  }
  function du(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Pe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Pe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function zc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, jc(r) && Fc(n);
  }
  function Ac(n, r, l) {
    return l(function() {
      jc(r) && Fc(n);
    });
  }
  function jc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ua(n, l);
    } catch {
      return !0;
    }
  }
  function Fc(n) {
    var r = qi(n, 1);
    r !== null && Rn(r, n, 1, -1);
  }
  function Pc(n) {
    var r = $e();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wa, lastRenderedState: n }, r.queue = n, n = n.dispatch = _s.bind(null, Pe, n), [r.memoizedState, n];
  }
  function vo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = Pe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Pe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Hc() {
    return or().memoizedState;
  }
  function pu(n, r, l, u) {
    var c = $e();
    Pe.flags |= n, c.memoizedState = vo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function vu(n, r, l, u) {
    var c = or();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (rt !== null) {
      var g = rt.memoizedState;
      if (d = g.destroy, u !== null && Ts(u, g.deps)) {
        c.memoizedState = vo(r, l, d, u);
        return;
      }
    }
    Pe.flags |= n, c.memoizedState = vo(1 | r, l, d, u);
  }
  function Vc(n, r) {
    return pu(8390656, 8, n, r);
  }
  function bs(n, r) {
    return vu(2048, 8, n, r);
  }
  function Bc(n, r) {
    return vu(4, 2, n, r);
  }
  function $c(n, r) {
    return vu(4, 4, n, r);
  }
  function Ic(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Yc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, vu(4, 4, Ic.bind(null, r, n), l);
  }
  function hu() {
  }
  function ho(n, r) {
    var l = or();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ts(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = or();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ts(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Qc(n, r, l) {
    return ze & 21 ? (Ua(l, r) || (l = Bo(), Pe.lanes |= l, Co |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, la = !0), n.memoizedState = l);
  }
  function jd(n, r) {
    var l = At;
    At = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = xs.transition;
    xs.transition = {};
    try {
      n(!1), r();
    } finally {
      At = l, xs.transition = u;
    }
  }
  function Gc() {
    return or().memoizedState;
  }
  function th(n, r, l) {
    var u = Zi(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Fd(n)) mu(r, l);
    else if (l = Xv(n, r, l, u), l !== null) {
      var c = rr();
      Rn(l, n, u, c), Ml(l, r, u);
    }
  }
  function _s(n, r, l) {
    var u = Zi(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Fd(n)) mu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var g = r.lastRenderedState, x = d(g, l);
        if (c.hasEagerState = !0, c.eagerState = x, Ua(x, g)) {
          var D = r.interleaved;
          D === null ? (c.next = c, Pn(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Xv(n, r, c, u), l !== null && (c = rr(), Rn(l, n, u, c), Ml(l, r, u));
    }
  }
  function Fd(n) {
    var r = n.alternate;
    return n === Pe || r !== null && r === Pe;
  }
  function mu(n, r) {
    cu = xa = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ml(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, gi(n, l);
    }
  }
  var wr = { readContext: Va, useCallback: xr, useContext: xr, useEffect: xr, useImperativeHandle: xr, useInsertionEffect: xr, useLayoutEffect: xr, useMemo: xr, useReducer: xr, useRef: xr, useState: xr, useDebugValue: xr, useDeferredValue: xr, useTransition: xr, useMutableSource: xr, useSyncExternalStore: xr, useId: xr, unstable_isNewReconciler: !1 }, Ly = { readContext: Va, useCallback: function(n, r) {
    return $e().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Va, useEffect: Vc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, pu(
      4194308,
      4,
      Ic.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return pu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return pu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = $e();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = $e();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = th.bind(null, Pe, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = $e();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: hu, useDeferredValue: function(n) {
    return $e().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = jd.bind(null, n[1]), $e().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = Pe, c = $e();
    if (cn) {
      if (l === void 0) throw Error(S(407));
      l = l();
    } else {
      if (l = r(), Dn === null) throw Error(S(349));
      ze & 30 || du(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Vc(Ac.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, vo(9, zc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = $e(), r = Dn.identifierPrefix;
    if (cn) {
      var l = Qi, u = lr;
      l = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ws++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Ny++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, on = {
    readContext: Va,
    useCallback: ho,
    useContext: Va,
    useEffect: bs,
    useImperativeHandle: Yc,
    useInsertionEffect: Bc,
    useLayoutEffect: $c,
    useMemo: Wc,
    useReducer: Ki,
    useRef: Hc,
    useState: function() {
      return Ki(wa);
    },
    useDebugValue: hu,
    useDeferredValue: function(n) {
      var r = or();
      return Qc(r, rt.memoizedState, n);
    },
    useTransition: function() {
      var n = Ki(wa)[0], r = or().memoizedState;
      return [n, r];
    },
    useMutableSource: fu,
    useSyncExternalStore: po,
    useId: Gc,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Va, useCallback: ho, useContext: Va, useEffect: bs, useImperativeHandle: Yc, useInsertionEffect: Bc, useLayoutEffect: $c, useMemo: Wc, useReducer: Ba, useRef: Hc, useState: function() {
    return Ba(wa);
  }, useDebugValue: hu, useDeferredValue: function(n) {
    var r = or();
    return rt === null ? r.memoizedState = n : Qc(r, rt.memoizedState, n);
  }, useTransition: function() {
    var n = Ba(wa)[0], r = or().memoizedState;
    return [n, r];
  }, useMutableSource: fu, useSyncExternalStore: po, useId: Gc, unstable_isNewReconciler: !1 };
  function ia(n, r) {
    if (n && n.defaultProps) {
      r = Se({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function mo(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : Se({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var yo = { isMounted: function(n) {
    return (n = n._reactInternals) ? Fe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = rr(), c = Zi(n), d = aa(u, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Rn(r, n, c, u), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = rr(), c = Zi(n), d = aa(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Rn(r, n, c, u), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = rr(), u = Zi(n), c = aa(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, u), r !== null && (Rn(r, n, u, l), Oc(r, n, u));
  } };
  function nh(n, r, l, u, c, d, g) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, g) : r.prototype && r.prototype.isPureReactComponent ? !ss(l, u) || !ss(c, d) : !0;
  }
  function rh(n, r, l) {
    var u = !1, c = Ci, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Va(d) : (c = pn(r) ? Zr : nt.current, u = r.contextTypes, d = (u = u != null) ? Aa(n, c) : Ci), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = yo, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ah(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && yo.enqueueReplaceState(r, r.state, null);
  }
  function Pd(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, kc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Va(d) : (d = pn(r) ? Zr : nt.current, c.context = Aa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (mo(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && yo.enqueueReplaceState(c, c.state, null), Nc(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ul(n, r) {
    try {
      var l = "", u = r;
      do
        l += dt(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Hd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ds(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ih = typeof WeakMap == "function" ? WeakMap : Map;
  function lh(n, r, l) {
    l = aa(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      uf || (uf = !0, qd = u), Ds(n, r);
    }, l;
  }
  function oh(n, r, l) {
    l = aa(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Ds(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ds(n, r), typeof u != "function" && (Ya === null ? Ya = /* @__PURE__ */ new Set([this]) : Ya.add(this));
      var g = r.stack;
      this.componentDidCatch(r.value, { componentStack: g !== null ? g : "" });
    }), l;
  }
  function ks(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new ih();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = By.bind(null, n, r, l), r.then(n, n));
  }
  function uh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Vd(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = aa(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var sh = ke.ReactCurrentOwner, la = !1;
  function Ln(n, r, l, u) {
    r.child = n === null ? Kv(r, null, l, u) : iu(r, n.child, l, u);
  }
  function yu(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return lu(r, c), u = te(n, r, l, u, d, c), l = Hn(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mn(n, r, c)) : (cn && l && xc(r), r.flags |= 1, Ln(n, r, u, c), r.child);
  }
  function zl(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !ep(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Kc(n, r, d, u, c)) : (n = vf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var g = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ss, l(g, u) && n.ref === r.ref) return Mn(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Kc(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref) if (la = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (la = !0);
      else return r.lanes = n.lanes, Mn(n, r, c);
    }
    return ot(n, r, l, u, c);
  }
  function oa(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qt(_u, ua), ua |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Qt(_u, ua), ua |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, Qt(_u, ua), ua |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, Qt(_u, ua), ua |= u;
    return Ln(n, r, c, l), r.child;
  }
  function go(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ot(n, r, l, u, c) {
    var d = pn(l) ? Zr : nt.current;
    return d = Aa(r, d), lu(r, c), l = te(n, r, l, u, d, c), u = Hn(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mn(n, r, c)) : (cn && u && xc(r), r.flags |= 1, Ln(n, r, l, c), r.child);
  }
  function Os(n, r, l, u, c) {
    if (pn(l)) {
      var d = !0;
      Rc(r);
    } else d = !1;
    if (lu(r, c), r.stateNode === null) Ls(n, r), rh(r, l, u), Pd(r, l, u, c), u = !0;
    else if (n === null) {
      var g = r.stateNode, x = r.memoizedProps;
      g.props = x;
      var D = g.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = Va($) : ($ = pn(l) ? Zr : nt.current, $ = Aa(r, $));
      var ae = l.getDerivedStateFromProps, oe = typeof ae == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      oe || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== u || D !== $) && ah(r, g, u, $), Nl = !1;
      var ne = r.memoizedState;
      g.state = ne, Nc(r, u, g, c), D = r.memoizedState, x !== u || ne !== D || bn.current || Nl ? (typeof ae == "function" && (mo(r, l, ae, u), D = r.memoizedState), (x = Nl || nh(r, l, x, u, ne, D, $)) ? (oe || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = D), g.props = u, g.state = D, g.context = $, u = x) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      g = r.stateNode, ou(n, r), x = r.memoizedProps, $ = r.type === r.elementType ? x : ia(r.type, x), g.props = $, oe = r.pendingProps, ne = g.context, D = l.contextType, typeof D == "object" && D !== null ? D = Va(D) : (D = pn(l) ? Zr : nt.current, D = Aa(r, D));
      var xe = l.getDerivedStateFromProps;
      (ae = typeof xe == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== oe || ne !== D) && ah(r, g, u, D), Nl = !1, ne = r.memoizedState, g.state = ne, Nc(r, u, g, c);
      var Ne = r.memoizedState;
      x !== oe || ne !== Ne || bn.current || Nl ? (typeof xe == "function" && (mo(r, l, xe, u), Ne = r.memoizedState), ($ = Nl || nh(r, l, $, u, ne, Ne, D) || !1) ? (ae || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(u, Ne, D), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(u, Ne, D)), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || x === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ne), g.props = u, g.state = Ne, g.context = D, u = $) : (typeof g.componentDidUpdate != "function" || x === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Xc(n, r, l, u, d, c);
  }
  function Xc(n, r, l, u, c, d) {
    go(n, r);
    var g = (r.flags & 128) !== 0;
    if (!u && !g) return c && Yv(r, l, !1), Mn(n, r, d);
    u = r.stateNode, sh.current = r;
    var x = g && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && g ? (r.child = iu(r, n.child, null, d), r.child = iu(r, null, x, d)) : Ln(n, r, x, d), r.memoizedState = u.state, c && Yv(r, l, !0), r.child;
  }
  function My(n) {
    var r = n.stateNode;
    r.pendingContext ? kl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && kl(n, r.context, !1), Ud(n, r.containerInfo);
  }
  function ch(n, r, l, u, c) {
    return Cn(), Nd(c), r.flags |= 256, Ln(n, r, l, u), r.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function So(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function fh(n, r, l) {
    var u = r.pendingProps, c = vn.current, d = !1, g = (r.flags & 128) !== 0, x;
    if ((x = g) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Qt(vn, c & 1), n === null)
      return Tc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (g = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, g = { mode: "hidden", children: g }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = g) : d = hf(g, u, 0, null), n = To(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = So(l), r.memoizedState = Ns, n) : Jc(r, g));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return Bd(n, r, g, u, x, c, l);
    if (d) {
      d = u.fallback, g = r.mode, c = n.child, x = c.sibling;
      var D = { mode: "hidden", children: u.children };
      return !(g & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = D, r.deletions = null) : (u = Fl(c, D), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Fl(x, d) : (d = To(d, g, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, g = n.child.memoizedState, g = g === null ? So(l) : { baseLanes: g.baseLanes | l, cachePool: null, transitions: g.transitions }, d.memoizedState = g, d.childLanes = n.childLanes & ~l, r.memoizedState = Ns, u;
    }
    return d = n.child, n = d.sibling, u = Fl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Jc(n, r) {
    return r = hf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, u) {
    return u !== null && Nd(u), iu(r, n.child, null, l), n = Jc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Bd(n, r, l, u, c, d, g) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Hd(Error(S(422))), Zc(n, r, g, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = hf({ mode: "visible", children: u.children }, c, 0, null), d = To(d, c, g, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && iu(r, n.child, null, g), r.child.memoizedState = So(g), r.memoizedState = Ns, d);
    if (!(r.mode & 1)) return Zc(n, r, g, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var x = u.dgst;
      return u = x, d = Error(S(419)), u = Hd(d, u, void 0), Zc(n, r, g, u);
    }
    if (x = (g & n.childLanes) !== 0, la || x) {
      if (u = Dn, u !== null) {
        switch (g & -g) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | g) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, qi(n, c), Rn(u, n, c, -1));
      }
      return js(), u = Hd(Error(S(421))), Zc(n, r, g, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Zd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ra = ui(c.nextSibling), Ca = r, cn = !0, Pa = null, n !== null && (na[Rr++] = lr, na[Rr++] = Qi, na[Rr++] = Fa, lr = n.id, Qi = n.overflow, Fa = r), r = Jc(r, u.children), r.flags |= 4096, r);
  }
  function dh(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Md(n.return, r, l);
  }
  function ef(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function $d(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Ln(n, r, u.children, l), u = vn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && dh(n, l, r);
        else if (n.tag === 19) dh(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (Qt(vn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Lc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ls(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Mn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Co |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(S(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Xi(n, r, l) {
    switch (r.tag) {
      case 3:
        My(r), Cn();
        break;
      case 5:
        eh(r);
        break;
      case 1:
        pn(r.type) && Rc(r);
        break;
      case 4:
        Ud(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Qt(Gi, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Qt(vn, vn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? fh(n, r, l) : (Qt(vn, vn.current & 1), n = Mn(n, r, l), n !== null ? n.sibling : null);
        Qt(vn, vn.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return $d(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Qt(vn, vn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, oa(n, r, l);
    }
    return Mn(n, r, l);
  }
  var xi, gu, Su, $a;
  xi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, gu = function() {
  }, Su = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, fo(si.current);
      var d = null;
      switch (l) {
        case "input":
          c = qn(n, c), u = qn(n, u), d = [];
          break;
        case "select":
          c = Se({}, c, { value: void 0 }), u = Se({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Qr(n, c), u = Qr(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Cc);
      }
      Nn(l, u);
      var g;
      l = null;
      for ($ in c) if (!u.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null) if ($ === "style") {
        var x = c[$];
        for (g in x) x.hasOwnProperty(g) && (l || (l = {}), l[g] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (_.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in u) {
        var D = u[$];
        if (x = c != null ? c[$] : void 0, u.hasOwnProperty($) && D !== x && (D != null || x != null)) if ($ === "style") if (x) {
          for (g in x) !x.hasOwnProperty(g) || D && D.hasOwnProperty(g) || (l || (l = {}), l[g] = "");
          for (g in D) D.hasOwnProperty(g) && x[g] !== D[g] && (l || (l = {}), l[g] = D[g]);
        } else l || (d || (d = []), d.push(
          $,
          l
        )), l = D;
        else $ === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, x = x ? x.__html : void 0, D != null && x !== D && (d = d || []).push($, D)) : $ === "children" ? typeof D != "string" && typeof D != "number" || (d = d || []).push($, "" + D) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (_.hasOwnProperty($) ? (D != null && $ === "onScroll" && rn("scroll", n), d || x === D || (d = [])) : (d = d || []).push($, D));
      }
      l && (d = d || []).push("style", l);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, $a = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function _n(n, r) {
    if (!cn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function Tr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function Uy(n, r, l) {
    var u = r.pendingProps;
    switch (kd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tr(r), null;
      case 1:
        return pn(r.type) && ja(), Tr(r), null;
      case 3:
        return u = r.stateNode, su(), Vt(bn), Vt(nt), Ad(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (bc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Pa !== null && (Kd(Pa), Pa = null))), gu(n, r), Tr(r), null;
      case 5:
        zd(r);
        var c = fo(Rs.current);
        if (l = r.type, n !== null && r.stateNode != null) Su(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(S(166));
            return Tr(r), null;
          }
          if (n = fo(si.current), bc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Ei] = r, u[oo] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                rn("cancel", u), rn("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                rn("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ps.length; c++) rn(ps[c], u);
                break;
              case "source":
                rn("error", u);
                break;
              case "img":
              case "image":
              case "link":
                rn(
                  "error",
                  u
                ), rn("load", u);
                break;
              case "details":
                rn("toggle", u);
                break;
              case "input":
                Bn(u, d), rn("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, rn("invalid", u);
                break;
              case "textarea":
                Sr(u, d), rn("invalid", u);
            }
            Nn(l, d), c = null;
            for (var g in d) if (d.hasOwnProperty(g)) {
              var x = d[g];
              g === "children" ? typeof x == "string" ? u.textContent !== x && (d.suppressHydrationWarning !== !0 && Ec(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && Ec(
                u.textContent,
                x,
                n
              ), c = ["children", "" + x]) : _.hasOwnProperty(g) && x != null && g === "onScroll" && rn("scroll", u);
            }
            switch (l) {
              case "input":
                yr(u), Yr(u, d, !0);
                break;
              case "textarea":
                yr(u), ir(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Cc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Gr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = g.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = g.createElement(l, { is: u.is }) : (n = g.createElement(l), l === "select" && (g = n, u.multiple ? g.multiple = !0 : u.size && (g.size = u.size))) : n = g.createElementNS(n, l), n[Ei] = r, n[oo] = u, xi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (g = Sn(l, u), l) {
                case "dialog":
                  rn("cancel", n), rn("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rn("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ps.length; c++) rn(ps[c], n);
                  c = u;
                  break;
                case "source":
                  rn("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  rn(
                    "error",
                    n
                  ), rn("load", n), c = u;
                  break;
                case "details":
                  rn("toggle", n), c = u;
                  break;
                case "input":
                  Bn(n, u), c = qn(n, u), rn("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = Se({}, u, { value: void 0 }), rn("invalid", n);
                  break;
                case "textarea":
                  Sr(n, u), c = Qr(n, u), rn("invalid", n);
                  break;
                default:
                  c = u;
              }
              Nn(l, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var D = x[d];
                d === "style" ? Ht(n, D) : d === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && pi(n, D)) : d === "children" ? typeof D == "string" ? (l !== "textarea" || D !== "") && ha(n, D) : typeof D == "number" && ha(n, "" + D) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_.hasOwnProperty(d) ? D != null && d === "onScroll" && rn("scroll", n) : D != null && le(n, d, D, g));
              }
              switch (l) {
                case "input":
                  yr(n), Yr(n, u, !1);
                  break;
                case "textarea":
                  yr(n), ir(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + mt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? gr(n, !!u.multiple, d, !1) : u.defaultValue != null && gr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Tr(r), null;
      case 6:
        if (n && r.stateNode != null) $a(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(S(166));
          if (l = fo(Rs.current), fo(si.current), bc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Ei] = r, (d = u.nodeValue !== l) && (n = Ca, n !== null)) switch (n.tag) {
              case 3:
                Ec(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Ei] = r, r.stateNode = u;
        }
        return Tr(r), null;
      case 13:
        if (Vt(vn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (cn && ra !== null && r.mode & 1 && !(r.flags & 128)) Gv(), Cn(), r.flags |= 98560, d = !1;
          else if (d = bc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(S(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(S(317));
              d[Ei] = r;
            } else Cn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Tr(r), d = !1;
          } else Pa !== null && (Kd(Pa), Pa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || vn.current & 1 ? Yn === 0 && (Yn = 3) : js())), r.updateQueue !== null && (r.flags |= 4), Tr(r), null);
      case 4:
        return su(), gu(n, r), n === null && nu(r.stateNode.containerInfo), Tr(r), null;
      case 10:
        return Ld(r.type._context), Tr(r), null;
      case 17:
        return pn(r.type) && ja(), Tr(r), null;
      case 19:
        if (Vt(vn), d = r.memoizedState, d === null) return Tr(r), null;
        if (u = (r.flags & 128) !== 0, g = d.rendering, g === null) if (u) _n(d, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (g = Lc(n), g !== null) {
              for (r.flags |= 128, _n(d, !1), u = g.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, g = d.alternate, g === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = g.childLanes, d.lanes = g.lanes, d.child = g.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = g.memoizedProps, d.memoizedState = g.memoizedState, d.updateQueue = g.updateQueue, d.type = g.type, n = g.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Qt(vn, vn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && zt() > ku && (r.flags |= 128, u = !0, _n(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Lc(g), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _n(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !cn) return Tr(r), null;
          } else 2 * zt() - d.renderingStartTime > ku && l !== 1073741824 && (r.flags |= 128, u = !0, _n(d, !1), r.lanes = 4194304);
          d.isBackwards ? (g.sibling = r.child, r.child = g) : (l = d.last, l !== null ? l.sibling = g : r.child = g, d.last = g);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = zt(), r.sibling = null, l = vn.current, Qt(vn, u ? l & 1 | 2 : l & 1), r) : (Tr(r), null);
      case 22:
      case 23:
        return df(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ua & 1073741824 && (Tr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Tr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function zy(n, r) {
    switch (kd(r), r.tag) {
      case 1:
        return pn(r.type) && ja(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return su(), Vt(bn), Vt(nt), Ad(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return zd(r), null;
      case 13:
        if (Vt(vn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(S(340));
          Cn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Vt(vn), null;
      case 4:
        return su(), null;
      case 10:
        return Ld(r.type._context), null;
      case 22:
      case 23:
        return df(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Eu = !1, ur = !1, tf = typeof WeakSet == "function" ? WeakSet : Set, be = null;
  function Cu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      kn(n, r, u);
    }
    else l.current = null;
  }
  function Id(n, r, l) {
    try {
      l();
    } catch (u) {
      kn(n, r, u);
    }
  }
  var nf = !1;
  function Ay(n, r) {
    if (Cd = Ma, n = hc(), $i(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var g = 0, x = -1, D = -1, $ = 0, ae = 0, oe = n, ne = null;
          t: for (; ; ) {
            for (var xe; oe !== l || c !== 0 && oe.nodeType !== 3 || (x = g + c), oe !== d || u !== 0 && oe.nodeType !== 3 || (D = g + u), oe.nodeType === 3 && (g += oe.nodeValue.length), (xe = oe.firstChild) !== null; )
              ne = oe, oe = xe;
            for (; ; ) {
              if (oe === n) break t;
              if (ne === l && ++$ === c && (x = g), ne === d && ++ae === u && (D = g), (xe = oe.nextSibling) !== null) break;
              oe = ne, ne = oe.parentNode;
            }
            oe = xe;
          }
          l = x === -1 || D === -1 ? null : { start: x, end: D };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (io = { focusedElem: n, selectionRange: l }, Ma = !1, be = r; be !== null; ) if (r = be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, be = n;
    else for (; be !== null; ) {
      r = be;
      try {
        var Ne = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ne !== null) {
              var Ue = Ne.memoizedProps, Un = Ne.memoizedState, U = r.stateNode, O = U.getSnapshotBeforeUpdate(r.elementType === r.type ? Ue : ia(r.type, Ue), Un);
              U.__reactInternalSnapshotBeforeUpdate = O;
            }
            break;
          case 3:
            var P = r.stateNode.containerInfo;
            P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(S(163));
        }
      } catch (fe) {
        kn(r, r.return, fe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, be = n;
        break;
      }
      be = r.return;
    }
    return Ne = nf, nf = !1, Ne;
  }
  function Ru(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Id(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function rf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function af(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ph(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ph(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[oo], delete r[wd], delete r[Oy], delete r[Td])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function vh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Yd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ms(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Cc));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ms(n, r, l), n = n.sibling; n !== null; ) Ms(n, r, l), n = n.sibling;
  }
  function xu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (xu(n, r, l), n = n.sibling; n !== null; ) xu(n, r, l), n = n.sibling;
  }
  var hn = null, tr = !1;
  function Ur(n, r, l) {
    for (l = l.child; l !== null; ) wu(n, r, l), l = l.sibling;
  }
  function wu(n, r, l) {
    if (qr && typeof qr.onCommitFiberUnmount == "function") try {
      qr.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        ur || Cu(l, r);
      case 6:
        var u = hn, c = tr;
        hn = null, Ur(n, r, l), hn = u, tr = c, hn !== null && (tr ? (n = hn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : hn.removeChild(l.stateNode));
        break;
      case 18:
        hn !== null && (tr ? (n = hn, l = l.stateNode, n.nodeType === 8 ? bl(n.parentNode, l) : n.nodeType === 1 && bl(n, l), Rl(n)) : bl(hn, l.stateNode));
        break;
      case 4:
        u = hn, c = tr, hn = l.stateNode.containerInfo, tr = !0, Ur(n, r, l), hn = u, tr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, g = d.destroy;
            d = d.tag, g !== void 0 && (d & 2 || d & 4) && Id(l, r, g), c = c.next;
          } while (c !== u);
        }
        Ur(n, r, l);
        break;
      case 1:
        if (!ur && (Cu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (x) {
          kn(l, r, x);
        }
        Ur(n, r, l);
        break;
      case 21:
        Ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ur = (u = ur) || l.memoizedState !== null, Ur(n, r, l), ur = u) : Ur(n, r, l);
        break;
      default:
        Ur(n, r, l);
    }
  }
  function Tu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new tf()), r.forEach(function(u) {
        var c = $y.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function nr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, g = r, x = g;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              hn = x.stateNode, tr = !1;
              break e;
            case 3:
              hn = x.stateNode.containerInfo, tr = !0;
              break e;
            case 4:
              hn = x.stateNode.containerInfo, tr = !0;
              break e;
          }
          x = x.return;
        }
        if (hn === null) throw Error(S(160));
        wu(d, g, c), hn = null, tr = !1;
        var D = c.alternate;
        D !== null && (D.return = null), c.return = null;
      } catch ($) {
        kn(c, r, $);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) hh(r, n), r = r.sibling;
  }
  function hh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (nr(r, n), wi(n), u & 4) {
          try {
            Ru(3, n, n.return), rf(3, n);
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
          try {
            Ru(5, n, n.return);
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        break;
      case 1:
        nr(r, n), wi(n), u & 512 && l !== null && Cu(l, l.return);
        break;
      case 5:
        if (nr(r, n), wi(n), u & 512 && l !== null && Cu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ha(c, "");
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, g = l !== null ? l.memoizedProps : d, x = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null) try {
            x === "input" && d.type === "radio" && d.name != null && An(c, d), Sn(x, g);
            var $ = Sn(x, d);
            for (g = 0; g < D.length; g += 2) {
              var ae = D[g], oe = D[g + 1];
              ae === "style" ? Ht(c, oe) : ae === "dangerouslySetInnerHTML" ? pi(c, oe) : ae === "children" ? ha(c, oe) : le(c, ae, oe, $);
            }
            switch (x) {
              case "input":
                On(c, d);
                break;
              case "textarea":
                va(c, d);
                break;
              case "select":
                var ne = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var xe = d.value;
                xe != null ? gr(c, !!d.multiple, xe, !1) : ne !== !!d.multiple && (d.defaultValue != null ? gr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : gr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[oo] = d;
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        break;
      case 6:
        if (nr(r, n), wi(n), u & 4) {
          if (n.stateNode === null) throw Error(S(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        break;
      case 3:
        if (nr(r, n), wi(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Rl(r.containerInfo);
        } catch (Ue) {
          kn(n, n.return, Ue);
        }
        break;
      case 4:
        nr(r, n), wi(n);
        break;
      case 13:
        nr(r, n), wi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (of = zt())), u & 4 && Tu(n);
        break;
      case 22:
        if (ae = l !== null && l.memoizedState !== null, n.mode & 1 ? (ur = ($ = ur) || ae, nr(r, n), ur = $) : nr(r, n), wi(n), u & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !ae && n.mode & 1) for (be = n, ae = n.child; ae !== null; ) {
            for (oe = be = ae; be !== null; ) {
              switch (ne = be, xe = ne.child, ne.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ru(4, ne, ne.return);
                  break;
                case 1:
                  Cu(ne, ne.return);
                  var Ne = ne.stateNode;
                  if (typeof Ne.componentWillUnmount == "function") {
                    u = ne, l = ne.return;
                    try {
                      r = u, Ne.props = r.memoizedProps, Ne.state = r.memoizedState, Ne.componentWillUnmount();
                    } catch (Ue) {
                      kn(u, l, Ue);
                    }
                  }
                  break;
                case 5:
                  Cu(ne, ne.return);
                  break;
                case 22:
                  if (ne.memoizedState !== null) {
                    mh(oe);
                    continue;
                  }
              }
              xe !== null ? (xe.return = ne, be = xe) : mh(oe);
            }
            ae = ae.sibling;
          }
          e: for (ae = null, oe = n; ; ) {
            if (oe.tag === 5) {
              if (ae === null) {
                ae = oe;
                try {
                  c = oe.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = oe.stateNode, D = oe.memoizedProps.style, g = D != null && D.hasOwnProperty("display") ? D.display : null, x.style.display = pt("display", g));
                } catch (Ue) {
                  kn(n, n.return, Ue);
                }
              }
            } else if (oe.tag === 6) {
              if (ae === null) try {
                oe.stateNode.nodeValue = $ ? "" : oe.memoizedProps;
              } catch (Ue) {
                kn(n, n.return, Ue);
              }
            } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
              oe.child.return = oe, oe = oe.child;
              continue;
            }
            if (oe === n) break e;
            for (; oe.sibling === null; ) {
              if (oe.return === null || oe.return === n) break e;
              ae === oe && (ae = null), oe = oe.return;
            }
            ae === oe && (ae = null), oe.sibling.return = oe.return, oe = oe.sibling;
          }
        }
        break;
      case 19:
        nr(r, n), wi(n), u & 4 && Tu(n);
        break;
      case 21:
        break;
      default:
        nr(
          r,
          n
        ), wi(n);
    }
  }
  function wi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Yd(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(S(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ha(c, ""), u.flags &= -33);
            var d = vh(n);
            xu(n, d, c);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, x = vh(n);
            Ms(n, x, g);
            break;
          default:
            throw Error(S(161));
        }
      } catch (D) {
        kn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function jy(n, r, l) {
    be = n, Wd(n);
  }
  function Wd(n, r, l) {
    for (var u = (n.mode & 1) !== 0; be !== null; ) {
      var c = be, d = c.child;
      if (c.tag === 22 && u) {
        var g = c.memoizedState !== null || Eu;
        if (!g) {
          var x = c.alternate, D = x !== null && x.memoizedState !== null || ur;
          x = Eu;
          var $ = ur;
          if (Eu = g, (ur = D) && !$) for (be = c; be !== null; ) g = be, D = g.child, g.tag === 22 && g.memoizedState !== null ? Qd(c) : D !== null ? (D.return = g, be = D) : Qd(c);
          for (; d !== null; ) be = d, Wd(d), d = d.sibling;
          be = c, Eu = x, ur = $;
        }
        bu(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, be = d) : bu(n);
    }
  }
  function bu(n) {
    for (; be !== null; ) {
      var r = be;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              ur || rf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !ur) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ia(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Zv(r, d, u);
              break;
            case 3:
              var g = r.updateQueue;
              if (g !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Zv(r, g, l);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (l === null && r.flags & 4) {
                l = x;
                var D = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    D.autoFocus && l.focus();
                    break;
                  case "img":
                    D.src && (l.src = D.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var $ = r.alternate;
                if ($ !== null) {
                  var ae = $.memoizedState;
                  if (ae !== null) {
                    var oe = ae.dehydrated;
                    oe !== null && Rl(oe);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
          ur || r.flags & 512 && af(r);
        } catch (ne) {
          kn(r, r.return, ne);
        }
      }
      if (r === n) {
        be = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, be = l;
        break;
      }
      be = r.return;
    }
  }
  function mh(n) {
    for (; be !== null; ) {
      var r = be;
      if (r === n) {
        be = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, be = l;
        break;
      }
      be = r.return;
    }
  }
  function Qd(n) {
    for (; be !== null; ) {
      var r = be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              rf(4, r);
            } catch (D) {
              kn(r, l, D);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (D) {
                kn(r, c, D);
              }
            }
            var d = r.return;
            try {
              af(r);
            } catch (D) {
              kn(r, d, D);
            }
            break;
          case 5:
            var g = r.return;
            try {
              af(r);
            } catch (D) {
              kn(r, g, D);
            }
        }
      } catch (D) {
        kn(r, r.return, D);
      }
      if (r === n) {
        be = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, be = x;
        break;
      }
      be = r.return;
    }
  }
  var Fy = Math.ceil, Eo = ke.ReactCurrentDispatcher, lf = ke.ReactCurrentOwner, Ia = ke.ReactCurrentBatchConfig, Rt = 0, Dn = null, fn = null, In = 0, ua = 0, _u = ct(0), Yn = 0, Us = null, Co = 0, Du = 0, Gd = 0, Al = null, br = null, of = 0, ku = 1 / 0, Ji = null, uf = !1, qd = null, Ya = null, Ou = !1, Wa = null, sf = 0, zs = 0, cf = null, As = -1, Ro = 0;
  function rr() {
    return Rt & 6 ? zt() : As !== -1 ? As : As = zt();
  }
  function Zi(n) {
    return n.mode & 1 ? Rt & 2 && In !== 0 ? In & -In : _c.transition !== null ? (Ro === 0 && (Ro = Bo()), Ro) : (n = At, n !== 0 || (n = window.event, n = n === void 0 ? 16 : as(n.type)), n) : 1;
  }
  function Rn(n, r, l, u) {
    if (50 < zs) throw zs = 0, cf = null, Error(S(185));
    ji(n, l, u), (!(Rt & 2) || n !== Dn) && (n === Dn && (!(Rt & 2) && (Du |= l), Yn === 4 && Ti(n, In)), Wn(n, u), l === 1 && Rt === 0 && !(r.mode & 1) && (ku = zt() + 500, er && ea()));
  }
  function Wn(n, r) {
    var l = n.callbackNode;
    gl(n, r);
    var u = Lr(n, n === Dn ? In : 0);
    if (u === 0) l !== null && un(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && un(l), r === 1) n.tag === 0 ? _d(Nu.bind(null, n)) : bd(Nu.bind(null, n)), xd(function() {
        !(Rt & 6) && ea();
      }), l = null;
      else {
        switch (Io(u)) {
          case 1:
            l = Or;
            break;
          case 4:
            l = ht;
            break;
          case 16:
            l = Na;
            break;
          case 536870912:
            l = Ho;
            break;
          default:
            l = Na;
        }
        l = wh(l, ff.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ff(n, r) {
    if (As = -1, Ro = 0, Rt & 6) throw Error(S(327));
    var l = n.callbackNode;
    if (Lu() && n.callbackNode !== l) return null;
    var u = Lr(n, n === Dn ? In : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = pf(n, u);
    else {
      r = u;
      var c = Rt;
      Rt |= 2;
      var d = gh();
      (Dn !== n || In !== r) && (Ji = null, ku = zt() + 500, wo(n, r));
      do
        try {
          Hy();
          break;
        } catch (x) {
          yh(n, x);
        }
      while (!0);
      Ra(), Eo.current = d, Rt = c, fn !== null ? r = 0 : (Dn = null, In = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Sl(n), c !== 0 && (u = c, r = xo(n, c))), r === 1) throw l = Us, wo(n, 0), Ti(n, u), Wn(n, zt()), l;
      if (r === 6) Ti(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Xd(c) && (r = pf(n, u), r === 2 && (d = Sl(n), d !== 0 && (u = d, r = xo(n, d))), r === 1)) throw l = Us, wo(n, 0), Ti(n, u), Wn(n, zt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            jl(n, br, Ji);
            break;
          case 3:
            if (Ti(n, u), (u & 130023424) === u && (r = of + 500 - zt(), 10 < r)) {
              if (Lr(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                rr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = lo(jl.bind(null, n, br, Ji), r);
              break;
            }
            jl(n, br, Ji);
            break;
          case 4:
            if (Ti(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var g = 31 - Nr(u);
              d = 1 << g, g = r[g], g > c && (c = g), u &= ~d;
            }
            if (u = c, u = zt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Fy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = lo(jl.bind(null, n, br, Ji), u);
              break;
            }
            jl(n, br, Ji);
            break;
          case 5:
            jl(n, br, Ji);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return Wn(n, zt()), n.callbackNode === l ? ff.bind(null, n) : null;
  }
  function xo(n, r) {
    var l = Al;
    return n.current.memoizedState.isDehydrated && (wo(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = br, br = l, r !== null && Kd(r)), n;
  }
  function Kd(n) {
    br === null ? br = n : br.push.apply(br, n);
  }
  function Xd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ua(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ti(n, r) {
    for (r &= ~Gd, r &= ~Du, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Nu(n) {
    if (Rt & 6) throw Error(S(327));
    Lu();
    var r = Lr(n, 0);
    if (!(r & 1)) return Wn(n, zt()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Sl(n);
      u !== 0 && (r = u, l = xo(n, u));
    }
    if (l === 1) throw l = Us, wo(n, 0), Ti(n, r), Wn(n, zt()), l;
    if (l === 6) throw Error(S(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jl(n, br, Ji), Wn(n, zt()), null;
  }
  function Jd(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (ku = zt() + 500, er && ea());
    }
  }
  function bi(n) {
    Wa !== null && Wa.tag === 0 && !(Rt & 6) && Lu();
    var r = Rt;
    Rt |= 1;
    var l = Ia.transition, u = At;
    try {
      if (Ia.transition = null, At = 1, n) return n();
    } finally {
      At = u, Ia.transition = l, Rt = r, !(Rt & 6) && ea();
    }
  }
  function df() {
    ua = _u.current, Vt(_u);
  }
  function wo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Iv(l)), fn !== null) for (l = fn.return; l !== null; ) {
      var u = l;
      switch (kd(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && ja();
          break;
        case 3:
          su(), Vt(bn), Vt(nt), Ad();
          break;
        case 5:
          zd(u);
          break;
        case 4:
          su();
          break;
        case 13:
          Vt(vn);
          break;
        case 19:
          Vt(vn);
          break;
        case 10:
          Ld(u.type._context);
          break;
        case 22:
        case 23:
          df();
      }
      l = l.return;
    }
    if (Dn = n, fn = n = Fl(n.current, null), In = ua = r, Yn = 0, Us = null, Gd = Du = Co = 0, br = Al = null, co !== null) {
      for (r = 0; r < co.length; r++) if (l = co[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var g = d.next;
          d.next = c, u.next = g;
        }
        l.pending = u;
      }
      co = null;
    }
    return n;
  }
  function yh(n, r) {
    do {
      var l = fn;
      try {
        if (Ra(), Uc.current = wr, xa) {
          for (var u = Pe.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          xa = !1;
        }
        if (ze = 0, Et = rt = Pe = null, cu = !1, ws = 0, lf.current = null, l === null || l.return === null) {
          Yn = 1, Us = r, fn = null;
          break;
        }
        e: {
          var d = n, g = l.return, x = l, D = r;
          if (r = In, x.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var $ = D, ae = x, oe = ae.tag;
            if (!(ae.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var ne = ae.alternate;
              ne ? (ae.updateQueue = ne.updateQueue, ae.memoizedState = ne.memoizedState, ae.lanes = ne.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var xe = uh(g);
            if (xe !== null) {
              xe.flags &= -257, Vd(xe, g, x, d, r), xe.mode & 1 && ks(d, $, r), r = xe, D = $;
              var Ne = r.updateQueue;
              if (Ne === null) {
                var Ue = /* @__PURE__ */ new Set();
                Ue.add(D), r.updateQueue = Ue;
              } else Ne.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                ks(d, $, r), js();
                break e;
              }
              D = Error(S(426));
            }
          } else if (cn && x.mode & 1) {
            var Un = uh(g);
            if (Un !== null) {
              !(Un.flags & 65536) && (Un.flags |= 256), Vd(Un, g, x, d, r), Nd(Ul(D, x));
              break e;
            }
          }
          d = D = Ul(D, x), Yn !== 4 && (Yn = 2), Al === null ? Al = [d] : Al.push(d), d = g;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var U = lh(d, D, r);
                Jv(d, U);
                break e;
              case 1:
                x = D;
                var O = d.type, P = d.stateNode;
                if (!(d.flags & 128) && (typeof O.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (Ya === null || !Ya.has(P)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var fe = oh(d, x, r);
                  Jv(d, fe);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Eh(l);
      } catch (Ae) {
        r = Ae, fn === l && l !== null && (fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gh() {
    var n = Eo.current;
    return Eo.current = wr, n === null ? wr : n;
  }
  function js() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Dn === null || !(Co & 268435455) && !(Du & 268435455) || Ti(Dn, In);
  }
  function pf(n, r) {
    var l = Rt;
    Rt |= 2;
    var u = gh();
    (Dn !== n || In !== r) && (Ji = null, wo(n, r));
    do
      try {
        Py();
        break;
      } catch (c) {
        yh(n, c);
      }
    while (!0);
    if (Ra(), Rt = l, Eo.current = u, fn !== null) throw Error(S(261));
    return Dn = null, In = 0, Yn;
  }
  function Py() {
    for (; fn !== null; ) Sh(fn);
  }
  function Hy() {
    for (; fn !== null && !Cr(); ) Sh(fn);
  }
  function Sh(n) {
    var r = xh(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? Eh(n) : fn = r, lf.current = null;
  }
  function Eh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = zy(l, r), l !== null) {
          l.flags &= 32767, fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, fn = null;
          return;
        }
      } else if (l = Uy(l, r, ua), l !== null) {
        fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        fn = r;
        return;
      }
      fn = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function jl(n, r, l) {
    var u = At, c = Ia.transition;
    try {
      Ia.transition = null, At = 1, Vy(n, r, l, u);
    } finally {
      Ia.transition = c, At = u;
    }
    return null;
  }
  function Vy(n, r, l, u) {
    do
      Lu();
    while (Wa !== null);
    if (Rt & 6) throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(S(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (nd(n, d), n === Dn && (fn = Dn = null, In = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Ou || (Ou = !0, wh(Na, function() {
      return Lu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ia.transition, Ia.transition = null;
      var g = At;
      At = 1;
      var x = Rt;
      Rt |= 4, lf.current = null, Ay(n, l), hh(l, n), mc(io), Ma = !!Cd, io = Cd = null, n.current = l, jy(l), yi(), Rt = x, At = g, Ia.transition = d;
    } else n.current = l;
    if (Ou && (Ou = !1, Wa = n, sf = c), d = n.pendingLanes, d === 0 && (Ya = null), ts(l.stateNode), Wn(n, zt()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (uf) throw uf = !1, n = qd, qd = null, n;
    return sf & 1 && n.tag !== 0 && Lu(), d = n.pendingLanes, d & 1 ? n === cf ? zs++ : (zs = 0, cf = n) : zs = 0, ea(), null;
  }
  function Lu() {
    if (Wa !== null) {
      var n = Io(sf), r = Ia.transition, l = At;
      try {
        if (Ia.transition = null, At = 16 > n ? 16 : n, Wa === null) var u = !1;
        else {
          if (n = Wa, Wa = null, sf = 0, Rt & 6) throw Error(S(331));
          var c = Rt;
          for (Rt |= 4, be = n.current; be !== null; ) {
            var d = be, g = d.child;
            if (be.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var D = 0; D < x.length; D++) {
                  var $ = x[D];
                  for (be = $; be !== null; ) {
                    var ae = be;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ru(8, ae, d);
                    }
                    var oe = ae.child;
                    if (oe !== null) oe.return = ae, be = oe;
                    else for (; be !== null; ) {
                      ae = be;
                      var ne = ae.sibling, xe = ae.return;
                      if (ph(ae), ae === $) {
                        be = null;
                        break;
                      }
                      if (ne !== null) {
                        ne.return = xe, be = ne;
                        break;
                      }
                      be = xe;
                    }
                  }
                }
                var Ne = d.alternate;
                if (Ne !== null) {
                  var Ue = Ne.child;
                  if (Ue !== null) {
                    Ne.child = null;
                    do {
                      var Un = Ue.sibling;
                      Ue.sibling = null, Ue = Un;
                    } while (Ue !== null);
                  }
                }
                be = d;
              }
            }
            if (d.subtreeFlags & 2064 && g !== null) g.return = d, be = g;
            else e: for (; be !== null; ) {
              if (d = be, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ru(9, d, d.return);
              }
              var U = d.sibling;
              if (U !== null) {
                U.return = d.return, be = U;
                break e;
              }
              be = d.return;
            }
          }
          var O = n.current;
          for (be = O; be !== null; ) {
            g = be;
            var P = g.child;
            if (g.subtreeFlags & 2064 && P !== null) P.return = g, be = P;
            else e: for (g = O; be !== null; ) {
              if (x = be, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rf(9, x);
                }
              } catch (Ae) {
                kn(x, x.return, Ae);
              }
              if (x === g) {
                be = null;
                break e;
              }
              var fe = x.sibling;
              if (fe !== null) {
                fe.return = x.return, be = fe;
                break e;
              }
              be = x.return;
            }
          }
          if (Rt = c, ea(), qr && typeof qr.onPostCommitFiberRoot == "function") try {
            qr.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        At = l, Ia.transition = r;
      }
    }
    return !1;
  }
  function Ch(n, r, l) {
    r = Ul(l, r), r = lh(n, r, 1), n = Ll(n, r, 1), r = rr(), n !== null && (ji(n, 1, r), Wn(n, r));
  }
  function kn(n, r, l) {
    if (n.tag === 3) Ch(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Ch(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ya === null || !Ya.has(u))) {
          n = Ul(l, n), n = oh(r, n, 1), r = Ll(r, n, 1), n = rr(), r !== null && (ji(r, 1, n), Wn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function By(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = rr(), n.pingedLanes |= n.suspendedLanes & l, Dn === n && (In & l) === l && (Yn === 4 || Yn === 3 && (In & 130023424) === In && 500 > zt() - of ? wo(n, 0) : Gd |= l), Wn(n, r);
  }
  function Rh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ml, ml <<= 1, !(ml & 130023424) && (ml = 4194304)) : r = 1);
    var l = rr();
    n = qi(n, r), n !== null && (ji(n, r, l), Wn(n, l));
  }
  function Zd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Rh(n, l);
  }
  function $y(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    u !== null && u.delete(r), Rh(n, l);
  }
  var xh;
  xh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || bn.current) la = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return la = !1, Xi(n, r, l);
      la = !!(n.flags & 131072);
    }
    else la = !1, cn && r.flags & 1048576 && Dd(r, au, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ls(n, r), n = r.pendingProps;
        var c = Aa(r, nt.current);
        lu(r, l), c = te(null, r, u, n, c, l);
        var d = Hn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, pn(u) ? (d = !0, Rc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, kc(r), c.updater = yo, r.stateNode = c, c._reactInternals = r, Pd(r, u, n, l), r = Xc(null, r, u, !0, d, l)) : (r.tag = 0, cn && d && xc(r), Ln(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ls(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Iy(u), n = ia(u, n), c) {
            case 0:
              r = ot(null, r, u, n, l);
              break e;
            case 1:
              r = Os(null, r, u, n, l);
              break e;
            case 11:
              r = yu(null, r, u, n, l);
              break e;
            case 14:
              r = zl(null, r, u, ia(u.type, n), l);
              break e;
          }
          throw Error(S(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), ot(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), Os(n, r, u, c, l);
      case 3:
        e: {
          if (My(r), n === null) throw Error(S(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, ou(n, r), Nc(r, u, null, l);
          var g = r.memoizedState;
          if (u = g.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ul(Error(S(423)), r), r = ch(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Ul(Error(S(424)), r), r = ch(n, r, u, l, c);
            break e;
          } else for (ra = ui(r.stateNode.containerInfo.firstChild), Ca = r, cn = !0, Pa = null, l = Kv(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Cn(), u === c) {
              r = Mn(n, r, l);
              break e;
            }
            Ln(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return eh(r), n === null && Tc(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, g = c.children, ms(u, c) ? g = null : d !== null && ms(u, d) && (r.flags |= 32), go(n, r), Ln(n, r, g, l), r.child;
      case 6:
        return n === null && Tc(r), null;
      case 13:
        return fh(n, r, l);
      case 4:
        return Ud(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = iu(r, null, u, l) : Ln(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), yu(n, r, u, c, l);
      case 7:
        return Ln(n, r, r.pendingProps, l), r.child;
      case 8:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, g = c.value, Qt(Gi, u._currentValue), u._currentValue = g, d !== null) if (Ua(d.value, g)) {
            if (d.children === c.children && !bn.current) {
              r = Mn(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              g = d.child;
              for (var D = x.firstContext; D !== null; ) {
                if (D.context === u) {
                  if (d.tag === 1) {
                    D = aa(-1, l & -l), D.tag = 2;
                    var $ = d.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var ae = $.pending;
                      ae === null ? D.next = D : (D.next = ae.next, ae.next = D), $.pending = D;
                    }
                  }
                  d.lanes |= l, D = d.alternate, D !== null && (D.lanes |= l), Md(
                    d.return,
                    l,
                    r
                  ), x.lanes |= l;
                  break;
                }
                D = D.next;
              }
            } else if (d.tag === 10) g = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (g = d.return, g === null) throw Error(S(341));
              g.lanes |= l, x = g.alternate, x !== null && (x.lanes |= l), Md(g, l, r), g = d.sibling;
            } else g = d.child;
            if (g !== null) g.return = d;
            else for (g = d; g !== null; ) {
              if (g === r) {
                g = null;
                break;
              }
              if (d = g.sibling, d !== null) {
                d.return = g.return, g = d;
                break;
              }
              g = g.return;
            }
            d = g;
          }
          Ln(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, lu(r, l), c = Va(c), u = u(c), r.flags |= 1, Ln(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = ia(u, r.pendingProps), c = ia(u.type, c), zl(n, r, u, c, l);
      case 15:
        return Kc(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), Ls(n, r), r.tag = 1, pn(u) ? (n = !0, Rc(r)) : n = !1, lu(r, l), rh(r, u, c), Pd(r, u, c, l), Xc(null, r, u, !0, n, l);
      case 19:
        return $d(n, r, l);
      case 22:
        return oa(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function wh(n, r) {
    return en(n, r);
  }
  function Th(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qa(n, r, l, u) {
    return new Th(n, r, l, u);
  }
  function ep(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Iy(n) {
    if (typeof n == "function") return ep(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wn) return 11;
      if (n === Bt) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Qa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function vf(n, r, l, u, c, d) {
    var g = 2;
    if (u = n, typeof n == "function") ep(n) && (g = 1);
    else if (typeof n == "string") g = 5;
    else e: switch (n) {
      case Qe:
        return To(l.children, c, d, r);
      case qt:
        g = 8, c |= 8;
        break;
      case mn:
        return n = Qa(12, l, r, c | 2), n.elementType = mn, n.lanes = d, n;
      case Ge:
        return n = Qa(13, l, r, c), n.elementType = Ge, n.lanes = d, n;
      case st:
        return n = Qa(19, l, r, c), n.elementType = st, n.lanes = d, n;
      case Oe:
        return hf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ut:
            g = 10;
            break e;
          case Nt:
            g = 9;
            break e;
          case wn:
            g = 11;
            break e;
          case Bt:
            g = 14;
            break e;
          case Lt:
            g = 16, u = null;
            break e;
        }
        throw Error(S(130, n == null ? n : typeof n, ""));
    }
    return r = Qa(g, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function To(n, r, l, u) {
    return n = Qa(7, n, u, r), n.lanes = l, n;
  }
  function hf(n, r, l, u) {
    return n = Qa(22, n, u, r), n.elementType = Oe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function mf(n, r, l) {
    return n = Qa(6, n, null, r), n.lanes = l, n;
  }
  function Fs(n, r, l) {
    return r = Qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ps(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $o(0), this.expirationTimes = $o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $o(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function tp(n, r, l, u, c, d, g, x, D) {
    return n = new Ps(n, r, l, x, D), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Qa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kc(d), n;
  }
  function bh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ut, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function np(n) {
    if (!n) return Ci;
    n = n._reactInternals;
    e: {
      if (Fe(n) !== n || n.tag !== 1) throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (pn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (pn(l)) return Ss(n, l, r);
    }
    return r;
  }
  function rp(n, r, l, u, c, d, g, x, D) {
    return n = tp(l, u, !0, n, c, d, g, x, D), n.context = np(null), l = n.current, u = rr(), c = Zi(l), d = aa(u, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, ji(n, c, u), Wn(n, u), n;
  }
  function yf(n, r, l, u) {
    var c = r.current, d = rr(), g = Zi(c);
    return l = np(l), r.context === null ? r.context = l : r.pendingContext = l, r = aa(d, g), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ll(c, r, g), n !== null && (Rn(n, c, g, d), Oc(n, c, g)), g;
  }
  function Hs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function _h(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function ap(n, r) {
    _h(n, r), (n = n.alternate) && _h(n, r);
  }
  function Yy() {
    return null;
  }
  var ip = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function gf(n) {
    this._internalRoot = n;
  }
  Vs.prototype.render = gf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(S(409));
    yf(n, r, null, null);
  }, Vs.prototype.unmount = gf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      bi(function() {
        yf(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function Vs(n) {
    this._internalRoot = n;
  }
  Vs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Wo();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Wt.length && r !== 0 && r < Wt[l].priority; l++) ;
      Wt.splice(l, 0, n), l === 0 && sc(n);
    }
  };
  function Pl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Dh() {
  }
  function Wy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var $ = Hs(g);
          d.call($);
        };
      }
      var g = rp(r, u, n, 0, null, !1, !1, "", Dh);
      return n._reactRootContainer = g, n[Wi] = g.current, nu(n.nodeType === 8 ? n.parentNode : n), bi(), g;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var $ = Hs(D);
        x.call($);
      };
    }
    var D = tp(n, 0, !1, null, null, !1, !1, "", Dh);
    return n._reactRootContainer = D, n[Wi] = D.current, nu(n.nodeType === 8 ? n.parentNode : n), bi(function() {
      yf(r, D, l, u);
    }), D;
  }
  function Ef(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var g = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var D = Hs(g);
          x.call(D);
        };
      }
      yf(r, g, n, c);
    } else g = Wy(l, r, n, c, u);
    return Hs(g);
  }
  Jl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ri(r.pendingLanes);
          l !== 0 && (gi(r, l | 1), Wn(r, zt()), !(Rt & 6) && (ku = zt() + 500, ea()));
        }
        break;
      case 13:
        bi(function() {
          var u = qi(n, 1);
          if (u !== null) {
            var c = rr();
            Rn(u, n, 1, c);
          }
        }), ap(n, 1);
    }
  }, Yo = function(n) {
    if (n.tag === 13) {
      var r = qi(n, 134217728);
      if (r !== null) {
        var l = rr();
        Rn(r, n, 134217728, l);
      }
      ap(n, 134217728);
    }
  }, bt = function(n) {
    if (n.tag === 13) {
      var r = Zi(n), l = qi(n, r);
      if (l !== null) {
        var u = rr();
        Rn(l, n, r, u);
      }
      ap(n, r);
    }
  }, Wo = function() {
    return At;
  }, Qo = function(n, r) {
    var l = At;
    try {
      return At = n, r();
    } finally {
      At = l;
    }
  }, Dr = function(n, r, l) {
    switch (r) {
      case "input":
        if (On(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Ie(u);
              if (!c) throw Error(S(90));
              Ir(u), On(u, c);
            }
          }
        }
        break;
      case "textarea":
        va(n, l);
        break;
      case "select":
        r = l.value, r != null && gr(n, !!l.multiple, r, !1);
    }
  }, Xl = Jd, Po = bi;
  var Qy = { usingClientEntryPoint: !1, Events: [gs, ru, Ie, Oa, dl, Jd] }, Bs = { findFiberByHostInstance: za, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, kh = { bundleType: Bs.bundleType, version: Bs.version, rendererPackageName: Bs.rendererPackageName, rendererConfig: Bs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ke.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = vt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Bs.findFiberByHostInstance || Yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cf.isDisabled && Cf.supportsFiber) try {
      hl = Cf.inject(kh), qr = Cf;
    } catch {
    }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy, Za.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pl(r)) throw Error(S(200));
    return bh(n, r, null, l);
  }, Za.createRoot = function(n, r) {
    if (!Pl(n)) throw Error(S(299));
    var l = !1, u = "", c = ip;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = tp(n, 1, !1, null, null, l, !1, u, c), n[Wi] = r.current, nu(n.nodeType === 8 ? n.parentNode : n), new gf(r);
  }, Za.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(S(188)) : (n = Object.keys(n).join(","), Error(S(268, n)));
    return n = vt(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return bi(n);
  }, Za.hydrate = function(n, r, l) {
    if (!Sf(r)) throw Error(S(200));
    return Ef(null, n, r, !0, l);
  }, Za.hydrateRoot = function(n, r, l) {
    if (!Pl(n)) throw Error(S(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", g = ip;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (g = l.onRecoverableError)), r = rp(r, null, n, 1, l ?? null, c, !1, d, g), n[Wi] = r.current, nu(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Vs(r);
  }, Za.render = function(n, r, l) {
    if (!Sf(r)) throw Error(S(200));
    return Ef(null, n, r, !1, l);
  }, Za.unmountComponentAtNode = function(n) {
    if (!Sf(n)) throw Error(S(40));
    return n._reactRootContainer ? (bi(function() {
      Ef(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = Jd, Za.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Sf(l)) throw Error(S(200));
    if (n == null || n._reactInternals === void 0) throw Error(S(38));
    return Ef(n, r, l, !1, u);
  }, Za.version = "18.3.1-next-f1338f8080-20240426", Za;
}
var ei = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YR;
function vk() {
  return YR || (YR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var h = ee, C = nx(), S = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = !1;
    function _(e) {
      T = e;
    }
    function L(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Y("warn", e, a);
      }
    }
    function y(e) {
      if (!T) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Y("error", e, a);
      }
    }
    function Y(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var z = 0, H = 1, J = 2, F = 3, X = 4, Z = 5, he = 6, _e = 7, ge = 8, je = 9, ie = 10, le = 11, ke = 12, De = 13, ut = 14, Qe = 15, qt = 16, mn = 17, Ut = 18, Nt = 19, wn = 21, Ge = 22, st = 23, Bt = 24, Lt = 25, Oe = !0, de = !1, Ve = !1, Se = !1, M = !1, q = !0, qe = !1, et = !0, dt = !0, ft = !0, wt = !0, mt = /* @__PURE__ */ new Set(), yt = {}, an = {};
    function yr(e, t) {
      Ir(e, t), Ir(e + "Capture", t);
    }
    function Ir(e, t) {
      yt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), yt[e] = t;
      {
        var a = e.toLowerCase();
        an[a] = e, e === "onDoubleClick" && (an.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        mt.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qn = Object.prototype.hasOwnProperty;
    function Bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function An(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function Yr(e, t) {
      if (An(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), On(e);
    }
    function Wr(e) {
      if (An(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), On(e);
    }
    function Kn(e, t) {
      if (An(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), On(e);
    }
    function gr(e, t) {
      if (An(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), On(e);
    }
    function Qr(e) {
      if (An(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), On(e);
    }
    function Sr(e) {
      if (An(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bn(e)), On(e);
    }
    var va = 0, ir = 1, Gr = 2, gn = 3, _r = 4, pi = 5, ha = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Be = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", pt = new RegExp("^[" + ve + "][" + Be + "]*$"), Ht = {}, $t = {};
    function Nn(e) {
      return qn.call($t, e) ? !0 : qn.call(Ht, e) ? !1 : pt.test(e) ? ($t[e] = !0, !0) : (Ht[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Sn(e, t, a) {
      return t !== null ? t.type === va : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Er(e, t, a, i) {
      if (a !== null && a.type === va)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, a, i) {
      if (t === null || typeof t > "u" || Er(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case gn:
            return !t;
          case _r:
            return t === !1;
          case pi:
            return isNaN(t);
          case ha:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Dr(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function It(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Gr || t === gn || t === _r, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, ti = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ti.forEach(function(e) {
      Yt[e] = new It(
        e,
        va,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new It(
        t,
        ir,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new It(
        e,
        Gr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        gn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        gn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        _r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new It(
        e,
        ha,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new It(
        e,
        pi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Oa = /[\-\:]([a-z])/g, dl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Oa, dl);
      Yt[t] = new It(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Oa, dl);
      Yt[t] = new It(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Oa, dl);
      Yt[t] = new It(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new It(
        e,
        ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Xl = "xlinkHref";
    Yt[Xl] = new It(
      "xlinkHref",
      ir,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new It(
        e,
        ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Po = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ai = !1;
    function pl(e) {
      !Ai && Po.test(e) && (Ai = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ma(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Yr(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === _r) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === gn)
            return a;
          f = e.getAttribute(s);
        }
        return Kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function vi(e, t, a, i) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Yr(a, t), o === "" + a ? a : o;
      }
    }
    function ya(e, t, a, i) {
      var o = Dr(t);
      if (!Sn(t, o, i)) {
        if (Kt(t, a, o, i) && (a = null), i || o === null) {
          if (Nn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Yr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var v = o.type;
            e[p] = v === gn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var E = o.attributeName, R = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var N = o.type, k;
          N === gn || N === _r && a === !0 ? k = "" : (Yr(a, E), k = "" + a, o.sanitizeURL && pl(k.toString())), R ? e.setAttributeNS(R, E, k) : e.setAttribute(E, k);
        }
      }
    }
    var ni = Symbol.for("react.element"), kr = Symbol.for("react.portal"), ga = Symbol.for("react.fragment"), hi = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), re = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), vt = Symbol.for("react.scope"), jn = Symbol.for("react.debug_trace_mode"), en = Symbol.for("react.offscreen"), un = Symbol.for("react.legacy_hidden"), Cr = Symbol.for("react.cache"), yi = Symbol.for("react.tracing_marker"), zt = Symbol.iterator, Xn = "@@iterator";
    function Or(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = zt && e[zt] || e[Xn];
      return typeof t == "function" ? t : null;
    }
    var ht = Object.assign, Na = 0, vl, Ho, hl, qr, ts, Nr, ns;
    function rs() {
    }
    rs.__reactDisabledLog = !0;
    function oc() {
      {
        if (Na === 0) {
          vl = console.log, Ho = console.info, hl = console.warn, qr = console.error, ts = console.group, Nr = console.groupCollapsed, ns = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: rs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Na++;
      }
    }
    function Vo() {
      {
        if (Na--, Na === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ht({}, e, {
              value: vl
            }),
            info: ht({}, e, {
              value: Ho
            }),
            warn: ht({}, e, {
              value: hl
            }),
            error: ht({}, e, {
              value: qr
            }),
            group: ht({}, e, {
              value: ts
            }),
            groupCollapsed: ht({}, e, {
              value: Nr
            }),
            groupEnd: ht({}, e, {
              value: ns
            })
          });
        }
        Na < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ml = S.ReactCurrentDispatcher, ri;
    function Lr(e, t, a) {
      {
        if (ri === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ri = i && i[1] || "";
          }
        return `
` + ri + e;
      }
    }
    var yl = !1, gl;
    {
      var Sl = typeof WeakMap == "function" ? WeakMap : Map;
      gl = new Sl();
    }
    function Bo(e, t) {
      if (!e || yl)
        return "";
      {
        var a = gl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      yl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ml.current, ml.current = null, oc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (I) {
              i = I;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var p = I.stack.split(`
`), v = i.stack.split(`
`), E = p.length - 1, R = v.length - 1; E >= 1 && R >= 0 && p[E] !== v[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (p[E] !== v[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || p[E] !== v[R]) {
                    var N = `
` + p[E].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && gl.set(e, N), N;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        yl = !1, ml.current = s, Vo(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", V = k ? Lr(k) : "";
      return typeof e == "function" && gl.set(e, V), V;
    }
    function $o(e, t, a) {
      return Bo(e, !0);
    }
    function ji(e, t, a) {
      return Bo(e, !1);
    }
    function nd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bo(e, nd(e));
      if (typeof e == "string")
        return Lr(e);
      switch (e) {
        case Fe:
          return Lr("Suspense");
        case Ct:
          return Lr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            return ji(e.render);
          case Tt:
            return gi(e.type, t, a);
          case Ke: {
            var i = e, o = i._payload, s = i._init;
            try {
              return gi(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function At(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return Lr(e.type);
        case qt:
          return Lr("Lazy");
        case De:
          return Lr("Suspense");
        case Nt:
          return Lr("SuspenseList");
        case z:
        case J:
        case Qe:
          return ji(e.type);
        case le:
          return ji(e.type.render);
        case H:
          return $o(e.type);
        default:
          return "";
      }
    }
    function Io(e) {
      try {
        var t = "", a = e;
        do
          t += At(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Jl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function Yo(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ga:
          return "Fragment";
        case kr:
          return "Portal";
        case mi:
          return "Profiler";
        case hi:
          return "StrictMode";
        case Fe:
          return "Suspense";
        case Ct:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case re:
            var t = e;
            return Yo(t) + ".Consumer";
          case b:
            var a = e;
            return Yo(a._context) + ".Provider";
          case se:
            return Jl(e, e.render, "ForwardRef");
          case Tt:
            var i = e.displayName || null;
            return i !== null ? i : bt(e.type) || "Memo";
          case Ke: {
            var o = e, s = o._payload, f = o._init;
            try {
              return bt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Qo(e) {
      return e.displayName || "Context";
    }
    function at(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Bt:
          return "Cache";
        case je:
          var i = a;
          return Qo(i) + ".Consumer";
        case ie:
          var o = a;
          return Qo(o._context) + ".Provider";
        case Ut:
          return "DehydratedFragment";
        case le:
          return Wo(a, a.render, "ForwardRef");
        case _e:
          return "Fragment";
        case Z:
          return a;
        case X:
          return "Portal";
        case F:
          return "Root";
        case he:
          return "Text";
        case qt:
          return bt(a);
        case ge:
          return a === hi ? "StrictMode" : "Mode";
        case Ge:
          return "Offscreen";
        case ke:
          return "Profiler";
        case wn:
          return "Scope";
        case De:
          return "Suspense";
        case Nt:
          return "SuspenseList";
        case Lt:
          return "TracingMarker";
        case H:
        case z:
        case mn:
        case J:
        case ut:
        case Qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zl = S.ReactDebugCurrentFrame, En = null, Kr = !1;
    function Mr() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return at(e);
      }
      return null;
    }
    function El() {
      return En === null ? "" : Io(En);
    }
    function Tn() {
      Zl.getCurrentStack = null, En = null, Kr = !1;
    }
    function Wt(e) {
      Zl.getCurrentStack = e === null ? null : El, En = e, Kr = !1;
    }
    function uc() {
      return En;
    }
    function Xr(e) {
      Kr = e;
    }
    function Jn(e) {
      return "" + e;
    }
    function Si(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Sr(e), e;
        default:
          return "";
      }
    }
    var sc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Fi(e, t) {
      sc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Cl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function cc(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function Rl(e) {
      var t = "";
      return e && (Cl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Pi(e) {
      var t = Cl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Sr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            Sr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Sr(p), i = "" + p;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ma(e) {
      cc(e) || (e._valueTracker = Pi(e));
    }
    function Go(e) {
      if (!e)
        return !1;
      var t = cc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Rl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function xl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var wl = !1, eo = !1, qo = !1, as = !1;
    function ai(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function m(e, t) {
      var a = e, i = t.checked, o = ht({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function w(e, t) {
      Fi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !wl && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), wl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Si(t.value != null ? t.value : i),
        controlled: ai(t)
      };
    }
    function B(e, t) {
      var a = e, i = t.checked;
      i != null && ya(a, "checked", i, !1);
    }
    function W(e, t) {
      var a = e;
      {
        var i = ai(t);
        !a._wrapperState.controlled && i && !as && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), as = !0), a._wrapperState.controlled && !i && !qo && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qo = !0);
      }
      B(e, t);
      var o = Si(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Jn(o)) : a.value !== Jn(o) && (a.value = Jn(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? We(a, t.type, o) : t.hasOwnProperty("defaultValue") && We(a, t.type, Si(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Jn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Xe(e, t) {
      var a = e;
      W(a, t), Ee(a, t);
    }
    function Ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Wh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Go(f), W(f, p);
          }
        }
      }
    }
    function We(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || xl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Jn(e._wrapperState.initialValue) : e.defaultValue !== Jn(a) && (e.defaultValue = Jn(a)));
    }
    var St = !1, Mt = !1, tn = !1;
    function Xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Mt || (Mt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (tn || (tn = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !St && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), St = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Jn(Si(t.value)));
    }
    var ln = Array.isArray;
    function _t(e) {
      return ln(e);
    }
    var Hi;
    Hi = !1;
    function Ko() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var is = ["value", "defaultValue"];
    function rd(e) {
      {
        Fi("select", e);
        for (var t = 0; t < is.length; t++) {
          var a = is[t];
          if (e[a] != null) {
            var i = _t(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ko()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ko());
          }
        }
      }
    }
    function ii(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < o.length; v++) {
          var E = f.hasOwnProperty("$" + o[v].value);
          o[v].selected !== E && (o[v].selected = E), E && i && (o[v].defaultSelected = !0);
        }
      } else {
        for (var R = Jn(Si(a)), N = null, k = 0; k < o.length; k++) {
          if (o[k].value === R) {
            o[k].selected = !0, i && (o[k].defaultSelected = !0);
            return;
          }
          N === null && !o[k].disabled && (N = o[k]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function ls(e, t) {
      return ht({}, t, {
        value: void 0
      });
    }
    function os(e, t) {
      var a = e;
      rd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Hi && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
    }
    function ad(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ii(a, !!t.multiple, i, !1) : t.defaultValue != null && ii(a, !!t.multiple, t.defaultValue, !0);
    }
    function my(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? ii(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? ii(a, !!t.multiple, t.defaultValue, !0) : ii(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function yy(e, t) {
      var a = e, i = t.value;
      i != null && ii(a, !!t.multiple, i, !1);
    }
    var id = !1;
    function ld(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ht({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Jn(a._wrapperState.initialValue)
      });
      return i;
    }
    function yv(e, t) {
      var a = e;
      Fi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !id && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), id = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (_t(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Si(i)
      };
    }
    function gv(e, t) {
      var a = e, i = Si(t.value), o = Si(t.defaultValue);
      if (i != null) {
        var s = Jn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Jn(o));
    }
    function Sv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function od(e, t) {
      gv(e, t);
    }
    var Vi = "http://www.w3.org/1999/xhtml", gy = "http://www.w3.org/1998/Math/MathML", ud = "http://www.w3.org/2000/svg";
    function fc(e) {
      switch (e) {
        case "svg":
          return ud;
        case "math":
          return gy;
        default:
          return Vi;
      }
    }
    function sd(e, t) {
      return e == null || e === Vi ? fc(t) : e === ud && t === "foreignObject" ? Vi : e;
    }
    var Sy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, dc, Ev = Sy(function(e, t) {
      if (e.namespaceURI === ud && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Jr = 1, Bi = 3, Fn = 8, li = 9, to = 11, pc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Cv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Xo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Xo).forEach(function(e) {
      xv.forEach(function(t) {
        Xo[Rv(t, e)] = Xo[e];
      });
    });
    function vc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Xo.hasOwnProperty(e) && Xo[e]) ? t + "px" : (gr(t, e), ("" + t).trim());
    }
    var Jo = /([A-Z])/g, Ey = /^ms-/;
    function Cy(e) {
      return e.replace(Jo, "-$1").toLowerCase().replace(Ey, "-ms-");
    }
    var wv = function() {
    };
    {
      var Tv = /^(?:webkit|moz|o)[A-Z]/, bv = /^-ms-/, us = /-(.)/g, Zo = /;\s*$/, eu = {}, tu = {}, _v = !1, cd = !1, fd = function(e) {
        return e.replace(us, function(t, a) {
          return a.toUpperCase();
        });
      }, dd = function(e) {
        eu.hasOwnProperty(e) && eu[e] || (eu[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fd(e.replace(bv, "ms-"))
        ));
      }, Dv = function(e) {
        eu.hasOwnProperty(e) && eu[e] || (eu[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, kv = function(e, t) {
        tu.hasOwnProperty(t) && tu[t] || (tu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Zo, "")));
      }, Ov = function(e, t) {
        _v || (_v = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ry = function(e, t) {
        cd || (cd = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      wv = function(e, t) {
        e.indexOf("-") > -1 ? dd(e) : Tv.test(e) ? Dv(e) : Zo.test(t) && kv(e, t), typeof t == "number" && (isNaN(t) ? Ov(e, t) : isFinite(t) || Ry(e, t));
      };
    }
    var xy = wv;
    function wy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Cy(i)) + ":", t += vc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Nv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || xy(i, t[i]);
          var s = vc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ty(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ua(e) {
      var t = {};
      for (var a in e)
        for (var i = Cv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function ss(e, t) {
      {
        if (!t)
          return;
        var a = Ua(e), i = Ua(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (o[v])
              continue;
            o[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ty(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Lv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Mv = ht({
      menuitem: !0
    }, Lv), Uv = "__html";
    function hc(e, t) {
      if (t) {
        if (Mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Uv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function $i(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var mc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, zv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, oi = {}, pd = new RegExp("^(aria)-[" + Be + "]*$"), cs = new RegExp("^(aria)[A-Z][" + Be + "]*$");
    function vd(e, t) {
      {
        if (qn.call(oi, t) && oi[t])
          return !0;
        if (cs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = zv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oi[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oi[t] = !0, !0;
        }
        if (pd.test(t)) {
          var o = t.toLowerCase(), s = zv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return oi[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), oi[t] = !0, !0;
        }
      }
      return !0;
    }
    function Av(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = vd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function yc(e, t) {
      $i(e, t) || Av(e, t);
    }
    var no = !1;
    function hd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !no && (no = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var md = function() {
    };
    {
      var Zn = {}, yd = /^on./, jv = /^on[^A-Z]/, Fv = new RegExp("^(aria)-[" + Be + "]*$"), Pv = new RegExp("^(aria)[A-Z][" + Be + "]*$");
      md = function(e, t, a, i) {
        if (qn.call(Zn, t) && Zn[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Zn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Zn[t] = !0, !0;
          if (yd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Zn[t] = !0, !0;
        } else if (yd.test(t))
          return jv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Zn[t] = !0, !0;
        if (Fv.test(t) || Pv.test(t))
          return !0;
        if (o === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Zn[t] = !0, !0;
        if (o === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Zn[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Zn[t] = !0, !0;
        var v = Dr(t), E = v !== null && v.type === va;
        if (mc.hasOwnProperty(o)) {
          var R = mc[o];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Zn[t] = !0, !0;
        } else if (!E && t !== o)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Zn[t] = !0, !0;
        return typeof a == "boolean" && Er(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Zn[t] = !0, !0) : E ? !0 : Er(t, a, v, !1) ? (Zn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === gn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Zn[t] = !0), !0);
      };
    }
    var Hv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = md(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Vv(e, t, a) {
      $i(e, t) || Hv(e, t, a);
    }
    var Ii = 1, fs = 2, ro = 4, by = Ii | fs | ro, ds = null;
    function ps(e) {
      ds !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function _y() {
      ds === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Bv(e) {
      return e === ds;
    }
    function gc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var rn = null, Tl = null, Yi = null;
    function nu(e) {
      var t = zu(e);
      if (t) {
        if (typeof rn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Wh(a);
          rn(t.stateNode, t.type, i);
        }
      }
    }
    function $v(e) {
      rn = e;
    }
    function Sc(e) {
      Tl ? Yi ? Yi.push(e) : Yi = [e] : Tl = e;
    }
    function vs() {
      return Tl !== null || Yi !== null;
    }
    function hs() {
      if (Tl) {
        var e = Tl, t = Yi;
        if (Tl = null, Yi = null, nu(e), t)
          for (var a = 0; a < t.length; a++)
            nu(t[a]);
      }
    }
    var ao = function(e, t) {
      return e(t);
    }, gd = function() {
    }, Sd = !1;
    function Dy() {
      var e = vs();
      e && (gd(), hs());
    }
    function Ed(e, t, a) {
      if (Sd)
        return e(t, a);
      Sd = !0;
      try {
        return ao(e, t, a);
      } finally {
        Sd = !1, Dy();
      }
    }
    function Ec(e, t, a) {
      ao = e, gd = a;
    }
    function Cc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Cd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Cc(t));
        default:
          return !1;
      }
    }
    function io(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Wh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Cd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var ms = !1;
    if (yn)
      try {
        var lo = {};
        Object.defineProperty(lo, "passive", {
          get: function() {
            ms = !0;
          }
        }), window.addEventListener("test", lo, lo), window.removeEventListener("test", lo, lo);
      } catch {
        ms = !1;
      }
    function Iv(e, t, a, i, o, s, f, p, v) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (R) {
        this.onError(R);
      }
    }
    var Rd = Iv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var xd = document.createElement("react");
      Rd = function(t, a, i, o, s, f, p, v, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), N = !1, k = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          xd.removeEventListener(G, Ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var Ce = Array.prototype.slice.call(arguments, 3);
        function Ye() {
          N = !0, Q(), a.apply(i, Ce), k = !1;
        }
        var He, Ot = !1, xt = !1;
        function A(j) {
          if (He = j.error, Ot = !0, He === null && j.colno === 0 && j.lineno === 0 && (xt = !0), j.defaultPrevented && He != null && typeof He == "object")
            try {
              He._suppressLogging = !0;
            } catch {
            }
        }
        var G = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), xd.addEventListener(G, Ye, !1), R.initEvent(G, !1, !1), xd.dispatchEvent(R), I && Object.defineProperty(window, "event", I), N && k && (Ot ? xt && (He = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : He = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(He)), window.removeEventListener("error", A), !N)
          return Q(), Iv.apply(this, arguments);
      };
    }
    var ky = Rd, bl = !1, ui = null, ys = !1, _l = null, Ei = {
      onError: function(e) {
        bl = !0, ui = e;
      }
    };
    function oo(e, t, a, i, o, s, f, p, v) {
      bl = !1, ui = null, ky.apply(Ei, arguments);
    }
    function Wi(e, t, a, i, o, s, f, p, v) {
      if (oo.apply(this, arguments), bl) {
        var E = Td();
        ys || (ys = !0, _l = E);
      }
    }
    function wd() {
      if (ys) {
        var e = _l;
        throw ys = !1, _l = null, e;
      }
    }
    function Oy() {
      return bl;
    }
    function Td() {
      if (bl) {
        var e = ui;
        return bl = !1, ui = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function za(e) {
      return e._reactInternals;
    }
    function gs(e) {
      return e._reactInternals !== void 0;
    }
    function ru(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), Dl = (
      /*                */
      1
    ), sn = (
      /*                    */
      2
    ), ct = (
      /*                       */
      4
    ), Vt = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), Ci = (
      /*                     */
      64
    ), nt = (
      /*                   */
      128
    ), bn = (
      /*            */
      256
    ), Zr = (
      /*                          */
      512
    ), Aa = (
      /*                     */
      1024
    ), pn = (
      /*                      */
      2048
    ), ja = (
      /*                    */
      4096
    ), kl = (
      /*                   */
      8192
    ), Ss = (
      /*             */
      16384
    ), Rc = pn | ct | Ci | Zr | Aa | Ss, Yv = (
      /*               */
      32767
    ), Sa = (
      /*                   */
      32768
    ), er = (
      /*                */
      65536
    ), Es = (
      /* */
      131072
    ), bd = (
      /*                       */
      1048576
    ), _d = (
      /*                    */
      2097152
    ), ea = (
      /*                 */
      4194304
    ), Ol = (
      /*                */
      8388608
    ), ta = (
      /*               */
      16777216
    ), uo = (
      /*              */
      33554432
    ), au = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ct | Aa | 0
    ), na = sn | ct | Vt | Qt | Zr | ja | kl, Rr = ct | Ci | Zr | kl, Fa = pn | Vt, lr = ea | Ol | _d, Qi = S.ReactCurrentOwner;
    function Ea(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (sn | ja)) !== Ie && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Dd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xc(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function kd(e) {
      return Ea(e) === e;
    }
    function Ca(e) {
      {
        var t = Qi.current;
        if (t !== null && t.tag === H) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", at(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = za(e);
      return o ? Ea(o) === o : !1;
    }
    function ra(e) {
      if (Ea(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function cn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ea(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ra(s), e;
            if (v === o)
              return ra(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var E = !1, R = s.child; R; ) {
            if (R === i) {
              E = !0, i = s, o = f;
              break;
            }
            if (R === o) {
              E = !0, o = s, i = f;
              break;
            }
            R = R.sibling;
          }
          if (!E) {
            for (R = f.child; R; ) {
              if (R === i) {
                E = !0, i = f, o = s;
                break;
              }
              if (R === o) {
                E = !0, o = f, i = s;
                break;
              }
              R = R.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Pa(e) {
      var t = cn(e);
      return t !== null ? Od(t) : null;
    }
    function Od(e) {
      if (e.tag === Z || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Od(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Wv(e) {
      var t = cn(e);
      return t !== null ? wc(t) : null;
    }
    function wc(e) {
      if (e.tag === Z || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== X) {
          var a = wc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Tc = C.unstable_scheduleCallback, Qv = C.unstable_cancelCallback, bc = C.unstable_shouldYield, Gv = C.unstable_requestPaint, Cn = C.unstable_now, Nd = C.unstable_getCurrentPriorityLevel, _c = C.unstable_ImmediatePriority, so = C.unstable_UserBlockingPriority, Ri = C.unstable_NormalPriority, qv = C.unstable_LowPriority, Dc = C.unstable_IdlePriority, iu = C.unstable_yieldValue, Kv = C.unstable_setDisableYieldValue, Gi = null, $n = null, me = null, Ha = !1, Ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ld(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        dt && (e = ht({}, e, {
          getLaneLabelMap: qi,
          injectProfilingHooks: Xv
        })), Gi = t.inject(e), $n = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Md(e, t) {
      if ($n && typeof $n.onScheduleFiberRoot == "function")
        try {
          $n.onScheduleFiberRoot(Gi, e, t);
        } catch (a) {
          Ha || (Ha = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function lu(e, t) {
      if ($n && typeof $n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & nt) === nt;
          if (ft) {
            var i;
            switch (t) {
              case Mn:
                i = _c;
                break;
              case Xi:
                i = so;
                break;
              case xi:
                i = Ri;
                break;
              case gu:
                i = Dc;
                break;
              default:
                i = Ri;
                break;
            }
            $n.onCommitFiberRoot(Gi, e, i, a);
          }
        } catch (o) {
          Ha || (Ha = !0, y("React instrumentation encountered an error: %s", o));
        }
    }
    function Va(e) {
      if ($n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(Gi, e);
        } catch (t) {
          Ha || (Ha = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function co(e) {
      if ($n && typeof $n.onCommitFiberUnmount == "function")
        try {
          $n.onCommitFiberUnmount(Gi, e);
        } catch (t) {
          Ha || (Ha = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof iu == "function" && (Kv(e), _(e)), $n && typeof $n.setStrictMode == "function")
        try {
          $n.setStrictMode(Gi, e);
        } catch (t) {
          Ha || (Ha = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Xv(e) {
      me = e;
    }
    function qi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ts; a++) {
          var i = Ly(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Nl(e) {
      me !== null && typeof me.markCommitStarted == "function" && me.markCommitStarted(e);
    }
    function kc() {
      me !== null && typeof me.markCommitStopped == "function" && me.markCommitStopped();
    }
    function ou(e) {
      me !== null && typeof me.markComponentRenderStarted == "function" && me.markComponentRenderStarted(e);
    }
    function aa() {
      me !== null && typeof me.markComponentRenderStopped == "function" && me.markComponentRenderStopped();
    }
    function Ll(e) {
      me !== null && typeof me.markComponentPassiveEffectMountStarted == "function" && me.markComponentPassiveEffectMountStarted(e);
    }
    function Oc() {
      me !== null && typeof me.markComponentPassiveEffectMountStopped == "function" && me.markComponentPassiveEffectMountStopped();
    }
    function Jv(e) {
      me !== null && typeof me.markComponentPassiveEffectUnmountStarted == "function" && me.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nc() {
      me !== null && typeof me.markComponentPassiveEffectUnmountStopped == "function" && me.markComponentPassiveEffectUnmountStopped();
    }
    function Zv(e) {
      me !== null && typeof me.markComponentLayoutEffectMountStarted == "function" && me.markComponentLayoutEffectMountStarted(e);
    }
    function Cs() {
      me !== null && typeof me.markComponentLayoutEffectMountStopped == "function" && me.markComponentLayoutEffectMountStopped();
    }
    function si(e) {
      me !== null && typeof me.markComponentLayoutEffectUnmountStarted == "function" && me.markComponentLayoutEffectUnmountStarted(e);
    }
    function uu() {
      me !== null && typeof me.markComponentLayoutEffectUnmountStopped == "function" && me.markComponentLayoutEffectUnmountStopped();
    }
    function Rs(e, t, a) {
      me !== null && typeof me.markComponentErrored == "function" && me.markComponentErrored(e, t, a);
    }
    function fo(e, t, a) {
      me !== null && typeof me.markComponentSuspended == "function" && me.markComponentSuspended(e, t, a);
    }
    function Ud(e) {
      me !== null && typeof me.markLayoutEffectsStarted == "function" && me.markLayoutEffectsStarted(e);
    }
    function su() {
      me !== null && typeof me.markLayoutEffectsStopped == "function" && me.markLayoutEffectsStopped();
    }
    function eh(e) {
      me !== null && typeof me.markPassiveEffectsStarted == "function" && me.markPassiveEffectsStarted(e);
    }
    function zd() {
      me !== null && typeof me.markPassiveEffectsStopped == "function" && me.markPassiveEffectsStopped();
    }
    function vn(e) {
      me !== null && typeof me.markRenderStarted == "function" && me.markRenderStarted(e);
    }
    function Lc() {
      me !== null && typeof me.markRenderYielded == "function" && me.markRenderYielded();
    }
    function Mc() {
      me !== null && typeof me.markRenderStopped == "function" && me.markRenderStopped();
    }
    function Ad(e) {
      me !== null && typeof me.markRenderScheduled == "function" && me.markRenderScheduled(e);
    }
    function Uc(e, t) {
      me !== null && typeof me.markForceUpdateScheduled == "function" && me.markForceUpdateScheduled(e, t);
    }
    function xs(e, t) {
      me !== null && typeof me.markStateUpdateScheduled == "function" && me.markStateUpdateScheduled(e, t);
    }
    var ze = (
      /*                         */
      0
    ), Pe = (
      /*                 */
      1
    ), rt = (
      /*                    */
      2
    ), Et = (
      /*               */
      8
    ), xa = (
      /*              */
      16
    ), cu = Math.clz32 ? Math.clz32 : xr, ws = Math.log, Ny = Math.LN2;
    function xr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ws(t) / Ny | 0) | 0;
    }
    var Ts = 31, te = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), $e = (
      /*                        */
      1
    ), or = (
      /*    */
      2
    ), wa = (
      /*             */
      4
    ), Ki = (
      /*            */
      8
    ), Ba = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), po = (
      /*                       */
      4194240
    ), du = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Ac = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Fc = (
      /*                        */
      1024
    ), Pc = (
      /*                        */
      2048
    ), vo = (
      /*                        */
      4096
    ), Hc = (
      /*                        */
      8192
    ), pu = (
      /*                        */
      16384
    ), vu = (
      /*                       */
      32768
    ), Vc = (
      /*                       */
      65536
    ), bs = (
      /*                       */
      131072
    ), Bc = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), Ic = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), hu = (
      /*                            */
      130023424
    ), ho = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Qc = (
      /*                             */
      16777216
    ), jd = (
      /*                             */
      33554432
    ), Gc = (
      /*                             */
      67108864
    ), th = ho, _s = (
      /*          */
      134217728
    ), Fd = (
      /*                          */
      268435455
    ), mu = (
      /*               */
      268435456
    ), Ml = (
      /*                        */
      536870912
    ), wr = (
      /*                   */
      1073741824
    );
    function Ly(e) {
      {
        if (e & $e)
          return "Sync";
        if (e & or)
          return "InputContinuousHydration";
        if (e & wa)
          return "InputContinuous";
        if (e & Ki)
          return "DefaultHydration";
        if (e & Ba)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & po)
          return "Transition";
        if (e & hu)
          return "Retry";
        if (e & _s)
          return "SelectiveHydration";
        if (e & mu)
          return "IdleHydration";
        if (e & Ml)
          return "Idle";
        if (e & wr)
          return "Offscreen";
      }
    }
    var on = -1, qc = du, ia = ho;
    function mo(e) {
      switch (Ln(e)) {
        case $e:
          return $e;
        case or:
          return or;
        case wa:
          return wa;
        case Ki:
          return Ki;
        case Ba:
          return Ba;
        case fu:
          return fu;
        case du:
        case zc:
        case Ac:
        case jc:
        case Fc:
        case Pc:
        case vo:
        case Hc:
        case pu:
        case vu:
        case Vc:
        case bs:
        case Bc:
        case $c:
        case Ic:
        case Yc:
          return e & po;
        case ho:
        case Wc:
        case Qc:
        case jd:
        case Gc:
          return e & hu;
        case _s:
          return _s;
        case mu:
          return mu;
        case Ml:
          return Ml;
        case wr:
          return wr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function yo(e, t) {
      var a = e.pendingLanes;
      if (a === te)
        return te;
      var i = te, o = e.suspendedLanes, s = e.pingedLanes, f = a & Fd;
      if (f !== te) {
        var p = f & ~o;
        if (p !== te)
          i = mo(p);
        else {
          var v = f & s;
          v !== te && (i = mo(v));
        }
      } else {
        var E = a & ~o;
        E !== te ? i = mo(E) : s !== te && (i = mo(s));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === te) {
        var R = Ln(i), N = Ln(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === Ba && (N & po) !== te
        )
          return t;
      }
      (i & wa) !== te && (i |= a & Ba);
      var k = e.entangledLanes;
      if (k !== te)
        for (var V = e.entanglements, I = i & k; I > 0; ) {
          var Q = zl(I), Ce = 1 << Q;
          i |= V[Q], I &= ~Ce;
        }
      return i;
    }
    function nh(e, t) {
      for (var a = e.eventTimes, i = on; t > 0; ) {
        var o = zl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function rh(e, t) {
      switch (e) {
        case $e:
        case or:
        case wa:
          return t + 250;
        case Ki:
        case Ba:
        case fu:
        case du:
        case zc:
        case Ac:
        case jc:
        case Fc:
        case Pc:
        case vo:
        case Hc:
        case pu:
        case vu:
        case Vc:
        case bs:
        case Bc:
        case $c:
        case Ic:
        case Yc:
          return t + 5e3;
        case ho:
        case Wc:
        case Qc:
        case jd:
        case Gc:
          return on;
        case _s:
        case mu:
        case Ml:
        case wr:
          return on;
        default:
          return y("Should have found matching lanes. This is a bug in React."), on;
      }
    }
    function ah(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = zl(f), v = 1 << p, E = s[p];
        E === on ? ((v & i) === te || (v & o) !== te) && (s[p] = rh(v, t)) : E <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Pd(e) {
      return mo(e.pendingLanes);
    }
    function Ul(e) {
      var t = e.pendingLanes & ~wr;
      return t !== te ? t : t & wr ? wr : te;
    }
    function Hd(e) {
      return (e & $e) !== te;
    }
    function Ds(e) {
      return (e & Fd) !== te;
    }
    function ih(e) {
      return (e & hu) === e;
    }
    function lh(e) {
      var t = $e | wa | Ba;
      return (e & t) === te;
    }
    function oh(e) {
      return (e & po) === e;
    }
    function ks(e, t) {
      var a = or | wa | Ki | Ba;
      return (t & a) !== te;
    }
    function uh(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function Vd(e) {
      return (e & po) !== te;
    }
    function sh() {
      var e = qc;
      return qc <<= 1, (qc & po) === te && (qc = du), e;
    }
    function la() {
      var e = ia;
      return ia <<= 1, (ia & hu) === te && (ia = ho), e;
    }
    function Ln(e) {
      return e & -e;
    }
    function yu(e) {
      return Ln(e);
    }
    function zl(e) {
      return 31 - cu(e);
    }
    function Kc(e) {
      return zl(e);
    }
    function oa(e, t) {
      return (e & t) !== te;
    }
    function go(e, t) {
      return (e & t) === t;
    }
    function ot(e, t) {
      return e | t;
    }
    function Os(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function My(e) {
      return e;
    }
    function ch(e, t) {
      return e !== Hn && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], a = 0; a < Ts; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== Ml && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, o = Kc(t);
      i[o] = a;
    }
    function fh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = zl(i), s = 1 << o;
        a[o] = on, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Zc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = zl(f), v = 1 << p;
        i[p] = te, o[p] = on, s[p] = on, f &= ~v;
      }
    }
    function Bd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = zl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function dh(e, t) {
      var a = Ln(t), i;
      switch (a) {
        case wa:
          i = or;
          break;
        case Ba:
          i = Ki;
          break;
        case du:
        case zc:
        case Ac:
        case jc:
        case Fc:
        case Pc:
        case vo:
        case Hc:
        case pu:
        case vu:
        case Vc:
        case bs:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case ho:
        case Wc:
        case Qc:
        case jd:
        case Gc:
          i = fu;
          break;
        case Ml:
          i = mu;
          break;
        default:
          i = Hn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Hn ? Hn : i;
    }
    function ef(e, t, a) {
      if (Ra)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = Kc(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function $d(e, t) {
      if (Ra)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = Kc(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ls(e, t) {
      return null;
    }
    var Mn = $e, Xi = wa, xi = Ba, gu = Ml, Su = Hn;
    function $a() {
      return Su;
    }
    function _n(e) {
      Su = e;
    }
    function Tr(e, t) {
      var a = Su;
      try {
        return Su = e, t();
      } finally {
        Su = a;
      }
    }
    function Uy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zy(e, t) {
      return e > t ? e : t;
    }
    function Eu(e, t) {
      return e !== 0 && e < t;
    }
    function ur(e) {
      var t = Ln(e);
      return Eu(Mn, t) ? Eu(Xi, t) ? Ds(t) ? xi : gu : Xi : Mn;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var be;
    function Cu(e) {
      be = e;
    }
    function Id(e) {
      be(e);
    }
    var nf;
    function Ay(e) {
      nf = e;
    }
    var Ru;
    function rf(e) {
      Ru = e;
    }
    var af;
    function ph(e) {
      af = e;
    }
    var Yd;
    function vh(e) {
      Yd = e;
    }
    var Ms = !1, xu = [], hn = null, tr = null, Ur = null, wu = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), nr = [], hh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function wi(e) {
      return hh.indexOf(e) > -1;
    }
    function jy(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Wd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          hn = null;
          break;
        case "dragenter":
        case "dragleave":
          tr = null;
          break;
        case "mouseover":
        case "mouseout":
          Ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          wu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Tu.delete(i);
          break;
        }
      }
    }
    function bu(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = jy(t, a, i, o, s);
        if (t !== null) {
          var p = zu(t);
          p !== null && nf(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return o !== null && v.indexOf(o) === -1 && v.push(o), e;
    }
    function mh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return hn = bu(hn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return tr = bu(tr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return Ur = bu(Ur, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = o, E = v.pointerId;
          return wu.set(E, bu(wu.get(E) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var R = o, N = R.pointerId;
          return Tu.set(N, bu(Tu.get(N) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function Qd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = Ea(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var o = Dd(a);
            if (o !== null) {
              e.blockedOn = o, Yd(e.priority, function() {
                Ru(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = xc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Fy(e) {
      for (var t = af(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < nr.length && Eu(t, nr[i].priority); i++)
        ;
      nr.splice(i, 0, a), i === 0 && Qd(a);
    }
    function Eo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = br(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          ps(s), o.target.dispatchEvent(s), _y();
        } else {
          var f = zu(i);
          return f !== null && nf(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function lf(e, t, a) {
      Eo(e) && a.delete(t);
    }
    function Ia() {
      Ms = !1, hn !== null && Eo(hn) && (hn = null), tr !== null && Eo(tr) && (tr = null), Ur !== null && Eo(Ur) && (Ur = null), wu.forEach(lf), Tu.forEach(lf);
    }
    function Rt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ms || (Ms = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Ia)));
    }
    function Dn(e) {
      if (xu.length > 0) {
        Rt(xu[0], e);
        for (var t = 1; t < xu.length; t++) {
          var a = xu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      hn !== null && Rt(hn, e), tr !== null && Rt(tr, e), Ur !== null && Rt(Ur, e);
      var i = function(p) {
        return Rt(p, e);
      };
      wu.forEach(i), Tu.forEach(i);
      for (var o = 0; o < nr.length; o++) {
        var s = nr[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; nr.length > 0; ) {
        var f = nr[0];
        if (f.blockedOn !== null)
          break;
        Qd(f), f.blockedOn === null && nr.shift();
      }
    }
    var fn = S.ReactCurrentBatchConfig, In = !0;
    function ua(e) {
      In = !!e;
    }
    function _u() {
      return In;
    }
    function Yn(e, t, a) {
      var i = of(t), o;
      switch (i) {
        case Mn:
          o = Us;
          break;
        case Xi:
          o = Co;
          break;
        case xi:
        default:
          o = Du;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Us(e, t, a, i) {
      var o = $a(), s = fn.transition;
      fn.transition = null;
      try {
        _n(Mn), Du(e, t, a, i);
      } finally {
        _n(o), fn.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var o = $a(), s = fn.transition;
      fn.transition = null;
      try {
        _n(Xi), Du(e, t, a, i);
      } finally {
        _n(o), fn.transition = s;
      }
    }
    function Du(e, t, a, i) {
      In && Gd(e, t, a, i);
    }
    function Gd(e, t, a, i) {
      var o = br(e, t, a, i);
      if (o === null) {
        tg(e, t, i, Al, a), Wd(e, i);
        return;
      }
      if (mh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Wd(e, i), t & ro && wi(e)) {
        for (; o !== null; ) {
          var s = zu(o);
          s !== null && Id(s);
          var f = br(e, t, a, i);
          if (f === null && tg(e, t, i, Al, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      tg(e, t, i, null, a);
    }
    var Al = null;
    function br(e, t, a, i) {
      Al = null;
      var o = gc(i), s = Ys(o);
      if (s !== null) {
        var f = Ea(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = Dd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === F) {
            var E = f.stateNode;
            if (tf(E))
              return xc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Al = s, null;
    }
    function of(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Mn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Xi;
        case "message": {
          var t = Nd();
          switch (t) {
            case _c:
              return Mn;
            case so:
              return Xi;
            case Ri:
            case qv:
              return xi;
            case Dc:
              return gu;
            default:
              return xi;
          }
        }
        default:
          return xi;
      }
    }
    function ku(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ji(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function uf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ya = null, Ou = null, Wa = null;
    function sf(e) {
      return Ya = e, Ou = As(), !0;
    }
    function zs() {
      Ya = null, Ou = null, Wa = null;
    }
    function cf() {
      if (Wa)
        return Wa;
      var e, t = Ou, a = t.length, i, o = As(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Wa = o.slice(e, p), Wa;
    }
    function As() {
      return "value" in Ya ? Ya.value : Ya.textContent;
    }
    function Ro(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function rr() {
      return !0;
    }
    function Zi() {
      return !1;
    }
    function Rn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = rr : this.isDefaultPrevented = Zi, this.isPropagationStopped = Zi, this;
      }
      return ht(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = rr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = rr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: rr
      }), t;
    }
    var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ff = Rn(Wn), xo = ht({}, Wn, {
      view: 0,
      detail: 0
    }), Kd = Rn(xo), Xd, Ti, Nu;
    function Jd(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (Xd = e.screenX - Nu.screenX, Ti = e.screenY - Nu.screenY) : (Xd = 0, Ti = 0), Nu = e);
    }
    var bi = ht({}, xo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Jd(e), Xd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ti;
      }
    }), df = Rn(bi), wo = ht({}, bi, {
      dataTransfer: 0
    }), yh = Rn(wo), gh = ht({}, xo, {
      relatedTarget: 0
    }), js = Rn(gh), pf = ht({}, Wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Py = Rn(pf), Hy = ht({}, Wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Sh = Rn(Hy), Eh = ht({}, Wn, {
      data: 0
    }), jl = Rn(Eh), Vy = jl, Lu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ch = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function kn(e) {
      if (e.key) {
        var t = Lu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ro(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ch[e.keyCode] || "Unidentified" : "";
    }
    var By = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Rh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = By[e];
      return i ? !!a[i] : !1;
    }
    function Zd(e) {
      return Rh;
    }
    var $y = ht({}, xo, {
      key: kn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ro(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), xh = Rn($y), wh = ht({}, bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Th = Rn(wh), Qa = ht({}, xo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zd
    }), ep = Rn(Qa), Iy = ht({}, Wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fl = Rn(Iy), vf = ht({}, bi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), To = Rn(vf), hf = [9, 13, 27, 32], mf = 229, Fs = yn && "CompositionEvent" in window, Ps = null;
    yn && "documentMode" in document && (Ps = document.documentMode);
    var tp = yn && "TextEvent" in window && !Ps, bh = yn && (!Fs || Ps && Ps > 8 && Ps <= 11), np = 32, rp = String.fromCharCode(np);
    function yf() {
      yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), yr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), yr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), yr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Hs = !1;
    function _h(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ap(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Yy(e, t) {
      return e === "keydown" && t.keyCode === mf;
    }
    function ip(e, t) {
      switch (e) {
        case "keyup":
          return hf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== mf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Vs(e) {
      return e.locale === "ko";
    }
    var Pl = !1;
    function Sf(e, t, a, i, o) {
      var s, f;
      if (Fs ? s = ap(t) : Pl ? ip(t, i) && (s = "onCompositionEnd") : Yy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bh && !Vs(i) && (!Pl && s === "onCompositionStart" ? Pl = sf(o) : s === "onCompositionEnd" && Pl && (f = cf()));
      var p = Mh(a, s);
      if (p.length > 0) {
        var v = new jl(s, t, null, i, o);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var E = gf(i);
          E !== null && (v.data = E);
        }
      }
    }
    function Dh(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== np ? null : (Hs = !0, rp);
        case "textInput":
          var i = t.data;
          return i === rp && Hs ? null : i;
        default:
          return null;
      }
    }
    function Wy(e, t) {
      if (Pl) {
        if (e === "compositionend" || !Fs && ip(e, t)) {
          var a = cf();
          return zs(), Pl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!_h(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bh && !Vs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ef(e, t, a, i, o) {
      var s;
      if (tp ? s = Dh(t, i) : s = Wy(t, i), !s)
        return null;
      var f = Mh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Vy("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Qy(e, t, a, i, o, s, f) {
      Sf(e, t, a, i, o), Ef(e, t, a, i, o);
    }
    var Bs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function kh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Bs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Cf(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      yr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Sc(i);
      var o = Mh(t, "onChange");
      if (o.length > 0) {
        var s = new ff("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var l = null, u = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, u, e, gc(e)), Ed(g, t);
    }
    function g(e) {
      vE(e, 0);
    }
    function x(e) {
      var t = _f(e);
      if (Go(t))
        return e;
    }
    function D(e, t) {
      if (e === "change")
        return t;
    }
    var $ = !1;
    yn && ($ = Cf("input") && (!document.documentMode || document.documentMode > 9));
    function ae(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", ne);
    }
    function oe() {
      l && (l.detachEvent("onpropertychange", ne), l = null, u = null);
    }
    function ne(e) {
      e.propertyName === "value" && x(u) && d(e);
    }
    function xe(e, t, a) {
      e === "focusin" ? (oe(), ae(t, a)) : e === "focusout" && oe();
    }
    function Ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return x(u);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Un(e, t) {
      if (e === "click")
        return x(t);
    }
    function U(e, t) {
      if (e === "input" || e === "change")
        return x(t);
    }
    function O(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || We(e, "number", e.value);
    }
    function P(e, t, a, i, o, s, f) {
      var p = a ? _f(a) : window, v, E;
      if (c(p) ? v = D : kh(p) ? $ ? v = U : (v = Ne, E = xe) : Ue(p) && (v = Un), v) {
        var R = v(t, a);
        if (R) {
          r(e, R, i, o);
          return;
        }
      }
      E && E(t, p, a), t === "focusout" && O(p);
    }
    function fe() {
      Ir("onMouseEnter", ["mouseout", "mouseover"]), Ir("onMouseLeave", ["mouseout", "mouseover"]), Ir("onPointerEnter", ["pointerout", "pointerover"]), Ir("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ae(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Bv(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (Ys(E) || Sp(E)))
          return;
      }
      if (!(!v && !p)) {
        var R;
        if (o.window === o)
          R = o;
        else {
          var N = o.ownerDocument;
          N ? R = N.defaultView || N.parentWindow : R = window;
        }
        var k, V;
        if (v) {
          var I = i.relatedTarget || i.toElement;
          if (k = a, V = I ? Ys(I) : null, V !== null) {
            var Q = Ea(V);
            (V !== Q || V.tag !== Z && V.tag !== he) && (V = null);
          }
        } else
          k = null, V = a;
        if (k !== V) {
          var Ce = df, Ye = "onMouseLeave", He = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ce = Th, Ye = "onPointerLeave", He = "onPointerEnter", Ot = "pointer");
          var xt = k == null ? R : _f(k), A = V == null ? R : _f(V), G = new Ce(Ye, Ot + "leave", k, i, o);
          G.target = xt, G.relatedTarget = A;
          var j = null, ue = Ys(o);
          if (ue === a) {
            var Te = new Ce(He, Ot + "enter", V, i, o);
            Te.target = A, Te.relatedTarget = xt, j = Te;
          }
          zx(e, G, j, k, V);
        }
      }
    }
    function Je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Le = typeof Object.is == "function" ? Object.is : Je;
    function Ze(e, t) {
      if (Le(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!qn.call(t, s) || !Le(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function jt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function el(e, t) {
      for (var a = Qn(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Bi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Qn(jt(a));
      }
    }
    function Gy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return hx(e, o, s, f, p);
    }
    function hx(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, v = 0, E = 0, R = e, N = null;
      e: for (; ; ) {
        for (var k = null; R === t && (a === 0 || R.nodeType === Bi) && (f = s + a), R === i && (o === 0 || R.nodeType === Bi) && (p = s + o), R.nodeType === Bi && (s += R.nodeValue.length), (k = R.firstChild) !== null; )
          N = R, R = k;
        for (; ; ) {
          if (R === e)
            break e;
          if (N === t && ++v === a && (f = s), N === i && ++E === o && (p = s), (k = R.nextSibling) !== null)
            break;
          R = N, N = R.parentNode;
        }
        R = k;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function mx(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var E = el(e, f), R = el(e, p);
        if (E && R) {
          if (o.rangeCount === 1 && o.anchorNode === E.node && o.anchorOffset === E.offset && o.focusNode === R.node && o.focusOffset === R.offset)
            return;
          var N = a.createRange();
          N.setStart(E.node, E.offset), o.removeAllRanges(), f > p ? (o.addRange(N), o.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset), o.addRange(N));
        }
      }
    }
    function nE(e) {
      return e && e.nodeType === Bi;
    }
    function rE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : nE(e) ? !1 : nE(t) ? rE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function yx(e) {
      return e && e.ownerDocument && rE(e.ownerDocument.documentElement, e);
    }
    function gx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function aE() {
      for (var e = window, t = xl(); t instanceof e.HTMLIFrameElement; ) {
        if (gx(t))
          e = t.contentWindow;
        else
          return t;
        t = xl(e.document);
      }
      return t;
    }
    function qy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Sx() {
      var e = aE();
      return {
        focusedElem: e,
        selectionRange: qy(e) ? Cx(e) : null
      };
    }
    function Ex(e) {
      var t = aE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && yx(a)) {
        i !== null && qy(a) && Rx(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Jr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Cx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Gy(e), t || {
        start: 0,
        end: 0
      };
    }
    function Rx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : mx(e, t);
    }
    var xx = yn && "documentMode" in document && document.documentMode <= 11;
    function wx() {
      yr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Rf = null, Ky = null, lp = null, Xy = !1;
    function Tx(e) {
      if ("selectionStart" in e && qy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function bx(e) {
      return e.window === e ? e.document : e.nodeType === li ? e : e.ownerDocument;
    }
    function iE(e, t, a) {
      var i = bx(a);
      if (!(Xy || Rf == null || Rf !== xl(i))) {
        var o = Tx(Rf);
        if (!lp || !Ze(lp, o)) {
          lp = o;
          var s = Mh(Ky, "onSelect");
          if (s.length > 0) {
            var f = new ff("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Rf;
          }
        }
      }
    }
    function _x(e, t, a, i, o, s, f) {
      var p = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (kh(p) || p.contentEditable === "true") && (Rf = p, Ky = a, lp = null);
          break;
        case "focusout":
          Rf = null, Ky = null, lp = null;
          break;
        case "mousedown":
          Xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xy = !1, iE(e, i, o);
          break;
        case "selectionchange":
          if (xx)
            break;
        case "keydown":
        case "keyup":
          iE(e, i, o);
      }
    }
    function Oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: Oh("Animation", "AnimationEnd"),
      animationiteration: Oh("Animation", "AnimationIteration"),
      animationstart: Oh("Animation", "AnimationStart"),
      transitionend: Oh("Transition", "TransitionEnd")
    }, Jy = {}, lE = {};
    yn && (lE = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function Nh(e) {
      if (Jy[e])
        return Jy[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in lE)
          return Jy[e] = t[a];
      return e;
    }
    var oE = Nh("animationend"), uE = Nh("animationiteration"), sE = Nh("animationstart"), cE = Nh("transitionend"), fE = /* @__PURE__ */ new Map(), dE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mu(e, t) {
      fE.set(e, t), yr(t, [e]);
    }
    function Dx() {
      for (var e = 0; e < dE.length; e++) {
        var t = dE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mu(a, "on" + i);
      }
      Mu(oE, "onAnimationEnd"), Mu(uE, "onAnimationIteration"), Mu(sE, "onAnimationStart"), Mu("dblclick", "onDoubleClick"), Mu("focusin", "onFocus"), Mu("focusout", "onBlur"), Mu(cE, "onTransitionEnd");
    }
    function kx(e, t, a, i, o, s, f) {
      var p = fE.get(t);
      if (p !== void 0) {
        var v = ff, E = t;
        switch (t) {
          case "keypress":
            if (Ro(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = xh;
            break;
          case "focusin":
            E = "focus", v = js;
            break;
          case "focusout":
            E = "blur", v = js;
            break;
          case "beforeblur":
          case "afterblur":
            v = js;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = yh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ep;
            break;
          case oE:
          case uE:
          case sE:
            v = Py;
            break;
          case cE:
            v = Fl;
            break;
          case "scroll":
            v = Kd;
            break;
          case "wheel":
            v = To;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Sh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Th;
            break;
        }
        var R = (s & ro) !== 0;
        {
          var N = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = Mx(a, p, i.type, R, N);
          if (k.length > 0) {
            var V = new v(p, E, null, i, o);
            e.push({
              event: V,
              listeners: k
            });
          }
        }
      }
    }
    Dx(), fe(), n(), wx(), yf();
    function Ox(e, t, a, i, o, s, f) {
      kx(e, t, a, i, o, s);
      var p = (s & by) === 0;
      p && (Ae(e, t, a, i, o), P(e, t, a, i, o), _x(e, t, a, i, o), Qy(e, t, a, i, o));
    }
    var op = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Zy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(op));
    function pE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Wi(i, t, void 0, e), e.currentTarget = null;
    }
    function Nx(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          pE(e, v, p), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var R = t[E], N = R.instance, k = R.currentTarget, V = R.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          pE(e, V, k), i = N;
        }
    }
    function vE(e, t) {
      for (var a = (t & ro) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        Nx(s, f, a);
      }
      wd();
    }
    function Lx(e, t, a, i, o) {
      var s = gc(a), f = [];
      Ox(f, e, i, a, s, t), vE(f, t);
    }
    function xn(e, t) {
      Zy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = uT(t), o = Ax(e);
      i.has(o) || (hE(t, e, fs, a), i.add(o));
    }
    function eg(e, t, a) {
      Zy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ro), hE(a, e, i, t);
    }
    var Lh = "_reactListening" + Math.random().toString(36).slice(2);
    function up(e) {
      if (!e[Lh]) {
        e[Lh] = !0, mt.forEach(function(a) {
          a !== "selectionchange" && (Zy.has(a) || eg(a, !1, e), eg(a, !0, e));
        });
        var t = e.nodeType === li ? e : e.ownerDocument;
        t !== null && (t[Lh] || (t[Lh] = !0, eg("selectionchange", !1, t)));
      }
    }
    function hE(e, t, a, i, o) {
      var s = Yn(e, t, a), f = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? uf(e, t, s, f) : Ji(e, t, s) : f !== void 0 ? qd(e, t, s, f) : ku(e, t, s);
    }
    function mE(e, t) {
      return e === t || e.nodeType === Fn && e.parentNode === t;
    }
    function tg(e, t, a, i, o) {
      var s = i;
      if (!(t & Ii) && !(t & fs)) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === F || v === X) {
              var E = p.stateNode.containerInfo;
              if (mE(E, f))
                break;
              if (v === X)
                for (var R = p.return; R !== null; ) {
                  var N = R.tag;
                  if (N === F || N === X) {
                    var k = R.stateNode.containerInfo;
                    if (mE(k, f))
                      return;
                  }
                  R = R.return;
                }
              for (; E !== null; ) {
                var V = Ys(E);
                if (V === null)
                  return;
                var I = V.tag;
                if (I === Z || I === he) {
                  p = s = V;
                  continue e;
                }
                E = E.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Ed(function() {
        return Lx(e, t, a, s);
      });
    }
    function sp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Mx(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], E = e, R = null; E !== null; ) {
        var N = E, k = N.stateNode, V = N.tag;
        if (V === Z && k !== null && (R = k, p !== null)) {
          var I = io(E, p);
          I != null && v.push(sp(E, I, R));
        }
        if (o)
          break;
        E = E.return;
      }
      return v;
    }
    function Mh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, E = io(o, a);
          E != null && i.unshift(sp(o, E, v));
          var R = io(o, t);
          R != null && i.push(sp(o, R, v));
        }
        o = o.return;
      }
      return i;
    }
    function wf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function Ux(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = wf(s))
        o++;
      for (var f = 0, p = i; p; p = wf(p))
        f++;
      for (; o - f > 0; )
        a = wf(a), o--;
      for (; f - o > 0; )
        i = wf(i), f--;
      for (var v = o; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = wf(a), i = wf(i);
      }
      return null;
    }
    function yE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, E = v.alternate, R = v.stateNode, N = v.tag;
        if (E !== null && E === i)
          break;
        if (N === Z && R !== null) {
          var k = R;
          if (o) {
            var V = io(p, s);
            V != null && f.unshift(sp(p, V, k));
          } else if (!o) {
            var I = io(p, s);
            I != null && f.push(sp(p, I, k));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function zx(e, t, a, i, o) {
      var s = i && o ? Ux(i, o) : null;
      i !== null && yE(e, t, i, s, !1), o !== null && a !== null && yE(e, a, o, s, !0);
    }
    function Ax(e, t) {
      return e + "__bubble";
    }
    var Ga = !1, cp = "dangerouslySetInnerHTML", Uh = "suppressContentEditableWarning", Uu = "suppressHydrationWarning", gE = "autoFocus", $s = "children", Is = "style", zh = "__html", ng, Ah, fp, SE, jh, EE, CE;
    ng = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ah = function(e, t) {
      yc(e, t), hd(e, t), Vv(e, t, {
        registrationNameDependencies: yt,
        possibleRegistrationNames: an
      });
    }, EE = yn && !document.documentMode, fp = function(e, t, a) {
      if (!Ga) {
        var i = Fh(a), o = Fh(t);
        o !== i && (Ga = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, SE = function(e) {
      if (!Ga) {
        Ga = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, jh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, CE = function(e, t) {
      var a = e.namespaceURI === Vi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var jx = /\r\n?/g, Fx = /\u0000|\uFFFD/g;
    function Fh(e) {
      Qr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(jx, `
`).replace(Fx, "");
    }
    function Ph(e, t, a, i) {
      var o = Fh(t), s = Fh(e);
      if (s !== o && (i && (Ga || (Ga = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Oe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function RE(e) {
      return e.nodeType === li ? e : e.ownerDocument;
    }
    function Px() {
    }
    function Hh(e) {
      e.onclick = Px;
    }
    function Hx(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), Nv(t, f);
          else if (s === cp) {
            var p = f ? f[zh] : void 0;
            p != null && Ev(t, p);
          } else if (s === $s)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pc(t, f);
            } else typeof f == "number" && pc(t, "" + f);
          else s === Uh || s === Uu || s === gE || (yt.hasOwnProperty(s) ? f != null && (typeof f != "function" && jh(s, f), s === "onScroll" && xn("scroll", t)) : f != null && ya(t, s, f, o));
        }
    }
    function Vx(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Is ? Nv(e, f) : s === cp ? Ev(e, f) : s === $s ? pc(e, f) : ya(e, s, f, i);
      }
    }
    function Bx(e, t, a, i) {
      var o, s = RE(a), f, p = i;
      if (p === Vi && (p = fc(e)), p === Vi) {
        if (o = $i(e, t), !o && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var E = v.firstChild;
          f = v.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var R = f;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Vi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !qn.call(ng, e) && (ng[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function $x(e, t) {
      return RE(t).createTextNode(e);
    }
    function Ix(e, t, a, i) {
      var o = $i(t, a);
      Ah(t, a);
      var s;
      switch (t) {
        case "dialog":
          xn("cancel", e), xn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < op.length; f++)
            xn(op[f], e);
          s = a;
          break;
        case "source":
          xn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e), s = a;
          break;
        case "details":
          xn("toggle", e), s = a;
          break;
        case "input":
          w(e, a), s = m(e, a), xn("invalid", e);
          break;
        case "option":
          Xt(e, a), s = a;
          break;
        case "select":
          os(e, a), s = ls(e, a), xn("invalid", e);
          break;
        case "textarea":
          yv(e, a), s = ld(e, a), xn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (hc(t, s), Hx(t, e, i, s, o), t) {
        case "input":
          Ma(e), ce(e, a, !1);
          break;
        case "textarea":
          Ma(e), Sv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          ad(e, a);
          break;
        default:
          typeof s.onClick == "function" && Hh(e);
          break;
      }
    }
    function Yx(e, t, a, i, o) {
      Ah(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = m(e, a), p = m(e, i), s = [];
          break;
        case "select":
          f = ls(e, a), p = ls(e, i), s = [];
          break;
        case "textarea":
          f = ld(e, a), p = ld(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Hh(e);
          break;
      }
      hc(t, p);
      var v, E, R = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var N = f[v];
            for (E in N)
              N.hasOwnProperty(E) && (R || (R = {}), R[E] = "");
          } else v === cp || v === $s || v === Uh || v === Uu || v === gE || (yt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var k = p[v], V = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || k === V || k == null && V == null))
          if (v === Is)
            if (k && Object.freeze(k), V) {
              for (E in V)
                V.hasOwnProperty(E) && (!k || !k.hasOwnProperty(E)) && (R || (R = {}), R[E] = "");
              for (E in k)
                k.hasOwnProperty(E) && V[E] !== k[E] && (R || (R = {}), R[E] = k[E]);
            } else
              R || (s || (s = []), s.push(v, R)), R = k;
          else if (v === cp) {
            var I = k ? k[zh] : void 0, Q = V ? V[zh] : void 0;
            I != null && Q !== I && (s = s || []).push(v, I);
          } else v === $s ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(v, "" + k) : v === Uh || v === Uu || (yt.hasOwnProperty(v) ? (k != null && (typeof k != "function" && jh(v, k), v === "onScroll" && xn("scroll", e)), !s && V !== k && (s = [])) : (s = s || []).push(v, k));
      }
      return R && (ss(R, p[Is]), (s = s || []).push(Is, R)), s;
    }
    function Wx(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && B(e, o);
      var s = $i(a, i), f = $i(a, o);
      switch (Vx(e, t, s, f), a) {
        case "input":
          W(e, o);
          break;
        case "textarea":
          gv(e, o);
          break;
        case "select":
          my(e, o);
          break;
      }
    }
    function Qx(e) {
      {
        var t = e.toLowerCase();
        return mc.hasOwnProperty(t) && mc[t] || null;
      }
    }
    function Gx(e, t, a, i, o, s, f) {
      var p, v;
      switch (p = $i(t, a), Ah(t, a), t) {
        case "dialog":
          xn("cancel", e), xn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < op.length; E++)
            xn(op[E], e);
          break;
        case "source":
          xn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e);
          break;
        case "details":
          xn("toggle", e);
          break;
        case "input":
          w(e, a), xn("invalid", e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          os(e, a), xn("invalid", e);
          break;
        case "textarea":
          yv(e, a), xn("invalid", e);
          break;
      }
      hc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var R = e.attributes, N = 0; N < R.length; N++) {
          var k = R[N].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(R[N].name);
          }
        }
      }
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var Q = a[I];
          if (I === $s)
            typeof Q == "string" ? e.textContent !== Q && (a[Uu] !== !0 && Ph(e.textContent, Q, s, f), V = [$s, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Uu] !== !0 && Ph(e.textContent, Q, s, f), V = [$s, "" + Q]);
          else if (yt.hasOwnProperty(I))
            Q != null && (typeof Q != "function" && jh(I, Q), I === "onScroll" && xn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ce = void 0, Ye = p && qe ? null : Dr(I);
            if (a[Uu] !== !0) {
              if (!(I === Uh || I === Uu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === cp) {
                  var He = e.innerHTML, Ot = Q ? Q[zh] : void 0;
                  if (Ot != null) {
                    var xt = CE(e, Ot);
                    xt !== He && fp(I, He, xt);
                  }
                } else if (I === Is) {
                  if (v.delete(I), EE) {
                    var A = wy(Q);
                    Ce = e.getAttribute("style"), A !== Ce && fp(I, Ce, A);
                  }
                } else if (p && !qe)
                  v.delete(I.toLowerCase()), Ce = vi(e, I, Q), Q !== Ce && fp(I, Ce, Q);
                else if (!Sn(I, Ye, p) && !Kt(I, Q, Ye, p)) {
                  var G = !1;
                  if (Ye !== null)
                    v.delete(Ye.attributeName), Ce = ma(e, I, Q, Ye);
                  else {
                    var j = i;
                    if (j === Vi && (j = fc(t)), j === Vi)
                      v.delete(I.toLowerCase());
                    else {
                      var ue = Qx(I);
                      ue !== null && ue !== I && (G = !0, v.delete(ue)), v.delete(I);
                    }
                    Ce = vi(e, I, Q);
                  }
                  var Te = qe;
                  !Te && Q !== Ce && !G && fp(I, Ce, Q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Uu] !== !0 && SE(v), t) {
        case "input":
          Ma(e), ce(e, a, !0);
          break;
        case "textarea":
          Ma(e), Sv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Hh(e);
          break;
      }
      return V;
    }
    function qx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function rg(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ag(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t, a) {
      {
        if (Ga)
          return;
        Ga = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t) {
      {
        if (t === "" || Ga)
          return;
        Ga = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Kx(e, t, a) {
      switch (t) {
        case "input":
          Xe(e, a);
          return;
        case "textarea":
          od(e, a);
          return;
        case "select":
          yy(e, a);
          return;
      }
    }
    var dp = function() {
    }, pp = function() {
    };
    {
      var Xx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], xE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Jx = xE.concat(["button"]), Zx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], wE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      pp = function(e, t) {
        var a = ht({}, e || wE), i = {
          tag: t
        };
        return xE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Jx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Xx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ew = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Zx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, tw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, TE = {};
      dp = function(e, t, a) {
        a = a || wE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ew(e, o) ? null : i, f = s ? null : tw(e, a), p = s || f;
        if (p) {
          var v = p.tag, E = !!s + "|" + e + "|" + v;
          if (!TE[E]) {
            TE[E] = !0;
            var R = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var k = "";
              v === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, v, N, k);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, v);
          }
        }
      };
    }
    var Vh = "suppressHydrationWarning", Bh = "$", $h = "/$", vp = "$?", hp = "$!", nw = "style", og = null, ug = null;
    function rw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case li:
        case to: {
          t = i === li ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : sd(null, "");
          break;
        }
        default: {
          var s = i === Fn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = sd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = pp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function aw(e, t, a) {
      {
        var i = e, o = sd(i.namespace, t), s = pp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function qO(e) {
      return e;
    }
    function iw(e) {
      og = _u(), ug = Sx();
      var t = null;
      return ua(!1), t;
    }
    function lw(e) {
      Ex(ug), ua(og), og = null, ug = null;
    }
    function ow(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (dp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = pp(f.ancestorInfo, e);
          dp(null, p, v);
        }
        s = f.namespace;
      }
      var E = Bx(e, t, a, s);
      return gp(o, E), mg(E, t), E;
    }
    function uw(e, t) {
      e.appendChild(t);
    }
    function sw(e, t, a, i, o) {
      switch (Ix(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function cw(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = pp(f.ancestorInfo, t);
          dp(null, p, v);
        }
      }
      return Yx(e, t, a, i);
    }
    function sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fw(e, t, a, i) {
      {
        var o = a;
        dp(null, e, o.ancestorInfo);
      }
      var s = $x(e, t);
      return gp(i, s), s;
    }
    function dw() {
      var e = window.event;
      return e === void 0 ? xi : of(e.type);
    }
    var cg = typeof setTimeout == "function" ? setTimeout : void 0, pw = typeof clearTimeout == "function" ? clearTimeout : void 0, fg = -1, bE = typeof Promise == "function" ? Promise : void 0, vw = typeof queueMicrotask == "function" ? queueMicrotask : typeof bE < "u" ? function(e) {
      return bE.resolve(null).then(e).catch(hw);
    } : cg;
    function hw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function yw(e, t, a, i, o, s) {
      Wx(e, t, a, i, o), mg(e, o);
    }
    function _E(e) {
      pc(e, "");
    }
    function gw(e, t, a) {
      e.nodeValue = a;
    }
    function Sw(e, t) {
      e.appendChild(t);
    }
    function Ew(e, t) {
      var a;
      e.nodeType === Fn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Hh(a);
    }
    function Cw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Rw(e, t, a) {
      e.nodeType === Fn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function xw(e, t) {
      e.removeChild(t);
    }
    function ww(e, t) {
      e.nodeType === Fn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function dg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Fn) {
          var s = o.data;
          if (s === $h)
            if (i === 0) {
              e.removeChild(o), Dn(t);
              return;
            } else
              i--;
          else (s === Bh || s === vp || s === hp) && i++;
        }
        a = o;
      } while (a);
      Dn(t);
    }
    function Tw(e, t) {
      e.nodeType === Fn ? dg(e.parentNode, t) : e.nodeType === Jr && dg(e, t), Dn(e);
    }
    function bw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _w(e) {
      e.nodeValue = "";
    }
    function Dw(e, t) {
      e = e;
      var a = t[nw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = vc("display", i);
    }
    function kw(e, t) {
      e.nodeValue = t;
    }
    function Ow(e) {
      e.nodeType === Jr ? e.textContent = "" : e.nodeType === li && e.documentElement && e.removeChild(e.documentElement);
    }
    function Nw(e, t, a) {
      return e.nodeType !== Jr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Lw(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Mw(e) {
      return e.nodeType !== Fn ? null : e;
    }
    function DE(e) {
      return e.data === vp;
    }
    function pg(e) {
      return e.data === hp;
    }
    function Uw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function zw(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Jr || t === Bi)
          break;
        if (t === Fn) {
          var a = e.data;
          if (a === Bh || a === hp || a === vp)
            break;
          if (a === $h)
            return null;
        }
      }
      return e;
    }
    function mp(e) {
      return Ih(e.nextSibling);
    }
    function Aw(e) {
      return Ih(e.firstChild);
    }
    function jw(e) {
      return Ih(e.firstChild);
    }
    function Fw(e) {
      return Ih(e.nextSibling);
    }
    function Pw(e, t, a, i, o, s, f) {
      gp(s, e), mg(e, a);
      var p;
      {
        var v = o;
        p = v.namespace;
      }
      var E = (s.mode & Pe) !== ze;
      return Gx(e, t, a, p, i, E, f);
    }
    function Hw(e, t, a, i) {
      return gp(a, e), a.mode & Pe, qx(e, t);
    }
    function Vw(e, t) {
      gp(t, e);
    }
    function Bw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === $h) {
            if (a === 0)
              return mp(t);
            a--;
          } else (i === Bh || i === hp || i === vp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function kE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Bh || i === hp || i === vp) {
            if (a === 0)
              return t;
            a--;
          } else i === $h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $w(e) {
      Dn(e);
    }
    function Iw(e) {
      Dn(e);
    }
    function Yw(e) {
      return e !== "head" && e !== "body";
    }
    function Ww(e, t, a, i) {
      var o = !0;
      Ph(t.nodeValue, a, i, o);
    }
    function Qw(e, t, a, i, o, s) {
      if (t[Vh] !== !0) {
        var f = !0;
        Ph(i.nodeValue, o, s, f);
      }
    }
    function Gw(e, t) {
      t.nodeType === Jr ? rg(e, t) : t.nodeType === Fn || ag(e, t);
    }
    function qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Jr ? rg(a, t) : t.nodeType === Fn || ag(a, t));
      }
    }
    function Kw(e, t, a, i, o) {
      (o || t[Vh] !== !0) && (i.nodeType === Jr ? rg(a, i) : i.nodeType === Fn || ag(a, i));
    }
    function Xw(e, t, a) {
      ig(e, t);
    }
    function Jw(e, t) {
      lg(e, t);
    }
    function Zw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ig(i, t);
      }
    }
    function eT(e, t) {
      {
        var a = e.parentNode;
        a !== null && lg(a, t);
      }
    }
    function tT(e, t, a, i, o, s) {
      (s || t[Vh] !== !0) && ig(a, i);
    }
    function nT(e, t, a, i, o) {
      (o || t[Vh] !== !0) && lg(a, i);
    }
    function rT(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function aT(e) {
      up(e);
    }
    var Tf = Math.random().toString(36).slice(2), bf = "__reactFiber$" + Tf, vg = "__reactProps$" + Tf, yp = "__reactContainer$" + Tf, hg = "__reactEvents$" + Tf, iT = "__reactListeners$" + Tf, lT = "__reactHandles$" + Tf;
    function oT(e) {
      delete e[bf], delete e[vg], delete e[hg], delete e[iT], delete e[lT];
    }
    function gp(e, t) {
      t[bf] = e;
    }
    function Yh(e, t) {
      t[yp] = e;
    }
    function OE(e) {
      e[yp] = null;
    }
    function Sp(e) {
      return !!e[yp];
    }
    function Ys(e) {
      var t = e[bf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yp] || a[bf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = kE(e); o !== null; ) {
              var s = o[bf];
              if (s)
                return s;
              o = kE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zu(e) {
      var t = e[bf] || e[yp];
      return t && (t.tag === Z || t.tag === he || t.tag === De || t.tag === F) ? t : null;
    }
    function _f(e) {
      if (e.tag === Z || e.tag === he)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Wh(e) {
      return e[vg] || null;
    }
    function mg(e, t) {
      e[vg] = t;
    }
    function uT(e) {
      var t = e[hg];
      return t === void 0 && (t = e[hg] = /* @__PURE__ */ new Set()), t;
    }
    var NE = {}, LE = S.ReactDebugCurrentFrame;
    function Qh(e) {
      if (e) {
        var t = e._owner, a = gi(e.type, e._source, t ? t.type : null);
        LE.setExtraStackFrame(a);
      } else
        LE.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, o) {
      {
        var s = Function.call.bind(qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && (Qh(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Qh(null)), p instanceof Error && !(p.message in NE) && (NE[p.message] = !0, Qh(o), y("Failed %s type: %s", a, p.message), Qh(null));
          }
      }
    }
    var yg = [], Gh;
    Gh = [];
    var bo = -1;
    function Au(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (bo < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Gh[bo] && y("Unexpected Fiber popped."), e.current = yg[bo], yg[bo] = null, Gh[bo] = null, bo--;
    }
    function ca(e, t, a) {
      bo++, yg[bo] = e.current, Gh[bo] = a, e.current = t;
    }
    var gg;
    gg = {};
    var ci = {};
    Object.freeze(ci);
    var _o = Au(ci), Hl = Au(!1), Sg = ci;
    function Df(e, t, a) {
      return a && Vl(t) ? Sg : _o.current;
    }
    function ME(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = at(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return o && ME(e, t, s), s;
      }
    }
    function qh() {
      return Hl.current;
    }
    function Vl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Kh(e) {
      sa(Hl, e), sa(_o, e);
    }
    function Eg(e) {
      sa(Hl, e), sa(_o, e);
    }
    function UE(e, t, a) {
      {
        if (_o.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(_o, t, e), ca(Hl, a, e);
      }
    }
    function zE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = at(e) || "Unknown";
            gg[s] || (gg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((at(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = at(e) || "Unknown";
          tl(o, f, "child context", v);
        }
        return ht({}, a, f);
      }
    }
    function Xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return Sg = _o.current, ca(_o, a, e), ca(Hl, Hl.current, e), !0;
      }
    }
    function AE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = zE(e, t, Sg);
          i.__reactInternalMemoizedMergedChildContext = o, sa(Hl, e), sa(_o, e), ca(_o, o, e), ca(Hl, a, e);
        } else
          sa(Hl, e), ca(Hl, a, e);
      }
    }
    function sT(e) {
      {
        if (!kd(e) || e.tag !== H)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case H: {
              var a = t.type;
              if (Vl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ju = 0, Jh = 1, Do = null, Cg = !1, Rg = !1;
    function jE(e) {
      Do === null ? Do = [e] : Do.push(e);
    }
    function cT(e) {
      Cg = !0, jE(e);
    }
    function FE() {
      Cg && Fu();
    }
    function Fu() {
      if (!Rg && Do !== null) {
        Rg = !0;
        var e = 0, t = $a();
        try {
          var a = !0, i = Do;
          for (_n(Mn); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Do = null, Cg = !1;
        } catch (s) {
          throw Do !== null && (Do = Do.slice(e + 1)), Tc(_c, Fu), s;
        } finally {
          _n(t), Rg = !1;
        }
      }
      return null;
    }
    var Of = [], Nf = 0, Zh = null, em = 0, _i = [], Di = 0, Ws = null, ko = 1, Oo = "";
    function fT(e) {
      return Gs(), (e.flags & bd) !== Ie;
    }
    function dT(e) {
      return Gs(), em;
    }
    function pT() {
      var e = Oo, t = ko, a = t & ~vT(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Gs(), Of[Nf++] = em, Of[Nf++] = Zh, Zh = e, em = t;
    }
    function PE(e, t, a) {
      Gs(), _i[Di++] = ko, _i[Di++] = Oo, _i[Di++] = Ws, Ws = e;
      var i = ko, o = Oo, s = tm(i) - 1, f = i & ~(1 << s), p = a + 1, v = tm(t) + s;
      if (v > 30) {
        var E = s - s % 5, R = (1 << E) - 1, N = (f & R).toString(32), k = f >> E, V = s - E, I = tm(t) + V, Q = p << V, Ce = Q | k, Ye = N + o;
        ko = 1 << I | Ce, Oo = Ye;
      } else {
        var He = p << s, Ot = He | f, xt = o;
        ko = 1 << v | Ot, Oo = xt;
      }
    }
    function xg(e) {
      Gs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), PE(e, a, i);
      }
    }
    function tm(e) {
      return 32 - cu(e);
    }
    function vT(e) {
      return 1 << tm(e) - 1;
    }
    function wg(e) {
      for (; e === Zh; )
        Zh = Of[--Nf], Of[Nf] = null, em = Of[--Nf], Of[Nf] = null;
      for (; e === Ws; )
        Ws = _i[--Di], _i[Di] = null, Oo = _i[--Di], _i[Di] = null, ko = _i[--Di], _i[Di] = null;
    }
    function hT() {
      return Gs(), Ws !== null ? {
        id: ko,
        overflow: Oo
      } : null;
    }
    function mT(e, t) {
      Gs(), _i[Di++] = ko, _i[Di++] = Oo, _i[Di++] = Ws, ko = t.id, Oo = t.overflow, Ws = e;
    }
    function Gs() {
      Ar() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, ki = null, nl = !1, qs = !1, Pu = null;
    function yT() {
      nl && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function HE() {
      qs = !0;
    }
    function gT() {
      return qs;
    }
    function ST(e) {
      var t = e.stateNode.containerInfo;
      return ki = jw(t), zr = e, nl = !0, Pu = null, qs = !1, !0;
    }
    function ET(e, t, a) {
      return ki = Fw(t), zr = e, nl = !0, Pu = null, qs = !1, a !== null && mT(e, a), !0;
    }
    function VE(e, t) {
      switch (e.tag) {
        case F: {
          Gw(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Pe) !== ze;
          Kw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && qw(i.dehydrated, t);
          break;
        }
      }
    }
    function BE(e, t) {
      VE(e, t);
      var a = wD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Vt) : i.push(a);
    }
    function Tg(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, Xw(a, i);
                break;
              case he:
                var o = t.pendingProps;
                Jw(a, o);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, E = t.pendingProps, R = (e.mode & Pe) !== ze;
                tT(
                  s,
                  f,
                  p,
                  v,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case he: {
                var N = t.pendingProps, k = (e.mode & Pe) !== ze;
                nT(
                  s,
                  f,
                  p,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case De: {
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null) switch (t.tag) {
              case Z:
                var Q = t.type;
                t.pendingProps, Zw(I, Q);
                break;
              case he:
                var Ce = t.pendingProps;
                eT(I, Ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function $E(e, t) {
      t.flags = t.flags & ~ja | sn, Tg(e, t);
    }
    function IE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = Nw(t, a);
          return i !== null ? (e.stateNode = i, zr = e, ki = Aw(i), !0) : !1;
        }
        case he: {
          var o = e.pendingProps, s = Lw(t, o);
          return s !== null ? (e.stateNode = s, zr = e, ki = null, !0) : !1;
        }
        case De: {
          var f = Mw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: hT(),
              retryLane: wr
            };
            e.memoizedState = p;
            var v = TD(f);
            return v.return = e, e.child = v, zr = e, ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function bg(e) {
      return (e.mode & Pe) !== ze && (e.flags & nt) === Ie;
    }
    function _g(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Dg(e) {
      if (nl) {
        var t = ki;
        if (!t) {
          bg(e) && (Tg(zr, e), _g()), $E(zr, e), nl = !1, zr = e;
          return;
        }
        var a = t;
        if (!IE(e, t)) {
          bg(e) && (Tg(zr, e), _g()), t = mp(a);
          var i = zr;
          if (!t || !IE(e, t)) {
            $E(zr, e), nl = !1, zr = e;
            return;
          }
          BE(i, a);
        }
      }
    }
    function CT(e, t, a) {
      var i = e.stateNode, o = !qs, s = Pw(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function RT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Hw(t, a, e);
      if (i) {
        var o = zr;
        if (o !== null)
          switch (o.tag) {
            case F: {
              var s = o.stateNode.containerInfo, f = (o.mode & Pe) !== ze;
              Ww(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = o.type, v = o.memoizedProps, E = o.stateNode, R = (o.mode & Pe) !== ze;
              Qw(
                p,
                v,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function xT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Vw(a, e);
    }
    function wT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Bw(a);
    }
    function YE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== F && t.tag !== De; )
        t = t.return;
      zr = t;
    }
    function nm(e) {
      if (e !== zr)
        return !1;
      if (!nl)
        return YE(e), nl = !0, !1;
      if (e.tag !== F && (e.tag !== Z || Yw(e.type) && !sg(e.type, e.memoizedProps))) {
        var t = ki;
        if (t)
          if (bg(e))
            WE(e), _g();
          else
            for (; t; )
              BE(e, t), t = mp(t);
      }
      return YE(e), e.tag === De ? ki = wT(e) : ki = zr ? mp(e.stateNode) : null, !0;
    }
    function TT() {
      return nl && ki !== null;
    }
    function WE(e) {
      for (var t = ki; t; )
        VE(e, t), t = mp(t);
    }
    function Lf() {
      zr = null, ki = null, nl = !1, qs = !1;
    }
    function QE() {
      Pu !== null && (H1(Pu), Pu = null);
    }
    function Ar() {
      return nl;
    }
    function kg(e) {
      Pu === null ? Pu = [e] : Pu.push(e);
    }
    var bT = S.ReactCurrentBatchConfig, _T = null;
    function DT() {
      return bT.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var kT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Et && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ep = [], Cp = [], Rp = [], xp = [], wp = [], Tp = [], Xs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Et && typeof t.UNSAFE_componentWillMount == "function" && Cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & Et && typeof t.UNSAFE_componentWillReceiveProps == "function" && xp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && wp.push(e), e.mode & Et && typeof t.UNSAFE_componentWillUpdate == "function" && Tp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(k) {
          e.add(at(k) || "Component"), Xs.add(k.type);
        }), Ep = []);
        var t = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(k) {
          t.add(at(k) || "Component"), Xs.add(k.type);
        }), Cp = []);
        var a = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(k) {
          a.add(at(k) || "Component"), Xs.add(k.type);
        }), Rp = []);
        var i = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(k) {
          i.add(at(k) || "Component"), Xs.add(k.type);
        }), xp = []);
        var o = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function(k) {
          o.add(at(k) || "Component"), Xs.add(k.type);
        }), wp = []);
        var s = /* @__PURE__ */ new Set();
        if (Tp.length > 0 && (Tp.forEach(function(k) {
          s.add(at(k) || "Component"), Xs.add(k.type);
        }), Tp = []), t.size > 0) {
          var f = Ks(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var E = Ks(e);
          L(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var R = Ks(a);
          L(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (o.size > 0) {
          var N = Ks(o);
          L(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var rm = /* @__PURE__ */ new Map(), GE = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = kT(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!GE.has(e.type)) {
          var i = rm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], rm.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        rm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(at(s) || "Component"), GE.add(s.type);
            });
            var o = Ks(i);
            try {
              Wt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Tn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        Ep = [], Cp = [], Rp = [], xp = [], wp = [], Tp = [], rm = /* @__PURE__ */ new Map();
      };
    }
    var Og, Ng, Lg, Mg, Ug, qE = function(e, t) {
    };
    Og = !1, Ng = !1, Lg = {}, Mg = {}, Ug = {}, qE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = at(t) || "Component";
        Mg[a] || (Mg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function OT(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function bp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Et || et) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== H) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !OT(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = at(e) || "Component";
          Lg[o] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), Lg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== H)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Kn(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var R = function(N) {
            var k = v.refs;
            N === null ? delete k[E] : k[E] = N;
          };
          return R._stringRef = E, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function am(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function im(e) {
      {
        var t = at(e) || "Component";
        if (Ug[t])
          return;
        Ug[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function KE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function XE(e) {
      function t(A, G) {
        if (e) {
          var j = A.deletions;
          j === null ? (A.deletions = [G], A.flags |= Vt) : j.push(G);
        }
      }
      function a(A, G) {
        if (!e)
          return null;
        for (var j = G; j !== null; )
          t(A, j), j = j.sibling;
        return null;
      }
      function i(A, G) {
        for (var j = /* @__PURE__ */ new Map(), ue = G; ue !== null; )
          ue.key !== null ? j.set(ue.key, ue) : j.set(ue.index, ue), ue = ue.sibling;
        return j;
      }
      function o(A, G) {
        var j = lc(A, G);
        return j.index = 0, j.sibling = null, j;
      }
      function s(A, G, j) {
        if (A.index = j, !e)
          return A.flags |= bd, G;
        var ue = A.alternate;
        if (ue !== null) {
          var Te = ue.index;
          return Te < G ? (A.flags |= sn, G) : Te;
        } else
          return A.flags |= sn, G;
      }
      function f(A) {
        return e && A.alternate === null && (A.flags |= sn), A;
      }
      function p(A, G, j, ue) {
        if (G === null || G.tag !== he) {
          var Te = k0(j, A.mode, ue);
          return Te.return = A, Te;
        } else {
          var Re = o(G, j);
          return Re.return = A, Re;
        }
      }
      function v(A, G, j, ue) {
        var Te = j.type;
        if (Te === ga)
          return R(A, G, j.props.children, ue, j.key);
        if (G !== null && (G.elementType === Te || // Keep this check inline so it only runs on the false path:
        nR(G, j) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === Ke && KE(Te) === G.type)) {
          var Re = o(G, j.props);
          return Re.ref = bp(A, G, j), Re.return = A, Re._debugSource = j._source, Re._debugOwner = j._owner, Re;
        }
        var tt = D0(j, A.mode, ue);
        return tt.ref = bp(A, G, j), tt.return = A, tt;
      }
      function E(A, G, j, ue) {
        if (G === null || G.tag !== X || G.stateNode.containerInfo !== j.containerInfo || G.stateNode.implementation !== j.implementation) {
          var Te = O0(j, A.mode, ue);
          return Te.return = A, Te;
        } else {
          var Re = o(G, j.children || []);
          return Re.return = A, Re;
        }
      }
      function R(A, G, j, ue, Te) {
        if (G === null || G.tag !== _e) {
          var Re = Ku(j, A.mode, ue, Te);
          return Re.return = A, Re;
        } else {
          var tt = o(G, j);
          return tt.return = A, tt;
        }
      }
      function N(A, G, j) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ue = k0("" + G, A.mode, j);
          return ue.return = A, ue;
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case ni: {
              var Te = D0(G, A.mode, j);
              return Te.ref = bp(A, null, G), Te.return = A, Te;
            }
            case kr: {
              var Re = O0(G, A.mode, j);
              return Re.return = A, Re;
            }
            case Ke: {
              var tt = G._payload, lt = G._init;
              return N(A, lt(tt), j);
            }
          }
          if (_t(G) || Or(G)) {
            var Zt = Ku(G, A.mode, j, null);
            return Zt.return = A, Zt;
          }
          am(A, G);
        }
        return typeof G == "function" && im(A), null;
      }
      function k(A, G, j, ue) {
        var Te = G !== null ? G.key : null;
        if (typeof j == "string" && j !== "" || typeof j == "number")
          return Te !== null ? null : p(A, G, "" + j, ue);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case ni:
              return j.key === Te ? v(A, G, j, ue) : null;
            case kr:
              return j.key === Te ? E(A, G, j, ue) : null;
            case Ke: {
              var Re = j._payload, tt = j._init;
              return k(A, G, tt(Re), ue);
            }
          }
          if (_t(j) || Or(j))
            return Te !== null ? null : R(A, G, j, ue, null);
          am(A, j);
        }
        return typeof j == "function" && im(A), null;
      }
      function V(A, G, j, ue, Te) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var Re = A.get(j) || null;
          return p(G, Re, "" + ue, Te);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case ni: {
              var tt = A.get(ue.key === null ? j : ue.key) || null;
              return v(G, tt, ue, Te);
            }
            case kr: {
              var lt = A.get(ue.key === null ? j : ue.key) || null;
              return E(G, lt, ue, Te);
            }
            case Ke:
              var Zt = ue._payload, Ft = ue._init;
              return V(A, G, j, Ft(Zt), Te);
          }
          if (_t(ue) || Or(ue)) {
            var Gn = A.get(j) || null;
            return R(G, Gn, ue, Te, null);
          }
          am(G, ue);
        }
        return typeof ue == "function" && im(G), null;
      }
      function I(A, G, j) {
        {
          if (typeof A != "object" || A === null)
            return G;
          switch (A.$$typeof) {
            case ni:
            case kr:
              qE(A, j);
              var ue = A.key;
              if (typeof ue != "string")
                break;
              if (G === null) {
                G = /* @__PURE__ */ new Set(), G.add(ue);
                break;
              }
              if (!G.has(ue)) {
                G.add(ue);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ue);
              break;
            case Ke:
              var Te = A._payload, Re = A._init;
              I(Re(Te), G, j);
              break;
          }
        }
        return G;
      }
      function Q(A, G, j, ue) {
        for (var Te = null, Re = 0; Re < j.length; Re++) {
          var tt = j[Re];
          Te = I(tt, Te, A);
        }
        for (var lt = null, Zt = null, Ft = G, Gn = 0, Pt = 0, Vn = null; Ft !== null && Pt < j.length; Pt++) {
          Ft.index > Pt ? (Vn = Ft, Ft = null) : Vn = Ft.sibling;
          var da = k(A, Ft, j[Pt], ue);
          if (da === null) {
            Ft === null && (Ft = Vn);
            break;
          }
          e && Ft && da.alternate === null && t(A, Ft), Gn = s(da, Gn, Pt), Zt === null ? lt = da : Zt.sibling = da, Zt = da, Ft = Vn;
        }
        if (Pt === j.length) {
          if (a(A, Ft), Ar()) {
            var $r = Pt;
            Qs(A, $r);
          }
          return lt;
        }
        if (Ft === null) {
          for (; Pt < j.length; Pt++) {
            var di = N(A, j[Pt], ue);
            di !== null && (Gn = s(di, Gn, Pt), Zt === null ? lt = di : Zt.sibling = di, Zt = di);
          }
          if (Ar()) {
            var Da = Pt;
            Qs(A, Da);
          }
          return lt;
        }
        for (var ka = i(A, Ft); Pt < j.length; Pt++) {
          var pa = V(ka, A, Pt, j[Pt], ue);
          pa !== null && (e && pa.alternate !== null && ka.delete(pa.key === null ? Pt : pa.key), Gn = s(pa, Gn, Pt), Zt === null ? lt = pa : Zt.sibling = pa, Zt = pa);
        }
        if (e && ka.forEach(function(Xf) {
          return t(A, Xf);
        }), Ar()) {
          var jo = Pt;
          Qs(A, jo);
        }
        return lt;
      }
      function Ce(A, G, j, ue) {
        var Te = Or(j);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          j[Symbol.toStringTag] === "Generator" && (Ng || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ng = !0), j.entries === Te && (Og || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Og = !0);
          var Re = Te.call(j);
          if (Re)
            for (var tt = null, lt = Re.next(); !lt.done; lt = Re.next()) {
              var Zt = lt.value;
              tt = I(Zt, tt, A);
            }
        }
        var Ft = Te.call(j);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Pt = null, Vn = G, da = 0, $r = 0, di = null, Da = Ft.next(); Vn !== null && !Da.done; $r++, Da = Ft.next()) {
          Vn.index > $r ? (di = Vn, Vn = null) : di = Vn.sibling;
          var ka = k(A, Vn, Da.value, ue);
          if (ka === null) {
            Vn === null && (Vn = di);
            break;
          }
          e && Vn && ka.alternate === null && t(A, Vn), da = s(ka, da, $r), Pt === null ? Gn = ka : Pt.sibling = ka, Pt = ka, Vn = di;
        }
        if (Da.done) {
          if (a(A, Vn), Ar()) {
            var pa = $r;
            Qs(A, pa);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Da.done; $r++, Da = Ft.next()) {
            var jo = N(A, Da.value, ue);
            jo !== null && (da = s(jo, da, $r), Pt === null ? Gn = jo : Pt.sibling = jo, Pt = jo);
          }
          if (Ar()) {
            var Xf = $r;
            Qs(A, Xf);
          }
          return Gn;
        }
        for (var av = i(A, Vn); !Da.done; $r++, Da = Ft.next()) {
          var ql = V(av, A, $r, Da.value, ue);
          ql !== null && (e && ql.alternate !== null && av.delete(ql.key === null ? $r : ql.key), da = s(ql, da, $r), Pt === null ? Gn = ql : Pt.sibling = ql, Pt = ql);
        }
        if (e && av.forEach(function(nk) {
          return t(A, nk);
        }), Ar()) {
          var tk = $r;
          Qs(A, tk);
        }
        return Gn;
      }
      function Ye(A, G, j, ue) {
        if (G !== null && G.tag === he) {
          a(A, G.sibling);
          var Te = o(G, j);
          return Te.return = A, Te;
        }
        a(A, G);
        var Re = k0(j, A.mode, ue);
        return Re.return = A, Re;
      }
      function He(A, G, j, ue) {
        for (var Te = j.key, Re = G; Re !== null; ) {
          if (Re.key === Te) {
            var tt = j.type;
            if (tt === ga) {
              if (Re.tag === _e) {
                a(A, Re.sibling);
                var lt = o(Re, j.props.children);
                return lt.return = A, lt._debugSource = j._source, lt._debugOwner = j._owner, lt;
              }
            } else if (Re.elementType === tt || // Keep this check inline so it only runs on the false path:
            nR(Re, j) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof tt == "object" && tt !== null && tt.$$typeof === Ke && KE(tt) === Re.type) {
              a(A, Re.sibling);
              var Zt = o(Re, j.props);
              return Zt.ref = bp(A, Re, j), Zt.return = A, Zt._debugSource = j._source, Zt._debugOwner = j._owner, Zt;
            }
            a(A, Re);
            break;
          } else
            t(A, Re);
          Re = Re.sibling;
        }
        if (j.type === ga) {
          var Ft = Ku(j.props.children, A.mode, ue, j.key);
          return Ft.return = A, Ft;
        } else {
          var Gn = D0(j, A.mode, ue);
          return Gn.ref = bp(A, G, j), Gn.return = A, Gn;
        }
      }
      function Ot(A, G, j, ue) {
        for (var Te = j.key, Re = G; Re !== null; ) {
          if (Re.key === Te)
            if (Re.tag === X && Re.stateNode.containerInfo === j.containerInfo && Re.stateNode.implementation === j.implementation) {
              a(A, Re.sibling);
              var tt = o(Re, j.children || []);
              return tt.return = A, tt;
            } else {
              a(A, Re);
              break;
            }
          else
            t(A, Re);
          Re = Re.sibling;
        }
        var lt = O0(j, A.mode, ue);
        return lt.return = A, lt;
      }
      function xt(A, G, j, ue) {
        var Te = typeof j == "object" && j !== null && j.type === ga && j.key === null;
        if (Te && (j = j.props.children), typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case ni:
              return f(He(A, G, j, ue));
            case kr:
              return f(Ot(A, G, j, ue));
            case Ke:
              var Re = j._payload, tt = j._init;
              return xt(A, G, tt(Re), ue);
          }
          if (_t(j))
            return Q(A, G, j, ue);
          if (Or(j))
            return Ce(A, G, j, ue);
          am(A, j);
        }
        return typeof j == "string" && j !== "" || typeof j == "number" ? f(Ye(A, G, "" + j, ue)) : (typeof j == "function" && im(A), a(A, G));
      }
      return xt;
    }
    var Mf = XE(!0), JE = XE(!1);
    function NT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function LT(e, t) {
      for (var a = e.child; a !== null; )
        SD(a, t), a = a.sibling;
    }
    var zg = Au(null), Ag;
    Ag = {};
    var lm = null, Uf = null, jg = null, om = !1;
    function um() {
      lm = null, Uf = null, jg = null, om = !1;
    }
    function ZE() {
      om = !0;
    }
    function eC() {
      om = !1;
    }
    function tC(e, t, a) {
      ca(zg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ag && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ag;
    }
    function Fg(e, t) {
      var a = zg.current;
      sa(zg, t), e._currentValue = a;
    }
    function Pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (go(i.childLanes, t) ? o !== null && !go(o.childLanes, t) && (o.childLanes = ot(o.childLanes, t)) : (i.childLanes = ot(i.childLanes, t), o !== null && (o.childLanes = ot(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function MT(e, t, a) {
      UT(e, t, a);
    }
    function UT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === H) {
                var p = yu(a), v = No(on, p);
                v.tag = cm;
                var E = i.updateQueue;
                if (E !== null) {
                  var R = E.shared, N = R.pending;
                  N === null ? v.next = v : (v.next = N.next, N.next = v), R.pending = v;
                }
              }
              i.lanes = ot(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = ot(k.lanes, a)), Pg(i.return, a, e), s.lanes = ot(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ie)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Ut) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = ot(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = ot(I.lanes, a)), Pg(V, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var Q = o.sibling;
            if (Q !== null) {
              Q.return = o.return, o = Q;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function zf(e, t) {
      lm = e, Uf = null, jg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Vp(), a.firstContext = null);
      }
    }
    function ar(e) {
      om && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (jg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uf === null) {
          if (lm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uf = a, lm.dependencies = {
            lanes: te,
            firstContext: a
          };
        } else
          Uf = Uf.next = a;
      }
      return t;
    }
    var Js = null;
    function Hg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function zT() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function nC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Hg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, sm(e, i);
    }
    function AT(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Hg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function jT(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Hg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, sm(e, i);
    }
    function qa(e, t) {
      return sm(e, t);
    }
    var FT = sm;
    function sm(e, t) {
      e.lanes = ot(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ot(a.lanes, t)), a === null && (e.flags & (sn | ja)) !== Ie && J1(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ot(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ot(a.childLanes, t) : (o.flags & (sn | ja)) !== Ie && J1(e), i = o, o = o.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var rC = 0, aC = 1, cm = 2, Vg = 3, fm = !1, Bg, dm;
    Bg = !1, dm = null;
    function $g(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function iC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function No(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: rC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Hu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (dm === o && !Bg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Bg = !0), A_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, FT(e, a);
      } else
        return jT(e, o, t, a);
    }
    function pm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Vd(a)) {
          var s = o.lanes;
          s = Xc(s, e.pendingLanes);
          var f = ot(s, a);
          o.lanes = f, Bd(e, f);
        }
      }
    }
    function Ig(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var E = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function PT(e, t, a, i, o, s) {
      switch (a.tag) {
        case aC: {
          var f = a.payload;
          if (typeof f == "function") {
            ZE();
            var p = f.call(s, i, o);
            {
              if (e.mode & Et) {
                Pn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Pn(!1);
                }
              }
              eC();
            }
            return p;
          }
          return f;
        }
        case Vg:
          e.flags = e.flags & ~er | nt;
        case rC: {
          var v = a.payload, E;
          if (typeof v == "function") {
            ZE(), E = v.call(s, i, o);
            {
              if (e.mode & Et) {
                Pn(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  Pn(!1);
                }
              }
              eC();
            }
          } else
            E = v;
          return E == null ? i : ht({}, i, E);
        }
        case cm:
          return fm = !0, i;
      }
      return i;
    }
    function vm(e, t, a, i) {
      var o = e.updateQueue;
      fm = !1, dm = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var v = p, E = v.next;
        v.next = null, f === null ? s = E : f.next = E, f = v;
        var R = e.alternate;
        if (R !== null) {
          var N = R.updateQueue, k = N.lastBaseUpdate;
          k !== f && (k === null ? N.firstBaseUpdate = E : k.next = E, N.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var V = o.baseState, I = te, Q = null, Ce = null, Ye = null, He = s;
        do {
          var Ot = He.lane, xt = He.eventTime;
          if (go(i, Ot)) {
            if (Ye !== null) {
              var G = {
                eventTime: xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                tag: He.tag,
                payload: He.payload,
                callback: He.callback,
                next: null
              };
              Ye = Ye.next = G;
            }
            V = PT(e, o, He, V, t, a);
            var j = He.callback;
            if (j !== null && // If the update was already committed, we should not queue its
            // callback again.
            He.lane !== Hn) {
              e.flags |= Ci;
              var ue = o.effects;
              ue === null ? o.effects = [He] : ue.push(He);
            }
          } else {
            var A = {
              eventTime: xt,
              lane: Ot,
              tag: He.tag,
              payload: He.payload,
              callback: He.callback,
              next: null
            };
            Ye === null ? (Ce = Ye = A, Q = V) : Ye = Ye.next = A, I = ot(I, Ot);
          }
          if (He = He.next, He === null) {
            if (p = o.shared.pending, p === null)
              break;
            var Te = p, Re = Te.next;
            Te.next = null, He = Re, o.lastBaseUpdate = Te, o.shared.pending = null;
          }
        } while (!0);
        Ye === null && (Q = V), o.baseState = Q, o.firstBaseUpdate = Ce, o.lastBaseUpdate = Ye;
        var tt = o.shared.interleaved;
        if (tt !== null) {
          var lt = tt;
          do
            I = ot(I, lt.lane), lt = lt.next;
          while (lt !== tt);
        } else s === null && (o.shared.lanes = te);
        Zp(I), e.lanes = I, e.memoizedState = V;
      }
      dm = null;
    }
    function HT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function lC() {
      fm = !1;
    }
    function hm() {
      return fm;
    }
    function oC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, HT(f, a));
        }
    }
    var _p = {}, Vu = Au(_p), Dp = Au(_p), mm = Au(_p);
    function ym(e) {
      if (e === _p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function uC() {
      var e = ym(mm.current);
      return e;
    }
    function Yg(e, t) {
      ca(mm, t, e), ca(Dp, e, e), ca(Vu, _p, e);
      var a = rw(t);
      sa(Vu, e), ca(Vu, a, e);
    }
    function Af(e) {
      sa(Vu, e), sa(Dp, e), sa(mm, e);
    }
    function Wg() {
      var e = ym(Vu.current);
      return e;
    }
    function sC(e) {
      ym(mm.current);
      var t = ym(Vu.current), a = aw(t, e.type);
      t !== a && (ca(Dp, e, e), ca(Vu, a, e));
    }
    function Qg(e) {
      Dp.current === e && (sa(Vu, e), sa(Dp, e));
    }
    var VT = 0, cC = 1, fC = 1, kp = 2, al = Au(VT);
    function Gg(e, t) {
      return (e & t) !== 0;
    }
    function jf(e) {
      return e & cC;
    }
    function qg(e, t) {
      return e & cC | t;
    }
    function BT(e, t) {
      return e | t;
    }
    function Bu(e, t) {
      ca(al, t, e);
    }
    function Ff(e) {
      sa(al, e);
    }
    function $T(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || DE(i) || pg(i))
              return t;
          }
        } else if (t.tag === Nt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & nt) !== Ie;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ka = (
      /*   */
      0
    ), sr = (
      /* */
      1
    ), Bl = (
      /*  */
      2
    ), cr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Kg = [];
    function Xg() {
      for (var e = 0; e < Kg.length; e++) {
        var t = Kg[e];
        t._workInProgressVersionPrimary = null;
      }
      Kg.length = 0;
    }
    function IT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var we = S.ReactCurrentDispatcher, Op = S.ReactCurrentBatchConfig, Jg, Pf;
    Jg = /* @__PURE__ */ new Set();
    var Zs = te, Jt = null, fr = null, dr = null, Sm = !1, Np = !1, Lp = 0, YT = 0, WT = 25, K = null, Oi = null, $u = -1, Zg = !1;
    function Gt() {
      {
        var e = K;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function ye() {
      {
        var e = K;
        Oi !== null && ($u++, Oi[$u] !== e && QT(e));
      }
    }
    function Hf(e) {
      e != null && !_t(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", K, typeof e);
    }
    function QT(e) {
      {
        var t = at(Jt);
        if (!Jg.has(t) && (Jg.add(t), Oi !== null)) {
          for (var a = "", i = 30, o = 0; o <= $u; o++) {
            for (var s = Oi[o], f = o === $u ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function eS(e, t) {
      if (Zg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", K), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, K, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Le(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vf(e, t, a, i, o, s) {
      Zs = s, Jt = t, Oi = e !== null ? e._debugHookTypes : null, $u = -1, Zg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? we.current = MC : Oi !== null ? we.current = LC : we.current = NC;
      var f = a(i, o);
      if (Np) {
        var p = 0;
        do {
          if (Np = !1, Lp = 0, p >= WT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Zg = !1, fr = null, dr = null, t.updateQueue = null, $u = -1, we.current = UC, f = a(i, o);
        } while (Np);
      }
      we.current = Lm, t._debugHookTypes = Oi;
      var v = fr !== null && fr.next !== null;
      if (Zs = te, Jt = null, fr = null, dr = null, K = null, Oi = null, $u = -1, e !== null && (e.flags & lr) !== (t.flags & lr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Pe) !== ze && y("Internal React error: Expected static flag was missing. Please notify the React team."), Sm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Bf() {
      var e = Lp !== 0;
      return Lp = 0, e;
    }
    function dC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & xa) !== ze ? t.flags &= ~(uo | ta | pn | ct) : t.flags &= ~(pn | ct), e.lanes = Os(e.lanes, a);
    }
    function pC() {
      if (we.current = Lm, Sm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sm = !1;
      }
      Zs = te, Jt = null, fr = null, dr = null, Oi = null, $u = -1, K = null, bC = !1, Np = !1, Lp = 0;
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return dr === null ? Jt.memoizedState = dr = e : dr = dr.next = e, dr;
    }
    function Ni() {
      var e;
      if (fr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = fr.next;
      var a;
      if (dr === null ? a = Jt.memoizedState : a = dr.next, a !== null)
        dr = a, a = dr.next, fr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        fr = e;
        var i = {
          memoizedState: fr.memoizedState,
          baseState: fr.baseState,
          baseQueue: fr.baseQueue,
          queue: fr.queue,
          next: null
        };
        dr === null ? Jt.memoizedState = dr = i : dr = dr.next = i;
      }
      return dr;
    }
    function vC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function tS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function nS(e, t, a) {
      var i = $l(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = XT.bind(null, Jt, s);
      return [i.memoizedState, f];
    }
    function rS(e, t, a) {
      var i = Ni(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = fr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, E = p.next;
          f.next = E, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var R = f.next, N = s.baseState, k = null, V = null, I = null, Q = R;
        do {
          var Ce = Q.lane;
          if (go(Zs, Ce)) {
            if (I !== null) {
              var He = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              I = I.next = He;
            }
            if (Q.hasEagerState)
              N = Q.eagerState;
            else {
              var Ot = Q.action;
              N = e(N, Ot);
            }
          } else {
            var Ye = {
              lane: Ce,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            I === null ? (V = I = Ye, k = N) : I = I.next = Ye, Jt.lanes = ot(Jt.lanes, Ce), Zp(Ce);
          }
          Q = Q.next;
        } while (Q !== null && Q !== R);
        I === null ? k = N : I.next = V, Le(N, i.memoizedState) || Vp(), i.memoizedState = N, i.baseState = k, i.baseQueue = I, o.lastRenderedState = N;
      }
      var xt = o.interleaved;
      if (xt !== null) {
        var A = xt;
        do {
          var G = A.lane;
          Jt.lanes = ot(Jt.lanes, G), Zp(G), A = A.next;
        } while (A !== xt);
      } else f === null && (o.lanes = te);
      var j = o.dispatch;
      return [i.memoizedState, j];
    }
    function aS(e, t, a) {
      var i = Ni(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var v = f.next, E = v;
        do {
          var R = E.action;
          p = e(p, R), E = E.next;
        } while (E !== v);
        Le(p, i.memoizedState) || Vp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function KO(e, t, a) {
    }
    function XO(e, t, a) {
    }
    function iS(e, t, a) {
      var i = Jt, o = $l(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Pf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      } else {
        if (s = t(), !Pf) {
          var p = t();
          Le(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
        }
        var v = Xm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(v, Zs) || hC(i, t, s);
      }
      o.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return o.queue = E, wm(yC.bind(null, i, E, e), [e]), i.flags |= pn, Mp(sr | jr, mC.bind(null, i, E, s, t), void 0, null), s;
    }
    function Em(e, t, a) {
      var i = Jt, o = Ni(), s = t();
      if (!Pf) {
        var f = t();
        Le(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      }
      var p = o.memoizedState, v = !Le(p, s);
      v && (o.memoizedState = s, Vp());
      var E = o.queue;
      if (zp(yC.bind(null, i, E, e), [e]), E.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      dr !== null && dr.memoizedState.tag & sr) {
        i.flags |= pn, Mp(sr | jr, mC.bind(null, i, E, s, t), void 0, null);
        var R = Xm();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(R, Zs) || hC(i, t, s);
      }
      return s;
    }
    function hC(e, t, a) {
      e.flags |= Ss;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Jt.updateQueue;
      if (o === null)
        o = vC(), Jt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function mC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, gC(t) && SC(e);
    }
    function yC(e, t, a) {
      var i = function() {
        gC(t) && SC(e);
      };
      return a(i);
    }
    function gC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Le(a, i);
      } catch {
        return !0;
      }
    }
    function SC(e) {
      var t = qa(e, $e);
      t !== null && mr(t, e, $e, on);
    }
    function Cm(e) {
      var t = $l();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: tS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = JT.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function lS(e) {
      return rS(tS);
    }
    function oS(e) {
      return aS(tS);
    }
    function Mp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Jt.updateQueue;
      if (s === null)
        s = vC(), Jt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function uS(e) {
      var t = $l();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Rm(e) {
      var t = Ni();
      return t.memoizedState;
    }
    function Up(e, t, a, i) {
      var o = $l(), s = i === void 0 ? null : i;
      Jt.flags |= e, o.memoizedState = Mp(sr | t, a, void 0, s);
    }
    function xm(e, t, a, i) {
      var o = Ni(), s = i === void 0 ? null : i, f = void 0;
      if (fr !== null) {
        var p = fr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (eS(s, v)) {
            o.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      Jt.flags |= e, o.memoizedState = Mp(sr | t, a, f, s);
    }
    function wm(e, t) {
      return (Jt.mode & xa) !== ze ? Up(uo | pn | Ol, jr, e, t) : Up(pn | Ol, jr, e, t);
    }
    function zp(e, t) {
      return xm(pn, jr, e, t);
    }
    function sS(e, t) {
      return Up(ct, Bl, e, t);
    }
    function Tm(e, t) {
      return xm(ct, Bl, e, t);
    }
    function cS(e, t) {
      var a = ct;
      return a |= ea, (Jt.mode & xa) !== ze && (a |= ta), Up(a, cr, e, t);
    }
    function bm(e, t) {
      return xm(ct, cr, e, t);
    }
    function EC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function fS(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = ct;
      return o |= ea, (Jt.mode & xa) !== ze && (o |= ta), Up(o, cr, EC.bind(null, t, e), i);
    }
    function _m(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return xm(ct, cr, EC.bind(null, t, e), i);
    }
    function GT(e, t) {
    }
    var Dm = GT;
    function dS(e, t) {
      var a = $l(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function km(e, t) {
      var a = Ni(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (eS(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function pS(e, t) {
      var a = $l(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Om(e, t) {
      var a = Ni(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (eS(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function vS(e) {
      var t = $l();
      return t.memoizedState = e, e;
    }
    function CC(e) {
      var t = Ni(), a = fr, i = a.memoizedState;
      return xC(t, i, e);
    }
    function RC(e) {
      var t = Ni();
      if (fr === null)
        return t.memoizedState = e, e;
      var a = fr.memoizedState;
      return xC(t, a, e);
    }
    function xC(e, t, a) {
      var i = !lh(Zs);
      if (i) {
        if (!Le(a, t)) {
          var o = sh();
          Jt.lanes = ot(Jt.lanes, o), Zp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Vp()), e.memoizedState = a, a;
    }
    function qT(e, t, a) {
      var i = $a();
      _n(Uy(i, Xi)), e(!0);
      var o = Op.transition;
      Op.transition = {};
      var s = Op.transition;
      Op.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_n(i), Op.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && L("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function hS() {
      var e = Cm(!1), t = e[0], a = e[1], i = qT.bind(null, a), o = $l();
      return o.memoizedState = i, [t, i];
    }
    function wC() {
      var e = lS(), t = e[0], a = Ni(), i = a.memoizedState;
      return [t, i];
    }
    function TC() {
      var e = oS(), t = e[0], a = Ni(), i = a.memoizedState;
      return [t, i];
    }
    var bC = !1;
    function KT() {
      return bC;
    }
    function mS() {
      var e = $l(), t = Xm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var o = pT();
        i = ":" + a + "R" + o;
        var s = Lp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = YT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Nm() {
      var e = Ni(), t = e.memoizedState;
      return t;
    }
    function XT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Gu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_C(e))
        DC(t, o);
      else {
        var s = nC(e, t, o, i);
        if (s !== null) {
          var f = _a();
          mr(s, e, i, f), kC(s, t, i);
        }
      }
      OC(e, i);
    }
    function JT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Gu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_C(e))
        DC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === te && (s === null || s.lanes === te)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = we.current, we.current = il;
            try {
              var v = t.lastRenderedState, E = f(v, a);
              if (o.hasEagerState = !0, o.eagerState = E, Le(E, v)) {
                AT(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              we.current = p;
            }
          }
        }
        var R = nC(e, t, o, i);
        if (R !== null) {
          var N = _a();
          mr(R, e, i, N), kC(R, t, i);
        }
      }
      OC(e, i);
    }
    function _C(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function DC(e, t) {
      Np = Sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function kC(e, t, a) {
      if (Vd(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var o = ot(i, a);
        t.lanes = o, Bd(e, o);
      }
    }
    function OC(e, t, a) {
      xs(e, t);
    }
    var Lm = {
      readContext: ar,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: de
    }, NC = null, LC = null, MC = null, UC = null, Il = null, il = null, Mm = null;
    {
      var yS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      NC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Gt(), Hf(t), dS(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Gt(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Gt(), Hf(t), wm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", Gt(), Hf(a), fS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Gt(), Hf(t), sS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Gt(), Hf(t), cS(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Gt(), Hf(t);
          var a = we.current;
          we.current = Il;
          try {
            return pS(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", Gt();
          var i = we.current;
          we.current = Il;
          try {
            return nS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Gt(), uS(e);
        },
        useState: function(e) {
          K = "useState", Gt();
          var t = we.current;
          we.current = Il;
          try {
            return Cm(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Gt(), vS(e);
        },
        useTransition: function() {
          return K = "useTransition", Gt(), hS();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", Gt(), iS(e, t, a);
        },
        useId: function() {
          return K = "useId", Gt(), mS();
        },
        unstable_isNewReconciler: de
      }, LC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", ye(), dS(e, t);
        },
        useContext: function(e) {
          return K = "useContext", ye(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", ye(), wm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", ye(), fS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", ye(), sS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", ye(), cS(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", ye();
          var a = we.current;
          we.current = Il;
          try {
            return pS(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", ye();
          var i = we.current;
          we.current = Il;
          try {
            return nS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", ye(), uS(e);
        },
        useState: function(e) {
          K = "useState", ye();
          var t = we.current;
          we.current = Il;
          try {
            return Cm(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", ye(), vS(e);
        },
        useTransition: function() {
          return K = "useTransition", ye(), hS();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", ye(), iS(e, t, a);
        },
        useId: function() {
          return K = "useId", ye(), mS();
        },
        unstable_isNewReconciler: de
      }, MC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", ye(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", ye(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", ye(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", ye(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", ye(), Tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", ye(), bm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", ye();
          var a = we.current;
          we.current = il;
          try {
            return Om(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", ye();
          var i = we.current;
          we.current = il;
          try {
            return rS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", ye(), Rm();
        },
        useState: function(e) {
          K = "useState", ye();
          var t = we.current;
          we.current = il;
          try {
            return lS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", ye(), Dm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", ye(), CC(e);
        },
        useTransition: function() {
          return K = "useTransition", ye(), wC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", ye(), Em(e, t);
        },
        useId: function() {
          return K = "useId", ye(), Nm();
        },
        unstable_isNewReconciler: de
      }, UC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", ye(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", ye(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", ye(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", ye(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", ye(), Tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", ye(), bm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", ye();
          var a = we.current;
          we.current = Mm;
          try {
            return Om(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", ye();
          var i = we.current;
          we.current = Mm;
          try {
            return aS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", ye(), Rm();
        },
        useState: function(e) {
          K = "useState", ye();
          var t = we.current;
          we.current = Mm;
          try {
            return oS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", ye(), Dm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", ye(), RC(e);
        },
        useTransition: function() {
          return K = "useTransition", ye(), TC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", ye(), Em(e, t);
        },
        useId: function() {
          return K = "useId", ye(), Nm();
        },
        unstable_isNewReconciler: de
      }, Il = {
        readContext: function(e) {
          return yS(), ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", it(), Gt(), dS(e, t);
        },
        useContext: function(e) {
          return K = "useContext", it(), Gt(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", it(), Gt(), wm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", it(), Gt(), fS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", it(), Gt(), sS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", it(), Gt(), cS(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", it(), Gt();
          var a = we.current;
          we.current = Il;
          try {
            return pS(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", it(), Gt();
          var i = we.current;
          we.current = Il;
          try {
            return nS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", it(), Gt(), uS(e);
        },
        useState: function(e) {
          K = "useState", it(), Gt();
          var t = we.current;
          we.current = Il;
          try {
            return Cm(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", it(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", it(), Gt(), vS(e);
        },
        useTransition: function() {
          return K = "useTransition", it(), Gt(), hS();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", it(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", it(), Gt(), iS(e, t, a);
        },
        useId: function() {
          return K = "useId", it(), Gt(), mS();
        },
        unstable_isNewReconciler: de
      }, il = {
        readContext: function(e) {
          return yS(), ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", it(), ye(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", it(), ye(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", it(), ye(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", it(), ye(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", it(), ye(), Tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", it(), ye(), bm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", it(), ye();
          var a = we.current;
          we.current = il;
          try {
            return Om(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", it(), ye();
          var i = we.current;
          we.current = il;
          try {
            return rS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", it(), ye(), Rm();
        },
        useState: function(e) {
          K = "useState", it(), ye();
          var t = we.current;
          we.current = il;
          try {
            return lS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", it(), ye(), Dm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", it(), ye(), CC(e);
        },
        useTransition: function() {
          return K = "useTransition", it(), ye(), wC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", it(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", it(), ye(), Em(e, t);
        },
        useId: function() {
          return K = "useId", it(), ye(), Nm();
        },
        unstable_isNewReconciler: de
      }, Mm = {
        readContext: function(e) {
          return yS(), ar(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", it(), ye(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", it(), ye(), ar(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", it(), ye(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", it(), ye(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", it(), ye(), Tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", it(), ye(), bm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", it(), ye();
          var a = we.current;
          we.current = il;
          try {
            return Om(e, t);
          } finally {
            we.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", it(), ye();
          var i = we.current;
          we.current = il;
          try {
            return aS(e, t, a);
          } finally {
            we.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", it(), ye(), Rm();
        },
        useState: function(e) {
          K = "useState", it(), ye();
          var t = we.current;
          we.current = il;
          try {
            return oS(e);
          } finally {
            we.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", it(), ye(), Dm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", it(), ye(), RC(e);
        },
        useTransition: function() {
          return K = "useTransition", it(), ye(), TC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", it(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", it(), ye(), Em(e, t);
        },
        useId: function() {
          return K = "useId", it(), ye(), Nm();
        },
        unstable_isNewReconciler: de
      };
    }
    var Iu = C.unstable_now, zC = 0, Um = -1, Ap = -1, zm = -1, gS = !1, Am = !1;
    function AC() {
      return gS;
    }
    function ZT() {
      Am = !0;
    }
    function eb() {
      gS = !1, Am = !1;
    }
    function tb() {
      gS = Am, Am = !1;
    }
    function jC() {
      return zC;
    }
    function FC() {
      zC = Iu();
    }
    function SS(e) {
      Ap = Iu(), e.actualStartTime < 0 && (e.actualStartTime = Iu());
    }
    function PC(e) {
      Ap = -1;
    }
    function jm(e, t) {
      if (Ap >= 0) {
        var a = Iu() - Ap;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ap = -1;
      }
    }
    function Yl(e) {
      if (Um >= 0) {
        var t = Iu() - Um;
        Um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ke:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function ES(e) {
      if (zm >= 0) {
        var t = Iu() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ke:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Wl() {
      Um = Iu();
    }
    function CS() {
      zm = Iu();
    }
    function RS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = ht({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var xS = {}, wS, TS, bS, _S, DS, HC, Fm, kS, OS, NS, jp;
    {
      wS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), jp = /* @__PURE__ */ new Set();
      var VC = /* @__PURE__ */ new Set();
      Fm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          VC.has(a) || (VC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, HC = function(e, t) {
        if (t === void 0) {
          var a = bt(e) || "Component";
          DS.has(a) || (DS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(xS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(xS);
    }
    function LS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Et) {
          Pn(!0);
          try {
            s = a(i, o);
          } finally {
            Pn(!1);
          }
        }
        HC(t, s);
      }
      var f = s == null ? o : ht({}, o, s);
      if (e.memoizedState = f, e.lanes === te) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var MS = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = za(e), o = _a(), s = Gu(i), f = No(o, s);
        f.payload = t, a != null && (Fm(a, "setState"), f.callback = a);
        var p = Hu(i, f, s);
        p !== null && (mr(p, i, s, o), pm(p, i, s)), xs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = za(e), o = _a(), s = Gu(i), f = No(o, s);
        f.tag = aC, f.payload = t, a != null && (Fm(a, "replaceState"), f.callback = a);
        var p = Hu(i, f, s);
        p !== null && (mr(p, i, s, o), pm(p, i, s)), xs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = za(e), i = _a(), o = Gu(a), s = No(i, o);
        s.tag = cm, t != null && (Fm(t, "forceUpdate"), s.callback = t);
        var f = Hu(a, s, o);
        f !== null && (mr(f, a, o, i), pm(f, a, o)), Uc(a, o);
      }
    };
    function BC(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Et) {
            Pn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pn(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ze(a, i) || !Ze(o, s) : !0;
    }
    function nb(e, t, a) {
      var i = e.stateNode;
      {
        var o = bt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !jp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Et) === ze && (jp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !jp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Et) === ze && (jp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !OS.has(t) && (OS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !bS.has(t) && (bS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || _t(p)) && y("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function $C(e, t) {
      t.updater = MS, e.stateNode = t, ru(t, e), t._reactInternalInstance = xS;
    }
    function IC(e, t, a) {
      var i = !1, o = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === re && f._context === void 0
        );
        if (!p && !NS.has(t)) {
          NS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === b ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        o = Df(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? kf(e, o) : ci;
      }
      var R = new t(a, s);
      if (e.mode & Et) {
        Pn(!0);
        try {
          R = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var N = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      $C(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var k = bt(t) || "Component";
          TS.has(k) || (TS.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, R.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, Q = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), V !== null || I !== null || Q !== null) {
            var Ce = bt(t) || "Component", Ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _S.has(Ce) || (_S.add(Ce), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ce, Ye, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return i && ME(e, o, s), R;
    }
    function rb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", at(e) || "Component"), MS.enqueueReplaceState(t, t.state, null));
    }
    function YC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = at(e) || "Component";
          wS.has(s) || (wS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        MS.enqueueReplaceState(t, t.state, null);
      }
    }
    function US(e, t, a, i) {
      nb(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, $g(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ar(s);
      else {
        var f = Df(e, t, !0);
        o.context = kf(e, f);
      }
      {
        if (o.state === a) {
          var p = bt(t) || "Component";
          kS.has(p) || (kS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Et && rl.recordLegacyContextWarning(e, o), rl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (LS(e, t, v, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (rb(e, o), vm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var E = ct;
        E |= ea, (e.mode & xa) !== ze && (E |= ta), e.flags |= E;
      }
    }
    function ab(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, v = ci;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var E = Df(e, t, !0);
        v = kf(e, E);
      }
      var R = t.getDerivedStateFromProps, N = typeof R == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !N && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== v) && YC(e, o, a, v), lC();
      var k = e.memoizedState, V = o.state = k;
      if (vm(e, a, o, i), V = e.memoizedState, s === a && k === V && !qh() && !hm()) {
        if (typeof o.componentDidMount == "function") {
          var I = ct;
          I |= ea, (e.mode & xa) !== ze && (I |= ta), e.flags |= I;
        }
        return !1;
      }
      typeof R == "function" && (LS(e, t, R, a), V = e.memoizedState);
      var Q = hm() || BC(e, t, s, a, k, V, v);
      if (Q) {
        if (!N && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ce = ct;
          Ce |= ea, (e.mode & xa) !== ze && (Ce |= ta), e.flags |= Ce;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Ye = ct;
          Ye |= ea, (e.mode & xa) !== ze && (Ye |= ta), e.flags |= Ye;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return o.props = a, o.state = V, o.context = v, Q;
    }
    function ib(e, t, a, i, o) {
      var s = t.stateNode;
      iC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, E = s.context, R = a.contextType, N = ci;
      if (typeof R == "object" && R !== null)
        N = ar(R);
      else {
        var k = Df(t, a, !0);
        N = kf(t, k);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || E !== N) && YC(t, s, i, N), lC();
      var Q = t.memoizedState, Ce = s.state = Q;
      if (vm(t, i, s, o), Ce = t.memoizedState, f === v && Q === Ce && !qh() && !hm() && !Ve)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Aa), !1;
      typeof V == "function" && (LS(t, a, V, i), Ce = t.memoizedState);
      var Ye = hm() || BC(t, a, p, i, Q, Ce, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return Ye ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ce, N), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ce, N)), typeof s.componentDidUpdate == "function" && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Aa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Aa), t.memoizedProps = i, t.memoizedState = Ce), s.props = i, s.state = Ce, s.context = N, Ye;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Io(t),
        digest: null
      };
    }
    function zS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function lb(e, t) {
      return !0;
    }
    function AS(e, t) {
      try {
        var a = lb(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === H)
            return;
          console.error(i);
        }
        var p = o ? at(o) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === F)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = at(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var N = v + `
` + f + `

` + ("" + E);
        console.error(N);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var ob = typeof WeakMap == "function" ? WeakMap : Map;
    function WC(e, t, a) {
      var i = No(on, a);
      i.tag = Vg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        Z_(o), AS(e, t);
      }, i;
    }
    function jS(e, t, a) {
      var i = No(on, a);
      i.tag = Vg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          rR(e), AS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        rR(e), AS(e, t), typeof o != "function" && X_(this);
        var v = t.value, E = t.stack;
        this.componentDidCatch(v, {
          componentStack: E !== null ? E : ""
        }), typeof o != "function" && (oa(e.lanes, $e) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", at(e) || "Unknown"));
      }), i;
    }
    function QC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new ob(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = eD.bind(null, e, t, a);
        Ra && ev(e, a), t.then(s, s);
      }
    }
    function ub(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function sb(e, t) {
      var a = e.tag;
      if ((e.mode & Pe) === ze && (a === z || a === le || a === Qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function GC(e) {
      var t = e;
      do {
        if (t.tag === De && $T(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function qC(e, t, a, i, o) {
      if ((e.mode & Pe) === ze) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= nt, a.flags |= Es, a.flags &= ~(Rc | Sa), a.tag === H) {
            var s = a.alternate;
            if (s === null)
              a.tag = mn;
            else {
              var f = No(on, $e);
              f.tag = cm, Hu(a, f, $e);
            }
          }
          a.lanes = ot(a.lanes, $e);
        }
        return e;
      }
      return e.flags |= er, e.lanes = o, e;
    }
    function cb(e, t, a, i, o) {
      if (a.flags |= Sa, Ra && ev(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        sb(a), Ar() && a.mode & Pe && HE();
        var f = GC(t);
        if (f !== null) {
          f.flags &= ~bn, qC(f, t, a, e, o), f.mode & Pe && QC(e, s, o), ub(f, e, s);
          return;
        } else {
          if (!Hd(o)) {
            QC(e, s, o), m0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & Pe) {
        HE();
        var v = GC(t);
        if (v !== null) {
          (v.flags & er) === Ie && (v.flags |= bn), qC(v, t, a, e, o), kg(ec(i, a));
          return;
        }
      }
      i = ec(i, a), $_(i);
      var E = t;
      do {
        switch (E.tag) {
          case F: {
            var R = i;
            E.flags |= er;
            var N = yu(o);
            E.lanes = ot(E.lanes, N);
            var k = WC(E, R, N);
            Ig(E, k);
            return;
          }
          case H:
            var V = i, I = E.type, Q = E.stateNode;
            if ((E.flags & nt) === Ie && (typeof I.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !G1(Q))) {
              E.flags |= er;
              var Ce = yu(o);
              E.lanes = ot(E.lanes, Ce);
              var Ye = jS(E, V, Ce);
              Ig(E, Ye);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function fb() {
      return null;
    }
    var Fp = S.ReactCurrentOwner, ol = !1, FS, Pp, PS, HS, VS, tc, BS, Pm, Hp;
    FS = {}, Pp = {}, PS = {}, HS = {}, VS = {}, tc = !1, BS = {}, Pm = {}, Hp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = JE(t, null, a, i) : t.child = Mf(t, e.child, a, i);
    }
    function db(e, t, a, i) {
      t.child = Mf(t, e.child, null, i), t.child = Mf(t, null, a, i);
    }
    function KC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var f = a.render, p = t.ref, v, E;
      zf(t, o), ou(t);
      {
        if (Fp.current = t, Xr(!0), v = Vf(e, t, f, i, p, o), E = Bf(), t.mode & Et) {
          Pn(!0);
          try {
            v = Vf(e, t, f, i, p, o), E = Bf();
          } finally {
            Pn(!1);
          }
        }
        Xr(!1);
      }
      return aa(), e !== null && !ol ? (dC(e, t, o), Lo(e, t, o)) : (Ar() && E && xg(t), t.flags |= Dl, Ta(e, t, v, o), t.child);
    }
    function XC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (yD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kf(s), t.tag = Qe, t.type = f, YS(t, s), JC(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            bt(s)
          ), a.defaultProps !== void 0) {
            var v = bt(s) || "Unknown";
            Hp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Hp[v] = !0);
          }
        }
        var E = _0(a.type, null, i, t, t.mode, o);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var R = a.type, N = R.propTypes;
        N && tl(
          N,
          i,
          // Resolved props
          "prop",
          bt(R)
        );
      }
      var k = e.child, V = XS(e, o);
      if (!V) {
        var I = k.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : Ze, Q(I, i) && e.ref === t.ref)
          return Lo(e, t, o);
      }
      t.flags |= Dl;
      var Ce = lc(k, i);
      return Ce.ref = t.ref, Ce.return = t, t.child = Ce, Ce;
    }
    function JC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && tl(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            bt(s)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (Ze(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = R, XS(e, o))
            (e.flags & Es) !== Ie && (ol = !0);
          else return t.lanes = e.lanes, Lo(e, t, o);
      }
      return $S(e, t, a, i, o);
    }
    function ZC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Se)
        if ((t.mode & Pe) === ze) {
          var f = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Jm(t, a);
        } else if (oa(a, wr)) {
          var N = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var k = s !== null ? s.baseLanes : a;
          Jm(t, k);
        } else {
          var p = null, v;
          if (s !== null) {
            var E = s.baseLanes;
            v = ot(E, a);
          } else
            v = a;
          t.lanes = t.childLanes = wr;
          var R = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, Jm(t, v), null;
        }
      else {
        var V;
        s !== null ? (V = ot(s.baseLanes, a), t.memoizedState = null) : V = a, Jm(t, V);
      }
      return Ta(e, t, o, a), t.child;
    }
    function pb(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function vb(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function hb(e, t, a) {
      {
        t.flags |= ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ta(e, t, s, a), t.child;
    }
    function e1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Zr, t.flags |= _d);
    }
    function $S(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var f;
      {
        var p = Df(t, a, !0);
        f = kf(t, p);
      }
      var v, E;
      zf(t, o), ou(t);
      {
        if (Fp.current = t, Xr(!0), v = Vf(e, t, a, i, f, o), E = Bf(), t.mode & Et) {
          Pn(!0);
          try {
            v = Vf(e, t, a, i, f, o), E = Bf();
          } finally {
            Pn(!1);
          }
        }
        Xr(!1);
      }
      return aa(), e !== null && !ol ? (dC(e, t, o), Lo(e, t, o)) : (Ar() && E && xg(t), t.flags |= Dl, Ta(e, t, v, o), t.child);
    }
    function t1(e, t, a, i, o) {
      {
        switch (LD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= nt, t.flags |= er;
            var E = new Error("Simulated error coming from DevTools"), R = yu(o);
            t.lanes = ot(t.lanes, R);
            var N = jS(t, ec(E, t), R);
            Ig(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && tl(
            k,
            i,
            // Resolved props
            "prop",
            bt(a)
          );
        }
      }
      var V;
      Vl(a) ? (V = !0, Xh(t)) : V = !1, zf(t, o);
      var I = t.stateNode, Q;
      I === null ? (Vm(e, t), IC(t, a, i), US(t, a, i, o), Q = !0) : e === null ? Q = ab(t, a, i, o) : Q = ib(e, t, a, i, o);
      var Ce = IS(e, t, a, Q, V, o);
      {
        var Ye = t.stateNode;
        Q && Ye.props !== i && (tc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", at(t) || "a component"), tc = !0);
      }
      return Ce;
    }
    function IS(e, t, a, i, o, s) {
      e1(e, t);
      var f = (t.flags & nt) !== Ie;
      if (!i && !f)
        return o && AE(t, a, !1), Lo(e, t, s);
      var p = t.stateNode;
      Fp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, PC();
      else {
        ou(t);
        {
          if (Xr(!0), v = p.render(), t.mode & Et) {
            Pn(!0);
            try {
              p.render();
            } finally {
              Pn(!1);
            }
          }
          Xr(!1);
        }
        aa();
      }
      return t.flags |= Dl, e !== null && f ? db(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, o && AE(t, a, !0), t.child;
    }
    function n1(e) {
      var t = e.stateNode;
      t.pendingContext ? UE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && UE(e, t.context, !1), Yg(e, t.containerInfo);
    }
    function mb(e, t, a) {
      if (n1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      iC(e, t), vm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = v, t.memoizedState = v, t.flags & bn) {
          var R = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return r1(e, t, p, a, R);
        } else if (p !== s) {
          var N = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return r1(e, t, p, a, N);
        } else {
          ST(t);
          var k = JE(t, null, p, a);
          t.child = k;
          for (var V = k; V; )
            V.flags = V.flags & ~sn | ja, V = V.sibling;
        }
      } else {
        if (Lf(), p === s)
          return Lo(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function r1(e, t, a, i, o) {
      return Lf(), kg(o), t.flags |= bn, Ta(e, t, a, i), t.child;
    }
    function yb(e, t, a) {
      sC(t), e === null && Dg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = sg(i, o);
      return p ? f = null : s !== null && sg(i, s) && (t.flags |= Qt), e1(e, t), Ta(e, t, f, a), t.child;
    }
    function gb(e, t) {
      return e === null && Dg(t), null;
    }
    function Sb(e, t, a, i) {
      Vm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var E = t.tag = gD(v), R = ll(v, o), N;
      switch (E) {
        case z:
          return YS(t, v), t.type = v = Kf(v), N = $S(null, t, v, R, i), N;
        case H:
          return t.type = v = C0(v), N = t1(null, t, v, R, i), N;
        case le:
          return t.type = v = R0(v), N = KC(null, t, v, R, i), N;
        case ut: {
          if (t.type !== t.elementType) {
            var k = v.propTypes;
            k && tl(
              k,
              R,
              // Resolved for outer only
              "prop",
              bt(v)
            );
          }
          return N = XC(
            null,
            t,
            v,
            ll(v.type, R),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var V = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ke && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function Eb(e, t, a, i, o) {
      Vm(e, t), t.tag = H;
      var s;
      return Vl(a) ? (s = !0, Xh(t)) : s = !1, zf(t, o), IC(t, a, i), US(t, a, i, o), IS(null, t, a, !0, s, o);
    }
    function Cb(e, t, a, i) {
      Vm(e, t);
      var o = t.pendingProps, s;
      {
        var f = Df(t, a, !1);
        s = kf(t, f);
      }
      zf(t, i);
      var p, v;
      ou(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = bt(a) || "Unknown";
          FS[E] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), FS[E] = !0);
        }
        t.mode & Et && rl.recordLegacyContextWarning(t, null), Xr(!0), Fp.current = t, p = Vf(null, t, a, o, s, i), v = Bf(), Xr(!1);
      }
      if (aa(), t.flags |= Dl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = bt(a) || "Unknown";
        Pp[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Pp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var N = bt(a) || "Unknown";
          Pp[N] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), Pp[N] = !0);
        }
        t.tag = H, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Vl(a) ? (k = !0, Xh(t)) : k = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, $g(t), $C(t, p), US(t, a, o, i), IS(null, t, a, !0, k, i);
      } else {
        if (t.tag = z, t.mode & Et) {
          Pn(!0);
          try {
            p = Vf(null, t, a, o, s, i), v = Bf();
          } finally {
            Pn(!1);
          }
        }
        return Ar() && v && xg(t), Ta(null, t, p, i), YS(t, a), t.child;
      }
    }
    function YS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), VS[o] || (VS[o] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = bt(t) || "Unknown";
          Hp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Hp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = bt(t) || "Unknown";
          HS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), HS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = bt(t) || "Unknown";
          PS[v] || (y("%s: Function components do not support contextType.", v), PS[v] = !0);
        }
      }
    }
    var WS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Hn
    };
    function QS(e) {
      return {
        baseLanes: e,
        cachePool: fb(),
        transitions: null
      };
    }
    function Rb(e, t) {
      var a = null;
      return {
        baseLanes: ot(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function xb(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return Gg(e, kp);
    }
    function wb(e, t) {
      return Os(e.childLanes, t);
    }
    function a1(e, t, a) {
      var i = t.pendingProps;
      MD(t) && (t.flags |= nt);
      var o = al.current, s = !1, f = (t.flags & nt) !== Ie;
      if (f || xb(o, e) ? (s = !0, t.flags &= ~nt) : (e === null || e.memoizedState !== null) && (o = BT(o, fC)), o = jf(o), Bu(t, o), e === null) {
        Dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return kb(t, v);
        }
        var E = i.children, R = i.fallback;
        if (s) {
          var N = Tb(t, E, R, a), k = t.child;
          return k.memoizedState = QS(a), t.memoizedState = WS, N;
        } else
          return GS(t, E);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return Ob(e, t, f, i, I, V, a);
        }
        if (s) {
          var Q = i.fallback, Ce = i.children, Ye = _b(e, t, Ce, Q, a), He = t.child, Ot = e.child.memoizedState;
          return He.memoizedState = Ot === null ? QS(a) : Rb(Ot, a), He.childLanes = wb(e, a), t.memoizedState = WS, Ye;
        } else {
          var xt = i.children, A = bb(e, t, xt, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function GS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = qS(o, i);
      return s.return = e, e.child = s, s;
    }
    function Tb(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (o & Pe) === ze && s !== null ? (p = s, p.childLanes = te, p.pendingProps = f, e.mode & rt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Ku(a, o, i, null)) : (p = qS(f, o), v = Ku(a, o, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function qS(e, t, a) {
      return iR(e, t, te, null);
    }
    function i1(e, t) {
      return lc(e, t);
    }
    function bb(e, t, a, i) {
      var o = e.child, s = o.sibling, f = i1(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Pe) === ze && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Vt) : p.push(s);
      }
      return t.child = f, f;
    }
    function _b(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Pe) === ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var R = t.child;
        E = R, E.childLanes = te, E.pendingProps = v, t.mode & rt && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = i1(f, v), E.subtreeFlags = f.subtreeFlags & lr;
      var N;
      return p !== null ? N = lc(p, i) : (N = Ku(i, s, o, null), N.flags |= sn), N.return = t, E.return = t, E.sibling = N, t.child = E, N;
    }
    function Hm(e, t, a, i) {
      i !== null && kg(i), Mf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = GS(t, s);
      return f.flags |= sn, t.memoizedState = null, f;
    }
    function Db(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = qS(f, s), v = Ku(i, s, o, null);
      return v.flags |= sn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Pe) !== ze && Mf(t, e.child, null, o), v;
    }
    function kb(e, t, a) {
      return (e.mode & Pe) === ze ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = $e) : pg(t) ? e.lanes = Ki : e.lanes = wr, null;
    }
    function Ob(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & bn) {
          t.flags &= ~bn;
          var A = zS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hm(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= nt, null;
          var G = i.children, j = i.fallback, ue = Db(e, t, G, j, f), Te = t.child;
          return Te.memoizedState = QS(f), t.memoizedState = WS, ue;
        }
      else {
        if (yT(), (t.mode & Pe) === ze)
          return Hm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (pg(o)) {
          var p, v, E;
          {
            var R = Uw(o);
            p = R.digest, v = R.message, E = R.stack;
          }
          var N;
          v ? N = new Error(v) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = zS(N, p, E);
          return Hm(e, t, f, k);
        }
        var V = oa(f, e.childLanes);
        if (ol || V) {
          var I = Xm();
          if (I !== null) {
            var Q = dh(I, f);
            if (Q !== Hn && Q !== s.retryLane) {
              s.retryLane = Q;
              var Ce = on;
              qa(e, Q), mr(I, e, Q, Ce);
            }
          }
          m0();
          var Ye = zS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hm(e, t, f, Ye);
        } else if (DE(o)) {
          t.flags |= nt, t.child = e.child;
          var He = tD.bind(null, e);
          return zw(o, He), null;
        } else {
          ET(t, o, s.treeContext);
          var Ot = i.children, xt = GS(t, Ot);
          return xt.flags |= ja, xt;
        }
      }
    }
    function l1(e, t, a) {
      e.lanes = ot(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ot(i.lanes, t)), Pg(e.return, t, a);
    }
    function Nb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var o = i.memoizedState;
          o !== null && l1(i, a, e);
        } else if (i.tag === Nt)
          l1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Lb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Mb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !BS[e])
        if (BS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Ub(e, t) {
      e !== void 0 && !Pm[e] && (e !== "collapsed" && e !== "hidden" ? (Pm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Pm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function o1(e, t) {
      {
        var a = _t(e), i = !a && typeof Or(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function zb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!o1(e[a], a))
              return;
        } else {
          var i = Or(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!o1(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function KS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function u1(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      Mb(o), Ub(s, o), zb(f, o), Ta(e, t, f, a);
      var p = al.current, v = Gg(p, kp);
      if (v)
        p = qg(p, kp), t.flags |= nt;
      else {
        var E = e !== null && (e.flags & nt) !== Ie;
        E && Nb(t, t.child, a), p = jf(p);
      }
      if (Bu(t, p), (t.mode & Pe) === ze)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var R = Lb(t.child), N;
            R === null ? (N = t.child, t.child = null) : (N = R.sibling, R.sibling = null), KS(
              t,
              !1,
              // isBackwards
              N,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && gm(I) === null) {
                t.child = V;
                break;
              }
              var Q = V.sibling;
              V.sibling = k, k = V, V = Q;
            }
            KS(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            KS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ab(e, t, a) {
      Yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Mf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var s1 = !1;
    function jb(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || s1 || (s1 = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (tC(t, o, p), f !== null) {
        var E = f.value;
        if (Le(E, p)) {
          if (f.children === s.children && !qh())
            return Lo(e, t, a);
        } else
          MT(t, o, a);
      }
      var R = s.children;
      return Ta(e, t, R, a), t.child;
    }
    var c1 = !1;
    function Fb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (c1 || (c1 = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = ar(i);
      ou(t);
      var p;
      return Fp.current = t, Xr(!0), p = s(f), Xr(!1), aa(), t.flags |= Dl, Ta(e, t, p, a), t.child;
    }
    function Vp() {
      ol = !0;
    }
    function Vm(e, t) {
      (t.mode & Pe) === ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= sn);
    }
    function Lo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), PC(), Zp(t.lanes), oa(a, t.childLanes) ? (NT(e, t), t.child) : null;
    }
    function Pb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Vt) : s.push(e), a.flags |= sn, a;
      }
    }
    function XS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function Hb(e, t, a) {
      switch (t.tag) {
        case F:
          n1(t), t.stateNode, Lf();
          break;
        case Z:
          sC(t);
          break;
        case H: {
          var i = t.type;
          Vl(i) && Xh(t);
          break;
        }
        case X:
          Yg(t, t.stateNode.containerInfo);
          break;
        case ie: {
          var o = t.memoizedProps.value, s = t.type._context;
          tC(t, s, o);
          break;
        }
        case ke:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Bu(t, jf(al.current)), t.flags |= nt, null;
            var E = t.child, R = E.childLanes;
            if (oa(a, R))
              return a1(e, t, a);
            Bu(t, jf(al.current));
            var N = Lo(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Bu(t, jf(al.current));
          break;
        }
        case Nt: {
          var k = (e.flags & nt) !== Ie, V = oa(a, t.childLanes);
          if (k) {
            if (V)
              return u1(e, t, a);
            t.flags |= nt;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Bu(t, al.current), V)
            break;
          return null;
        }
        case Ge:
        case st:
          return t.lanes = te, ZC(e, t, a);
      }
      return Lo(e, t, a);
    }
    function f1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Pb(e, t, _0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = XS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & nt) === Ie)
            return ol = !1, Hb(e, t, a);
          (e.flags & Es) !== Ie ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Ar() && fT(t)) {
        var f = t.index, p = dT();
        PE(t, p, f);
      }
      switch (t.lanes = te, t.tag) {
        case J:
          return Cb(e, t, t.type, a);
        case qt: {
          var v = t.elementType;
          return Sb(e, t, v, a);
        }
        case z: {
          var E = t.type, R = t.pendingProps, N = t.elementType === E ? R : ll(E, R);
          return $S(e, t, E, N, a);
        }
        case H: {
          var k = t.type, V = t.pendingProps, I = t.elementType === k ? V : ll(k, V);
          return t1(e, t, k, I, a);
        }
        case F:
          return mb(e, t, a);
        case Z:
          return yb(e, t, a);
        case he:
          return gb(e, t);
        case De:
          return a1(e, t, a);
        case X:
          return Ab(e, t, a);
        case le: {
          var Q = t.type, Ce = t.pendingProps, Ye = t.elementType === Q ? Ce : ll(Q, Ce);
          return KC(e, t, Q, Ye, a);
        }
        case _e:
          return pb(e, t, a);
        case ge:
          return vb(e, t, a);
        case ke:
          return hb(e, t, a);
        case ie:
          return jb(e, t, a);
        case je:
          return Fb(e, t, a);
        case ut: {
          var He = t.type, Ot = t.pendingProps, xt = ll(He, Ot);
          if (t.type !== t.elementType) {
            var A = He.propTypes;
            A && tl(
              A,
              xt,
              // Resolved for outer only
              "prop",
              bt(He)
            );
          }
          return xt = ll(He.type, xt), XC(e, t, He, xt, a);
        }
        case Qe:
          return JC(e, t, t.type, t.pendingProps, a);
        case mn: {
          var G = t.type, j = t.pendingProps, ue = t.elementType === G ? j : ll(G, j);
          return Eb(e, t, G, ue, a);
        }
        case Nt:
          return u1(e, t, a);
        case wn:
          break;
        case Ge:
          return ZC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $f(e) {
      e.flags |= ct;
    }
    function d1(e) {
      e.flags |= Zr, e.flags |= _d;
    }
    var p1, JS, v1, h1;
    p1 = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === Z || o.tag === he)
          uw(e, o.stateNode);
        else if (o.tag !== X) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, JS = function(e, t) {
    }, v1 = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Wg(), v = cw(f, a, s, i, o, p);
        t.updateQueue = v, v && $f(t);
      }
    }, h1 = function(e, t, a, i) {
      a !== i && $f(t);
    };
    function Bp(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = te, i = Ie;
      if (t) {
        if ((e.mode & rt) !== ze) {
          for (var v = e.selfBaseDuration, E = e.child; E !== null; )
            a = ot(a, ot(E.lanes, E.childLanes)), i |= E.subtreeFlags & lr, i |= E.flags & lr, v += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = v;
        } else
          for (var R = e.child; R !== null; )
            a = ot(a, ot(R.lanes, R.childLanes)), i |= R.subtreeFlags & lr, i |= R.flags & lr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & rt) !== ze) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ot(a, ot(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ot(a, ot(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vb(e, t, a) {
      if (TT() && (t.mode & Pe) !== ze && (t.flags & nt) === Ie)
        return WE(t), Lf(), t.flags |= bn | Sa | er, !1;
      var i = nm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (xT(t), Fr(t), (t.mode & rt) !== ze) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lf(), (t.flags & nt) === Ie && (t.memoizedState = null), t.flags |= ct, Fr(t), (t.mode & rt) !== ze) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return QE(), !0;
    }
    function m1(e, t, a) {
      var i = t.pendingProps;
      switch (wg(t), t.tag) {
        case J:
        case qt:
        case Qe:
        case z:
        case le:
        case _e:
        case ge:
        case ke:
        case je:
        case ut:
          return Fr(t), null;
        case H: {
          var o = t.type;
          return Vl(o) && Kh(t), Fr(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (Af(t), Eg(t), Xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = nm(t);
            if (f)
              $f(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & bn) !== Ie) && (t.flags |= Aa, QE());
            }
          }
          return JS(e, t), Fr(t), null;
        }
        case Z: {
          Qg(t);
          var v = uC(), E = t.type;
          if (e !== null && t.stateNode != null)
            v1(e, t, E, i, v), e.ref !== t.ref && d1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var R = Wg(), N = nm(t);
            if (N)
              CT(t, v, R) && $f(t);
            else {
              var k = ow(E, i, v, R, t);
              p1(k, t, !1, !1), t.stateNode = k, sw(k, E, i, v) && $f(t);
            }
            t.ref !== null && d1(t);
          }
          return Fr(t), null;
        }
        case he: {
          var V = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            h1(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = uC(), Ce = Wg(), Ye = nm(t);
            Ye ? RT(t) && $f(t) : t.stateNode = fw(V, Q, Ce, t);
          }
          return Fr(t), null;
        }
        case De: {
          Ff(t);
          var He = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = Vb(e, t, He);
            if (!Ot)
              return t.flags & er ? t : null;
          }
          if ((t.flags & nt) !== Ie)
            return t.lanes = a, (t.mode & rt) !== ze && RS(t), t;
          var xt = He !== null, A = e !== null && e.memoizedState !== null;
          if (xt !== A && xt) {
            var G = t.child;
            if (G.flags |= kl, (t.mode & Pe) !== ze) {
              var j = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !M);
              j || Gg(al.current, fC) ? B_() : m0();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= ct), Fr(t), (t.mode & rt) !== ze && xt) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case X:
          return Af(t), JS(e, t), e === null && aT(t.stateNode.containerInfo), Fr(t), null;
        case ie:
          var Re = t.type._context;
          return Fg(Re, t), Fr(t), null;
        case mn: {
          var tt = t.type;
          return Vl(tt) && Kh(t), Fr(t), null;
        }
        case Nt: {
          Ff(t);
          var lt = t.memoizedState;
          if (lt === null)
            return Fr(t), null;
          var Zt = (t.flags & nt) !== Ie, Ft = lt.rendering;
          if (Ft === null)
            if (Zt)
              Bp(lt, !1);
            else {
              var Gn = I_() && (e === null || (e.flags & nt) === Ie);
              if (!Gn)
                for (var Pt = t.child; Pt !== null; ) {
                  var Vn = gm(Pt);
                  if (Vn !== null) {
                    Zt = !0, t.flags |= nt, Bp(lt, !1);
                    var da = Vn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= ct), t.subtreeFlags = Ie, LT(t, a), Bu(t, qg(al.current, kp)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              lt.tail !== null && Cn() > j1() && (t.flags |= nt, Zt = !0, Bp(lt, !1), t.lanes = th);
            }
          else {
            if (!Zt) {
              var $r = gm(Ft);
              if ($r !== null) {
                t.flags |= nt, Zt = !0;
                var di = $r.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= ct), Bp(lt, !0), lt.tail === null && lt.tailMode === "hidden" && !Ft.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Cn() * 2 - lt.renderingStartTime > j1() && a !== wr && (t.flags |= nt, Zt = !0, Bp(lt, !1), t.lanes = th);
            }
            if (lt.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var Da = lt.last;
              Da !== null ? Da.sibling = Ft : t.child = Ft, lt.last = Ft;
            }
          }
          if (lt.tail !== null) {
            var ka = lt.tail;
            lt.rendering = ka, lt.tail = ka.sibling, lt.renderingStartTime = Cn(), ka.sibling = null;
            var pa = al.current;
            return Zt ? pa = qg(pa, kp) : pa = jf(pa), Bu(t, pa), ka;
          }
          return Fr(t), null;
        }
        case wn:
          break;
        case Ge:
        case st: {
          h0(t);
          var jo = t.memoizedState, Xf = jo !== null;
          if (e !== null) {
            var av = e.memoizedState, ql = av !== null;
            ql !== Xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Se && (t.flags |= kl);
          }
          return !Xf || (t.mode & Pe) === ze ? Fr(t) : oa(Gl, wr) && (Fr(t), t.subtreeFlags & (sn | ct) && (t.flags |= kl)), null;
        }
        case Bt:
          return null;
        case Lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bb(e, t, a) {
      switch (wg(t), t.tag) {
        case H: {
          var i = t.type;
          Vl(i) && Kh(t);
          var o = t.flags;
          return o & er ? (t.flags = o & ~er | nt, (t.mode & rt) !== ze && RS(t), t) : null;
        }
        case F: {
          t.stateNode, Af(t), Eg(t), Xg();
          var s = t.flags;
          return (s & er) !== Ie && (s & nt) === Ie ? (t.flags = s & ~er | nt, t) : null;
        }
        case Z:
          return Qg(t), null;
        case De: {
          Ff(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | nt, (t.mode & rt) !== ze && RS(t), t) : null;
        }
        case Nt:
          return Ff(t), null;
        case X:
          return Af(t), null;
        case ie:
          var v = t.type._context;
          return Fg(v, t), null;
        case Ge:
        case st:
          return h0(t), null;
        case Bt:
          return null;
        default:
          return null;
      }
    }
    function y1(e, t, a) {
      switch (wg(t), t.tag) {
        case H: {
          var i = t.type.childContextTypes;
          i != null && Kh(t);
          break;
        }
        case F: {
          t.stateNode, Af(t), Eg(t), Xg();
          break;
        }
        case Z: {
          Qg(t);
          break;
        }
        case X:
          Af(t);
          break;
        case De:
          Ff(t);
          break;
        case Nt:
          Ff(t);
          break;
        case ie:
          var o = t.type._context;
          Fg(o, t);
          break;
        case Ge:
        case st:
          h0(t);
          break;
      }
    }
    var g1 = null;
    g1 = /* @__PURE__ */ new Set();
    var Bm = !1, Pr = !1, $b = typeof WeakSet == "function" ? WeakSet : Set, Me = null, If = null, Yf = null;
    function Ib(e) {
      oo(null, function() {
        throw e;
      }), Td();
    }
    var Yb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & rt)
        try {
          Wl(), t.componentWillUnmount();
        } finally {
          Yl(e);
        }
      else
        t.componentWillUnmount();
    };
    function S1(e, t) {
      try {
        Yu(cr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function ZS(e, t, a) {
      try {
        Yb(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function Wb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function E1(e, t) {
      try {
        R1(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function Wf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ft && wt && e.mode & rt)
              try {
                Wl(), i = a(null);
              } finally {
                Yl(e);
              }
            else
              i = a(null);
          } catch (o) {
            dn(e, t, o);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          a.current = null;
    }
    function $m(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var C1 = !1;
    function Qb(e, t) {
      iw(e.containerInfo), Me = t, Gb();
      var a = C1;
      return C1 = !1, a;
    }
    function Gb() {
      for (; Me !== null; ) {
        var e = Me, t = e.child;
        (e.subtreeFlags & au) !== Ie && t !== null ? (t.return = e, Me = t) : qb();
      }
    }
    function qb() {
      for (; Me !== null; ) {
        var e = Me;
        Wt(e);
        try {
          Kb(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Me = t;
          return;
        }
        Me = e.return;
      }
    }
    function Kb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Aa) !== Ie) {
        switch (Wt(e), e.tag) {
          case z:
          case le:
          case Qe:
            break;
          case H: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), o);
              {
                var p = g1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", at(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case F: {
            {
              var v = e.stateNode;
              Ow(v.containerInfo);
            }
            break;
          }
          case Z:
          case he:
          case X:
          case mn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function ul(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ka ? Jv(t) : (e & cr) !== Ka && si(t), (e & Bl) !== Ka && tv(!0), $m(t, a, p), (e & Bl) !== Ka && tv(!1), (e & jr) !== Ka ? Nc() : (e & cr) !== Ka && uu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Yu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ka ? Ll(t) : (e & cr) !== Ka && Zv(t);
            var f = s.create;
            (e & Bl) !== Ka && tv(!0), s.destroy = f(), (e & Bl) !== Ka && tv(!1), (e & jr) !== Ka ? Oc() : (e & cr) !== Ka && Cs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & cr) !== Ie ? v = "useLayoutEffect" : (s.tag & Bl) !== Ie ? v = "useInsertionEffect" : v = "useEffect";
                var E = void 0;
                p === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? E = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, E);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function Xb(e, t) {
      if ((t.flags & ct) !== Ie)
        switch (t.tag) {
          case ke: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = jC(), p = t.alternate === null ? "mount" : "update";
            AC() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case F:
                  var E = v.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
                case ke:
                  var R = v.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Jb(e, t, a, i) {
      if ((a.flags & Rr) !== Ie)
        switch (a.tag) {
          case z:
          case le:
          case Qe: {
            if (!Pr)
              if (a.mode & rt)
                try {
                  Wl(), Yu(cr | sr, a);
                } finally {
                  Yl(a);
                }
              else
                Yu(cr | sr, a);
            break;
          }
          case H: {
            var o = a.stateNode;
            if (a.flags & ct && !Pr)
              if (t === null)
                if (a.type === a.elementType && !tc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), a.mode & rt)
                  try {
                    Wl(), o.componentDidMount();
                  } finally {
                    Yl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), a.mode & rt)
                  try {
                    Wl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Yl(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !tc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), oC(a, p, o));
            break;
          }
          case F: {
            var v = a.updateQueue;
            if (v !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    E = a.child.stateNode;
                    break;
                  case H:
                    E = a.child.stateNode;
                    break;
                }
              oC(a, v, E);
            }
            break;
          }
          case Z: {
            var R = a.stateNode;
            if (t === null && a.flags & ct) {
              var N = a.type, k = a.memoizedProps;
              mw(R, N, k);
            }
            break;
          }
          case he:
            break;
          case X:
            break;
          case ke: {
            {
              var V = a.memoizedProps, I = V.onCommit, Q = V.onRender, Ce = a.stateNode.effectDuration, Ye = jC(), He = t === null ? "mount" : "update";
              AC() && (He = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, He, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ye);
              {
                typeof I == "function" && I(a.memoizedProps.id, He, Ce, Ye), q_(a);
                var Ot = a.return;
                e: for (; Ot !== null; ) {
                  switch (Ot.tag) {
                    case F:
                      var xt = Ot.stateNode;
                      xt.effectDuration += Ce;
                      break e;
                    case ke:
                      var A = Ot.stateNode;
                      A.effectDuration += Ce;
                      break e;
                  }
                  Ot = Ot.return;
                }
              }
            }
            break;
          }
          case De: {
            l_(e, a);
            break;
          }
          case Nt:
          case mn:
          case wn:
          case Ge:
          case st:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Zr && R1(a);
    }
    function Zb(e) {
      switch (e.tag) {
        case z:
        case le:
        case Qe: {
          if (e.mode & rt)
            try {
              Wl(), S1(e, e.return);
            } finally {
              Yl(e);
            }
          else
            S1(e, e.return);
          break;
        }
        case H: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Wb(e, e.return, t), E1(e, e.return);
          break;
        }
        case Z: {
          E1(e, e.return);
          break;
        }
      }
    }
    function e_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? bw(o) : Dw(i.stateNode, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
          }
        } else if (i.tag === he) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _w(s) : kw(s, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
        } else if (!((i.tag === Ge || i.tag === st) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function R1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & rt)
            try {
              Wl(), o = t(i);
            } finally {
              Yl(e);
            }
          else
            o = t(i);
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", at(e)), t.current = i;
      }
    }
    function t_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function x1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, x1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && oT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function n_(e) {
      for (var t = e.return; t !== null; ) {
        if (w1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function w1(e) {
      return e.tag === Z || e.tag === F || e.tag === X;
    }
    function T1(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || w1(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== he && t.tag !== Ut; ) {
          if (t.flags & sn || t.child === null || t.tag === X)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & sn))
          return t.stateNode;
      }
    }
    function r_(e) {
      var t = n_(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & Qt && (_E(a), t.flags &= ~Qt);
          var i = T1(e);
          t0(e, i, a);
          break;
        }
        case F:
        case X: {
          var o = t.stateNode.containerInfo, s = T1(e);
          e0(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function e0(e, t, a) {
      var i = e.tag, o = i === Z || i === he;
      if (o) {
        var s = e.stateNode;
        t ? Rw(a, s, t) : Ew(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          e0(f, t, a);
          for (var p = f.sibling; p !== null; )
            e0(p, t, a), p = p.sibling;
        }
      }
    }
    function t0(e, t, a) {
      var i = e.tag, o = i === Z || i === he;
      if (o) {
        var s = e.stateNode;
        t ? Cw(a, s, t) : Sw(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          t0(f, t, a);
          for (var p = f.sibling; p !== null; )
            t0(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, sl = !1;
    function a_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              Hr = i.stateNode, sl = !1;
              break e;
            }
            case F: {
              Hr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case X: {
              Hr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        b1(e, t, a), Hr = null, sl = !1;
      }
      t_(a);
    }
    function Wu(e, t, a) {
      for (var i = a.child; i !== null; )
        b1(e, t, i), i = i.sibling;
    }
    function b1(e, t, a) {
      switch (co(a), a.tag) {
        case Z:
          Pr || Wf(a, t);
        case he: {
          {
            var i = Hr, o = sl;
            Hr = null, Wu(e, t, a), Hr = i, sl = o, Hr !== null && (sl ? ww(Hr, a.stateNode) : xw(Hr, a.stateNode));
          }
          return;
        }
        case Ut: {
          Hr !== null && (sl ? Tw(Hr, a.stateNode) : dg(Hr, a.stateNode));
          return;
        }
        case X: {
          {
            var s = Hr, f = sl;
            Hr = a.stateNode.containerInfo, sl = !0, Wu(e, t, a), Hr = s, sl = f;
          }
          return;
        }
        case z:
        case le:
        case ut:
        case Qe: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var E = v.next, R = E;
                do {
                  var N = R, k = N.destroy, V = N.tag;
                  k !== void 0 && ((V & Bl) !== Ka ? $m(a, t, k) : (V & cr) !== Ka && (si(a), a.mode & rt ? (Wl(), $m(a, t, k), Yl(a)) : $m(a, t, k), uu())), R = R.next;
                } while (R !== E);
              }
            }
          }
          Wu(e, t, a);
          return;
        }
        case H: {
          if (!Pr) {
            Wf(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && ZS(a, t, I);
          }
          Wu(e, t, a);
          return;
        }
        case wn: {
          Wu(e, t, a);
          return;
        }
        case Ge: {
          if (
            // TODO: Remove this dead flag
            a.mode & Pe
          ) {
            var Q = Pr;
            Pr = Q || a.memoizedState !== null, Wu(e, t, a), Pr = Q;
          } else
            Wu(e, t, a);
          break;
        }
        default: {
          Wu(e, t, a);
          return;
        }
      }
    }
    function i_(e) {
      e.memoizedState;
    }
    function l_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && Iw(s);
          }
        }
      }
    }
    function _1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new $b()), t.forEach(function(i) {
          var o = nD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ra)
              if (If !== null && Yf !== null)
                ev(Yf, If);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function o_(e, t, a) {
      If = a, Yf = e, Wt(t), D1(t, e), Wt(t), If = null, Yf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            a_(e, t, s);
          } catch (v) {
            dn(s, t, v);
          }
        }
      var f = uc();
      if (t.subtreeFlags & na)
        for (var p = t.child; p !== null; )
          Wt(p), D1(p, e), p = p.sibling;
      Wt(f);
    }
    function D1(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case z:
        case le:
        case ut:
        case Qe: {
          if (cl(t, e), Ql(e), o & ct) {
            try {
              ul(Bl | sr, e, e.return), Yu(Bl | sr, e);
            } catch (tt) {
              dn(e, e.return, tt);
            }
            if (e.mode & rt) {
              try {
                Wl(), ul(cr | sr, e, e.return);
              } catch (tt) {
                dn(e, e.return, tt);
              }
              Yl(e);
            } else
              try {
                ul(cr | sr, e, e.return);
              } catch (tt) {
                dn(e, e.return, tt);
              }
          }
          return;
        }
        case H: {
          cl(t, e), Ql(e), o & Zr && i !== null && Wf(i, i.return);
          return;
        }
        case Z: {
          cl(t, e), Ql(e), o & Zr && i !== null && Wf(i, i.return);
          {
            if (e.flags & Qt) {
              var s = e.stateNode;
              try {
                _E(s);
              } catch (tt) {
                dn(e, e.return, tt);
              }
            }
            if (o & ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, E = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    yw(f, R, E, v, p, e);
                  } catch (tt) {
                    dn(e, e.return, tt);
                  }
              }
            }
          }
          return;
        }
        case he: {
          if (cl(t, e), Ql(e), o & ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, k = e.memoizedProps, V = i !== null ? i.memoizedProps : k;
            try {
              gw(N, V, k);
            } catch (tt) {
              dn(e, e.return, tt);
            }
          }
          return;
        }
        case F: {
          if (cl(t, e), Ql(e), o & ct && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                $w(t.containerInfo);
              } catch (tt) {
                dn(e, e.return, tt);
              }
          }
          return;
        }
        case X: {
          cl(t, e), Ql(e);
          return;
        }
        case De: {
          cl(t, e), Ql(e);
          var Q = e.child;
          if (Q.flags & kl) {
            var Ce = Q.stateNode, Ye = Q.memoizedState, He = Ye !== null;
            if (Ce.isHidden = He, He) {
              var Ot = Q.alternate !== null && Q.alternate.memoizedState !== null;
              Ot || V_();
            }
          }
          if (o & ct) {
            try {
              i_(e);
            } catch (tt) {
              dn(e, e.return, tt);
            }
            _1(e);
          }
          return;
        }
        case Ge: {
          var xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Pe
          ) {
            var A = Pr;
            Pr = A || xt, cl(t, e), Pr = A;
          } else
            cl(t, e);
          if (Ql(e), o & kl) {
            var G = e.stateNode, j = e.memoizedState, ue = j !== null, Te = e;
            if (G.isHidden = ue, ue && !xt && (Te.mode & Pe) !== ze) {
              Me = Te;
              for (var Re = Te.child; Re !== null; )
                Me = Re, s_(Re), Re = Re.sibling;
            }
            e_(Te, ue);
          }
          return;
        }
        case Nt: {
          cl(t, e), Ql(e), o & ct && _1(e);
          return;
        }
        case wn:
          return;
        default: {
          cl(t, e), Ql(e);
          return;
        }
      }
    }
    function Ql(e) {
      var t = e.flags;
      if (t & sn) {
        try {
          r_(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~sn;
      }
      t & ja && (e.flags &= ~ja);
    }
    function u_(e, t, a) {
      If = a, Yf = t, Me = e, k1(e, t, a), If = null, Yf = null;
    }
    function k1(e, t, a) {
      for (var i = (e.mode & Pe) !== ze; Me !== null; ) {
        var o = Me, s = o.child;
        if (o.tag === Ge && i) {
          var f = o.memoizedState !== null, p = f || Bm;
          if (p) {
            n0(e, t, a);
            continue;
          } else {
            var v = o.alternate, E = v !== null && v.memoizedState !== null, R = E || Pr, N = Bm, k = Pr;
            Bm = p, Pr = R, Pr && !k && (Me = o, c_(o));
            for (var V = s; V !== null; )
              Me = V, k1(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Me = o, Bm = N, Pr = k, n0(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Rr) !== Ie && s !== null ? (s.return = o, Me = s) : n0(e, t, a);
      }
    }
    function n0(e, t, a) {
      for (; Me !== null; ) {
        var i = Me;
        if ((i.flags & Rr) !== Ie) {
          var o = i.alternate;
          Wt(i);
          try {
            Jb(t, o, i, a);
          } catch (f) {
            dn(i, i.return, f);
          }
          Tn();
        }
        if (i === e) {
          Me = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Me = s;
          return;
        }
        Me = i.return;
      }
    }
    function s_(e) {
      for (; Me !== null; ) {
        var t = Me, a = t.child;
        switch (t.tag) {
          case z:
          case le:
          case ut:
          case Qe: {
            if (t.mode & rt)
              try {
                Wl(), ul(cr, t, t.return);
              } finally {
                Yl(t);
              }
            else
              ul(cr, t, t.return);
            break;
          }
          case H: {
            Wf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && ZS(t, t.return, i);
            break;
          }
          case Z: {
            Wf(t, t.return);
            break;
          }
          case Ge: {
            var o = t.memoizedState !== null;
            if (o) {
              O1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Me = a) : O1(e);
      }
    }
    function O1(e) {
      for (; Me !== null; ) {
        var t = Me;
        if (t === e) {
          Me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Me = a;
          return;
        }
        Me = t.return;
      }
    }
    function c_(e) {
      for (; Me !== null; ) {
        var t = Me, a = t.child;
        if (t.tag === Ge) {
          var i = t.memoizedState !== null;
          if (i) {
            N1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Me = a) : N1(e);
      }
    }
    function N1(e) {
      for (; Me !== null; ) {
        var t = Me;
        Wt(t);
        try {
          Zb(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (Tn(), t === e) {
          Me = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Me = a;
          return;
        }
        Me = t.return;
      }
    }
    function f_(e, t, a, i) {
      Me = t, d_(t, e, a, i);
    }
    function d_(e, t, a, i) {
      for (; Me !== null; ) {
        var o = Me, s = o.child;
        (o.subtreeFlags & Fa) !== Ie && s !== null ? (s.return = o, Me = s) : p_(e, t, a, i);
      }
    }
    function p_(e, t, a, i) {
      for (; Me !== null; ) {
        var o = Me;
        if ((o.flags & pn) !== Ie) {
          Wt(o);
          try {
            v_(t, o, a, i);
          } catch (f) {
            dn(o, o.return, f);
          }
          Tn();
        }
        if (o === e) {
          Me = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Me = s;
          return;
        }
        Me = o.return;
      }
    }
    function v_(e, t, a, i) {
      switch (t.tag) {
        case z:
        case le:
        case Qe: {
          if (t.mode & rt) {
            CS();
            try {
              Yu(jr | sr, t);
            } finally {
              ES(t);
            }
          } else
            Yu(jr | sr, t);
          break;
        }
      }
    }
    function h_(e) {
      Me = e, m_();
    }
    function m_() {
      for (; Me !== null; ) {
        var e = Me, t = e.child;
        if ((Me.flags & Vt) !== Ie) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Me = o, S_(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Me = e;
          }
        }
        (e.subtreeFlags & Fa) !== Ie && t !== null ? (t.return = e, Me = t) : y_();
      }
    }
    function y_() {
      for (; Me !== null; ) {
        var e = Me;
        (e.flags & pn) !== Ie && (Wt(e), g_(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Me = t;
          return;
        }
        Me = e.return;
      }
    }
    function g_(e) {
      switch (e.tag) {
        case z:
        case le:
        case Qe: {
          e.mode & rt ? (CS(), ul(jr | sr, e, e.return), ES(e)) : ul(jr | sr, e, e.return);
          break;
        }
      }
    }
    function S_(e, t) {
      for (; Me !== null; ) {
        var a = Me;
        Wt(a), C_(a, t), Tn();
        var i = a.child;
        i !== null ? (i.return = a, Me = i) : E_(e);
      }
    }
    function E_(e) {
      for (; Me !== null; ) {
        var t = Me, a = t.sibling, i = t.return;
        if (x1(t), t === e) {
          Me = null;
          return;
        }
        if (a !== null) {
          a.return = i, Me = a;
          return;
        }
        Me = i;
      }
    }
    function C_(e, t) {
      switch (e.tag) {
        case z:
        case le:
        case Qe: {
          e.mode & rt ? (CS(), ul(jr, e, t), ES(e)) : ul(jr, e, t);
          break;
        }
      }
    }
    function R_(e) {
      switch (e.tag) {
        case z:
        case le:
        case Qe: {
          try {
            Yu(cr | sr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case H: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function x_(e) {
      switch (e.tag) {
        case z:
        case le:
        case Qe: {
          try {
            Yu(jr | sr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function w_(e) {
      switch (e.tag) {
        case z:
        case le:
        case Qe: {
          try {
            ul(cr | sr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case H: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ZS(e, e.return, t);
          break;
        }
      }
    }
    function T_(e) {
      switch (e.tag) {
        case z:
        case le:
        case Qe:
          try {
            ul(jr | sr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var $p = Symbol.for;
      $p("selector.component"), $p("selector.has_pseudo_class"), $p("selector.role"), $p("selector.test_id"), $p("selector.text");
    }
    var b_ = [];
    function __() {
      b_.forEach(function(e) {
        return e();
      });
    }
    var D_ = S.ReactCurrentActQueue;
    function k_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function L1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && D_.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var O_ = Math.ceil, r0 = S.ReactCurrentDispatcher, a0 = S.ReactCurrentOwner, Vr = S.ReactCurrentBatchConfig, fl = S.ReactCurrentActQueue, pr = (
      /*             */
      0
    ), M1 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Mo = 0, Ip = 1, nc = 2, Im = 3, Yp = 4, U1 = 5, i0 = 6, kt = pr, ba = null, zn = null, vr = te, Gl = te, l0 = Au(te), hr = Mo, Wp = null, Ym = te, Qp = te, Wm = te, Gp = null, Xa = null, o0 = 0, z1 = 500, A1 = 1 / 0, N_ = 500, Uo = null;
    function qp() {
      A1 = Cn() + N_;
    }
    function j1() {
      return A1;
    }
    var Qm = !1, u0 = null, Qf = null, rc = !1, Qu = null, Kp = te, s0 = [], c0 = null, L_ = 50, Xp = 0, f0 = null, d0 = !1, Gm = !1, M_ = 50, Gf = 0, qm = null, Jp = on, Km = te, F1 = !1;
    function Xm() {
      return ba;
    }
    function _a() {
      return (kt & (Br | Li)) !== pr ? Cn() : (Jp !== on || (Jp = Cn()), Jp);
    }
    function Gu(e) {
      var t = e.mode;
      if ((t & Pe) === ze)
        return $e;
      if ((kt & Br) !== pr && vr !== te)
        return yu(vr);
      var a = DT() !== _T;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Km === Hn && (Km = sh()), Km;
      }
      var o = $a();
      if (o !== Hn)
        return o;
      var s = dw();
      return s;
    }
    function U_(e) {
      var t = e.mode;
      return (t & Pe) === ze ? $e : la();
    }
    function mr(e, t, a, i) {
      aD(), F1 && y("useInsertionEffect must not schedule updates."), d0 && (Gm = !0), So(e, a, i), (kt & Br) !== te && e === ba ? oD(t) : (Ra && ef(e, t, a), uD(t), e === ba && ((kt & Br) === pr && (Qp = ot(Qp, a)), hr === Yp && qu(e, vr)), Ja(e, i), a === $e && kt === pr && (t.mode & Pe) === ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (qp(), FE()));
    }
    function z_(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Ja(e, a);
    }
    function A_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & Br) !== pr
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      ah(e, t);
      var i = yo(e, e === ba ? vr : te);
      if (i === te) {
        a !== null && eR(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var o = Ln(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== S0)) {
        a == null && s !== $e && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && eR(a);
      var f;
      if (o === $e)
        e.tag === ju ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), cT(V1.bind(null, e))) : jE(V1.bind(null, e)), fl.current !== null ? fl.current.push(Fu) : vw(function() {
          (kt & (Br | Li)) === pr && Fu();
        }), f = null;
      else {
        var p;
        switch (ur(i)) {
          case Mn:
            p = _c;
            break;
          case Xi:
            p = so;
            break;
          case xi:
            p = Ri;
            break;
          case gu:
            p = Dc;
            break;
          default:
            p = Ri;
            break;
        }
        f = E0(p, P1.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function P1(e, t) {
      if (eb(), Jp = on, Km = te, (kt & (Br | Li)) !== pr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ao();
      if (i && e.callbackNode !== a)
        return null;
      var o = yo(e, e === ba ? vr : te);
      if (o === te)
        return null;
      var s = !ks(e, o) && !uh(e, o) && !t, f = s ? W_(e, o) : Zm(e, o);
      if (f !== Mo) {
        if (f === nc) {
          var p = Ul(e);
          p !== te && (o = p, f = p0(e, p));
        }
        if (f === Ip) {
          var v = Wp;
          throw ac(e, te), qu(e, o), Ja(e, Cn()), v;
        }
        if (f === i0)
          qu(e, o);
        else {
          var E = !ks(e, o), R = e.current.alternate;
          if (E && !F_(R)) {
            if (f = Zm(e, o), f === nc) {
              var N = Ul(e);
              N !== te && (o = N, f = p0(e, N));
            }
            if (f === Ip) {
              var k = Wp;
              throw ac(e, te), qu(e, o), Ja(e, Cn()), k;
            }
          }
          e.finishedWork = R, e.finishedLanes = o, j_(e, f, o);
        }
      }
      return Ja(e, Cn()), e.callbackNode === a ? P1.bind(null, e) : null;
    }
    function p0(e, t) {
      var a = Gp;
      if (tf(e)) {
        var i = ac(e, t);
        i.flags |= bn, rT(e.containerInfo);
      }
      var o = Zm(e, t);
      if (o !== nc) {
        var s = Xa;
        Xa = a, s !== null && H1(s);
      }
      return o;
    }
    function H1(e) {
      Xa === null ? Xa = e : Xa.push.apply(Xa, e);
    }
    function j_(e, t, a) {
      switch (t) {
        case Mo:
        case Ip:
          throw new Error("Root did not complete. This is a bug in React.");
        case nc: {
          ic(e, Xa, Uo);
          break;
        }
        case Im: {
          if (qu(e, a), ih(a) && // do not delay if we're inside an act() scope
          !tR()) {
            var i = o0 + z1 - Cn();
            if (i > 10) {
              var o = yo(e, te);
              if (o !== te)
                break;
              var s = e.suspendedLanes;
              if (!go(s, a)) {
                _a(), Jc(e, s);
                break;
              }
              e.timeoutHandle = cg(ic.bind(null, e, Xa, Uo), i);
              break;
            }
          }
          ic(e, Xa, Uo);
          break;
        }
        case Yp: {
          if (qu(e, a), oh(a))
            break;
          if (!tR()) {
            var f = nh(e, a), p = f, v = Cn() - p, E = rD(v) - v;
            if (E > 10) {
              e.timeoutHandle = cg(ic.bind(null, e, Xa, Uo), E);
              break;
            }
          }
          ic(e, Xa, Uo);
          break;
        }
        case U1: {
          ic(e, Xa, Uo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function F_(e) {
      for (var t = e; ; ) {
        if (t.flags & Ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!Le(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Ss && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function qu(e, t) {
      t = Os(t, Wm), t = Os(t, Qp), fh(e, t);
    }
    function V1(e) {
      if (tb(), (kt & (Br | Li)) !== pr)
        throw new Error("Should not already be working.");
      Ao();
      var t = yo(e, te);
      if (!oa(t, $e))
        return Ja(e, Cn()), null;
      var a = Zm(e, t);
      if (e.tag !== ju && a === nc) {
        var i = Ul(e);
        i !== te && (t = i, a = p0(e, i));
      }
      if (a === Ip) {
        var o = Wp;
        throw ac(e, te), qu(e, t), Ja(e, Cn()), o;
      }
      if (a === i0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Xa, Uo), Ja(e, Cn()), null;
    }
    function P_(e, t) {
      t !== te && (Bd(e, ot(t, $e)), Ja(e, Cn()), (kt & (Br | Li)) === pr && (qp(), Fu()));
    }
    function v0(e, t) {
      var a = kt;
      kt |= M1;
      try {
        return e(t);
      } finally {
        kt = a, kt === pr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (qp(), FE());
      }
    }
    function H_(e, t, a, i, o) {
      var s = $a(), f = Vr.transition;
      try {
        return Vr.transition = null, _n(Mn), e(t, a, i, o);
      } finally {
        _n(s), Vr.transition = f, kt === pr && qp();
      }
    }
    function zo(e) {
      Qu !== null && Qu.tag === ju && (kt & (Br | Li)) === pr && Ao();
      var t = kt;
      kt |= M1;
      var a = Vr.transition, i = $a();
      try {
        return Vr.transition = null, _n(Mn), e ? e() : void 0;
      } finally {
        _n(i), Vr.transition = a, kt = t, (kt & (Br | Li)) === pr && Fu();
      }
    }
    function B1() {
      return (kt & (Br | Li)) !== pr;
    }
    function Jm(e, t) {
      ca(l0, Gl, e), Gl = ot(Gl, t);
    }
    function h0(e) {
      Gl = l0.current, sa(l0, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var a = e.timeoutHandle;
      if (a !== fg && (e.timeoutHandle = fg, pw(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var o = i.alternate;
          y1(o, i), i = i.return;
        }
      ba = e;
      var s = lc(e.current, null);
      return zn = s, vr = Gl = t, hr = Mo, Wp = null, Ym = te, Qp = te, Wm = te, Gp = null, Xa = null, zT(), rl.discardPendingWarnings(), s;
    }
    function $1(e, t) {
      do {
        var a = zn;
        try {
          if (um(), pC(), Tn(), a0.current = null, a === null || a.return === null) {
            hr = Ip, Wp = t, zn = null;
            return;
          }
          if (ft && a.mode & rt && jm(a, !0), dt)
            if (aa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              fo(a, i, vr);
            } else
              Rs(a, t, vr);
          cb(e, a.return, a, t, vr), Q1(a);
        } catch (o) {
          t = o, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function I1() {
      var e = r0.current;
      return r0.current = Lm, e === null ? Lm : e;
    }
    function Y1(e) {
      r0.current = e;
    }
    function V_() {
      o0 = Cn();
    }
    function Zp(e) {
      Ym = ot(e, Ym);
    }
    function B_() {
      hr === Mo && (hr = Im);
    }
    function m0() {
      (hr === Mo || hr === Im || hr === nc) && (hr = Yp), ba !== null && (Ds(Ym) || Ds(Qp)) && qu(ba, vr);
    }
    function $_(e) {
      hr !== Yp && (hr = nc), Gp === null ? Gp = [e] : Gp.push(e);
    }
    function I_() {
      return hr === Mo;
    }
    function Zm(e, t) {
      var a = kt;
      kt |= Br;
      var i = I1();
      if (ba !== e || vr !== t) {
        if (Ra) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (ev(e, vr), o.clear()), $d(e, t);
        }
        Uo = Ls(), ac(e, t);
      }
      vn(t);
      do
        try {
          Y_();
          break;
        } catch (s) {
          $1(e, s);
        }
      while (!0);
      if (um(), kt = a, Y1(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), ba = null, vr = te, hr;
    }
    function Y_() {
      for (; zn !== null; )
        W1(zn);
    }
    function W_(e, t) {
      var a = kt;
      kt |= Br;
      var i = I1();
      if (ba !== e || vr !== t) {
        if (Ra) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (ev(e, vr), o.clear()), $d(e, t);
        }
        Uo = Ls(), qp(), ac(e, t);
      }
      vn(t);
      do
        try {
          Q_();
          break;
        } catch (s) {
          $1(e, s);
        }
      while (!0);
      return um(), Y1(i), kt = a, zn !== null ? (Lc(), Mo) : (Mc(), ba = null, vr = te, hr);
    }
    function Q_() {
      for (; zn !== null && !bc(); )
        W1(zn);
    }
    function W1(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & rt) !== ze ? (SS(e), a = y0(t, e, Gl), jm(e, !0)) : a = y0(t, e, Gl), Tn(), e.memoizedProps = e.pendingProps, a === null ? Q1(e) : zn = a, a0.current = null;
    }
    function Q1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Sa) === Ie) {
          Wt(t);
          var o = void 0;
          if ((t.mode & rt) === ze ? o = m1(a, t, Gl) : (SS(t), o = m1(a, t, Gl), jm(t, !1)), Tn(), o !== null) {
            zn = o;
            return;
          }
        } else {
          var s = Bb(a, t);
          if (s !== null) {
            s.flags &= Yv, zn = s;
            return;
          }
          if ((t.mode & rt) !== ze) {
            jm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Sa, i.subtreeFlags = Ie, i.deletions = null;
          else {
            hr = i0, zn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          zn = v;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      hr === Mo && (hr = U1);
    }
    function ic(e, t, a) {
      var i = $a(), o = Vr.transition;
      try {
        Vr.transition = null, _n(Mn), G_(e, t, a, i);
      } finally {
        Vr.transition = o, _n(i);
      }
      return null;
    }
    function G_(e, t, a, i) {
      do
        Ao();
      while (Qu !== null);
      if (iD(), (kt & (Br | Li)) !== pr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Nl(s), o === null)
        return kc(), null;
      if (s === te && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = ot(o.lanes, o.childLanes);
      Zc(e, f), e === ba && (ba = null, zn = null, vr = te), ((o.subtreeFlags & Fa) !== Ie || (o.flags & Fa) !== Ie) && (rc || (rc = !0, c0 = a, E0(Ri, function() {
        return Ao(), null;
      })));
      var p = (o.subtreeFlags & (au | na | Rr | Fa)) !== Ie, v = (o.flags & (au | na | Rr | Fa)) !== Ie;
      if (p || v) {
        var E = Vr.transition;
        Vr.transition = null;
        var R = $a();
        _n(Mn);
        var N = kt;
        kt |= Li, a0.current = null, Qb(e, o), FC(), o_(e, o, s), lw(e.containerInfo), e.current = o, Ud(s), u_(o, e, s), su(), Gv(), kt = N, _n(R), Vr.transition = E;
      } else
        e.current = o, FC();
      var k = rc;
      if (rc ? (rc = !1, Qu = e, Kp = s) : (Gf = 0, qm = null), f = e.pendingLanes, f === te && (Qf = null), k || X1(e.current, !1), lu(o.stateNode, i), Ra && e.memoizedUpdaters.clear(), __(), Ja(e, Cn()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var Q = t[I], Ce = Q.stack, Ye = Q.digest;
          V(Q.value, {
            componentStack: Ce,
            digest: Ye
          });
        }
      if (Qm) {
        Qm = !1;
        var He = u0;
        throw u0 = null, He;
      }
      return oa(Kp, $e) && e.tag !== ju && Ao(), f = e.pendingLanes, oa(f, $e) ? (ZT(), e === f0 ? Xp++ : (Xp = 0, f0 = e)) : Xp = 0, Fu(), kc(), null;
    }
    function Ao() {
      if (Qu !== null) {
        var e = ur(Kp), t = zy(xi, e), a = Vr.transition, i = $a();
        try {
          return Vr.transition = null, _n(t), K_();
        } finally {
          _n(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function q_(e) {
      s0.push(e), rc || (rc = !0, E0(Ri, function() {
        return Ao(), null;
      }));
    }
    function K_() {
      if (Qu === null)
        return !1;
      var e = c0;
      c0 = null;
      var t = Qu, a = Kp;
      if (Qu = null, Kp = te, (kt & (Br | Li)) !== pr)
        throw new Error("Cannot flush passive effects while already rendering.");
      d0 = !0, Gm = !1, eh(a);
      var i = kt;
      kt |= Li, h_(t.current), f_(t, t.current, a, e);
      {
        var o = s0;
        s0 = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          Xb(t, f);
        }
      }
      zd(), X1(t.current, !0), kt = i, Fu(), Gm ? t === qm ? Gf++ : (Gf = 0, qm = t) : Gf = 0, d0 = !1, Gm = !1, Va(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function G1(e) {
      return Qf !== null && Qf.has(e);
    }
    function X_(e) {
      Qf === null ? Qf = /* @__PURE__ */ new Set([e]) : Qf.add(e);
    }
    function J_(e) {
      Qm || (Qm = !0, u0 = e);
    }
    var Z_ = J_;
    function q1(e, t, a) {
      var i = ec(a, t), o = WC(e, i, $e), s = Hu(e, o, $e), f = _a();
      s !== null && (So(s, $e, f), Ja(s, f));
    }
    function dn(e, t, a) {
      if (Ib(a), tv(!1), e.tag === F) {
        q1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          q1(i, e, a);
          return;
        } else if (i.tag === H) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !G1(s)) {
            var f = ec(a, e), p = jS(i, f, $e), v = Hu(i, p, $e), E = _a();
            v !== null && (So(v, $e, E), Ja(v, E));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function eD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = _a();
      Jc(e, a), sD(e), ba === e && go(vr, a) && (hr === Yp || hr === Im && ih(vr) && Cn() - o0 < z1 ? ac(e, te) : Wm = ot(Wm, a)), Ja(e, o);
    }
    function K1(e, t) {
      t === Hn && (t = U_(e));
      var a = _a(), i = qa(e, t);
      i !== null && (So(i, t, a), Ja(i, a));
    }
    function tD(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), K1(e, a);
    }
    function nD(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Nt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), K1(e, a);
    }
    function rD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : O_(e / 1960) * 1960;
    }
    function aD() {
      if (Xp > L_)
        throw Xp = 0, f0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Gf > M_ && (Gf = 0, qm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function iD() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function X1(e, t) {
      Wt(e), ey(e, ta, w_), t && ey(e, uo, T_), ey(e, ta, R_), t && ey(e, uo, x_), Tn();
    }
    function ey(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ie ? i = i.child : ((i.flags & t) !== Ie && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var ty = null;
    function J1(e) {
      {
        if ((kt & Br) !== pr || !(e.mode & Pe))
          return;
        var t = e.tag;
        if (t !== J && t !== F && t !== H && t !== z && t !== le && t !== ut && t !== Qe)
          return;
        var a = at(e) || "ReactComponent";
        if (ty !== null) {
          if (ty.has(a))
            return;
          ty.add(a);
        } else
          ty = /* @__PURE__ */ new Set([a]);
        var i = En;
        try {
          Wt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : Tn();
        }
      }
    }
    var y0;
    {
      var lD = null;
      y0 = function(e, t, a) {
        var i = lR(lD, t);
        try {
          return f1(e, t, a);
        } catch (s) {
          if (gT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (um(), pC(), y1(e, t), lR(t, i), t.mode & rt && SS(t), oo(null, f1, null, e, t, a), Oy()) {
            var o = Td();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var Z1 = !1, g0;
    g0 = /* @__PURE__ */ new Set();
    function oD(e) {
      if (Kr && !KT())
        switch (e.tag) {
          case z:
          case le:
          case Qe: {
            var t = zn && at(zn) || "Unknown", a = t;
            if (!g0.has(a)) {
              g0.add(a);
              var i = at(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case H: {
            Z1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Z1 = !0);
            break;
          }
        }
    }
    function ev(e, t) {
      if (Ra) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ef(e, i, t);
        });
      }
    }
    var S0 = {};
    function E0(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), S0) : Tc(e, t);
      }
    }
    function eR(e) {
      if (e !== S0)
        return Qv(e);
    }
    function tR() {
      return fl.current !== null;
    }
    function uD(e) {
      {
        if (e.mode & Pe) {
          if (!L1())
            return;
        } else if (!k_() || kt !== pr || e.tag !== z && e.tag !== le && e.tag !== Qe)
          return;
        if (fl.current === null) {
          var t = En;
          try {
            Wt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, at(e));
          } finally {
            t ? Wt(e) : Tn();
          }
        }
      }
    }
    function sD(e) {
      e.tag !== ju && L1() && fl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function tv(e) {
      F1 = e;
    }
    var Mi = null, qf = null, cD = function(e) {
      Mi = e;
    };
    function Kf(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function C0(e) {
      return Kf(e);
    }
    function R0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: se,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function nR(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case H: {
            typeof i == "function" && (o = !0);
            break;
          }
          case z: {
            (typeof i == "function" || s === Ke) && (o = !0);
            break;
          }
          case le: {
            (s === se || s === Ke) && (o = !0);
            break;
          }
          case ut:
          case Qe: {
            (s === Tt || s === Ke) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function rR(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        qf === null && (qf = /* @__PURE__ */ new WeakSet()), qf.add(e);
      }
    }
    var fD = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ao(), zo(function() {
          x0(e.current, i, a);
        });
      }
    }, dD = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Ao(), zo(function() {
          nv(t, e, null, null);
        });
      }
    };
    function x0(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case z:
          case Qe:
          case H:
            v = p;
            break;
          case le:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, R = !1;
        if (v !== null) {
          var N = Mi(v);
          N !== void 0 && (a.has(N) ? R = !0 : t.has(N) && (f === H ? R = !0 : E = !0));
        }
        if (qf !== null && (qf.has(e) || i !== null && qf.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || E) {
          var k = qa(e, $e);
          k !== null && mr(k, e, $e, on);
        }
        o !== null && !R && x0(o, t, a), s !== null && x0(s, t, a);
      }
    }
    var pD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return w0(e.current, i, a), a;
      }
    };
    function w0(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case z:
          case Qe:
          case H:
            p = f;
            break;
          case le:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? vD(e, a) : i !== null && w0(i, t, a), o !== null && w0(o, t, a);
      }
    }
    function vD(e, t) {
      {
        var a = hD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function hD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var T0;
    {
      T0 = !1;
      try {
        var aR = Object.preventExtensions({});
      } catch {
        T0 = !0;
      }
    }
    function mD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !T0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new mD(e, t, a, i);
    };
    function b0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yD(e) {
      return typeof e == "function" && !b0(e) && e.defaultProps === void 0;
    }
    function gD(e) {
      if (typeof e == "function")
        return b0(e) ? H : z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === se)
          return le;
        if (t === Tt)
          return ut;
      }
      return J;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ie, a.subtreeFlags = Ie, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & lr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case J:
        case z:
        case Qe:
          a.type = Kf(e.type);
          break;
        case H:
          a.type = C0(e.type);
          break;
        case le:
          a.type = R0(e.type);
          break;
      }
      return a;
    }
    function SD(e, t) {
      e.flags &= lr | sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Ie, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ie, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ED(e, t, a) {
      var i;
      return e === Jh ? (i = Pe, t === !0 && (i |= Et, i |= xa)) : i = ze, Ra && (i |= rt), fi(F, null, null, i);
    }
    function _0(e, t, a, i, o, s) {
      var f = J, p = e;
      if (typeof e == "function")
        b0(e) ? (f = H, p = C0(p)) : p = Kf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case ga:
            return Ku(a.children, o, s, t);
          case hi:
            f = ge, o |= Et, (o & Pe) !== ze && (o |= xa);
            break;
          case mi:
            return CD(a, o, s, t);
          case Fe:
            return RD(a, o, s, t);
          case Ct:
            return xD(a, o, s, t);
          case en:
            return iR(a, o, s, t);
          case un:
          case vt:
          case Cr:
          case yi:
          case jn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case b:
                  f = ie;
                  break e;
                case re:
                  f = je;
                  break e;
                case se:
                  f = le, p = R0(p);
                  break e;
                case Tt:
                  f = ut;
                  break e;
                case Ke:
                  f = qt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var E = i ? at(i) : null;
              E && (v += `

Check the render method of \`` + E + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var R = fi(f, a, t, o);
      return R.elementType = e, R.type = p, R.lanes = s, R._debugOwner = i, R;
    }
    function D0(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = _0(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ku(e, t, a, i) {
      var o = fi(_e, e, i, t);
      return o.lanes = a, o;
    }
    function CD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = fi(ke, e, i, t | rt);
      return o.elementType = mi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function RD(e, t, a, i) {
      var o = fi(De, e, i, t);
      return o.elementType = Fe, o.lanes = a, o;
    }
    function xD(e, t, a, i) {
      var o = fi(Nt, e, i, t);
      return o.elementType = Ct, o.lanes = a, o;
    }
    function iR(e, t, a, i) {
      var o = fi(Ge, e, i, t);
      o.elementType = en, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function k0(e, t, a) {
      var i = fi(he, e, null, t);
      return i.lanes = a, i;
    }
    function wD() {
      var e = fi(Z, null, null, ze);
      return e.elementType = "DELETED", e;
    }
    function TD(e) {
      var t = fi(Ut, null, null, ze);
      return t.stateNode = e, t;
    }
    function O0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = fi(X, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function lR(e, t) {
      return e === null && (e = fi(J, null, null, ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Ns(te), this.expirationTimes = Ns(on), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Ns(te), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ts; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Jh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ju:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function oR(e, t, a, i, o, s, f, p, v, E) {
      var R = new bD(e, t, a, p, v), N = ED(t, s);
      R.current = N, N.stateNode = R;
      {
        var k = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = k;
      }
      return $g(N), R;
    }
    var N0 = "18.3.1";
    function _D(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Wr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: kr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var L0, M0;
    L0 = !1, M0 = {};
    function uR(e) {
      if (!e)
        return ci;
      var t = za(e), a = sT(t);
      if (t.tag === H) {
        var i = t.type;
        if (Vl(i))
          return zE(t, i, a);
      }
      return a;
    }
    function DD(e, t) {
      {
        var a = za(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Pa(a);
        if (o === null)
          return null;
        if (o.mode & Et) {
          var s = at(a) || "Component";
          if (!M0[s]) {
            M0[s] = !0;
            var f = En;
            try {
              Wt(o), a.mode & Et ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : Tn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function sR(e, t, a, i, o, s, f, p) {
      var v = !1, E = null;
      return oR(e, t, v, E, a, i, o, s, f);
    }
    function cR(e, t, a, i, o, s, f, p, v, E) {
      var R = !0, N = oR(a, i, R, e, o, s, f, p, v);
      N.context = uR(null);
      var k = N.current, V = _a(), I = Gu(k), Q = No(V, I);
      return Q.callback = t ?? null, Hu(k, Q, I), z_(N, I, V), N;
    }
    function nv(e, t, a, i) {
      Md(t, e);
      var o = t.current, s = _a(), f = Gu(o);
      Ad(f);
      var p = uR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && En !== null && !L0 && (L0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, at(En) || "Unknown"));
      var v = No(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var E = Hu(o, v, f);
      return E !== null && (mr(E, o, f, s), pm(E, o, f)), f;
    }
    function ny(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function kD(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Pd(t);
            P_(t, a);
          }
          break;
        }
        case De: {
          zo(function() {
            var o = qa(e, $e);
            if (o !== null) {
              var s = _a();
              mr(o, e, $e, s);
            }
          });
          var i = $e;
          U0(e, i);
          break;
        }
      }
    }
    function fR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function U0(e, t) {
      fR(e, t);
      var a = e.alternate;
      a && fR(a, t);
    }
    function OD(e) {
      if (e.tag === De) {
        var t = _s, a = qa(e, t);
        if (a !== null) {
          var i = _a();
          mr(a, e, t, i);
        }
        U0(e, t);
      }
    }
    function ND(e) {
      if (e.tag === De) {
        var t = Gu(e), a = qa(e, t);
        if (a !== null) {
          var i = _a();
          mr(a, e, t, i);
        }
        U0(e, t);
      }
    }
    function dR(e) {
      var t = Wv(e);
      return t === null ? null : t.stateNode;
    }
    var pR = function(e) {
      return null;
    };
    function LD(e) {
      return pR(e);
    }
    var vR = function(e) {
      return !1;
    };
    function MD(e) {
      return vR(e);
    }
    var hR = null, mR = null, yR = null, gR = null, SR = null, ER = null, CR = null, RR = null, xR = null;
    {
      var wR = function(e, t, a) {
        var i = t[a], o = _t(e) ? e.slice() : ht({}, e);
        return a + 1 === t.length ? (_t(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = wR(e[i], t, a + 1), o);
      }, TR = function(e, t) {
        return wR(e, t, 0);
      }, bR = function(e, t, a, i) {
        var o = t[i], s = _t(e) ? e.slice() : ht({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], _t(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = bR(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, _R = function(e, t, a) {
        if (t.length !== a.length) {
          L("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              L("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return bR(e, t, a, 0);
      }, DR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = _t(e) ? e.slice() : ht({}, e);
        return s[o] = DR(e[o], t, a + 1, i), s;
      }, kR = function(e, t, a) {
        return DR(e, t, 0, a);
      }, z0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      hR = function(e, t, a, i) {
        var o = z0(e, t);
        if (o !== null) {
          var s = kR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ht({}, e.memoizedProps);
          var f = qa(e, $e);
          f !== null && mr(f, e, $e, on);
        }
      }, mR = function(e, t, a) {
        var i = z0(e, t);
        if (i !== null) {
          var o = TR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ht({}, e.memoizedProps);
          var s = qa(e, $e);
          s !== null && mr(s, e, $e, on);
        }
      }, yR = function(e, t, a, i) {
        var o = z0(e, t);
        if (o !== null) {
          var s = _R(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ht({}, e.memoizedProps);
          var f = qa(e, $e);
          f !== null && mr(f, e, $e, on);
        }
      }, gR = function(e, t, a) {
        e.pendingProps = kR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, $e);
        i !== null && mr(i, e, $e, on);
      }, SR = function(e, t) {
        e.pendingProps = TR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qa(e, $e);
        a !== null && mr(a, e, $e, on);
      }, ER = function(e, t, a) {
        e.pendingProps = _R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, $e);
        i !== null && mr(i, e, $e, on);
      }, CR = function(e) {
        var t = qa(e, $e);
        t !== null && mr(t, e, $e, on);
      }, RR = function(e) {
        pR = e;
      }, xR = function(e) {
        vR = e;
      };
    }
    function UD(e) {
      var t = Pa(e);
      return t === null ? null : t.stateNode;
    }
    function zD(e) {
      return null;
    }
    function AD() {
      return En;
    }
    function jD(e) {
      var t = e.findFiberByHostInstance, a = S.ReactCurrentDispatcher;
      return Ld({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: hR,
        overrideHookStateDeletePath: mR,
        overrideHookStateRenamePath: yR,
        overrideProps: gR,
        overridePropsDeletePath: SR,
        overridePropsRenamePath: ER,
        setErrorHandler: RR,
        setSuspenseHandler: xR,
        scheduleUpdate: CR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: UD,
        findFiberByHostInstance: t || zD,
        // React Refresh
        findHostInstancesForRefresh: pD,
        scheduleRefresh: fD,
        scheduleRoot: dD,
        setRefreshHandler: cD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: AD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: N0
      });
    }
    var OR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function A0(e) {
      this._internalRoot = e;
    }
    ry.prototype.render = A0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ay(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Fn) {
          var i = dR(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      nv(e, t, null, null);
    }, ry.prototype.unmount = A0.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        B1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zo(function() {
          nv(null, e, null, null);
        }), OE(t);
      }
    };
    function FD(e, t) {
      if (!ay(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      NR(e);
      var a = !1, i = !1, o = "", s = OR;
      t != null && (t.hydrate ? L("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ni && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = sR(e, Jh, null, a, i, o, s);
      Yh(f.current, e);
      var p = e.nodeType === Fn ? e.parentNode : e;
      return up(p), new A0(f);
    }
    function ry(e) {
      this._internalRoot = e;
    }
    function PD(e) {
      e && Fy(e);
    }
    ry.prototype.unstable_scheduleHydration = PD;
    function HD(e, t, a) {
      if (!ay(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      NR(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = OR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var E = cR(t, null, e, Jh, i, s, f, p, v);
      if (Yh(E.current, e), up(e), o)
        for (var R = 0; R < o.length; R++) {
          var N = o[R];
          IT(E, N);
        }
      return new ry(E);
    }
    function ay(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === li || e.nodeType === to || !q));
    }
    function rv(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === li || e.nodeType === to || e.nodeType === Fn && e.nodeValue === " react-mount-point-unstable "));
    }
    function NR(e) {
      e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Sp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var VD = S.ReactCurrentOwner, LR;
    LR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Fn) {
        var t = dR(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = j0(e), o = !!(i && zu(i));
      o && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function j0(e) {
      return e ? e.nodeType === li ? e.documentElement : e.firstChild : null;
    }
    function MR() {
    }
    function BD(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = ny(f);
            s.call(k);
          };
        }
        var f = cR(
          t,
          i,
          e,
          ju,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          MR
        );
        e._reactRootContainer = f, Yh(f.current, e);
        var p = e.nodeType === Fn ? e.parentNode : e;
        return up(p), zo(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var k = ny(R);
            E.call(k);
          };
        }
        var R = sR(
          e,
          ju,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          MR
        );
        e._reactRootContainer = R, Yh(R.current, e);
        var N = e.nodeType === Fn ? e.parentNode : e;
        return up(N), zo(function() {
          nv(t, R, a, i);
        }), R;
      }
    }
    function $D(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function iy(e, t, a, i, o) {
      LR(a), $D(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = BD(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var v = ny(f);
            p.call(v);
          };
        }
        nv(t, f, e, o);
      }
      return ny(f);
    }
    var UR = !1;
    function ID(e) {
      {
        UR || (UR = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = VD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Jr ? e : DD(e, "findDOMNode");
    }
    function YD(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return iy(null, e, t, !0, a);
    }
    function WD(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return iy(null, e, t, !1, a);
    }
    function QD(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gs(e))
        throw new Error("parentComponent must be a valid React Component");
      return iy(e, t, a, !1, i);
    }
    var zR = !1;
    function GD(e) {
      if (zR || (zR = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !rv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Sp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = j0(e), i = a && !zu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zo(function() {
          iy(null, null, e, !1, function() {
            e._reactRootContainer = null, OE(e);
          });
        }), !0;
      } else {
        {
          var o = j0(e), s = !!(o && zu(o)), f = e.nodeType === Jr && rv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Cu(kD), Ay(OD), rf(ND), ph($a), vh(Tr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), $v(Kx), Ec(v0, H_, zo);
    function qD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ay(t))
        throw new Error("Target container is not a DOM element.");
      return _D(e, t, null, a);
    }
    function KD(e, t, a, i) {
      return QD(e, t, a, i);
    }
    var F0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zu, _f, Wh, Sc, hs, v0]
    };
    function XD(e, t) {
      return F0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), FD(e, t);
    }
    function JD(e, t, a) {
      return F0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), HD(e, t, a);
    }
    function ZD(e) {
      return B1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zo(e);
    }
    var ek = jD({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: N0,
      rendererPackageName: "react-dom"
    });
    if (!ek && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var AR = window.location.protocol;
      /^(https?|file):$/.test(AR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (AR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0, ei.createPortal = qD, ei.createRoot = XD, ei.findDOMNode = ID, ei.flushSync = ZD, ei.hydrate = YD, ei.hydrateRoot = JD, ei.render = WD, ei.unmountComponentAtNode = GD, ei.unstable_batchedUpdates = v0, ei.unstable_renderSubtreeIntoContainer = KD, ei.version = N0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ei;
}
function rx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx);
    } catch (h) {
      console.error(h);
    }
  }
}
process.env.NODE_ENV === "production" ? (rx(), Y0.exports = pk()) : Y0.exports = vk();
var hk = Y0.exports, ov = hk;
if (process.env.NODE_ENV === "production")
  sv.createRoot = ov.createRoot, sv.hydrateRoot = ov.hydrateRoot;
else {
  var oy = ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  sv.createRoot = function(h, C) {
    oy.usingClientEntryPoint = !0;
    try {
      return ov.createRoot(h, C);
    } finally {
      oy.usingClientEntryPoint = !1;
    }
  }, sv.hydrateRoot = function(h, C, S) {
    oy.usingClientEntryPoint = !0;
    try {
      return ov.hydrateRoot(h, C, S);
    } finally {
      oy.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cv() {
  return cv = Object.assign ? Object.assign.bind() : function(h) {
    for (var C = 1; C < arguments.length; C++) {
      var S = arguments[C];
      for (var T in S)
        Object.prototype.hasOwnProperty.call(S, T) && (h[T] = S[T]);
    }
    return h;
  }, cv.apply(this, arguments);
}
var Ju;
(function(h) {
  h.Pop = "POP", h.Push = "PUSH", h.Replace = "REPLACE";
})(Ju || (Ju = {}));
const WR = "popstate";
function mk(h) {
  h === void 0 && (h = {});
  function C(T, _) {
    let {
      pathname: L,
      search: y,
      hash: Y
    } = T.location;
    return W0(
      "",
      {
        pathname: L,
        search: y,
        hash: Y
      },
      // state defaults to `null` because `window.history.state` does
      _.state && _.state.usr || null,
      _.state && _.state.key || "default"
    );
  }
  function S(T, _) {
    return typeof _ == "string" ? _ : fv(_);
  }
  return gk(C, S, null, h);
}
function gt(h, C) {
  if (h === !1 || h === null || typeof h > "u")
    throw new Error(C);
}
function Ui(h, C) {
  if (!h) {
    typeof console < "u" && console.warn(C);
    try {
      throw new Error(C);
    } catch {
    }
  }
}
function yk() {
  return Math.random().toString(36).substr(2, 8);
}
function QR(h, C) {
  return {
    usr: h.state,
    key: h.key,
    idx: C
  };
}
function W0(h, C, S, T) {
  return S === void 0 && (S = null), cv({
    pathname: typeof h == "string" ? h : h.pathname,
    search: "",
    hash: ""
  }, typeof C == "string" ? Zf(C) : C, {
    state: S,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: C && C.key || T || yk()
  });
}
function fv(h) {
  let {
    pathname: C = "/",
    search: S = "",
    hash: T = ""
  } = h;
  return S && S !== "?" && (C += S.charAt(0) === "?" ? S : "?" + S), T && T !== "#" && (C += T.charAt(0) === "#" ? T : "#" + T), C;
}
function Zf(h) {
  let C = {};
  if (h) {
    let S = h.indexOf("#");
    S >= 0 && (C.hash = h.substr(S), h = h.substr(0, S));
    let T = h.indexOf("?");
    T >= 0 && (C.search = h.substr(T), h = h.substr(0, T)), h && (C.pathname = h);
  }
  return C;
}
function gk(h, C, S, T) {
  T === void 0 && (T = {});
  let {
    window: _ = document.defaultView,
    v5Compat: L = !1
  } = T, y = _.history, Y = Ju.Pop, z = null, H = J();
  H == null && (H = 0, y.replaceState(cv({}, y.state, {
    idx: H
  }), ""));
  function J() {
    return (y.state || {
      idx: null
    }).idx;
  }
  function F() {
    Y = Ju.Pop;
    let ge = J(), je = ge == null ? null : ge - H;
    H = ge, z && z({
      action: Y,
      location: _e.location,
      delta: je
    });
  }
  function X(ge, je) {
    Y = Ju.Push;
    let ie = W0(_e.location, ge, je);
    H = J() + 1;
    let le = QR(ie, H), ke = _e.createHref(ie);
    try {
      y.pushState(le, "", ke);
    } catch (De) {
      if (De instanceof DOMException && De.name === "DataCloneError")
        throw De;
      _.location.assign(ke);
    }
    L && z && z({
      action: Y,
      location: _e.location,
      delta: 1
    });
  }
  function Z(ge, je) {
    Y = Ju.Replace;
    let ie = W0(_e.location, ge, je);
    H = J();
    let le = QR(ie, H), ke = _e.createHref(ie);
    y.replaceState(le, "", ke), L && z && z({
      action: Y,
      location: _e.location,
      delta: 0
    });
  }
  function he(ge) {
    let je = _.location.origin !== "null" ? _.location.origin : _.location.href, ie = typeof ge == "string" ? ge : fv(ge);
    return ie = ie.replace(/ $/, "%20"), gt(je, "No window.location.(origin|href) available to create URL for href: " + ie), new URL(ie, je);
  }
  let _e = {
    get action() {
      return Y;
    },
    get location() {
      return h(_, y);
    },
    listen(ge) {
      if (z)
        throw new Error("A history only accepts one active listener");
      return _.addEventListener(WR, F), z = ge, () => {
        _.removeEventListener(WR, F), z = null;
      };
    },
    createHref(ge) {
      return C(_, ge);
    },
    createURL: he,
    encodeLocation(ge) {
      let je = he(ge);
      return {
        pathname: je.pathname,
        search: je.search,
        hash: je.hash
      };
    },
    push: X,
    replace: Z,
    go(ge) {
      return y.go(ge);
    }
  };
  return _e;
}
var GR;
(function(h) {
  h.data = "data", h.deferred = "deferred", h.redirect = "redirect", h.error = "error";
})(GR || (GR = {}));
function Sk(h, C, S) {
  return S === void 0 && (S = "/"), Ek(h, C, S, !1);
}
function Ek(h, C, S, T) {
  let _ = typeof C == "string" ? Zf(C) : C, L = Zu(_.pathname || "/", S);
  if (L == null)
    return null;
  let y = ax(h);
  Ck(y);
  let Y = null;
  for (let z = 0; Y == null && z < y.length; ++z) {
    let H = Lk(L);
    Y = Ok(y[z], H, T);
  }
  return Y;
}
function ax(h, C, S, T) {
  C === void 0 && (C = []), S === void 0 && (S = []), T === void 0 && (T = "");
  let _ = (L, y, Y) => {
    let z = {
      relativePath: Y === void 0 ? L.path || "" : Y,
      caseSensitive: L.caseSensitive === !0,
      childrenIndex: y,
      route: L
    };
    z.relativePath.startsWith("/") && (gt(z.relativePath.startsWith(T), 'Absolute route path "' + z.relativePath + '" nested under path ' + ('"' + T + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), z.relativePath = z.relativePath.slice(T.length));
    let H = Fo([T, z.relativePath]), J = S.concat(z);
    L.children && L.children.length > 0 && (gt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      L.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + H + '".')
    ), ax(L.children, C, J, H)), !(L.path == null && !L.index) && C.push({
      path: H,
      score: Dk(H, L.index),
      routesMeta: J
    });
  };
  return h.forEach((L, y) => {
    var Y;
    if (L.path === "" || !((Y = L.path) != null && Y.includes("?")))
      _(L, y);
    else
      for (let z of ix(L.path))
        _(L, y, z);
  }), C;
}
function ix(h) {
  let C = h.split("/");
  if (C.length === 0) return [];
  let [S, ...T] = C, _ = S.endsWith("?"), L = S.replace(/\?$/, "");
  if (T.length === 0)
    return _ ? [L, ""] : [L];
  let y = ix(T.join("/")), Y = [];
  return Y.push(...y.map((z) => z === "" ? L : [L, z].join("/"))), _ && Y.push(...y), Y.map((z) => h.startsWith("/") && z === "" ? "/" : z);
}
function Ck(h) {
  h.sort((C, S) => C.score !== S.score ? S.score - C.score : kk(C.routesMeta.map((T) => T.childrenIndex), S.routesMeta.map((T) => T.childrenIndex)));
}
const Rk = /^:[\w-]+$/, xk = 3, wk = 2, Tk = 1, bk = 10, _k = -2, qR = (h) => h === "*";
function Dk(h, C) {
  let S = h.split("/"), T = S.length;
  return S.some(qR) && (T += _k), C && (T += wk), S.filter((_) => !qR(_)).reduce((_, L) => _ + (Rk.test(L) ? xk : L === "" ? Tk : bk), T);
}
function kk(h, C) {
  return h.length === C.length && h.slice(0, -1).every((T, _) => T === C[_]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    h[h.length - 1] - C[C.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ok(h, C, S) {
  let {
    routesMeta: T
  } = h, _ = {}, L = "/", y = [];
  for (let Y = 0; Y < T.length; ++Y) {
    let z = T[Y], H = Y === T.length - 1, J = L === "/" ? C : C.slice(L.length) || "/", F = dy({
      path: z.relativePath,
      caseSensitive: z.caseSensitive,
      end: H
    }, J), X = z.route;
    if (!F && H && S && !T[T.length - 1].route.index && (F = dy({
      path: z.relativePath,
      caseSensitive: z.caseSensitive,
      end: !1
    }, J)), !F)
      return null;
    Object.assign(_, F.params), y.push({
      // TODO: Can this as be avoided?
      params: _,
      pathname: Fo([L, F.pathname]),
      pathnameBase: Ak(Fo([L, F.pathnameBase])),
      route: X
    }), F.pathnameBase !== "/" && (L = Fo([L, F.pathnameBase]));
  }
  return y;
}
function dy(h, C) {
  typeof h == "string" && (h = {
    path: h,
    caseSensitive: !1,
    end: !0
  });
  let [S, T] = Nk(h.path, h.caseSensitive, h.end), _ = C.match(S);
  if (!_) return null;
  let L = _[0], y = L.replace(/(.)\/+$/, "$1"), Y = _.slice(1);
  return {
    params: T.reduce((H, J, F) => {
      let {
        paramName: X,
        isOptional: Z
      } = J;
      if (X === "*") {
        let _e = Y[F] || "";
        y = L.slice(0, L.length - _e.length).replace(/(.)\/+$/, "$1");
      }
      const he = Y[F];
      return Z && !he ? H[X] = void 0 : H[X] = (he || "").replace(/%2F/g, "/"), H;
    }, {}),
    pathname: L,
    pathnameBase: y,
    pattern: h
  };
}
function Nk(h, C, S) {
  C === void 0 && (C = !1), S === void 0 && (S = !0), Ui(h === "*" || !h.endsWith("*") || h.endsWith("/*"), 'Route path "' + h + '" will be treated as if it were ' + ('"' + h.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + h.replace(/\*$/, "/*") + '".'));
  let T = [], _ = "^" + h.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, Y, z) => (T.push({
    paramName: Y,
    isOptional: z != null
  }), z ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return h.endsWith("*") ? (T.push({
    paramName: "*"
  }), _ += h === "*" || h === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : S ? _ += "\\/*$" : h !== "" && h !== "/" && (_ += "(?:(?=\\/|$))"), [new RegExp(_, C ? void 0 : "i"), T];
}
function Lk(h) {
  try {
    return h.split("/").map((C) => decodeURIComponent(C).replace(/\//g, "%2F")).join("/");
  } catch (C) {
    return Ui(!1, 'The URL path "' + h + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + C + ").")), h;
  }
}
function Zu(h, C) {
  if (C === "/") return h;
  if (!h.toLowerCase().startsWith(C.toLowerCase()))
    return null;
  let S = C.endsWith("/") ? C.length - 1 : C.length, T = h.charAt(S);
  return T && T !== "/" ? null : h.slice(S) || "/";
}
function Mk(h, C) {
  C === void 0 && (C = "/");
  let {
    pathname: S,
    search: T = "",
    hash: _ = ""
  } = typeof h == "string" ? Zf(h) : h;
  return {
    pathname: S ? S.startsWith("/") ? S : Uk(S, C) : C,
    search: jk(T),
    hash: Fk(_)
  };
}
function Uk(h, C) {
  let S = C.replace(/\/+$/, "").split("/");
  return h.split("/").forEach((_) => {
    _ === ".." ? S.length > 1 && S.pop() : _ !== "." && S.push(_);
  }), S.length > 1 ? S.join("/") : "/";
}
function V0(h, C, S, T) {
  return "Cannot include a '" + h + "' character in a manually specified " + ("`to." + C + "` field [" + JSON.stringify(T) + "].  Please separate it out to the ") + ("`to." + S + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function zk(h) {
  return h.filter((C, S) => S === 0 || C.route.path && C.route.path.length > 0);
}
function q0(h, C) {
  let S = zk(h);
  return C ? S.map((T, _) => _ === S.length - 1 ? T.pathname : T.pathnameBase) : S.map((T) => T.pathnameBase);
}
function K0(h, C, S, T) {
  T === void 0 && (T = !1);
  let _;
  typeof h == "string" ? _ = Zf(h) : (_ = cv({}, h), gt(!_.pathname || !_.pathname.includes("?"), V0("?", "pathname", "search", _)), gt(!_.pathname || !_.pathname.includes("#"), V0("#", "pathname", "hash", _)), gt(!_.search || !_.search.includes("#"), V0("#", "search", "hash", _)));
  let L = h === "" || _.pathname === "", y = L ? "/" : _.pathname, Y;
  if (y == null)
    Y = S;
  else {
    let F = C.length - 1;
    if (!T && y.startsWith("..")) {
      let X = y.split("/");
      for (; X[0] === ".."; )
        X.shift(), F -= 1;
      _.pathname = X.join("/");
    }
    Y = F >= 0 ? C[F] : "/";
  }
  let z = Mk(_, Y), H = y && y !== "/" && y.endsWith("/"), J = (L || y === ".") && S.endsWith("/");
  return !z.pathname.endsWith("/") && (H || J) && (z.pathname += "/"), z;
}
const Fo = (h) => h.join("/").replace(/\/\/+/g, "/"), Ak = (h) => h.replace(/\/+$/, "").replace(/^\/*/, "/"), jk = (h) => !h || h === "?" ? "" : h.startsWith("?") ? h : "?" + h, Fk = (h) => !h || h === "#" ? "" : h.startsWith("#") ? h : "#" + h;
function Pk(h) {
  return h != null && typeof h.status == "number" && typeof h.statusText == "string" && typeof h.internal == "boolean" && "data" in h;
}
const lx = ["post", "put", "patch", "delete"];
new Set(lx);
const Hk = ["get", ...lx];
new Set(Hk);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function dv() {
  return dv = Object.assign ? Object.assign.bind() : function(h) {
    for (var C = 1; C < arguments.length; C++) {
      var S = arguments[C];
      for (var T in S)
        Object.prototype.hasOwnProperty.call(S, T) && (h[T] = S[T]);
    }
    return h;
  }, dv.apply(this, arguments);
}
const vv = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (vv.displayName = "DataRouter");
const X0 = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (X0.displayName = "DataRouterState");
const Vk = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (Vk.displayName = "Await");
const zi = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (zi.displayName = "Navigation");
const hv = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (hv.displayName = "Location");
const Kl = /* @__PURE__ */ ee.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Kl.displayName = "Route");
const J0 = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (J0.displayName = "RouteError");
function Bk(h, C) {
  let {
    relative: S
  } = C === void 0 ? {} : C;
  ed() || (process.env.NODE_ENV !== "production" ? gt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : gt(!1));
  let {
    basename: T,
    navigator: _
  } = ee.useContext(zi), {
    hash: L,
    pathname: y,
    search: Y
  } = mv(h, {
    relative: S
  }), z = y;
  return T !== "/" && (z = y === "/" ? T : Fo([T, y])), _.createHref({
    pathname: z,
    search: Y,
    hash: L
  });
}
function ed() {
  return ee.useContext(hv) != null;
}
function es() {
  return ed() || (process.env.NODE_ENV !== "production" ? gt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : gt(!1)), ee.useContext(hv).location;
}
const ox = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ux(h) {
  ee.useContext(zi).static || ee.useLayoutEffect(h);
}
function vy() {
  let {
    isDataRoute: h
  } = ee.useContext(Kl);
  return h ? nO() : $k();
}
function $k() {
  ed() || (process.env.NODE_ENV !== "production" ? gt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : gt(!1));
  let h = ee.useContext(vv), {
    basename: C,
    future: S,
    navigator: T
  } = ee.useContext(zi), {
    matches: _
  } = ee.useContext(Kl), {
    pathname: L
  } = es(), y = JSON.stringify(q0(_, S.v7_relativeSplatPath)), Y = ee.useRef(!1);
  return ux(() => {
    Y.current = !0;
  }), ee.useCallback(function(H, J) {
    if (J === void 0 && (J = {}), process.env.NODE_ENV !== "production" && Ui(Y.current, ox), !Y.current) return;
    if (typeof H == "number") {
      T.go(H);
      return;
    }
    let F = K0(H, JSON.parse(y), L, J.relative === "path");
    h == null && C !== "/" && (F.pathname = F.pathname === "/" ? C : Fo([C, F.pathname])), (J.replace ? T.replace : T.push)(F, J.state, J);
  }, [C, T, y, L, h]);
}
function mv(h, C) {
  let {
    relative: S
  } = C === void 0 ? {} : C, {
    future: T
  } = ee.useContext(zi), {
    matches: _
  } = ee.useContext(Kl), {
    pathname: L
  } = es(), y = JSON.stringify(q0(_, T.v7_relativeSplatPath));
  return ee.useMemo(() => K0(h, JSON.parse(y), L, S === "path"), [h, y, L, S]);
}
function Ik(h, C) {
  return Yk(h, C);
}
function Yk(h, C, S, T) {
  ed() || (process.env.NODE_ENV !== "production" ? gt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : gt(!1));
  let {
    navigator: _,
    static: L
  } = ee.useContext(zi), {
    matches: y
  } = ee.useContext(Kl), Y = y[y.length - 1], z = Y ? Y.params : {}, H = Y ? Y.pathname : "/", J = Y ? Y.pathnameBase : "/", F = Y && Y.route;
  if (process.env.NODE_ENV !== "production") {
    let le = F && F.path || "";
    cx(H, !F || le.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + H + '" (under <Route path="' + le + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + le + '"> to <Route ') + ('path="' + (le === "/" ? "*" : le + "/*") + '">.'));
  }
  let X = es(), Z;
  if (C) {
    var he;
    let le = typeof C == "string" ? Zf(C) : C;
    J === "/" || (he = le.pathname) != null && he.startsWith(J) || (process.env.NODE_ENV !== "production" ? gt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + J + '" ') + ('but pathname "' + le.pathname + '" was given in the `location` prop.')) : gt(!1)), Z = le;
  } else
    Z = X;
  let _e = Z.pathname || "/", ge = _e;
  if (J !== "/") {
    let le = J.replace(/^\//, "").split("/");
    ge = "/" + _e.replace(/^\//, "").split("/").slice(le.length).join("/");
  }
  let je = !L && S && S.matches && S.matches.length > 0 ? S.matches : Sk(h, {
    pathname: ge
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Ui(F || je != null, 'No routes matched location "' + Z.pathname + Z.search + Z.hash + '" '), process.env.NODE_ENV !== "production" && Ui(je == null || je[je.length - 1].route.element !== void 0 || je[je.length - 1].route.Component !== void 0 || je[je.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + Z.pathname + Z.search + Z.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let ie = Kk(je && je.map((le) => Object.assign({}, le, {
    params: Object.assign({}, z, le.params),
    pathname: Fo([
      J,
      // Re-encode pathnames that were decoded inside matchRoutes
      _.encodeLocation ? _.encodeLocation(le.pathname).pathname : le.pathname
    ]),
    pathnameBase: le.pathnameBase === "/" ? J : Fo([
      J,
      // Re-encode pathnames that were decoded inside matchRoutes
      _.encodeLocation ? _.encodeLocation(le.pathnameBase).pathname : le.pathnameBase
    ])
  })), y, S, T);
  return C && ie ? /* @__PURE__ */ ee.createElement(hv.Provider, {
    value: {
      location: dv({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, Z),
      navigationType: Ju.Pop
    }
  }, ie) : ie;
}
function Wk() {
  let h = tO(), C = Pk(h) ? h.status + " " + h.statusText : h instanceof Error ? h.message : JSON.stringify(h), S = h instanceof Error ? h.stack : null, T = "rgba(200,200,200, 0.5)", _ = {
    padding: "0.5rem",
    backgroundColor: T
  }, L = {
    padding: "2px 4px",
    backgroundColor: T
  }, y = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", h), y = /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ ee.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ ee.createElement("code", {
    style: L
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ ee.createElement("code", {
    style: L
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ ee.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, C), S ? /* @__PURE__ */ ee.createElement("pre", {
    style: _
  }, S) : null, y);
}
const Qk = /* @__PURE__ */ ee.createElement(Wk, null);
class Gk extends ee.Component {
  constructor(C) {
    super(C), this.state = {
      location: C.location,
      revalidation: C.revalidation,
      error: C.error
    };
  }
  static getDerivedStateFromError(C) {
    return {
      error: C
    };
  }
  static getDerivedStateFromProps(C, S) {
    return S.location !== C.location || S.revalidation !== "idle" && C.revalidation === "idle" ? {
      error: C.error,
      location: C.location,
      revalidation: C.revalidation
    } : {
      error: C.error !== void 0 ? C.error : S.error,
      location: S.location,
      revalidation: C.revalidation || S.revalidation
    };
  }
  componentDidCatch(C, S) {
    console.error("React Router caught the following error during render", C, S);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ ee.createElement(Kl.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ ee.createElement(J0.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function qk(h) {
  let {
    routeContext: C,
    match: S,
    children: T
  } = h, _ = ee.useContext(vv);
  return _ && _.static && _.staticContext && (S.route.errorElement || S.route.ErrorBoundary) && (_.staticContext._deepestRenderedBoundaryId = S.route.id), /* @__PURE__ */ ee.createElement(Kl.Provider, {
    value: C
  }, T);
}
function Kk(h, C, S, T) {
  var _;
  if (C === void 0 && (C = []), S === void 0 && (S = null), T === void 0 && (T = null), h == null) {
    var L;
    if (!S)
      return null;
    if (S.errors)
      h = S.matches;
    else if ((L = T) != null && L.v7_partialHydration && C.length === 0 && !S.initialized && S.matches.length > 0)
      h = S.matches;
    else
      return null;
  }
  let y = h, Y = (_ = S) == null ? void 0 : _.errors;
  if (Y != null) {
    let J = y.findIndex((F) => F.route.id && (Y == null ? void 0 : Y[F.route.id]) !== void 0);
    J >= 0 || (process.env.NODE_ENV !== "production" ? gt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(Y).join(",")) : gt(!1)), y = y.slice(0, Math.min(y.length, J + 1));
  }
  let z = !1, H = -1;
  if (S && T && T.v7_partialHydration)
    for (let J = 0; J < y.length; J++) {
      let F = y[J];
      if ((F.route.HydrateFallback || F.route.hydrateFallbackElement) && (H = J), F.route.id) {
        let {
          loaderData: X,
          errors: Z
        } = S, he = F.route.loader && X[F.route.id] === void 0 && (!Z || Z[F.route.id] === void 0);
        if (F.route.lazy || he) {
          z = !0, H >= 0 ? y = y.slice(0, H + 1) : y = [y[0]];
          break;
        }
      }
    }
  return y.reduceRight((J, F, X) => {
    let Z, he = !1, _e = null, ge = null;
    S && (Z = Y && F.route.id ? Y[F.route.id] : void 0, _e = F.route.errorElement || Qk, z && (H < 0 && X === 0 ? (cx("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), he = !0, ge = null) : H === X && (he = !0, ge = F.route.hydrateFallbackElement || null)));
    let je = C.concat(y.slice(0, X + 1)), ie = () => {
      let le;
      return Z ? le = _e : he ? le = ge : F.route.Component ? le = /* @__PURE__ */ ee.createElement(F.route.Component, null) : F.route.element ? le = F.route.element : le = J, /* @__PURE__ */ ee.createElement(qk, {
        match: F,
        routeContext: {
          outlet: J,
          matches: je,
          isDataRoute: S != null
        },
        children: le
      });
    };
    return S && (F.route.ErrorBoundary || F.route.errorElement || X === 0) ? /* @__PURE__ */ ee.createElement(Gk, {
      location: S.location,
      revalidation: S.revalidation,
      component: _e,
      error: Z,
      children: ie(),
      routeContext: {
        outlet: null,
        matches: je,
        isDataRoute: !0
      }
    }) : ie();
  }, null);
}
var sx = /* @__PURE__ */ function(h) {
  return h.UseBlocker = "useBlocker", h.UseRevalidator = "useRevalidator", h.UseNavigateStable = "useNavigate", h;
}(sx || {}), pv = /* @__PURE__ */ function(h) {
  return h.UseBlocker = "useBlocker", h.UseLoaderData = "useLoaderData", h.UseActionData = "useActionData", h.UseRouteError = "useRouteError", h.UseNavigation = "useNavigation", h.UseRouteLoaderData = "useRouteLoaderData", h.UseMatches = "useMatches", h.UseRevalidator = "useRevalidator", h.UseNavigateStable = "useNavigate", h.UseRouteId = "useRouteId", h;
}(pv || {});
function Z0(h) {
  return h + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Xk(h) {
  let C = ee.useContext(vv);
  return C || (process.env.NODE_ENV !== "production" ? gt(!1, Z0(h)) : gt(!1)), C;
}
function Jk(h) {
  let C = ee.useContext(X0);
  return C || (process.env.NODE_ENV !== "production" ? gt(!1, Z0(h)) : gt(!1)), C;
}
function Zk(h) {
  let C = ee.useContext(Kl);
  return C || (process.env.NODE_ENV !== "production" ? gt(!1, Z0(h)) : gt(!1)), C;
}
function eE(h) {
  let C = Zk(h), S = C.matches[C.matches.length - 1];
  return S.route.id || (process.env.NODE_ENV !== "production" ? gt(!1, h + ' can only be used on routes that contain a unique "id"') : gt(!1)), S.route.id;
}
function eO() {
  return eE(pv.UseRouteId);
}
function tO() {
  var h;
  let C = ee.useContext(J0), S = Jk(pv.UseRouteError), T = eE(pv.UseRouteError);
  return C !== void 0 ? C : (h = S.errors) == null ? void 0 : h[T];
}
function nO() {
  let {
    router: h
  } = Xk(sx.UseNavigateStable), C = eE(pv.UseNavigateStable), S = ee.useRef(!1);
  return ux(() => {
    S.current = !0;
  }), ee.useCallback(function(_, L) {
    L === void 0 && (L = {}), process.env.NODE_ENV !== "production" && Ui(S.current, ox), S.current && (typeof _ == "number" ? h.navigate(_) : h.navigate(_, dv({
      fromRouteId: C
    }, L)));
  }, [h, C]);
}
const KR = {};
function cx(h, C, S) {
  !C && !KR[h] && (KR[h] = !0, process.env.NODE_ENV !== "production" && Ui(!1, S));
}
const XR = {};
function rO(h, C) {
  process.env.NODE_ENV !== "production" && !XR[C] && (XR[C] = !0, console.warn(C));
}
const JR = (h, C, S) => rO(h, "⚠️ React Router Future Flag Warning: " + C + ". " + ("You can use the `" + h + "` future flag to opt-in early. ") + ("For more information, see " + S + "."));
function aO(h, C) {
  (h == null ? void 0 : h.v7_startTransition) === void 0 && JR("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (h == null ? void 0 : h.v7_relativeSplatPath) === void 0 && !C && JR("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function iO(h) {
  let {
    to: C,
    replace: S,
    state: T,
    relative: _
  } = h;
  ed() || (process.env.NODE_ENV !== "production" ? gt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : gt(!1));
  let {
    future: L,
    static: y
  } = ee.useContext(zi);
  process.env.NODE_ENV !== "production" && Ui(!y, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: Y
  } = ee.useContext(Kl), {
    pathname: z
  } = es(), H = vy(), J = K0(C, q0(Y, L.v7_relativeSplatPath), z, _ === "path"), F = JSON.stringify(J);
  return ee.useEffect(() => H(JSON.parse(F), {
    replace: S,
    state: T,
    relative: _
  }), [H, F, _, S, T]), null;
}
function sy(h) {
  process.env.NODE_ENV !== "production" ? gt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : gt(!1);
}
function lO(h) {
  let {
    basename: C = "/",
    children: S = null,
    location: T,
    navigationType: _ = Ju.Pop,
    navigator: L,
    static: y = !1,
    future: Y
  } = h;
  ed() && (process.env.NODE_ENV !== "production" ? gt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : gt(!1));
  let z = C.replace(/^\/*/, "/"), H = ee.useMemo(() => ({
    basename: z,
    navigator: L,
    static: y,
    future: dv({
      v7_relativeSplatPath: !1
    }, Y)
  }), [z, Y, L, y]);
  typeof T == "string" && (T = Zf(T));
  let {
    pathname: J = "/",
    search: F = "",
    hash: X = "",
    state: Z = null,
    key: he = "default"
  } = T, _e = ee.useMemo(() => {
    let ge = Zu(J, z);
    return ge == null ? null : {
      location: {
        pathname: ge,
        search: F,
        hash: X,
        state: Z,
        key: he
      },
      navigationType: _
    };
  }, [z, J, F, X, Z, he, _]);
  return process.env.NODE_ENV !== "production" && Ui(_e != null, '<Router basename="' + z + '"> is not able to match the URL ' + ('"' + J + F + X + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), _e == null ? null : /* @__PURE__ */ ee.createElement(zi.Provider, {
    value: H
  }, /* @__PURE__ */ ee.createElement(hv.Provider, {
    children: S,
    value: _e
  }));
}
function oO(h) {
  let {
    children: C,
    location: S
  } = h;
  return Ik(Q0(C), S);
}
new Promise(() => {
});
function Q0(h, C) {
  C === void 0 && (C = []);
  let S = [];
  return ee.Children.forEach(h, (T, _) => {
    if (!/* @__PURE__ */ ee.isValidElement(T))
      return;
    let L = [...C, _];
    if (T.type === ee.Fragment) {
      S.push.apply(S, Q0(T.props.children, L));
      return;
    }
    T.type !== sy && (process.env.NODE_ENV !== "production" ? gt(!1, "[" + (typeof T.type == "string" ? T.type : T.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : gt(!1)), !T.props.index || !T.props.children || (process.env.NODE_ENV !== "production" ? gt(!1, "An index route cannot have child routes.") : gt(!1));
    let y = {
      id: T.props.id || L.join("-"),
      caseSensitive: T.props.caseSensitive,
      element: T.props.element,
      Component: T.props.Component,
      index: T.props.index,
      path: T.props.path,
      loader: T.props.loader,
      action: T.props.action,
      errorElement: T.props.errorElement,
      ErrorBoundary: T.props.ErrorBoundary,
      hasErrorBoundary: T.props.ErrorBoundary != null || T.props.errorElement != null,
      shouldRevalidate: T.props.shouldRevalidate,
      handle: T.props.handle,
      lazy: T.props.lazy
    };
    T.props.children && (y.children = Q0(T.props.children, L)), S.push(y);
  }), S;
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Jf() {
  return Jf = Object.assign ? Object.assign.bind() : function(h) {
    for (var C = 1; C < arguments.length; C++) {
      var S = arguments[C];
      for (var T in S)
        Object.prototype.hasOwnProperty.call(S, T) && (h[T] = S[T]);
    }
    return h;
  }, Jf.apply(this, arguments);
}
function tE(h, C) {
  if (h == null) return {};
  var S = {}, T = Object.keys(h), _, L;
  for (L = 0; L < T.length; L++)
    _ = T[L], !(C.indexOf(_) >= 0) && (S[_] = h[_]);
  return S;
}
const cy = "get", fy = "application/x-www-form-urlencoded";
function hy(h) {
  return h != null && typeof h.tagName == "string";
}
function uO(h) {
  return hy(h) && h.tagName.toLowerCase() === "button";
}
function sO(h) {
  return hy(h) && h.tagName.toLowerCase() === "form";
}
function cO(h) {
  return hy(h) && h.tagName.toLowerCase() === "input";
}
function fO(h) {
  return !!(h.metaKey || h.altKey || h.ctrlKey || h.shiftKey);
}
function dO(h, C) {
  return h.button === 0 && // Ignore everything but left clicks
  (!C || C === "_self") && // Let browser handle "target=_blank" etc.
  !fO(h);
}
function G0(h) {
  return h === void 0 && (h = ""), new URLSearchParams(typeof h == "string" || Array.isArray(h) || h instanceof URLSearchParams ? h : Object.keys(h).reduce((C, S) => {
    let T = h[S];
    return C.concat(Array.isArray(T) ? T.map((_) => [S, _]) : [[S, T]]);
  }, []));
}
function pO(h, C) {
  let S = G0(h);
  return C && C.forEach((T, _) => {
    S.has(_) || C.getAll(_).forEach((L) => {
      S.append(_, L);
    });
  }), S;
}
let uy = null;
function vO() {
  if (uy === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), uy = !1;
    } catch {
      uy = !0;
    }
  return uy;
}
const hO = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function B0(h) {
  return h != null && !hO.has(h) ? (process.env.NODE_ENV !== "production" && Ui(!1, '"' + h + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + fy + '"')), null) : h;
}
function mO(h, C) {
  let S, T, _, L, y;
  if (sO(h)) {
    let Y = h.getAttribute("action");
    T = Y ? Zu(Y, C) : null, S = h.getAttribute("method") || cy, _ = B0(h.getAttribute("enctype")) || fy, L = new FormData(h);
  } else if (uO(h) || cO(h) && (h.type === "submit" || h.type === "image")) {
    let Y = h.form;
    if (Y == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let z = h.getAttribute("formaction") || Y.getAttribute("action");
    if (T = z ? Zu(z, C) : null, S = h.getAttribute("formmethod") || Y.getAttribute("method") || cy, _ = B0(h.getAttribute("formenctype")) || B0(Y.getAttribute("enctype")) || fy, L = new FormData(Y, h), !vO()) {
      let {
        name: H,
        type: J,
        value: F
      } = h;
      if (J === "image") {
        let X = H ? H + "." : "";
        L.append(X + "x", "0"), L.append(X + "y", "0");
      } else H && L.append(H, F);
    }
  } else {
    if (hy(h))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    S = cy, T = null, _ = fy, y = h;
  }
  return L && _ === "text/plain" && (y = L, L = void 0), {
    action: T,
    method: S.toLowerCase(),
    encType: _,
    formData: L,
    body: y
  };
}
const yO = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], gO = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], SO = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], EO = "6";
try {
  window.__reactRouterVersion = EO;
} catch {
}
const fx = /* @__PURE__ */ ee.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (fx.displayName = "ViewTransition");
const CO = /* @__PURE__ */ ee.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (CO.displayName = "Fetchers");
const RO = "startTransition", ZR = uk[RO];
function xO(h) {
  let {
    basename: C,
    children: S,
    future: T,
    window: _
  } = h, L = ee.useRef();
  L.current == null && (L.current = mk({
    window: _,
    v5Compat: !0
  }));
  let y = L.current, [Y, z] = ee.useState({
    action: y.action,
    location: y.location
  }), {
    v7_startTransition: H
  } = T || {}, J = ee.useCallback((F) => {
    H && ZR ? ZR(() => z(F)) : z(F);
  }, [z, H]);
  return ee.useLayoutEffect(() => y.listen(J), [y, J]), ee.useEffect(() => aO(T), [T]), /* @__PURE__ */ ee.createElement(lO, {
    basename: C,
    children: S,
    location: Y.location,
    navigationType: Y.action,
    navigator: y,
    future: T
  });
}
process.env.NODE_ENV;
const wO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", TO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, dx = /* @__PURE__ */ ee.forwardRef(function(C, S) {
  let {
    onClick: T,
    relative: _,
    reloadDocument: L,
    replace: y,
    state: Y,
    target: z,
    to: H,
    preventScrollReset: J,
    viewTransition: F
  } = C, X = tE(C, yO), {
    basename: Z
  } = ee.useContext(zi), he, _e = !1;
  if (typeof H == "string" && TO.test(H) && (he = H, wO))
    try {
      let le = new URL(window.location.href), ke = H.startsWith("//") ? new URL(le.protocol + H) : new URL(H), De = Zu(ke.pathname, Z);
      ke.origin === le.origin && De != null ? H = De + ke.search + ke.hash : _e = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Ui(!1, '<Link to="' + H + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let ge = Bk(H, {
    relative: _
  }), je = kO(H, {
    replace: y,
    state: Y,
    target: z,
    preventScrollReset: J,
    relative: _,
    viewTransition: F
  });
  function ie(le) {
    T && T(le), le.defaultPrevented || je(le);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ ee.createElement("a", Jf({}, X, {
      href: he || ge,
      onClick: _e || L ? T : ie,
      ref: S,
      target: z
    }))
  );
});
process.env.NODE_ENV !== "production" && (dx.displayName = "Link");
const bO = /* @__PURE__ */ ee.forwardRef(function(C, S) {
  let {
    "aria-current": T = "page",
    caseSensitive: _ = !1,
    className: L = "",
    end: y = !1,
    style: Y,
    to: z,
    viewTransition: H,
    children: J
  } = C, F = tE(C, gO), X = mv(z, {
    relative: F.relative
  }), Z = es(), he = ee.useContext(X0), {
    navigator: _e,
    basename: ge
  } = ee.useContext(zi), je = he != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  AO(X) && H === !0, ie = _e.encodeLocation ? _e.encodeLocation(X).pathname : X.pathname, le = Z.pathname, ke = he && he.navigation && he.navigation.location ? he.navigation.location.pathname : null;
  _ || (le = le.toLowerCase(), ke = ke ? ke.toLowerCase() : null, ie = ie.toLowerCase()), ke && ge && (ke = Zu(ke, ge) || ke);
  const De = ie !== "/" && ie.endsWith("/") ? ie.length - 1 : ie.length;
  let ut = le === ie || !y && le.startsWith(ie) && le.charAt(De) === "/", Qe = ke != null && (ke === ie || !y && ke.startsWith(ie) && ke.charAt(ie.length) === "/"), qt = {
    isActive: ut,
    isPending: Qe,
    isTransitioning: je
  }, mn = ut ? T : void 0, Ut;
  typeof L == "function" ? Ut = L(qt) : Ut = [L, ut ? "active" : null, Qe ? "pending" : null, je ? "transitioning" : null].filter(Boolean).join(" ");
  let Nt = typeof Y == "function" ? Y(qt) : Y;
  return /* @__PURE__ */ ee.createElement(dx, Jf({}, F, {
    "aria-current": mn,
    className: Ut,
    ref: S,
    style: Nt,
    to: z,
    viewTransition: H
  }), typeof J == "function" ? J(qt) : J);
});
process.env.NODE_ENV !== "production" && (bO.displayName = "NavLink");
const _O = /* @__PURE__ */ ee.forwardRef((h, C) => {
  let {
    fetcherKey: S,
    navigate: T,
    reloadDocument: _,
    replace: L,
    state: y,
    method: Y = cy,
    action: z,
    onSubmit: H,
    relative: J,
    preventScrollReset: F,
    viewTransition: X
  } = h, Z = tE(h, SO), he = UO(), _e = zO(z, {
    relative: J
  }), ge = Y.toLowerCase() === "get" ? "get" : "post", je = (ie) => {
    if (H && H(ie), ie.defaultPrevented) return;
    ie.preventDefault();
    let le = ie.nativeEvent.submitter, ke = (le == null ? void 0 : le.getAttribute("formmethod")) || Y;
    he(le || ie.currentTarget, {
      fetcherKey: S,
      method: ke,
      navigate: T,
      replace: L,
      state: y,
      relative: J,
      preventScrollReset: F,
      viewTransition: X
    });
  };
  return /* @__PURE__ */ ee.createElement("form", Jf({
    ref: C,
    method: ge,
    action: _e,
    onSubmit: _ ? H : je
  }, Z));
});
process.env.NODE_ENV !== "production" && (_O.displayName = "Form");
process.env.NODE_ENV;
var py;
(function(h) {
  h.UseScrollRestoration = "useScrollRestoration", h.UseSubmit = "useSubmit", h.UseSubmitFetcher = "useSubmitFetcher", h.UseFetcher = "useFetcher", h.useViewTransitionState = "useViewTransitionState";
})(py || (py = {}));
var ex;
(function(h) {
  h.UseFetcher = "useFetcher", h.UseFetchers = "useFetchers", h.UseScrollRestoration = "useScrollRestoration";
})(ex || (ex = {}));
function DO(h) {
  return h + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function px(h) {
  let C = ee.useContext(vv);
  return C || (process.env.NODE_ENV !== "production" ? gt(!1, DO(h)) : gt(!1)), C;
}
function kO(h, C) {
  let {
    target: S,
    replace: T,
    state: _,
    preventScrollReset: L,
    relative: y,
    viewTransition: Y
  } = C === void 0 ? {} : C, z = vy(), H = es(), J = mv(h, {
    relative: y
  });
  return ee.useCallback((F) => {
    if (dO(F, S)) {
      F.preventDefault();
      let X = T !== void 0 ? T : fv(H) === fv(J);
      z(h, {
        replace: X,
        state: _,
        preventScrollReset: L,
        relative: y,
        viewTransition: Y
      });
    }
  }, [H, z, J, T, _, S, h, L, y, Y]);
}
function OO(h) {
  process.env.NODE_ENV !== "production" && Ui(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
  let C = ee.useRef(G0(h)), S = ee.useRef(!1), T = es(), _ = ee.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    pO(T.search, S.current ? null : C.current)
  ), [T.search]), L = vy(), y = ee.useCallback((Y, z) => {
    const H = G0(typeof Y == "function" ? Y(_) : Y);
    S.current = !0, L("?" + H, z);
  }, [L, _]);
  return [_, y];
}
function NO() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let LO = 0, MO = () => "__" + String(++LO) + "__";
function UO() {
  let {
    router: h
  } = px(py.UseSubmit), {
    basename: C
  } = ee.useContext(zi), S = eO();
  return ee.useCallback(function(T, _) {
    _ === void 0 && (_ = {}), NO();
    let {
      action: L,
      method: y,
      encType: Y,
      formData: z,
      body: H
    } = mO(T, C);
    if (_.navigate === !1) {
      let J = _.fetcherKey || MO();
      h.fetch(J, S, _.action || L, {
        preventScrollReset: _.preventScrollReset,
        formData: z,
        body: H,
        formMethod: _.method || y,
        formEncType: _.encType || Y,
        flushSync: _.flushSync
      });
    } else
      h.navigate(_.action || L, {
        preventScrollReset: _.preventScrollReset,
        formData: z,
        body: H,
        formMethod: _.method || y,
        formEncType: _.encType || Y,
        replace: _.replace,
        state: _.state,
        fromRouteId: S,
        flushSync: _.flushSync,
        viewTransition: _.viewTransition
      });
  }, [h, C, S]);
}
function zO(h, C) {
  let {
    relative: S
  } = C === void 0 ? {} : C, {
    basename: T
  } = ee.useContext(zi), _ = ee.useContext(Kl);
  _ || (process.env.NODE_ENV !== "production" ? gt(!1, "useFormAction must be used inside a RouteContext") : gt(!1));
  let [L] = _.matches.slice(-1), y = Jf({}, mv(h || ".", {
    relative: S
  })), Y = es();
  if (h == null) {
    y.search = Y.search;
    let z = new URLSearchParams(y.search), H = z.getAll("index");
    if (H.some((F) => F === "")) {
      z.delete("index"), H.filter((X) => X).forEach((X) => z.append("index", X));
      let F = z.toString();
      y.search = F ? "?" + F : "";
    }
  }
  return (!h || h === ".") && L.route.index && (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"), T !== "/" && (y.pathname = y.pathname === "/" ? T : Fo([T, y.pathname])), fv(y);
}
function AO(h, C) {
  C === void 0 && (C = {});
  let S = ee.useContext(fx);
  S == null && (process.env.NODE_ENV !== "production" ? gt(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : gt(!1));
  let {
    basename: T
  } = px(py.useViewTransitionState), _ = mv(h, {
    relative: C.relative
  });
  if (!S.isTransitioning)
    return !1;
  let L = Zu(S.currentLocation.pathname, T) || S.currentLocation.pathname, y = Zu(S.nextLocation.pathname, T) || S.nextLocation.pathname;
  return dy(_.pathname, y) != null || dy(_.pathname, L) != null;
}
const Xu = Array.from({ length: 78 }, (h, C) => ({
  id: C + 1,
  name: `Card ${C + 1}`,
  image: `https://source.unsplash.com/random/300x500?tarot-${C + 1}`
}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jO = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FO = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), td = (h, C) => {
  const S = ee.forwardRef(
    ({
      color: T = "currentColor",
      size: _ = 24,
      strokeWidth: L = 2,
      absoluteStrokeWidth: y,
      className: Y = "",
      children: z,
      ...H
    }, J) => ee.createElement(
      "svg",
      {
        ref: J,
        ...jO,
        width: _,
        height: _,
        stroke: T,
        strokeWidth: y ? Number(L) * 24 / Number(_) : L,
        className: ["lucide", `lucide-${FO(h)}`, Y].join(" "),
        ...H
      },
      [
        ...C.map(([F, X]) => ee.createElement(F, X)),
        ...Array.isArray(z) ? z : [z]
      ]
    )
  );
  return S.displayName = `${h}`, S;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PO = td("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = td("Crown", [
  ["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14", key: "zkxr6b" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HO = td("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VO = td("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BO = td("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = td("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]), $O = () => {
  const [h] = OO(), C = h.get("jeu") || "default", [S, T] = ee.useState(""), [_, L] = ee.useState([]), [y, Y] = ee.useState(!1), [z, H] = ee.useState(!1), [J, F] = ee.useState(!1), [X, Z] = ee.useState({
    firstName: "",
    email: "",
    gdprAccepted: !1
  }), he = (ie) => {
    if (!J) {
      alert("Veuillez d'abord saisir et valider votre question.");
      return;
    }
    _.includes(ie) ? L(_.filter((le) => le !== ie)) : _.length < 7 && L([..._, ie]);
  }, _e = (ie) => {
    ie.preventDefault(), S.trim() && F(!0);
  }, ge = async (ie) => {
    ie.preventDefault(), H(!0);
    const le = {
      question: S,
      selectedCards: _,
      ...X,
      gameType: C
    };
    try {
      if ((await fetch("https://hook.eu1.make.com/vbjx35fb9j7l49fhq2a797jr01meu368", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(le)
      })).ok)
        alert("Votre tirage a été envoyé avec succès! Vous recevrez bientôt votre interprétation par email."), T(""), L([]), Z({ firstName: "", email: "", gdprAccepted: !1 }), Y(!1), F(!1);
      else
        throw new Error("Erreur lors de l'envoi");
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      H(!1);
    }
  };
  ee.useEffect(() => {
    _.length === 7 ? Y(!0) : Y(!1);
  }, [_]);
  const je = () => _.length === 7 ? /* @__PURE__ */ pe.jsxs("div", { className: "relative w-full max-w-4xl mx-auto aspect-[1.2/1]", children: [
    /* @__PURE__ */ pe.jsx("div", { className: "absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-2xl text-center", children: /* @__PURE__ */ pe.jsxs("div", { className: "bg-white shadow-md p-4 rounded-lg", children: [
      /* @__PURE__ */ pe.jsx("h2", { className: "text-lg font-medium text-purple-900 mb-2", children: "Votre question :" }),
      /* @__PURE__ */ pe.jsx("p", { className: "text-gray-800 italic", children: S })
    ] }) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute top-[5%] left-1/2 -translate-x-1/2 transform transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[0]].image,
        alt: "Top card",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute top-1/2 left-[15%] -translate-y-1/2 transform transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[1]].image,
        alt: "Left card",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[2]].image,
        alt: "Center card",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute top-1/2 right-[15%] -translate-y-1/2 transform transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[3]].image,
        alt: "Right card",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute bottom-[5%] left-1/2 -translate-x-1/2 transform transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[4]].image,
        alt: "Bottom card",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute top-[5%] left-[5%] transform rotate-45 transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[5]].image,
        alt: "Top left bonus",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) }),
    /* @__PURE__ */ pe.jsx("div", { className: "absolute bottom-[5%] left-[5%] transform -rotate-45 transition-all duration-500 hover:scale-110", children: /* @__PURE__ */ pe.jsx(
      "img",
      {
        src: Xu[_[6]].image,
        alt: "Bottom left bonus",
        className: "w-32 aspect-[1/1.618] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      }
    ) })
  ] }) : /* @__PURE__ */ pe.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 max-w-7xl mx-auto", children: Xu.map((ie) => /* @__PURE__ */ pe.jsx(
    "div",
    {
      onClick: () => he(ie.id),
      className: `
              cursor-pointer transform transition-all duration-300
              hover:scale-105 hover:shadow-xl
              ${_.includes(ie.id) ? "opacity-0 pointer-events-none" : J ? "hover:rotate-3" : "opacity-50 cursor-not-allowed"}
            `,
      children: /* @__PURE__ */ pe.jsx("div", { className: "relative w-32 mx-auto aspect-[1/1.618]", children: /* @__PURE__ */ pe.jsxs("div", { className: "absolute inset-0 rounded-lg shadow-lg overflow-hidden", children: [
        /* @__PURE__ */ pe.jsx(
          "img",
          {
            src: getCardBackImage(C),
            alt: "Card back",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ pe.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }),
        /* @__PURE__ */ pe.jsx(vx, { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/30", size: 16 })
      ] }) })
    },
    ie.id
  )) });
  return /* @__PURE__ */ pe.jsx("div", { className: "min-h-screen bg-white", children: /* @__PURE__ */ pe.jsxs("div", { className: "container mx-auto px-2 sm:px-4 py-4 sm:py-8", children: [
    /* @__PURE__ */ pe.jsxs("h1", { className: "title text-center text-purple-900 mb-4 sm:mb-8 relative", children: [
      /* @__PURE__ */ pe.jsxs("span", { className: "relative", children: [
        "Initiation Clairvoyante",
        /* @__PURE__ */ pe.jsx("span", { className: "absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" })
      ] }),
      /* @__PURE__ */ pe.jsx("span", { className: "block text-regular mt-2 text-purple-700", children: C })
    ] }),
    !y && !J && /* @__PURE__ */ pe.jsx("div", { className: "max-w-2xl mx-auto mb-4 sm:mb-8", children: /* @__PURE__ */ pe.jsxs("form", { onSubmit: _e, className: "space-y-2", children: [
      /* @__PURE__ */ pe.jsx("label", { htmlFor: "question", className: "block text-regular text-purple-900", children: "Posez votre question" }),
      /* @__PURE__ */ pe.jsx(
        "textarea",
        {
          id: "question",
          value: S,
          onChange: (ie) => T(ie.target.value),
          className: `w-full p-3 sm:p-4 rounded-lg shadow-sm border border-purple-200 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         bg-white transition-all duration-300
                         placeholder:text-purple-300 text-regular`,
          rows: 3,
          placeholder: "Écrivez votre question ici...",
          required: !0
        }
      ),
      /* @__PURE__ */ pe.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ pe.jsx(
        "button",
        {
          type: "submit",
          className: `bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 
                           transition-colors duration-300 text-regular`,
          children: "Valider la question"
        }
      ) })
    ] }) }),
    !y && J && /* @__PURE__ */ pe.jsx("div", { className: "max-w-2xl mx-auto mb-4 sm:mb-8", children: /* @__PURE__ */ pe.jsx("p", { className: "text-regular text-purple-600 text-center", children: _.length < 7 ? `Sélectionnez ${7 - _.length} carte${7 - _.length > 1 ? "s" : ""} pour votre tirage` : "Toutes les cartes ont été sélectionnées" }) }),
    je(),
    y && /* @__PURE__ */ pe.jsx("div", { className: "max-w-xl mx-auto mt-4 sm:mt-8 px-2", children: /* @__PURE__ */ pe.jsx(
      "form",
      {
        onSubmit: ge,
        className: `bg-white shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-6 
                       transform transition-all duration-500 hover:shadow-xl rounded-lg`,
        children: /* @__PURE__ */ pe.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ pe.jsxs("div", { children: [
            /* @__PURE__ */ pe.jsx("label", { htmlFor: "firstName", className: "block text-regular text-gray-700", children: "Prénom" }),
            /* @__PURE__ */ pe.jsx(
              "input",
              {
                type: "text",
                id: "firstName",
                required: !0,
                value: X.firstName,
                onChange: (ie) => Z({ ...X, firstName: ie.target.value }),
                className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-purple-500 focus:ring-purple-500 transition-all text-regular`
              }
            )
          ] }),
          /* @__PURE__ */ pe.jsxs("div", { children: [
            /* @__PURE__ */ pe.jsx("label", { htmlFor: "email", className: "block text-regular text-gray-700", children: "Email" }),
            /* @__PURE__ */ pe.jsx(
              "input",
              {
                type: "email",
                id: "email",
                required: !0,
                value: X.email,
                onChange: (ie) => Z({ ...X, email: ie.target.value }),
                className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-purple-500 focus:ring-purple-500 transition-all text-regular`
              }
            )
          ] }),
          /* @__PURE__ */ pe.jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ pe.jsx(
              "input",
              {
                type: "checkbox",
                id: "gdpr",
                required: !0,
                checked: X.gdprAccepted,
                onChange: (ie) => Z({ ...X, gdprAccepted: ie.target.checked }),
                className: `mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 
                             focus:ring-purple-500 transition-colors`
              }
            ),
            /* @__PURE__ */ pe.jsx("label", { htmlFor: "gdpr", className: "text-regular text-gray-700", children: "J'accepte les RGPD, CGV et CGU" })
          ] }),
          /* @__PURE__ */ pe.jsxs(
            "button",
            {
              type: "submit",
              disabled: z,
              className: `
                    w-full flex items-center justify-center px-4 py-3 border border-transparent 
                    rounded-md shadow-sm text-regular text-white
                    transition-all duration-300
                    ${z ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"}
                  `,
              children: [
                /* @__PURE__ */ pe.jsx(BO, { className: `mr-2 h-5 w-5 ${z ? "animate-pulse" : ""}` }),
                z ? "Envoi en cours..." : "Recevoir mon tirage"
              ]
            }
          )
        ] })
      }
    ) })
  ] }) });
}, IO = async () => (await new Promise((h) => setTimeout(h, 500)), [
  {
    id: "nexus",
    name: "Nexus",
    subtitle: "le tarot Pro",
    description: "Un jeu professionnel pour des lectures précises et approfondies",
    backImage: "https://source.unsplash.com/random/400x600?mystical-purple",
    iconType: "crown",
    gradient: "from-indigo-900 to-purple-900"
  },
  {
    id: "logos",
    name: "Logos",
    subtitle: "le tarot pour Lui",
    description: "Un jeu conçu pour répondre aux questionnements masculins",
    backImage: "https://source.unsplash.com/random/400x600?mystical-blue",
    iconType: "brain",
    gradient: "from-blue-900 to-indigo-900"
  },
  {
    id: "harmonia",
    name: "Harmonia",
    subtitle: "le Tarot pour Elle",
    description: "Un jeu adapté aux questionnements féminins",
    backImage: "https://source.unsplash.com/random/400x600?mystical-pink",
    iconType: "heart",
    gradient: "from-rose-900 to-pink-900"
  }
]), YO = () => {
  const [h, C] = ee.useState([]), [S, T] = ee.useState(!0), [_, L] = ee.useState(null);
  return ee.useEffect(() => {
    (async () => {
      try {
        const Y = await IO();
        C(Y), L(null);
      } catch (Y) {
        L("Erreur lors du chargement des jeux de tarots"), console.error("Error loading tarot decks:", Y);
      } finally {
        T(!1);
      }
    })();
  }, []), { decks: h, loading: S, error: _ };
}, WO = (h) => {
  switch (h) {
    case "crown":
      return tx;
    case "brain":
      return PO;
    case "heart":
      return HO;
    default:
      return tx;
  }
}, QO = () => {
  const h = vy(), { decks: C, loading: S, error: T } = YO(), _ = (L) => {
    h(`/tirage?jeu=${L}`);
  };
  return S ? /* @__PURE__ */ pe.jsx("div", { className: "min-h-screen bg-white flex items-center justify-center", children: /* @__PURE__ */ pe.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ pe.jsx(VO, { className: "w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ pe.jsx("p", { className: "text-regular text-purple-900", children: "Chargement des jeux de tarots..." })
  ] }) }) : T ? /* @__PURE__ */ pe.jsx("div", { className: "min-h-screen bg-white flex items-center justify-center", children: /* @__PURE__ */ pe.jsxs("div", { className: "text-center text-red-600 p-4", children: [
    /* @__PURE__ */ pe.jsx("p", { className: "text-regular", children: T }),
    /* @__PURE__ */ pe.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-regular",
        children: "Réessayer"
      }
    )
  ] }) }) : /* @__PURE__ */ pe.jsx("div", { className: "min-h-screen bg-white", children: /* @__PURE__ */ pe.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ pe.jsx("h1", { className: "title text-center text-purple-900 mb-12 relative", children: /* @__PURE__ */ pe.jsxs("span", { className: "relative", children: [
      "Initiation Clairvoyante",
      /* @__PURE__ */ pe.jsx("span", { className: "absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" })
    ] }) }),
    /* @__PURE__ */ pe.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: C.map((L) => {
      const y = WO(L.iconType);
      return /* @__PURE__ */ pe.jsxs(
        "div",
        {
          onClick: () => _(L.id),
          className: `group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:-translate-y-1 cursor-pointer overflow-hidden`,
          children: [
            /* @__PURE__ */ pe.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${L.gradient} opacity-90` }),
            /* @__PURE__ */ pe.jsx("div", { className: "absolute inset-0 background-pattern opacity-10" }),
            /* @__PURE__ */ pe.jsxs("div", { className: "relative p-6 flex flex-col items-center text-center h-full min-h-[400px]", children: [
              /* @__PURE__ */ pe.jsx(y, { className: "w-12 h-12 text-white mb-4" }),
              /* @__PURE__ */ pe.jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: L.name }),
              /* @__PURE__ */ pe.jsx("p", { className: "text-regular text-white/80 mb-4", children: L.subtitle }),
              /* @__PURE__ */ pe.jsx("p", { className: "text-regular text-white/70 mb-8", children: L.description }),
              /* @__PURE__ */ pe.jsx("div", { className: "mt-auto w-full aspect-[1/1.618] max-w-[200px] relative group-hover:transform group-hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ pe.jsxs("div", { className: "absolute inset-0 rounded-lg shadow-lg overflow-hidden", children: [
                /* @__PURE__ */ pe.jsx(
                  "img",
                  {
                    src: L.backImage,
                    alt: `Dos des cartes ${L.name}`,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ pe.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }),
                /* @__PURE__ */ pe.jsx(vx, { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/30", size: 32 })
              ] }) })
            ] })
          ]
        },
        L.id
      );
    }) })
  ] }) });
};
function GO() {
  return /* @__PURE__ */ pe.jsx(xO, { children: /* @__PURE__ */ pe.jsxs(oO, { children: [
    /* @__PURE__ */ pe.jsx(sy, { path: "/selection", element: /* @__PURE__ */ pe.jsx(QO, {}) }),
    /* @__PURE__ */ pe.jsx(sy, { path: "/tirage", element: /* @__PURE__ */ pe.jsx($O, {}) }),
    /* @__PURE__ */ pe.jsx(sy, { path: "/", element: /* @__PURE__ */ pe.jsx(iO, { to: "/selection", replace: !0 }) })
  ] }) });
}
function JO(h) {
  const [C, S] = ee.useState([]);
  return ee.useEffect(() => {
    const T = document.querySelector("custom-react-element");
    if (T) {
      const _ = T.getAttribute("data");
      _ && S(JSON.parse(_));
    }
  }, []), sv.createRoot(h).render(/* @__PURE__ */ pe.jsx(GO, { data: C }));
}
export {
  JO as renderReactApp
};
