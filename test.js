var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    let currentValue = parseInt(mutation.target.getAttribute('data-count'))
    el = $(mutation.target)

    el.removeClass('red')
    el.removeClass('green')

    if (currentValue > 2) {
      el.addClass('green')
    } else if (currentValue < -2) {
      el.addClass('red')
    }
  })
})

$(document).ready(function () {
  $('.watch').each(function () {
    mutationObserver.observe(this, {
      attributeFilter: ['data-count'],
      attributes: true,
    })
  })
})

function incrementDataCount (id) {
  let currentValue = parseInt(document.querySelector(id).getAttribute('data-count'))
  document.querySelector(id).setAttribute('data-count', currentValue + 1)
}

function decrementDataCount (id) {
  let currentValue = parseInt(document.querySelector(id).getAttribute('data-count'))
  document.querySelector(id).setAttribute('data-count', currentValue - 1)
}

function jIncrementDataCount (id) {
  let currentValue = parseInt($(id).attr('data-count'))
  $(id).attr('data-count', currentValue + 1)
}

function jDecrementDataCount (id) {
  let currentValue = parseInt($(id).attr('data-count'))
  $(id).attr('data-count', currentValue - 1)
}

function setSpanValue(spanId, dataHolderId) {
  let currentValue = parseInt($(id).attr('data-count'))
  $(spanId).text(currentValue)
}
