// A mock function to mimic making an async request for data
export function fetchAll() {
    const url = 'http://129.152.24.79/spellbook';
    return fetch(url).then((response) => {
        return response.json()
    })
}
  