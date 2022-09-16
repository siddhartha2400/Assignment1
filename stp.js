var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var x = 0;

var timer = false;

function start()
{
    timer = true;
    stopwatch();
}

function stop()
{
    timer = false;
}

function reset()
{
    timer = false;
    count = 0;
    sec = 0;
    min = 0;
    hr = 0;
    alert("You have selected to reset the stopwatch");
    x=0;

    document.getElementById("count").innerHTML = count;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hr").innerHTML = hr;
    
    // document.getElementById("lap3").innerHTML = hr +":";
    // document.getElementById("lap2").innerHTML = min +":";
    // document.getElementById("lap1").innerHTML = sec + ":";
    // document.getElementById("lap0").innerHTML = count;
    // document.getElementById("lap7").innerHTML = hr +":";
    // document.getElementById("lap6").innerHTML = min +":";
    // document.getElementById("lap5").innerHTML = sec + ":";
    // document.getElementById("lap4").innerHTML = count;
    // document.getElementById("lap11").innerHTML = hr +":";
    // document.getElementById("lap10").innerHTML = min +":";
    // document.getElementById("lap9").innerHTML = sec + ":";
    // document.getElementById("lap8").innerHTML = count;


}

let counter = 0;
function lap()
{
    // const li = document.createElement("li");
    // const ul = document.createElement("ul");
    // document.getElementById("lapcnt").innerHTML = count;
    // document.getElementById("lapsec").innerHTML = sec;
    // document.getElementById("lapmin").innerHTML = min;
    // document.getElementById("laphr").innerHTML = hr;
    // document.body.appendChild(li);

    const t = document.createElement("li");
    counter++;
    t.textContent = hr  + ":" + min + ":" + sec + ":" + count;
    document.querySelector("ul").insertAdjacentElement("afterbegin",t);



    x++;
    // if(x==1)
    // {
    //     document.getElementById("lap3").innerHTML = hr +":";
    //     document.getElementById("lap2").innerHTML = min +":";
    //     document.getElementById("lap1").innerHTML = sec + ":";
    //     document.getElementById("lap0").innerHTML = count;
    // }
    // else if(x==2)
    // {
    //     document.getElementById("lap7").innerHTML = hr +":";
    //     document.getElementById("lap6").innerHTML = min +":";
    //     document.getElementById("lap5").innerHTML = sec + ":";
    //     document.getElementById("lap4").innerHTML = count;
    // }
    // else if(x==3)
    // {
    //     document.getElementById("lap11").innerHTML = hr +":";
    //     document.getElementById("lap10").innerHTML = min +":";
    //     document.getElementById("lap9").innerHTML = sec + ":";
    //     document.getElementById("lap8").innerHTML = count;
    // }

    // // document.getElementById("sec").innerHTML = sec;
    // // document.getElementById("min").innerHTML = min;
    // // document.getElementById("hr").innerHTML = hr;
}

function stopwatch()
{
    if(timer == true)
    {
        count = count + 1;

        if(count==99){
            sec = sec + 1;
            count = 0;
        }

        if(sec==60){
            min = min + 1;
            sec = 0;
            count = 0 ;
        }

        if(min==60){
            hr = hr + 1;
            min = 0;
            sec = 0;
            count = 0;
        }
        document.getElementById("count").innerHTML = count;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("min").innerHTML = min;
        document.getElementById("hr").innerHTML = hr;


        setTimeout("stopwatch()",1);
    }
}