import { defineField, defineType } from "sanity"

import * as icons from "react-icons/fa"

export default defineType({
	name: "admonition",
	type: "object",
	title: "Admonition",
	fields: [
		defineField({
			name: "type",
			type: "reference",
			to: [{ type: "admonitionType" }],
		}),
		defineField({
			title: "Content",
			name: "body",
			type: "admonitionText",
		}),
	],
	preview: {
		select: {
			iconName: "type.iconName",
			admonitionType: "type.title",
			body: "body",
		},
		prepare: (value) => ({
			title: value.admonitionType,
			media: value.iconName ? icons[value.iconName] : icons.FaCommentDots,
			...value,
		}),
	},
})
