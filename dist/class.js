"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citizen = exports.Incentive = exports.Startup = void 0;
//CLASSES
class Startup {
    constructor(name, sector, description, products, services) {
        this.name = name;
        this.sector = sector;
        this.description = description;
        this.products = products;
        this.services = services;
    }
    receiveIncentive(incentive) {
        console.log(`The Startup ${this.name}, which operates in the ${this.sector} sector, offers the following products: ${this.products} and services: ${this.services} receives: €${incentive.incentiveValue}`);
    }
}
exports.Startup = Startup;
class Incentive {
    constructor(idCode, description, incentiveValue, eligibilityCriteria) {
        this.idCode = idCode;
        this.description = description;
        this.incentiveValue = incentiveValue;
        this.eligibilityCriteria = eligibilityCriteria;
    }
    assignToStartup(startup) {
        console.log(`The incentive for ${this.description} worth €${this.incentiveValue} has been assigned to ${startup.name}, which meets the following criteria: ${this.eligibilityCriteria}`);
    }
}
exports.Incentive = Incentive;
class Citizen {
    constructor(firstName, lastName, age, sportsInterests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }
    participateInActivity(startup) {
        console.log(`${this.firstName} ${this.lastName} participates in the activities promoted by the Startup ${startup.name}`);
    }
}
exports.Citizen = Citizen;
