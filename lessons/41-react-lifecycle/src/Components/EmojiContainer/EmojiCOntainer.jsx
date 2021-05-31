import React from 'react'
import EmojiRow from '../EmojiRow/EmojiRow'
import style from './EmojiCOntainer.module.css'

const EmojiCOntainer = ({ emojiList = [] }) => {
  return (
    <div className={style.wrapper}>
      {emojiList.map((item) => {
        return <EmojiRow img={item.symbol} title={item.title} />
      })}
    </div>
  )
}

export default EmojiCOntainer
