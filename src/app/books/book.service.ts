import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs'; //of allows to create observable
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // Faking an Observable to say API worked fine
  addBook(book: Book): Observable<Book> {
    return of(book);
  }
}
