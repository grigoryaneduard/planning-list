import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './admin/components/login/login.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebaseConfig} from '../../environments/environment';
import {AuthGuard} from './admin/services/AuthGuard.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthGuard]
})
export class CoreModule {
}
