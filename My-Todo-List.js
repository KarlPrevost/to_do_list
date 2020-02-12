(function (){
    window.onload = function() {
        document.getElementById("button").onclick = function siTuClick(){
        var inputAFaire = document.getElementById("input-a-faire").value; 
        console.log(inputAFaire);
        inputAFaire = "<div>"+ inputAFaire + "<input type='button' name='delete' onclick='this.parentNode.remove()' value='Supprimer' id = 'delete'> <input type='button' name='switch' value='Switch'  onclick='this.parentNode.parentNode.nextElementSibling.nextElementSibling.appendChild(this.parentNode);this.remove()' id = 'switch'><br></div>";
        document.getElementById("a-faire").innerHTML += inputAFaire;  
    }
    };
})()