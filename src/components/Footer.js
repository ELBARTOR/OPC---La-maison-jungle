// Importation
import { useState } from 'react' // useState
import '../styles/Footer.css' // Fichier CSS

// Composant
// retourne du JSX et correspond au pied de page
function Footer() {
	// Déclareration d'une variable d'état appelée inputValue ainsi qu'une fonction setInputValue pour mettre à jour cette variable d'état
	const [inputValue, setInputValue] = useState('')  

	function handleInput(e) {
		// Lorsque l'utilisateur saisit du texte dans l'élément <input>, cette fonction est appelée pour mettre à jour la variable d'état inputValue avec la valeur saisie.
		setInputValue(e.target.value) 
	}

	function handleBlur() {
		// Si la valeur de inputValue ne contient pas le caractère '@', elle affiche une alerte pour informer l'utilisateur que l'adresse e-mail saisie n'est pas valide.
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return ( // Le composant retourne une structure HTML
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
			// L'élément <input> est configuré pour appeler la fonction handleInput à chaque fois que l'utilisateur saisit du texte, 
			// et la fonction handleBlur à chaque fois que l'utilisateur quitte le champ de saisie.
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

// Exportation
export default Footer