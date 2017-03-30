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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_tab_component_1 = require("./ng2-tab.component");
var Ng2TabsComponent = (function () {
    function Ng2TabsComponent() {
        this.selectedTab = new core_1.EventEmitter();
    }
    Ng2TabsComponent.prototype.ngAfterContentInit = function () {
        var activeTabs = this.coTabCmps.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab({
                tab: this.coTabCmps.first,
                selectMethod: 'initFirstTab'
            });
        }
    };
    Ng2TabsComponent.prototype.selectTab = function (options) {
        var foundTab;
        var selectMethod;
        // The tab itself
        if (options.tab) {
            this.unselectAllTabs();
            options.tab.active = true;
            // Select by activator ID
        }
        else if (options.activatorId) {
            selectMethod = 'activatorId';
            foundTab = this.coTabCmps.toArray().find(function (tab) { return tab.activatorId === options.activatorId; });
            if (!foundTab) {
                console.error("No tab with activatorId: \"" + options.activatorId + "\" found");
            }
            else {
                this.unselectAllTabs();
                foundTab.active = true;
            }
        }
        this.selectedTab.emit({
            tab: options.tab || foundTab,
            metaData: options.metaData,
            selectMethod: options.selectMethod || selectMethod,
            activatorId: options.activatorId
        });
        return false;
    };
    Ng2TabsComponent.prototype.unselectAllTabs = function () {
        this.coTabCmps.toArray().forEach(function (tab) { return tab.active = false; });
    };
    return Ng2TabsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2TabsComponent.prototype, "selectedTab", void 0);
__decorate([
    core_1.ContentChildren(ng2_tab_component_1.Ng2TabComponent),
    __metadata("design:type", Object)
], Ng2TabsComponent.prototype, "coTabCmps", void 0);
Ng2TabsComponent = __decorate([
    core_1.Component({
        selector: 'ng2-tabs',
        template: "\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of coTabCmps\"\n        (click)=\"selectTab({tab: tab, selectMethod: 'clickedTab'})\">\n        <a href=\"#\" class=\"nav-link\"\n          [class.active]=\"tab.active\">\n          {{tab.title}}\n        </a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
    })
], Ng2TabsComponent);
exports.Ng2TabsComponent = Ng2TabsComponent;
//# sourceMappingURL=ng2-tabs.component.js.map