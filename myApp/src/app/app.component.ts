import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './services/user.service'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  errorMessage="";
  public currentUser: User;
  private userModel:User=new User();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userSubject.subscribe(user => {
      this.currentUser = user;
    })
  }

  login(){
    if(this.userModel.userFormGroup.valid){
      this.errorMessage="";
      this.userService.login(this.userModel.userFormGroup.value['usernameFormControl'],this.userModel.userFormGroup.value['passwordFormControl']).catch((err)=>{
        this.errorMessage=err;
      });
    }else{
      this.errorMessage="username and password cannot be empty";
    }
  }

  logout(){
    this.userService.logout();
    
  }

}
