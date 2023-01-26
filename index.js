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
                <div class="card col m-2 p-0 book" style="width: 18rem;" id="">
                    <img src="${book.img}" class="card-img-top" alt="${book.title} pic" style="height: 65%">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title" id="title">${book.title}</h5>
                        <p class="card-text">${book.price}$</p>
                    </div>
                    <button class="btn btn-primary m-3" onclick="skipContent(event)">Skip</button>
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

function skipContent(e) {
  e.target.parentElement.style.display = "none";
}

booksshelf();
