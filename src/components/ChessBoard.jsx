import '../styles/ChessBoard.css'
import '../styles/Piece.css'
import dark_pawn from '../assets/chess-pieces/dark-pieces/Chess_pdt60.png';
import dark_king from '../assets/chess-pieces/dark-pieces/Chess_kdt60.png';
import dark_knight from '../assets/chess-pieces/dark-pieces/Chess_ndt60.png';
import dark_queen from '../assets/chess-pieces/dark-pieces/Chess_qdt60.png';
import dark_rook from '../assets/chess-pieces/dark-pieces/Chess_rdt60.png';
import dark_bishop from '../assets/chess-pieces/dark-pieces/Chess_bdt60.png';

import light_pawn from '../assets/chess-pieces/light-pieces/Chess_plt60.png';
import light_king from '../assets/chess-pieces/light-pieces/Chess_klt60.png';
import light_knight from '../assets/chess-pieces/light-pieces/Chess_nlt60.png';
import light_queen from '../assets/chess-pieces/light-pieces/Chess_qlt60.png';
import light_rook from '../assets/chess-pieces/light-pieces/Chess_rlt60.png';
import light_bishop from '../assets/chess-pieces/light-pieces/Chess_blt60.png';


const ChessBoard = () => {
    const verticalLines = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const horizontalLines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let board = [];

    for(let j = verticalLines.length - 1; j >= 0;j--){
        for(let i = 0; i < horizontalLines.length;i++){
            const number = j + i + 2;
            if(number % 2 === 0){
                board.push(
                    <div className="tile black-tile">
                        <div className="pawns">
                            {(j == 1)  && <div className="piece"><img src={light_pawn} alt='dark pawn' /></div>} {/* fill with light pawns */}
                            {(j == 6)  && <div className="piece"><img src={dark_pawn} alt='dark pawn' /></div>} {/* fill with dark pawns */}
                        </div>
                    </div>
                );
            } else {
                board.push(
                    <div className="tile white-tile">
                        <div className="pawns">
                            {(j == 1)  && <div className="piece"><img src={light_pawn} alt='dark pawn' /></div>} {/* fill with light pawns */}
                            {(j == 6)  && <div className="piece"><img src={dark_pawn} alt='dark pawn' /></div>} {/* fill with dark pawns */}
                        </div>
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