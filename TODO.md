# TODO - Add Light Mode Option to Portfolio

## Plan for Adding Light Mode

1. Update tailwind.config.js:
   - Enable 'darkMode' option for Tailwind. Use 'class' strategy to toggle dark/light mode with a CSS class on the root element.

2. Update pages/_app.js:
   - Add React state or context to manage the current theme (dark or light).
   - Add logic to toggle the theme and apply/remove the 'dark' class on the root <html> or <body> element.
   - Pass theme state or toggle function as props/context.

3. Update components/Navbar.js:
   - Add a toggle button to switch between dark and light modes.
   - On toggle, update theme state in _app.js.

4. Update global styles (styles/globals.css):
   - Define any necessary custom styles for light mode if needed.
   - Use Tailwind’s dark: variant to support dark mode styles.

5. Verify components use Tailwind’s dark mode classes appropriately. Adjust any styles that only support dark currently.

## Followup Steps
- Test the theme toggle functionality in the browser.
- Ensure smooth user experience and state persistence (optional for now).
- Verify visual correctness in both themes.

This will provide a toggle allowing users to switch between dark and light modes, enhancing usability and aesthetics.
