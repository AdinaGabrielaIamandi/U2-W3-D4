const booksshelf = async function () {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET"
    });
    if (res.ok) {
      let booksList = await res.json();
      let card = document.getElementById("container-books");
      booksList.forEach((book) => {
        card.innerHTML += `
                <div class="card col m-2 p-0" style="width: 18rem;">
                    <img src="${book.img}" class="card-img-top" alt="${book.title} pic" style="height: 65%">
                    <div class="card-body d-flex flex-column justify-content-around">
                        <h5 class="card-title" id="title">${book.title}</h5>
                        <p class="card-text">${book.price}$</p>
                    </div>
                    <a href="#" class="btn btn-primary" id="hidden">Skip</a>
                </div>
            `;
      });
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

let buttonHidden = document.getElementById("hidden");

booksshelf();
