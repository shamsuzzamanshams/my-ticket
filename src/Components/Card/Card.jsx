import React, { use, useState } from 'react';
import Cards from '../Cards/Cards';
import Banner from '../Banner/Banner';


const Card = ({ cardDatapromise }) => {



	const card_data = use(cardDatapromise);
	const [selectedTask, setSelectedTask] = useState([]);
	const [resolve, setResolve] = useState([]);
	const handleTask = (card) => {
		setSelectedTask([...selectedTask, card]);
	}

	const handleResolve = (Task) => {
		const remainingTask = selectedTask.filter(st => st.id !== Task.id)
		setSelectedTask(remainingTask);
		setResolve([...resolve, Task]);
	}



	return (








		<div>
			<Banner inProgressCount={selectedTask.length}
				resolvedCount={resolve.length}></Banner>
			<div className='flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between mt-8 gap-0.5  px-4'>

				<div>
					<h1 className='text-2xl font-bold text-gray-500'>Customer Tickets</h1>

					<div className='grid grid-cols-1 md:grid-cols-2'>

						{
							card_data.map(allCard =>
								<Cards card_data={card_data}
									allCard={allCard}
									handleTask={handleTask}
									key={allCard.id}
								></Cards>
							)
						}
					</div>
				</div>
				<div>
					<h1 className='text-2xl font-bold text-gray-500'>Task Status</h1>
					{
						selectedTask.length === 0 ? (
							<p>Select a ticket to add to Task Status</p>
						) : (
							selectedTask.map((task) => (
								<div key={task.id} className="card w-80 md:w-90 mt-4 bg-base-100 card-xs shadow-sm">
									<div className="card-body">
										<h2 className='font-semibold text-2xl text-left'>{task.title}</h2>

										<div className="btn bg-green-500 mt-2">
											<button onClick={() => handleResolve(task)}>Complete</button>
										</div>
									</div>
								</div>
							))
						)
					}
					<div className='mt-8'>
						<h2 className='text-2xl font-bold text-gray-500'>Resolved Task</h2>

						{
							resolve.length === 0 ?
								<p>No resolved tasks yet.</p>
								:
								resolve.map((task) => (
									
									<div key={task.id} className='card w-80 md:w-90 mt-4 bg-blue-50 card-xs shadow-sm'>
										<div className="card-body">
											<h2 className='font-semibold text-2xl text-left' >{task.title}</h2>
										</div>
									</div>

								))
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;