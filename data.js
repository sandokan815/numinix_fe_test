import { faker } from 'https://esm.sh/@faker-js/faker';

// Get user data using API
const apiUrl = "https://jsonplaceholder.typicode.com/users";

const data = [
	{
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"address": {
			"street": "Kulas Light",
			"suite": "Apt. 556",
			"city": "Gwenborough",
			"zipcode": "92998-3874",
			"geo": {
				"lat": "-37.3159",
				"lng": "81.1496"
			}
		},
		"phone": "1-770-736-8031 x56442",
		"website": "hildegard.org",
		"company": {
			"name": "Romaguera-Crona",
			"catchPhrase": "Multi-layered client-server neural-net",
			"bs": "harness real-time e-markets"
		}
	},
	{
		"id": 2,
		"name": "Ervin Howell",
		"username": "Antonette",
		"email": "Shanna@melissa.tv",
		"address": {
			"street": "Victor Plains",
			"suite": "Suite 879",
			"city": "Wisokyburgh",
			"zipcode": "90566-7771",
			"geo": {
				"lat": "-43.9509",
				"lng": "-34.4618"
			}
		},
		"phone": "010-692-6593 x09125",
		"website": "anastasia.net",
		"company": {
			"name": "Deckow-Crist",
			"catchPhrase": "Proactive didactic contingency",
			"bs": "synergize scalable supply-chains"
		}
	},
	{
		"id": 3,
		"name": "Clementine Bauch",
		"username": "Samantha",
		"email": "Nathan@yesenia.net",
		"address": {
			"street": "Douglas Extension",
			"suite": "Suite 847",
			"city": "McKenziehaven",
			"zipcode": "59590-4157",
			"geo": {
				"lat": "-68.6102",
				"lng": "-47.0653"
			}
		},
		"phone": "1-463-123-4447",
		"website": "ramiro.info",
		"company": {
			"name": "Romaguera-Jacobson",
			"catchPhrase": "Face to face bifurcated interface",
			"bs": "e-enable strategic applications"
		}
	},
	{
		"id": 4,
		"name": "Patricia Lebsack",
		"username": "Karianne",
		"email": "Julianne.OConner@kory.org",
		"address": {
			"street": "Hoeger Mall",
			"suite": "Apt. 692",
			"city": "South Elvis",
			"zipcode": "53919-4257",
			"geo": {
				"lat": "29.4572",
				"lng": "-164.2990"
			}
		},
		"phone": "493-170-9623 x156",
		"website": "kale.biz",
		"company": {
			"name": "Robel-Corkery",
			"catchPhrase": "Multi-tiered zero tolerance productivity",
			"bs": "transition cutting-edge web services"
		}
	},
	{
		"id": 5,
		"name": "Chelsey Dietrich",
		"username": "Kamren",
		"email": "Lucio_Hettinger@annie.ca",
		"address": {
			"street": "Skiles Walks",
			"suite": "Suite 351",
			"city": "Roscoeview",
			"zipcode": "33263",
			"geo": {
				"lat": "-31.8129",
				"lng": "62.5342"
			}
		},
		"phone": "(254)954-1289",
		"website": "demarco.info",
		"company": {
			"name": "Keebler LLC",
			"catchPhrase": "User-centric fault-tolerant solution",
			"bs": "revolutionize end-to-end systems"
		}
	},
	{
		"id": 6,
		"name": "Mrs. Dennis Schulist",
		"username": "Leopoldo_Corkery",
		"email": "Karley_Dach@jasper.info",
		"address": {
			"street": "Norberto Crossing",
			"suite": "Apt. 950",
			"city": "South Christy",
			"zipcode": "23505-1337",
			"geo": {
				"lat": "-71.4197",
				"lng": "71.7478"
			}
		},
		"phone": "1-477-935-8478 x6430",
		"website": "ola.org",
		"company": {
			"name": "Considine-Lockman",
			"catchPhrase": "Synchronised bottom-line interface",
			"bs": "e-enable innovative applications"
		}
	},
	{
		"id": 7,
		"name": "Kurtis Weissnat",
		"username": "Elwyn.Skiles",
		"email": "Telly.Hoeger@billy.biz",
		"address": {
			"street": "Rex Trail",
			"suite": "Suite 280",
			"city": "Howemouth",
			"zipcode": "58804-1099",
			"geo": {
				"lat": "24.8918",
				"lng": "21.8984"
			}
		},
		"phone": "210.067.6132",
		"website": "elvis.io",
		"company": {
			"name": "Johns Group",
			"catchPhrase": "Configurable multimedia task-force",
			"bs": "generate enterprise e-tailers"
		}
	},
	{
		"id": 8,
		"name": "Nicholas Runolfsdottir V",
		"username": "Maxime_Nienow",
		"email": "Sherwood@rosamond.me",
		"address": {
			"street": "Ellsworth Summit",
			"suite": "Suite 729",
			"city": "Aliyaview",
			"zipcode": "45169",
			"geo": {
				"lat": "-14.3990",
				"lng": "-120.7677"
			}
		},
		"phone": "586.493.6943 x140",
		"website": "jacynthe.com",
		"company": {
			"name": "Abernathy Group",
			"catchPhrase": "Implemented secondary concept",
			"bs": "e-enable extensible e-tailers"
		}
	},
	{
		"id": 9,
		"name": "Glenna Reichert",
		"username": "Delphine",
		"email": "Chaim_McDermott@dana.io",
		"address": {
			"street": "Dayna Park",
			"suite": "Suite 449",
			"city": "Bartholomebury",
			"zipcode": "76495-3109",
			"geo": {
				"lat": "24.6463",
				"lng": "-168.8889"
			}
		},
		"phone": "(775)976-6794 x41206",
		"website": "conrad.com",
		"company": {
			"name": "Yost and Sons",
			"catchPhrase": "Switchable contextually-based project",
			"bs": "aggregate real-time technologies"
		}
	},
	{
		"id": 10,
		"name": "Clementina DuBuque",
		"username": "Moriah.Stanton",
		"email": "Rey.Padberg@karina.biz",
		"address": {
			"street": "Kattie Turnpike",
			"suite": "Suite 198",
			"city": "Lebsackbury",
			"zipcode": "31428-2261",
			"geo": {
				"lat": "-38.2386",
				"lng": "57.2232"
			}
		},
		"phone": "024-648-3804",
		"website": "ambrose.net",
		"company": {
			"name": "Hoeger LLC",
			"catchPhrase": "Centralized empowering task-force",
			"bs": "target end-to-end models"
		}
	}
]

