import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private  authService: AuthService) {
    console.log(authService);
  }

  ngOnInit(): void {
  }

  login(): void  {
    this.authService.login('admin@gmail.com', 'admin12345');
  }

  logout(): void {
    this.authService.logout();
  }

}
