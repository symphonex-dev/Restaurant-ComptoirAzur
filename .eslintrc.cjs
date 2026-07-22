module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  rules: {
    // React 17+ / la nouvelle transformation JSX de Vite n'exige plus
    // d'importer React dans chaque fichier utilisant du JSX.
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    // Le contenu de ce site est en français, langue où l'apostrophe est
    // omniprésente ("d'Azur", "l'ambiance"...). Les apostrophes brutes
    // s'affichent parfaitement en JSX ; les échapper systématiquement
    // (&apos;) n'apporterait rien et nuirait à la lisibilité du texte
    // directement dans le code source.
    'react/no-unescaped-entities': 'off',
  },
}
