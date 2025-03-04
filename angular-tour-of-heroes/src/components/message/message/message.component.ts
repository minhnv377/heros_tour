import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  constructor(private messageService: MessageService) {}

  checkStatusMessage(): boolean {
    return this.messageService.message.length > 0;
  }

  messageClear(): void {
    this.messageService.clearMessage();
  }

  getMessage(): string[] {
    return this.messageService.message;
  }
}
