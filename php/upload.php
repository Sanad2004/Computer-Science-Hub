<?php
// Basic security checks and file upload logic
if (isset($_FILES['uploadedFile'])) {
    $targetDirectory = "resources/";
    $fileName = basename($_FILES['uploadedFile']['name']);
    $targetFilePath = $targetDirectory . $fileName;
    $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

    // Validate file size and type here
    // Move file to the target directory
    if(move_uploaded_file($_FILES['uploadedFile']['tmp_name'], $targetFilePath)) {
        echo "The file $fileName has been uploaded.";
    } else{
        echo "There was an error uploading your file.";
    }
} else {
    echo "No file uploaded.";
}
?>
