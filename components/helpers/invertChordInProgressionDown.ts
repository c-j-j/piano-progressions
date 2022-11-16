import { ChordProgression, ChordWithOctave } from "./getChordProgression";

export const invertChordInProgressionDown = (
  chordProgression: ChordProgression,
  chordNumber: number
): ChordProgression => {
  const newChordProgression = [...chordProgression];
  for (let i = 0; i < newChordProgression.length; i++) {
    if (i === chordNumber) {
      const chord = newChordProgression[i];

      const rootKey = chord.progression.at(-1)![0];
      const rootOctave = chord.progression.at(-1)![1];
      const newRootKey = `${rootKey}${parseInt(rootOctave) - 1}`;
      const rest = chord.progression.slice(0, -1);
      chord.progression = [newRootKey, ...rest] as ChordWithOctave;
    }
  }
  return newChordProgression;
};
