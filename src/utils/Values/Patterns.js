export const Patterns = {
  email: {
    pattern: '^[\\w-\\.]+@(([\\w-])+\\.)+[\\w-]{2,3}$',
    errorMessage: 'Invalid email, ex: example@example.com'
  },
  text: {
    pattern: '^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$',
    errorMessage: 'Only letters allowed'
  },
  phone: {
    pattern: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$',
    errorMessage: 'Invalid phone number'
  },
  number: {
    pattern: '^([0-9]|[1-9]([0-9])*)$',
    errorMessage: 'Invalid number'
  },
  numberId: {
    pattern: '^[0-9]*$',
    errorMessage: 'Invalid number'
  },
  alphanumeric: {
    pattern: '^[a-zA-Z0-9]*$',
    errorMessage: 'Only letters and numbers allowed'
  }
}
