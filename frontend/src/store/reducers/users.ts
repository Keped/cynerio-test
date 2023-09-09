import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = { id: string, name: string, address: string, date: string };

interface UsersState {
    list: User[],
    searchTerm: string
}

const initialState: UsersState = {
    list: [
    ],
    searchTerm: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.list = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        }
    },
})

export const { setSearchTerm, setUsers } = usersSlice.actions;
export default usersSlice.reducer