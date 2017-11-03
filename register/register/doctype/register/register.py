# -*- coding: utf-8 -*-
# Copyright (c) 2017, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import (cstr, validate_email_add, cint, comma_and, has_gravatar, now, getdate, nowdate)


class Register(Document):
	pass

@frappe.whitelist()
def validate_email(email):
	validate_email_add(email, True)

@frappe.whitelist()
def create_user(first_name,last_name,email,gender,mobile_no,birth_date):
	print("_______")
	user_doc = frappe.new_doc("User")
	user_doc.first_name = first_name
	user_doc.last_name = last_name
	user_doc.username = email
	user_doc.email = email
	user_doc.gender = gender
	user_doc.mobile_no = mobile_no
	user_doc.birth_date = birth_date
	user_doc.flags.send_welcome_mail = True
	user_doc.save()

	



