import React from 'react';
import UsersView from './components/UsersView';
import AddModal from './components/AddModal';

function App() {
  return (
    <div>
      <UsersView addButton searchBar/>
      <br/>
      <UsersView/>
      <AddModal/>
    </div>
  );
}

export default App;
