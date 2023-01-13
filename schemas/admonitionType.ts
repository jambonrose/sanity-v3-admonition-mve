import { defineField, defineType } from "sanity"

import * as icons from "react-icons/fa"

export default defineType({
	name: "admonitionType",
	type: "document",
	title: "Admonition Type",
	icon: icons.FaRegComment,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
		}),
		defineField({
			name: "iconName",
			type: "string",
			title: "List Icon Name",
			description:
				"Name of react-icon icon to use: https://react-icons.github.io/react-icons/ . Not used externally.",
		}),
	],
	preview: {
		select: {
			title: "title",
			iconName: "iconName",
		},
		prepare: ({ title, iconName }) => ({
			title,
			media: icons[iconName] || icons.FaStickyNote,
		}),
	},
})
