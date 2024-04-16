import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { Card } from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="card-group">
				<div className="card">
				<Card title= {'Card 1'}
					description={'Card 1 description'}
					imageURL={rigoImage}
					imageAlt={'Rigo baby'}
					
				/>
				</div>
			
			<div className="card">
				<Card title={'Card 2'}
					description={'Card 2 description'}
					imageURL={rigoImage}
					imageAlt={'Rigo baby'}
				/>
				
			</div>
			<div className="card">
				<Card title={'Card 3'}
					description={'Card 3 description'}
					imageURL={rigoImage}
					imageAlt={'Rigo baby'}
				/>
				
			</div>
			<div className="card">
				<Card title={'Card 4'}
					description={'Card 4 description'}
					imageURL={rigoImage}
					imageAlt={'Rigo baby'}
				/>
				
			</div>
			</div>
			<Footer />
			
		</div>
	);
};

export default home;
