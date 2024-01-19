import Navbar from "@/components/movie/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className="px-16">{children}</div>
		</>
	);
};

export default ProtectedLayout;
