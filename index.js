class BMI {
  static conteur = 0;
  constructor(W, T) {
    this.weight = W;
    this.taille = T;
    this.bmi = this.weight / Math.pow(this.taille, 2);
    BMI.conteur++;
  }
  statue() {
    if (this.bmi < 18.5) {
      return "نقص الوزن";
    } else if (this.bmi <= 25) {
      return "طبيعي";
    } else if (this.bmi < 30) {
      return "زيادة الوزن";
    } else {
      return "السمنة";
    }
  }
  static repetition() {
    return `le nombre de repetition est :${BMI.conteur}`;
  }
}

const weight_input = $("#weight");
const taille_input = $("#taille");
const hm = $("#hm");

const text = $("p");

$("button").click(function () {
  if (
    +weight_input.val() <= 0 ||
    +taille_input.val() <= 0 ||
    +weight_input.val() > 635 ||
    +taille_input.val() > 2.8
  ) {
    alert("المرجو ادخال قيم صحيحة");
    return;
  }
  if (+taille_input.val() === 1 && +weight_input.val() === 1) {
    hm.addClass("hm");
    hm.attr("src", "./asset/hm.jpg");
    setTimeout(() => {
      hm.removeClass("hm");
      hm.attr("src", "./asset/img.png");
    }, 3000);
    return;
  }
  let persone_1 = new BMI(+weight_input.val(), +taille_input.val());

  text.html(
    persone_1.statue() +
      `</br>Your BMI is <span>${persone_1.bmi.toFixed(2)}</span>`
  );
  switch (persone_1.statue()) {
    case "طبيعي":
      $("span").css("color", " #97ff43");
      break;
    case "نقص الوزن":
      $("span").css("color", "rgb(85, 165, 255)");
      break;
    case "زيادة الوزن":
      $("span").css("color", "orange");
      break;
    case "السمنة":
      $("span").css("color", "#f54f4f");
      break;
    default:
      break;
  }
  console.log(BMI.repetition());
});
