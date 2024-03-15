// importation
import Sun from '../assets/sun.svg' // Image de soleil
import Water from '../assets/water.svg' // Image d'eau

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

// Composant
// retourne le JSX représentant l'échelle de soins pour les plantes.
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3] // définie comme un tableau [1, 2, 3]. Cette constante représente les différents niveaux de soins possibles pour les plantes (par exemple, faible, modéré, élevé).
	// en fonction du type de soin (careType), une image SVG appropriée est sélectionnée pour représenter le type de soin.
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
		// Lorsque l'utilisateur clique sur une des images de l'échelle de soins, une alerte est affichée avec des informations sur le niveau de soin représenté par cette image. 
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{/*L'échelle de soins est affichée sous forme de série d'icônes représentant différents niveaux de soins. 
			Pour chaque niveau de soin dans range, une image SVG est affichée si scaleValue est supérieur ou égal à ce niveau de soin. */}
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

// exportation
export default CareScale