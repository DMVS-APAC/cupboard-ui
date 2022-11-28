import React from 'react'
import CodeRender from '../../components/CodeRender'

export enum FontType {
  regular = 'dm__font-retina',
  medium = 'dm__font-medium',
  bold = 'dm__font-bold',
  black = 'dm__font-black',
}

const FontClass: any = {
  57: 'dm__text-6xl',
  46: 'dm__text-5xl',
  37: 'dm__text-4xl',
  29: 'dm__text-3xl',
  23: 'dm__text-2xl',
  19: 'dm__text-lg',
  15: 'dm__text-base',
  12: 'dm__text-sm',
  10: 'dm__text-xs',
}

const FontListsItem: React.FC<{
  value: number
  title: string
  fontType: FontType
}> = (props) => {
  return (
    <div>
      <div className=" dm__flex flex-row dm__items-center dm__gap-4">
        <div className=" dm__text-right dm__font-light dm__text-sm dm__w-32">
          <p>{props.value}px</p>
          <p className="!dm__mt-0">{props.value * 0.625}rem</p>
        </div>
        <p className={`dm__font-retina !dm__mt-0 ${FontClass[props.value]} `}>{props.title}</p>
      </div>
      <div className=" dm__flex flex-row dm__items-center dm__gap-4">
        <div className="dm__w-32"></div>
        <div className="dm__flex-1">
          <CodeRender
            code={`<p class="dm__font-retina ${FontClass[props.value]}">${props.title}</p>`}
            language="markup"
          />
        </div>
      </div>
    </div>
  )
}

export const FontLists: React.FC<{
  title: string
  fontType: FontType
}> = (props) => {
  return (
    <div className=" dm__flex dm__flex-col dm__gap-7 dm__mt-10">
      <FontListsItem fontType={props.fontType} value={57} title={props.title} />
      <FontListsItem fontType={props.fontType} value={46} title={props.title} />
      <FontListsItem fontType={props.fontType} value={37} title={props.title} />
      <FontListsItem fontType={props.fontType} value={29} title={props.title} />
      <FontListsItem fontType={props.fontType} value={23} title={props.title} />
      <FontListsItem fontType={props.fontType} value={19} title={props.title} />
      <FontListsItem fontType={props.fontType} value={15} title={props.title} />
      <FontListsItem fontType={props.fontType} value={12} title={props.title} />
      <FontListsItem fontType={props.fontType} value={10} title={props.title} />
    </div>
  )
}
