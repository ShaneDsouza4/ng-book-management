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

    //Uncomment to trigger error
    //const err = new Error('Error while adding a book');
    //return throwError(() => err)

    return of(book);
  }
}
