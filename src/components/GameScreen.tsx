import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="galaxy-stage flex min-h-full flex-col px-4 py-4 sm:px-6">
      <div className="starfield" aria-hidden="true" />

      <header className="galaxy-panel galaxy-reveal relative z-10 mb-3 flex items-center justify-between px-3 py-3 sm:px-4">
        <button
          onClick={onReset}
          className="rounded-md border border-cosmic-border/75 px-3 py-1.5 text-sm font-medium text-cosmic-muted transition-colors hover:bg-cosmic-surface-soft/80 focus-visible:outline-2 focus-visible:outline-accent-light"
        >
          ← Back
        </button>
        <h1 className="galaxy-title text-sm sm:text-base">Bingo Mixer</h1>
        <div className="w-16" aria-hidden="true" />
      </header>

      <p className="galaxy-panel galaxy-reveal relative z-10 mb-3 px-4 py-2 text-center text-sm text-cosmic-muted [animation-delay:80ms]">
        Tap a square when you find someone who matches it.
      </p>

      {hasBingo && (
        <div className="galaxy-reveal relative z-10 mb-3 rounded-xl border border-bingo/70 bg-bingo/20 px-4 py-2 text-center text-sm font-semibold tracking-wide text-bingo shadow-[var(--glow-bingo)] [animation-delay:120ms]">
          BINGO! You completed a stellar line.
        </div>
      )}

      <div className="relative z-10 flex flex-1 items-center justify-center pb-2">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
