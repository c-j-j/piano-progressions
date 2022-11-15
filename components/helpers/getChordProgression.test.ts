import { getChordProgression } from "./getChordProgression";

test("1564 C", () => {
  expect(getChordProgression("C", ["I", "V", "vi", "IV"], 3)).toEqual([
    ["C3", "E3", "G3"],
    ["G3", "B3", "D3"],
    ["A3", "C4", "E4"],
    ["F3", "A3", "C4"],
  ]);
});
