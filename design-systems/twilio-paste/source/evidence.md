# Twilio Paste Source Evidence

## Source Scope

This package distills public official Twilio Paste documentation and official open-source token packages into an Open Design reusable visual language. It is inspiration-only: no official screenshots, logos, icons, source markup, component source, package CSS, or font files were copied into the package.

## Official Sources Reviewed

- Paste home: https://paste.twilio.design/
- Paste GitHub repository: https://github.com/twilio-labs/paste
- Paste design tokens package: `@twilio-paste/design-tokens@10.15.0`
- Paste theme package metadata: `@twilio-paste/theme@12.0.1`
- Twilio theme token evidence: `dist/themes/twilio/tokens.custom-properties.css`

## Evidence Notes

- Paste's public token package exposes multiple product themes, including Twilio and Twilio dark, with semantic CSS custom properties for background, text, border, shadow, focus, spacing, radius, and typography.
- The Twilio theme uses white body surfaces, Twilio navy for brand and high-emphasis text, blue primary action tokens, red destructive/error tokens, green success, and orange warning.
- Typography evidence names TwilioSansText, TwilioSansDisplay, and TwilioSansMono, with Inter and system fallbacks.
- Token evidence includes an explicit focus shadow composed from white, blue, and pale blue rings, reinforcing accessible focus visibility.
- Paste's spacing tokens are dense and systematic, with 4px, 8px, 12px, 16px, 20px, 24px, 32px, and larger page-layout steps.
- Radius and shadow tokens support a practical product UI: 4px controls, 8px cards, low shadows, high shadows for overlays, and border shadows for state.

## Distillation Decisions

- The Open Design tokens map Twilio's white canvas, navy hierarchy, blue primary action, and semantic feedback into the required schema.
- The fixture focuses on a customer messaging workspace because it expresses Paste's accessible SaaS, communication, form, status, and message-list strengths without copying official examples.
- Twilio red is described as a highlight/destructive role in prose rather than added as a non-schema token, keeping `tokens.css` compatible with the standard Open Design contract.
