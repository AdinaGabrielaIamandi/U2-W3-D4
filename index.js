const booksshelf = async function () {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET"
    });
    if (res.ok) {
      let booksList = await res.json();
      let card = document.getElementById("card");
      booksList.forEach((book) => {
        card.innerHTML += `
        <div class="row">
            <div class="col-12 col-md-2 col-lg-4">
                <div class="card" style="width: 18rem;">
                    <img src="${book.img}" class="card-img-top" alt="${book.title} pic">
                    <div class="card-body">
                        <h5 class="card-title" id="title">${book.title}</h5>
                        <p class="card-text">${book.price}$</p>
                        <a href="#" class="btn btn-primary">Skip</a>
                    </div>
                </div>
            </div>
        </div>`;
      });
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

booksshelf();
