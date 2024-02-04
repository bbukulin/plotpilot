interface iScoreBadgeProps {
	score: number;
}

const ScoreBadge = ({ score }: iScoreBadgeProps) => {
	return (
		<div className="w-10 min-w-10 h-6 min-h-6 rounded-md flex items-center justify-center border border-emerald-600 bg-emerald-500/10">
			<p className="text-sm text-emerald-50">{Number(score?.toFixed(1))}</p>
		</div>
	);
};

export default ScoreBadge;
