let MyDate = function (day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay=function () {
        return this.day;
    }
    this.getMonth=function (){
        return this.month;
    }
    this.getYear=function (){
        return this.year;
    }
    this.setDay=function (day){
        this.day = day;
    }
    this.setMonth=function (month){
        this.month = month;
    }
    this.setYear=function (year){
        this.year = year;
    }
    this.setDate=function (day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
    this.toString=function (){
        document.write(this.day+'/'+this.month+'/'+this.year);
    }

}
let date = new MyDate(9,8,1998);
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getYear();
// date.setDay(22);
// date.setMonth(3);
// date.setYear(2000);
date.setDate(1,2,3);
date.toString();







