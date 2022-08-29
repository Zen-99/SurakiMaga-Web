import React from "react";
import './OwnerAdvertisements.css';

function OwnerAddNewAd (){
    return(
        <>
            <div class="new-Ad-container card" >
                <form class="row g-3 p-3 needs-validation">
                <h4>New Advertisement</h4>
                <div class="col-md-10">
                    <label for="inputTitle" class="form-label">Title</label>
                    <input type="text" class="form-control" id="inputTitle" required/>
                </div>
                <div class="col-7">
                    <label for="inputSchoolvan" class="form-label">School Van</label>
                    <select id="inputSchoolvan" class="form-select" placeholder="Choose.." required>
                    <option>ABC123</option>
                    <option>ACD345</option>
                    <option>BN567</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <textarea class="form-control" id="inputDescription" rows="3" required></textarea>
                </div>
                <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-success">Save</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                </div>
                </form>
            </div>
        </>
    )
}
export default OwnerAddNewAd;