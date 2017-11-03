// Copyright (c) 2017, Frappe and contributors
// For license information, please see license.txt


frappe.ui.form.on('Register', {
	//on load
	onload:function(frm){
		console.log("____Onload_____")

	},
	//refresh- load ,reload ,refresh
	refresh: function(frm) {
		console.log("___Referesh__")

	},
	// Change Event
	first_name: function(frm) {
		console.log("___First Name__")
	},
	last_name: function(frm) {

		console.log("___Last Name__")
	},
	email: function(frm) {
		console.log(frm.doc.email)
		console.log("___email__")

		frappe.call({
				method: "register.register.doctype.register.register.validate_email",
				args: {
					"email": frm.doc.email
				}
			})
	},

	dob:function(frm){
		var currDate =frm.doc.dob
		var dateParts = currDate.split('-');
		var postDate=frappe.datetime.get_today()
		var dateSplit = postDate.split('-');

		console.log(dateSplit[0])
		
		if(dateParts[0]>dateSplit[0]-1)
		{
			frappe.msgprint(__('Date Should be less than one year'));
		}
		
		

	},
	//on save
	validate:function(frm){
		console.log("_____validate___")
		frappe.call({
				method: "register.register.doctype.register.register.create_user",
				args: {
					"first_name": frm.doc.first_name,
					"last_name": frm.doc.last_name,
					"email": frm.doc.email,
					"gender": frm.doc.gender,
					"mobile_no": frm.doc.mobile_no,
					"birth_date": frm.doc.dob

					
				}
			})
	}

});
