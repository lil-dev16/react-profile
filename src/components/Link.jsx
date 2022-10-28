
function Link(props) {
  return (
    <div className="link">
        <div id={props.nam}><a href={props.url} id={props.nam}>{props.title}</a></div>
        
    </div>
  )
}

export default Link