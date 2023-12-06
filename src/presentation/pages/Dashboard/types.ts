export interface PageProps {}

export enum States {
  default = 'default',
  loading = 'loading',
  genericError = 'genericError',
  networkError = 'networkError',
}

export interface DashboardContainerProps {
  state?: States
}
