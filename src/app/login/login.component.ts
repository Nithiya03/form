import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'tdfForm';
  topics =['angular','react','php'];
  userModel = new User();
  constructor(private router:Router,private login:LoginService){}
  userdata()
  {
    this.login.setMessage(this.userModel);
    // this.login.userName(this.userModel);
    // this.login.display(this.userModel);
    this.router.navigate(['/table']);
  }

  
}