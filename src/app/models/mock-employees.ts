import {Employee} from './employee';


export const JOB_TITLES = [
    {value: 'All Employees', viewValue: 'All Employees'},
    {value: 'Designer', viewValue: 'Designer'},
    {value: 'Writer', viewValue: 'Writer'},
    {value: 'Developer', viewValue: 'Developer'},
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Business Development', viewValue: 'Business Development'},
    {value: 'Content', viewValue: 'Content'}
];


export const EMPLOYEES: Employee[] = [
    {
        img: 'https://randomuser.me/api/portraits/med/women/43.jpg',
        name: 'Antonia Soto',
        title: 'Designer',
        status: 'Active'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/men/61.jpg',
        name: 'Leevi Lampinen',
        title: 'Writer',
        status: 'Active'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/women/35.jpg',
        name: 'Esther Stephens',
        title: 'Developer',
        status: 'Active'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/men/61.jpg',
        name: 'Umut Karabulut',
        title: 'Admin',
        status: 'Active'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/men/84.jpg',
        name: 'Diamantino Novaes',
        title: 'Designer',
        status: 'Active'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/women/73.jpg',
        name: 'Vladislava Nunes',
        title: 'Business Development',
        status: 'Active'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/men/4.jpg',
        name: 'Sohan Joly',
        title: 'Developer',
        status: 'Resigned'
    },
    {
        img: 'https://randomuser.me/api/portraits/med/men/33.jpg',
        name: 'Otto Nikula',
        title: 'Content',
        status: 'Terminated'
    }
];

