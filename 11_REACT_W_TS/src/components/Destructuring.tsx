import React from 'react'

interface Props {
    title: string
    content: string
    commentQty: number
    tags: string[]
    category: Category
}

export enum Category {
    JS = "Javascript",
    TS = "Typescript",
    PY = "Python",
}

const Destructuring = ({ title, content, commentQty, tags, category}: Props) => {
    return (
        <div>
            <h2>{title}</h2>    
            <p>{content}</p>
            <p>Quantidade de comentários: {commentQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h4>Categoria {category}</h4>
        </div>  
    )
}

export default Destructuring