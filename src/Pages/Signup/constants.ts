export const FIELDS = [
  { id: 1, type: 'text', name: 'name' },
  {
    id: 2,
    type: 'email',
    name: 'email',
  },
  { id: 3, type: 'password', name: 'password' },
  { id: 4, type: 'password', name: 'passwordConfirmation' },
];

export interface Fields {
  [index: string]: string;
}
