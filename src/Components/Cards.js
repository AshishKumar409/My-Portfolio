import React from 'react';
import './Cards.css';
import Carditem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Carditem
              src='images/pizza.png'
              text=' Landing page'
              alt="'Pizza Landing page'"
              label='Landing page'
              path='https://pizza-web9.netlify.app/'
            />
            <Carditem
              src='images/login.png'
              text='Login form'
              label='Login form'
              path='https://client-side-form-validation9.netlify.app/'
            />
          </ul>
          <ul className='cards__items'>
            <Carditem
              src='images/recipe.png'
              text='Recipe app'
              label='Recipe app'
              path='https://ashishkumar409.github.io/recipe-app/'
            />
            <Carditem
              src='images/quiz.png'
              text='Quiz app'
              label='Quiz app'
              path='https://ashishkumar409.github.io/Quiz/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;