import { defineArrayMember, defineType } from "sanity"

export default defineType({
	name: "admonitionText",
	type: "array",
	title: "Admonition Text",
	of: [
		defineArrayMember({
			type: "block",
			title: "Block",
			// Styles let you set what your user can mark up blocks with. These
			// corrensponds with HTML tags, but you can set any title or value
			// you want and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "Quote", value: "blockquote" },
			],
			lists: [
				{ title: "Bullet", value: "bullet" },
				{ title: "Number", value: "number" },
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
					{ title: "Unarticulated", value: "u" },
					{ title: "Code", value: "code" },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						name: "link",
						type: "object",
						title: "URL",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
						],
					},
					{
						title: "Abbreviation / Acronym",
						name: "abbr",
						type: "object",
						fields: [
							{
								title: "title",
								name: "title",
								type: "string",
							},
						],
					},
				],
			},
		}),
	],
})
