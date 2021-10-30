import './SidebarOption.css'
function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebar-option ${selected && 'sidebar-option--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
