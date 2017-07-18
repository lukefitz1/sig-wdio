class MyAccount {
	get loginForm() { return $('#login-form'); }
	get un() { return $('#email'); }
	get pw() { return $('#pass'); }
	get loginBtn() { return $('#send2'); }
	get registerBtn() { return $('#login-form > div > div > div.col-2.new-users > div > button'); }
	get dashboard() { return $('#mobile-wrap > div > div > div.content-pane.container > div > div.col-main > div > div'); }
	get dashboardWelcomeMessage() { return $('#mobile-wrap > div > div > div.content-pane.container > div > div.col-main > div > div > div.welcome-msg'); }
	get accountCreateForm() { return $('#form-validate'); }
	get fn() { return $('#firstname'); }
	get ln() { return $('#lastname'); }
	get email() { return $('#email_address'); }
	get createPw() { return $('#password'); }
	get confirmPw() { return $('#confirmation'); }
	get submitBtn() { return $('#form-validate > div.buttons-set.form-buttons > button'); }
	get successMessage() { return $('#mobile-wrap > div > div > div.content-pane.container > div > div.col-main > div > div > ul > li > ul > li > span'); }

	login(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

	loginWithEnter(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		browser.keys("Enter");
	}

	createAccount(fn, ln, em, pw) {
		this.fn.setValue(fn);
		this.ln.setValue(ln);
		this.email.setValue(em);
		this.createPw.setValue(pw);
		this.confirmPw.setValue(pw);

		this.accountCreateForm.submitForm();
	}

}

module.exports = new MyAccount();