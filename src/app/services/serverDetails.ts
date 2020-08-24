export class ServerDetails {
	// public serverDetails = "http://172.16.50.109/elearning.student.api/Procedures";
	// public serverDetailsForApi = `${this.serverDetails}/api`;
	// public serverDetailsForStorage = `${this.serverDetails}`;
	public portalURL = "http://localhost/portal";
	public loginURL = `${this.portalURL}/index.php/portal/login`;
	public vleLink = `${this.portalURL}/index.php/cut_elearning/api/loginToVitualLearning`;
	public serverDetails = "http://elearning/Procedures";
	public studentServerDetails = "http://localhost/portal/index.php/cut_elearning";
	public serverDetailsForApi = `${this.serverDetails}`;
	public serverDetailsForStorage = `${this.serverDetails}`;
}
