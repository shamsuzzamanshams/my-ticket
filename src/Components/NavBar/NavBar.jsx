import React from 'react';

const NavBar = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm w-full md:max-w-[1200px] mx-auto px-4">

			{/* Logo */}
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">CS — Ticket System</a>
			</div>

			{/* Desktop Menu */}
			<div className="hidden md:flex gap-5 items-center">
				<button>Home</button>
				<button>FAQ</button>
				<button>Changelog</button>
				<button>Blog</button>
				<button>Download</button>
				<button>Contact</button>
				<button className="p-2 rounded-xl text-white bg-[linear-gradient(to_bottom_right,#6D28D9,#7C3AED,#9333EA)]">
					+ New Ticket
				</button>


			</div>

			{/* Mobile 3-dot Menu */}
			<div className="md:hidden dropdown dropdown-end">
				<label tabIndex={0} className="btn btn-ghost text-xl">
					⋮
				</label>

				<ul
					tabIndex={0}
					className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
				>
					<li><button>Home</button></li>
					<li><button>FAQ</button></li>
					<li><button>Changelog</button></li>
					<li><button>Blog</button></li>
					<li><button>Download</button></li>
					<li><button>Contact</button></li>
					<button className="p-2 rounded-xl text-white bg-[linear-gradient(to_bottom_right,#6D28D9,#7C3AED,#9333EA)]">
						+ New Ticket
					</button>
				</ul>
			</div>

		</div>
	);
};

export default NavBar;