import { invertChordInProgressionUp } from "./invertChordInProgressionUp";
import { ChordProgression } from "./getChordProgression";

test("inverts chord progression", () => {
  const progression: ChordProgression = [
    {
      label: "I",
      progression: ["C4", "E4", "G4"],
    },
  ];
  expect(invertChordInProgressionUp(progression, 0)).toEqual([
    {
      label: "I",
      progression: ["E4", "G4", "C5"],
    },
  ]);
});
