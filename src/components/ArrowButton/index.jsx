import React from 'react';
import styles from './styles.module.scss';
import Icon from '../Icon';

const ArrowButton = props => {
	const isLeft = props.left ? 'Left' : null;
	const isRight = props.right ? 'Right' : null;
	return (
		<>
			<button
				className={[styles.Arrow, styles[isLeft], styles[isRight]].join(' ')}
				onClick={props.onClick}
			>
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
