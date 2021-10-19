import { isMock } from './config';

interface IProject {
  title: string;
  desc: string;
}

export interface IProjectObj {
  [id: string]: IProject;
}

const projectKey = 'EMAIL_PROJECT';

const mockData = {
  '1': {
    title: 'Project 1',
    desc: 'First project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '2': {
    title: 'Project 2',
    desc: 'Second project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '3': {
    title: 'Project 3',
    desc: 'Three project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '4': {
    title: 'Project 4',
    desc: 'Four project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '5': {
    title: 'Project 5',
    desc: 'Five project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '6': {
    title: 'Project 6',
    desc: 'Six project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '7': {
    title: 'Project 7',
    desc: 'Seven project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  },
  '8': {
    title: 'Project 28',
    desc: 'Eight project desc, this is long , this is long, this is long, this is long, this is long, this is long'
  }
};

export const getProjects = () => {
  if (isMock) return mockData;
  const data = localStorage.getItem(projectKey);
  if (!data) return [];
  return JSON.parse(data) as IProjectObj;
};

export const setProjects = (data: IProjectObj) => {
  localStorage.setItem(projectKey, JSON.stringify(data));
};
