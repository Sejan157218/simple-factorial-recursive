function year(yrs){
    if (yrs % 4 ==0 && yrs % 100 !=0 || yrs % 400 ==0){
        return yrs + ' is leap yrs'
    }
    else{
        return yrs + ' is not leap yrs'
    }
}

var year = year(2000);
console.log(year)