var addItemId=0;
function addcart(item){
    addItemId +=1;
    var selectedItem=document.createElement('cartt');
    selectedItem.classList.add('img');
    selectedItem.setAttribute('id',addItemId);
    var img=document.createElement('img');
    img.setAttribute('src');
    var cartItems=document.getElementById('title');
    selectedItem.append('img');
    cartItems.append(selectedItem); 
}