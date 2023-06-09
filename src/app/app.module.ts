import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

// Thư viên getAPI
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ActionUserComponent } from './action-user/action-user.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgxRerenderModule } from 'ngx-rerender';

// Thư viện PrimeNg
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoFocusModule } from 'primeng/autofocus';
import { TabMenuModule } from 'primeng/tabmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const appRouter: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
    },
    {
        path: 'list-user',
        component: ListUserComponent,
    },
    {
        path: 'add-user',
        component: ActionUserComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'edit-user/:id',
        component: EditUserComponent,
    },
    {
        path: '**',
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        ListUserComponent,
        DetailComponent,
        AboutComponent,
        ActionUserComponent,
        HomeComponent,
        EditUserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRouter),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxRerenderModule,
        ButtonModule,
        TreeTableModule,
        InputTextModule,
        ToastModule,
        BrowserAnimationsModule,
        AutoFocusModule,
        TabMenuModule,
        BreadcrumbModule,
        ConfirmDialogModule,
    ],
    providers: [DataService],
    bootstrap: [AppComponent],
})
export class AppModule {}
