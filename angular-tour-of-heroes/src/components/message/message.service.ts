import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  message: string[] = [];

  addMessage(mess: string): void {
    this.message.push(mess);
  }

  clearMessage(): void {
    this.message = [];
  }
}
