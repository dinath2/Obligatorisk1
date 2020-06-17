function isDateValid(date){
    // ex: 03.02.2020
    const year = date.substring(6,10);
    const month = date.substring(3,5);
    const day = date.substring (0,2);

    if (
        dateLength(date)
        && dateFormat(date)
        && dayLength(day)
        && monthLength(month)
        && validYear(year)
        && (february(day,month,year) || evenMonth(day, month) || oddMonth(day, month))
        )
    {return true;} else {return false;}
}

function dateLength(date) {
    return date.length == 10;
}

function dateFormat(date) {
    return date.indexOf(".") == 2 && date.lastIndexOf(".") == 5;
}

function monthLength(month) {
    return month.length === 2 
    && month >= 1 
    && month <= 12;
}

function dayLength(day) {
    return day.length === 2;
}

function february(day,month,year) {
    return (month == 2
    && day >= 1
    && day <=28) || (
    month == 2
    && day >= 1
    && day <=29
    && isLeapYear(year));
}

function evenMonth(day, month) {
    return month == (4 || 6 || 8 || 10 || 12)
    && day >= 1
    && day <= 30;
}

function oddMonth(day, month) {
    return month == (1 || 3 || 5 || 7 || 9 || 11)
    && day >= 1
    && day <= 31;
}

function validYear(year) {
    return year.length === 4
    && year >= '0000'
    && year <= '9999';
}

function isLeapYear(year){
    return ((year % 4 == 0) 
    && (year % 100 != 0)) || (year % 400 == 0);
}