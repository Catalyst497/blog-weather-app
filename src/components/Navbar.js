import Li from './Li';

export default function Navbar() {
	return (
		<nav className="p-2 mx-auto w-[90%] bg-black rounded-full md:rounded-2xl">
			<ul className="flex justify-between gap-[2rem] max-w-[70%] mx-auto">
				<Li url="" cont="home" />
				<Li url="fabrication" cont="fabrication" />
				<Li url="utilisation" cont="utilisation " />
				<Li url="solution" cont="solution" />
			</ul>
		</nav>
	);
}
