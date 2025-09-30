//جاوا اسکریپت
alert("به کارت ویزیت من خوش آمدید!");

  // انتخاب عنوان
document.addEventListener("DOMContentLoaded", function() {
   const title = document.querySelector(".front h1");
  const wrapper = document.querySelector(".card-wrapper");
  const card = document.querySelector(".card");

  if (!wrapper || !card || !title) return; // ایمن: اگر المان وجود نداشت، خارج شو
     //تغییر رنگ عنوان با کلیک 
    let isAltColor=false;
    let isAltText=false;
    const originalText =title.textContent.trim();
    const altText="سلام - خوش آمدید🌸";

    title.style.cursor="pointer";
    title.addEventListener("click", function(){
      //تغییر رنگ
    title.style.color=isAltColor ? "rgb(107,34,175)":"red" ;
    isAltColor=!isAltColor;
    //تغییر متن 
    title.textContent=isAltText ? originalText:altText;
    isAltText=!isAltText;
  });
       // Toggle هم برای چرخش کارت و هم برای بزرگ شدن wrapper
  wrapper.addEventListener("click", function() {
    card.classList.toggle("flipped");
    wrapper.classList.toggle("grow");
  });
});
