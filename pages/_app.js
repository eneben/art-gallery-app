import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import React, { useState } from "react";

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

// console.log("data: ", data);
// NEU:
const [artPiecesInfo, setArtPiecesInfo] = useState([]);

// TEST - raus:
function handleToggleFavorite() {
  setIsFavorite(prevIsFavorite ? !prevIsFavorite : prevIsFavorite);
}

// const onToggleFavorite = handleToggleFavorite;

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    console.log(`An error occured while fetching data. Status: ${error.status}. Info:
      ${error.info?.message}.`);
    return <p>An error occured.</p>;
  }
  if (!data) return <p>No data available.</p>;

  return (
    <ArtPiecesProvider>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          // NEU: =======
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          setArtPiecesInfo={setArtPiecesInfo}
          // ============
        />
      </Layout>
    </ArtPiecesProvider>
  );
}
