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
                <div class="card col m-2" style="width: 18rem;">
                    <img src="${book.img}" class="card-img-top" alt="${book.title} pic" style="height: 65%">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title" id="title">${book.title}</h5>
                        <p class="card-text">${book.price}$</p>
                        <a href="#" class="btn btn-primary">Skip</a>
                    </div>
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

booksshelf();
