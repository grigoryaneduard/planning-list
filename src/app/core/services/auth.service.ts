import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.firebaseAuth.idToken.subscribe((token => {
      if (token !== null) { localStorage.setItem('token', token); }
    }));
  }

  login(email: string, password: string): void {
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/planning']);
      })
      .catch(err => {
      });
  }

  logout(): void {
    this.firebaseAuth.signOut().then(() => console.log('Log out'));
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
