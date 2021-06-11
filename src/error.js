function createError(errorMessage) {
  let errorElement = document.createElement('h1');
  errorElement.setAttribute('class', 'error');

  errorElement.innerText = errorMessage;

  return errorElement;
}

export default createError;
