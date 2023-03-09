import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function TheFellowshipOfTheTing() {
  const router = useRouter();
  const { slug } = router.query;

  const index = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[index];

  // next prev button 应该还有更好的解法
  const nextIndex = index < volumes.length - 1 ? index + 1 : null;
  const prevIndex = index > 0 ? index - 1 : null;

  return (
    <>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <div>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <ul>
          {volume.books.map((book) => (
            <li key={book.ordinal}>title:{book.title}</li>
          ))}
        </ul>

        {index <= 3 && index > 0 && (
          <button
            name="prev page"
            aria-label="prev page"
            onClick={() => router.push(`/volumes/${volumes[prevIndex].slug}`)}
          >
            Prevous Page
          </button>
        )}
        <Image src={volume.cover} alt="cover" width={140} height={230} />

        <Link href="/volumes">⏎ All Volumes</Link>
        {index < 3 && index >= 0 && (
          <button
            name="next page"
            aria-label="next page"
            onClick={() => router.push(`/volumes/${volumes[nextIndex].slug}`)}
          >
            Next Page
          </button>
        )}
      </div>
    </>
  );
}

//隐藏按钮的方式，满足两个条件按钮才会显示
/* {index <= 3 && index > 0 && (
    <button>/button>
  )} */
