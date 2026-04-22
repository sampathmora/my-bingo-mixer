import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[62px] items-center justify-center rounded-md border px-1 py-1 text-center text-[0.65rem] leading-tight text-cosmic-text transition duration-200 select-none sm:min-h-[78px] sm:text-xs';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-bingo/90 bg-bingo/30 text-bingo shadow-[var(--glow-bingo)]'
      : 'border-marked-border/80 bg-marked text-accent-light shadow-[var(--glow-accent)]'
    : 'border-cosmic-border/75 bg-cosmic-surface/78 text-cosmic-text hover:bg-cosmic-surface-soft/92 active:scale-[0.985]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'border-accent-light/85 bg-cosmic-surface-soft text-accent-light font-semibold tracking-wide'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-0.5 top-0.5 text-[0.62rem] text-accent-light">✦</span>
      )}
    </button>
  );
}
