"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * ===========================================================================
 * Fluid Drawer Native - React Native Component
 * ===========================================================================
 * 
 * A highly customizable, fluid, and native-feeling drawer component 
 * for React Native. Supports touch gestures, dynamic height adjustments, 
 * and integrates seamlessly with device keyboards.
 * 
 * Author      : Ginhinio Castelen
 * Company     : BUILDDIV LTD
 * Website     : http://www.builddiv.com
 * Version     : 0.7.0
 * License     : MIT
 * 
 * ===========================================================================
 */
var FluidDrawerNative = function FluidDrawerNative(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$drawerHeight = _ref.drawerHeight,
    drawerHeight = _ref$drawerHeight === void 0 ? 350 : _ref$drawerHeight,
    _ref$handleVisible = _ref.handleVisible,
    handleVisible = _ref$handleVisible === void 0 ? true : _ref$handleVisible,
    handleStyle = _ref.handleStyle,
    drawerStyle = _ref.drawerStyle,
    backdropStyle = _ref.backdropStyle,
    topTouchAreaStyle = _ref.topTouchAreaStyle,
    _ref$backdropTouchabl = _ref.backdropTouchable,
    backdropTouchable = _ref$backdropTouchabl === void 0 ? true : _ref$backdropTouchabl;
  var translateYAnim = (0, _react.useRef)(new _reactNative.Animated.Value(drawerHeight)).current;
  var opacityAnim = (0, _react.useRef)(new _reactNative.Animated.Value(open ? 1 : 0)).current;
  var _useState = (0, _react.useState)(open),
    _useState2 = _slicedToArray(_useState, 2),
    renderComponent = _useState2[0],
    setRenderComponent = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    keyboardHeight = _useState4[0],
    setKeyboardHeight = _useState4[1];
  var panResponder = (0, _react.useRef)(_reactNative.PanResponder.create({
    onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
      return false;
    },
    onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
      var isVerticalSwipe = Math.abs(gestureState.dx) < Math.abs(gestureState.dy);
      var isSwipeDown = gestureState.dy > 0;
      return isVerticalSwipe && isSwipeDown;
    },
    onPanResponderMove: function onPanResponderMove(evt, gestureState) {
      if (gestureState.dy > 0) {
        translateYAnim.setValue(Number(gestureState.dy));
      }
    },
    onPanResponderRelease: function onPanResponderRelease(evt, gestureState) {
      if (gestureState.dy > 200) {
        onClose();
      } else {
        _reactNative.Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }).start();
      }
    }
  })).current;
  (0, _react.useEffect)(function () {
    if (open) {
      setRenderComponent(true);
    }
    _reactNative.Animated.timing(translateYAnim, {
      toValue: open ? 0 : drawerHeight,
      duration: 300,
      useNativeDriver: true
    }).start();
    _reactNative.Animated.timing(opacityAnim, {
      toValue: open ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start(function () {
      if (!open) {
        // turn background invisible then hide it all together
        setRenderComponent(false);
      }
    });
  }, [open]);
  (0, _react.useEffect)(function () {
    function keyboardWillShow(e) {
      var newOffset = e.endCoordinates.height;
      setKeyboardHeight(newOffset);
    }
    function keyboardWillHide(e) {
      setKeyboardHeight(0);
      _reactNative.Animated.timing(translateYAnim, {
        toValue: 0,
        duration: e.duration,
        useNativeDriver: true
      }).start();
    }

    // Platform specific events
    var showEvent = _reactNative.Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    var hideEvent = _reactNative.Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    var showListener = _reactNative.Keyboard.addListener(showEvent, keyboardWillShow);
    var hideListener = _reactNative.Keyboard.addListener(hideEvent, keyboardWillHide);
    return function () {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  return renderComponent ? /*#__PURE__*/_react["default"].createElement(_reactNative.Animated.View, {
    style: [styles.container, {
      opacity: opacityAnim
    }, backdropStyle]
  }, backdropTouchable ? /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.backdropTouchSurface,
    onPress: onClose
  }) : /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.backdropTouchSurface
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Animated.View, {
    style: [styles.drawer, {
      transform: [{
        translateY: translateYAnim
      }],
      height: drawerHeight
    }, drawerStyle]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, _extends({
    style: [styles.drawerHandleContainer, topTouchAreaStyle]
  }, panResponder.panHandlers), handleVisible && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.drawerVisualHandle, handleStyle]
  })), children)) : null;
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  drawer: {
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
    position: 'absolute',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    bottom: 0
  },
  drawerHandleContainer: {
    width: '100%',
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    paddingTop: 5
  },
  drawerVisualHandle: {
    height: 5,
    width: 50,
    borderRadius: 3,
    backgroundColor: '#9DB2BF'
  },
  backdropTouchSurface: {
    flex: 1,
    width: '100%'
  }
});
var _default = exports["default"] = FluidDrawerNative;