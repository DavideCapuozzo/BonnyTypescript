//INTERFACES
export interface IStartup {
    name: string;
    sector: string;
    description: string;
    products: string[];
    services: string[];
    receiveIncentive(incentive: IIncentive): void;
}

export interface IIncentive {
    idCode: any;
    description: string;
    incentiveValue: number;
    eligibilityCriteria: string[];
    assignToStartup(startup: IStartup): void;
}

export interface ICitizen {
    firstName: string;
    lastName: string;
    age: number;
    sportsInterests: string[];
    participateInActivity(startup: IStartup): void;
}