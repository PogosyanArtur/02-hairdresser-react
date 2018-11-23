import React from 'react';
import styles from './ArrowButton.module.scss';
import Icon from '../../../icon/icon';

const ArrowButton = props => {
	return (
		<>
			<button className={styles.Arrow} onClick={props.onClick}>
				<Icon
					name="arrow"
					rotate={props.ArrowButtonRotate}
					size="10"
					style={props.ArrowButtonStyle}
				/>
			</button>
		</>
	);
};

export default ArrowButton;
