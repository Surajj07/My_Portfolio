export default {
	// bio: {
	// 	about: {
	// 		text: [
	// 			"Hi &#128075;",
	// 			"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
	// 			"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
	// 			"I love to read, listen to music, and travel.",
	// 		],
	// 	},
	// 	contact: {
	// 		text: [
	// 			"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
	// 		],
	// 	},
	// },
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Reactjs",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Chakra UI",
			color: "2",
			percentage: "50",
		},
		{
			title: "Clouds",
			skillName: "Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, CSS",
			color: "4",
			percentage: "80",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "80",
		},
		
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "85",
		},
	],
	projects: {
		web: [
			{
				projectName: "Sugar Cosmetics clone",
				image: "images/sugercosmetics.png",
				summary:
				"Sugar Cosmetics is an Indian company, a brand of choice for the women of today! Where they ensure you have a lot of fun with makeup. Tried to create a user friendly interface with proper functionality. ",
				preview: "https://github.com/Surajj07/sugarCosmetic.git",
				git:"https://github.com/Surajj07/sugarCosmetic.git",
				techStack: [
					"HTML",
					"CSS",
					"Bootstrap",
					"JavaScript",
					
				],
			},
			{
				projectName: "Deyga Clone",
				image: "images/Deyga.png",
				summary:
					"Deyga Organics is an Indian skincare brand. Mainly focused on homepage login/signUp, add to cart, and payment part."
					
					,
				preview: "https://loquacious-crostata-006178.netlify.app/",
				techStack: ["HTML","CSS", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Pharmeasy",
				image: "images/pharmeasy.png",
				summary:
					"PharmEasy is an online medicine delivery app, which also allows you to buy healthcare products, OTC products & medical equipment online. We did our best to show all pages properly and all functionality part properly.",
				preview: "https://relaxed-faloodeh-4bff55.netlify.app/",
				techStack: ["HTML", "CSS","Bootstrap", "JavaScript","ReactJs	"],
			},
			
		],
		
		
	},
	experience: [
		{
			title: "DVC Chandrapura Thermal Power Plant.",
			duration: "June 2019 - July 2019 ",
			subtitle: "Intern",
			details: [
				"Working of boiler.",
				"Working of Steam Generator.",
				"working of Turbine.",
				"Operation of Coal mill."
			],
			tags: [
				"Boiler",
				"Turbine",
				"Coal Mill",
				"Steam Generator",
				,
			],
			icon: "heartbeat",
		},
		{
			title: "Indo Danish Tool Room,Under Ministry Of MSME- Govt Of India Society ",
			duration: "May 2018",
			subtitle: "Intern",
			details: [
				"Working of CNC Milling Machine.",
				"Working of CNC Electrical Discharge Machine.",
				"Working of CNC Water Jet Machine.",
			],
			tags: [
			  "CNC"
			],
			icon: "qrcode",
		},
		
	],
	education: [
		{
			title: "Bachelors in Mechanical Engineering",
			duration: "",
			subtitle: "RVS College of Engineering & Technology,Jamshedpur",
			details: [
				"Secured 69.71% Overall semmesters.",
				"Palyed a role of Event Organizer in Cultural Fest at RVS College of Engineering, Jamshedpur.",
				"Played a role of Student Coordinator in Sports event at RVS College of Engineering, Jamshedpur.",
				"Played BasketBall and badminton."

			],
			tags: [
				"Strength of Material",
				"Thermodynamics",
				"Refrigeration",
				"DOM",
				"KOM",
				"Fluid Mechanics"
				
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "DAV Public School, Dugda",
			details: [
				
				"Secured 71% in Class 12th Boards Examinations.",
				"Played Judo at cluster level"
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				
				{
					text: "GitHub",
					link: "https://github.com/Surajj07",
				},
				
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/Surajj07/My_Portfolio",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/thakursurajbhansingh/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/surajrajput0713",
				},
				
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Thakur Suraj Bhan Singh."
				
			],
		},
	],
};
