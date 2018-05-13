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

module.exports = "<div>\r\n  <mat-toolbar color=\"accent\" role=\"header\">>\r\n    <h1>{{title}}</h1>\r\n    <span class=\"fill-remaining-space\"></span>\r\n    <span>Ostap Gonchar</span>\r\n  </mat-toolbar>\r\n\r\n  <mat-grid-list [cols]=3 rowHeight=\"50px\">\r\n    <mat-grid-tile>\r\n      <mat-form-field>\r\n        <mat-select [ngModel]=\"selectedWeekId\" (ngModelChange)=\"showInfo($event)\">\r\n          <mat-option *ngFor=\"let weekDesc of weekDescs\" [value]=\"weekDesc.id\">\r\n            {{ weekDesc.desc }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <h3 *ngIf=\"week != undefined\">Selected Week: {{ week.desc }}</h3>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <button mat-button color=\"primary\" (click)=\"save()\">Save</button>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n\r\n  <mat-grid-list *ngIf=\"week != undefined\" [cols]=\"mobileQuery.matches ? 1 : 7\" [rowHeight]=\"mobileQuery.matches ? '1:1' : '1:1.6'\">\r\n    <mat-grid-tile>\r\n      <app-day-table [(day)]=\"week.monday\"></app-day-table>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <app-day-table [day]=\"week.tuesday\"></app-day-table>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <app-day-table [day]=\"week.wednesday\"></app-day-table>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <app-day-table [day]=\"week.thursday\"></app-day-table>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <app-day-table [day]=\"week.friday\"></app-day-table>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <app-day-table [day]=\"week.saturday\"></app-day-table>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n      <app-day-table [day]=\"week.sunday\"></app-day-table>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>"

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
        var _this = this;
        this.weeklyMenuService.getWeekDescs()
            .subscribe(function (weekDescs) { return _this.weekDescs = weekDescs; });
        this.weeklyMenuService.getCurrentWeek()
            .subscribe(function (week) {
            _this.week = week;
            _this.selectedWeekId = _this.week.id;
        });
    };
    AppComponent.prototype.showInfo = function (id) {
        var _this = this;
        this.weeklyMenuService.getWeek(id)
            .subscribe(function (week) { return _this.week = week; });
    };
    AppComponent.prototype.save = function () {
        this.weeklyMenuService.save(this.week);
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _day_table_day_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./day-table/day-table.component */ "./src/app/day-table/day-table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _day_table_day_table_component__WEBPACK_IMPORTED_MODULE_6__["DayTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var WeeklyMenuService = /** @class */ (function () {
    function WeeklyMenuService(http) {
        this.http = http;
    }
    WeeklyMenuService.prototype.save = function (week) {
        this.http.post('/week', week, httpOptions)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    WeeklyMenuService.prototype.getWeekDescs = function () {
        return this.http.get('/week/week-desc');
    };
    WeeklyMenuService.prototype.getWeek = function (id) {
        return this.http.get("/week/" + id);
    };
    WeeklyMenuService.prototype.getCurrentWeek = function () {
        return this.http.get('/week/current');
    };
    WeeklyMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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