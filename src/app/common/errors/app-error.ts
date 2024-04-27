/* eslint-disable @typescript-eslint/no-explicit-any */
export class AppError {
    constructor(public originalError?: any) {
        console.log('originalError', originalError);
        
    }
}
