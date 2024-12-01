let date = new Date();
function mealAlarm (){
    if(date.getHours()>24 && date.getHours()<10){
        console.log('breakfast time!')
    } else if (date.getHours()>12 && date.getHours()<14){
        console.log('Lunch time!')
    } else if(date.getHours()>15 && date.getHours()<24){
        console.log('Dinner time!')
    }
}
mealAlarm()