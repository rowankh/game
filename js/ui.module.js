export
   class Ui {




   displaygame(data) {
      let gamescard = ``
      for (let i = 0; i < data.length; i++) {
         gamescard +=
            `

      <div class="col mt-4">
         <div data-id="${data[i].id}"  class="card  h-100 bg-transparent" role="button" >
            <div  class="card-body ">
               <figure class="position-relative ">
                  <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 text-light small">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="card-text text-light small text-center opacity-50">
                     ${data[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge bg-black badge-color">${data[i].genre}</span>
               <span class="badge bg-black badge-color">${data[i].platform}</span>
   
            </footer>
         </div>
      </div>`;
      }
      document.getElementById(`datagame`).innerHTML = gamescard;
   }


displaydetails(data) {
   const contect = `
        <img src="${data.thumbnail}"  alt="">
        <div class="details-text">
            <h3>Title: ${data.title}</h3>
            <h5>catagery: ${data.genre} </h5>
            <h5>Platform: ${data.platform} </h5>
            <h5>Status: ${data.status} </h5>
            <p calss="small"> ${data.description} </p>
            <div class="btn btn-outline-warning text-light"> Show Game</div>
          
        </div>
       
`
      ;
document.getElementById("details").innerHTML = contect
}}