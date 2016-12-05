import { Component, ViewChild } from '@angular/core'
import { Ng2TabsComponent } from '../../index'
@Component({
  selector: 'app',
  template: `
    <ng2-tabs>
      <ng2-tab [tabTitle]='"tab1"'>Some content in tab 1</ng2-tab>
      <ng2-tab [tabTitle]='"tab2"' [activatorId]="'nr2'">Content in tab 2</ng2-tab>
    </ng2-tabs>

    <br>
    <button class="btn btn-primary" (click)="selectTab2()">
      Select tab2
    </button>
  `
})
export class AppComponent {
  @ViewChild(Ng2TabsComponent) public ng2TabsComponent: Ng2TabsComponent

  public selectTab2 () {
    this.ng2TabsComponent.selectTabByActivatorId('nr2')
  }
}
