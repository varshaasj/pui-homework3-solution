console.log('Started Application.');

function updateElement() {
    console.log('Running the updateElement function!')
  }

  const glazingOptions =
  [ { glaze: 'Keep original',
      price: 0.00},
     
      { glaze: 'Sugar milk',
      price: 0.00},

      { glaze: 'Vanilla milk',
      price: 0.50},

      { glaze: 'Double chocolate',
      price: 1.50}
];
    

  const sizeOptions =
  [
    { size: 1,
    discount: 1},
   
    { size: 3,
        discount: 3},

        { size: 6,
            discount: 5},

            { size: 12,
                discount: 10},
  ];
  const glazes = ['0g','1g', '2g', '3g']
  const prices = ['0s','1s', '2s', '3s']

  let selectElement = document.getElementById("glazing");
  let selectElement2 = document.getElementById("size");

  let glazePrice = 0
  let currSize = 1
  let totalPrice = 2.49
  
  function onSelectValueChange() {
    
    
    
    if(glazes.includes(this.value)) {
        let glazeIndex = parseInt(this.value[0]);
        let glazeToDisplay= glazingOptions[glazeIndex];
   
        glazePrice = glazeToDisplay.price;
        glazingChange(glazeToDisplay)
    }
    else{
        let sizeIndex = parseInt(this.value[0]);
        let sizeToDisplay= sizeOptions[sizeIndex];
    
        currSize = sizeToDisplay.discount;
        sizeChange(sizeToDisplay)
    }
  
    
  }
  
  function glazingChange(glaze){
      const priceChange = glaze.price
    
      totalPrice = (2.49 + glaze.price)*currSize

     
     
      document.getElementById('price').innerHTML = "$" + totalPrice.toFixed(2);
      return glaze.price
  }

  function sizeChange(size){
    const priceChange = size.discount
    console.log('Hiii You selected ' + "$" + size.discount);

    totalPrice = (2.49 + glazePrice)*size.discount
    console.log('totall size ' + totalPrice);
    //document.getElementById("#price").innerHTML = totalPrice;
    document.getElementById('price').innerHTML = "$" + totalPrice.toFixed(2);
    return size.discount

}

  selectElement.addEventListener('change', onSelectValueChange);
  selectElement2.addEventListener('change', onSelectValueChange);

  
  


 

 