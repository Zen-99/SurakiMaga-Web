import axios from "axios"


class ApiClient{
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = 'surakimaga_driver_token'
    }

    async setToken(token) {
        this.token = token
        localStorage.setItem(this.tokenName,token);
    }
    getToken = async () => {
        // get Data from Storage
        try {
          const data = localStorage.getItem(this.tokenName);
          if (data !== null) {
            this.setToken(data)
            return data
          }
        } catch (error) {
          console.log(error);
        }
    }
    removeToken = async () => {
        localStorage.setItem(this.tokenName,"");
    }
    async request({ endpoint, method = `GET`, data = {} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json",
            // Authorization: this.token ? `Bearer ${this.token}` : "",
        }
        this.getToken();
        if(this.token){
            console.log(this.token)

            headers["Authorization"]=`Bearer ${this.token}`
        }
        console.log("hello",headers,data,url,method)
        try {
            console.log("into try")
            const res = await axios({url, method, data, headers })
            console.log(res.data)
            return { dataresponse: res.data, error: null }
        } catch (error) {
            console.error("APIclient.makeRequest.error:")
            console.error({ errorResponse: error.response })

            
            const message = "error"
            // const message = error.response.data.error.message
            return { data: null, error: message || String(error) }

        }
    }

    async verifyUser(credentials) {
        return await this.request({ endpoint: `auth/verify`, method: `POST`, data: credentials })
    }
    async sendOtp(credentials){
        return await this.request({ endpoint: `auth/sendOtp`, method: `POST`, data: credentials })
    }
    async resendOtp(){
        return await this.request({ endpoint: `auth/resendOtp`, method: `GET` })
    }
    async submitCredentials(credentials){
        return await this.request({ endpoint: `auth/submitCredentials`, method: `POST`, data:credentials})
    }
    async loginUser(credentials){
        return await this.request({ endpoint: `auth/login`, method: `POST`, data:credentials})
    }
    async registerUser(credentials){
        return await this.request({ endpoint: `auth/register`, method: `POST`, data:credentials})
    }
    async loadDetails(){
        return await this.request({ endpoint: `driverauth/details`, method: `GET`})
    }
    async loadownerDetails(){
        return await this.request({ endpoint: `ownerauth/getownerdetails`, method: `GET`})
    }
    async registerDriver(credentials){
        return await this.request({endpoint:`ownerauth/registerDriver`,method:`POST`,data:credentials})
    }
    async EditOwnerProfile(credentials){
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/EditOwnerProfile`,method:`POST`,data:credentials})
    }
    async loadDriversDetails(){
        return await this.request({endpoint: `ownerauth/getdriverdetails`, method: `GET`})
    }
    async EditOwnerDriverProfile(credentials){
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/EditOwnerDriverProfile`,method:`POST`,data:credentials})
    }

    async isVerify(){
        return await this.request({endpoint:`auth/isverify`,method:`GET`})
    }

    async removeDriver(credentials){
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/removeDriver`,method:`POST`,data:credentials})

    }
    async getDriverDetails(credentials){
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/loadDriverDetails`,method:`POST`,data:credentials})
    }
    async registersclvan(credentials) {
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/registersclvan`,method:`POST`,data:credentials})
    }
    async addSchoolstoSchoolvan(credentials) {
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/addSchoolstoSchoolvan`,method:`POST`,data:credentials})
    }
    async isuniquevehicleno(credentials){
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/isuniquevehicleno`,method:`POST`,data:credentials})
    }
    async getschoolvandetails(){
        return await this.request({endpoint: `ownerauth/getschoolvandetails`, method: `GET`})
    }
    async getschoolsSchoolvan(){
        return await this.request({endpoint: `ownerauth/getschoolsSchoolvan`, method: `GET`})
    }
    async updatesclvanDetails(credentials){
        return await this.request({endpoint:`ownerauth/updatesclvanDetails`,method:`POST`,data:credentials})
    }
    async removeSchoolstoSchoolvan(credentials){
        return await this.request({endpoint:`ownerauth/removeSchoolstoSchoolvan`,method:`POST`,data:credentials})
    }
    async assignnewdriver(credentials){
        return await this.request({endpoint:`ownerauth/assignnewdriver`,method:`POST`,data:credentials})
    }
    async removeVehicle(credentials){
        console.log(credentials)
        return await this.request({endpoint:`ownerauth/removeDriver`,method:`POST`,data:credentials})
    }
    async getOwnersAdDetails(){
        return await this.request({endpoint: `ownerauth/getOwnersAdDetails`, method: `GET`})
    }
    async getAllAdDetails(){
        return await this.request({endpoint: `ownerauth/getAllAdDetails`, method: `GET`})
    }
    async getAdDetailsSchools(credentials){
        return await this.request({endpoint: `ownerauth/getAdDetailsSchools`, method: `POST`,data:credentials})
    }
    async getAdDetailsImages(credentials){
        return await this.request({endpoint: `ownerauth/getAdDetailsImages`, method: `POST`,data:credentials})
    }
    async InsertAdImage(credentials){
        return await this.request({endpoint: `ownerauth/InsertAdImage`, method: `POST`,data:credentials})
    }
    async InsertAdDetails(credentials){
        return await this.request({endpoint: `ownerauth/InsertAdDetails`, method: `POST`,data:credentials})
    }
    async getCount(){
        return await this.request({endpoint: `ownerauth/getCount`, method: `GET`})
    }
    async removeAd(credentials){
        return await this.request({endpoint: `ownerauth/removeAd`, method: `POST`,data:credentials})
    }


     //Parent Routes
    async getChildren(){
        return await this.request({endpoint:`parent/children`,method:`GET`})
    }
    async getSchool(){
        return await this.request({endpoint:`user/school`,method:`GET`})
    }
    async getSchoolAdvertisement(){
        return await this.request({endpoint:`user/schoolvanadvertisement`,method:`GET`})
    }
    async addChild(credentials){
        return await this.request({endpoint:`user/schoolvanadvertisement`,method:`POST`,data:credentials})
    }
    async getChildVan(credentials){
        return await this.request({endpoint:`parent/childvandetails`,method:`POST`, data:credentials})
    }
    async getdestinationSchools(credentials){
        return await this.request({endpoint:`user/destinationschools`,method:`POST`, data:credentials})
    }
    async getrequestSchools(credentials){
        return await this.request({endpoint:`parent/requestschoolchildren`,method:`POST`, data:credentials})
    }
    async requestSchoolVan(credentials){
        return await this.request({endpoint:`parent/sendrequest`,method:`POST`, data:credentials})
    }
    async leaveSchoolVan(credentials){
        return await this.request({endpoint:`parent/leavevan`,method:`POST`, data:credentials})
    }


    //Admin Routes
    async getDashboardCount(){
        return await this.request({endpoint:`admin/dashboardcount`,method:`GET`})
    }
    async getpendingRequest(){
        return await this.request({endpoint:`admin/pendingrequest`,method:`GET`})
    }
    async acceptRequest(credentials){
        return await this.request({endpoint:`admin/acceptrequest`,method:`POST`,data:credentials})
    }
    async getOwnersDetails(){
        return await this.request({endpoint:`admin/ownersdetails`,method:`GET`})
    }
}



const API = new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")

export default API