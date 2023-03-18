// Настройки первого доната;
export const options1 = {
    maintainAspectRatio: true,
    innerRadius: 10,
    responsive: true,
    plugins: {
        legend: {
            cursor: "pointer",
            position: "none",
        },
        title: {
            display: true,
            color: "white",
            align: "center",
            text: "Статистика осмотров",
            font: {
                size: 14,
            },
        },
    },
};

// Настройки второго доната;
export const options2 = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        // Стилизую labels;
        legend: {
            onHover: (event) => {
                event.native.target.style.cursor = "pointer";
            },
            onLeave: (event) => {
                event.native.target.style.cursor = "default";
            },
            position: "right",
            labels: {
                usePointStyle: true,
                padding: 16,
                pointStyle: "rect",
                color: "white",
            },
        },

        title: {
            display: true,
            color: "white",
            align: "start",
            text: "Статистика осмотров",
            font: {
                size: 14,
            },
        },
    },
};

//Настройки третьего доната;
export const options3 = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        // Стилизую labels;
        legend: {
            onHover: (event) => {
                event.native.target.style.cursor = "pointer";
            },
            onLeave: (event) => {
                event.native.target.style.cursor = "default";
            },
            position: "bottom",
            labels: {
                usePointStyle: true,
                padding: 20,
                textAlign: "left",
                pointStyle: "rect",
                color: "white",
            },
        },
        title: {
            display: true,
            color: "white",
            align: "start",
            text: "Статистика осмотров",
            font: {
                size: 14,
            },
        },
    },
};