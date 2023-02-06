let btn = document.getElementById('button');
let input = document.getElementById('input');
let ans = document.getElementById('answer');

const url = "https://yesno.wtf/api";

let isRequestInProgress = false;

const setIsRequestInProgress = value => {
    isRequestInProgress = value;
};


const getAnswer = () => {
    if (isRequestInProgress) return;

    if (!input.value)
        return error();

    fetchAnswer();
};

const error = () => {
    ans.innerHTML = "enter something..";

    setTimeout(() => {
        ans.innerHTML = '';
    }, 3000);
};

const fetchAnswer = () => {

    setIsRequestInProgress(true);

    fetch(url)
        .then(response => response.json())
        .then(response => display(response.image));
};

const display = answer => {
    setTimeout(() => {
        ans.innerHTML = `<img src=\"${answer}\" width=\"600px\" height=\"400px\">`;
        clearScreen();
    }, 3000);

};


const clearScreen = () => {
    setTimeout(() => {
        ans.innerHTML = '';
        input.value = '';
        setIsRequestInProgress(false);
    }, 3000);
};

btn.addEventListener('click', getAnswer);