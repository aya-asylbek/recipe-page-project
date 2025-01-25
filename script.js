let newListItem = document.createElement('li');
newListItem.textContent = 'Eggplant';
let ingredientsList = document.querySelector('.ingredients ul');
ingredientsList.appendChild(newListItem);



//const myDiv = document.getElementById("myDiv");
//let checkbox = document.createElement("input")
    //checkbox.type = "checkbox";
    //checkbox.name = "name";
    //checkbox.value = "value";
    //checkbox.id = "id";
    //let label = document.createElement("label");
//label.htmlFor = "id";
//label.appendChild(document.createTextNode("beef"));
//myDiv.appendChild(checkbox);
//myDiv.appendChild(label);

document.addEventListener('DOMContentLoaded', function () {
    const ingredientsList = document.querySelector('#ingredientsList'); 
    const ingredientsItems = ingredientsList.querySelectorAll('li'); 

    ingredientsItems.forEach(function (item, index) {

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "ingredient" + index; 

    
        let label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.appendChild(document.createTextNode(" " + item.textContent));

    
        item.textContent = '';
        item.appendChild(checkbox);
        item.appendChild(label);

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
               label.classList.add('checked'); 
            } else {
                label.classList.remove('checked');
            }
        });
    });
});
