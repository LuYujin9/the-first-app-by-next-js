import Link from "next/link";
import { volumes } from "../../lib/data";

export default function TheTwoTowers() {
  const index = volumes.findIndex(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <h1>{volumes[index].title}</h1>
      <p>{volumes[index].description}</p>
      <ul>
        {volumes[index].books.map((book) => (
          <>
            <li>title:{book.title}</li>
            <li>ordinal:{book.ordinal}</li>
          </>
        ))}
      </ul>

      <Link href="/">⏎ All Volumes</Link>
    </div>
  );
}
