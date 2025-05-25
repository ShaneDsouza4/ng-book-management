import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.action'
import { BookService } from "./book.service";
import { mergeMap, Observable, map, catchError, of } from "rxjs";

@Injectable() //
export class BookEffects {

    //NgRx Effect reponds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe( //2. Run effect when specific addBookAction appears
        //Listen for actions of type 'AddBook'
        ofType(bookActions.AddBook),

        //For each 'AddBook' action, call 'addBook' on the Booke service
        //'mergeMap' allows multiple concurrent 'addBook' calls.
        //MergeMap: Take multiple observables and convert to one observable ( Multiple actions mapped to One Onservable, as can occur fast )
        mergeMap((action) => this.bookService.addBook(action) //AddBook Method puts in DB, response is sent back
            .pipe(//'pipe', as not done yet, and want to do something when response received.

                //If the 'addBook' call is success, dispatch 'AddBookSuccess' action with the book data
                map(book => bookActions.AddBookSuccess(book)), //Takes book from bookservice call, and adding to AddBookSucess to start the actio

                //If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error
                catchError((error) => of(bookActions.AddBookFailure({ error })))
            )
        )
    ))

    constructor(
        private actions$: Actions, //Access to dispatched actions
        private bookService: BookService
    ) { }
}