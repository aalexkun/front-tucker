
export type AgendaStateType = AgendaStateLoading | AgendaStateError | AgendaStateReady ;



export interface AgendaStateLoading {
  is: 'AgendaStateInit' | 'AgendaStateLoading'
}

export interface AgendaStateError {
  is: 'AgendaStateError'
  error: string;
}

export interface AgendaStateReady {
  is: 'AgendaStateReady'
  week: string
  items: AgendaItem[];
}


export interface AgendaItem {
  class: ClassDetails;
  status: string;
}

export interface ClassDetails {
  name: string;
  day: string;
  time: string;
  date: string;
}
