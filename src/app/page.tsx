import Image from "next/image";

export default function Home() {
	return (
		<div
			className="bg-slate-900 w-7xl h-screen rounded-4xl p-7 
      text-gray-100 grid grid-cols-[1fr_3fr] grid-rows-[1fr_auto] "
			id="container"
		>
      <header className="bg-blue-500">header</header>
      <main className="bg-red-500 row-span-2 overflow-y-auto" id="main">
        <section id="hero">Hero</section>
        <section id="about">About</section>
        <section id="porfolio">Portfolio</section>
        <section id="contato">Contato</section>
      </main>
      <footer className="bg-amber-600" id="footer">Footer</footer>
    </div>
	);
}
