// Importation
import CareScale from './CareScale' // Composant CareScale
import '../styles/PlantItem.css' // Fichier CSS

function handleClick(plantName) { // sort une alert a l'appele de la fonction
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

// Composant
// retourne le JSX représentant un élément de la liste des plantes.
function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}> {/*Setup de la liste, événement sur le clique qui appelle la fonction handleClick */}
			<span className='lmj-plant-item-price'>{price}€</span> {/*Mise en place du prix */}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} /> {/* Mise en place de l'image */}
			{name} {/*Mise en place du nom*/}
			<div>
				<CareScale careType='water' scaleValue={water} /> {/*Appelle du composant CareScale pour l'eau */}
				<CareScale careType='light' scaleValue={light} /> {/*Appelle du composant CareScale pour la lumiere */}
			</div>
		</li>
	)
}

export default PlantItem