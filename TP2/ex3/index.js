function addTodo() {
    const name = document.getElementById("name").value;
    const content = document.getElementById("content").value;

    if (!name || !content) return;

    const todoList = document.getElementById("todoList");
    const li = document.createElement("li");
    li.className = "todo_item";

    const txt = document.createElement("span");
    txt.textContent = `${name}: ${content}`;

    const delete_btn = document.createElement("button");
    delete_btn.className = "delete_btn";
    delete_btn.textContent = "×";
    delete_btn.onclick = function () {
        li.remove();
    };

    // eventlistener to change background color randomly, once the item is clicked on
    li.onclick = function () {
        const randomColor = randcolor();
        li.style.backgroundColor = randomColor;
    };

    li.appendChild(txt);
    li.appendChild(delete_btn);
    todoList.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("content").value = "";
}

function randcolor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
