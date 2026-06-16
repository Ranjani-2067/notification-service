import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [EmailModule, SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
