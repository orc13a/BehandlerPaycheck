export const paycheckMonths = () => {
    const months = [
        'Januar',
        'Februar',
        'Marts',
        'April',
        'Maj',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'December'
    ];

    let selectArray = [];
    
    const d = new Date();
    const year = d.getFullYear();

    for (let i = 0; i < months.length; i++) {
        const m = months[i];
        selectArray.push(`${m} ${year}`);
    }

    return selectArray;
}