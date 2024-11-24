import userprops from "../Interface/userprops";

export const BdUsers = () => {
  const Bdusers: userprops[] = [
    {
      userName: "jorge",
      email: "jorge@correo.com",
      password: "1234",
      avatar:
        "https://pixabay.com/es/photos/hombre-soledad-mar-velada-tarde-2915187/",
    },
    {
      userName: "joetr",
      email: "joer@correo.com",
      password: "1234",
      avatar:
        "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg",
    },
    {
      userName: "joel",
      email: "joear@correo.com",
      password: "1234",
      avatar:
        "https://pixabay.com/es/photos/atardecer-%C3%A1rbol-silueta-oscuridad-3156176/",
    },
  ];

  return Bdusers;
};

export default BdUsers;
