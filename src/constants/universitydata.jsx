export const userColumns = [
    { field: "ranking", headerName: "NRFI Ranking", width: 130 },
    {
      field: "universities",
      headerName: "Universities",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="cellWithImg flex gap-5 items-center">
            <img className="cellImg rounded-full h-10 w-10" src={params.row.img} alt="avatar" />
            {params.row.universities}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
  
    {
      field: "location",
      headerName: "Location",
      width: 200,
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
      ranking:"5th in India",
      universities: "IIT Bombay - Indian Institute of Technology",
      img: "https://www.theindianwire.com/wp-content/uploads/2019/01/IIT-Bombay.png",
      ownership: "public",
      email: "jeeiitb@iitb.ac.in",
      location: "Mumbai",
    },
    {
      id:2,
      ranking: "18th in India",
      universities: "Shivaji University",
      img: "https://3.bp.blogspot.com/-mwEiP8hmWKQ/Ud1s5DxFRwI/AAAAAAAABhQ/wnjnXce_DOM/s1600/Shivaji+university+Results+2013+Kolhapur+www.unishivaji.ac.in+Engineering+March+April+FYBCom.jpg",
      email: "sfc @ unishivaji . ac . in",
      ownership: "public",
     location : "Kolhapur",
    },
    {
      id:3,
      ranking:"28th in India" ,
      universities: "SavitriBai Phule University",
      img: "http://www.unipune.ac.in/uop_files/uop_logo.jpg",
      email: "Phd.mphiladmis@pun.unipune.ac.in",
      ownership: "public",
      location: "Pune",
    },
    {
      id:4,
      ranking: "32nd in India",
      universities: "Tata Institute of Fundamental Research",
      img: "https://www.campusoption.com/images/colleges/logos/10_12_16_075213_TAT_LL.jpg",
      email: "info at tifrh dot res dot in",
      ownership: "public",
      location: "Mumbai",
    },
    {
      id:5,
      ranking: "40th in India",
      universities: "University of Mumbai",
      img: "https://i.ytimg.com/vi/d5i-QTJ20-s/maxresdefault.jpg",
      email: "mumbai.in",
      ownership: "public",
      location: "Mumbai",
    },
    {
      id:6,
      ranking: "49th in India",
      universities: "Visvesvaraya National Institute of Technology",
      img: "https://media-fastly.hackerearth.com/media/companies/c8587b1-vnit%20LARGE%20LOGO.png",
      email: "Deanacd@vnit.ac.in",
      ownership: "public",
      location: "Nagpur",
    },
    {
      id:7,
      ranking: "98th in India",
      universities: " North Maharashtra University",
      img: "https://pitfurth.sirv.com/WP_mbahunt.in/2016/06/North-Maharashtra-University-NMU.png",
      email: "sfc@nmuj.digitaluniversity.ac",
      ownership: "public",
      location:"Jalgaon",
    },
   
    {
      id:8,
      ranking: "104 in India",
      universities: "Sant Gadge Baba Amravati University",
      img: "https://mahasarkar.co.in/wp-content/uploads/2018/05/amravati-uni-logo.jpg",
      email: "Sgbau.helpline@gmail.com",
      ownership: "public",
      location: "Amravati",
    },
    {
      id:9,
      ranking: "107 in India",
      universities: "Institute of Chemical Technology",
      img: "https://akseera.com/wp-content/uploads/2020/06/ict-mumbai-logo.png",
      email: "Director@iict.res.in",
      ownership: "public",
      location: "Mumbai",
    },
    {
      id:10,
      ranking: "114 in India",
      universities: " Homi Bhabha National Institute",
      img: "http://justswipe.com/wp-content/uploads/2015/06/Homi_Bhabha_National_Institute_logo.svg.png",
      email: "Registrar@hbni.ac.in",
      ownership: "public",
      location: "Mumbai",
    },
  ];