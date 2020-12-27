export const FIELDS = [
  {
    type: 'text',
    name: 'name',
  },
  {
    type: 'email',
    name: 'email',
  },
  {
    type: 'password',
    name: 'password',
  },
  {
    type: 'password',
    name: 'passwordConfirmation',
  },
];

export interface Fields {
  [index: string]: string;
}
