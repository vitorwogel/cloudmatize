export const getItems = () => {
    return fetch(
        '/getItems/'
    ).then(res => res.json())
}

export const addItem = (item) => {
    return fetch('/addItem/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ name: item.name, price: item.price, count: item.count })
    }).then(res => res.json())
};

export const addPerson = (person) => {
    return fetch('/addPerson/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ name: person.name, email: person.email, total_spent: person.total_spent, items: person.frutas })
    }).then(res => res.json())
};