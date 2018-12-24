import React, { Component } from 'react';
import style from './styles.module.scss';
import lists from './PriceData';

export default class Prices extends Component {
	state = {
		filterdList: 'makeUp'
	};
	priceListHandler = e => {
		let targetItem = e.target;
		let targetItemFilterData = targetItem.getAttribute('data-filter');
		this.setState({ filterdList: targetItemFilterData });
	};
	render() {
		const pills = lists.map(item => (
			<button
				className={style.Pill}
				data-filter={item.filter}
				key={item.filter}
				type="button"
				onClick={this.priceListHandler}
			>
				{item.text}
			</button>
		));
		const item = lists.find(item => item.filter === this.state.filterdList);
		const listItems = item.items.map((item, index) => {
			return (
				<div className={style.Lists} key={index}>
					<h4 className={style.ListTitle} key={index}>
						{item.item}
					</h4>
					<ul className={style.List}>
						{item.subItems.map((subitem, index) => {
							return (
								<li className={style.Item} key={index}>
									<div className={style.ItemText}>{subitem.subItem}</div>
									<div className={style.ItemDivider} />
									<div className={style.ItemCost}>{`${subitem.price} руб.`}</div>
								</li>
							);
						})}
					</ul>
				</div>
			);
		});
		return (
			<section className={style.Box}>
				<div className={style.Pills}>{pills}</div>
				<div className={style.Content}>{listItems}</div>
			</section>
		);
	}
}
