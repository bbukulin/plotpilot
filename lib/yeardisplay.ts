const YearDisplay = (dateString: string) => {
	const date = new Date(dateString);

	// Extract the year
	const year = date.getFullYear();

	// Render the year
	return year;
};

export default YearDisplay;
