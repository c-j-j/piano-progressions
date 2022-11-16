export const Progressions = {
  "I-V-vi-IV": ["I", "V", "vi", "IV"],
  "I-IV-V": ["I", "IV", "V"],
  "ii-V-I": ["ii", "V", "I"],
};

export type Progression = keyof typeof Progressions;
