export default function Card(props) {
  return (
    <a
      href={props.link}
      className="m-[1rem] basis-[45%] p-6 text-left
        border border-solid border-primary-50 rounded-xl
        transition-colors duration-150 ease-in hover:bg-secondary-50
        hover:text-secondary hover:border-secondary
        focus:text-secondary focus:border-secondary
        active:text-secondary active:border-secondary"
    >
      <h3 className='mb-[1rem] text-xl'>{props.heading}</h3>
      <p className='m-0 text-lg leading-[1.5]'>{props.description}</p>
    </a>
  )
}