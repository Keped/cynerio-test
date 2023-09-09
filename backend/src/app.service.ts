import { Injectable } from '@nestjs/common';

export type User = { id: string, name: string, address: string, date: string };
const usersList: User[] = [];

@Injectable()
export class AppService {
  getUsers(): User[] {
    return usersList;
  }

  putUser(userData: Omit<User, 'id'>) {
    const id =(Math.random() + 1).toString(36).substring(7);
    usersList.push({ ...userData, id });
  }
}
