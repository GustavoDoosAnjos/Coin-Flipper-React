import React, { Component } from 'react';
import Coin from './coin'
import './flipCoin.css'

class FlipCoin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            face: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.mudarEstados = this.mudarEstados.bind(this);
    }
    mudarEstados(face) {
        if (face === 'heads') {
            this.setState((oldstate) => {
                return {flips: oldstate.flips + 1, heads: oldstate.heads + 1}
            })
        } else if(face === 'tailss') {
            this.setState((oldstate) => {
                return {flips: oldstate.flips + 1, tails: oldstate.tails + 1}
            })
        }
    }

    handleClick() {
        this.girar()
    }

    girar() {
        const coinFaces = ['heads', 'tailss'];
        let i = Math.floor(Math.random() * coinFaces.length)
        console.log(coinFaces[i])
        this.mudarEstados(coinFaces[i])
        this.setState({face: coinFaces[i]})
    }

    render () {
        return (
            <div className='FlipCoin'>
                <Coin face={this.state.face}/>
                <p>
                    You flipped {this.state.flips} times. {this.state.heads} heads and {this.state.tails} tails.
                </p>
                <button onClick={this.handleClick}>girar</button>
            </div>
        )
    }
}

export default FlipCoin;