import Link from "next/link";
import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
volumes.findIndex(({ slug }) => slug === "the-fellowship-of-the-ring");

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <div>
        <h1>volumes</h1>
        <ul>
          <li key="the-fellowship-of-the-ring">
            <Link href="/volumes/the-fellowship-of-the-ring">
              the-fellowship-of-the-ring
            </Link>
          </li>
          <li key="the-return-of-the-king">
            <Link href="/volumes/the-return-of-the-king">
              the-return-of-the-king
            </Link>
          </li>
          <li key="the-two-towers">
            <Link href="/volumes/the-two-towers">the-two-towers</Link>
          </li>
        </ul>
      </div>

      <Link href="/volumes">volumes</Link>
    </div>
  );
}
