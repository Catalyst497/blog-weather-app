import { Link } from 'react-router-dom';

export default function Li({ className, cont, url }) {
	const active = 'text-amber-700';
	const updateActiveClass = (e) => {
		e.target.parentNode.childNodes.forEach((list) => {
			list.classList.remove(active);
		});
		setTimeout(() => {
			e.target.classList.add(active);
		}, 50);
	};
	return (
		<Link
			to={`/${url}`}
			onClick={updateActiveClass}
			className={`${
				window.location.pathname == '/' && cont == 'home' && active
			} ${window.location.pathname == `/${cont}` && active} ${
				className && className
			} uppercase hover:text-amber-700 transition-colors duration-500`}
		>
			{cont}
		</Link>
	);
}
