import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  userName: string;
  defUserName: string = 'User';  

  constructor() {
    this.userName = this.defUserName;
  }
  
  defaultUserName($e){
    this.userName = this.defUserName;
  }

  ngOnInit() {
  }

}
