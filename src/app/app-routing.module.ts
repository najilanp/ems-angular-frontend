import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
//http://localhost:4200/users
const routes: Routes = [{ path: 'users', canActivate:[authGuard], loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
//http://localhost:4200/
{path:'',component:LoginComponent},
//http://localhost:4200/
{path:'home',component:HomeComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
