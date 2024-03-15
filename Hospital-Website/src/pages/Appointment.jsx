import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AppointmentHero from "../components/AppointmentHero";
import AppointmentSearch from "../components/AppointmentSearch";
import Doctors from "../components/Doctors";

export default function Appointment() {
  const showExplore = false;

  return (
    <div>
      <NavBar showExplore={showExplore} />
      <AppointmentHero />
      <AppointmentSearch />
      <Doctors />
      <hr />
      <Footer />
    </div>
  );
}
