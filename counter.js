export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Ele falou com: ${counter} garota(s).`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
