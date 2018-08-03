(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    margin: 10px 0px;\r\n}\r\n\r\n#product {\r\n    text-align: center;\r\n}\r\n\r\n#price {\r\n    display: none;\r\n    text-align: center;\r\n    border: 2px double #5EACE9;\r\n    font-size: 1.5em;\r\n    border-radius: 50px;\r\n}\r\n\r\n#cals {\r\n    display: none;\r\n    text-align: center;\r\n    border: 2px double #5EACE9;\r\n    font-size: 1.5em;\r\n    border-radius: 50px;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0px;\r\n    font-size: 20px;\r\n}\r\n\r\n.main {\r\n    margin-top: 15px;\r\n    background-color: #DBE7EF;\r\n}\r\n\r\n.checkbox {\r\n    margin-top: 10px;\r\n    padding: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\nselect,\r\ninput {\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n    -webkit-appearance: none;\r\n    border-radius: 50px;\r\n    text-align-last: center;\r\n    color: #848484\r\n}\r\n\r\n.alignEnd {\r\n    text-align: center;\r\n}\r\n\r\n.textLabel {\r\n    background-color: white;\r\n    width: 100px;\r\n    border-radius: 50px;\r\n    padding-bottom: 5px;\r\n    padding-top: 2px;\r\n    color: #848484\r\n}\r\n\r\n.textLabel:hover {\r\n    background-color: #5EACE9;\r\n    color: white;\r\n}\r\n\r\nselect:hover,\r\nselect:active,\r\nselect:focus {\r\n    background-color: #5EACE9;\r\n    color: white;\r\n}\r\n\r\n.logoImg {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.logoImg img {\r\n    border-radius: 100px;\r\n}\r\n\r\n.calcCurrency {\r\n    color: #848484;\r\n    font-weight: bold;\r\n}\r\n\r\n.button {\r\n    border-radius: 50px;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row main\">\n    <div class=\"col-12\">\n      <div class=\"logo\">\n        <div class=\"row\">\n          <div class=\"col-12 logoImg text-center\">\n            <img src=\"https://image.ibb.co/c8yqVe/Ho_VPYLVg_HAA.jpg\" width=\"280px\" height=\"150px\" alt=\"Dear House\">\n          </div>\n        </div>\n      </div>\n      <div (change)=\"price()\">\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-4 align-self-center alignEnd\">\n              <label class=\"textLabel\">Продукт</label>\n            </div>\n            <div class=\"col-8\">\n              <select name=\"product\" id=\"product\" #product (change)=\"fan(product.value)\" class=\"form-control\">\n                <option value=\"default\" selected>Виберіть значення</option>\n                <option value=\"zebra\">Зебра М19 МП</option>\n                <option value=\"kolibri\">Колібрі М19</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-4 align-self-center alignEnd\">\n              <label class=\"textLabel\"> Модуль</label>\n            </div>\n            <div class=\"col-8\">\n              <select name=\"mod\" id=\"mod\" #type (change)=\"fan1(type.value)\" class=\"form-control\">\n                <option value=\"default\" selected>Виберіть значення</option>\n                <option value=\"O\">O</option>\n                <option value=\"A\">A</option>\n                <option value=\"B\">B</option>\n                <option value=\"C\">C</option>\n                <option value=\"D\">D</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-4 alignEnd\">\n              <label class=\"textLabel\">Ширина</label>\n            </div>\n            <div class=\"col-8\">\n              <select name=\"width\" id=\"width\" #width (change)=\"fan2(width.value)\" class=\"form-control\">\n                <option value=\"default\" selected>Виберіть значення</option>\n                <option value=\"30\">30</option>\n                <option value=\"40\">40</option>\n                <option value=\"50\">50</option>\n                <option value=\"60\">60</option>\n                <option value=\"70\">70</option>\n                <option value=\"80\">80</option>\n                <option value=\"90\">90</option>\n                <option value=\"100\">100</option>\n                <option value=\"110\">110</option>\n                <option value=\"120\">120</option>\n                <option value=\"130\">130</option>\n                <option value=\"140\">140</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-4 alignEnd\">\n              <label class=\"textLabel\">Висота</label>\n            </div>\n            <div class=\"col-8\">\n              <select name=\"heigth\" id=\"heigth\" #heigth (change)=\"fan3(heigth.value)\" class=\"form-control\">\n                <option value=\"default\" selected>Виберіть значення</option>\n                <option value=\"60\">60</option>\n                <option value=\"80\">80</option>\n                <option value=\"100\">100</option>\n                <option value=\"120\">120</option>\n                <option value=\"140\">140</option>\n                <option value=\"160\">160</option>\n                <option value=\"180\">180</option>\n                <option value=\"200\">200</option>\n                <option value=\"220\">220</option>\n                <option value=\"240\">240</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-4 alignEnd\">\n              <label class=\"textLabel\">Фіксація</label>\n            </div>\n            <div class=\"col-8\">\n              <select name=\"checkbox\" id=\"checkbox\" #checkbox (change)=\"fan4(checkbox.value)\" class=\"form-control\">\n                <option value=\"yes\" selected>ТАК</option>\n                <option value=\"no\">Ні</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"price\"></div>\n      <div class=\"calculet\">\n        <div class=\"form-group text-center \">\n          <label for=\"currency\" class=\"calcCurrency\">Розрахунок Валюти</label>\n          <input type=\"number\" name=\"currency\" id=\"currency\" placeholder=\"Введіть курс Валюти\" class=\"form-control\" #currency>\n        </div>\n        <div id=\"cals\">\n        </div>\n        <button (click)=\"Calc(currency.value)\" type=\"button\" class=\"button btn btn-primary btn-block\">Розрахувати</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.checkbox = 'yes';
        this.arr = [
            {
                product: 'zebra', type: 'O', width: '30', heigth: '60', price: '11.9'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '80', price: '12.7'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '100', price: '13.5'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '120', price: '14.3'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '140', price: '15.1'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '160', price: '16.0'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '180', price: '16.8'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '200', price: '17.6'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '220', price: '18.4'
            },
            {
                product: 'zebra', type: 'O', width: '30', heigth: '240', price: '19.2'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '60', price: '13.7'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '80', price: '14.7'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '100', price: '15.8'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '120', price: '16.8'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '140', price: '17.9'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '160', price: '18.9'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '180', price: '19.9'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '200', price: '21.0'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '220', price: '22.0'
            },
            {
                product: 'zebra', type: 'O', width: '40', heigth: '240', price: '23.1'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '60', price: '15.5'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '80', price: '16.7'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '100', price: '18.0'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '120', price: '19.3'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '140', price: '20.6'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '160', price: '21.8'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '180', price: '23.1'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '200', price: '24.4'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '220', price: '25.7'
            },
            {
                product: 'zebra', type: 'O', width: '50', heigth: '240', price: '26.9'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '60', price: '17.3'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '80', price: '18.8'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '100', price: '20.3'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '120', price: '21.8'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '140', price: '23.3'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '160', price: '24.8'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '180', price: '26.3'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '200', price: '27.8'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '220', price: '29.8'
            },
            {
                product: 'zebra', type: 'O', width: '60', heigth: '240', price: '30.8'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '60', price: '19.0'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '80', price: '20.8'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '100', price: '22.5'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '120', price: '24.2'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '140', price: '26.0'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '160', price: '27.7'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '180', price: '29.5'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '200', price: '31.2'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '220', price: '32.9'
            },
            {
                product: 'zebra', type: 'O', width: '70', heigth: '240', price: '34.7'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '60', price: '20.8'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '80', price: '22.8'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '100', price: '24.8'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '120', price: '26.7'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '140', price: '28.7'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '160', price: '30.7'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '180', price: '32.6'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '200', price: '34.6'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '220', price: '36.6'
            },
            {
                product: 'zebra', type: 'O', width: '80', heigth: '240', price: '38.5'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '60', price: '22.6'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '80', price: '24.8'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '100', price: '27.0'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '120', price: '29.2'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '140', price: '31.4'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '160', price: '33.6'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '180', price: '35.8'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '200', price: '38.0'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '220', price: '40.2'
            },
            {
                product: 'zebra', type: 'O', width: '90', heigth: '240', price: '42.4'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '60', price: '24.4'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '80', price: '26.8'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '100', price: '29.3'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '120', price: '31.7'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '140', price: '34.1'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '160', price: '36.5'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '180', price: '39.0'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '200', price: '41.4'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '220', price: '43.8'
            },
            {
                product: 'zebra', type: 'O', width: '100', heigth: '240', price: '46.2'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '60', price: '26.2'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '80', price: '28.8'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '100', price: '31.5'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '120', price: '34.2'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '140', price: '36.8'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '160', price: '39.5'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '180', price: '42.1'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '200', price: '44.8'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '220', price: '47.5'
            },
            {
                product: 'zebra', type: 'O', width: '110', heigth: '240', price: '50.1'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '60', price: '28.0'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '80', price: '30.9'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '100', price: '33.8'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '120', price: '36.6'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '140', price: '39.5'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '160', price: '42.4'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '180', price: '45.3'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '200', price: '48.2'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '220', price: '51.1'
            },
            {
                product: 'zebra', type: 'O', width: '120', heigth: '240', price: '54.0'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '60', price: '29.8'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '80', price: '32.9'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '100', price: '36.0'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '120', price: '39.1'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '140', price: '42.2'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '160', price: '45.4'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '180', price: '48.5'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '200', price: '51.6'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '220', price: '54.7'
            },
            {
                product: 'zebra', type: 'O', width: '130', heigth: '240', price: '57.8'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '60', price: '31.5'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '80', price: '34.9'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '100', price: '38.2'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '120', price: '41.6'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '140', price: '45.0'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '160', price: '48.3'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '180', price: '51.7'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '200', price: '55.0'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '220', price: '58.4'
            },
            {
                product: 'zebra', type: 'O', width: '140', heigth: '240', price: '61.7'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '60', price: '13.2'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '80', price: '14.3'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '100', price: '15.5'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '120', price: '16.7'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '140', price: '17.9'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '160', price: '19.1'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '180', price: '20.3'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '200', price: '21.5'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '220', price: '22.7'
            },
            {
                product: 'zebra', type: 'A', width: '30', heigth: '240', price: '23.9'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '60', price: '15.4'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '80', price: '16.9'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '100', price: '18.5'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '120', price: '20.0'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '140', price: '21.6'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '160', price: '23.1'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '180', price: '24.7'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '200', price: '26.2'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '220', price: '27.8'
            },
            {
                product: 'zebra', type: 'A', width: '40', heigth: '240', price: '29.3'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '60', price: '17.6'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '80', price: '19.5'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '100', price: '21.4'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '120', price: '23.3'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '140', price: '25.2'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '160', price: '27.1'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '180', price: '29.0'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '200', price: '30.9'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '220', price: '32.8'
            },
            {
                product: 'zebra', type: 'A', width: '50', heigth: '240', price: '34.7'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '60', price: '19.8'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '80', price: '22.0'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '100', price: '24.3'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '120', price: '26.6'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '140', price: '28.8'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '160', price: '31.1'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '180', price: '33.4'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '200', price: '35.6'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '220', price: '37.9'
            },
            {
                product: 'zebra', type: 'A', width: '60', heigth: '240', price: '40.1'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '60', price: '22.0'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '80', price: '24.6'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '100', price: '27.2'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '120', price: '29.8'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '140', price: '32.5'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '160', price: '35.1'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '180', price: '37.7'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '200', price: '40.3'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '220', price: '42.9'
            },
            {
                product: 'zebra', type: 'A', width: '70', heigth: '240', price: '45.6'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '60', price: '24.2'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '80', price: '27.2'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '100', price: '30.1'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '120', price: '33.1'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '140', price: '36.1'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '160', price: '39.1'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '180', price: '42.1'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '200', price: '45.0'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '220', price: '48.0'
            },
            {
                product: 'zebra', type: 'A', width: '80', heigth: '240', price: '51.0'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '60', price: '26.4'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '80', price: '29.7'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '100', price: '33.1'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '120', price: '36.4'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '140', price: '39.7'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '160', price: '43.1'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '180', price: '46.4'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '200', price: '49.7'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '220', price: '53.1'
            },
            {
                product: 'zebra', type: 'A', width: '90', heigth: '240', price: '56.4'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '60', price: '28.6'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '80', price: '32.3'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '100', price: '36.0'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '120', price: '39.7'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '140', price: '43.4'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '160', price: '47.1'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '180', price: '50.8'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '200', price: '54.4'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '220', price: '58.1'
            },
            {
                product: 'zebra', type: 'A', width: '100', heigth: '240', price: '61.8'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '60', price: '30.8'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '80', price: '34.9'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '100', price: '38.9'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '120', price: '43.0'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '140', price: '47.0'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '160', price: '51.1'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '180', price: '55.1'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '200', price: '59.1'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '220', price: '63.2'
            },
            {
                product: 'zebra', type: 'A', width: '110', heigth: '240', price: '67.2'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '60', price: '33.0'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '80', price: '37.4'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '100', price: '41.8'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '120', price: '46.2'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '140', price: '50.6'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '160', price: '55.0'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '180', price: '59.5'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '200', price: '63.9'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '220', price: '68.3'
            },
            {
                product: 'zebra', type: 'A', width: '120', heigth: '240', price: '72.7'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '60', price: '35.2'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '80', price: '40.0'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '100', price: '44.8'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '120', price: '49.5'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '140', price: '54.3'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '160', price: '59.0'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '180', price: '63.8'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '200', price: '68.3'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '220', price: '73.3'
            },
            {
                product: 'zebra', type: 'A', width: '130', heigth: '240', price: '78.1'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '60', price: '37.4'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '80', price: '42.6'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '100', price: '47.7'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '120', price: '52.8'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '140', price: '57.9'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '160', price: '63.0'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '180', price: '68.2'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '200', price: '73.3'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '220', price: '78.4'
            },
            {
                product: 'zebra', type: 'A', width: '140', heigth: '240', price: '83.5'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '60', price: '14.1'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '80', price: '15.6'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '100', price: '17.2'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '120', price: '18.8'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '140', price: '20.3'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '160', price: '21.9'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '180', price: '23.5'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '200', price: '25.1'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '220', price: '26.6'
            },
            {
                product: 'zebra', type: 'B', width: '30', heigth: '240', price: '28.2'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '60', price: '16.7'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '80', price: '18.7'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '100', price: '20.8'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '120', price: '22.8'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '140', price: '24.9'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '160', price: '26.9'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '180', price: '29.0'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '200', price: '31.0'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '220', price: '33.1'
            },
            {
                product: 'zebra', type: 'B', width: '40', heigth: '240', price: '35.1'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '60', price: '19.3'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '80', price: '21.8'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '100', price: '24.3'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '120', price: '26.9'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '140', price: '29.4'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '160', price: '31.9'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '180', price: '34.5'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '200', price: '37.0'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '220', price: '39.6'
            },
            {
                product: 'zebra', type: 'B', width: '50', heigth: '240', price: '42.1'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '60', price: '21.8'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '80', price: '24.9'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '100', price: '27.9'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '120', price: '30.9'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '140', price: '33.9'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '160', price: '37.0'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '180', price: '40.0'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '200', price: '43.0'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '220', price: '46.0'
            },
            {
                product: 'zebra', type: 'B', width: '60', heigth: '240', price: '49.0'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '60', price: '24.4'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '80', price: '27.9'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '100', price: '31.5'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '120', price: '35.0'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '140', price: '38.5'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '160', price: '42.0'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '180', price: '45.5'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '200', price: '49.0'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '220', price: '52.5'
            },
            {
                product: 'zebra', type: 'B', width: '70', heigth: '240', price: '56.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '60', price: '27.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '80', price: '31.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '100', price: '35.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '120', price: '39.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '140', price: '43.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '160', price: '47.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '180', price: '51.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '200', price: '55.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '220', price: '59.0'
            },
            {
                product: 'zebra', type: 'B', width: '80', heigth: '240', price: '62.9'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '60', price: '29.6'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '80', price: '34.1'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '100', price: '38.6'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '120', price: '43.0'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '140', price: '47.5'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '160', price: '52.0'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '180', price: '56.5'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '200', price: '60.9'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '220', price: '65.4'
            },
            {
                product: 'zebra', type: 'B', width: '90', heigth: '240', price: '69.9'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '60', price: '32.2'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '80', price: '37.2'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '100', price: '42.1'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '120', price: '47.1'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '140', price: '52.1'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '160', price: '57.0'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '180', price: '62.0'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '200', price: '66.9'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '220', price: '71.9'
            },
            {
                product: 'zebra', type: 'B', width: '100', heigth: '240', price: '76.8'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '60', price: '34.8'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '80', price: '40.3'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '100', price: '45.7'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '120', price: '51.1'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '140', price: '56.6'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '160', price: '62.0'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '180', price: '67.5'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '200', price: '72.9'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '220', price: '78.3'
            },
            {
                product: 'zebra', type: 'B', width: '110', heigth: '240', price: '83.8'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '60', price: '37.4'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '80', price: '43.3'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '100', price: '49.3'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '120', price: '55.2'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '140', price: '61.1'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '160', price: '67.0'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '180', price: '73.0'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '200', price: '78.9'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '220', price: '84.8'
            },
            {
                product: 'zebra', type: 'B', width: '120', heigth: '240', price: '90.7'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '60', price: '40.0'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '80', price: '46.4'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '100', price: '52.8'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '120', price: '59.2'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '140', price: '65.6'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '160', price: '72.0'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '180', price: '78.5'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '200', price: '84.9'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '220', price: '91.3'
            },
            {
                product: 'zebra', type: 'B', width: '130', heigth: '240', price: '97.7'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '60', price: '42.6'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '80', price: '49.5'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '100', price: '56.4'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '120', price: '63.3'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '140', price: '70.2'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '160', price: '77.1'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '180', price: '84.0'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '200', price: '90.9'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '220', price: '97.7'
            },
            {
                product: 'zebra', type: 'B', width: '140', heigth: '240', price: '104.6'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '60', price: '15.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '80', price: '17.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '100', price: '19.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '120', price: '21.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '140', price: '23.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '160', price: '25.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '180', price: '27.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '200', price: '29.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '220', price: '31.5'
            },
            {
                product: 'zebra', type: 'C', width: '30', heigth: '240', price: '33.5'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '60', price: '18.6'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '80', price: '21.2'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '100', price: '23.8'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '120', price: '26.4'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '140', price: '29.1'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '160', price: '31.7'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '180', price: '34.3'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '200', price: '36.9'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '220', price: '39.6'
            },
            {
                product: 'zebra', type: 'C', width: '40', heigth: '240', price: '42.2'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '60', price: '21.6'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '80', price: '24.9'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '100', price: '28.1'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '120', price: '31.4'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '140', price: '34.6'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '160', price: '37.9'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '180', price: '41.2'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '200', price: '44.4'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '220', price: '47.7'
            },
            {
                product: 'zebra', type: 'C', width: '50', heigth: '240', price: '50.9'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '60', price: '24.7'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '80', price: '28.6'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '100', price: '32.5'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '120', price: '36.3'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '140', price: '40.2'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '160', price: '44.1'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '180', price: '48.0'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '200', price: '51.9'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '220', price: '55.7'
            },
            {
                product: 'zebra', type: 'C', width: '60', heigth: '240', price: '59.6'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '60', price: '27.8'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '80', price: '32.3'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '100', price: '36.8'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '120', price: '41.3'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '140', price: '45.8'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '160', price: '50.3'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '180', price: '54.8'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '200', price: '59.3'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '220', price: '63.8'
            },
            {
                product: 'zebra', type: 'C', width: '70', heigth: '240', price: '68.3'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '60', price: '30.8'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '80', price: '36.0'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '100', price: '41.1'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '120', price: '46.2'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '140', price: '51.4'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '160', price: '56.5'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '180', price: '61.6'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '200', price: '66.8'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '220', price: '71.9'
            },
            {
                product: 'zebra', type: 'C', width: '80', heigth: '240', price: '77.1'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '60', price: '33.9'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '80', price: '39.7'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '100', price: '45.4'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '120', price: '51.2'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '140', price: '57.0'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '160', price: '62.7'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '180', price: '68.5'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '200', price: '74.2'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '220', price: '80.0'
            },
            {
                product: 'zebra', type: 'C', width: '90', heigth: '240', price: '85.8'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '60', price: '37.0'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '80', price: '43.4'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '100', price: '49.8'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '120', price: '56.1'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '140', price: '62.5'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '160', price: '68.9'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '180', price: '75.3'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '200', price: '81.7'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '220', price: '88.1'
            },
            {
                product: 'zebra', type: 'C', width: '100', heigth: '240', price: '94.5'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '60', price: '40.0'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '80', price: '47.1'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '100', price: '54.1'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '120', price: '61.1'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '140', price: '68.1'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '160', price: '75.1'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '180', price: '82.1'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '200', price: '89.2'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '220', price: '96.2'
            },
            {
                product: 'zebra', type: 'C', width: '110', heigth: '240', price: '103.2'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '60', price: '43.1'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '80', price: '50.8'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '100', price: '58.4'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '120', price: '66.0'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '140', price: '73.7'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '160', price: '81.3'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '180', price: '89.0'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '200', price: '96.6'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '220', price: '104.3'
            },
            {
                product: 'zebra', type: 'C', width: '120', heigth: '240', price: '111.9'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '60', price: '46.2'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '80', price: '54.5'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '100', price: '62.7'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '120', price: '71.0'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '140', price: '79.3'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '160', price: '87.5'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '180', price: '95.8'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '200', price: '104.1'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '220', price: '112.3'
            },
            {
                product: 'zebra', type: 'C', width: '130', heigth: '240', price: '120.6'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '60', price: '49.3'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '80', price: '58.2'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '100', price: '67.0'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '120', price: '75.9'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '140', price: '84.8'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '160', price: '93.7'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '180', price: '102.6'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '200', price: '111.5'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '220', price: '120.4'
            },
            {
                product: 'zebra', type: 'C', width: '140', heigth: '240', price: '129.3'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '60', price: '18.2'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '80', price: '20.9'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '100', price: '23.6'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '120', price: '26.3'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '140', price: '29.0'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '160', price: '31.7'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '180', price: '34.4'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '200', price: '37.2'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '220', price: '39.9'
            },
            {
                product: 'zebra', type: 'D', width: '30', heigth: '240', price: '42.6'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '60', price: '22.1'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '80', price: '25.7'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '100', price: '29.2'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '120', price: '32.8'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '140', price: '36.4'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '160', price: '39.9'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '180', price: '43.5'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '200', price: '47.1'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '220', price: '50.7'
            },
            {
                product: 'zebra', type: 'D', width: '40', heigth: '240', price: '54.2'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '60', price: '26.0'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '80', price: '30.4'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '100', price: '34.8'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '120', price: '39.3'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '140', price: '43.7'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '160', price: '48.1'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '180', price: '52.6'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '200', price: '57.0'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '220', price: '61.4'
            },
            {
                product: 'zebra', type: 'D', width: '50', heigth: '240', price: '65.9'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '60', price: '29.9'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '80', price: '35.2'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '100', price: '40.5'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '120', price: '45.7'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '140', price: '51.0'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '160', price: '56.3'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '180', price: '61.6'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '200', price: '66.9'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '220', price: '72.2'
            },
            {
                product: 'zebra', type: 'D', width: '60', heigth: '240', price: '77.5'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '60', price: '33.7'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '80', price: '39.9'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '100', price: '46.1'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '120', price: '52.2'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '140', price: '58.4'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '160', price: '64.5'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '180', price: '70.7'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '200', price: '76.9'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '220', price: '83.0'
            },
            {
                product: 'zebra', type: 'D', width: '70', heigth: '240', price: '89.2'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '60', price: '37.6'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '80', price: '44.7'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '100', price: '51.7'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '120', price: '58.7'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '140', price: '65.7'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '160', price: '72.7'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '180', price: '79.8'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '200', price: '86.8'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '220', price: '93.8'
            },
            {
                product: 'zebra', type: 'D', width: '80', heigth: '240', price: '100.8'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '60', price: '41.5'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '80', price: '49.4'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '100', price: '57.3'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '120', price: '65.2'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '140', price: '73.1'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '160', price: '80.9'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '180', price: '88.8'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '200', price: '96.7'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '220', price: '104.6'
            },
            {
                product: 'zebra', type: 'D', width: '90', heigth: '240', price: '112.5'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '60', price: '45.4'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '80', price: '54.2'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '100', price: '62.9'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '120', price: '71.7'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '140', price: '80.4'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '160', price: '89.1'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '180', price: '97.9'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '200', price: '106.6'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '220', price: '115.4'
            },
            {
                product: 'zebra', type: 'D', width: '100', heigth: '240', price: '124.1'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '60', price: '49.3'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '80', price: '58.9'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '100', price: '68.5'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '120', price: '78.1'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '140', price: '87.7'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '160', price: '97.3'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '180', price: '107.0'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '200', price: '116.6'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '220', price: '126.2'
            },
            {
                product: 'zebra', type: 'D', width: '110', heigth: '240', price: '135.8'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '60', price: '53.2'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '80', price: '63.7'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '100', price: '74.1'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '120', price: '84.6'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '140', price: '95.1'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '160', price: '105.5'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '180', price: '116.0'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '200', price: '126.5'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '220', price: '137.0'
            },
            {
                product: 'zebra', type: 'D', width: '120', heigth: '240', price: '147.4'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '60', price: '57.1'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '80', price: '68.4'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '100', price: '79.7'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '120', price: '91.1'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '140', price: '102.4'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '160', price: '113.7'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '180', price: '125.1'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '200', price: '136.4'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '220', price: '147.8'
            },
            {
                product: 'zebra', type: 'D', width: '130', heigth: '240', price: '159.1'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '60', price: '61.0'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '80', price: '73.2'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '100', price: '85.4'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '120', price: '97.6'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '140', price: '109.8'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '160', price: '122.0'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '180', price: '134.1'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '200', price: '146.3'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '220', price: '158.5'
            },
            {
                product: 'zebra', type: 'D', width: '140', heigth: '240', price: '170.7'
            }, {
                product: 'kolibri', type: 'A', width: '30', heigth: '60', price: '7.2'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '80', price: '7.8'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '100', price: '8.5'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '120', price: '9.1'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '140', price: '9.8'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '160', price: '10.4'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '180', price: '11.1'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '200', price: '11.7'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '220', price: '12.4'
            },
            {
                product: 'kolibri', type: 'A', width: '30', heigth: '240', price: '13.0'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '60', price: '8.4'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '80', price: '9.2'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '100', price: '10.0'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '120', price: '10.9'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '140', price: '11.7'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '160', price: '12.5'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '180', price: '13.4'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '200', price: '14.2'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '220', price: '15.1'
            },
            {
                product: 'kolibri', type: 'A', width: '40', heigth: '240', price: '15.9'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '60', price: '9.6'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '80', price: '10.6'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '100', price: '11.6'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '120', price: '12.6'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '140', price: '13.6'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '160', price: '14.7'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '180', price: '15.7'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '200', price: '16.7'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '220', price: '17.7'
            },
            {
                product: 'kolibri', type: 'A', width: '50', heigth: '240', price: '18.7'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '60', price: '10.7'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '80', price: '11.9'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '100', price: '13.1'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '120', price: '14.4'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '140', price: '15.6'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '160', price: '16.8'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '180', price: '18.0'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '200', price: '19.2'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '220', price: '20.4'
            },
            {
                product: 'kolibri', type: 'A', width: '60', heigth: '240', price: '21.6'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '60', price: '11.9'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '80', price: '13.3'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '100', price: '14.7'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '120', price: '16.1'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '140', price: '17.5'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '160', price: '18.9'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '180', price: '20.3'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '200', price: '21.7'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '220', price: '23.1'
            },
            {
                product: 'kolibri', type: 'A', width: '70', heigth: '240', price: '24.5'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '60', price: '13.1'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '80', price: '14.7'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '100', price: '16.3'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '120', price: '17.8'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '140', price: '19.4'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '160', price: '21.0'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '180', price: '22.6'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '200', price: '24.2'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '220', price: '25.8'
            },
            {
                product: 'kolibri', type: 'A', width: '80', heigth: '240', price: '27.3'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '60', price: '14.3'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '80', price: '16.0'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '100', price: '17.8'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '120', price: '19.6'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '140', price: '21.4'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '160', price: '23.1'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '180', price: '24.9'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '200', price: '26.7'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '220', price: '28.4'
            },
            {
                product: 'kolibri', type: 'A', width: '90', heigth: '240', price: '30.2'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '60', price: '15.5'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '80', price: '17.4'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '100', price: '19.4'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '120', price: '21.3'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '140', price: '23.3'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '160', price: '25.2'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '180', price: '27.2'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '200', price: '29.1'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '220', price: '31.1'
            },
            {
                product: 'kolibri', type: 'A', width: '100', heigth: '240', price: '33.1'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '60', price: '16.6'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '80', price: '18.8'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '100', price: '20.9'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '120', price: '23.1'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '140', price: '25.2'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '160', price: '27.4'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '180', price: '29.5'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '200', price: '31.6'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '220', price: '33.8'
            },
            {
                product: 'kolibri', type: 'A', width: '110', heigth: '240', price: '35.9'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '60', price: '17.8'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '80', price: '20.1'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '100', price: '22.5'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '120', price: '24.8'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '140', price: '27.1'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '160', price: '29.5'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '180', price: '31.8'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '200', price: '34.1'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '220', price: '36.5'
            },
            {
                product: 'kolibri', type: 'A', width: '120', heigth: '240', price: '38.8'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '60', price: '19.0'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '80', price: '21.5'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '100', price: '24.0'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '120', price: '26.5'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '140', price: '29.1'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '160', price: '31.6'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '180', price: '34.1'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '200', price: '36.6'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '220', price: '39.1'
            },
            {
                product: 'kolibri', type: 'A', width: '130', heigth: '240', price: '41.7'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '60', price: '20.2'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '80', price: '22.9'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '100', price: '25.6'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '120', price: '28.3'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '140', price: '31.0'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '160', price: '33.7'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '180', price: '36.4'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '200', price: '39.1'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '220', price: '41.8'
            },
            {
                product: 'kolibri', type: 'A', width: '140', heigth: '240', price: '44.5'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '60', price: '7.2'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '80', price: '7.8'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '100', price: '8.5'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '120', price: '9.1'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '140', price: '9.8'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '160', price: '10.4'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '180', price: '11.1'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '200', price: '11.7'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '220', price: '12.4'
            },
            {
                product: 'kolibri', type: 'B', width: '30', heigth: '240', price: '13.0'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '60', price: '8.4'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '80', price: '9.2'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '100', price: '10.0'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '120', price: '10.9'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '140', price: '11.7'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '160', price: '12.5'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '180', price: '13.4'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '200', price: '14.2'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '220', price: '15.1'
            },
            {
                product: 'kolibri', type: 'B', width: '40', heigth: '240', price: '15.9'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '60', price: '9.6'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '80', price: '10.6'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '100', price: '11.6'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '120', price: '12.6'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '140', price: '13.6'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '160', price: '14.7'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '180', price: '15.7'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '200', price: '16.7'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '220', price: '17.7'
            },
            {
                product: 'kolibri', type: 'B', width: '50', heigth: '240', price: '18.7'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '60', price: '10.7'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '80', price: '11.9'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '100', price: '13.1'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '120', price: '14.4'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '140', price: '15.6'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '160', price: '16.8'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '180', price: '18.0'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '200', price: '19.2'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '220', price: '20.4'
            },
            {
                product: 'kolibri', type: 'B', width: '60', heigth: '240', price: '21.6'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '60', price: '11.9'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '80', price: '13.3'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '100', price: '14.7'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '120', price: '16.1'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '140', price: '17.5'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '160', price: '18.9'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '180', price: '20.3'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '200', price: '21.7'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '220', price: '23.1'
            },
            {
                product: 'kolibri', type: 'B', width: '70', heigth: '240', price: '24.5'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '60', price: '13.1'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '80', price: '14.7'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '100', price: '16.3'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '120', price: '17.8'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '140', price: '19.4'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '160', price: '21.0'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '180', price: '22.6'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '200', price: '24.2'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '220', price: '25.8'
            },
            {
                product: 'kolibri', type: 'B', width: '80', heigth: '240', price: '27.3'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '60', price: '14.3'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '80', price: '16.0'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '100', price: '17.8'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '120', price: '19.6'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '140', price: '21.4'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '160', price: '23.1'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '180', price: '24.9'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '200', price: '26.7'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '220', price: '28.4'
            },
            {
                product: 'kolibri', type: 'B', width: '90', heigth: '240', price: '30.2'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '60', price: '15.5'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '80', price: '17.4'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '100', price: '19.4'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '120', price: '21.3'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '140', price: '23.3'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '160', price: '25.2'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '180', price: '27.2'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '200', price: '29.2'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '220', price: '31.1'
            },
            {
                product: 'kolibri', type: 'B', width: '100', heigth: '240', price: '33.1'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '60', price: '16.6'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '80', price: '18.8'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '100', price: '20.9'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '120', price: '23.1'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '140', price: '25.2'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '160', price: '27.4'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '180', price: '29.5'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '200', price: '31.6'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '220', price: '33.8'
            },
            {
                product: 'kolibri', type: 'B', width: '110', heigth: '240', price: '35.9'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '60', price: '17.8'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '80', price: '20.1'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '100', price: '22.5'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '120', price: '24.8'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '140', price: '27.1'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '160', price: '29.5'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '180', price: '31.8'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '200', price: '34.1'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '220', price: '36.5'
            },
            {
                product: 'kolibri', type: 'B', width: '120', heigth: '240', price: '38.8'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '60', price: '19.0'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '80', price: '21.5'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '100', price: '24.0'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '120', price: '26.5'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '140', price: '29.1'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '160', price: '31.6'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '180', price: '34.1'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '200', price: '36.6'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '220', price: '39.1'
            },
            {
                product: 'kolibri', type: 'B', width: '130', heigth: '240', price: '41.7'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '60', price: '20.2'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '80', price: '22.9'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '100', price: '25.6'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '120', price: '28.3'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '140', price: '31.0'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '160', price: '33.7'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '180', price: '36.4'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '200', price: '39.1'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '220', price: '41.8'
            },
            {
                product: 'kolibri', type: 'B', width: '140', heigth: '240', price: '44.5'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '60', price: '8.9'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '80', price: '10.0'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '100', price: '11.1'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '120', price: '12.2'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '140', price: '13.3'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '160', price: '14.5'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '180', price: '15.6'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '200', price: '16.7'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '220', price: '17.8'
            },
            {
                product: 'kolibri', type: 'C', width: '30', heigth: '240', price: '18.9'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '60', price: '10.6'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '80', price: '12.1'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '100', price: '13.5'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '120', price: '15.0'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '140', price: '16.5'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '160', price: '17.9'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '180', price: '19.4'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '200', price: '20.8'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '220', price: '22.3'
            },
            {
                product: 'kolibri', type: 'C', width: '40', heigth: '240', price: '23.7'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '60', price: '12.4'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '80', price: '14.2'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '100', price: '16.0'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '120', price: '17.8'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '140', price: '19.6'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '160', price: '21.4'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '180', price: '23.2'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '200', price: '25.0'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '220', price: '26.8'
            },
            {
                product: 'kolibri', type: 'C', width: '50', heigth: '240', price: '28.6'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '60', price: '14.1'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '80', price: '16.3'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '100', price: '18.4'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '120', price: '20.5'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '140', price: '22.7'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '160', price: '24.8'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '180', price: '27.0'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '200', price: '29.1'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '220', price: '31.2'
            },
            {
                product: 'kolibri', type: 'C', width: '60', heigth: '240', price: '33.4'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '60', price: '15.9'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '80', price: '18.4'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '100', price: '20.8'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '120', price: '23.3'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '140', price: '25.8'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '160', price: '28.3'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '180', price: '30.8'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '200', price: '33.2'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '220', price: '35.7'
            },
            {
                product: 'kolibri', type: 'C', width: '70', heigth: '240', price: '38.2'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '60', price: '17.6'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '80', price: '20.4'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '100', price: '23.3'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '120', price: '26.1'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '140', price: '28.9'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '160', price: '31.7'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '180', price: '34.6'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '200', price: '37.4'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '220', price: '40.2'
            },
            {
                product: 'kolibri', type: 'C', width: '80', heigth: '240', price: '43.0'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '60', price: '19.4'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '80', price: '22.5'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '100', price: '25.7'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '120', price: '28.9'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '140', price: '32.0'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '160', price: '35.2'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '180', price: '38.4'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '200', price: '41.5'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '220', price: '44.7'
            },
            {
                product: 'kolibri', type: 'C', width: '90', heigth: '240', price: '47.9'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '60', price: '21.1'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '80', price: '24.6'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '100', price: '28.1'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '120', price: '31.6'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '140', price: '35.2'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '160', price: '38.7'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '180', price: '42.2'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '200', price: '45.7'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '220', price: '49.2'
            },
            {
                product: 'kolibri', type: 'C', width: '100', heigth: '240', price: '52.7'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '60', price: '22.9'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '80', price: '26.7'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '100', price: '30.6'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '120', price: '34.4'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '140', price: '38.3'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '160', price: '42.1'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '180', price: '46.0'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '200', price: '49.8'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '220', price: '53.7'
            },
            {
                product: 'kolibri', type: 'C', width: '110', heigth: '240', price: '57.5'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '60', price: '24.6'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '80', price: '28.8'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '100', price: '33.0'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '120', price: '37.2'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '140', price: '41.4'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '160', price: '45.6'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '180', price: '49.8'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '200', price: '54.0'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '220', price: '58.1'
            },
            {
                product: 'kolibri', type: 'C', width: '120', heigth: '240', price: '62.3'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '60', price: '26.4'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '80', price: '30.9'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '100', price: '35.4'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '120', price: '40.0'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '140', price: '44.5'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '160', price: '49.0'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '180', price: '53.6'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '200', price: '58.1'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '220', price: '62.6'
            },
            {
                product: 'kolibri', type: 'C', width: '130', heigth: '240', price: '67.2'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '60', price: '28.1'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '80', price: '33.0'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '100', price: '37.9'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '120', price: '42.7'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '140', price: '47.6'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '160', price: '52.5'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '180', price: '57.4'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '200', price: '62.2'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '220', price: '67.1'
            },
            {
                product: 'kolibri', type: 'C', width: '140', heigth: '240', price: '72.0'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '60', price: '11.0'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '80', price: '12.5'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '100', price: '14.0'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '120', price: '15.6'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '140', price: '17.1'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '160', price: '18.6'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '180', price: '20.2'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '200', price: '21.7'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '220', price: '23.2'
            },
            {
                product: 'kolibri', type: 'D', width: '30', heigth: '240', price: '24.8'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '60', price: '13.3'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '80', price: '15.3'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '100', price: '17.3'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '120', price: '19.3'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '140', price: '21.3'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '160', price: '23.3'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '180', price: '25.4'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '200', price: '27.4'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '220', price: '29.4'
            },
            {
                product: 'kolibri', type: 'D', width: '40', heigth: '240', price: '31.4'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '60', price: '15.6'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '80', price: '18.1'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '100', price: '20.6'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '120', price: '23.1'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '140', price: '25.5'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '160', price: '28.0'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '180', price: '30.5'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '200', price: '33.0'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '220', price: '35.5'
            },
            {
                product: 'kolibri', type: 'D', width: '50', heigth: '240', price: '38.0'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '60', price: '17.9'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '80', price: '20.9'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '100', price: '23.8'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '120', price: '26.8'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '140', price: '29.8'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '160', price: '32.7'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '180', price: '35.7'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '200', price: '38.7'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '220', price: '41.6'
            },
            {
                product: 'kolibri', type: 'D', width: '60', heigth: '240', price: '44.6'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '60', price: '20.2'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '80', price: '23.6'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '100', price: '27.1'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '120', price: '30.5'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '140', price: '34.0'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '160', price: '37.4'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '180', price: '40.9'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '200', price: '44.3'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '220', price: '47.8'
            },
            {
                product: 'kolibri', type: 'D', width: '70', heigth: '240', price: '51.2'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '60', price: '22.5'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '80', price: '26.4'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '100', price: '30.3'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '120', price: '34.3'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '140', price: '38.2'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '160', price: '42.1'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '180', price: '46.0'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '200', price: '50.0'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '220', price: '53.9'
            },
            {
                product: 'kolibri', type: 'D', width: '80', heigth: '240', price: '57.8'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '60', price: '24.8'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '80', price: '29.2'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '100', price: '33.6'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '120', price: '38.0'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '140', price: '42.4'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '160', price: '46.8'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '180', price: '51.2'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '200', price: '55.6'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '220', price: '60.0'
            },
            {
                product: 'kolibri', type: 'D', width: '90', heigth: '240', price: '64.4'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '60', price: '27.1'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '80', price: '32.0'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '100', price: '36.9'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '120', price: '41.7'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '140', price: '46.6'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '160', price: '51.5'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '180', price: '56.4'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '200', price: '61.3'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '220', price: '66.1'
            },
            {
                product: 'kolibri', type: 'D', width: '100', heigth: '240', price: '71.0'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '60', price: '29.4'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '80', price: '34.8'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '100', price: '40.1'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '120', price: '45.5'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '140', price: '50.8'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '160', price: '56.2'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '180', price: '61.6'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '200', price: '66.9'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '220', price: '72.3'
            },
            {
                product: 'kolibri', type: 'D', width: '110', heigth: '240', price: '77.6'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '60', price: '31.7'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '80', price: '37.5'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '100', price: '43.4'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '120', price: '49.2'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '140', price: '55.1'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '160', price: '60.9'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '180', price: '66.7'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '200', price: '72.6'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '220', price: '78.4'
            },
            {
                product: 'kolibri', type: 'D', width: '120', heigth: '240', price: '84.2'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '60', price: '34.0'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '80', price: '40.3'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '100', price: '46.6'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '120', price: '53.0'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '140', price: '59.3'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '160', price: '65.6'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '180', price: '71.9'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '200', price: '78.2'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '220', price: '84.5'
            },
            {
                product: 'kolibri', type: 'D', width: '130', heigth: '240', price: '90.8'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '60', price: '36.3'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '80', price: '43.1'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '100', price: '49.9'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '120', price: '56.7'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '140', price: '63.5'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '160', price: '70.3'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '180', price: '77.1'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '200', price: '83.9'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '220', price: '90.7'
            },
            {
                product: 'kolibri', type: 'D', width: '140', heigth: '240', price: '97.4'
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.fan = function (value) {
        this.product = value;
    };
    MainComponent.prototype.fan1 = function (value) {
        this.type = value;
    };
    MainComponent.prototype.fan2 = function (value) {
        this.width = value;
    };
    MainComponent.prototype.fan3 = function (value) {
        this.heigth = value;
    };
    MainComponent.prototype.fan4 = function (value) {
        this.checkbox = value;
    };
    MainComponent.prototype.fan6 = function (value) {
        this.valuta = (value.target.value);
    };
    MainComponent.prototype.Calc = function (value) {
        console.log(this.test);
        this.valuta = (value);
        if (this.checkbox == 'yes') {
            this.test = this.valuta * (this.CurPrice + 1.5);
            this.test = parseFloat(this.test.toFixed(3));
            var check = this.test;
            var price = check.toString();
            if (isNaN(this.test) == true) {
                document.getElementById('cals').style.display = 'none';
            }
            else {
                document.getElementById('cals').innerText = price;
                document.getElementById('cals').style.display = 'block';
            }
        }
        else if (this.checkbox == 'no') {
            this.test = this.valuta * this.CurPrice;
            this.test = parseFloat(this.test.toFixed(3));
            var check = this.test;
            var price = check.toString();
            document.getElementById('cals').innerText = price;
            document.getElementById('cals').style.display = 'block';
        }
        // }
    };
    MainComponent.prototype.price = function () {
        for (var index = 0; index < this.arr.length; index++) {
            var element = this.arr[index];
            if (element.product == this.product && element.type == this.type && element.heigth == this.heigth && element.width == this.width) {
                this.CurPrice = parseFloat(element.price);
                if (this.checkbox == 'yes') {
                    var check = this.CurPrice + (1.5);
                    var price = check.toString();
                    document.getElementById('price').innerText = (price);
                    document.getElementById('price').style.display = 'block';
                }
                else if (this.checkbox = 'no') {
                    document.getElementById('price').innerText = (element.price);
                    document.getElementById('price').style.display = 'block';
                }
            }
            else {
            }
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\test1\price\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map