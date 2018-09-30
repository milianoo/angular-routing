import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// modules
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design/material-design.module';

// app components
import { RootComponent } from './root/root.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NotAuthorizedComponent } from './common/not-authorized/not-authorized.component';
import { BreadcrumbsComponent } from './common/breadcrumbs/breadcrumbs.component';
import { ChildrenRoutesMenuComponent } from './common/children-routes-menu/children-routes-menu.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialDesignModule,

    AccountsModule,
    AuthModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    RootComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    BreadcrumbsComponent,
    ChildrenRoutesMenuComponent
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
