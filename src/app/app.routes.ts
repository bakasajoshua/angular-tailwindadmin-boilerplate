import { Routes } from '@angular/router';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [{
    path: '',
    component: AppMainComponent
},
{
    path: 'auth',
    component: AuthComponent,
    children: [
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },        {
            path: 'login',
            component: LoginComponent
        },{
            path: 'signup',
            component: SignupComponent
        }
    ]
},{
    path: '**',
    component: NotFoundComponent
}];
