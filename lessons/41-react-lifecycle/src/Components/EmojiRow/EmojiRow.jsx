import React from 'react'
import style from './EmojiRow.module.css'

const EmojiRow = ({ title, img }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.img}>{img}</div>
      <div className={style.title}>{title}</div>
    </div>
  )
}

export default EmojiRow
