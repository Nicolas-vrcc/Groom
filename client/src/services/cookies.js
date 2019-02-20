function deleteCookie(name) {
  // Set expiration date in the past
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export { deleteCookie }