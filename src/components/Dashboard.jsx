import React, { useState, useEffect } from 'react'
import { useAuthentication } from '../Context/AuthenticationContext'
import axios from "axios"
import Card from './JokeCrads/JokeCard';
import AnimeCardsList from './AnimeCards/AnimeCardsList';
import { Link } from 'react-router-dom';
import Logout from './Auth/Logout';
import JokeCardList from './JokeCrads/JokeCardList';

function Dashboard() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Logout></Logout>
               
            </li>
          </ul>
        </div>

      </div>
      <div className='row'>
        <div className='col'>
          <h1>Dashboard</h1>
          <AnimeCardsList></AnimeCardsList>
        </div>
      </div>
      <div className='col'>
        <JokeCardList></JokeCardList>
      </div>
    </div>

  );
}

export default Dashboard