import React from 'react';
import styled from 'styled-components';

export const FlexibleDiv = styled.div`
    display: flex;
`;

export const BlueButton = styled.div`
    border: none;
    background-color: rgb(61, 159, 255);
    color: white;
    border-radius: 3px;
    min-width: 110px;    
    text-align: center;
    & :hover {
        cursor: pointer;
    } 
`;

export const TransparentButton = styled(BlueButton)`
    background-color: transparent;
    border: 1px solid gray;
    color: gray;
    margin-right: 10px;
`;