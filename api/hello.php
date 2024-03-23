<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

if (isset($data['phpCode'])) {
    $phpCode = $data['phpCode'];

    $output = shell_exec("php -r '" . escapeshellarg($phpCode) . "'");

    echo $output;
} else {
    http_response_code(400);
    echo "PHP code is required.";
}
?>