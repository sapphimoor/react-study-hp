import { ContentPage } from "@/App"

export const contentPageToName = (contentPage: ContentPage): string => {
  switch (contentPage) {
    case "":
      return ""
    case "Introduction":
      return "イントロダクション"
    case "Lesson":
      return "Reactについて"
    case "Lesson/AboutReact":
      return "Reactとは"
    case "Lesson/MakeEnvironment":
      return "環境の作成方法"
    case "Lesson/ReactBasic":
      return "Reactの基本的な書き方"
    case "Lesson/BackendConnection":
      return "バックエンドとの接続"
    case "Lesson/TeamDevelopment":
      return "チームで開発するときに気を付けること"
    case "Lesson/AboutProgramDesign":
      return "設計について"
    default:
      return "src/features/Sider/utils/contentPageToName.ts を修正してね"
  }
}
