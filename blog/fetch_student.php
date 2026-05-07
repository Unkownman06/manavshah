<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Mock database of students
$students = [
    101 => ["name" => "Aarav Mehta",   "dept" => "Information Technology", "year" => "Third Year"],
    102 => ["name" => "Priya Sharma",  "dept" => "Computer Science",       "year" => "Second Year"],
    103 => ["name" => "Rohan Gupta",   "dept" => "Electronics",            "year" => "First Year"],
    104 => ["name" => "Sneha Patil",   "dept" => "Mechanical Engineering", "year" => "Fourth Year"],
];

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if (array_key_exists($id, $students)) {
    echo json_encode($students[$id]);
} else {
    echo json_encode(["error" => "Student with ID $id not found."]);
}
?>