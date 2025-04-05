const date1 = new Date(2025, 3, 28, 18, 10, 24);
const date2 = new Date(2025, 4, 1, 18, 10, 24);
const list = [
    {
        title: "Сделать рулет",
        date: date1.toLocaleString(),
        done: false,
        keyIn: date1.getTime()
    },
    {
        title: "Выучить английский",
        date: date2.toLocaleString(),
        done: true,
        keyIn: date2.getTime()
    },
]

export default list;