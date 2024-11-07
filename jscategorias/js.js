document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener("change", function() {
            const selectedOption = this.value;
            sortProducts(selectedOption);
        });
    }
});

function sortProducts(option) {
    console.log("Ordenando productos por: ", option);
}