import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {PlanningRoutingModule} from './planning-routing.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
  ]
})
export class PlanningModule {
}
