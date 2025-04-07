import styles from "./CodeBlock.module.css"

import { Copy } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"
import { useState } from "react"

export interface CodeBlockProps {
  code: string
  language: string
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { code } = props
  const digits = code.split("\n").length.toString().length
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={styles.container}>
      <Highlight theme={themes.shadesOfPurple} {...props}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className={styles.content}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span
                  style={{
                    marginRight: `calc(20px + ${digits - (i + 1).toString().length}ch)`,
                  }}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <div className={styles.copyContainer}>
        <button onClick={handleCopy}>
          <Copy size={16} color="#5195E1" />
        </button>

        {/* コピー完了メッセージ */}
        {copied && <div className={styles.copyText}>Copied!</div>}
      </div>
    </div>
  )
}
