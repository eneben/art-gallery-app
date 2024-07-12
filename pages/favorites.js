import ArtPieces from "./art-pieces";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoriteSlugs = artPiecesInfo.reduce((slugs, artPieceInfo) => {
    if (artPieceInfo.isFavorite) {
      slugs.push(artPieceInfo.slug);
    }
    return slugs;
  }, []);

  const favoritePieces = pieces.filter((piece) => {
    return favoriteSlugs.includes(piece.slug);
  });

  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
