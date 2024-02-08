import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
	message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;

	return (
		<div className="bg-destructive/30 p-3 rounded-md flex items-center gap-x-2 text-sm font-normal text-red-500">
			<AlertTriangle size={16} />
			<p>{message}</p>
		</div>
	);
};
