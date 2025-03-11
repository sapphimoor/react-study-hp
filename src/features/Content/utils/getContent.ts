import { Introduction } from "../components/contents/Introduction"
import { Lesson } from "../components/contents/Lesson"
import { AboutProgramDesign } from "../components/contents/Lesson/AboutProgramDesign"
import { AboutReact } from "../components/contents/Lesson/AboutReact"
import { BackendConnection } from "../components/contents/Lesson/BackendConnection"
import { MakeEnvironment } from "../components/contents/Lesson/MakeEnvironment"
import { ReactBasic } from "../components/contents/Lesson/ReactBasic"
import { TeamDevelopment } from "../components/contents/Lesson/TeamDevelopment"

import { ContentPage } from "@/App"

export const getContent = (contentPage: ContentPage): React.ReactNode => {
  switch (contentPage) {
    case "":
      return null
    case "Introduction":
      return Introduction()
    case "Lesson":
      return Lesson()
    case "Lesson/AboutReact":
      return AboutReact()
    case "Lesson/MakeEnvironment":
      return MakeEnvironment()
    case "Lesson/ReactBasic":
      return ReactBasic()
    case "Lesson/BackendConnection":
      return BackendConnection()
    case "Lesson/TeamDevelopment":
      return TeamDevelopment()
    case "Lesson/AboutProgramDesign":
      return AboutProgramDesign()
    default:
      return "src/features/Content/utils/getContent.ts を修正してね"
  }
}
