import React from 'react';
import { ReactComponent as ExploreIcon } from '../assets/icons/explore-icon.svg';

const ExploreBar = () => {
	return (
		<div className='bg-pink text-white font-robotoFlex px-5 py-2 rounded-full flex gap-3 items-center fixed bottom-5'>
			<ExploreIcon />
			Explore
		</div>
	);
};

export default ExploreBar;
