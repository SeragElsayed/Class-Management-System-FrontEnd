import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
role;
token;
ngOnInit(): void {
  this.role=localStorage.getItem("role")
  this.token=localStorage.getItem("token")
  console.log(this.role)
}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout()
  {
    console.log("in the logout function")
    localStorage.setItem('token','out')
    localStorage.setItem("role",'out')
  }
}
