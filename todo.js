let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let  anyItem = document.getElementById("anyitem");
    let table = document.getElementById("type-item-name")
    let row = table.insertRow(1);
    row.setAttribute('id', `item-$[{id}`);
    row.insertCell(0).innerHTML = document.getElementById('Item-Name').value;
    row.insertCell(1).innerHTML = `${numberAtHome.getQuantity()}}`
    row.insertCell(2).innerHTML = `${numberNeeded.getQuantity()}}`
    let Actions = row.insertCell(4);
    Actions.appendChild('');
    document.getElementById('Item Name').value = '';
});