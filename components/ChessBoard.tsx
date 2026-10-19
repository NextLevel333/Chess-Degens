import { useEffect, useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'

export default function ChessBoardComponent() {
  const [game, setGame] = useState<any>(null)
  const [fen, setFen] = useState<string>('start')

  useEffect(() => {
    const g = new Chess()
    setGame(g)
    setFen(g.fen())
  }, [])

  function onDrop(sourceSquare: string, targetSquare: string) {
    if (!game) return false
    const move = game.move({ from: sourceSquare, to: targetSquare, promotion: 'q' })
    if (move === null) return false
    setFen(game.fen())
    return true
  }

  return (
    <div className="w-full">
      <Chessboard position={fen} onPieceDrop={(from, to) => onDrop(from, to)} arePiecesDraggable />
    </div>
  )
}
