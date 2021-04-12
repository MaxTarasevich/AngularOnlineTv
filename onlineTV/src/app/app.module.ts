import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ButtonComponent } from './button/button.component';
import { TrendingTNShowComponent } from './trending-tnshow/trending-tnshow.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { GenresComponent } from './genres/genres.component';
import { ActorsComponent } from './actors/actors.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ButtonComponent,
    TrendingTNShowComponent,
    TrendingMoviesComponent,
    GenresComponent,
    ActorsComponent,
    CommingSoonComponent,
    RegisterNowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
