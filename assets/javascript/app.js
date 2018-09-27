//create reset button
//review .html("<img src...> whatever")
//what does


var time = 30;
var count = 0;
var guessArray = [];
var answerArray = ["a", "c", "a"];


window.onload = function () {
    $("#start").on("click", stopwatch.start);
    $("#reset").on("click", stopwatch.reset);
    pContent = $("#lossMessage");
    $("#row2, #row3, #row4").hide();
    //$("#reset").hide();
};

function showSecondQuestion() {
    $("#row3").show();
}

function showThirdQuestion() {
    $("#row4").show();
}


function checkRightArray() {
    for(i=0; i<answerArray.length; i++) {
        if(guessArray[i] === answerArray[i]) {
            count++;
            console.log(count);
        }
    }

    if(count == 3) {
        console.log("all three correct!");
    }
}



$(".btn").on("click", function () {
    if ($(this).attr('id') == "btn1a") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked a");
        $("#btn1b, #btn1c").off("click");
        setTimeout(showSecondQuestion, 2000);
    } else if ($(this).attr('id') == "btn1b") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked b");
        $("#btn1a, #btn1c").off("click");
        setTimeout(showSecondQuestion, 2000);
    } else if ($(this).attr('id') == "btn1c") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked c");
        $("#btn1a, #btn1b").off("click");
        setTimeout(showSecondQuestion, 2000);


    } else if ($(this).attr('id') == "btn2a") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked a");
        $("#btn2b, #btn2c").off("click");
        setTimeout(showThirdQuestion, 2000);
    }

    else if ($(this).attr('id') == "btn2b") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked b");
        $("#btn2a, #btn2c").off("click");
        setTimeout(showThirdQuestion, 2000);
    }

    else if ($(this).attr('id') == "btn2c") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked c");
        $("#btn2a, #btn2b").off("click");
        setTimeout(showThirdQuestion, 2000);
    }

    else if ($(this).attr('id') == "btn3a") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked a");
        $("#btn3b, #btn3c").off("click");
        clearInterval(countDown);
        clockRunning = false;
        console.log("you're finished");
        checkRightArray();
        $("#reset").show();
    }

    else if ($(this).attr('id') == "btn3b") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked b");
        $("#btn3a, #btn3c").off("click");
        clearInterval(countDown);
        clockRunning = false;
        console.log("you're finished");
        checkRightArray();
        $("#reset").show();
    }

    else if ($(this).attr('id') == "btn3c") {
        guessArray.push($(this).val());
        console.log(guessArray);
        console.log("you clicked c");
        $("#btn3a, #btn3b").off("click");
        clearInterval(countDown);
        clockRunning = false;
        console.log("you're finished");
        checkRightArray();
        $("#reset").show();
    }
})



var stopwatch = {

    start: function () {
        
        countDown = setInterval(stopwatch.count, 1000);
        pContent.text(" ");
        $("#row2").show();
        
        
    },

    reset: function() {
        time = 30;
        $("#display").text(stopwatch.timeConverter(30));
        $("#row2, #row3, #row4").hide();
        guessArray = [];
        
    },

    //starts at 30 seconds, and counds down.
    count: function () {
        time--;
        //$("#display").html(time);
        //console.log(time);
        displayFormattedTime = stopwatch.timeConverter(time);
        $("#display").html(displayFormattedTime);

        if (time === 0) {
            clearInterval(countDown);

            pContent.text("Time's Up, You Lose!");
        }

    },

    timeConverter: function (t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};

