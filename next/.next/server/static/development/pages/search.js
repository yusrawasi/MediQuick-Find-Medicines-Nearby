module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/usr/src/app/components/Layout/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NavbarComponent() {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    fixed: "top",
    expand: "lg",
    className: "custom-style",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "MediQuick"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    className: "headings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "About"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Search"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Contact Us")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sign Up"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: 2,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Sign In"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3522935668",
    __self: this
  }, ".custom-style{background-color:#505d58;height:70px;font-size:15px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:Poppins;}.navbar-light .navbar-nav .nav-link{color:rgb(255,255,255);}.navbar-light .navbar-brand{color:rgb(255,255,255);font-size:25px;-webkit-letter-spacing:6px;-moz-letter-spacing:6px;-ms-letter-spacing:6px;letter-spacing:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3Ivc3JjL2FwcC9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUIrQixBQUc4QyxBQU9BLEFBR0EsdUJBRjdCLEFBR21CLEVBVkgsWUFDRyxDQVVJLGNBVEEsK0VBVXZCLGNBVHdCLG9CQUN4QiIsImZpbGUiOiIvdXNyL3NyYy9hcHAvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtOYXZiYXIsIE5hdn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhckNvbXBvbmVudCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxOYXZiYXIgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZSA9IFwiY3VzdG9tLXN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgIE1lZGlRdWlja1xyXG4gICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZSA9IFwiaGVhZGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkFib3V0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5TZWFyY2g8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkNvbnRhY3QgVXM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIj5TaWduIFVwPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9ezJ9IGhyZWY9XCIjXCI+U2lnbiBJbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuY3VzdG9tLXN0eWxle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDVkNTg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyQ29tcG9uZW50OyJdfQ== */\n/*@ sourceURL=/usr/src/app/components/Layout/Navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);

/***/ }),

/***/ "./components/SearchComponents/SearchList.js":
/*!***************************************************!*\
  !*** ./components/SearchComponents/SearchList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectedMedicine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectedMedicine */ "./components/SearchComponents/SelectedMedicine.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Accordion */ "react-bootstrap/Accordion");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/usr/src/app/components/SearchComponents/SearchList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
//To render the list of medicines(which has been searched) 
//using the brandList array on clicking the submit button





class SearchList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClickHandler", (event, item) => {
      // console.log(e,v);
      //item = item which has been clicked by the user
      //We need to expand that medicine to show it's dosage type
      //medicineList contains the list of all the medicines which share the same generic
      const {
        medicineList
      } = this.props; //Fetching all the medicines in medicineList which have the same brand name but have different dosage form

      let results = medicineList.filter(medicine => {
        return medicine.name === item.name;
      });
      this.setState({
        selectedMedicines: results,
        isSelected: true
      });
    });

    this.state = {
      selectedMedicines: [],
      isSelected: false
    };
  }

  render() {
    let list = [];
    const brandList = this.props.brandList;
    list = brandList.map((item, i) => {
      //Mapping each list item in BrandList as a different medicine
      return (//Passing the item in brandlist to onClickHandler
        __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "list-item",
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          style: {
            borderRadius: "10px"
          },
          className: "card-item",
          onClick: e => {
            this.onClickHandler(e, item);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header,
          eventKey: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
          className: "med-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, item.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Subtitle, {
          className: "company-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, item.manufacturer), this.state.isSelected && __jsx(_SelectedMedicine__WEBPACK_IMPORTED_MODULE_2__["default"], {
          selectedMedicines: this.state.selectedMedicines,
          eventKey: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }))))
      );
    });
    return (//Rendering the list
      __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
        className: "medicine-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, list))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./components/SearchComponents/SelectedMedicine.js":
/*!*********************************************************!*\
  !*** ./components/SearchComponents/SelectedMedicine.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Accordion */ "react-bootstrap/Accordion");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/usr/src/app/components/SearchComponents/SelectedMedicine.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
//To render each medicines further types
 // import Link from 'next/link';




class SelectedMedicine extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onCLickHandler", (e, item, medicine) => {
      console.log(item);
      console.log(medicine);
    });
  }

  render() {
    let dosageFormList = [];
    let description;
    const {
      selectedMedicines
    } = this.props; // console.log(selectedMedicines);
    //Selecting the unique dosage form

    dosageFormList = [...new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(selectedMedicines.map(item => item.dosage))];
    description = dosageFormList.map((form, i) => {
      return (//Creating segments for different dosage form
        __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
          className: "dosage-segment",
          key: i,
          eventKey: this.props.eventKey,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          style: {
            padding: 20,
            cursor: "pointer"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
          className: "dosage-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, form), __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }), selectedMedicines.map((medicine, j) => {
          if (medicine.dosage === form) {
            return __jsx("a", {
              key: medicine.id,
              href: `location?id=${medicine.id}`,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
              className: "med-form",
              style: {
                marginTop: 20
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              className: "left-col",
              lg: 6,
              md: 6,
              sm: 6,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            }, medicine.packaging)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              lg: 6,
              md: 6,
              sm: 6,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }, medicine.generics.map((item, k) => {
              return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                lg: 12,
                md: 12,
                sm: 12,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
                style: {
                  textTransform: "capitalize"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              }, item.drugname, " : ", item.strength)));
            }))));
          }
        })))
      );
    });
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      className: "medicine-list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, description);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SelectedMedicine);

