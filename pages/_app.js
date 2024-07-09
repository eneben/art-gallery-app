import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

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

// console.log("artPiecesInfo: ", artPiecesInfo);

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // Wie kann ich die prop isFavorite an den FavoriteButton weitergeben?
  // So vielleicht?:
  // const isFavorite = { isFavorite };

  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    console.log(`An error occured while fetching data. Status: ${error.status}. Info:
      ${error.info?.message}.`);
    return <p>An error occured.</p>;
  }

  if (!data) return <p>No data available.</p>;

  // die nochmal angucken: was passiert hier eigentlich? artPiecesInfo ausloggen
  // ternary oder if else
  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }
  // =========gelöscht:
  // prevArtPiecesInfo.map((artPiece) =>
  // artPiece.slug === slug
  //     ? { ...artPiece, isFavorite: !artPiece.isFavorite }
  //     : { artPiece }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </Layout>
  );
}
