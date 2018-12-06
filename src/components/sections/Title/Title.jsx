import React from 'react'
import style from './Title.module.scss'
export default (params) => {
    return (
        <div className={style.Title} >
            <h2 className={style.Text}> {params.title}</h2>
            <div className={style.Line}></div>
        </div>
    )
}
