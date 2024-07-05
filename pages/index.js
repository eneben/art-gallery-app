import useSWR from "swr";
import ArtPiecesList from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occured while fetching data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

function getRandomPieces(piece) {
  const RandomIndex = Math.floor(Math.random() * piece.length);
  return piece[RandomIndex];
}

export default function HomePage() {
  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.log(`An error occured while fetching data. Status: ${error.status}. Info:
      ${error.info?.message}.`);
    return <p>An error occured.</p>;
  }
  if (!data) return <p>No data available.</p>;

  const spotlightPiece = getRandomPieces(data);

  return (
    <div>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
      <ArtPiecesList pieces={data} />;
    </div>
  );
}
// test
