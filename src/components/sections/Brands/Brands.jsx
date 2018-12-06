import React from 'react'
import style from './Brands.module.scss'
import { ReactComponent as Estel } from './svg/estel.svg'
import { ReactComponent as Indola } from './svg/indols.svg'
import { ReactComponent as Refectocil } from './svg/refectocil.svg'
import { ReactComponent as Schwarzkopf } from './svg/schwarzkopf.svg'
import { ReactComponent as Wella } from './svg/wella.svg'

export default () => {
    return (
        <section className={style.Box}>
            <a className={style.Brand}  target="_blank" rel="noopener noreferrer" href="http://estel-online.ru/">
                <Estel width="150" height="70"/> 
            </a> 
            <a className={style.Brand}  target="_blank" rel="noopener noreferrer" href="http://www.indola.ru/ru/home.html">
                <Indola width="150" height="70"/> 
            </a> 
            <a className={style.Brand}  target="_blank" rel="noopener noreferrer" href="http://refectocil.ru/">
                <Refectocil width="150" height="70"/> 
            </a> 
            <a className={style.Brand}  target="_blank" rel="noopener noreferrer" href="http://www.schwarzkopf.ru/ru/home.html">
                <Schwarzkopf width="150" height="70"/>
            </a>
            <a className={style.Brand} target="_blank" rel="noopener noreferrer"  href="https://www.wella.com/professional/countryselector">
                <Wella width="150" height="70"/>
            </a>
        </section>
    )
}
