import React from "react";
import style from "./styles.module.scss"

export default () => {
    return (
        <React.Fragment>
            <h2 className={style.Context__Header}>Массаж</h2>
            <p className={style.Context__Paragraph}>Столичный салон красоты «Ирис» – идеальное место, где можно расслабиться и оздоровить собственный организм при помощи целебного массажа. Профессиональный подход, применение медицинских методик и техник позволяет нашим мастерам предоставлять услуги высочайшего уровня качества, удовлетворять пожелания даже самых требовательных клиентов и формировать незапятнанную репутацию салона «Ирис».</p>
            <p className={style.Context__Paragraph}>Квалифицированный целебный массаж позволит забыть об усталости, улучшить кровообращение, устранить суставную и мышечную боль. Процедуры проводятся руками талантливых и опытных мастеров в спокойной обстановке, где вы сможете хотя бы ненадолго забыть о заботах и жизненной суете. Позвольте своему телу и сознанию расслабиться под умиротворяющую SPA-музыку.</p>
            <p className={style.Context__Paragraph}>Восстановить энергетическое и душевное равновесие, а также зарядиться положительной энергией и улучшить метаболические процессы можно благодаря классическим и лечебным массажным методикам. Мы поможем вам избавиться от целлюлита, ведь на сегодняшний день именно массаж является самым безопасным и доступным с точки зрения финансов способом избавления от структурных изменений в подкожном слое, ведущих к нарушению микроциркуляции.</p>
            <h3 className={style.Context__Title}>Преимущества массажа от мастеров салона красоты «Ирис»</h3>
            <p className={style.Context__Paragraph}>Массаж – таинство, которое проводится за закрытой дверью. Учитывая современное многообразие салонов и услуг сложно определить достойное заведение, где трудятся настоящие специалисты. Важно не ошибиться, поэтому мы настоятельно рекомендуем вам воспользоваться именно нашими услугами.</p>
            <p className={style.Context__Paragraph}>Существует огромное количество причин, почему стоит заказать массаж в Москве непосредственно в салоне «Ирис». Тут вам предложат:</p>
            <ul className={style.Context__List}>
                <li className={style.Context__ListItem}>уютную обстановку и подходящее время;</li>
                <li className={style.Context__ListItem}>широкий ассортимент, массажи на любой вкус;</li>
                <li className={style.Context__ListItem}>доступные цены;</li>
                <li className={style.Context__ListItem}>бесплатные консультации.</li>
            </ul>
            <p className={style.Context__Paragraph}>Позвоните нам прямо сейчас по контактному телефонному номеру +7 (499) 900-97-97 и запишитесь на массаж на подходящее время. Если вы не знаете, какая конкретно процедура вам нужна, вы можете всегда получить бесплатную консультацию, например, посетив наш салон лично. Ждем вас ежедневно с 10 утра до 9 вечера (в выходные дни работаем до 8 вечера). Мы всегда рады и постоянным, и новым клиентам!</p>
        </React.Fragment>

    )
}