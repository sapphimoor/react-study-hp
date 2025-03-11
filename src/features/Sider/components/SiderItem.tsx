import { contentPageToName } from "../utils/contentPageToName"
import styles from "./Sider.module.css"

import { ContentPage } from "@/App"

export interface SiderItemProps {
  checkSelected: (contentPage: ContentPage) => boolean
  path: ContentPage
  onClick: (path: ContentPage) => void
}

export const SiderItem = (props: SiderItemProps) => {
  const { checkSelected, path, onClick } = props
  const selected = checkSelected(path)
  const nodes = path.split("/")
  const level = nodes.length - 1
  const fileName = contentPageToName(path)

  return (
    <div
      className={`${styles.siderItem} ${selected ? styles.selected : ""}`}
      style={{
        marginLeft: `${level * 10 + 10}px`,
        padding: `${10 - level * 4}px 10px ${10 - level * 4}px 10px`,
      }}
      onClick={() => onClick(path)}
    >
      {fileName}
    </div>
  )
}
