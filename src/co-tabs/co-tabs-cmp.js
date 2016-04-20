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
var co_tab_cmp_1 = require('./co-tab-cmp');
var CoTabsCmp = (function () {
    function CoTabsCmp() {
    }
    CoTabsCmp.prototype.ngAfterContentInit = function () {
        var activeTabs = this.coTabCmps.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.coTabCmps.first);
        }
    };
    CoTabsCmp.prototype.selectTab = function (tab) {
        this.coTabCmps.toArray().forEach(function (tab) { return tab.active = false; });
        tab.active = true;
        return false;
    };
    __decorate([
        core_1.ContentChildren(co_tab_cmp_1.CoTabCmp), 
        __metadata('design:type', Object)
    ], CoTabsCmp.prototype, "coTabCmps", void 0);
    CoTabsCmp = __decorate([
        core_1.Component({
            selector: 'co-tabs',
            template: "\n    <ul class='nav nav-tabs'>\n      <li class='nav-item' *ngFor='#tab of coTabCmps'\n        (click)='selectTab(tab)'>\n        <a href='#' class='nav-link'\n          [class.active]='tab.active'>\n          {{tab.title}}\n        </a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoTabsCmp);
    return CoTabsCmp;
}());
exports.CoTabsCmp = CoTabsCmp;
//# sourceMappingURL=co-tabs-cmp.js.map