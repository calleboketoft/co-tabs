import { Component, ContentChildren, AfterContentInit } from '@angular/core'
import { Ng2TabComponent } from './ng2-tab.component'
@Component({
  selector: 'ng2-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let tab of coTabCmps"
        (click)="selectTab(tab)">
        <a href="#" class="nav-link"
          [class.active]="tab.active">
          {{tab.title}}
        </a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Ng2TabsComponent implements AfterContentInit {
  @ContentChildren(Ng2TabComponent) coTabCmps

  public ngAfterContentInit () {
    let activeTabs = this.coTabCmps.filter(tab => tab.active)
    if (activeTabs.length === 0) {
      this.selectTab(this.coTabCmps.first)
    }
  }

  public selectTab (tab) {
    this.coTabCmps.toArray().forEach(tab => tab.active = false)
    tab.active = true
    return false
  }

  public selectTabByActivatorId (activatorId) {
    this.coTabCmps.toArray().forEach(tab => {
      if (tab.activatorId !== activatorId) {
        tab.active = false
      } else {
        tab.active = true
      }
    })
  }
}
