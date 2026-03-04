import React, { useState } from 'react';
import calander from '../../assets/ri_calendar_line.png'

const Cards = ({ allCard, handleTask }) => {
	const [isSelected, setIsSelected] = useState(false);
	const handleSelect = () => {
		setIsSelected(true);



		
	}
	return (


		<div className='mt-4 mr-4'>
			<div className="card w-80 md:w-100 h-50 bg-base-100 card-md shadow-sm">
				<div className="card-body">
					<div className='flex justify-between items-center'>
						<h2 className="card-title">{allCard.title}</h2>
						<button onClick={() => { handleSelect(allCard), handleTask(allCard) }} className={`btn rounded-2xl ${isSelected ? "bg-yellow-400" : "bg-green-400"}`}>
							{isSelected ? "In-Progress" : "Open"}</button>
					</div>

					<p className='text-left'>{allCard.description}</p>
					<div className="justify-end card-actions text-left">
						<p>{allCard.priority}</p>
						<p>John Smith</p>
						<div className='flex'>
							<img src={calander} alt="" /><p>{allCard.createdAt}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Cards;