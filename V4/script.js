document.addEventListener('DOMContentLoaded', function() {
    const dashboardButtons = document.querySelectorAll('.dashboard-btn');
    const cardContainer = document.getElementById('card-container');
    const cardContent = document.getElementById('card-content');
    const sectionsContent = document.getElementById('sections-content');

    function showSection(sectionId) {
        const section = sectionsContent.querySelector('#' + sectionId);
        if (section) {
            cardContent.innerHTML = section.innerHTML;
            cardContainer.classList.remove('hidden');
            cardContent.scrollTop = 0;
        }
    }

    dashboardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);

            // Update active button
            dashboardButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });

        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Close card when clicking outside
    document.addEventListener('click', function(event) {
        if (!cardContainer.contains(event.target) && !event.target.closest('.dashboard-btn')) {
            cardContainer.classList.remove('active');
            setTimeout(() => {
                cardContainer.classList.add('hidden');
            }, 300);
            dashboardButtons.forEach(btn => btn.classList.remove('active'));
        }
    });

    // Initialize AOS
    AOS.init();
});
