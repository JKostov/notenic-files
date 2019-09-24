import { Module } from '@nestjs/common';
import { SharedModule } from '@app/shared/shared.module';
import { FilesModule } from '@files/files.module';

@Module({
  imports: [
    SharedModule,
    FilesModule,
  ],
})
export class AppModule {}
