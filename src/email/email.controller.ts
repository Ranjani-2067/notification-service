import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  send(@Body() body: any) {
    return this.emailService.send(body);
  }

  @Post('schedule')
  schedule(@Body() body: any) {
    return this.emailService.schedule(body);
  }
}