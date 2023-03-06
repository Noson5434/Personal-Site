// Toast Popup
const btn = document.getElementById("myBtn");
const element = document.getElementById("myToast");
if (btn) {
  btn.addEventListener("click", () => {
    const toast = new bootstrap.Toast(element);
    toast.show();
  });
}
