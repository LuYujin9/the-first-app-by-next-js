import Link from "next/link";
import Image from "next/image";

import { volumes } from "../../lib/data";

export default function TheFellowshipOfTheTing() {
  /*  const index = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  ); */

  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  //const book = volumes[index];

  return (
    <div>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>title:{book.title}</li>
        ))}
      </ul>
      <Image src={volume.cover} alt="cover" width={140} height={230} />

      <Link href="/">⏎ All Volumes</Link>
    </div>
  );
}
