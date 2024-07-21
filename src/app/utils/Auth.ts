import { endpoint } from "./Constants";
export async function validateToken(token : string | null) : Promise<Response> {
    const loginResponse = await fetch(endpoint.concat(`/auth/validate`), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Token" : token || ""
         }
    });
   return loginResponse
    // loginResponse.then(response =>{
    //     if (response.status == 401) {
    //         //route to login page
    //         valid =  false;
    //     } else if (response.status == 200) {
    //         valid =  true;
    //     }    
    // })

}