import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div className="container">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

const Card = props => {
  return (
    <div className="card">
      <img alt="avatar" src={props.avatar_url} />
      <div>
        <div className="card-header">{props.name}</div>
        <div className="card-content">{props.blog}</div>
      </div>
    </div>
  );
};

const CardList = props => (
  <div className="card-list">
    {props.cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

const Form = props => {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data);
        setUsername('');
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button className="button" type="submit">Add card</button>
    </form>
  );
};

export default App;
