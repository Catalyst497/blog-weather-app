import { FaBars } from 'react-icons/fa';
import Li from './Li';

const MobileNav = ({navToggle, navOpen}) => {
	console.log(navOpen);
	return (
		<div
			className={` relative grid place-items-center text-white w-[3rem] h-[3rem] rounded-full bg-black `}
		>
			<span className="text-[1.5rem]" onClick={navToggle}>
				<FaBars />
			</span>
			{navOpen && (
				<ul
					className={` top-[4rem] right-2 transition-opacity absolute bg-black text-white p-4 rounded-[0.5rem] ${
						navOpen ? 'opacity-1' : 'opacity-0'
					}`}
				>
					<Li url="" active={true} className="" cont="Home" />
					<hr />
					<Li url="fabrication" className="" cont="Fabrication" />
					<hr />
					<Li url="utilisation" className="" cont="Utilisation" />
					<hr />
					<Li url="solution" className="" cont="solution" />
				</ul>
			)}
		</div>
	);
};

export default MobileNav;
