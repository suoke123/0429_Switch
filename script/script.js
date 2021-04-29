$(function () {

    $("#areaName").focusout(function () {

        var areaName = $("#areaName").val();
        /*alert("지역이름 : " + areaName);*/

        switch (areaName) { // 조건식 아님, 변수만 사용함

            case "제주": // 세미콜로 아님 주의!
                alert("한라산");
                break;

            case "부산": // 세미콜로 아님 주의!
                alert("해운대");
                break;

            case "강원도": // 세미콜로 아님 주의!
                alert("경포대");
                break;

            case "서울": // 세미콜로 아님 주의!
                alert("남산타워");
                break;

            default:
                alert("죄송합니다. 제주, 부산, 강원도, 서울만 입력해주세요.");
                break; // 마지막 break;는 생략가능함.

        }

    });

});
