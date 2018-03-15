import { Injectable } from '@angular/core';
import { Contact, CONTACTS } from './contacts/contacts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContactService {

  private CONTACTS = [
    {
        id:1,
        name: 'Vera',
        surname: 'Frolova',
        lessons: 15
    },
    {   
        id:2,
        name: 'Lena',
        surname: 'Reznikova',
        lessons: 15
    },
    {
        id:3,
        name: 'Eva',
        surname: 'Luna',
        lessons: 13
    },
    {
        id:4,
        name: 'Alex',
        surname: 'Ivanov',
        lessons: 2
    },

]

newContacts: Contact [] = CONTACTS;

getContacts(): Observable<Contact[]> {
   return of(this.newContacts);
 }

getContact(contact:Contact): Observable<Contact> {
  let id = contact.id;
  let selectContact = this.newContacts.find(c => c.id === id);
  return of(selectContact);
}

addContact(contact: Contact): Observable<Contact>{
  this.newContacts = [...this.newContacts, contact]
  return of(contact);
} 

updateContact(contact: Contact): Observable<Contact>{
  this.newContacts = this.newContacts.map(c => c.id === contact.id ? contact : c);
  console.log(this.newContacts);
  return of(contact);
}
constructor() { } 

}
