var hotel = new Object(); // 변수의 객체를 생성하여 대입

hotel.name="Plaza";
hotel.rooms=70;
hotel.booked=27;
hotel.checkAvailability = function(){
    return this.rooms-this.booked;
};

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent= hotel.checkAvailability();