"use client";

/* FROM COMPONENTS */
import { Separator } from "@/components/separator";
import { ToggleTheme } from "@/components/toggleTheme";
import { ColourfulText } from "@/components/ColourfulText";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/hover-card";
import { Button } from "@/components/button";
import { PinContainer } from "@/components/PinContainer";
import { ScrollReveal } from "@/components/scroll-reveal";
import TextType from "@/components/TextType";
/* FROM ICON LIBS */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { useState } from "react";
import { Menu, X, House, Download } from "lucide-react";

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div
			className="min-h-screen md:mx-5 flex justify-center relative overflow-auto"
			id="main-container"
		>
			{/* COLOR BARS BACKGROUND */}
			<div className="w-full z-0 top-1/2 fixed" id="colorBarsContainer">
				<div className="bg-chart-2/80 w-full h-12" id="color1"></div>
				<div className="bg-chart-3/80 w-full h-12" id="color2"></div>
				<div className="bg-chart-4/80 w-full h-12" id="color3"></div>
				<div className="bg-chart-1/80 w-full h-12" id="color4"></div>
			</div>

			{/* CONTAINER BODY */}
			<div
				className={`bg-background text-foreground flex h-auto w-full max-w-7xl mt-0 lg:mt-20
        mx-2 md:mx-auto rounded-0 lg:rounded-4xl border border-gray-700/20 pt-5 pb-5 shadow-2xl z-10`}
				id="container"
			>
				{/* ================= ASIDE ================= */}
				<aside className="hidden lg:flex flex-col w-30 shrink-0" id="aside">
					<div className="flex flex-col h-full p-2.5">
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
					</div>

					<div className="mt-auto p-2" id="card-aside">
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
					</div>
				</aside>
				{/* ASIDE END */}

				{/* ================= MAIN ================= */}
				<main className="flex flex-1" id="main">
					<Separator
						orientation="vertical"
						className="bg-sidebar-accent-foreground/30 hidden lg:block"
					/>
					{/* ================= CONTAINER MAIN ================= */}
					<div className="w-full p-2.5  flex flex-col" id="container-main">
						{/* TOP BAR E NAV */}
						<header
							className="flex h-8 w-full items-center p-2  pb-3.5 border-b border-accent-foreground/30"
							id="containerTopBar"
						>
							<div
								className="flex min-h-9 w-full items-center justify-between mr-1"
								id="topBar"
							>
								<div className="text-xl " id="typingtext">
									<div>
										<TextType
											text={[
												"Olá!",
												"Seja bem vindo ao meu site",
												"Fique a vontade para explorar",
											]}
											typingSpeed={75}
											pauseDuration={1500}
											showCursor={true}
											cursorCharacter="|"
											className="text-sm sm:text-xl"
										/>
									</div>
								</div>
								{/* ================= BUTTON MENU MOBILE ================= */}
								<button
									id="hamburgerButton"
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
									className="lg:hidden text-xl px-2 z-50 relative"
									aria-label="Abrir menu"
								>
									{mobileMenuOpen ? <X /> : <Menu />}
								</button>
								{/* ====================================================== */}
								{/* ========================= NAV ======================== */}
								<nav className="hidden md:hidden lg:block " id="navTopBar">
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
								className="bg-sidebar-accent-foreground/30 mr-1"
							/>
							<ToggleTheme />
						</header>
						{/* ================= MENU MOBILE ================= */}
						<div
							id="mobileMenu"
							className={`fixed top-0 right-0 h-screen w-1/2 bg-background border-l lg:hidden
							z-40 transform transition-transform duration-300 ease-in-out border-accent-foreground/30
              ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
						>
							<nav id="mobileNav" className="h-full flex flex-col justify-start">
								<ul className="flex flex-col justify-around h-8/12 gap-6 px-6 text-sm  mt-20">
									<li>
										<a
											href="#hero"
											onClick={() => setMobileMenuOpen(false)}
											className="flex items-center gap-3"
										>
											<House /> Home
										</a>
									</li>
									<li>
										<a
											href="#about"
											onClick={() => setMobileMenuOpen(false)}
											className="flex items-center gap-3"
										>
											<FaUser /> Sobre Mim
										</a>
									</li>

									<li>
										<a
											href="#portfolio"
											onClick={() => setMobileMenuOpen(false)}
											className="flex items-center gap-3"
										>
											<ImBriefcase /> Portfólio
										</a>
									</li>

									<li>
										<a
											href="#contato"
											onClick={() => setMobileMenuOpen(false)}
											className="flex items-center gap-3"
										>
											<MdEmail /> Contato
										</a>
									</li>
								</ul>
							</nav>
						</div>
						{/* ============================================== */}

						{/* ================= CONTENT CONTAINER  ================= */}
						<div className="flex-1" id="content-container">
							{/* ================= HERO ================= */}
							<section
								className="mt-2 sm:mt-8 min-h-[20vh] sm:min-h-[20vh] p-3.5"
								id="hero"
							>
								<div className="text-5xl sm:text-6xl md:text-8xl" id="me">
									<div>
										<ScrollReveal
											enableBlur={true}
											mode="container"
											align="left"
											baseRotation={0}
											textClassName="!leading-none !m-0 !p-0 text-base"
										>
											<h1 className="text-5xl sm:text-8xl text-center font-bold sm:text-left">
												Anorak
											</h1>
										</ScrollReveal>
									</div>
								</div>
								<div className=" flex justify-center sm:justify-start" id="devTitle">
									<ScrollReveal enableBlur={true} mode="container" baseRotation={0}>
										<span className="text-foreground text-base sm:text-2xl">
											Desenvolvedor Web
										</span>
									</ScrollReveal>
								</div>
								<div
									className="flex items-center justify-center p-3 sm:p-8 mt-4 sm:mt-10"
									id="hero-messege"
								>
									<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
										<h3 className="text-xl sm:text-5xl  font-bold text-center">
											Programar é dar forma ao invisível,{" "}
											<ColourfulText text="criando" className="inline" /> sistemas que
											conectam, resolvem e{" "}
											<ColourfulText text="inovam..." className="inline" />
										</h3>
									</ScrollReveal>
								</div>
							</section>

							{/* ================= ABOUT ================= */}
							<section className="p-3.5 mt-1 mb-10 sm:mt-5 sm:mb-20" id="about">
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

							{/* ================= STACK ================= */}
							<section
								className="flex items-center flex-col w-full min-h-[20vh]"
								id="stack"
							>
								<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
									<h3 className="text-4xl font-bold text-center uppercase mb-7">
										<ColourfulText text="Hard Skills" className="inline" />
									</h3>
								</ScrollReveal>
								<div
									className="flex flex-col lg:flex-row w-full h-full gap-8"
									id="hardSkills"
								>
									<div className="flex-1 flex flex-col items-center" id="current">
										<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
											<h1 className="font-black  text-2xl mb-2">Competências Atuais</h1>
										</ScrollReveal>

										<div className="w-80">
											<Separator
												orientation="horizontal"
												className="bg-sidebar-accent-foreground/30 mb-7"
											/>
										</div>
										<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
											<div
												className="h-full w-full flex items-center justify-center flex-wrap flex-1"
												id="current-skills"
											>
												<img
													src="https://skillicons.dev/icons?i=react"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15  transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=js"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=html"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=tailwind"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=css"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=linux"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=github"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=git"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=npm"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=vercel"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
											</div>
										</ScrollReveal>
									</div>
									<div
										id="hardSkills-divider"
										className="hidden lg:block w-px bg-black/20 mx-6"
									/>
									<div className="flex-1 flex flex-col items-center" id="learning">
										<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
											<h1 className="font-black  text-2xl mb-2">Em aprendizado</h1>
										</ScrollReveal>
										<div className="w-80">
											<Separator
												orientation="horizontal"
												className="bg-sidebar-accent-foreground/30 mb-7 "
											/>
										</div>
										<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
											<div
												className="h-full w-full flex items-center justify-center flex-wrap flex-1 "
												id="learning"
											>
												<img
													src="https://skillicons.dev/icons?i=docker"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=postgres"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=python"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=rust"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=bash"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=nodejs"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=ts"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=nextjs"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
												<img
													src="https://skillicons.dev/icons?i=prisma"
													className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
											</div>
										</ScrollReveal>{" "}
									</div>
								</div>
							</section>

							{/* ================= PORTFOLIO ================= */}
							<section className="p-4 mt-5 flex flex-col items-stretch" id="portfolio">
								<div
									className="mb-3.5 items-center flex justify-center"
									id="portfolioTitle"
								>
									<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
										<h1 className="font-black text-4xl font-display uppercase">
											<ColourfulText text="portfólio" className="inline" />
										</h1>
									</ScrollReveal>
								</div>
								<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
									<div
										className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
										id="cards"
									>
										{/* CARD 1 */}
										<PinContainer
											title="Portfólio"
											href="https://github.com/SirSouza/minimal-portfolio"
										>
											<div className="flex basis-full flex-col p-1 tracking-tight text-foreground sm:basis-1/2 w-60 h-70">
												<h3 className="max-w-xs pb-2! m-0! font-bold text-base text-foreground text-center">
													Portfólio
												</h3>
												<Separator
													orientation="horizontal"
													className="bg-sidebar-accent-foreground/30"
												/>
												<div className="text-sm mb-1 p-0! font-normal text-center">
													<span className="text-foreground/70 text-xs ">
														Projeto completo de site Portfólio. Foco em responsividade,
														organização de seções e experiência de usuário.
													</span>
												</div>
												<div className="w-full h-63.75 rounded-xl overflow-hidden mb-1.5">
													<img src="/images/image.png" alt="" />
												</div>
												<div className="flex gap-1.5 flex-wrap justify-center mt-2">
													<i className="devicon-react-original colored text-xl"></i>
													<i className="devicon-nextjs-original-wordmark colored text-xl"></i>
													<i className="devicon-typescript-plain colored text-xl"></i>
													<i className="devicon-tailwindcss-original colored text-xl"></i>
												</div>
											</div>
										</PinContainer>

										{/* CARD 2 */}
										<PinContainer
											title="Diário digital"
											href="https://github.com/SirSouza/anorak-system-log"
										>
											<div className="flex basis-full flex-col p-1 tracking-tight text-foreground sm:basis-1/2 w-60 h-70">
												<h3 className="max-w-xs pb-2! m-0! font-bold text-base text-foreground text-center">
													Anorak System Log
												</h3>
												<Separator
													orientation="horizontal"
													className="bg-sidebar-accent-foreground/30"
												/>
												<div className="text-sm mb-1 p-0! font-normal text-center">
													<span className="text-foreground/70 text-xs ">
														Aplicação projetada como diário online. Desenvolvido para praticar
														estruturação de páginas e estilo retrô minimalista.
													</span>
												</div>
												<div className="w-full h-63.75 rounded-xl overflow-hidden mb-1.5">
													<img
														src="/images/diario-digital.png"
														alt=""
														className="h-full w-full"
													/>
												</div>
												<div className="flex gap-1.5 flex-wrap justify-center mt-2">
													<i className="devicon-html5-plain colored text-xl"></i>
													<i className="devicon-css3-plain colored text-xl"></i>
													<i className="devicon-javascript-plain colored text-xl"></i>
												</div>
											</div>
										</PinContainer>

										{/* CARD 3 */}
										<PinContainer
											title="B7 Burger"
											href="https://github.com/SirSouza/B7Burger"
										>
											<div className="flex basis-full flex-col p-1 tracking-tight text-foreground sm:basis-1/2 w-60 h-70">
												<h3 className="max-w-xs pb-2! m-0! font-bold text-base text-foreground text-center">
													B7 Burger
												</h3>
												<Separator
													orientation="horizontal"
													className="bg-sidebar-accent-foreground/30"
												/>
												<div className="text-sm mb-1 p-0! font-normal text-center">
													<span className="text-foreground/70 text-xs ">
														Página fictícia de hamburgueria, com foco em responsividade,
														design atrativo e boas práticas de estruturação HTML/CSS.
													</span>
												</div>
												<div className="w-full h-full rounded-xl overflow-hidden mb-1.5">
													<img src="/images/b7-burger.jpeg" alt="" />
												</div>
												<div className="flex gap-1.5 flex-wrap justify-center mt-2">
													<i className="devicon-html5-plain colored text-xl"></i>
													<i className="devicon-css3-plain colored text-xl"></i>
												</div>
											</div>
										</PinContainer>

										{/* CARD 4 */}
										<PinContainer
											title="IBM PC"
											href="https://github.com/SirSouza/landing-ibm-pc5150"
										>
											<div className="flex basis-full flex-col p-1 tracking-tight text-foreground sm:basis-1/2 w-60 h-70">
												<h3 className="max-w-xs pb-2! m-0! font-bold text-base text-foreground text-center">
													IBM PC 5150
												</h3>
												<Separator
													orientation="horizontal"
													className="bg-sidebar-accent-foreground/30"
												/>
												<div className="text-sm mb-1 p-0! font-normal text-center">
													<span className="text-foreground/70 text-xs ">
														Landing page dedicada ao IBM PC 5150. Foco em identidade visual
														nostálgica com técnicas modernas de HTML e CSS.
													</span>
												</div>
												<div className="w-full h-full rounded-xl overflow-hidden mb-1.5">
													<img src="/images/ibm.png" alt="" />
												</div>
												<div className="flex gap-1.5 flex-wrap justify-center mt-2">
													<i className="devicon-html5-plain colored text-xl"></i>
													<i className="devicon-css3-plain colored text-xl"></i>
												</div>
											</div>
										</PinContainer>

										{/* CARD 5 */}
										<PinContainer
											title="Starbucks"
											href="https://github.com/SirSouza/starbucks"
										>
											<div className="flex basis-full flex-col p-1 tracking-tight text-foreground sm:basis-1/2 w-60 h-70">
												<h3 className="max-w-xs pb-2! m-0! font-bold text-base text-foreground text-center">
													Starbucks
												</h3>
												<Separator
													orientation="horizontal"
													className="bg-sidebar-accent-foreground/30"
												/>
												<div className="text-sm mb-1 p-0! font-normal text-center">
													<span className="text-foreground/70 text-xs ">
														Modelo inspirado no site oficial da Starbuck. Aplicação prática de
														conceitos de layout, estilização avançada e responsividade.
													</span>
												</div>
												<div className="w-full h-full rounded-xl overflow-hidden mb-1.5">
													<img src="/images/starbucks.jpeg" alt="" />
												</div>
												<div className="flex gap-1.5 flex-wrap justify-center mt-2">
													<i className="devicon-html5-plain colored text-xl"></i>
													<i className="devicon-css3-plain colored text-xl"></i>
												</div>
											</div>
										</PinContainer>

										{/* CARD 6 */}
										<PinContainer
											title="Tributo"
											href="https://github.com/SirSouza/tributo"
										>
											<div className="flex basis-full flex-col p-1 tracking-tight text-foreground sm:basis-1/2 w-60 h-70">
												<h3 className="max-w-xs pb-2! m-0! font-bold text-base text-foreground text-center">
													Tributo a Metthew Perry
												</h3>
												<Separator
													orientation="horizontal"
													className="bg-sidebar-accent-foreground/30"
												/>
												<div className="text-sm mb-1 p-0! font-normal text-center">
													<span className="text-foreground/70 text-xs ">
														Página tributo em homenagem ao ator Matthew Perry. Projeto voltado
														para praticar tipografia, organização de conteúdo.
													</span>
												</div>
												<div className="w-full h-full rounded-xl overflow-hidden mb-1.5">
													<img src="/images/tributo.jpeg" alt="" />
												</div>
												<div className="flex gap-1.5 flex-wrap justify-center mt-2">
													<i className="devicon-html5-plain colored text-xl"></i>
													<i className="devicon-css3-plain colored text-xl"></i>
												</div>
											</div>
										</PinContainer>
									</div>
								</ScrollReveal>

								<div>
									<p className="text-center">
										Esses são só alguns dos meus projetos, para ver mais, acesse meu
										perfil no{" "}
										<a
											href="https://github.com/SirSouza"
											target="_blank"
											rel="noopener noreferrer"
											className="decoration-accent-foreground underline"
										>
											Github
										</a>
										.
									</p>
								</div>
							</section>

							{/* ================= CONTATO ================= */}
							<section className="mt-6 mb-6 px-4 py-6" id="contato">
								<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
									<div
										className="w-full h-auto flex flex-col justify-center items-center gap-4"
										id="container-contato"
									>
										<div className="" id="callAction">
											<h3 className="text-xl sm:text-2xl md:text-3xl text-center">
												Quer conversar sobre um projeto ou oportunidade? Fique à vontade
												para entrar em contato.
											</h3>
										</div>
										<div className="flex items-center justify-center" id="form">
											<a
												href="mailto:ewertoncomdabliu@proton.me?subject=Contato%20via%20Portfólio
                      &body=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/proton-mail.png"
													className="w-8 h-8 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
											</a>
											<a
												href="https://x.com/devanorak"
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													src="https://skillicons.dev/icons?i=twitter"
													className="w-8 h-8 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
											</a>
											<a
												href="https://www.linkedin.com/in/devanorak/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													src="https://skillicons.dev/icons?i=linkedin"
													className="w-8 h-8 transition-transform duration-300 hover:scale-115 mr-4 mb-7"
												/>
											</a>
										</div>
									</div>
									<div className="w-full flex justify-center">
										<a href="/Currículo.pdf" download={"Currículo.pdf"}>
											<Button>
												Baixar Curriculum <Download />
											</Button>
										</a>
									</div>
								</ScrollReveal>
							</section>

							<div className="w-11/12">
								<Separator
									orientation="horizontal"
									className="bg-sidebar-accent-foreground/30"
								/>
							</div>

							{/* ================= FOOTER ================= */}
							<footer id="footer">
								<ScrollReveal mode="container" staggerDelay={0.15} baseRotation={0}>
									<div className="container mx-auto px-4 py-6">
										<div className="flex flex-col items-center justify-center gap-3 text-center">
											{/* Créditos principais */}
											<p className="text-sm text-muted-foreground">
												Built with{" "}
												<a
													href="https://react.dev/"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													React
												</a>
												{", "}
												<a
													href="https://nextjs.org/"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													Next.js
												</a>
												{", "}
												<a
													href="https://ui.shadcn.com"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													shadcn/ui
												</a>
												{", "}
												<a
													href="https://animate-ui.com"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													Animate UI
												</a>
												{", "}
												<a
													href="https://reactbits.dev"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													ReactBits
												</a>
												{", "}
												<a
													href="https://lightswind.com"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													Lightswind
												</a>
											</p>

											{/* Ícones */}
											<p className="text-sm text-muted-foreground">
												Icons by{" "}
												<a
													href="https://lucide.dev"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													Lucide
												</a>
												{" & "}
												<a
													href="https://skillicons.dev"
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium text-foreground hover:underline underline-offset-4 transition-colors"
												>
													Skillicons
												</a>
											</p>
											<p className="text-xs text-muted-foreground/60">
												© {new Date().getFullYear()} Todos os direitos reservados
											</p>
										</div>
									</div>
								</ScrollReveal>
							</footer>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
