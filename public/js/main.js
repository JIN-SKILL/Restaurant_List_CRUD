// listen restaurant delete btn
document.querySelector('body').addEventListener('click', e => {
  if(e.target.matches('.btn-delete')) {
    const id = e.target.dataset.id
    document.delete_form.action = `/restaurant/${id}?_method=DELETE`
  }
})
