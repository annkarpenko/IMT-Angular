import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  userName: string; 

  constructor() {
    this.userName = 'User'
  }
  
  defaultUserName($e){
    this.userName = 'User'
  }

  ngOnInit() {
  }

}
