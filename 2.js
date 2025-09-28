//جاوا اسکریپت
alert("به کارت ویزیت من خوش آمدید!");

  // انتخاب عنوان
  const title = document.querySelector(".front h1");
  const card = document.querySelector(".card");

  // وقتی موس رفت روی کارت
  card.addEventListener("mouseenter", function () {
    title.style.color = "blue"; // تغییر رنگ
  });

  // وقتی موس از کارت خارج شد
  card.addEventListener("mouseleave", function () {
    title.style.color = "rgb(107, 34, 175)"; // برگشت به رنگ اصلی
  });

