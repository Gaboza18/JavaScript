// 객체 표현 형식으로 객체 선언
var hotel = {
    name: "Shilla",
    rooms: 40, // 전체 방의 개수
    booked: 25, // 예약을 마친 방의 개수

    checkAvailability: function () { /* 변수 안에 함수 선언  */
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent= hotel.checkAvailability();