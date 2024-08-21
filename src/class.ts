import { IStartup, IIncentive, ICitizen} from "./interface";

//CLASSES
export class Startup implements IStartup {
    name: string;
    sector: string;
    description: string;
    products: string[];
    services: string[];

    constructor(name: string, sector: string, description: string, products: string[], services: string[]) {
        this.name = name;
        this.sector = sector;
        this.description = description;
        this.products = products;
        this.services = services;
    }

    receiveIncentive(incentive: IIncentive): void {
        console.log(`The Startup ${this.name}, which operates in the ${this.sector} sector, offers the following products: ${this.products} and services: ${this.services} receives: €${incentive.incentiveValue}`);
    }
}

export class Incentive implements IIncentive {

    idCode: string;
    description: string;
    incentiveValue: number;
    eligibilityCriteria: string[];

    constructor(idCode: string, description: string, incentiveValue: number, eligibilityCriteria: string[]) {
        this.idCode = idCode;
        this.description = description;
        this.incentiveValue = incentiveValue;
        this.eligibilityCriteria = eligibilityCriteria;
    }

    assignToStartup(startup: IStartup): void {
        console.log(
            `The incentive for ${this.description} worth €${this.incentiveValue} has been assigned to ${startup.name}, which meets the following criteria: ${this.eligibilityCriteria}`
        );
    }
}

export class Citizen implements ICitizen {

    firstName: string;
    lastName: string;
    age: number;
    sportsInterests: string[];

    constructor(firstName: string, lastName: string, age: number, sportsInterests: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }

    participateInActivity(startup: IStartup): void {
        console.log(`${this.firstName} ${this.lastName} participates in the activities promoted by the Startup ${startup.name}`);
    }
}