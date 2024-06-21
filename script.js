document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.title-head');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__bounce');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});
document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.sub-head');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__bounce');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.about-image');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInLeftBig');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.para-div');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInRightBig');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.card1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInLeftBig');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.card2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInRightBig');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.querySelector('.projects-div');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInRightBig');
                entry.target.style.opacity = 1;
                // Stop observing after the element is animated
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(box);
});



