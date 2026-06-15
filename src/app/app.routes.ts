import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Posts } from './pages/posts/posts';
import { Albums } from './pages/albums/albums';
import { Comments } from "./pages/comments/comments";
import { Photos } from "./pages/photos/photos";

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'posts', component: Posts },
  { path: 'albums', component: Albums },
  { path: 'comments', component: Comments},
   { path: 'photos', component: Photos},
];