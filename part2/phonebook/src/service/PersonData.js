import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const returnData =  axios.get(baseUrl);
    return returnData.then(response => response.data);
}

const create = newPerson => {
    const returnData  = axios.post(baseUrl, newPerson);
    return returnData.then(response => response.data)
}

const updateNumber = person => {
    const returnData  = axios.put(`${baseUrl}/${person.id}`, person);
    return returnData.then(response => response.data)
}

const deletePerson = id => {
    const returnData = axios.delete(`${baseUrl}/${id}`)
    // return getAll();
    return returnData.then(response => response.data)
}
export default { getAll, create, updateNumber, deletePerson}