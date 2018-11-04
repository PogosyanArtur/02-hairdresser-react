import React from 'react';
import styles from './Topline.module.scss';
import Icon from '../icon/icon'

const topline = () => (
	<section className={styles.Block}>
		<div className={styles.Container}>
			<div className={styles.Box}>
				<div className={styles.Contacts}>
					<span className={styles.Item}> <Icon name="clock" color="#fff" size="20"/> ПН-ВС 10:00 - 21:00</span>
					<a className={styles.Item} href="mailto:iris9009797@yandex.ru"> <Icon name="mail" color="#fff" size="20"/> ris9009797@yandex.ru</a>
					<a className={styles.Item} href="tel:+74999009797"><Icon name="call" color="#fff" size="20"/> +7 (499) 900-97-97</a> 
				</div>
				<div className={styles.Socials}>
					<a className={styles.Item} href="#s"><Icon name="ok" /></a> 
					<a className={styles.Item} href="#s"><Icon name="facebook" /></a> 
					<a className={styles.Item} href="#s"><Icon name="vk" /></a> 
				</div>
			</div>
			<div className={styles.ArrowBox}>
			</div>			
		</div> 
  </section>
)

export default topline