import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService){}

  title = 'Cooking App';

  ngOnInit(){
    this.authService.autoLogin()
  }

}
