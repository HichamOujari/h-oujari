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
      message: ""
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
        console.log(rsp);
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
          lineNumber: 25,
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
            lineNumber: 29,
            columnNumber: 38
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "infoSec",
            children: listInfo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: this.send.bind(this),
            className: "ContactForm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "Your Name",
              onChange: function onChange() {
                _this2.setState({
                  name: _this2.state.name
                });
              },
              required: true,
              className: "inputT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "Your Email",
              required: true,
              onChange: function onChange() {
                _this2.setState({
                  email: _this2.state.email
                });
              },
              className: "inputT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "Subject",
              onChange: function onChange() {
                _this2.setState({
                  subject: _this2.state
                });
              },
              required: true,
              className: "inputT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              placeholder: "Message ...",
              onChange: function onChange() {
                _this2.setState({
                  message: _this2.state
                });
              },
              required: true,
              className: "message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "sendBtn",
              children: "Send Message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kIiwic3RhdGUiLCJ0aGVuIiwicnNwIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJsaXN0SW5mbyIsImNvbnRhY3RJbmZvIiwibWFwIiwiZWxlIiwiaW5kZXgiLCJiaW5kIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Z1VBQ0wsTUFBS0MsS0FBTCxDQUFXQyxJOzswVEFDakI7QUFDTkMsVUFBSSxFQUFFLEVBREE7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsYUFBTyxFQUFFLEVBSEg7QUFJTkMsYUFBTyxFQUFFO0FBSkgsSzs7Ozs7Ozt5QkFNSEMsQyxFQUFHO0FBQ05BLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBQywwREFBTyxDQUFDQyxJQUFSLENBQWEsaUJBQWIsRUFBZ0Msa0JBQWhDLEVBQW9EO0FBQ2xEUCxZQUFJLEVBQUUsS0FBS1EsS0FBTCxDQUFXUixJQURpQztBQUVsREMsYUFBSyxFQUFFLEtBQUtPLEtBQUwsQ0FBV1AsS0FGZ0M7QUFHbERDLGVBQU8sRUFBRSxLQUFLTSxLQUFMLENBQVdOLE9BSDhCO0FBSWxEQyxlQUFPLEVBQUUsS0FBS0ssS0FBTCxDQUFXTDtBQUo4QixPQUFwRCxFQUtHTSxJQUxILENBS1EsVUFBQUMsR0FBRyxFQUFJO0FBQUVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQW1CLE9BTHBDO0FBTUQ7Ozs2QkFDUTtBQUFBOztBQUNQRywrREFBSSxDQUFDLDRCQUFELENBQUo7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3BELDRCQUFRLHFFQUFDLCtDQUFEO0FBQW9CLGNBQUksRUFBRUQ7QUFBMUIsV0FBYUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFSO0FBQ0QsT0FGZ0IsQ0FBakI7QUFHQSwwQkFDRTtBQUFTLFVBQUUsRUFBQyxTQUFaO0FBQXNCLGlCQUFTLEVBQUMsWUFBaEM7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsT0FBYjtBQUFBLDhDQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBLHNCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFNLG9CQUFRLEVBQUUsS0FBS1AsSUFBTCxDQUFVWSxJQUFWLENBQWUsSUFBZixDQUFoQjtBQUFzQyxxQkFBUyxFQUFDLGFBQWhEO0FBQUEsb0NBQ0U7QUFBTyx5QkFBVyxFQUFDLFdBQW5CO0FBQStCLHNCQUFRLEVBQUUsb0JBQU07QUFBRSxzQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRXBCLHNCQUFJLEVBQUUsTUFBSSxDQUFDUSxLQUFMLENBQVdSO0FBQW5CLGlCQUFkO0FBQTBDLGVBQTNGO0FBQTZGLHNCQUFRLE1BQXJHO0FBQXNHLHVCQUFTLEVBQUM7QUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQU8seUJBQVcsRUFBQyxZQUFuQjtBQUFnQyxzQkFBUSxNQUF4QztBQUF5QyxzQkFBUSxFQUFFLG9CQUFNO0FBQUUsc0JBQUksQ0FBQ29CLFFBQUwsQ0FBYztBQUFFbkIsdUJBQUssRUFBRSxNQUFJLENBQUNPLEtBQUwsQ0FBV1A7QUFBcEIsaUJBQWQ7QUFBNEMsZUFBdkc7QUFBeUcsdUJBQVMsRUFBQztBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0U7QUFBTyx5QkFBVyxFQUFDLFNBQW5CO0FBQTZCLHNCQUFRLEVBQUUsb0JBQU07QUFBRSxzQkFBSSxDQUFDbUIsUUFBTCxDQUFjO0FBQUVsQix5QkFBTyxFQUFFLE1BQUksQ0FBQ007QUFBaEIsaUJBQWQ7QUFBd0MsZUFBdkY7QUFBeUYsc0JBQVEsTUFBakc7QUFBa0csdUJBQVMsRUFBQztBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUU7QUFBVSx5QkFBVyxFQUFDLGFBQXRCO0FBQW9DLHNCQUFRLEVBQUUsb0JBQU07QUFBRSxzQkFBSSxDQUFDWSxRQUFMLENBQWM7QUFBRWpCLHlCQUFPLEVBQUUsTUFBSSxDQUFDSztBQUFoQixpQkFBZDtBQUF3QyxlQUE5RjtBQUFnRyxzQkFBUSxNQUF4RztBQUF5Ryx1QkFBUyxFQUFDO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFLRTtBQUFRLHVCQUFTLEVBQUMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWlCRDs7OztFQXZDa0NhLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ5MjRkOWM5ZmFjYzRkNzNiMWFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5mb3NEIGZyb20gXCIuL2luZm9zRFwiXHJcbmltcG9ydCBlbWFpbGpzLCB7IGluaXQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb250YWN0SW5mbyA9IHRoaXMucHJvcHMuZGF0YVxyXG4gIHN0YXRlID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgc3ViamVjdDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuICBzZW5kKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGVtYWlsanMuc2VuZChcInNlcnZpY2VfcWYyZHplclwiLCBcInRlbXBsYXRlX3J4OG8zaW5cIiwge1xyXG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICBzdWJqZWN0OiB0aGlzLnN0YXRlLnN1YmplY3QsXHJcbiAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSxcclxuICAgIH0pLnRoZW4ocnNwID0+IHsgY29uc29sZS5sb2cocnNwKTsgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGluaXQoXCJ1c2VyX1d5RUp4aVVGbDZXWnE2ZTV3RWdkU1wiKTtcclxuICAgIGNvbnN0IGxpc3RJbmZvID0gdGhpcy5jb250YWN0SW5mby5tYXAoKGVsZSwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuICg8SW5mb3NEIGtleT17aW5kZXh9IGRhdGE9e2VsZX0gLz4pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gaWQ9XCJDb250YWN0XCIgY2xhc3NOYW1lPVwiQ29udGFjdFNlY1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29udGFjdCA8c3Bhbj5NZTwvc3Bhbj48L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9TZWNcIj5cclxuICAgICAgICAgICAge2xpc3RJbmZvfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cIkNvbnRhY3RGb3JtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiB0aGlzLnN0YXRlLm5hbWUgfSkgfX0gcmVxdWlyZWQgY2xhc3NOYW1lPVwiaW5wdXRUXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCB9KSB9fSBjbGFzc05hbWU9XCJpbnB1dFRcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgb25DaGFuZ2U9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHN1YmplY3Q6IHRoaXMuc3RhdGUgfSkgfX0gcmVxdWlyZWQgY2xhc3NOYW1lPVwiaW5wdXRUXCIgLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSAuLi5cIiBvbkNoYW5nZT17KCkgPT4geyB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogdGhpcy5zdGF0ZSB9KSB9fSByZXF1aXJlZCBjbGFzc05hbWU9XCJtZXNzYWdlXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZW5kQnRuXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=