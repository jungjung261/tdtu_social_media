import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ title, to, icon }) {
	return (
		<NavLink className={cx('menu-item')} to={to}>
			<div className={cx('icon')}>{icon}</div>
			<span className={cx('title')}>{title}</span>
		</NavLink>
	);
}

Menu.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
};
export default Menu;
