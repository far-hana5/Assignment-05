function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value ;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText ;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
   document.getElementById('all-section').classList.add('hidden');
   document.getElementById('his-sec').classList.add('hidden');
   document.getElementById('blok-section').classList.add('hidden');
   
   document.getElementById(id).classList.remove('hidden');

}

function changeColor(activeButtonId, inactiveButtonId) {
    const activeButton = document.getElementById(activeButtonId);
    const inactiveButton = document.getElementById(inactiveButtonId);
    
    // Add the active class to the clicked button
    activeButton.classList.add('bg-green-600');
    
    // Remove the active class from the other button
    inactiveButton.classList.remove('bg-green-600');
}
