import { Ui } from "../js/ui.module.js";
import { Details } from "../js/details.module.js";

export class Home {
    constructor() {
       
        this.detailsSection = document.querySelector('.details');
        this.gamesSection = document.getElementById('game');
        this.Ui = new Ui();

    
        this.initNavLinks();
    }

  
    initNavLinks() {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', (e) => {
                this.changeActiveLink(e.target);
            });
        });
    }


    async changeActiveLink(link) {
      
        const activeLink = document.querySelector('.navbar-nav .active');
        if (activeLink) activeLink.classList.remove('active');

        
        link.classList.add('active');


        const category = link.dataset.category;
        console.log(`Fetching games for category: ${category}`);


        const categoryData = await this.getGames(category);
        if (categoryData) {
            this.Ui.displaygame(categoryData);
            this.startEvent();
        } else {
            alert("Failed to fetch games. Please try again later.");
        }
    }

   
    async getGames(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7cdc754daamsh401d3fcbb27ae02p185c80jsnf73c5eb2ef9a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching games:", error);
            return null;
        }
    }

   
    startEvent() {
        const cards = document.querySelectorAll(".card");
        if (!cards.length) {
            console.warn("No cards found to attach events.");
            return;
        }

        cards.forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }

   
    showDetails(idGame) {
        const details = new Details(idGame);
        this.gamesSection.classList.add("d-none");
        this.detailsSection.classList.remove("d-none");
    }
}
