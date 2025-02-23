import { Component, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportFixComponent } from "../../support-fix/support-fix.component";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-sing-in',
  imports: [FormsModule, SupportFixComponent],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})
export class SingInComponent {
  constructor(private router: Router) { }
  closeLogin() {
    this.router.navigate(['/home']);
  }
  onLogin() {
    throw new Error('Method not implemented.');
  }
  onBack = output({});
  back: boolean = false;
  goLogin(n: any) {
    this.onBack.emit(n)
  }
    ifInputFill = {
      error: false,
    }
    show: boolean = false;

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
  username: string = "";
  password: string = "";
  Repassword: string = "";


}
