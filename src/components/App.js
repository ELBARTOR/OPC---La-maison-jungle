// Importation
import { useState, useEffect } from 'react' // hook useState et hook useEffect
import Banner from './Banner' // composant de Banner
import logo from '../assets/logo.png' // image Logo
import Cart from './Cart' // composant Cart
import Footer from './Footer' // composant footer
import ShoppingList from './ShoppingList' // composant ShoppingList
import '../styles/Layout.css' // Fichier CSS

// Composant
// Le composant App est une fonction React qui représente l'ensemble de l'application.
function App() {
	const savedCart = localStorage.getItem('cart') // Une variable savedCart est définie pour récupérer le panier stocké dans le localStorage de l'application.
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	// Le hook useState est utilisé pour définir l'état local cart, qui représente le panier de l'utilisateur. Si un panier est récupéré du localStorage, il est converti en objet JavaScript à l'aide de JSON.parse(). Sinon, un tableau vide est initialisé.
	// Le hook useEffect est utilisé pour mettre à jour le localStorage à chaque fois que le panier change. Cela garantit que les données du panier sont persistantes.
	return (
		<div> {/*Le rendu du composant App est encapsulé dans une div parente. */}
			<Banner> {/*Le composant Banner est rendu avec le logo et le titre de l'application. */}
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} /> {/*Le composant Cart est rendu avec les props cart et updateCart, qui représentent respectivement le panier de l'utilisateur et la fonction pour le mettre à jour. */}
				<ShoppingList cart={cart} updateCart={updateCart} /> {/*Le composant ShoppingList est rendu avec les props cart et updateCart, qui représentent respectivement le panier de l'utilisateur et la fonction pour le mettre à jour. */}
			</div>
			<Footer /> {/*Le composant Footer est rendu. */}
		</div>
	)
}

// Exportation
export default App