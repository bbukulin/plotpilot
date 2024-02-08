interface HeaderProps {
	label: string;
}

export const Header = ({ label }: HeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-center">
			<h1 className="text-xl font-normal">✨ Plot Pilot</h1>
			<p className="text-md font-normal">{label}</p>
		</div>
	);
};
