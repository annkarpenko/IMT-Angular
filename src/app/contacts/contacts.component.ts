import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './contacts';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  showAddForm: boolean = false;
  showDetails: boolean = false;

  @ViewChild(ContactsListComponent) 
  private getListContact:ContactsListComponent;
  constructor(private service: ContactService) {}

  ngOnInit() {}
    
  getContactInfo(contact: Contact):void{
    this.showForm('detailForm');
    this.service.getContact(contact)
      .subscribe((data) => this.selectedContact = data); 
  }

  saveNewContact(contact: Contact):void{
    this.service.addContact(contact)
      .subscribe(() => this.getListContact.getContacts());
    this.showAddForm = false;
  }

  editContact(contact:Contact):void{
    this.service.updateContact(contact)
      .subscribe(() => this.getListContact.getContacts());
  }
  
  // switch не успела исправить на класс
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
}
