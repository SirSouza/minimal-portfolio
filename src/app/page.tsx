import Image from "next/image";
/* FROM COMPONENTS */
import { Separator } from "@/components/ui/separator";
import { ToggleTheme } from "@/components/lightwind-shadcn/toggleTheme";
import { WritingText } from "@/components/lightwind-shadcn/WritingText";
import { TextGenerateEffect } from "@/components/lightwind-shadcn/TextGenerateEffect";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

/* FROM LIBS */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { div } from "motion/react-client";

const words = `Olá, eu sou o Ewerton, mas pode me chamar de Anorak. Sou um desenvolvedor
							em constante evolução, apaixonado por criar soluções digitais que unem
							tecnologia, design e usabilidade. Vejo cada projeto como uma oportunidade
							de transformar ideias em sistemas funcionais e eficientes, sempre
							buscando inovação e qualidade em cada linha de código. Meu objetivo é ir
							além de simplesmente escrever programas: quero construir experiências
							digitais que realmente façam a diferença.`;

export default function Home() {
	return (
		<div
			className="bg-background flex items-center justify-center"
			id="main-container"
		>
			<div className="w-full z-0 absolute" id="colorBarsContainer">
				<div className="bg-chart-2 w-full h-10" id="color1"></div>
				<div className="bg-chart-3 w-full h-10" id="color2"></div>
				<div className="bg-chart-4 w-full h-10" id="color3"></div>
				<div className="bg-chart-1 w-full h-10" id="color4"></div>
			</div>

			<div
				className="bg-background shadow-muted-foreground text-foreground grid h-screen w-7xl grid-cols-[1fr_6fr] 
      			grid-rows-[1fr_auto] rounded-4xl border border-gray-700/20 pt-5 pb-5 shadow-2xl z-10"
				id="container"
			>
				<header className="flex flex-col gap-20 p-2.5">
					<div className="flex h-25 w-full items-center justify-center" id="logo">
						<img
							className="w-10 invert transition-all duration-300 dark:invert-0"
							src="/images/logo.png"
							alt=""
						/>
					</div>

					<nav className="flex h-full w-full items-center justify-center" id="nav">
						<ul
							className="flex flex-col items-center justify-center gap-10"
							id="navList"
						>
							<li>
								<a
									className="inline-block transition-transform duration-300 hover:scale-125"
									href="https://github.com/SirSouza"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithubSquare size={35} />
								</a>
							</li>
							<li>
								<a
									className="inline-block transition-transform duration-300 hover:scale-125"
									href="https://www.linkedin.com/in/devanorak/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin size={35} />
								</a>
							</li>
							<li>
								<a
									className="inline-block transition-transform duration-300 hover:scale-125"
									href="https://x.com/devanorak"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaTwitterSquare size={35} />
								</a>
							</li>
						</ul>
					</nav>
				</header>

				<main className="00 row-span-2 flex overflow-y-auto" id="main">
					<Separator
						orientation="vertical"
						className="bg-sidebar-accent-foreground/50"
					/>

					<div className="w-full p-2.5" id="container-main">
						<section
							className="flex h-8 w-full items-center p-2  pb-3.5 border-b border-accent-foreground/50 "
							id="containerTopBar"
						>
							<div
								className="flex min-h-9 w-full items-center justify-between"
								id="topBar"
							>
								<div className="text-2xl font-black" id="me">
									DevAnorak
								</div>

								<nav id="navTopBar">
									<ul className="flex gap-6 px-2" id="#navListToBar">
										<li>
											<a
												className="hover:text-chart-5 font-jetbrains flex items-center gap-1 
                      						transition-transform duration-300 hover:scale-110 hover:font-bold"
												href="#about"
											>
												<FaUser />
												Sobre Mim
											</a>
										</li>
										<li>
											<a
												className="hover:text-chart-5 font-jetbrains flex items-center gap-1 
                      						transition-transform duration-300 hover:scale-110 hover:font-bold"
												href="#portfolio"
											>
												<ImBriefcase /> Portfólio
											</a>
										</li>
										<li>
											<a
												className="hover:text-chart-5 font-jetbrains flex items-center gap-1 
                     						transition-transform duration-300 hover:scale-110 hover:font-bold"
												href="#contato"
											>
												<MdEmail />
												Contato
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<Separator
								orientation="vertical"
								className="bg-sidebar-accent-foreground/50"
							/>
							<ToggleTheme />
						</section>

						<section className="mt-8" id="hero">
							<div className="text-8xl font-black font-jetbrains" id="me">
								Anorak

								
							</div>
							<div>
								<span className="text-foreground">Dev FullStack</span>
							</div>
						</section>

						<section className="" id="about"></section>
							<div className="p-8">
									<TextGenerateEffect
										words={words}
										className="text-bae md:text-base  max-w-2xl "
										duration={0.6}
										staggerDelay={0.15}
									/>

								</div>
						<section className="" id="porfolio">
							Portfolio
						</section>

						<section className="" id="contato">
							Contato
						</section>
					</div>
				</main>

				<footer className="h-40 p-5" id="footer">
					<HoverCard>
						<HoverCardTrigger asChild>
							<Button variant="link" className="text-foreground">
								@devanorak
							</Button>
						</HoverCardTrigger>
						<HoverCardContent className="w-80">
							<div className="flex justify-between gap-4">
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">@devanorak</h4>
									<p className="text-sm">
										Dev Anorak – created and maintained by Ewerton de SirSouza
										AKA Anorak.
									</p>
									<div className="flex items-center pt-2">
										<span className="text-muted-foreground text-xs">
											Joined December 2021
										</span>
									</div>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</footer>
			</div>
		</div>
	);
}
