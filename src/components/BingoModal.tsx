interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cosmic-bg/72 p-4 backdrop-blur-sm">
      <div className="starfield" aria-hidden="true" />

      <div className="galaxy-panel galaxy-reveal relative z-10 w-full max-w-sm p-6 text-center sm:p-7">
        <div className="mb-4 text-5xl">✨</div>
        <h2 className="galaxy-title mb-2 text-2xl sm:text-3xl">Bingo!</h2>
        <p className="mb-6 text-sm text-cosmic-muted sm:text-base">
          Constellation complete. You locked in a winning line.
        </p>

        <button
          onClick={onDismiss}
          className="cosmic-button w-full px-6 py-3 text-base font-semibold tracking-[0.05em]"
        >
          Keep Exploring
        </button>
      </div>
    </div>
  );
}
