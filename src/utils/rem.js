(function (doc, win) {
  const docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth < 750) {
      docEl.style.fontSize = 200 * (clientWidth / 750) + 'px'
      // document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 * 26.66 + 'px'
    } else {
      docEl.style.fontSize = 200 + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