/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./data/medicineList.js":
/*!******************************!*\
  !*** ./data/medicineList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let medicineList = [{
  id: 1,
  name: 'Panadol',
  manufacturer: 'GSK',
  dosage: 'injection',
  price: 40,
  stripes_per_packet: '20',
  packaging: '14s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_14",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 2,
  name: 'Panadol',
  manufacturer: 'GSK',
  dosage: 'tablet',
  price: 40,
  stripes_per_packet: '20',
  packaging: '15s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 3,
  name: 'Panadol',
  manufacturer: 'GSK',
  dosage: 'injection',
  price: 40,
  stripes_per_packet: '20',
  packaging: '16s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 4,
  name: 'Panadol Extra',
  manufacturer: 'GSK',
  dosage: 'injection',
  price: 40,
  stripes_per_packet: '20',
  packaging: '17s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 5,
  name: 'Panadol Extra',
  manufacturer: 'GSK',
  dosage: 'tablet',
  price: 40,
  stripes_per_packet: '20',
  packaging: '18s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 6,
  name: "Merck Private Limited",
  manufacturer: 'GSK',
  dosage: 'tablet',
  price: 40,
  stripes_per_packet: '20',
  packaging: '19s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 7,
  name: 'Buscopan Plus',
  manufacturer: "Merck Private Limited",
  dosage: 'injection',
  price: 40,
  stripes_per_packet: '20',
  packaging: '20s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 8,
  name: 'Nuberol',
  manufacturer: "Searl Pakistan (PVT) ltd",
  dosage: 'syrup',
  price: 40,
  stripes_per_packet: '20',
  packaging: '21s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 9,
  name: 'Nuberol',
  manufacturer: "Searl Pakistan (PVT) ltd",
  dosage: 'syrup',
  price: 40,
  stripes_per_packet: '20',
  packaging: '22s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 10,
  name: 'Regopan Plus',
  manufacturer: "Regent Laboritories ltd",
  dosage: 'injection',
  price: 40,
  stripes_per_packet: '20',
  packaging: '23s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 11,
  name: 'Regopan Plus',
  manufacturer: "Regent Laboritories ltd",
  dosage: 'syrup',
  price: 40,
  stripes_per_packet: '20',
  packaging: '24s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 12,
  name: 'Nuberol Plus',
  manufacturer: "Searl Pakistan (PVT) ltd",
  dosage: 'injection',
  price: 40,
  stripes_per_packet: '20',
  packaging: '25s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 56,
  name: 'Augmentan',
  manufacturer: 'GSK',
  dosage: 'tablet',
  price: 40,
  stripes_per_packet: '20',
  packaging: '14s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_14",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 45,
  name: 'Calamox',
  manufacturer: 'Bosch Pharmaceuticals',
  dosage: 'tablet',
  price: 40,
  stripes_per_packet: '20',
  packaging: '15s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}, {
  id: 32,
  name: 'Fexit-D',
  manufacturer: 'Getz Pharma',
  dosage: 'tablet',
  price: 40,
  stripes_per_packet: '20',
  packaging: '16s',
  product_code: '123asd213asdzxczdasd',
  generics: [{
    drugname: "aspirin_1",
    strength: "100mg"
  }, {
    drugname: "aspirin_2",
    strength: "100mg"
  }, {
    drugname: "aspirin_3",
    strength: "100mg"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (medicineList);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_medicineList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/medicineList */ "./data/medicineList.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/styles.css */ "./css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchComponents_SearchList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchComponents/SearchList */ "./components/SearchComponents/SearchList.js");
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");

var _jsxFileName = "/usr/src/app/pages/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import brandList from '../data/brandList';

 //Components




