import React, {Component} from 'react';
import './App.css';
import './components/cards.css';
import Card from './components/card';
import CardDeck from './components/cardDeck';
import PokerHand from './components/pokerHand';

class App extends Component {

  statusHand = null;
  state = {
    cards:[]
  };

  constructor(props) {
    super(props);

    const deck = new CardDeck();

    this.state.cards = deck.getCards(5);

    const hand = new PokerHand(this.state.cards);

    this.statusHand = hand.getOutcome();

  }

  changeCards = () => {
    const deck = new CardDeck();
    const cards = deck.getCards(5);
    this.state.cards = cards;

    this.setState({cards});

    const hand = new PokerHand(this.state.cards);

    this.statusHand = hand.getOutcome();
  };

  render() {

    let cards = null;
    
    cards = (
      <ul className="table"> 
      {
        this.state.cards.map((card) => {
          return (
          <Card 
            key={card.id}
            suit={card.suit}
            rank={card.rank}>
          </Card>
          )
        })
      }
      </ul>
      );

      return (
        <div className="App">
          <button onClick={this.changeCards}>Shuffle Cards</button>
          <div className="playingCards faceImages">
            {cards}
          </div>
          <p className="statusWin">{this.statusHand}</p>
        </div>
      );
  }

}

export default App;
