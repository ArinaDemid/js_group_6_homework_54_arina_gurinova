
class PokerHand {
    rankCount = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, J: 0, Q: 0, K: 0, A: 0};
    suitCount = {'♠': 0, '♦': 0, '♥': 0, '♣': 0};

    pairs = 0;
    triples = 0;
    fours = 0;
    flush = 0;

    constructor(array) {
        
        for (let i = 0; i < array.length; i++) {
            this.rankCount[array[i].rank]++;
            this.suitCount[array[i].suit]++;
        } 
        
        for (var key in this.rankCount) {
            if (this.rankCount[key] === 2) this.pairs++;
            if (this.rankCount[key] === 3) this.triples++;
            if (this.rankCount[key] === 4) this.fours++;
        }

        for (var key in this.suitCount) {
            if (this.suitCount[key] === 5) this.flush++;
        }
        
    }

    getOutcome = () => {
        if(this.pairs === 1 && this.triples === 1) return `Full house`;
        if(this.pairs === 1) return `One pair`;
        if(this.pairs === 2) return `Two pairs`;
        if(this.triples === 1) return `Three of a kind`;
        if(this.fours === 1) return `Four of a kind`;
        if(this.flush === 1) return `Flush`;
        else return `You are not lucky in the cards`;
    };


};

export default PokerHand;