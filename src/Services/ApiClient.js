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

    async getUsertype(credentials){
        return await this.request({ endpoint: `user`, method: `POST`, data:credentials})
    }
    async loadownerDetails(){
        return await this.request({ endpoint: `owner/getownerdetails`, method: `GET`})
    }
    async registerDriver(credentials){
        return await this.request({endpoint:`owner/registerDriver`,method:`POST`,data:credentials})
    }
    async EditOwnerProfile(credentials){
        return await this.request({endpoint:`owner/EditOwnerProfile`,method:`POST`,data:credentials})
    }
    async loadDriverDetails(){
        return await this.request({endpoint: `owner/getdriverdetails`, method: `GET`})
    }
    async EditOwnerDriverProfile(credentials){
        console.log(credentials)
        return await this.request({endpoint:`owner/EditOwnerDriverProfile`,method:`POST`,data:credentials})
    }

    async isVerify(){
        return await this.request({endpoint:`auth/isverify`,method:`GET`})
    }
    async removeDriver(credentials){
        console.log(credentials)
        return await this.request({endpoint:`owner/removeDriver`,method:`POST`,data:credentials})

    }
}



const API = new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")

export default API