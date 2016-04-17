import {Component} from 'angular2/core'
import {CoTabsCmp} from '../co-tabs/co-tabs-cmp'
import {CoTabCmp} from '../co-tabs/co-tab-cmp'
@Component({
  directives: [CoTabsCmp, CoTabCmp],
  selector: 'app',
  template: `
    <co-tabs>
      <co-tab [tabTitle]='"tab1"'>Anything</co-tab>
      <co-tab [tabTitle]='"tab2"'>Else</co-tab>
    </co-tabs>
  `
})
export class AppCmp {}