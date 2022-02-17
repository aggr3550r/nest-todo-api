import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger"



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config= new DocumentBuilder()
  .setTitle('Todo API')
  .setDescription('ToDo API, it requires login to be able to create a ToDo, Update and Get')
  .setVersion('0.0.1')
  .addTag('Todo')
  .build();

  const document= SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);







  await app.listen(3000);
}
bootstrap();
