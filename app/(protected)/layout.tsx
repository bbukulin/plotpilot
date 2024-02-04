import Navbar from "@/components/ui/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
		</>
	);
};

export default ProtectedLayout;
