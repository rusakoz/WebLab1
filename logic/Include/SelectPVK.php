<?php

function func() {

    echo "<option selected>-------";

    echo "<optgroup label='Личностные ПВК'>";
    $query = selectAll('pvk', ['group' => 'Личностные']);
    foreach ($query as $key) {
        echo "<option value = '{$key['id']}'>";
        echo $key['listPVK'];
        echo "</option>";
    }
    echo "</optgroup>";

    echo "<optgroup label='Интеллектуальные ПВК'>";
    $query = selectAll('pvk', ['group' => 'Интеллектуальные']);
    foreach ($query as $key) {
        echo "<option value = '{$key['id']}'>";
        echo $key['listPVK'];
        echo "</option>";
    }
    echo "</optgroup>";

    echo "<optgroup label='Физиологические ПВК'>";
    $query = selectAll('pvk', ['group' => 'Физиологические']);
    foreach ($query as $key) {
        echo "<option value = '{$key['id']}'>";
        echo $key['listPVK'];
        echo "</option>";
    }
    echo "</optgroup>";

    echo "<optgroup label='Физические ПВК'>";
    $query = selectAll('pvk', ['group' => 'Физические']);
    foreach ($query as $key) {
        echo "<option value = '{$key['id']}'>";
        echo $key['listPVK'];
        echo "</option>";
    }
    echo "</optgroup>";

    echo "<optgroup label='Психофизиологические ПВК'>";
    $query = selectAll('pvk', ['group' => 'Психофизиологические']);
    foreach ($query as $key) {
        echo "<option value = '{$key['id']}'>";
        echo $key['listPVK'];
        echo "</option>";
    }
    echo "</optgroup>";

    echo "</option>";

}
?>

<!--
<option selected>-------------</option>
<optgroup label="Личностные ПВК">Профессия 1
    <option>Стремление к профессиональному совершенству</option>
    <option>Готовность к защите Родины с оружием в руках</option>
    <option>Адекватная самооценка</option>
    <option>Самостоятельность</option>
    <option>Дисциплинированность</option>
</optgroup>
<optgroup label="Интеллектуальные ПВК">Профессия 1
    <option>Зрительная оценка размеров предметов</option>
    <option>Глазомер: линейный, угловой, объемный</option>
    <option>Речевой слух (восприятие устной речи)</option>
    <option>Различение отрезков времени</option>
    <option>Способность различать и опознавать замаскированные объекты</option>
</optgroup>
<optgroup label="Физиологические ПВК">Профессия 1
    <option>Переносимость статических физических нагрузок</option>
    <option>Сохранение работоспособности при развивающемся утомлении</option>
    <option>Сохранение бдительности в режиме ожидания</option>
    <option>Быстрый переход из состояния покоя к интенсивной работе</option>
    <option>Сохранение работоспособности при недостатке сна</option>
</optgroup>
<optgroup label="Физические ПВК">Профессия 1
    <option>Антропометрические характеристики (в соответствии с требованиями профессии)</option>
    <option>Особенности телосложения (в соответствии с требованиями профессии)</option>
    <option>Хорошее общее физическое развитие – выносливость, координированность, сила, быстрота</option>
    <option>Физическая подготовленность к воздействию неблагоприятных факторов профессиональной деятельности</option>
</optgroup>
<optgroup label="Психофизиологические ПВК">Профессия 1
    <option>Энергичность, витальность (активность)</option>
    <option>Умственная работоспособность</option>
    <option>Острота зрения</option>
    <option>Острота слуха</option>
    <option>Чувствительность (осязание) пальцев</option>
</optgroup>
-->