import { contentPageToName } from "../utils/contentPageToName"
import styles from "./Sider.module.css"
import { SiderItem } from "./SiderItem"

import { ContentPage } from "@/App"
import { useEffect, useRef, useState } from "react"

export interface SiderContainerProps {
  checkSelected: (contentPage: ContentPage) => boolean
  checkSelectedDescendant: (contentPage: ContentPage) => boolean
  path: ContentPage
  childrenNames: ContentPage[]
  onClick: (path: ContentPage) => void
}

export const SiderContainer = (props: SiderContainerProps) => {
  const {
    checkSelected,
    checkSelectedDescendant,
    path,
    childrenNames,
    onClick,
  } = props
  const selected = checkSelected(path)
  const selectedDescendant = checkSelectedDescendant(path)
  const nodes = path.split("/")
  const level = nodes.length - 1
  const fileName = contentPageToName(path)

  const [childrenContainerOpen, setChildrenContainerOpen] = useState(
    selected || selectedDescendant
  )
  const childrenContainerRef = useRef<HTMLDivElement>(null)

  const setChildrenContainerOpenWithChangeHeight = (
    funcOrVal: React.SetStateAction<boolean>
  ) => {
    setChildrenContainerOpen((prev) => {
      const nextValue =
        typeof funcOrVal === "function" ? funcOrVal(prev) : funcOrVal
      if (childrenContainerRef.current) {
        childrenContainerRef.current.style.height = nextValue
          ? `${childrenContainerRef.current.scrollHeight}px`
          : "0px"
      }
      return nextValue
    })
  }

  useEffect(() => {
    setChildrenContainerOpenWithChangeHeight(selected || selectedDescendant)
  }, [selected, selectedDescendant])

  return (
    <>
      <div
        className={`${styles.siderItem} ${
          selected
            ? styles.selected
            : selectedDescendant
              ? styles.selectedDescendant
              : ""
        }`}
        style={{
          marginLeft: `${level * 10 + 10}px`,
          padding: `${10 - level * 4}px 10px ${10 - level * 4}px 10px`,
        }}
        onClick={() => {
          setChildrenContainerOpenWithChangeHeight(true)
          onClick(path)
        }}
      >
        {fileName}
        <div
          className={styles.containerToggleButton}
          onClick={(e) => {
            e.stopPropagation()
            setChildrenContainerOpenWithChangeHeight((prev) => !prev)
          }}
        >
          <div
            className={`${styles.containerToggleButtonText} ${
              childrenContainerOpen ? styles.containerToggleButtonTextOpen : ""
            }`}
          >
            ＞
          </div>
        </div>
      </div>
      <div ref={childrenContainerRef} className={styles.childrenContainer}>
        {childrenNames.map((childName) => (
          <SiderItem
            key={childName}
            checkSelected={checkSelected}
            path={childName}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  )
}
