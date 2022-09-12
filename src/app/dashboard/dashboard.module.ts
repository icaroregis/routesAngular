import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashBoardRoutingModule],
  exports: [HomeComponent],
})
export class DashboardModule {}
