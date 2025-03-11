import { create } from "zustand"
import { ContentPage } from "../utils/App.type"

export interface AppInfo {
  contentPage: ContentPage
  setContentPage: React.Dispatch<React.SetStateAction<ContentPage>>
}

export const useAppInfoStore = create<AppInfo>((set) => ({
  contentPage: "Introduction",
  setContentPage: (valOrFunc) =>
    set((prev) => ({
      contentPage:
        typeof valOrFunc === "string" ? valOrFunc : valOrFunc(prev.contentPage),
    })),
}))
