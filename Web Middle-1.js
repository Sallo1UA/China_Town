let orderForm = document.getElementById("order-form");
let orderTable = document.getElementById("order-table"); 
let orders = [];

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let order = {
        dish: event.target["dish"].value,
        time: event.target["time"].value,
        address: event.target["address"].value,
        phone: event.target["phone"].value
    }
    orders.push(order);
    event.target.reset();
    drawOrder(order);
})

function drawOrder(order) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${order.dish}</td>
        <td>${order.time}</td>
        <td>${order.address}</td>
        <td>${order.phone}</td>
        <td>${createDownloadLink(order).outerHTML}</td> 
    `;
    orderTable.appendChild(tr);
}

function createDownloadLink(order) { 
    let text = JSON.stringify(order);
    let link = document.createElement("a");
    link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text))
    link.setAttribute("download", "order.json");
    link.innerHTML = "link"; 
    return link;
}