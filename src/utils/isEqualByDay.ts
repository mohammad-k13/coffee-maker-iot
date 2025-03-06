export default function areDatesEqualByDay(date1:Date, date2:Date) {
    // Extract the day, month, and year components of each date
    const day1 = date1.getDate();
    const month1 = date1.getMonth();
    const year1 = date1.getFullYear();
  
    const day2 = date2.getDate();
    const month2 = date2.getMonth();
    const year2 = date2.getFullYear();
  
    // Compare the day, month, and year components
    console.log(day1, day2, month1, month2, year1, year2)
    return day1 === day2 && month1 === month2 && year1 === year2;
  }
  