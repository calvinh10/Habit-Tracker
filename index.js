let habitInput = document.querySelector(".habit-input");
let habitBtn = document.querySelector(".habit-btn");
let habitList = document.querySelector(".habit-list");


habitBtn.addEventListener('click', addHabit);
habitList.addEventListener('click', deleteCheck);



function addHabit (event) {
    event.preventDefault();
    const habitDiv = document.createElement ('div');
    habitDiv.classList.add("habit");
    const newHabit = document.createElement ('li');
    newHabit.innerText = habitInput.value;
    newHabit.classList.add('habit-item');
    habitDiv.appendChild(newHabit);

    const completedButon = document.createElement('button');
    completedButon.innerHTML = '<i class="fas fa-check"></i>';
    completedButon.classList.add("complete-btn");
    habitDiv.appendChild(completedButon);

    const trashButon = document.createElement('button');
    trashButon.innerHTML = '<i class="fas fa-trash"></i>';
    trashButon.classList.add("trash-btn");
    habitDiv.appendChild(trashButon);

    habitList.appendChild(habitDiv)

    habitInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0]==="trash-btn") {
        const habit = item.parentElement;
        habit.remove();
    }

    if (item.classList[0]==="complete-btn") {
        const habit = item.parentElement;
        habit.classList.toggle ('completed');
    }
}