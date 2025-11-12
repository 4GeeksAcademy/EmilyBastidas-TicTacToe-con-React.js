import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//componentes
import Index from './Index';
import Game from './Game';

const Home = () => {
	// Empezamos mostrando 'Index'
	const [currentPage, setCurrentPage] = useState("Index");

	//función para mi event onClick
	const handleGoToGame = () => {
		setCurrentPage("Game");
	};

	return (
		<div>
			{currentPage === "Index" ? (
				<Index onGoToGame={handleGoToGame} /> //paso mi handleGoToGame como prop a Index
			) : (
				<Game />
			)}
		</div>
	);
};

export default Home;