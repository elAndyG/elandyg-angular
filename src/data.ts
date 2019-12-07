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
      'Leading a team of 5 in delivering digital workplace-safety media while designing a clean and easy to maintain code-base and development infrastructure.',
    technologies: 'Angular 8, .Net Core, Sql Server, Azure'
  },
  {
    company: 'Insurity',
    title: 'Senior Software Engineer, Technical Lead',
    description:
      // tslint:disable-next-line: max-line-length
      'Wearing many hats such as a senior level engineer, scrum master and technical lead, my role as a change-agent saw the introduction of test-driven development, continuous integration strategies and agile practices to help developers support numerous Fortune 500 companies.',
    timeSpan: '2014 - 2018',
    technologies: 'Angular 5, .Net Core, .Net, Sql Server'
  },
  {
    company: 'Wolters Kluwer, formerly Tymetrix',
    title: 'Software Engineer II',
    description:
      // tslint:disable-next-line: max-line-length
      'During my time as an engineer, I focused on developer efficiency, quality and automation. I then closed out my tenure by implementing additional user security to the flagship product.',
    timeSpan: 'Aug 2012 - Feb 2014',
    technologies: '.Net, Sql Server, RSA, mustache.js, jQuery, MVC, TCP'
  },
  {
    company: 'Origin Healthcare Solutions',
    title: 'Software Developer (Junior to Senior)',
    description:
      // tslint:disable-next-line: max-line-length
      'Growing from a junior to a senior in my 7 years, I helped create an amazing EMR for medical groups and hospitals across the US while building my skills in desktop and database development.',
    timeSpan: 'Apr 2005 - Jul 2012',
    technologies: 'VB.Net, SQL Server, Infragistics, WCF, MVC, WinForms'
  },
  {
    company: 'Healthcare IQ',
    title: 'Junior .Net Developer',
    description:
      // tslint:disable-next-line: max-line-length
      'Created data entry systems for medical coders to have data scrubbed for errors legal violations prior to submission to insurance companies. Created an Electronic Medical Record system to help doctors store and regulate their data.',
    timeSpan: 'Jan 2001 - Apr 2005',
    technologies: 'VB.Net, SQL Server, Infragistics'
  }
];

export const skillsIKnow = [
  { skill: 'angular' },
  { skill: 'csharp' },
  { skill: 'css' },
  { skill: 'git' },
  { skill: 'html' },
  { skill: 'js' },
  { skill: 'karma' },
  { skill: 'markdown' },
  { skill: 'nodemon' },
  { skill: 'powershell' },
  { skill: 'scss' },
  { skill: 'sql' },
  { skill: 'swagger' },
  { skill: 'tfs' },
  { skill: 'travis' },
  { skill: 'typescript' },
  { skill: 'vscode' },
  { skill: 'visual-tudios' },
  { skill: 'yarn' }
];

export const skillsIveTried = [
  { skill: 'babel' },
  { skill: 'cypress' },
  { skill: 'docker' },
  { skill: 'ember' },
  { skill: 'jest' },
  { skill: 'node' },
  { skill: 'python' },
  { skill: 'storybook' },
  { skill: 'vue' },
  { skill: 'webpack' },
  { skill: 'yaml' }
];
