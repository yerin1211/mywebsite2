window.onscroll = function() {scrollBar()}; // 페이지를 스크롤할 때 실행

function scrollBar() { //스크롤바 기능
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; //전체 스크롤 길이
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //현재 스크롤 위치
  var scrolled = (winScroll / height) * 100; //현재 스크롤 길이/전체 스크롤 길이 퍼센트
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

function disableScroll() { //스크롤 사용 금지하기
    document.body.classList.add("stop-scrolling"); 
} 

function openPage(page) {
    var i, indexcontent, indexbutton;

    /*내용 모두 지우기 */
    indexcontent = document.getElementsByClassName("indexcontent");
    for (i = 0; i < indexcontent.length; i++) { indexcontent[i].style.display = "none"; }
    indexbutton = document.getElementsByClassName("indexbutton");
    for (i = 0; i < indexbutton.length; i++) { indexbutton[i].style.backgroundColor = ""; }
  
    //선택된 내용만 표시하기
    document.getElementById(page).style.display = "block";
}
  
document.getElementById("defaultindex").click();  // 인덱스 버튼 클릭값 가져오기

function answer(qnum){
    if(document.getElementById(qnum).style.display == "inline"){
        document.getElementById(qnum).style.display="none";
    }
    else document.getElementById(qnum).style.display="inline";
}