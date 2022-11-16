import { invertChordInProgressionUp } from "./invertChordInProgressionUp";
import { ChordProgression } from "./getChordProgression";
import { invertChordInProgressionDown } from "./invertChordInProgressionDown";

test("inverts chord progression down", () => {
  const progression: ChordProgression = [
    {
      label: "I",
      progression: ["C4", "E4", "G4"],
    },
  ];
  expect(invertChordInProgressionDown(progression, 0)).toEqual([
    {
      label: "I",
      progression: ["G3", "C4", "E4"],
    },
  ]);
});
