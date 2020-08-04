
const arrayList = [1,2,3,4,5,6,7,8,9];

const listParent = document.querySelector('ul');

const renderList = (arr) => {
    arr.map(list => {
        let li = document.createElement('li');
        li.classList.add('color'+list);
        let listText = document.createTextNode(list); 
        li.appendChild(listText);
        listParent.appendChild(li);
    }); 
}
renderList(arrayList);

const shuffle = () => {
    listParent.innerHTML="";
    let shuffledArray = arrayList.sort(function(a,b) { return 0.5 - Math.random() });
    renderList(shuffledArray);
}

const sort = () => {
    listParent.innerHTML="";
    let sortedArray = arrayList.sort();
    renderList(sortedArray);
}

const shuffleButton = document.querySelector('button.shuffle');
shuffleButton.addEventListener('click', shuffle);

const sortButton = document.querySelector('button.sort');
sortButton.addEventListener('click', sort);

const enableActions = (e) => {
    console.log(e.target.value);
    if(e.target.value.length > 3){
        shuffleButton.removeAttribute('disabled'); 
        sortButton.removeAttribute('disabled');
    }
}

const userName = document.querySelector('input');
userName.addEventListener('keyup', enableActions)


