// script.js 

// Taking elements from HTML 
const inputField = document.querySelector(".inputField"); 
const main = document.querySelector(".resume-builder"); 
const outputContainer = document.querySelector(".output_container"); 
const btn=document.querySelector("clicker")
// let isHidden = true; 

// Function to toggle between input form and resume preview 
window.onload = function() {
    
    btn.addEventListener("click", () => {
       let invoice= this.document.getElementByClassName("container");
       console.log(invoice)
       html2pdf().from(invoice).save();
    })
}