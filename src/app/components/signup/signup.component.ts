import { UserService } from './../../services/user.service';
import { MustMatch } from 'src/app/validators/mustMatch';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  path: string;
  users: any = [];
  emailExist:boolean=false;
  telExist:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ["", [Validators.required, Validators.email]],
      tel: ["", [Validators.required, Validators.pattern(/^\d{8}$/)]],
      // regular expression /-------/
      //  ^ matches any string with 1 digit at the beginning \d (digit)
      //  {8} 8 digit at least
      // $ only 8 digit 
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20),
      // Validators.pattern(/\d/),Validators.pattern(/[A-Z]/),Validators.pattern(/[a-z]/),
      Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$:;#^'"²§/,=+/!%*?&])/)
      ]],
      confirmPwd: [""],
      gender: ["0",[Validators.required]]
    },
      {
        validator: [MustMatch('pwd', 'confirmPwd')]
      }
    )
  }
  signup() {
    let role = (this.path == "/signupAdmin") ? "admin" : "user";
    this.signupForm.value.role = role;
    this.signupForm.value.status = "not active";
    this.userService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log("here reponse is ", response);
        if (response.telExist || response.emailExist) {
          this.emailExist=response.emailExist;
          this.telExist=response.telExist;
        } else {
          this.router.navigate(["connexion"]);
        }
      });
  }
  goToLogin() {
    this.router.navigate(["connexion"]);
  }
}
