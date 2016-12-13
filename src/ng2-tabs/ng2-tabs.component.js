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
var core_1 = require("@angular/core");
var ng2_tab_component_1 = require("./ng2-tab.component");
var Ng2TabsComponent = (function () {
    function Ng2TabsComponent() {
    }
    Ng2TabsComponent.prototype.ngAfterContentInit = function () {
        var activeTabs = this.coTabCmps.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.coTabCmps.first);
        }
    };
    Ng2TabsComponent.prototype.selectTab = function (tab) {
        this.coTabCmps.toArray().forEach(function (tab) { return tab.active = false; });
        tab.active = true;
        return false;
    };
    Ng2TabsComponent.prototype.selectTabByActivatorId = function (activatorId) {
        this.coTabCmps.toArray().forEach(function (tab) {
            if (tab.activatorId !== activatorId) {
                tab.active = false;
            }
            else {
                tab.active = true;
            }
        });
    };
    return Ng2TabsComponent;
}());
__decorate([
    core_1.ContentChildren(ng2_tab_component_1.Ng2TabComponent),
    __metadata("design:type", Object)
], Ng2TabsComponent.prototype, "coTabCmps", void 0);
Ng2TabsComponent = __decorate([
    core_1.Component({
        selector: 'ng2-tabs',
        template: "\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of coTabCmps\"\n        (click)=\"selectTab(tab)\">\n        <a href=\"#\" class=\"nav-link\"\n          [class.active]=\"tab.active\">\n          {{tab.title}}\n        </a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
    }),
    __metadata("design:paramtypes", [])
], Ng2TabsComponent);
exports.Ng2TabsComponent = Ng2TabsComponent;
//# sourceMappingURL=ng2-tabs.component.js.map