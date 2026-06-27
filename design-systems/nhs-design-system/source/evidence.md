# NHS Design System Source Evidence

## Source Scope

This package distills reusable visual language from official public NHS digital service manual documentation. It does not copy NHS screenshots, logos as assets, frontend source, Sass files, or production markup. The component fixture uses an original text-only "NHS" block as a shape cue, not an official NHS logo asset.

## Official Sources Reviewed

- NHS digital service manual, Colour: https://service-manual.nhs.uk/design-system/styles/colour
- NHS digital service manual, Typography: https://service-manual.nhs.uk/design-system/styles/typography
- NHS digital service manual, Focus state: https://service-manual.nhs.uk/design-system/styles/focus-state
- NHS digital service manual, Layout: https://service-manual.nhs.uk/design-system/styles/layout
- NHS digital service manual, Buttons: https://service-manual.nhs.uk/design-system/components/buttons
- NHS digital service manual, Header: https://service-manual.nhs.uk/design-system/components/header

## Evidence Notes

- Color roles use official documented NHS variables where appropriate: text `#212b32`, secondary text `#4c6272`, link / NHS blue `#005eb8`, focus yellow `#ffeb3b`, border `#d8dde0`, error `#d5281b`, success / button green `#007f3b`.
- Typography follows the documented scale from 14px to 64px, with 19px as the main desktop body size and 16px as the small body tier.
- Focus treatment preserves the NHS / GOV.UK-style yellow and black combination described for WCAG-visible focus on different backgrounds.
- Layout follows documented mobile-first guidance, the default 960px container, and comfortable line lengths.
- Buttons follow the documented primary / secondary grouping pattern and warning that disabled buttons require care because their contrast can confuse some users.

## License / Attribution

NHS service manual pages state that content is available under the Open Government Licence v3.0 except where otherwise stated. This Open Design package is a distilled design-language reference and should be treated as inspiration and interoperability guidance, not an official NHS package.
