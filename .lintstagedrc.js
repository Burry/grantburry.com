module.exports = {
  '*.{js,jsx,ts,tsx}': ['oxfmt', 'oxlint --fix', () => 'bun test'],
  '*.json': ['oxfmt']
}
