import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'

// Point d'entrée de l'application : c'est ici que React "s'accroche" au
// <div id="root"> présent dans index.html. React.StrictMode n'apparaît que
// pendant le développement — il double intentionnellement certains rendus
// pour nous aider à repérer des effets de bord mal écrits, sans impact sur
// le site une fois construit en production (vite build le retire).
//
// LanguageProvider englobe App ENTIÈREMENT (donc au-dessus, pas à
// l'intérieur) : c'est ce qui permet à n'importe quel composant de l'arbre,
// du Header au Footer, d'appeler useLanguage() sans avoir à faire
// redescendre la langue via des props de composant en composant.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)
