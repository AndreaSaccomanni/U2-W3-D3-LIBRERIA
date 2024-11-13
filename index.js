fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log("response", response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore nella chiamata");
    }
  })

  //SECONDO THEN PER LEGGERE IL JSON DELLA RESPONSE
  .then((objects) => {
    console.log("objects", objects);

    //ORA SONO DISPONIBILI PER L'UTILIZZO
    const row = document.getElementById("row");

    objects.forEach((obj) => {
      // CREA LA COL
      //const col = document.createElement("div");
      //col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

      //CREO LA CARD
      const newcard = document.createElement("div");
      newcard.className = "card";

      // CREO L'IMMAGINE DELLA CARD
      const cardImg = document.createElement("img");
      cardImg.src = obj.img;
      cardImg.className = "card-img-top h-100";

      // CREO IL CARD-BODY
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      //CREO IL CARD-TITLE
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = obj.title;

      //CREO IL CARD-TEXT CHE CONTIENE IL PREZZO DEL LIBRO
      const price = document.createElement("p");
      price.className = "card-text";
      price.innerText = `Prezzo: $${obj.price}`;

      //CREO IL BOTTONE SCARTA E ACQUISTA
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
        li.className = "list-group-item ";
        ul.appendChild(li);
      });

      //APPENDO TITOLO TESTO E BUTTON AL CARD-BODY
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(price);
      cardBody.appendChild(buttonScarta);
      cardBody.appendChild(buttonAcquista);

      //APENDO IMMAGINE E CARD-BODY ALLA CARD
      newcard.appendChild(cardImg);
      newcard.appendChild(cardBody);

      //APPENDO LA CARD ALLA COLONNA
      row.appendChild(newcard);

      //APPENDO LA COLONNA ALLA ROW
      //row.appendChild(col);
    });
  })
  .catch((error) => {
    console.log(error);
  });
