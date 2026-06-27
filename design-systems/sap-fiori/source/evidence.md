# SAP Fiori Source Evidence

## Source Scope

This package distills reusable visual language from official public SAP Fiori Design System documentation. It does not copy SAP screenshots, icon fonts, UI kit assets, SAPUI5 source, or official component code. The component fixture is an original HTML/CSS approximation for Open Design preview and prompt guidance.

## Official Sources Reviewed

- SAP Fiori, Morning Horizon Colors: https://www.sap.com/design-system/fiori-design-web/v1-136/foundations/visual/colors/morning-horizon
- SAP Fiori, Quartz Light Colors: https://www.sap.com/design-system/fiori-design-web/v1-71/foundations/visual/colors/quartz-light-colors
- SAP Fiori, Content Density Cozy and Compact: https://www.sap.com/design-system/fiori-design-web/v1-38/foundations/visual/cozy-compact
- SAP Fiori, Accessibility in SAP Fiori: https://www.sap.com/design-system/fiori-design-web/v1-84/discover/sap-design-system/product-standards/accessibility-in-sap-fiori
- SAP Fiori, SAP S/4HANA Web UI Kit: https://www.sap.com/design-system/fiori-design-web/v1-136/resources/libraries/design-stencils-for-figma

## Evidence Notes

- Token colors prioritize Morning Horizon because SAP describes it as the latest visual theme for SAP Fiori applications.
- Primary values come from official Morning Horizon reference roles: selection tint `#ebf8ff`, brand/highlight `#0070f2`, white containers `#ffffff`, app background `#f5f6f7`, borders `#d9d9d9` / `#e5e5e5`, text `#131e29`, labels `#556b82`.
- SAP documentation warns not to style controls directly from raw reference values in production themes. In this Open Design package, the values are tokenized as reusable visual-language references, not SAPUI5 implementation parameters.
- Density guidance is captured as a design rule: cozy for touch-sized controls, compact for mouse/keyboard productivity.
- Accessibility guidance is captured as constraints around contrast, keyboard focus, responsive adaptation, text resizing, theme compatibility, and avoiding unnecessary custom controls.
- Typography references SAP 72 based on the official S/4HANA Web UI Kit setup guidance.

## License / Attribution

This is not an official SAP package. SAP, SAP Fiori, SAPUI5, Morning Horizon, and related names are trademarks of SAP or its affiliates. Use this Open Design package as design-language inspiration and interoperability guidance only.
