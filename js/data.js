import { faker } from 'https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm';

// Get user data using API
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// function to fetch data from API
let users;
async function fetchUsers() {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		// parse the JSON data
		users = await response.json();

		renderUsers(users);
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
		<div class="card card-element">
			<img class="image" src="${fakerImage}" class="card-img-top" alt="">
			<div class="main-info">
				<p class="name">${user.name}</p>
    		<p class="user-name">@${user.username}</p>
				<p class="catchPhrase">${user.company.catchPhrase}</p>
				<hr class="line-breaker" width="90%" />
			</div>
			<div class="personal-info">
				<img class="icon" src="public/icons/email.png" alt="${user.email}">
				<p>${user.email}</p>
			</div>
			<div class="personal-info address">
				<img class="icon" src="public/icons/address.png" alt="${user.address.street}">
				<p class="address-desktop">
					<span>${user.address.street}, ${user.address.suite},</span><br>
					<span>${user.address.city} ${user.address.zipcode},</span><br>
					<span>${user.address.geo.lat}, ${user.address.geo.lng}</span>
				</p>
				<p class="address-mobile">
					<span>${user.address.street}, ${user.address.suite}, ${user.address.city}</span><br>
					<span> ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}</span>
				</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="public/icons/phone.png" alt="${user.phone}">
				<p>${user.phone}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="public/icons/website.png" alt="${user.website}">
				<p>${user.website}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="public/icons/company-name.png" alt="${user.company.name}">
				<p>${user.company.name}</p>
			</div>
			<div class="personal-info">
				<img class="icon" src="public/icons/company-bs.png" alt="${user.company.bs}">
				<p>${user.company.bs}</p>
			</div>
			<div>
		<div>
    `;

		container.appendChild(card);
	});
}

// Detect if anyElement is shown
function areAnyElementsShown(elements) {
	return Array.from(elements).some(element => getComputedStyle(element).display === 'block');
}

// Implemnt automatic filter by search input
function filterItems() {
	const searchValue = document.getElementById('searchInput').value.toLowerCase();
	const users = document.querySelectorAll('.main-info .name');

	users.forEach(user => {
		const cardElement = user.closest('.custom-card');
		if (user.textContent.toLocaleLowerCase().includes(searchValue)) {
			cardElement.style.display = 'block';
		} else {
			cardElement.style.display = 'none';
		}
	});

	const elements = document.querySelectorAll('.custom-card');
	const anyElementsShown = areAnyElementsShown(elements);
	if (!anyElementsShown) {
		document.getElementById("noResult").style.display = "block";
	} else {
		document.getElementById("noResult").style.display = "none";
	}
}

// Listen search input field change and trigger function
document.getElementById('searchInput').addEventListener('input', filterItems);

window.onload = fetchUsers;
