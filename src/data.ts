export interface Experience {
  company: string;
  title: string;
  timeSpan: string;
  description: string;
  technologies: string;
}
export const experiences: Experience[] = [
  {
    company: 'The Marlin Company',
    title: 'Principal Software Engineer',
    timeSpan: 'May 2018 - Present',
    description:
      // tslint:disable-next-line:max-line-length
      'Rebuilt Marlin\'s flagship content player to dynamically display videos, images, html, twitter feeds and more from any location. Led the team in building a content manager for creating, editing and scheduling content.',
    technologies: 'Angular 8, .Net Core, Sql Server'
  },
  {
    company: 'Insurity',
    title: 'Senior Software Engineer, Technical Lead',
    description:
      // tslint:disable-next-line: max-line-length
      'Led a small team in building an internal code editor along with simplified workflows for on-boarding new clients and managing bulk actions. Engineered a ground up rebuild of an internal Rules Based Engine. Doubled as a Scrum Master. Ran code camps for the developer community to train TDD, OOP, SOLID principles and coding patterns.',
    timeSpan: '2014 - 2018',
    technologies: 'Angular 5, .Net Core, .Net, Sql Server'
  },
  {
    company: 'Wolters Kluwer, formerly Tymetrix',
    title: 'Software Engineer II',
    description:
      // tslint:disable-next-line: max-line-length
      ' Engineered code scaffolding for ramping up new projects including automatic updates for Account Administrators using a custom built dashboard. Enhanced security of the flagship product using RSA 2FA.',
    timeSpan: 'Aug 2012 - Feb 2014',
    technologies: '.Net, Sql Server, RSA, mustache.js, jQuery'
  },
  {
    company: 'Origin Healthcare Solutions',
    title: 'Software Developer (Junior to Senior)',
    description:
      // tslint:disable-next-line: max-line-length
      'Engineered a full service E-Prescribing system to communicate with pharmacies across the united states. Interfaced with a 3rd party Patient Portal to automate mapping of user inputs to practice charts. Created a notification suite to proactively alert support of issues within a client\'s solution.',
    timeSpan: 'Apr 2005 - Jul 2012',
    technologies: ''
  },
  {
    company: 'Healthcare IQ',
    title: 'Junior .Net Developer',
    description:
      // tslint:disable-next-line: max-line-length
      'Created data entry systems for medical coders to have data scrubbed for errors legal violations prior to submission to insurance companies. Created an Electronic Medical Record system to help doctors store and regulate their data.',
    timeSpan: 'Jan 2001 - Apr 2005',
    technologies: ''
  }
];
