const activityList = document.querySelector('#activity-list');
const addActivityForm = document.querySelector('#add-activity-form');

function removeActivity(event) {
    if (event.target.tagName === 'BUTTON') {
        const listItem = event.target.parentElement;
        activityList.removeChild(listItem);
    }
}

activityList.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        const checkboxLi = event.target.parentElement;
        checkboxLi.classList.toggle('selected');
    }
});

activityList.addEventListener('click', removeActivity);

addActivityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const activityInput = document.querySelector('#activity-input');
    const newActivity = activityInput.value.trim();

    if (newActivity !== '') {
        const newLi = createListItem(newActivity);
        activityList.appendChild(newLi);
        activityInput.value = '';
    }
});

function createListItem(activity) {
    const newLi = document.createElement('li');
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    const newLabel = document.createElement('label');
    newLabel.textContent = activity;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';

    newLi.appendChild(newInput);
    newLi.appendChild(newLabel);
    newLi.appendChild(removeButton);

    return newLi;
}

const existingListItems = activityList.querySelectorAll('li');
existingListItems.forEach((item) => {
    const label = item.querySelector('label');
    const activity = label.textContent;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    item.appendChild(removeButton);
});
