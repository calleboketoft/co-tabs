import {Component, ContentChildren} from 'angular2/core'
import {CoTabCmp} from './co-tab-cmp'
@Component({
  selector: 'co-tabs',
  template: `
    <ul class='nav nav-tabs'>
      <li *ngFor='#tab of coTabCmps'
        (click)='selectTab(tab)'
        [class.active]='tab.active'>
        <a href='#'>{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class CoTabsCmp {
  @ContentChildren(CoTabCmp) coTabCmps

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