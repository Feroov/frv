

/* Our variables for the scrolling up functions */
const btnScrollUp = document.querySelector("#btnScrollUp");
var scrollBtn = document.getElementById("btnScrollUp");


/* An simple scroll back to top smoothly function */
btnScrollUp.addEventListener("click", function()
{
    window.scrollTo ({ top: 0, left: 0, behavior: "smooth" });
});


/* This function basically hides the scroll
   button until the page is scrolled down, then
   the button will appear
*/
window.onscroll = function() { hideScroll() };
function hideScroll() 
{
    if (document.body.scrollTop > 1690 || document.documentElement.scrollTop > 1690) 
    {
        scrollBtn.style.display = "block";
    } else { scrollBtn.style.display = "none"; }
}