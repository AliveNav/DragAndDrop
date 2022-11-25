
// get and set Url values
let minValue = 0;
let maxValue = 0;
const queryString = window.location.search;
const urlSearchParams = new URLSearchParams(queryString);
for (const [key, value] of urlSearchParams) {
  // console.log(`${key}=>${value}`)
  minValue = urlSearchParams.get("min");
  maxValue = urlSearchParams.get("max");
}

// Header part Welcome text and show random number
const firstLine = $("#first-line"),
  secondLine = $("#second-line");

firstLine.html("Übung 1");
secondLine.html("Ziehen und Ablegen");

// only start button is enable all other buttons are disabled
$("#checkbtn").prop("disabled", true);

// main field

let random;
let counter = 0;

let counterEiner = 0;
let counterZehner = 0;
let counterHunderter = 0;
let counterTausender = 0;
var img_1_id = "#imgEiner";
var img_10_id = "#imgZehner";
var img_100_id = "#imgHunderter";
var img_1000_id = "#imgTausender";
var dropID = "#dropbox";

var dropBox = $("#dropbox");
var positionLeft = dropBox.position().left;
var positionTop = dropBox.position().top;
var dropBoxWidth = dropBox.width();
var dropBoxHeight = dropBox.height();

var down = $("#down");
var down_height = down.height();
var down_width = down.width();
var down_pos_left = down.position().left;
var down_pos_top = down.position().top;

var up = $("#up");
var up_height = up.height();

var el1_height = $("#imgEiner").height();
var el1_width = $("#imgEiner").width();
var el10_height = $("#imgZehner").height();
var el10_width = $("#imgZehner").width();
var el1000_height = $("#imgTausender").height();
var el1000_width = $("#imgTausender").width();
var el100_height = $("#imgHunderter").height();
var el100_width = $("#imgHunderter").width();

var down_ids = [
  "cloneElement-1-down",
  "cloneElement-10-down",
  "cloneElement-100-down",
  "cloneElement-1000-down",
];
var merge_ids = [
  "cloneElement-1-dropbox-merge",
  "cloneElement-10-dropbox-merge",
  "cloneElement-100-dropbox-merge",
  "cloneElement-1000-dropbox-merge",
];
var delete_ids = [
  "cloneElement-1-dropBox-delete",
  "cloneElement-10-dropBox-delete",
  "cloneElement-100-dropBox-delete",
  "cloneElement-1000-dropBox-delete",
];

// select the dropable area  and add a drop function on it
// each time a draggable image drops in the field  increment the counter accordingly
// If an element is droped in "down" area change its ID to "down id" this is to identify and differentiate between items in merge area and down area
$("#down").droppable({
  tolerance: "fit",
  drop: function (event, ui) {
    var $canvas = $(this);

    if (!ui.draggable.hasClass("canvas-element")) {
      if (ui.draggable.hasClass("img1")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-1-down");
      } else if (ui.draggable.hasClass("img2")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-10-down");
      } else if (ui.draggable.hasClass("img3")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-100-down");
      } else if (ui.draggable.hasClass("img4")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-1000-down");
      }
      $canvasElement.addClass("canvas-element");
      $canvasElement.draggable({
        containment: "#dropbox",
      });
      $canvas.append($canvasElement);
      $canvasElement.css({
        left: ui.position.left,
        top: ui.position.top,
        position: "absolute",
      });
    }
    if (ui.draggable.attr("id") === merge_ids[0]) {
      ui.draggable.attr("id", down_ids[0]);
      counterEiner--;
      console.log(counterEiner);
    } else if (ui.draggable.attr("id") === merge_ids[1]) {
      ui.draggable.attr("id", down_ids[1]);
      counterZehner--;
      console.log(counterZehner);
    } else if (ui.draggable.attr("id") === merge_ids[2]) {
      ui.draggable.attr("id", down_ids[2]);
      counterHunderter--;
    } else if (ui.draggable.attr("id") === merge_ids[3]) {
      ui.draggable.attr("id", down_ids[3]);
    }
  },
});

