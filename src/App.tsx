import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ResponsibleList from './components/ResponsibleList/ResponsibleList';
import EmployeeList from './components/EmployeeList/EmployeeList';
import SearchBar1 from './components/SearchBar1/SearchBar1';
import StatusButton from './components/StatusButton/StatusButton';
import CardList from './components/CardsList';
import Deadline from './components/Deadline/Deadline';
import StatusPriority from './components/StatusPriority/StatusPriority';
import Tags from './components/Tags/Tags';

function App() {
  return (
    <>
      <Header />
      <ResponsibleList />
      <EmployeeList />
      <div className="searchbar-and-buttons">
        <SearchBar1 />
        Роль
        <StatusButton />
      </div>
      <CardList />
      <Deadline />
      <StatusPriority />
      <Tags />
    </>
  );
}

export default App;
