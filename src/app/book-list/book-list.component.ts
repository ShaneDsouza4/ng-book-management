import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddBook, RemoveBook } from '../books/book.action';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  constructor(
    private _store: Store<{ books: Book[] }>
  ) { }

  addBook(id: string, title: string, author: string) {
    this._store.dispatch(AddBook({ id, title, author }))
  }

  removeBook(bookId: string) {
    this._store.dispatch(RemoveBook({ bookId }))
  }

}
