// Create Read Update Delete


const form = document.getElementById('form');
const todo = document.getElementById('todo');
const listItems = document.querySelector('.list-items');

form.addEventListener('submit', function(e){
    e.preventDefault();


    // CREATE AND READ

    const todoValue = todo.value;
        console.log(todoValue);



    let item = `
                <div class="item">
                    <p>${todoValue}</p>

                    <div class="btn-archive">
                        <i class="fa-solid fa-circle-check fa-xl"></i>
                    </div>

                    <div class="btn-delete">
                        <i class="fa-solid fa-trash fa-xl"></i>
                    </div>

                </div>
    
                `

    listItems.innerHTML += item;


    // UPDATE (ARCHIVE)


    const btnArchive = document.querySelectorAll('.btn-archive');

        btnArchive.forEach(i => {
            
                i.addEventListener('click', function(){
                
                    const parent = i.parentElement;
                    parent.classList.toggle('done');
            });

        });
    


    
    // DELETE


    const btnDelete = document.querySelectorAll('.btn-delete');

        btnDelete.forEach(i => {
            
            i.addEventListener('click', function(){
                i.parentElement.remove();
            })
        });


form.reset();


})