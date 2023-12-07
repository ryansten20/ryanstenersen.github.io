let currentIndex = 0;
const divs = document.querySelectorAll('.slide');
const totalDivs = divs.length;

function showDiv(index) {
    divs.forEach((div, idx) => {
        div.style.display = idx === index ? 'block' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalDivs;
    showDiv(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalDivs) % totalDivs;
    showDiv(currentIndex);
});

showDiv(currentIndex);
