import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

const Basic: React.FC<{
  code: string
  language: Language
}> = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, tokens, getLineProps, getTokenProps }) => (
      <pre className={`${className} dm__text-[14px]`}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default Basic
