import '../styles/ChessBoard.css'
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
                        [{horizontalLines[i]}{verticalLines[j]}]
                    </div>
                );
            } else {
                board.push(
                    <div className="tile white-tile">
                        [{horizontalLines[i]}{verticalLines[j]}]
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