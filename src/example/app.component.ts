import {Component} from '@angular/core'
@Component({
  selector: 'app',
  template: `
    <ng2-tabs>
      <ng2-tab [tabTitle]='"tab1"'>Anything</ng2-tab>
      <ng2-tab [tabTitle]='"tab2"'>Else</ng2-tab>
    </ng2-tabs>
  `
})
export class AppComponent {}