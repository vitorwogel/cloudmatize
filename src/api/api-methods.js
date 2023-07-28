export const getItems = () => {
    return fetch(
        '/getItems/'
    ).then(res => res.json())
}

export const addItem = (name, price, count) => {
    return fetch('/addItem/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify([{ name: name, price: price, count: count }])
    }).then(res => res.json())
};

export const addPerson = (name, email, total_spent) => {
    return fetch('/addPerson/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ name: name, email: email, total_spent: total_spent })
    }).then(res => res.json())
};