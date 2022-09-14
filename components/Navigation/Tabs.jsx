
export default function Tabs({data, hanldeRouting, route}) {

  return (
    <div className='flex justify-between items-center bg-zinc-900 h-14 rounded-2xl  border-2 border-indigo-600 text-white '>
        {data.map((item, index) => 
            <div key={item.route} className={` h-14 flex items-center justify-center w-1/2 rounded-2xl
                ${index == 0 ? 'rounded-r-none' : 'rounded-l-none'}
                text-xl font-bold ${ route.slice(9,route.length) == item.route && 'text-white bg-indigo-600'}`}
                onClick={()=> hanldeRouting(item.route)}>
                {item.name}
            </div>
        )}
    </div>
  )
}
