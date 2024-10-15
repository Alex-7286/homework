document.addEventListener("DOMContentLoaded", function() {

    const sections = document.querySelectorAll(".course");
    sections.forEach(section => section.classList.remove('active'));

    document.querySelector("#gapyeong").classList.add('active');

    const menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); 
         
            sections.forEach(section => section.classList.remove('active'));

            const region = item.getAttribute("data-region");
            document.getElementById(region).classList.add('active');
        });
    });
});

const formArr = document.querySelectorAll("form");
const formTag = formArr[0];
formTag.addEventListener("submit", function(x){
    const searchValueTag = document.querySelector("input[name=searchValue]");
    const str = searchValueTag.value;
    if(str.length < 10){
        x.preventDefault();
        alert("10글자 이상 입력하세요.")
    }
    
});

const radioButtons = document.querySelectorAll('input[name="option"]');
const lists = document.querySelectorAll('.list');

radioButtons.forEach(radio => {
    radio.addEventListener('change', showList);
});

function showList(event) {
    lists.forEach(list => list.style.display = 'none');
    
    const selectedList = document.getElementById(event.target.value);
    if (selectedList) {
        selectedList.style.display = 'block';
    }
}
