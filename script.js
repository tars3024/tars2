// Display a modal with an update message
function displayUpdateMessage() {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    modalTitle.innerText = "Tars.ai: Exciting Times Ahead!";
    modalText.innerText = "Tars.ai is still in its early stages. We're actively building new features and improvements. Stay tuned for updates!";
    modal.style.display = "flex";
  }

  // Close the modal
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  // Show feature information dynamically
  function showFeatureInfo(title, description) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    modalTitle.innerText = title;
    modalText.innerText = description;
    modal.style.display = "flex";
  }

  // Close the modal if clicked outside content
  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
