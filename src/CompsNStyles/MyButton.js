import '../styles.css'

export default function MyButton(props) {
  return (
    <a className="MyButton" id={props.id} href="#">
      Hover me
    </a>
  )
}
