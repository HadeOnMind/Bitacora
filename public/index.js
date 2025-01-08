/* BITACORA ON WORKING PROGRESS*/


let ProgressBar = 3;
const progress = ProgressBar.toString
console.log(progress + '%')



let textdiv = document.getElementsByClassName('PageText');
/*
textdiv.addEventListener("click", (event)=>{
    divclick()
})

function divclick() {
    console.log("click working")
} 
*/

for(let i = 0; i < textdiv.length; i++){
    textdiv[i].addEventListener('click', ()=> {
        divclick();
    })
}

function divclick() {
    console.log("Click working");
}








/*



const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('PageImage');


uploadBtn.addEventListener('click', () => {
    //fileInput.click(); //
    console.log("listening") 
});

/*
// When a file is selected
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image(); // Create a new image element
            img.src = e.target.result; // Set the image source to the file
            img.onload = function() {
                // Clear the existing content and display the image
                uploadBtn.innerHTML = ''; // Clear the div's content

                // Create a remove button
                const removeBtn = document.createElement('button');
                removeBtn.classList.add('remove-btn');
                removeBtn.textContent = 'Remove Image';
                removeBtn.onclick = () => {
                    uploadBtn.innerHTML = ''; // Clear the div's content
                    uploadBtn.appendChild(removeBtn); // Re-add the "Remove Image" button
                };

                // Append the image and remove button inside the div
                uploadBtn.appendChild(img);
                uploadBtn.appendChild(removeBtn);
            };
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
    }
});

*/