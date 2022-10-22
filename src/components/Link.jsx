
function Link(props) {
  return (
    <div className="link">
        <button id={props.nam}><a href={props.url}>{props.title}</a></button>
        
    </div>
  )
}

export default Link