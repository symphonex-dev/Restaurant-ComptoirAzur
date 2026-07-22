import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Hours from './components/Hours'
import LocationMap from './components/LocationMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

// ============================================================================
// App — composant racine
// ----------------------------------------------------------------------------
// EN JS VANILLA, la page entière serait un unique fichier index.html avec
// toutes les sections empilées en dur, et du JavaScript séparé qui vient
// ensuite "brancher" des comportements sur des éléments recherchés par
// getElementById un peu partout.
//
// EN REACT, App.jsx EST la page : chaque section est un composant importé
// et posé ici, dans l'ordre où elle doit apparaître à l'écran. La structure
// de la page se lit directement dans la structure du code — un vrai
// avantage pour la maintenabilité : pour réordonner deux sections, on
// déplace deux lignes ici, sans toucher au HTML ni au CSS.
// ============================================================================
export default function App() {
  return (
    <>
      {/* Lien d'évitement : invisible tant qu'il n'a pas le focus, il permet
          à une personne naviguant au clavier de sauter directement le menu
          de navigation répété sur chaque page. Bonne pratique d'accessibilité
          standard, quasi invisible pour les autres visiteurs. */}
      <a href="#accueil" className="skip-link">
        Aller au contenu principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Hours />
        <LocationMap />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  )
}
