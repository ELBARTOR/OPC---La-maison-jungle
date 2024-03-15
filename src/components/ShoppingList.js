// Importation
import { useState } from 'react' // hook useState
import { plantList } from '../datas/plantList' // fichier de donnée plantList
import PlantItem from './PlantItem' // composant PlantItem
import Categories from './Categories' // composant Categories
import '../styles/ShoppingList.css' // Fichier CSS

// Composant
// retourne le JSX représentant la liste des plantes disponibles à l'achat.
function ShoppingList({ cart, updateCart }) { // prend deux props en entrée : cart (le panier d'achat) et updateCart (la fonction pour mettre à jour le panier).
	const [activeCategory, setActiveCategory] = useState('') // hook useState pour initialiser l'état activeCategory qui représente la catégorie active sélectionnée par l'utilisateur.
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[] // Les catégories uniques sont extraites de la liste des plantes (plantList) à l'aide de la méthode reduce pour éviter les doublons. Elles sont stockées dans la variable categories.
	)

	function addToCart(name, price) { // utilisée pour ajouter une plante au panier. Cette fonction prend le nom et le prix de la plante en tant que paramètres.
		const currentPlantAdded = cart.find((plant) => plant.name === name) // vérifie si la plante est déjà présente dans le panier en utilisant la méthode find sur le tableau cart.
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			) //     La méthode filter est utilisée sur le tableau cart pour créer un nouveau tableau cartFilteredCurrentPlant contenant toutes les plantes qui ne correspondent pas au nom de la plante que l'utilisateur souhaite ajouter.
			// Cela signifie que toutes les plantes avec un nom différent de name seront conservées dans ce nouveau tableau, tandis que la plante à ajouter sera exclue.
			updateCart([ // Le panier est mis à jour en appelant la fonction updateCart avec un nouveau tableau.
				...cartFilteredCurrentPlant, // Ce nouveau tableau est construit en utilisant le spread operator (...) pour ajouter toutes les plantes filtrées cartFilteredCurrentPlant.
				{ name, price, amount: currentPlantAdded.amount + 1 } //  un nouvel objet représentant la plante à ajouter est ajouté au tableau. Cet objet contient les propriétés name, price, et amount.
			]) // name et price sont ceux de la plante à ajouter, tandis que amount est incrémenté de 1 par rapport à la quantité actuelle de cette plante dans le panier (currentPlantAdded.amount + 1).
		} else {
			updateCart([...cart, { name, price, amount: 1 }]) // Si la plante n'est pas encore dans le panier, un nouvel objet représentant la plante est ajouté au panier avec une quantité initiale de 1.
		}
	}

	return (
		<div className='lmj-shopping-list'> 
		{/*Le composant Categories est rendu pour afficher les catégories disponibles. */}
			<Categories 
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
			{/*Cette expression JavaScript map() est utilisée pour parcourir chaque élément de la liste plantList. Pour chaque élément de plantList, 
			une logique d'affichage est exécutée pour générer un composant PlantItem et un bouton "Ajouter" associé.*/}
				{plantList.map(({ id, cover, name, water, light, price, category }) =>  //     Cette condition vérifie si la catégorie de la plante correspond à la catégorie active sélectionnée par l'utilisateur (activeCategory).
				// Si activeCategory est vide (!activeCategory) ou si la catégorie de la plante correspond à la catégorie active, alors la logique d'affichage est exécutée.
				//  Sinon, null est retourné, ce qui signifie que rien ne sera rendu pour cette plante.
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button> {/* en cliquant active la fonction addToCart */}
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList