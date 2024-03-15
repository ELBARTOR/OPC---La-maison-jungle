// Importations 
import '../styles/Banner.css' // Fichier CSS

//Composant
// Correspond au haut de la page
function Banner({ children }) { // children est une prop spéciale qui est automatiquement passée à tous les composants
	return <div className='lmj-banner'>{children}</div> // Cette prop représente tous les éléments enfants définis entre les balises d'ouverture et de fermeture d'un composant lorsqu'il est utilisé.
} // cf App.js 

//Exportation
export default Banner