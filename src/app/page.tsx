"use client";

import Typewriter from "typewriter-effect";
/* FROM COMPONENTS */
import { Separator } from "@/components/ui/separator";
import { ToggleTheme } from "@/components/lightwind-shadcn/toggleTheme";
import { ColourfulText } from "@/components/lightwind-shadcn/ColourfulText";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Stacks from "@/components/ui/stack";

/* FROM LIBS */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

export default function Home() {
	const data = {
		name: "Animate UI",
		username: "animate_ui",
		image:
			"https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg",
		bio: "A fully animated, open-source component distribution built with React, TypeScript, Tailwind CSS, and Motion.",
		stats: { following: 200, followers: 2900, posts: 120 },
		socialLinks: {
			linkedin: "https://linkedin.com",
			github: "https://github.com",
			twitter: "https://twitter.com",
		},
	};
	return (
		<div
			className="min-h-screen  flex  justify-center relative overflow-auto"
			id="main-container"
		>
			<div className="w-full z-0 top-1/2 fixed" id="colorBarsContainer">
				<div className="bg-chart-2/80 w-full h-12" id="color1"></div>
				<div className="bg-chart-3/80 w-full h-12" id="color2"></div>
				<div className="bg-chart-4/80 w-full h-12" id="color3"></div>
				<div className="bg-chart-1/80 w-full h-12" id="color4"></div>
			</div>

			<div
				className={`bg-background shadow-muted-foreground text-foreground flex h-auto  w-7xl mt-20 rounded-4xl border border-gray-700/20 pt-5 pb-5 shadow-2xl z-10`}
				id="container"
			>
				<div className="flex  flex-col  w-30 shrink-0" id="aside">
					<header className="flex flex-col h-full p-2.5">
						<div className="flex h-25 w-full items-center justify-center" id="logo">
							<img
								className="w-15 invert transition-all duration-300 dark:invert-0"
								src="/images/logo.png"
								alt=""
							/>
						</div>

						<nav className="flex h-full w-full mt-72 justify-center" id="nav">
							<ul
								className="flex flex-col items-center justify-start gap-10"
								id="navList"
							>
								<li>
									<a
										className="inline-block transition-transform duration-300 hover:scale-125"
										href="https://github.com/SirSouza"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaGithubSquare size={35} className="hover:text-chart-2" />
									</a>
								</li>
								<li>
									<a
										className="inline-block transition-transform duration-300 hover:scale-125"
										href="https://www.linkedin.com/in/devanorak/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin size={35} className="hover:text-chart-5" />
									</a>
								</li>
								<li>
									<a
										className="inline-block transition-transform duration-300 hover:scale-125"
										href="https://x.com/devanorak"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaTwitterSquare size={35} className="hover:text-chart-1" />
									</a>
								</li>
							</ul>
						</nav>
					</header>

					<footer className="mt-auto p-2" id="footer">
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
											Potfólio – Criado por Ewerton de Souza - AKA Anorak.
										</p>
										<div className="flex items-center pt-2">
											<span className="text-foreground text-xs italic">
												May the force be with you.
											</span>
										</div>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>
					</footer>
				</div>

				<main className="flex flex-1" id="main">
					<Separator
						orientation="vertical"
						className="bg-sidebar-accent-foreground/30"
					/>

					<div className="w-full p-2.5  flex flex-col" id="container-main">
						<div
							className="flex h-8 w-full items-center p-2  pb-3.5 border-b border-accent-foreground/30 "
							id="containerTopBar"
						>
							<div
								className="flex min-h-9 w-full items-center justify-between mr-2.5"
								id="topBar"
							>
								<div className="text-xl " id="me">
									<div>
										<Typewriter
											onInit={(typewriter) => {
												typewriter.typeString("Hello World!").start();
											}}
										/>
									</div>
								</div>

								<nav id="navTopBar">
									<ul className="flex gap-6 px-2" id="#navListToBar">
										<li>
											<a
												className={`hover:text-chart-1 flex items-center gap-1 
                      	transition-transform duration-300 hover:scale-110 hover:font-bold`}
												href="#about"
											>
												<FaUser />
												Sobre Mim
											</a>
										</li>
										<li>
											<a
												className={`hover:text-chart-5 flex items-center gap-1 
                      						transition-transform duration-300 hover:scale-110 hover:font-bold`}
												href="#portfolio"
											>
												<ImBriefcase /> Portfólio
											</a>
										</li>
										<li>
											<a
												className={`hover:text-chart-2 flex items-center gap-1 
                      						transition-transform duration-300 hover:scale-110 hover:font-bold`}
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
								className="bg-sidebar-accent-foreground/30 mr-2.5"
							/>
							<ToggleTheme />
						</div>
						<div className="flex-1" id="content-container">
							<section className="mt-8 h-96 p-3.5" id="hero">
								<div className="text-8xl" id="me">
									<div>
										<ScrollReveal
											enableBlur={true}
											size="4xl"
											align="left"
											baseRotation={0}
											textClassName="!leading-none !m-0 !p-0"
										>
											Anorak
										</ScrollReveal>
									</div>
								</div>
								<div>
									<span className="text-foreground">
										<ScrollReveal
											enableBlur={true}
											size="sm"
											align="left"
											baseRotation={0}
										>
											Desenvolvedor Web
										</ScrollReveal>
									</span>
								</div>
								<div className="flex items-center justify-center p-8 mt-10">
									<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
										<h3 className="text-5xl font-bold text-center">
											Programar é dar forma ao invisível,{" "}
											<ColourfulText text="criando" className="inline" /> sistemas que
											conectam, resolvem e{" "}
											<ColourfulText text="inovam..." className="inline" />
										</h3>
									</ScrollReveal>
								</div>
							</section>

							<section className="p-3.5 mt-14 mb-20" id="about">
								<div className="p-5">
									<ScrollReveal
										enableBlur={true}
										size="sm"
										align="center"
										baseRotation={0}
									>
										Olá, eu sou o Ewerton, mas pode me chamar de Anorak. Sou um
										desenvolvedor em constante evolução, apaixonado por criar soluções
										digitais que unem tecnologia, design e usabilidade. Vejo cada projeto
										como uma oportunidade de transformar ideias em sistemas funcionais e
										eficientes, sempre buscando inovação e qualidade em cada linha de
										código. Meu objetivo é ir além de simplesmente escrever programas:
										quero construir experiências digitais que realmente façam a diferença.
									</ScrollReveal>
								</div>
							</section>

							<section
								className="h-auto flex justify-center items-center flex-col w-full"
								id="stack"
							>
								<h1>Tecnologias que uso</h1>

								<div>
									<Stacks />
								</div>
							</section>

							<section className="" id="porfolio">
								Portfolio
							</section>

							<section className="" id="contato">
								Contato
							</section>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
