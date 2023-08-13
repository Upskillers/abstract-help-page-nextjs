import styles from '../styles/Home.module.css';

export default function Card(props){
    return (
        <a 
            href={props.link} 
            className="m-[1rem] basis-[45%] p-6 text-left border border-solid border-[#eaeaea] rounded-xl
            transition-colors duration-150 ease-in hover:bg-[#eaeaea]
            hover:text-[#0070f3] hover:border-[#0070f3]
            focus:text-[#0070f3] focus:border-[#0070f3]
            active:text-[#0070f3] active:border-[#0070f3]"
            >
            <h3 className='mb-[1rem] text-xl'>{props.heading}</h3>
            <p className='m-0 text-lg leading-[1.5]'>{props.description}</p>
        </a>
    )
}