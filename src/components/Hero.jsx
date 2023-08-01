import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Hero(){
	return(
		<div className="flex flex-col h-screen items-center justify-center text-white relative">
			<h1 className="text-5xl font-bold mb-2 drop-shadow-lg"><span className="text-7xl">R</span>angga Firmansyah</h1>
			<h2 className="text-2xl font-bold text-[#FCC642]">Frontend Developer</h2>
			<div className="flex gap-4 mt-4">
				<a href="">
					<BsLinkedin size="32"/>
				</a>
				<a href="">
					<BsGithub size="32"/>
				</a>
			</div>
			<div className="absolute bottom-[17%]">
				<a href="" className="flex items-center justify-center bg-gradient-to-br from-[#6bd0ff] to-sky-500 w-56 py-4 text-[18px] text-[#ffffff] rounded-md font-bold block">
					<span className="drop-shadow">Contact Me</span>
				</a>
			</div>
		</div>
	)
}
