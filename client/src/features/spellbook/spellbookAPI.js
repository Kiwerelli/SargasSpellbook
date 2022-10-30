// A mock function to mimic making an async request for data
export function fetchAll() {
    const url = 'http://localhost:5000/spellbook';
    return fetch(url).then((response) => {
        return response.json()
    })
}
  