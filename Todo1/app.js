// Get the input field and the to-do box elements
const item = document.querySelector('#item')
const toDoBox = document.querySelector("#to-do-box")


// Add an event listener to the input field
item.addEventListener(
      // Check if the Enter key was pressed
    "keyup",
    function(event){
        // console.log(event.key)
        if(event.key == "Enter"){
             // Add the new to-do item to the list
            // console.log(this.value)
            addToDo(this.value)
            // Clear the input field
            this.value = ""
        }
    }
)

// Function to add a new to-do item to the list--(user se ek Iteam ya todo data)
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <span>X</span>
    `;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )

    listItem.querySelector("span").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}























// (KeyboardEvent)keyup- jese  user likhega kuch 
// ham function chlayemge -> f me jo event ho rha h wo ham (event name ke variable me get krenge)

// addEventListener --> jo CALLBACK ham dete h , To ye usko ek paramiter deta h jiske ander konsa event ho rha h uski information hoti h 

// toggle - class add remove , add remove
// item.addEventListener(
//     "keyup",
//     function (event) {
//         if (event.key == "Enter") {
//             let cleanlist = this.value.trim();
//             if (cleanlist.length > 0) {
//                 addToDo(cleanlist)
//                 this.value = "";
//             } else {
//                 return;
//             }
//         }
//     }
// )