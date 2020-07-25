/**
 * Automatically binds the `this` of the functions in an object to that object,
 * which allows using class methods in a pointfree manner
 */
export function autobind(obj: object) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "function") {
      // @ts-expect-error
      obj[key] = value.bind(obj)
    }
  }
}