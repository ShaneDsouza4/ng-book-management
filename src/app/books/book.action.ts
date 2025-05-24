import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>()); //Initial Action
export const AddBookSuccess = createAction('[Book] Add Book Succesfully', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{ error: any }>());

export const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>());


