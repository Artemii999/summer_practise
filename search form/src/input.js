const fullDateTime = new Date(); 
const tomorrowDateTime = new Date(fullDateTime.getTime() + (24 * 60 * 60 * 1000));

const getDate = (date) => { 
    let day = date.getDate();
    if (day<10) day = '0' + day; 
    let month = date.getMonth() + 1;
    if (month<10) month = '0' + month; 
    const year = date.getFullYear(); 
    return day + '.' + month + '.' + year; 
    }; 

document.getElementById('date_real').value = getDate(fullDateTime);
document.getElementById('date_tomorrow').value = getDate(tomorrowDateTime);