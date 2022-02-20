import React, { Component } from 'react';
import './coin.css'

class Coin extends Component {
    static defaultProps = {
        face: null
    }
    render () {
        return (
            <div className='Coin'>
                {this.props.face !== null && <img className='coinImage' src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`}></img>}
            </div>
        )
    }
}

export default Coin;