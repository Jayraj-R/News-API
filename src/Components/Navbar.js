import React from 'react';
import { ReactComponent as MenuIcon } from '../assets/icons/menu-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search-icon.svg';

const Navbar = () => {
	return (
		<div
			id='navbar-container'
			className='w-screen h-fit bg-blue-500 px-5 py-2 flex justify-between items-center'
		>
			<span className=''>
				<MenuIcon />
			</span>
			<span className='font-robotoSerif text-sm'>Zintlr News</span>
			<span className=''>
				<SearchIcon />
			</span>
		</div>
	);
};

export default Navbar;
