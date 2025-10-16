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
  <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/630635487f127e588b4d9f23_step1.webp" style={{width:"150px"}}/>
 <span style={{display:"inline-block",width:"200px", height:"100px",padding:"20px",fontSize:"18px",border:"1px solid #278257ff", borderRadius:"10px",backgroundColor:"#adf6d4ff"}}>Share Your<br/> Requirement</span>
  </div>
  <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306354a4aaa9053573eda9f_step2.webp" style={{width:"150px"}}/>
   <span style={{display:"inline-block",width:"200px", height:"100px",padding:"20px",fontSize:"18px", borderRadius:"10px",border:"1px solid #278257ff",backgroundColor:"#adf6d4ff"}}>Shortlisted profiles<br/> share with you</span>
  </div>
  <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306354b5777201a172da310_step3.webp" style={{width:"150px"}}/>
   <span style={{display:"inline-block",width:"200px", height:"100px",padding:"20px",fontSize:"18px", borderRadius:"10px",border:"1px solid #278257ff",backgroundColor:"#adf6d4ff"}}>Select the right <br/>candidate by you</span>
  </div>
 <div className='col-6 col-sm-4 col-md-2'><img src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/6306354b4bcca842be34aad2_step4.webp" style={{width:"150px"}}/>
  <span style={{display:"inline-block",width:"200px", height:"100px",padding:"20px",fontSize:"18px", borderRadius:"10px",backgroundColor:"#adf6d4ff",border:"1px solid #278257ff"}}>Swift onboarding &<br/> Support</span>
 </div>
</div>

<div className="d-flex justify-content-center mt-5">
  <button className="bg-success text-light px-4 py-2 border-0 rounded">
    HIRE DEVELOPERS
  </button>
</div>
<div
  style={{ backgroundColor: "#e6f7f9ff", width: "100%", minHeight: "750px" }}
  className="mt-5 d-flex align-items-center"
>
  <Container>
    <Row className="align-items-center">
      {/* LEFT COLUMN: 4 BOXES (2x2 GRID) */}
      <Col
        md={6}
        className="d-grid justify-content-center"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {[
          {
            img: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b6cd274cd6e25320aebd2f_1.png",
            text: "97% <br/>Success Rate",
          },
          {
            img: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b6cf07076a331456aec058_2.png",
            text: "100% <br/>Full Time",
          },
          {
            img: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b6cf1ca775aaaf81932cf5_3.png",
            text: "4+ <br/>Daily Overlap",
          },
          {
            img: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b6cf5dd3adb49b79b16654_4.png",
            text: "&lt;5 Days <br/>Or Less To Hire",
          },
        ].map((box, index) => (
          <div
            key={index}
            className="bg-light d-flex flex-column justify-content-center align-items-center p-3"
            style={{
              borderRadius: "10px",
              border: "1px solid #ccc",
              textAlign: "center",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={box.img}
              alt={`icon-${index}`}
              style={{ width: "70px", height: "70px" }}
            />
            <span
              style={{
                fontWeight: "600",
                marginTop: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: box.text }}
            ></span>
          </div>
        ))}
      </Col>

      {/* RIGHT COLUMN: TEXT CONTENT */}
      <Col
        md={6}
        className="d-flex flex-column justify-content-center"
        style={{ paddingLeft: "40px" }}
      >
        <h5 style={{ color: "#28a745", fontWeight: "600" }}>Our Promise</h5>
        <h2 style={{ fontWeight: "700", lineHeight: "1.3" }}>
          Get The Best Talents From
          <br />
          Our Talent Cloud
        </h2>
        <p className="text-secondary mt-3 fs-5">
          We match and manage the best software engineers from
          <br /> our talent cloud to build your company’s long-term success.
        </p>
      </Col>
    </Row>
  </Container>
</div>

 
<div
  style={{
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsPo9w-k_yHzH0ZX1D87kCsM3SZzIFRiIBw&s')",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "900px",
    width: "100vw",
  }}
>
  <h1 className="text-light text-center pt-5">About TALN</h1>

  {/* Parent wrapper for boxes and button */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px", // spacing between boxes row and button
      padding: "20px",
    }}
  >
    {/* Row of boxes */}
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {/* BOX 1 */}
      <div
        style={{
          width: "350px",
          height: "230px",
          backgroundColor: "black",
          borderRadius: "30px",
          color: "white",
          padding: "20px",
        }}
      >
        <span style={{ fontSize: "25px", color: "lightgreen" }}>15+ Yrs<br /></span>
        <span style={{ fontSize: "15px", color: "white" }}>
          Experience TALN.cloud was founded by<br />
          experienced entrepreneurs who <br />
          successfully ran an IT Services company for a decade and a half.
        </span>
      </div>

      {/* BOX 2 */}
      <div
        style={{
          width: "350px",
          height: "230px",
          backgroundColor: "black",
          borderRadius: "30px",
          color: "white",
          padding: "20px",
        }}
      >
        <span style={{ fontSize: "25px", color: "lightgreen" }}>
          1000+ <br /> IT Talents <br />
        </span>
        <span style={{ fontSize: "15px", color: "white" }}>
          TALN has built a database of 1000+ pre-vetted<br />
          resources across different technologies.<br />
          Who are ready to be deployed immediately<br />
          on your assignments.
        </span>
      </div>

      {/* BOX 3 */}
      <div
        style={{
          width: "350px",
          height: "230px",
          backgroundColor: "black",
          borderRadius: "30px",
          color: "white",
          padding: "20px",
        }}
      >
        <span style={{ fontSize: "25px", color: "lightgreen" }}>
          250+ <br /> Partners <br />
        </span>
        <span style={{ fontSize: "15px", color: "white" }}>
          Finding top programmers is a <br />
          massive pain. Leasing bench <br />
          resources from Partner IT <br />
          companies is our USP, and the <br />
          turnaround time is just 1–5 days.
        </span>
      </div>
    </div>

    {/* Centered button below boxes */}
    <button
      style={{
        backgroundColor: "lightgreen",
        color: "white",
        padding: "10px 25px",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      HIRE DEVELOPERS
    </button>
  </div>
</div>
    
</div>
  );
}
