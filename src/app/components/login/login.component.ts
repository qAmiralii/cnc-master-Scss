import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SingInComponent } from './sing-in/sing-in.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  Sback($event: void) {
    this.showSignIn = false;
  }
  constructor(private router: Router) { }
  closeLogin() {
    this.router.navigate(['/home']);
  }
  showSignIn: boolean = false;
  goSignIn() {
    this.showSignIn = !this.showSignIn;
  }
  ifInputFill = {
    error: false,
  }
  show: boolean = false;
  ifMenuClick = {
    sMenuClick: !this.show,
  }
  inputCheck() {
    if (this.Repassword == "") {
      this.ifInputFill.error = true
      console.log("karmenikone");
    }
  }
  checkUser() {
    if (this.password !== this.Repassword) {
      console.log("ramz dorost nist!")
    }
  }
  reset() {
    this.username = this.password = this.Repassword = "";
  }
  SL: string = "Sign Up"
  onLogin() {

  }
  username: string = "";
  password: string = "";
  Repassword: string = "";


}


// @Component({
//   selector: 'app-login',
//   imports: [FormsModule, SingInComponent],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
