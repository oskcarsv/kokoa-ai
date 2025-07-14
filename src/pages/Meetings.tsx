import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import PillarsSection from "@/components/PillarsSection";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { motion } from 'framer-motion';

const Meetings = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Footer />
    </div>
  );
};

export default Meetings;