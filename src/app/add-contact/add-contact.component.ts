import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contacts/contacts';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  nameNewContact: string = '';
  surnameNewContact: string = '';

  @Output() onSaveContact = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  saveContact():void{
    this.onSaveContact.emit({
      name: this.nameNewContact,
      surname: this.surnameNewContact
    });

    this.nameNewContact='';
    this.surnameNewContact='';
  }

}
