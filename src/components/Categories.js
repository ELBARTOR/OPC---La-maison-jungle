// Importation 
import '../styles/Categories.css' // Fichier CSS

// Composant
// retourne le JSX représentant les catégories disponibles pour filtrer les plantes.
function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select // permet à l'utilisateur de sélectionner une catégorie
				//Les attributs value et onChange de l'élément <select> sont définis pour contrôler la valeur sélectionnée et gérer les changements de sélection.
				value={activeCategory} // L'attribut value est défini sur activeCategory, qui représente la catégorie actuellement sélectionnée. Cela assure que le menu déroulant affiche toujours la catégorie actuellement sélectionnée.
				onChange={(e) => setActiveCategory(e.target.value)} // L'attribut onChange est défini pour appeler la fonction setActiveCategory avec la nouvelle valeur sélectionnée à chaque fois que l'utilisateur change de catégorie. Cela permet de mettre à jour l'état activeCategory en fonction de la sélection de l'utilisateur.
				className='lmj-categories-select'
			>
			
			<option value=''>---</option>
			{/* Cette partie du code est une expression JavaScript qui utilise la méthode map pour parcourir chaque élément du tableau categories et générer dynamiquement une option pour chaque catégorie.
			Pour chaque catégorie cat dans le tableau categories, une option est créée avec la clé key définie sur cat (qui est supposée être unique) et la valeur de value définie sur cat (le nom de la catégorie).
			À l'intérieur de chaque option, le nom de la catégorie est affiché comme contenu de l'option, ce qui sera visible pour l'utilisateur dans le menu déroulant.*/}
			{categories.map((cat) => (
				<option key={cat} value={cat}>
					{cat}
				</option>
			))} 
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
			
		</div>

	)
}
// Un bouton "Réinitialiser" est également affiché. Lorsqu'il est cliqué, il réinitialise la catégorie active en appelant setActiveCategory avec une chaîne vide.

// Exportation
export default Categories