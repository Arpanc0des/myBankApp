    
function KeyBtns(params){    
    return(
        <button onClick={params.click}>
            {params.label}
        </button>
    )
}

export default KeyBtns