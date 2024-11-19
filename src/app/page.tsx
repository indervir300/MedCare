import CareInformationSection from "@/components/dashboard_info";
import DoctorInfo from "@/components/doctor_info";
import FeaturedDoctors from "@/components/featured_doctors";
import Heading from "@/components/heading";
import HospitalDetailsPage from "@/components/hospital_details";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <div className="bg-blue-50 pt-16 dark:bg-gray-900"> {/* Added a blue background and vertical padding */}
      <Heading />
      <CareInformationSection />
      <HospitalDetailsPage />
      <FeaturedDoctors />
      <DoctorInfo />
      <Newsletter />
    </div>
  );
}