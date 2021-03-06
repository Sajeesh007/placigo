import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";


export default function StudentLayout({children}) {

  return (
    <div className='flex flex-col bg-indigo-600 relative h-screen'>
      <Header/>
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}
