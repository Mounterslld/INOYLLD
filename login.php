<?php
session_start();

// Если уже авторизован - редирект
if (isset($_SESSION['user_id'])) {
    header("Location: profile.php");
    exit();
}

// Подключение к БД
// ...

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = trim($_POST['login']);
    $password = $_POST['password'];
    
    // Ищем пользователя по email или username
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? OR username = ?");
    $stmt->execute([$login, $login]);
    $user = $stmt->fetch();
    
    if ($user && password_verify($password, $user['password'])) {
        // Успешная авторизация
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header("Location: profile.php");
        exit();
    } else {
        die("Неверные учетные данные");
    }
}
?>