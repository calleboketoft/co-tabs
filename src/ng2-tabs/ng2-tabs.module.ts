import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Ng2TabsComponent } from './ng2-tabs.component'
import { Ng2TabComponent } from './ng2-tab.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [Ng2TabsComponent, Ng2TabComponent],
  exports: [Ng2TabsComponent, Ng2TabComponent]
})
export class Ng2TabsModule { }
