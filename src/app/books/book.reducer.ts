import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { AddBook, AddBookFailure, AddBookSuccess, RemoveBook } from "./book.action";

export const initialState: Book[] = [];

//Add Book action was dispatched, and communicatio with actions to see if observable was success or not
export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state) => { return state }), //Initial State Action does not need to update state
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]), //Was Added Sucesfully
    on(AddBookFailure, (state, { error }) => { //Error was received, don't need to update state
        console.error(error);
        return state;
    }),

    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id != bookId)),
)