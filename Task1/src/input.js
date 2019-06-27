const fullDateTime = new Date(); 

const getNormalDate = (date) => { 
    let day = date.getDate();
    if (day<10) day = '0' + day; 
    let month = date.getMonth() + 1;
    if (month<10) month = '0' + month; 
    const year = date.getFullYear(); 
    return day + '.' + month + '.' + year; 
    }; 

const getTomorrowDate = (date) => { 
    let day = date.getDate() + 1;
    if (day<10) day = '0' + day; 
    let month = date.getMonth() + 1;
    if (month<10) month = '0' + month; 
    const year = date.getFullYear(); 
    return day + '.' + month + '.' + year; 
    }; 

document.getElementById('date_real').value = getNormalDate(fullDateTime);
document.getElementById('date_tomorrow').value = getTomorrowDate(fullDateTime);