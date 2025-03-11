import { ContentUtils } from "../utils/ContentUtils"
import { getContent } from "../utils/getContent"
import styles from "./Content.module.css"

import { useAppInfoStore } from "@/App"

export const Content = () => {
  const contentPage = useAppInfoStore((state) => state.contentPage)
  const content = getContent(contentPage)
  const { headings, content: editedContent } = ContentUtils.createIndex(content)

  return (
    <div className={`${styles.content} content`}>
      <div className={styles.main}>{editedContent}</div>
      <aside className={styles.index}>
        <div className={styles.indexContainer}>
          {headings.map((heading, index) => (
            <ul
              key={index}
              className={styles.indexItem}
              style={{ paddingLeft: `${heading.level}rem` }}
            >
              <li>
                <a href={`#${heading.id}`}>{heading.text}</a>
              </li>
            </ul>
          ))}
        </div>
      </aside>
    </div>
  )
}
