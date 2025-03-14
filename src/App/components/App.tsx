import { DocumentPage } from "@/features/DocumentPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const basename = import.meta.env.DEV ? "/" : "/react-study-hp/"

export const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<DocumentPage />} />
      </Routes>
    </BrowserRouter>
  )
}
