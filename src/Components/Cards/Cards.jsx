import React from 'react';
import calander from '../../assets/ri_calendar_line.png'

const Cards = ({ allCard }) => {
	return (


		<div className='mt-4'>
			<div className="card w-120 bg-base-100 card-md shadow-sm">
				<div className="card-body">
					<div className='flex justify-between items-center'>
						<h2 className="card-title">{allCard.title}</h2>
						<button className="btn rounded-2xl">{allCard.status}</button>
					</div>

					<p className='text-left'>{allCard.description}</p>
					<div className="justify-end card-actions text-left">
						<p>{allCard.priority}</p>
						<p>John Smith</p>
						<div className='flex'>
							<img src={calander} alt="" srcset="" /><p>{allCard.createdAt}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Cards;