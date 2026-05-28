import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../utils/url';

interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  fees: number;
  about?: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onClick?: () => void;
}

const DoctorCard = ({ doctor, onClick }: DoctorCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    else navigate(`/booking/${doctor._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-200/30 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="bg-gradient-to-b from-blue-50 to-white h-52 flex items-end justify-center overflow-hidden relative">
        <img
          src={getImageUrl(doctor.image)}
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Availability dot */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-green-100 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-700 text-[10px] font-bold">Available</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-bold text-slate-900 truncate">{doctor.name}</p>
        <p className="text-blue-600 text-xs font-semibold mt-0.5">{doctor.speciality}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>🎓</span>
            <span>{doctor.experience}</span>
          </div>
          <span className="text-slate-900 font-bold text-sm">₨{doctor.fees}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
