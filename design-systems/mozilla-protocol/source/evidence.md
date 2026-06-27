# Mozilla Protocol Evidence

## Sources reviewed

- https://protocol.mozilla.org/
- https://protocol.mozilla.org/docs/fundamentals/principles
- https://protocol.mozilla.org/docs/fundamentals/brand-themes
- https://protocol.mozilla.org/docs/fundamentals/typography
- https://protocol.mozilla.org/docs/fundamentals/color
- https://protocol.mozilla.org/docs/fundamentals/design-tokens
- https://github.com/mozilla/protocol
- https://raw.githubusercontent.com/mozilla/protocol/main/README.md
- https://raw.githubusercontent.com/mozilla/protocol/main/LICENSE

## Public evidence distilled

- Protocol describes itself as the design system for Mozilla and Firefox websites, with reusable coded components, high-level content guidance, and accessibility guidance.
- The public principles page lists meaningful, flexible, accessible to all, global, and useful as design decision filters.
- Brand-theme documentation says Protocol supports Mozilla and Firefox brands. Mozilla is mostly black and white with Mozilla Headline and Mozilla Text; Firefox uses Metropolis and is more colorful.
- Typography documentation identifies Mozilla Headline, Mozilla Text, Metropolis, and Inter. It recommends Mozilla Headline for larger Mozilla titles, Mozilla Text for Mozilla body copy, Metropolis for Firefox headings, and Inter for Firefox body copy.
- The color documentation exposes broad Mozilla/Firefox color scales, including blue `#0060df`, blue hover/deep values, teal-green values, yellow/orange warning values, and red error values.
- The navigation and component index shows common website patterns: buttons, cards, callouts, feature cards, forms, content containers, columns, main-with-sidebar, navigation, newsletter, notification bar, section heading, split, and sticky promo.
- The GitHub repository is MPL-2.0 licensed. This Open Design package is a distilled inspiration capture and does not copy official screenshots, brand assets, or source code.

## Capture decisions

- Use a Mozilla-neutral foundation rather than a Firefox-only interpretation: black text, white canvas, blue action, restrained off-white surfaces.
- Preserve the documented brand split by describing both Mozilla and Firefox font pairings, while binding the token default to Mozilla Headline/Mozilla Text with fallbacks.
- Encode the Open Design schema tokens only. Brand-specific Protocol Sass token names are not copied into this package.
- Keep components as original fixtures that demonstrate reusable visual language, not official Protocol markup.
