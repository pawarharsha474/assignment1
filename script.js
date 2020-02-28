currentFetch = []
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // handle response data
        Promise.resolve(response.json()).then((value) => {
            console.log(typeof (value))
            for (var i = 0; i < 10; i++) {
                currentFetch.push(value[i])
            }
        })
    })
    // .then(response l)
    .catch(err => {
        // handle errors
    });


async function logSubmit(event) {
    event.preventDefault();
    const searchItem = document.getElementById('id');
    currentFetch.forEach(element => {
        if (element.id == searchItem.value) {
            console.log("Success!");
        }
    });
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);