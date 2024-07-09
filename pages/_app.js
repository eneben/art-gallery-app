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

  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    console.log(`An error occured while fetching data. Status: ${error.status}. Info:
      ${error.info?.message}.`);
    return <p>An error occured.</p>;
  }

  if (!data) return <p>No data available.</p>;

  // Sollen der fetch und die setter function in einen useEffect?
  // (das ist bei State handling nicht üblich, beim fetchen schon)
  useEffect(() => {
    setArtPiecesInfo(
      data.map((artPiece) => ({ slug: artPiece.slug, isFavorite: false }))
    );
  }, [data]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) =>
      prevArtPiecesInfo.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : { artPiece }
      )
    );
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
