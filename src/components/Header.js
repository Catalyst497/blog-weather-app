import React from 'react';
import MobileNav from './MobileNav';

const Header = ({ isDesktop, navToggle, navOpen }) => {
	return (
		<header
			className={`flex h-[50vh] bg-header bg-cover font-barlow-condensed font-bold ${
				isDesktop ? 'text-[5rem]' : ' justify-between px-4 items-center'
			} ${isDesktop && 'pt-10 pl-20'}`}
		>
			<h1 className={`${!isDesktop && "text-[2.5rem]"}`}>Weather Blog App</h1>
			{!isDesktop && <MobileNav navOpen={navOpen} navToggle={navToggle} />}
		</header>
	);
};

export default Header;
