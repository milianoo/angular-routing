import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';

import { NotFoundComponent } from './common/not-found/not-found.component';
import { NotAuthorizedComponent } from './common/not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => AccountsModule
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    data: {
      label: 'Home',
      icon: 'home'
    }
  },
  {
    path: 'unauthorized',
    component: NotAuthorizedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes,
    { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
