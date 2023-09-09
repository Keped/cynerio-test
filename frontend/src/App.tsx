import React, { useEffect } from 'react';
import UsersView from './components/UsersView';
import AddModal from './components/AddModal';
import { useAppDispatch, useAppSelector } from './hooks';
import { getUsers } from './api';
import { setUsers } from './store/reducers/users';

function App() {
  const showModal = useAppSelector(state => state.modal.shown);
  const dispatch = useAppDispatch();
  useEffect( ()=>{
     getUsers().then(users => dispatch(setUsers(users)));
  },[])
  return (
    <div>
        <UsersView addButton searchBar />
        <br />
        <UsersView />
        { showModal && <AddModal/>}
    </div>
  );
}

export default App;
