import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoaderSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoaderSpinnerComponent,
  ],
})
export class SharedModule {}
