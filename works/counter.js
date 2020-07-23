let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count

  const reset = () => {
  countElement.innerText = '回数: ' + 0
  }
}