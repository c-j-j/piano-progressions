import {getChordProgression} from "./getChordProgression";

test('1564 C' , () => {
  expect(getChordProgression('C', [1,5,6,4])).toEqual([['C3', 'E3', 'G3'], ['G3', 'B3', 'D4'], ['A3', 'C4', 'E4'], ['F3', 'A3', 'C4']]);
});
