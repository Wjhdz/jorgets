import Swal from "sweetalert2";

const message:any = (idelement:any)=>{
    
  switch(idelement){
    case 1:
       Swal.fire({
        icon: "success",
        title: "Excelente...!",
        text: "Sesión iniciada",
        timer: 1500,
        color: "#34c73b",
        confirmButtonColor: "#34c73b",
        iconColor:"#34c73b"
      })
      break;
    case 2: 
      Swal.fire({
      icon: "error",
      title: "Oops....",
      text: "Usuario y contraseña no encotrados",
      timer: 1500,
      color:"red",
      confirmButtonColor:"red",
      iconColor:"red"
    });
    break;
    case 3:
      Swal.fire({
        icon: "success",
        title: "Te has registrado!",
        showConfirmButton: false,
        timer: 1500,
        color:"blue",
        iconColor:"blue"
      });
      break;
      case 4:
      Swal.fire({
        icon: "success",
        title: "Has actualizado tus datos",
        showConfirmButton: false,
        timer: 1500,
        color:"blue",
        iconColor:"blue"
      });
      break;
  }
}

export default message
