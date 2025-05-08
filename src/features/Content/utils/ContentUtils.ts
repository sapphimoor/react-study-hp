import { ContentPage } from "@/App"
import { Heading } from "./Content.type"

import React from "react"

export class ContentUtils {
  static createIndex = (
    children: React.ReactNode
  ): { headings: Heading[]; content: React.ReactNode } => {
    const headings: Heading[] = []
    const content = this.createIndexInner(children, headings)

    return {
      headings,
      content,
    }
  }

  private static createIndexInner = (
    children: React.ReactNode,
    headings: Heading[]
  ): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child

      const tag = child.type
      if (typeof tag === "string" && /^h[2-6]$/.test(tag)) {
        if (child.props["data-nosider"]) return child

        const text = child.props.children as string
        const duplicateCount = headings.filter(
          (heading) =>
            heading.text === text ||
            (heading.text.startsWith(text) &&
              !Number.isNaN(parseInt(heading.text.slice(text.length))))
        ).length
        const id = text + (duplicateCount || "")

        headings.push({
          text,
          level: parseInt(tag[1]),
          id,
        })

        return React.cloneElement(child as React.ReactElement<{ id: string }>, {
          id,
        })
      }

      if (child.props.children) {
        return React.cloneElement(
          child as React.ReactElement<{ children: React.ReactNode }>,
          {
            children: this.createIndexInner(child.props.children, headings),
          }
        )
      }

      return child
    })
  }

  static makeUrlParams = (contentPage: ContentPage, hash?: string): string => {
    return `?content=${contentPage}` + (hash ? `#${hash}` : "")
  }
}
