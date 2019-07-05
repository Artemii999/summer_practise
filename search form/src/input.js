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


const hide_show = () =>
{
    let close = document.getElementById("close").style.display;

    if(close=="")close="none";

    if(close=="none")
    {
        close="block";
    }
    else
    {
        close="none";
    }
    document.getElementById("close").style.display=close;
};

// whatIsDay.onclick = (date) => 
// {
//     const val = document.getElementById('whatIsDay').value;
//     let itDay = val;
//     if (itDay<10) itDay = '0' + itDay;
//     let month = date.getMonth() + 1;
//     if (month<10) month = '0' + month; 
//     let year = date.getFullYear(); 
//     document.getElementById('date_real').value = itDay + '.' + month + '.' + year;
// };

