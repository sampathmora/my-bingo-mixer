interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="galaxy-stage flex min-h-full items-center justify-center px-5 py-8 sm:px-8">
      <div className="starfield" aria-hidden="true" />

      <section className="galaxy-reveal relative z-10 w-full max-w-lg space-y-5 text-center">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.35em] text-cosmic-muted uppercase">
            Mixer Mission
          </p>
          <h1 className="galaxy-title text-3xl leading-tight sm:text-4xl">
            Bingo Mixer
          </h1>
          <p className="galaxy-subtitle mx-auto max-w-md text-sm sm:text-base">
            Orbit the room, spark conversations, and chart a full line before anyone else.
          </p>
        </header>

        <div className="galaxy-panel p-5 text-left sm:p-6">
          <h2 className="galaxy-title mb-3 text-base sm:text-lg">How to Play</h2>
          <ul className="space-y-2 text-sm text-cosmic-muted sm:text-[0.95rem]">
            <li>Find someone who matches a square prompt.</li>
            <li>Tap the square to log your cosmic discovery.</li>
            <li>Complete 5 in a row to trigger bingo.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="cosmic-button w-full px-7 py-4 text-base font-semibold tracking-[0.06em] sm:text-lg"
        >
          Launch Game
        </button>
      </section>
    </div>
  );
}
