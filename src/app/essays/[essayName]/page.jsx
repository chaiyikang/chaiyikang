"use client";
export default function Page({ params: { essayName } }) {
	if (getRandomNumber() === 1) throw new Error("error occured fetching essay");
	return <div>this is an essay about: {essayName}</div>;
}

function getRandomNumber() {
	// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
	if (Math.random() < 0.5) {
		return 1;
	} else {
		return 2;
	}
}
