

export default function IconItem({icon, handleRouting}) {
  return (
    <div onClick={handleRouting}>
        {icon}
    </div>
  )
}
