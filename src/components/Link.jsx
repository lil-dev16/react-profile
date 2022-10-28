
function Link(props) {
  return (
    <div className="link">
        <div id={props.nam}><a href={props.url}>{props.title}</a></div>
        
    </div>
  )
}

export default Link