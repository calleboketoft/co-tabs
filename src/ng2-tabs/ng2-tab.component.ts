import { Component, Input } from '@angular/core'
@Component({
  selector: 'ng2-tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Ng2TabComponent {
  @Input('tabTitle') title
  @Input('activatorId') activatorId
  @Input() active = false
}
