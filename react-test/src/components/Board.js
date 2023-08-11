import React, { Component } from 'react';
import Square from './Square';
import "./Square.css";

class Board extends Component {
    
    renderSquare(i) {
        //랜더링하는 부분을 지정하여 사용할수 있다.
        return <Square value={i}/>
    }
    
    //랜더링 될때 해당 함수를 호출한다.
    render() {
        return (
            <div>
                <div className='status'>Next Player: X, O</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;