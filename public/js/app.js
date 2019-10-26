const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
let messageOne = document.querySelector('#message-1');
let messageTwo = document.querySelector('#message-2');
weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            // console.log(data.error);
            messageOne.textContent = data.error;
            messageTwo.textContent = '';
        } else {
            console.log(data.location);
            console.log(data.forecastData);
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecastData;
        }
    })
});
    
})