import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CONTACTS, Contact} from '../contacts/contacts';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts = CONTACTS;

  @Output() onContactClick = new EventEmitter<Contact>();

  constructor() { }

  sendInfoContact(contact):void{
    this.onContactClick.emit(contact);
  }

  ngOnInit() {
  }

}
