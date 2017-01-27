import { Component, ViewChild } from '@angular/core'
import { Ng2TabsComponent } from '../../index'
@Component({
  selector: 'app',
  template: `
    <ng2-tabs (selectedTab)="selectedTab($event)">
      <ng2-tab [tabTitle]='"tab1"'>Some content in tab 1</ng2-tab>
      <ng2-tab [tabTitle]='"tab2"' [activatorId]="'nr2'">Content in tab 2</ng2-tab>
    </ng2-tabs>

    <br>
    <button class="btn btn-primary" (click)="selectTab('nr2')">
      Select tab2
    </button>
    <button class="btn btn-danger" (click)="selectTab('bob')">
      Select bob (doesn't exist)
    </button>
  `
})
export class AppComponent {
  @ViewChild(Ng2TabsComponent) public ng2TabsComponent: Ng2TabsComponent

  public selectTab (activatorId) {
    this.ng2TabsComponent.selectTab({ activatorId })
  }

  public selectedTab (options) {
    console.log(options)
  }
}
