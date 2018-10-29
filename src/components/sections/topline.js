import React from 'react';
import styles from './Topline.module.scss';

const topline = () => (
	<section className={styles.Block}>
		<div className={styles.Container}>
			<div className={styles.Box}>
				<div className={styles.Contacts}>
					<span className={styles.Item}>ПН-ВС 10:00 - 21:00</span>
					<a className={styles.Item} href="mailto:iris9009797@yandex.ru">iris9009797@yandex.ru</a>
					<a className={styles.Item} href="tel:+74999009797">+7 (499) 900-97-97</a> 
				</div>
				<div className={styles.Socials}>
					<a className={styles.Item} href="#s">a</a> 
					<a className={styles.Item} href="#s">s</a> 
				</div>
			</div>
			<div className={styles.ArrowBox}>
			</div>			
		</div> 
  </section>
)

export default topline