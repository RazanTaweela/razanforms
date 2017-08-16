import { Component, OnInit } from '@angular/core';
import {Book} from '../book.model';
@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  model =new Book(1,'The fault in our stars','John Green','http://example.com');

  constructor() { }

  ngOnInit() {
  }

  get currentBook(){
    return JSON.stringify(this.model);

  }

  get Title(){
    return this.model.title;
  }

    get Auther(){
    return this.model.auther;
  }
    get Url(){
    return this.model.url;
  }

}
