import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = { id: string, name: string, address: string, date: string };

interface UsersState {
    list: User[],
    searchTerm: string
}

const initialState: UsersState = {
    list: [
        { id: "adsfasf", name: "Yosi", address: "natanya", date: "1.2.2023" },
        { id: "fsgsdg", name: "Avi", address: "ashdod", date: "1.3.2023" },
        { id: "fhfh", name: "Braha", address: "Beit Alfa", date: "2.2.2023" },
    ],
    searchTerm: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) =>
            ({ ...state, searchTerm: action.payload })
    },
})

export const { setSearchTerm } = usersSlice.actions;
export default usersSlice.reducer