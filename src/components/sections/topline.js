import React, {Component} from 'react';
import classnames from 'classnames';
import styles from './Topline.module.scss';
import Icon from '../icon/icon'

class Topline extends Component {
	state = {
		showContacts: false
	}
	togglehandler = (e) => {
		e.preventDefault();
		const doesShowContacts = this.state.showContacts;
		this.setState({showContacts : !doesShowContacts})
	};
	render(){
		return(
			<section className={styles.Block}>
				<div className={styles.Container}>
					{
						this.state.showContacts || window.innerWidth > 992 ? 
					<div className={styles.Box}>
						<div className={styles.Contacts}>
							<span className={styles.Item}> <Icon name="clock" size="20" className={styles.ItemIcon}/> ПН-ВС 10:00 - 21:00</span>
							<a className={classnames(styles.Item,styles.Item_hovarable)} href="mailto:iris9009797@yandex.ru"> <Icon name="mail" className={styles.ItemIcon} size="20"/> ris9009797@yandex.ru</a>
							<a className={classnames(styles.Item,styles.Item_hovarable)} href="tel:+74999009797"><Icon name="call" className={styles.ItemIcon} size="20"/> +7 (499) 900-97-97</a> 
						</div>
						<div className={styles.Socials}>
							<a className={classnames(styles.Item,styles.Item_hovarable)} href="#s"><Icon name="ok" /></a> 
							<a className={classnames(styles.Item,styles.Item_hovarable)} href="#s"><Icon name="facebook" /></a> 
							<a className={classnames(styles.Item,styles.Item_hovarable)} href="#s"><Icon name="vk" /></a> 
						</div>
					</div> : null
					}

					<div className={styles.Arrow} onClick={this.togglehandler}>
						<Icon name="arrowDown" size="18" />
					</div>			
				</div> 
		</section>
		)
	}
}
export default Topline