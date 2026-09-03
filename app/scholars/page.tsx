import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, GraduationCap, Award, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

const scholars = [
  {
    name: "Oludare Oyinnijesu Enoch",
    school: "Federal University of Technology Akure",
    level: "100 Level",
    faculty: "School of Electrical Systems Engineering",
    department: "Electrical and Electronics Engineering",
    phone: "09154196210",
    address: "P.M.B. 704, Akure, Ondo State, Nigeria",
    image: "/IMG-20260804-WA0044.jpg"
  },
  {
    name: "Umoren Divine Favour",
    school: "Federal University Oye Ekiti",
    level: "300 Level",
    faculty: "Education",
    department: "Chemistry Education",
    phone: "09060562048",
    address: "Royalty Hostel SY8 School Road, Oye Ekiti",
    image: "/IMG-20260804-WA0045.jpg"
  },
  {
    name: "Awodele Elizabeth Praise",
    school: "Ladoke Akintola University of Technology",
    level: "200 Level (Going to 300)",
    faculty: "Faculty of Management Sciences",
    department: "Business Administration",
    phone: "09060707382 / 08159713401",
    address: "Ogbomoso, Taki, Oyo State",
    image: "/IMG-20260804-WA0046.jpg"
  },
  {
    name: "Olatidoye Oluwafeyikemisola Deborah",
    school: "Tai Solarin Federal University of Education",
    level: "400 Level",
    faculty: "Education",
    department: "Adult Education Development",
    phone: "08025050445",
    address: "Ijagun, Ijebu Ode",
    image: "/IMG-20260804-WA0047.jpg"
  },
  {
    name: "Yahaya Mathew Sunday",
    school: "Federal University of Agriculture, Abeokuta",
    level: "500 Level",
    faculty: "COLPLANT",
    department: "Soil Science and Land Management",
    phone: "07061796990",
    address: "Alabata Road, Abeokuta",
    image: "/IMG-20260804-WA0050(1).jpg"
  },
  {
    name: "Clay Blessing Ayomide",
    school: "Tai Solarin College of Education (Affiliated with OOU)",
    level: "300 Level",
    faculty: "Voted",
    department: "Business Education",
    phone: "08052872846",
    address: "Omu Jobore",
    image: "/IMG-20260804-WA0057.jpg"
  },
  {
    name: "Ojo Michael Jibola",
    school: "Federal University of Agriculture, Abeokuta",
    level: "300 Level",
    faculty: "COLAMRUD",
    department: "Agriculture Economics and Farm Management",
    phone: "09121219206",
    address: "Alabata Road, FUNAAB, Abeokuta, Ogun State",
    image: "/IMG-20260804-WA0058.jpg"
  },
  {
    name: "Adesoye Oluwaseyi Veronica",
    school: "Maranatha University, Lagos",
    level: "400 Level",
    faculty: "Faculty of Pure and Applied Science",
    department: "Industrial Chemistry",
    phone: "08071862551",
    address: "Lagos, Nigeria",
    image: "/IMG-20260804-WA0061.jpg"
  },
  {
    name: "Owodunni Abosede Emmanuella",
    school: "Tai Solarin Federal University of Education (TASUED)",
    level: "300 Level",
    faculty: "Education",
    department: "Early Childhood Education",
    phone: "09158415182",
    address: "Dolphins Dive, Ijagun, Ijebu Ode, Ogun State",
    image: "/IMG-20260804-WA0062.jpg"
  },
  {
    name: "Adefuye Abosede Juliana",
    school: "Federal University of Agriculture and Development Studies, Iragbiji (FUADSI)",
    level: "Awaiting",
    faculty: "Faculty of Natural and Applied Sciences",
    department: "Department of Microbiology",
    phone: "09123716830",
    address: "University Road, Iragbiji, Osun State, Nigeria",
    image: "/IMG-20260804-WA0065.jpg"
  },
  {
    name: "Efunkoya Ifeoluwa Maria",
    school: "Tai Solarin Federal University of Education (TASUED)",
    level: "300 Level",
    faculty: "Education",
    department: "Library and Information Science",
    phone: "07078958091",
    address: "Ijagun, Ijebu Ode, Ogun State",
    image: "/IMG-20260804-WA0068.jpg"
  },
  {
    name: "Olakitan Olarewaju Sebastine",
    school: "Federal University of Benin, Edo State",
    level: "Awaiting Call-up Letter",
    faculty: "Social Science",
    department: "Political Science",
    phone: "07078767385",
    address: "Federal University of Benin, Ugbowo, Edo State",
    image: "/IMG-20260804-WA0070.jpg"
  },
  {
    name: "Adjarho Miracle Efeoghene",
    school: "Lagos State University",
    level: "200 Level",
    faculty: "Management Sciences",
    department: "Business Administration",
    phone: "09136580160",
    address: "Lagos-Badagry Expressway, Ojo, Lagos",
    image: "/IMG-20260804-WA0078.jpg"
  },
  {
    name: "Odedeji Damilola Elizabeth",
    school: "Federal University Oye Ekiti",
    level: "300 Level",
    faculty: "Education",
    department: "Chemistry Education",
    phone: "09138455452",
    address: "Idofin Street, Oye Ekiti",
    image: "/IMG-20260804-WA0083.jpg"
  },
  {
    name: "Kadiri Joy Ayomide",
    school: "Maranatha University, Lagos",
    level: "400 Level",
    faculty: "Faculty of Art, Management and Social Science",
    department: "Economics",
    phone: "08083746437",
    address: "Lagos, Nigeria",
    image: "/IMG-20260804-WA0106.jpg"
  },
  {
    name: "Iwezua Joy",
    school: "Ambrose Alli University",
    level: "Awaiting",
    faculty: "Life Science",
    department: "Biochemistry",
    phone: "09154446568",
    address: "Ekpoma, Benin City",
    image: "/IMG-20260804-WA0107.jpg"
  },
  {
    name: "Onafuye Hannah Anuoluwapo",
    school: "Tai Solarin Federal University of Education",
    level: "200 Level",
    faculty: "Education",
    department: "Early Childhood Education",
    phone: "07034429859",
    address: "Ijagun, Ijebu Ode, Ogun State",
    image: "/IMG-20260804-WA0108.jpg"
  },
  {
    name: "Abraham Susan Ayomide",
    school: "Tai Solarin Federal University of Education",
    level: "Awaiting",
    faculty: "Education",
    department: "Early Childhood Education",
    phone: "09168965808",
    address: "Tai-Solarin Federal University Of Education, Ijagun, Ijebuode",
    image: "/IMG-20260804-WA0134.jpg"
  },
  {
    name: "Obong Victory Edikan",
    school: "Tai Solarin Federal University of Education",
    level: "Awaiting",
    faculty: "Education",
    department: "English Education",
    phone: "07043875181",
    address: "Ijagun, Ijebu Ode, Ogun State",
    image: "/IMG-20260805-WA0028.jpg"
  },
  {
    name: "Orovwigho Oghenetejiri Wisdom",
    school: "Federal University of Petroleum Resources Effurun, Delta",
    level: "200 Level",
    faculty: "College of Engineering and Technology",
    department: "Natural Gas Engineering",
    phone: "09054229731",
    address: "Warri, Delta State",
    image: "/IMG-20260805-WA0031(1).jpg"
  },
  {
    name: "Umoren Wealth",
    school: "Federal University Oye-Ekiti (FUOYE)",
    level: "200 Level",
    faculty: "Life Science",
    department: "Environmental Management and Toxicology",
    phone: "08061933899",
    address: "Royalty Hostel SY8 Oye Ekiti School Road",
    image: "/IMG-20260805-WA0032.jpg"
  }
];

