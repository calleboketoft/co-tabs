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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY28tdGFicy1jbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjby10YWJzLWNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQ3pDLENBQUMsQ0FEdUQ7QUFDeEQsMkJBQXVCLGNBQ3ZCLENBQUMsQ0FEb0M7QUFnQnJDO0lBQUE7SUFlQSxDQUFDO0lBWkMsc0NBQWtCLEdBQWxCO1FBQ0UsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxFQUFWLENBQVUsQ0FBQyxDQUFBO1FBQ3pELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVcsR0FBRztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtRQUMzRCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNqQixNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQWJEO1FBQUMsc0JBQWUsQ0FBQyxxQkFBUSxDQUFDOztnREFBQTtJQWhCNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLDJTQVdUO1NBQ0YsQ0FBQzs7aUJBQUE7SUFnQkYsZ0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGlCQUFTLFlBZXJCLENBQUEifQ==