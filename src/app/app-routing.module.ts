import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { HelloComponent } from './pages/hello/hello.component';
import { YesFlowersComponent } from './pages/yes-flowers/yes-flowers.component';
import { NoFlowersComponent } from './pages/no-flowers/no-flowers.component';
import { StoryComponent } from './pages/story/story.component';
import { VideoIntroComponent } from './pages/video-intro/video-intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'video-intro', component: VideoIntroComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'yes', component: YesFlowersComponent },
  { path: 'no', component: NoFlowersComponent },
  { path: 'story', component: StoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
