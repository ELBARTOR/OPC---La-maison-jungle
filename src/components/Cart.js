// Importation
import { useState, useEffect } from 'react' // useState et useEffect
import '../styles/Cart.css' // Fichier CSS

// Composant
// Il retourne le JSX représentant le panier d'achat de l'utilisateur.
function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true) // Ici, useState(true) déclare un état isOpen avec une valeur initiale true. Cela signifie que par défaut, le panier est ouvert lors du rendu initial du composant.
	const total = cart.reduce( // Le total du panier est calculé en multipliant le prix unitaire de chaque plante par sa quantité, puis en additionnant les totaux de chaque plante.
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0 // Le deuxième argument de reduce, 0, est la valeur initiale de l'accumulateur acc.
	)
	useEffect(() => { // Le titre de la page est mis à jour dynamiquement en utilisant l'effet secondaire useEffect. À chaque changement dans le panier (lorsque total change), le titre de la page est mis à jour pour afficher le montant total des achats.
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	// une structure HTML est utilisée pour représenter visuellement le contenu du panier d'achat.
	// Un bouton est affiché pour permettre à l'utilisateur de fermer ou d'ouvrir le panier d'achat. L'état isOpen est utilisé pour contrôler l'affichage du panier.
	return isOpen ? ( // Si le panier est ouvert :
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? ( // Si le panier contient des éléments (cart.length > 0), les éléments du panier sont affichés ...
				<div>
					<h2>Panier</h2>
					<ul> {/*Chaque élément du panier est affiché dans une liste <ul>. Pour chaque élément du panier, le nom de la plante, le prix unitaire, et la quantité sont affichés. */}
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3> {/* Le total est affiché à la fin du panier.*/}
					<button onClick={() => updateCart([])}>Vider le panier</button>
					{/*Lorsque l'utilisateur clique sur le bouton "Vider le panier", la fonction updateCart([]) est appelée pour vider le panier. Cela permet à l'utilisateur de supprimer tous les éléments du panier en un seul clic. */}
				</div>
			) : ( // ... sinon un message indiquant que le panier est vide est affiché.
				<div>Votre panier est vide</div>
			)}
		</div>
	) : ( // si le panier est fermé : 
	// Lorsque l'utilisateur clique sur le bouton "Fermer" ou "Ouvrir le Panier", l'état isOpen est mis à jour en inversant sa valeur actuelle. Cela permet de modifier l'affichage du panier en le fermant ou en l'ouvrant.
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

// Exportation
export default Cart