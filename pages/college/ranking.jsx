import CollegeLayout from "@/modules/Layout/CollegeLayout"


export default function CollegeRankingPage() {
  return (
    <div className="page-top items-center">
        <div className="flex justify-between items-center bg-indigo-600 w-72 h-12 rounded-full">
            <h6 className={`bg-white h-full text-indigo-600 flex items-center justify-center w-36 rounded-full`}>College</h6>
            <h6 className={`h-full text-white flex items-center justify-center w-36 rounded-full`}>Student</h6>
        </div>
    </div>
  )
}

CollegeRankingPage.getLayout = function getLayout(page) {
    return (
      <CollegeLayout>
        {page}
      </CollegeLayout>
    )
}
