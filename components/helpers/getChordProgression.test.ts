import { getChordProgression } from "./getChordProgression";

test("1564 C", () => {
  expect(getChordProgression("C", ["I", "V", "vi", "IV"])).toEqual([
    ["C", "E", "G"],
    ["G", "B", "D"],
    ["A", "C", "E"],
    ["F", "A", "C"],
  ]);
});
