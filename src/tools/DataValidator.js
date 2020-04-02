import { Patterns } from '../utils/Values/Patterns'

/**
 * Check if a value is a number and also greater than 0
 */
export function isValidPositiveInt (number) {
  return new RegExp(Patterns.number.pattern).test(number)
}

/**
 * Check if a value is a valid id
 */
export function isValidID (id) {
  return new RegExp(Patterns.numberId.pattern).test(id)
}

/**
 * Check if the received text is valid
 */
export function isValidText (text) {
  return new RegExp(Patterns.text.pattern).test(text)
}

/**
 * Check if the received phone is valid
 */
export function isValidPhone (phone) {
  return new RegExp(Patterns.phone.pattern).test(phone)
}

/**
 * Check if the received email is valid
 */
export function isValidEmail (email) {
  return new RegExp(Patterns.email.pattern).test(email)
}

/**
 * Check if the received text is valid alphanumeric string
 */
export function isValidAlphanumeric (text) {
  return new RegExp(Patterns.alphanumeric.pattern).test(text)
}
