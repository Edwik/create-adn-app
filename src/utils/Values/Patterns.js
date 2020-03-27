export const Patterns = {
  email: {
    pattern: '^[\\w-\\.]+@(([\\w-])+\\.)+[\\w-]{2,3}$',
    message: 'Invalid email, ex: example@example.com'
  },
  name: {
    pattern: '^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$',
    message: 'Only letters'
  },
  phone: {
    pattern: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$',
    message: 'Invalid phone'
  },
  number: {
    pattern: '^([0-9]|[1-9]([0-9])*)$',
    message: 'Invalid number'
  },
  numberId: {
    pattern: '^[0-9]*$',
    message: 'Invalid number'
  },
  alphanumeric: {
    pattern: '^[a-zA-Z0-9]*$',
    message: 'Only letters and numbers are allowed'
  }
}
