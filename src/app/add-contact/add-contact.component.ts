import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contacts/contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  nameNewContact: string = '';
  surnameNewContact: string = '';

  @Output() onSaveContact = new EventEmitter<Contact>();

  constructor() { }

  saveContact():void{
    const id = Date.now();

    this.onSaveContact.emit({
      id: id,
      name: this.nameNewContact,
      surname: this.surnameNewContact,
      lessons: 0
    });

    this.nameNewContact='';
    this.surnameNewContact='';
  }

}
