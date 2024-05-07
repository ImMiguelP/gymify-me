export const activityLevels = [
  { value: "none", label: "None" },
  { value: "lightly", label: "Lightly Active" },
  { value: "moderately", label: "Moderately Active" },
  { value: "extreme", label: "Extremely Active" },
];

export const genderOptions = [{ value: "Male" }, { value: "Female" }];

export const feetOptions = Array.from({ length: 4 }, (_, index) => ({
  value: index + 4,
}));

export const inchesOptions = Array.from({ length: 11 }, (_, index) => ({
  value: index + 1,
}));
