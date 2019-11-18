import React, {Component} from 'react';
import './App.css';
import './components/cards.css';
import Card from './components/card';
import CardDeck from './components/cardDeck';
import PokerHand from './components/pokerHand';

class App extends Component {
  money = 0;
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

  AddMoney = () => {
    if(this.statusHand === 'Royal flush') this.money += 50;
    if(this.statusHand === 'Straight flush') this.money += 40;
    if(this.statusHand === 'Four of a kind') this.money += 35;
    if(this.statusHand === 'Full house') this.money += 30;
    if(this.statusHand === 'Flush') this.money += 25;
    if(this.statusHand === 'Straight') this.money += 20;
    if(this.statusHand === 'Three of a kind') this.money += 15;
    if(this.statusHand === 'Two pairs') this.money += 10;
    if(this.statusHand === 'One pair') this.money += 5;
  };

  render() {

    let cards = null;
    this.AddMoney();
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
          <p className="money">Money: {this.money} $</p>
        </div>
      );
  }

}

export default App;
