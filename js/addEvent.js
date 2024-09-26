
document.getElementById('donate-now-btn-1').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney1=getInputFieldValueById('add-input-1')
    if(!isNaN(addMoney1) && addMoney1>0){
        const inValue1=getTextFieldValueById('section-value-1');
        const sectionUpdatedValue1=inValue1+addMoney1;
        document.getElementById('section-value-1').innerText=sectionUpdatedValue1;

        /*
      history section
        */
      let timestamp = new Date().toLocaleString();
     const p=document.createElement('p');
     p.innerText=`${addMoney1} TK Donate for Flood at Noakhali, Bangladesh:: Local Time :${timestamp}`;

     document.getElementById('his-sec').appendChild(p);
      //history end

        const outValue1=getTextFieldValueById('total-amount');
        const holeUpdatedValue1=outValue1-addMoney1;
        if(holeUpdatedValue1<0){
            alert('Total value can not be negative!');
        }
        document.getElementById('total-amount').innerText=holeUpdatedValue1;



        // Get the modal and button elements
const modal = document.getElementById("my_modal_1");
const showModalBtn = document.getElementById("donate-now-btn-1");
const closeModalBtn = document.getElementById("closeModalBtn");
if(addMoney1>0){
    modal.showModal();
}

// Close modal on close button click
closeModalBtn.addEventListener("click", function() {
  modal.close();
});
        
    }else{
alert('Please enter any positive Number');

    }

    

    
})


document.getElementById('donate-now-btn-2').addEventListener('click',function(event){
   
    const addMoney2=getInputFieldValueById('add-input-2')
    if(!isNaN(addMoney2) && addMoney2>0){
        const inValue2=getTextFieldValueById('section-value-2');
        const sectionUpdatedValue2=inValue2+addMoney2;
        document.getElementById('section-value-2').innerText=sectionUpdatedValue2;

 /*
      history section
        */
      let timestamp = new Date().toLocaleString();
     const p=document.createElement('p');
     p.innerText=`${addMoney2} TK Donate for Flood at Noakhali, Bangladesh:: Local Time :${timestamp}`;
     document.getElementById('his-sec').appendChild(p);
      //history end

        const outValue2=getTextFieldValueById('total-amount');
        const holeUpdatedValue2=outValue2-addMoney2;
        if(holeUpdatedValue2<0){
            alert('Total value can not be negative!');
        }
        document.getElementById('total-amount').innerText=holeUpdatedValue2;


        
        // Get the modal and button elements
const modal = document.getElementById("my_modal_1");
const showModalBtn = document.getElementById("donate-now-btn-2");
const closeModalBtn = document.getElementById("closeModalBtn");
if(addMoney2>0){
    modal.showModal();
}

// Close modal on close button click
closeModalBtn.addEventListener("click", function() {
  modal.close();
});
    }else{
alert('Please enter any positive Number')
    }
    
})


document.getElementById('donate-now-btn-3').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney3=getInputFieldValueById('add-input-3')
    if(!isNaN(addMoney3) && addMoney3>0){
        const inValue2=getTextFieldValueById('section-value-3');
        const sectionUpdatedValue2=inValue2+addMoney3;
        document.getElementById('section-value-3').innerText=sectionUpdatedValue2;

         /*
      history section
        */
      let timestamp = new Date().toLocaleString();
      const p=document.createElement('p');
      p.innerText=`${addMoney3} TK Donate for Flood at Noakhali, Bangladesh:: Local Time :${timestamp}`;
      document.getElementById('his-sec').appendChild(p);
       //history end

        const outValue2=getTextFieldValueById('total-amount');
        const holeUpdatedValue2=outValue2-addMoney3;
        if(holeUpdatedValue2<0){
            alert('Total value can not be negative!');
        }
        document.getElementById('total-amount').innerText=holeUpdatedValue2;

        
        // Get the modal and button elements
const modal = document.getElementById("my_modal_1");
const showModalBtn = document.getElementById("donate-now-btn-3");
const closeModalBtn = document.getElementById("closeModalBtn");
if(addMoney3>0){
    modal.showModal();
}

// Close modal on close button click
closeModalBtn.addEventListener("click", function() {
  modal.close();
});
    }else{
alert('Please enter any positive Number')
    }
    
})









