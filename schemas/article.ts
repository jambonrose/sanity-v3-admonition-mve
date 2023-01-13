import { defineArrayMember, defineField, defineType } from "sanity"

import { FaParagraph } from "react-icons/fa"

export default defineType({
	name: "article",
	title: "Article",
	type: "document",
	icon: FaParagraph,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "Displayed as H1 with article and in lists",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "pageText",
		}),
	],
})
