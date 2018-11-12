import React, {Component} from 'react'
import {ReactComponent as VisaCardIcon} from './svg/visa.svg'
import {ReactComponent as MasterCardIcon} from './svg/mastercard.svg'
import {ReactComponent as MirCardIcon} from './svg/mir.svg'
import style from './creditCards.module.scss'
export default class creditCards extends Component {
    render() {
        return (
            <div>
                <div className={style.CreditCards}>
                    <div className={style.CreditCard}>
                        <VisaCardIcon width="80px" height="80px"/>
                    </div>
                    <div className={style.CreditCard}>
                        <MasterCardIcon width="80px" height="80px"/>
                    </div>
                    <div className={style.CreditCard}>
                        <MirCardIcon width="100px" height="80px" viewBox="0 0 46 10"/>
                    </div>
                </div>
            </div>
        )
    }
}
