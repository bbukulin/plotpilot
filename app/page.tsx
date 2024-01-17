import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-t from-gray-800 via-gray-900 to-black">
			<h1 className="font-medium text-xl">🚀 Home page</h1>
			<div className="flex space-x-4 mt-4 items-center">
				<LoginButton>
					<Button variant="outline">Sign In</Button>
				</LoginButton>
				<RegisterButton>
					<Button variant="outline">Sign Up</Button>
				</RegisterButton>
			</div>
		</div>
	);
}
