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
                            <a href="#">Авторизация</a>
                            <ul>
                                <li><a href="<?php echo BASE_URL . 'authorize.php'?>">Админ панель</a></li>
                                <li><a href="<?php echo BASE_URL . 'authorize.php'?>">Эксперт панель</a></li>
                                <li><a href="<?php echo BASE_URL ?>">Выход</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
