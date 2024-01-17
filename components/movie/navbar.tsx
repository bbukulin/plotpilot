"use client";

import {
	Tv2,
	LogOut,
	ChevronDown,
	LayoutDashboard,
	SlidersHorizontal,
	MessageSquareHeart,
	PanelsTopLeft,
	Banana,
} from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/use-current-role";

const Navbar = () => {
	const router = useRouter();
	const role = useCurrentRole();

	const onClick = () => {
		signOut();
	};

	return (
		<div className="bg-primary flex justify-between items-center p-4 rounded-md w-[600px] shadow-sm ">
			<div>
				<Button onClick={() => router.push("/home")}>Home</Button>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						Account <ChevronDown size={20} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-40">
					<DropdownMenuGroup>
						<DropdownMenuItem
							onClick={() => router.push("/watchlist")}
							className="hover:cursor-pointer">
							<Tv2 className="mr-2 h-4 w-4" />
							<span>Watchlist</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => router.push("/settings")}
							className="hover:cursor-pointer">
							<SlidersHorizontal className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => router.push("/feedback")}
							className="hover:cursor-pointer">
							<MessageSquareHeart className="mr-2 h-4 w-4" />
							<span>Feedback</span>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					{role === UserRole.ADMIN && (
						<>
							<DropdownMenuGroup>
								<DropdownMenuItem
									onClick={() => router.push("/dashboard")}
									className="hover:cursor-pointer">
									<Banana className="mr-2 h-4 w-4" />
									<span>Dashboard</span>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
						</>
					)}
					<DropdownMenuItem onClick={onClick} className="hover:cursor-pointer">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sign Out</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Navbar;
