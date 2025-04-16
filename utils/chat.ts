export const extractImageFromMarkdown = (text: string) => {
	// This regex looks for markdown image syntax: ![alt text](data:image/jpeg;base64,DATA)
	const regex = /!\[.*?\]\((data:image\/[^;]+;base64,[^)]+)\)/g
	const matches = text.match(regex)

	if (matches && matches.length > 0) {
		// Extract just the base64 data URL from the first match
		const urlRegex = /(data:image\/[^;]+;base64,[^)]+)/
		const urlMatch = matches[0].match(urlRegex)

		if (urlMatch && urlMatch[1]) {
			return urlMatch[1]
		}
	}

	return null
}
