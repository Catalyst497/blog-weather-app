import React from 'react';
import MobileNav from './MobileNav';

const Header = ({ isDesktop, navToggle, navOpen }) => {
	return (
		<header
			className={`flex h-[50vh] bg-header bg-cover font-barlow-condensed font-bold ${
				isDesktop ? 'text-[5rem]' : ' justify-between px-4 items-start pt-8'
			} ${isDesktop && 'pt-10 pl-20'}`}
		>
			<h1 className={`${!isDesktop && 'text-[2rem]'}`}>
				Weather Blog App{' '}
				<p className="text-[1rem] font-regular font-barlow max-w-[70%]">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
					recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					A, non!
				</p>
			</h1>
			{!isDesktop && <MobileNav navOpen={navOpen} navToggle={navToggle} />}
		</header>
	);
};

export default Header;
