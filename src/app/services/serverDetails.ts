export class ServerDetails {

	public websiteContentUrl = `https://www.cut.ac.zw/cut-back/public`;
	// public websiteContentUrl = `http://cutback`;
	public noticeAPI = `${this.websiteContentUrl}/api`;

	public noticeImageStorage = `${this.noticeAPI}`;
	// public serverIp = 'https://www.cut.ac.zw/portal';
	// public serverIp = 'http://172.16.50.109/portal';
	public serverIp = 'http://localhost/portal';
	public portalURL = `${this.serverIp}`;
	public loginURL = `${this.portalURL}/index.php/portal/login`;
	public logoutURL = `${this.portalURL}/index.php/cut_elearning/home/logout`;
	public vleLink = `${this.portalURL}/index.php/cut_elearning/api/loginToVitualLearning`;
	public serverDetails = `${this.serverIp}/results/Procedures`;
	// public past_exam_papers = `http://197.155.232.34/pastexam/`
	public past_exam_papers = `http://library.cut.ac.zw/pastexam/`

	// public studentServerDetails = `${this.serverIp}/portal/index.php/cut_elearning`;
	public studentServerDetails = `${this.serverIp}/index.php/cut_elearning`;
	public serverDetailsForApi = `${this.serverDetails}`;
	public serverDetailsForStorage = `${this.serverDetails}`;
}
