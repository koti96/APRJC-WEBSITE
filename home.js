// Add scroll effect to navbar
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
});
document.querySelector('.nav-toggler').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Toggle active class on button
        button.classList.toggle('active');
        
        // Toggle answer visibility
        answer.classList.toggle('active');
        
        // Close other open answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('active')) {
                otherAnswer.classList.remove('active');
                otherAnswer.previousElementSibling.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const facultyCards = document.querySelectorAll('.faculty-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            facultyCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-department') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});