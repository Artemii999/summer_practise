
//if (Day < 10) { Day = "0" + Day }



//текущая дата
var Data = new Date();
console.log(Data.getDate(), '.', Data.getMonth(), '.', Data.getFullYear());
//создаем новую дату из дня старой прибавляем 1 день
Data.setDate(Data.getDate() + 1);
console.log(Data.getDate(), '.', Data.getMonth(), '.', Data.getFullYear())