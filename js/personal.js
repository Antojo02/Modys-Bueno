const personalCards = document.querySelectorAll('.personal-card');
const modal = document.getElementById('personal-modal');
const modalClose = document.querySelector('.personal-modal-close');
const modalImg = document.querySelector('.personal-modal-img');
const modalTitle = document.querySelector('.personal-modal-title');
const modalDescription = document.querySelector('.personal-modal-description');

function openModal(index) {
    const descriptionContent = document.querySelectorAll('.personal-modal-description-content')[index].innerHTML;
    modalImg.src = personalCards[index].querySelector('img').src;
    modalTitle.textContent = personalCards[index].querySelector('.card-title').textContent;
    modalDescription.innerHTML = descriptionContent;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

personalCards.forEach(card => {
    card.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        openModal(index);
    });
});

modalClose.addEventListener('click', closeModal);