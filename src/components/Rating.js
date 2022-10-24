import React from "react";

function Rating ({rate}){
    if(rate == 5){
        return (
            <div className="d-flex flex-row"> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span>  
            </div>
        )
    } else if(rate == 4) {
        return (
            <div className="d-flex flex-row"> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span> 
            </div>
        )
    } else if(rate == 3) {
        return (
            <div className="d-flex flex-row"> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span>  
                <span class="fa fa-star star-inactive mx-1"></span> 
            </div>
        )
    } else if(rate == 2) {
        return (
            <div className="d-flex flex-row"> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span>  
                <span class="fa fa-star star-inactive mx-1"></span> 
            </div>
        )
    } else if(rate == 1) {
        return (
            <div className="d-flex flex-row"> 
                <span class="fa fa-star star-active mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span>  
                <span class="fa fa-star star-inactive mx-1"></span> 
            </div>
        )
    } else {
        return (
            <div className="d-flex flex-row"> 
                <span class="fa fa-star star-inactive mx-1"></span>
                <span class="fa fa-star star-inactive mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span> 
                <span class="fa fa-star star-inactive mx-1"></span>  
                <span class="fa fa-star star-inactive mx-1"></span> 
            </div>
        )
    }
}
export default Rating