// If a element is droped in "dropbox merge" area
$("#dropbox-merge").droppable({
  tolerance: "fit",
  drop: function (event, ui) {
    var $canvas = $(this);

    if (!ui.draggable.hasClass("canvas-element")) {
      if (ui.draggable.hasClass("img1")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-1-dropbox-merge");
        counterEiner++;
      } else if (ui.draggable.hasClass("img2")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-10-dropbox-merge");
        counterZehner++;
        console.log(counterZehner);
      } else if (ui.draggable.hasClass("img3")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-100-dropbox-merge");
        counterHunderter++;
      } else if (ui.draggable.hasClass("img4")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-1000-dropbox-merge");
        counterTausender++;
      }
      $canvasElement.addClass("canvas-element");
      $canvasElement.draggable({
        containment: "#dropbox",
      });
      $canvas.append($canvasElement);
      $canvasElement.css({
        left: ui.position.left,
        top: ui.position.top,
        position: "absolute",
      });
    }
    if (ui.draggable.attr("id") === down_ids[0]) {
      ui.draggable.attr("id", merge_ids[0]);
      counterEiner++;
      console.log(counterEiner);
    } else if (ui.draggable.attr("id") === down_ids[1]) {
      ui.draggable.attr("id", merge_ids[1]);
      counterZehner++;
      console.log(counterZehner);
    } else if (ui.draggable.attr("id") === down_ids[2]) {
      ui.draggable.attr("id", merge_ids[2]);
      counterHunderter++;
    } else if (ui.draggable.attr("id") === down_ids[3]) {
      ui.draggable.attr("id", merge_ids[3]);
    }

    if (counterEiner == 10) {
      createElement(img_10_id);
      var boxes = $("[id=cloneElement-1-dropbox-merge]");
      var boxes_length = boxes.length;
      merge(boxes, boxes_length, el1_width - 3, 0);
      boxes.hide("slow", function () {
        boxes.remove();
      });
      counterEiner = 0;
      counterZehner++;
      console.log(counterZehner);
    }
    if (counterZehner == 10) {
      createElement(img_100_id);
      var boxes = $("[id=cloneElement-10-dropbox-merge]");
      var boxes_length = boxes.length;
      merge(boxes, boxes_length, 0, el10_height - 6);
      boxes.hide("slow", function () {
        boxes.remove();
      });
      counterZehner = 0;
      counterHunderter++;
    }
    if (counterHunderter == 10) {
      createElement(img_1000_id);
      var boxes = $("[id=cloneElement-100-dropbox-merge]");
      var boxes_length = boxes.length;
      merge(boxes, boxes_length, 3, 3);
      boxes.hide("slow", function () {
        boxes.remove();
      });
      counterHunderter = 0;
    }
  },
});

