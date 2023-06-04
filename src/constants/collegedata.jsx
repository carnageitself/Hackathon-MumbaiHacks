export const userColumns = [
  { field: "ranking", headerName: "NRFI Ranking", width: 130 },
  {
    field: "colleges",
    headerName: "Colleges",
    width: 500,
    renderCell: (params) => {
      return (
        <div className="cellWithImg flex gap-5 items-center">
          <img className="cellImg rounded-full h-10 w-10" src={params.row.img} alt="avatar" />
          {params.row.colleges}
        </div>
      );
    },
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "ownership",
    headerName: "Ownership",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithOwnership ${params.row.ownership}`}>
          {params.row.ownership}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id:1,
    ranking:"AAAAA",
    colleges: "IIT Bombay - Indian Institute of Technology",
    img: "https://www.theindianwire.com/wp-content/uploads/2019/01/IIT-Bombay.png",
    ownership: "public",
    email: "jeeiitb@iitb.ac.in",
    location: "Powai",
  },
  {
    id:2,
    ranking:"AAAAA" ,
    colleges: "ICT Mumbai - Institute of Chemical Technology",
    img: "https://afterbtech.com/wp-content/uploads/2011/02/Institute-of-Chemical-Technology.jpg",
    email: "Director@iict.res.in",
    ownership: "public",
    location: "Matunga",
  },
  {
    id:3,
    ranking: "AAAAA+",
    colleges: "MPSTME Mumbai - Mukesh Patel School of Technology Management and Engineering",
    img: "https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1603372473.jpg",
    email: " enquiry.mpstme@nmims.edu",
    ownership: "private",
    location:"Vileparle" ,
  },
  {
    id:4,
    ranking: "AAAAA+",
    colleges: "VJTI Mumbai - Veermata Jijabai Technological Institute",
    img: "https://www.eduvidya.com/admin/Upload/Institutes/634928117742035939_veermata.jpg",
    email: "registrar@vjti.org.in",
    ownership: "public",
    location: "Matunga",
  },
  {
    id:5,
    ranking:"AAAAA" ,
    colleges: "DJSCE Mumbai - Dwarkadas J Sanghvi College of Engineering",
    img: "https://www.it.iitb.ac.in/anides/img/activities/DJ%20Sanghvi_2011.png",
    email: "admin@djsce.ac.in",
    ownership: "private",
    location: "Vileparle",
  },
  {
    id:6,
    ranking: "AAAAA",
    colleges: "KJ Somaiya College of Engineering, Mumbai",
    img: "https://static.ambitionbox.com/alpha/colleges/photos/logos/kj-somaiya-institute-of-engineering-and-information-technology.jpg",
    email: "Csdc@somaiya.edu",
    ownership: "private",
    location: "Vidyavihar",
  },
  {
    id:7,
    ranking: "AAAAA",
    colleges: "SPIT Mumbai - Sardar Patel Institute of Technology",
    img: "https://www.campusoption.com/images/colleges/logos/24_11_17_104201_Logo.jpg",
    email: "principal{at}spit.ac.in",
    ownership: "private",
    location: "Andheri",
  },
  {
    id:8,
    ranking: "AAAAA+",
    colleges: "Fr Conceicao Rodrigues College of Engineering, Mumbai",
    img: "https://image3.mouthshut.com/images/imagesp/925718586s.jpg",
    email: "crce@frcrce.ac.in",
    ownership: "private",
    location: "Bandra",
  },
  {
    id:9,
    ranking:" AAAAA+",
    colleges: "KJSIEIT Mumbai - KJ Somaiya Institute of Engineering and Information Technology",
    img: "https://static.ambitionbox.com/alpha/colleges/photos/logos/kj-somaiya-institute-of-engineering-and-information-technology.jpg",
    email: "info.tech@somaiya.edu",
    ownership: "private",
    location: "Sion",
  },
  {
    id:10,
    ranking: "AAAAA+",
    colleges: "SPCE Mumbai - Sardar Patel College of Engineering",
    img: "https://image3.mouthshut.com/images/imagesp/925002385s.png",
    email: "internship.spce@gmail.com",
    ownership: "private",
    location:"Andheri" ,
  },
];