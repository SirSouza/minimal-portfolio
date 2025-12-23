import Image from "next/image";
/* FROM COMPONENTS */
import { Separator } from "@/components/ui/separator";
import { ToggleTheme } from "@/components/created/toggleTheme";
import { WritingText } from "@/components/created/WritingText";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

/* FROM LIBS */
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";



export default function Home() {
	return (
		<div
			className="bg-background w-7xl h-screen rounded-4xl pt-5 pb-5 shadow-2xl shadow-gray-950/80 
      text-foreground grid grid-cols-[1fr_6fr] grid-rows-[1fr_auto] border border-gray-700/20 "
			id="container"
		>
			<header className=" p-2.5 flex flex-col  gap-20">
				<div className="w-full h-25 flex items-center justify-center" id="logo">
					<img
						className="w-10 dark:invert-0 invert transition-all duration-300"
						src="/images/logo.png"
						alt=""
					/>
				</div>

				<nav className="w-full h-full flex items-center justify-center" id="nav">
					<ul
						className="flex flex-col gap-10 justify-center items-center"
						id="navList"
					>
						<li>
							<a
								className="inline-block transition-transform duration-300 hover:scale-125"
								href=""
							>
								<FaGithubSquare size={35} />
							</a>
						</li>
						<li>
							<a
								className="inline-block transition-transform duration-300 hover:scale-125"
								href=""
							>
								<FaLinkedin size={35} />
							</a>
						</li>
						<li>
							<a
								className="inline-block transition-transform duration-300 hover:scale-125"
								href=""
							>
								<MdEmail size={35} />
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="00 row-span-2 overflow-y-auto flex" id="main">
				<Separator orientation="vertical" className="bg-gray-600/40" />

				<div className="p-2.5 w-full" id="container-main">

					<section className=" p-2 w-full h-8 flex items-center" id="hero">
						<div className="flex w-full items-center justify-between min-h-9" id="topBar">
						<div className="text-2xl font-black" id="me">DevAnorak</div>

							<nav id="navTopBar">
								<ul className="flex gap-6 px-2" id="#navListToBar" >
									<li>
										<a className="hover:text-chart-5 hover:font-bold flex
                    items-center gap-1 transition-transform duration-300 hover:scale-110"
                    href="#about">
                      <FaUser/>Sobre Mim</a>
									</li>
									<li>
										<a className="hover:text-chart-5 hover:font-bold flex
                    items-center gap-1 transition-transform duration-300 hover:scale-110" href="#portfolio"><ImBriefcase/> Portfólio</a>
									</li>
									<li>
										<a className="hover:text-chart-5 hover:font-bold flex
                    items-center gap-1 transition-transform duration-300 hover:scale-110" href="#contato"><MdEmail/>Contato</a>
									</li>
								</ul>
							</nav>
						</div>
              <Separator orientation="vertical" className="bg-gray-600/40" />
						<ToggleTheme />
					</section>

					<section className="bg-amber-500" id="about">
						About
					</section>

					<section className="bg-amber-600" id="porfolio">
						Portfolio
					</section>

					<section className="bg-amber-700" id="contato">
						Contato
					</section>
				</div>
			</main>

			<footer className="h-40 p-5" id="footer">
				<HoverCard>
					<HoverCardTrigger asChild>
						<Button variant="link" className="text-foreground">
							@anorak
						</Button>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex justify-between gap-4">
							<div className="space-y-1">
								<h4 className="text-sm font-semibold ">@anorak</h4>
								<p className="text-sm ">
									Dev Anorak – created and maintained by @anorakdev.
								</p>
								<div className="flex items-center pt-2">
									<span className="text-xs text-muted-foreground">
										Joined December 2021
									</span>
								</div>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</footer>
		</div>
	);
}
