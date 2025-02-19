
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0";
            document.getElementById("change").innerHTML="<";
        } else {
            sidebar.style.left = "-250px";
            document.getElementById("change").innerHTML=">";
        }
    }

   
function toggleTopNavBar(){
    const topnav=document.getElementById("topNavbarUl");
    if(topnav.style.maxHeight === "0px"){
        topnav.style.maxHeight="500px";
    }else{
        topnav.style.maxHeight="0px";
    }  
}