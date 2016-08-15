import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { Ng2TabsModule } from '../../'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng2TabsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }