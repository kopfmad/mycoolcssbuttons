import '../styles.css'

export default function MyButton(props) {
  return (
    <div className="MyButton" id={props.id}>
      <p>Hover me</p>
    </div>
  )
}
