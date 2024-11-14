fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log("response", response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore nella chiamata");
    }
  })

  // SECONDO THEN PER LEGGERE IL JSON DELLA RESPONSE
  .then((objects) => {
    console.log("objects", objects);

    // Ora sono disponibili per l'utilizzo
    const row = document.getElementById("row");

    objects.forEach((obj) => {
      // Creo la card
      const newcard = document.createElement("div");
      newcard.className = "card col-12 col-sm-6 col-md-4 col-lg-3 px-2";

      // Creo l'immagine della card
      const cardImg = document.createElement("img");
      cardImg.src = obj.img;
      cardImg.className = "card-img-top";
      cardImg.style.objectFit = "cover"; // Aggiungi per far sì che l'immagine copra l'area

      // Creo il card-body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // Creo il card-title
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = obj.title;

      // Creo il card-text con il prezzo
      const price = document.createElement("p");
      price.className = "card-text";
      price.innerText = `Prezzo: $${obj.price}`;

      // Creo i bottoni Scarta e Acquista
      const buttonScarta = document.createElement("button");
      buttonScarta.className = "btn btn-danger";
      buttonScarta.innerText = "Scarta";

      buttonScarta.addEventListener("click", () => {
        newcard.remove();
      });

      const buttonAcquista = document.createElement("button");
      buttonAcquista.className = "btn btn-success mx-3";
      buttonAcquista.innerText = "Compra Ora";

      buttonAcquista.addEventListener("click", () => {
        const ul = document.getElementById("books");
        const li = document.createElement("li");
        li.textContent = obj.title;
        li.className = "list-group-item";
        newcard.setAttribute("class", "buttonSelected");
        ul.appendChild(li);
      });

      // Appendo titolo, prezzo e bottoni al card-body
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(price);
      cardBody.appendChild(buttonScarta);
      cardBody.appendChild(buttonAcquista);

      // Appendo immagine e card-body alla card
      newcard.appendChild(cardImg);
      newcard.appendChild(cardBody);

      // Appendo la card alla row
      row.appendChild(newcard);
    });
  })
  .catch((error) => {
    console.log(error);
  });
