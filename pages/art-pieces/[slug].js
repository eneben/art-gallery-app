import { useRouter } from "next/router";
import Details from "@/components/ArtPieceDetails";
import Link from "next/link";

//pieces als prop empfangen - von app component runterreichen?

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return <p>...loading</p>;
  }

  return (
    <>
      <Details piece={currentArtPiece} />
      <Link href="/">Go back to art list</Link>
    </>
  );
}
