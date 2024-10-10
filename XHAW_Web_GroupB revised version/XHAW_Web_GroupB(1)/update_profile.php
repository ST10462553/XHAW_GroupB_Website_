<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if file is uploaded
    if (isset($_FILES['document']) && $_FILES['document']['error'] == 0) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['document']['name']);

        // Move the uploaded file to the desired directory
        if (move_uploaded_file($_FILES['document']['tmp_name'], $uploadFile)) {
            echo "File successfully uploaded!";
        } else {
            echo "Error uploading the file.";
        }
    }
}
?>
