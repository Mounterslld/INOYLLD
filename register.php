<?php
// Подключение к базе данных
$host = 'localhost';
$dbname = 'inoy_games';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения: " . $e->getMessage());
}

// Обработка формы
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Валидация данных
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    
    // Проверка паролей
    if ($password !== $confirm_password) {
        die("Пароли не совпадают");
    }
    
    // Проверка длины пароля
    if (strlen($password) < 8) {
        die("Пароль должен содержать минимум 8 символов");
    }
    
    // Хеширование пароля
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Обработка аватара
    $avatar = 'default_avatar.jpg';
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
        $upload_dir = 'uploads/avatars/';
        $file_ext = strtolower(pathinfo($_FILES['avatar']['name'], PATHINFO_EXTENSION));
        $allowed_ext = ['jpg', 'jpeg', 'png', 'gif'];
        
        if (in_array($file_ext, $allowed_ext)) {
            $avatar = uniqid('avatar_', true) . '.' . $file_ext;
            move_uploaded_file($_FILES['avatar']['tmp_name'], $upload_dir . $avatar);
        }
    }
    
    // Добавление пользователя в базу данных
    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password, avatar) VALUES (?, ?, ?, ?)");
        $stmt->execute([$username, $email, $hashed_password, $avatar]);
        
        // Перенаправление после успешной регистрации
        header("Location: profile.php?username=" . urlencode($username));
        exit();
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            die("Пользователь с таким именем или email уже существует");
        } else {
            die("Ошибка регистрации: " . $e->getMessage());
        }
    }
}
?>
<?php
session_start();

// Если пользователь уже авторизован - перенаправляем
if (isset($_SESSION['user_id'])) {
    header("Location: profile.php");
    exit();
}

// Подключение к БД (как в предыдущем примере)
$host = 'localhost';
$dbname = 'inoy_games';
// ... остальные параметры ...

// Обработка формы регистрации
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Валидация данных
    $username = trim($_POST['username']);
    // ... остальная обработка ...

    try {
        // Добавление пользователя в БД
        $stmt = $pdo->prepare("INSERT INTO users (...) VALUES (...)");
        $stmt->execute([...]);

        // Авторизуем пользователя сразу после регистрации
        $_SESSION['user_id'] = $pdo->lastInsertId();
        $_SESSION['username'] = $username;

        // Перенаправляем в профиль
        header("Location: profile.php");
        exit();
        
    } catch (PDOException $e) {
        // Обработка ошибок
    }
}
?>