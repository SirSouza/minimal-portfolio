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
			className="bg-background shadow-muted-foreground text-foreground grid h-screen w-7xl grid-cols-[1fr_6fr] 
      grid-rows-[1fr_auto] rounded-4xl border border-gray-700/20 pt-5 pb-5 shadow-2xl"
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

			<main className="00 row-span-2 flex overflow-y-auto" id="main">
				<Separator orientation="vertical" className="bg-muted-foreground" />

				<div className="w-full p-2.5" id="container-main">
          
					<section className="flex h-8 w-full items-center p-2  pb-3.5 border-b " id="containerTopBar">
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
						<Separator orientation="vertical" className="bg-muted-foreground" />
						<ToggleTheme/>
					</section>

          <section className="mt-8" id="hero">
            <div className="text-8xl font-black font-jetbrains" id="me">
								Anorak
							</div>
              <div><span className="text-foreground">Dev FullStack</span></div>
          </section>

					<section className="bg-amber-500" id="about">
						Olá, eu sou o Ewerton, mas pode me chamar de Anorak. Sou um desenvolvedor
						em constante evolução, apaixonado por criar soluções digitais que unem
						tecnologia, design e usabilidade. Vejo cada projeto como uma oportunidade
						de transformar ideias em sistemas funcionais e eficientes, sempre buscando
						inovação e qualidade em cada linha de código. Meu objetivo é ir além de
						simplesmente escrever programas: quero construir experiências digitais que
						realmente façam a diferença.
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
								<h4 className="text-sm font-semibold">@anorak</h4>
								<p className="text-sm">
									Dev Anorak – created and maintained by @anorakdev.
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
	);
}
