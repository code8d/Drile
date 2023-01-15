const deal = document.querySelector('.deal-of-the-weak')

function correctParentHeight() {
    const substrate = deal.querySelector('.deal-substrate')
    const dealBlock = deal.querySelector('.deal-block')
    const imageSubstrate = deal.querySelector('.image-substrate')

    imageSubstrate.style.minHeight = `${substrate.clientHeight}px`
    dealBlock.style.minHeight = `${substrate.clientHeight}px`
}
correctParentHeight()