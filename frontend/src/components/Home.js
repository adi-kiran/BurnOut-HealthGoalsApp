import { useState } from 'react'
import axios from "axios";
import Header from './Header';
import UserCaloriesPage from './UserCaloriesPage';

function Home(props) {

  return (
    <div className="Home">
      <Header {...props}/>
        <UserCaloriesPage />
    </div>
  );
}

export default Home;