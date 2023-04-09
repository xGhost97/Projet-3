const apiWorks = "http://localhost:5678/api/works";
const apiCategories = "http://localhost:5678/api/categories";
let allProject = []

fetch(apiWorks)
  .then(response => response.json())
  .then(works => {
    renderProject(works)
    allProject = works
  });
  fetch(apiCategories)
      .then(response => response.json())
      .then(categories => {
        renderCategories(categories);
      });

function renderProject (works) {  
    let project = document.querySelector(".gallery");
    
     project.innerHTML = "";

    

    for (let i = 0; i < works.length; i++){
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");

        img.setAttribute("src", works[i].imageUrl);
        figcaption.setAttribute("alt", works[i].title);
        img.setAttribute("crossorigin", "anonymous");

        figcaption.innerHTML = works[i].title;

        project.appendChild(figure);
        figure.append(img, figcaption);
    }
      
    }

    function renderCategories (categories) {  
     
      let filtre = document.querySelector(".filtre");
  
      filtre.innerHTML = "";

      
let allButton = document.createElement("button");  
      allButton.innerHTML = "Tous";
      filtre.appendChild(allButton);
      allButton.addEventListener("click", function () {
        renderProject(allProject);
        
      });
     
      for (let i = 0 ; i < categories.length; i++){

       


        let button = document.createElement("button");
        button.setAttribute("value", categories[i].name);
        button.innerHTML = categories[i].name;
        filtre.appendChild(button);
        button.addEventListener("click", function (){
        const filterProject = allProject.filter(function(project){
                // return work = categoryId;
                console.log(categories[i].id, project.categoryId)

                return project.categoryId === categories[i].id
              });
             
              renderProject(filterProject)
             

         }) 
         
}
}


// CREATION DE LA MODAL

const openModal = function(e) {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute("href"))
  target.style.display = null
  target.removeAttribute("aria-hidden")
  target.setAttribute("aria-modal", "true")
}

document.querySelectorAll(".js-modal").forEach(a => {
  a.addEventListener("click", openModal)
})