// If a element is droped into "delete" area, remove them and set the counters back to zero
$("#dropBox-delete").droppable({
  tolerance: "intersect",
  drop: function (event, ui) {
    var $canvas = $(this);
    if (!ui.draggable.hasClass("canvas-element")) {
      if (ui.draggable.hasClass("img1")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-1-delete");
      } else if (ui.draggable.hasClass("img2")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-10-delete");
      } else if (ui.draggable.hasClass("img3")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-100-delete");
      } else if (ui.draggable.hasClass("img4")) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.attr("id", "cloneElement-1000-delete");
      }
      $canvasElement.addClass("canvas-element");
      // $canvasElement.draggable({
      //   containment: "#dropbox",
      // });
      $canvas.append($canvasElement);
      $canvasElement.css({
        left: ui.position.left,
        top: ui.position.top,
        position: "absolute",
      });
      delete_slowly($canvasElement, $canvasElement.width());
      $canvasElement.hide("slow", function () {
        $canvasElement.remove();
      });
    }
    if (ui.draggable.attr("id") === merge_ids[0]) {
      ui.draggable.attr("id", delete_ids[0]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
      counterEiner--;
    } else if (ui.draggable.attr("id") === merge_ids[1]) {
      ui.draggable.attr("id", delete_ids[1]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
      counterZehner--;
      console.log(counterZehner);
    } else if (ui.draggable.attr("id") === merge_ids[2]) {
      ui.draggable.attr("id", delete_ids[2]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
      counterHunderter--;
    } else if (ui.draggable.attr("id") === merge_ids[3]) {
      ui.draggable.attr("id", delete_ids[3]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
    }

    if (ui.draggable.attr("id") === down_ids[0]) {
      ui.draggable.attr("id", delete_ids[0]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
    } else if (ui.draggable.attr("id") === down_ids[1]) {
      ui.draggable.attr("id", delete_ids[1]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
    } else if (ui.draggable.attr("id") === down_ids[2]) {
      ui.draggable.attr("id", delete_ids[2]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
    } else if (ui.draggable.attr("id") === down_ids[3]) {
      ui.draggable.attr("id", delete_ids[3]);
      delete_slowly(ui.draggable, ui.draggable.width());
      ui.draggable.hide("slow", function () {
        ui.draggable.remove();
      });
    }
  },
});

// if there is "10" of the same elements in "merge" area , merge them into one higher element  e.g  ten  of  Box "1" --> one Box"10"
function merge(element, element_length, element_width, element_height) {
  var temp_x = 5;
  var temp_y = 5;
  if (element_length == 10) {
    element.each(function (index, el) {
      $(this).animate(
        {
          top: positionTop + temp_y,
          left: positionLeft + temp_x,
        },
        "slow"
      );
      temp_x += element_width;
      temp_y += element_height;
    });
  }
}
// create a clone element
// used to replace the merge elements , if there are 1o of the same kind change it to a higher element (only in merge area)

function createElement(elID) {
  // temp variables used to specify the place of the new created element in "merge area"
  var temp_x = 5;
  var temp_y = 5;
  var newElement = $(elID).clone();
  var $canvas = $("#dropbox-merge");
  newElement.addClass("hide");

  if (elID == "#imgZehner") {
    newElement.attr("id", "cloneElement-10-dropbox-merge");
  } else if (elID == "#imgHunderter") {
    newElement.attr("id", "cloneElement-100-dropbox-merge");
  } else if (elID == "#imgTausender") {
    newElement.attr("id", "cloneElement-1000-dropbox-merge");
  }
  newElement.draggable({
    containment: "#dropbox",
  });
  $canvas.append(newElement);
  newElement.css({
    left: $canvas.position().left + temp_x,
    top: $canvas.position().top + temp_y,
    position: "absolute",
  });
  newElement.removeClass("hide");
  newElement.addClass("unhide");
  newElement.addClass("canvas-element");
}
// start Button display the random number  between two values, which is set in URL

function randomNumberGenerator() {
  //get the min and max values set by user
  let min = minValue;
  let max = maxValue;
  let cmin = Math.ceil(min);
  let cmax = Math.floor(max);
  random = Math.floor(Math.random() * (cmax - cmin) + cmin);
  let randomnumberString = random.toString();

  // read the number

  const speaker = window.speechSynthesis;
  let msg = new SpeechSynthesisUtterance();
  var textToSpeak = random.toString();
  msg.text = textToSpeak;
  msg.lang = "de-De";
  msg.rate = 0.7;
  msg.voice = window.speechSynthesis.getVoices()[6];
  var voices = window.speechSynthesis.getVoices();

  speaker.speak(msg);

  // show the randomly generated number on header part

  firstLine.html("Stelle die Zahl");
  $("#randomNumber").html(randomnumberString);
  secondLine.html("mit Hilfe der Materialien dar!");

  firstLine.removeClass("firstLineFalsch");
  firstLine.addClass("lineAfter");

  // reset the values of all counters clear the field
  $("[id=cloneElement-1-down]").remove();
  $("[id=cloneElement-10-down]").remove();
  $("[id=cloneElement-100-down]").remove();
  $("[id=cloneElement-1000-down]").remove();
  $("[id=cloneElement-1-dropbox-merge]").remove();
  $("[id=cloneElement-10-dropbox-merge]").remove();
  $("[id=cloneElement-100-dropbox-merge]").remove();
  $("[id=cloneElement-1000-dropbox-merge]").remove();
  counter = 0;
  counterEiner = 0;
  counterZehner = 0;
  counterHunderter = 0;
  counterTausender = 0;

  // select the  images ( boxes representing the place Value) and make them draggable

  $("#imgEiner").draggable({
    helper: "clone",
    cursor: "move",
    scroll: false,
  });
  $("#imgZehner").draggable({
    helper: "clone",
    cursor: "move",
    scroll: false,
  });
  $("#imgHunderter").draggable({
    helper: "clone",
    cursor: "move",
    scroll: false,
  });
  $("#imgTausender").draggable({
    helper: "clone",
    cursor: "pointer",
    scroll: false,
  });

  //read the number

  // disable the start button once clicked
  $("#checkbtn").prop("disabled", false);
  $("#valuebtn").prop("disabled", true);

  // }
}
// function for "Überprüfen"  check button   on click  check  if the value of the boxes are same as the generated random number on header
function check() {
  sortElements();
  let counter_1 = $("[id=cloneElement-1-down]").length;
  let counter_10 = $("[id=cloneElement-10-down]").length;
  let counter_100 = $("[id=cloneElement-100-down]").length;
  let counter_1000 = $("[id=cloneElement-1000-down]").length;
  let counter_1_merge = $("[id=cloneElement-1-dropbox-merge]").length;
  let counter_10_merge = $("[id=cloneElement-10-dropbox-merge]").length;
  let counter_100_merge = $("[id=cloneElement-100-dropbox-merge]").length;
  let counter_1000_merge = $("[id=cloneElement-1000-dropbox-merge]").length;

  let counter_1_total = counter_1 + counter_1_merge;
  let counter_10_total = counter_10 + counter_10_merge;
  let counter_100_total = counter_100 + counter_100_merge;
  let counter_1000_total = counter_1000 + counter_1000_merge;

  let result =
    counter_1_total +
    counter_10_total * 10 +
    counter_100_total * 100 +
    counter_1000_total * 1000;
  console.log(result);

  if (random == result) {
    if (
      counter_1000_total == 0 &&
      counter_100_total == 0 &&
      counter_10_total == 0
    ) {
      $("#randomNumber").html();
      firstLine.html("Perfekt! deine Antwort ist richtig!");
      secondLine.html(
        "Die Zahl " +
          random +
          " besteht aus " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
    } else if (counter_1000_total == 0 && counter_100_total == 0) {
      $("#randomNumber").html();
      firstLine.html("Hervorragend! deine Antwort ist richtig!");
      secondLine.html(
        "Die Zahl " +
          random +
          " besteht aus " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
    } else if (counter_1000_total == 0) {
      $("#randomNumber").html(" ");
      firstLine.html("Sehr gut! deine Antwort ist richtig!");
      secondLine.html(
        "Die Zahl " +
          random +
          " besteht aus " +
          counter_100_total +
          " Hunderter, " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
    } else {
      $("#randomNumber").html();
      firstLine.html("Ausgezeichnet! deine Antwort ist richtig!");
      secondLine.html(
        "Die Zahl " +
          random +
          " besteht aus " +
          counter_1000_total +
          " Tausender" +
          counter_100_total +
          " Hunderter, " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
    }
    $("#valuebtn").prop("disabled", false);
  } else {
    if (
      counter_1000_total == 0 &&
      counter_100_total == 0 &&
      counter_10_total == 0
    ) {
      $("#randomNumber").html(" ");
      firstLine.html(
        "Du hast die Zahl " + result + " gelegt: " + counter_1_total + " Einer."
      );
      secondLine.html(
        "Du solltest die Zahl " + random + " darstellen, versuche es nochmal"
      );
    } else if (counter_1000_total == 0 && counter_100_total == 0) {
      $("#randomNumber").html(" ");
      firstLine.html(
        "Du hast die Zahl " +
          result +
          " gelegt: " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
      secondLine.html(
        "Du solltest die Zahl " + random + " darstellen, versuche es nochmal"
      );
    } else if (counter_1000_total == 0) {
      $("#randomNumber").html(" ");
      firstLine.html(
        "Du hast die Zahl " +
          result +
          " gelegt: " +
          counter_100_total +
          " Hunderter, " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
      secondLine.html(
        "Du solltest die Zahl " + random + " darstellen, versuche es nochmal"
      );
    } else {
      $("#randomNumber").html(" ");
      firstLine.html(
        "Du hast die Zahl " +
          result +
          " gelegt: " +
          counter_1000_total +
          " Tausender " +
          counter_100_total +
          " Hunderter, " +
          counter_10_total +
          " Zehner, " +
          counter_1_total +
          " Einer."
      );
      secondLine.html(
        "Du solltest die Zahl " + random + " darstellen, versuche es nochmal"
      );
    }
  }
}
// ًreset button or Correction button  will remove all the boxes from the field
function reset() {
  $("[id=cloneElement-1-down]").remove();
  $("[id=cloneElement-10-down]").remove();
  $("[id=cloneElement-100-down]").remove();
  $("[id=cloneElement-1000-down]").remove();
  $("[id=cloneElement-1-dropbox-merge]").remove();
  $("[id=cloneElement-10-dropbox-merge]").remove();
  $("[id=cloneElement-100-dropbox-merge]").remove();
  $("[id=cloneElement-1000-dropbox-merge]").remove();
  counter = 0;
  counterEiner = 0;
  counterZehner = 0;
  counterHunderter = 0;
  counterTausender = 0;

  let randomnumberString = random.toString();
  firstLine.html("Stelle die Zahl");
  $("#randomNumber").html(randomnumberString);
  secondLine.html("mit Hilfe der Materialien dar!");

  firstLine.removeClass("firstLineFalsch");
  firstLine.addClass("lineAfter");
}
//sort functions
// used for sorting "100" and "1000" elements
function sort_row(
  element,
  element_width,
  element_height,
  space_x,
  space_y,
  arr_length,
  gap_x,
  box_width,
  box_height,
  pos_left,
  pos_top
) {
  spaceX = space_x;
  var temp = (box_width / element_width) >> 0;
  element.each(function (index, el) {
    if (arr_length <= temp) {
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - space_y,
          position: "absolute",
        },
        "slow"
      );
      spaceX += element_width;
    } else if (arr_length > temp && arr_length < temp * 2) {
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - space_y),
          position: "absolute",
        },
        "slow"
      );
      spaceX += element_width / gap_x;
    } else {
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - space_y),
          position: "absolute",
        },
        "slow"
      );
      spaceX += 5;
    }
  });
}
// used for sorting the "1" and "10" elements
function sort_row2(
  element,
  element_width,
  element_height,
  space_x,
  space_y,
  gap_x,
  box_width,
  box_height,
  pos_left,
  pos_top
) {
  var spaceX = space_x;
  var spaceY = space_y;
  var temp = (box_width / element_width) >> 0;
  element.each(function (index, el) {
    if (index < 5) {
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - spaceY,
          position: "absolute",
        },
        "slow"
      );
      spaceY -= element_height + gap_x;
    } else if (index == 5) {
      spaceX = element_width + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - spaceY,
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 5 && index < 10) {
      spaceY -= element_height + gap_x;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index == 10) {
      spaceX = element_width * 2 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 10 && index < 15) {
      spaceY -= element_height + gap_x;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index == 15) {
      spaceX = element_width * 3 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 15 && index < 20) {
      spaceY -= element_height + gap_x;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    }
  });
}
function sort_row4(
  element,
  element_width,
  element_height,
  space_x,
  space_y,
  gap_x,
  box_width,
  box_height,
  pos_left,
  pos_top
) {
  var spaceX = space_x;
  var spaceY = space_y;
  var temp = (box_width / element_width) >> 0;
  element.each(function (index, el) {
    if (index < 5) {
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - spaceY,
          position: "absolute",
        },
        "slow"
      );
      spaceY -= element_height + gap_x;
    } else if (index == 5) {
      spaceX = element_width * 2 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - spaceY,
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 5 && index < 10) {
      spaceY -= element_height + gap_x;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index == 10) {
      spaceX = element_width * 3 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 10 && index < 15) {
      spaceY -= element_height + gap_x;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index == 15) {
      spaceX = element_width * 4 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 15 && index < 20) {
      spaceY -= element_height + gap_x;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    }
  });
}
// used for sorting the "1" and "10" elements , if there are more than 20 of each kind
function sort_row3(
  element,
  element_width,
  element_height,
  space_x,
  space_y,
  gap_x,
  box_width,
  box_height,
  pos_left,
  pos_top
) {
  var spaceX = space_x;
  var spaceY = space_y;
  var temp = (box_width / element_width) >> 0;
  element.each(function (index, el) {
    if (index < 12) {
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - spaceY,
          position: "absolute",
        },
        "slow"
      );
      spaceY -= element_height / 2;
    } else if (index == 12) {
      spaceX = element_width + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + box_height - spaceY,
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 12 && index < 24) {
      spaceY -= element_height / 2;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index == 24) {
      spaceX = element_width * 2 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 24 && index < 36) {
      spaceY -= element_height / 2;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index == 36) {
      spaceX = element_width * 3 + 5;
      spaceY = space_y;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    } else if (index > 36 && index < 48) {
      spaceY -= element_height / 2;
      $(this).animate(
        {
          left: pos_left + spaceX,
          top: pos_top + (box_height - spaceY),
          position: "absolute",
        },
        "slow"
      );
    }
    // else if(index >= 18) {
    //   spaceY -= gap_x;
    //   $(this).css({
    //     left: pos_left + spaceX,
    //     top: pos_top + (box_height - spaceY),
    //     position: "absolute",
    //   });
    // }
  });
}

