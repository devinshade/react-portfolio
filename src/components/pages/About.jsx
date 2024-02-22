// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

// TODO: About Me title and section are default page
export default function About() {
    return (
      <div>
        <h1>About Me</h1>
        <div className="hero-image">
            <img src="./assets/Headshot.jpeg" alt="Photo of Devin" width="150" height="auto"/>
        </div>
        <p>
          After 10 years of experience in Food and Beverage I started seeking a new career path and got the opportunity to work as an IT Asset Manager in 2021. Since then, I have worked in Procurement and Marketing/Sales but have continued building my technical background though the University of Texas Coding Bootcamp. TBC...
        </p>
      </div>
    );
  }