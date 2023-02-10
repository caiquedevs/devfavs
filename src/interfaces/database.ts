export interface ISites {
  url: string;
  data: string;
  icon?: string;
  name: string;
}

export interface IDatabase {
  title: string;
  icon?: string;
  sites: ISites[];
}

export default IDatabase;
