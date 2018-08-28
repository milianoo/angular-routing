import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    data: {
      label: 'authentication'
    },
    children: [
      {
        path: 'sign-in/:id',
        component: LoginComponent,
        data: {
          label: 'sign in'
        }
      },
      {
        path: 'sign-up',
        component: RegisterComponent,
        data: {
          label: 'sign up'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
