export default function Navbar() {
	return (
		<div id="logo" className="fixed top-0 left-0 right-0 flex justify-between h-24 items-center max-w-[1240px] mx-auto px-4 text-white z-50">
			<h1 className="w-full text-3xl font-bold text-[#FCC642]">RF</h1>
			<ul className="flex">
				<li><a href="" className="opacity-80 hover:opacity-100 hover:border-b-2 py-1 mr-4 border-[#FCC642]">About</a></li>
				<li><a href="" className="opacity-80 hover:opacity-100 hover:border-b-2 py-1 border-[#FCC642]">Project</a></li>
			</ul>
		</div>
	);
}
