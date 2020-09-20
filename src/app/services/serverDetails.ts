export class ServerDetails {
	public serverDetails = `${this.serverIp}/results/Procedures`;
	// public studentServerDetails = `${this.serverIp}/portal/index.php/cut_elearning`;
	public studentServerDetails = `${this.serverIp}/index.php/cut_elearning`;
	public serverDetailsForApi = `${this.serverDetails}`;
	public serverDetailsForStorage = `${this.serverDetails}`;
}
