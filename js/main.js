
var movies = [
			{
				name: "Iron Man (2008)",
				img: "https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg"
			},
			{
				name: "The Incredible Hulk (2008)",
				img: "https://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg"
			},
			{
				name: "Iron Man 2 (2010)",
				img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg"
			},
			{
				name: "Thor (2011)",
				img: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg"
			},
			{
				name: "Captain America: The First Avenger (2011)",
				img: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg"
			},
			{
				name: "The Avengers (2012)",
				img: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
			},
			{
				name: "Iron Man 3 (2013)",
				img: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg"
			},
			{
				name: "Thor: The Dark World (2013)",
				img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg"
			},
			{
				name: "Captain America: The Winter Soldier (2014)",
				img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg"
			},
			{
				name: "Guardians of the Galaxy (2014)",
				img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Guardians_of_the_Galaxy_poster.jpg"
			},
			{
				name: "Avengers: Age of Ultron (2015)",
				img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
			},
			{
				name: "Ant-Man (2015)",
				img: "https://upload.wikimedia.org/wikipedia/en/7/75/Ant-Man_poster.jpg"
			},
			{
				name: "Captain America: Civil War (2016)",
				img: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg"
			},
			{
				name: "Doctor Strange (2016)",
				img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg"
			},
			{
				name: "Guardians of the Galaxy Vol. 2 (2017)",
				img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Guardians_of_the_Galaxy_Vol_2_poster.jpg/220px-Guardians_of_the_Galaxy_Vol_2_poster.jpg"
			},
			{
				name: "Spider-Man: Homecoming (2017)",
				img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg"
			},
			{
				name: "Thor: Ragnarok (2017)",
				img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg"
			},
			{
				name: "Black Panther (2018)",
				img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg"
			},
			{
				name: "Avengers: Infinity War (2018)",
				img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
			},
			{
				name: "Ant-Man and the Wasp (2018)",
				img: "https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg"
			},
			{
				name: "Captain Marvel (2019)",
				img: "https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg"
			},
			{
				name: "Avengers: Endgame (2019)",
				img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
			},
			{
				name: "Spider-Man: Far From Home (2019)",
				img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
			}
			];


var paragraf = document.createElement("p");
// header 

function header(){
	document.querySelector("header").style.backgroundImage =  "url(https://media.comicbook.com/2018/02/marvel-studios-first-10-years-banner-1081327.jpeg)";
}

header();

// main

// input
function magnifyingGlassImg() {
	var input = document.querySelector("#myInput");
	input.style.backgroundImage = "url(https://icon-library.com/images/search-icon-transparent-background/search-icon-transparent-background-9.jpg)";
}
magnifyingGlassImg();

// input
function inputField() {
	var input = document.querySelector("input");

	input.onclick = function(){
		input.placeholder = "";
		input.style.backgroundColor = "#0000ff38";
	}

	input.onmouseover = function(){
		input.style.borderColor = "orangered";
	}

	input.onmouseout = function(){
		input.style.borderColor = "grey";
	}
}

inputField();

// background on main
function imgMain(){
	document.querySelector("main").style.backgroundImage =  "url(https://freepngimg.com/thumb/avengers/24571-8-avengers-transparent-image.png)";
}
imgMain();



function madeLi(data) {
	for(var i = 0; i < data.length; i++){
		var li = document.createElement("li");
	document.querySelector("#list ul").prepend(li);
	li.setAttribute("class", "lists");

	var paragraf = document.createElement("p");
	paragraf.innerText += data[i].name;
	document.querySelector("li").append(paragraf);

	var img = document.createElement("img");
	img.setAttribute("src", data[i].img);
	document.querySelector("li").prepend(img);
	}
	
}
madeLi(movies);



function filterSearch(){
 
  var input = document.getElementById('myInput');
  input.style.color = "#ff4500";
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("lists_of_movie");
  var li = ul.getElementsByTagName('p');

  for (var i = 0; i < li.length; i++) {

	    var p = li[i];
	    var txtValue = p.textContent || p.innerText;

		    if (txtValue.toUpperCase().indexOf(filter) > -1) {

		      li[i].parentElement.style.display = "block";

		    } else {

		      li[i].parentElement.style.display = "none";
		    }
    }

}

/////// bonus: Add remove icon to each movie. When icon is clicked, movie should be removed from the list

function makeButton() {
	var li = document.getElementsByTagName("li");
	
	for(var i = 0; i < li.length; i++){
		
		var button = document.createElement("button");
		button.setAttribute("class", "butt");

		var removeImg = document.createElement("img");
		removeImg.setAttribute("src","https://icons-for-free.com/iconfiles/png/512/cercle+close+delete+dismiss+remove+icon-1320196712448219692.png");
		
		button.prepend(removeImg);
		li[i].prepend(button);
		
	}
}
makeButton();
	
	

	function removeMovie() {

		var button = document.querySelectorAll("button");
		
		movies.forEach(function(e,index){
			button[index].addEventListener("click", function(){
			button[index].parentElement.remove();
		})
		})
		
	}

removeMovie();



// footer 
function footer(){

	paragraf.innerHTML = "&copy; Copyright 2021, All Rights Reserved. Designed by <b>Stojanovic Marko</b>." + "<br>" + "&#128526";
	document.querySelector("footer").prepend(paragraf);
}

footer();