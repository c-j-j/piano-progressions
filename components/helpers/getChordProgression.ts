const keys = ["C", "D", "E", "F", "G", "A", "B"] as const;
type Key = typeof keys[number];
const notes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "Eb",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "Ab",
  "B",
  "Bb",
] as const;
type Note = typeof notes[number];

type Chord = [Note, Note, Note];

const majorChords: Record<Note, Chord> = {
  Ab: ["Ab", "C", "Eb"],
  Bb: ["Bb", "D", "F"],
  Eb: ["Eb", "G", "Bb"],
  "A#": ["A#", "C#", "E"],
  "C#": ["C#", "E", "G#"],
  "D#": ["D#", "F#", "A#"],
  "F#": ["F#", "A#", "C#"],
  "G#": ["G#", "B", "D#"],
  C: ["C", "E", "G"],
  D: ["D", "F#", "A"],
  E: ["E", "G#", "B"],
  F: ["F", "A", "C"],
  G: ["G", "B", "D"],
  A: ["A", "C#", "E"],
  B: ["B", "D#", "F#"],
};

const minorChords: Record<Note, Chord> = {
  "A#": ["A#", "C#", "E"],
  "C#": ["C#", "E", "G#"],
  "D#": ["D#", "F#", "A#"],
  "F#": ["F#", "A#", "C#"],
  "G#": ["G#", "B", "D#"],
  Ab: ["Ab", "C", "Eb"],
  Bb: ["Bb", "D", "F"],
  Eb: ["Eb", "G", "Bb"],
  C: ["C", "Eb", "G"],
  D: ["D", "F", "A"],
  E: ["E", "G", "B"],
  F: ["F", "Ab", "C"],
  G: ["G", "Bb", "D"],
  A: ["A", "C", "E"],
  B: ["B", "D", "F#"],
};

type ChordWithOctave = [
  `${Note}${number}`,
  `${Note}${number}`,
  `${Note}${number}`
];

type ChordProgression = { label: string; progression: ChordWithOctave }[];

const getChord2 = (
  key: Key,
  chordType: "major" | "minor",
  note: number,
  octave: number
): ChordWithOctave => {
  const keyIndex = keys.indexOf(key);
  const chordKey = keys[(keyIndex + note) % 7];

  if (chordType === "major") {
    return majorChords[chordKey].map(
      (note) => `${note}${octave}`
    ) as ChordWithOctave;
  } else {
    return minorChords[chordKey].map(
      (note) => `${note}${octave}`
    ) as ChordWithOctave;
  }
};

export const getChordProgression = (
  key: Key,
  progression: string[],
  octave: number
): ChordProgression => {
  const results: [string, ChordWithOctave][] = progression.map((chord) => {
    switch (chord) {
      case "I":
        return ["I", getChord2(key, "major", 0, octave)];
      case "ii":
        return ["ii", getChord2(key, "minor", 1, octave)];
      case "iii":
        return ["iii", getChord2(key, "minor", 2, octave)];
      case "IV":
        return ["IV", getChord2(key, "major", 3, octave)];
      case "V":
        return ["V", getChord2(key, "major", 4, octave)];
      case "vi":
        return ["vi", getChord2(key, "minor", 5, octave)];
      case "vii":
        return ["vii", getChord2(key, "minor", 6, octave)];
      default:
        return ["I", getChord2(key, "major", 0, octave)];
    }
  });

  return results.map(([label, progression]) => ({
    label: label,
    progression: progression,
  }));
};
