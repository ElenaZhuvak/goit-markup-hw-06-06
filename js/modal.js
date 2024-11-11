(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  // Проверяем, существуют ли все необходимые элементы
  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error("Some modal elements are missing");
    return;
  }

  // Добавляем обработчики событий для кнопок
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Добавляем обработчик для клика по бэкдропу
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  // Добавляем обработчик для клавиши Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("is-open")) {
      toggleModal();
    }
  });

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-open");
  }
})();