export interface DataColumns {
  name: string;
  time: string;
  descrition: string;
  date: string;
}

export interface AppState {
  data: DataColumns[];
  signedIn: boolean;
}
