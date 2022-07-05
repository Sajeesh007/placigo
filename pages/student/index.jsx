import CompanyCard from "@/components/Cards/CompanyCard"
import MainCard from "@/components/Cards/MainCard"
import StudentLayout from "@/modules/Layout/StudentLayout"

export default function StudentPage() {
  return (
    <div className="page-top">

        <div className="flex flex-col space-y-1">
            <h5 className="pl-4 py-2">Popular Companies</h5>
            <div className="flex overflow-x-auto w-screen">
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
            </div>
        </div>

        <div className="flex flex-col space-y-1">
            <h5 className="pl-4 py-2">Suggested Jobs</h5>
            <div className="flex flex-col space-y-6">
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
            </div>
        </div>
    </div>
  )
}


StudentPage.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
        {page}
      </StudentLayout>
    )
}