const keys = ["C", "D", "E", "F", "G", "A", "B"] as const;
type Key = typeof keys[number];
const notes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;
type Note = typeof notes[number];

export type ChordWithOctave = [
  `${Note}${number}`,
  `${Note}${number}`,
  `${Note}${number}`
];

export type ChordProgression = {
  label: string;
  progression: ChordWithOctave;
}[];

export function getScale(key: Key): Note[] {
  const startIndex = notes.findIndex((note) => note === key);

  const first = notes.at(startIndex % notes.length);
  const second = notes.at((startIndex + 2) % notes.length);
  const third = notes.at((startIndex + 4) % notes.length);
  const fourth = notes.at((startIndex + 5) % notes.length);
  const fifth = notes.at((startIndex + 7) % notes.length);
  const sixth = notes.at((startIndex + 9) % notes.length);
  const seventh = notes.at((startIndex + 11) % notes.length);

  return [first!, second!, third!, fourth!, fifth!, sixth!, seventh!];
}

const getChord3 = (
  scale: Note[],
  scaleType: "major" | "minor",
  chordRoot: number,
  octave: number
): ChordWithOctave => {
  const root = scale[chordRoot];
  const keyIndex = notes.findIndex((note) => note === root);
  if (scaleType === "major") {
    const third = notes[(keyIndex + 4) % 12];
    const thirdOctave = keyIndex + 4 > 11 ? octave + 1 : octave;
    const fifth = notes[(keyIndex + 7) % 12];
    const fifthOctave = keyIndex + 7 > 11 ? octave + 1 : octave;

    return [
      `${root}${octave}`,
      `${third}${thirdOctave}`,
      `${fifth}${fifthOctave}`,
    ];
  } else {
    const third = notes[(keyIndex + 3) % 12];
    const thirdOctave = keyIndex + 3 > 11 ? octave + 1 : octave;
    const fifth = notes[(keyIndex + 7) % 12];
    const fifthOctave = keyIndex + 7 > 11 ? octave + 1 : octave;

    return [
      `${root}${octave}`,
      `${third}${thirdOctave}`,
      `${fifth}${fifthOctave}`,
    ];
  }
};

export const getChordProgression = (
  key: Key,
  progression: string[],
  octave: number
): ChordProgression => {
  const scale = getScale(key);
  const results: [string, ChordWithOctave][] = progression.map((chord) => {
    switch (chord) {
      case "I":
        return ["I", getChord3(scale, "major", 0, octave)];
      case "ii":
        return ["ii", getChord3(scale, "minor", 1, octave)];
      case "iii":
        return ["iii", getChord3(scale, "minor", 2, octave)];
      case "IV":
        return ["IV", getChord3(scale, "major", 3, octave)];
      case "V":
        return ["V", getChord3(scale, "major", 4, octave)];
      case "vi":
        return ["vi", getChord3(scale, "minor", 5, octave)];
      case "vii":
        return ["vii", getChord3(scale, "minor", 6, octave)];
      default:
        return ["I", getChord3(scale, "major", 0, octave)];
    }
  });

  return results.map(([label, progression]) => ({
    label: label,
    progression: progression,
  }));
};
