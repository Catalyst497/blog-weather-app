import Li from './Li';
import { FaSearch } from 'react-icons/fa';
export default function Navbar() {
	FaSearch ? console.log(FaSearch) : console.log(false);
	return (
		<nav className="flex p-2 mx-auto w-[90%] bg-black rounded-full md:rounded-2xl">
			<div className="flex items-center gap-[1rem] bg-white rounded-[0.5rem] border-gray-100">
				<div className="basis-8 text-center text-gray-500 text-[1rem] px-2 ">
					<FaSearch />
				</div>
				<input
					type="text"
					placeholder="Search"
					className="bg-transparent border-none placeholer:text-gray-500"
				/>
			</div>
			<ul className="flex justify-end gap-[2rem] mx-auto">
				<Li url="" cont="home" />
				<Li url="fabrication" cont="fabrication" />
				<Li url="utilisation" cont="utilisation " />
				<Li url="solution" cont="solution" />
			</ul>
		</nav>
	);
}
