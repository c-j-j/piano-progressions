import { ChordProgression, ChordWithOctave } from "./getChordProgression";

export const invertChordInProgressionUp = (
  chordProgression: ChordProgression,
  chordNumber: number
): ChordProgression => {
  const newChordProgression = [...chordProgression];
  for (let i = 0; i < newChordProgression.length; i++) {
    if (i === chordNumber) {
      const chord = newChordProgression[i];

      const rootKey = chord.progression[0][0];
      const rootOctave = chord.progression[0][1];
      const newRootKey = `${rootKey}${parseInt(rootOctave) + 1}`;
      const rest = chord.progression.slice(1);
      chord.progression = [...rest, newRootKey] as ChordWithOctave;
    }
  }
  return newChordProgression;
};
