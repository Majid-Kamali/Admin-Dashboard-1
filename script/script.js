const chart = document.querySelector('#chart').getContext('2d');
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48874, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2,
            },
            {
                label: 'ETH',
                data: [39374, 23537, 19631, 490915, 67828, 76684, 53572, 29974, 58874, 38116, 71004],
                borderColor: 'blue',
                borderWidth: 2,
            }
        ]
    },
    options: {
        responsive: true
    }
})


// show to hide sidebar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block'
});

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'
})



// change theme 

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})
