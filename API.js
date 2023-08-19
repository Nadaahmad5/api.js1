const list= document.getElementById('list');
async function APIFetch(){
    try{
        const fetchapi= await fetch('https://jsonplaceholder.typicode.com/posts');
        const data= await fetchapi.json();
        console.log(data);


            data.forEach(element => {  // to loop and list all the elements in the array of element list
            const listElement= document.createElement('li')

            listElement.innerHTML = ` userid: ${element.userId}`
            listElement.innerHTML += `<br> id: ${element.id}`
            listElement.innerHTML += `<br> title: ${element.title}`
            listElement.innerHTML += ` <br> body:  ${element.body}`;
            console.log(element)

            list.appendChild(listElement); // allows to add a node to the end of the list of child nodes of a specified parent node
            });


    }
    catch(error){
    console.error('error in fetching data', error);
    }
}

APIFetch()