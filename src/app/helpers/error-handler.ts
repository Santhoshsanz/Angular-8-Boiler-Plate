import { ErrorHandler, Injectable } from '@angular/core';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error) {
        console.log(error);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        // throw error;
    }
}