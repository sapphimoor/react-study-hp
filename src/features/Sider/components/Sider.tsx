import { ContentPage, ContentPageStr, useAppInfoStore } from "@/App"
import styles from "./Sider.module.css"

import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SiderContainer } from "./SiderContainer"
import { SiderItem } from "./SiderItem"

export const Sider = () => {
  const [openSider, setOpenSider] = useState(true)
  const contentPage = useAppInfoStore((state) => state.contentPage)
  const [, setSearchParams] = useSearchParams()

  const checkSelected = useCallback(
    (path: ContentPage) => path === contentPage,
    [contentPage]
  )
  const checkSelectedDescendant = useCallback(
    (path: ContentPage) => contentPage.includes(path),
    [contentPage]
  )

  return (
    <aside
      className={`${styles.sider} ${openSider ? styles.siderOpen : styles.siderCollapsed}`}
    >
      <div className={styles.siderContent}>
        {ContentPageStr.map((contentName, index) => {
          if (contentName === "" || contentName.includes("/")) {
            return null
          }
          const childrenNames = ContentPageStr.filter((item) =>
            item.startsWith(contentName + "/")
          )
          if (childrenNames.length > 0) {
            return (
              <SiderContainer
                key={index}
                checkSelected={checkSelected}
                checkSelectedDescendant={checkSelectedDescendant}
                path={contentName}
                childrenNames={childrenNames}
                onClick={(path) => setSearchParams({ content: path })}
              />
            )
          }
          return (
            <SiderItem
              key={index}
              checkSelected={checkSelected}
              path={contentName}
              onClick={(path) => setSearchParams({ content: path })}
            />
          )
        })}
      </div>
      <button
        onClick={() => setOpenSider((prev) => !prev)}
        className={styles.siderButton}
      >
        {openSider ? "＜" : "＞"}
      </button>
    </aside>
  )
}
