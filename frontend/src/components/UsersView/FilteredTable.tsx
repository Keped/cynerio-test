import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { User, SearchKeys } from '../../store/reducers/users';

interface IFilteredTableProps {
    showCols: Record<SearchKeys, boolean>
}
const colNames = ['name', 'address', 'date'] as SearchKeys[];

const FilteredTable: React.FC<IFilteredTableProps> = ({ showCols }) => {
    const usersList = useAppSelector(state => state.users.list);
    const searchTerm = useAppSelector(state => state.users.searchTerm);

    const usersAfterSearch = useMemo(() => {
        const hits: User[] = [];
        if (searchTerm === '') {
            return usersList;
        }
        for (const user of usersList) {
            for (const fieldKey of (colNames)) {
                if (user[fieldKey].toLowerCase().includes(searchTerm.toString().toLowerCase())) {
                    hits.push(user);
                    continue;
                }
            }
        }
        return hits;
    }, [searchTerm, usersList]);

    const usersRows = usersAfterSearch.map((user) => (
        <tr key={user.id}>
            {colNames.filter(colName => showCols[colName]).map(colName => <td>{user[colName]}</td>)}
        </tr>));
    return (
        <NicerTable>
            <thead>
                <tr>
                    {colNames.filter(colName => showCols[colName]).map(colName => <th>{colName}</th>)}
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

