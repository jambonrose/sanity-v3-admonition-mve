# Read Me

I want to allow for the definition of admonitions in portable text
documents in Sanity v3.

An admonition is a collection of text that exists separately from
the main flow of the content. Its purpose is to add information
about the topic by drawing the readers attention to this
information is a specific context. For instance, Asciidoc defines
admonitions of type "Note," "Tip," "Important," "Caution," and
"Warning." Sanity's own documentation site uses admonitions like
"Need help?" and "Gotcha." Publishers like Pearson permit authors
to define their own, which enabled me to use the "Ghosts of
Versions Past" admonition in my book "Django Unleashed."

Content authors therefore need the flexibility to define the type
of an admonition. The actual admonition will be inline to existing
content, but reference an admonition type.

While the admonition is separate from the main flow of content, it
should be easy to adjust the content and type of an admonition
when working within Sanity to ensure a productive writing
experience.

This MVE explores how to achieve this in Sanity. It is for
demonstration purposes and is not intended to be deployed, forked,
or used in production. You use this code at your own risk.