function change_id(element,id_new){
  element.each(function(){
      element.attr('id', id_new)
      
  })
}

//sorting logic
function sortElements() {

  // sorting happens inside "down area" so everytime we sort elements make sure all the elements have "down id"
  // this is useful for merging elements , we dont want to merge elements which are inside "down area"
  // after sorting elements , thoes elements which have still "merge id" needs to be change to "down id" 
  var el1_merge = $("[id=cloneElement-1-dropbox-merge]");
  var el10_merge = $("[id=cloneElement-10-dropbox-merge]");
  var el100_merge = $("[id=cloneElement-100-dropbox-merge]");
  var el1000_merge = $("[id=cloneElement-1000-dropbox-merge]");
  counterEiner -= el1_merge.length
  counterZehner -= el10_merge.length
  counterHunderter -=  el100_merge.length
  counterTausender -= el1000_merge.length
  change_id(el1_merge,down_ids[0])
  change_id(el10_merge,down_ids[1])
  change_id(el100_merge,down_ids[2])
  change_id(el1000_merge,down_ids[3])



  var el1 = $("[id=cloneElement-1-down],[id=cloneElement-1-dropbox-merge]");
  var el10 = $("[id=cloneElement-10-down],[id=cloneElement-10-dropbox-merge]");
  var el100 = $("[id=cloneElement-100-down],[id=cloneElement-100-dropbox-merge]");
  var el1000 = $("[id=cloneElement-1000-down],[id=cloneElement-1000-dropbox-merge]");
  var dropBox = $("#dropbox");



  var row1 = false;
  var row2 = false;
  var row3 = false;
  var row4 = false;

  var height1 = el1000_height;
  var height2 = el1000_height*2;
  var height3 = down_height;
  var height4 = el1000_height * 4;
  console.log(height4);

  var spaceX = 5;
  var spaceY = 5;

  //  starting from bottom (row1) sort "1000" boxes
  // as long as it fits to one row at the bottom sort them beside each others.
  // when there are more "1000" boxes, which doesnt fit in a row, stack them on top of each other

  let el1000length = el1000.length;
  let el100length = el100.length;
  let el10length = el10.length;
  let el1length = el1.length;

  if (el1000length >= 1) {
    row1 = true;
    sort_row(
      el1000,
      el1000_width,
      el1000_height,
      5,
      height1,
      el1000length,
      4,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  }

  //  sort the "100" Boxes on top of the "1000" boxes only if there is atleast one "1000" Box
  // if there is no "1000" Box than  sort them in row4
  // as long as it fits to one row, sort them beside each others.
  // when there are more "100" boxes, which doesnt fit in a row, stack them on top of each other
  if (el100length >= 1 && row1) {
    console.log("here", row1);
    row2 = true;
    sort_row(
      el100,
      el100_width,
      el100_height,
      5,
      height2,
      el100length,
      4,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el100length >= 1) {
    console.log("here", row2);
    row1 = true;
    sort_row(
      el100,
      el100_width,
      el100_height,
      5,
      height1,
      el100length,
      4,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  }

  // sort "10" Boxes row3 on top of "100" and "1000" boxes
  // if there is no "100"/"1000" Boxes  sort "10" Boxes in row2/row1
  // each column contains 5 elements
  if (el10length > 20) {
    sort_row3(
      el10,
      el10_width,
      el10_height,
      5,
      height3,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el10length >= 1 && row1 && row2) {
    row3 = true;
    sort_row4(
      el10,
      el10_width,
      el10_height,
      el10_width,
      height3,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el10length >= 1 && row1) {
    row2 = true;
    sort_row2(
      el10,
      el10_width,
      el10_height,
      5,
      height2,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el10length >= 1) {
    row1 = true;
    sort_row2(
      el10,
      el10_width,
      el10_height,
      5,
      height1,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  }

  // if the other rows are full sort the "1" Elements on row4
  if (el1length > 20) {
    sort_row3(
      el1,
      el1_width,
      el1_height,
      5,
      height3,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el1length >= 1 && row1 && row2 && row3) {
    sort_row2(
      el1,
      el1_width,
      el1_height,
      5,
      height3,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el1length >= 1 && row1 && row2) {
    sort_row2(
      el1,
      el1_width,
      el1_height,
      5,
      height3,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el1length >= 1 && row1) {
    sort_row2(
      el1,
      el1_width,
      el1_height,
      5,
      height2,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  } else if (el1length >= 1) {
    sort_row2(
      el1,
      el1_width,
      el1_height,
      5,
      height1,
      5,
      dropBoxWidth,
      dropBoxHeight,
      positionLeft,
      positionTop
    );
  }
}
// read the random generated Number
function speakit() {
  const speaker = window.speechSynthesis;
  let msg = new SpeechSynthesisUtterance();
  var textToSpeak = random.toString();
  msg.text = textToSpeak;
  msg.lang = "de-De";
  msg.rate = 0.7;
  msg.voice = window.speechSynthesis.getVoices()[6];
  var voices = window.speechSynthesis.getVoices();

  speaker.speak(msg);
}

//used for delete area animation
//prevent outside the delete area animation
function delete_slowly(element, element_width) {
  element.animate(
    {
      top: positionTop + up_height / 4,
      left: positionLeft + dropBoxWidth - element_width,
    },
    "slowly"
  );
}
