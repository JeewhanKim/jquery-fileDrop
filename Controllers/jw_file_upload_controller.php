<?php
// $directory = "../Data/PDF/";

if(isset($_FILES["file"]))
{
	// Filtering the file Type
	// check file ext - *.PDF
	// if($_FILES["file"]["extension"] != "pdf") {
	// 	echo "Error";
	// 	return;
	// }

	if($_FILES["file"]["error"] > 0 ) {
		echo "Error";
		return;
	}
	else {
		// move_uploaded_file( $_FILES["file"]["tmp_name"], $directory.$_FILES["file"]["name"] );
		echo "Uploaded File : ".$_FILES["file"]["name"];
		return;
	}


}


?>