async function onSelectedImageChanged(uri) {
  const img = await faceapi.fetchImage(uri)
  $(`#my_result`).get(0).src = img.src
  updateResults()
}

function renderImageSelectList(selectListId, onChange, initialValue) {
  let images = ['bbt1.jpg']
  function renderChildren(select) {
    images.forEach(imageName =>
      renderOption(
        select,
        imageName,
        imageName
      )
    )
  }
  renderSelectList(
    selectListId,
    onChange,
    initialValue,
    renderChildren
  )
}

function initImageSelectionControls(initialValue = 'bbt1.jpg') {
  renderImageSelectList(
    '#selectList',
    async (uri) => {
      await onSelectedImageChanged(uri)
    },
    initialValue
  )
  onSelectedImageChanged($('#selectList select').val())
}