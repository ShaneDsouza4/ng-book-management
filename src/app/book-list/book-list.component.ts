import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddBook, RemoveBook } from '../books/book.action';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(
    private _store: Store<{ books: Book[] }>
  ) {
    this.books$ = _store.pipe(select('books')); //Select books from store
  }

  addBook(id: string, title: string, author: string) {
    this._store.dispatch(AddBook({ id, title, author }))
  }

  removeBook(bookId: string) {
    this._store.dispatch(RemoveBook({ bookId }))
  }

}
