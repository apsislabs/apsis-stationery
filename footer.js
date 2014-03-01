exports.header = null

exports.footer = {
	height: '.5in',
	contents: function(pageNum, numPages) {
		var today = new Date(),
			dd = today.getDate(),
			mm = today.getMonth()+1,
			yyyy = today.getFullYear(),
			returnHTML = '',
			today;

		// Format Date String
		if ( dd < 10 ) { dd = '0' + dd; }
		if ( mm < 10 ) { mm = '0' + mm; }
		today = mm + '/' + dd + '/' + yyyy;

		returnHTML += '<div style="padding-top: .25in;">';
			returnHTML += '<table border="0" cellspacing="0" cellpadding="0" width="100%" style="font-size: 8pt; font-family: open sans, sans-serif; color: #999; border-collapse: collapse; margin: 0; padding: 0;">';
				returnHTML += '<tbody>';
					returnHTML += '<tr>';
						returnHTML += '<td style="padding: 0; vertical-align: bottom;">' + today +'</td>';
						returnHTML += '<td style="padding: 0; vertical-align: bottom; text-align: right;">' + pageNum + " of " + numPages +'</td>';
					returnHTML += '</tr>';
				returnHTML += '</tbody>';
			returnHTML += '</table>';
		returnHTML += '</div>';

		return returnHTML;
	}
}