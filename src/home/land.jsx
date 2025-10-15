import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; // ✅ MUST IMPORT THIS
import DeveloperDonutChart from './chart'; // updated import

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          backgroundColor: "#E7FCE5",
          display: "flex",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        <div className="row w-100 align-items-center">
          {/* LEFT TEXT COLUMN */}
          <div className="col-md-6 col-sm-12 text-start">
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "#000",
              }}
            >
              Build Your Dream Tech Team
              <br />
              <span style={{ color: "#0E8A00" }}>in Just 48 Hours</span>
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
              style={{ borderRadius: "8px", fontSize: "18px" }}
            >
              Hire Developers
            </button>
          </div>

          {/* RIGHT IMAGE COLUMN */}
          <div
            className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BLRimQNatgYjAQ17qOVBF09FgWhmFaed4Q&s"
              alt="Team working"
              className="rounded mt-5"
              style={{
                width: "100%",
                height: "80vh",
                objectFit: "cover",
                borderLeft: "8px solid #BFFF00",
                boxShadow: "0 0 25px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </div>

      {/* BELOW SECTION WITH BACKGROUND COLOR */}
      <div
        className="w-100"
        style={{
          backgroundColor: "#4bf2a4ff",
          height: "200px",
          display: "flex",
          alignItems: "center",
        }}
      >
   <Container
  className="d-flex justify-content-center align-items-center gap-5 flex-wrap"
  style={{ height: "250px" }} // ⬅️ increased height
>
  {[
    {
      src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a1ec88dfb02dcee44e29_48.png",
      text: "Profiles\n48 Hrs",
    },
    {
      src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a2161e83a3c7b233afed_re.png",
      text: "Pre-Vetted\nProfiles",
    },
    {
      src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63b5a252603862dad30cf874_7.png",
      text: "7 Days\nRisk-Free Trial",
    },
    {
      src: "https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/63bc10c304cd88addd66ee10_Time-Zone.png",
      text: "Time Zone\nAligned",
    },
  ].map((item, index) => (
    <div key={index} className="text-center">
      <img
        src={item.src}
        alt={`Logo ${index + 1}`}
        style={{ width: "150px", height: "auto",paddingtop:"30px" }}
      />
      <div
        className="fw-semibold text-light"
        style={{ marginTop: "10px", lineHeight: "1.4" }} 
      >
        {item.text.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  ))}
</Container>

      </div>


      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <div style={{ marginLeft: "200px", fontSize: "25px", fontWeight: "bold" }}>
            Build Your Dream Team With Expertise
            <br /> in Every Tech Stack
          </div>
          <div style={{ marginLeft: "200px" }}>
            From Node to Java, AWS to Airtable, we will get the right
            <br />
            skilled engineer to join your organization
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <img
            src="https://cdn.prod.website-files.com/62fe7df122d31a02e9e1bd35/642d29acf5ea22b55f682acc_1.png"
            style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            alt="Example"
          />
        </div>
      </div>
      <div style={{ fontSize: "30px", textAlign: "center", fontWeight: "bold" }}>
        1000 +<br />
        Developers Available on Bench
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "350px", height: "350px" }}>
          <DeveloperDonutChart />
        </div>
      </div>
    </>
  );
}
