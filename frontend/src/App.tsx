import React from 'react';
import UsersView from './components/UsersView';
import AddModal from './components/AddModal';
import { useAppSelector } from './hooks';

function App() {
  const showModal = useAppSelector(state => state.modal.shown);
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
