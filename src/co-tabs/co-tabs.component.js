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
var core_1 = require('@angular/core');
var co_tab_component_1 = require('./co-tab.component');
var CoTabsComponent = (function () {
    function CoTabsComponent() {
    }
    CoTabsComponent.prototype.ngAfterContentInit = function () {
        var activeTabs = this.coTabCmps.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.coTabCmps.first);
        }
    };
    CoTabsComponent.prototype.selectTab = function (tab) {
        this.coTabCmps.toArray().forEach(function (tab) { return tab.active = false; });
        tab.active = true;
        return false;
    };
    __decorate([
        core_1.ContentChildren(co_tab_component_1.CoTabComponent), 
        __metadata('design:type', Object)
    ], CoTabsComponent.prototype, "coTabCmps", void 0);
    CoTabsComponent = __decorate([
        core_1.Component({
            selector: 'co-tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of coTabCmps\"\n        (click)=\"selectTab(tab)\">\n        <a href=\"#\" class=\"nav-link\"\n          [class.active]=\"tab.active\">\n          {{tab.title}}\n        </a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CoTabsComponent);
    return CoTabsComponent;
}());
exports.CoTabsComponent = CoTabsComponent;
//# sourceMappingURL=co-tabs.component.js.map