/**
 * Plugins are automatically loaded if you have them installed
 * in the same node_modules directory where prettier is located.
 * Plugin package names must start with @prettier/plugin- or
 * prettier-plugin- or @<scope>/prettier-plugin- to be registered.
 *
 * @see https://prettier.io/docs/en/plugins.html#using-plugins
 */

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'auto',
  pluginSearchDirs: false,
  plugins: ['prettier-plugin-packagejson', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '^vue(/.*)?$',
    '^vue.+$',
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    // Relative imports, keep css modules at the bottom
    '^@/.*(?<!\\.s?css)$',
    '^[./].*(?<!\\.s?css)$',
    '^@/.*$',
    '^[./].*$',
  ],
  htmlWhitespaceSensitivity: 'ignore', // https://github.com/prettier/prettier/issues/5844#issuecomment-462309084
  bracketSameLine: false, // https://github.com/prettier/prettier/issues/5377
};
