import { Component, ContentChildren, AfterContentInit,
  Output, EventEmitter } from '@angular/core'
import { Ng2TabComponent } from './ng2-tab.component'

interface SelectTabModel {
  tab?: Ng2TabComponent
  metaData?: any
  selectMethod?: string // 'clickedTab'
  activatorId?: string
}

@Component({
  selector: 'ng2-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let tab of coTabCmps"
        (click)="selectTab({tab: tab, selectMethod: 'clickedTab'})">
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
      this.selectTab({
        tab: this.coTabCmps.first,
        selectMethod: 'initFirstTab'
      })
    }
  }

  public selectTab (options: SelectTabModel) {
    let foundTab
    let selectMethod

    // The tab itself
    if (options.tab) {
      this.unselectAllTabs()
      options.tab.active = true

    // Select by activator ID
    } else if (options.activatorId) {
      selectMethod = 'activatorId'
      foundTab = this.coTabCmps.toArray().find(tab => tab.activatorId === options.activatorId)
      if (!foundTab) {
        console.error(`No tab with activatorId: "${options.activatorId}" found`)
      } else {
        this.unselectAllTabs()
        foundTab.active = true
      }
    }
    this.selectedTab.emit({
      tab: options.tab || foundTab,
      metaData: options.metaData,
      selectMethod: options.selectMethod || selectMethod,
      activatorId: options.activatorId
    } as SelectTabModel)

    return false
  }

  private unselectAllTabs () {
    this.coTabCmps.toArray().forEach(tab => tab.active = false)
  }
}
