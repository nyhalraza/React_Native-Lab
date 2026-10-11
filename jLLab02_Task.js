arr = [
    {
        'Day': 'Monday',
        'Expense': 100
    },
    {
        'Day': 'Tuesday',
        'Expense': 200
    },
    {
        'Day': 'Wednesday',
        'Expense': 300
    },
    {
        'Day': 'Thursday',
        'Expense': 150
    },
    {
        'Day': 'Friday',
        'Expense': 125
    },
    {
        'Day': 'Saturday',
        'Expense': 250
    },
    {
        'Day': 'Sunday',
        'Expense': 110
    },
]
const threshold = 200
console.log("\n\nDays : Expense")
for(let i = 0; i < arr.length; i++){
    console.log(arr[i].Day + ' : ' + arr[i].Expense)
}
let count = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i]['Expense'] > threshold)
        count++;
}
console.log("\n\nCount Days Above Threshold:" + count)

console.log("\n\nDays Above Threshold:")
for(let i = 0; i < arr.length; i++){
    if(arr[i]['Expense'] > threshold)
        console.log(arr[i]['Day']);
}

