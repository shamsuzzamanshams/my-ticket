import React from 'react';
import vector1 from '../../assets/vector1.png';

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
	return (
		<div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-3 mt-16 px-4">

			<div
				className="w-full rounded-xl text-black  p-10"
				style={{
					backgroundImage: `linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA), url(${vector1})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right top",
					backgroundSize: "cover",
				}}
			>
				<div className="text-center">
					<h1 className="mb-3 text-2xl font-medium">In-Progress</h1>
					<h1 className="text-6xl font-bold">{inProgressCount}</h1>
				</div>
			</div>

			<div
				className="w-full rounded-xl text-black  p-10"
				style={{
					backgroundImage: `linear-gradient(to bottom right, #22C55E, #16A34A, #047857), url(${vector1})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right top",
					backgroundSize: "cover",
				}}
			>
				<div className="text-center">
					<h1 className="mb-3 text-2xl font-medium">Resolved</h1>
					<h1 className="text-6xl font-bold">{resolvedCount}</h1>
				</div>
			</div>

		</div>
	);
};

export default Banner;