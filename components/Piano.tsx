"use client";

import { FC, useState } from "react";
import styles from "./Piano.module.css";
import { getChordProgression } from "./helpers/getChordProgression";
import { Progressions } from "./constants/progressions";

const pianoKeys = [
  { key: "C", color: "white", label: "C" },
  { key: "Csharp", color: "black", label: "C#" },
  { key: "D", color: "white", label: "D" },
  { key: "Dsharp", color: "black", label: "D#" },
  { key: "E", color: "white", label: "E" },
  { key: "F", color: "white", label: "F" },
  { key: "Fsharp", color: "black", label: "F#" },
  { key: "G", color: "white", label: "G" },
  { key: "Gsharp", color: "black", label: "G#" },
  { key: "A", color: "white", label: "A" },
  { key: "Asharp", color: "black", label: "A#" },
  { key: "B", color: "white", label: "B" },
];

type Props = {
  octave: number;
  highlightedKeys: string[];
};

const PianoOctave: FC<Props> = ({ octave, highlightedKeys }) => {
  return (
    <div className={styles.piano}>
      {pianoKeys.map((key) => {
        const keyName = `${key.key}${octave}`;
        const isHighlighted = highlightedKeys.includes(keyName);
        const className = `${styles[key.key]} ${styles[key.color]}`;
        return (
          <div className={className} key={key.key}>
            {isHighlighted && (
              <div className="flex items-end justify-center h-full text-red-600">
                *
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const cProgression = getChordProgression("C", Progressions["I-V-vi-IV"], 3);

const buttonClass =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

const iconClass =
  "bg-yellow-600 text-white p-2 rounded-full h-8 w-8 flex justify-center items-center";

export const Piano = () => {
  const [progressionIndex, setProgressionIndex] = useState(0);
  const progression = cProgression[progressionIndex];

  const progressionButtons = cProgression.map((progression, index) => {
    return (
      <button
        className={
          iconClass +
          " " +
          (index === progressionIndex ? " border-2 border-black" : "")
        }
        onClick={() => setProgressionIndex(index)}
        key={index}
      >
        {progression.label}
      </button>
    );
  });

  const onPrevious = () => {
    if (progressionIndex === 0) {
      return;
    }
    setProgressionIndex(progressionIndex - 1);
  };

  const onNext = () => {
    if (progressionIndex === cProgression.length - 1) {
      return;
    }
    setProgressionIndex(progressionIndex + 1);
  };

  return (
    <div className="flex flex-col">
      <div>
        <PianoOctave octave={1} highlightedKeys={progression.progression} />
        <PianoOctave octave={2} highlightedKeys={progression.progression} />
        <PianoOctave octave={3} highlightedKeys={progression.progression} />
        <PianoOctave octave={4} highlightedKeys={progression.progression} />
      </div>
      <div className="flex justify-center gap-4">
        <button className={buttonClass} onClick={onPrevious}>
          Previous
        </button>
        <button className={buttonClass} onClick={onNext}>
          Next
        </button>
      </div>
      <div className="mb-4" />
      <div className="flex justify-center gap-2">{progressionButtons}</div>
    </div>
  );
};
