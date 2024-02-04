import { Badge } from "../ui/badge";

interface GenreBadgeProps {
	text: string;
}

const GenreBadge = ({ text }: GenreBadgeProps) => {
	return (
		<Badge variant="outline" className="text-sm font-normal">
			{text}
		</Badge>
	);
};

export default GenreBadge;
