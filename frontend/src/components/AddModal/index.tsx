import React, { useState } from 'react';
import styled from 'styled-components';
import { BlueButton, FlexibleDiv, TransparentButton } from '../shared';
import { hide } from '../../store/reducers/modal';
import { useAppDispatch } from '../../hooks';
import { addUser, getUsers } from '../../api';
import { setUsers } from '../../store/reducers/users';

const AddModal: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const onConfirm = async () => {
        const date = new Date().toDateString();
        await addUser({name, address, date});
        const newList = await getUsers();
        dispatch(setUsers(newList))
        dispatch(hide());
    }

    return (
        <ModalBG>
            <Modal data-test="modal">
                <h3>Add User</h3>
                <FlexibleDiv>
                    <label>Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" />
                </FlexibleDiv>
                <FlexibleDiv>
                    <label>Address</label>
                    <input type="text" onChange={(e)=>setAddress(e.target.value)} />
                </FlexibleDiv>
                <ModalActions>
                    <TransparentButton onClick={() => { dispatch(hide()) }} >Cancel</TransparentButton>
                    <BlueButton onClick={async() => { await onConfirm() }}>Confirm</BlueButton>
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
    & ${FlexibleDiv} {
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
