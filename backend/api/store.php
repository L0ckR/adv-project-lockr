<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->provider) === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $city = mysqli_real_escape_string($con, trim($request->data->city));
  $provider = mysqli_real_escape_string($con, trim($request->data->provider));
  $date1 = mysqli_real_escape_string($con, trim($request->data->date1));
  $date2 = mysqli_real_escape_string($con, trim($request->data->date2));
  $error = mysqli_real_escape_string($con, trim($request->data->error));
  $currentRate = mysqli_real_escape_string($con, (int)$request->data->currentRate);
  $drProv = mysqli_real_escape_string($con, (boolean)$request->data->drProv);

  // Store.
  $sql = "INSERT INTO `articles`(id, city, provider, date1, date2, error, currentRate, drProv) VALUES (null,'{$city}','{$provider}','{$date1}','{$date2}','{$error}','{$currentRate}','{$drProv}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $article = [
      'city' => $city,
      'provider' => $provider,
	  'date1' => $date1,
      'date2' => $date2,
	  'error' => $error,
      'currentRate' => $currentRate,
	  'drProv' => $drProv,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$article]);
  }
  else
  {
    http_response_code(422);
  }
}
