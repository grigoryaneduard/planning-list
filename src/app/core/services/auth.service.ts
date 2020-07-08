import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.firebaseAuth.idToken.subscribe((token => {
      if (token !== null) {
        const savedToken = localStorage.getItem('token');
        if (!savedToken) {
          localStorage.setItem('token', token);
        }
        this.router.navigate(['/planning']);
      } else {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    }));
  }

  login(email: string, password: string): void {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(() => {
      console.log('Congratulation you are successfully logged');
    }).catch(e => {
      console.error(e);
    });
  }

  logout(): void {
    this.firebaseAuth.signOut().then(() => {
      console.log('Log out');
    }).catch(e => {
      console.error(e);
    });
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
