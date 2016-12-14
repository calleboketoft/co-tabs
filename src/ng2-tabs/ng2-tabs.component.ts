import { Component, ContentChildren, AfterContentInit,
  Output, EventEmitter } from '@angular/core'
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
  @Output() selectedTab = new EventEmitter()
  @ContentChildren(Ng2TabComponent) coTabCmps

  public ngAfterContentInit () {
    let activeTabs = this.coTabCmps.filter(tab => tab.active)
    if (activeTabs.length === 0) {
      this.selectTab(this.coTabCmps.first, true)
    }
  }

  public selectTab (tab, initial?) {
    this.coTabCmps.toArray().forEach(tab => tab.active = false)
    tab.active = true
    this.selectedTab.emit({
      initial: !!initial,
      tab
    })
    return false
  }

  public selectTabByActivatorId (activatorId) {
    let foundTab = this.coTabCmps.toArray().find(tab => tab.activatorId === activatorId)
    if (!foundTab) {
      console.error(`No tab with activatorId: "${activatorId}" found`)
    } else {
      this.selectTab(foundTab)
    }
  }
}
