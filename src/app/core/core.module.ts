import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './admin/components/login/login.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebaseConfig} from '../../environments/environment';
import {AuthGuard} from './admin/services/AuthGuard.service';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule {
}
