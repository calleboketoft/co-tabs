import {Component, Input} from '@angular/core'
@Component({
  selector: 'co-tab',
  template: `
    <div [hidden]='!active' class='pane'>
      <ng-content></ng-content>
    </div>
  `
})
export class CoTabCmp {
  @Input('tabTitle') title;
  @Input() active = false;
}