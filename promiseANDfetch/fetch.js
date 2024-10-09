
async function getData() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const output =  await response.json()
        console.log(output);
        
    } catch (error) {
        console.log("error occured");
        
    }
}
getData()