import { useState } from 'react'
import axios from "axios";
import Header from './Header';
import UserCaloriesPage from './UserCaloriesPage';

function Home(props) {

  return (
    <div className="Home">
        <UserCaloriesPage {...props}/>
    </div>
  );
}

export default Home;