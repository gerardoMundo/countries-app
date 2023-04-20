import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [SidebarComponent, HomePageComponent, AboutPageComponent, ContactPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, HomePageComponent, AboutPageComponent],
})
export class SharedModule {}
