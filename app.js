// Cache DOM elements
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");

// Add item when button is clicked
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    addItem(text);
    input.value = ""; // clear input
  }
});

// Add item when Enter key is pressed
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Function to add new item
function addItem(text) {
  const li = document.createElement("li");

  // Item text
  let span = document.createElement("span");
  span.textContent = text;

  // Buttons container
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("buttons");

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");  // Add green styling
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      // Switch to edit mode
      const inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.value = span.textContent;
      li.replaceChild(inputEdit, span);
      editBtn.textContent = "Save";
      span = inputEdit;
      inputEdit.focus();
    } else {
      // Save edited text
      const newSpan = document.createElement("span");
      newSpan.textContent = span.value;
      li.replaceChild(newSpan, span);
      span = newSpan;
      editBtn.textContent = "Edit";
     
    }
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");  // Add red styling
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append buttons
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(removeBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);

  list.appendChild(li);
}
