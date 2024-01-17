const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-gradient-to-t from-gray-800 via-gray-900 to-black h-screen w-screen flex items-center justify-center">
			{children}
		</div>
	);
};

export default AuthLayout;
