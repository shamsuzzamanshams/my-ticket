import React from 'react';
import vector1 from '../../assets/vector1.png'

const Banner = () => {
	return (
		<div className='flex max-w-[1200px] mx-auto gap-3 mt-16'>
			<div
				className="hero max-w-[708px] mx-auto bg-gradient-to-br from-[#E8F1FF] to-[#F7FAFF]"
				style={{
					backgroundImage:{vector1}
						

				}}
			>
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-2xl">In-Progress</h1>
						<h1 className="mb-5 text-5xl font-bold">0</h1>
					</div>
				</div>
			</div>

			<div
				className="hero max-w-[708px] mx-auto"
				style={{
					
					backgroundImage:{vector1}
						

				}}
			>
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-2xl">Resolved</h1>
						<h1 className="mb-5 text-5xl font-bold">0</h1>

					</div>
				</div>
			</div>
		</div>


	);
};

export default Banner;