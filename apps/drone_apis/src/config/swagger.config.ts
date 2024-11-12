import { DocumentBuilder } from '@nestjs/swagger';


export const config = new DocumentBuilder()
.setTitle('Drone Mission API')
.setDescription('API for managing drone missions')
.setVersion('1.0')
.addTag('missions')
.build();


