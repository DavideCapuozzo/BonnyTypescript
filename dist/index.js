"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
//STARTUP
const startup1 = new class_1.Startup('Veja', 'Sports footwear', 'Creation of shoes that combine design, ethics, and respect for the environment using ecological and fully sustainable materials', ['Sneakers', 'Socks'], ['Product origin information', 'Promotes ethical production practices']);
const startup2 = new class_1.Startup('Patagonia', 'Outdoor clothing and equipment', 'The company is known for its sustainability philosophy, promoting ethical production practices and the use of recycled materials.', ['Technical Clothing', 'Accessories'], ['Repair services', 'Second-hand resale', 'Environmental cleanup activities']);
//INCENTIVES
const incentive1 = new class_1.Incentive('Sustainable Production', 'Sustainable companies', 5000, ['Fully sustainable Startups', 'Startups with verified product origin']);
const incentive2 = new class_1.Incentive('Environmental Care', 'Startups that care for the planet', 7000, ['Startups involved in recycling', 'Startups dedicated to keeping the planet clean']);
//CITIZEN
const citizen1 = new class_1.Citizen('Luca', 'Mondo', 35, ['Running', 'Trekking']);
const citizen2 = new class_1.Citizen('Laura', 'Sani', 34, ['Climbing', 'Downhill']);
//ASSIGNMENTS
incentive1.assignToStartup(startup1);
incentive2.assignToStartup(startup2);
citizen1.participateInActivity(startup1);
citizen2.participateInActivity(startup2);
