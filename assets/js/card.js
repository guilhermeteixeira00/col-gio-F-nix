document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function () {
        const content = this.querySelector('.course-content').innerHTML;
        document.getElementById('details-content').innerHTML = content;
        document.getElementById('course-details').style.display = 'flex';
    });
});