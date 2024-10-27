import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TaskModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
