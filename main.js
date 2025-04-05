console.log("hello world");

async function getNewDog() {
    const output = document.getElementById(div1);
    try {
        const response = await fetch("https://random.dog/woof.json");
        const url = await response.json();
        output.innerHTML = 
        console.log("getNewDog complete");
    } 
    catch (error) {
        console.log("getNewDog failed", error);
    }
}