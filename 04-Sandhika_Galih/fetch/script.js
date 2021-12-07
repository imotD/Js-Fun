// * Fetch Moment
const searchButton = document.querySelector(".btn-search");
searchButton.addEventListener("click", function() {
  let inputKeyword = document.querySelector(".input-keyword");
  fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${inputKeyword.value}`)
    .then(result => result.json())
    .then(result => {
      const movie = result.Search;
      let card = "";
      movie.forEach(m => {
        card += showCard(m);
        const mainContainer = document.querySelector(".main-container");
        mainContainer.innerHTML = card;
      });

      const details = document.querySelectorAll(".card-detail");
      details.forEach(btn => {
        btn.addEventListener("click", function() {
          const imdbid = this.dataset.imdb;          
          fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${imdbid}`)
            .then(result => result.json())
            .then(result => {
              const moveDetail = showDetail(result);
              const moveDetailResult = document.querySelector(".modalDetails");
              moveDetailResult.innerHTML = moveDetail;
            });
        });
      });
    });
});

function showCard(m) {
  return `
      <div class="col-md-4 my-3">
        <div class="card">
          <img src="${m.Poster}" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary card-detail" data-bs-toggle="modal" data-imdb="${m.imdbID}"  data-bs-target="#modalDetail">Show Details</a>
          </div>
        </div>
      </div>
      `;
}

function showDetail(d) {
  return `
      <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="modalDetailLabel">${d.Title} - ${d.Year}</h5>
             <button
               type="button"
               class="btn-close"
               data-bs-dismiss="modal"
               aria-label="Close"
             ></button>
           </div>
           <div class="modal-body">
             <div class="container-fluid">
               <div class="row">
                 <div class="col-md-3    ">
                   <img src="${d.Poster}" class="img-fluid" alt="Poster" />
                 </div>
                 <div class="col-md">
                   <ul class="list-group">
                     <li class="list-group-item"><strong>Genre</strong>: ${d.Genre}</li>
                     <li class="list-group-item"><strong>Director</strong>: ${d.Director}</li>
                     <li class="list-group-item"><strong>Actors </strong>: ${d.Actors}</li>
                     <li class="list-group-item"><strong>imdbRating</strong>: ${d.ImdbRating}</li>
                     <li class="list-group-item"><strong>Released</strong>: ${d.Released}</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
      `;
}
