import React, { Component } from 'react';
import style from './Prices.module.scss';

export default class Prices extends Component {
	state = {
		lists: [
			{
				text: 'Визаж и макияж',
				filter: 'makeUp',
				href: '#',
				items: [
					{
						item: 'Макияж',
						minPrice: '1 500',
						subItems: [
							{
								subItem: 'Вечерний макияж',
								price: '2 000'
							},
							{
								subItem: 'Дневной макияж',
								price: '1 500'
							}
						]
					},
					{
						item: 'Уход за бровями и ресницами',
						minPrice: '390',
						subItems: [
							{
								subItem: 'Биозавивка ресниц',
								price: '1 290'
							},
							{
								subItem: 'Коррекция и форма бровей',
								price: '390'
							},
							{
								subItem: 'Коррекция ресниц',
								price: '1 350'
							},
							{
								subItem: 'Ламинирование ресниц',
								price: '2 500'
							},
							{
								subItem: 'Наращивание ресниц',
								price: '1 850'
							},
							{
								subItem: 'Окрашивание бровей',
								price: '390'
							},
							{
								subItem: 'Окрашивание ресниц',
								price: '390'
							},
							{
								subItem: 'Снятие ресниц',
								price: '690'
							}
						]
					}
				]
			},
			{
				text: 'Парикмахерские услуги',
				filter: 'hairdressing',
				href: '#',
				items: [
					{
						item: 'Стрижка',
						subItems: [
							{
								subItem: 'Женская стрижка',
								price: '550-900'
							},
							{
								subItem: 'Мужская стрижка (модельная)',
								price: '500'
							},
							{
								subItem: 'Детская стрижка(до 7 лет)',
								price: '400'
							}
						]
					},
					{
						item: 'Укладка волос',
						subItems: [
							{
								subItem: 'Вечерняя прическа',
								price: '450-1 000'
							}
						]
					},
					{
						item: 'Окрашивание волос',
						subItems: [
							{
								subItem: 'Окрашивание в один тон',
								price: 'от 1 150'
							},
							{
								subItem: 'Химическая заливка',
								price: 'от 1 300'
							},
							{
								subItem: 'Блондирование',
								price: 'от 1 000'
							},
							{
								subItem: 'Тонирование',
								price: 'от 1 050'
							}
						]
					},
					{
						item: 'Уход за волосами',
						subItems: [
							{
								subItem: 'Кератиновый уход',
								price: 'от 1 550'
							},
							{
								subItem: 'Биоламинирование волос',
								price: 'от 750'
							}
						]
					}
				]
			},
			{
				text: 'Ногтевой сервис',
				filter: 'nail',
				href: '#',
				items: [
					{
						item: 'Маникюр',
						subItems: [
							{
								subItem: 'Маникюр классический',
								price: '500'
							},
							{
								subItem: 'Снятие гель-лака ',
								price: '500'
							},
							{
								subItem: 'Eвропейский маникюр',
								price: '600'
							},
							{
								subItem: 'Аппаратный маникюр',
								price: '600'
							},
							{
								subItem: 'Комбинированный маникюр',
								price: '600'
							},
							{
								subItem: 'Мужской маникюр',
								price: '890'
							}
						]
					},
					{
						item: 'Педикюр',
						subItems: [
							{
								subItem: 'Педикюр классический',
								price: '600'
							},
							{
								subItem: 'Педикюр аппаратный',
								price: '1 100'
							},
							{
								subItem: 'Педикюр комбинированный',
								price: '1 300'
							},
							{
								subItem: 'Мужской педикюр',
								price: '1 300'
							},
							{
								subItem: 'Покрытие лак',
								price: '150-200'
							}
						]
					},
					{
						item: 'Покрытия',
						subItems: [
							{
								subItem: 'Покрытие лак френч',
								price: '250'
							},
							{
								subItem: 'Покрытие гель-лак',
								price: '800-1 500'
							},
							{
								subItem: 'Покрытие гель-лак френч',
								price: '1 500'
							},
							{
								subItem: 'Лечебное покрытие (IBX)',
								price: '500'
							}
						]
					},
					{
						item: 'Моделирование и коррекция',
						subItems: [
							{
								subItem: 'Страза 1 шт',
								price: '30'
							}
						]
					}
				]
			},
			{
				text: 'Косметология',
				filter: 'cosmetology',
				href: '#',
				items: [
					{
						item: 'Уход',
						subItems: [
							{
								subItem: 'Парафинотерапия рук',
								price: '300'
							},
							{
								subItem: 'Парафинотерапия стоп',
								price: '400'
							},
							{
								subItem: 'Суставный массаж рук',
								price: '300'
							},
							{
								subItem: 'Массаж стоп',
								price: '200'
							},
							{
								subItem: 'Скраб рук',
								price: '400'
							}
						]
					},
					{
						item: 'Уход за бровями и ресницами',
						subItems: [
							{
								subItem: 'Окрашивание бровей',
								price: '300'
							},
							{
								subItem: 'Коррекция и форма бровей',
								price: '200-300'
							},
							{
								subItem: 'Окрашивание ресниц',
								price: '300'
							}
						]
					},
					{
						item: 'Депиляция',
						subItems: [
							{
								subItem: 'Верхняя губа',
								price: '200'
							},
							{
								subItem: 'Подбородок',
								price: '200'
							},
							{
								subItem: 'Подмышечные впадины',
								price: '500'
							},
							{
								subItem: 'Голени',
								price: '700'
							},
							{
								subItem: 'Ноги полностью',
								price: '1 400'
							},
							{
								subItem: 'Руки полностью',
								price: '1 200'
							},
							{
								subItem: 'Бикини',
								price: '1 100'
							},
							{
								subItem: 'Глубокое бикини',
								price: '1 500'
							}
						]
					}
				]
			},
			{
				text: 'Массаж',
				filter: 'massage',
				href: '#',
				items: [
					{
						item: 'Депиляция',
						subItems: [
							{
								subItem: 'Бикини',
								price: '890'
							}
						]
					}
				]
			},
			{
				text: 'Солярий',
				filter: 'solarium',
				href: '#',
				items: [
					{
						item: 'Депиляция',
						subItems: [
							{
								subItem: 'Бикини',
								price: '890'
							}
						]
					}
				]
			}
		],
		filterdList: 'makeUp'
	};
	priceListHandler = e => {
		let targetItem = e.target;
		let targetItemFilterData = targetItem.getAttribute('data-filter');
		this.setState({ filterdList: targetItemFilterData });
	};
	render() {
		const pills = this.state.lists.map(item => (
			<button
				className={style.Pill}
				data-filter={item.filter}
				key={item.filter}
				type="button"
				onClick={this.priceListHandler}
			>
				{' '}
				{item.text}
			</button>
		));
		const item = this.state.lists.find(item => item.filter === this.state.filterdList);
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
									<div className={style.ItemCost}>
										{' '}
										{`${subitem.price} руб.`}{' '}
									</div>
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
