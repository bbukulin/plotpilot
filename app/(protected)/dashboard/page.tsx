"use client";

import { UserRole } from "@prisma/client";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";

const Dashboard = () => {
	return (
		<div>
			<RoleGate allowedRole={UserRole.ADMIN}>
				<FormSuccess message="You can see this nice dashboard." />
			</RoleGate>
		</div>
	);
};

export default Dashboard;
