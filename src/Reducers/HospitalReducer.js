
const hospitalState = {
    Name:'Fortis group',
    contactInfo:{
        tel:'9839391216',
        email:'fortis@gmail.com',
        address:{
            city:"delhi",
            state:"delhi",
            country:"india",
            houseno:"612-A"
        }
    }
}




const hospitalList = (state = hospitalState,action) =>{
    return state;
}

export default hospitalList;