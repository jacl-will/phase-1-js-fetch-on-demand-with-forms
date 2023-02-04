const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => 
  {event.preventDefault();
    // used to check that event listener was working 
    // console.log(event)
    const input = document.querySelector('input#searchByID');
    // check to make sure that the value of what is input returns 
    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.innerText = data.title;
      summary.innerText = data.summary;
    });
});
}

document.addEventListener('DOMContentLoaded', init);