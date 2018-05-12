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

module.exports = ".fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-toolbar color=\"accent\" role=\"header\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <h1>{{title}}</h1>\r\n    <span class=\"fill-remaining-space\"></span>\r\n    <span>Ostap Gonchar</span>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #snav [mode]=\"over\">\r\n      <mat-nav-list>\r\n        <mat-list-item role=\"listitem\" *ngFor=\"let weekDesc of weekDescs\">\r\n          <button mat-raised-button (click)=\"showInfo(weekDesc.id)\">{{ weekDesc.desc }}</button>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n      <h3>Selected Week: {{ week.desc }}</h3>\r\n      <mat-grid-list [cols]=\"mobileQuery.matches ? 1 : 7\" [rowHeight]=\"mobileQuery.matches ? '1:1' : '1:1.6'\">\r\n        <mat-grid-tile>\r\n          <app-day-table [(day)]=\"week.monday\"></app-day-table>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <app-day-table [day]=\"week.tuesday\"></app-day-table>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <app-day-table [day]=\"week.wednesday\"></app-day-table>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <app-day-table [day]=\"week.thursday\"></app-day-table>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <app-day-table [day]=\"week.friday\"></app-day-table>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <app-day-table [day]=\"week.saturday\"></app-day-table>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <app-day-table [day]=\"week.sunday\"></app-day-table>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _weekly_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly-menu.service */ "./src/app/weekly-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(weeklyMenuService, changeDetectorRef, media) {
        this.weeklyMenuService = weeklyMenuService;
        this.title = 'Weekly Menu';
        this.weekDescs = [];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.weekDescs = this.weeklyMenuService.getWeekDescs();
        this.week = this.weeklyMenuService.getCurrentWeek();
    };
    AppComponent.prototype.showInfo = function (id) {
        this.week = this.weeklyMenuService.getWeek(id);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_weekly_menu_service__WEBPACK_IMPORTED_MODULE_2__["WeeklyMenuService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _day_table_day_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./day-table/day-table.component */ "./src/app/day-table/day-table.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _day_table_day_table_component__WEBPACK_IMPORTED_MODULE_7__["DayTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/day-table/day-table.component.css":
/*!***************************************************!*\
  !*** ./src/app/day-table/day-table.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".day-table-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\n.day-table-container > * {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/day-table/day-table.component.html":
/*!****************************************************!*\
  !*** ./src/app/day-table/day-table.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding: 15px;\">\r\n  <div class=\"day-table-container\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"{{day.dayOfWeek}}\" [value]=\"day.date\" readonly>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Breakfast\" [(ngModel)]=\"day.breakfast\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Lunch\" [(ngModel)]=\"day.lunch\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Dinner\" [(ngModel)]=\"day.dinner\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/day-table/day-table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/day-table/day-table.component.ts ***!
  \**************************************************/
/*! exports provided: DayTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTableComponent", function() { return DayTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day */ "./src/app/day-table/day.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DayTableComponent = /** @class */ (function () {
    function DayTableComponent() {
        this.day = new _day__WEBPACK_IMPORTED_MODULE_1__["Day"];
        this.dayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DayTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _day__WEBPACK_IMPORTED_MODULE_1__["Day"])
    ], DayTableComponent.prototype, "day", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DayTableComponent.prototype, "dayChange", void 0);
    DayTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day-table',
            template: __webpack_require__(/*! ./day-table.component.html */ "./src/app/day-table/day-table.component.html"),
            styles: [__webpack_require__(/*! ./day-table.component.css */ "./src/app/day-table/day-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DayTableComponent);
    return DayTableComponent;
}());



/***/ }),

/***/ "./src/app/day-table/day.ts":
/*!**********************************!*\
  !*** ./src/app/day-table/day.ts ***!
  \**********************************/
/*! exports provided: Day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
var Day = /** @class */ (function () {
    function Day() {
    }
    return Day;
}());



/***/ }),

/***/ "./src/app/mock-data.ts":
/*!******************************!*\
  !*** ./src/app/mock-data.ts ***!
  \******************************/
/*! exports provided: WEEK_DESCS, WEEK_1, WEEK_2, WEEK_3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_DESCS", function() { return WEEK_DESCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_1", function() { return WEEK_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_2", function() { return WEEK_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_3", function() { return WEEK_3; });
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week */ "./src/app/week.ts");

