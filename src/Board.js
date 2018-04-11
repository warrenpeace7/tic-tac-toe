import React, { Component } from 'react';
import BlankPiece from './BlankPiece';
import XPiece from './XPiece';
import OPiece from './OPiece';


class Board extends Component {
    constructor(props) {
        super(props)
        console.log('Board.constructor()', props)
    }

    componentWillMount() {
        console.log('Board.componentWillMount()')

    }
    componentDidMount() {
        console.log('Board.componentDidMount()')
    }


    render() {
        console.log('Board.render()')
        return (
            <div class="section-board">
                <header>
                    <h1>This the board to my Tic-Tac-Toe App
                        </h1>
                </header>

                <div class="flex-container">


                    <div class="left">
                        <p class="TL"> <XPiece /></p>
                        <p class="LM"> <BlankPiece /></p>
                        <p class="BL"> <OPiece /></p>
                    </div>

                    <div class="center">
                        <p class="TM"> <XPiece /></p>
                        <p class="MM"> <OPiece /></p>
                        <p class="BM"> <XPiece /></p>
                    </div>

                    <div class="right">
                        <p class="RT"><BlankPiece /> </p>
                        <p class="RM"> <OPiece /></p>
                        <p class="RB"><BlankPiece /> </p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Board;