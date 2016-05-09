describe('login as superadmin', function() {
	it('should login', function() {
		browser.url('http://10.20.30.221:2000');
		browser.pause('1000');

		browser.click("button=Close");

		//browser.waitForVisible("*=登入");
		browser.pause('1000');
		browser.click("*=登入");

		var emailInput = browser.element("input[name=email]");
		emailInput.setValue('psyop1st@gmail.com');		
		var passwdInput = browser.element("input[name=password]");
		passwdInput.setValue('h7n9@Taipei');

		browser.click("button=登入");
		browser.click("button=Close");

		browser.element(".dropdown > a")
			.getText().should.be.equal("管理者");
	});
	
	it('should go to psy_product upload form', function() {
		browser.click("=管理者");
		browser.click("=上傳心戰品");
		browser.element("div .panel-body > div .panel-heading")
			.getText()
			.should.be.equal("第一步");
	});

	// it('should go through comic upload process', function() {
	// 	this.timeout(500000);
	// 	browser.pause('1000');
	// 	browser.selectByVisibleText('[name="media_type"]', '心戰漫畫');
	// 	browser.isVisible('#subform-2')
	// 		.should.be.equal(true);
	// 	browser.isVisible('#subform-3')
	// 		.should.be.equal(true);
	// 	browser.isVisible('#subform-4')
	// 		.should.be.equal(true);
	// 	browser.chooseFile("#product-form #ts-product", "./test-attachment/demo_picture.jpg");
	// 	browser.chooseFile("#worksheet-form #ts-worksheet", "./test-attachment/demo_worksheet.docx");

	// 	browser.waitUntil(function() {
	// 		return this.getText('#product-form #list-holder li').then(function(text) {
	// 			console.log(text.substring(20));
	// 			return text.substring(20)=='demo_picture.jpg';
	// 		});
	// 	});

	// 	browser.waitUntil(function() {
	// 		return this.getText('#worksheet-form #list-holder li').then(function(text) {
	// 			console.log(text.substring(20));
	// 			return text.substring(20)=='demo_worksheet.docx';
	// 		});
	// 	});
	// 	var subForm3 = browser.element('#subform-3');
	// 	subForm3.selectByVisibleText('[name="step"]', "戰備整備");
	// 	subForm3.selectByVisibleText('[name="application"]', "心戰");
	// 	subForm3.selectByVisibleText('[name="property"]', "威嚇性");
	// 	subForm3.selectByVisibleText('[name="mission"]', "漢光");
	// 	subForm3.setValue('[name="chinese_year"]', "105");
	// 	subForm3.selectByVisibleText('[name="squadron"]', "一中隊");
	// 	subForm3.setValue('[name="serial_num"]', "002");
	// 	subForm3.setValue('[name="title"]', "哈哈西西");

	// 	var subForm4 = browser.element("#subform-4");
	// 	subForm4.selectByVisibleText('[name="service"]', "陸軍");
	// 	subForm4.selectByVisibleText('[name="zone"]', "第一作戰區");
	// 	subForm4.setValue('[name="doc_date"]', "2015-04-21");
	// 	subForm4.selectByVisibleText('[name="service"]', "陸軍");
	// 	subForm4.selectByVisibleText('[name="service"]', "陸軍");

	// 	browser.click("button=上傳");
	// 	browser.pause('15000');
	// 	browser.isExisting(".alert.alert-success")
	// 		.should.be.equal(true);

	// });

	it('should go through video upload process', function() {
		this.timeout(500000);
		browser.selectByVisibleText('[name="media_type"]', '影片');
		browser.isVisible('#subform-2')
			.should.be.equal(true);
		browser.isVisible('#subform-3')
			.should.be.equal(true);
		browser.isVisible('#subform-4')
			.should.be.equal(true);
		//browser.chooseFile("#product-form #ts-product", "./test-attachment/demo_video.mp4");
		//browser.chooseFile("#worksheet-form #ts-worksheet", "./test-attachment/demo_worksheet.docx");
		browser.setValue("#product-form #ts-product", "C:\\sample\\demo_video.mp4");
		browser.setValue("#worksheet-form #ts-worksheet", "C:\\sample\\demo_worksheet.docx");

		browser.waitUntil(function() {
			return this.getText('#product-form #list-holder li').then(function(text) {
				console.log(text.substring(20));
				return text.substring(20)=='demo_video.mp4';
			});
		});

		browser.waitUntil(function() {
			return this.getText('#worksheet-form #list-holder li').then(function(text) {
				console.log(text.substring(20));
				return text.substring(20)=='demo_worksheet.docx';
			});
		});
		var subForm3 = browser.element('#subform-3');
		subForm3.selectByVisibleText('[name="step"]', "戰備整備");
		subForm3.selectByVisibleText('[name="application"]', "心戰");
		subForm3.selectByVisibleText('[name="property"]', "威嚇性");
		subForm3.selectByVisibleText('[name="mission"]', "漢光");
		subForm3.setValue('[name="chinese_year"]', "105");
		subForm3.selectByVisibleText('[name="squadron"]', "一中隊");
		subForm3.setValue('[name="serial_num"]', "002");
		subForm3.setValue('[name="title"]', "哈哈西西");

		var subForm4 = browser.element("#subform-4");
		subForm4.selectByVisibleText('[name="service"]', "陸軍");
		subForm4.selectByVisibleText('[name="zone"]', "第一作戰區");

		//subForm4.setValue('[name="doc_date"]', "2015-04-21");
		browser.execute(function() {
     		document.querySelector('input[name="doc_date"]').value = "2015-01-13";
		}, null);
		subForm4.selectByVisibleText('[name="service"]', "陸軍");
		subForm4.selectByVisibleText('[name="service"]', "陸軍");

		browser.click("button=上傳");
		browser.isExisting(".alert.alert-success")
			.should.be.equal(true);
	});
	it('should login', function() {
		browser.url('http://10.20.30.221:2000');
	});
});
