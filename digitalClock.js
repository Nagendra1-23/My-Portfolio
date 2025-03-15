function dateTime(){
    let date= new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();

    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();

    var moArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var dyArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    day=dyArr[day];
    mo=moArr[mo];

    var am_pm="Am";
    if(hh>=12){
        am_pm="Pm";
        if(hh>12){
            hh -=12;
        }
    }
    if(hh==0){
        hh=12;
    }

    document.getElementById("hh").innerHTML=`${hh} : ${mm} ${am_pm}`;
    document.getElementById("dd").innerHTML=`${dd}-${mo}-${yy}`
    document.getElementById("dy").innerHTML=`${day}`
    document.getElementById("sec").innerHTML=`${ss}`
}
setInterval(dateTime,1000);


function bgVideo(){
    let date=new Date();
    var dy=date.getDay();
    var vidArr=["2.mp4","1.mp4","3.mp4","4.mp4","5.mp4","6.mp4","7.mp4"];
    document.getElementById("bgVid").src=`../../asset/video/${vidArr[dy]}`;

}

bgVideo()