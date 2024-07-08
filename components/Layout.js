import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Navigation />
    </>
  );
}
