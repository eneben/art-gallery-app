import useSWR from "swr";

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

export default function HomePage() {
  const { data, isLoading, error } = useSWR(URL, fetcher);

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
