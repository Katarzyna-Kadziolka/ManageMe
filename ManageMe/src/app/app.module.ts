import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FeatureComponent } from './feature/feature.component';
import { TaskComponent } from './task/task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagComponent } from './tag/tag.component';
import { OpenableCardComponent } from './openable-card/openable-card.component';
import { ManagementButtonsComponent } from './management-buttons/management-buttons.component';
import { FeatureFormComponent } from './feature-form/feature-form.component';
import { TagsManagementComponent } from './tags-management/tags-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    ProjectsComponent,
    ProjectComponent,
    NewProjectComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
    ProjectCardComponent,
    FeatureComponent,
    TaskComponent,
    TagComponent,
    OpenableCardComponent,
    ManagementButtonsComponent,
    FeatureFormComponent,
    TagsManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
