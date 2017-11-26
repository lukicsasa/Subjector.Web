import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./app.guards";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { RegisterComponent } from "./components/register/register.component";
import { ErrorComponent } from "./components/error/error.component";
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'requests', component: RequestsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent},
  { path: '**', component: NotfoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
