import styles from "./DocumentPage.module.css"

import { ContentPage, useAppInfoStore } from "@/App"
import { Content } from "@/features/Content"
import { Header } from "@/features/Header"
import { LandingPage } from "@/features/LandingPage"
import { Sider } from "@/features/Sider"
import { useEffect, useMemo } from "react"
import { useSearchParams } from "react-router-dom"

export const DocumentPage = () => {
  const [searchParams] = useSearchParams()
  const setContentPage = useAppInfoStore((state) => state.setContentPage)

  const contentPage = useMemo(
    () => (searchParams.get("content") || "") as ContentPage,
    [searchParams]
  )
  useEffect(() => {
    setContentPage(contentPage)
  }, [contentPage, setContentPage])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.body}>
        {contentPage === "" ? (
          <LandingPage />
        ) : (
          <div className={styles.bodyContainer}>
            <Sider />
            <Content />
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <div>Copyright © 2024 T.T. Everything is handmade.</div>
        <div>MIT LICENSE</div>
      </footer>
    </div>
  )
}
