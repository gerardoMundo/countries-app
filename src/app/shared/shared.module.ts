import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [SidebarComponent, HomePageComponent, AboutPageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, HomePageComponent, AboutPageComponent],
})
export class SharedModule {}
