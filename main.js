Webcam .set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
prediction_1 = ""
prediction_2 = ""
camera = document.getElementById("camera");
Webcam.attach ('#camera')
 function take_snapshot()
 {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
     });
 }

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y2vqu3255/model.json', modelLoaded)

 function modelLoaded(){
    console.log('Model Loaded');
 }

 function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img,  gotResult);
}

 

function gotResult(error, results){
 if (error) {
    console.log(error);
 }
 else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if (results[0].label == "Happy")
    {
  
  document.getElementById("update_emoji").innerHTML = "😊"
    }

    if (results[0].label == "Sad")
    {
  
  document.getElementById("update_emoji").innerHTML = "😢"
    }
 if (results[0].label == "Mad")
 {

document.getElementById("update_emoji").innerHTML = "🤬"
 }
 if (results[1].label == "Happy")
 {

document.getElementById("update_emoji2").innerHTML = "😊"
 }

 if (results[1].label == "Sad")
 {

document.getElementById("update_emoji2").innerHTML = "😢"
 }
if (results[1].label == "Mad")
{

document.getElementById("update_emoji2").innerHTML = "🤬"
}
 }



}
function speak(){
    var synth = window.speechSynthesis;
speak_data_1 = " The first predicition is " + prediction_1;
speak_data_2 = "And The Second Predicition is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}
