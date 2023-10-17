import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  onClick(){
    this.userService.logout().then((res) => {
      this.router.navigate(['/login']);
    }).catch(err => console.log(err));
  }

}
