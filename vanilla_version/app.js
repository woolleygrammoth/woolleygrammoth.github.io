// variables
const thanksButton = document.querySelector('#thanks-button');
const tidbitButtons = document.querySelector('.tidbit-buttons');
const tidbits = [...document.querySelectorAll('article')];
const projects = document.querySelector('#projects');
const contactTop = document.querySelector('#contact-top');
// event listener for thanks button (first thing below header)
thanksButton.addEventListener('click', e => {
    const button = e.target;
    const thanks = button.nextElementSibling;
    thanks.classList.remove('d-none');
    setTimeout(() => thanks.classList.add('opacity-1'), 200);
    button.classList.add('d-none');
});
// event listener for tidbit buttons
tidbits.forEach(self => {
    self.style.display = 'none';
});
tidbitButtons.addEventListener('click', e => {
    const btn = e.target; 
    if (btn.tagName === 'A') {
        //remove cover stylishly
        const text = btn.textContent.toLowerCase();
        tidbits.forEach(self => {
            if (text === self.id) { 
                self.style.display = 'block'; 
            } else {
                self.style.display = 'none';
            }
        });
        document.querySelector('.tidbits-cover > h2').style.display = 'none';
        document.querySelector('.tidbits-cover').classList.remove('d-flex');
        setTimeout(document.querySelector('.tidbits-cover').classList.add('height-0'), 100);
    }
});
// event listener to display project descriptions on click 
projects.addEventListener('click', e => {
    const reveal = e.target; 
    if ([...reveal.classList].includes('description-reveal')) {
        const description = reveal.nextElementSibling; 
        if (description.style.opacity === '') {
            description.style.opacity = 1;
            description.style.height = 'auto';
            reveal.textContent = 'Hide description';
        } else {
            description.style.opacity = '';
            setTimeout(() => {
                description.style.height = 0;
                reveal.textContent = 'Show description';
            }, 500);
            
        }
    }
});
// event listener to indicate contact information when top contact nav link clicked
contactTop.addEventListener('click', () => {
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.classList.toggle('contact-highlight');
    setTimeout(() => contactInfo.classList.toggle('contact-highlight'), 1500);
    }
);

