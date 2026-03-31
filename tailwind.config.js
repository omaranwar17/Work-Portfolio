/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--color-bg-page)',
        foreground: 'var(--color-fg)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        accent: 'var(--color-accent)',
        'accent-contrast': 'var(--color-accent-contrast)',
        'nav-surface': 'var(--color-nav-surface)',
        'nav-link': 'var(--color-nav-link)',
        'skill-icon': 'var(--color-skill-icon)',
        line: 'var(--color-line)',
        overlay: 'var(--color-overlay)',
        'dialog-surface': 'var(--color-dialog-surface)',
        'dialog-border': 'var(--color-dialog-border)',
        'dialog-heading': 'var(--color-dialog-heading)',
        'dialog-body': 'var(--color-dialog-body)',
        'badge-on-accent': 'var(--color-badge-on-accent)',
        'menu-accent': 'var(--color-menu-accent)',
        'title-line': 'var(--color-title-line)',
      },
    },
  },
  plugins: [],
};
