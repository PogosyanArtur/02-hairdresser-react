import React from "react";
import style from "./styles.module.scss"
import Card from "../Card"
import lists from "./ServiceData"

export default () => {
 return (
      <section className={style.Box}>
        <div className={style.Content}>
        {lists.map(item=>(
          <Card
            cardClassName={style.Item}
            key={item.title}
            title={item.title}
            context={item.context}
            src={require(`../../assets/images/${item.src}.jpg`)}
            alt={item.alt}
          />
        ))}

        </div>
      </section>
    )
  }
