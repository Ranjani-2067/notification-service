import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerService {
  processScheduledEmails() {
    console.log('Checking scheduled emails');
  }
}