const handleSubmit = (event) => {
    event.preventDefault()

    const nome = document.querySelector('input[name=Nome]').value
    const email = document.querySelector('input[name=Email]').value

    fetch('https://api.sheetmonkey.io/form/wX4ZozsizATSn7mkuuVzfx', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome: nome, email: email})
    })
}



document.querySelector('form').addEventListener('submit', handleSubmit)