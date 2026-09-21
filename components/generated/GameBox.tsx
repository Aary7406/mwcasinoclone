export default function GameBox(p: { alt0: string; src0: string; t0: string }) {
  return (
    <mcd-game-box class="ng-c-2153227597 ng-h-3316823729">
      <div className="ng-c-3316823729 games-box">
        <div className="ng-c-3316823729 pic item-ani">
          <a className="ng-c-3316823729">
            <img className="ng-c-3316823729" alt={p.alt0} loading="lazy" src={p.src0} />
          </a>
        </div>
        <div className="ng-c-3316823729 text item-ani">
          <h3 className="ng-c-3316823729">
            {p.t0}
          </h3>
        </div>
      </div>
    </mcd-game-box>
  );
}
