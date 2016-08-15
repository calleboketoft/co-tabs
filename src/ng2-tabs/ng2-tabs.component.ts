import { Component, ContentChildren } from '@angular/core'
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
export class Ng2TabsComponent {
  @ContentChildren(Ng2TabComponent) coTabCmps

  ngAfterContentInit () {
    let activeTabs = this.coTabCmps.filter(tab => tab.active)
    if (activeTabs.length === 0) {
      this.selectTab(this.coTabCmps.first)
    }
  }

  selectTab (tab) {
    this.coTabCmps.toArray().forEach(tab => tab.active = false)
    tab.active = true
    return false
  }
}