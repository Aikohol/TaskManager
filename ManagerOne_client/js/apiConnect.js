$(document).ready(function () {
	$('form').on('submit', function(e) {
		e.preventDefault();
	})

	// Fetching Task for listing (WORKING)
	fetch('http://localhost/ManagerOne/task/index', {
		method: 'GET'
	}).then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	}).then(function(data) {
		data.forEach(function(task) {
			$('#taskList').append("<div id='task-container-"+task.id+"'><li data-task-id='"+task.id+"' class='status-"+task.status+"' id=task-"+task.id+">"+task.titre+"</li><button class='task-list' data-task-id='"+task.id+"'>validate</button><button class='task-remove' data-task-id='"+task.id+"'>remove</button></div>");
		});
	}).catch(err => {
		console.log('caught it!',err);
	})

	// Fetching all User for task Select purpose (WORKING)
	fetch('http://localhost/ManagerOne/user/index', {
		method: 'GET'
	}).then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	}).then(function(data) {
		data.forEach(function(user) {
			$('#userSelect').append("<option value="+user.id+">"+user.name+"</option>");
		});
	}).catch(err => {
		console.log('caught it!',err);
	})

	// Send data to API for Add method (WORKING)
	$('#taskForm').on("submit", function(e){
		let doc = {
			"titre": this.titre.value,
			"description": this.description.value,
			"user_id": this.user_id.value
		}

		var chaineJSON = JSON.stringify(doc);
		$.ajax({
			url: this.action,
			data: chaineJSON,
			method: 'POST',
			processData: false,
			success: function(data) {
				$('#taskList').append("<div id='task-container-"+data.id+"'><li data-task-id='"+data.id+"' class='status-"+data.status+"' id='task-"+data.id+"'>"+data.titre+"</li><button class='task-list' data-task-id='"+data.id+"'>validate</button><button class='task-remove' data-task-id='"+data.id+"'>remove</button></div>");
			},
			error: function(err) {
				console.log(err);
			}
		});
	});

	// Form for adding a task to a User (WORKING)
	$('#userForm').on("submit", function(e){
		let doc = {
			"name": this.name.value,
			"email": this.email.value,
		}

		var chaineJSON = JSON.stringify(doc);
		$.ajax({
			url: this.action,
			data: chaineJSON,
			method: 'POST',
			processData: false,
			success: function(data) {
				$('#userSelect').append("<option value="+data.id+">"+data.name+"</option>");
			},
			error: function(err) {
				console.log(err);
			}
		});
	});

	//Confirm / Unconfirm (WORKING)
	$(document).on("click",".task-list", function() {
		$.ajax({
			url: 'http://localhost/ManagerOne/task/validate/'+this.dataset.taskId,
			method: 'POST',
			processData: false,
			success: function(data) {
				$("#task-"+data.id).attr('class', 'status-'+data.status+'');
			},
			error: function(err) {
				console.log(err);
			}
		});
	});

	// Show (WORKING)
	$(document).on("click","li[class^='status']", function() {
		fetch('http://localhost/ManagerOne/task/show/'+this.dataset.taskId, {
			method: 'GET'
		}).then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(function(data) {
			$('#showTask').html("<h2>"+data.titre+"</h2><p>"+data.description+"</p><p>pour "+data.user.name+" ajoute le "+data.creation_date+"</p>");
		}).catch(err => {
			console.log('caught it!',err);
		})
	});

	// DELETE (WORKING)
	$(document).on("click","button[class^='task-remove']", function() {
		$.ajax({
			url: 'http://localhost/ManagerOne/task/delete/'+this.dataset.taskId,
			method: 'POST',
			processData: false,
			success: function(data) {
				$("#task-container-"+data).remove();
			},
			error: function(err) {
				console.log(err);
			}
		});
	});
});
