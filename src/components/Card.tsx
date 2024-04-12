interface ICard{
    id:number,
    paragraph:string,
    details:string
}

export const Card = ({id,paragraph,details}:ICard) =>{
    return(
        <div>
            <h1>Card {id}</h1>
            <h3>Parágrafo: {paragraph}</h3>
            <p>{details}</p>
        </div>
    )
}