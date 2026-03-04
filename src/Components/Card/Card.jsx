import React, { use, useState } from 'react';
import Cards from '../Cards/Cards';


const Card = ({ cardDatapromise }) => {



	const card_data = use(cardDatapromise);
	const [selectedTask, setSelectedTask] = useState([]);
	const handleTask = (card) => {
		setSelectedTask([...selectedTask, card]);
	}



	return (






		<div className='flex max-w-[1200px] mx-auto justify-between mt-8 gap-8'>

			<div>
				<h1 className='text-2xl'>Customer Tickets</h1>

				<div className='grid grid-cols-1 md:grid-cols-2'>

					{
						card_data.map(allCard =>
							<Cards card_data={card_data}
								allCard={allCard}
								handleTask={handleTask}
							></Cards>
						)
					}
				</div>
			</div>
			<div>
				<h1 className='text-2xl'>Task Status</h1>
				{
					selectedTask.length === 0 ? (
						<p>Select a ticket to add to Task Status</p>
					) : (
						selectedTask.map((task, index) => (
							<div key={index} className="card w-[400px] bg-base-100 card-xs shadow-sm">
								<div className="card-body">
									<h2 className='font-semibold text-2xl text-left'>{task.title}</h2>

									<div className="btn bg-green-500 mt-2">
										<button className="">Complete</button>
									</div>
								</div>
							</div>
						))
					)
				}
			</div>
		</div>
	);
};

export default Card;