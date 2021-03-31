function preload() {

}

function setup () {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uzQhIMYhR/model.json", modelLoaded);

}

function modelLoaded() {
    console.log("Model Loaded!");
}

function draw () {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);

}

function gotResult(error, results) {
    document.getElementById("objectName").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
}