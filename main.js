

function preload()
{

}

function setup()
{
    canvas = createCanvas(580, 410);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw()
{
    fill(130, 23, 207);
    circle(70, 60, 90);
   
    circle(70, 350, 90);

    circle(500, 60, 90);

    circle(500, 350, 90)

    fill(61, 135, 245);
    rect(100, 40, 370, 50);
    
    rect(100, 330, 370, 50);

    rect(480, 90, 50, 230);
    
    rect(40, 90, 50, 230)

    image(video, 135 , 100, 300, 200);
}


function take_snapshot()
{
    save("Draw_In_P5_js.png");
}
