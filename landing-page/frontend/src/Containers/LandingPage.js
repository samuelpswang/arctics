import Header from '../Components/Header';
import AboutUs from '../Components/AboutUs';
import Function from '../Components/Function';
import Members from '../Components/Members';
import ContactUs from '../Components/ContactUs';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Function />
        <Members />
        <ContactUs />
      </main>
    </>
  );
}

export default LandingPage;
