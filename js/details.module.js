import { Ui } from "../js/ui.module.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

   
      document.addEventListener("DOMContentLoaded", () => {
         const btnClose = document.getElementById("btnClose");
         if (btnClose) {
            btnClose.addEventListener("click", () => {
               document.querySelector(".games").classList.remove("d-none");
               document.querySelector(".details").classList.replace("d-none , d-flex");
            });
         } else {
            console.error("button #btnClose not found");
         }
      });

      this.getDetails(id);
   }

   getDetails(idGames) {
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
         .then((response) => response.json())
         .then((response) => {
    
            if (this.ui.displaydetails) {
               this.ui.displaydetails(response);
            } else {
               console.error("displayDetails is not a function in Ui");
            }
         })
         .catch((err) => console.error(err));
   }
}


