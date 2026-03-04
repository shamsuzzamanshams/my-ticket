import React from 'react';
import vector1 from '../../assets/vector1.png';

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
	return (
		<div className='flex max-w-[1200px] mx-auto gap-3 mt-16'>

			{/* In Progress */}
			<div
				className="hero max-w-[708px] mx-auto bg-gradient-to-br from-[#E8F1FF] to-[#F7FAFF] rounded-xl"
				style={{
					backgroundImage: `url(${vector1})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right top",
					backgroundSize: "contain"
				}}
			>
				<div className="hero-overlay bg-transparent"></div>

				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-2xl">In-Progress</h1>
						<h1 className="mb-5 text-5xl font-bold">{inProgressCount}</h1>
					</div>
				</div>
			</div>

			{/* Resolved */}
			<div
				className="hero max-w-[708px] mx-auto bg-gradient-to-br from-[#E8F1FF] to-[#F7FAFF] rounded-xl"
				style={{
					backgroundImage: `url(${vector1})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right top",
					backgroundSize: "contain"
				}}
			>
				<div className="hero-overlay bg-transparent"></div>

				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-2xl">Resolved</h1>
						<h1 className="mb-5 text-5xl font-bold">{resolvedCount}</h1>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Banner;