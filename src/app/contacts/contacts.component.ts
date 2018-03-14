import { Component, OnInit, Input, Output } from '@angular/core';
import {CONTACTS, Contact} from './contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
  contacts = CONTACTS;
  selectedContact: Contact;
  showAddForm: boolean = false;
  showDetails: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  showForm(form: string):void{
    switch(form){
      case 'addForm':
        this.showAddForm = true;
        break;
      case 'detailForm':
        this.showDetails = true;
        break;
    }
  }

  getContactInfo(contact: Contact):void{
    this.showForm('detailForm');
    this.selectedContact = contact; 
  }

  saveNewContact(contact: Contact):void{
    this.contacts.push(contact);
    this.showAddForm = false;
  }
  editContact(contact:Contact){
    
  }
  
}
