import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
    
];
