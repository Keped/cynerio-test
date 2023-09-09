import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { User } from '../../store/reducers/users';
type SearchKeys = keyof Omit<User, 'id'>;

const FilteredTable: React.FC<{}> = () => {
    const usersList = useAppSelector(state => state.users.list);
    const searchTerm = useAppSelector(state => state.users.searchTerm);

    const usersAfterSearch = useMemo(() => {
        const hits: User[] = [];
        if (searchTerm === '') {
            return usersList;
        }
        for (const user of usersList) {
            for (const fieldKey of (['name', 'address', 'date'] as SearchKeys[])) {
                if (user[fieldKey].toLowerCase().includes(searchTerm.toString().toLowerCase())) {
                    hits.push(user);
                    continue;
                }
            }
        }
        return hits;
    }, [searchTerm, usersList]);

    const usersRows = usersAfterSearch.map(({ id, name, address, date }) => (
        <tr key={id}>
            <td>{date}</td>
            <td>{name}</td>
            <td>{address}</td>
        </tr>));
    return (
        <NicerTable>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {usersRows}
            </tbody>
        </NicerTable>);
}

export default FilteredTable;

const NicerTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    & th {
        text-align: start;
    }

    &  tr {
        height: 30px;
        border-bottom: 1px solid;
    }
`;

