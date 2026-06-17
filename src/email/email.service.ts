import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async send(payload: any) {
    return {
      status: 'accepted',
      type: 'email',
      payload,
    };
  }

  async schedule(payload: any) {
    return {
      status: 'scheduled',
      payload,
    };
  }
}