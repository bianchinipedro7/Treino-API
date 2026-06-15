import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Posts } from './pages/posts/posts';
import { Albums } from './pages/albums/albums';
import { Comments } from "./pages/comments/comments";
import { Photos } from "./pages/photos/photos";
import { Users } from "./pages/users/users";
import { Todo } from "./pages/todos/todos";
import { AlbumsDetail } from "./pages/albums-detail/albums-detail";
import { CommentsDetail } from "./pages/comments-detail/comments-detail";
import { PhotosDetail } from "./pages/photos-detail/photos-detail";
import { PostsDetail } from './pages/posts-detail/posts-detail';
import { TodosDetail } from "./pages/todos-detail/todos-detail";
import { UsersDetail } from "./pages/users-detail/users-detail";

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'posts', component: Posts },
  { path: 'albums', component: Albums },
  { path: 'comments', component: Comments},
  { path: 'photos', component: Photos},
  { path: 'users', component: Users},
  { path: 'todos', component: Todo},
  { path: 'albums/:id', component: AlbumsDetail },
  { path: 'comments/:id', component: CommentsDetail },
  { path: 'photos/:id', component: PhotosDetail },
  { path: 'posts/:id', component: PostsDetail },
  { path: 'todos/:id', component: TodosDetail },
  { path: 'users/:id', component: UsersDetail},
];