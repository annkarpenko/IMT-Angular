import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact} from '../contacts/contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  @Output() onContactClick = new EventEmitter<Contact>();

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.getContacts();    
  }

  getContacts(){
    this.service.getContacts()
      .subscribe((data) => this.contacts = data);
  }
  

  getInfoContact(contact):void{
    this.onContactClick.emit(contact);
  }
}
