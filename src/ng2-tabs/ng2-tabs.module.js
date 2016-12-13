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
var platform_browser_1 = require("@angular/platform-browser");
var ng2_tabs_component_1 = require("./ng2-tabs.component");
var ng2_tab_component_1 = require("./ng2-tab.component");
var Ng2TabsModule = (function () {
    function Ng2TabsModule() {
    }
    return Ng2TabsModule;
}());
Ng2TabsModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [ng2_tabs_component_1.Ng2TabsComponent, ng2_tab_component_1.Ng2TabComponent],
        exports: [ng2_tabs_component_1.Ng2TabsComponent, ng2_tab_component_1.Ng2TabComponent]
    }),
    __metadata("design:paramtypes", [])
], Ng2TabsModule);
exports.Ng2TabsModule = Ng2TabsModule;
//# sourceMappingURL=ng2-tabs.module.js.map