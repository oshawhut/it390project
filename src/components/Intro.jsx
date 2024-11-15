import React from "react";

const Intro = () => {
	// Date object
	const now = new Date();

	// Get current day of the week using toLocaleString
	const dayOfWeek = now.toLocaleString("default", { weekday: "long" });

	// Get current time
	const time = now.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
	});

	// Function to get ordinal suffix for a number
	const getOrdinalSuffix = (day) => {
		if (day > 3 && day < 21) return "th"; // Covers 11th to 19th
		switch (day % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	};

	// Get full month name
	const month = now.toLocaleString("default", { month: "long" });

	// Get day of the month and its ordinal suffix
	const day = now.getDate();
	const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

	// Display the result
	console.log(`${dayOfWeek}, ${month} ${dayWithSuffix} ${time}`);

	return (
		<div className="intro">
			<h1>
				{dayOfWeek}, {month} {dayWithSuffix}, {time}.
			</h1>
			<p>
				Start by checking in with yourself today - log your mood, jot down some
				thoughts, and explore our tips for self-care.
			</p>
			<a href="">head to calendar</a>
		</div>
	);
};

export default Intro;
