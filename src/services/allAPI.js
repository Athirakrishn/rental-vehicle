//guest api calls 

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//register api call 
export const registerAPI = async(reqBody)=>{
 return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

//authorized api call - user
//login api call


//authorized api call - admin