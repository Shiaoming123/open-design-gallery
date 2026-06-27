# GOV.UK Design System Evidence

## Source Material

- GOV.UK Design System home: https://design-system.service.gov.uk/
- Styles overview: https://design-system.service.gov.uk/styles/
- Typeface: https://design-system.service.gov.uk/styles/typeface/
- Type scale: https://design-system.service.gov.uk/styles/type-scale/
- Colour: https://design-system.service.gov.uk/styles/colour/
- Spacing: https://design-system.service.gov.uk/styles/spacing/
- Button component: https://design-system.service.gov.uk/components/button/

## License And Attribution

The public GOV.UK Design System pages state that content is available under the Open Government Licence v3.0 except where otherwise stated. This Open Design package is a distilled, hand-authored visual-language capture. It does not copy official screenshots, assets, downloadable font files, Sass source, HTML examples, or component source code.

## Evidence Notes

- The style overview says services should follow GOV.UK conventions and avoid changing button style, input border thickness, or color meanings when applying styles manually.
- The colour guidance emphasizes the GOV.UK palette, WCAG AA contrast, functional colors, yellow focus, red errors, green success, blue brand/link color, and white body background.
- The type scale uses large readable steps, responsive behavior, and line heights in multiples of 5px.
- The spacing guidance uses responsive and static scales based on 5px increments, with 60px as the largest standard large-screen unit.
- The button guidance frames buttons as action controls, recommends sentence-case action text, left alignment, and avoiding multiple default buttons on one page.

## Distillation Choices

- Primary Open Design `--accent` is bound to green because the fixture focuses on transactional service actions; link and brand blue appears as `--meta`.
- Yellow is reserved for `--warn` and `--focus-ring`.
- Radius tokens are set to `0` to preserve the square GOV.UK component character.
- The component fixture uses original markup and invented service content so it demonstrates the language without copying official examples.
