import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

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

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.log(`An error occured while fetching data. Status: ${error.status}. Info:
      ${error.info?.message}.`);
    return <p>An error occured.</p>;
  }
  if (!data) return <p>No data available.</p>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );

    if (!artPiece) {
      setArtPiecesInfo([...artPiecesInfo, { slug: slug, isFavorite: true }]);
    } else {
      setArtPiecesInfo(
        artPiecesInfo.map((artPieceInfo) => {
          return artPieceInfo.slug === slug
            ? { ...artPieceInfo, isFavorite: !artPieceInfo.isFavorite }
            : artPieceInfo;
        })
      );
    }
  }

  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );

    //hier noch nciht weiter gemacht
  }

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