export default function UniversityScholarsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-4">
            <GraduationCap className="w-3.5 h-3.5" /> Higher Education & Tertiary Program
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">University & Tertiary Scholars</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base">
            Empowering our brilliant graduates from the RACO basic education system as they transition into universities, polytechnics, and colleges of education to pursue professional degrees.
          </p>
        </div>

        {/* Featured Impact Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
          <div className="lg:col-span-7 space-y-4 relative z-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Tertiary Education Sponsorship
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">Fueling Higher Academic Ambitions</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transitioning from secondary school to a university comes with heavy financial hurdles for orphaned and rural youth. Our tertiary scholarship fund helps cover tuition, acceptance fees, books, and accommodation so they can focus entirely on bagging their degrees.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-lg-end relative z-10">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Heart className="w-4 h-4 fill-slate-950" /> Support a University Scholar
            </Link>
          </div>
        </div>

        {/* University Scholars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {scholars.map((scholar, index) => (
            <div key={index} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              {/* Image Container */}
              <div className="relative h-64 bg-slate-200 overflow-hidden">
                <Image 
                  src={scholar.image} 
                  alt={scholar.name} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-lg shadow z-10">
                  {scholar.level}
                </span>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
                    <Award className="w-3.5 h-3.5" /> {scholar.department}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{scholar.name}</h3>
                  
                  <div className="space-y-1.5 text-xs text-slate-600 mb-6">
                    <p className="font-semibold text-slate-800">{scholar.school}</p>
                    <p><span className="text-slate-400">Faculty:</span> {scholar.faculty}</p>
                    <p className="flex items-start gap-1 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" /> 
                      <span>{scholar.address}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Scholar
                  </span>
                  <Link
                    href="/donate"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Support <Heart className="w-3 h-3 fill-amber-600" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
    }
          
