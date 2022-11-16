import Link from "next/link";
import { Progression } from "../components/constants/progressions";

const progression: Progression = "I-V-vi-IV";

export default function Home() {
  return (
    <div className="h-screen max-w-6xl m-auto">
      <div>
        <h2 className="text-3xl font-bold">Most Popular Progressions</h2>
        <div className="mb-4"></div>
        <Link href={`/progression/${progression}`}>
          <div className="bg-white p-4 inline-block rounded">
            <h3 className="text-1xl font-bold">I-V-vi-IV</h3>
            <p>
              <span className="font-bold">Key</span>: C Major
            </p>
            <p>
              <span className="font-bold">Chords</span>: C, G, Am, F
            </p>
            <p>
              <span className="font-bold">Mood:</span>: Happy, Sad, Romantic,
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
