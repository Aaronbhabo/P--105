function preload(){
    
}

function setup(){
    canvas=createCanvas(600,600);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,150,200,300,300);
    fill(40,40,400);
    circle(100,100,60);
    circle(500,100,60);
    circle(100,550,60);
    circle(500,550,60);
    fill(200,30,80);
    rect(105,85,400,40)
    rect(80,125,40,400)
    rect(480,125,40,400)
    rect(105,530,400,40)
}