class Search extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "myChangeHandler", event => {
      // console.log(event);
      let name = event.target.name;
      let value = event.target.value;
      this.setState({
        [name]: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onRadioButtonChangeHandler", (event, v) => {
      // this.setState({name: event.target.value});
      console.log(v);
      let name = v.name;
      let value = v.value;
      this.setState({
        [name]: value,
        url: `api/search/${value}`
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClickHandler", event => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({
        [name]: value
      });
      console.log(name + ': ' + event.target.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", e => {
      e.preventDefault();
      console.log("Final Name Value: " + this.state.name);
      console.log("Type: " + this.state.type);
      let ref = this;
      fetch(`api/${this.state.type}/${this.state.name}/search`).then(res => res.json()).then(data => {
        if (this.state.type == 'brand') {
          ref.setState({
            fetchedData: data,
            isSubmitted: true,
            brandList: [{
              name: data.name,
              manufacturer: data.manufacturer
            }]
          }, () => console.log(this.state.data));
        } else {
          ref.setState({
            fetchedData: data,
            isSubmitted: true
          }, () => console.log(this.state.fetchedData));
        }
      });

      if (this.state.type == 'generic') {
        fetch(`api/generic/${this.state.name}/brandlist`).then(res => res.json()).then(data => ref.setState({
          brandList: data,
          isSubmitted: true
        }, () => console.log(this.state.brandList)));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onKeyUpHandler", e => {
      let s = this.state;
      let ref = this;

      if (s.timer != null) {
        window.clearTimeout(s.timer);
      }

      s.timer = setTimeout(function () {
        if (s.name.length >= s.minlength) {
          // var req = new XMLHttpRequest();
          // req.addEventListener("load", function(){
          // 	s.draw(JSON.parse(this.responseText));
          // });
          // req.open("GET", s.url + "?term=" + s.name);
          // req.send();
          fetch(s.url + "?term=" + s.name).then(res => res.json()).then(data => ref.setState({
            list: data
          }));
        } // else{
        // 	s.box.innerHTML='';
        // }

      }, s.delay);
    });

    this.state = {
      name: '',
      type: 'brand',
      delay: 500,
      minlength: 2,
      timer: null,
      url: 'api/search/brand',
      list: [],
      fetchedData: [],
      brandList: [],
      isSubmitted: false
    };
  }

  render() {
    // let searchAutocomplete = new Suggest ;
    // searchAutocomplete.autoComplete("searchDrug","drugNameSuggestions","api/search/brand");
    let options = [];

    if (this.state.list.length !== 0 && this.state.type == 'brand') {
      options = this.state.list.map(item => {
        return __jsx("option", {
          key: item.b_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, item.b_name);
      });
    } else if (this.state.list.length !== 0 && this.state.type == 'generic') {
      options = this.state.list.map(item => {
        return __jsx("option", {
          key: item.g_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, item.g_name);
      });
    } // return (
    //     <Container>
    //         <Head>
    //             <title>Initial</title>
    //             <link
    //                 rel="stylesheet"
    //                 href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
    //             />
    //         </Head>
    //         <Form onSubmit={this.onSubmit}>
    //             <Form.Field>
    //                 <h3 style = {{paddingTop: 30}}>Search Medicine</h3>
    //                 <input
    //                     id="searchDrug"
    //                     name= "name"
    //                     placeholder='First Name'
    //                     list="drugNameSuggestions"
    //                     autoComplete="off"
    //                     onChange={this.myChangeHandler}
    //                     onKeyUp={this.onKeyUpHandler}
    //                     value={this.state.name}
    //                 />
    //                 <datalist id="drugNameSuggestions">
    //                     {/* <option>paracetamol</option> */}
    //                     {
    //                         options
    //                     }
    //                 </datalist>
    //             </Form.Field>
    //             <Form.Field>
    //                 <label>Search By</label>
    //                 <Radio
    //                     label='Brand Name'
    //                     name='type'
    //                     value='brand'
    //                     checked={this.state.type === 'brand'}
    //                     onChange={this.onRadioButtonChangeHandler}
    //                 />
    //             </Form.Field>
    //             <Form.Field>
    //                 <Radio
    //                     label='Generic'
    //                     name='type'
    //                     value='generic'
    //                     checked={this.state.type === 'generic'}
    //                     onChange={this.onRadioButtonChangeHandler}
    //                 />
    //             </Form.Field>
    //             <Button type='submit'>
    //                 Submit
    //             </Button>
    //         </Form>
    //     </Container> 
    // )


    return __jsx("div", {
      className: "search-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Initial"), __jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Oswald|Poppins|Shadows+Into+Light&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), __jsx("div", {
      className: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("div", {
      class: "ui action input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      id: "searchDrug",
      name: "name",
      placeholder: "Search Medicine",
      list: "drugNameSuggestions",
      autoComplete: "off",
      onChange: this.myChangeHandler,
      onKeyUp: this.onKeyUpHandler,
      value: this.state.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }), __jsx("button", {
      class: "ui button",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "search",
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }), "Search")), __jsx("datalist", {
      id: "drugNameSuggestions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, options)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
      label: "Brand",
      name: "type",
      value: "brand",
      checked: this.state.type === 'brand',
      onChange: this.onRadioButtonChangeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
      label: "Generic",
      name: "type",
      value: "generic",
      checked: this.state.type === 'generic',
      onChange: this.onRadioButtonChangeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    })))), this.state.isSubmitted && __jsx(_components_SearchComponents_SearchList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      medicineList: this.state.fetchedData,
      brandList: this.state.brandList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/src/app/pages/search.js */"./pages/search.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Accordion":
/*!********************************************!*\
  !*** external "react-bootstrap/Accordion" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map