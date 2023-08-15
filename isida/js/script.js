let firstButton = document.querySelector(".third-page__first-button")
let secondButton = document.querySelector(".third-page__second-button")
let thirdButton = document.querySelector(".third-page__third-button")

let clubCardName = document.querySelector("#club_card_name")
let clubCardImg = document.querySelector("#club_img")
let clubCardGroup = document.querySelector("#club_card_group")
let clubCardPersonal = document.querySelector("#club_card_personal")

let yogaCardName = document.querySelector("#yoga_card_name")
let yogaCardImg = document.querySelector("#yoga_img")
let yogaCardGroup = document.querySelector("#yoga_card_group")
let yogaCardPersonal = document.querySelector("#yoga_card_personal")

let fitnessCardName = document.querySelector("#fitness_card_name")
let fitnessCardImg = document.querySelector("#fitness_img")
let fitnessCardGroup = document.querySelector("#fitness_card_group")
let fitnessCardPersonal = document.querySelector("#fitness_card_personal")

/*---Первая кнопка------------------------------------------------------------------------*/

firstButton.addEventListener('click', () => {
	firstButton.style.background = 'rgb(0, 13 ,8)'

	// /*---Детский клуб---------------*/

	// clubCardName.style.background = "rgba(255, 255, 255, 0.50)";
	// clubCardName.style.color = "rgba(0, 0, 0, 0.50)";

	// clubCardGroup.style.color = "rgba(138, 138, 150, 0.50)";
	// clubCardGroup.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	// clubCardPersonal.style.color = "rgba(138, 138, 150, 0.50)";
	// clubCardPersonal.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	// clubCardImg.src = "../img/jpg/grid/club_blur.jpg";

	// /*---Йога---------------*/

	// yogaCardName.style.background = "rgba(255, 255, 255, 0.50)";
	// yogaCardName.style.color = "rgba(0, 0, 0, 0.50)";
	
	// yogaCardGroup.style.color = "rgba(138, 138, 150, 0.50)";
	// yogaCardGroup.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";
	
	// yogaCardPersonal.style.color = "rgba(138, 138, 150, 0.50)";
	// yogaCardPersonal.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";
	
	// yogaCardImg.src = "../img/jpg/grid/yoga_blur.jpg";
	
	// /*---Фитнес------------*/
	
	// fitnessCardName.style.background = "rgba(255, 255, 255, 0.50)";
	// fitnessCardName.style.color = "rgba(0, 0, 0, 0.50)";
	
	// fitnessCardGroup.style.color = "rgba(138, 138, 150, 0.50)";
	// fitnessCardGroup.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";
	
	// fitnessCardPersonal.style.color = "rgba(138, 138, 150, 0.50)";
	// fitnessCardPersonal.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";
	
	// fitnessCardImg.src = "../img/jpg/grid/fitness_blur.jpg";
})

document.addEventListener('click', (event) => {
	if (!firstButton.contains(event.target)) {
		firstButton.style.backgroundColor = '#E3E3E3';

		// /*---Детский клуб---------------*/

		// clubCardName.style.background = "rgba(255, 255, 255, 0.96)";
		// clubCardName.style.color = "#000";

		// clubCardGroup.style.color = "#000";
		// clubCardGroup.style.background = "url('../img/svg/yellow_circle.svg') left no-repeat";

		// clubCardPersonal.style.color = "#000";
		// clubCardPersonal.style.background = "url('../img/svg/pink_circle.svg') left no-repeat";

		// clubCardImg.src = "../img/jpg/grid/club.jpg";

		// /*---Йога---------------*/

		// yogaCardName.style.background = "rgba(255, 255, 255, 0.96)";
		// yogaCardName.style.color = "#000";
		
		// yogaCardGroup.style.color = "#000";
		// yogaCardGroup.style.background = "url('../img/svg/yellow_circle.svg') left no-repeat";
		
		// yogaCardPersonal.style.color = "#000";
		// yogaCardPersonal.style.background = "url('../img/svg/pink_circle.svg') left no-repeat";
		
		// yogaCardImg.src = "../img/jpg/grid/yoga.jpg";
		
		// /*---Фитнес------------*/
		
		// fitnessCardName.style.background = "rgba(255, 255, 255, 0.96)";
		// fitnessCardName.style.color = "#000";
		
		// fitnessCardGroup.style.color = "#000";
		// fitnessCardGroup.style.background = "url('../img/svg/yellow_circle.svg') left no-repeat";
		
		// fitnessCardPersonal.style.color = "#000";
		// fitnessCardPersonal.style.background = "url('../img/svg/pink_circle.svg') left no-repeat";
		
		// fitnessCardImg.src = "../img/jpg/grid/fitness.jpg";
	}
});

