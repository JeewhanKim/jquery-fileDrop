/*

Reference : http://hayageek.com/drag-and-drop-file-upload-jquery/
*/

$(function(){
	var obj = $("#pdf_area");

	obj.on('dragenter', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	obj.on('dragover', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	obj.on('drop', function(e){
		
		e.preventDefault();
		
		$(this).css({'background-color':'#ACC'});
		var file = e.originalEvent.dataTransfer.files;

		jwFileUpload(file, obj);
	});

	$(document).on('dragenter', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	$(document).on('dragover', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	$(document).on('drop', function(e){
		e.stopPropagation();
		e.preventDefault();
	});

});


function jwFileUpload(file, obj){

	file = file[0];

	var formData = new FormData();
	formData.append('file', file);
	console.log(formData);
	var status = new createStatusBar(obj);
	status.setFileNameSize(file.name, file.size);
	sendFileToServer(formData, status);
}

function createStatusBar(obj) {
	this.setFileNameSize = function(name, size)
	{
		var sizeString = "";
		var convertKbytes = size / 1024;
		if(parseInt(convertKbytes) / 1024) {
			var convertMbytes = convertKbytes / 1024;
			sizeString = convertMbytes.toFixed(2) + " MB";
		} else {
			sizeString = convertKbytes.toFixed(2) + " KB";
		}

		$("#file_name").html(name);
		$("#file_size").html(sizeString);

	}
	this.setAbort = function(upload) {
		alert('1');
	}
}

function sendFileToServer(formData, status) {
	var server_url = "./Controllers/jw_file_upload_controller.php";
	// var server_url = "http://192.168.0.12/CPW/Controller/jw_file_upload_controller.php";
	
	// var jqXHR = $.ajax({
	// 	xhr: function(){ },
	// 	url: server_url,
 //    	type: "POST",
 //    	contentType: false,
 //    	processData: false,
 //    	cache: false,
 //    	data: formData,
 //    	success: function(result) {
 //    		alert('end');
 //    	}
	// });

	$.ajax({
		type: "POST",
		url: server_url,
		success: function(result) {

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
    	 // alert("some error");
    	}
  	});
	// status.setAbort(upload);

}


