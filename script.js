const getCards = document.getElementById('containerCards');

const URL_API = 'https://ejercicio-movimientos.onrender.com/movimientos';


const getMovimientos = async() =>{
    try {
        const {data} = await axios.get(URL_API);
        return data;
    } catch (error) {
        console.log(error);
        return[];     
    }
   
}
document.addEventListener("DOMContentLoaded", async () => {
    const movimientos = await getMovimientos();
    const cardsContainer = document.getElementById("containerCards");
  
    let cardPrint = `<table class="table_Mov"><tr><th>movimiento</th><th>precio</th><th>tipo</th></tr>`;
  
    
    movimientos.forEach((movimiento) => {
    cardPrint += `<tr class="tr_body"><td class="liryc">${movimiento.description}</td><td>${movimiento.price}</td><td>${movimiento.type}</td></tr>`;
    });
  
    cardPrint += "</table>";
    cardsContainer.innerHTML = cardPrint;
  });