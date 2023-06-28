"use client";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  console.log(isLoading);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
