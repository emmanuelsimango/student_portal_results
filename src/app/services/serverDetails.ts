export class ServerDetails {
	public serverDetails = "http://172.16.50.109/elearning.student.api/Procedures";
	// public serverDetailsForApi = `${this.serverDetails}/api`;
	// public serverDetailsForStorage = `${this.serverDetails}`;
	// public portalURL = "http://portal.local";
	// public studentServerDetails = "http://portal.local/index.php/cut_elearning";
	public portalURL = "http://172.16.50.109/portal";
	public loginURL = `${this.portalURL}/index.php/portal/login`;
	public logoutURL = `${this.portalURL}/index.php/cut_elearning/home/logout`;
	public vleLink = `${this.portalURL}/index.php/cut_elearning/api/loginToVitualLearning`;
	// public serverDetails = "https://cut.ac.zw/results/Procedures";
	public studentServerDetails = "http://172.16.50.109/portal/index.php/cut_elearning";
	public serverDetailsForApi = `${this.serverDetails}`;
	public serverDetailsForStorage = `${this.serverDetails}`;
}
