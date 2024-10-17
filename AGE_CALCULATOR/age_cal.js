let input = document.querySelector ("#input-box");
const btn =  document.querySelector ("#btn");
let display = document.querySelector (".display")

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    // Calculate difference in years
    let years = today.getFullYear() - birth.getFullYear();

    // Calculate difference in months
    let months = today.getMonth() - birth.getMonth();

    // Calculate difference in days
    let days = today.getDate() - birth.getDate();

    // Adjust months and years if the current month/day is before the birth month/day
    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        // Get the number of days in the previous month
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}

btn.addEventListener ("click",()=>{
    let age = calculateAge(input.value);
    console.log(`Age: ${age.years} years, ${age.months} months, and ${age.days} days.`);

    para.innerHTML = `Your Age: ${age.years} years, ${age.months} months, and ${age.days} days.`;
});
