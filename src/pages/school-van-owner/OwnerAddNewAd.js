import React,{useState,useEffect} from "react";
import apiClient from '../../Services/ApiClient'
import './OwnerAdvertisements.css';
import Axios from "axios";

function OwnerAddNewAd (){
    const [form_Data, setForm_Data]=useState({
        title:"",
        description:"",
        vanid:"",
      })  
      const [formError, setFormError] = useState({
        title:null,
        description:null,
        vanid:null,
        img:null,
      });
      const [schoolvans,setSchoolvans]=useState([])
      const [file, setFile] = useState({
        img1:"",
        img2:"",
        img3:"",
        img4:""
    });
    const [isemptyfile, setisemptyFile] = useState({
        img1:"",
        img2:"",
        img3:"",
        img4:""
    });
      useEffect(() => {
        async function getschoolvandetails(){
            const{dataresponse,error} = await apiClient.getschoolvandetails()
            console.log(dataresponse.result)
            setSchoolvans(dataresponse.result)
            setForm_Data({ ...form_Data, vanid:dataresponse.result[0].id})
        }
        getschoolvandetails()
      },[])

      function refreshPage() {
        window.location.reload(false);
      }

      const submitDetails = async () => {
        var err = false
        schoolvans.map((data)=>{
            if(data.id===form_Data.vanid){
                if(data.ad===true){
                    err = true
                }
            }
        })
        if(form_Data.title===""){
            let msg = "Title can't be empty."
            setFormError({title:msg,description:null,vehicleno:null,img:null})
        } else if(form_Data.vanid===""){
            let msg = "Choose a vehicle"
            setFormError({title:null,description:null,vehicleno:msg,img:null})
        } else if(err){
            let msg = "This vehicle already has a advertiesment"
            setFormError({title:null,description:null,vehicleno:msg,img:null})
        } else if(form_Data.description===""){
            let msg = "Choose a vehicle"
            setFormError({title:null,description:msg,vehicleno:null,img:null})
        } else if(file.img1==="" && file.img2==="" && file.img3==="" && file.img4===""){
            let msg = "upload at least one picture"
            setFormError({title:null,description:null,vehicleno:null,img:msg})
        } else {
            for(var i =1 ;i<5;i++){
                console.log(i)
                var isImg=true;
                const formData=new FormData()
                if(i===1 && file.img1!=="" && file.img1!==undefined){
                    console.log(file.img1)
                    formData.append("file",file.img1); 
                } else if (i===2 && file.img2!=="" && file.img2!==undefined) {
                    console.log(file.img2)
                    formData.append("file",file.img2);
                } else if (i===3 && file.img3!=="" && file.img3!==undefined) {
                    formData.append("file",file.img3);
                    console.log(file.img3)
                } else if (i===4 && file.img4!=="" && file.img4!==undefined) {
                    console.log(file.img4)
                    formData.append("file",file.img4);
                } else {
                    console.log("else")
                    isImg=false;
                }
                if(isImg){
                    for (var key of formData.entries()) {
                        console.log(key[0] + ', ' + key[1]);
                    }
                    formData.append("upload_preset","dskmbhbt"); 
                    Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
                    .then(async (response)=>{
                        console.log("inside")
                        const img = response.data.secure_url
                        const { dataresponse, error } = await apiClient.InsertAdImage({
                            id:form_Data.vanid,
                            image:img
                        })
                    })
                }
            }
            const { dataresponse, error } = await apiClient.InsertAdDetails({
                id:form_Data.vanid,
                title:form_Data.title,
                description:form_Data.description
            }) 
            setForm_Data({title:"",description:"",vehicleno:""})
            setFile({img1:"",img2:"",img3:"",img4:""})
            setisemptyFile({img1:"",img2:"",img3:"",img4:""})
            setFormError({title:null,description:null,vehicleno:null,img:null})
            refreshPage()
        }
      }

      const handleselect = (selected) => {
        console.log(selected);
        setForm_Data({ ...form_Data, vanid: selected})
      };
      var images = []
      const ImgInput = (imgname,img)=>{
        console.log(img)
        setFile({ ...file, [imgname]:img})
        if(img!==undefined){
            setisemptyFile({...isemptyfile, [imgname]:img.name})
        }       
      }
      const cancel = () => {
        setForm_Data({title:"",description:"",vehicleno:""})
        setFile({img1:"",img2:"",img3:"",img4:""})
        setisemptyFile({img1:"",img2:"",img3:"",img4:""})
        setFormError({title:null,description:null,vehicleno:null,img:null})
    }

    return(
        <>  <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={cancel}></button>         
            </div>
            <div class="new-Ad-container card d-flex flex-row" >
                <div className='form-details d-flex flex-column p-4 gap-4'>
                    <h4>New Advertisement</h4>
                    <div class="col-md-10">
                        <label for="inputTitle" class="form-label">Title</label>
                        <input type="text" class="form-control" id="inputTitle" name="title" value={form_Data.title} onChange={(e) => setForm_Data({ ...form_Data, title: e.target.value})}/>
                        <div className="errors">{formError.title}</div>
                    </div>
                    <div class="col-7">
                        <label for="inputSchoolvan" class="form-label">School Van</label>
                        <select id="inputSchoolvan" class="form-select" placeholder="Choose.."  onChange={(e)=>handleselect(e.target.value)} >
                            {schoolvans.map((data)=>{
                                return <option value={data.id}>{data.vehicleno}</option>
                            })}
                        </select>
                        <div className="errors">{formError.vehicleno}</div>
                    </div>
                    <div class="col-12">
                        <label for="inputDescription" class="form-label">Description</label>
                        <textarea class="form-control" id="inputDescription" rows="3" name="description" value={form_Data.description} onChange={(e) => setForm_Data({ ...form_Data, description: e.target.value})}></textarea>
                        <div className="errors">{formError.description}</div>
                    </div>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                        <button type="submit" class="btn btn-success" onClick={submitDetails}>Save</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"  onClick={cancel}></button>         
                    </div>
                </div>
                <div className='form-images d-flex flex-column p-4 gap-4 justify-content-center'>
                    <div className='addmainimages d-flex flex-column justify-content-center align-items-center'>
                        <input class="addimgbtn" type="file" id="img1" onChange={(event)=>{ImgInput("img1",event.target.files[0])}} hidden/>
                        <label className="addimgbtnlable" for="img1"><i class="fas fa-plus"></i></label>
                        <div className="imgname">{isemptyfile.img1}</div>
                    </div>
                    <div className="errors">{formError.img}</div>
                    <div className='addotherimages d-flex gap-4'>
                        <div className='addimages d-flex flex-column justify-content-center align-items-center'>
                            <input class="addimgbtn" type="file" id="img2" onChange={(event)=>{ImgInput("img2",event.target.files[0])}} hidden/>
                            <label className="addimgbtnlable" for="img2"><i class="fas fa-plus"></i></label>
                            <div className="imgsname">{isemptyfile.img2}</div>
                        </div>
                        <div className='addimages d-flex flex-column justify-content-center align-items-center'>
                            <input class="addimgbtn" type="file" id="img3" onChange={(event)=>{ImgInput("img3",event.target.files[0])}} hidden/>
                            <label className="addimgbtnlable" for="img3"><i class="fas fa-plus"></i></label>
                            <div className="imgsname">{isemptyfile.img3}</div>
                        </div>
                        <div className='addimages d-flex flex-column justify-content-center align-items-center'>
                            <input class="addimgbtn" type="file" id="img4" onChange={(event)=>{ImgInput("img4",event.target.files[0])}} hidden/>
                            <label className="addimgbtnlable" for="img4"><i class="fas fa-plus"></i></label>
                            <div className="imgsname">{isemptyfile.img4}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OwnerAddNewAd;