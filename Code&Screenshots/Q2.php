
<?php
function insideOut(array $arr): array {
    $count = count($arr);


    if ($count % 2 !== 0) {
        return $arr;
    }

    $result = $arr; 
    $half = $count / 2;

    for ($i = 0; $i < $half; $i++) {
        $oppositeIndex = $count - 1 - $i;
        $result[$i] = $arr[$oppositeIndex];
        $result[$oppositeIndex] = $arr[$i];
    }

    return $result;
}

$numericExample = [1, 2, 2, 1];
print_r(insideOut($numericExample));

$stringExample = ["Everyone", "says", "Kelly", "is", "REALLY", "awesome"];
print_r(insideOut($stringExample));

?>

