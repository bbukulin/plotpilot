import Navbar from "@/components/movie/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center space-y-2">
			<Navbar />
			{children}
		</div>
	);
};

export default ProtectedLayout;