// function to fetch data from API
async function fetchUsers() {
	try {
		// const response = await fetch(apiUrl);
		// if (!response.ok) {
		// 	throw new Error("Network response was not ok");
		// }

		// parse the JSON data
		// const data = await response.json();

		renderUsers(data);
	} catch (error) {
		console.log("There was a problem with the fetch operation:", error);
	}
}

// Function to render the users dynamically in the HTML
function renderUsers(users) {
	const container = document.getElementById("card-container");
	container.innerHTML = "";

	// loop through each user and create profile card
	users.forEach((user) => {
		const fakerImage = faker.image.avatar();
		const card = document.createElement("div");
		card.className = "custom-card";
		card.innerHTML = `
		<div class="card">
			<img src="${fakerImage}" class="card-img-top image">
			<div class="main-info">
				<p class="name">${user.name}</p>
    		<p class="user-name">@${user.username}</p>
				<p class="catchPhrase">${user.company.catchPhrase}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="/public/icons/email.png" alt="${user.email}">
				<p>${user.email}</p>
			</div>
			<div class="personal-info address">
				<img class="icon" src="/public/icons/address.png" alt="${user.address.street}">
				<p>
					<span>${user.address.street}, ${user.address.suite},</span><br>
					<span>${user.address.city} ${user.address.zipcode},</span><br>
					<span>${user.address.geo.lat}, ${user.address.geo.lng}</span>
				</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="/public/icons/phone.png" alt="${user.phone}">
				<p>${user.phone}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="/public/icons/website.png" alt="${user.website}">
				<p>${user.website}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="/public/icons/company-name.png" alt="${user.company.name}">
				<p>${user.company.name}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="/public/icons/company-bs.png" alt="${user.company.bs}">
				<p>${user.company.bs}</p>
			</div>
			<div>
		<div>
    `;

		container.appendChild(card);
	});
}

window.onload = fetchUsers;
