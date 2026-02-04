"use client";

import { PinContainer } from "@/components/PinContainer";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface ConditionalPinContainerProps {
	children: React.ReactNode;
	title: string;
	href: string;
}

export function ConditionalPinContainer({
	children,
	title,
	href,
}: ConditionalPinContainerProps) {
	const isTouchDevice = useIsTouchDevice();

	// No mobile/tablet: card estilizado sem efeito 3D
	if (isTouchDevice) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex justify-center items-center group/pin cursor-pointer"
				aria-label={title}
			>
				<div className="p-2 rounded-xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-background border border-card-2 transition-all duration-300 hover:border-white/20">
					{children}
				</div>
			</a>
		);
	}

	// No desktop: PinContainer com efeito 3D completo
	return (
		<PinContainer title={title} href={href}>
			{children}
		</PinContainer>
	);
}
