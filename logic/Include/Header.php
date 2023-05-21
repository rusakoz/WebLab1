<header>
    <div class="container-fluid" style="height: 57px; padding: 0">
        <div id="site" class="container-fluid" style="position: fixed; z-index: 1000">
            <div id="appin" class="container">
                <div class="row">
                    <div class="col-4">
                        <h1>
                            <a href="<?php echo BASE_URL ?>">Logo</a>
                        </h1>
                    </div>
                    <nav class="col-8">

                        <ul>
                            <li>
                                <a href="<?php echo BASE_URL ?>">Главная</a>
                            </li>
                            <li>
                                <?php if (isset($_SESSION['id'])): ?>
                                    <a href="#">
                                        <?php echo $_SESSION['login'];?>
                                    </a>
                                    <ul>
                                        <?php if ($_SESSION['admin']): ?>
                                            <li><a href="<?php echo BASE_URL . 'admin.php'?>">Админ панель</a></li>
                                        <?php elseif ($_SESSION['role'] === 'Пользователь'): ?>
                                            <li><a href="<?php echo BASE_URL . 'People.php'?>">Пользователь панель</a></li>
                                        <?php elseif ($_SESSION['role'] === 'Респондент'): ?>
                                            <li><a href="<?php echo BASE_URL . 'respondent.php'?>">Респондент панель</a></li>
                                        <?php elseif ($_SESSION['role'] === 'Эксперт'): ?>
                                            <li><a href="<?php echo BASE_URL . 'expert.php'?>">Эксперт панель</a></li>
                                        <?php endif; ?>

                                        <li><a href="<?php echo BASE_URL . 'logout.php'?>">Выход</a></li>
                                    </ul>
                                <?php else: ?>
                                    <a href="#">
                                        Авторизация
                                    </a>
                                    <ul>
                                        <li><a href="<?php echo BASE_URL . 'authorize.php'?>">Админ панель</a></li>
                                        <li><a href="<?php echo BASE_URL . 'authorize.php'?>">Эксперт панель</a></li>
                                    </ul>
                                <?php endif; ?>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
