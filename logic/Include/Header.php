<header>
    <div id="site" class="container-fluid">
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
                            <a href="#">Пройти опрос</a>
                        </li>
                        <li>
                            <?php if (isset($_SESSION['id'])): ?>
                                <a href="#">
                                    <?php echo $_SESSION['login'];?>
                                </a>
                                <ul>
                                    <?php if ($_SESSION['admin']): ?>
                                        <li><a href="<?php echo BASE_URL . 'admin.php'?>">Админ панель</a></li>
                                    <?php endif; ?>
                                    <li><a href="<?php echo BASE_URL . 'expert.php'?>">Эксперт панель</a></li>
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
</header>
