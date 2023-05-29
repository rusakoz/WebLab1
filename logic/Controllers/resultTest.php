<?php

function func()
{
    $query = selectAll('resultPVK', ['id' => $_SESSION['id']]);
    foreach ($query as $key) {
        echo "<tr>
                        <th scope='row'></th>
                        <td>{$key['profession']}</td>

                    </tr>
                    <tr>
                        <td colspan='4'>
                            <table class='table mb-0 table-dark'>
                                <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>ПВК</th>
                                    <th scope='col'>Оценка</th>
                                </tr>
                                </thead>
                                <tbody>";

        $spliterat = $key['listPVK'];
        $arr = explode(",", $spliterat);
        $arr2 = explode(",", $key['pvkScore']);
        $count = count($arr);

        for ($c = 0; $c < $count; $c++) {
            $p = $c+1;
            $qur = selectOne('pvk', ['id' => $arr[$c]]);
            echo "
                                <tr>
                                    <th scope='row'>$p</th>
                                    <td>{$qur['listPVK']}</td>
                                    <td>{$arr2[$c]}</td>
                                </tr>";
        }
        echo "
                                </tbody>
                            </table>
                        </td>
                    </tr>";
    }
}