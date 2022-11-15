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

const getChord2 = (
  key: Key,
  chordType: "major" | "minor",
  note: number
): Chord => {
  const keyIndex = keys.indexOf(key);
  const chordKey = keys[(keyIndex + note) % 7];

  if (chordType === "major") {
    return majorChords[chordKey];
  } else {
    return minorChords[chordKey];
  }
};

export const getChordProgression = (
  key: Key,
  progression: string[]
): Chord[] => {
  return progression.map((chord) => {
    switch (chord) {
      case "I":
        return getChord2(key, "major", 0);
      case "ii":
        return getChord2(key, "minor", 1);
      case "iii":
        return getChord2(key, "minor", 2);
      case "IV":
        return getChord2(key, "major", 3);
      case "V":
        return getChord2(key, "major", 4);
      case "vi":
        return getChord2(key, "minor", 5);
      case "vii":
        return getChord2(key, "minor", 6);
      default:
        return getChord2(key, "major", 0);
    }
  });
};
