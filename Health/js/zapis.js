// Берем данные из инпутов
const name = document.querySelector("#name-input");
const tel = document.querySelector("#tel-input");
const age = document.querySelector("#age-input");
const doctor = document.querySelector("#doctor-input");
const email = document.querySelector("#email-input");

// Constants
const token = "5397874444:AAGMFErHwORJDhU7yER-5hBir5BBWpd8wl0";
const chatId = "-699621226";

// Forma
const form = document.querySelector("#form");

// Сабмитим
function submit(event) {
  event.preventDefault(); // Форма не презагружала страницу

  const nameValue = name.value;
  const telValue = tel.value;
  const ageValue = age.value;
  const doctorValue = doctor.value;
  const emailValue = email.value;

  console.log(nameValue, telValue, ageValue, doctorValue, emailValue);

  createMessage(
    `<pre>Имя: ${nameValue}</pre><pre>Телефон: ${telValue}</pre><pre>Возраст: ${ageValue}</pre><pre>Врач: ${doctorValue}</pre><pre>Мэйл: ${emailValue}</pre>`
  );
}

// Прослушка
form.addEventListener("submit", submit);

// Fetch и отправка запросов
function createMessage(msg) {
  const newMsg = msg;

  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${newMsg}`,
    {
      method: "POST",
    }
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res);

      if (res.ok) {
        alert("Ваша заявка отправлена!");
      } else {
        alert("Ваша заявка не отправлена попробуйте снова!");
      }
    });
}
