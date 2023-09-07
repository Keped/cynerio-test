import React from 'react';
import styled from 'styled-components';

const FilteredTable: React.FC<{}> = () => {
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
                <tr>
                    <td>1.1.1453</td>
                    <td>Suliman the magnificent</td>
                    <td>Istanbul (formerly Constantinopol)</td>
                </tr>
                <tr>
                    <td>1.1.1453</td>
                    <td>Suliman the magnificent</td>
                    <td>Istanbul (formerly Constantinopol)</td>
                </tr>
                <tr>
                    <td>1.1.1453</td>
                    <td>Suliman the magnificent</td>
                    <td>Istanbul (formerly Constantinopol)</td>
                </tr>
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

