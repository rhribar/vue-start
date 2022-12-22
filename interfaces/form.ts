enum Gender {
	GIRL = "Girl",
	BOY = "Boy",
	UNISEX = "Unisex",
}

enum Popularity {
	TRENDY = "Trendy",
	UNIQUE = "Unique",
}

enum Length {
	SHORT = "Short",
	MEDIUM = "Medium",
	LONG = "Long",
}

interface OptionsState {
	gender: Gender;
	popularity: Popularity;
	length: Length;
}

export { OptionsState, Gender, Popularity, Length };
