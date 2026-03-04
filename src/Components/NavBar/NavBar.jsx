import React from 'react';

const NavBar = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">CS — Ticket System</a>
			</div>
			<div className="flex gap-5">
				<button>Home</button>
				<button>FAQ</button>
				<button>Changelog</button>
				<button>Blog</button>
				<button>Download</button>
				<button>Contact</button>
				<button className='bg-[linear-gradient(152deg,_#000000_90%,_#FFFFFF_100%,_#130B2D_100%,#E9E9E9_100%)] p-2 rounded-xl'>+ New Ticket</button>
			</div>
		</div>
	);
};

export default NavBar;