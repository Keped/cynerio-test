import React from 'react';
import styled from 'styled-components';
import { BlueButton, FlexibleDiv, TransparentButton } from '../shared';

const AddModal: React.FC<{}> = () => {
    return (
        <ModalBG>
            <Modal>
            <h3>Add User</h3>
            <FlexibleDiv>
                <label>Name</label>
                <input type="text" />
            </FlexibleDiv>
            <FlexibleDiv>
                <label>Address</label>
                <input type="text" />
            </FlexibleDiv>
            <ModalActions>
                <TransparentButton>Cancel</TransparentButton>
                <BlueButton>Confirm</BlueButton>
            </ModalActions>
            </Modal>
        </ModalBG>);
}

export default AddModal;

const ModalBG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    & h3, ${FlexibleDiv} {
        width: 100%;
        flex-direction: row;
    }
    &  ${FlexibleDiv} {
        & input {
            flex-grow: 1;
        }
        &  label {
            margin-right: 10px;            
        }
    }
`;

const ModalActions = styled(FlexibleDiv)`
    justify-content: end;
`;

const Modal = styled.div`
    background-color: white;
    height: 200px;
    width: 50vw;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 7px 7px 7px;
`;
