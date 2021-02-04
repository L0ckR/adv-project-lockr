<?php
/**
 * Returns the list of articles.
 */
require 'connect.php';
    
$articles = [];
$sql = "SELECT id, city, provider, date1, date2, error, currentRate, drProv  FROM articles";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $articles[$cr]['id']    = $row['id'];
    $articles[$cr]['city'] = $row['city'];
    $articles[$cr]['provider'] = $row['provider'];
	$articles[$cr]['date1']    = $row['date1'];
    $articles[$cr]['date2'] = $row['date2'];
    $articles[$cr]['error'] = $row['error'];
	$articles[$cr]['currentRate']    = $row['currentRate'];
    $articles[$cr]['drProv'] = $row['drProv'];
    $cr++;
  }
    
  echo json_encode(['data'=>$articles]);
}
else
{
  http_response_code(404);
}
