import { UserService } from './../../services/user.service';
import { CommunicationService } from './../../shared/service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  notFound: any;
  constructor(
    private formBuider: FormBuilder,
    private router: Router,
    private communicationService: CommunicationService,
    private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuider.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]]
    })
    this.notFound = false;

  }
  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        if (response.role=="admin") {
            localStorage.setItem("connectedUserId", response.id);
            this.communicationService.updateData({connexion:true,role:response.role});
            this.router.navigate(['admin']);
        }else if(response.role=="user"){
          localStorage.setItem("connectedUserId", response.id);
            this.communicationService.updateData({connexion:true,role:response.role});
            this.router.navigate(['']);
        }else if (response.role=="chef") {
          localStorage.setItem("connectedUserId", response.id);
            this.communicationService.updateData({connexion:true,role:response.role});
            this.router.navigate(['dashboardChef']);
        }else {
          this.notFound = true;
        }
      });
  }
  goToSignup() {
    this.router.navigate(["subscription"])
  }
}
