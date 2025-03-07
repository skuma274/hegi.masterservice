import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './shared/pipes/validate.pipe';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const globalPrefix: string = configService.get<string>('api.prefix');
  app.setGlobalPrefix(globalPrefix);
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  const port: number = configService.get<number>('http.port');
  await app.listen(port);
}
bootstrap();
