import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts/contacts';
 

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  nameContact:string;
  surnameContact:string;
  visitedLessons:number;
  titleForm: string;
  defTitleForm: string = "Contact Details";
  hideForm: boolean = true;

  @Input() contact: Contact;
  @Output() onEditContact = new EventEmitter<Contact>();

  constructor() {
    this.titleForm = this.defTitleForm;
  }

  showForm(show: boolean){
    this.hideForm = !show;
  }

  fillForm () {
    this.titleForm = 'Edit Form';
    this.nameContact = this.contact.name;
    this.surnameContact = this.contact.surname;
    this.visitedLessons = this.contact.lessons;

  }

  openFormClick () {
    this.showForm(true);
    this.fillForm(); 
  }

  onBtnCancelFormClick(){
    this.showForm(false);
    this.titleForm = this.defTitleForm;
  }
  
  editContact(contact):void{
    let editContact = {
      id: contact.id,
      name: this.nameContact,
      surname: this.surnameContact,
      lessons: this.visitedLessons
    }

    this.onEditContact.emit(editContact);
    this.showForm(false);
  }
}
