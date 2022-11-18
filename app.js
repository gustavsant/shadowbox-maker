const box = document.querySelector('.box')
const inputs = document.querySelectorAll('.opt')

inputs.forEach((each) => {
  each.addEventListener('change', () => {
    const hoff = document.querySelector('.hoffset').value
    const voff = document.querySelector('.voffset').value
    const blur = document.querySelector('.blur').value
    const spread = document.querySelector('.spread').value
    console.log(hoff)
    box.style.boxShadow = `${hoff}px ${voff}px ${blur}px ${spread}px black`
  })
})
