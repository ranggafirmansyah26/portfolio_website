import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Hero(){
	return(
		<div className="flex flex-col h-screen items-center justify-center text-white">
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
		</div>
	)
}