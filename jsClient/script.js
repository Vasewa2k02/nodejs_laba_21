const createContact = () => {
  fetch("/Add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementsByClassName("name")[0].value,
      phoneNumber: document.getElementsByClassName("phone-number")[0].value,
    }),
  }).then(() => (window.location.href = "/"));
};

const updateContact = () => {
  const name = document.getElementsByClassName("name")[0].value;
  const phoneNumber = document.getElementsByClassName("phone-number")[0].value;

  fetch("/Update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: document.getElementsByClassName("id")[0].value,
      name: name ? name : undefined,
      phoneNumber: phoneNumber ? phoneNumber : undefined,
    }),
  }).then(() => (window.location.href = "/"));
};

function deleteContact() {
  fetch("/Delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: document.getElementsByClassName("id")[0].value,
    }),
  }).then(() => (window.location.href = "/"));
}

const inputName = document.getElementsByClassName("name")[0];
const inputPhoneNumber = document.getElementsByClassName("phone-number")[0];
const inputs = [inputName, inputPhoneNumber];
inputs = inputs.map((input) => {
  input.addEventListener("input", () => {
    document.getElementsByClassName(
      "default-link delete-link"
    )[0].disabled = true;
  });
});
