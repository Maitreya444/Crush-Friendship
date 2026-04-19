import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { HelloComponent } from './pages/hello/hello.component';
import { YesFlowersComponent } from './pages/yes-flowers/yes-flowers.component';
import { NoFlowersComponent } from './pages/no-flowers/no-flowers.component';
import { StoryComponent } from './pages/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    YesFlowersComponent,
    NoFlowersComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
