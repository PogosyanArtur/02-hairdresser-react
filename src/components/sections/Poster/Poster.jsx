import React from 'react'
import style from './Poster.module.scss'

export default (params) => {
    return (
        <section className={style.Box}>
            <img src={require("../../../assets/images/20-1916x108.jpg")} alt="Фоновая картинка"/>
            <h2 className={style.Title}>{params.title}</h2>
        </section>  
        )
}


