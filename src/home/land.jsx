// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap'; // ✅ MUST IMPORT THIS
// import DeveloperDonutChart from './chart'; // updated import

// export default function HeroSection() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <div
//         className="container-fluid"
//         style={{
//           height: "100vh",
//           backgroundColor: "#E7FCE5",
//           display: "flex",
//           alignItems: "center",
//           padding: "0 50px",
//         }}
//       >
//         <div className="row w-100 align-items-center">
//           {/* LEFT TEXT COLUMN */}
//           <div className="col-md-6 col-sm-12 text-start">
//             <h1
//               style={{
//                 fontSize: "50px",
//                 fontWeight: "700",
//                 lineHeight: "1.2",
//                 color: "#000",
//               }}
//             >
//               Build Your Dream Tech Team
//               <br />
//               <span style={{ color: "#0E8A00" }}>in Just 48 Hours</span>
//             </h1>

//             <p className="mt-4 fs-5 text-secondary">
//               Flexible to match your timezone and project needs
//             </p>
//             <p className="fs-5 text-secondary">
//               Clean code, pixel-perfect design, and responsive layouts
//             </p>
//             <p className="fs-5 text-secondary mb-4">Let’s Work Together</p>

//             <button
//               className="btn btn-success px-4 py-2 fw-semibold"
//               style={{ borderRadius: "8px", fontSize: "18px" }}
//             >
//               Hire Developers
//             </button>
//           </div>

//           {/* RIGHT IMAGE COLUMN */}
//           <div
//             className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
//             style={{ height: "100vh" }}
//           >
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BLRimQNatgYjAQ17qOVBF09FgWhmFaed4Q&s"
//               alt="Team working"
//               className="rounded mt-5"
//               style={{
//                 width: "100%",
//                 height: "80vh",
//                 objectFit: "cover",
//                 borderLeft: "8px solid #BFFF00",
//                 boxShadow: "0 0 25px rgba(0,0,0,0.2)",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* BELOW SECTION WITH BACKGROUND COLOR */}
//       <div
//         className="w-100"
//         style={{
//           backgroundColor: "#4bf2a4ff",
//           height: "200px",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
// <Container className="py-5">
//   <div className="row justify-content-center">
//     {[
//       {
//         src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a1ec88dfb02dcee44e29_48.png",
//         text: "Profiles\n48 Hrs",
//       },
//       {
//         src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a2161e83a3c7b233afed_re.png",
//         text: "Pre-Vetted\nProfiles",
//       },
//       {
//         src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a252603862dad30cf874_7.png",
//         text: "7 Days\nRisk-Free Trial",
//       },
//       {
//         src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63bc10c304cd88addd66ee10_Time-Zone.png",
//         text: "Time Zone\nAligned",
//       },
//     ].map((item, index) => (
//       <div key={index} className="col-6 col-md-3 text-center mb-4">
//         <img
//           src={item.src}
//           alt={`Logo ${index + 1}`}
//           style={{ width: "150px", height: "auto", paddingTop: "30px" }}
//         />
//         <div
//           className="fw-semibold text-light"
//           style={{ marginTop: "10px", lineHeight: "1.4" }}
//         >
//           {item.text.split("\n").map((line, i) => (
//             <div key={i}>{line}</div>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// </Container>

//       </div>


//       <div className="row align-items-center my-5">
//         <div className="col-md-6">
//           <div style={{ marginLeft: "200px", fontSize: "25px", fontWeight: "bold" }}>
//             Build Your Dream Team With Expertise
//             <br /> in Every Tech Stack
//           </div>
//           <div style={{ marginLeft: "200px" }}>
//             From Node to Java, AWS to Airtable, we will get the right
//             <br />
//             skilled engineer to join your organization
//           </div>
//         </div>
//         <div className="col-md-6 mt-5">
//           <img
//             src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/642d29acf5ea22b55f682acc_1.png"
//             style={{ width: "100%", maxWidth: "500px", height: "auto" }}
//             alt="Example"
//           />
//         </div>
//       </div>
//       {/* <div style={{ fontSize: "30px", textAlign: "center", fontWeight: "bold",          marginTop: "50px",   
          
//  }}>
//         1000 +<br />
//         Developers Available on Bench
//       </div>
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "20px 20px",
//           display: "flex",
//           marginBottom:"200px",
//           justifyContent: "center",
//         }}
//       >
//         <div style={{ width: "350px", height: "350px" }}>
//           <DeveloperDonutChart />
//         </div>
//       </div> */}
//             {/* CENTER TEXT SECTION */}
// {/* CENTERED TEXT + DONUT CHART SECTION (NO GAP BELOW) */}
// {/* BOTTOM SECTION — TEXT + DONUT CHART */}
// <div
//   style={{
//     backgroundColor: "white",
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 0,        // no padding
//     margin: 0,         // no margin
//   }}
// >
//   {/* TEXT */}
//   <div
//     style={{
//       fontSize: "30px",
//       fontWeight: "700",
//       lineHeight: "1.3",
//       textAlign: "center",
//       margin: "30px 0 10px 0",  // only small spacing above and between text/chart
//       padding: 0,
//     }}
//   >
//     1000+ <br />
//     Developers Available on Bench
//   </div>

//   {/* DONUT CHART */}
//   <div
//     style={{
//       width: "300px",
//       height: "300px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       margin: 0,
//       marginTop :"100px",
//     }}
//   >
//     <DeveloperDonutChart />
//   </div>
// </div>

//     </>
//   );
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import DeveloperDonutChart from './chart';

