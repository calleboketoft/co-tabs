"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var co_tabs_cmp_1 = require('../co-tabs/co-tabs-cmp');
var co_tab_cmp_1 = require('../co-tabs/co-tab-cmp');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            directives: [co_tabs_cmp_1.CoTabsCmp, co_tab_cmp_1.CoTabCmp],
            selector: 'app',
            template: "\n    <co-tabs>\n      <co-tab [tabTitle]='\"tab1\"'>Anything</co-tab>\n      <co-tab [tabTitle]='\"tab2\"'>Else</co-tab>\n    </co-tabs>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map