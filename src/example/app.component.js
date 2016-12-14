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
var index_1 = require("../../index");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.selectTab = function (activatorId) {
        this.ng2TabsComponent.selectTabByActivatorId(activatorId);
    };
    AppComponent.prototype.selectedTab = function (tab) {
        console.log('Tab selected: ', tab);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(index_1.Ng2TabsComponent),
    __metadata("design:type", index_1.Ng2TabsComponent)
], AppComponent.prototype, "ng2TabsComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <ng2-tabs (selectedTab)=\"selectedTab($event)\">\n      <ng2-tab [tabTitle]='\"tab1\"'>Some content in tab 1</ng2-tab>\n      <ng2-tab [tabTitle]='\"tab2\"' [activatorId]=\"'nr2'\">Content in tab 2</ng2-tab>\n    </ng2-tabs>\n\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"selectTab('nr2')\">\n      Select tab2\n    </button>\n    <button class=\"btn btn-danger\" (click)=\"selectTab('bob')\">\n      Select bob (doesn't exist)\n    </button>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map