import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImageGalleryModule} from "./modules/image-gallery/image-gallery.module";
import {GalleryConfig} from "./modules/image-gallery/token";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule
  ],
  providers: [
    {
      provide:GalleryConfig,useValue:3
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
