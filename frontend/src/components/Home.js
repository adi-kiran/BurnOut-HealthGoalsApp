import { useState } from 'react'
import axios from "axios";
import Header from './Header';

function Home(props) {

  return (
    <div className="Home">
      <Header {...props}/>
        <p>Adithya's Calorie page would go here</p>
    </div>
  );
}

export default Home;