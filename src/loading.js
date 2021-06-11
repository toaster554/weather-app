function createLoadingElement() {
  let loadingElement = document.createElement('div');
  loadingElement.setAttribute('class', 'lds-roller');

  for (let i = 0; i < 8; i++) {
    loadingElement.appendChild(document.createElement('div'));
  }

  return loadingElement;
}

export default createLoadingElement;
