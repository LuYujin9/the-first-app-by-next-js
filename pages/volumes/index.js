import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  //随机random array里的一个element
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomElementSlug = getRandomElement(volumes).slug;

  return (
    <div>
      <h1>volumes</h1>
      <ul>
        {volumes.map(({ slug, title, cover }) => (
          <li key={slug}>
            <Image
              alt="foto of the book"
              src={cover}
              width={46}
              height={76}
            ></Image>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push(`/volumes/${randomElementSlug}`)}>
        Random
      </button>
    </div>
  );
}
