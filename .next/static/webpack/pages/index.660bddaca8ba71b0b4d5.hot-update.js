webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _infosD__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infosD */ "./components/infosD.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");








var _jsxFileName = "C:\\Users\\NANOTEK\\Desktop\\flutter\\h-oujari\\components\\contact.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Contact = /*#__PURE__*/function (_Component) {
  Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact() {
    var _this;

    Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "contactInfo", _this.props.data);

    Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      name: "",
      email: "",
      subject: "",
      message: "",
      stateSend: false
    });

    return _this;
  }

  Object(C_Users_NANOTEK_Desktop_flutter_h_oujari_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact, [{
    key: "send",
    value: function send(e) {
      e.preventDefault();
      emailjs_com__WEBPACK_IMPORTED_MODULE_10__["default"].send("service_qf2dzer", "template_rx8o3in", {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      }).then(function (rsp) {
        document.location.reload();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(emailjs_com__WEBPACK_IMPORTED_MODULE_10__["init"])("user_WyEJxiUFl6WZq6e5wEgdS");
      var listInfo = this.contactInfo.map(function (ele, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_infosD__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: ele
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }, _this2);
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "Contact",
        className: "ContactSec",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "title",
          children: ["Contact ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "infoSec",
            children: listInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: this.send.bind(this),
            className: "ContactForm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "Your Name",
              onChange: function onChange(e) {
                _this2.setState({
                  name: e.target.value
                });
              },
              required: true,
              className: "inputT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "Your Email",
              required: true,
              onChange: function onChange(e) {
                _this2.setState({
                  email: e.target.value
                });
              },
              className: "inputT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "Subject",
              onChange: function onChange(e) {
                _this2.setState({
                  subject: e.target.value
                });
              },
              required: true,
              className: "inputT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              placeholder: "Message ...",
              onChange: function onChange(e) {
                _this2.setState({
                  message: e.target.value
                });
              },
              required: true,
              className: "message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: this.state.stateSend,
              className: "sendBtn",
              children: "Send Message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this);
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInN0YXRlU2VuZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kIiwic3RhdGUiLCJ0aGVuIiwicnNwIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImluaXQiLCJsaXN0SW5mbyIsImNvbnRhY3RJbmZvIiwibWFwIiwiZWxlIiwiaW5kZXgiLCJiaW5kIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7OztnVUFDTCxNQUFLQyxLQUFMLENBQVdDLEk7OzBUQUNqQjtBQUNOQyxVQUFJLEVBQUUsRUFEQTtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxhQUFPLEVBQUUsRUFISDtBQUlOQyxhQUFPLEVBQUUsRUFKSDtBQUtOQyxlQUFTLEVBQUM7QUFMSixLOzs7Ozs7O3lCQU9IQyxDLEVBQUc7QUFDTkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLDBEQUFPLENBQUNDLElBQVIsQ0FBYSxpQkFBYixFQUFnQyxrQkFBaEMsRUFBb0Q7QUFDbERSLFlBQUksRUFBRSxLQUFLUyxLQUFMLENBQVdULElBRGlDO0FBRWxEQyxhQUFLLEVBQUUsS0FBS1EsS0FBTCxDQUFXUixLQUZnQztBQUdsREMsZUFBTyxFQUFFLEtBQUtPLEtBQUwsQ0FBV1AsT0FIOEI7QUFJbERDLGVBQU8sRUFBRSxLQUFLTSxLQUFMLENBQVdOO0FBSjhCLE9BQXBELEVBS0dPLElBTEgsQ0FLUSxVQUFBQyxHQUFHLEVBQUk7QUFBRUMsZ0JBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsTUFBbEI7QUFBNkIsT0FMOUM7QUFNRDs7OzZCQUNRO0FBQUE7O0FBQ1BDLCtEQUFJLENBQUMsNEJBQUQsQ0FBSjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDcEQsNEJBQVEscUVBQUMsK0NBQUQ7QUFBb0IsY0FBSSxFQUFFRDtBQUExQixXQUFhQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVI7QUFDRCxPQUZnQixDQUFqQjtBQUdBLDBCQUNFO0FBQVMsVUFBRSxFQUFDLFNBQVo7QUFBc0IsaUJBQVMsRUFBQyxZQUFoQztBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxPQUFiO0FBQUEsOENBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsc0JBQ0dKO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQU0sb0JBQVEsRUFBRSxLQUFLUixJQUFMLENBQVVhLElBQVYsQ0FBZSxJQUFmLENBQWhCO0FBQXNDLHFCQUFTLEVBQUMsYUFBaEQ7QUFBQSxvQ0FDRTtBQUFPLHlCQUFXLEVBQUMsV0FBbkI7QUFBK0Isc0JBQVEsRUFBRSxrQkFBQ2hCLENBQUQsRUFBTztBQUFFLHNCQUFJLENBQUNpQixRQUFMLENBQWM7QUFBRXRCLHNCQUFJLEVBQUVLLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0M7QUFBakIsaUJBQWQ7QUFBd0MsZUFBMUY7QUFBNEYsc0JBQVEsTUFBcEc7QUFBcUcsdUJBQVMsRUFBQztBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyx5QkFBVyxFQUFDLFlBQW5CO0FBQWdDLHNCQUFRLE1BQXhDO0FBQXlDLHNCQUFRLEVBQUUsa0JBQUNuQixDQUFELEVBQU87QUFBRSxzQkFBSSxDQUFDaUIsUUFBTCxDQUFjO0FBQUVyQix1QkFBSyxFQUFFSSxDQUFDLENBQUNrQixNQUFGLENBQVNDO0FBQWxCLGlCQUFkO0FBQTBDLGVBQXRHO0FBQXdHLHVCQUFTLEVBQUM7QUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQU8seUJBQVcsRUFBQyxTQUFuQjtBQUE2QixzQkFBUSxFQUFFLGtCQUFDbkIsQ0FBRCxFQUFPO0FBQUUsc0JBQUksQ0FBQ2lCLFFBQUwsQ0FBYztBQUFFcEIseUJBQU8sRUFBRUcsQ0FBQyxDQUFDa0IsTUFBRixDQUFTQztBQUFwQixpQkFBZDtBQUE0QyxlQUE1RjtBQUE4RixzQkFBUSxNQUF0RztBQUF1Ryx1QkFBUyxFQUFDO0FBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFJRTtBQUFVLHlCQUFXLEVBQUMsYUFBdEI7QUFBb0Msc0JBQVEsRUFBRSxrQkFBQ25CLENBQUQsRUFBTztBQUFFLHNCQUFJLENBQUNpQixRQUFMLENBQWM7QUFBRW5CLHlCQUFPLEVBQUVFLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0M7QUFBcEIsaUJBQWQ7QUFBNEMsZUFBbkc7QUFBcUcsc0JBQVEsTUFBN0c7QUFBOEcsdUJBQVMsRUFBQztBQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0U7QUFBUSxzQkFBUSxFQUFFLEtBQUtmLEtBQUwsQ0FBV0wsU0FBN0I7QUFBd0MsdUJBQVMsRUFBQyxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBaUJEOzs7O0VBeENrQ3FCLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2MGJkZGFjYThiYTcxYjBiNGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5mb3NEIGZyb20gXCIuL2luZm9zRFwiXHJcbmltcG9ydCBlbWFpbGpzLCB7IGluaXQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb250YWN0SW5mbyA9IHRoaXMucHJvcHMuZGF0YVxyXG4gIHN0YXRlID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgc3ViamVjdDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICBzdGF0ZVNlbmQ6ZmFsc2UsXHJcbiAgfTtcclxuICBzZW5kKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVtYWlsanMuc2VuZChcInNlcnZpY2VfcWYyZHplclwiLCBcInRlbXBsYXRlX3J4OG8zaW5cIiwge1xyXG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICBzdWJqZWN0OiB0aGlzLnN0YXRlLnN1YmplY3QsXHJcbiAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSxcclxuICAgIH0pLnRoZW4ocnNwID0+IHsgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7IH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpbml0KFwidXNlcl9XeUVKeGlVRmw2V1pxNmU1d0VnZFNcIik7XHJcbiAgICBjb25zdCBsaXN0SW5mbyA9IHRoaXMuY29udGFjdEluZm8ubWFwKChlbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoPEluZm9zRCBrZXk9e2luZGV4fSBkYXRhPXtlbGV9IC8+KVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiQ29udGFjdFwiIGNsYXNzTmFtZT1cIkNvbnRhY3RTZWNcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbnRhY3QgPHNwYW4+TWU8L3NwYW4+PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvU2VjXCI+XHJcbiAgICAgICAgICAgIHtsaXN0SW5mb31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJDb250YWN0Rm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlfSkgfX0gcmVxdWlyZWQgY2xhc3NOYW1lPVwiaW5wdXRUXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pIH19IGNsYXNzTmFtZT1cImlucHV0VFwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHN1YmplY3Q6IGUudGFyZ2V0LnZhbHVlIH0pIH19IHJlcXVpcmVkIGNsYXNzTmFtZT1cImlucHV0VFwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgLi4uXCIgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZSB9KSB9fSByZXF1aXJlZCBjbGFzc05hbWU9XCJtZXNzYWdlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zdGF0ZVNlbmR9IGNsYXNzTmFtZT1cInNlbmRCdG5cIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==