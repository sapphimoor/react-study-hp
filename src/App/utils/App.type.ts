export const ContentPageStr = [
  "",
  "Introduction",
  "Lesson",
  "Lesson/AboutReact",
  "Lesson/MakeEnvironment",
  "Lesson/ReactBasic",
  "Lesson/BackendConnection",
  "Lesson/TeamDevelopment",
  "Lesson/AboutProgramDesign",
] as const

export type ContentPage = (typeof ContentPageStr)[number]
