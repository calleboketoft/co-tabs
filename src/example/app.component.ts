import {Component} from '@angular/core'
import {CoTabsComponent} from '../co-tabs/co-tabs.component'
import {CoTabComponent} from '../co-tabs/co-tab.component'
@Component({
  directives: [CoTabsComponent, CoTabComponent],
  selector: 'app',
  template: `
    <co-tabs>
      <co-tab [tabTitle]='"tab1"'>Anything</co-tab>
      <co-tab [tabTitle]='"tab2"'>Else</co-tab>
    </co-tabs>
  `
})
export class AppComponent {}