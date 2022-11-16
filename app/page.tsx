import Link from "next/link";
import { Progression } from "../components/constants/progressions";
import { FC } from "react";

const Card: FC<{
  progression: string;
  progressionKey: string;
  chords: string;
}> = ({ progression, progressionKey, chords }) => (
  <div className="bg-white p-4 rounded">
    <h3 className="text-1xl font-bold text-blue-600">{progression}</h3>
    <p>
      <span className="font-bold">Key</span>: {progressionKey}
    </p>
    <p>
      <span className="font-bold">Chords</span>: {chords}
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="h-screen max-w-6xl m-auto">
      <div>
        <h2 className="text-3xl font-bold">Most Popular Progressions</h2>
        <div className="mb-4"></div>
        <Link href={`/progression/${"I-V-vi-IV" as Progression}`}>
          <Card
            progression="I-V-vi-IV"
            progressionKey="C Major"
            chords="C G Am F"
          />
        </Link>
        <div className="mb-4"></div>

        <Link href={`/progression/${"ii-V-I" as Progression}`}>
          <Card progression="ii-V-I" progressionKey="C Major" chords="Dm G C" />
        </Link>
        <div className="mb-4"></div>

        <Link href={`/progression/${"I-IV-V" as Progression}`}>
          <Card progression="I-IV-V" progressionKey="C Major" chords="C F G" />
        </Link>
      </div>
    </div>
  );
}
