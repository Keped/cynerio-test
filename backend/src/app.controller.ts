import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Put()
  
  addUser(@Body() dto: Omit<User, 'id'>){
    this.appService.putUser(dto);
  }
}