var WEEK_DESCS = [
    {
        id: 3,
        desc: '14.05.2016 - 20.05.2018'
    },
    {
        id: 2,
        desc: '07.05.2018 - 13.05.2018'
    },
    {
        id: 1,
        desc: '30.04.2018 - 06.05.2018'
    }
];
var WEEK_1 = new _week__WEBPACK_IMPORTED_MODULE_0__["Week"]();
WEEK_1.id = 1;
WEEK_1.desc = '30.04.2018 - 06.05.2018';
WEEK_1.monday = {
    date: new Date(2018, 3, 30),
    dayOfWeek: 'Monday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_1.tuesday = {
    date: new Date(2018, 4, 1),
    dayOfWeek: 'Tuesday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_1.wednesday = {
    date: new Date(2018, 4, 2),
    dayOfWeek: 'Wednesday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_1.thursday = {
    date: new Date(2018, 4, 3),
    dayOfWeek: 'Thursday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_1.friday = {
    date: new Date(2018, 4, 4),
    dayOfWeek: 'Friday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_1.saturday = {
    date: new Date(2018, 4, 5),
    dayOfWeek: 'Saturday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_1.sunday = {
    date: new Date(2018, 4, 6),
    dayOfWeek: 'Sunday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
var WEEK_2 = new _week__WEBPACK_IMPORTED_MODULE_0__["Week"]();
WEEK_2.id = 2;
WEEK_2.desc = '07.05.2018 - 13.05.2018';
WEEK_2.monday = {
    date: new Date(2018, 4, 7),
    dayOfWeek: 'Monday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_2.tuesday = {
    date: new Date(2018, 4, 8),
    dayOfWeek: 'Tuesday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_2.wednesday = {
    date: new Date(2018, 4, 9),
    dayOfWeek: 'Wednesday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_2.thursday = {
    date: new Date(2018, 4, 10),
    dayOfWeek: 'Thursday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_2.friday = {
    date: new Date(2018, 4, 11),
    dayOfWeek: 'Friday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_2.saturday = {
    date: new Date(2018, 4, 12),
    dayOfWeek: 'Saturday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_2.sunday = {
    date: new Date(2018, 4, 13),
    dayOfWeek: 'Sunday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
var WEEK_3 = new _week__WEBPACK_IMPORTED_MODULE_0__["Week"]();
WEEK_3.id = 3;
WEEK_3.desc = '14.05.2016 - 20.05.2018';
WEEK_3.monday = {
    date: new Date(2018, 4, 14),
    dayOfWeek: 'Monday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_3.tuesday = {
    date: new Date(2018, 4, 15),
    dayOfWeek: 'Tuesday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_3.wednesday = {
    date: new Date(2018, 4, 16),
    dayOfWeek: 'Wednesday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_3.thursday = {
    date: new Date(2018, 4, 17),
    dayOfWeek: 'Thursday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_3.friday = {
    date: new Date(2018, 4, 18),
    dayOfWeek: 'Friday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_3.saturday = {
    date: new Date(2018, 4, 19),
    dayOfWeek: 'Saturday',
    breakfast: '',
    lunch: '',
    dinner: ''
};
WEEK_3.sunday = {
    date: new Date(2018, 4, 20),
    dayOfWeek: 'Sunday',
    breakfast: '',
    lunch: '',
    dinner: ''
};


/***/ }),

/***/ "./src/app/week.ts":
/*!*************************!*\
  !*** ./src/app/week.ts ***!
  \*************************/
/*! exports provided: Week */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week", function() { return Week; });
var Week = /** @class */ (function () {
    function Week() {
    }
    return Week;
}());



/***/ }),

/***/ "./src/app/weekly-menu.service.ts":
/*!****************************************!*\
  !*** ./src/app/weekly-menu.service.ts ***!
  \****************************************/
/*! exports provided: WeeklyMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyMenuService", function() { return WeeklyMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-data */ "./src/app/mock-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeeklyMenuService = /** @class */ (function () {
    function WeeklyMenuService() {
    }
    WeeklyMenuService.prototype.getWeekDescs = function () {
        return _mock_data__WEBPACK_IMPORTED_MODULE_1__["WEEK_DESCS"];
    };
    WeeklyMenuService.prototype.getWeek = function (id) {
        switch (id) {
            case 1: return _mock_data__WEBPACK_IMPORTED_MODULE_1__["WEEK_1"];
            case 2: return _mock_data__WEBPACK_IMPORTED_MODULE_1__["WEEK_2"];
            case 3: return _mock_data__WEBPACK_IMPORTED_MODULE_1__["WEEK_3"];
            default: return _mock_data__WEBPACK_IMPORTED_MODULE_1__["WEEK_1"];
        }
    };
    WeeklyMenuService.prototype.getCurrentWeek = function () {
        return _mock_data__WEBPACK_IMPORTED_MODULE_1__["WEEK_1"];
    };
    WeeklyMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WeeklyMenuService);
    return WeeklyMenuService;
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

module.exports = __webpack_require__(/*! D:\IdeaProjects\weekly-menu\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map