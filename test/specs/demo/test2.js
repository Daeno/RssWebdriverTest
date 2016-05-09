describe('my awesome website', function() {
	it('should do some chai assertions', function() {
		browser.url('/');
		browser.getTitle().should.be.equal('遠距支援系統');
	})
});
