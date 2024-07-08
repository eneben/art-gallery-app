import Spotlight from "@/components/Spotlight";

function getRandomPiece(pieces) {
  const RandomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[RandomIndex];
}

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = getRandomPiece(pieces);

  return (
    <div>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </div>
  );
}
