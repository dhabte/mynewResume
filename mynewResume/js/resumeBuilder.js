var bio = {
  "name": "Demissie Habtemariam",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "781-588-9082",
    "email": "rahel01@comcast.net",
    "twitter": "@demhabt",
    "github": "dhabte",
    "blog": "johnBlog",
    "location": "Boston MA"
  },
  "welcomeMessage": "Welcome to My Online Resume",
  "skills": [
    "HTML5", "CSS3", "JavaScript", "JSON", "jQuery", "Python", "Visual Basic", "MATLAB" , "RStudio", "github" , "AutoCad"
  ],
   "bioPic": "images/my_picture.jpg"
}

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedBlog);

    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    for (var i = 0; i < bio.skills.length; i++) {
    console.log(bio.skills[i]);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
 }
};
bio.display();

var education = {
  "schools": [
    {
      "name": "Addis Ababa Faculty of Technology",
      "location": "Addis Ababa, Ethiopia",
      "degree": "BSc",
      "majors": ["Mechanical Engineering", " Engineering Management"],
      "dates": "1971-1979",
      "url": "http://example.com"
    },
    {
      "name": "UNIDO, Metalurgy and Heavy Engineering",
      "location": "Prague, Czechoslovak",
      "degree": "Diploma",
      "majors":["Diesel Engineering"],
      "dates": "1981-1981",
      "url": "http://example.com"
    },
    {
      "name": "Brandais University",
      "location": "Waltham, MA USA",
      "degree": "on going",
      "majors": ["Finance", " Statistics"],
      "dates": "1911-1912",
      "url": "http://example.com"
    },
    {
      "name": "Northern Alberta Institute of Technology",
      "location": "Edmonton, AB Canada",
      "degree": "Diploma",
      "majors":["Automotive"],
      "dates": "1991-1992",
      "url": "http://example.com"
    },
    {
      "name": "Abbottsfield School of Computer Applications",
      "location": "Edmonton, AB Canada",
      "degree": "Diploma",
      "majors":["AutoCad"],
      "dates": "1990-1991",
      "url": "http://example.com"
    }
  ],

    "onlineCourses": [
    {
      "title": "JavaScript, jQuery, JSON",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
}

education.display = function() {
    for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedschoolMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    $(".education-entry:last").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    $(".education-entry:last").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedOnlineURL);
    }
  };
education.display();

var work = {
  "jobs": [
    {
      "employer": "State Street Corporation",
      "title": "Trade Analyst",
      "location": "Boston, MA USA",
      "dates": "June 2005 - Future",
      "description": "Senior Trade Processor - Process trades of different types according to State Street Practices. Process both DTC and International trades, Futures and Option trades, commercial papers, T- Bills and FX trades as per client instruction making sure that there are no errors and the divisional goal of zero losses is maintained by properly following client specific controls and work procedures. Respond to client requests on time and in a professional manner. Schedule tasks according to their priorities and make sure the paper work is efficintly organized. Participate in the design of work procedures."
    },

    {
      "employer": "Staffmark@Assurion",
      "title": "Quality Controller",
      "location": "Smyrna, TN USA",
      "dates": "2005-2005",
      "description": "Inspected various makes and models of handset phones according to ISO 9001 standard and exceeded the expected prodution rate and quality."
    },
    {
      "employer": "EquiServe Inc",
      "title": "Tax Reporting Analyst",
      "location": "Canton, MA USA",
      "dates": "2000-2003",
      "description": "Tax Reporting Analyst - Initiated tax projects for 1099DIV, 1099B, 1099INT, and 1042S for the production of tax forms and IRS tax return information tapes to be mailed on time to shareholders and IRS respectively. Designed tools with Excel spreadsheet for the calculation of tax allocation for STCG, LTCG, ROC and ROP. Analized and performed financial adjustment. Developed and implemented process improvement within the tax reporting department."
    },
    {
      "employer": "Central Parking System",
      "title": "Supervisor",
      "location": "Boston, MA USA",
      "dates": "1995-2003",
      "description": "Supervised the flow of work of the garage. Assigned work to employees and helped them attain efficient customer service skills and accurate cash and ticket handling capabilities. Checked for proper function of all garage equipment. Prepared daily report."
    },
    {
      "employer": "Edmonton Equipment and Utilities",
      "title": "Equipement Engineer",
      "location": "Edmonton, AB Canada",
      "dates": "1991-1992",
      "description": "Prepared equipment specifications, reviewed tenders, and wrote purchasing recommendations for different kinds of construction equipments."
    },
    {
      "employer": "Freight Transport Corporation",
      "title": "Engineeing Department Head",
      "location": "Addis Ababa, Ethiopia",
      "dates": "1979-1985",
      "description": "Engineeing Department Head - Designed maintenace system that helped reduce vehicle downtime and operation costs and increase vehicle life and labor productivity. Prepared technical specifications, tenders and wrote purchasing recommedations for vehicles and equipments. Developed vehicle and equipment PM schedule to reduce emergency breakdowns. Taught maths and physics to diesel mechanics trainees."
    }
  ]
}

work.display = function() {
for (job in work.jobs) {
  //create new div for work experiance
  $("#workExperience").append(HTMLworkStart);
//concatenate employer and title
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

work.display()

var projects = {
  "projects": [
    /*{
      "title": "Sample project 1",
      "dates": "2013",
      "description": "A digital design project, that focuses on Digital logic, sequential building blocks, finite-state machines, FPGAs, timing and synchronization for games, music, digital filters, wireless communications, video, and graphics.",
      "images": [
        " http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-111-introductory-digital-systems-laboratory-spring-2006/6-111s06.jpg",
        "http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-111-introductory-digital-systems-laboratory-spring-2006/6-111s06.jpg"
      ]
    },*/
    {
      "title": "Project",
      "dates": 1975,
      "description": "Design, production, and assembling of machines for the production of wind energy to pump underground water  to a city with a population of 20,000.",
      "images": [
        "http://energy.gov/sites/prod/files/styles/borealis_photo_thumb_respondsmall/public/ir_wind_how_turbine_works_2.jpg?itok=NHI1D67r",
        "http://energy.gov/sites/prod/files/styles/borealis_photo_thumb_respondsmall/public/ir_wind_how_turbine_works_2.jpg?itok=NHI1D67r"
      ]
    }
  ]
}

projects.display = function(){
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
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

$("#mapDiv").append(googleMap);

  function inName(name) {
  var  name = bio.name
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
};

  $("#main").append(internationalizeButton);

function locationizer(work_obj) {
  var locationArray = [];

  for (var job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;

}
  console.log(locationizer(work));

  //(document).click is a jQuery event handler, in this case when clicked on the page it gives the position of x & y in pixel.
/*$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});*/

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
}
console.log(locationFinder());*/
