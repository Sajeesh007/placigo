
export default function Skelton({size, height}) {
  return (
    <div className='flex flex-col space-y-4 w-full'>
        {size.map((item)=> <div key={item} className={`w-full bg-zinc-700 animate-pulse ${height} rounded-xl`}/>)} 
    </div> 
  )
}
