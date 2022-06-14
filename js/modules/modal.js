function openModal(modalSelctor, modalTimerId) {
    const modal = document.querySelector(modalSelctor);
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelctor) {
    const modal = document.querySelector(modalSelctor);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelctor, modalTimerId) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelctor);

    modalTrigger.forEach(btn => {
        btn.addEventListener("click", () => openModal(modalSelctor,  modalTimerId));
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelctor);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelctor);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelctor, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
};

export default modal;
export {closeModal};
export {openModal};