export default function HeroSection() {
  return (
    <div
      style={{
        paddingTop:"20px",
        width: '100vw',
        maxWidth: '100%',
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          backgroundColor: '#E7FCE5',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '50px 15px',
        }}
      >
        <Container fluid="xxl">
          <Row className="align-items-center g-3 g-md-5">
            <Col md={6} xs={12} className="text-start">
              <h1
                style={{
                  fontSize: 'clamp(26px, 4.5vw, 44px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Build Your Dream Tech Team
                <br />
                <span style={{ color: '#0E8A00' }}>in Just 48 Hours</span>
              </h1>

              <p className="mt-4 fs-5 text-secondary">
                Flexible to match your timezone and project needs
              </p>
              <p className="fs-5 text-secondary">
                Clean code, pixel-perfect design, and responsive layouts
              </p>
              <p className="fs-5 text-secondary mb-4">Let’s Work Together</p>

              <button
                className="btn btn-success px-4 py-2 fw-semibold"
                style={{ borderRadius: '8px', fontSize: '18px' }}
              >
                Hire Developers
              </button>
            </Col>

            <Col md={6} xs={12} className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BLRimQNatgYjAQ17qOVBF09FgWhmFaed4Q&s"
                alt="Team working"
                className="img-fluid rounded mt-4 mt-md-0"
                style={{
                  borderLeft: '8px solid #BFFF00',
                  boxShadow: '0 0 25px rgba(0,0,0,0.15)',
                  maxHeight: '80vh',
                  objectFit: 'cover',
                  width: '100%',
                  overflow: 'hidden',
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* INFO STRIP SECTION */}
      <section
        style={{
          backgroundColor: '#4BF2A4',
          padding: '50px 0',
          overflow: 'hidden',
        }}
      >
        <Container fluid="lg">
          <Row className="justify-content-center text-center g-4">
            {[
              {
                src: 'https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a1ec88dfb02dcee44e29_48.png',
                text: 'Profiles\n48 Hrs',
              },
              {
                src: 'https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a2161e83a3c7b233afed_re.png',
                text: 'Pre-Vetted\nProfiles',
              },
              {
                src: 'https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a252603862dad30cf874_7.png',
                text: '7 Days\nRisk-Free Trial',
              },
              {
                src: 'https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63bc10c304cd88addd66ee10_Time-Zone.png',
                text: 'Time Zone\nAligned',
              },
            ].map((item, index) => (
              <Col xs={6} md={3} key={index}>
                <img
                  src={item.src}
                  alt={`Logo ${index + 1}`}
                  className="img-fluid d-block mx-auto"
                  style={{ width: '100px', height: 'auto' }}
                />
                <div
                  className="fw-semibold text-light mt-3"
                  style={{ lineHeight: '1.4' }}
                >
                  {item.text.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section style={{ padding: '60px 15px' }}>
        <Container>
          <Row className="align-items-center text-center text-md-start g-4">
            <Col md={6}>
              <h2
                style={{
                  fontSize: 'clamp(22px, 3vw, 30px)',
                  fontWeight: '700',
                  lineHeight: 1.3,
                }}
              >
                Build Your Dream Team With Expertise
                <br /> in Every Tech Stack
              </h2>
              <p className="text-secondary mt-3">
                From Node to Java, AWS to Airtable, we’ll get the right skilled
                engineer to join your organization.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/642d29acf5ea22b55f682acc_1.png"
                alt="Tech Example"
                className="img-fluid mx-auto d-block"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
<section
  style={{
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "10px 0", 
    marginTop: "-10px", 
  }}
>
  <Container>
    <div
      style={{
        maxWidth: "260px",
        margin: "0 auto",
      }}
    >
      <DeveloperDonutChart />
    </div>
  </Container>
</section>
<div
  className="container-fluid py-4"
  style={{ backgroundColor: "#e6f7f9ff" }}
>
  <div className="row justify-content-center align-items-center text-center g-3">
    <h3 className='text-center '>Trusted By Companies</h3>
    <div className="col-6 col-sm-4 col-md-2">
      <img
        src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/631b3372bdadc49be9414aad_logo1-2.webp"
        alt="Logo 1"
        className="img-fluid"
        style={{ maxWidth: "150px" }}
      />
    </div>
    <div className="col-6 col-sm-4 col-md-2">
      <img
        src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63bd80f091b1708e9615430d_logo5.png"
        alt="Logo 2"
        className="img-fluid"
        style={{ maxWidth: "150px" }}
      />
    </div>
    <div className="col-6 col-sm-4 col-md-2">
      <img
        src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/631b396e8e8cbd3fc0929c4a_logo2-1.webp"
        alt="Logo 3"
        className="img-fluid"
        style={{ maxWidth: "150px" }}
      />
    </div>
    <div className="col-6 col-sm-4 col-md-2">
      <img
        src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/631b396ff0282f26455f2088_logo3-1.webp"
        alt="Logo 4"
        className="img-fluid"
        style={{ maxWidth: "150px" }}
      />
    </div>
    <div className="col-6 col-sm-4 col-md-2">
      <img
        src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/631b3971c2793a24268b670a_logo4-1.webp"
        alt="Logo 5"
        className="img-fluid"
        style={{ maxWidth: "150px" }}
      />
    </div>
  </div>
</div> 
<h3 className=' text-center pt-5'>Hire The Best, Leave The Rest</h3>
<div className='text-center mb-5'>Our 4-step hiring process to hire top software developers from India.</div>
<div className='row justify-content-center align-items-center text-center g-3'>
  <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/630635487f127e588b4d9f23_step1.webp" style={{width:"150px"}}/></div>
  <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306354a4aaa9053573eda9f_step2.webp" style={{width:"150px"}}/></div>
  <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306354b5777201a172da310_step3.webp" style={{width:"150px"}}/></div>
 <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306354b4bcca842be34aad2_step4.webp" style={{width:"150px"}}/></div>
</div>
</div>
  );
}
