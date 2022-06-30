const reviewsText = document.querySelector('.reviews-text')
const block1 = document.querySelector('#block-1')
const block2 = document.querySelector('#block-2')
const block3 = document.querySelector('#block-3')

document.querySelector('#slide-one').addEventListener('click', () => {
    document.querySelector('#slide-one').className = 'active'
    document.querySelector('#slide-three',).className = 'inactive'
    document.querySelector('#slide-two',).className = 'inactive'
    document.querySelector('#slide-four').className = 'inactive'
    block1.className = 'reviews-block-1 block-in-shadow'
    block3.className = 'reviews-block-3 block-in-shadow'
    block2.className = 'reviews-block-2 current'
    reviewsText.appendChild(block1)
    reviewsText.appendChild(block3)
    reviewsText.appendChild(block2)
})
document.querySelector('#slide-two').addEventListener('click', () => {
    document.querySelector('#slide-two').className = 'active'
    document.querySelector('#slide-three',).className = 'inactive'
    document.querySelector('#slide-four',).className = 'inactive'
    document.querySelector('#slide-one').className = 'inactive'
    block2.className = 'reviews-block-1 block-in-shadow'
    block1.className = 'reviews-block-3 block-in-shadow'
    block3.className = 'reviews-block-2 current'
    reviewsText.appendChild(block2)
    reviewsText.appendChild(block1)
    reviewsText.appendChild(block3)
})
document.querySelector('#slide-three').addEventListener('click', () => {
    document.querySelector('#slide-three').className = 'active'
    document.querySelector('#slide-four',).className = 'inactive'
    document.querySelector('#slide-two',).className = 'inactive'
    document.querySelector('#slide-one').className = 'inactive'
    block3.className = 'reviews-block-1 block-in-shadow'
    block2.className = 'reviews-block-3 block-in-shadow'
    block1.className = 'reviews-block-2 current'
    reviewsText.appendChild(block3)
    reviewsText.appendChild(block2)
    reviewsText.appendChild(block1)
})
document.querySelector('#slide-four').addEventListener('click', () => {
    document.querySelector('#slide-four').className = 'active'
    document.querySelector('#slide-three',).className = 'inactive'
    document.querySelector('#slide-two',).className = 'inactive'
    document.querySelector('#slide-one').className = 'inactive'
    block1.className = 'reviews-block-1 block-in-shadow'
    block3.className = 'reviews-block-3 block-in-shadow'
    block2.className = 'reviews-block-2 current'
    reviewsText.appendChild(block1)
    reviewsText.appendChild(block3)
    reviewsText.appendChild(block2)
})