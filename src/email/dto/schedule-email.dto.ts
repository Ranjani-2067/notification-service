import { SendEmailDto } from './send-email.dto';

export class ScheduleEmailDto extends SendEmailDto {
    scheduledAt: string;
}