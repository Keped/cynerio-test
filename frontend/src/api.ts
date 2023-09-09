import axios from 'axios';
import { User } from './store/reducers/users';
const API_URL = 'http://localhost:3001';

export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addUser = async (user: Omit<User, 'id'>) => axios.put(API_URL, user);
