import { getChordProgression, getScale } from "./getChordProgression";

test("getScale", () => {
  expect(getScale("C")).toEqual(["C", "D", "E", "F", "G", "A", "B"]);
  expect(getScale("D")).toEqual(["D", "E", "F#", "G", "A", "B", "C#"]);
  expect(getScale("E")).toEqual(["E", "F#", "G#", "A", "B", "C#", "D#"]);
  expect(getScale("F")).toEqual(["F", "G", "A", "A#", "C", "D", "E"]);
  expect(getScale("G")).toEqual(["G", "A", "B", "C", "D", "E", "F#"]);
  expect(getScale("A")).toEqual(["A", "B", "C#", "D", "E", "F#", "G#"]);
  expect(getScale("B")).toEqual(["B", "C#", "D#", "E", "F#", "G#", "A#"]);
});

test("I V vi IV C", () => {
  expect(getChordProgression("C", ["I", "V", "vi", "IV"], 3)).toEqual([
    { label: "I", progression: ["C3", "E3", "G3"] },
    { label: "V", progression: ["G3", "B3", "D4"] },
    { label: "vi", progression: ["A3", "C4", "E4"] },
    { label: "IV", progression: ["F3", "A3", "C4"] },
  ]);
});
