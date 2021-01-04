function timeline() {
    var fetch = document.getElementById("output");
    var command = document.getElementById("input").value;
    var prefix = "$texas%timeline%";
    var res = ""
    switch(command) {
        case (prefix + "14000.bce"):
            res = "The first people settle in what is now Texas.";
            break;
        case (prefix + "9500.bce"):
            res = "The Clovis People settle in Texas.";
            break;
        case (prefix + "8000.bce"):
            res = "The Folsom People settle in Texas.";
            break;
        case (prefix + "6000.bce"):
            res = "The Archaic Period begins.";
            break;
        case (prefix + "3000.bce"):
            res = "The first farms are established in Texas and they grow things like corn, beans, and squash";
            break;
        case (prefix + "2500.bce"):
            res = "Pecos rock art was made by some people around this time near the present-day Pecos Region.";
            break;
        case (prefix + "100"):
            res = "In a Hueco Mountains' canyon, aincent people held ceremonies where they places offerings in a cave.";
            break;
        case (prefix + "700"):
            res = "People in Texas had learned about the bow and arrow";
            break;
        case (prefix + "800"):
            res = "The Caddo community was formed.";
            break;
        case (prefix + "1150"):
            res = "The Antelope Creek people started living in Texas around this time.";
            break;
        case (prefix + "1400"):
            res = "The Lipan Apache people arrive in Texas";
            break;
        case (prefix + "1492"):
            res = "In this year, Colombus set sail from Spain and eventually arrived in the Bahamas";
            break;
        case (prefix + "1519"):
            res = "Spanish explorer Alonso Alvarez de Pineda is the first European to explore and map the Gulf of Mexico";
            break;
        case (prefix + "1527"):
            res = "In this year, Panfilo de Narvaez set out for Florida with a large fleet of ships, men, and horses in hopes to find gold, but the mission ends up being a fail.";
            break;
        case (prefix + "1528"):
            res = "Alvar Nunez Cabeza de Vaca, one of the four survivors of the Narvaez expedition, washed up on the beach of and island he named Malhado. For the next few years, he lived multiple times as a slave to many American Indians. He also encountered the Karankawas, making him the first European man to meet with any American Indians";
            break;
        case (prefix + "1536"):
            res = "Bartolomé de Casas was ordained on this year, making him the very first priest to be ordained in the Americas.";
            break;
        case (prefix + "1541"):
            res = "Following the report of an explorer who claimed to have seen a 'golden city' in a desert, Francisco Vázquez de Coronado organized an expidition that went through the Texas Panhandle";
            break;
        case (prefix + "1542"):
            res = "Hernando de Soto led an exploration in 1539, and soon died in 1542, where Luis de Moscoso led his explorers into East Texas";
            break;
        case (prefix + "1543"):
            res = "The first oil in Texas is discovered floating in water near Sabine Pass";
            break;
        case (prefix + "1554"):
            res = "In 1554, 3 of the initial 54 vessels that sailed out from Spain in 1552 crashed on Padre Island due to a storm";
            break;
        case (prefix + "1581"):
            res = "Around this time, the first missionaries passed through far west Texas";
            break;
        case (prefix + "1598"):
            res = "After a difficult march, Juan de Oñate and many other settlers finally reached the Rio Grande in April. Once they did, they had what some to believe to be the first 'thanksgiving' feast in what would become the United States";
            break;
        case (prefix + "1610"):
            res = "The Spanish had established a capital at Sante Fe and a few priests began to venture west this year";
            break;
        case (prefix + "1629"):
            res = "Almost 50 years later, after their first encounter, the Jumano were revisited by the spanish in this year";
            break;
        case (prefix + "1632"):
            res = "During this year, Juan de Salas and Juan de Ortega established the first mission near present-day San Angelo";
            break;
        case (prefix + "1670"):
            res = "In 1670, Franciscans established the La Junta Mission, but they were expelled after just two years";
            break;
        case (prefix + "1680"):
            res = "Pueblo people revolted against the Spanish colonists and drove them out of present-day New Mexico, and El Paso was also born";
            break;
        case (prefix + "1687"):
            res = "The Mayeye (which was a Tonkawa Tribe), first encounter La Salle and his colonists";
            break;
        case (prefix + "1688"):
            res = "Franciscans established two missions, El Apóstol Santiago on Alamito Creek and La Navidad en los Cruces along the Rio Grande. By 1688, these missions were abandoned";
            break;
        case (prefix + "1690"):
            res = "The Spanish began making entradas";
            break;
        case (prefix + "1690"):
            res = "The Spanish realize they need to defend Texas and they blaze a network of trails. The missions of San Francisco de los Tejas and Santisimo Nombre de Maria were also established along the Neches River";
            break;
        case (prefix + "1700"):
            res = "Around this year, the Apaches were forced South by the Comanche and the two became enemies. Also, up to 1713, Spain was involved in a European war and Texas was not a priority";
            break;
        case (prefix + "1718"):
            res = "San Antonio was founded";
            break;
        case (prefix + "1719"):
            res = "The Chicken War took place";
            break;
        case (prefix + "1730"):
            res = "By now, missionaries were operating cattle ranches around San Antonio and Goliad. Three missionaries were also relocated from East Texas to present-day Austin";
            break;
        case (prefix + "1749"):
            res = "The Apache and the Spanish make peace";
            break;
        case (prefix + "1750"):
            res = "The Whichita settle along the Red River. Ranching land expansion also became safer once the Spanish formed an alliance with the Apaches";
            break;
        case (prefix + "1758"):
            res = "In March of 1758, over 2000 Comanches and allied other northern tribes staged a massive attack, burning down the Santa Cruz de San Sabá mission and killing all but one of the missionaries";
            break;
        //memes
        case (prefix + "meme"):
            res = "<img src='./texashistorymemes/texasmemes" + Math.floor(Math.random() * 40) + ".png' width='25%' height='25%' style='border-radius:20px;border-width:10px;border-color:black;'>";
            break;
        default:
            return;
    }
    fetch.innerHTML = res;
}