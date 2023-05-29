// Select (video tili orqali saralash)
const elSelect = document.querySelector("#select");
const elZikrText = document.querySelector("#zikr");
const elCounter = document.querySelector("#counter");
const elCount = document.querySelector("#count");
const elReset = document.querySelector("#reset");

elReset.addEventListener('click', ()=>{
    elCount.textContent = 0
    elZikrText.textContent = "Iltimos aytmoqchi bo'lgan zikrni tanlang :("
    elCounter.disabled = true
})

elCounter.addEventListener('click', function(){
    elCount.textContent = + elCount.textContent + 1
})

elSelect.addEventListener("change", function () {
    elZikrText.textContent = elSelect.value;
    elCounter.disabled = false
});

