/*$("#main").append("Demissie Habtemariam");
//var awesomeThoughts="I am Demissie and I am AWESOME.";
//console.log(awesomeThoughts);
//var email="Demissie@udacity.com";
//var newemail=email.replace("udacity","gmail");
//console.log(email);
//console.log(newemail);
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

/*var bio = {
	"name": "Demissie Habtemariam",
	"role": "Front-end Web Developer"

/*	"contacts": {
		"mobile": "650-555-555",
		"email": "demissie@example.com",
		"github": "demhabt",
		"twitter": "@demhabt",
		"location": "Boston MA",
		},
	},
function displaybio(){
var formattedName= HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole= HTMLheaderRole.replace("%data%", bio.role;
$("#header").append(formattedRole);
var skills=["HTML5","CSS3", "JavaScript", "jQuery"];
var formattedSkills= HTMLskills.replace("%data%", skills);
$("#main").append(skills);
//	"welcomMessage": "lorem ipsum dolor sit amet etc",

//"bioPic": "images/fry.jpg"
//}*/
var bio = {
	"name" : "Demissie Habtemariam",
	"role" : "Front-end Web Developer",
/*	"contacts": {
		"mobile": "650-555-555",
		"email": "demissie@example.com",
		"github": "demhabt",
		"twitter": "@demhabt",
		"location": "Boston MA"
	},*/
//	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills":
		["HTML5", "CSS3", "JavaScript", "jQuery"
	],
	"bioPic": "images/fry.jpg"
};

$("#main").append(bio.bioPic);

//	)
/*function displaybio(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	//var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	//"bioPic": "images/fry.jpg"
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#topContacts").prepend(formattedBioPic);
}
displaybio();

//bio.city = "Mountain View";
//bio.email = "demissie@example.com"
//$("#main").append(bio.city);
//$("#main").append(bio.email);
//$("#main").append(bio.city);

//bio["city"] = "Mountain View";
//bio.email = "demissie@example.com"
//$("#main").append(bio.city);
//$("#main").append(bio.email);
//$("#main").append(bio["city"]);

/*var  work = {};
work.position = "Trade Processor";
work.employer = "Statestreet";
work.years = 10;
work.city= "Boston";

var education = {};
education["name"] = "Brandies University";
education["years"] = "2005-2013";
education["city"] = "Waltham MA";

$("#main").append(work["position"]);
$("#main").append(education.name);

/*var education = {
education["1stSchool"] = ["Brandies University"];
education["years"] = ["2005-2013"];
education["city"] = ["Waltham MA"];
};


//$("#main").append(work.position);
//$("#main").append(education["lastSchool"]);*/
var bio = {
  "name": "Demissie Habtemariam",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "650-555-555",
    "email": "demissie@example.com",
    "twitter": "@demhabt",
    "github": "demhabt",
    "blog": "demblog",
    "location": "Boston MA"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": [
    "HTML5", "CSS3", "JavaScript", "jQuery"
  ],
   // "bioPic": "images/fry.jpg"
   "bioPic": "images/my_picture.jpg"
}

function displaybio(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedBlog);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").append(formattedWelcomeMsg);
    $("#header").prepend(formattedBioPic);
}
displaybio()
    $(document).click(function(loc) {
      console.log(loc.pageX, loc.pageY);});


    /*
    ------------------------------------------------------------------------------------------------------------------------------------
/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append("Demissie Habtemariam");
var awesomeThoughts = "I am Demissie and I am AWESOME.";
console.log(awesomeThoughts);
var email = "Demissie@udacity.com";
var newemail = email.replace("udacity","gmail");
console.log(email);
console.log(newemail);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);

var name = "Demissie Habtemariam";
var	role = "Front-end Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
	$("#header").prepend(formattedName);
	$("#header").append(formattedRole);
*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);




/*var  work = {};
work.position = "Trade Processor";
work.employer = "Statestreet";
work.years = 10;
work.city= "Boston";

var education = {};
education["name"] = "Brandies University";
education["years"] = "2005-2013";
education["city"] = "Waltham MA";

$("#main").append(work["position"]);
$("#main").append(education.name);*/


}
if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill)
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill)
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
    $("#skills").append(formattedSkill);

/*var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
for (var i = 0; i < bio.skills.length; i++) {
	//console.log(bio.skills[i]);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}*/
}

var countries = ["Germany","Argentina","Brazil","Netherlands"]
for(country in countries){
    console.log(countries[country]);
//}

function displayWork(){
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
    $(".work-entry:last").append(formattedLocation);
  }
}

displayWork()

/*projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedimage);
    }
  }
}*/


   // $(".date-text").append(HTMLworkDates);
   // $(".location-text").append(HTMLworkLocation);

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

// return an array of location strings from locations in resumeB
/*function locationFinder() {
  var locations = [];

  locations.push(bio.contacts.location);

  for (var school in education.schools) {
    locations.push(education.schools[school].location);
  }

for (var job in work.jobs) {
  locations.push(work.jobs[job].location);
  }
  return locations;
}*/
  var  name = bio.name
  function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
      name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
  };

  $("#main").append(internationalizeButton);
