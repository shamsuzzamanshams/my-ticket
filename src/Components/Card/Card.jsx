import React, { use } from 'react';
import Cards from '../Cards/Cards';


const Card = ({ cardDatapromise }) => {

	const card_data = use(cardDatapromise);
	console.log(card_data);


	return (






		<div className='flex max-w-[1200px] mx-auto justify-between mt-8'>

			<div>
				<h3>Customer Tickets</h3>

				<div className='grid grid-cols-1 md:grid-cols-2'>

					{
						card_data.map(allCard =>
							<button>
								<Cards cardDatapromise={cardDatapromise}
									allCard={allCard}
								></Cards>
							</button>
						)
					}
				</div>
			</div>
			<div>
				<h1>Task Status</h1>
			</div>
		</div>
	);
};

export default Card;