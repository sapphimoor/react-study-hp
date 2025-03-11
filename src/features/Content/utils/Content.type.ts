import { ContentPage } from "@/App"

export type Heading = {
  text: string
  level: number
  id: string
}

export interface ContentProps {
  goToPage: (page: ContentPage, hash?: string) => void | Promise<void>
}

export type ContentFunc = (props: ContentProps) => React.ReactNode
