<?php

$user = $_GET['user'];

$users = ["manav", "rahul", "amit"];

if(in_array(strtolower($user), $users)) {

    echo "Username already exists";

}
else {

    echo "Username available";
}

?>