/*---Вторая кнопка------------------------------------------------------------------------*/

secondButton.addEventListener('click', () => {
	secondButton.style.background = 'rgb(0, 13 ,8)'

	/*---Детский клуб---------------*/

	clubCardName.style.background = "rgba(255, 255, 255, 0.50)";
	clubCardName.style.color = "rgba(0, 0, 0, 0.50)";

	clubCardGroup.style.color = "rgba(138, 138, 150, 0.50)";
	clubCardGroup.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	clubCardPersonal.style.color = "rgba(138, 138, 150, 0.50)";
	clubCardPersonal.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	clubCardImg.src = "../img/jpg/grid/club_blur.jpg";
})

document.addEventListener('click', (event) => {
	if (!secondButton.contains(event.target)) {
		secondButton.style.backgroundColor = '#E3E3E3';

		/*---Детский клуб---------------*/

		clubCardName.style.background = "rgba(255, 255, 255, 0.96)";
		clubCardName.style.color = "#000";

		clubCardGroup.style.color = "#000";
		clubCardGroup.style.background = "url('../img/svg/yellow_circle.svg') left no-repeat";

		clubCardPersonal.style.color = "#000";
		clubCardPersonal.style.background = "url('../img/svg/pink_circle.svg') left no-repeat";

		clubCardImg.src = "../img/jpg/grid/club.jpg";
	}
});

/*---Третья кнопка------------------------------------------------------------------------*/

thirdButton.addEventListener('click', () => {

	thirdButton.style.background = 'rgb(0, 13 ,8)'

	/*---Йога---------------*/

	yogaCardName.style.background = "rgba(255, 255, 255, 0.50)";
	yogaCardName.style.color = "rgba(0, 0, 0, 0.50)";

	yogaCardGroup.style.color = "rgba(138, 138, 150, 0.50)";
	yogaCardGroup.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	yogaCardPersonal.style.color = "rgba(138, 138, 150, 0.50)";
	yogaCardPersonal.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	yogaCardImg.src = "../img/jpg/grid/yoga_blur.jpg";

	/*---Фитнес------------*/

	fitnessCardName.style.background = "rgba(255, 255, 255, 0.50)";
	fitnessCardName.style.color = "rgba(0, 0, 0, 0.50)";

	fitnessCardGroup.style.color = "rgba(138, 138, 150, 0.50)";
	fitnessCardGroup.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	fitnessCardPersonal.style.color = "rgba(138, 138, 150, 0.50)";
	fitnessCardPersonal.style.background = "url('../img/svg/gray_circle.svg') left no-repeat";

	fitnessCardImg.src = "../img/jpg/grid/fitness_blur.jpg";
})

document.addEventListener('click', (event) => {
	if (!thirdButton.contains(event.target)) {
		thirdButton.style.backgroundColor = '#E3E3E3';

		/*---Йога---------------*/

		yogaCardName.style.background = "rgba(255, 255, 255, 0.96)";
		yogaCardName.style.color = "#000";

		yogaCardGroup.style.color = "#000";
		yogaCardGroup.style.background = "url('../img/svg/yellow_circle.svg') left no-repeat";

		yogaCardPersonal.style.color = "#000";
		yogaCardPersonal.style.background = "url('../img/svg/pink_circle.svg') left no-repeat";

		yogaCardImg.src = "../img/jpg/grid/yoga.jpg";

		/*---Фитнес------------*/

		fitnessCardName.style.background = "rgba(255, 255, 255, 0.96)";
		fitnessCardName.style.color = "#000";

		fitnessCardGroup.style.color = "#000";
		fitnessCardGroup.style.background = "url('../img/svg/yellow_circle.svg') left no-repeat";

		fitnessCardPersonal.style.color = "#000";
		fitnessCardPersonal.style.background = "url('../img/svg/pink_circle.svg') left no-repeat";

		fitnessCardImg.src = "../img/jpg/grid/fitness.jpg";
	}
});