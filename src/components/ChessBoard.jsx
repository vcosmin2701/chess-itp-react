import '../styles/ChessBoard.css'
import '../styles/Piece.css'
import Draggable from 'react-draggable';
import dark_pawn from '../assets/chess-pieces/dark-pieces/Chess_pdt60.png';
import dark_king from '../assets/chess-pieces/dark-pieces/Chess_kdt60.png';
import dark_knight from '../assets/chess-pieces/dark-pieces/Chess_ndt60.png';
import dark_queen from '../assets/chess-pieces/dark-pieces/Chess_qdt60.png';
import dark_rook from '../assets/chess-pieces/dark-pieces/Chess_rdt60.png';
import dark_bishop from '../assets/chess-pieces/dark-pieces/Chess_bdt60.png';

import light_pawn from '../assets/chess-pieces/light-pieces/Chess_plt60.png';
import { useState } from 'react';


const ChessBoard = () => {
    const verticalLines = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const horizontalLines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let board = [];

    for(let j = verticalLines.length - 1; j >= 0;j--){
        for(let i = 0; i < horizontalLines.length;i++){
            const number = (j + i);
            if(number % 2 === 0){
                board.push(
                    <div className="tile black-tile">
                        <Draggable  >    
                            <div className="pawns">
                                {(j == 1) && <img src={dark_pawn} alt='dark-pawn'/>}
                                {(j == 6) && <img src={light_pawn} alt='light-pawn'/>}
                            </div>
                        </Draggable>

                        <Draggable>
                            <div className="pieces">
                                {(number === 8 && j === 1) && <img src={dark_rook} alt='dark-rook'/>}
                                {(number === 6 && j === 1) && <img src={dark_bishop} alt='dark-bishop'/>}
                                {(number === 4 && j === 1) && <img src={dark_queen} alt='dark-queen'/>}
                                {(number === 2 && j === 1) && <img src={dark_knight} alt='dark-knight'/>}
                            </div>
                        </Draggable>                        
                    </div>
                );
            } else {
                board.push(
                    <div className="tile white-tile">
                        <Draggable>    
                            <div className="pawns">
                                {(j == 1) && <img src={dark_pawn} alt='dark-pawn' />}
                                {(j == 6) && <img src={light_pawn} alt='light-pawn'/>}   
                            </div>
                        </Draggable>

                        <Draggable>
                            <div className="pieces">
                                {(number === 1 && j === 1) && <img src={dark_rook} alt='dark-rook'/>}
                                {(number === 3 && j === 1) && <img src={dark_bishop} alt='dark-bishop'/>}
                                {(number === 5 && j === 1) && <img src={dark_king} alt='dark-king'/>}
                                {(number === 7 && j === 1) && <img src={dark_knight} alt='dark-knight'/>}
                            </div>
                        </Draggable>
                    </div>
                );

                
            }
        }
    }

    return (
        <>
            <div id="chessboard">{board}</div>
        </>
    );
}
 
export default ChessBoard;