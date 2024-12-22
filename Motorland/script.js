let notificationCount = 3; // Начальное количество уведомлений

function updateNotificationCount(newCount) {
    notificationCount = newCount;
    document.querySelector('.notification-count').textContent = notificationCount;
}

// Пример обновления количества уведомлений
updateNotificationCount(5); // Обновляет количество уведомлений на 5