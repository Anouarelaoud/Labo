import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>LABORATOIRE D'INGÉNIERIE DES PROCÉDÉS, INFORMATIQUE ET MATHÉMATIQUES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image-4.jpg'
              text='L’Ecole Nationale des Sciences Appliquées de Khouribga.'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/image-5.jpg'
              text='L’Ecole Nationale des Sciences Appliquées de Khouribga.'
              label='Luxury'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image-3.jpg'
              text='L’Ecole Nationale des Sciences Appliquées de Khouribga.'
              label='Mystery'
              path='/projects'
            />
            <CardItem
              src='images/image-1.jpg'
              text='L’Ecole Nationale des Sciences Appliquées de Khouribga.'
              label='Adventure'
              path='/laboratories'
            />
            <CardItem
              src='images/image-2.jpg'
              text='L’Ecole Nationale des Sciences Appliquées de Khouribga.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
